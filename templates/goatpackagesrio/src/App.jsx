import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // --- Custom Cursor Logic ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');
        const cursorLinks = document.querySelectorAll('.cursor-link');
        
        // Use matchMedia to check if device has a fine pointer (mouse)
        if (window.matchMedia("(pointer: fine)").matches) {
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let ringX = mouseX;
            let ringY = mouseY;
            
            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                // Instant dot update
                cursorDot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
            });

            // Smooth animation loop for the lagging ring
            function renderCursor() {
                // Interpolate
                ringX += (mouseX - ringX) * 0.15;
                ringY += (mouseY - ringY) * 0.15;
                
                cursorRing.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
                requestAnimationFrame(renderCursor);
            }
            requestAnimationFrame(renderCursor);

            // Hover states
            cursorLinks.forEach(link => {
                link.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
                link.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
            });
        }

        // --- Scroll Reveal Animation ---
        const revealElements = document.querySelectorAll('.reveal-up');
        
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-dot hidden md:block" id="cursor-dot"></div>
<div className="cursor-ring hidden md:block" id="cursor-ring"></div>

<nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none">
<a className="pointer-events-auto cursor-link flex items-center" href="#">
<img alt="G.O.A.T RIO" className="h-16 md:h-20 w-auto object-contain drop-shadow-lg transition-opacity hover:opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66711d03-2500-4156-9bae-00d11aea627a_320w.png"/>
</a>
<div className="hidden md:flex gap-12 pointer-events-auto">
<a className="uppercase hover:text-[#b5533c] transition-colors cursor-link text-base text-white tracking-widest font-sans-cond" href="#experiencia">A Experiência</a>
<a className="uppercase hover:text-[#b5533c] transition-colors cursor-link text-base text-white tracking-widest font-sans-cond" href="#pacotes">Pacotes</a>
<a className="uppercase hover:text-[#b5533c] transition-colors cursor-link text-base text-white tracking-widest font-sans-cond" href="#contato">Contato</a>
</div>
<button className="md:hidden pointer-events-auto text-white cursor-link flex flex-col gap-[6px] group">
<span className="w-8 h-[1px] bg-white group-hover:bg-[#b5533c] transition-colors"></span>
<span className="w-6 h-[1px] bg-white group-hover:bg-[#b5533c] transition-colors self-end"></span>
</button>
</nav>

