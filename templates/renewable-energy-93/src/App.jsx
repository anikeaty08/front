import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
primary: '#8CC63F', // Lime green from image
secondary: '#0B3B42', // Dark teal from image
surface: '#F0F5F4', // Light mint bg
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 left-0 right-0 z-50 py-6 text-white text-sm font-medium">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="hidden md:flex space-x-8">
<a className="hover:text-primary transition-colors" href="#">Início</a>
<a className="hover:text-primary transition-colors" href="#">Sobre nós</a>
<a className="hover:text-primary transition-colors" href="#">Sustentabilidade</a>
</div>
<div className="text-center">
<div className="uppercase tracking-widest text-lg font-light leading-none">Parque Eólico</div>
<div className="uppercase tracking-widest text-sm font-semibold leading-none text-slate-300">De Moncorvo</div>
</div>
<div className="hidden md:flex space-x-8">
<a className="hover:text-primary transition-colors" href="#">Licenças</a>
<a className="hover:text-primary transition-colors" href="#">Números</a>
<a className="hover:text-primary transition-colors" href="#">Contactos</a>
</div>

<button className="md:hidden">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Wind Turbines" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-end pb-20 pt-32">
<div className="space-y-8">
<h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-semibold tracking-tight leading-[1.1]">
                    Energia eólica para Portugal com benefícios reais
                </h1>
<p className="text-white/80 text-lg max-w-xl font-light">
                    Produzimos energia renovável, evitamos 83.275 toneladas de CO₂ por ano e trabalhamos com a comunidade para acelerar a transição energética.
                </p>
<div className="flex items-center space-x-6 pt-4">
<button className="bg-primary hover:bg-lime-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                        Conheça o projeto
                    </button>
<a className="text-white text-sm font-medium border-b border-white/40 hover:border-white pb-0.5 transition-colors" href="#">
                        Entre em contacto
                    </a>
</div>
</div>
<div className="lg:flex lg:justify-end">
<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 max-w-md w-full text-white">
<div className="mb-4 text-white/80">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="cloud"></i>
</div>
<div className="text-4xl font-semibold tracking-tight mb-1">83.275t CO₂</div>
<div className="text-sm text-white/70 font-light">Evitadas por ano com a nossa produção de energia!</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
                    Uma empresa comprometida com a transição energética
                </h2>
<div className="space-y-6 text-slate-500 font-light">
<p>
                        A <strong className="font-medium text-slate-700">Parque Eólico de Moncorvo Lda</strong> é uma empresa portuguesa especializada em <strong className="font-medium text-slate-700">energia eólica onshore e solar</strong>. O nosso objetivo é claro: gerar energia limpa com o mínimo impacto, promovendo emprego e investimento local.
                    </p>
<p>
                        Trabalhamos em estreita parceria com comunidades, proprietários de terras, empresas regionais e entidades públicas.
                    </p>
<p>
                        Cumprimos os <strong className="font-medium text-slate-700">Princípios do Equador</strong>, assegurando que cada decisão respeita as pessoas e o planeta. Cada projeto que desenvolvemos é pensado para gerar impacto positivo duradouro.
                    </p>
</div>
<button className="bg-primary hover:bg-lime-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors mt-4">
                    Saiba mais sobre nós
                </button>
</div>
<div className="relative">
<div className="rounded-3xl overflow-hidden h-[500px] w-full relative">
<img alt="Landscape" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-gradient-to-br from-primary/80 to-primary/20 rounded-full blur-2xl opacity-60"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-secondary text-white relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<i className="absolute top-10 left-10 w-96 h-96 stroke-[0.5]" data-lucide="wind"></i>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">O Parque Eólico de Morgavel</h2>
<p className="text-white/70 font-light">
                    O nosso projeto foi dimensionado para produzir energia limpa com elevada eficiência e integração no território. A solução combina <strong className="font-medium text-white">desempenho energético com baixa pegada no terreno</strong>.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
