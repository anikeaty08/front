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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Inicializar Lucide Icons
            lucide.createIcons();

            // Navbar blur effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-slate-100');
                    navbar.classList.remove('border-transparent');
                } else {
                    navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-slate-100');
                    navbar.classList.add('border-transparent');
                }
            });

            // Intersection Observer para animações
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.observe-section').forEach(section => {
                observer.observe(section);
            });
            
            setTimeout(() => {
                document.querySelectorAll('.observe-section').forEach(section => {
                    const rect = section.getBoundingClientRect();
                    if(rect.top < window.innerHeight) {
                        section.classList.add('is-visible');
                    }
                });
            }, 100);
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
      

<nav className="fixed w-full top-0 z-50 transition-all duration-300 py-4 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
<a className="flex flex-col items-start" href="#">
<span className="font-medium text-2xl tracking-tight text-slate-900 leading-none">Vinimax</span>
<span className="font-medium text-xs tracking-[0.2em] text-sky-600 uppercase mt-1">Piscinas</span>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors" href="#por-que">Diferenciais</a>
<a className="text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors" href="#servicos">Serviços</a>
<a className="text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors" href="#processo">Processo</a>
<a className="text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors" href="#galeria">Obras</a>
</div>
<a className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md" href="#cta">
<span>Orçamento</span>
</a>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Piscina de alto padrão" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center observe-section reveal-up">
<span className="inline-block px-4 py-1.5 bg-sky-500/20 border border-sky-400/30 rounded-full text-xs font-medium tracking-widest text-sky-300 uppercase mb-8 backdrop-blur-sm">
                Ribeirão Preto e Região
            </span>
<h1 className="font-medium text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-8">
                Construímos piscinas.<br/>
<span className="text-sky-400">Entregamos tranquilidade.</span>
</h1>
<p className="font-normal text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-12">
                Sem terceirização, sem surpresas no orçamento. Uma equipe local especializada cuidando de cada detalhe do seu quintal, do projeto estrutural à primeira braçada.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
<a className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full font-medium text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)]" href="#cta">
                    Falar com Especialista
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</header>

<section className="py-24 lg:py-32 observe-section bg-[#faf9f6]" id="por-que">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-up">
<h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-6">A base da nossa confiança.</h2>
<p className="font-normal text-lg lg:text-xl text-slate-500 leading-relaxed">Construímos uma estrutura sólida em nosso atendimento para que você não precise se preocupar com a da sua casa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-500 reveal-up delay-100">
<div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 mb-8">
<i className="w-7 h-7" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-2xl text-slate-900 tracking-tight mb-4">Equipe Própria</h3>
<p className="font-normal text-base text-slate-500 leading-relaxed">Não terceirizamos. Quem entra na sua casa é funcionário registrado e treinado pela Vinimax. Segurança e padrão mantidos rigorosamente.</p>
</div>

<div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-500 reveal-up delay-200">
<div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 mb-8">
<i className="w-7 h-7" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-2xl text-slate-900 tracking-tight mb-4">Garantia Real</h3>
<p className="font-normal text-base text-slate-500 leading-relaxed">Nossa responsabilidade não acaba. Oferecemos garantia documentada de estrutura e impermeabilização, com assistência rápida sempre que precisar.</p>
</div>

<div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-500 reveal-up delay-300">
<div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 mb-8">
<i className="w-7 h-7" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-2xl text-slate-900 tracking-tight mb-4">Presença Local</h3>
<p className="font-normal text-base text-slate-500 leading-relaxed">Somos de Ribeirão Preto. Conhecemos o solo e o clima da região. Ter um endereço físico significa que você sempre sabe onde nos encontrar.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 lg:py-32 observe-section" id="servicos">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-20 reveal-up">
<h2 className="font-medium text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">O que fazemos <span className="text-sky-600">de melhor.</span></h2>
<p className="font-normal text-lg lg:text-xl text-slate-500 mt-6 max-w-2xl mx-auto">Soluções definitivas executadas com precisão cirúrgica para garantir o seu lazer sem preocupações.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="md:col-span-2 bg-[#faf9f6] rounded-[2.5rem] p-10 lg:p-14 overflow-hidden relative group reveal-scale flex flex-col md:flex-row items-center gap-12 border border-slate-100">
<div className="w-full md:w-1/2 z-10">
<span className="inline-block px-4 py-1.5 bg-sky-100 rounded-full text-xs font-medium tracking-widest text-sky-700 uppercase mb-6">Especialidade</span>
<h3 className="font-medium text-3xl lg:text-4xl text-slate-900 tracking-tight mb-6">Construção Completa.</h3>
<p className="font-normal text-base lg:text-lg text-slate-600 leading-relaxed mb-8">Do projeto estrutural à primeira braçada. Executamos obras em alvenaria e vinil com <span className="text-sky-600 font-medium">fundação robusta e sistemas de filtragem superdimensionados</span> para evitar qualquer dor de cabeça futura.</p>
<ul className="flex flex-col gap-4 font-normal text-base text-slate-600">
<li className="flex items-center gap-3"><i className="text-sky-500 w-6 h-6 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Fundação e concretagem rigorosa</li>
<li className="flex items-center gap-3"><i className="text-sky-500 w-6 h-6 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Impermeabilização certificada</li>
<li className="flex items-center gap-3"><i className="text-sky-500 w-6 h-6 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i> Casa de máquinas padrão ABNT</li>
</ul>
</div>
<div className="w-full md:w-1/2 h-[350px] md:h-full min-h-[350px] relative rounded-3xl overflow-hidden shadow-lg">
<img alt="Estrutura de Piscina" className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="bg-sky-50 rounded-[2.5rem] p-10 lg:p-12 overflow-hidden relative reveal-scale delay-100 flex flex-col border border-sky-100">
<div className="mb-10 z-10">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-sky-600 mb-6">
<i className="w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-3xl text-slate-900 tracking-tight mb-4">Troca de Bolsão de Vinil.</h3>
<p className="font-normal text-base text-slate-600 leading-relaxed">Renovamos sua piscina em poucos dias. Mantas de alta espessura e estampas modernas, <span className="text-sky-700 font-medium">devolvendo o visual de piscina nova</span> sem quebra-quebra.</p>
</div>
</div>

