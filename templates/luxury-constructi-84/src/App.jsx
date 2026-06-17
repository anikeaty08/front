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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Roboto', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
},
colors: {
stone: {
50:  '#F5F1EA',
100: '#EDEAE3',
200: '#D9D4CB',
300: '#BDBDBD',
400: '#A09B93',
500: '#7B7872',
600: '#6B6358',
700: '#574E42',
800: '#40392F',
900: '#302B26',
950: '#221E1A',
},
sand: {
DEFAULT: '#C6B896',
50:  '#F7F3EC',
100: '#EFE8D9',
200: '#E0D4B8',
300: '#D3C5A5',
400: '#C6B896',
500: '#B5A47A',
600: '#9D8B62',
700: '#7D6E4E',
800: '#5C5139',
900: '#3B3425',
}
}
}
}
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {

            // Nav load animation
            setTimeout(() => {
                document.querySelector('header').classList.add('loaded');
            }, 100);

            // Hero text reveal
            setTimeout(() => {
                const heroTitle = document.getElementById('hero-title');
                if (heroTitle) heroTitle.classList.add('reveal-active');
            }, 300);

            // Scroll Observer
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        if (entry.target.querySelector('.text-reveal-content') ||
                            entry.target.classList.contains('text-reveal-wrapper')) {
                            entry.target.classList.add('reveal-active');
                        }
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur').forEach(el => {
                observer.observe(el);
            });

            document.querySelectorAll('h2').forEach(el => {
                if (el.querySelector('.text-reveal-content')) observer.observe(el);
            });

            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        });

        // Flashlight effect
        function updateFlashlight(event, el) {
            const rect = el.getBoundingClientRect();
            el.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
            el.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
        }
    
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
      
<div className="w-full relative bg-[#F5F1EA]">

<div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-12 gap-0 z-0 h-full w-full">
<div className="hidden md:block md:col-span-3 border-r border-stone-300/40 h-full"></div>
<div className="hidden md:block md:col-span-6 border-r border-stone-300/40 h-full"></div>
<div className="hidden md:block md:col-span-3 h-full"></div>
</div>

<header className="relative z-50 border-b border-stone-300 sticky top-0 bg-[#F5F1EA]/95 backdrop-blur-md nav-load">
<div className="flex justify-between items-center px-6 md:px-12 py-5">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group cursor-pointer" href="#">
<iconify-icon className="text-xl text-stone-900 group-hover:rotate-180 transition-transform duration-700" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="font-medium tracking-tighter text-lg text-stone-900">AGROURBANO</span>
</a>
</div>
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
<a className="text-xs font-medium tracking-widest uppercase hover:text-stone-500 transition-colors text-stone-900" href="#sobre">Empresa</a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-stone-500 transition-colors text-stone-900" href="#projetos">Portfólio</a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-stone-500 transition-colors text-stone-900" href="#depoimentos">Sustentabilidade</a>
</div>
<div className="flex items-center">
<a className="btn-beam px-6 py-2.5 bg-stone-900 text-white rounded-full text-xs font-normal hover:bg-stone-700 transition-all flex items-center gap-2 group" href="#contato">
                        Fale Conosco
                        <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
</div>
</header>

<section className="relative z-10 min-h-[90vh] flex flex-col noise-overlay bg-stone-950">

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Empreendimento Imponente Agro Urbano" className="w-full h-full object-cover object-center animate-zoom opacity-80" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-950/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-stone-950/20"></div>
</div>

<div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-20 mt-12">
<div className="reveal delay-200 mb-8">
<span className="px-4 py-1.5 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest backdrop-blur-md bg-white/10 text-stone-200 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-sand rounded-full animate-pulse"></span>
                        Líder no mercado de alto padrão
                    </span>