<header className="relative w-full h-screen overflow-hidden bg-[#111111]">
<div className="absolute inset-0 z-0">
<img alt="Rio de Janeiro VIP" className="w-full h-full object-cover opacity-60 animate-ken-burns" src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-[#111111]/30"></div>
</div>
<div className="flex flex-col z-10 text-center h-full pr-4 pl-4 relative items-center justify-center">
<h1 className="md:text-8xl lg:text-[9rem] leading-none reveal-up text-6xl italic text-[#e6dcd3] tracking-tight font-serif">
                Viva o Rio
            </h1>
<p className="mt-8 font-sans-cond text-sm md:text-base tracking-[0.3em] uppercase text-[#d4c5b9] reveal-up delay-100 flex items-center gap-4">
<span className="w-8 h-[1px] bg-[#b5533c]"></span>
                Como um VIP
                <span className="w-8 h-[1px] bg-[#b5533c]"></span>
</p>
</div>

<div className="absolute bottom-12 right-6 md:right-12 flex flex-col items-center gap-4 z-20 reveal-up delay-300">
<span className="font-sans-cond text-sm tracking-widest uppercase text-[#888888] [writing-mode:vertical-lr] rotate-180">Explorar</span>
<div className="w-[1px] h-16 bg-[#333333] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full bg-[#b5533c] scroll-line-anim"></div>
</div>
</div>
</header>

<div className="w-full bg-[#111111] border-y border-[#2a2a2a] py-5 overflow-hidden flex whitespace-nowrap relative z-10">
<div className="marquee-content font-sans-cond text-xl md:text-2xl tracking-[0.2em] uppercase text-[#888888] font-normal flex gap-12 items-center px-6">
<span>Experiências Exclusivas</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Segurança 24h</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Festas Inesquecíveis</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Guias Bilíngues</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Acesso VIP Sem Filas</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Experiências Exclusivas</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Segurança 24h</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Festas Inesquecíveis</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Guias Bilíngues</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Acesso VIP Sem Filas</span>
</div>
</div>

<section className="md:py-40 md:px-12 max-w-[1600px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="experiencia">
<div className="flex flex-col md:flex-row reveal-up gap-x-8 gap-y-8 items-end justify-between">
<div className="max-w-3xl">
<h2 className="font-serif text-4xl md:text-6xl tracking-tight text-[#e6dcd3]">A Experiência</h2>
<p className="font-sans-cond text-base uppercase tracking-widest text-[#888888] mt-4">Você não vem só visitar o Rio. Você vem viver o Rio como um insider.</p>
<p className="font-serif text-xl md:text-2xl text-[#aaaaaa] mt-6 leading-relaxed">
                    Descubra o melhor do Rio de Janeiro de um jeito que poucos turistas têm acesso. Nós criamos experiências premium para quem quer viver a energia da cidade — da Lapa às comunidades — com segurança, conforto e acesso VIP.
                </p>
</div>
<a className="group flex items-center gap-3 uppercase hover:text-[#b5533c] transition-colors hover:border-[#b5533c] cursor-link text-base text-[#d4c5b9] tracking-widest font-sans-cond border-[#2a2a2a] border-b pb-2 whitespace-nowrap" href="#pacotes">
                Ver Pacotes
                <i className="w-6 h-6 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="border-y border-[#2a2a2a] bg-[#161616]">
<div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2a2a2a]">
<div className="py-16 md:py-20 flex flex-col items-center justify-center text-center reveal-up">
<span className="font-serif text-4xl md:text-6xl tracking-tight text-[#d4c5b9]">24/7</span>
<span className="font-sans-cond text-sm md:text-base uppercase tracking-[0.2em] text-[#888888] mt-4">Segurança Garantida</span>
</div>
<div className="py-16 md:py-20 flex flex-col items-center justify-center text-center reveal-up delay-100">
<span className="font-serif text-4xl md:text-6xl tracking-tight text-[#d4c5b9]">VIP</span>
<span className="font-sans-cond text-sm md:text-base uppercase tracking-[0.2em] text-[#888888] mt-4">Acesso Sem Filas</span>
</div>
<div className="py-16 md:py-20 flex flex-col items-center justify-center text-center reveal-up delay-200">
<span className="font-serif text-4xl md:text-6xl tracking-tight text-[#d4c5b9]">100%</span>
<span className="font-sans-cond text-sm md:text-base uppercase tracking-[0.2em] text-[#888888] mt-4">Imersão Cultural</span>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden" id="pacotes">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

<div className="lg:col-span-5 relative reveal-up">

<div className="absolute inset-0 border border-[#b5533c] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 z-0"></div>

<div className="relative z-10 aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
<img alt="Casa de Luxo São Conrado" className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-90" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center reveal-up delay-100">
<p className="font-sans-cond text-base uppercase tracking-[0.2em] text-[#b5533c] mb-6 flex items-center gap-4">
<span className="w-8 h-[1px] bg-[#b5533c]"></span>
                    Para quem quer o Rio no mais alto nível
                </p>
<h2 className="font-serif text-4xl md:text-6xl tracking-tight text-[#e6dcd3] mb-8">Diamond Edition</h2>
<div className="space-y-6 font-serif text-xl md:text-2xl text-[#aaaaaa] leading-relaxed max-w-2xl">
<p>Uma experiência premium de 3 noites e 4 dias com foco em luxo, conforto e exclusividade.</p>
</div>
<ul className="mt-8 space-y-4 flex flex-col">
<li className="flex items-start gap-4">
<span className="w-4 h-[1px] bg-[#b5533c] mt-3"></span>
<div>
<span className="font-sans-cond text-base uppercase tracking-widest text-[#e6dcd3] block mb-1">Hospedagem</span>
<span className="font-serif text-lg text-[#888888]">Casa de alto padrão em São Conrado, vista incrível para o mar, ambiente sofisticado.</span>
</div>
</li>
<li className="flex items-start gap-4">
<span className="w-4 h-[1px] bg-[#b5533c] mt-3"></span>
<div>
<span className="font-sans-cond text-base uppercase tracking-widest text-[#e6dcd3] block mb-1">Segurança</span>
<span className="font-serif text-lg text-[#888888]">Segurança 24h na acomodação e acompanhante em todos os passeios. Motoristas confiáveis.</span>
</div>
</li>
<li className="flex items-start gap-4">
<span className="w-4 h-[1px] bg-[#b5533c] mt-3"></span>
<div>
<span className="font-sans-cond text-base uppercase tracking-widest text-[#e6dcd3] block mb-1">A Experiência</span>
<span className="font-serif text-lg text-[#888888]">Acesso VIP aos melhores clubes, área exclusiva, entrada sem fila e drinks premium.</span>
</div>
</li>
</ul>
<div className="mt-10 pt-8 border-t border-[#2a2a2a]">
<h3 className="font-sans-cond text-base uppercase tracking-widest text-[#e6dcd3] mb-4">Roteiro Resumo</h3>
<div className="grid grid-cols-2 gap-x-8 gap-y-4 font-serif text-[#aaaaaa] text-lg">
<div><strong className="text-[#d4c5b9] font-normal font-sans-cond tracking-wider uppercase text-sm">Sexta</strong><br/>Check-in • Pão de Açúcar • Noite na Lapa</div>
<div><strong className="text-[#d4c5b9] font-normal font-sans-cond tracking-wider uppercase text-sm">Sábado</strong><br/>Brunch • Cristo Redentor • Helicóptero • Festas na Barra</div>
<div><strong className="text-[#d4c5b9] font-normal font-sans-cond tracking-wider uppercase text-sm">Domingo</strong><br/>Brunch • Yacht Party • Festas na Barra</div>
<div><strong className="text-[#d4c5b9] font-normal font-sans-cond tracking-wider uppercase text-sm">Segunda</strong><br/>Check-out</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

<div className="lg:col-span-7 flex flex-col justify-center reveal-up delay-100 order-last lg:order-first">
<p className="font-sans-cond text-base uppercase tracking-[0.2em] text-[#b5533c] mb-6 flex items-center gap-4">
<span className="w-8 h-[1px] bg-[#b5533c]"></span>
                    Autenticidade + festa + cultura local
                </p>
<h2 className="font-serif text-4xl md:text-6xl tracking-tight text-[#e6dcd3] mb-8">Gold Package</h2>
<div className="space-y-6 font-serif text-xl md:text-2xl text-[#aaaaaa] leading-relaxed max-w-2xl">
<p>Perfeito para quem quer viver o lado mais vibrante e real do Rio.</p>
</div>
<ul className="mt-8 space-y-4 flex flex-col">
<li className="flex items-start gap-4">
<span className="w-4 h-[1px] bg-[#b5533c] mt-3"></span>
<div>
<span className="font-sans-cond text-base uppercase tracking-widest text-[#e6dcd3] block mb-1">Hospedagem</span>
<span className="font-serif text-lg text-[#888888]">Casa com piscina em Santa Teresa. Ambiente animado para socializar, bar 24h.</span>
</div>
</li>
<li className="flex items-start gap-4">
<span className="w-4 h-[1px] bg-[#b5533c] mt-3"></span>
<div>
<span className="font-sans-cond text-base uppercase tracking-widest text-[#e6dcd3] block mb-1">Segurança</span>
<span className="font-serif text-lg text-[#888888]">Guia bilíngue, segurança em todos os passeios e transporte para eventos incluído.</span>
</div>
</li>
<li className="flex items-start gap-4">
<span className="w-4 h-[1px] bg-[#b5533c] mt-3"></span>
<div>
<span className="font-sans-cond text-base uppercase tracking-widest text-[#e6dcd3] block mb-1">A Experiência</span>
<span className="font-serif text-lg text-[#888888]">Mistura de turistas e locais. Festas underground, tradicionais e energia autêntica.</span>
</div>
</li>
</ul>
<div className="mt-10 pt-8 border-t border-[#2a2a2a]">
<h3 className="font-sans-cond text-base uppercase tracking-widest text-[#e6dcd3] mb-4">Roteiro Resumo</h3>
<div className="grid grid-cols-2 gap-x-8 gap-y-4 font-serif text-[#aaaaaa] text-lg">
<div><strong className="text-[#d4c5b9] font-normal font-sans-cond tracking-wider uppercase text-sm">Sexta</strong><br/>Check-in • Favela Tour • Noite na Lapa</div>
<div><strong className="text-[#d4c5b9] font-normal font-sans-cond tracking-wider uppercase text-sm">Sábado</strong><br/>Brunch • Boat Party • Favela VIP Party</div>
<div><strong className="text-[#d4c5b9] font-normal font-sans-cond tracking-wider uppercase text-sm">Domingo</strong><br/>Brunch • BBQ/Techno • Festa na Barra</div>
<div><strong className="text-[#d4c5b9] font-normal font-sans-cond tracking-wider uppercase text-sm">Segunda</strong><br/>Check-out</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative reveal-up order-first lg:order-last">

<div className="absolute inset-0 border border-[#b5533c] -translate-x-4 translate-y-4 md:-translate-x-6 md:translate-y-6 z-0"></div>

<div className="relative z-10 aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
<img alt="Festa Santa Teresa" className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-90" src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 bg-[#161616] border-t border-[#2a2a2a]">
<div className="max-w-[1600px] mx-auto">
<h2 className="font-serif text-4xl md:text-6xl tracking-tight text-[#e6dcd3] mb-4 text-center reveal-up">G.O.A.T Packages</h2>
<p className="font-sans-cond text-base uppercase tracking-widest text-[#888888] mb-16 text-center reveal-up delay-100">Muito mais que uma viagem. Uma experiência.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a2a2a] border border-[#2a2a2a]">

<div className="bg-[#161616] p-10 md:p-14 relative group overflow-hidden cursor-link reveal-up">
<div className="absolute -bottom-8 -right-4 font-sans-cond text-[8rem] leading-none font-normal text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none">01</div>
<i className="w-10 h-10 text-[#b5533c] mb-8" data-lucide="star" strokeWidth="1.5"></i>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight text-[#e6dcd3] mb-4 relative z-10">Melhores Eventos</h3>
<p className="font-serif text-lg text-[#888888] leading-relaxed relative z-10">Acesso garantido às melhores festas e eventos exclusivos da cidade maravilhosa.</p>
</div>

<div className="bg-[#161616] p-10 md:p-14 relative group overflow-hidden cursor-link reveal-up delay-100">
<div className="absolute -bottom-8 -right-4 font-sans-cond text-[8rem] leading-none font-normal text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none">02</div>
<i className="w-10 h-10 text-[#b5533c] mb-8" data-lucide="users" strokeWidth="1.5"></i>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight text-[#e6dcd3] mb-4 relative z-10">Autenticidade</h3>
<p className="font-serif text-lg text-[#888888] leading-relaxed relative z-10">Conecte-se com locais e viajantes do mundo todo em um ambiente verdadeiramente carioca.</p>
</div>

<div className="bg-[#161616] p-10 md:p-14 relative group overflow-hidden cursor-link reveal-up delay-200">
<div className="absolute -bottom-8 -right-4 font-sans-cond text-[8rem] leading-none font-normal text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none">03</div>
<i className="w-10 h-10 text-[#b5533c] mb-8" data-lucide="shield-check" strokeWidth="1.5"></i>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight text-[#e6dcd3] mb-4 relative z-10">Segurança 24h</h3>
<p className="font-serif text-lg text-[#888888] leading-relaxed relative z-10">Estrutura completa com equipe experiente cuidando de você em todos os momentos.</p>
</div>

<div className="bg-[#161616] p-10 md:p-14 relative group overflow-hidden cursor-link reveal-up">
<div className="absolute -bottom-8 -right-4 font-sans-cond text-[8rem] leading-none font-normal text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none">04</div>
<i className="w-10 h-10 text-[#b5533c] mb-8" data-lucide="bus" strokeWidth="1.5"></i>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight text-[#e6dcd3] mb-4 relative z-10">Transporte Incluso</h3>
<p className="font-serif text-lg text-[#888888] leading-relaxed relative z-10">Deslocamento seguro e motoristas confiáveis para todos os eventos do seu roteiro.</p>
</div>

<div className="bg-[#161616] p-10 md:p-14 relative group overflow-hidden cursor-link reveal-up delay-100">
<div className="absolute -bottom-8 -right-4 font-sans-cond text-[8rem] leading-none font-normal text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none">05</div>
<i className="w-10 h-10 text-[#b5533c] mb-8" data-lucide="crown" strokeWidth="1.5"></i>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight text-[#e6dcd3] mb-4 relative z-10">Entrada VIP</h3>
<p className="font-serif text-lg text-[#888888] leading-relaxed relative z-10">Acesso direto sem filas, áreas exclusivas e tratamento premium em todos os locais.</p>
</div>

<div className="bg-[#161616] p-10 md:p-14 relative group overflow-hidden cursor-link reveal-up delay-200">
<div className="absolute -bottom-8 -right-4 font-sans-cond text-[8rem] leading-none font-normal text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none">06</div>
<i className="w-10 h-10 text-[#b5533c] mb-8" data-lucide="globe" strokeWidth="1.5"></i>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight text-[#e6dcd3] mb-4 relative z-10">Guias Bilíngues</h3>
<p className="font-serif text-lg text-[#888888] leading-relaxed relative z-10">Suporte total com guias preparados para garantir sua melhor experiência.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto text-center reveal-up border-t border-[#2a2a2a] bg-[#111111]">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#e6dcd3] mb-6">Segurança em Primeiro Lugar</h2>
<p className="font-serif text-xl md:text-2xl text-[#888888] leading-relaxed max-w-2xl mx-auto mb-12">
            Sabemos que explorar o Rio exige cuidado — por isso, cuidamos de tudo para você com equipe experiente e locais previamente selecionados. Você só se preocupa com uma coisa: aproveitar.
        </p>
<div className="flex flex-wrap justify-center gap-4 md:gap-8 font-sans-cond text-sm md:text-base uppercase tracking-widest text-[#d4c5b9]">
<span className="flex items-center gap-2"><span className="w-4 h-[1px] bg-[#b5533c]"></span> Turistas Internacionais</span>
<span className="flex items-center gap-2"><span className="w-4 h-[1px] bg-[#b5533c]"></span> Grupos de Amigos</span>
<span className="flex items-center gap-2"><span className="w-4 h-[1px] bg-[#b5533c]"></span> Festa + Cultura</span>
</div>
</section>

<footer className="relative pt-32 md:pt-48 pb-10 overflow-hidden bg-[#111111] border-t border-[#2a2a2a]" id="contato">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none z-0 w-[150vw] md:w-[60vw] flex justify-center">
<img alt="" className="w-full h-auto object-contain" src="logo.png"/>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-6 reveal-up mb-24 md:mb-32">
<h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#e6dcd3] mb-6">Garanta sua vaga.</h2>
<p className="font-serif text-2xl text-[#888888] mb-12 max-w-xl mx-auto">As vagas são limitadas para manter a qualidade. Só experiências que você vai lembrar pra sempre.</p>
<a className="group flex items-center gap-4 border-b border-[#b5533c] pb-3 cursor-link" href="https://wa.me/5521995413306" target="_blank">
<span className="font-sans-cond text-base md:text-lg uppercase tracking-widest text-[#d4c5b9] group-hover:text-white transition-colors">Falar no WhatsApp</span>
<i className="w-6 h-6 text-[#b5533c] transition-transform group-hover:translate-x-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 reveal-up delay-100 border-t border-[#2a2a2a] pt-16">

<div className="flex flex-col gap-6">
<h3 className="font-sans-cond text-sm uppercase tracking-widest text-[#888888]">Localização</h3>
<address className="font-serif text-xl text-[#d4c5b9] not-italic leading-relaxed">
                        Rio de Janeiro<br/>
                        Brasil
                    </address>
</div>

<div className="flex flex-col gap-6">
<h3 className="font-sans-cond text-sm uppercase tracking-widest text-[#888888]">Contato</h3>
<div className="font-serif text-xl text-[#d4c5b9] flex flex-col gap-2">
<a className="hover:text-[#b5533c] transition-colors cursor-link inline-block w-fit" href="mailto:hellogoatrio@gmail.com">hellogoatrio@gmail.com</a>
<a className="hover:text-[#b5533c] transition-colors cursor-link inline-block w-fit" href="tel:+5521995413306">+55 21 99541-3306</a>
</div>
</div>

<div className="flex flex-col gap-6 md:items-end text-left md:text-right">
<h3 className="font-sans-cond text-sm uppercase tracking-widest text-[#888888]">Depois da Experiência</h3>
<div className="flex flex-col gap-2 font-serif text-lg text-[#888888]">
<p className="md:ml-auto">Descontos em bares e clubes</p>
<p className="md:ml-auto">Acesso a eventos selecionados</p>
<p className="md:ml-auto text-[#d4c5b9] mt-2 cursor-link hover:text-[#b5533c] transition-colors"><a href="#">Siga no Instagram</a></p>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 font-sans-cond text-sm uppercase tracking-widest text-[#555555]">
<p>© 2024 G.O.A.T Rio. Todos os direitos reservados.</p>
<p>Rio de Janeiro, Brasil</p>
</div>
</div>
</footer>


    </>
  );
}
