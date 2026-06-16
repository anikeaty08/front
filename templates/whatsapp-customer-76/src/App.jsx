import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('border-[#F0EEE9]');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('border-[#F0EEE9]');
                navbar.classList.add('border-transparent');
            }
        });

        // Flashlight effect for pricing cards
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--mouse-x', `-500px`);
                card.style.setProperty('--mouse-y', `-500px`);
            });
        });

        // Number Counter Animation
        const targets = document.querySelectorAll('[data-target]');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const targetVal = parseInt(el.getAttribute('data-target'));
                    const duration = 1500; // 1.5s
                    const frameRate = 16; // approx 60fps
                    const totalFrames = Math.round(duration / frameRate);
                    const increment = targetVal / totalFrames;
                    
                    let currentVal = 0;
                    
                    const updateCounter = () => {
                        currentVal += increment;
                        if (currentVal < targetVal) {
                            el.textContent = Math.ceil(currentVal);
                            requestAnimationFrame(updateCounter);
                        } else {
                            el.textContent = targetVal;
                        }
                    };
                    
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(el); // Animate only once
                }
            });
        }, observerOptions);

        targets.forEach(target => {
            observer.observe(target);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-transparent py-4" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">

<a className="font-manrope font-semibold text-lg tracking-tight" href="#">
<span className="text-[#0F172A]">Pros</span><span className="text-[#FF6B00]">IA</span>
</a>

<div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
<a className="font-light text-sm text-[#9CA3AF] hover:text-[#0F172A] transition-colors" href="#">Produto</a>
<a className="font-light text-sm text-[#9CA3AF] hover:text-[#0F172A] transition-colors" href="#precos">Preços</a>
<a className="font-light text-sm text-[#9CA3AF] hover:text-[#0F172A] transition-colors" href="#depoimentos">Depoimentos</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden sm:block font-normal text-sm text-[#6B7280] hover:text-[#0F172A] transition-colors" href="#">
                    Entrar
                </a>
<a className="inline-flex items-center justify-center font-medium text-sm text-white bg-[#0F172A] hover:bg-[#1E293B] px-5 py-2.5 rounded-full transition-colors" href="#">
                    Agendar Demo →
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-28 pb-0 md:pb-0 bg-white overflow-hidden">

<div className="absolute inset-0 w-full h-full bg-dot-grid opacity-4 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 md:px-10 h-full">
<div className="flex flex-col lg:flex-row h-full min-h-[calc(100vh-112px)]">

<div className="w-full lg:w-[55%] flex flex-col justify-center pt-10 pb-20 lg:py-20 pr-0 lg:pr-16 relative z-10">
<div className="inline-flex items-center w-fit border border-[#E5E3DC] bg-transparent rounded-full px-4 py-1.5 mb-8">
<span className="font-normal text-xs text-[#9CA3AF]">Para equipes de atendimento</span>
</div>
<h1 className="font-manrope font-bold text-5xl sm:text-6xl lg:text-7xl text-[#0F172A] tracking-tight leading-[1.05] mb-2">
                        Atendimento<br/>que escala.
                    </h1>
<h1 className="font-manrope font-bold text-5xl sm:text-6xl lg:text-7xl text-[#0F172A] tracking-tight leading-[1.05] mb-6">
                        Com <span className="text-[#FF6B00]">WhatsApp.</span>
</h1>
<p className="font-light text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-[420px] mb-10">
                        Distribua conversas automaticamente, automatize respostas e atenda mais clientes sem contratar mais pessoas.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10">
<a className="w-full sm:w-auto inline-flex items-center justify-center font-medium text-base text-white bg-[#FF6B00] hover:bg-[#E55100] px-7 py-3.5 rounded-xl shadow-[0_8px_24px_rgba(255,107,0,0.25)] transition-all" href="#">
                            Começar grátis →
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center font-normal text-sm sm:text-base text-[#0F172A] bg-transparent hover:underline py-3.5 transition-all" href="#">
                            Ver demonstração ↗
                        </a>
</div>

<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-normal text-slate-600">AS</div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px] font-normal text-slate-600">MR</div>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-normal text-slate-600">FJ</div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px] font-normal text-slate-600">LB</div>
</div>
<span className="font-light text-xs sm:text-sm text-[#9CA3AF]">Mais de 200 empresas brasileiras</span>
</div>
</div>

<div className="hidden lg:block w-[45%] relative mt-10 lg:mt-0">
<div className="absolute inset-y-0 right-0 w-[50vw] bg-cover bg-center rounded-l-[24px]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp'}}></div>

<div className="absolute bottom-16 -left-8 bg-white border border-[#F0EEE9] rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
<div className="flex items-center gap-2 mb-3">
<div className="relative flex items-center justify-center w-2 h-2">
<span className="absolute inline-flex w-full h-full rounded-full bg-[#10B981] opacity-75 animate-sonar"></span>
<span className="relative inline-flex rounded-full w-2 h-2 bg-[#10B981]"></span>
</div>
<span className="font-medium text-xs sm:text-sm text-[#0F172A]">3 atendentes online agora</span>
</div>
<div className="flex gap-1.5">
<div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-normal text-slate-600">AL</div>
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[8px] font-normal text-white">CM</div>
<div className="w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-[8px] font-normal text-slate-700">FR</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F4F0] w-full py-32 md:py-40 px-6">
<div className="max-w-[800px] mx-auto text-center">
<h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-[#0F172A] leading-[1.2] tracking-tight mb-6">
                "Seus clientes não esperam.<br/>
                Sua equipe não deveria perder tempo<br/>
                com o que pode ser automático."
            </h2>
<p className="font-light text-base md:text-lg text-[#9CA3AF]">
                O ProsIA cuida do roteamento, do bot e do histórico. Sua equipe cuida das pessoas.
            </p>
</div>
</section>

<section className="bg-white py-24 md:py-32 overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col gap-32 md:gap-48">

<div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
<div className="w-full md:w-1/2">
<span className="block font-light text-xs text-[#D1D5DB] tracking-[0.1em] uppercase mb-4">01</span>
<h3 className="font-semibold text-3xl md:text-4xl text-[#0F172A] leading-[1.1] tracking-tight mb-6">
                        Fila inteligente. Zero caos.
                    </h3>
<p className="font-light text-base md:text-lg text-[#6B7280] leading-[1.7] max-w-[400px] mb-6">
                        Cada mensagem nova entra na fila e vai direto para o atendente disponível. Sem conflito, sem mensagem perdida, sem cliente ignorado.
                    </p>
<a className="font-normal text-sm text-[#FF6B00] hover:underline" href="#">
                        Saiba como funciona →
                    </a>
</div>
<div className="w-full md:w-1/2">
<div className="bg-[#F5F4F0] rounded-[16px] border border-[#E5E3DC] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">

<div className="h-10 border-b border-[#E5E3DC] flex items-center px-4 gap-2 bg-white/50">
<div className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB]"></div>
</div>

<div className="p-4 flex flex-col gap-2">
<div className="bg-white border-l-2 border-[#FF6B00] rounded-r border-y border-r border-[#E5E3DC] p-3 shadow-sm flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-500">LC</div>
<div className="flex-1">
<div className="flex justify-between items-center"><span className="font-medium text-xs text-[#0F172A]">Lucas Costa</span><span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span></div>
<div className="font-light text-[10px] text-[#9CA3AF]">Pode me ajudar com o...</div>
</div>
</div>
<div className="bg-white/60 border border-transparent rounded p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-500">MR</div>
<div className="flex-1">
<div className="flex justify-between items-center"><span className="font-medium text-xs text-[#6B7280]">Mariana Rios</span><span className="w-1.5 h-1.5 rounded-full bg-[#D1D5DB]"></span></div>
<div className="font-light text-[10px] text-[#9CA3AF]">Obrigado!</div>
</div>
</div>
<div className="bg-white/60 border border-transparent rounded p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-500">JP</div>
<div className="flex-1">
<div className="flex justify-between items-center"><span className="font-medium text-xs text-[#6B7280]">João Pedro</span><span className="w-1.5 h-1.5 rounded-full bg-[#D1D5DB]"></span></div>
<div className="font-light text-[10px] text-[#9CA3AF]">Qual o valor?</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
<div className="w-full md:w-1/2">
<span className="block font-light text-xs text-[#D1D5DB] tracking-[0.1em] uppercase mb-4">02</span>
<h3 className="font-semibold text-3xl md:text-4xl text-[#0F172A] leading-[1.1] tracking-tight mb-6">
                        Bot que responde. Equipe que resolve.
                    </h3>
<p className="font-light text-base md:text-lg text-[#6B7280] leading-[1.7] max-w-[400px]">
                        Configure respostas automáticas por palavra-chave, horário ou menu de opções. Fora do horário, o bot assume. No horário, o humano entra quando importa.
                    </p>
</div>
<div className="w-full md:w-1/2 flex justify-center md:justify-start">

<svg fill="none" height="200" viewbox="0 0 300 200" width="300" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="100" fill="#FF6B00" r="12"></circle>
<path d="M 52 100 H 100" stroke="#E5E3DC" strokeWidth="2"></path>
<rect fill="#F5F4F0" height="40" rx="8" stroke="#E5E3DC" strokeWidth="2" width="60" x="100" y="80"></rect>
<path d="M 160 100 C 190 100, 190 40, 220 40" stroke="#E5E3DC" strokeWidth="2"></path>
<path d="M 160 100 H 220" stroke="#E5E3DC" strokeWidth="2"></path>
<path d="M 160 100 C 190 100, 190 160, 220 160" stroke="#E5E3DC" strokeWidth="2"></path>
<rect fill="white" height="40" rx="8" stroke="#E5E3DC" strokeWidth="2" width="80" x="220" y="20"></rect>
<rect fill="white" height="40" rx="8" stroke="#E5E3DC" strokeWidth="2" width="80" x="220" y="80"></rect>
<rect fill="white" height="40" rx="8" stroke="#E5E3DC" strokeWidth="2" width="80" x="220" y="140"></rect>
</svg>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
<div className="w-full md:w-1/2">
<span className="block font-light text-xs text-[#D1D5DB] tracking-[0.1em] uppercase mb-4">03</span>
<h3 className="font-semibold text-3xl md:text-4xl text-[#0F172A] leading-[1.1] tracking-tight mb-6">
                        Histórico completo. Contexto sempre.
                    </h3>
<p className="font-light text-base md:text-lg text-[#6B7280] leading-[1.7] max-w-[400px]">
                        Qualquer atendente que abrir a conversa vê tudo que já foi dito. Nenhum cliente precisa repetir a história. Nunca.
                    </p>
</div>
<div className="w-full md:w-1/2 relative h-[300px] flex items-center justify-center md:justify-end pr-0 md:pr-10">

<div className="relative w-64 h-40">
<div className="absolute inset-0 bg-white border border-[#E5E3DC] rounded-xl shadow-sm transform translate-x-8 translate-y-8 scale-[0.85] opacity-30 flex flex-col p-4 justify-between">
<div className="w-1/2 h-2 bg-[#E5E3DC] rounded"></div><div className="w-3/4 h-2 bg-[#E5E3DC] rounded"></div>
</div>
<div className="absolute inset-0 bg-white border border-[#E5E3DC] rounded-xl shadow-md transform translate-x-4 translate-y-4 scale-[0.92] opacity-60 flex flex-col p-4 justify-between">
<div className="w-2/3 h-2 bg-[#D1D5DB] rounded"></div><div className="w-1/2 h-2 bg-[#D1D5DB] rounded"></div>
</div>
<div className="absolute inset-0 bg-white border border-[#E5E3DC] rounded-xl shadow-lg flex flex-col p-5 gap-3 z-10">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-slate-100"></div>
<div className="w-24 h-2 bg-[#0F172A]/10 rounded"></div>
</div>
<div className="w-full h-2 bg-[#F5F4F0] rounded"></div>
<div className="w-full h-2 bg-[#F5F4F0] rounded"></div>
<div className="w-2/3 h-2 bg-[#F5F4F0] rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32">
<div className="max-w-[1000px] mx-auto px-6">

<div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 text-center md:text-left mb-32">
<div className="flex-1 flex flex-col items-center">
<span className="font-manrope font-bold text-6xl md:text-7xl text-[#0F172A] tracking-tight" data-target="200">0</span><span className="font-manrope font-bold text-6xl md:text-7xl text-[#0F172A] tracking-tight -ml-1">+</span>
<span className="font-light text-base text-[#9CA3AF] mt-2">empresas ativas</span>
</div>
<div className="hidden md:block w-px h-24 bg-[#E5E3DC]"></div>
<div className="flex-1 flex flex-col items-center">
<span className="font-manrope font-bold text-6xl md:text-7xl text-[#0F172A] tracking-tight" data-target="98">0</span><span className="font-manrope font-bold text-6xl md:text-7xl text-[#0F172A] tracking-tight -ml-1">%</span>
<span className="font-light text-base text-[#9CA3AF] mt-2">satisfação dos clientes</span>
</div>
<div className="hidden md:block w-px h-24 bg-[#E5E3DC]"></div>
<div className="flex-1 flex flex-col items-center">
<span className="font-manrope font-bold text-6xl md:text-7xl text-[#0F172A] tracking-tight" data-target="5">0</span><span className="font-manrope font-bold text-5xl md:text-6xl text-[#0F172A] tracking-tight ml-2">min</span>
<span className="font-light text-base text-[#9CA3AF] mt-2">para conectar o WhatsApp</span>
</div>
</div>

<div className="relative max-w-[700px] mx-auto text-center pt-10">
<div className="absolute -top-16 left-1/2 -translate-x-1/2 font-manrope font-bold text-[120px] text-[#F0EEE9] leading-none select-none z-0">"</div>
<p className="relative font-manrope font-medium italic text-xl md:text-2xl text-[#0F172A] leading-[1.5] mb-6 z-10">
                    Antes a gente perdia cliente por falta de resposta. Com o ProsIA, minha equipe deu conta de 3x mais conversas no mesmo dia.
                </p>
<p className="font-light text-sm text-[#9CA3AF]">
                    — Ana Lima, Gestora de Atendimento · Clínica Boa Vida
                </p>
</div>
</div>
</section>

<section className="bg-[#F5F4F0] w-full border-y border-[#E5E3DC]" id="depoimentos">
<div className="flex flex-col md:flex-row min-h-[600px]">

<div className="w-full md:w-[40%] h-[400px] md:h-auto bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp'}}>
</div>

<div className="w-full md:w-[60%] flex flex-col justify-center px-8 py-16 md:px-20 md:py-24">
<div className="flex flex-col border-b border-[#E5E3DC] pb-8 mb-8">
<p className="font-light text-base text-[#6B7280] leading-[1.6] mb-4">
                        "A distribuição automática salvou nossa Black Friday. 500 atendimentos, zero bagunça." <span className="text-[#FF6B00] font-bold text-sm leading-none ml-1 tracking-tighter">✓✓</span>
</p>
<div>
<span className="block font-medium text-sm text-[#0F172A]">Carlos Mendes</span>
<span className="block font-light text-xs text-[#9CA3AF] mt-0.5">Dono, E-commerce Moda MG</span>
</div>
</div>
<div className="flex flex-col border-b border-[#E5E3DC] pb-8 mb-8">
<p className="font-light text-base text-[#6B7280] leading-[1.6] mb-4">
                        "O bot respondeu 60% das dúvidas sozinho. A equipe foca no que realmente importa." <span className="text-[#FF6B00] font-bold text-sm leading-none ml-1 tracking-tighter">✓✓</span>
</p>
<div>
<span className="block font-medium text-sm text-[#0F172A]">Fernanda Rocha</span>
<span className="block font-light text-xs text-[#9CA3AF] mt-0.5">Coordenadora, Suporte Tech BR</span>
</div>
</div>
<div className="flex flex-col">
<p className="font-light text-base text-[#6B7280] leading-[1.6] mb-4">
                        "Implementamos em um dia. No segundo dia já estávamos atendendo 3x mais rápido." <span className="text-[#FF6B00] font-bold text-sm leading-none ml-1 tracking-tighter">✓✓</span>
</p>
<div>
<span className="block font-medium text-sm text-[#0F172A]">Rafael Souza</span>
<span className="block font-light text-xs text-[#9CA3AF] mt-0.5">Gerente, Construtora Alfa</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32" id="precos">
<div className="max-w-[1000px] mx-auto px-6">
<div className="text-center mb-16">
<span className="block font-light text-xs text-[#9CA3AF] tracking-[0.15em] uppercase mb-4">Preços</span>
<h2 className="font-manrope font-semibold text-4xl md:text-5xl text-[#0F172A] leading-[1.1] tracking-tight">
                    Simples. Sem surpresas.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">

<div className="feature-card feature-card-light bg-white border border-[#E5E3DC] rounded-[20px] p-10 flex flex-col">
<span className="font-medium text-xs text-[#9CA3AF] uppercase mb-2">Starter</span>
<div className="mb-8">
<span className="font-manrope font-bold text-4xl md:text-5xl text-[#0F172A] tracking-tight">R$ 0</span>
<span className="font-light text-lg text-[#9CA3AF]">/mês</span>
</div>
<ul className="flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-center gap-3 font-light text-sm md:text-base text-[#6B7280]">
<iconify-icon className="text-[#10B981] text-lg" icon="solar:check-circle-linear"></iconify-icon> 1 número WhatsApp
                        </li>
<li className="flex items-center gap-3 font-light text-sm md:text-base text-[#6B7280]">
<iconify-icon className="text-[#10B981] text-lg" icon="solar:check-circle-linear"></iconify-icon> Até 3 atendentes
                        </li>
<li className="flex items-center gap-3 font-light text-sm md:text-base text-[#6B7280]">
<iconify-icon className="text-[#10B981] text-lg" icon="solar:check-circle-linear"></iconify-icon> Histórico 30 dias
                        </li>
<li className="flex items-center gap-3 font-light text-sm md:text-base text-[#6B7280]">
<iconify-icon className="text-[#10B981] text-lg" icon="solar:check-circle-linear"></iconify-icon> Bot básico
                        </li>
</ul>
<a className="w-full inline-flex items-center justify-center font-normal text-sm md:text-base text-[#0F172A] border border-[#0F172A] hover:bg-slate-50 py-3.5 rounded-xl transition-colors relative z-10" href="#">
                        Começar grátis
                    </a>
</div>

<div className="feature-card bg-[#0F172A] rounded-[20px] p-10 flex flex-col relative">
<div className="absolute top-8 right-8 bg-[#FF6B00] text-white px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-wide">
                        Mais popular
                    </div>
<span className="font-medium text-xs text-white/50 uppercase mb-2">Pro</span>
<div className="mb-8">
<span className="font-manrope font-bold text-4xl md:text-5xl text-white tracking-tight">R$ 197</span>
<span className="font-light text-lg text-white/50">/mês</span>
</div>
<ul className="flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-center gap-3 font-light text-sm md:text-base text-white/70">
<iconify-icon className="text-[#10B981] text-lg" icon="solar:check-circle-linear"></iconify-icon> Números ilimitados
                        </li>
<li className="flex items-center gap-3 font-light text-sm md:text-base text-white/70">
<iconify-icon className="text-[#10B981] text-lg" icon="solar:check-circle-linear"></iconify-icon> Atendentes ilimitados
                        </li>
<li className="flex items-center gap-3 font-light text-sm md:text-base text-white/70">
<iconify-icon className="text-[#10B981] text-lg" icon="solar:check-circle-linear"></iconify-icon> Histórico completo
                        </li>
<li className="flex items-center gap-3 font-light text-sm md:text-base text-white/70">
<iconify-icon className="text-[#10B981] text-lg" icon="solar:check-circle-linear"></iconify-icon> Bot avançado
                        </li>
<li className="flex items-center gap-3 font-light text-sm md:text-base text-white/70">
<iconify-icon className="text-[#10B981] text-lg" icon="solar:check-circle-linear"></iconify-icon> Relatórios e métricas
                        </li>
<li className="flex items-center gap-3 font-light text-sm md:text-base text-white/70">
<iconify-icon className="text-[#10B981] text-lg" icon="solar:check-circle-linear"></iconify-icon> Suporte prioritário
                        </li>
</ul>
<a className="w-full inline-flex items-center justify-center font-medium text-sm md:text-base text-white bg-[#FF6B00] hover:bg-[#E55100] py-3.5 rounded-xl transition-colors relative z-10" href="#">
                        Assinar Pro
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F4F0] py-24 md:py-32">
<div className="max-w-[720px] mx-auto px-6">
<span className="block font-light text-xs text-[#9CA3AF] tracking-[0.15em] uppercase mb-4">FAQ</span>
<h2 className="font-manrope font-semibold text-3xl md:text-4xl text-[#0F172A] tracking-tight mb-12">
                Tem dúvida?
            </h2>
<div className="flex flex-col border-t border-[#E5E3DC]">

<details className="group border-b border-[#E5E3DC]" name="faq">
<summary className="flex justify-between items-center font-manrope font-medium text-base md:text-lg text-[#0F172A] cursor-pointer py-6 pr-4 relative">
<span>Preciso de API oficial do WhatsApp?</span>
<span className="text-[#9CA3AF] text-xl font-light group-open:hidden">+</span>
<span className="text-[#9CA3AF] text-xl font-light hidden group-open:block">−</span>
</summary>
<div className="pb-6 pr-8 font-light text-sm md:text-base text-[#6B7280] leading-[1.6]">
                        Não. A conexão é feita via QR Code diretamente com o aplicativo do seu celular. Simples, rápido e sem burocracia do Meta.
                    </div>
</details>

<details className="group border-b border-[#E5E3DC]" name="faq">
<summary className="flex justify-between items-center font-manrope font-medium text-base md:text-lg text-[#0F172A] cursor-pointer py-6 pr-4 relative">
<span>Quantos atendentes posso cadastrar?</span>
<span className="text-[#9CA3AF] text-xl font-light group-open:hidden">+</span>
<span className="text-[#9CA3AF] text-xl font-light hidden group-open:block">−</span>
</summary>
<div className="pb-6 pr-8 font-light text-sm md:text-base text-[#6B7280] leading-[1.6]">
                        No plano Pro, você pode cadastrar quantos atendentes quiser sem custo adicional. No plano Starter, o limite é de 3 atendentes.
                    </div>
</details>

<details className="group border-b border-[#E5E3DC]" name="faq">
<summary className="flex justify-between items-center font-manrope font-medium text-base md:text-lg text-[#0F172A] cursor-pointer py-6 pr-4 relative">
<span>O bot funciona fora do horário?</span>
<span className="text-[#9CA3AF] text-xl font-light group-open:hidden">+</span>
<span className="text-[#9CA3AF] text-xl font-light hidden group-open:block">−</span>
</summary>
<div className="pb-6 pr-8 font-light text-sm md:text-base text-[#6B7280] leading-[1.6]">
                        Sim. Você define o horário de funcionamento da equipe. Fora dele, o bot assume o controle total para dar suporte básico e registrar as solicitações para o dia seguinte.
                    </div>
</details>

<details className="group border-b border-[#E5E3DC]" name="faq">
<summary className="flex justify-between items-center font-manrope font-medium text-base md:text-lg text-[#0F172A] cursor-pointer py-6 pr-4 relative">
<span>Meus dados ficam seguros?</span>
<span className="text-[#9CA3AF] text-xl font-light group-open:hidden">+</span>
<span className="text-[#9CA3AF] text-xl font-light hidden group-open:block">−</span>
</summary>
<div className="pb-6 pr-8 font-light text-sm md:text-base text-[#6B7280] leading-[1.6]">
                        Garantimos isolamento total de informações por empresa, rodando em servidores seguros. Suas conversas pertencem apenas a você.
                    </div>
</details>

<details className="group border-b border-[#E5E3DC]" name="faq">
<summary className="flex justify-between items-center font-manrope font-medium text-base md:text-lg text-[#0F172A] cursor-pointer py-6 pr-4 relative">
<span>Posso cancelar a qualquer hora?</span>
<span className="text-[#9CA3AF] text-xl font-light group-open:hidden">+</span>
<span className="text-[#9CA3AF] text-xl font-light hidden group-open:block">−</span>
</summary>
<div className="pb-6 pr-8 font-light text-sm md:text-base text-[#6B7280] leading-[1.6]">
                        Sim, não temos contrato de fidelidade. Você assina mensalmente e pode cancelar quando achar melhor, direto pelo painel.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-[#0F172A] py-[140px] px-6 text-center border-b border-white/[0.08]">
<div className="max-w-[800px] mx-auto">
<h2 className="font-manrope font-bold text-5xl md:text-6xl text-white tracking-tight leading-[1.05] mb-6">
                Pronto para atender<br/>sem limites?
            </h2>
<p className="font-light text-base md:text-lg text-white/55 mb-10">
                Conecte seu WhatsApp em 5 minutos. Sem cartão de crédito.
            </p>
<a className="inline-flex items-center justify-center font-medium text-base md:text-lg text-white bg-[#FF6B00] hover:bg-[#E55100] px-9 py-4 rounded-xl transition-colors" href="#">
                Começar agora →
            </a>
</div>
</section>

<footer className="bg-[#0F172A] pt-[60px] pb-[40px] px-6 md:px-10">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

<div className="col-span-1 md:col-span-2">
<a className="inline-block font-manrope font-semibold text-lg tracking-tight mb-4" href="#">
<span className="text-white">Pros</span><span className="text-[#FF6B00]">IA</span>
</a>
<p className="font-light text-sm text-white/40 max-w-xs">
                        Atendimento profissional no WhatsApp.
                    </p>
</div>

<div className="col-span-1">
<h4 className="font-light text-xs text-white/30 uppercase tracking-widest mb-6">Produto</h4>
<ul className="flex flex-col gap-4">
<li><a className="font-light text-sm text-white/50 hover:text-white transition-colors" href="#">Funcionalidades</a></li>
<li><a className="font-light text-sm text-white/50 hover:text-white transition-colors" href="#">Preços</a></li>
<li><a className="font-light text-sm text-white/50 hover:text-white transition-colors" href="#">Integrações</a></li>
<li><a className="font-light text-sm text-white/50 hover:text-white transition-colors" href="#">API</a></li>
</ul>
</div>

<div className="col-span-1">
<h4 className="font-light text-xs text-white/30 uppercase tracking-widest mb-6">Empresa</h4>
<ul className="flex flex-col gap-4">
<li><a className="font-light text-sm text-white/50 hover:text-white transition-colors" href="#">Sobre</a></li>
<li><a className="font-light text-sm text-white/50 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="font-light text-sm text-white/50 hover:text-white transition-colors" href="#">Contato</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-light text-xs md:text-sm text-white/30">© 2025 ProsIA</p>
<div className="flex gap-4">
<a className="font-light text-xs md:text-sm text-white/30 hover:text-white/50 transition-colors" href="#">Privacidade</a>
<span className="text-white/20">·</span>
<a className="font-light text-xs md:text-sm text-white/30 hover:text-white/50 transition-colors" href="#">Termos</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
