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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        document.addEventListener('DOMContentLoaded', () => {
            const faqItems = document.querySelectorAll('.faq-item');

            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                const icon = item.querySelector('.transform-icon');

                question.addEventListener('click', () => {
                    const isOpen = answer.style.maxHeight;

                    document.querySelectorAll('.faq-answer').forEach(a => {
                        a.style.maxHeight = null;
                        a.style.opacity = '0';
                    });
                    document.querySelectorAll('.transform-icon').forEach(i => {
                        i.style.transform = 'rotate(0deg)';
                    });

                    if (!isOpen) {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                        answer.style.opacity = '1';
                        icon.style.transform = 'rotate(45deg)';
                    }
                });
            });
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
      
<nav className="fixed top-0 w-full bg-white border-b border-[#E8EDEB] z-50 transition-all">
<div className="max-w-7xl mx-auto px-5 md:px-12 h-20 flex items-center justify-between">
<a className="font-serif font-medium text-2xl tracking-tight text-[#0D4A35]" href="#">
                Evanice Rocha
            </a>
<div className="hidden lg:flex items-center gap-8">
<a className="relative text-base font-normal text-gray-700 hover:text-[#0D4A35] transition-colors group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:-bottom-1 after:left-0 after:bg-[#0D4A35] after:origin-bottom-right after:transition-transform after:duration-250 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left" href="#sintomas">Sintomas</a>
<a className="relative text-base font-normal text-gray-700 hover:text-[#0D4A35] transition-colors group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:-bottom-1 after:left-0 after:bg-[#0D4A35] after:origin-bottom-right after:transition-transform after:duration-250 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left" href="#tratamento">Tratamento</a>
<a className="relative text-base font-normal text-gray-700 hover:text-[#0D4A35] transition-colors group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:-bottom-1 after:left-0 after:bg-[#0D4A35] after:origin-bottom-right after:transition-transform after:duration-250 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left" href="#sobre">Sobre o Hospital</a>
<a className="relative text-base font-normal text-gray-700 hover:text-[#0D4A35] transition-colors group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:-bottom-1 after:left-0 after:bg-[#0D4A35] after:origin-bottom-right after:transition-transform after:duration-250 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left" href="#localizacao">Localização</a>
<a className="relative text-base font-normal text-gray-700 hover:text-[#0D4A35] transition-colors group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:-bottom-1 after:left-0 after:bg-[#0D4A35] after:origin-bottom-right after:transition-transform after:duration-250 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-[#0D4A35] text-white rounded-lg px-6 py-2.5 text-base font-normal hover:bg-opacity-90 transition-all" href="#agendar">
                Agendar Consulta
            </a>
<button className="lg:hidden text-[#0D4A35]">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>
<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#F0F7F4] to-[#F8F6F1]">
<div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-[55%] z-10">
<div className="inline-flex items-center rounded-full border border-[#0D4A35]/30 px-3 py-1 mb-6">
<span className="text-xs font-medium text-[#0D4A35] uppercase tracking-widest">Cuidado e Acolhimento</span>
</div>
<h1 className="font-serif font-medium text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[#0D4A35] mb-6">
                    Você sente uma <span className="text-[#C9A84C]">dor</span> que ninguém consegue explicar?
                </h1>
