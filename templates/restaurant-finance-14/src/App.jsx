import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
darkMode: 'class',
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Theme Toggle Logic
            const themeToggleBtn = document.getElementById('theme-toggle');
            const htmlElement = document.documentElement;
            
            themeToggleBtn.addEventListener('click', () => {
                htmlElement.classList.toggle('dark');
            });

            // Scroll Reveal Observer
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((elem) => {
                observer.observe(elem);
            });

            // Auth Modals Logic
            const authModal = document.getElementById('auth-modal');
            const authBackdrop = document.getElementById('auth-backdrop');
            const loginPanel = document.getElementById('login-panel');
            const signupPanel = document.getElementById('signup-panel');
            const closeBtns = document.querySelectorAll('.close-modal');
            
            const triggerLogins = document.querySelectorAll('.trigger-login');
            const triggerSignups = document.querySelectorAll('.trigger-signup');
            const switchToSignup = document.getElementById('switch-to-signup');
            const switchToLogin = document.getElementById('switch-to-login');

            function openModal(panelToShow) {
                authModal.classList.remove('hidden');
                authModal.classList.add('flex');
                document.body.style.overflow = 'hidden';
                
                loginPanel.classList.add('hidden');
                loginPanel.classList.remove('block');
                signupPanel.classList.add('hidden');
                signupPanel.classList.remove('block');
                
                panelToShow.classList.remove('hidden');
                panelToShow.classList.add('block');
                
                // Trigger animation
                setTimeout(() => {
                    authBackdrop.classList.remove('opacity-0');
                    authBackdrop.classList.add('opacity-100');
                    panelToShow.classList.remove('opacity-0', 'scale-95');
                    panelToShow.classList.add('opacity-100', 'scale-100');
                }, 10);
            }

            function closeModal() {
                authBackdrop.classList.remove('opacity-100');
                authBackdrop.classList.add('opacity-0');
                
                [loginPanel, signupPanel].forEach(panel => {
                    panel.classList.remove('opacity-100', 'scale-100');
                    panel.classList.add('opacity-0', 'scale-95');
                });
                
                setTimeout(() => {
                    authModal.classList.add('hidden');
                    authModal.classList.remove('flex');
                    document.body.style.overflow = '';
                }, 300);
            }

            triggerLogins.forEach(btn => btn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(loginPanel);
            }));

            triggerSignups.forEach(btn => btn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(signupPanel);
            }));
            
            switchToSignup.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(signupPanel);
            });
            
            switchToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(loginPanel);
            });
            
            closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
            authBackdrop.addEventListener('click', closeModal);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="glow-bg"></div>
<div className="absolute inset-0 bg-grid z-[-1] h-[80vh]"></div>

<header className="fixed top-0 w-full z-40 glass-nav border-b border-stone-200/60 dark:border-stone-800/40">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
<div className="flex items-center gap-2 text-orange-500 relative z-10">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-base font-medium tracking-tight text-stone-900 dark:text-stone-100">ARKA</span>
</div>
<nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm text-stone-500 dark:text-stone-400">
<a className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#recursos">Recursos</a>
<a className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#solucoes">Soluções</a>
<a className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#precos">Preços</a>
</nav>
<div className="flex items-center gap-4 relative z-10">

<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-stone-200 dark:bg-stone-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 dark:focus:ring-offset-stone-950 border border-stone-300/50 dark:border-stone-700/50" id="theme-toggle">
<span className="sr-only">Toggle dark mode</span>
<span className="inline-block h-4 w-4 transform rounded-full bg-white dark:bg-stone-950 transition-transform translate-x-1 dark:translate-x-6 flex items-center justify-center shadow-sm">
<iconify-icon className="text-orange-500 block dark:hidden" icon="solar:sun-linear" strokeWidth="1.5" width="10"></iconify-icon>
<iconify-icon className="text-stone-400 hidden dark:block" icon="solar:moon-linear" strokeWidth="1.5" width="10"></iconify-icon>
</span>
</button>
<button className="trigger-login hidden sm:block text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Entrar</button>
<button className="trigger-signup px-4 py-2 rounded-lg text-sm bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-white transition-all shadow-sm dark:shadow-none">
                    Começar grátis
                </button>
</div>
</div>
</header>

<section className="pt-32 pb-12 md:pt-48 md:pb-16 px-6 relative">
<div className="max-w-4xl mx-auto text-center space-y-8 relative">
<div className="animate-fade-in-up relative z-10">
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-orange-100/50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 border border-orange-200/50 dark:border-orange-900/30 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                    Novo Simulador de Margem e Preços
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="relative w-full flex justify-center py-4">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] pointer-events-none opacity-80 dark:opacity-100 z-0">
<svg className="w-full h-full" viewbox="0 0 1000 400">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="trailGrad" x1="0" x2="-100" y1="0" y2="0">
<stop offset="0%" stop-color="#f97316" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#f97316" stop-opacity="0"></stop>
</lineargradient>
<filter height="200%" id="glow" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="6"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
<radialgradient cx="30%" cy="30%" id="coinGrad" r="70%">
<stop offset="0%" stop-color="#fed7aa"></stop>
<stop offset="50%" stop-color="#f97316"></stop>
<stop offset="100%" stop-color="#9a3412"></stop>
</radialgradient>
</defs>
<g transform="rotate(-6 500 200)">

