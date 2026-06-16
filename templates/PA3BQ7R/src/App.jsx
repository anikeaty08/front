import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    document.addEventListener('DOMContentLoaded', () => {
      // Inicializa ícones Lucide
      lucide.createIcons({strokeWidth:1.5});

      // Aplica animação 'reveal' quando elementos entram na viewport
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {threshold:0.2});

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-lg shadow-sm">
<a className="text-lg font-semibold tracking-tight" href="#">Relax Prime</a>
<a className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 transition" href="https://wa.me/5511999999999?text=Quero%20agendar%20minha%20sessão" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="message-circle"></i>
      Agendar no WhatsApp
    </a>
</header>

<section className="relative pt-32 pb-24">
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-white"></div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight reveal">
          O relaxamento que você merece começa aqui
        </h1>
<p className="mt-6 text-lg sm:text-xl text-neutral-700 reveal" style={{animationDelay: '.15s'}}>
          Sessões personalizadas de terapia, entrega de equipamentos premium e um atendimento que entende o que seu corpo precisa.
        </p>
<div className="mt-10 flex flex-wrap gap-4 reveal" style={{animationDelay: '.3s'}}>
<a className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-emerald-700 transition" href="#showcase">
            Ver Opções
            <i className="w-5 h-5" data-lucide="list"></i>
</a>
<a className="inline-flex items-center gap-2 border border-emerald-600/30 px-8 py-3 rounded-lg hover:border-emerald-600 hover:bg-emerald-50 transition" href="https://wa.me/5511999999999?text=Quero%20agendar%20minha%20sessão" rel="noopener" target="_blank">
            Agendar Agora
            <i className="w-5 h-5" data-lucide="zap"></i>
</a>
</div>
</div>
<div className="relative reveal" style={{animationDelay: '.15s'}}>
<div className="overflow-hidden rounded-[32px] ring-1 ring-neutral-200/60 shadow-xl shadow-neutral-300/40">
<img alt="Pessoa relaxando em massagem" className="w-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-32" id="showcase">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight reveal">
        Escolha a terapia ideal — ou combine todas para um resultado profundo
      </h2>
<p className="mt-6 text-lg text-neutral-600 reveal" style={{animationDelay: '.1s'}}>
        Cada modalidade foi elaborada por especialistas em bem-estar para atacar dores específicas, reduzir estresse e restaurar a vitalidade.
      </p>
</div>

<div className="mt-24 flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto px-6 reveal">
<div className="overflow-hidden rounded-[28px] ring-1 ring-neutral-200/60 shadow-xl shadow-neutral-300/40 md:w-1/2">
<img alt="Terapias Manuais" className="w-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="md:w-1/2">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Terapias Manuais</h3>
<p className="mt-4 text-neutral-700 text-lg">
          Toques profundos que desfazem nós de tensão, liberam a fáscia e restauram o fluxo energético natural do corpo.
        </p>
<ul className="mt-6 space-y-3 text-neutral-700 text-lg">
<li className="flex gap-3"><i className="w-5 h-5 text-emerald-500" data-lucide="dot"></i>Liberação Miofascial</li>
<li className="flex gap-3"><i className="w-5 h-5 text-emerald-500" data-lucide="dot"></i>Reflexologia Podal</li>
<li className="flex gap-3"><i className="w-5 h-5 text-emerald-500" data-lucide="dot"></i>Ventosaterapia Detox</li>
<li className="flex gap-3"><i className="w-5 h-5 text-emerald-500" data-lucide="dot"></i>Quick Massage Corporativa</li>
</ul>
<div className="mt-8 flex gap-4">
<a className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-neutral-800 transition" href="https://wa.me/5511999999999?text=Quero%20Terapias%20Manuais" rel="noopener" target="_blank">
            Agendar sessão
            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 border border-neutral-300 px-6 py-3 rounded-lg hover:bg-neutral-50 transition" href="#detalhes-manuais">
            Detalhes
            <i className="w-5 h-5" data-lucide="chevron-down"></i>
</a>
</div>
</div>
</div>

<div className="mt-24 flex flex-col md:flex-row-reverse items-center gap-16 max-w-6xl mx-auto px-6 reveal" style={{animationDelay: '.1s'}}>
<div className="overflow-hidden rounded-[28px] ring-1 ring-neutral-200/60 shadow-xl shadow-neutral-300/40 md:w-1/2">
<img alt="Terapias Integrativas" className="w-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="md:w-1/2">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Terapias Integrativas</h3>
<p className="mt-4 text-neutral-700 text-lg">
          Integram aroma, calor e movimentos envolventes para induzir um estado de relaxamento profundo e restaurador.
        </p>
<ul className="mt-6 space-y-3 text-neutral-700 text-lg">
<li className="flex gap-3"><i className="w-5 h-5 text-emerald-500" data-lucide="flame"></i>Pedras Vulcânicas Quentes</li>
<li className="flex gap-3"><i className="w-5 h-5 text-emerald-500" data-lucide="droplet"></i>Candle Massage Aromática</li>
<li className="flex gap-3"><i className="w-5 h-5 text-emerald-500" data-lucide="smile"></i>Massagem Relaxante Clássica</li>
</ul>
<div className="mt-8 flex gap-4">
<a className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-neutral-800 transition" href="https://wa.me/5511999999999?text=Quero%20Terapias%20Integrativas" rel="noopener" target="_blank">
            Agendar sessão
            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 border border-neutral-300 px-6 py-3 rounded-lg hover:bg-neutral-50 transition" href="#detalhes-integrativas">
            Detalhes
            <i className="w-5 h-5" data-lucide="chevron-down"></i>
</a>
</div>
</div>
</div>

<div className="mt-24 flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto px-6 reveal" style={{animationDelay: '.2s'}}>
<div className="overflow-hidden rounded-[28px] ring-1 ring-neutral-200/60 shadow-xl shadow-neutral-300/40 md:w-1/2">
<img alt="Cuidados Capilares" className="w-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="md:w-1/2">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Cuidados Capilares</h3>
<p className="mt-4 text-neutral-700 text-lg">
          Técnicas ancestrais indianas combinadas a nutrição profunda para couro cabeludo saudável e fios radiantes.
        </p>
<ul className="mt-6 space-y-3 text-neutral-700 text-lg">
<li className="flex gap-3"><i className="w-5 h-5 text-emerald-500" data-lucide="leaf"></i>Indian Head Massage</li>
<li className="flex gap-3"><i className="w-5 h-5 text-emerald-500" data-lucide="droplets"></i>Hidratação Profunda</li>
<li className="flex gap-3"><i className="w-5 h-5 text-emerald-500" data-lucide="star"></i>Corte Feminino Premium</li>
</ul>
<div className="mt-8 flex gap-4">
<a className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-neutral-800 transition" href="https://wa.me/5511999999999?text=Quero%20Cuidados%20Capilares" rel="noopener" target="_blank">
            Agendar sessão
            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 border border-neutral-300 px-6 py-3 rounded-lg hover:bg-neutral-50 transition" href="#detalhes-capilares">
            Detalhes
            <i className="w-5 h-5" data-lucide="chevron-down"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight reveal">
        Não sabe qual terapia escolher?
      </h2>
<p className="mt-4 text-neutral-700 text-lg reveal" style={{animationDelay: '.05s'}}>
        Agende uma consulta gratuita de 10 min via WhatsApp. Avaliamos suas dores, rotina e objetivos para indicar a melhor experiência.
      </p>
<a className="mt-10 inline-flex items-center gap-2 bg-emerald-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-emerald-500 transition reveal" href="https://wa.me/5511999999999?text=Preciso%20de%20ajuda%20para%20escolher%20minha%20terapia" rel="noopener" style={{animationDelay: '.1s'}} target="_blank">
        Descobrir Minha Terapia
        <i className="w-6 h-6" data-lucide="search"></i>
</a>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center reveal">
        Detalhes que tornam cada sessão única
      </h2>
<div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
<div className="p-6 rounded-xl ring-1 ring-neutral-200/60 bg-white hover:shadow-lg transition reveal">
<i className="w-8 h-8 text-emerald-600 mb-4" data-lucide="droplet"></i>
<h3 className="text-xl font-medium">Óleos Essenciais de Grau Terapêutico</h3>
<p className="mt-2 text-neutral-600 text-sm">Lavanda, eucalipto e ylang-ylang prensados a frio, 100% puros.</p>
</div>
<div className="p-6 rounded-xl ring-1 ring-neutral-200/60 bg-white hover:shadow-lg transition reveal" style={{animationDelay: '.05s'}}>
<i className="w-8 h-8 text-emerald-600 mb-4" data-lucide="sparkles"></i>
<h3 className="text-xl font-medium">Técnicas Autorais</h3>
<p className="mt-2 text-neutral-600 text-sm">Protocolos criados pela Susan após 12 anos de pesquisa em fisioterapia.</p>
</div>
<div className="p-6 rounded-xl ring-1 ring-neutral-200/60 bg-white hover:shadow-lg transition reveal" style={{animationDelay: '.1s'}}>
<i className="w-8 h-8 text-emerald-600 mb-4" data-lucide="sliders"></i>
<h3 className="text-xl font-medium">Personalização Total</h3>
<p className="mt-2 text-neutral-600 text-sm">Pressão, aromas e tempo de cada etapa ajustados ao seu gosto.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 reveal">
<div className="overflow-hidden rounded-[28px] ring-1 ring-neutral-200/60 shadow-xl shadow-neutral-300/40 lg:w-1/2">
<img alt="Susan Antunes" className="w-full object-cover" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&amp;fit=crop&amp;w=1080&amp;q=80"/>
</div>
<div className="lg:w-1/2">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Conheça Susan Antunes</h2>
<p className="mt-4 text-neutral-700 text-lg">
          Fisioterapeuta especialista em terapias integrativas, Susan reúne ciência e sensibilidade para criar experiências de cura. Com mais de 4.000 horas de atendimento e formações internacionais, ela acredita que o toque consciente pode transformar vidas.
        </p>
<p className="mt-4 text-neutral-700 text-lg">
          Sua missão? Ajudar você a viver sem dores, com disposição e equilíbrio emocional — tudo de forma natural e personalizada.
        </p>
<a className="mt-8 inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-emerald-500 transition" href="https://wa.me/5511999999999?text=Quero%20conversar%20com%20a%20Susan" rel="noopener" target="_blank">
          Conversar com Susan
          <i className="w-5 h-5" data-lucide="user"></i>
</a>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-4xl mx-auto px-6">
<blockquote className="text-center text-2xl sm:text-3xl font-medium leading-relaxed italic text-neutral-800 reveal">
        “Buscamos aliviar dores e cultivar serenidade através de técnicas criadas para o seu corpo, a sua história e o seu momento.”
      </blockquote>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight reveal">
      Pronto para sentir a diferença na primeira sessão?
    </h2>
<p className="mt-4 text-neutral-300 max-w-xl mx-auto reveal" style={{animationDelay: '.05s'}}>
      Fale agora mesmo pelo WhatsApp e garanta sua consulta personalizada gratuita.
    </p>
<a className="mt-10 inline-flex items-center gap-2 bg-emerald-600 px-10 py-4 rounded-full shadow-lg hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition reveal" href="https://wa.me/5511999999999?text=Quero%20minha%20consulta%20personalizada" rel="noopener" style={{animationDelay: '.1s'}} target="_blank">
      Iniciar Conversa
      <i className="w-6 h-6" data-lucide="arrow-right-circle"></i>
</a>
</section>

<section className="py-32" id="detalhes">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Veja cada terapia em detalhes</h2>
<p className="mt-4 text-neutral-600 text-lg">Entenda exatamente como cada técnica atua, seus benefícios e para quem é indicada.</p>
</div>
</section>




    </>
  );
}
