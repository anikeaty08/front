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



        // Initialize Lucide icons
        lucide.createIcons();
        
        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Intersection Observer for fade-in animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-sm border-b border-[#1F1F1F]">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-[#C8FFB0]" href="#hero">VIRGEM</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-[#9A9A9A] hover:text-[#E0E0E0] transition-colors" href="#simbolismo">Simbolismo</a>
<a className="text-sm text-[#9A9A9A] hover:text-[#E0E0E0] transition-colors" href="#personalidade">Personalidade</a>
<a className="text-sm text-[#9A9A9A] hover:text-[#E0E0E0] transition-colors" href="#compatibilidade">Compatibilidade</a>
<a className="text-sm text-[#9A9A9A] hover:text-[#E0E0E0] transition-colors" href="#carreira">Carreira</a>
<a className="text-sm text-[#9A9A9A] hover:text-[#E0E0E0] transition-colors" href="#constelacao">Constelação</a>
</div>

<button className="md:hidden text-[#E0E0E0]" id="menuBtn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden md:hidden bg-[#0D0D0D] border-t border-[#1F1F1F] px-6 py-4" id="mobileMenu">
<div className="flex flex-col gap-4">
<a className="text-sm text-[#9A9A9A] hover:text-[#E0E0E0] transition-colors" href="#simbolismo">Simbolismo</a>
<a className="text-sm text-[#9A9A9A] hover:text-[#E0E0E0] transition-colors" href="#personalidade">Personalidade</a>
<a className="text-sm text-[#9A9A9A] hover:text-[#E0E0E0] transition-colors" href="#compatibilidade">Compatibilidade</a>
<a className="text-sm text-[#9A9A9A] hover:text-[#E0E0E0] transition-colors" href="#carreira">Carreira</a>
<a className="text-sm text-[#9A9A9A] hover:text-[#E0E0E0] transition-colors" href="#constelacao">Constelação</a>
</div>
</div>
</nav>

<section className="min-h-screen flex items-center justify-center star-bg relative overflow-hidden" id="hero">
<div className="absolute inset-0 opacity-10">
<svg className="w-full h-full" viewbox="0 0 800 600">
<circle cx="150" cy="120" fill="#C8FFB0" r="1"></circle>
<circle cx="320" cy="80" fill="#C8FFB0" r="1.5"></circle>
<circle cx="480" cy="150" fill="#C8FFB0" r="1"></circle>
<circle cx="620" cy="100" fill="#C8FFB0" r="1.2"></circle>
<circle cx="200" cy="300" fill="#C8FFB0" r="1"></circle>
<circle cx="550" cy="350" fill="#C8FFB0" r="1.5"></circle>
<circle cx="700" cy="280" fill="#C8FFB0" r="1"></circle>
<circle cx="100" cy="450" fill="#C8FFB0" r="1.2"></circle>
<circle cx="400" cy="500" fill="#C8FFB0" r="1"></circle>
<circle cx="650" cy="480" fill="#C8FFB0" r="1.5"></circle>
</svg>
</div>
<div className="text-center px-6 relative z-10">

<div className="fade-in mb-8">
<svg className="w-24 h-24 mx-auto text-[#C8FFB0] constellation-glow" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 100 100">
<path d="M25 20 C25 20, 25 60, 25 70 M25 35 C35 35, 40 25, 40 35 C40 45, 40 70, 40 70 M40 35 C50 35, 55 25, 55 35 C55 45, 55 70, 55 70 M55 50 C65 50, 75 40, 75 55 C75 70, 65 80, 55 70 M75 55 L85 45"></path>
</svg>
</div>
<h1 className="fade-in fade-in-delay-1 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Virgem
            </h1>
<p className="fade-in fade-in-delay-2 text-xl md:text-2xl text-[#C8FFB0] font-light mb-4">
                Precisão, Detalhe e Sabedoria
            </p>
<p className="fade-in fade-in-delay-3 text-base md:text-lg text-[#9A9A9A] max-w-xl mx-auto mb-10">
                O sexto signo do zodíaco, regido por Mercúrio, representa a busca pela perfeição através da análise meticulosa e do serviço altruísta.
            </p>
<a className="fade-in fade-in-delay-4 inline-flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] rounded-full text-sm font-medium hover:border-[#C8FFB0] hover:text-[#C8FFB0] transition-all duration-300" href="#simbolismo">
                Explorar
                <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
</div>
</section>

<section className="py-24 md:py-32 border-t border-[#1A1A1A]" id="simbolismo">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<p className="fade-in text-xs uppercase tracking-widest text-[#C8FFB0] mb-4">Simbolismo</p>
<h2 className="fade-in fade-in-delay-1 text-3xl md:text-4xl font-semibold tracking-tight">A Essência de Virgem</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 md:gap-12">

<div className="fade-in text-center p-8 rounded-2xl border border-[#1F1F1F] bg-[#111111]/50">
<div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full border border-[#2A2A2A]">
<svg className="w-8 h-8 text-[#C8FFB0]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 100">
<path d="M25 20 C25 20, 25 60, 25 70 M25 35 C35 35, 40 25, 40 35 C40 45, 40 70, 40 70 M40 35 C50 35, 55 25, 55 35 C55 45, 55 70, 55 70 M55 50 C65 50, 75 40, 75 55 C75 70, 65 80, 55 70 M75 55 L85 45"></path>
</svg>
</div>
<h3 className="text-lg font-medium mb-3">Glifo</h3>
<p className="text-sm text-[#9A9A9A] leading-relaxed">
                        A virgem segurando uma espiga de trigo, simbolizando colheita, fertilidade e a pureza da análise.
                    </p>
</div>

<div className="fade-in fade-in-delay-1 text-center p-8 rounded-2xl border border-[#1F1F1F] bg-[#111111]/50">
<div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full border border-[#2A2A2A]">
<i className="w-8 h-8 text-[#C8FFB0]" data-lucide="mountain"></i>
</div>
<h3 className="text-lg font-medium mb-3">Elemento Terra</h3>
<p className="text-sm text-[#9A9A9A] leading-relaxed">
                        Prático, estável e conectado à realidade material. A terra confere solidez e capacidade de manifestação.
                    </p>
</div>

<div className="fade-in fade-in-delay-2 text-center p-8 rounded-2xl border border-[#1F1F1F] bg-[#111111]/50">
<div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full border border-[#2A2A2A]">
<i className="w-8 h-8 text-[#C8FFB0]" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-medium mb-3">Mercúrio</h3>
<p className="text-sm text-[#9A9A9A] leading-relaxed">
                        Regente planetário que confere inteligência aguçada, comunicação precisa e mente analítica.
                    </p>
</div>
</div>
<div className="fade-in mt-16 max-w-3xl mx-auto text-center">
<p className="text-base md:text-lg text-[#9A9A9A] leading-relaxed">
                    Virgem representa a busca pela ordem em meio ao caos. Seu simbolismo está profundamente ligado ao discernimento, à capacidade de separar o essencial do supérfluo, e ao serviço dedicado aos outros. A espiga de trigo em suas mãos simboliza a colheita do conhecimento cuidadosamente cultivado.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-[#1A1A1A] bg-[#111111]/30" id="personalidade">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<p className="fade-in text-xs uppercase tracking-widest text-[#C8FFB0] mb-4">Personalidade</p>
<h2 className="fade-in fade-in-delay-1 text-3xl md:text-4xl font-semibold tracking-tight">Traços Característicos</h2>
</div>
<div className="grid md:grid-cols-2 gap-6 md:gap-8">

<div className="fade-in p-8 rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-[#C8FFB0]/10 flex items-center justify-center">
<i className="w-5 h-5 text-[#C8FFB0]" data-lucide="trending-up"></i>
</div>
<h3 className="text-lg font-medium">Pontos Fortes</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#C8FFB0] mt-1 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-[#9A9A9A]">Atenção meticulosa aos detalhes</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#C8FFB0] mt-1 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-[#9A9A9A]">Pensamento analítico e lógico</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#C8FFB0] mt-1 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-[#9A9A9A]">Confiabilidade e dedicação</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#C8FFB0] mt-1 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-[#9A9A9A]">Humildade e modéstia genuínas</span>
</li>
</ul>
</div>

<div className="fade-in fade-in-delay-1 p-8 rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-[#C8FFB0]/10 flex items-center justify-center">
<i className="w-5 h-5 text-[#C8FFB0]" data-lucide="target"></i>
</div>
<h3 className="text-lg font-medium">Desafios</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#9A9A9A] mt-1 flex-shrink-0" data-lucide="minus"></i>
<span className="text-sm text-[#9A9A9A]">Tendência ao perfeccionismo excessivo</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#9A9A9A] mt-1 flex-shrink-0" data-lucide="minus"></i>
<span className="text-sm text-[#9A9A9A]">Autocrítica severa</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#9A9A9A] mt-1 flex-shrink-0" data-lucide="minus"></i>
<span className="text-sm text-[#9A9A9A]">Preocupação constante com detalhes</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#9A9A9A] mt-1 flex-shrink-0" data-lucide="minus"></i>
<span className="text-sm text-[#9A9A9A]">Dificuldade em delegar tarefas</span>
</li>
</ul>
</div>

<div className="fade-in fade-in-delay-2 p-8 rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-[#C8FFB0]/10 flex items-center justify-center">
<i className="w-5 h-5 text-[#C8FFB0]" data-lucide="heart"></i>
</div>
<h3 className="text-lg font-medium">Virtudes</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#C8FFB0] mt-1 flex-shrink-0" data-lucide="star"></i>
<span className="text-sm text-[#9A9A9A]">Integridade e honestidade</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#C8FFB0] mt-1 flex-shrink-0" data-lucide="star"></i>
<span className="text-sm text-[#9A9A9A]">Espírito de serviço altruísta</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#C8FFB0] mt-1 flex-shrink-0" data-lucide="star"></i>
<span className="text-sm text-[#9A9A9A]">Paciência e perseverança</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#C8FFB0] mt-1 flex-shrink-0" data-lucide="star"></i>
<span className="text-sm text-[#9A9A9A]">Sabedoria prática</span>
</li>
</ul>
</div>

<div className="fade-in fade-in-delay-3 p-8 rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-[#C8FFB0]/10 flex items-center justify-center">
<i className="w-5 h-5 text-[#C8FFB0]" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium">Comportamento Social</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#C8FFB0] mt-1 flex-shrink-0" data-lucide="circle"></i>
<span className="text-sm text-[#9A9A9A]">Reservado, mas genuinamente prestativo</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#C8FFB0] mt-1 flex-shrink-0" data-lucide="circle"></i>
<span className="text-sm text-[#9A9A9A]">Observador atento das dinâmicas sociais</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#C8FFB0] mt-1 flex-shrink-0" data-lucide="circle"></i>
<span className="text-sm text-[#9A9A9A]">Leal e confiável nos relacionamentos</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#C8FFB0] mt-1 flex-shrink-0" data-lucide="circle"></i>
<span className="text-sm text-[#9A9A9A]">Prefere círculos íntimos e significativos</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-[#1A1A1A]" id="compatibilidade">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<p className="fade-in text-xs uppercase tracking-widest text-[#C8FFB0] mb-4">Compatibilidade</p>
<h2 className="fade-in fade-in-delay-1 text-3xl md:text-4xl font-semibold tracking-tight">Conexões Cósmicas</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="fade-in p-6 rounded-2xl border border-[#1F1F1F] bg-[#111111]/50 hover:border-[#C8FFB0]/30 transition-colors">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#C8FFB0]/10 flex items-center justify-center text-lg font-medium text-[#C8FFB0]">
                                ♉
                            </div>
<div>
<h3 className="font-medium">Touro</h3>
<p className="text-xs text-[#9A9A9A]">Elemento Terra</p>
</div>
</div>
<span className="text-sm text-[#C8FFB0]">95%</span>
</div>
<div className="w-full h-1 bg-[#1F1F1F] rounded-full overflow-hidden">
<div className="h-full bg-[#C8FFB0] rounded-full" style={{width: '95%'}}></div>
</div>
<p className="mt-4 text-sm text-[#9A9A9A]">
                        Conexão terrena profunda. Ambos valorizam estabilidade, qualidade e crescimento gradual.
                    </p>
</div>

<div className="fade-in fade-in-delay-1 p-6 rounded-2xl border border-[#1F1F1F] bg-[#111111]/50 hover:border-[#C8FFB0]/30 transition-colors">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#C8FFB0]/10 flex items-center justify-center text-lg font-medium text-[#C8FFB0]">
                                ♑
                            </div>
<div>
<h3 className="font-medium">Capricórnio</h3>
<p className="text-xs text-[#9A9A9A]">Elemento Terra</p>
</div>
</div>
<span className="text-sm text-[#C8FFB0]">92%</span>
</div>
<div className="w-full h-1 bg-[#1F1F1F] rounded-full overflow-hidden">
<div className="h-full bg-[#C8FFB0] rounded-full" style={{width: '92%'}}></div>
</div>
<p className="mt-4 text-sm text-[#9A9A9A]">
                        Parceria ambiciosa e prática. Compartilham objetivos concretos e ética de trabalho.
                    </p>
</div>

<div className="fade-in fade-in-delay-2 p-6 rounded-2xl border border-[#1F1F1F] bg-[#111111]/50 hover:border-[#C8FFB0]/30 transition-colors">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#C8FFB0]/10 flex items-center justify-center text-lg font-medium text-[#C8FFB0]">
                                ♋
                            </div>
<div>
<h3 className="font-medium">Câncer</h3>
<p className="text-xs text-[#9A9A9A]">Elemento Água</p>
</div>
</div>
<span className="text-sm text-[#C8FFB0]">88%</span>
</div>
<div className="w-full h-1 bg-[#1F1F1F] rounded-full overflow-hidden">
<div className="h-full bg-[#C8FFB0] rounded-full" style={{width: '88%'}}></div>
</div>
<p className="mt-4 text-sm text-[#9A9A9A]">
                        Complementação emocional. O cuidado de Câncer encontra o serviço devotado de Virgem.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-[#1A1A1A] bg-[#111111]/30" id="carreira">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<p className="fade-in text-xs uppercase tracking-widest text-[#C8FFB0] mb-4">Vida &amp; Carreira</p>
<h2 className="fade-in fade-in-delay-1 text-3xl md:text-4xl font-semibold tracking-tight">Propósito Profissional</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="fade-in">
<h3 className="text-xl font-medium mb-6 tracking-tight">Raciocínio Analítico</h3>
<p className="text-[#9A9A9A] leading-relaxed mb-6">
                        Virginianos possuem uma capacidade excepcional de analisar situações complexas e encontrar soluções práticas. Seu olhar atento aos detalhes os torna indispensáveis em ambientes que exigem precisão e organização.
                    </p>
<p className="text-[#9A9A9A] leading-relaxed">
                        A mente de Virgem funciona como um sistema refinado de processamento de informações, capaz de identificar padrões, inconsistências e oportunidades de melhoria que passam despercebidas por outros.
                    </p>
</div>
<div className="fade-in fade-in-delay-1">
<h3 className="text-xl font-medium mb-6 tracking-tight">Áreas de Excelência</h3>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl border border-[#1F1F1F] bg-[#0D0D0D]">
<i className="w-5 h-5 text-[#C8FFB0] mb-3" data-lucide="stethoscope"></i>
<p className="text-sm font-medium">Saúde &amp; Medicina</p>
</div>
<div className="p-4 rounded-xl border border-[#1F1F1F] bg-[#0D0D0D]">
<i className="w-5 h-5 text-[#C8FFB0] mb-3" data-lucide="calculator"></i>
<p className="text-sm font-medium">Finanças &amp; Análise</p>
</div>
<div className="p-4 rounded-xl border border-[#1F1F1F] bg-[#0D0D0D]">
<i className="w-5 h-5 text-[#C8FFB0] mb-3" data-lucide="pen-tool"></i>
<p className="text-sm font-medium">Escrita &amp; Edição</p>
</div>
<div className="p-4 rounded-xl border border-[#1F1F1F] bg-[#0D0D0D]">
<i className="w-5 h-5 text-[#C8FFB0] mb-3" data-lucide="search"></i>
<p className="text-sm font-medium">Pesquisa &amp; Ciência</p>
</div>
<div className="p-4 rounded-xl border border-[#1F1F1F] bg-[#0D0D0D]">
<i className="w-5 h-5 text-[#C8FFB0] mb-3" data-lucide="code"></i>
<p className="text-sm font-medium">Tecnologia &amp; Sistemas</p>
</div>
<div className="p-4 rounded-xl border border-[#1F1F1F] bg-[#0D0D0D]">
<i className="w-5 h-5 text-[#C8FFB0] mb-3" data-lucide="leaf"></i>
<p className="text-sm font-medium">Nutrição &amp; Bem-estar</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-[#1A1A1A]" id="constelacao">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<p className="fade-in text-xs uppercase tracking-widest text-[#C8FFB0] mb-4">Constelação</p>
<h2 className="fade-in fade-in-delay-1 text-3xl md:text-4xl font-semibold tracking-tight">Virgem no Céu Noturno</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="fade-in flex justify-center">
<svg className="w-full max-w-md h-auto constellation-glow" fill="none" viewbox="0 0 400 300">

<circle cx="80" cy="60" fill="#C8FFB0" r="3"></circle>
<circle cx="120" cy="90" fill="#C8FFB0" r="4"></circle>
<circle cx="160" cy="70" fill="#C8FFB0" r="2.5"></circle>
<circle cx="200" cy="100" fill="#C8FFB0" r="5"></circle>
<circle cx="180" cy="140" fill="#C8FFB0" r="3"></circle>
<circle cx="220" cy="160" fill="#C8FFB0" r="2.5"></circle>
<circle cx="260" cy="130" fill="#C8FFB0" r="3"></circle>
<circle cx="300" cy="110" fill="#C8FFB0" r="2.5"></circle>
<circle cx="280" cy="180" fill="#C8FFB0" r="3"></circle>
<circle cx="320" cy="200" fill="#C8FFB0" r="2"></circle>
<circle cx="240" cy="220" fill="#C8FFB0" r="2.5"></circle>
<circle cx="200" cy="240" fill="#C8FFB0" r="2"></circle>

<line opacity="0.6" stroke="#C8FFB0" strokeWidth="0.5" x1="80" x2="120" y1="60" y2="90"></line>
<line opacity="0.6" stroke="#C8FFB0" strokeWidth="0.5" x1="120" x2="160" y1="90" y2="70"></line>
<line opacity="0.6" stroke="#C8FFB0" strokeWidth="0.5" x1="160" x2="200" y1="70" y2="100"></line>
<line opacity="0.6" stroke="#C8FFB0" strokeWidth="0.5" x1="200" x2="180" y1="100" y2="140"></line>
<line opacity="0.6" stroke="#C8FFB0" strokeWidth="0.5" x1="180" x2="220" y1="140" y2="160"></line>
<line opacity="0.6" stroke="#C8FFB0" strokeWidth="0.5" x1="200" x2="260" y1="100" y2="130"></line>
<line opacity="0.6" stroke="#C8FFB0" strokeWidth="0.5" x1="260" x2="300" y1="130" y2="110"></line>
<line opacity="0.6" stroke="#C8FFB0" strokeWidth="0.5" x1="260" x2="280" y1="130" y2="180"></line>
<line opacity="0.6" stroke="#C8FFB0" strokeWidth="0.5" x1="280" x2="320" y1="180" y2="200"></line>
<line opacity="0.6" stroke="#C8FFB0" strokeWidth="0.5" x1="280" x2="240" y1="180" y2="220"></line>
<line opacity="0.6" stroke="#C8FFB0" strokeWidth="0.5" x1="240" x2="200" y1="220" y2="240"></line>

<text fill="#9A9A9A" fontSize="10" text-anchor="middle" x="200" y="85">Spica</text>
</svg>
</div>
<div className="fade-in fade-in-delay-1">
<h3 className="text-xl font-medium mb-6 tracking-tight">A Segunda Maior Constelação</h3>
<p className="text-[#9A9A9A] leading-relaxed mb-6">
                        A constelação de Virgem é a segunda maior do céu noturno, ocupando uma área de 1.294 graus quadrados. Sua estrela mais brilhante, Spica, é uma das 20 estrelas mais luminosas visíveis da Terra.
                    </p>
<p className="text-[#9A9A9A] leading-relaxed mb-6">
                        Na mitologia grega, Virgem é frequentemente associada a Deméter, deusa da colheita, ou a Astrea, a última imortal a deixar a Terra durante a Idade do Bronze, representando pureza e justiça.
                    </p>
<div className="flex flex-wrap gap-4 mt-8">
<div className="px-4 py-2 rounded-full border border-[#1F1F1F] bg-[#111111]">
<span className="text-xs text-[#9A9A9A]">Período: </span>
<span className="text-xs text-[#E0E0E0]">23/08 - 22/09</span>
</div>
<div className="px-4 py-2 rounded-full border border-[#1F1F1F] bg-[#111111]">
<span className="text-xs text-[#9A9A9A]">Estrelas: </span>
<span className="text-xs text-[#E0E0E0]">+15 visíveis</span>
</div>
<div className="px-4 py-2 rounded-full border border-[#1F1F1F] bg-[#111111]">
<span className="text-xs text-[#9A9A9A]">Melhor visualização: </span>
<span className="text-xs text-[#E0E0E0]">Maio</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-[#1A1A1A] bg-[#111111]/30" id="contato">
<div className="max-w-2xl mx-auto px-6 text-center">
<div className="fade-in mb-8">
<div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C8FFB0]/10 flex items-center justify-center">
<i className="w-7 h-7 text-[#C8FFB0]" data-lucide="mail"></i>
</div>
</div>
<h2 className="fade-in fade-in-delay-1 text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Receba Mais Conteúdo Astrológico
            </h2>
<p className="fade-in fade-in-delay-2 text-[#9A9A9A] mb-10">
                Inscreva-se para receber insights semanais sobre astrologia, trânsitos planetários e previsões personalizadas.
            </p>
<form className="fade-in fade-in-delay-3 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="flex-1 px-5 py-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-full text-sm text-[#E0E0E0] placeholder-[#9A9A9A] focus:outline-none focus:border-[#C8FFB0] transition-colors" placeholder="seu@email.com" type="email"/>
<button className="px-6 py-3 bg-[#C8FFB0] text-[#0D0D0D] rounded-full text-sm font-medium hover:bg-[#B8EFA0] transition-colors" type="submit">
                    Inscrever-se
                </button>
</form>
<p className="fade-in fade-in-delay-4 text-xs text-[#9A9A9A] mt-6">
                Sem spam. Cancele quando quiser.
            </p>
</div>
</section>

<footer className="py-8 border-t border-[#1A1A1A]">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<a className="text-sm font-semibold tracking-tight text-[#C8FFB0]" href="#hero">VIRGEM</a>
<p className="text-xs text-[#9A9A9A]">
                    © 2024 · Guia Astrológico de Virgem
                </p>
<div className="flex items-center gap-4">
<a className="text-[#9A9A9A] hover:text-[#E0E0E0] transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="text-[#9A9A9A] hover:text-[#E0E0E0] transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