</div>
<h1 className="hero-mega-text font-medium tracking-tighter text-center text-white" id="hero-title">
<span className="text-reveal-wrapper block">
<span className="text-reveal-content delay-300">Construindo</span>
</span>
<span className="text-reveal-wrapper block mt-2">
<span className="text-reveal-content delay-500 text-outline-white">Legados.</span>
</span>
</h1>
<p className="mt-8 text-lg md:text-xl text-stone-300 text-center max-w-2xl leading-relaxed reveal delay-600 font-normal">
                    A Agro Urbano combina engenharia de precisão, design autoral e sustentabilidade para erguer os empreendimentos mais desejados do Brasil.
                </p>
<div className="mt-12 flex flex-wrap items-center justify-center gap-4 reveal delay-700">
<div className="group relative">
<div className="absolute -inset-1 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
<a className="btn-beam relative z-10 px-8 py-4 bg-white text-stone-900 rounded-full text-sm font-normal hover:bg-stone-100 transition-all flex items-center gap-3 group" href="#projetos">
                            Explorar Portfólio
                            <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
<a className="inline-flex items-center gap-2 text-sm font-normal uppercase tracking-widest border border-white/30 rounded-full px-8 py-4 hover:border-white hover:bg-white/10 transition-all duration-300 text-white" href="#sobre">
                        Nossa História
                    </a>
</div>
</div>

<div className="border-t border-stone-300 grid grid-cols-2 md:grid-cols-4 bg-[#F5F1EA]/95 backdrop-blur-md relative z-10">
<div className="p-6 md:p-8 border-r border-b md:border-b-0 border-stone-300 reveal delay-400 group hover:bg-sand-50/60 transition-colors">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-lg text-stone-400 group-hover:text-sand-600 transition-colors" icon="solar:calendar-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-stone-500">História</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-stone-900">25<span className="text-sand text-2xl md:text-4xl">+</span></h2>
<span className="text-xs text-stone-500 block mt-1">Anos de atuação</span>
</div>
<div className="p-6 md:p-8 border-r border-b md:border-b-0 border-stone-300 reveal delay-500 group hover:bg-sand-50/60 transition-colors">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-lg text-stone-400 group-hover:text-sand-600 transition-colors" icon="solar:buildings-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-stone-500">Volume</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-stone-900">120<span className="text-sand text-2xl md:text-4xl">+</span></h2>
<span className="text-xs text-stone-500 block mt-1">Obras entregues</span>
</div>
<div className="p-6 md:p-8 border-r border-stone-300 reveal delay-600 group hover:bg-sand-50/60 transition-colors">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-lg text-stone-400 group-hover:text-sand-600 transition-colors" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-stone-500">Alcance</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-stone-900">14</h2>
<span className="text-xs text-stone-500 block mt-1">Estados Brasileiros</span>
</div>
<div className="p-6 md:p-8 reveal delay-700 group hover:bg-sand-50/60 transition-colors">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-lg text-stone-400 group-hover:text-sand-600 transition-colors" icon="solar:chart-square-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-stone-500">Impacto</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-stone-900">8.5<span className="text-sand text-2xl md:text-4xl">B</span></h2>
<span className="text-xs text-stone-500 block mt-1">VGV Gerado (R$)</span>
</div>
</div>
</section>

<div className="border-b border-stone-300 overflow-hidden py-4 bg-stone-900 relative z-10">
<div className="marquee-container">
<div className="marquee-content">
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">Engenharia de Valor</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">•</span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">Agro Urbano</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">•</span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">Certificação LEED</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">•</span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">Arquitetura Autoral</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">•</span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">Prazos Rigorosos</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">•</span>
</div>
<div className="marquee-content">
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">Engenharia de Valor</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">•</span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">Agro Urbano</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">•</span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">Certificação LEED</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">•</span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">Arquitetura Autoral</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">•</span>
<span className="text-xs font-mono uppercase tracking-widest text-sand-300 mx-10">Prazos Rigorosos</span>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600 mx-10">•</span>
</div>
</div>
</div>

