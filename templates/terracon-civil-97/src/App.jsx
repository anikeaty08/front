import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        function splitTextToWords(element) {
            const text = element.innerText;
            const words = text.split(' ');
            element.innerHTML = '';
            words.forEach(word => {
                const wordWrap = document.createElement('span');
                wordWrap.classList.add('word-wrap');
                wordWrap.innerHTML = `<span class="word-inner">${word}&nbsp;</span>`;
                element.appendChild(wordWrap);
            });
        }

        document.querySelectorAll('.split-animate').forEach(el => {
            splitTextToWords(el);
        });

        const loadTl = gsap.timeline({
            onComplete: () => {
                document.body.style.opacity = 1;
                initSite();
            }
        });

        loadTl.to('.loader-bar', { width: '100%', duration: 1.2, ease: 'power2.inOut' })
              .to('.loader-text', { y: -50, opacity: 0, duration: 0.5 })
              .to('.loader', { yPercent: -100, duration: 0.8, ease: 'power4.inOut' });

        function initSite() {
            gsap.to('.hero-text span', { 
                y: 0, 
                stagger: 0.1, 
                duration: 1.5, 
                ease: 'power4.out' 
            });
            gsap.to('.hero-fade', { opacity: 1, y: 0, stagger: 0.1, duration: 1, delay: 0.5 });
            
            gsap.to('.masonry-container', {
                yPercent: 15,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.masonry-container',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            const splitElements = document.querySelectorAll('.split-animate');
            splitElements.forEach(el => {
                const words = el.querySelectorAll('.word-inner');
                gsap.to(words, {
                    y: "0%",
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.015,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%", 
                        toggleActions: "play none none reverse"
                    }
                });
            });

            const cards = gsap.utils.toArray('.card-item');
            
            cards.forEach((card, i) => {
                const nextCard = cards[i+1];
                if (nextCard) {
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.95,
                        opacity: 0.5, 
                        filter: 'blur(5px)',
                        ease: "none",
                        scrollTrigger: {
                            trigger: nextCard,
                            start: "top bottom", 
                            end: "top 10vh",    
                            scrub: true
                        }
                    });
                }
            });

            gsap.from('.footer-sticky > div', {
                y: 50,
                opacity: 0,
                scale: 0.95,
                scrollTrigger: {
                    trigger: '.footer-sticky',
                    start: 'top 90%', 
                    end: 'bottom bottom',
                    scrub: true
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>
<div className="loader">
<div className="loader-text tracking-tight">TERRACON ENGENHARIA</div>
<div className="loader-bar"></div>
</div>
<nav className="fixed top-0 w-full px-6 py-6 md:px-12 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display font-extralight text-2xl tracking-tight flex items-center gap-2">
<i className="w-6 h-6" data-lucide="building-2" strokeWidth="1.5"></i>
            TERRACON ENGENHARIA
        </div>
<div className="hidden md:flex gap-8 text-sm font-extralight uppercase tracking-widest text-gray-300">
<a className="hover:text-white transition-colors" href="#about">Sobre</a>
<a className="hover:text-white transition-colors" href="#services">Serviços</a>
<a className="hover:text-white transition-colors" href="#contact">Contato</a>
</div>
<a className="hidden md:block border border-white/20 px-5 py-2 text-sm uppercase tracking-widest font-extralight hover:bg-white hover:text-black transition-colors rounded-sm" href="#contact">
            Fale Conosco
        </a>
</nav>
<div className="wrapper">
<section className="min-h-[100svh] relative flex items-center justify-center overflow-hidden bg-black py-32">

<div className="absolute inset-0 w-full h-full opacity-80 z-0 pointer-events-none scale-[1.25] rotate-[-2deg] masonry-container">
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
<div className="flex gap-4 w-full h-[150%] -translate-y-[10%] px-4 sm:px-8">

<div className="flex-1 flex flex-col gap-4 w-full overflow-hidden">
<div className="flex flex-col gap-4 w-full animate-scroll-up duration-45">
<div className="flex flex-col gap-4 w-full">
<img alt="" className="w-full h-[22rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=600"/>
<img alt="" className="w-full h-[16rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=600"/>
<img alt="" className="w-full h-[20rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1541888086915-d72b2269a68a?q=80&amp;w=600"/>
<img alt="" className="w-full h-[28rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&amp;w=600"/>
</div>

<div className="flex flex-col gap-4 w-full">
<img alt="" className="w-full h-[22rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=600"/>
<img alt="" className="w-full h-[16rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=600"/>
<img alt="" className="w-full h-[20rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1541888086915-d72b2269a68a?q=80&amp;w=600"/>
<img alt="" className="w-full h-[28rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&amp;w=600"/>
</div>
</div>
</div>

<div className="flex-1 flex flex-col gap-4 w-full overflow-hidden hidden sm:flex">
<div className="flex flex-col gap-4 w-full animate-scroll-down duration-55">
<div className="flex flex-col gap-4 w-full">
<img alt="" className="w-full h-[20rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=600"/>
<img alt="" className="w-full h-[24rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&amp;w=600"/>
<img alt="" className="w-full h-[18rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1590644365607-1c5a392275ce?q=80&amp;w=600"/>
<img alt="" className="w-full h-[26rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&amp;w=600"/>
</div>
<div className="flex flex-col gap-4 w-full">
<img alt="" className="w-full h-[20rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=600"/>
<img alt="" className="w-full h-[24rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&amp;w=600"/>
<img alt="" className="w-full h-[18rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1590644365607-1c5a392275ce?q=80&amp;w=600"/>
<img alt="" className="w-full h-[26rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&amp;w=600"/>
</div>
</div>
</div>

<div className="flex-1 flex flex-col gap-4 w-full overflow-hidden">
<div className="flex flex-col gap-4 w-full animate-scroll-up duration-40">
<div className="flex flex-col gap-4 w-full">
<img alt="" className="w-full h-[28rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&amp;w=600"/>
<img alt="" className="w-full h-[16rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&amp;w=600"/>
<img alt="" className="w-full h-[20rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1563212003-8d07c062c3f8?q=80&amp;w=600"/>
<img alt="" className="w-full h-[22rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1498661694102-0a3793edbe74?q=80&amp;w=600"/>
</div>
<div className="flex flex-col gap-4 w-full">
<img alt="" className="w-full h-[28rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&amp;w=600"/>
<img alt="" className="w-full h-[16rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&amp;w=600"/>
<img alt="" className="w-full h-[20rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1563212003-8d07c062c3f8?q=80&amp;w=600"/>
<img alt="" className="w-full h-[22rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1498661694102-0a3793edbe74?q=80&amp;w=600"/>
</div>
</div>
</div>

<div className="flex-1 flex flex-col gap-4 w-full overflow-hidden hidden md:flex">
<div className="flex flex-col gap-4 w-full animate-scroll-down duration-50">
<div className="flex flex-col gap-4 w-full">
<img alt="" className="w-full h-[18rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1621619657002-3171eb405788?q=80&amp;w=600"/>
<img alt="" className="w-full h-[26rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1503594384566-461fe158e797?q=80&amp;w=600"/>
<img alt="" className="w-full h-[20rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=600"/>
<img alt="" className="w-full h-[24rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1590496794008-383c8070b257?q=80&amp;w=600"/>
</div>
<div className="flex flex-col gap-4 w-full">
<img alt="" className="w-full h-[18rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1621619657002-3171eb405788?q=80&amp;w=600"/>
<img alt="" className="w-full h-[26rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1503594384566-461fe158e797?q=80&amp;w=600"/>
<img alt="" className="w-full h-[20rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=600"/>
<img alt="" className="w-full h-[24rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1590496794008-383c8070b257?q=80&amp;w=600"/>
</div>
</div>
</div>

<div className="flex-1 flex flex-col gap-4 w-full overflow-hidden hidden lg:flex">
<div className="flex flex-col gap-4 w-full animate-scroll-up duration-60">
<div className="flex flex-col gap-4 w-full">
<img alt="" className="w-full h-[24rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&amp;w=600"/>
<img alt="" className="w-full h-[20rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=600"/>
<img alt="" className="w-full h-[18rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1542621323-23e1150cddb0?q=80&amp;w=600"/>
<img alt="" className="w-full h-[28rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1541888086915-d72b2269a68a?q=80&amp;w=600"/>
</div>
<div className="flex flex-col gap-4 w-full">
<img alt="" className="w-full h-[24rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&amp;w=600"/>
<img alt="" className="w-full h-[20rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=600"/>
<img alt="" className="w-full h-[18rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1542621323-23e1150cddb0?q=80&amp;w=600"/>
<img alt="" className="w-full h-[28rem] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1541888086915-d72b2269a68a?q=80&amp;w=600"/>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 text-center text-white w-full px-6 mt-16 md:mt-0 flex flex-col items-center">
<div className="flex justify-center mb-8 overflow-hidden">
<span className="hero-fade opacity-0 text-sm md:text-base font-extralight tracking-[0.3em] uppercase border border-white/20 px-6 py-1.5 rounded-full backdrop-blur-sm">
                        Quem Somos
                    </span>
</div>
<h1 className="display text-[10vw] md:text-[6.5vw] leading-[0.9] font-extralight tracking-tight hero-text overflow-hidden text-white/95">
<span className="block translate-y-full pb-2">TERRACON</span>
<span className="block translate-y-full pb-2">ENGENHARIA</span>
</h1>
<p className="mt-10 text-xl md:text-2xl font-extralight text-gray-300 max-w-3xl mx-auto hero-fade opacity-0 leading-relaxed text-balance bg-black/30 p-4 rounded-xl backdrop-blur-sm">
                    A Terracon Engenharia oferece soluções integradas de engenharia e construção para clientes da rede pública e privada com o objetivo de satisfazer todas as suas necessidades através da entrega de um serviço com qualidade e o melhor custo-benefício.
                </p>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 hero-fade opacity-0 animate-bounce">
<i className="w-6 h-6 text-white/50" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
</section>
<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1600px] mx-auto bg-[var(--c-bg)]" id="about">
<div className="sticky top-32 self-start">
<h2 className="display text-4xl md:text-5xl font-extralight tracking-tight leading-tight split-animate text-[#171717]">
                    Construção está <br/>no nosso <span className="text-gray-400">DNA.</span>
</h2>
<div className="mt-8 flex gap-4 text-sm font-extralight uppercase tracking-widest text-gray-500">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
                        Soluções Integradas
                    </div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="pen-tool" strokeWidth="1.5"></i>
                        Engenharia
                    </div>
</div>
</div>
<div className="text-2xl md:text-3xl font-extralight leading-relaxed text-gray-600">
<p className="mb-8 split-animate">
                    Nossa trajetória é marcada pela entrega de projetos robustos que atendem tanto o setor público quanto o privado, garantindo sempre a excelência técnica.
                </p>
<p className="mb-8 split-animate">
                    Com foco absoluto na satisfação das necessidades dos nossos clientes, equilibramos inovação com a melhor relação custo-benefício em cada obra que assinamos.
                </p>
<div className="h-px w-full bg-black/10 my-10"></div>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-base font-extralight uppercase tracking-widest text-black mb-2">Foco</h4>
<p className="text-lg text-gray-500 font-extralight">Rede Pública e Privada</p>
</div>
<div>
<h4 className="text-base font-extralight uppercase tracking-widest text-black mb-2">Especialidade</h4>
<p className="text-lg text-gray-500 font-extralight">Engenharia e Construção</p>
</div>
</div>
</div>
</section>
<section className="stack-section" id="services">
<div className="text-center mb-24 px-6">
<div className="text-sm uppercase tracking-[0.2em] mb-4 text-gray-500 font-extralight">Capacidades</div>
<h2 className="display text-4xl md:text-6xl font-extralight tracking-tight">NOSSA EXPERIÊNCIA</h2>
</div>
<div className="stack-container">
<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-base font-mono mb-6 text-gray-500 border border-white/20 inline-block px-2 py-1 rounded">01</div>
<h3 className="text-3xl md:text-4xl font-extralight display tracking-tight text-white">Construção Civil</h3>
<p className="text-base mt-2 text-gray-500 uppercase tracking-widest font-extralight">Obras Completas</p>
</div>
<div className="text-gray-400 font-extralight text-lg md:text-xl leading-relaxed">
                                Executamos obras desde a fundação até o acabamento final. Entregamos espaços construídos para durar, aderindo aos mais rígidos padrões de segurança e qualidade do mercado.
                            </div>
<div className="flex items-center gap-2 text-sm font-extralight uppercase tracking-widest pt-4 border-t border-white/10 text-white/80">
<i className="w-5 h-5" data-lucide="ruler" strokeWidth="1.5"></i> Design e Construção
                            </div>
</div>
<div className="card-img-wrap">
<img alt="Commercial Construction" className="card-img" src="https://images.unsplash.com/photo-1541888086915-d72b2269a68a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-base font-mono mb-6 text-gray-500 border border-white/20 inline-block px-2 py-1 rounded">02</div>
<h3 className="text-3xl md:text-4xl font-extralight display tracking-tight text-white">Infraestrutura</h3>
<p className="text-base mt-2 text-gray-500 uppercase tracking-widest font-extralight">Setor Público</p>
</div>
<div className="text-gray-400 font-extralight text-lg md:text-xl leading-relaxed">
                                Soluções integradas para desenvolvimento urbano e industrial. Planejamento rigoroso para viabilizar projetos de grande escala com excelência e custo-benefício.
                            </div>
<div className="flex items-center gap-2 text-sm font-extralight uppercase tracking-widest pt-4 border-t border-white/10 text-white/80">
<i className="w-5 h-5" data-lucide="building" strokeWidth="1.5"></i> Obras Públicas
                            </div>
</div>
<div className="card-img-wrap">
<img alt="Infrastructure" className="card-img" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-base font-mono mb-6 text-gray-500 border border-white/20 inline-block px-2 py-1 rounded">03</div>
<h3 className="text-3xl md:text-4xl font-extralight display tracking-tight text-white">Gestão de Projetos</h3>
<p className="text-base mt-2 text-gray-500 uppercase tracking-widest font-extralight">Sistemas e Entrega</p>
</div>
<div className="text-gray-400 font-extralight text-lg md:text-xl leading-relaxed">
                                Gestão compreensiva do conceito à entrega das chaves. Lideramos a logística de desenvolvimento, aprovações necessárias e coordenação completa da equipe.
                            </div>
<div className="flex items-center gap-2 text-sm font-extralight uppercase tracking-widest pt-4 border-t border-white/10 text-white/80">
<i className="w-5 h-5" data-lucide="clipboard-check" strokeWidth="1.5"></i> Planejamento Integrado
                            </div>
</div>
<div className="card-img-wrap">
<img alt="Project Management" className="card-img" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 bg-[#F5F5F5] text-center flex flex-col items-center justify-center relative z-10 border-b border-gray-200">
<h2 className="display text-4xl md:text-5xl font-extralight tracking-tight mb-6">Inicie seu Projeto</h2>
<div className="max-w-xl text-xl text-gray-600 font-extralight mb-10 leading-relaxed px-6">
                Pronto para alcançar resultados excepcionais? Entre em contato conosco para discutirmos suas necessidades.
            </div>
<div className="flex flex-col items-center gap-2">
<div className="h-12 w-px bg-black/20"></div>
<span className="text-sm uppercase tracking-widest text-gray-400 font-extralight">Role para o Contato</span>
</div>
</section>
</div>
<footer className="footer-sticky bg-[#0f0f0f]" id="contact">
<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-12 h-full flex flex-col justify-center">
<div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-16 items-start">
<div className="space-y-12">
<div>
<h4 className="text-sm uppercase tracking-widest text-gray-500 font-extralight mb-6">Fale Conosco</h4>
<a className="block display text-5xl md:text-6xl font-extralight tracking-tight hover:text-gray-300 transition-colors mb-2" href="#">
                            Contato Central
                        </a>
<p className="text-lg text-gray-400 font-extralight">Atendimento Corporativo</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<div className="flex items-center gap-2 mb-3 text-white">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="font-extralight text-base uppercase tracking-wide">Escritório</span>
</div>
<p className="text-lg text-gray-400 leading-relaxed font-extralight">
                                Endereço da Empresa,<br/>Cidade, Estado 00000
                            </p>
</div>
<div>
<div className="flex items-center gap-2 mb-3 text-white">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
<span className="font-extralight text-base uppercase tracking-wide">Email</span>
</div>
<p className="text-lg text-gray-400 leading-relaxed font-extralight">
                                contato@terracon.com<br/>engenharia@terracon.com
                            </p>
</div>
</div>
</div>
<div className="md:text-right flex flex-col justify-between h-full">
<div>
<h4 className="text-sm uppercase tracking-widest text-gray-500 font-extralight mb-6">Redes Sociais</h4>
<div className="flex md:justify-end gap-6">
<a className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="mt-12 space-y-4">
<div className="text-sm text-gray-500 uppercase tracking-widest font-extralight">
<span className="block mb-1">TERRACON ENGENHARIA</span>
<span className="block text-xs text-gray-600">CNPJ: 00.000.000/0000-00</span>
</div>
<div className="text-sm text-gray-600 leading-relaxed font-mono font-extralight">
                            Soluções Integradas em Construção
                        </div>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 uppercase tracking-widest font-extralight">
<div>© 2024 TERRACON ENGENHARIA</div>
<div className="mt-2 md:mt-0">Engenharia e Construção</div>
</div>
</div>
</footer>


    </>
  );
}
