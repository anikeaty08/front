import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons({ attrs: { "stroke-width": "1.5" } });

      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
          });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        window.addEventListener('scroll', () => {
          const nav = document.getElementById('navbar');
          if (window.scrollY > 50) {
            nav.classList.add('py-2');
            nav.classList.remove('py-4');
          } else {
            nav.classList.add('py-4');
            nav.classList.remove('py-2');
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-2xl tracking-tight font-medium text-[#F7F3E8] font-serif relative group" href="#">
          RALSS
          <span className="text-[#B99668]">LUXE</span>
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B99668] transition-all duration-300 group-hover:w-full"></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-[#EDE2CC]/80">
<a className="hover:text-[#DCC9A7] transition-colors" href="#about">Sobre</a>
<a className="hover:text-[#DCC9A7] transition-colors" href="#services">Serviços</a>
<a className="hover:text-[#DCC9A7] transition-colors" href="#gallery">Galeria</a>
<a className="hover:text-[#DCC9A7] transition-colors" href="#location">Contato</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium tracking-wide text-[#120D08] uppercase bg-[#B99668] rounded-full hover:bg-[#DCC9A7] hover:shadow-[0_0_20px_rgba(185,150,104,0.35)] transition-all duration-300" href="https://wa.me/5544999324635">
          Agendar
        </a>

<button aria-label="Abrir menu" className="md:hidden text-[#F7F3E8]" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full glass-nav border-t border-[#EDE2CC]/10 p-6 flex flex-col gap-4 md:hidden" id="mobile-menu">
<a className="text-[#EDE2CC]/80 hover:text-[#DCC9A7]" href="#about">Sobre</a>
<a className="text-[#EDE2CC]/80 hover:text-[#DCC9A7]" href="#services">Serviços</a>
<a className="text-[#EDE2CC]/80 hover:text-[#DCC9A7]" href="#gallery">Galeria</a>
<a className="text-[#EDE2CC]/80 hover:text-[#DCC9A7]" href="#location">Contato</a>
<a className="text-[#B99668]" href="https://wa.me/5544999324635" target="_blank">Agendar pelo WhatsApp</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Salon Interior" className="w-full h-full object-cover object-center opacity-50 scale-105 animate-float" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=2532&amp;auto=format&amp;fit=crop" style={{animationDuration: '20s'}}/>
</div>
<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#120D08] via-[#120D08]/70 to-[#B99668]/10"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-r from-[#120D08]/90 to-transparent"></div>
<div className="w-full max-w-7xl z-20 mx-auto pt-20 px-6 relative">
<div className="max-w-2xl reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B99668]/10 border border-[#DCC9A7]/30 text-[#DCC9A7] text-xs font-medium tracking-wider uppercase mb-6 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#B99668] animate-pulse"></span>
            Salão Unissex Premium
          </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] text-[#F7F3E8] mb-6">
            Tudo em um só lugar para
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B99668] via-[#EDE2CC] to-[#F7F3E8]">
              todo estilo
            </span>
</h1>
<p className="text-xl md:text-2xl text-[#EDE2CC]/80 font-light mb-10 leading-relaxed max-w-lg">
            Viva uma experiência premium de cabelo e beleza. Luxo redefinido para ele e para ela.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-[#120D08] bg-[#B99668] rounded-full hover:bg-[#DCC9A7] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(185,150,104,0.25)]" href="https://wa.me/5544999324635">
              Agendar pelo WhatsApp • (44) 99932-4635
            </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-[#F7F3E8] border border-[#EDE2CC]/20 bg-[#F7F3E8]/5 backdrop-blur-sm rounded-full hover:bg-[#F7F3E8]/10 hover:border-[#DCC9A7]/40 transition-all duration-300" href="#services">
              Ver serviços
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#EDE2CC]/10 relative z-10">
<img alt="Stylist at work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=1674&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-2xl border border-[#B99668]/30 z-20 hidden md:block">
<img alt="Salon Product" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&amp;w=1770&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -top-10 -left-10 w-40 h-40 bg-[#B99668]/15 rounded-full blur-3xl -z-10"></div>
</div>

<div className="reveal delay-200">
<h2 className="text-[#B99668] font-medium tracking-widest text-xs uppercase mb-3">Nossa História</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#F7F3E8]">Luxo em cada detalhe</h3>
<p className="text-[#EDE2CC]/70 leading-relaxed mb-6 font-light text-base">
              Na <span className="text-[#F7F3E8] font-normal">Ralss Luxe</span>, acreditamos que estilo é uma assinatura pessoal. Nosso salão unissex combina estética moderna com hospitalidade para oferecer um refúgio de relaxamento.
            </p>
<p className="text-[#EDE2CC]/70 leading-relaxed mb-8 font-light text-base">
              Nossa equipe de profissionais usa produtos premium para garantir que seu cabelo e sua pele recebam o cuidado que merecem. Seja um corte transformador ou uma sessão de spa revigorante, estamos aqui para elevar seu estilo.
            </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-[#EDE2CC]/85 text-sm">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#DCC9A7]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Serviços profissionais unissex
              </li>
<li className="flex items-center gap-3 text-[#EDE2CC]/85 text-sm">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#DCC9A7]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Produtos premium
              </li>
<li className="flex items-center gap-3 text-[#EDE2CC]/85 text-sm">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#DCC9A7]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Profissionais experientes
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="services">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B99668]/10 rounded-full blur-[100px] -z-10"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DCC9A7]/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#F7F3E8] mb-4">Serviços Premium</h2>
<p className="text-[#EDE2CC]/75 font-light text-base">
            Tratamentos selecionados para você ficar e se sentir no seu melhor.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:border-[#B99668]/40 reveal delay-100">
<div className="w-12 h-12 rounded-xl bg-[#B99668]/12 flex items-center justify-center text-[#DCC9A7] mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-scissors w-6 h-6" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#F7F3E8] mb-3">Cortes e Finalização</h3>
<p className="text-base text-[#EDE2CC]/70 font-light mb-6">
              Cortes precisos, finalizações e looks personalizados para qualquer ocasião.
            </p>
<a className="text-xs font-medium text-[#DCC9A7] flex items-center gap-1 group-hover:gap-2 transition-all" href="https://wa.me/5544999324635">
              Agendar
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:border-[#B99668]/40 reveal delay-200">
<div className="w-12 h-12 rounded-xl bg-[#B99668]/12 flex items-center justify-center text-[#DCC9A7] mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-palette w-6 h-6" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-xl font-medium text-[#F7F3E8] mb-3">Coloração</h3>
<p className="text-base text-[#EDE2CC]/70 font-light mb-6">
              Coloração global, luzes, balayage e retoque de raiz com produtos de alta qualidade.
            </p>
<a className="text-xs font-medium text-[#DCC9A7] flex items-center gap-1 group-hover:gap-2 transition-all" href="https://wa.me/5544999324635">
              Agendar
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:border-[#B99668]/40 reveal delay-300">
<div className="w-12 h-12 rounded-xl bg-[#B99668]/12 flex items-center justify-center text-[#DCC9A7] mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium text-[#F7F3E8] mb-3">Tratamentos de Beleza</h3>
<p className="text-base text-[#EDE2CC]/70 font-light mb-6">
              Limpeza de pele, hidratações e terapias de rejuvenescimento de acordo com seu tipo de pele.
            </p>
<a className="text-xs font-medium text-[#DCC9A7] flex items-center gap-1 group-hover:gap-2 transition-all" href="https://wa.me/5544999324635">
              Agendar
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:border-[#B99668]/40 reveal delay-100">
<div className="w-12 h-12 rounded-xl bg-[#B99668]/12 flex items-center justify-center text-[#DCC9A7] mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-gem w-6 h-6" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#F7F3E8] mb-3">Spa &amp; Grooming</h3>
<p className="text-base text-[#EDE2CC]/70 font-light mb-6">
              Manicure, pedicure, massagem e pacotes completos de cuidados.
            </p>
<a className="text-xs font-medium text-[#DCC9A7] flex items-center gap-1 group-hover:gap-2 transition-all" href="https://wa.me/5544999324635">
              Agendar
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm text-[#F7F3E8] hover:text-[#DCC9A7] transition-colors" href="https://wa.me/5544999324635">
            Ver todos os serviços
            <svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
<div>
<h2 className="text-[#B99668] font-medium tracking-widest text-xs uppercase mb-2">Portfólio</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-[#F7F3E8]">Nossos Trabalhos</h3>
</div>
<p className="text-[#EDE2CC]/70 text-base font-light max-w-sm md:text-left md:ml-auto">
            Um pouco do nosso ambiente e da arte que criamos todos os dias.
          </p>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
<div className="relative group rounded-2xl overflow-hidden reveal border border-[#EDE2CC]/10">
<img alt="Salon Interior" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#120D08] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
<span className="text-[#F7F3E8] font-medium">Ambiente interno</span>
</div>
</div>
<div className="relative group rounded-2xl overflow-hidden reveal delay-100 border border-[#EDE2CC]/10">
<img alt="Hair Styling" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#120D08] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
<span className="text-[#F7F3E8] font-medium">Coloração</span>
</div>
</div>
<div className="relative group rounded-2xl overflow-hidden reveal delay-200 border border-[#EDE2CC]/10">
<img alt="Makeup" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#120D08] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
<span className="text-[#F7F3E8] font-medium">Maquiagem profissional</span>
</div>
</div>
<div className="relative group rounded-2xl overflow-hidden reveal border border-[#EDE2CC]/10">
<img alt="Barber" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&amp;w=2511&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#120D08] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
<span className="text-[#F7F3E8] font-medium">Barbearia &amp; Grooming</span>
</div>
</div>
<div className="relative group rounded-2xl overflow-hidden reveal delay-100 border border-[#EDE2CC]/10">
<img alt="Spa" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#120D08] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
<span className="text-[#F7F3E8] font-medium">Tratamento de spa</span>
</div>
</div>
<div className="relative group rounded-2xl overflow-hidden reveal delay-100 border border-[#EDE2CC]/10">
<img alt="Salon Detail" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&amp;w=2636&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#120D08] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
<span className="text-[#F7F3E8] font-medium">Produtos premium</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#B99668]/14 via-[#120D08] to-[#120D08]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-4xl font-medium text-center text-[#F7F3E8] mb-16 tracking-tight reveal">
          O que nossos clientes dizem
        </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-panel p-8 rounded-2xl reveal delay-100">
<div className="flex text-[#B99668] mb-4 gap-1">
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-[#EDE2CC]/85 font-light italic mb-6 text-base">
              "Lugar absolutamente incrível. O clima é luxuoso e acolhedor. Minha cor ficou exatamente como eu queria!"
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#EDE2CC]/10 overflow-hidden border border-[#EDE2CC]/10">
<img alt="Cliente" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<div>
<h4 className="text-[#F7F3E8] text-sm font-medium">Priya S.</h4>
<p className="text-[#DCC9A7]/60 text-xs">Cliente frequente</p>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl reveal delay-200 transform md:-translate-y-4 shadow-[0_0_30px_rgba(185,150,104,0.12)] border-t border-[#B99668]/30">
<div className="flex text-[#B99668] mb-4 gap-1">
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-[#EDE2CC]/85 font-light italic mb-6 text-base">
              "Melhor salão. A equipe é muito profissional e o espaço é impecável. Recomendo demais."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#EDE2CC]/10 overflow-hidden border border-[#EDE2CC]/10">
<img alt="Cliente" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
<div>
<h4 className="text-[#F7F3E8] text-sm font-medium">Karthik R.</h4>
<p className="text-[#DCC9A7]/60 text-xs">Cliente</p>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl reveal delay-300">
<div className="flex text-[#B99668] mb-4 gap-1">
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[1.125rem] h-[1.125rem]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-[#EDE2CC]/85 font-light italic mb-6 text-base">
              "A sessão de spa foi super relaxante. A Ralss Luxe realmente faz jus ao nome."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#EDE2CC]/10 overflow-hidden border border-[#EDE2CC]/10">
<img alt="Cliente" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/68.jpg"/>
</div>
<div>
<h4 className="text-[#F7F3E8] text-sm font-medium">Ananya M.</h4>
<p className="text-[#DCC9A7]/60 text-xs">Membro VIP</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12">
<div className="space-y-8 reveal">
<div className="">
<h2 className="text-[#B99668] font-medium tracking-widest text-xs uppercase mb-2">Visite-nos</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-[#F7F3E8] mb-6">
                Encontre seu
                <br/>
                destino de estilo
              </h3>
<p className="text-[#EDE2CC]/75 font-light text-base">
                Fale com a gente pelo WhatsApp: (44) 99932-4635.
              </p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F7F3E8]/5 flex items-center justify-center text-[#DCC9A7] shrink-0 border border-[#EDE2CC]/10">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<h4 className="text-[#F7F3E8] font-medium mb-1">Endereço</h4>
<p className="text-[#EDE2CC]/70 text-sm font-light">
                    No 14, Kaveri Nagar, Pombhuhar Nagar, Kavundampalayam Road, Edayar Palayam, Coimbatore-641025
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F7F3E8]/5 flex items-center justify-center text-[#DCC9A7] shrink-0 border border-[#EDE2CC]/10">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h4 className="text-[#F7F3E8] font-medium mb-1">Contato</h4>
<p className="text-[#EDE2CC]/70 text-sm font-light">(44) 99932-4635</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F7F3E8]/5 flex items-center justify-center text-[#DCC9A7] shrink-0 border border-[#EDE2CC]/10">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h4 className="text-[#F7F3E8] font-medium mb-1">Horário de atendimento</h4>
<p className="text-[#EDE2CC]/70 text-sm font-light">Seg – Dom: 9:30 – 21:00</p>
</div>
</div>
</div>
</div>
<div className="h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-2xl border border-[#EDE2CC]/10 relative reveal delay-200 group">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.142385368453!2d76.9427!3d11.028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzQyLjAiTiA3NsKwNTYnMzMuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(100%) sepia(35%) contrast(90%) saturate(105%) brightness(92%)'}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none border border-[#B99668]/20 rounded-2xl"></div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0E0906] border-t border-[#EDE2CC]/10 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<div className="text-center md:text-left">
<h2 className="text-2xl font-serif text-[#F7F3E8] tracking-tight">
              RALSS <span className="text-[#B99668]">LUXE</span>
</h2>
<p className="text-[#DCC9A7]/60 text-sm mt-2">Tudo em um só lugar para todo estilo</p>
</div>
<div className="flex gap-6">
<a aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#F7F3E8]/5 flex items-center justify-center text-[#EDE2CC]/70 hover:text-[#DCC9A7] hover:bg-[#F7F3E8]/10 transition-all border border-[#EDE2CC]/10" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#F7F3E8]/5 flex items-center justify-center text-[#EDE2CC]/70 hover:text-[#DCC9A7] hover:bg-[#F7F3E8]/10 transition-all border border-[#EDE2CC]/10" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a aria-label="Twitter" className="w-10 h-10 rounded-full bg-[#F7F3E8]/5 flex items-center justify-center text-[#EDE2CC]/70 hover:text-[#DCC9A7] hover:bg-[#F7F3E8]/10 transition-all border border-[#EDE2CC]/10" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
<div className="border-t border-[#EDE2CC]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#DCC9A7]/60 font-light">
<p>© 2025 Ralss Luxe Unisex Salon. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-[#EDE2CC]" href="#">Política de Privacidade</a>
<a className="hover:text-[#EDE2CC]" href="#">Termos de Serviço</a>
</div>
</div>
</div>
</footer>

<a aria-label="Falar no WhatsApp: (44) 99932-4635" className="fixed z-50 flex items-center justify-center pulse-btn hover:scale-110 transition-transform text-[#120D08] bg-[#B99668] w-14 h-14 rounded-full right-6 bottom-6 shadow-2xl border border-[#EDE2CC]/20" href="https://wa.me/5544999324635" target="_blank">
<svg className="lucide lucide-message-circle w-7 h-7" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>


    </>
  );
}