<section className="relative z-10 border-b border-stone-300" id="sobre">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[70vh]">
<div className="md:col-span-5 p-8 md:p-16 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col justify-center reveal-left">
<span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-6">Manifesto</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-8 leading-tight">
                        A solidez que estrutura o futuro.
                    </h2>
<p className="text-stone-600 text-base leading-relaxed mb-6 font-normal">
                        Como construtora líder no Brasil, a Agro Urbano não levanta apenas edifícios; nós desenvolvemos ecossistemas urbanos. Nossa abordagem integra alta tecnologia construtiva com materiais nobres e sustentáveis.
                    </p>
<p className="text-stone-500 text-sm leading-relaxed mb-10 font-normal">
                        Cada projeto é uma afirmação de durabilidade e design. Do planejamento estratégico à entrega das chaves, operamos com transparência absoluta e rigor inegociável nos detalhes.
                    </p>
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center bg-white glow-hover">
<iconify-icon className="text-lg text-stone-700" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<span className="text-xs font-mono text-stone-600 uppercase">Qualidade ISO 9001</span>
</div>
</div>
</div>
<div className="md:col-span-7 p-8 md:p-12 flex items-end justify-end relative overflow-hidden flashlight-card min-h-[400px] md:min-h-full" onmousemove="updateFlashlight(event, this)">
<img alt="Nossa Engenharia" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2s] hover:scale-105" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/10 pointer-events-none"></div>
<div className="relative w-full max-w-sm reveal-scale delay-200 z-10">
<div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-sm border border-stone-200/50 flex flex-col p-8 justify-between transform transition-transform duration-700 ease-out hover:-translate-y-2">
<iconify-icon className="text-4xl text-stone-300 mb-8" icon="solar:ruler-cross-pen-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-2">Precisão Geométrica</h3>
<div className="h-px w-12 bg-sand mb-3"></div>
<p className="text-xs text-stone-500 leading-relaxed font-mono">Tolerância zero para imperfeições. A fundação de nossa reputação.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-b border-stone-300 bg-stone-50/50" id="projetos">
<div className="p-8 md:p-16 border-b border-stone-300 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="reveal">
<span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-4">Portfólio Selecionado</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">Empreendimentos</h2>
</div>
<a className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors reveal delay-200" href="#">
                    Ver todos
                    <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1">

<div className="group border-b border-stone-300 hover:bg-white transition-colors duration-500 cursor-pointer overflow-hidden animated-border glow-hover flashlight-card" onmousemove="updateFlashlight(event, this)">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[400px]">
<div className="md:col-span-5 p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-stone-300 relative z-10 bg-[#F5F1EA]/80 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-mono text-stone-400">01</span>
<div className="h-px w-8 bg-stone-300"></div>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600">Residencial High-End</span>
</div>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 text-stone-900">Jardins Tower</h3>
<p className="text-stone-500 text-sm leading-relaxed font-normal mb-8">
                                O metro quadrado mais valorizado de São Paulo. Arquitetura atemporal com fachadas ativas e integração total com a natureza urbana.
                            </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 border border-stone-300 rounded-full text-xs font-mono uppercase text-stone-500">100% Vendido</span>
