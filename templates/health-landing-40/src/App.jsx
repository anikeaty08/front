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



        // Initialize Lucide Icons
        lucide.createIcons();

        // ===== HEADER SCROLL BEHAVIOR =====
        const header = document.getElementById('mainHeader');
        constLight = document.getElementById('logoLight');
        const logoDark = document.getElementById('logoDark');
        const navLinks = document.querySelectorAll('#navLink1, #navLink2, #navLink3, #navLink4');
        const navBtn = document.getElementById('navBtn');
        const menuIcon = document.getElementById('menuIcon');

        let isScrolled = false;

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY > 50 
                isScrolled = true;
                header.style.background = 'rgba(250,250,248,0.95)';
                header.style.backdropFilter = 'blur(12px)';
                header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                logoLight.style.opacity = '0';
                logoDark.style.opacity = '1';
                navLinks.forEach(link => {
                    link.style.color = 'hsl(30 5% 18%)';
                });
                if
                    navBtn.style.borderColor = '#C9B88C';
                    navBtn.style.color = '#C9B88C';
                }
                menuIcon.style.color = 'hsl(30 5% 18%)';
            } else if (scrollY <= 50 && isScrolled) {
                isScrolled = false;
                header.style.background = 'transparent';
                header.style.backdropFilter = 'none';
                header.style.boxShadow = 'none';
                logoLight.style.opacity = '1';
                logoDark.style.opacity = '0';
                navLinks.forEach(link => {
                    link.style.color = 'rgba(255,255,255,0.9 (navBtn) {
                    navBtn.style.borderColor = 'rgba(255,255,255,0.5)';
                    navBtn.style.color = 'white';
                }
                menuIcon.style.color = 'white';
            }
        });

        // ===== MOBILE MENU =====
        let mobileMenuOpen = false;
        const mobileMenu = document.getElementById('mobileMenu');

        function toggleMobileMenu() {
            mobileMenuOpen = !mobileMenuOpen;
            if (mobileMenuOpen) {
                mobileMenu.style.opacity = '1';
                mobileMenu.style.po
                mobileMenu.style.transform = 'translateY(0)';
                menuIcon.setAttribute('data-lucide', 'x');
                menuIcon.style.color = 'hsl(30 5% 18%)';
                lucide.createIcons();
            } else {
                closeMobileMenu();
            }
        }

        function closeMobileMenu() {
            mobileMenuOpen = false;
            mobileMenu.style.opacity = '0';
            mobileMenu.style.pointerEvents = 'none';
            mobileMenu.style.transform = 'translateY(-20px)';
            menuIcon.setAttribute('data-lucide', ');
            menuIcon.style.color = isScrolled ? 'hsl(30 5% 18%)' : 'white';
            lucide.createIcons();
        }

        // ===== REVEAL ON SCROLL =====
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '-80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.style.transitionDelay || '0s';
                    entry.target.style.transitionDelay = delay;
                    entry.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
            observer.observe(el);
        });

        // ===== PARALLAX =====
        const parallaxContainers = document.querySelectorAll('.parallax-container');

        function updateParallax() {
            parallaxContainers.forEach(container => {
                const img = container.querySelector('.parallax-img');
                if (!img) return;
                const rect = container
                const windowHeight = window.innerHeight;
                if (rect.bottom >= 0 && rect.top <= windowHeight) {
                    const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
                    const translateY = (progress - 0.5) * 60;
                    img.style.transform = `translateY(${translateY}px)`;
                }
            });
            requestAnimationFrame(updateParallax);
        }
        requestAnimationFrame(updateParallax);

        // =====IAL CAROUSEL =====
        let currentTestimonial = 0;
        const totalTestimonials = 3;
        const slider = document.getElementById('testimonialSlider');
        const dots = document.querySelectorAll('.testimonial-dot');

        function updateTestimonial() {
            slider.style.transform = `translateX(-${currentTestimonial * 100}%)`;
            dots.forEach((dot, i) => {
                dot.style.background = i === currentTestimonial ? '#C9B88C' : 'rgba(201,184,140,0.3)';
                dot.style.width = i === currentTestimonial.5rem' : '0.5rem';
            });
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            updateTestimonial();
        }

        function prevTestimonial() {
            currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
            updateTestimonial();
        }

        function goToTestimonial(index) {
            currentTestimonial = index;
            updateTestimonial();
        }

        // Auto-advance testimonials
        setInterval(nextTestimonial, 6000);

        // ===== SMOOTH SCROLL =====
        documenthref^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
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
      

<header background:="" className="fixed left-0 right-0 top-0 z-50 transition-all duration-500 style={{}}mainHeader" transparent;"="">
<div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-10">

<a className="relative z-10" href="#">
<div className="flex items-center gap-3 transition-opacity duration-300" id="logoLight">
<div className="flex flex-col items-center leading-none">
<span-xl font-medium="" lg:text-2xl"="" style={{letterSpacing: '0.08em'}} text-white="" tracking-wide="">B<span className="text-amber-200/80">&amp;</span>B
</span-xl></div>
<div className="hidden h-8 w-px bg-white/30 sm:block"></div>
<div className="hidden sm">
<span className="font-body text-xs font-light uppercase tracking-widest text-white/90" style={{fontSize: '0.6rem', letterSpacing: '0.25em'}}>Instituto</span>
<br/>
<span className="font-body text-xs font-medium uppercase tracking-wider text-white" style={{fontSize: '0.65rem', letterSpacing: '0.15em'}}>Burmann &amp; Bastos</span>
</div>

<div className="flex flex-col items-center leading-none">
<span className="font-heading text-xl font-medium tracking-wide lg:text-2xl" style={{letterSpacing: '0.08em', color: 'hsl(30 5% 18%)'}}>B<span style={{color: '#C9B88C'}}>&amp;</span>B</span>
</div>
<div 0.2);"="" 18%="" 5%="" background:="" className="hidden h-8 w-px sm style={{}}"></div>
<div className="hidden sm:block">
<span className="font-body uppercase" style={{fontSize: '0.6rem', letterSpacing: '0.25em', color: 'hsl(30 5% 45%)', fontWeight: '300'}}>Instituto</span>
<br/>
<span className="font-body uppercase" gap-10="" hidden="" items-center="" md:flex"="" style="font-size: 0.65rem; letter-spacing: 0.15em; color: hsl(30 5% 18%); font-weight: 500&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/a&gt;

            &lt;!-- Desktop Nav --&gt;
            &lt;nav class=">
<a className="story-link font-body text-xs uppercase text-white/90 transition-colors duration-300 hover:text-white" href="#inicio" id="navLink1" style={{letterSpacing: '0.15em'}}>Início</a>
<a className="story-link font-/90 transition-colors duration-300 hover:text-white" href="#sobre" id="navLink2" style={{letterSpacing: '0.15em'}}>Sobre</a>
<a className="story-link font-body text-xs uppercase text-white/90 transition-colors duration-300 hover:text-white" href="#procedimentos" id="navLink3" style={{letterSpacing: '0.15em'}}>Procedimentos</a>
<a className="story-link font-body text-xs uppercase text-white/90 transition-colors duration-300 hover:text-white" href="#contato" id="navLink4" style={{letterSpacing: '0.15em'}}>Contato</a>
<a className="font-body text-xs uppercase transition-all duration-300 border-white/50 px-6 py-2.5 text-white hover:bg-white/20" href="#contato" id="navBtn" style={{letterSpacing: '0.15em'}}>Agendar</a>


<button className="relative z-50 md:hidden" id="mobileMenuBtn" onclick="toggleMobileMenu()">
<i 1.5;"="" className="h-6 w-6 text-white transition-colors style={{}}menu" id="menuIcon" stroke-width:=""></i>
</button>
</span></div>
</div></a></div></header>