<path d="M 150,200 A 350,110 0 1,1 850,200 A 350,110 0 1,1 150,200" fill="none" id="orbit1" stroke="#f97316" stroke-dasharray="4 6" stroke-opacity="0.1" strokeWidth="1"></path>
<path d="M 100,200 A 400,130 0 1,1 900,200 A 400,130 0 1,1 100,200" fill="none" id="orbit2" stroke="#f97316" stroke-dasharray="2 8" stroke-opacity="0.05" strokeWidth="1"></path>

<g filter="url(#glow)">
<animatemotion dur="10s" repeatcount="indefinite" rotate="auto">
<mpath href="#orbit1"></mpath>
</animatemotion>
<path d="M 0,-3 L -60,0 L 0,3 Z" fill="url(#trailGrad)"></path>
<circle cx="0" cy="0" fill="url(#coinGrad)" r="8"></circle>
<circle cx="0" cy="0" fill="none" r="4" stroke="#fff" stroke-opacity="0.4" strokeWidth="1"></circle>
</g>

<g filter="url(#glow)">
<animatemotion begin="-5s" dur="14s" repeatcount="indefinite" rotate="auto">
<mpath href="#orbit2"></mpath>
</animatemotion>
<path d="M 0,-4 L -80,0 L 0,4 Z" fill="url(#trailGrad)"></path>
<circle cx="0" cy="0" fill="url(#coinGrad)" r="10"></circle>
<circle cx="0" cy="0" fill="none" r="6" stroke="#fff" stroke-opacity="0.5" strokeWidth="1.5"></circle>
<path d="M -3,0 L 3,0 M 0,-3 L 0,3" opacity="0.6" stroke="#fff" strokeWidth="1"></path>
</g>

<g filter="url(#glow)">
<animatemotion begin="-2s" dur="12s" repeatcount="indefinite" rotate="auto">
<mpath href="#orbit1"></mpath>
</animatemotion>
<path d="M 0,-2.5 L -50,0 L 0,2.5 Z" fill="url(#trailGrad)"></path>
<circle cx="0" cy="0" fill="url(#coinGrad)" r="6"></circle>
<circle cx="0" cy="0" fill="none" r="3" stroke="#fff" stroke-opacity="0.4" strokeWidth="1"></circle>
</g>
</g>
</svg>
</div>
<h1 className="relative z-10 text-4xl md:text-6xl font-medium tracking-tight text-stone-900 dark:text-stone-100 leading-[1.15] animate-fade-in-up animate-delay-1">
                    Inteligência financeira para <br className="hidden md:block"/> restaurantes que querem crescer.
                </h1>
</div>
<p className="relative z-10 text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up animate-delay-2">
                Esqueça as planilhas complexas. O ARKA unifica seu DRE, controle de estoque, ordens de compra e vendas em um único dashboard intuitivo.
            </p>
<div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up animate-delay-3">
<button className="trigger-signup w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-medium bg-orange-500 text-white dark:text-stone-950 hover:bg-orange-600 dark:hover:bg-orange-400 transition-all shadow-[0_4px_24px_-8px_rgba(249,115,22,0.5)] flex items-center justify-center gap-2">
                    Começar 14 dias grátis
                    <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm bg-white dark:bg-stone-900/50 border border-stone-200/80 dark:border-stone-800/80 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-all shadow-sm dark:shadow-none flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Ver sistema na prática
                </button>
</div>

<div className="relative z-10 pt-10 flex flex-col items-center gap-3 opacity-80 animate-fade-in-up animate-delay-4">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-stone-50 dark:border-stone-950 object-cover" src="https://i.pravatar.cc/100?img=33"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-stone-50 dark:border-stone-950 object-cover" src="https://i.pravatar.cc/100?img=47"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-stone-50 dark:border-stone-950 object-cover" src="https://i.pravatar.cc/100?img=12"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-stone-50 dark:border-stone-950 object-cover" src="https://i.pravatar.cc/100?img=68"/>
<div className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-950 bg-stone-100 dark:bg-stone-800/80 flex items-center justify-center text-xs text-stone-600 dark:text-stone-300">+500</div>
</div>
<p className="text-xs text-stone-500">Aprovado por mais de 500 donos de restaurantes no Brasil</p>
</div>
</div>
</section>

<section className="px-6 pb-16 md:pb-24 relative z-10 animate-fade-in-up animate-delay-4">
<div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-14">

<div className="w-full sm:w-[340px] flex flex-col gap-4">
<div className="text-center">
<span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">Sincronização ao vivo</span>
</div>
<div className="relative h-28 w-full text-left">

<div className="absolute top-1/2 -translate-y-1/2 w-full bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 rounded-2xl p-4 shadow-[0_24px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_40px_-12px_rgba(0,0,0,0.5)] flex items-center gap-3.5 animate-notification-1 opacity-0">
<div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-500 shrink-0">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="text-left flex-1">
<div className="text-[11px] text-stone-500 mb-0.5">Novo Pedido • Agora</div>
<div className="text-sm font-medium text-stone-900 dark:text-stone-100 tracking-tight">Combo Família</div>
</div>
<div className="text-sm font-medium text-emerald-600 dark:text-emerald-500">+R$ 89</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 w-full bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 rounded-2xl p-4 shadow-[0_24px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_40px_-12px_rgba(0,0,0,0.5)] flex items-center gap-3.5 animate-notification-2 opacity-0">
<div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-500 shrink-0">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="text-left flex-1">
<div className="text-[11px] text-stone-500 mb-0.5">Novo Pedido • iFood</div>
<div className="text-sm font-medium text-stone-900 dark:text-stone-100 tracking-tight">2x Pizza G</div>
</div>
<div className="text-sm font-medium text-emerald-600 dark:text-emerald-500">+R$ 145</div>
</div>
</div>
</div>