<span className="px-3 py-1 border border-stone-300 rounded-full text-xs font-mono uppercase text-stone-500">2025</span>
</div>
</div>
<div className="md:col-span-7 relative overflow-hidden bg-stone-200">
<div className="absolute inset-0 flex items-center justify-center p-0 md:p-12 opacity-90 group-hover:opacity-100 transition-opacity duration-700 bg-stone-200">
<div className="w-full h-full bg-stone-800 rounded-sm transform group-hover:scale-105 transition-transform duration-1000 ease-out shadow-2xl relative overflow-hidden">
<img alt="Jardins Tower" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8">
<iconify-icon className="text-4xl text-white/80" icon="solar:city-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group border-b border-stone-300 hover:bg-white transition-colors duration-500 cursor-pointer overflow-hidden animated-border glow-hover flashlight-card" onmousemove="updateFlashlight(event, this)">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[400px]">
<div className="md:col-span-5 p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-stone-300 relative z-10 bg-[#F5F1EA]/80 backdrop-blur-sm md:order-2">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-mono text-stone-400">02</span>
<div className="h-px w-8 bg-stone-300"></div>
<span className="text-xs font-mono uppercase tracking-widest text-stone-600">Complexo Corporativo</span>
</div>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 text-stone-900">Aura Corporate</h3>
<p className="text-stone-500 text-sm leading-relaxed font-normal mb-8">
                                O epicentro dos grandes negócios no Centro-Oeste. Lajes corporativas inteligentes com eficiência energética máxima e certificação LEED Platinum.
                            </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 bg-stone-900 text-white rounded-full text-xs font-mono uppercase">Em Obras</span>
<span className="px-3 py-1 border border-stone-300 rounded-full text-xs font-mono uppercase text-stone-500">2026</span>
</div>
</div>
<div className="md:col-span-7 relative overflow-hidden bg-stone-300 md:order-1">
<div className="absolute inset-0 flex items-center justify-center p-0 md:p-12 opacity-90 group-hover:opacity-100 transition-opacity duration-700 bg-stone-300">
<div className="w-full h-full bg-stone-800 rounded-sm transform group-hover:scale-105 transition-transform duration-1000 ease-out shadow-2xl relative overflow-hidden">
<img alt="Aura Corporate" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8">
<iconify-icon className="text-4xl text-white/80" icon="solar:smart-home-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-b border-stone-300 bg-white">
<div className="grid grid-cols-1 md:grid-cols-4">
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col items-start reveal group">
<div className="w-14 h-14 rounded-xl border border-stone-200 flex items-center justify-center bg-stone-50 group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500 mb-8 glow-hover">
<iconify-icon className="text-2xl text-stone-600 group-hover:text-white transition-colors" icon="solar:cpu-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">Tecnologia BIM</h4>
<p className="text-xs text-stone-500 leading-relaxed font-normal">
                        Modelagem da informação da construção em 6D para controle absoluto de custos e prazos operacionais.
                    </p>
</div>
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col items-start reveal delay-100 group">
<div className="w-14 h-14 rounded-xl border border-stone-200 flex items-center justify-center bg-stone-50 group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500 mb-8 glow-hover">
<iconify-icon className="text-2xl text-stone-600 group-hover:text-white transition-colors" icon="solar:leaf-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">ESG Nativo</h4>
<p className="text-xs text-stone-500 leading-relaxed font-normal">
                        Canteiros de obras com emissão zero e reaproveitamento de 90% dos resíduos sólidos gerados.
                    </p>
</div>
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col items-start reveal delay-200 group">
<div className="w-14 h-14 rounded-xl border border-stone-200 flex items-center justify-center bg-stone-50 group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500 mb-8 glow-hover">
<iconify-icon className="text-2xl text-stone-600 group-hover:text-white transition-colors" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">Design System</h4>
<p className="text-xs text-stone-500 leading-relaxed font-normal">
                        Padronização estética e funcional que garante a mesma assinatura de luxo em todos os projetos.
                    </p>
</div>
<div className="p-8 md:p-12 flex flex-col items-start reveal delay-300 group bg-stone-50/50">
<div className="w-14 h-14 rounded-xl border border-stone-200 flex items-center justify-center bg-white group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500 mb-8 glow-hover relative overflow-hidden">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,#C6B896_360deg)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
<div className="absolute inset-[1px] bg-stone-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-2xl text-stone-600 group-hover:text-sand transition-colors relative z-10" icon="solar:chart-2-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">ROI Comprovado</h4>
<p className="text-xs text-stone-500 leading-relaxed font-normal">
                        Valorização histórica de 35% acima da média de mercado na entrega das chaves dos nossos ativos.
                    </p>
