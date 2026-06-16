import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Counters Animation
        const observerOptions = { threshold: 0.2 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    
                    // Trigger counters if inside the stats container
                    if(entry.target.id === 'statsContainer') {
                        const counters = entry.target.querySelectorAll('.counter');
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const suffix = counter.getAttribute('data-suffix');
                            const duration = 2000; 
                            const increment = target / (duration / 16);
                            
                            let current = 0;
                            const timer = setInterval(() => {
                                current += increment;
                                if (current >= target) {
                                    counter.innerText = target + suffix;
                                    clearInterval(timer);
                                } else {
                                    counter.innerText = Math.ceil(current) + suffix;
                                }
                            }, 16);
                        });
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
        const stats = document.getElementById('statsContainer');
        if(stats) observer.observe(stats);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
<div className="absolute -top-32 -left-32 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] blur-[100px] opacity-40"></div>
<div className="absolute top-1/2 -right-64 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] blur-[120px]"></div>
<div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(138,112,24,0.05),transparent_70%)] blur-[100px]"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 animate-fade-in delay-0 backdrop-blur-md bg-black/60 border-b border-white/5 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex flex-col items-start group" href="#">
<span className="font-serif font-bold text-xl tracking-widest text-white leading-none group-hover:text-[#D4AF37] transition-colors duration-500">ATELIER</span>
<span className="text-[9px] tracking-[0.4em] text-white/40 uppercase mt-0.5 font-sans group-hover:text-white/60 transition-colors">Oral Design</span>
</a>

<nav className="hidden md:flex items-center gap-10 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60">
<a className="hover:text-[#D4AF37] transition-colors duration-300" href="#atelier">O Atelier</a>
<a className="hover:text-[#D4AF37] transition-colors duration-300" href="#acervo">Acervo</a>
<a className="hover:text-[#D4AF37] transition-colors duration-300" href="#experience">Experiência</a>
</nav>

<div className="flex items-center gap-6">
<button className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] hover:text-white transition-colors">
<i className="w-3 h-3" data-lucide="lock"></i>
<span>Login</span>
</button>
<button className="group relative inline-flex h-9 items-center justify-center border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] transition-all duration-500 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)]">
<span className="relative z-10">Private Access</span>
</button>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 min-h-screen flex flex-col justify-center border-b border-white/5 overflow-hidden">
<div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="relative z-10 lg:col-span-7 flex flex-col justify-center">

<div className="animate-slide-up delay-200 mb-8 inline-flex items-center gap-3 border-l border-[#D4AF37]/50 pl-4 bg-gradient-to-r from-white/5 to-transparent py-2 pr-6 backdrop-blur-md w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
</span>
<span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-white/80">Waitlist Open • 2025</span>
</div>

<h1 className="animate-slide-up delay-300 font-serif text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.9] tracking-wide mb-8">
                        A Elite <br/>
<span className="text-gradient-gold italic pr-2">do Sorriso.</span>
</h1>
<p className="animate-slide-up delay-500 text-lg sm:text-xl text-gray-400 font-extralight leading-relaxed max-w-lg mb-10">
                        Lentes de Contato e Reabilitação Oral para quem exige o extraordinário. Onde a ciência encontra a arte em sua forma mais pura.
                    </p>