<div className="bg-white rounded-[2.5rem] p-10 lg:p-12 overflow-hidden relative reveal-scale delay-200 flex flex-col border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="mb-10 z-10">
<div className="w-12 h-12 rounded-full bg-[#faf9f6] flex items-center justify-center border border-slate-200 text-sky-600 mb-6">
<i className="w-6 h-6" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-3xl text-slate-900 tracking-tight mb-4">Reforma e Modernização.</h3>
<p className="font-normal text-base text-slate-600 leading-relaxed">Corrigimos vazamentos estruturais, modernizamos equipamentos de filtragem e redesenhamos áreas de lazer antigas com <span className="text-sky-600 font-medium">precisão e tecnologia</span>.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-24 lg:py-32 observe-section relative overflow-hidden" id="processo">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="text-center mb-16 md:mb-24 reveal-up">
<h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">Nosso Processo</h2>
<p className="font-normal text-lg text-slate-400">Transparência e organização do início ao fim.</p>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-5xl mx-auto gap-12 md:gap-0 reveal-up delay-100">

<div className="hidden md:block absolute left-[10%] right-[10%] top-10 h-[2px] bg-sky-900/50 z-0"></div>

<div className="md:hidden absolute left-10 top-10 bottom-10 w-[2px] bg-sky-900/50 z-0"></div>

<div className="relative z-10 flex flex-row md:flex-col items-center gap-6 md:gap-5 w-full md:w-48 text-left md:text-center">
<div className="w-20 h-20 shrink-0 rounded-full border-[3px] border-sky-500 bg-slate-900 flex items-center justify-center relative shadow-[0_0_20px_rgba(14,165,233,0.15)]">
<div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
</div>
<div>
<span className="text-sm font-medium text-slate-300 tracking-widest uppercase block mb-1">Vistoria</span>
<p className="text-sm text-slate-500 leading-snug md:hidden">Avaliação técnica no local e entendimento do seu projeto.</p>
</div>
</div>

<div className="relative z-10 flex flex-row md:flex-col items-center gap-6 md:gap-5 w-full md:w-48 text-left md:text-center">
<div className="w-20 h-20 shrink-0 rounded-full border-[3px] border-sky-500 bg-slate-900 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.15)]">
<i className="text-slate-300 w-8 h-8" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<div>
<span className="text-sm font-medium text-slate-300 tracking-widest uppercase block mb-1">Projeto</span>
<p className="text-sm text-slate-500 leading-snug md:hidden">Apresentação de orçamento, materiais e cronograma.</p>
</div>
</div>

<div className="relative z-10 flex flex-row md:flex-col items-center gap-6 md:gap-5 w-full md:w-48 text-left md:text-center">
<div className="w-20 h-20 shrink-0 rounded-full border-[3px] border-sky-500 bg-slate-900 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.15)]">
<i className="text-slate-300 w-8 h-8" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
<div>
<span className="text-sm font-medium text-slate-300 tracking-widest uppercase block mb-1">Obra</span>
<p className="text-sm text-slate-500 leading-snug md:hidden">Execução limpa e técnica com nossa equipe própria.</p>
</div>
</div>