</div>
</div>
</section>

<section className="relative z-10 border-b border-stone-300 bg-[#F5F1EA]" id="depoimentos">
<div className="p-8 md:p-16 border-b border-stone-300 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="reveal">
<span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-4">Reconhecimento</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">A voz de quem confia</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col reveal group hover:bg-white transition-colors duration-500">
<span className="text-5xl text-sand font-serif block leading-none h-6 mb-4">"</span>
<p className="text-stone-600 text-sm leading-relaxed mb-10 flex-1 font-normal">
                        A entrega do Aura Corporate superou todas as nossas expectativas. O rigor com os prazos e a qualidade inquestionável dos acabamentos reforçam o padrão Agro Urbano de construir.
                    </p>
<div className="mt-auto">
<h4 className="text-base font-medium text-stone-900 tracking-tight">Roberto Almeida</h4>
<span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mt-1">CEO, Investimentos Alpha</span>
</div>
</div>
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col reveal delay-100 group hover:bg-white transition-colors duration-500">
<span className="text-5xl text-sand font-serif block leading-none h-6 mb-4">"</span>
<p className="text-stone-600 text-sm leading-relaxed mb-10 flex-1 font-normal">
                        Morar no Jardins Tower é vivenciar a excelência diária. Desde o projeto de automação até o isolamento acústico, cada detalhe foi milimetricamente pensado para proporcionar conforto absoluto.
                    </p>
<div className="mt-auto">
<h4 className="text-base font-medium text-stone-900 tracking-tight">Helena Junqueira</h4>
<span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mt-1">Moradora</span>
</div>
</div>
<div className="p-8 md:p-12 flex flex-col reveal delay-200 group hover:bg-white transition-colors duration-500">
<span className="text-5xl text-sand font-serif block leading-none h-6 mb-4">"</span>
<p className="text-stone-600 text-sm leading-relaxed mb-10 flex-1 font-normal">
                        Nossa parceria com a Agro Urbano se baseia em confiança irrestrita. A transparência na gestão da obra e o compromisso ESG são diferenciais competitivos que blindam e valorizam nossos ativos.
                    </p>
<div className="mt-auto">
<h4 className="text-base font-medium text-stone-900 tracking-tight">Carlos Drummond</h4>
<span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mt-1">Diretor, Fundo Imobiliário Prime</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 bg-stone-900 text-stone-200 py-24 lg:py-32 border-b border-stone-800" id="contato">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="reveal flex flex-col justify-between h-full">
<div>
<span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-6">[ INICIAR DIÁLOGO ]</span>
<h2 className="text-4xl md:text-5xl tracking-tighter font-medium text-white mb-8 max-w-md">
                                Vamos construir o futuro juntos.
                            </h2>
<p className="text-sm text-stone-400 leading-relaxed max-w-sm font-normal mb-12">
                                Conecte-se com nossos especialistas para explorar soluções sob medida para o seu próximo empreendimento. Da viabilidade estrutural ao design autoral, estamos prontos para guiar sua visão.
                            </p>
