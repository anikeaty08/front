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



        // Init Icons
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5,
                class: "text-current"
            }
        });

        // Reveal Animation on Scroll
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Parallax Effect (Disabled on Mobile via window width check logic if needed, but CSS handles layout)
        document.addEventListener('scroll', () => {
            if (window.innerWidth > 768) {
                const scrolled = window.scrollY;
                document.querySelectorAll('.parallax').forEach(el => {
                    const speed = el.getAttribute('data-speed');
                    el.style.transform = `translateY(${scrolled * speed}px)`;
                });
            }
        });

        // Card Tilt Effect
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg rotation
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });

        // Custom Cursor Blob
        const blob = document.getElementById("cursorBlob");
        document.body.onpointermove = event => { 
            const { clientX, clientY } = event;
            blob.style.left = `${clientX}px`;
            blob.style.top = `${clientY}px`;
        }

        // Magnetic Button
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[100px] opacity-30"></div>
</div>
<div className="glow-cursor hidden md:block" id="cursorBlob" style={{left: '884px', top: '42px'}}></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
<div className="flex items-center justify-between px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl transition-all duration-300 hover:border-white/20">

<a className="flex items-center gap-0.5 group" href="#">
<span className="text-xl font-bold tracking-tighter text-white">CLICK</span>
<div className="relative flex items-center justify-center mx-0.5">
<i className="w-5 h-5 text-blue-500 fill-blue-500/20 -rotate-12 transform group-hover:scale-110 transition-transform duration-300" data-lucide="mouse-pointer-2"></i>
<svg className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewbox="0 0 24 6" xmlns="http://www.w3.org/2000/svg">
<path d="M0 3C2 1 4 1 6 3C8 5 10 5 12 3C14 1 16 1 18 3C20 5 22 5 24 3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xl font-bold tracking-tighter text-blue-500">FLOW</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm text-neutral-400" href="#services">Sobre</a>
<a className="hover:text-white transition-colors text-sm text-neutral-400" href="#portfolio">Serviços</a>
<a className="hover:text-white transition-colors text-sm text-neutral-400" href="#contact">Contato</a>
</div>
<a className="group flex items-center gap-2 px-4 py-1.5 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors" href="#contact">
                Start Project
                <i className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</a>
</div>
</nav>

<header className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-20 pb-12 px-6">
<div className="max-w-6xl w-full text-center space-y-8">
<div className="reveal delay-100 flex justify-center active">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-blue-400 tracking-wide uppercase">Available for new projects</span>
</div>
<h1 className="reveal delay-200 text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 active">
                Transformando Visões<br/>em <span className="italic font-light text-white/90">Interfaces</span> Digitais.
            </h1>
<p className="reveal delay-300 max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 font-light leading-relaxed active">
                Agência de design focada em alta performance, criando experiências web imersivas que convertem visitantes em embaixadores da marca.
            </p>
<div className="reveal delay-500 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="magnetic-btn relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-medium transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center gap-3 group">
<span className="relative z-10">Ver Showreel</span>
<i className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" data-lucide="play-circle"></i>
</button>
<button className="magnetic-btn px-8 py-4 bg-transparent border border-white/20 text-white rounded-full text-lg font-medium hover:bg-white/5 transition-all">
                    Explorar Serviços
                </button>
</div>
</div>

<div className="absolute bottom-10 left-0 w-full overflow-hidden h-32 opacity-30 pointer-events-none parallax" data-speed="0.2">
<div className="flex gap-4 justify-center items-end h-full">
<div className="w-px h-full bg-gradient-to-t from-blue-500/50 to-transparent"></div>
<div className="w-px h-3/4 bg-gradient-to-t from-blue-500/50 to-transparent"></div>
<div className="w-px h-1/2 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
</div>
</div>
</header>

