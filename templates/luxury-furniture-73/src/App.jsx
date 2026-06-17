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



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Text Splitter Utility
            const splitTextElements = document.querySelectorAll(".reveal-text");
            splitTextElements.forEach(element => {
                const text = element.innerText;
                const words = text.split(" ");
                let newHtml = "";
                words.forEach(word => {
                    newHtml += `<span class="word-wrapper"><span class="word">${word}</span></span> `;
                });
                element.innerHTML = newHtml;
            });

            // 2. Reveal Animation
            const revealElements = document.querySelectorAll(".reveal-text");
            revealElements.forEach(element => {
                const words = element.querySelectorAll(".word");
                gsap.to(words, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.04
                });
            });

            // 3. Parallax Image Effect
            const parallaxWrappers = document.querySelectorAll(".parallax-wrapper");
            parallaxWrappers.forEach(wrapper => {
                const img = wrapper.querySelector(".parallax-img");
                if (img) {
                    gsap.fromTo(img, 
                        { y: "-10%" },
                        { 
                            y: "10%", 
                            ease: "none",
                            scrollTrigger: {
                                trigger: wrapper,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true
                            }
                        }
                    );
                }
            });

            // 4. Fade Up Miscellaneous Elements
            gsap.utils.toArray(".fade-up-element").forEach(element => {
                gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%"
                    }
                });
            });

            // 5. Button Reveal
            gsap.to("#hero-cta", {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1,
                ease: "power3.out"
            });
            
             // 6. Footer Parallax
            gsap.fromTo(".parallax-footer-text", 
                { y: "-20%" },
                { 
                    y: "10%", 
                    ease: "none",
                    scrollTrigger: {
                        trigger: "footer",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
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
      

<nav className="fixed top-0 w-full z-50 bg-[#F3F1EB]/80 backdrop-blur-md border-b border-[#1A2E22]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="hidden md:flex space-x-8 text-sm font-medium text-[#1A2E22]/70">
<a className="hover:text-[#1A2E22] transition-colors" href="#">Manifesto</a>
<a className="hover:text-[#1A2E22] transition-colors" href="#">Coleção</a>
<a className="hover:text-[#1A2E22] transition-colors" href="#">O Studio</a>
</div>

<div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
<iconify-icon className="text-[#1A2E22]" icon="solar:armchair-2-linear" width="24"></iconify-icon>
<span className="text-xl font-medium tracking-tighter uppercase">Atelier</span>
</div>

<div className="flex items-center space-x-6">
<a className="text-sm font-medium hidden md:block" href="#">Login</a>
<button className="bg-[#1A2E22] text-[#F3F1EB] px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-opacity-90 transition-all flex items-center gap-2 group">
                        Catálogo Digital
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 opacity-0 animate-fade-in" style={{animationFillMode: 'forwards'}}>
<div className="flex -space-x-2">
<img alt="Designer" className="w-6 h-6 rounded-full border border-[#F3F1EB] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<img alt="Architect" className="w-6 h-6 rounded-full border border-[#F3F1EB] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<img alt="User" className="w-6 h-6 rounded-full border border-[#F3F1EB] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<span className="text-xs font-medium tracking-wide uppercase text-[#1A2E22]/60">Presente nos melhores projetos</span>
</div>

<div className="text-center max-w-4xl mx-auto mb-16">
<h1 className="reveal-text text-5xl md:text-7xl serif-font leading-[1.1] font-light tracking-tight mb-6">
                Design Autoral com <br/> Alma Natural.
            </h1>
<p className="text-lg text-[#1A2E22]/70 max-w-xl mx-auto leading-relaxed reveal-para delay-300">
                Peças únicas esculpidas em madeira maciça e materiais nobres.
                <span className="md:block">Minimalismo brasileiro. Marcenaria tradicional. Estética atemporal.</span>
</p>
<div className="mt-8 opacity-0" id="hero-cta">
<button className="bg-[#1A2E22] text-[#F3F1EB] px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-[#1A2E22]/10">
                    Ver Disponibilidade
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[500px]">

<div className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper">
<img alt="Wood Detail" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-white z-10">
<p className="text-xs font-medium bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1">
<iconify-icon icon="solar:ruler-angular-linear"></iconify-icon>
                        Feito à mão
                    </p>
</div>
</div>

<div className="md:col-span-4 bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#1A2E22]/5">
<div className="">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-[#F3F1EB] flex items-center justify-center">
<img alt="Chair" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<iconify-icon className="text-[#1A2E22]/20 text-2xl" icon="solar:bookmark-linear"></iconify-icon>
</div>
<h3 className="serif-font text-2xl mb-1">Poltrona Caviúna</h3>
<p className="text-xs text-[#1A2E22]/60">Série limitada. Couro natural e Freijó.</p>
</div>
<div className="space-y-3 mt-8">
<div className="flex justify-between text-xs border-b border-gray-100 pb-2">
<span className="text-gray-500">Madeira</span>
<span className="font-medium">Freijó Maciço</span>
</div>
<div className="flex justify-between text-xs border-b border-gray-100 pb-2">
<span className="text-gray-500">Origem</span>
<span className="font-medium">Manejo Sustentável</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-gray-500">Entrega</span>
<span className="font-medium">20 Dias</span>
</div>
</div>
</div>

<div className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper">
<img alt="Interior" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-white max-w-[80%] z-10">
<p className="serif-font text-xl leading-tight">Design que transcende tendências passageiras.</p>
</div>
</div>
</div>
</main>

<section className="py-24 px-4 bg-white border-y border-[#1A2E22]/5">
<div className="max-w-4xl mx-auto text-center">
<h2 className="reveal-text serif-font text-3xl md:text-5xl leading-tight font-light text-[#1A2E22] tracking-tight">
                “Não é apenas mobília. É a intersecção entre funcionalidade, arte e a história da matéria-prima.”
            </h2>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-10">
<div>
<h3 className="serif-font text-3xl mb-2 reveal-text">Materiais Nobres</h3>
<p className="text-sm text-[#1A2E22]/60">Curadoria de texturas naturais.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-[#1A2E22]/10 flex items-center justify-center hover:bg-[#1A2E22] hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-[#1A2E22]/10 flex items-center justify-center hover:bg-[#1A2E22] hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-10">

<div className="min-w-[200px] group cursor-pointer">
<div className="w-full aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-xl transition-all border border-[#1A2E22]/5 relative overflow-hidden">
<img alt="Wood" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-xs font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">Carvalho</span>
</div>
</div>
<h4 className="font-medium">Carvalho Americano</h4>
<p className="text-xs text-[#1A2E22]/50">Resistência e grão fino</p>
</div>

<div className="min-w-[280px] cursor-pointer">
<div className="w-full aspect-square bg-[#1A2E22] rounded-2xl mb-4 flex items-center justify-center p-0 shadow-2xl relative overflow-hidden">
<img alt="Leather" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
<p className="text-white text-xs leading-relaxed">
<span className="font-semibold block mb-1">Couro Natural</span>
                            Tratamento vegetal que envelhece com personalidade e maciez única.
                        </p>
</div>
</div>
<h4 className="font-medium">Couro Natural</h4>
<p className="text-xs text-[#1A2E22]/50">Textura orgânica</p>
</div>

<div className="min-w-[200px] group cursor-pointer">
<div className="w-full aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-xl transition-all border border-[#1A2E22]/5 relative overflow-hidden">
<img alt="Stone" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h4 className="font-medium">Pedra Sabão</h4>
<p className="text-xs text-[#1A2E22]/50">Detalhes esculturais</p>
</div>

<div className="min-w-[200px] group cursor-pointer">
<div className="w-full aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-xl transition-all border border-[#1A2E22]/5 relative overflow-hidden">
<img alt="Fabric" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h4 className="font-medium">Linho Puro</h4>
<p className="text-xs text-[#1A2E22]/50">Fibras naturais</p>
</div>
</div>
</section>

<section className="relative h-[600px] md:h-[800px] w-full overflow-hidden parallax-wrapper">
<img alt="Workshop" className="absolute inset-0 w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A2E22] via-[#1A2E22]/40 to-transparent opacity-90 z-0"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
<h2 className="reveal-text text-white serif-font text-4xl md:text-6xl mb-12 text-center">
                O luxo está na <br/> origem da peça.
            </h2>

<div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl transform translate-y-12 opacity-0 fade-up-element">
<div className="flex justify-between items-center mb-6">
<div className="text-white/80 text-xs uppercase tracking-wider">Certificação de Origem</div>
<iconify-icon className="text-white" icon="solar:verified-check-bold"></iconify-icon>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-white text-sm mb-2">
<span>Sustentabilidade</span>
<span className="text-green-300">100%</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-200 to-green-400 w-[100%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-white text-sm mb-2">
<span>Artesanal</span>
<span>120h/peça</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-200 to-green-400 w-[92%]"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-white border border-white flex items-center justify-center">
<iconify-icon className="text-[#1A2E22] text-xs" icon="solar:leaf-bold"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-stone-200 border border-white flex items-center justify-center">
<iconify-icon className="text-[#1A2E22] text-xs" icon="solar:hammer-bold"></iconify-icon>
</div>
</div>
<div className="text-right">
<div className="text-white text-2xl font-serif">25 Anos</div>
<div className="text-white/60 text-[10px]">Garantia estrutural</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-[#1A2E22]/10 pb-6">
<h2 className="reveal-text serif-font text-4xl md:text-5xl">Coleção 2024</h2>
<div className="flex space-x-6 text-sm font-medium mt-6 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
<button className="text-[#1A2E22] border-b-2 border-[#1A2E22] pb-1 whitespace-nowrap">Living</button>
<button className="text-[#1A2E22]/40 hover:text-[#1A2E22] transition-colors pb-1 whitespace-nowrap">Jantar</button>
<button className="text-[#1A2E22]/40 hover:text-[#1A2E22] transition-colors pb-1 whitespace-nowrap">Office</button>
<button className="text-[#1A2E22]/40 hover:text-[#1A2E22] transition-colors pb-1 whitespace-nowrap">Objetos</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-16">

<div className="space-y-0">

<div className="group py-8 border-b border-[#1A2E22]/10 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="inline-block px-2 py-0.5 rounded border border-[#1A2E22]/20 text-[10px] uppercase tracking-wider mb-2">Bestseller</span>
</div>
<h3 className="serif-font text-3xl group-hover:text-[#1A2E22]/70 transition-colors">Sofá Modular Nuvem</h3>
<p className="text-sm text-[#1A2E22]/60 mt-2">Design orgânico, estrutura em madeira Cumaru, estofado em linho belga off-white.</p>
<div className="mt-4 flex gap-4 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
<span>A partir de R$ 12.000</span>
<span>•</span>
<span>Personalizável</span>
</div>
</div>

<div className="group py-8 border-b border-[#1A2E22]/10 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<h3 className="serif-font text-3xl">Mesa de Jantar Átrio</h3>
<p className="text-sm text-[#1A2E22]/60 mt-2">Base escultórica em concreto leve e tampo em Carvalho maciço.</p>
</div>

<div className="group py-8 border-b border-[#1A2E22]/10 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<h3 className="serif-font text-3xl">Banco Sela</h3>
<p className="text-sm text-[#1A2E22]/60 mt-2">Inspirado na selaria tradicional, couro sola e estrutura minimalista.</p>
</div>
</div>

<div className="hidden md:grid grid-cols-2 gap-4">
<div className="parallax-wrapper rounded-2xl overflow-hidden h-64">
<img alt="Sofa" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="parallax-wrapper rounded-2xl overflow-hidden h-64 mt-12">
<img alt="Table" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="mt-12 flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold"></iconify-icon>
                Pronta Entrega
            </span>
<span className="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold"></iconify-icon>
                Edição Numerada
            </span>
<span className="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold"></iconify-icon>
                Sob Medida
            </span>
</div>
</section>

<section className="text-[#F3F1EB] bg-[#1A2E22] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-16 items-center">
<div className="mb-12 md:mb-0">
<h2 className="reveal-text serif-font text-4xl md:text-5xl mb-6 text-white">Projetos Especiais &amp; <br/>Parceria Trade.</h2>
<p className="text-white/60 text-lg mb-8 max-w-md">Oferecemos condições exclusivas para arquitetos e designers de interiores. Personalize acabamentos e dimensões.</p>
<div className="grid grid-cols-3 gap-4 mt-12">
<img alt="Sketch" className="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="Material" className="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="Finish" className="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="relative">
<div className="absolute -top-10 -right-10 text-[10rem] font-serif text-white/5 select-none pointer-events-none">01</div>

<div className="bg-[#F3F1EB] text-[#1A2E22] rounded-3xl p-8 max-w-sm mx-auto shadow-2xl relative z-10 transform hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-[#1A2E22] text-white flex items-center justify-center">
<iconify-icon icon="solar:briefcase-linear"></iconify-icon>
</div>
<div className="px-3 py-1 bg-stone-200 rounded-full text-[10px] font-bold uppercase tracking-wide">Profissionais</div>
</div>
<h3 className="text-xl font-semibold mb-2">Conta Trade</h3>
<p className="text-xs text-[#1A2E22]/60 mb-6">Acesso total ao nosso catálogo 3D e biblioteca de texturas.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="mt-0.5 text-green-700" icon="solar:check-read-linear"></iconify-icon>
<span className="">Blocos 3D (Sketchup/BIM)</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="mt-0.5 text-green-700" icon="solar:check-read-linear"></iconify-icon>
<span className="">Descontos progressivos</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="mt-0.5 text-green-700" icon="solar:check-read-linear"></iconify-icon>
<span>Customização de tecidos</span>
</li>
</ul>
<button className="w-full bg-[#1A2E22] text-white py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">Solicitar Cadastro</button>

<div className="mt-6 flex justify-center">
<p className="text-[10px] text-[#1A2E22]/50">Aprovação em até 24h úteis</p>
</div>
</div>

<div className="mt-8 flex justify-between gap-4 text-xs text-white/40 max-w-sm mx-auto">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">Download Catálogo</div>
<div className="flex gap-x-2 gap-y-2 items-center">Agendar Visita</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F3F1EB] pt-24 pb-24">
<div className="text-center mb-16 px-4">
<span className="border border-[#1A2E22]/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide">Depoimentos</span>
<h2 className="reveal-text serif-font text-3xl md:text-4xl mt-6 mb-4">Design que transforma ambientes.</h2>
<p className="text-[#1A2E22]/60 text-sm">Veja como o Atelier está redefinindo o morar brasileiro.</p>
</div>
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-[#1A2E22]/5">
<div className="flex gap-1 text-[#1A2E22] mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-2">Acabamento impecável</h4>
<p className="text-sm text-[#1A2E22]/70 leading-relaxed mb-6">
                    "A poltrona chegou e superou minhas expectativas. O toque da madeira e a costura do couro mostram um cuidado artesanal que não se vê mais."
                </p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-[#1A2E22]/5">
<div className="flex items-center gap-2">
<span className="font-bold text-xl">5.0</span>
<span className="text-[10px] text-[#1A2E22]/50">Google Reviews</span>
</div>
<iconify-icon className="text-[#1A2E22]" icon="simple-icons:google" width="20"></iconify-icon>
</div>
</div>

<div className="bg-[#1A2E22] rounded-2xl overflow-hidden relative group h-[400px] md:h-auto text-white">
<img alt="Room" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-white hover:text-[#1A2E22] transition-colors">
<iconify-icon className="ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<p className="font-serif text-xl leading-snug mb-2">"O design da mesa de centro trouxe equilíbrio para a minha sala."</p>
<p className="text-xs text-white/70">Camila R., Arquiteta</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-[#1A2E22]/5 flex flex-col">
<div className="mb-4">
<h4 className="font-serif text-lg mb-2">Atendimento Premium</h4>
<p className="text-sm text-[#1A2E22]/70">
                        "Do projeto 3D até a entrega, a experiência foi fantástica. A equipe entendeu perfeitamente a necessidade de personalização das medidas."
                    </p>
</div>
<div className="mt-auto">
<div className="flex gap-2 mb-4 overflow-hidden">
<img alt="Detail" className="w-16 h-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Detail" className="w-16 h-16 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="text-xs">
<div className="font-bold">Julia M.</div>
<div className="text-[#1A2E22]/50">Designer de Interiores</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-[#1A2E22] text-[#F3F1EB] pt-32 pb-0 relative">
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="grid md:grid-cols-4 gap-12 mb-24">
<div className="md:col-span-1">
<p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#F3F1EB]/40">Studio</p>
<p className="text-3xl font-serif mb-6 leading-tight tracking-tight">Mobiliário com alma para espaços contemporâneos.</p>
<div className="flex gap-4">
<button className="text-xs font-medium bg-[#F3F1EB] text-[#1A2E22] px-5 py-2.5 rounded-full hover:bg-white transition-colors">Fale Conosco</button>
</div>
</div>
<div className="md:col-span-1">
<p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#F3F1EB]/40">Contato</p>
<a className="block text-lg font-serif mb-2 hover:opacity-70 transition-opacity tracking-tight" href="mailto:ola@atelier.com.br">ola@atelier.com.br</a>
<p className="text-sm text-[#F3F1EB]/60 mb-6">+55 11 99999-9999</p>
<p className="text-[10px] text-[#F3F1EB]/40 leading-relaxed">
                        Al. Gabriel Monteiro da Silva, 000<br/>
                        Jardins, São Paulo - SP<br/>
                        Brasil
                    </p>
</div>
<div className="md:col-span-2 flex flex-col md:flex-row justify-end gap-12 md:gap-24 text-sm font-medium">
<div className="flex flex-col gap-4">
<span className="text-xs font-bold uppercase tracking-widest text-[#F3F1EB]/40 mb-2">Explorar</span>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Coleção 2024</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Sobre Nós</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Materiais</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Imprensa</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold uppercase tracking-widest text-[#F3F1EB]/40 mb-2">Social</span>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Instagram</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Pinterest</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</div>

<div className="w-full text-center leading-none overflow-hidden border-t border-[#F3F1EB]/5">
<h1 className="text-[26vw] leading-[0.75] font-serif text-[#F3F1EB]/5 tracking-tighter select-none pointer-events-none -mb-[0.05em] pt-4 parallax-footer-text">
                ATELIER
            </h1>
</div>
</footer>



    </>
  );
}