<div className="animate-slide-up delay-700 flex flex-col sm:flex-row items-start sm:items-center gap-6">
<button className="group relative inline-flex items-center gap-4 bg-white px-8 py-4 text-black transition-all duration-300 hover:bg-[#D4AF37]">
<span className="text-[10px] font-bold uppercase tracking-[0.25em]">Solicitar Concierge</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
<button className="group flex items-center gap-3 px-6 py-4 text-white/70 hover:text-white transition-colors">
<div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:border-[#D4AF37] transition-colors">
<i className="w-3 h-3 fill-current" data-lucide="play"></i>
</div>
<span className="text-[10px] font-bold uppercase tracking-[0.2em]">Ver Manifesto</span>
</button>
</div>

<div className="animate-slide-up delay-700 grid grid-cols-3 gap-8 mt-16 border-t border-white/10 pt-8 max-w-md" id="statsContainer">
<div>
<div className="text-2xl font-serif text-white"><span className="counter" data-suffix="+" data-target="1500">0</span></div>
<div className="text-[9px] uppercase tracking-widest text-white/40 mt-1">Protocolos</div>
</div>
<div>
<div className="text-2xl font-serif text-white"><span className="counter" data-suffix="/1" data-target="1">0</span></div>
<div className="text-[9px] uppercase tracking-widest text-white/40 mt-1">Exclusividade</div>
</div>
<div>
<div className="text-2xl font-serif text-white">24h</div>
<div className="text-[9px] uppercase tracking-widest text-white/40 mt-1">Concierge</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-[600px] w-full animate-blur-in delay-500">

<div className="relative h-full w-full overflow-hidden border border-white/10 shadow-2xl shadow-[#D4AF37]/5">
<div className="absolute inset-0 bg-black/20 z-10"></div>
<img alt="Luxury Dental Art" className="h-full w-full object-cover opacity-80 scale-105 hover:scale-100 transition-transform duration-[2s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute top-1/4 -right-20 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-overlay blur-[80px] opacity-40 animate-pulse"></div>
</div>

<div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 w-80 z-20 animate-slide-up delay-700">
<div className="bg-black/40 backdrop-blur-xl border border-white/10 p-5 shadow-2xl">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
<i className="w-3 h-3" data-lucide="sparkles"></i>
</div>
<span className="font-serif text-sm text-white">Live Concierge</span>
</div>
<div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
</div>
<div className="space-y-3">

<div className="flex items-start gap-3 p-3 bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-colors cursor-default">
<i className="w-3 h-3 mt-1 text-[#D4AF37]" data-lucide="user-check"></i>
<div>
<p className="text-[10px] font-bold uppercase tracking-wider text-white">Dr. Alencar</p>
<p className="text-[9px] text-white/50">Suite 01 • Em atendimento</p>
</div>
</div>

<div className="flex items-start gap-3 p-3 bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-colors cursor-default">
<i className="w-3 h-3 mt-1 text-white/40" data-lucide="clock"></i>
<div>
<p className="text-[10px] font-bold uppercase tracking-wider text-white/80">Próxima Vaga</p>
<p className="text-[9px] text-white/50">Waitlist: 3 dias estimados</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#020202] border-b border-white/5 scroll-animate">
<div className="max-w-4xl mx-auto text-center">
<span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.4em] mb-6 block font-bold">Nossa Filosofia</span>
<h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-8">
                    "A perfeição não é um acidente.<br/> É o resultado de <span className="text-[#D4AF37] italic">intenção suprema</span>."
                </h2>
<div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"></div>
</div>
</section>

<section className="py-32 px-6 scroll-animate" id="acervo">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="font-serif text-4xl text-white mb-2">O Acervo</h2>
<p className="text-white/40 text-sm font-light">Intervenções de alta precisão.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] hover:text-white transition-colors pb-2" href="#">
                        Ver todos os protocolos <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">