<section className="relative z-10 py-32 px-6 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div>
<span className="block text-blue-400 text-sm mb-2">● Our Expertise</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight">Design &amp; Estratégia <br/>sob medida.</h2>
</div>
<p className="text-neutral-400 text-lg max-w-md mt-6 md:mt-0 font-light">
                    Combinamos estética neo-brutalista com usabilidade refinada para criar produtos que dominam mercados.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="tilt-card group relative p-8 rounded-3xl bg-[#111] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-colors duration-500 md:col-span-2">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-8 right-8 p-3 rounded-full bg-white/5 text-white/80 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
<i className="w-6 h-6" data-lucide="layout"></i>
</div>
<div className="h-full flex flex-col justify-end relative z-10">
<h3 className="text-3xl font-medium mb-3">UI/UX Design</h3>
<p className="text-neutral-400 text-lg font-light leading-relaxed max-w-lg">
                            Interfaces que contam histórias. Design Systems escaláveis, prototipagem avançada e micro-interações que encantam.
                        </p>
<div className="mt-8 flex gap-2 flex-wrap">
<span className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-300 border border-white/5">Figma</span>
<span className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-300 border border-white/5">Prototyping</span>
<span className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-300 border border-white/5">User Research</span>
</div>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors duration-500"></div>
</div>

<div className="tilt-card group relative p-8 rounded-3xl bg-[#111] border border-white/10 overflow-hidden hover:border-purple-500/50 transition-colors duration-500">
<div className="absolute top-8 right-8 p-3 rounded-full bg-white/5 text-white/80 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
<i className="w-6 h-6" data-lucide="code-2"></i>
</div>
<div className="h-full flex flex-col justify-end relative z-10">
<h3 className="text-3xl font-medium mb-3">Web Dev</h3>
<p className="text-neutral-400 text-lg font-light">
                            React, Next.js e WebGL. Código limpo otimizado para SEO e velocidade extrema.
                        </p>
</div>
</div>

<div className="tilt-card group relative p-8 rounded-3xl bg-[#111] border border-white/10 overflow-hidden hover:border-green-500/50 transition-colors duration-500">
<div className="absolute top-8 right-8 p-3 rounded-full bg-white/5 text-white/80 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<div className="h-full flex flex-col justify-end relative z-10">
<h3 className="text-3xl font-medium mb-3">Growth</h3>
<p className="text-neutral-400 text-lg font-light">
                            Gestão de Tráfego e SEO técnico para colocar sua marca no topo.
                        </p>
</div>
</div>

<div className="tilt-card group relative p-8 rounded-3xl bg-[#111] border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-500 md:col-span-2">
<div className="absolute inset-0 opacity-20 group-hover:opacity-10 mix-blend-overlay">
<img alt="Tech Texture" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-full flex flex-col justify-center items-center relative z-10 text-center">
<h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Pronto para escalar?</h3>
<button className="mt-4 px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform">
                            Agendar Consultoria
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="mb-24 text-center reveal">
<span className="text-blue-400 text-sm mb-2 block">● Selected Works</span>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight">Excelência Digital</h2>
</div>
<div className="space-y-32">

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center reveal">
<div className="md:col-span-7 relative">
<div className="parallax overflow-hidden rounded-2xl border border-white/10 aspect-[4/3] group-hover:border-white/20 transition-colors" data-speed="0.05">
<img alt="Architecture Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="md:col-span-5 md:-ml-12 relative z-10">
<div className="bg-[#0a0a0a]/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 parallax" data-speed="-0.05">
<span className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2 block">Real Estate</span>
<h3 className="text-3xl md:text-4xl font-medium mb-4">Unerio Residential</h3>
<p className="text-neutral-400 text-lg font-light mb-8">
                                Uma landing page imersiva para um complexo residencial de luxo, aumentando a captura de leads qualificados em 45%.
                            </p>
<div className="flex gap-4">
<span className="text-xs border border-white/10 px-3 py-1 rounded-full text-neutral-300">UX/UI</span>
<span className="text-xs border border-white/10 px-3 py-1 rounded-full text-neutral-300">Frontend</span>
</div>
<a className="inline-flex items-center gap-2 text-white mt-8 hover:text-blue-400 transition-colors" href="#">
                                Ver Case Study <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center reveal">