<div className="relative z-10 flex flex-row md:flex-col items-center gap-6 md:gap-5 w-full md:w-48 text-left md:text-center">
<div className="w-20 h-20 shrink-0 rounded-full bg-sky-500 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.4)]">
<i className="text-white w-10 h-10" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<span className="text-sm font-medium text-white tracking-widest uppercase block mb-1">Entrega</span>
<p className="text-sm text-slate-500 leading-snug md:hidden">Piscina pronta, testada e área limpa para o seu uso.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 observe-section bg-[#faf9f6]" id="galeria">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="mb-16 reveal-up">
<h2 className="font-medium text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-4">Obras que falam <span className="text-sky-600">por nós.</span></h2>
<p className="font-normal text-lg lg:text-xl text-slate-500 max-w-2xl">Atenção aos mínimos detalhes, entregues para famílias na nossa região.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 h-[500px] lg:h-[650px] rounded-[2rem] overflow-hidden relative group reveal-scale cursor-pointer shadow-sm">
<img alt="Obra Jd Botânico" className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-sky-300 text-xs font-medium uppercase tracking-widest mb-3 block">Construção em Alvenaria</span>
<h4 className="font-medium text-3xl lg:text-4xl text-white tracking-tight">Jd. Botânico, Ribeirão Preto</h4>
</div>
</div>

<div className="lg:col-span-5 grid grid-cols-2 gap-6">

<div className="h-[240px] lg:h-[313px] rounded-[2rem] overflow-hidden relative group reveal-scale delay-100 cursor-pointer shadow-sm">
<img alt="Obra Cravinhos" className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6">
<h4 className="font-medium text-lg text-white tracking-tight mb-1">Troca de Vinil</h4>
<p className="text-xs text-sky-200 uppercase tracking-widest">Cravinhos/SP</p>
</div>
</div>

<div className="h-[240px] lg:h-[313px] rounded-[2rem] overflow-hidden relative group reveal-scale delay-200 cursor-pointer shadow-sm">
<img alt="Obra Bonfim" className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6">
<h4 className="font-medium text-lg text-white tracking-tight mb-1">Reforma Estrutural</h4>
<p className="text-xs text-sky-200 uppercase tracking-widest">Bonfim Pta.</p>
</div>
</div>

<div className="h-[240px] lg:h-[313px] rounded-[2rem] overflow-hidden relative group reveal-scale delay-300 cursor-pointer shadow-sm">
<img alt="Obra Sertãozinho" className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1560381486-4f408544a4fb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6">
<h4 className="font-medium text-lg text-white tracking-tight mb-1">Iluminação</h4>
<p className="text-xs text-sky-200 uppercase tracking-widest">Sertãozinho</p>
</div>
</div>

<div className="h-[240px] lg:h-[313px] rounded-[2rem] overflow-hidden relative group reveal-scale delay-400 cursor-pointer shadow-sm bg-sky-50 flex items-center justify-center border border-sky-100 hover:bg-sky-100 transition-colors">
<div className="text-center p-6">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-sky-600 shadow-sm">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
<h4 className="font-medium text-lg text-slate-900 tracking-tight mb-1">Ver mais fotos</h4>
<p className="text-xs text-slate-500 uppercase tracking-widest">No nosso Instagram</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-32 border-y border-slate-100 observe-section">
<div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
<div className="w-full mb-16 reveal-up">
<i className="text-sky-100 w-16 h-16 mb-8 mx-auto" data-lucide="quote" strokeWidth="1.5"></i>
<blockquote className="font-medium text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-10">
                    "Tive uma péssima experiência com outra empresa que sumiu no meio da obra. A equipe da Vinimax assumiu o projeto, refez a impermeabilização que estava errada e entregou antes do prazo final. Profissionais de verdade."
                </blockquote>
<div className="flex flex-col items-center">
<span className="font-medium text-base text-slate-900">Carlos Eduardo Nogueira</span>
<span className="font-normal text-sm text-sky-600 mt-1 uppercase tracking-widest">Condomínio Ipê Branco</span>
</div>
</div>
</div>
</section>

<section className="bg-sky-500 py-32 observe-section relative overflow-hidden" id="cta">
<div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600"></div>
<div className="max-w-3xl mx-auto px-6 text-center reveal-scale relative z-10">
<h2 className="font-medium text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-8">
                Sua piscina começa com uma conversa.
            </h2>
<p className="font-normal text-lg lg:text-xl text-sky-50 mb-12 max-w-xl mx-auto leading-relaxed">
                Agende uma visita técnica gratuita. Vamos avaliar seu espaço e montar um orçamento detalhado e transparente.
            </p>
<a className="inline-flex bg-white text-sky-700 px-10 py-5 rounded-full font-medium text-base transition-all duration-300 hover:scale-105 hover:shadow-xl items-center gap-3" href="#">
                Falar no WhatsApp
                <i className="w-5 h-5" data-lucide="message-circle" strokeWidth="2"></i>
</a>
</div>
</section>

<footer className="bg-white text-slate-500 py-16 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="font-medium text-xl tracking-tight text-slate-900 leading-none">Vinimax</span>
<span className="font-medium text-[10px] tracking-[0.2em] text-sky-600 uppercase mt-1">Piscinas</span>
</div>
<p className="font-normal text-sm text-center md:text-left">
                © 2024 Vinimax Piscinas. CNPJ: 00.000.000/0000-00.<br/>Ribeirão Preto, SP. Todos os direitos reservados.
            </p>
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#"><i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#"><i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i></a>
</div>
</div>
</footer>



    </>
  );
}