<p className="text-lg md:text-xl leading-relaxed text-gray-500 max-w-[480px] mb-10">
                    A fibromialgia é uma condição real, reconhecida pela medicina, que exige atenção especializada e um cuidado que vai além do remédio. No Hospital Evanice Rocha, em Camaçari, você encontra uma equipe preparada para te ouvir, investigar e acompanhar com responsabilidade.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center justify-center bg-[#0D4A35] text-white rounded-lg px-7 py-3.5 text-base md:text-lg font-normal hover:bg-opacity-90 transition-all gap-2 group" href="#agendar">
                        Agendar minha avaliação médica
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center text-base md:text-lg font-normal text-[#0D4A35] hover:text-[#C9A84C] transition-colors mt-2 sm:mt-0 underline underline-offset-4 decoration-[#0D4A35]/30 hover:decoration-[#C9A84C]" href="#">
                        Falar com a equipe pelo WhatsApp
                    </a>
</div>
</div>
<div className="w-full lg:w-[45%] relative mt-12 lg:mt-0">
<img alt="Mulher sentada na cama sentindo dor e desconforto, abraçando a si mesma" className="w-full h-[400px] lg:h-[540px] object-cover rounded-tl-[24px] rounded-br-[24px] shadow-2xl shadow-[#0D4A35]/10" src="https://images.unsplash.com/photo-1505027492977-1037f14c46fa?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-4 md:p-5 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex items-center gap-4 border border-gray-100">
<div className="w-12 h-12 bg-[#E8F5F0] rounded-xl flex items-center justify-center text-[#0D4A35] shrink-0">
<i className="w-6 h-6" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-base font-normal text-[#1A1A2E] tracking-tight">Atendimento Humanizado</p>
<p className="text-sm text-gray-500 mt-0.5">Camaçari, BA</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#F8F6F1]" id="sintomas">
<div className="max-w-7xl mx-auto px-5 md:px-12">
<h2 className="font-serif font-medium text-4xl md:text-5xl tracking-tight text-[#0D4A35]">
                Você se identifica com algum desses sinais?
            </h2>
<div className="w-[60px] h-[4px] bg-[#C9A84C] mt-5 mb-8"></div>
<p className="text-lg text-[#4A5568] max-w-2xl mb-16 leading-relaxed">
                A fibromialgia é, muitas vezes, uma condição invisível. Quem a vive carrega sintomas que nem sempre aparecem em exames, mas que impactam profundamente o dia a dia. Se você convive com:
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
<div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-[#E8F5F0] flex items-center justify-center text-[#0D4A35] mb-6">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-[#1A1A2E] mb-3 tracking-tight">Dor generalizada pelo corpo</h3>
<p className="text-base text-[#4A5568] leading-relaxed">Dor constante espalhada acima e abaixo da cintura, que persiste por semanas ou meses.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-[#E8F5F0] flex items-center justify-center text-[#0D4A35] mb-6">
<i className="w-6 h-6" data-lucide="moon" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-[#1A1A2E] mb-3 tracking-tight">Cansaço intenso e sono</h3>
<p className="text-base text-[#4A5568] leading-relaxed">Você dorme, mas acorda sem energia, como se o descanso nunca fosse suficiente.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-[#E8F5F0] flex items-center justify-center text-[#0D4A35] mb-6">
<i className="w-6 h-6" data-lucide="brain" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-[#1A1A2E] mb-3 tracking-tight">Dificuldade de concentração</h3>
<p className="text-base text-[#4A5568] leading-relaxed">Lapsos de memória e névoa mental que dificultam o raciocínio e o foco no dia a dia.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-[#E8F5F0] flex items-center justify-center text-[#0D4A35] mb-6">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-[#1A1A2E] mb-3 tracking-tight">Sensibilidade exagerada</h3>
<p className="text-base text-[#4A5568] leading-relaxed">Hipersensibilidade ao toque, à temperatura, à luz ou ao barulho ao seu redor.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-[#E8F5F0] flex items-center justify-center text-[#0D4A35] mb-6">
<i className="w-6 h-6" data-lucide="frown" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-[#1A1A2E] mb-3 tracking-tight">Ansiedade e humor</h3>
<p className="text-base text-[#4A5568] leading-relaxed">Episódios frequentes de ansiedade, irritabilidade ou tristeza associados à dor crônica.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-[#E8F5F0] flex items-center justify-center text-[#0D4A35] mb-6">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-[#1A1A2E] mb-3 tracking-tight">Rigidez muscular ao acordar</h3>
<p className="text-base text-[#4A5568] leading-relaxed">Sensação de corpo travado pela manhã que melhora ao longo do dia, mas que retorna.</p>
</div>
</div>
<div className="max-w-3xl mx-auto text-center">
<p className="italic text-lg text-[#4A5568] mb-8">
                    "Esses sinais merecem uma avaliação médica adequada. O diagnóstico correto é o primeiro passo para entender o que está acontecendo com o seu corpo."
                </p>
<a className="inline-flex items-center justify-center bg-white border-[1.5px] border-[#0D4A35] text-[#0D4A35] rounded-lg px-7 py-3.5 text-base md:text-lg font-normal hover:bg-gray-50 transition-all gap-2 group" href="#agendar">
                    Quero agendar uma avaliação
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>
<section className="py-24 bg-[#0D4A35]" id="tratamento">
<div className="max-w-7xl mx-auto px-5 md:px-12">
<h2 className="font-serif font-medium text-4xl md:text-5xl tracking-tight text-white">
                O que a medicina sabe sobre o tratamento da fibromialgia
            </h2>
<div className="w-[60px] h-[4px] bg-[#C9A84C] mt-5 mb-8"></div>
<p className="text-xl text-gray-200 max-w-3xl mb-4 leading-relaxed">
                A fibromialgia é uma condição crônica — não existe cura definitiva conhecida. Mas existe controle. E controle bem feito permite uma vida ativa, produtiva e com qualidade.
            </p>
<p className="text-xs font-medium text-[#C9A84C] uppercase tracking-widest mb-12">
                O tratamento eficaz é sempre multidisciplinar
            </p>
<div className="flex flex-col gap-4 mb-12">
<div className="group flex flex-col md:flex-row items-start md:items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#C9A84C] transition-colors"></div>
<div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-[#C9A84C] shrink-0">
<i className="w-7 h-7" data-lucide="stethoscope" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Acompanhamento Reumatológico</h3>
<p className="text-base text-gray-300 leading-relaxed">Para avaliação clínica, diagnóstico e definição do protocolo mais adequado. O diagnóstico é feito pelo médico, com base nos sintomas — não em exames de sangue ou imagem.</p>
</div>
</div>
<div className="group flex flex-col md:flex-row items-start md:items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#C9A84C] transition-colors"></div>
<div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-[#C9A84C] shrink-0">
<i className="w-7 h-7" data-lucide="person-standing" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Atividade Física Orientada</h3>
<p className="text-base text-gray-300 leading-relaxed">Considerada pela Sociedade Brasileira de Reumatologia como uma das principais intervenções. Caminhada e hidroginástica contribuem significativamente para o controle da dor.</p>
</div>
</div>
<div className="group flex flex-col md:flex-row items-start md:items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#C9A84C] transition-colors"></div>
<div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-[#C9A84C] shrink-0">
<i className="w-7 h-7" data-lucide="brain" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Suporte Psicológico</h3>
<p className="text-base text-gray-300 leading-relaxed">A relação entre fibromialgia, ansiedade e depressão é bem documentada. O acompanhamento psicológico ajuda a gerenciar os gatilhos emocionais que intensificam os sintomas.</p>
</div>
</div>
<div className="group flex flex-col md:flex-row items-start md:items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#C9A84C] transition-colors"></div>
<div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-[#C9A84C] shrink-0">
<i className="w-7 h-7" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Medicação Quando Indicada</h3>
<p className="text-base text-gray-300 leading-relaxed">O uso de medicamentos é definido pelo médico, caso a caso, com foco no alívio dos sintomas e na melhora da qualidade de vida.</p>
</div>
</div>
</div>
<div className="bg-[#105e43] border-l-4 border-[#C9A84C] p-6 rounded-r-xl mb-10 max-w-3xl">
<p className="text-base text-gray-100 leading-relaxed">
                    Cada caso de fibromialgia é único. O tratamento é individual e deve ser ajustado continuamente com acompanhamento médico adequado.
                </p>
</div>
<a className="inline-flex items-center justify-center bg-[#C9A84C] text-[#0D4A35] rounded-lg px-7 py-3.5 text-base md:text-lg font-medium hover:bg-opacity-90 transition-all gap-2 group" href="#agendar">
                Agendar avaliação no Hospital Evanice Rocha
                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>
<section className="py-24 bg-[#F8F6F1]" id="sobre">
<div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<p className="text-xs font-medium text-[#C9A84C] uppercase tracking-widest mb-4">Quem Somos</p>
<h2 className="font-serif font-medium text-4xl md:text-5xl tracking-tight text-[#0D4A35]">
                    Cuidado com responsabilidade, em Camaçari
                </h2>
<div className="w-[60px] h-[4px] bg-[#C9A84C] mt-5 mb-8"></div>
<div className="space-y-6 text-lg text-[#4A5568] leading-relaxed mb-10">
<p>O Hospital Evanice Rocha é uma referência em saúde na Região Metropolitana de Salvador, com estrutura preparada para oferecer atendimento médico com foco em escuta, acolhimento e acompanhamento responsável.</p>
<p>Acreditamos que tratar bem começa por ouvir com atenção. Por isso, nosso atendimento é orientado por critérios técnicos e éticos, com profissionais comprometidos em orientar cada paciente com clareza e segurança.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3 text-base text-[#1A1A2E] font-normal">
<i className="text-[#C9A84C] w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i>
                        Estrutura hospitalar completa
                    </div>
<div className="flex items-center gap-3 text-base text-[#1A1A2E] font-normal">
<i className="text-[#C9A84C] w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i>
                        Corpo clínico qualificado
                    </div>
<div className="flex items-center gap-3 text-base text-[#1A1A2E] font-normal">
<i className="text-[#C9A84C] w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i>
                        Atendimento humanizado
                    </div>
<div className="flex items-center gap-3 text-base text-[#1A1A2E] font-normal">
<i className="text-[#C9A84C] w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i>
                        Protocolos baseados em evidências
                    </div>
</div>
</div>
<div className="w-full lg:w-1/2">
<img alt="Interior moderno do hospital" className="w-full h-[500px] object-cover rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)]" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</section>
<section className="py-24 bg-[#0D4A35]" id="localizacao">
<div className="max-w-7xl mx-auto px-5 md:px-12">
<h2 className="font-serif font-medium text-4xl md:text-5xl tracking-tight text-white">
                Atendimento especializado perto de você
            </h2>
<div className="w-[60px] h-[4px] bg-[#C9A84C] mt-5 mb-8"></div>
<p className="text-xl text-gray-200 max-w-3xl mb-16 leading-relaxed">
                Localizado em Camaçari, o Hospital Evanice Rocha atende pacientes da cidade e de toda a Região Metropolitana de Salvador — sem a necessidade de deslocamentos longos e desgastantes até a capital para buscar cuidado especializado.
            </p>
<div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
<div className="w-full lg:w-[40%] flex flex-col justify-center">
<div className="space-y-8 mb-10">
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#C9A84C] shrink-0">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-medium text-white uppercase tracking-wider mb-1">Endereço</h4>
<p className="text-base text-gray-300 leading-relaxed">Rua Principal, 123 - Centro<br/>Camaçari, BA - CEP 42800-000</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#C9A84C] shrink-0">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-medium text-white uppercase tracking-wider mb-1">Telefone / WhatsApp</h4>
<p className="text-base text-gray-300 leading-relaxed">(71) 3621-0000<br/>(71) 99999-0000</p>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center bg-[#C9A84C] text-[#0D4A35] rounded-lg px-7 py-3.5 text-base md:text-lg font-medium hover:bg-opacity-90 transition-all gap-2 group w-fit" href="#">
                        Agendar pelo WhatsApp
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="w-full lg:w-[60%] h-[400px] rounded-2xl border-[3px] border-white/20 overflow-hidden relative bg-[#E8EDEB]">
<div className="absolute inset-0 flex items-center justify-center text-[#4A5568] flex-col gap-2 opacity-50">
<i className="w-12 h-12" data-lucide="map" strokeWidth="1.5"></i>
<span className="text-base font-normal uppercase tracking-widest">Mapa Google Embutido</span>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#F8F6F1]" id="faq">
<div className="max-w-3xl mx-auto px-5 md:px-12">
<h2 className="font-serif font-medium text-4xl md:text-5xl tracking-tight text-[#0D4A35]">
                Perguntas frequentes
            </h2>
<div className="w-[60px] h-[4px] bg-[#C9A84C] mt-5 mb-12"></div>
<div className="space-y-2">
<div className="faq-item border-b border-[#E8EDEB] py-5 cursor-pointer group">
<div className="flex justify-between items-center faq-question">
<h3 className="font-normal text-[#1A1A2E] text-lg md:text-xl tracking-tight group-hover:text-[#0D4A35] transition-colors">Fibromialgia tem cura?</h3>
<i className="text-[#0D4A35] transition-transform duration-300 transform-icon shrink-0 w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="faq-answer overflow-hidden max-h-0 transition-all duration-300 ease-out opacity-0">
<p className="pt-4 pb-2 text-[#4A5568] text-base md:text-lg leading-relaxed">Não existe cura definitiva conhecida até o momento. Porém, com acompanhamento médico adequado e mudanças no estilo de vida, é possível controlar os sintomas e manter uma rotina ativa com qualidade de vida.</p>
</div>
</div>
<div className="faq-item border-b border-[#E8EDEB] py-5 cursor-pointer group">
<div className="flex justify-between items-center faq-question">
<h3 className="font-normal text-[#1A1A2E] text-lg md:text-xl tracking-tight group-hover:text-[#0D4A35] transition-colors">Como é feito o diagnóstico?</h3>
<i className="text-[#0D4A35] transition-transform duration-300 transform-icon shrink-0 w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="faq-answer overflow-hidden max-h-0 transition-all duration-300 ease-out opacity-0">
<p className="pt-4 pb-2 text-[#4A5568] text-base md:text-lg leading-relaxed">O diagnóstico é clínico. Não existe exame de sangue ou de imagem que identifique a fibromialgia. O médico avalia os sintomas relatados, o histórico do paciente e descarta outras condições antes de fechar o diagnóstico.</p>
</div>
</div>
<div className="faq-item border-b border-[#E8EDEB] py-5 cursor-pointer group">
<div className="flex justify-between items-center faq-question">
<h3 className="font-normal text-[#1A1A2E] text-lg md:text-xl tracking-tight group-hover:text-[#0D4A35] transition-colors">O tratamento é só com medicamentos?</h3>
<i className="text-[#0D4A35] transition-transform duration-300 transform-icon shrink-0 w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="faq-answer overflow-hidden max-h-0 transition-all duration-300 ease-out opacity-0">
<p className="pt-4 pb-2 text-[#4A5568] text-base md:text-lg leading-relaxed">Não. O tratamento mais eficaz combina acompanhamento médico, atividade física orientada, suporte psicológico e, quando indicado, medicação. Cada plano de cuidado é definido individualmente.</p>
</div>
</div>
<div className="faq-item border-b border-[#E8EDEB] py-5 cursor-pointer group">
<div className="flex justify-between items-center faq-question">
<h3 className="font-normal text-[#1A1A2E] text-lg md:text-xl tracking-tight group-hover:text-[#0D4A35] transition-colors">Quanto tempo leva para ter um diagnóstico?</h3>
<i className="text-[#0D4A35] transition-transform duration-300 transform-icon shrink-0 w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="faq-answer overflow-hidden max-h-0 transition-all duration-300 ease-out opacity-0">
<p className="pt-4 pb-2 text-[#4A5568] text-base md:text-lg leading-relaxed">A fibromialgia pode levar tempo para ser identificada, pois seus sintomas se confundem com outras condições. Por isso, uma avaliação médica especializada desde o início faz diferença no caminho para o diagnóstico correto.</p>
</div>
</div>
<div className="faq-item border-b border-[#E8EDEB] py-5 cursor-pointer group">
<div className="flex justify-between items-center faq-question">
<h3 className="font-normal text-[#1A1A2E] text-lg md:text-xl tracking-tight group-hover:text-[#0D4A35] transition-colors">Como agendar uma consulta?</h3>
<i className="text-[#0D4A35] transition-transform duration-300 transform-icon shrink-0 w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="faq-answer overflow-hidden max-h-0 transition-all duration-300 ease-out opacity-0">
<p className="pt-4 pb-2 text-[#4A5568] text-base md:text-lg leading-relaxed">Basta clicar no botão de agendamento nesta página ou entrar em contato diretamente pelo WhatsApp. Nossa equipe orienta sobre disponibilidade e próximos passos.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#0D4A35] text-center">
<div className="max-w-4xl mx-auto px-5 md:px-12 flex flex-col items-center">
<h2 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6">
                Você não precisa continuar sem resposta.
            </h2>
<p className="text-lg md:text-xl text-gray-200 max-w-[560px] leading-relaxed mb-10">
                Buscar uma avaliação médica é o passo mais importante para entender o que está acontecendo — e para iniciar um acompanhamento adequado para a sua realidade.
            </p>
<div className="flex flex-col items-center gap-5 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C9A84C] text-[#0D4A35] rounded-lg px-8 py-4 text-lg font-medium hover:bg-opacity-90 transition-all gap-2 group shadow-lg shadow-black/10" href="#agendar">
                    Agendar minha avaliação
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="text-base font-normal text-white hover:text-[#C9A84C] transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-[#C9A84C]" href="#">
                    Falar com a equipe pelo WhatsApp
                </a>
</div>
<p className="text-xs text-gray-400 mt-12 max-w-2xl opacity-80">
                [Nome do Diretor Técnico Médico] — CRM-BA nº [XXXX] | Atendimento em conformidade com a Resolução CFM nº 2.336/2023
            </p>
</div>
</section>
<footer className="bg-[#0A3828] pt-16 pb-6">
<div className="max-w-7xl mx-auto px-5 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
<div>
<span className="font-serif font-medium text-2xl tracking-tight text-white block mb-3">
                        Evanice Rocha
                    </span>
<p className="text-base text-gray-300 mb-6">Cuidado com responsabilidade.</p>
<div className="flex items-center gap-4 text-white">
<a className="hover:text-[#C9A84C] transition-colors" href="#"><i className="w-6 h-6" data-lucide="globe" strokeWidth="1.5"></i></a>
<a className="hover:text-[#C9A84C] transition-colors" href="#"><i className="w-6 h-6" data-lucide="user-circle" strokeWidth="1.5"></i></a>
</div>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">Links Rápidos</h4>
<a className="text-base text-gray-200 hover:text-white transition-colors w-fit" href="#sintomas">Sintomas</a>
<a className="text-base text-gray-200 hover:text-white transition-colors w-fit" href="#tratamento">Tratamento</a>
<a className="text-base text-gray-200 hover:text-white transition-colors w-fit" href="#sobre">Sobre o Hospital</a>
<a className="text-base text-gray-200 hover:text-white transition-colors w-fit" href="#faq">FAQ</a>
<a className="text-base text-gray-200 hover:text-white transition-colors w-fit" href="#localizacao">Localização</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">Contato</h4>
<p className="text-base text-gray-200">Rua Principal, 123 - Centro<br/>Camaçari, BA</p>
<p className="text-base text-gray-200 mt-2">(71) 3621-0000</p>
<p className="text-base text-gray-200">(71) 99999-0000 (WhatsApp)</p>
<p className="text-base text-gray-400 mt-2">Seg - Sex: 08h às 18h</p>
</div>
</div>
<div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-white/50">
                    © 2023 Hospital Evanice Rocha. Todos os direitos reservados.
                </p>
</div>
</div>
</footer>
<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full py-3.5 px-5 shadow-[0_4px_16px_rgba(0,0,0,0.2)] flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="phone-call" strokeWidth="1.5"></i>
<span className="font-normal text-base">Agendar</span>
</a>


    </>
  );
}