<div className="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-6">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div className="text-4xl font-semibold mb-2">3</div>
<div className="text-sm text-white/60 font-light">Aerogeradores Nordex N163/5.X</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
<div className="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-6">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<div className="text-4xl font-semibold mb-2">19,8 MW</div>
<div className="text-sm text-white/60 font-light">Capacidade instalada</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
<div className="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-6">
<i className="w-5 h-5" data-lucide="cable"></i>
</div>
<div className="text-4xl font-semibold mb-2">8 kV</div>
<div className="text-sm text-white/60 font-light">Rede interna</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
<div className="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-6">
<i className="w-5 h-5" data-lucide="power"></i>
</div>
<div className="text-4xl font-semibold mb-2">112 kV</div>
<div className="text-sm text-white/60 font-light">Ligação à SE Sines (REN) / RNT</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 order-last lg:order-first">
<h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
                    Um projeto pensado para todos
                </h2>
<div className="space-y-6 text-slate-500 font-light">
<p>
                        O Parque Eólico de Morgavel não é apenas tecnologia: é uma <strong className="font-medium text-slate-700">solução energética</strong> que combina eficiência, segurança e respeito pelo ambiente.
                    </p>
<p>
                        O nosso projeto garante <strong className="font-medium text-slate-700">energia limpa para todos</strong>, com responsabilidade em cada etapa.
                    </p>
</div>
<button className="bg-primary hover:bg-lime-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors mt-4">
                    Leia o resumo completo
                </button>
</div>
<div className="relative order-first lg:order-last">
<div className="rounded-3xl overflow-hidden h-[400px] w-full">
<img alt="Wind Turbines Forest" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=2232&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight mb-6">Um projeto aprovado e monitorizado</h2>
<p className="text-slate-500 font-light text-base">
                    O Parque Eólico de Morgavel <strong className="font-medium text-slate-700">cumpre todos os requisitos legais e ambientais</strong>. Isto garante que cada fase, da construção à desativação, é acompanhada de medidas rigorosas de minimização e compensação ambiental.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="bg-white rounded-2xl p-8 text-center shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="mx-auto w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center text-primary mb-6">
<i className="w-6 h-6" data-lucide="file-text"></i>
</div>
<span className="inline-block bg-secondary text-white text-xs font-medium px-3 py-1 rounded-full mb-4">2020</span>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">Declaração de Impacto Ambiental (DIA)</h3>
<p className="text-xs text-slate-400">Aprovação ambiental do projeto</p>
</div>

<div className="bg-white rounded-2xl p-8 text-center shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="mx-auto w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center text-primary mb-6">
<i className="w-6 h-6" data-lucide="check-circle"></i>
</div>
<span className="inline-block bg-secondary text-white text-xs font-medium px-3 py-1 rounded-full mb-4">2022</span>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">Decisão de Conformidade Ambiental do Projeto de Execução (DCAPE)</h3>
<p className="text-xs text-slate-400">Conformidade do projeto final</p>
</div>

<div className="bg-white rounded-2xl p-8 text-center shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
<div className="mx-auto w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center text-primary mb-6">
<i className="w-6 h-6" data-lucide="sprout"></i>
</div>
<span className="inline-block bg-secondary text-white text-xs font-medium px-3 py-1 rounded-full mb-4">Vigente</span>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">Título Único Ambiental (TUA)</h3>
<p className="text-xs text-slate-400">Validável no portal SILIAMB</p>
</div>
</div>
<div className="text-center">
<button className="bg-primary hover:bg-lime-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                    Consulte a documentação
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight mb-6">Energia que faz a diferença</h2>
<p className="text-slate-500 font-light text-base">
                    Todos os anos, o Parque Eólico de Morgavel vai gerar <strong className="font-medium text-slate-700">185.046 MWh</strong> de energia limpa, evitando a emissão de cerca de <strong className="font-medium text-slate-700">83.275 toneladas de CO₂</strong>. Isto equivale a <strong className="font-medium text-slate-700">3.8 milhões de árvores necessárias</strong> para absorver a mesma quantidade de CO2.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
