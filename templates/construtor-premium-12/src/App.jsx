import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
premium: {
beige: '#b7a99a',
dark: '#0a0a0a',
gray: '#171717',
light: '#f5f5f5',
border: '#e5e5e5'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em',
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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="block" href="#">

<img alt="Construtora Premium" className="h-9 w-auto object-contain" src="https://placehold.co/180x45/0a0a0a/ffffff?text=CONSTRUTORA"/>
</a>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-stone-600">
<a className="hover:text-black transition-colors" href="#diferenciais">Diferenciais</a>
<a className="hover:text-black transition-colors" href="#metodologia">Metodologia</a>
<a className="hover:text-black transition-colors" href="#projetos">Obras</a>
<a className="hover:text-black transition-colors" href="#arquitetos">Para Arquitetos</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-black text-white px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-premium-beige transition-colors duration-300" href="#contato">
                ESTUDO INICIAL
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-black">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 bg-premium-dark text-white overflow-hidden">

<div className="absolute inset-0 z-0 opacity-40">

<img alt="Obra de alto padrão" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-premium-dark via-premium-dark/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8 fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full text-xs font-medium tracking-wide text-premium-beige">
<span className="w-1.5 h-1.5 rounded-full bg-premium-beige"></span>
                    ESPECIALISTAS EM ALTO PADRÃO
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                    Construção com <br/>
<span className="text-premium-beige">previsibilidade</span> <br/>
                    absoluta.
                </h1>
<p className="text-xl text-stone-400 font-light max-w-lg leading-relaxed">
                    Materializamos projetos complexos com gestão profissional, acabamento técnico refinado e cumprimento rigoroso de prazos e orçamento.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-3 bg-premium-beige text-black px-8 py-4 text-base font-semibold tracking-tight hover:bg-white transition-colors duration-300" href="#contato">
                        SOLICITAR ESTUDO DE OBRA
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-3 px-8 py-4 text-base font-medium tracking-tight text-white border border-white/20 hover:border-white transition-colors duration-300" href="#metodologia">
                        Conhecer metodologia
                    </a>
</div>
<div className="pt-12 flex items-center gap-12 border-t border-white/10">
<div>
<p className="text-3xl font-medium tracking-tight text-white">+60</p>
<p className="text-sm text-stone-500 uppercase tracking-wide mt-1">Obras Executadas</p>
</div>
<div>
<p className="text-3xl font-medium tracking-tight text-white">+10k</p>
<p className="text-sm text-stone-500 uppercase tracking-wide mt-1">M² Construídos</p>
</div>
<div>
<p className="text-3xl font-medium tracking-tight text-white">100%</p>
<p className="text-sm text-stone-500 uppercase tracking-wide mt-1">No Prazo</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-5">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-6">
                        Excelência exige <br/>foco e renúncia.
                    </h2>
<p className="text-lg text-stone-600 leading-relaxed font-light">
                        Não somos uma construtora generalista. Para garantir o nível de entrega que nossos clientes exigem, escolhemos cuidadosamente onde atuar. Nossa estrutura é otimizada exclusivamente para a complexidade e o refino do alto padrão.
                    </p>
</div>
<div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="bg-stone-50 p-8 border border-stone-100">
<iconify-icon className="text-premium-beige mb-4" icon="lucide:check-circle" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-2">Onde atuamos</h3>
<ul className="space-y-3 text-base text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Construção residencial de alto padrão</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Construção comercial premium</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Projetos complexos (300m² a 1.500m²)</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Gestão completa (Turnkey)</li>
</ul>
</div>
<div className="bg-white p-8 border border-stone-200 opacity-60 hover:opacity-100 transition-opacity">
<iconify-icon className="text-stone-400 mb-4" icon="lucide:x-circle" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-2 text-stone-500">O que não fazemos</h3>
<ul className="space-y-3 text-base text-stone-500">
<li className="flex items-center gap-2">Pequenas reformas e reparos</li>
<li className="flex items-center gap-2">Obras públicas ou industriais</li>
<li className="flex items-center gap-2">Obras em shoppings</li>
<li className="flex items-center gap-2">Projetos "Minha Casa Minha Vida"</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="diferenciais">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-sm font-semibold tracking-widest text-premium-beige uppercase mb-2 block">Segurança e Transparência</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
                    A engenharia contra o caos da obra.
                </h2>
<p className="mt-4 text-lg text-stone-600 font-light">
                    Transformamos as maiores angústias de quem constrói em processos controlados e previsíveis.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-stone-50 rounded-lg group-hover:bg-premium-beige/10 transition-colors">
<iconify-icon className="text-stone-900" icon="lucide:trending-up" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Orçamento Blindado</h3>
<p className="text-base text-stone-500 leading-relaxed mb-4">
<span className="line-through opacity-50 block mb-1">Aditivos surpresa e custos ocultos.</span>
                        Orçamento detalhado em planilha aberta, com gestão de compras e previsibilidade de fluxo de caixa.
                    </p>
<div className="w-full h-px bg-stone-100 my-4"></div>
<p className="text-xs font-medium text-premium-beige tracking-wide">ZERO SURPRESAS FINANCEIRAS</p>
</div>

<div className="bg-white p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-stone-50 rounded-lg group-hover:bg-premium-beige/10 transition-colors">
<iconify-icon className="text-stone-900" icon="lucide:calendar-clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Cronograma Realista</h3>
<p className="text-base text-stone-500 leading-relaxed mb-4">
<span className="line-through opacity-50 block mb-1">Atrasos intermináveis e desculpas.</span>
                        Planejamento técnico executivo, cronograma físico-financeiro e relatórios semanais de avanço.
                    </p>
<div className="w-full h-px bg-stone-100 my-4"></div>
<p className="text-xs font-medium text-premium-beige tracking-wide">DATA DE ENTREGA RESPEITADA</p>
</div>

<div className="bg-white p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-stone-50 rounded-lg group-hover:bg-premium-beige/10 transition-colors">
<iconify-icon className="text-stone-900" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Técnica &amp; Acabamento</h3>
<p className="text-base text-stone-500 leading-relaxed mb-4">
<span className="line-through opacity-50 block mb-1">Erros de execução e retrabalho.</span>
                        Equipe própria treinada, acompanhamento integral de engenharia e controle de qualidade rigoroso.
                    </p>
<div className="w-full h-px bg-stone-100 my-4"></div>
<p className="text-xs font-medium text-premium-beige tracking-wide">GARANTIA DE 5 ANOS</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="metodologia">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-sm font-semibold tracking-widest text-premium-beige uppercase mb-2 block">Nossa Metodologia</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-8">
                        Do executivo à chave na mão.<br/> Sem improviso.
                    </h2>
<div className="space-y-8 relative">
<div className="absolute left-3.5 top-2 bottom-6 w-px bg-stone-200"></div>
<div className="relative flex gap-6">
<div className="flex-none w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold relative z-10 ring-4 ring-white">1</div>
<div>
<h4 className="text-xl font-medium text-stone-900">Planejamento &amp; Viabilidade</h4>
<p className="text-stone-500 text-base mt-2 leading-relaxed">
                                    Análise profunda dos projetos, compatibilização técnica para evitar conflitos, levantamento quantitativo preciso e definição de cronograma físico-financeiro.
                                </p>
</div>
</div>
<div className="relative flex gap-6">
<div className="flex-none w-8 h-8 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center text-xs font-semibold relative z-10 ring-4 ring-white">2</div>
<div>
<h4 className="text-xl font-medium text-stone-900">Gestão &amp; Execução</h4>
<p className="text-stone-500 text-base mt-2 leading-relaxed">
                                    Canteiro de obras organizado. Compras programadas. Engenheiro residente. Relatórios fotográficos semanais enviados via app ou WhatsApp para o cliente.
                                </p>
</div>
</div>
<div className="relative flex gap-6">
<div className="flex-none w-8 h-8 rounded-full bg-premium-beige text-black flex items-center justify-center text-xs font-semibold relative z-10 ring-4 ring-white">3</div>
<div>
<h4 className="text-xl font-medium text-stone-900">Entrega Técnica &amp; Pós-Obra</h4>
<p className="text-stone-500 text-base mt-2 leading-relaxed">
                                    Vistoria minuciosa de acabamentos. Entrega do Manual do Proprietário. Garantia estrutural e suporte técnico contínuo.
                                </p>
</div>
</div>
</div>
<div className="mt-12">
<a className="text-base font-semibold tracking-tight border-b border-black pb-0.5 hover:text-premium-beige hover:border-premium-beige transition-colors" href="#contato">
                            Agendar reunião técnica de apresentação
                        </a>
</div>
</div>
<div className="relative h-[600px] bg-stone-100 overflow-hidden">
<img alt="Acabamento fino" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 border-l-2 border-premium-beige">
<p className="text-base text-stone-800 font-medium italic">"A tranquilidade de saber que o porcelanato de grande formato será assentado com a técnica correta e que o projeto de iluminação será seguido à risca. Isso é inegociável."</p>
<div className="flex items-center gap-3 mt-4">
<div className="text-sm font-semibold text-stone-400 uppercase tracking-wider">Depoimento de Cliente</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950 text-white" id="projetos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Portfólio Selecionado</h2>
<p className="text-stone-400 font-light max-w-md text-lg">Uma curadoria de projetos que demonstram nossa capacidade técnica e atenção aos detalhes.</p>
</div>
<a className="text-base text-premium-beige border border-premium-beige/30 px-6 py-2 hover:bg-premium-beige hover:text-black transition-colors" href="#contato">
                    Ver mais obras
                </a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">

<div className="group relative aspect-[4/5] overflow-hidden bg-stone-900 cursor-pointer">
<img alt="Casa Conceito Eusébio" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-xs font-medium text-premium-beige tracking-widest uppercase mb-2">Eusébio - CE</p>
<h3 className="text-2xl font-medium text-white">Residência Alphaville</h3>
<p className="text-stone-400 text-base mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">450m² • Neoclássico • 12 meses</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden bg-stone-900 cursor-pointer">
<img alt="Casa Moderna Fortim" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-xs font-medium text-premium-beige tracking-widest uppercase mb-2">Fortim - CE</p>
<h3 className="text-2xl font-medium text-white">Casa de Praia Verano</h3>
<p className="text-stone-400 text-base mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">600m² • Contemporâneo • 14 meses</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden bg-stone-900 cursor-pointer">
<img alt="Mansão Fortaleza" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-xs font-medium text-premium-beige tracking-widest uppercase mb-2">Fortaleza - CE</p>
<h3 className="text-2xl font-medium text-white">Penthouse Beira Mar</h3>
<p className="text-stone-400 text-base mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">320m² • Reforma Total • 8 meses</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 border-t border-stone-200" id="arquitetos">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white p-12 md:p-20 border border-stone-200 shadow-sm md:flex md:gap-16 items-center">
<div className="md:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold tracking-wide text-stone-600 mb-6">
<iconify-icon icon="lucide:pen-tool" width="14"></iconify-icon>
                        ÁREA DO ARQUITETO
                    </div>
<h2 className="text-3xl font-semibold tracking-tight text-black mb-6">
                        Seu projeto executado sem distorções.
                    </h2>
<p className="text-stone-600 text-lg mb-6 leading-relaxed">
                        Sabemos que sua maior dor é ver a construtora alterar especificações ou falhar no acabamento, comprometendo seu portfólio.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-base text-stone-700 font-medium">
<iconify-icon className="text-premium-beige" icon="lucide:check"></iconify-icon>
                            Fidelidade absoluta ao projeto executivo
                        </li>
<li className="flex items-center gap-3 text-base text-stone-700 font-medium">
<iconify-icon className="text-premium-beige" icon="lucide:check"></iconify-icon>
                            Resolução técnica de incompatibilidades
                        </li>
<li className="flex items-center gap-3 text-base text-stone-700 font-medium">
<iconify-icon className="text-premium-beige" icon="lucide:check"></iconify-icon>
                            Política clara de Reserva Técnica (RT)
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-black text-base font-semibold tracking-tight border-b-2 border-premium-beige hover:text-premium-beige transition-colors pb-1" href="#contato">
                        Seja um parceiro cadastrado
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="md:w-1/2 mt-12 md:mt-0 relative">
<div className="aspect-square bg-stone-200 relative overflow-hidden">
<img alt="Arquiteto em obra" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Perguntas Frequentes</h2>
<div className="space-y-4">
<details className="group bg-stone-50 p-6 border border-stone-100 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-lg text-stone-900">
                        Como funciona o orçamento e o controle de custos?
                        <span className="transform group-open:rotate-180 transition-transform text-premium-beige">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-base text-stone-600 leading-relaxed pl-1 border-l-2 border-premium-beige ml-1">
                        Trabalhamos com orçamento detalhado (Analítico) antes do início da obra. Apresentamos uma planilha aberta com todos os custos de materiais e mão de obra. Durante a obra, você recebe comparativos de Previsto x Realizado mensalmente.
                    </div>
</details>
<details className="group bg-stone-50 p-6 border border-stone-100 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-lg text-stone-900">
                        Qual o prazo médio para uma casa de alto padrão?
                        <span className="transform group-open:rotate-180 transition-transform text-premium-beige">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-base text-stone-600 leading-relaxed pl-1 border-l-2 border-premium-beige ml-1">
                        Para residências entre 300m² e 600m², o prazo médio varia de 12 a 16 meses, dependendo da complexidade do projeto estrutural e dos acabamentos. Esse prazo é definido contratualmente após análise do projeto.
                    </div>
</details>
<details className="group bg-stone-50 p-6 border border-stone-100 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-lg text-stone-900">
                        Vocês já possuem projetos ou constroem o meu projeto?
                        <span className="transform group-open:rotate-180 transition-transform text-premium-beige">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-base text-stone-600 leading-relaxed pl-1 border-l-2 border-premium-beige ml-1">
                        Somos uma construtora executora. Trabalhamos em parceria com seu arquiteto para executar o projeto dele. Caso ainda não tenha arquiteto, podemos indicar parceiros de confiança que se alinham ao seu estilo.
                    </div>
</details>
<details className="group bg-stone-50 p-6 border border-stone-100 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-lg text-stone-900">
                        Qual é a garantia oferecida?
                        <span className="transform group-open:rotate-180 transition-transform text-premium-beige">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-base text-stone-600 leading-relaxed pl-1 border-l-2 border-premium-beige ml-1">
                        Oferecemos 5 anos de garantia estrutural e garantias específicas para instalações e acabamentos, conforme manual do proprietário e normas da ABNT. Temos uma equipe dedicada apenas para assistência técnica pós-obra.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-premium-dark text-white border-t border-stone-900" id="contato">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                        Vamos falar sobre <br/> o seu legado?
                    </h2>
<p className="text-stone-400 font-light text-xl mb-12 max-w-md">
                        Agenda aberta para início de obras no próximo trimestre. Solicite uma análise de viabilidade ou agende uma reunião presencial.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-2 bg-stone-800 rounded">
<iconify-icon className="text-premium-beige" icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-white">Escritório</h4>
<p className="text-stone-400 text-base mt-1">Av. Dom Luís, 1200 - Meireles<br/>Fortaleza, CE</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-stone-800 rounded">
<iconify-icon className="text-premium-beige" icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contato Direto</h4>
<p className="text-stone-400 text-base mt-1">+55 (85) 99999-9999<br/>contato@construtora.com.br</p>
</div>
</div>
</div>
</div>
<div className="bg-white text-stone-900 p-8 md:p-10">
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-semibold uppercase tracking-wide mb-2 text-stone-500">Nome</label>
<input className="w-full bg-stone-50 border border-stone-200 p-3 text-base focus:outline-none focus:border-black transition-colors" placeholder="Seu nome completo" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold uppercase tracking-wide mb-2 text-stone-500">Telefone</label>
<input className="w-full bg-stone-50 border border-stone-200 p-3 text-base focus:outline-none focus:border-black transition-colors" placeholder="(85) 99999-9999" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold uppercase tracking-wide mb-2 text-stone-500">Perfil</label>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-2 cursor-pointer p-3 border border-stone-200 bg-stone-50 hover:bg-white">
<input className="accent-black w-4 h-4" name="perfil" type="radio"/>
<span className="text-base">Sou Proprietário</span>
</label>
<label className="flex items-center gap-2 cursor-pointer p-3 border border-stone-200 bg-stone-50 hover:bg-white">
<input className="accent-black w-4 h-4" name="perfil" type="radio"/>
<span className="text-base">Sou Arquiteto</span>
</label>
</div>
</div>
<div>
<label className="block text-sm font-semibold uppercase tracking-wide mb-2 text-stone-500">Local da Obra</label>
<select className="w-full bg-stone-50 border border-stone-200 p-3 text-base focus:outline-none focus:border-black transition-colors">
<option>Selecione a localização</option>
<option>Fortaleza</option>
<option>Eusébio</option>
<option>Aquiraz</option>
<option>Litoral (Preá, Fortim, etc)</option>
<option>Outros</option>
</select>
</div>
<button className="w-full bg-black text-white py-4 text-base font-semibold tracking-wide hover:bg-premium-beige transition-colors duration-300 flex items-center justify-center gap-2 mt-4" type="submit">
                            SOLICITAR ESTUDO DA OBRA
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<p className="text-center text-sm text-stone-400 mt-4">
                            Seus dados estão protegidos. Retornamos em até 24h úteis.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black text-stone-500 py-12 border-t border-white/10 text-base">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

<div className="block">

<img alt="Construtora Premium" className="h-8 w-auto object-contain opacity-90" src="https://placehold.co/180x40/transparent/fff?text=LOGO+FOOTER"/>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">WhatsApp</a>
</div>
<div className="text-sm">
                © 2023 Construtora Premium. Todos os direitos reservados.
            </div>
</div>
</footer>

    </>
  );
}
