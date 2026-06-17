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



        // Initialize Lucide Icons
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.querySelector('div.absolute').classList.replace('bg-[#F8F4ED]/90', 'bg-white/95');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.querySelector('div.absolute').classList.replace('bg-white/95', 'bg-[#F8F4ED]/90');
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: stop observing once animated
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-[#F8F4ED]/90 backdrop-blur-md border-b border-[#8B7355]/10"></div>
<div className="max-w-7xl mx-auto px-6 relative flex justify-between items-center h-24">
<a className="font-serif text-2xl tracking-tight text-[#1A2E14] flex items-center gap-2" href="#">
<i className="text-[#8B7355]" data-lucide="leaf"></i>
                Pé da Charca
            </a>
<div className="hidden md:flex gap-8 text-[#2C2C2A] text-sm tracking-wide">
<a className="hover:text-[#8B7355] transition-colors" href="#historia">A Nossa História</a>
<a className="hover:text-[#8B7355] transition-colors" href="#terroir">Terroir</a>
<a className="hover:text-[#8B7355] transition-colors" href="#azeite">O Azeite</a>
<a className="hover:text-[#8B7355] transition-colors" href="#prova">Notas de Prova</a>
</div>
<div className="hidden md:block">
<a className="border border-[#1A2E14] text-[#1A2E14] px-6 py-2.5 text-sm hover:bg-[#1A2E14] hover:text-[#F8F4ED] transition-all" href="#encomendar">
                    Encomendar
                </a>
</div>
<button className="md:hidden text-[#1A2E14]">
<i data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#1A2E14]">
<div className="absolute inset-0 texture-overlay z-10"></div>

<div className="absolute inset-0 bg-gradient-to-br from-[#1A2E14] via-[#2D4A22] to-[#1A2E14] opacity-80"></div>
<div className="max-w-7xl mx-auto px-6 relative z-20 w-full grid lg:grid-cols-2 gap-16 items-center">
<div className="text-left">
<div className="flex items-center gap-3 mb-6 reveal">
<span className="w-12 h-px bg-[#C9A84C]"></span>
<span className="text-[#C9A84C] text-sm tracking-widest uppercase font-light">Colheita Antecipada</span>
</div>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#F8F4ED] leading-[1.1] mb-8 reveal delay-100 font-normal">
                    O Azeite que o <br/>
<span className="italic text-[#C9A84C]">Tempo</span> Aperfeiçoou
                </h1>
<p className="text-xl text-[#F8F4ED]/80 max-w-lg mb-12 font-light reveal delay-200">
                    Nascido na serenidade do Médio Tejo, cada gota encapsula cinco gerações de dedicação à terra, ao olival e à tradição.
                </p>
<div className="flex flex-col sm:flex-row gap-4 reveal delay-300">
<a className="bg-[#C9A84C] text-[#1A2E14] px-8 py-4 text-center hover:bg-[#F8F4ED] transition-colors font-medium" href="#azeite">
                        Descobrir o Azeite
                    </a>
<a className="border border-[#F8F4ED]/30 text-[#F8F4ED] px-8 py-4 text-center hover:bg-[#F8F4ED]/10 transition-colors font-light" href="#historia">
                        A Nossa História
                    </a>
</div>
</div>

<div className="relative h-[600px] flex justify-center items-center reveal delay-200 hidden lg:flex">
<div className="absolute inset-0 bg-[#C9A84C]/5 rounded-full blur-3xl"></div>
<div className="relative w-full h-full flex justify-center items-center">

<div className="w-3/4 h-5/6 bg-[#E8E2D5] rounded-t-full shadow-2xl relative overflow-hidden border border-white/20 flex justify-center items-end pb-12">

<div className="relative w-32 h-[400px] flex flex-col items-center">

<div className="w-10 h-8 bg-[#1A1A1A] rounded-t-sm shadow-inner z-20 border-b border-[#333]"></div>

<div className="w-12 h-20 bg-gradient-to-r from-[#2A2A20] via-[#4A4A30] to-[#2A2A20] z-10"></div>

<div className="w-32 h-16 bg-gradient-to-r from-[#1E1E15] via-[#3A3A25] to-[#1E1E15] rounded-t-3xl -mt-2 z-10 shadow-lg relative">
<div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>
</div>

<div className="w-32 flex-1 bg-gradient-to-r from-[#11110B] via-[#2A2A1B] to-[#11110B] relative overflow-hidden shadow-2xl rounded-b-lg border-b-2 border-black/50">

<div className="absolute top-12 inset-x-2 bottom-8 bg-[#F8F4ED] rounded-t-full rounded-b-sm p-4 flex flex-col items-center justify-center border border-[#8B7355]/30">
<div className="w-12 h-12 border border-[#C9A84C] rounded-full flex items-center justify-center mb-2">
<i className="text-[#8B7355] w-6 h-6" data-lucide="tree-deciduous"></i>
</div>
<span className="text-[#1A2E14] font-serif tracking-tight text-xs uppercase text-center block leading-tight">Quinta do<br/>Pé da Charca</span>
</div>

<div className="absolute inset-y-0 left-4 w-2 bg-white/5 blur-sm"></div>
</div>

<div className="absolute -bottom-4 w-48 h-2 bg-black/20 blur-md rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 relative" id="historia">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-[#1A2E14] mb-12 font-normal">Cinco Gerações de Dedicação</h2>
<div className="space-y-8 text-[#6B6B5E] font-light leading-relaxed">
<p>
                    A história da Quinta do Pé da Charca confunde-se com a própria paisagem de São Vicente do Paul. Há mais de um século que a família Mesquita Dias trabalha esta terra férctil do Médio Tejo, construindo uma ligação indissociável com a natureza que nos rodeia.
                </p>
<p>
                    A nossa quinta é testemunha do tempo. A sombra acolhedora das azinheiras e dos sobreiros centenários reflete-se na charca serena que dá nome à propriedade, espelhando os mesmos céus ribatejanos que viram quatro gerações antecederem o cuidado diário da família de Rosário, Luís e os seus filhos.
                </p>
<p>
                    Hoje, o olival harmoniza-se com a pequena vinha e o pomar. Cada oliveira é tratada não apenas como fonte de sustento, mas como herança viva. O azeite que extraímos é a expressão líquida desta história — um tributo ao trabalho manual, ao respeito pelos ciclos da natureza e ao amor que passa de pais para filhos.
                </p>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mt-24 reveal delay-200">
<div className="relative flex flex-col md:flex-row justify-between pt-10">

<div className="absolute top-14 left-0 w-full h-px bg-[#8B7355]/20 hidden md:block"></div>
<div className="absolute top-0 left-6 bottom-0 w-px bg-[#8B7355]/20 md:hidden"></div>

<div className="relative flex-1 px-6 pb-12 md:pb-0">
<div className="w-3 h-3 bg-[#C9A84C] rounded-full absolute left-4 md:left-1/2 top-0 md:top-4 md:-translate-x-1.5 md:-mt-1.5 outline outline-4 outline-[#F8F4ED]"></div>
<div className="md:text-center mt-2 md:mt-10 ml-8 md:ml-0">
<span className="font-serif text-2xl tracking-tight text-[#1A2E14] block mb-2">c. 1890</span>
<span className="text-sm font-light uppercase tracking-wide text-[#8B7355] block mb-2">As Raízes</span>
<p className="text-sm">A primeira geração adquire as terras junto à charca, plantando as fundações.</p>
</div>
</div>
<div className="relative flex-1 px-6 pb-12 md:pb-0">
<div className="w-3 h-3 bg-[#C9A84C] rounded-full absolute left-4 md:left-1/2 top-0 md:top-4 md:-translate-x-1.5 md:-mt-1.5 outline outline-4 outline-[#F8F4ED]"></div>
<div className="md:text-center mt-2 md:mt-10 ml-8 md:ml-0">
<span className="font-serif text-2xl tracking-tight text-[#1A2E14] block mb-2">1945</span>
<span className="text-sm font-light uppercase tracking-wide text-[#8B7355] block mb-2">Expansão</span>
<p className="text-sm">Consolidação do olival tradicional e introdução das primeiras práticas modernas.</p>
</div>
</div>
<div className="relative flex-1 px-6 pb-12 md:pb-0">
<div className="w-3 h-3 bg-[#C9A84C] rounded-full absolute left-4 md:left-1/2 top-0 md:top-4 md:-translate-x-1.5 md:-mt-1.5 outline outline-4 outline-[#F8F4ED]"></div>
<div className="md:text-center mt-2 md:mt-10 ml-8 md:ml-0">
<span className="font-serif text-2xl tracking-tight text-[#1A2E14] block mb-2">1998</span>
<span className="text-sm font-light uppercase tracking-wide text-[#8B7355] block mb-2">Renovação</span>
<p className="text-sm">Foco na qualidade extrema e preservação das oliveiras galegas mais antigas.</p>
</div>
</div>
<div className="relative flex-1 px-6">
<div className="w-3 h-3 bg-[#C9A84C] rounded-full absolute left-4 md:left-1/2 top-0 md:top-4 md:-translate-x-1.5 md:-mt-1.5 outline outline-4 outline-[#F8F4ED]"></div>
<div className="md:text-center mt-2 md:mt-10 ml-8 md:ml-0">
<span className="font-serif text-2xl tracking-tight text-[#1A2E14] block mb-2">Presente</span>
<span className="text-sm font-light uppercase tracking-wide text-[#8B7355] block mb-2">A 5ª Geração</span>
<p className="text-sm">Rosário, Luís e os filhos elevam o azeite a um padrão de excelência artesanal.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative" id="terroir">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<span className="text-[#8B7355] text-sm tracking-widest uppercase font-light mb-4 block">A Alma da Terra</span>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-[#1A2E14] font-normal">O Terroir do Médio Tejo</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-10 border border-[#8B7355]/10 hover:border-[#C9A84C]/50 transition-colors duration-500 bg-[#F8F4ED]/30 group reveal">
<div className="w-14 h-14 bg-[#1A2E14] text-[#C9A84C] flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
<i data-lucide="map-pin"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight text-[#1A2E14] mb-4">Localização Única</h3>
<p className="text-[#6B6B5E] font-light text-base leading-relaxed">
                        Situada em São Vicente do Paul, na Golegã. O coração verde de Portugal proporciona um ecossistema protegido pelas árvores centenárias.
                    </p>
</div>

<div className="p-10 border border-[#8B7355]/10 hover:border-[#C9A84C]/50 transition-colors duration-500 bg-[#F8F4ED]/30 group reveal delay-100">
<div className="w-14 h-14 bg-[#1A2E14] text-[#C9A84C] flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
<i data-lucide="sun"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight text-[#1A2E14] mb-4">Solo e Clima</h3>
<p className="text-[#6B6B5E] font-light text-base leading-relaxed">
                        Solos argilosos e férteis nutrem as raízes, enquanto os verões quentes e soalheiros, temperados por invernos amenos, garantem maturação perfeita.
                    </p>
</div>

<div className="p-10 border border-[#8B7355]/10 hover:border-[#C9A84C]/50 transition-colors duration-500 bg-[#F8F4ED]/30 group reveal delay-200">
<div className="w-14 h-14 bg-[#1A2E14] text-[#C9A84C] flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
<i data-lucide="leaf"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight text-[#1A2E14] mb-4">A Variedade</h3>
<p className="text-[#6B6B5E] font-light text-base leading-relaxed">
                        Protagonismo da Galega Vulgar, a rainha das azeitonas portuguesas, responsável pelo perfil suave, frutado e inconfundivelmente elegante.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#2D4A22] text-[#F8F4ED] overflow-hidden" id="azeite">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

<div className="relative flex justify-center reveal">
<div className="absolute inset-0 bg-[#C9A84C]/10 rounded-full blur-3xl w-3/4 h-3/4 mx-auto"></div>

<div className="relative w-72 h-[500px] border border-[#C9A84C]/20 bg-[#1A2E14]/40 backdrop-blur-sm p-6 flex flex-col items-center justify-between z-10 shadow-2xl rounded-sm">
<div className="w-full text-center border-b border-[#F8F4ED]/10 pb-4">
<i className="mx-auto text-[#C9A84C] mb-2" data-lucide="droplet" height="24" width="24"></i>
<span className="font-serif tracking-tight text-sm uppercase text-[#C9A84C]">Edição Limitada</span>
</div>

<div className="w-full flex-1 my-6 relative rounded overflow-hidden border border-[#F8F4ED]/10 shadow-lg group">

<div className="absolute inset-0 bg-[#C9A84C]/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>

<img alt="Garrafa tradicional de Azeite Extra Virgem Quinta do Pé da Charca em detalhe ultra realista" className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="w-full pt-4 border-t border-[#F8F4ED]/10 text-center">
<span className="text-xs font-light opacity-50 block">Produzido em Portugal</span>
<span className="text-xs font-light opacity-50 block mt-1">Acidez &lt; 0,2%</span>
</div>
</div>
</div>

<div className="reveal delay-200">
<div className="inline-block border border-[#C9A84C] px-4 py-1.5 text-xs uppercase tracking-widest text-[#C9A84C] mb-8 font-light">
                    Colheita Antecipada · Extração a Frio
                </div>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-8 font-normal leading-tight">
                    Azeite Extra Virgem<br/>
<span className="text-[#C9A84C] italic">Quinta do Pé da Charca</span>
</h2>
<p className="text-[#F8F4ED]/80 font-light mb-10 text-xl leading-relaxed">
                    Um sumo de azeitona puro, onde cada detalhe da produção artesanal reflete-se na complexidade do sabor e aroma.
                </p>
<ul className="space-y-4 mb-12">
<li className="flex items-start gap-4">
<i className="text-[#C9A84C] mt-1 shrink-0" data-lucide="check"></i>
<span className="font-light"><strong className="font-medium text-white">Colheita manual em verde:</strong> Azeitonas colhidas antes da maturação plena para potenciar aromas herbáceos e polifenóis.</span>
</li>
<li className="flex items-start gap-4">
<i className="text-[#C9A84C] mt-1 shrink-0" data-lucide="check"></i>
<span className="font-light"><strong className="font-medium text-white">Extração a frio pura:</strong> Processo mecânico rigoroso a temperaturas inferiores a 27°C nas primeiras horas após colheita.</span>
</li>
<li className="flex items-start gap-4">
<i className="text-[#C9A84C] mt-1 shrink-0" data-lucide="check"></i>
<span className="font-light"><strong className="font-medium text-white">Acidez excecional:</strong> Inferior a 0,2%, comprovando o estado impecável e fresco do fruto.</span>
</li>
<li className="flex items-start gap-4">
<i className="text-[#C9A84C] mt-1 shrink-0" data-lucide="check"></i>
<span className="font-light"><strong className="font-medium text-white">Cor radiante:</strong> Verde-dourado brilhante, um espetáculo visual que antecipa a prova.</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1A2E14] px-8 py-4 hover:bg-[#F8F4ED] transition-colors font-medium" href="#encomendar">
                    Encomendar a Nova Safra
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F4ED] border-y border-[#8B7355]/10">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-3xl tracking-tight text-center text-[#1A2E14] mb-16 font-normal">Do Olival até à Gota</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="text-center group reveal">
<div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
<div className="absolute inset-0 bg-[#8B7355]/5 rounded-full group-hover:bg-[#8B7355]/20 transition-colors"></div>
<span className="absolute text-5xl font-serif text-[#1A2E14]/5 -left-4 -top-4 select-none">1</span>
<i className="text-[#2D4A22] w-8 h-8 relative z-10" data-lucide="sprout"></i>
</div>
<h4 className="font-serif text-xl tracking-tight text-[#1A2E14] mb-2">Cultivo Cuidadoso</h4>
<p className="text-sm font-light text-[#6B6B5E]">Olival mantido à mão, respeitando a biodiversidade local sem recurso a químicos agressivos.</p>
</div>

<div className="text-center group reveal delay-100">
<div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
<div className="absolute inset-0 bg-[#8B7355]/5 rounded-full group-hover:bg-[#8B7355]/20 transition-colors"></div>
<span className="absolute text-5xl font-serif text-[#1A2E14]/5 -left-4 -top-4 select-none">2</span>
<i className="text-[#2D4A22] w-8 h-8 relative z-10" data-lucide="hand"></i>
</div>
<h4 className="font-serif text-xl tracking-tight text-[#1A2E14] mb-2">Colheita Manual</h4>
<p className="text-sm font-light text-[#6B6B5E]">Feita em verde, aos primeiros raios de sol, para preservar o máximo de frescura e perfil aromático.</p>
</div>

<div className="text-center group reveal delay-200">
<div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
<div className="absolute inset-0 bg-[#8B7355]/5 rounded-full group-hover:bg-[#8B7355]/20 transition-colors"></div>
<span className="absolute text-5xl font-serif text-[#1A2E14]/5 -left-4 -top-4 select-none">3</span>
<i className="text-[#2D4A22] w-8 h-8 relative z-10" data-lucide="cog"></i>
</div>
<h4 className="font-serif text-xl tracking-tight text-[#1A2E14] mb-2">Prensagem a Frio</h4>
<p className="text-sm font-light text-[#6B6B5E]">Extração imediata após a colheita, garantindo acidez mínima e um azeite de categoria superior.</p>
</div>

<div className="text-center group reveal delay-300">
<div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
<div className="absolute inset-0 bg-[#8B7355]/5 rounded-full group-hover:bg-[#8B7355]/20 transition-colors"></div>
<span className="absolute text-5xl font-serif text-[#1A2E14]/5 -left-4 -top-4 select-none">4</span>
<i className="text-[#2D4A22] w-8 h-8 relative z-10" data-lucide="package"></i>
</div>
<h4 className="font-serif text-xl tracking-tight text-[#1A2E14] mb-2">Engarrafamento</h4>
<p className="text-sm font-light text-[#6B6B5E]">Protegido da luz em vidro escuro, selando a riqueza do Ribatejo para chegar intacto à sua mesa.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1A2E14] text-[#F8F4ED] relative overflow-hidden" id="prova">
<div className="absolute inset-0 texture-overlay opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 reveal">
<p className="font-serif italic text-2xl lg:text-4xl max-w-4xl mx-auto text-[#C9A84C] leading-relaxed">
                    "Um azeite que conta a história de uma terra. <br/>Cada gota é o Ribatejo em estado puro."
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="relative w-full aspect-square max-w-md mx-auto reveal">

<div className="absolute inset-0 m-auto w-32 h-32 bg-[#2D4A22] rounded-full flex flex-col items-center justify-center border border-[#C9A84C]/30 z-20 shadow-2xl">
<i className="text-[#C9A84C] mb-1" data-lucide="droplets"></i>
<span className="text-xs uppercase tracking-widest font-light">Aromas</span>
</div>

<svg className="absolute inset-0 w-full h-full z-10 animate-[spin_60s_linear_infinite]" viewbox="0 0 400 400">
<circle cx="200" cy="200" fill="none" opacity="0.2" r="140" stroke="#F8F4ED" stroke-dasharray="4 8" strokeWidth="1"></circle>

<line opacity="0.3" stroke="#8B7355" strokeWidth="1" x1="200" x2="200" y1="200" y2="40"></line>
<line opacity="0.3" stroke="#8B7355" strokeWidth="1" x1="200" x2="200" y1="200" y2="360"></line>
<line opacity="0.3" stroke="#8B7355" strokeWidth="1" x1="200" x2="60" y1="200" y2="120"></line>
<line opacity="0.3" stroke="#8B7355" strokeWidth="1" x1="200" x2="340" y1="200" y2="280"></line>
<line opacity="0.3" stroke="#8B7355" strokeWidth="1" x1="200" x2="340" y1="200" y2="120"></line>
<line opacity="0.3" stroke="#8B7355" strokeWidth="1" x1="200" x2="60" y1="200" y2="280"></line>
</svg>

<div className="absolute top-[5%] left-1/2 -translate-x-1/2 text-center z-30">
<span className="bg-[#1A2E14] border border-[#8B7355]/50 px-4 py-1.5 rounded-full text-sm font-light text-[#C9A84C]">Erva Fresca</span>
</div>
<div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center z-30">
<span className="bg-[#1A2E14] border border-[#8B7355]/50 px-4 py-1.5 rounded-full text-sm font-light text-[#C9A84C]">Maçã Verde</span>
</div>
<div className="absolute top-1/4 left-[5%] text-center z-30">
<span className="bg-[#1A2E14] border border-[#8B7355]/50 px-4 py-1.5 rounded-full text-sm font-light text-[#C9A84C]">Tomateiro</span>
</div>
<div className="absolute bottom-1/4 right-[5%] text-center z-30">
<span className="bg-[#1A2E14] border border-[#8B7355]/50 px-4 py-1.5 rounded-full text-sm font-light text-[#C9A84C]">Amêndoa</span>
</div>
<div className="absolute top-1/4 right-[5%] text-center z-30">
<span className="bg-[#1A2E14] border border-[#8B7355]/50 px-4 py-1.5 rounded-full text-sm font-light text-[#C9A84C]">Alcachofra</span>
</div>
<div className="absolute bottom-1/4 left-[5%] text-center z-30">
<span className="bg-[#1A2E14] border border-[#8B7355]/50 px-4 py-1.5 rounded-full text-sm font-light text-[#C9A84C]">Folha de Oliveira</span>
</div>
</div>

<div className="space-y-12 reveal delay-200">
<div>
<h3 className="font-serif text-3xl tracking-tight mb-8">Perfil Sensorial</h3>
<p className="font-light text-[#F8F4ED]/80 mb-10 leading-relaxed">
                            Apresenta um frutado verde intenso. Na boca, revela um equilíbrio magistral, finalizando com uma picância elegante e persistente, reflexo do seu alto teor em antioxidantes naturais.
                        </p>
</div>
<div className="space-y-8">

<div>
<div className="flex justify-between text-sm uppercase tracking-wide font-light mb-3">
<span>Frutado</span>
<span className="text-[#C9A84C]">Intenso</span>
</div>
<div className="h-px w-full bg-[#8B7355]/30 relative">
<div className="absolute top-0 left-0 h-full bg-[#C9A84C] w-[85%]"></div>
<div className="absolute top-1/2 left-[85%] -translate-y-1/2 w-2 h-2 bg-[#F8F4ED] rounded-full shadow-[0_0_10px_rgba(201,168,76,0.8)]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm uppercase tracking-wide font-light mb-3">
<span>Amargo</span>
<span className="text-[#C9A84C]">Equilibrado</span>
</div>
<div className="h-px w-full bg-[#8B7355]/30 relative">
<div className="absolute top-0 left-0 h-full bg-[#C9A84C] w-[60%]"></div>
<div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-2 h-2 bg-[#F8F4ED] rounded-full shadow-[0_0_10px_rgba(201,168,76,0.8)]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm uppercase tracking-wide font-light mb-3">
<span>Picante</span>
<span className="text-[#C9A84C]">Persistente</span>
</div>
<div className="h-px w-full bg-[#8B7355]/30 relative">
<div className="absolute top-0 left-0 h-full bg-[#C9A84C] w-[75%]"></div>
<div className="absolute top-1/2 left-[75%] -translate-y-1/2 w-2 h-2 bg-[#F8F4ED] rounded-full shadow-[0_0_10px_rgba(201,168,76,0.8)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F8F4ED]" id="encomendar">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="inline-block bg-[#1A2E14] text-[#C9A84C] px-4 py-1 text-xs uppercase tracking-widest mb-6 font-medium">Safra Limitada — Stock Reduzido</span>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-[#1A2E14] font-normal">Leve a Quinta para a sua Mesa</h2>
</div>
<div className="grid lg:grid-cols-12 gap-16">

<div className="lg:col-span-5 space-y-6 reveal delay-100">
<h3 className="font-serif text-2xl tracking-tight text-[#1A2E14] mb-8">Formatos Disponíveis</h3>

<label className="block relative border border-[#8B7355]/30 p-6 cursor-pointer hover:border-[#1A2E14] transition-colors bg-white group">
<input checked="" className="peer sr-only" name="size" type="radio"/>
<div className="flex justify-between items-center">
<div>
<span className="block font-serif text-xl text-[#1A2E14] mb-1">500 ml</span>
<span className="text-sm font-light text-[#6B6B5E]">Garrafa de vidro escuro premium</span>
</div>
<span className="font-serif text-xl text-[#1A2E14]">12.99€</span>
</div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 border border-[#8B7355] rounded-full peer-checked:border-[#1A2E14] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-2.5 h-2.5 bg-[#1A2E14] rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
</div>
<div className="absolute inset-0 border-2 border-transparent peer-checked:border-[#1A2E14] transition-colors pointer-events-none"></div>
</label>

<label className="block relative border border-[#8B7355]/30 p-6 cursor-pointer hover:border-[#1A2E14] transition-colors bg-white group">
<input className="peer sr-only" name="size" type="radio"/>
<div className="flex justify-between items-center">
<div>
<span className="block font-serif text-xl text-[#1A2E14] mb-1">250 ml</span>
<span className="text-sm font-light text-[#6B6B5E]">Ideal para degustação ou oferta</span>
</div>
<span className="font-serif text-xl text-[#1A2E14]">7.99€</span>
</div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 border border-[#8B7355] rounded-full peer-checked:border-[#1A2E14] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-2.5 h-2.5 bg-[#1A2E14] rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
</div>
<div className="absolute inset-0 border-2 border-transparent peer-checked:border-[#1A2E14] transition-colors pointer-events-none"></div>
</label>

<label className="block relative border border-[#8B7355]/30 p-6 cursor-pointer hover:border-[#1A2E14] transition-colors bg-white group">
<input className="peer sr-only" name="size" type="radio"/>
<div className="flex justify-between items-center">
<div>
<span className="block font-serif text-xl text-[#1A2E14] mb-1">Caixa 3x 500ml</span>
<span className="text-sm font-light text-[#6B6B5E]">Edição especial de colecionador</span>
</div>
<span className="font-serif text-xl text-[#1A2E14]">34€</span>
</div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 border border-[#8B7355] rounded-full peer-checked:border-[#1A2E14] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-2.5 h-2.5 bg-[#1A2E14] rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
</div>
<div className="absolute inset-0 border-2 border-transparent peer-checked:border-[#1A2E14] transition-colors pointer-events-none"></div>
</label>
</div>

<div className="lg:col-span-7 bg-white p-10 border border-[#8B7355]/20 reveal delay-200">
<h3 className="font-serif text-2xl tracking-tight text-[#1A2E14] mb-8">Detalhes da Encomenda</h3>
<form className="space-y-8" onsubmit="event.preventDefault(); alert('Obrigado! A sua encomenda foi registada. Entraremos em contacto brevemente.');">
<div className="grid md:grid-cols-2 gap-8">
<div className="relative">
<input className="w-full bg-transparent border-b border-[#8B7355]/40 py-2 font-light text-[#2C2C2A] focus:outline-none focus:border-[#1A2E14] transition-colors peer placeholder-transparent" id="nome" placeholder="Nome" required="" type="text"/>
<label className="absolute left-0 -top-4 text-xs font-light text-[#8B7355] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#1A2E14]" htmlFor="nome">Nome Completo</label>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-[#8B7355]/40 py-2 font-light text-[#2C2C2A] focus:outline-none focus:border-[#1A2E14] transition-colors peer placeholder-transparent" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 -top-4 text-xs font-light text-[#8B7355] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#1A2E14]" htmlFor="email">Email</label>
</div>
</div>
<div className="relative flex items-center justify-between border-b border-[#8B7355]/40 py-4">
<label className="font-light text-[#6B6B5E]">Quantidade</label>
<div className="flex items-center gap-4">
<button className="w-8 h-8 rounded-full border border-[#8B7355] flex items-center justify-center text-[#8B7355] hover:bg-[#8B7355] hover:text-white transition-colors" onclick="document.getElementById('qty').stepDown()" type="button"><i className="w-4 h-4" data-lucide="minus"></i></button>
<input className="w-12 text-center bg-transparent font-serif text-xl text-[#1A2E14] focus:outline-none appearance-none" id="qty" min="1" readonly="" type="number" value="1"/>
<button className="w-8 h-8 rounded-full border border-[#8B7355] flex items-center justify-center text-[#8B7355] hover:bg-[#8B7355] hover:text-white transition-colors" onclick="document.getElementById('qty').stepUp()" type="button"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
</div>
<div className="relative">
<textarea className="w-full bg-transparent border-b border-[#8B7355]/40 py-2 font-light text-[#2C2C2A] focus:outline-none focus:border-[#1A2E14] transition-colors peer placeholder-transparent resize-none" id="mensagem" placeholder="Mensagem" rows="2"></textarea>
<label className="absolute left-0 -top-4 text-xs font-light text-[#8B7355] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#1A2E14]" htmlFor="mensagem">Mensagem (Opcional - ex: Para oferta)</label>
</div>
<button className="w-full bg-[#1A2E14] text-[#F8F4ED] py-4 font-medium hover:bg-[#2D4A22] transition-colors flex justify-center items-center gap-2" type="submit">
                            Pedir Informações de Pagamento
                            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<div className="text-center pt-4">
<span className="text-sm font-light text-[#6B6B5E] block mb-2">Ou contacte-nos diretamente via WhatsApp</span>
<a className="inline-flex items-center gap-2 text-[#2D4A22] font-medium hover:text-[#C9A84C] transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
<span>+351 932 720 303</span>
</a>
</div>
</form>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 border-t border-[#8B7355]/20 pt-10 reveal delay-300">
<div className="flex flex-col items-center text-center gap-2">
<i className="text-[#8B7355] w-6 h-6" data-lucide="map"></i>
<span className="text-sm font-light">Produto 100% Português</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<i className="text-[#8B7355] w-6 h-6" data-lucide="award"></i>
<span className="text-sm font-light">Produção Artesanal Limitada</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<i className="text-[#8B7355] w-6 h-6" data-lucide="truck"></i>
<span className="text-sm font-light">Entregas em Portugal Continental</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<i className="text-[#8B7355] w-6 h-6" data-lucide="shield-check"></i>
<span className="text-sm font-light">Qualidade Garantida</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-3xl tracking-tight text-center text-[#1A2E14] mb-16 font-normal">A Experiência de Quem Prova</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 border border-[#8B7355]/10 bg-[#F8F4ED]/30 reveal">
<div className="flex gap-1 mb-6 text-[#C9A84C]">
<i className="fill-current w-4 h-4" data-lucide="star"></i>
<i className="fill-current w-4 h-4" data-lucide="star"></i>
<i className="fill-current w-4 h-4" data-lucide="star"></i>
<i className="fill-current w-4 h-4" data-lucide="star"></i>
<i className="fill-current w-4 h-4" data-lucide="star"></i>
</div>
<p className="font-light italic text-[#6B6B5E] mb-6 line-clamp-4">
                        "É raro encontrar um azeite com tanta personalidade. Sente-se a frescura da azeitona verde logo no aroma, e o final de boca é complexo e duradouro. Elevou instantaneamente os meus pratos."
                    </p>
<div className="flex flex-col">
<span className="font-medium text-[#1A2E14]">Maria João S.</span>
<span className="text-xs font-light text-[#8B7355]">Lisboa</span>
</div>
</div>

<div className="p-8 border border-[#8B7355]/10 bg-[#F8F4ED]/30 reveal delay-100">
<div className="flex gap-1 mb-6 text-[#C9A84C]">
<i className="fill-current w-4 h-4" data-lucide="star"></i>
<i className="fill-current w-4 h-4" data-lucide="star"></i>
<i className="fill-current w-4 h-4" data-lucide="star"></i>
<i className="fill-current w-4 h-4" data-lucide="star"></i>
<i className="fill-current w-4 h-4" data-lucide="star"></i>
</div>
<p className="font-light italic text-[#6B6B5E] mb-6 line-clamp-4">
                        "Como chef, procuro ingredientes que contem uma história. O azeite da Quinta do Pé da Charca é puro Ribatejo. O amargor elegante é perfeito para finalizar pratos crus. Magnífico."
                    </p>
<div className="flex flex-col">
<span className="font-medium text-[#1A2E14]">Chef Tiago N.</span>
<span className="text-xs font-light text-[#8B7355]">Porto</span>
</div>
</div>

<div className="p-8 border border-[#8B7355]/10 bg-[#F8F4ED]/30 reveal delay-200">
<div className="flex gap-1 mb-6 text-[#C9A84C]">
<i className="fill-current w-4 h-4" data-lucide="star"></i>
<i className="fill-current w-4 h-4" data-lucide="star"></i>
<i className="fill-current w-4 h-4" data-lucide="star"></i>
<i className="fill-current w-4 h-4" data-lucide="star"></i>
<i className="fill-current w-4 h-4" data-lucide="star"></i>
</div>
<p className="font-light italic text-[#6B6B5E] mb-6 line-clamp-4">
                        "Ofereceram-me a garrafa de 500ml e fiquei rendido desde o design elegante até à última gota. Nota-se o cuidado artesanal. Um verdadeiro luxo gastronómico nacional."
                    </p>
<div className="flex flex-col">
<span className="font-medium text-[#1A2E14]">Carlos V.</span>
<span className="text-xs font-light text-[#8B7355]">Santarém</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A2E14] text-[#F8F4ED] pt-20 pb-10 border-t-4 border-[#C9A84C]">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="font-serif text-3xl tracking-tight text-[#F8F4ED] block mb-6" href="#">
                    Quinta do <br/>
<span className="text-[#C9A84C] italic">Pé da Charca</span>
</a>
<p className="text-sm font-light text-[#F8F4ED]/60 max-w-xs">
                    Da terra para a sua mesa, com cinco gerações de amor pelo olival.
                </p>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest font-medium text-[#C9A84C] mb-6">Explorar</h5>
<ul className="space-y-3 text-sm font-light text-[#F8F4ED]/80">
<li><a className="hover:text-white transition-colors" href="#historia">A Nossa História</a></li>
<li><a className="hover:text-white transition-colors" href="#terroir">Terroir</a></li>
<li><a className="hover:text-white transition-colors" href="#azeite">O Produto</a></li>
<li><a className="hover:text-white transition-colors" href="#encomendar">Encomendar</a></li>
</ul>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest font-medium text-[#C9A84C] mb-6">Contacto</h5>
<ul className="space-y-3 text-sm font-light text-[#F8F4ED]/80">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 shrink-0" data-lucide="map-pin"></i>
<span>São Vicente do Paul<br/>Golegã, Portugal</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 shrink-0" data-lucide="mail"></i>
<a className="hover:text-white transition-colors break-all" href="mailto:Luismanuel.mesquitadias@gmail.com">Luismanuel.mesquitadias@gmail.com</a>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 shrink-0" data-lucide="phone"></i>
<span>+351 932 720 303</span>
</li>
</ul>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest font-medium text-[#C9A84C] mb-6">Siga-nos</h5>
<div className="flex gap-4">
<a className="w-10 h-10 border border-[#8B7355]/50 rounded-full flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#1A2E14] hover:border-transparent transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 border border-[#8B7355]/50 rounded-full flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#1A2E14] hover:border-transparent transition-all" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-[#8B7355]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-[#F8F4ED]/40">
<p>© 2024 Quinta do Pé da Charca. Todos os direitos reservados.</p>
<div className="flex gap-4">
<a className="hover:text-[#F8F4ED] transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-[#F8F4ED] transition-colors" href="#">Termos de Serviço</a>
</div>
</div>
</footer>



    </>
  );
}