<div className="w-full sm:w-[340px] flex flex-col gap-4">
<div className="text-center">
<span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">Margem atualizada</span>
</div>
<div className="text-left animate-float" style={{animationDelay: '1s'}}>
<div className="bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 rounded-2xl p-5 shadow-[0_24px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_40px_-12px_rgba(0,0,0,0.5)] overflow-hidden relative">
<div className="flex items-center gap-2 mb-3 relative z-20">
<div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-500">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-900 dark:text-stone-100">Lucro Líquido</span>
</div>
<div className="flex items-end gap-2 mb-3 relative z-20">
<span className="text-3xl font-medium text-stone-900 dark:text-stone-100 tracking-tight">24.5%</span>
<span className="text-xs font-medium text-emerald-600 dark:text-emerald-500 mb-1.5 flex items-center gap-0.5"><iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon> Recorde</span>
</div>

<div className="h-16 w-full relative mt-4 z-10">
<div className="absolute inset-0 flex flex-col justify-between opacity-20">
<div className="w-full h-px bg-stone-300 dark:bg-stone-700"></div>
<div className="w-full h-px bg-stone-300 dark:bg-stone-700"></div>
<div className="w-full h-px bg-stone-300 dark:bg-stone-700"></div>
<div className="w-full h-px bg-stone-300 dark:bg-stone-700"></div>
</div>
<svg className="absolute inset-0 w-full h-full overflow-visible animate-reveal-up" viewbox="0 0 100 40">
<defs>
<lineargradient id="chartAreaGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,35 C20,35 30,25 45,28 C60,30 75,10 100,5 L100,40 L0,40 Z" fill="url(#chartAreaGrad)"></path>

<path d="M0,35 C20,35 30,25 45,28 C60,30 75,10 100,5" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="2"></path>

<circle cx="100" cy="5" fill="#fff" r="3" stroke="#10b981" strokeWidth="2"></circle>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 pb-24 max-w-6xl mx-auto reveal delay-200">
<div className="relative rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-[#0a0a0a] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)] overflow-hidden animate-float">

<div className="h-12 border-b border-stone-200/60 dark:border-stone-800/60 bg-stone-50/50 dark:bg-stone-950/50 flex items-center justify-between px-4">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-800"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800/60 text-xs text-stone-500/80 dark:text-stone-500">
<iconify-icon icon="solar:lock-linear" strokeWidth="1.5" width="12"></iconify-icon>
                    app.arka.com.br/dashboard
                </div>
<div className="w-12"></div>
</div>

<div className="flex h-[400px] md:h-[500px] bg-white dark:bg-stone-950 text-left">

<div className="w-56 border-r border-stone-200/60 dark:border-stone-800/60 bg-stone-50/30 dark:bg-stone-950/30 p-4 hidden md:flex flex-col gap-1">
<div className="flex items-center gap-2 px-3 py-2 text-stone-900 dark:text-stone-200 bg-stone-100/80 dark:bg-stone-900/80 rounded-lg mb-4 cursor-pointer hover:bg-stone-200/80 dark:hover:bg-stone-800 transition-colors">
<div className="w-6 h-6 rounded flex items-center justify-center bg-orange-500 text-white dark:text-stone-950 font-medium text-xs">LB</div>
<span className="text-xs">La Bella Pizza</span>
<iconify-icon className="ml-auto text-stone-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div className="px-3 py-2 text-sm text-stone-900 dark:text-stone-200 bg-white dark:bg-stone-900/50 rounded-lg flex items-center gap-3 border border-stone-200/60 dark:border-stone-800/40 shadow-sm dark:shadow-none cursor-pointer">
<iconify-icon className="text-orange-500" icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="18"></iconify-icon> Dashboard
                    </div>
<div className="px-3 py-2 text-sm text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-300 flex items-center gap-3 cursor-pointer transition-colors">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon> DRE Gerencial
                    </div>
<div className="px-3 py-2 text-sm text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-300 flex items-center gap-3 cursor-pointer transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon> Estoque
                    </div>
<div className="px-3 py-2 text-sm text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-300 flex items-center gap-3 cursor-pointer transition-colors">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="18"></iconify-icon> Integrações Delivery
                    </div>
</div>

<div className="flex-1 p-6 md:p-8 overflow-hidden bg-white/50 dark:bg-transparent">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-xl font-medium text-stone-900 dark:text-stone-100 tracking-tight">Visão Geral</h2>
<p className="text-xs text-stone-500 mt-1">Acompanhamento financeiro de Novembro de 2024</p>
</div>
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs bg-white dark:bg-stone-900/50 border border-stone-200/80 dark:border-stone-800/80 text-stone-600 dark:text-stone-300 shadow-sm dark:shadow-none hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="14"></iconify-icon>
                            Este mês
                        </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