</div>
<div className="flex flex-col sm:flex-row gap-12 border-t border-stone-800 pt-10 mt-8 lg:mt-auto">
<div className="flex flex-col gap-2">
<span className="text-xs font-mono tracking-widest text-stone-500 uppercase font-medium">Novos Negócios</span>
<a className="text-sm font-medium hover:text-sand transition-colors text-stone-200" href="mailto:contato@agrourbano.com.br">contato@agrourbano.com.br</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-mono tracking-widest text-stone-500 uppercase font-medium">Linha Direta</span>
<a className="text-sm font-medium hover:text-sand transition-colors text-stone-200" href="tel:+551130000000">+55 (11) 3000-0000</a>
</div>
</div>
</div>
<div className="reveal delay-200 bg-stone-950/50 rounded-sm p-8 md:p-10 border border-stone-800 relative z-10">
<form className="flex flex-col gap-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-mono tracking-widest text-stone-500 uppercase">Nome</label>
<input className="bg-transparent border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors" type="text"/>
</div>
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-mono tracking-widest text-stone-500 uppercase">Sobrenome</label>
<input className="bg-transparent border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-mono tracking-widest text-stone-500 uppercase">Email Corporativo</label>
<input className="bg-transparent border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors" type="email"/>
</div>
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-mono tracking-widest text-stone-500 uppercase">Área de Interesse</label>
<select className="bg-transparent border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors appearance-none cursor-pointer rounded-none">
<option className="bg-stone-900 text-stone-400" disabled="" selected="" value="">Selecione uma opção...</option>
<option className="bg-stone-900 text-white" value="incorporacao">Incorporação e Loteamento</option>
<option className="bg-stone-900 text-white" value="construcao">Construção Alto Padrão</option>
<option className="bg-stone-900 text-white" value="parcerias">Parcerias de Negócios</option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-stone-500 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-2 relative mb-2">
<label className="text-xs font-mono tracking-widest text-stone-500 uppercase">Mensagem</label>
<textarea className="bg-transparent border-b border-stone-700 text-sm text-white py-2 focus:outline-none focus:border-sand transition-colors resize-none" rows="3"></textarea>
</div>
<div className="flex items-center gap-3 mb-2">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer appearance-none w-4 h-4 border border-stone-700 rounded-sm checked:bg-sand checked:border-sand cursor-pointer transition-colors bg-transparent" id="terms" type="checkbox"/>
<iconify-icon className="absolute text-stone-900 opacity-0 peer-checked:opacity-100 pointer-events-none" height="12" icon="solar:check-read-linear" style={{strokeWidth: '2px'}} width="12"></iconify-icon>
</div>
<label className="text-xs text-stone-400 font-normal cursor-pointer select-none" htmlFor="terms">Concordo com os Termos &amp; Política de Privacidade</label>
</div>
<button className="btn-beam bg-white hover:bg-stone-200 text-stone-900 text-xs font-medium tracking-widest uppercase py-4 rounded-sm transition-colors w-full flex justify-center items-center gap-2 group" type="button">
                                Enviar Solicitação <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="relative z-10 bg-stone-900 text-stone-200 pt-20 pb-12 overflow-hidden border-t border-stone-800">

<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4 text-white leading-tight">
                            Construímos o <br/>
<span className="text-outline-white">Brasil.</span>
</h2>
<p className="text-sm text-stone-400 font-normal max-w-sm mt-6">
                            Sede Administrativa:<br/>
                            Av. Brigadeiro Faria Lima, 3000<br/>
                            São Paulo, SP — Brasil
                        </p>
</div>
<div className="flex flex-col md:items-end justify-end reveal delay-200">
<div className="flex flex-col gap-4 text-left md:text-right">
<a className="text-sm font-medium text-stone-400 hover:text-white transition-colors" href="#">Investidores</a>
<a className="text-sm font-medium text-stone-400 hover:text-white transition-colors" href="#">Trabalhe Conosco</a>
<a className="text-sm font-medium text-stone-400 hover:text-white transition-colors" href="#">Portal do Cliente</a>
<a className="text-sm font-medium text-stone-400 hover:text-white transition-colors" href="#">Política de Privacidade</a>
</div>
</div>
</div>
<div className="border-t border-stone-800 w-full mb-10"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-sand" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="font-medium tracking-tighter text-lg text-white">AGROURBANO</span>
</div>
<span className="text-xs text-stone-600 font-mono tracking-widest uppercase">© 2026 Agro Urbano S.A.</span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.03] transform translate-y-[28%] flex justify-center z-0">
<h1 className="text-center tracking-tighter text-white select-none font-medium whitespace-nowrap" style={{fontSize: '20vw'}}>
                    AGROURBANO
                </h1>
</div>
</footer>
</div>



    </>
  );
}