<div className="group relative bg-[#050505] p-12 hover:bg-[#080808] transition-all duration-500">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-[#D4AF37] stroke-1" data-lucide="gem"></i>
</div>
<h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[#D4AF37] transition-colors">Lentes de Contato</h3>
<p className="text-sm text-white/50 font-light leading-relaxed mb-8">
                            Lâminas cerâmicas de espessura mínima. Translucidez e textura natural desenhadas digitalmente.
                        </p>
<span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white group-hover:text-[#D4AF37] transition-colors">
                            Explorar <i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</div>

<div className="group relative bg-[#050505] p-12 hover:bg-[#080808] transition-all duration-500">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-[#D4AF37] stroke-1" data-lucide="layers"></i>
</div>
<h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[#D4AF37] transition-colors">Reabilitação Oral</h3>
<p className="text-sm text-white/50 font-light leading-relaxed mb-8">
                            Reconstrução funcional e estética completa. Tecnologia 3D para previsibilidade absoluta.
                        </p>
<span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white group-hover:text-[#D4AF37] transition-colors">
                            Explorar <i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</div>

<div className="group relative bg-[#050505] p-12 hover:bg-[#080808] transition-all duration-500">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-[#D4AF37] stroke-1" data-lucide="scan-face"></i>
</div>
<h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[#D4AF37] transition-colors">Harmonização</h3>
<p className="text-sm text-white/50 font-light leading-relaxed mb-8">
                            Full Face Concept. Equilíbrio das proporções faciais integradas ao design do sorriso.
                        </p>
<span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white group-hover:text-[#D4AF37] transition-colors">
                            Explorar <i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-[#020202] to-[#0a0a0a] scroll-animate">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">

<div className="relative group overflow-hidden border border-white/5 h-full">
<img alt="Detail" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 p-6 bg-black/60 backdrop-blur-md border border-white/10 max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-[#D4AF37] text-[9px] uppercase tracking-widest block mb-2">Processo</span>
<p className="text-white font-serif text-lg">Análise Microscópica</p>
</div>
</div>
<div className="grid grid-rows-2 gap-4 h-full">

<div className="relative group overflow-hidden border border-white/5">
<img alt="Interior" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-white font-serif">A Suite Principal</p>
</div>
</div>

<div className="relative group overflow-hidden border border-white/5">
<img alt="Texture" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="h-12 w-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#D4AF37] hover:text-black">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-white/5 scroll-animate" id="experience">
<div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5">
<span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.4em] mb-4 block font-bold">Privilégios</span>
<h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">Midnight VIP<br/>Membership.</h2>
<p className="text-white/50 font-light leading-relaxed mb-10">
                        O acesso ao Atelier Oral é restrito para garantir a máxima dedicação a cada caso. Escolha a sua modalidade de ingresso.
                    </p>
<a className="text-white border-b border-white/30 pb-1 text-[10px] uppercase tracking-[0.2em] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors" href="#">
                        Falar com a Diretoria
                    </a>
</div>
<div className="lg:col-span-7 grid md:grid-cols-2 gap-8">

<div className="p-8 border border-white/10 hover:border-white/20 transition-colors bg-[#050505]">
<h3 className="font-serif text-2xl text-white mb-2">Private</h3>
<p className="text-[10px] uppercase tracking-wider text-white/40 mb-8">Atendimento com Hora Marcada</p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<i className="w-4 h-4 text-white/30 mt-0.5" data-lucide="check"></i> Protocolo Digital Completo
                            </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<i className="w-4 h-4 text-white/30 mt-0.5" data-lucide="check"></i> Suíte Privativa
                            </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<i className="w-4 h-4 text-white/30 mt-0.5" data-lucide="check"></i> Sedação Consciente
                            </li>
</ul>
<button className="w-full py-4 border border-white/20 text-[10px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all">
                            Selecionar
                        </button>
</div>

<div className="relative p-8 border border-[#D4AF37]/30 bg-[#080808] gold-glow">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] px-3 py-1 text-[8px] font-bold uppercase tracking-widest text-black">
                            Recomendado
                        </div>
<h3 className="font-serif text-2xl text-[#D4AF37] mb-2">Midnight</h3>
<p className="text-[10px] uppercase tracking-wider text-white/40 mb-8">Full Experience &amp; Concierge</p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3 text-sm text-white/90 font-light">
<i className="w-4 h-4 text-[#D4AF37] mt-0.5" data-lucide="check"></i> Tudo do Private
                            </li>
<li className="flex items-start gap-3 text-sm text-white/90 font-light">
<i className="w-4 h-4 text-[#D4AF37] mt-0.5" data-lucide="check"></i> Motorista Executivo
                            </li>
<li className="flex items-start gap-3 text-sm text-white/90 font-light">
<i className="w-4 h-4 text-[#D4AF37] mt-0.5" data-lucide="check"></i> Atendimento Fora de Hora
                            </li>
<li className="flex items-start gap-3 text-sm text-white/90 font-light">
<i className="w-4 h-4 text-[#D4AF37] mt-0.5" data-lucide="check"></i> Chef Privado no Pós
                            </li>
</ul>
<button className="w-full py-4 bg-[#D4AF37] text-[10px] uppercase tracking-[0.2em] text-black font-bold hover:bg-white transition-all shadow-[0_0_15px_-5px_rgba(212,175,55,0.5)]">
                            Applying for Midnight
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black pt-24 pb-12 border-t border-white/10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<span className="font-serif font-bold text-2xl text-white block mb-2">ATELIER</span>
<span className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] block mb-8">Oral Design</span>
<p className="text-xs text-white/40 leading-loose font-light">
                        Av. Europa, 888<br/>
                        Jardins, São Paulo<br/>
                        Brasil
                    </p>
</div>
<div>
<h4 className="text-white font-serif mb-6">Menu</h4>
<ul className="space-y-3 text-[10px] uppercase tracking-widest text-white/50">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">O Atelier</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Acervo</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Corpo Clínico</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Imprensa</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-serif mb-6">Legal</h4>
<ul className="space-y-3 text-[10px] uppercase tracking-widest text-white/50">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Privacidade</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Termos</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Compliance</a></li>
</ul>
</div>
<div className="text-right">
<button className="inline-flex items-center justify-center w-10 h-10 border border-white/10 text-white/50 hover:bg-white hover:text-black transition-colors rounded-sm">
<i className="w-4 h-4" data-lucide="instagram"></i>
</button>
<button className="inline-flex items-center justify-center w-10 h-10 border border-white/10 text-white/50 hover:bg-white hover:text-black transition-colors rounded-sm ml-2">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</button>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-widest text-white/30">
<p>© 2025 Atelier Oral. All rights reserved.</p>
<p>Designed for the Elite.</p>
</div>
</div>
</footer>


    </>
  );
}
