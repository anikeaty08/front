import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons();

        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const icon = btn.querySelector('i');

            btn.addEventListener('click', () => {
                const isHidden = menu.classList.contains('hidden');
                if (isHidden) {
                    menu.classList.remove('hidden');
                    menu.classList.add('flex');
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    menu.classList.add('hidden');
                    menu.classList.remove('flex');
                    icon.setAttribute('data-lucide', 'menu');
                }
                lucide.createIcons();
            });

            const links = menu.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                    menu.classList.remove('flex');
                    icon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                });
            });
            
            // Navbar scroll effect
            const navPill = document.getElementById('nav-pill');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navPill?.classList.add('bg-[#080808]/95');
                    navPill?.classList.remove('bg-[#080808]/80');
                } else {
                    navPill?.classList.add('bg-[#080808]/80');
                    navPill?.classList.remove('bg-[#080808]/95');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

<header className="fixed top-6 inset-x-0 z-40 flex items-center justify-between px-6 md:px-12 w-full transition-all duration-300 pointer-events-none">

<div className="flex-1 flex justify-start pointer-events-auto">
<a className="flex items-center gap-2 group" href="#">
<span className="text-white font-medium tracking-tight text-lg transition-transform group-hover:scale-105 font-geist">
                    DESIGN<span className="text-[#E50027] font-geist">CLÃ</span>
</span>
</a>
</div>

<div className="hidden md:flex pointer-events-auto backdrop-blur-xl border border-white/10 rounded-full px-8 h-16 items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-colors duration-300" id="nav-pill">
<nav className="flex items-center gap-8 text-base font-normal">
<a className="text-white hover:text-[#E50027] transition-colors font-geist" href="#home">Home</a>
<a className="text-zinc-400 hover:text-white transition-colors font-geist" href="#cursos">Cursos</a>
<a className="text-zinc-400 hover:text-white transition-colors font-geist" href="#consultoria">Consultoria UX</a>
<a className="text-zinc-400 hover:text-white transition-colors font-geist" href="#sites">Criação de Sites</a>
</nav>
</div>

<div className="flex-1 flex items-center justify-end pointer-events-auto">
<a className="hidden md:flex bg-white text-black hover:bg-zinc-200 px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 font-geist" href="#cla">
                Entrar no Clã
            </a>
<button className="md:hidden text-zinc-400 hover:text-white p-2.5 bg-[#080808]/80 backdrop-blur-xl border border-white/10 rounded-full" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="hidden absolute top-20 left-6 right-6 bg-[#080808]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex-col gap-4 shadow-2xl pointer-events-auto" id="mobile-menu">
<a className="text-white font-normal text-lg py-2 font-geist" href="#home">Home</a>
<a className="text-zinc-400 font-normal text-lg py-2 font-geist" href="#cursos">Cursos</a>
<a className="text-zinc-400 font-normal text-lg py-2 font-geist" href="#consultoria">Consultoria UX</a>
<a className="text-zinc-400 font-normal text-lg py-2 font-geist" href="#sites">Criação de Sites</a>
<div className="pt-4 mt-2 border-t border-white/10">
<a className="flex justify-center bg-white text-black px-6 py-3 rounded-xl text-base font-medium w-full font-geist" href="#cla">
                    Entrar no Clã
                </a>
</div>
</div>
</header>
<main className="">

<section className="md:pt-64 md:pb-40 overflow-hidden flex flex-col min-h-screen text-center border-white/5 border-b pt-48 pr-6 pb-32 pl-6 relative items-center justify-center" id="home">

<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Abstract 3D Liquid" className="w-full h-full object-cover opacity-30 mix-blend-lighten" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b69bf96-8151-406f-b37f-e3047798c8c5_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#030303]/40 via-[#030303]/80 to-[#030303]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full mix-blend-screen bg-rose-900/10"></div>
</div>
<div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-sm font-normal text-zinc-300 mb-8 shadow-xl font-geist">
<span className="w-2 h-2 rounded-full bg-[#E50027] animate-pulse"></span>
                    Excelência em Produto Digital
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] mb-8 font-jakarta font-medium">
                    Projete como um <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 font-jakarta font-medium">Mestre.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mb-12 leading-relaxed font-jakarta font-medium">
                    Formamos designers, resolvemos problemas reais de produto e construímos experiências digitais de alto nível.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-[#E50027] hover:bg-[#C00020] text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 shadow-[0_0_30px_rgba(229,0,39,0.3)] hover:shadow-[0_0_40px_rgba(229,0,39,0.5)] flex items-center justify-center gap-2 font-geist" href="#cla">
                        Entrar no Clã
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto bg-transparent border border-white/10 hover:border-white/30 hover:bg-white/5 text-white px-8 py-4 rounded-full text-base font-normal transition-all duration-300 flex items-center justify-center font-geist" href="#frentes">
                        Ver Serviços
                    </a>
</div>
</div>
</section>

<section className="relative z-10 border-b border-white/5 bg-[#030303]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="py-16 md:py-20 flex flex-col items-center justify-center text-center">
<span className="text-5xl md:text-6xl text-white tracking-tight mb-3 font-jakarta font-medium">+448</span>
<span className="text-base text-zinc-500 uppercase tracking-widest font-normal font-geist">Projetos desenvolvidos</span>
</div>
<div className="py-16 md:py-20 flex flex-col items-center justify-center text-center">
<span className="text-5xl md:text-6xl text-white tracking-tight mb-3 font-jakarta font-medium">+7 <span className="text-3xl text-zinc-500 font-jakarta font-medium">anos</span></span>
<span className="text-base text-zinc-500 uppercase tracking-widest font-normal font-geist">de experiência</span>
</div>
<div className="py-16 md:py-20 flex flex-col items-center justify-center text-center">
<span className="text-5xl md:text-6xl text-white tracking-tight mb-3 font-jakarta font-medium">+200 <span className="text-3xl text-zinc-500 font-jakarta font-medium">horas</span></span>
<span className="text-base text-zinc-500 uppercase tracking-widest font-normal font-geist">de mentoria</span>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-40 relative px-6 bg-[#030303]" id="frentes">

<div className="absolute top-0 right-0 w-[600px] h-[600px] blur-[150px] pointer-events-none bg-rose-900/10"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="max-w-2xl mb-20 md:mb-24">
<span className="text-xs font-semibold text-[#E50027] uppercase tracking-widest mb-4 block font-geist">Nossos Caminhos</span>
<h2 className="text-4xl md:text-5xl text-white tracking-tight mb-6 font-jakarta font-medium">Três caminhos. Um único objetivo: <span className="text-[#E50027] font-jakarta font-medium">excelência.</span></h2>
<p className="text-lg md:text-xl text-zinc-400 font-jakarta font-medium">Atuação especializada para quem exige o mais alto nível de entrega e evolução no digital.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="group relative flex flex-col p-10 rounded-[2rem] bg-[#050A15] border border-[#0F1B38] hover:border-[#213F85] transition-all duration-500 overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-64 h-64 blur-[80px] transition-colors duration-500 bg-rose-600/10 group-hover:bg-rose-500/20"></div>
<div className="w-14 h-14 rounded-2xl bg-[#091124] border border-[#14264E] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 text-rose-600">
<i className="w-7 h-7" data-lucide="layout-template" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-white tracking-tight mb-4 font-jakarta font-medium">Cursos de Design</h3>
<p className="text-lg text-zinc-400 leading-relaxed mb-10 flex-grow font-light font-geist">
                            Treinamento imersivo para dominar UX, UI e ferramentas modernas com foco total no mercado.
                        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-base text-zinc-300 font-geist">
<i className="w-5 h-5 text-rose-500" data-lucide="check-circle" strokeWidth="1.5"></i> Método prático
                            </li>
<li className="flex items-center gap-3 text-base text-zinc-300 font-geist">
<i className="w-5 h-5 text-rose-500" data-lucide="check-circle" strokeWidth="1.5"></i> Visão de negócios
                            </li>
</ul>
<a className="inline-flex items-center justify-between w-full text-base text-white font-medium bg-[#0A1329] border border-[#14264E] px-6 py-4 rounded-xl transition-all font-geist group-hover:border-rose-500/50" href="#">
                            Ver cursos
                            <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="group relative flex flex-col p-10 rounded-[2rem] bg-[#050A15] border border-[#0F1B38] hover:border-[#213F85] transition-all duration-500 overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-64 h-64 blur-[80px] transition-colors duration-500 bg-rose-600/10 group-hover:bg-rose-500/20"></div>
<div className="w-14 h-14 rounded-2xl bg-[#091124] border border-[#14264E] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 text-rose-600">
<i className="w-7 h-7" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-white tracking-tight mb-4 font-jakarta font-medium">Consultoria UX</h3>
<p className="text-lg text-zinc-400 leading-relaxed mb-10 flex-grow font-light font-geist">
                            Análise profunda, estruturação e otimização de produtos digitais para escalar métricas reais.
                        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-base text-zinc-300 font-geist">
<i className="w-5 h-5 text-rose-500" data-lucide="check-circle" strokeWidth="1.5"></i> Auditoria de interface
                            </li>
<li className="flex items-center gap-3 text-base text-zinc-300 font-geist">
<i className="w-5 h-5 text-rose-500" data-lucide="check-circle" strokeWidth="1.5"></i> Aumento de conversão
                            </li>
</ul>
<a className="inline-flex items-center justify-between w-full text-base text-white font-medium bg-[#0A1329] border border-[#14264E] px-6 py-4 rounded-xl transition-all font-geist group-hover:border-rose-500/50" href="#">
                            Conhecer consultoria
                            <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="group relative flex flex-col p-10 rounded-[2rem] bg-[#050A15] border border-[#0F1B38] hover:border-[#213F85] transition-all duration-500 overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-64 h-64 blur-[80px] transition-colors duration-500 bg-rose-600/10 group-hover:bg-rose-500/20"></div>
<div className="w-14 h-14 rounded-2xl bg-[#091124] border border-[#14264E] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 text-rose-600">
<i className="w-7 h-7" data-lucide="monitor-smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-white tracking-tight mb-4 font-jakarta font-medium">Criação de Sites</h3>
<p className="text-lg text-zinc-400 leading-relaxed mb-10 flex-grow font-light font-geist">
                            Projetos institucionais de alto padrão que convertem, engajam e posicionam marcas como líderes.
                        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-base text-zinc-300 font-geist">
<i className="w-5 h-5 text-rose-500" data-lucide="check-circle" strokeWidth="1.5"></i> Design imersivo
                            </li>
<li className="flex items-center gap-3 text-base text-zinc-300 font-geist">
<i className="w-5 h-5 text-rose-500" data-lucide="check-circle" strokeWidth="1.5"></i> Performance técnica
                            </li>
</ul>
<a className="inline-flex items-center justify-between w-full text-base text-white font-medium bg-[#0A1329] border border-[#14264E] px-6 py-4 rounded-xl transition-all font-geist group-hover:border-rose-500/50" href="#">
                            Ver projetos
                            <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 bg-[#030303] relative px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
<div>
<span className="text-xs font-semibold text-[#E50027] uppercase tracking-widest mb-4 block font-geist">Para Quem É</span>
<h2 className="text-4xl md:text-5xl text-white tracking-tight mb-10 font-jakarta font-medium">Não é para todos.</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full border flex items-center justify-center shrink-0 bg-rose-500/10 border-rose-500/30">
<i className="w-4 h-4 text-rose-500" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-zinc-300 font-normal font-geist">Quer sair do básico e elevar o nível visual</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full border flex items-center justify-center shrink-0 bg-rose-500/10 border-rose-500/30">
<i className="w-4 h-4 text-rose-500" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-zinc-300 font-normal font-geist">Quer viver de produto digital com solidez</span>
</li>
</ul>
</div>

<div className="relative group aspect-square lg:aspect-auto lg:h-[600px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
<img alt="Abstract Impact" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-10">
<h3 className="text-3xl text-white tracking-tight mb-4 font-jakarta font-medium">Prática aplicada.</h3>
<p className="text-lg text-zinc-300 leading-relaxed font-light font-geist">
                            União de conhecimento técnico profundo, visão de produto afiada e execução impecável no mercado.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#030303] px-6 overflow-hidden relative">

<div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#E50027]/10 blur-[150px] pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-16 md:mb-24">
<span className="text-xs font-semibold text-[#E50027] uppercase tracking-widest mb-4 block font-geist">Cases de Sucesso</span>
<h2 className="text-4xl md:text-5xl text-white tracking-tight mb-6 font-jakarta font-medium">Resultados constroem reputação.</h2>
<p className="text-lg text-zinc-400 font-light font-geist">Projetos de alto impacto que redefinem o posicionamento de marcas no digital.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative aspect-[4/3] rounded-[2rem] border border-white/10 bg-[#080808] overflow-hidden">
<img alt="Dashboard Mockup" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&amp;w=2194&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
<div className="flex items-center justify-between">
<div>
<h4 className="text-2xl text-white mb-2 tracking-tight font-jakarta font-medium">Dashboard SaaS</h4>
<p className="text-base text-zinc-400 font-light font-geist">Redesign de interface complexa</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur flex items-center justify-center text-white">
<i className="w-5 h-5 -rotate-45" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-[2rem] border border-white/10 bg-[#080808] overflow-hidden">
<img alt="Data Flow Mockup" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
<div className="flex items-center justify-between">
<div>
<h4 className="text-2xl text-white mb-2 tracking-tight font-jakarta font-medium">E-commerce Premium</h4>
<p className="text-base text-zinc-400 font-light font-geist">Aumento de 40% na conversão</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur flex items-center justify-center text-white">
<i className="w-5 h-5 -rotate-45" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 border-t border-white/5 bg-[#030303] relative overflow-hidden" id="cla">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#E50027]/10 blur-[150px] pointer-events-none mix-blend-screen"></div>
<div className="absolute inset-0 z-0 opacity-[0.15]">
<img alt="Abstract Texture" className="w-full h-full object-cover mix-blend-lighten" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
<div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl backdrop-blur-md">
<i className="w-10 h-10 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-semibold text-[#E50027] uppercase tracking-widest mb-4 block font-geist">Junte-se a Nós</span>
<h2 className="text-5xl md:text-7xl text-white tracking-tight mb-8 leading-[1.1] font-jakarta font-medium">
                    Seu próximo nível <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50027] to-red-800 font-jakarta font-medium">começa agora.</span>
</h2>
<p className="text-xl md:text-2xl text-zinc-400 mb-14 font-jakarta font-medium">
                    O clã está pronto. A questão é: você está?
                </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 flex items-center justify-center gap-3 group font-geist">
                        Entrar no Clã
                        <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white text-white px-10 py-5 rounded-full text-lg font-normal transition-all duration-300 flex items-center justify-center backdrop-blur-md font-geist">
                        Falar com especialista
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#030303] py-16 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-2">
<span className="text-white font-medium tracking-tight text-lg font-geist">
                    DESIGN<span className="text-[#E50027] font-geist">CLÃ</span>
</span>
</div>
<p className="text-sm text-zinc-500 font-light font-geist">
                © 2024 Design Clã. Todos os direitos reservados.
            </p>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="link" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