<img alt="Wind Turbine" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
<i className="w-4 h-4 text-white" data-lucide="zap"></i>
</div>
<div className="text-2xl font-semibold tracking-tight">185 056 MWh/ano</div>
<div className="text-xs text-white/70 font-light mt-1">Energia limpa gerada</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
<img alt="Forest" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
<i className="w-4 h-4 text-white" data-lucide="cloud"></i>
</div>
<div className="text-2xl font-semibold tracking-tight">83 275t CO2</div>
<div className="text-xs text-white/70 font-light mt-1">Emissões evitadas por ano</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
<img alt="Road Trees" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
<i className="w-4 h-4 text-white" data-lucide="tree-pine"></i>
</div>
<div className="text-2xl font-semibold tracking-tight">3 800 000</div>
<div className="text-xs text-white/70 font-light mt-1">Equivalente em árvores por ano</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface relative">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none overflow-hidden">

<div className="w-[800px] h-[800px] border border-secondary rounded-full absolute -right-20 top-20"></div>
<div className="w-[600px] h-[600px] border border-secondary rounded-full absolute -right-10 top-40"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

<div className="space-y-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tight mb-8">
                        Quer colaborar ou saber mais sobre o projeto?
                    </h2>
</div>
<div className="space-y-8">
<div>
<div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Email</div>
<a className="text-xl md:text-2xl text-slate-700 hover:text-primary transition-colors" href="mailto:geral@parqueeolicomoncorvo.pt">
                            geral@parqueeolicomoncorvo.pt
                        </a>
</div>
<div className="w-full h-px bg-slate-200"></div>
<div>
<div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Contacto</div>
<a className="text-xl md:text-2xl text-slate-700 hover:text-primary transition-colors" href="tel:+351967306168">
                            +351 967 306 168
                        </a>
</div>
<div className="w-full h-px bg-slate-200"></div>
<div>
<div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Horário</div>
<div className="text-xl md:text-2xl text-slate-700">
                            Dias úteis das 9h às 18h
                        </div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm relative z-10">
<h3 className="text-2xl font-semibold text-secondary mb-8">Envie-nos uma mensagem direta!</h3>
<form className="space-y-8">
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">Nome*</label>
<input className="w-full border-b border-slate-200 py-2 text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300 text-sm" placeholder="Ex: Márcia Maia" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">Email*</label>
<input className="w-full border-b border-slate-200 py-2 text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300 text-sm" placeholder="Ex: email@email.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">Telefone*</label>
<input className="w-full border-b border-slate-200 py-2 text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300 text-sm" placeholder="Ex: 916 195 035" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">Assunto*</label>
<div className="relative">
<select className="w-full border-b border-slate-200 py-2 text-slate-900 focus:outline-none focus:border-primary transition-colors bg-transparent appearance-none text-sm">
<option>Qual o motivo do contacto?</option>
<option>Informações Gerais</option>
<option>Recrutamento</option>
<option>Outro</option>
</select>
<i className="absolute right-0 top-2 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">Mensagem*</label>
<textarea className="w-full border-b border-slate-200 py-2 text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300 resize-none text-sm" placeholder="Utilize este campo para escrever a sua mensagem." rows="2"></textarea>
</div>
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" id="privacy" type="checkbox"/>
<label className="text-xs text-slate-500" htmlFor="privacy">Li e compreendi a <a className="underline hover:text-slate-700" href="#">Política de Privacidade*</a></label>
</div>
<button className="w-full bg-primary hover:bg-lime-600 text-white py-4 rounded-xl text-sm font-medium transition-colors shadow-sm" type="submit">
                        Enviar mensagem
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-secondary text-white/60 py-8 text-xs font-medium">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left">
<span>Copyright © Parque Eólico de Moncorvo 2025</span>
<span className="hidden md:inline text-white/20">|</span>
<span>Developed By <a className="text-white hover:underline" href="#">SUBA.PT</a></span>
</div>
<div className="flex space-x-6">
<a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Política de Cookies</a>
<a className="hover:text-white transition-colors" href="#">Resolução de Litígios</a>
<a className="hover:text-white transition-colors" href="#">Livro de reclamações</a>
</div>
</div>
</footer>


    </>
  );
}