<div className="md:col-span-5 md:col-start-1 md:mr-[-3rem] relative z-10 order-2 md:order-1">
<div className="bg-[#0a0a0a]/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 parallax" data-speed="-0.05">
<span className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-2 block">Fintech</span>
<h3 className="text-3xl md:text-4xl font-medium mb-4">Nova Finance App</h3>
<p className="text-neutral-400 text-lg font-light mb-8">
                                Redesign completo do dashboard financeiro com foco em clareza de dados e acessibilidade para investidores institucionais.
                            </p>
<div className="flex gap-4">
<span className="text-xs border border-white/10 px-3 py-1 rounded-full text-neutral-300">Product Design</span>
<span className="text-xs border border-white/10 px-3 py-1 rounded-full text-neutral-300">Mobile</span>
</div>
<a className="inline-flex items-center gap-2 text-white mt-8 hover:text-purple-400 transition-colors" href="#">
                                Ver Case Study <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="md:col-span-7 md:col-start-6 relative order-1 md:order-2">
<div className="parallax overflow-hidden rounded-2xl border border-white/10 aspect-[4/3] group-hover:border-white/20 transition-colors" data-speed="0.05">
<img alt="Fintech Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-center text-2xl font-light text-neutral-400 mb-12">Confiança de líderes da indústria</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-16 flex items-center justify-center border border-white/5 rounded-lg text-xl font-bold tracking-tighter">VERCEL</div>
<div className="h-16 flex items-center justify-center border border-white/5 rounded-lg text-xl font-bold tracking-tighter">LINEAR</div>
<div className="h-16 flex items-center justify-center border border-white/5 rounded-lg text-xl font-bold tracking-tighter">STRIPE</div>
<div className="h-16 flex items-center justify-center border border-white/5 rounded-lg text-xl font-bold tracking-tighter">RAYCAST</div>
</div>
<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/5 reveal">
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-neutral-300 font-light italic">"A Hubfolio elevou nossa percepção de marca a um nível que não achávamos possível. O design não é apenas bonito, ele converte."</p>
<div className="mt-6 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800"></div>
<div>
<p className="text-sm font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-neutral-500">CMO, TechFlow</p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/5 reveal delay-100">
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-neutral-300 font-light italic">"Performance impecável e atenção aos detalhes obsessiva. O site carrega instantaneamente e a animação é suave como manteiga."</p>
<div className="mt-6 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800"></div>
<div>
<p className="text-sm font-medium text-white">David Ross</p>
<p className="text-xs text-neutral-500">Founder, Archin</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative pt-32 pb-12 px-6 bg-[#050505] overflow-hidden" id="contact">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start mb-24">
<div className="max-w-2xl">
<h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">Let's build the<br/>future.</h2>
<a className="inline-flex items-center gap-3 text-2xl md:text-3xl text-neutral-400 hover:text-white transition-colors border-b border-neutral-800 pb-2 hover:border-white" href="mailto:hello@hubfolio.agency">
                        hello@hubfolio.agency <i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="mt-12 md:mt-0 flex gap-12">
<div>
<h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Social</h4>
<ul className="space-y-3">
<li><a className="text-neutral-300 hover:text-blue-400 text-sm transition-colors" href="#">Instagram</a></li>
<li><a className="text-neutral-300 hover:text-blue-400 text-sm transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-neutral-300 hover:text-blue-400 text-sm transition-colors" href="#">Twitter X</a></li>
<li><a className="text-neutral-300 hover:text-blue-400 text-sm transition-colors" href="#">Dribbble</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Sitemap</h4>
<ul className="space-y-3">
<li><a className="text-neutral-300 hover:text-white text-sm transition-colors" href="#services">Services</a></li>
<li><a className="text-neutral-300 hover:text-white text-sm transition-colors" href="#portfolio">Work</a></li>
<li><a className="text-neutral-300 hover:text-white text-sm transition-colors" href="#">About</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600">
<p>© 2024 Hubfolio Agency. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