<div className="p-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-stone-200/80 dark:border-stone-800/60 shadow-sm dark:shadow-none hover:-translate-y-1 transition-transform duration-300">
<div className="text-xs text-stone-500 mb-1.5 flex justify-between items-center">Receita Bruta <iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="14"></iconify-icon></div>
<div className="text-2xl font-medium text-stone-900 dark:text-stone-100 tracking-tight">R$ 142.500,00</div>
<div className="text-xs text-emerald-600 dark:text-emerald-500 mt-2 flex items-center gap-1"><iconify-icon icon="solar:trend-up-linear" strokeWidth="1.5" width="12"></iconify-icon> +12.5% vs último mês</div>
</div>
<div className="p-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-stone-200/80 dark:border-stone-800/60 shadow-sm dark:shadow-none hover:-translate-y-1 transition-transform duration-300">
<div className="text-xs text-stone-500 mb-1.5 flex justify-between items-center">CMV Total <iconify-icon icon="solar:cart-linear" strokeWidth="1.5" width="14"></iconify-icon></div>
<div className="text-2xl font-medium text-stone-900 dark:text-stone-100 tracking-tight">31,2%</div>
<div className="text-xs text-emerald-600 dark:text-emerald-500 mt-2 flex items-center gap-1"><iconify-icon icon="solar:trend-down-linear" strokeWidth="1.5" width="12"></iconify-icon> -2.1% (Dentro da meta)</div>
</div>
<div className="p-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-orange-200/60 dark:border-stone-800/60 shadow-sm dark:shadow-none relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent dark:from-orange-500/5 dark:to-transparent opacity-100 group-hover:opacity-70 transition-opacity"></div>
<div className="relative z-10 text-xs text-orange-600/80 dark:text-orange-200/50 mb-1.5 flex justify-between items-center">Lucro Líquido <iconify-icon className="text-orange-500" icon="solar:chart-square-linear" strokeWidth="1.5" width="14"></iconify-icon></div>
<div className="relative z-10 text-2xl font-medium text-orange-600 dark:text-orange-500 tracking-tight">R$ 25.650,00</div>
<div className="relative z-10 text-xs text-orange-600 dark:text-orange-400 mt-2 flex items-center gap-1">Margem final: 18%</div>
</div>
</div>

<div className="p-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-stone-200/80 dark:border-stone-800/60 shadow-sm dark:shadow-none h-48 flex flex-col justify-end gap-2 relative">
<div className="absolute top-4 left-4 text-xs text-stone-500">Evolução de Receitas x Custos</div>
<div className="flex items-end gap-2.5 h-32 w-full pt-4">