<div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500" id="mobileMenu" style={{background: '#FAFAF8', opacity: '0', pointerEvents: 'none', transform: 'translateY(-20px)'}}>
<a className="font-headingxl font-light" href="#inicio" onclick="closeMobileMenu()" style={{color: 'hsl(30 5% 18%)', animationDelay: '0.1s'}}>Início</a>
<a className="font-heading text-2xl font-light" href="#sobre" onclick="closeMobileMenu()" style={{color: 'hsl(30 5% 18%)', animationDelay: '0.2s'}}>Sobre</a>
<a className="font-heading text-2xl font-light" href="#procedimentos" onclick="closeMobileMenu()" style={{color: 'hsl(30 5% 18%)', animationDelay: '0.3s'}}>Procedimentos</a>
<a className="font-heading text-2xl font-light" href="#contato" onclick="closeMobileMenu()" style={{color: 'hsl(30 5% 18%4s'}}>Contato</a>
<div className="mt-4">
<a className="font-body text-xs uppercase border px-10 py-4" href="#contato" onclick="closeMobileMenu()" style={{letterSpacing: '0.2em', borderColor: '#C9B88C', color: '#C9B88C'}}>Agendar Consulta</a>
</div>
</div>

<section className="relative h-screen w-full overflow-hidden" id="inicio" style={{background: 'hsl(30 5% 12%)'}}>

<div className="absolute inset-0">
<img alt="Dr. Fernando Bastos e Dra. Tiana Burmann" className="h-full w-full object-cover img-desaturated" src="https://lh3.googleusercontent.com/d/1zNgRyfBmeZOxfKcFFzd5z_Gjb9PlIORh" style={{}}/>
</div>

<div className="absolute inset-0 hidden md:block hero-gradient-desktop"></div>

<div className="absolute inset-0 md:hidden hero-gradient-bottom"></div>

<div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.5) 100%)'}}></div>

<div className="relative z-10 container mx-auto flex h-full flex-col justify-end pb-24 px-6 md:justify-center md:pb-0 lg:px-10">
<div className="md:max-w-xl lg:max-w-2xl">

