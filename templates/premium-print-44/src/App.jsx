import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Animation Configuration
        document.addEventListener('DOMContentLoaded', () => {
            
            // Hero Animations
            anime({
                targets: '.hero-text',
                translateY: [20, 0],
                opacity: [0, 1],
                duration: 1200,
                easing: 'easeOutExpo',
                delay: 200
            });

            anime({
                targets: '.hero-visual',
                scale: [0.9, 1],
                opacity: [0, 1],
                duration: 1500,
                easing: 'easeOutElastic(1, .8)',
                delay: 400
            });

            // Float Animations for Hero Elements
            anime({
                targets: '.animate-float-slow',
                translateY: [-10, 10],
                duration: 3000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine'
            });

            anime({
                targets: '.animate-float-delayed',
                translateY: [10, -10],
                duration: 3500,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: 500
            });

            // Scroll Animations Observer
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        
                        // Products Stagger
                        if(entry.target.querySelector('.product-card')) {
                            anime({
                                targets: entry.target.querySelectorAll('.product-card'),
                                translateY: [50, 0],
                                opacity: [0, 1],
                                delay: anime.stagger(150),
                                duration: 1000,
                                easing: 'easeOutQuart'
                            });
                        }

                        // Process Steps Stagger
                        if(entry.target.classList.contains('process-step')) {
                           // Logic handled by parent container usually, simplified here
                        }
                        
                        // Custom logic for parent of process steps
                        if(entry.target.id === 'acabamento') {
                             anime({
                                targets: '.process-step',
                                translateY: [30, 0],
                                opacity: [0, 1],
                                delay: anime.stagger(200),
                                duration: 800,
                                easing: 'easeOutBack'
                            });
                        }

                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('#produtos, #acabamento').forEach(section => {
                observer.observe(section);
            });
        });

        // Add keyframes for shimmer
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes shimmer {
                0% { background-position: 100% 0; }
                100% { background-position: -100% 0; }
            }
            .hover\\:animate-shimmer:hover {
                animation: shimmer 2s linear infinite;
            }
            @keyframes blob {
                0% { transform: translate(0px, 0px) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
                100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-blob {
                animation: blob 10s infinite;
            }
            .animation-delay-2000 {
                animation-delay: 2s;
            }
            .animation-delay-4000 {
                animation-delay: 4s;
            }
        `;
        document.head.appendChild(styleSheet);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-r from-orange-100/40 to-red-100/40 blur-[120px] rounded-full animate-blob"></div>
<div className="absolute top-[20%] right-[0%] w-[40%] h-[40%] bg-gradient-to-l from-orange-100/40 to-red-100/40 blur-[120px] rounded-full animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] bg-gradient-to-t from-teal-50/40 to-lime-50/40 blur-[120px] rounded-full animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-white/50 border-b border-white/20 transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-stone-800 to-stone-600 flex items-center justify-center text-white shadow-lg shadow-stone-200/50">
<span className="font-medium text-sm tracking-tighter">W</span>
</div>
<span className="text-lg font-medium tracking-tighter text-stone-800 group-hover:opacity-80 transition-opacity">Wandemberg</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#produtos">Produtos</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#acabamento">Processo</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#sobre">Sobre</a>
</div>
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition-all shadow-lg shadow-stone-200 hover:shadow-xl hover:scale-105 active:scale-95">
<span>Orçamento</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="md:hidden text-stone-800">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden z-10 pt-32 pb-20 relative">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="hero-text opacity-0 translate-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-6">
<iconify-icon className="text-orange-500" icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium text-orange-600 tracking-wide uppercase">Acabamento Premium</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-stone-900 leading-[1.1] mb-6">
                    A arte de <br/>
<span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-gradient">materializar</span>
                    ideias.
                </h1>
<p className="text-lg text-stone-500 font-normal leading-relaxed max-w-md mb-8 tracking-tight">
                    Especialistas em caixas personalizadas, moleskines e materiais de PDV. Onde o design encontra a textura perfeita.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 rounded-xl bg-stone-900 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-xl shadow-stone-200 hover:-translate-y-1 transition-transform">
                        Ver Catálogo
                        <iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-xl bg-white border border-stone-200 text-stone-600 font-medium text-sm flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors">
                        Fale com Consultor
                    </button>
</div>
</div>
<div className="relative hero-visual opacity-0 scale-95">

<div className="relative w-full aspect-square max-w-md mx-auto">

<div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-[3rem] rotate-3 blur-md transform transition-transform duration-1000 hover:rotate-6"></div>

<div className="absolute inset-4 bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-2xl shadow-orange-100/50 flex flex-col items-center justify-center p-8 overflow-hidden group">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-100 to-red-50 rounded-full blur-3xl opacity-60"></div>
<div className="relative z-10 w-48 h-48 bg-gradient-to-br from-stone-50 to-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center border border-white group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-orange-400/80" icon="solar:box-linear" strokeWidth="1" width="64"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent rounded-2xl"></div>
</div>
<div className="relative z-10 mt-8 text-center">
<h3 className="text-xl font-medium tracking-tight text-stone-800">Rigid Box</h3>
<p className="text-sm text-stone-400 mt-1">Soft Touch &amp; Hot Stamping</p>
</div>
</div>

<div className="absolute bottom-12 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-stone-100 animate-float-slow">
<iconify-icon className="text-pink-400" icon="solar:notebook-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="absolute top-12 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-stone-100 animate-float-delayed">
<iconify-icon className="text-red-400" icon="solar:tag-price-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</header>

<section className="relative z-10 py-24" id="produtos">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-2">Coleção Exclusiva</h2>
<p className="text-stone-500 font-normal">Soluções completas para elevar a percepção da sua marca.</p>
</div>
<a className="text-sm font-medium text-stone-800 border-b border-stone-300 pb-0.5 hover:border-stone-800 transition-colors w-fit" href="#">Ver todos produtos</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-stone-100 border border-stone-200 transition-all hover:shadow-xl hover:shadow-stone-200/50 product-card">
<div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-stone-50 opacity-100 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_80%_20%,rgba(251,113,133,0.08),transparent_50%)]"></div>
<div className="relative z-10 h-full p-8 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center mb-4 shadow-sm text-orange-500">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-stone-800">Caixas Personalizadas</h3>
<p className="text-stone-500 text-sm mt-2 max-w-xs leading-relaxed">Estruturas rígidas, acopladas e cartotécnica de alta precisão. Acabamentos em hot stamping e verniz localizado.</p>
</div>
<div className="flex items-center gap-2 text-stone-800 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            Configurar
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="absolute right-0 bottom-0 w-64 h-64 translate-x-12 translate-y-12 bg-orange-200/20 rounded-full blur-3xl"></div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white border border-stone-200 transition-all hover:shadow-xl hover:shadow-stone-200/50 product-card">
<div className="absolute top-0 right-0 w-48 h-48 bg-pink-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 h-full p-8 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center mb-4 text-pink-500">
<iconify-icon icon="solar:notebook-bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-800">Moleskines</h3>
<p className="text-stone-500 text-sm mt-2 leading-relaxed">Corporativos e criativos com papéis especiais.</p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white border border-stone-200 transition-all hover:shadow-xl hover:shadow-stone-200/50 product-card">
<div className="absolute bottom-0 left-0 w-48 h-48 bg-red-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="relative z-10 h-full p-8 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center mb-4 text-red-500">
<iconify-icon icon="solar:sticker-smile-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-800">Wobblers &amp; PDV</h3>
<p className="text-stone-500 text-sm mt-2 leading-relaxed">Destaque no ponto de venda com cortes especiais.</p>
</div>
</div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-stone-900 border border-stone-800 transition-all product-card">
<div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900"></div>

<div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] hover:animate-shimmer"></div>
<div className="relative z-10 h-full p-8 flex items-center justify-between">
<div className="max-w-md">
<span className="text-xs font-medium text-orange-300 uppercase tracking-widest mb-2 block">Acabamento Luxo</span>
<h3 className="text-2xl font-medium tracking-tight text-white">Hot Stamping &amp; Verniz 3D</h3>
<p className="text-stone-400 text-sm mt-2">Adicione textura tátil e brilho metalizado aos seus projetos.</p>
</div>
<div className="hidden md:block text-orange-300">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/50 border-y border-stone-200/50 backdrop-blur-sm" id="acabamento">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Precisão em cada detalhe</h2>
<p className="text-stone-500">Nosso processo combina tecnologia de ponta com a curadoria artesanal para garantir que cada Wandemberg entregue seja impecável.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="process-step opacity-0 translate-y-4">
<div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 text-stone-700">
<iconify-icon icon="solar:ruler-pen-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Prototipagem</h4>
<p className="text-sm text-stone-500 leading-relaxed">Mockups físicos para validação de estrutura e fechamento.</p>
</div>

<div className="process-step opacity-0 translate-y-4">
<div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 text-stone-700">
<iconify-icon icon="solar:printer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Impressão HD</h4>
<p className="text-sm text-stone-500 leading-relaxed">Cores vibrantes com calibração precisa e tintas premium.</p>
</div>

<div className="process-step opacity-0 translate-y-4">
<div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 text-stone-700">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Enobrecimento</h4>
<p className="text-sm text-stone-500 leading-relaxed">Laminação, corte e vinco, relevo e texturas especiais.</p>
</div>

<div className="process-step opacity-0 translate-y-4">
<div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 text-stone-700">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Montagem</h4>
<p className="text-sm text-stone-500 leading-relaxed">Finalização manual e controle de qualidade rigoroso.</p>
</div>
</div>
</div>
</section>

<footer className="relative pt-32 pb-12 overflow-hidden">

<div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-stone-200/50 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="bg-stone-900 rounded-3xl p-8 md:p-16 mb-20 overflow-hidden relative">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'1\\'/%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">Vamos criar algo <br/>extraordinário?</h2>
<p className="text-stone-400 text-lg mb-8 max-w-sm">Entre em contato para um orçamento personalizado de caixas ou acabamentos gráficos.</p>
<div className="flex items-center gap-4 text-white">
<div className="flex flex-col">
<span className="text-xs text-stone-500 uppercase tracking-widest">Email</span>
<span className="text-lg font-medium">contato@wandemberg.com.br</span>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-stone-400 font-medium ml-1">Nome</label>
<input className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition-colors text-sm" placeholder="Seu nome" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-stone-400 font-medium ml-1">Empresa</label>
<input className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition-colors text-sm" placeholder="Nome da empresa" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-stone-400 font-medium ml-1">Interesse</label>
<div className="relative">
<select className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm appearance-none cursor-pointer">
<option>Caixas Personalizadas</option>
<option>Moleskines</option>
<option>Wobblers / PDV</option>
<option>Outros</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-white text-stone-900 font-medium py-3 rounded-xl mt-4 hover:bg-orange-50 transition-colors flex items-center justify-center gap-2">
                                Solicitar Orçamento
                            </button>
</form>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-stone-200 pt-8 gap-4">
<div className="flex items-center gap-2">
<span className="font-medium text-lg tracking-tighter text-stone-900">Wandemberg</span>
<span className="text-stone-400 text-sm">© 2024</span>
</div>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-orange-500 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-orange-500 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-pink-500 transition-colors" href="#">
<iconify-icon icon="solar:whatsapp-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