<div className="w-full bg-stone-100/80 dark:bg-stone-800/40 rounded-sm h-[40%] relative hover:bg-stone-200 dark:hover:bg-stone-800/80 transition-colors overflow-hidden"><div className="absolute bottom-0 w-full bg-orange-500/90 h-[60%] animate-grow-y" style={{animationDelay: '0.1s'}}></div></div>
<div className="w-full bg-stone-100/80 dark:bg-stone-800/40 rounded-sm h-[50%] relative hover:bg-stone-200 dark:hover:bg-stone-800/80 transition-colors overflow-hidden"><div className="absolute bottom-0 w-full bg-orange-500/90 h-[65%] animate-grow-y" style={{animationDelay: '0.2s'}}></div></div>
<div className="w-full bg-stone-100/80 dark:bg-stone-800/40 rounded-sm h-[45%] relative hover:bg-stone-200 dark:hover:bg-stone-800/80 transition-colors overflow-hidden"><div className="absolute bottom-0 w-full bg-orange-500/90 h-[55%] animate-grow-y" style={{animationDelay: '0.3s'}}></div></div>
<div className="w-full bg-stone-100/80 dark:bg-stone-800/40 rounded-sm h-[70%] relative hover:bg-stone-200 dark:hover:bg-stone-800/80 transition-colors overflow-hidden"><div className="absolute bottom-0 w-full bg-orange-500/90 h-[40%] animate-grow-y" style={{animationDelay: '0.4s'}}></div></div>
<div className="w-full bg-stone-100/80 dark:bg-stone-800/40 rounded-sm h-[85%] relative hover:bg-stone-200 dark:hover:bg-stone-800/80 transition-colors overflow-hidden"><div className="absolute bottom-0 w-full bg-orange-500/90 h-[35%] animate-grow-y" style={{animationDelay: '0.5s'}}></div></div>
<div className="w-full bg-stone-100/80 dark:bg-stone-800/40 rounded-sm h-[95%] relative hover:bg-stone-200 dark:hover:bg-stone-800/80 transition-colors overflow-hidden"><div className="absolute bottom-0 w-full bg-orange-500/90 h-[32%] animate-grow-y" style={{animationDelay: '0.6s'}}></div></div>
</div>
<div className="flex justify-between text-xs text-stone-400 dark:text-stone-500 mt-2 px-1">
<span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-stone-50/50 via-stone-50/5 dark:from-[#050505]/80 dark:via-[#050505]/10 to-transparent pointer-events-none"></div>
</div>
</section>

<section className="py-24 bg-stone-50/50 dark:bg-black border-y border-stone-200/60 dark:border-stone-900/60 transition-colors duration-300" id="recursos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100">Controle total da sua operação</h2>
<p className="text-stone-500 mt-4 max-w-2xl mx-auto text-sm font-light">Ferramentas desenhadas especificamente para os desafios diários da gastronomia.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white dark:bg-[#0a0a0a] border border-stone-200/80 dark:border-stone-800/60 rounded-2xl p-8 hover:border-stone-300 dark:hover:border-stone-700/80 transition-all duration-300 group relative overflow-hidden flex flex-col md:flex-row gap-8 items-center shadow-sm dark:shadow-none reveal delay-100">
<div className="flex-1 relative z-10">
<div className="w-10 h-10 rounded-xl bg-orange-50/80 dark:bg-orange-950/20 flex items-center justify-center text-orange-500 border border-orange-100 dark:border-orange-900/20 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 dark:text-stone-100 mb-3 tracking-tight">DRE Gerencial Automatizado</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">
                            Visualize receitas, custos e lucro líquido em tempo real. Entenda exatamente para onde seu dinheiro está indo sem precisar preencher planilhas.
                        </p>
<ul className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Integração de Vendas</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Categorização Automática</li>
</ul>
</div>

<div className="w-full md:w-[300px] bg-stone-50/50 dark:bg-[#0c0a09] border border-stone-200/80 dark:border-stone-800/80 rounded-xl p-5 shadow-xl shadow-stone-200/20 dark:shadow-2xl dark:shadow-black/50 shrink-0 group-hover:shadow-stone-200/40 group-hover:-translate-y-1 transition-all duration-300">
<div className="text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-4 font-medium">Resumo DRE - Outubro</div>
<div className="space-y-2.5 text-xs">
<div className="flex justify-between items-center pb-2 border-b border-stone-200/60 dark:border-stone-800/50">
<span className="text-stone-600 dark:text-stone-400">Receita Bruta</span>
<span className="text-stone-900 dark:text-stone-200">R$ 98.400</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-stone-200/60 dark:border-stone-800/50">
<span className="text-stone-500 pl-2">(-) Impostos</span>
<span className="text-stone-500">- R$ 5.904</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-stone-200/60 dark:border-stone-800/50">
<span className="text-stone-500 pl-2">(-) CMV</span>
<span className="text-red-500/90 dark:text-red-400/80">- R$ 31.488</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-stone-200/60 dark:border-stone-800/50">
<span className="text-stone-600 dark:text-stone-400">Lucro Bruto</span>
<span className="text-stone-900 dark:text-stone-200">R$ 61.008</span>
</div>
<div className="flex justify-between items-center py-2 mt-3 bg-emerald-50/50 dark:bg-emerald-950/10 rounded px-2.5 border border-emerald-100/50 dark:border-emerald-900/20">
<span className="text-emerald-600 dark:text-emerald-500/90">Lucro Líquido</span>
<span className="text-emerald-600 dark:text-emerald-500">R$ 18.696</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 bg-white dark:bg-[#0a0a0a] border border-stone-200/80 dark:border-stone-800/60 rounded-2xl p-8 hover:border-stone-300 dark:hover:border-stone-700/80 transition-all duration-300 group flex flex-col shadow-sm dark:shadow-none reveal delay-200">
<div className="w-10 h-10 rounded-xl bg-stone-50 dark:bg-stone-900/50 flex items-center justify-center text-stone-500 border border-stone-200/80 dark:border-stone-800/80 mb-6 group-hover:text-stone-900 dark:group-hover:text-stone-200 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 dark:text-stone-100 mb-3 tracking-tight">Estoque Inteligente</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                        Controle inventário, giro de produtos e ordens de compra. Receba alertas quando insumos críticos atingirem o estoque mínimo.
                    </p>
</div>

<div className="md:col-span-1 bg-white dark:bg-[#0a0a0a] border border-stone-200/80 dark:border-stone-800/60 rounded-2xl p-8 hover:border-stone-300 dark:hover:border-stone-700/80 transition-all duration-300 group relative overflow-hidden flex flex-col shadow-sm dark:shadow-none reveal delay-100">
<div className="w-10 h-10 rounded-xl bg-stone-50 dark:bg-stone-900/50 flex items-center justify-center text-stone-500 border border-stone-200/80 dark:border-stone-800/80 mb-6 group-hover:text-stone-900 dark:group-hover:text-stone-200 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:calculator-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 dark:text-stone-100 mb-3 tracking-tight">Simulador de Margem</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">
                        Crie fichas técnicas e simule preços de venda com base nos custos dos ingredientes para garantir lucro.
                    </p>

<div className="bg-stone-50/50 dark:bg-black/50 border border-stone-200/80 dark:border-stone-800/60 rounded-xl p-4 text-xs mt-auto group-hover:-translate-y-1 transition-transform duration-300">
<div className="text-stone-800 dark:text-stone-200 mb-3">Risoto de Funghi</div>
<div className="flex justify-between mb-1.5"><span className="text-stone-500">Custo Total:</span> <span className="text-stone-700 dark:text-stone-300">R$ 16,50</span></div>
<div className="flex justify-between mb-3"><span className="text-stone-500">Preço Venda:</span> <span className="text-stone-700 dark:text-stone-300">R$ 54,00</span></div>
<div className="w-full bg-stone-200/80 dark:bg-stone-800/60 rounded-full h-1.5 mb-1.5 overflow-hidden">
<div className="bg-orange-500 h-1.5 rounded-full" style={{width: '69%'}}></div>
</div>
<div className="text-right text-[10px] text-orange-600 dark:text-orange-500">Margem: 69%</div>
</div>
</div>

<div className="md:col-span-2 bg-white dark:bg-[#0a0a0a] border border-stone-200/80 dark:border-stone-800/60 rounded-2xl p-8 hover:border-stone-300 dark:hover:border-stone-700/80 transition-all duration-300 group relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-sm dark:shadow-none reveal delay-200">
<div className="flex-1 relative z-10">
<div className="w-10 h-10 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/20 flex items-center justify-center text-emerald-600 dark:text-emerald-500 border border-emerald-100 dark:border-emerald-900/20 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 dark:text-stone-100 mb-3 tracking-tight">Lucro real em cada pedido</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">
                            Integração nativa com <span className="text-stone-800 dark:text-stone-300">iFood</span>, <span className="text-stone-800 dark:text-stone-300">KeeTa</span> e <span className="text-stone-800 dark:text-stone-300">99</span>. Veja a margem exata assim que o pedido cai no seu sistema, descontando automaticamente as taxas do aplicativo, embalagem e CMV.
                        </p>
<div className="flex items-center gap-2">
<span className="px-3 py-1.5 rounded-lg bg-stone-50 dark:bg-stone-900/50 border border-stone-200/80 dark:border-stone-800/80 text-xs text-stone-600 dark:text-stone-400">iFood</span>
<span className="px-3 py-1.5 rounded-lg bg-stone-50 dark:bg-stone-900/50 border border-stone-200/80 dark:border-stone-800/80 text-xs text-stone-600 dark:text-stone-400">KeeTa</span>
<span className="px-3 py-1.5 rounded-lg bg-stone-50 dark:bg-stone-900/50 border border-stone-200/80 dark:border-stone-800/80 text-xs text-stone-600 dark:text-stone-400">99</span>
</div>
</div>

<div className="w-full md:w-[300px] flex flex-col gap-3 relative z-10 shrink-0 group-hover:-translate-y-1 transition-transform duration-300">
<div className="bg-stone-50/50 dark:bg-[#0c0a09] border border-stone-200/80 dark:border-stone-800/80 rounded-xl p-5 shadow-xl shadow-stone-200/20 dark:shadow-2xl dark:shadow-black/50 relative overflow-hidden group-hover:border-emerald-200/50 dark:group-hover:border-emerald-900/30 transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/80"></div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-stone-800 dark:text-stone-300">Novo Pedido - iFood</span>
</div>
<span className="text-[10px] text-stone-400">Agora</span>
</div>
<div className="text-xs text-stone-600 dark:text-stone-400 mb-3 pb-3 border-b border-stone-200/60 dark:border-stone-800/50">#4092 - Combo Hambúrguer</div>
<div className="space-y-2.5 text-xs">
<div className="flex justify-between"><span className="text-stone-500">Valor Bruto</span><span className="text-stone-700 dark:text-stone-300">R$ 54,90</span></div>
<div className="flex justify-between"><span className="text-stone-500">Taxa App (12%)</span><span className="text-stone-400 dark:text-stone-500">- R$ 6,58</span></div>
<div className="flex justify-between"><span className="text-stone-500">CMV + Embalagem</span><span className="text-stone-400 dark:text-stone-500">- R$ 16,40</span></div>
</div>
<div className="mt-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/50 flex justify-between items-center">
<span className="text-xs text-emerald-600 dark:text-emerald-500/90">Lucro Real</span>
<div className="text-right">
<span className="text-sm text-emerald-600 dark:text-emerald-400 block mb-0.5">R$ 31,92</span>
<span className="text-[10px] text-emerald-600/70 dark:text-emerald-500/60">Margem: 58%</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 bg-white dark:bg-[#0a0a0a] border border-stone-200/80 dark:border-stone-800/60 rounded-2xl p-8 hover:border-stone-300 dark:hover:border-stone-700/80 transition-all duration-300 group flex flex-col md:flex-row items-center gap-8 shadow-sm dark:shadow-none reveal delay-100">
<div className="flex-1">
<div className="w-10 h-10 rounded-xl bg-stone-50 dark:bg-stone-900/50 flex items-center justify-center text-stone-500 border border-stone-200/80 dark:border-stone-800/80 mb-6 group-hover:text-stone-900 dark:group-hover:text-stone-200 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 dark:text-stone-100 mb-3 tracking-tight">Múltiplas Unidades</h3>
<p className="text-sm text-stone-500 leading-relaxed max-w-2xl font-light">
                            Gerencie matriz e filiais na mesma conta. Alterne entre os painéis com um clique ou consolide os resultados para uma visão macro do seu grupo gastronômico.
                        </p>
</div>
<div className="flex-shrink-0 w-full md:w-48 flex justify-center group-hover:scale-105 transition-transform duration-500">
<div className="relative w-32 h-32">
<div className="absolute inset-0 bg-stone-100 dark:bg-stone-900 rounded-full animate-pulse opacity-50 dark:opacity-30"></div>
<div className="absolute inset-4 bg-white dark:bg-[#0a0a0a] rounded-full flex items-center justify-center border border-stone-200/80 dark:border-stone-800/80">
<iconify-icon className="text-stone-400 dark:text-stone-600" icon="solar:shop-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="absolute -top-1 -right-1 w-10 h-10 bg-orange-100/90 dark:bg-orange-950/80 border border-orange-200/50 dark:border-orange-900/50 rounded-full flex items-center justify-center backdrop-blur-sm">
<span className="text-xs text-orange-600 dark:text-orange-500">+3</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="precos">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100">Planos simples e transparentes</h2>
<p className="text-stone-500 mt-4 max-w-xl mx-auto text-sm font-light">Escolha o plano ideal para o tamanho da sua fome de crescimento.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="border border-stone-200/80 dark:border-stone-800/80 rounded-3xl p-8 bg-white dark:bg-[#0a0a0a] flex flex-col hover:border-stone-300 dark:hover:border-stone-700/80 transition-all duration-300 shadow-sm dark:shadow-none reveal delay-100 hover:-translate-y-1">
<h3 className="text-xl font-medium text-stone-900 dark:text-stone-100 mb-2">Básico</h3>
<p className="text-sm text-stone-500 mb-8 font-light">Para restaurantes iniciantes e operações enxutas.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100">R$ 149</span>
<span className="text-sm text-stone-500">/mês</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-stone-600 dark:text-stone-400">
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 dark:text-stone-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Gestão de 1 Unidade
                    </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 dark:text-stone-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        DRE e Fluxo de Caixa
                    </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 dark:text-stone-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Controle de Estoque (Até 200 itens)
                    </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 dark:text-stone-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Suporte por e-mail
                    </li>
</ul>
<button className="trigger-signup w-full py-3 rounded-lg text-sm border border-stone-200/80 dark:border-stone-800/80 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors text-center">
                    Começar teste grátis
                </button>
</div>

<div className="border border-orange-200/60 dark:border-orange-500/30 rounded-3xl p-8 bg-gradient-to-b from-orange-50/30 to-white dark:from-orange-950/10 dark:to-[#0a0a0a] flex flex-col relative shadow-[0_8px_40px_-12px_rgba(249,115,22,0.15)] dark:shadow-[0_8px_40px_-12px_rgba(249,115,22,0.1)] reveal delay-200 hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-orange-500 text-white dark:text-stone-950">
                    Mais popular
                </div>
<h3 className="text-xl font-medium text-stone-900 dark:text-stone-100 mb-2">Profissional</h3>
<p className="text-sm text-stone-500 mb-8 font-light">Para operações que precisam de controle total.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100">R$ 299</span>
<span className="text-sm text-stone-500">/mês</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-stone-700 dark:text-stone-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Gestão de até 3 Unidades
                    </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        DRE Avançado e Centros de Custo
                    </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Integração iFood, KeeTa e 99
                    </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Estoque Ilimitado &amp; Ordens de Compra
                    </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Suporte prioritário via WhatsApp
                    </li>
</ul>
<button className="trigger-signup w-full py-3 rounded-lg text-sm bg-orange-500 text-white dark:text-stone-950 hover:bg-orange-600 dark:hover:bg-orange-400 transition-colors text-center shadow-[0_4px_14px_0_rgba(249,115,22,0.39)]">
                    Assinar Profissional
                </button>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-200/60 dark:border-stone-900/60 relative overflow-hidden bg-white/30 dark:bg-transparent reveal">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-orange-500/10 dark:bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-6">Pronto para assumir o controle do seu negócio?</h2>
<p className="text-stone-500 text-sm mb-8 font-light">Junte-se a centenas de restaurantes que já otimizaram seus lucros com o ARKA. A configuração leva menos de 5 minutos.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="trigger-signup w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-white transition-colors shadow-sm dark:shadow-none">
                    Criar conta gratuitamente
                </button>
<p className="text-[10px] text-stone-500 sm:hidden mt-2">Não exigimos cartão de crédito.</p>
</div>
<p className="hidden sm:block text-[10px] text-stone-500 mt-6 uppercase tracking-widest">Teste de 14 dias grátis. Não exigimos cartão de crédito.</p>
</div>
</section>

<footer className="border-t border-stone-200/60 dark:border-stone-900/60 bg-stone-50/50 dark:bg-[#050505] pt-16 pb-8 px-6 transition-colors duration-300 reveal">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 text-stone-400 dark:text-stone-500 mb-4">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-stone-900 dark:text-stone-300">ARKA</span>
</div>
<p className="text-xs text-stone-500 font-light leading-relaxed">Sistema financeiro e gerencial desenvolvido exclusivamente para o mercado gastronômico.</p>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 dark:text-stone-200 mb-4 tracking-wider">Produto</h4>
<ul className="space-y-3 text-xs text-stone-500">
<li><a className="hover:text-stone-900 dark:hover:text-stone-300 transition-colors" href="#">Recursos</a></li>
<li><a className="hover:text-stone-900 dark:hover:text-stone-300 transition-colors" href="#">Integrações</a></li>
<li><a className="hover:text-stone-900 dark:hover:text-stone-300 transition-colors" href="#">Preços</a></li>
<li><a className="hover:text-stone-900 dark:hover:text-stone-300 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 dark:text-stone-200 mb-4 tracking-wider">Empresa</h4>
<ul className="space-y-3 text-xs text-stone-500">
<li><a className="hover:text-stone-900 dark:hover:text-stone-300 transition-colors" href="#">Sobre nós</a></li>
<li><a className="hover:text-stone-900 dark:hover:text-stone-300 transition-colors" href="#">Contato</a></li>
<li><a className="hover:text-stone-900 dark:hover:text-stone-300 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 dark:text-stone-200 mb-4 tracking-wider">Legal</h4>
<ul className="space-y-3 text-xs text-stone-500">
<li><a className="hover:text-stone-900 dark:hover:text-stone-300 transition-colors" href="#">Termos de Uso</a></li>
<li><a className="hover:text-stone-900 dark:hover:text-stone-300 transition-colors" href="#">Privacidade</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-stone-200/60 dark:border-stone-800/40 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-stone-500 uppercase tracking-widest">© 2024 ARKA Ltda. Todos os direitos reservados.</p>
<div className="flex items-center gap-4 text-stone-400 dark:text-stone-600">
<a className="hover:text-stone-600 dark:hover:text-stone-400 transition-colors" href="#"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon></a>
<a className="hover:text-stone-600 dark:hover:text-stone-400 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="16"></iconify-icon></a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-12 h-12 bg-emerald-500 text-white dark:text-stone-950 rounded-full flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(16,185,129,0.5)] hover:scale-110 transition-transform duration-300 z-50" href="#">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>

<div className="fixed inset-0 z-[100] hidden items-center justify-center" id="auth-modal">

<div className="absolute inset-0 bg-stone-100/80 dark:bg-[#050505]/80 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="auth-backdrop"></div>

<div className="hidden relative w-full max-w-sm bg-white dark:bg-[#0a0a0a] border border-stone-200/80 dark:border-stone-800/80 rounded-2xl p-8 shadow-2xl opacity-0 scale-95 transition-all duration-300 mx-4" id="login-panel">
<button className="close-modal absolute top-4 right-4 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="flex items-center justify-center gap-2 text-orange-500 mb-6">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 dark:text-stone-100 text-center mb-1">Bem-vindo de volta</h3>
<p className="text-xs text-stone-500 text-center mb-6 font-light">Acesse o painel do seu restaurante</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs text-stone-700 dark:text-stone-300 mb-1.5">Email corporativo</label>
<input className="w-full bg-stone-50/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/60 rounded-lg px-3 py-2.5 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-colors" placeholder="seu@email.com" type="email"/>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<label className="block text-xs text-stone-700 dark:text-stone-300">Senha</label>
<a className="text-[10px] text-orange-600 dark:text-orange-500 hover:underline" href="#">Esqueceu?</a>
</div>
<input className="w-full bg-stone-50/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/60 rounded-lg px-3 py-2.5 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-colors" placeholder="••••••••" type="password"/>
</div>
<button className="w-full bg-stone-900 text-white dark:bg-white dark:text-stone-900 text-sm py-2.5 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors mt-2 shadow-sm dark:shadow-none" type="submit">Entrar na conta</button>
</form>
<p className="text-[10px] text-stone-500 text-center mt-6">
                Ainda não tem conta? <a className="text-stone-900 dark:text-stone-100 hover:underline" href="#" id="switch-to-signup">Começar grátis</a>
</p>
</div>

<div className="hidden relative w-full max-w-sm bg-white dark:bg-[#0a0a0a] border border-stone-200/80 dark:border-stone-800/80 rounded-2xl p-8 shadow-2xl opacity-0 scale-95 transition-all duration-300 mx-4" id="signup-panel">
<button className="close-modal absolute top-4 right-4 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="flex items-center justify-center gap-2 text-orange-500 mb-6">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 dark:text-stone-100 text-center mb-1">Crie sua conta</h3>
<p className="text-xs text-stone-500 text-center mb-6 font-light">14 dias grátis. Sem cartão de crédito.</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs text-stone-700 dark:text-stone-300 mb-1.5">CNPJ</label>
<input className="w-full bg-stone-50/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/60 rounded-lg px-3 py-2.5 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-colors" placeholder="00.000.000/0000-00" type="text"/>
</div>
<div>
<label className="block text-xs text-stone-700 dark:text-stone-300 mb-1.5">Email corporativo</label>
<input className="w-full bg-stone-50/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/60 rounded-lg px-3 py-2.5 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-colors" placeholder="seu@email.com" type="email"/>
</div>
<div>
<label className="block text-xs text-stone-700 dark:text-stone-300 mb-1.5">Senha</label>
<input className="w-full bg-stone-50/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/60 rounded-lg px-3 py-2.5 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-colors" placeholder="Crie uma senha forte" type="password"/>
</div>
<div>
<label className="block text-xs text-stone-700 dark:text-stone-300 mb-1.5">Confirmar Senha</label>
<input className="w-full bg-stone-50/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/60 rounded-lg px-3 py-2.5 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-colors" placeholder="Confirme sua senha" type="password"/>
</div>
<button className="w-full bg-orange-500 text-white dark:text-stone-950 text-sm py-2.5 rounded-lg hover:bg-orange-600 dark:hover:bg-orange-400 transition-colors mt-2 shadow-[0_4px_14px_0_rgba(249,115,22,0.39)]" type="submit">Criar conta grátis</button>
</form>
<p className="text-[10px] text-stone-500 text-center mt-6">
                Já tem uma conta? <a className="text-stone-900 dark:text-stone-100 hover:underline" href="#" id="switch-to-login">Entrar</a>
</p>
</div>
</div>


    </>
  );
}