<div className="mb-6" style={{animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 0.3s both'}}>
<span className="font-body text-xs font-medium uppercase text-white/60" style={{letterSpacing: '0.3em', fontSize: '0.65rem'}}>Excelência em Cuidados Integrados</span>
</div>

<h1 className="font-heading text-4xl font-light tracking-tight text-white md:text-5xl lg:text-7xl" style={{lineHeight: '1.05', animation: 'fadeInUp 1s cubic-bezier 0.3, 1) 0.5s both'}}>
                    Instituto<br/>Burmann <span className="italic font-light" style={{color: '#C9B88C'}}>&amp;</span> Bastos
                </h1>

<p className="mt-6 hidden font-heading text-lg font-light italic text-white/80 md:block lg:text-xl" style={{lineHeight: '1.6', animation: 'fadeInUp 1s cubic-bezier(0.3, 1) 0.7s both'}}>
                    Onde a ciência encontra a arte do cuidar —<br className="hidden lg:block"/> saúde, beleza e bem-estar em perfeita harmonia.
                </p>

<p className="mt-4 font-body text-sm font-light text-white/70 md:hidden" style={{lineHeight: '1.7', animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.s both'}}>
                    Onde a ciência encontra a arte do cuidar — saúde, beleza e bem-estar em harmonia.
                </p>

<div className="mt-8" style={{animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both'}}>
<div className="h-px w-24" style={{background: 'linear-gradient(to right, #C9B88C, rgba(201,184,140,0.3), transparent)'}}></div>

<div className="mt-8" style={{animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both'}}>
<a className="inline-block border border-white/40 bg-white/10 px-10 py-4 font-body text-xs uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-500 hover:border-amber-200/60 hover:bg-amber-200/20" href="#contato" style={{letterSpacing: '0em'}}>
                        Agendar Consulta
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2">
<span className="font-body text-xs uppercase text-white/40 md:hidden" style={{letterSpacing: '0.2em', fontSize: '0.6rem'}}>Deslize</span>
<div-scroll-indicator">
<i className="h-5 w-5 text-white/50" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</div-scroll-indicator"></div>
</div>
</section>

<section className="relative bg-white py-16 md:py-24 lg:py-32">
<div className="container mx-auto px-6 lg:px-10">
<div className="reveal mx-auto max-w-4xl text-12 md:mb-16">
<span className="label-elegant">Conheça o Instituto</span>
<h2 className="mt-4 font-heading text-3xl font-light tracking-tight md:text-4xl lg:text-5xl" style={{color: 'hsl(30 5% 18%)'}}>
                    Uma experiência <em className="italic font-light" style={{color: '#C9B88C'}}>incomparável</em><div className="gold-line mx-auto mt-8 w-24"></div>
</h2></div>
<div className="reveal mx-auto max-w-5xl" style={{transitionDelay: '0.2s'}}>
<div className="relative overflow-hidden" style={{aspectRatio: '16/9', border: '1px solid rgba(201,184,140,0.2)'}}>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="h-full w-full" frameborder="0" src="embed/dQw4w9WgXcQ?rel=0&amp;modestbranding=1&amp;showinfo=0" style={{border: 'none'}} title="Vídeo Institucional — Instituto Burmann e Bastos"></iframe>
</div>
<p className="mt-6 text-center font-body text-sm font-light" style={{color: 'hsl(30-spacing: 0.05em'}}>
                    Conheça a estrutura, a equipe e a filosofia que fazem do Instituto Burmann &amp; Bastos referência nacional em cuidados integrados.
                </p>
</div>
</div>
</section>

<section className="py-14 md:py-20" style={{background: '#F5F2ED mx-auto px-6 lg:px-10'}}>
<div className="gold-line mx-auto mb-12 w-full max-w-2xl reveal"></div>
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
<div className="reveal text-center" style={{transitionDelay: '0.1s'}}>
<span className="font-heading text-3xl font-light md:text-4xl lg:text-5xl" style={{color: 'hsl(30 5% 18%)'}}>+5000</span>
<p className="mt-2 font-body text-xs uppercase" style={{letterSpacing: '0.15em', color: 'hsl(30 5% 45%)'}}>Procedimentos realizados</p>
</div>
<div className="reveal text-center" style={{transitionDelay: '0.2s'}}>
<span className="font-heading text-3xl font-light md:text-4xl lg:text-5xl" style={{color: 'hsl(30 5% 18%)'}}>+3.000</span>
<p className="mt-2 font-body text-xs uppercase" style={{letterSpacing: '0.15em', color: 'hsl(30 5% 45%)'}}>Vidasadas</p>
</div>
<div className="reveal text-center" style={{transitionDelay: '0.3s'}}>
<span className="font-heading text-3xl font-light md:text-4xl lg:text-5xl" style={{color: 'hsl(30 5% 18%)'}}>15+</span>
<p className="mt-2 font-body text-xs uppercase" style={{letterSpacing: '0.15em', color: 'hsl(30 5% 45%)'}}>Anos de experiência</p>
</div>
<div className="reveal text-center" style={{transitionDelay: '0.4s'}}>
<span className="font-heading text-3xl font-light md:text-4xl lg:text-5xl" style={{color: 'hsl(30 5% 18%)'}}>50</span>
<p className="mt-2 font-body text-xs uppercase" style={{letterSpacing: '0.15em', color: 'hsl(30 5% 45%)'}}>Avaliação Google</p>
</div>
</div>
<div className="gold-line mx-auto mt-12 w-full max-w-2xl reveal" style={{transitionDelay: '0.5s'}}></div>
<div 0.6s;"="" className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 reveal style={{transitionDelay: '='}}">
<span className="font-body text-xs uppercase" style={{letterSpacing: '0.2em', color: 'hsl(30 5% 55%)'}}>SBCP</span>
<span style={{color: 'hsl(30 5% 80%)'}}>·</span>
<span className="font-body text-xs uppercase" style={{letterSpacing: '0.2em', color: 'hsl(30 5% 55%)'}}>CFM</span>
<span style={{color: 'hsl(30 5% 80%)'}}>·</span>
<span .2em;="" 5%="" 55%);"="" className="font-body text-xs uppercase" color:="" hsl(30="">ISAPS</span>
<span style={{color: 'hsl(30 5% 80%)'}}>·</span>
<span className="font-body text-xs uppercase" style={{letterSpacing: '0.2em', color: 'hsl(30 5% 55%)'}}>FEBRASGO</span>
</div>

</section>

<section className="py-24 md:py-32 lg:py-40" style={{background: '#FAFAF8'}}>
<div className="container mx-auto px-6 lg:px-10">
<div className="4xl text-center">
<span className="font-heading text-8xl italic md:text-9xl" style={{color: '#C9B88C', opacity: '0.15', lineHeight: '0.5'}}>"</span>
<blockquote className="font-heading text-2xl font-light italic md:text-3xl lg:text-4xl" style={{color: 'hsl(30 5% 18%)', lineHeight: '1.6', marginTop: '-rem'}}>
                    Acreditamos que o verdadeiro cuidado nasce da escuta atenta, do olhar individualizado e da busca constante pela excelência — cada pessoa é única e merece um tratamento à sua altura.
                </blockquote>
<div className="gold-line mx-auto my-10 w-24"></div>
<span #c9b88c;"="" .3em;="" className="font-body text-xs uppercase" color:="">Instituto Burmann &amp; Bastos</span>
</div>
</div>
</section>

<section className="parallax-container relative w-full overflow-hidden" style={{height: '60vh', minHeight: '400px'}}>
<div className="parallax-img absolute inset-0" style={{height: '130%'}}>
<img alt="Instituto Burmann e Bastos — Ambiente" className="h-full w-full object-cover img-artistic-bw" src="https://lh3.googleusercontent.com/d/1uJluBSHw6KgmAraMK-RgXzTJv6O88a15" style={{objectPosition: 'center 30%'}}/>
</div>
<div bottom,="" className="absolute inset-0" rgba(0,0,0,0.15),="" rgba(0,0,0,0.3));"="" to=""></div>
</section>

<section className="relative" id="sobre" style={{background: '#FAFAF8'}}>
<div className="grid min-h-[700px] lg:grid-cols-2">

<div className="relative min-h-[400px] overflow:min-h-0 reveal-left">
<img alt="Dr. Fernando Bastos e Dra. Tiana Burmann" className="h-full w-full object-cover img-desaturated" src="https://lh3.googleusercontent.com/d/1-FbbQK7RC01ZT4DddihnInbfVLQsLnOF" style={{objectPosition: 'center 20%'}}/>
<div className="absolute inset-0 hidden lg:block" style={{background: 'linear-gradient(to right, transparent 80FAFAF8)'}}></div>
</div>

<div className="flex items-center px-6 py-16 lg:px-16 lg:py-24">
<div className="max-w-xl reveal-right">
<span className="label-elegant">Sobre o Instituto</span>
<h2 className="mt-5 font-heading text-3xl font-light tracking-tight md:text-4xl lg:text-5xl" italic"="" style={{color: '#C9B88C'}}>&amp;<br/>Dra. Tiana Burmann
                    </h2>
<div className="my-8 h-px w-16" style={{background: 'linear-gradient(to right, #C9B88C, transparent)'}}></div>
<p className="font-body text-sm font-light leading-relaxed" style={{color: 'hsl(30 5% 40%)'}}>
                        Fundado Dr. Fernando Bastos, cirurgião plástico reconhecido pela sua técnica refinada e visão artística, e pela Dra. Tiana Burmann, ginecologista e obstetra com expertise em saúde feminina integral, o Instituto Burmann &amp; Bastos nasceu da convicção de que saúde, beleza e bem-estar c</p>
<p className="mt-4 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(30 5% 40%)'}}>
                        Com infraestrutura moderna e completa, o instituto oferece atendimento seguro e de altíssimo padrão nas áreas de Face, Corpo, Saúde da Mulher e Sa Homem — sempre com abordagem humanizada, ética e personalizada.
                    </p>
<div className="mt-8 grid grid-cols-2 gap-6">
<div>
<p className="font-body text-xs font-medium uppercase" style={{letterSpacing: '0.15em', color: '#C9B88C'}}>Dr. Fernando Bastos</p>
<p className="mt-1 font-body text-xs font-light" style={{color: 'hsl(30 5% 50%)'}}>Cirurgião Pl<br/>CRM/RS XXXXX · RQE XXXXX</p>
</div>
<div>
<p className="font-body text-xs font-medium uppercase" style={{letterSpacing: '0.15em', color: '#C9B88C'}}>Dra. Tiana Burmann</p>
<p className="mt-1 font-body text-xs font-light" style={{color: 'hsl(30 5% 50%)'}}>Ginecologista e Obstetra<br/>CRM/RS XXXXX · RQE XXXXX</p>
</div>
</div>
<div className="mt-">
<a className="inline-block border px-8 py-3 font-body text-xs uppercase transition-all duration-300 hover:bg-amber-800/5" href="#contato" style={{letterSpacing: '0.15em', borderColor: '#C9B88C', color: '#C9B88C'}}>
                            Conheça Nossa Equipe
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="section-dark py-20 md:py-28 lg:py-36">
<div className="container mx-auto px-6 lg:px-10">
<div className="reveal mx-auto max-w-3xl text-center mb-16">
<span className="label-elegant" style={{color: '#C9B88C'}}>Entendemos Você</span>
<h2 className="mt-5 font-heading text-3xl font-light tracking-tight md:text-4xl lg:text-5xl" italic"="" style={{color: 'hsl(40 20% 95%)', lineHeight: '1.15 pessoa carrega &lt'}}>suas próprias questões
                </h2>
<p className="mt-6 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(40 10% 65%)'}}>
                    Seja uma insatisfação estética, um desconforto que afeta sua qualidade de vida ou a busca por mais sa vitalidade — estamos aqui para ouvir, entender e transformar.
                </p>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="reveal group border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-amber-200/30 hover:bg-white/10" style={{transitionDelay: '0.1s'}}>
<i-lucide="sparkles" className="h-6 w-6 mb-5" style={{color: '#C9B88C', strokeWidth: '1.5'}}>
<h3 className="font-heading text-lg font-light" style={{color: 'hsl(40 20% 95%)'}}>Sinais do Tempo na Face</h3>
<p className="mt-3 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(40 10% 60%)'}}>Ruacidez e perda de volume que fazem você não se reconhecer no espelho.</p>
</i-lucide="sparkles"></div>

<div className="reveal group border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-amber-200/30 hover:bg-white/10" style={{transitionDelay: '0.2s'}}>
<i className="h-6 w-6 mb-5" data-lucide="heart" style={{color: '#C9B88C', strokeWidth: '1.5'}}></i>
<h3 className="font-heading text-lg font-light40 20% 95%);">Desconforto com o Corpo</h3>
<p className="mt-3 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(40 10% 60%)'}}>Gordura localizada, contorno corporal ou pós-gestação que afetam sua autoestima.</p>
</div>

<div className="h-6 w-6 mb-5" flower-2"="" style={{color: '#C9B88C', strokeWidth: '1.5'}}>
<h3 className="font-heading text-lg font-light" style={{color: 'hsl(40 20% 95%)'}}>Saúde Íntima Feminina</h3>
<p className="mt-3 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(40 10% 60%)'}}>Questões ginecológicas delicadas que merecem acolhimento e expertiseizada.</p>
</div>

<div className="reveal group border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-amber-200/30 hover:bg-white/10" style={{transitionDelay: '0.4s'}}>
<i className="h-6 w-6 mb-5" data-lucide="shield" style={{color: '#C9B88C', strokeWidth: '1.5'}}></i>
<h3 className="font-heading text-lg font-light" style={{color: 'hsl(40 20% 95%)'}}>Vitalidade Masculina</h3>
<p className="mt-3 light leading-relaxed" style={{color: 'hsl(40 10% 60%)'}}>Perda de energia, desempenho e confiança que impactam a qualidade de vida.</p>
</div>

<div className="reveal group border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-amber-200/30 hover:bg-white/10" style={{transitionDelay: '0.5s'}}>
<i className="h-6 w-6 mb-5" data-lucide="sun" style={{color: '#C9B88C', strokeWidth: '1.5'}}></i>
                -heading text-lg font-light" style={{color: 'hsl(40 20% 95%)'}}&gt;Bem-Estar e Equilíbrio
<p className="mt-3 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(40 10% 60%)'}}>Cansaço, estresse e a sensação de que a saúde precisa de atenção especializada.</p>
</div>

<div className="reveal group border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-amber-200/30 hover:bg-white: 0.6s;">
<i className="h-6 w-6 mb-5" data-lucide="eye" style={{color: '#C9B88C', strokeWidth: '1.5'}}></i>
<h3 className="font-heading text-lg font-light" style={{color: 'hsl(40 20% 95%)'}}>Quero me Sentir Melhor</h3>
<p className="mt-3 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(40 10% 60%)'}}>A busca por se sentir bem consigo mesmo, com naturalfiança renovada.</p>
</div>
</div>
<div className="reveal mt-16 text-center" style={{transitionDelay: '0.7s'}}>
<p className="font-body text-sm font-light italic leading-relaxed" style={{color: 'hsl(40 10% 65%)'}}>
                    Você não precisa enfrentar essas questões sozinho(a). Estamos aqui para cuidar de você.
                </p>
<div className="mt-8">
<a className="inline-block border px-10 font-body text-xs uppercase transition-all duration-300 hover:bg-white/10" href="#contato" style={{letterSpacing: '0.2em', borderColor: '#C9B88C', color: '#C9B88C'}}>
                        Fale Conosco
                    </a>
</div>
</div>
</div>
</section>

<section id="procedimentos">

<div className="py-20 text-center" container="" mx-auto="" px-6"="" reveal="" style={{background: '#&lt'}}>
<span className="label-elegant">Especialidades</span>
<h2 className="mt-5 font-heading text-3xl font-light tracking-tight md:text-4xl lg:text-5xl" style={{color: 'hsl(30 5% 18%)'}}>
                    Cuidados integrados <em className="italic" style={{color: '#C9B88C'}}>de excelência</em>
</h2>
<div className="gold-line mx-auto mt-8 w-32"></div>
</div>


<div className="grid min-h-[500px] lg:grid-cols-2" style={{background: 'white'}}>
<div className="relative min-h-[350px] overflow-hidden reveal-left lg:min-h-0">
<img alt="Procedimentos Faciais" className="h-full w-full object-cover img-desaturated" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{objectPosition: 'center'}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(0,0,0), transparent)'}}></div>
</div>
<div className="flex items-center px-6 py-14 lg:px-16 lg:py-20 reveal-right">
<div className="max-w-xl">
<span className="label-elegant">Face</span>
<h3 className="mt-4 font-heading text-3xl font-light tracking-tight md:text-4xl" style={{color: 'hsl(30 5% 18%)'}}>Harmonização &amp;<br/>Rejuvenescimento</h3>
<p className="mt-2 font-heading text-base italic" h-px="" my-6="" style={{background: 'linear-gradient(to right, #C9B88C, transparent)'}} w-12"=""></p></div>
<p className="font-body text-sm font-light leading-relaxed" style={{color: 'hsl(30 5% 45%)'}}>
                        Nossos procedimentos faciais são desenhados para realçar sua beleza natural com resultado harmônico e sofisticado. Da harmonização facial ao tecnologias avançadas, cada tratamento é personalizado para refletir quem você é.
                    </p>
<ul className="mt-6 space-y-2">
<li className="font-body text-xs font-light" style={{color: 'hsl(30 5% 50%)'}}>· Harmonização Orofacial</li>
<li className="font-body text-xs font-light" style={{color: 'hsl(30 5% 50%)'}}>· Rejuvenescimento Facial</li>
<li className="font-body text-xs font-light" style={{color: 'h%)'}}>· Blefaroplastia</li>
<li className="font-body text-xs font-light" style={{color: 'hsl(30 5% 50%)'}}>· Rinoplastia</li>
</ul>
<div className="mt-8">
<a className="inline-block border px-8 py-3 font-body text-xs uppercase transition-all duration-300 hover:bg-amber-800/5" href="#contato" style={{letterSpacing: '0.15em', borderColor: '#C9B88C', color: '#C9B88C'}}>
                            Saiba Mais
                        </a>
</div>
</div>
</div>


<div className="grid min-h-[500px] lg:grid-cols-2" style={{background: 'white'}}>
<div 1c0rdtpjm2sso3yz8tziyo5on4sfbrghx"="" alt="Saúde da Mulher" className="relative min-h-[350px] overflow-hidden reveal-left &lt;img src=" class-cover="" d="" https:="" img-desaturated"="" lh3.googleusercontent.com="" style={{objectPosition: 'center 25%'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.15), transparent)'}}></div>
</div>
<div className="flex items-center px-6 py-14 lg:px-16 lg:py-20 reveal-right">
<div className="max-w-xl">
<span className="label-elegant">Saúde da Mulher</span>
<h3 className="mt-4 font-heading text-3xl font-light tracking-tight md:text-4xl" style={{color: 'hsl(30 5% 18%)'}}>Ginecologia &amp;<br/>Cuidado Integral<p className="mt-2 font-heading text-base italic" style={{color: '#C9B88C'}}>Acolhimento, ciência e sensibilidade feminina</p>
<div className="my-6 h-px w-12" style={{background: 'linear-gradient(to right, #C9B88C, transparent)'}}></div>
<p className="font-body text-sm font-light leading-relaxed" style={{color: 'hsl(30 5% 45%)'}}>
                        A Dra. Tiana Burmann oferece um atendimento ginecológico completo e humanizado, com foco na saúde integral da mulher em todas as fases da vida. Daúde reprodutiva ao climatério, do pré-natal ao pós-parto, cada consulta é um espaço de cuidado e confiança.
                    </p>
<ul className="mt-6 space-y-2">
<li className="font-body text-xs font-light" style={{color: 'hsl(30 5% 50%)'}}>· Ginecologia Integral</li>
<li className="font-body text-xs font-light" style={{color: 'hsl(30 5% 50%)'}}>· Estética Íntima</li>
<li className="font-body text-xs font-light" style={{}}>· Pré-natal e Pós-parto</li>
<li className="font-body text-xs font-light" style={{color: 'hsl(30 5% 50%)'}}>· Saúde Hormonal</li>
</ul>
<div className="mt-8">
<a className="inline-block border px-8 py-3 font-body text-xs uppercase transition-all duration-300 hover:bg-amber-800/5" href="#contato" style={{letterSpacing: '0.15em', borderColor: '#C9B88C', color: '#C9B88C'}}>
                            Saiba Mais
                        </a>
</div>
</h3></div>
</div>
</div>

<div className="grid min-h-[500px] lg:grid-cols-2" style={{background: '#F5F2ED'}}>
<div className="flex items-center px-6 py-14 lg:px-16 lg:py-20 order-2 lg:order-1 reveal-left">
<div className="max-w-xl">
<span className="label-elegant">Saúde do Homem</span>
<h3 className="mt-4 font-heading text-3xl font-light tracking-tight md:text-4xl" style={{color: 'hsl(30 5% 18%)'}}>Performance &amp;<br/>Vitalidade Masculina</h3>
<p className="mt-2 font-heading text-base italic" style={{color: '#C9B88C'}}>Sa confiança e qualidade de vida</p>
<div className="my-6 h-px w-12" style={{background: 'linear-gradient(to right, #C9B88C, transparent)'}}></div>
<p className="font-body text-sm font-light leading-relaxed" style={{color: 'hsl(30 5% 45%)'}}>
                        O cuidado com a saúde masculina vai muito além da estética. Oferecemos uma abordagem completa para homens que buscam manter a vitalidade, o desempenho e a confiança em alta com discrição, respeito e excelência médica.
                    </p>
<ul className="mt-6 space-y-2">
<li className="font-body text-xs font-light" style={{color: 'hsl(30 5% 50%)'}}>· Ginecomastia</li>
<li className="font-body text-xs font-light" style={{color: 'hsl(30 5% 50%)'}}>· Lipoescultura Masculina</li>
<li className="font-body text-xs font-light" style={{color: 'hsl(30 5% 50%)'}}>· Saúde e Performance className="font-body text-xs font-light" style={{color: 'hsl(30 5% 50%)'}}&gt;· Rejuvenescimento Masculino</li>
</ul>
<div className="mt-8">
<a className="inline-block border px-8 py-3 font-body text-xs uppercase transition-all duration-300 hover:bg-amber-800/5" href="#contato" style={{letterSpacing: '0.15em', borderColor: '#C9B88C', color: '#C9B88C'}}>
                            Saiba Mais
                        </a>
</div>
</div>
</div>
<div className="relative min-h-[350px] overflow-hidden order-1 lg:order-2 reveal-right lg:min-h-0">lh3.googleusercontent.com/d/13fRRPWoHhTp38kvZ6rYM1niJiXWEnugr" alt="Saúde do Homem" className="h-full w-full object-cover img-desaturated" style={{objectPosition: 'center'}}&gt;set-0" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent)'}}&gt;</div>
</div>

</section>

<section className="parallax-container relative w-full overflow-hidden" style={{height: '55vh', minHeight: '380px'}}>
<div className="parallax-img absolute inset-0" style={{top: '-15%', height: '130%'}}>
<img alt="Dr. Fernando Bastos" className="h-full w-full object-cover img-artistic-: center 20%;" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute inset-0" style={{background: 'rgba(0,0,0,0.5)'}}></div>
<div className="relative z-10 flex h-full items-center justify-center px-6">
<div className="max-w-3xl text-center reveal">
<span className="font-heading text-6xl italic text-white/20 md:text-7xl">"</span>
<block-xl 90="" font-light="" italic="" lg:text-3xl"="" md:text-2xl="" style={{lineHeight: '1.6', marginTop: '-1.5rem'}} text-white="">
                    Nosso compromisso é com resultados que honram a individualidade de cada paciente — porque a verdadeira beleza é aquela que nasce do equilíbrio.
                <div className="mx-auto mt-8 h-px w-16" style={{background: 'linear-gradient(to right, transparent, #C9B88C, transparent)'}}></div>
<p className="mt-4 font-body text-xs uppercase" style={{letterSpacing: '0.3em', color: '#C9B88C'}}>Dr. Fernando Bastos &amp; Dra. Tiana Burmann</p>
</block-xl></div>
</div>
</section>

<section className="py-20 md:py-28 lg:py-36" style={{background: '#F8'}}>
<div className="container mx-auto px-6 lg:px-10">
<div className="reveal mx-auto max-w-3xl text-center mb-16">
<span className="label-elegant">Diferenciais</span>
<h2 className="mt-5 font-heading text-3xl font-light tracking-tight md:text-4xl lg:text-5xl" style={{color: 'hsl(30 5% 18%)'}}>
                    Por que o Instituto Burmann <em className="italic" style={{color: '#C9B88C'}}>&amp; Bastos</em>
</h2>
<div className="gold w-24"></div>
</div>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

<div className="reveal text-center" style={{transitionDelay: '0.1s'}}>
<div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full" style={{border: '1px solid rgba(201184,140,0.3)'}}>
<i className="h-6 w-6" data-lucide="users" style={{color: '#C9B88C', strokeWidth: '1.5'}}></i>
</div>
<h4 className="font-heading text-base font-light" style={{color: 'hsl(30 5% 18%)'}}>Casal de Especialistas</h4>
<p className="mt-2 font-body text-xs font-light leading-relaxed" style={{color: 'hsl(30 5% 50%)'}}>ão complementar que une cirurgia plástica e ginecologia para cuidado completo.</p>
</div>

<div className="reveal text-center" style={{transitionDelay: '0.2s'}}>
<div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full" style={{border: '1px solid rgba(201,184,140,0.3)'}}>
<i className="h-6 w-6" data-lucide="gem" style={{color: '#C9B88C', strokeWidth: '1.5'}}>
<h4 className="font-heading text-base font-light" style={{color: 'hsl(30 5% 18%)'}}>Cuidado Integrado</h4>
<p className="mt-2 font-body text-xs font-light leading-relaxed" style={{color: 'hsl(30 5% 50%)'}}>Saúde, estética e bem-estar em um só lugar, com abordagem holística.</p>
</i></div>

<div className="reveal text-center" style={{transitionDelay: '0.3s'}}>
<div building-2"="" className="h-6 w-6" style={{color: '#C9B88C', strokeWidth: '1.5'}}>
</div>
<h4 className="font-heading text-base font-light" style={{color: 'hsl(30 5% 18%)'}}>Infraestrutura Premium</h4>
<p className="mt-2 font-body text-xs font-light leading-relaxed" style={{color: 'hsl(30 5% 50%)'}}>Ambientes modernos e equipados com o que há de mais avançado.
                
<div className="reveal text-center" style={{transitionDelay: '0.4s'}}>
<div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full" style={{border: '1px solid rgba(201,184,140,0.3)'}}>
<i className="h-6 w-6" data-lucide="hand-heart" style={{color: '#C9B88C', strokeWidth: '1.5'}}></i>
</div>
<h4 className="font-heading text-base font-light" style={{color: 'hsl(30 5% 18%)'}}>Atendimento Humanizado</h4>
<p className="mt-2 font-body text-xs font-color: hsl(30 5% 50%);">Cada paciente é acolhido com escuta ativa, empatia e dedicação genuína.</p>
</div>

<div className="reveal text-center" style={{transitionDelay: '0.5s'}}>
<div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full" style={{border: '1px solid rgba(201,184,140,0.3)'}}>
<i className="h-6 w-6" data-lucide="award" font-heading="" font-light"="" style={{color: 'hsl(30 5% 18%)'}} text-base="">Excelência Reconhecida
<p className="mt-2 font-body text-xs font-light leading-relaxed" style={{color: 'hsl(30 5% 50%)'}}>Referência nacional com milhares de pacientes satisfeitos e avaliação máxima.</p>
</i></div>
</div>
</p></div>
</div></div></div></section>

<section className="overflow-hidden py-16 md:py-24" style={{background: '#F5F2ED'}}>
<div className="container mx-auto px-6 lg:px-10 mb-12">
<div className="reveal text-center">
<span className="label-elegant">Nosso Espaço</span>
<h2 className="mt-5 font-heading text-3xl font-light tracking-tight md:text-4xl" style={{color: 'hsl(30 5% 18%)'}}>
                    Um ambiente pensado : #C9B88C;"&gt;para você
</h2>
</div>
</div>
<div className="relative overflow-hidden">
<div className="carousel-track" id="carouselTrack">

<div className="flex-shrink-0 px-3" style={{width: '350px'}}>
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<imggoogleusercontent.com 1ujlubshw6kgmaramk-rgxztjv6o88a15"="" alt="Clínica 1" className="h-full w-full object-cover transition duration-500 hover:scale-105 img-desaturated" d="" />
</imggoogleusercontent.com></div>
</div>
<div className="flex-shrink-0 px-3" style={{width: '350px'}}>
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Clínica 2" className="h-full w-full object-cover transitionscale-105 img-desaturated" src="https://lh3.googleusercontent.com/d/16oWNwqrBF8Zi4tSAxiAyEotx0Ki0VFBN"/>
</div>
</div>
<div className="flex-shrink-0 px-3" style={{width: '350px'}}>
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Clínica 3" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 img-desaturated" src="https://lh3.googleusercontent.com/d/1Lpl2UIZX6QHbXO1PLVxqWtdN2o0IJGi5"/>
</div>
</div>
<div className="flex-shrink-0 px-3" style={{width: '350px'}}>
<div 13frrpwohhtp38kvz6rym1nijixwenugr"="" alt="Clínica 4" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 img-desaturated" d="" https:="" lh3.googleusercontent.com="" style="aspect
                        &lt;img src=">
</div>
</div>
<div className="flex-shrink-0 px-3" style={{width: '350px'}}>
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 img-desaturated" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
<div className="flex-shrink-0 px-3" style={{width: '350px'}}>
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Clínica 6" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 img-desaturated" src="https://lh3.googleusercontent.com/d/1dU0a-onO9U5wi9wPagGai4OHXnMEJCMD"/>
</div>
</div>
shrink-0 px-3" style={{width: '350px'}}&gt;
                    <div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Clínica 1" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 img-desaturated" src="https://lh3.googleusercontent.com/d/1uJluBSHw6KgmAraMK-RgXzTJv6O88a15"/>
</div>
</div>
<div className="flex-shrink-0 px-3" style={{width: '350px'}}>
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Clínica 2" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 img-desaturated" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
<div className="flex-shrink-0 px-3" style={{width: '350px'}}>
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Clínica 3" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 img-desaturated" src="https://lh3.googleusercontent.com/d/1Lpl2UIZX6QHbXO1PLVxqWtdN2o0IJGi5"/>
</div>
                flex-shrink-0 px-3" style={{width: '350px'}}&gt;
                    <div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Clínica 4" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 img-desaturated" src="https://lh3.googleusercontent.com/d/13fRRPWoHhTp38kvZ6rYM1niJiXWEnugr"/>
</div>
</div>
<div className="flex-shrink-0 px-3" style={{width: '350px'}}>
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Clínica 5" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 img-desaturated" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="flex-shrink-0 px-3" style={{width: '350px'}}>
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Clínica 6" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 img-desaturated" src="https://lh3.googleusercontent.com/d/1dU0a-onO9U5wi9wPagGai4OHXnMEJCMD"/>
</div>
</div>
</div>
</section>

<section className="parallax-container relative w-full overflow-hidden" style={{height: '45vh', minHeight: '300px'}}>
<div className="parallax-img absolute inset-0" style={{top: '-15%', height: '130%'}}>
<img alt="Interior da Clínica" className="h-full w-full object-cover img-desaturated" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{objectPosition: 'center 40%'}}/>
</div>
<div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(250,250,248,0.1), rgba(250,250,248,0.05))'}}></div>
</section>

<section className="py-20 md:py-28 lg:py-36" style={{background: '#F5F2ED'}}>
<div className="container mx-auto px-6 lg:px-10">
<div className="reveal mx-auto max-w-3xl text-center mb-16 md:mb-20">
<span className="label-elegant">Sua Jornada</span>
<h2 className="mt-5 font-heading text-3xl font-light tracking-tight md:text-4xl lg:text-5xl" style={{color: 'hsl(30 5% 18%)'}}>
                    Uma experiência pensada em <em className="italic" gold-line="" mt-8="" mx-auto="" style="color: #C9B88Ctalhe&lt;/em&gt;
                &lt;/h2&gt;
                &lt;div className=" w-24"=""></em></h2></div>
</div>

<div className="relative mx-auto max-w-4xl">

<div className="hidden md:block timeline-line"></div>

<div className="reveal relative mb-12 md:mb-16">
<div className="md:gridmd:gap-12">
<div className="md:text-right md:pr-12">
<span className="font-heading text-4xl font-light" style={{color: 'rgba(201,184,140,0.3)'}}>01</span>
<h4 className="mt-2 font-heading text-xl font-light" style={{color: 'hsl(30 5% 18%)'}}>Primeiro Contato</h4>
<p className="mt-2 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(30 5% 50%)'}}>Agende sua consulta pelo WhatsApp, telefone ou formulário. Nossa equipe responde com agilidade e acolhimento.</p>
</div>
<div className="hidden md:block"></div>
</div>
<div className="absolute left-1/2 top-4 hidden h-4 w-4 -rounded-full md:block" style={{background: '#C9B88C', border: '3px solid #F5F2ED'}}></div>
</div>

<div className="reveal relative mb-12 md:mb-16" style={{transitionDelay: '0.1s'}}>
<div className="md:grid md:grid-cols-2 md:gap-12">
<div className="hidden md:block"></div>
<div className="md:pl-12">
<span className="font-heading text-4xl font-light" style={{color: 'rgba(201,184,140,0.3)'}}>02</span>
<h4-heading font-light"="" style={{color: 'hsl(30 5% 18%)'}} text-xl="">Experiência Inicial
<p className="mt-2 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(30 5% 50%)'}}>Ao chegar, você será recebido em um ambiente que transmite calma, segurança e sofisticação em cada detalhe.</p>
</h4-heading></div>
</div>
<div className="absolute left-1/2 top-4 hidden h-4 w-4 -translate-x-1/2 roundedbackground: #C9B88C; border: 3px solid #F5F2ED;"></div>
</div>

<div className="reveal relative mb-12 md:mb-16" style={{transitionDelay: '0.2s'}}>
<div className="md:grid md:grid-cols-2 md:gap-12">
<div className="md:text-right md:pr-12">
<span className="font-heading text-4xl font-light" style={{color: 'rgba(201,184,140,0.3)'}}>03</span>
<h4 className="mt-2 font-heading text-xl font-light" style={{color: 'hsl(30 5% 18%)'}}>Consulta Personalizada</h4>
<p className="mt-2 light leading-relaxed" style={{color: 'hsl(30 5% 50%)'}}>Tempo dedicado para ouvir suas necessidades, avaliar e criar um plano de tratamento exclusivo para você.</p>
</div>
<div className="hidden md:block"></div>
</div>
<div className="absolute left-1/2 top-4 hidden h-4 w-4 -translate-x-1/2 rounded-full md:block" style={{background: '#C9B88C', border: '3px solid #F5F2ED'}}></div>
</div>

<div className="reveal relative mb-12 md-delay: 0.3s;">
<div className="md:grid md:grid-cols-2 md:gap-12">
<div className="hidden md:block"></div>
<div className="md:pl-12">
<span className="font-heading text-4xl font-light" style={{color: 'rgba(201,184,140,0.3)'}}>04</span>
<h4 className="mt-2 font-heading text-xl font-light" style={{color: 'hsl(30 5% 18%)'}}>Procedimento</h4>
<p className="mt-2 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(30 5% 50%)'}}>Realizado com técnica refinamentos de última geração e toda a segurança que você merece.</p>
</div>
</div>
<div className="absolute left-1/2 top-4 hidden h-4 w-4 -translate-x-1/2 rounded-full md:block" style={{background: '#C9B88C', border: '3px solid #F5F2ED'}}></div>
</div>

<div className="reveal relative mb-12 md:mb-16" style={{transitionDelay: '0.4s'}}>
<div className="md:grid md:grid-cols-2 md:gap-12">
<div className="md:text-right md:pr-12">
<span className="font-heading text-4xl font-light" style={{color: '0.3)'}}>05</span>
<h4 className="mt-2 font-heading text-xl font-light" style={{color: 'hsl(30 5% 18%)'}}>Recuperação Assistida</h4>
<p className="mt-2 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(30 5% 50%)'}}>Acompanhamento próximo no pós-procedimento, com orientações claras e suporte dedicado.</p>
</div>
<div className="hidden md:block"></div>
</div>
<div className="absolute left-hidden h-4 w-4 -translate-x-1/2 rounded-full md:block" style={{background: '#C9B88C', border: '3px solid #F5F2ED'}}></div>
</div>

<div className="reveal relative" style={{transitionDelay: '0.5s'}}>
<div className="md:grid md:grid-cols-2 md:gap-12">
<div className="hidden md:block"></div>
<div className="md:pl-12">
<span className="font-heading text-4xl font-light" style={{color: 'rgba(201,184,140,0.3)'}}>06</span>
<h4 className="mt-2 font-heading text-xl font-light" style={{}}>Resultado &amp; Continuidade</h4>
<p className="mt-2 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(30 5% 50%)'}}>O resultado é a sua melhor versão. E nosso cuidado continua, porque o vínculo com você é para a vida.</p>
</div>
</div>
<div className="absolute left-1/2 top-4 hidden h-4 w-4 -translate-x-1/2 rounded-full mdC9B88C; border: 3px solid #F5F2ED;"></div>
</div>
</div>

</section>

<section className="py-20 md:py-28 lg:py-36" style={{background: '#FAFAF8'}}>
<div className="container mx-auto px-6 lg:px-10">
<div className="reveal mx-auto max-w-3xl text-center mb-16">
<span className="label-elegant">Depoimentos</span>
<h2 className="mt-5 font-heading text-3xl font-light tracking-tight md:text-4xl lg:text-5xl" style={{color: 'hsl(30 5% 18%)'}}>
                rias de <em className="italic" style={{color: '#C9B88C'}}>transformação</em>
</h2>
<div className="gold-line mx-auto mt-8 w-24"></div>
</div>

<div className="relative mx-auto max-w-3xl reveal" style={{transitionDelay: '0.2s'}}>
<div className="overflow-hidden" id="testimonialContainer">
<div className="flex transition-transform duration-700 ease-out" id="testimonialSlider">
                        ial 1 --&gt;
                        <div className="w-full flex-shrink-0 px-4 text-center">
<span className="font-heading text-6xl italic" style={{color: 'rgba(201,184,140,0.2)'}}>"</span>
<p className="font-heading text-lg font-light italic leading-relaxed md:text-xl" style={{color: 'hsl(30 5% 25%)', marginTop: '-1rem'}}>
                                O cuidado quebi no Instituto Burmann &amp; Bastos foi incomparável. Desde a primeira consulta, me senti acolhida, ouvida e segura. O resultado superou todas as minhas expectativas.
                            </p>
<div className="mx-auto my-6 h-px w-12" style={{background: '#C9B88C'}}></div>
<p className="font-body text-xs uppercase" style={{letterSpacing: '0.2em', color: 'hsl(30 5% 30%)'}}>M. L. S.</p>
<p className="mt-1 font-body text-xs font-light" style={{color: 'hsl(30 5% 55%)'}}>Harmonização Facial</p>
</div>

<div className="w-full flex-shrink-0 px-4 text-center">
<span className="font-heading text-6(201,184,140,0.2);">"</span>
<p className="font-heading text-lg font-light italic leading-relaxed md:text-xl" style={{color: 'hsl(30 5% 25%)', marginTop: '-1rem'}}>
                                O Dr. Fernando é um artista. Entendeu exatamente o que eu queria, respeitou meus limites e entregou um resultado natural e elegante. Recomendo de olhos fechados.
                            </p>
<div classh-px="" style={{background: '#C9B88C'}} w-12"=""></div>
<p className="font-body text-xs font-medium uppercase" style={{letterSpacing: '0.2em', color: 'hsl(30 5% 30%)'}}>A. R. P.</p>
<p className="mt-1 font-body text-xs font-light" style={{color: 'hsl(30 5% 55%)'}}>Lipoescultura</p>
</div>

<div className="w-full flex-shrink-0 px-4 text-center">
<span className="font-heading text-6xl italic" font-heading="" font-light="" italic="" leading-relaxed="" md:text-xl"="" style={{color: 'hsl(30 5% 25%)', marginTop: '-1rem'}} text-lg="">
                                A Dra. Tiana mudou minha relação com meu corpo. Seu cuidado vai além da medicina — é escuta, empatia e respeito. Me sinto renovada por dentro e por fora.
                            
<div className="mx-auto my-6 h-px w-12" font-body="" font-medium="" style={{letterSpacing: '0.2em', color: 'hsl(30 5% 30%)'}} text-xs="" uppercase"="">C. F. M.
<p className="mt-1 font-body text-xs font-light" style={{color: 'hsl(30 5% 55%)'}}>Saúde Feminina</p>
</div>
</span></div>
</div>

<button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden md:flex h w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-amber-50" onclick="prevTestimonial()" style={{border: '1px solid rgba(201,184,140,0.3)'}}>
<i className="h-4 w-4" data-lucide="chevron-left" style={{color: '#C9B88C', strokeWidth: '1.5'}}></i>
</button>
<button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden md:flex h-10 w-10-full transition-all duration-300 hover:bg-amber-50" onclick="nextTestimonial()" style={{border: '1px solid rgba(201,184,140,0.3)'}}>
<i className="h-4 w-4" data-lucide="chevron-right" style={{color: '#C9B88C', strokeWidth: '1.5'}}></i>
</button>

<div className="mt-10 flex items-center justify-center gap-3">
<button className="testimonial-dot h-2 w-2 rounded-full transition-all duration-300" gototestimonial(1)"="" onclick="goToTestimonial(0)" style={{background: 'rgba(201,184,140,0.3)'}}></button>
<button className="testimonial-dot h-2 w-2 rounded-full transition-all duration-300" onclick="goToTestimonial(2)" style={{background: 'rgba(201,184,140,0.3)'}}></button>
</div>
</div>
</div>
</div></section>

<section className="relative overflow-hidden py-24 md:py-32 lg:py-40" style={{background: 'linearsl(30 8% 14%), hsl(30 5% 18%), hsl(30 8% 14%))'}}>

<div className="absolute inset-0 opacity-5">
<svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="60" id="grid" patternunits="userSpaceOnUse" width="60">
<path d="M 60 0 L 0 0 0 60" fill="none" stroke="" strokeWidth="0.3"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10 container mx-auto px-6 text-center lg:px-10">
<div className="reveal mx-auto max-w-3xl">
<span className="label-elegant" style={{color: '#C9B88C'}}>Próximo Passo</span>
<h2 className="mt-6 font-heading text-3xl font-light tracking-tight text md:text-4xl lg:text-5xl" style={{lineHeight: '1.15'}}>
                    Sua transformação começa com <em className="italic" style={{color: '#C9B88C'}}>uma conversa</em>
</h2>
<p className="mt-6 font-body text-sm font-light leading-relaxed" style={{color: 'hsl(40 10% 65%)'}}>
                    Agende sua consulta e descubra como o cuidado integrado do Instituto Burmann &amp; Bastos pode transformar sua sa sua beleza e sua vida.
                </p>
<div className="mt-10">
<a className="inline-block px-12 py-5 font-body text-xs uppercase tracking-widest text-white transition-all duration-500 hover:opacity-90" href="#contato" style={{letterSpacing: '0.2em', background: '#C9B88C'}}>
                        Agendar Consulta
                    </a>
</div>
</div>
</div>
</section>

<section className="relative" id="contato" style={{background: '#FAFAF8'}}>
<div className="grid min-h-[600px] lg:grid-cols-2">

<div className="relative min-h-[350px] overflow-hidden lg:min-h-0 reveal-left">
<img alt="Dr. Fernando e Dra. Tiana" className="h-full w-full object-cover img-artistic-w" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{objectPosition: 'center 20%'}}/>
<div className="absolute inset-0 hidden lg:block" style={{background: 'linear-gradient(to right, transparent 85%, #FAFAF8)'}}></div>
</div>

<div className="flex items-center px-6 py-16 lg:px-16 lg:py-24">
<div className="max-w-lg-right">
<span className="label-elegant">Contato</span>
<h2 className="mt-5 font-heading text-3xl font-light tracking-tight md:text-4xl lg:text-5xl" style={{color: 'hsl(30 5% 18%)'}}>
                        Vamos <em className="italic" style={{color: '#C9B88C'}}>conversar?</em>
</h2>
<div className="my-8 h-px w-16" style={{background: 'linear-gradient(to right, #C9B88C, transparent)'}}></div>
<div-y-6">
<div className="flex items-start gap-4">
<i className="mt-0.5 h-5 w-5 flex-shrink-0" data-lucide="map-pin" style={{color: '#C9B88C', strokeWidth: '1.5'}}></i>
<div>
<p className="font-body text-xs font-medium uppercase" style={{letterSpacing: '0.1em', color: 'hsl(30 5% 30%)'}}>Endereço</p>
<p className="mt-1 font-body text-sm font-light" style={{color: 'hsl(30 5% %)'}}>Rua Exemplo, 1234 — Sala 501<br/>Bairro Nobre, Porto Alegre — RS</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="mt-0.5 h-5 w-5 flex-shrink-0" data-lucide="phone" style={{color: '#C9B88C', strokeWidth: '1.5'}}></i>
<div>
<p className="font-body text-xs font-medium uppercase" style={{letterSpacing: 'sl(30 5% 30%)'}}>Telefone</p>
<p className="mt-1 font-body text-sm font-light" style={{color: 'hsl(30 5% 50%)'}}>(51) 3XXX-XXXX</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="mt-0.5 h-5 w-5 flex-shrink-0" data-lucide="message-circle" style={{color: '#C9B88C', strokeWidth: '1.5'}}></i>
<div>
<p className="font-body text-xs font-medium uppercase" style={{letterSpacing: '0.1em', color: 'hsl(30 5% 30%)'}}>Wh<p className="mt-1 font-body text-sm font-light" style={{color: 'hsl(30 5% 50%)'}}>(51) 9XXXX-XXXX</p>
</p></div>
</div>
</div-y-6"></div>

<div className="mt-8 flex items-center gap-5">
<a className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-amber-50" href="#" style={{border: '1px solid rgba(201,184,140,0.3)'}}>
<i data--4="" style={{color: '#C9B88C', strokeWidth: '1.5'}} w-4"=""></i>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-amber-50" href="#" style={{border: '1px solid rgba(201,184,140,0.3)'}}>
<i className="h-4 w-4" data-lucide="message-circle" style={{color: '#C9B88C', strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="mt-10">
<a className="inline-block px-10 font-body text-xs uppercase tracking-widest text-white transition-all duration-300 hover:opacity-90" href="#" style={{letterSpacing: '0.2em', background: '#C9B88C'}}>
                            Agendar pelo WhatsApp
                        </a>
</div>
</div>
</div>

</section>

<footer className="section-dark py-12 md:py-16">
<div className="container mx-auto px-6 lg:px-10">

<div className="text-center mb-8">
<span-heading font-light="" style={{color: 'hsl(40 20% 85%)'}} text-2xl="" tracking-wide"="">
                    B<span style={{color: '#C9B88C'}}>&amp;</span>B
                
<p className="mt-2 font-body text-xs uppercase" style={{letterSpacing: '0.25em', color: 'hsl(40 10% 50%)'}}>Instituto Burmann &amp; Bastos</p>
</span-heading></div>

<div className="flex-wrap items-center justify-center gap-8 text-center mb-8">
<div>
<p className="font-body text-xs font-light" style={{color: 'hsl(40 10% 55%)'}}>Dr. Fernando Bastos</p>
<p className="font-body text-xs font-light" style={{color: 'hsl(40 10% 40%)'}}>CRM/RS XXXXX · RQE XXXXX</p>
</div>
<div>
<p 10%="" 55%);"="" className="font-body text-xs font-light">Dra. Tiana Burmann</p>
<p className="font-body text-xs font-light" style={{color: 'hsl(40 10% 40%)'}}>CRM/RS XXXXX · RQE XXXXX</p>
</div>
</div>

<div className="flex flex-wrap items-center justify-center gap-6 mb-8">
<span className="font-body uppercase" style={{fontSize: '0.6rem', letterSpacing: '0.2em', color: 'hsl(40 10% 40%)'}}>SBCP="color: hsl(40 10% 30%);"&gt;·</span>
<span className="font-body uppercase" style={{fontSize: '0.6rem', letterSpacing: '0.2em', color: 'hsl(40 10% 40%)'}}>CFM</span>
<span style={{color: 'hsl(40 10% 30%)'}}>·</span>
<span className="font-body uppercase" style={{fontSize: '0.6rem', letterSpacing: '0.2em', color: 'hsl(40 10% 40%)'}}>ISAPS</span>
<span style={{color: 'hsl(40 10% 30%)'}}>·</span>
<span .6rem;="" 0.2em;="" 10%="" 40%);"="" className="font-body uppercase" color:="" hsl(40="" letter-spacing:="">FEBRASGO</span>
</div>

<div className="h-px w-full mx-auto" style={{background: 'linear-gradient(to right, transparent, hsl(40 10% 25%), transparent)'}}></div>

<div className="mt-8 text-center">
<p className="font-body text-xs font-light" style={{color: 'hsl(40 10% 40%)'}}>
                    © 2025 Instituto Burmann &amp; Bastos. Todos os direitos reservados.<p className="mt-3 font-body font-light" style={{fontSize: '0.6rem', color: 'hsl(40 10% 35%)', lineHeight: '1.6', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
                    Os procedimentos divulgados neste site são informativos. Os resultados podem variar de acordo com cada paciente. Agende uma avaliação personalizada. Responsáveis técnicos: Dr. Fernando Bastos — CRM/RS XXXXX e Dra. Tiana Burmann — CRM/RS XXXXX.
                </p>
</p></div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow duration-300 hover:scale-110" href="https://wa.me/555199999999" rel="noopener" style={{background: '#25D366', animation: 'whatsappPulse 2s infinite'}} target="_blank">
<i className="h-6 w-6 text-white" data-lucide="message-circle" style={{strokeWidth: '1.5'}}></i>
</a>


    </>
  );
}
