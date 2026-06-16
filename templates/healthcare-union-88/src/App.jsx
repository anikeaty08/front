import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.hero-slide');
            const dots = document.querySelectorAll('.slide-dot');
            let currentSlide = 0;
            let slideInterval;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.remove('opacity-0', 'z-0');
                        slide.classList.add('opacity-100', 'z-10');
                    } else {
                        slide.classList.remove('opacity-100', 'z-10');
                        slide.classList.add('opacity-0', 'z-0');
                    }
                });
                dots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.add('w-8', 'bg-white');
                        dot.classList.remove('w-2', 'bg-white/50');
                    } else {
                        dot.classList.remove('w-8', 'bg-white');
                        dot.classList.add('w-2', 'bg-white/50');
                    }
                });
                currentSlide = index;
            }

            function nextSlide() {
                showSlide((currentSlide + 1) % slides.length);
            }

            // Navigation Controls
            const prevBtn = document.getElementById('prev-slide');
            const nextBtn = document.getElementById('next-slide');
            
            if(prevBtn && nextBtn) {
                prevBtn.addEventListener('click', () => {
                    showSlide((currentSlide - 1 + slides.length) % slides.length);
                    resetInterval();
                });
                nextBtn.addEventListener('click', () => {
                    nextSlide();
                    resetInterval();
                });
            }

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                    resetInterval();
                });
            });

            function resetInterval() {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 6000);
            }

            // Iniciar slider automático a cada 6 segundos
            slideInterval = setInterval(nextSlide, 6000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="flex items-center" href="#">
<img alt="SITEU" className="h-10 w-auto object-contain" src="https://siteu.pt/wp-content/uploads/2022/12/Siteu-logo-1372x800.png"/>
</a>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-blue-700 transition-colors" href="#">Início</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#">O Sindicato</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#">Destaques</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#">Serviços</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#">Contactos</a>
</div>

<div className="hidden md:flex items-center space-x-4">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2" href="#">
<iconify-icon height="18" icon="solar:user-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Portal do Sócio
                    </a>
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-full shadow-md text-sm font-medium text-white bg-gradient-to-r from-blue-800 to-sky-500 hover:from-blue-700 hover:to-sky-400 transition-all hover:shadow-lg" href="#">
                        Fazer Inscrição
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-blue-600 p-2" type="button">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative h-[600px] md:h-[700px] overflow-hidden bg-slate-900 group">

<div className="hero-slide absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out opacity-100 z-10">
<img alt="Equipa médica unida" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/75"></div>
<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center items-center">
<a className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs font-semibold mb-8 hover:bg-sky-500/30 transition-colors shadow-sm backdrop-blur-md uppercase tracking-wider" href="#">
<span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
                    Unidos somos mais fortes
                </a>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                    A força unida na defesa dos <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">enfermeiros</span>.
                </h1>
<p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Mais do que um sindicato, somos uma frente unida. Lutamos lado a lado pela valorização da nossa carreira, exigindo o respeito e a dignidade que a enfermagem merece em Portugal.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent rounded-full shadow-md text-base font-medium text-white bg-gradient-to-r from-blue-800 to-sky-500 hover:from-blue-700 hover:to-sky-400 transition-all hover:shadow-lg hover:-translate-y-0.5 gap-2" href="#">
                        Junte-se à Luta
                        <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-white/20 rounded-full shadow-sm text-base font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all gap-2" href="#">
                        Simular Quotas
                    </a>
</div>
</div>
</div>

<div className="hero-slide absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out opacity-0 z-0">
<img alt="Mãos unidas em solidariedade" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/80"></div>
<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center items-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold mb-8 shadow-sm backdrop-blur-md uppercase tracking-wider">
                    Solidariedade e Proteção
                </div>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                    Nenhum enfermeiro caminha <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">sozinho</span>
</h2>
<p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    A nossa verdadeira força reside na proteção mútua. Garantimos um escudo de apoio jurídico e sindical incondicional para que exerça a sua profissão com total segurança e confiança.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent rounded-full shadow-md text-base font-medium text-white bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-600 hover:to-sky-500 transition-all hover:shadow-lg hover:-translate-y-0.5 gap-2" href="#">
                        Conhecer o nosso Apoio
                    </a>
</div>
</div>
</div>

<div className="hero-slide absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out opacity-0 z-0">
<img alt="Poder da Reivindicação" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1531265726475-52ad60219627?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/80"></div>
<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center items-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold mb-8 shadow-sm backdrop-blur-md uppercase tracking-wider">
                    Ação Reivindicativa
                </div>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                    O poder da <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">reivindicação</span> coletiva
                </h2>
<p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Não recuamos na defesa intransigente dos nossos direitos. Estamos presentes nas negociações e na rua, para garantir justiça laboral e melhores condições de trabalho para todos.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent rounded-full shadow-md text-base font-medium text-white bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 transition-all hover:shadow-lg hover:-translate-y-0.5 gap-2" href="#">
                        Ver Ações Sindicais
                    </a>
</div>
</div>
</div>

<button className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100" id="prev-slide">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100" id="next-slide">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
<button aria-label="Slide 1" className="slide-dot w-8 h-2 rounded-full bg-white transition-all duration-300"></button>
<button aria-label="Slide 2" className="slide-dot w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300"></button>
<button aria-label="Slide 3" className="slide-dot w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300"></button>
</div>
</section>

<section className="bg-gradient-to-r from-blue-900 to-sky-900 py-14 shadow-inner relative z-20 -mt-2">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl font-semibold text-white tracking-tight mb-1">Nacional</span>
<span className="text-xs text-sky-200 font-medium uppercase tracking-wider">Cobertura</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl font-semibold text-white tracking-tight mb-1">24/7</span>
<span className="text-xs text-sky-200 font-medium uppercase tracking-wider">Apoio Jurídico</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl font-semibold text-white tracking-tight mb-1">100%</span>
<span className="text-xs text-sky-200 font-medium uppercase tracking-wider">Independente</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl font-semibold text-white tracking-tight mb-1">+50</span>
<span className="text-xs text-sky-200 font-medium uppercase tracking-wider">Parcerias e Descontos</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Em Destaque</h2>
<p className="text-base text-slate-600 max-w-2xl">Os temas mais urgentes e as vitórias mais recentes na defesa dos enfermeiros.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 to-sky-600 text-white shadow-lg group">
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div className="relative p-8 md:p-12 flex flex-col h-full justify-between min-h-[320px]">
<span className="inline-flex w-fit px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wider mb-8 border border-white/30">
                            Urgente
                        </span>
<div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 leading-tight">Atualização da Tabela Remuneratória 2024</h3>
<p className="text-sky-50 md:text-lg mb-8 max-w-xl">Conheça os novos escalões e o impacto direto no seu vencimento após as últimas negociações sindicais concluídas com sucesso.</p>
<a className="inline-flex items-center text-sm font-semibold bg-white text-blue-800 px-5 py-2.5 rounded-full hover:bg-sky-50 transition-colors gap-2 w-fit shadow-sm" href="#">
                                Ler Documento Completo <iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="flex-1 rounded-3xl bg-white border-l-4 border-l-amber-400 border border-slate-200 p-6 hover:shadow-md transition-shadow">
<span className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2 block">Ação Reivindicativa</span>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Pré-aviso de Greve: ARS Norte</h4>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">Informação essencial para os associados afetos às unidades da região norte.</p>
<a className="text-sm font-medium text-amber-500 hover:text-amber-600 flex items-center gap-1" href="#">Saber mais <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>
<div className="flex-1 rounded-3xl bg-white border-l-4 border-l-emerald-500 border border-slate-200 p-6 hover:shadow-md transition-shadow">
<span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-2 block">Vitória Sindical</span>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Transição de Categorias</h4>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">Acordo final garante transição justa para enfermeiros especialistas.</p>
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1" href="#">Ver detalhes <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Vantagens exclusivas para sócios</h2>
<p className="text-base text-slate-600 max-w-2xl">O SITEU oferece um conjunto abrangente de serviços desenhados para proteger e impulsionar a sua carreira.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon height="120" icon="solar:shield-check-linear" width="120"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors shadow-sm relative z-10">
<iconify-icon height="28" icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3 relative z-10">Apoio Jurídico</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-8 relative z-10">Aconselhamento especializado e representação legal em questões laborais, disciplinares e de carreira, sem custos adicionais.</p>
<a className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors gap-1 relative z-10" href="#">
                        Saber mais <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/5 transition-all group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon height="120" icon="solar:diploma-linear" width="120"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors shadow-sm relative z-10">
<iconify-icon height="28" icon="solar:diploma-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3 relative z-10">Formação Contínua</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-8 relative z-10">Acesso a cursos certificados, workshops e seminários com condições exclusivas para o seu desenvolvimento profissional.</p>
<a className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors gap-1 relative z-10" href="#">
                        Ver cursos <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 transition-all group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon height="120" icon="solar:tag-price-linear" width="120"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm relative z-10">
<iconify-icon height="28" icon="solar:tag-price-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3 relative z-10">Protocolos e Descontos</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-8 relative z-10">Beneficie de uma rede nacional de parceiros com descontos significativos em saúde, seguros, lazer e comércio.</p>
<a className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors gap-1 relative z-10" href="#">
                        Explorar rede <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-blue-50/50 border-y border-blue-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-4">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Informação Útil</h2>
<p className="text-sm text-slate-600">Acessos rápidos a documentação e recursos essenciais.</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-slate-400">
<iconify-icon height="24" icon="solar:book-bookmark-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900">Legislação</h4>
</a>
<a className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-slate-400">
<iconify-icon height="24" icon="solar:calculator-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900">Tabelas Salariais</h4>
</a>
<a className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-slate-400">
<iconify-icon height="24" icon="solar:hand-shake-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900">Acordos Coletivos</h4>
</a>
<a className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-slate-400">
<iconify-icon height="24" icon="solar:question-circle-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900">Perguntas Frequentes</h4>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Últimas Notícias</h2>
<p className="text-base text-slate-600">Acompanhe a atividade do sindicato e do setor da saúde.</p>
</div>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 border border-slate-200 rounded-full text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm gap-2" href="#">
                    Ver todas as notícias
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all" href="#">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<img alt="Notícia 1" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold rounded-lg shadow-sm z-10">Negociação</span>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-medium text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon> Há 2 dias
                                </span>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors leading-snug">Reunião no Ministério da Saúde: Ponto de Situação e Próximos Passos</h3>
<p className="text-sm text-slate-600 line-clamp-3">Resumo das exigências apresentadas pela direção do SITEU referentes à regularização das carreiras e avaliação de desempenho.</p>
</div>
</div>
</a>

<a className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-sky-300 hover:shadow-lg hover:shadow-sky-900/5 transition-all" href="#">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<img alt="Notícia 2" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-sky-700 text-xs font-bold rounded-lg shadow-sm z-10">Comunicado</span>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-medium text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon> 24 Outubro
                                </span>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3 group-hover:text-sky-600 transition-colors leading-snug">Esclarecimento sobre o processo de transição para as novas categorias</h3>
<p className="text-sm text-slate-600 line-clamp-3">Informação detalhada para todos os associados sobre os procedimentos e prazos relativos à recente alteração legislativa.</p>
</div>
</div>
</a>

<a className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-900/5 transition-all" href="#">
<div className="h-48 bg-slate-100 relative overflow-hidden">
<img alt="Notícia 3" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-700 text-xs font-bold rounded-lg shadow-sm z-10">Formação</span>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-medium text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon> 18 Outubro
                                </span>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3 group-hover:text-indigo-600 transition-colors leading-snug">Abertas as inscrições para o Curso de Liderança em Saúde</h3>
<p className="text-sm text-slate-600 line-clamp-3">Nova oportunidade de formação creditada. Vagas limitadas com preferência e condições especiais para sócios SITEU.</p>
</div>
</div>
</a>
</div>
<div className="mt-8 text-center sm:hidden">
<a className="inline-flex items-center justify-center w-full px-5 py-3 border border-slate-200 rounded-full text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors" href="#">
                    Ver todas as notícias
                </a>
</div>
</div>
</section>

<footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 mt-auto text-slate-400">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
<div className="md:col-span-4 lg:col-span-5">
<a className="flex items-center mb-6 bg-white/5 p-4 rounded-xl w-fit" href="#">
<img alt="SITEU" className="h-8 w-auto object-contain brightness-0 invert" src="https://siteu.pt/wp-content/uploads/2022/12/Siteu-logo-1372x800.png"/>
</a>
<p className="text-sm text-slate-400 max-w-xs mb-6">
                        Sindicato Independente de Todos os Enfermeiros Unidos. A defender a sua profissão todos os dias, de forma livre e independente.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon height="20" icon="solar:minimize-square-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon height="20" icon="solar:link-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
<div>
<h4 className="text-sm font-semibold text-white mb-4">O Sindicato</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-sky-400 transition-colors" href="#">Sobre Nós</a></li>
<li><a className="text-sm hover:text-sky-400 transition-colors" href="#">Corpos Gerentes</a></li>
<li><a className="text-sm hover:text-sky-400 transition-colors" href="#">Estatutos</a></li>
<li><a className="text-sm hover:text-sky-400 transition-colors" href="#">Delegações Regionais</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Recursos</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-sky-400 transition-colors" href="#">Notícias e Comunicados</a></li>
<li><a className="text-sm hover:text-sky-400 transition-colors" href="#">Apoio Jurídico</a></li>
<li><a className="text-sm hover:text-sky-400 transition-colors" href="#">Oferta Formativa</a></li>
<li><a className="text-sm hover:text-sky-400 transition-colors" href="#">Simulador de Quotas</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Contactos</h4>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm">
<iconify-icon className="mt-0.5 shrink-0 text-sky-500" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Av. da República, 123<br/>1050-000 Lisboa</span>
</li>
<li>
<a className="flex items-center gap-2 text-sm hover:text-sky-400 transition-colors" href="mailto:geral@siteu.pt">
<iconify-icon className="text-sky-500" height="16" icon="solar:letter-linear" width="16"></iconify-icon>
                                    geral@siteu.pt
                                </a>
</li>
<li>
<a className="flex items-center gap-2 text-sm hover:text-sky-400 transition-colors" href="tel:+351210000000">
<iconify-icon className="text-sky-500" height="16" icon="solar:phone-linear" width="16"></iconify-icon>
                                    210 000 000
                                </a>
</li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">
                    © 2023 SITEU. Todos os direitos reservados.
                </p>
<div className="flex gap-6">
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Política de Privacidade</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Termos de Utilização</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
