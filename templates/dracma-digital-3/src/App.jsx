import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Smooth countdown logic
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 119);
        
        function updateTimer() {
            const now = new Date();
            const diff = targetDate - now;
            
            if (diff <= 0) return;

            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / 1000 / 60) % 60);
            const s = Math.floor((diff / 1000) % 60);

            document.getElementById('days').innerText = d < 10 ? '0' + d : d;
            document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
            document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
            document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;
        }

        setInterval(updateTimer, 1000);
        updateTimer();

        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.add('open');
                menuBtn.classList.add('bg-white/10');
            } else {
                mobileMenu.classList.remove('open');
                menuBtn.classList.remove('bg-white/10');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-noise"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="glow-orb w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-indigo-900/30 top-[-10%] left-[-10%] animate-pulse" style={{animationDuration: '10s'}}></div>
<div className="glow-orb w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] bg-violet-900/20 bottom-[-10%] right-[-5%] animate-pulse" style={{animationDuration: '15s'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>

<nav className="fixed w-full z-50 top-0">
<div className="absolute inset-0 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="h-20 flex items-center justify-between relative">

<div className="flex items-center gap-3 group cursor-pointer z-20">
<div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-neutral-900 to-neutral-800 border border-white/10 flex items-center justify-center text-violet-400 group-hover:border-violet-500/50 transition-all duration-300">
<iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-white group-hover:text-violet-200 transition-colors">DRACMA</span>
</div>

<div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
<a className="px-5 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#about">Protocolo</a>
<a className="px-5 py-2 rounded-full text-sm font-medium text-white bg-white/10 shadow-sm border border-white/5" href="#presale">Preventa</a>
<a className="px-5 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#tokenomics">Economía</a>
</div>

<div className="flex items-center gap-3 z-20">
<button className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 transition-all text-xs font-bold tracking-wide shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
<iconify-icon icon="solar:wallet-bold-duotone" width="18"></iconify-icon>
                        CONECTAR
                    </button>

<button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition-all" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="lg:hidden border-t border-white/5" id="mobile-menu">
<div className="flex flex-col gap-2 pt-4">
<a className="px-4 py-3 rounded-lg text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-white transition-all flex items-center gap-3" href="#about">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
                        Protocolo
                    </a>
<a className="px-4 py-3 rounded-lg text-sm font-medium text-white bg-white/5 border border-white/5 flex items-center gap-3" href="#presale">
<iconify-icon icon="solar:rocket-linear" width="18"></iconify-icon>
                        Preventa
                    </a>
<a className="px-4 py-3 rounded-lg text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-white transition-all flex items-center gap-3" href="#tokenomics">
<iconify-icon icon="solar:pie-chart-linear" width="18"></iconify-icon>
                        Economía
                    </a>
<button className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black text-sm font-bold tracking-wide sm:hidden">
<iconify-icon icon="solar:wallet-bold-duotone" width="18"></iconify-icon>
                        CONECTAR BILLETERA
                    </button>
</div>
</div>
</div>
</nav>
<main className="flex-grow flex flex-col pt-24 md:pt-32 w-full relative z-10 overflow-hidden">

<section className="max-w-7xl mx-auto px-4 sm:px-6 w-full mb-20 lg:mb-40 pt-6 lg:pt-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="space-y-6 lg:space-y-8 relative z-10 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                        Fase Seed Activa
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-white">
                        Activos Reales.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">Rendimiento Digital.</span>
</h1>
<p className="text-base sm:text-lg text-neutral-400 font-light max-w-lg leading-relaxed border-l-2 border-white/10 pl-6 mx-auto lg:mx-0 text-left">
                        El primer sindicato de inversión descentralizado respaldado por flujo de caja operativo de empresas SaaS y Tech Infrastructure.
                    </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 justify-center lg:justify-start">
<a className="group relative px-8 py-4 bg-white text-black rounded-xl font-semibold text-sm overflow-hidden transition-all hover:scale-[1.02] text-center" href="#presale">
<div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative flex items-center justify-center gap-2">
                                Invertir en Preventa
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
<button className="px-8 py-4 rounded-xl border border-white/10 text-neutral-300 font-medium text-sm hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
                            Documentación
                        </button>
</div>
<div className="pt-4 lg:pt-8 flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3 text-xs font-mono text-neutral-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:shield-check-bold"></iconify-icon>
                            Auditoría SolidProof
                        </div>
<div className="hidden sm:block w-1 h-1 bg-neutral-800 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-violet-500" icon="solar:lock-bold"></iconify-icon>
                            Liquidez Bloqueada 2 Años
                        </div>
</div>
</div>

<div className="relative w-full aspect-square max-w-[400px] lg:max-w-none lg:h-[600px] flex items-center justify-center lg:justify-end mx-auto mt-8 lg:mt-0">
<div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] animate-float">

<div className="absolute inset-0 rounded-full border border-violet-500/10 animate-[spin_30s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-dashed border-white/5 animate-[spin_40s_linear_infinite_reverse]"></div>
<div className="absolute inset-[-40px] rounded-full border border-white/5 opacity-20 transform rotate-45"></div>

<div className="absolute inset-0 m-auto w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-violet-900/50 to-black backdrop-blur-md border border-violet-500/30 shadow-[0_0_50px_-10px_rgba(124,58,237,0.3)] flex items-center justify-center z-20">
<div className="text-white text-3xl sm:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 drop-shadow-lg">
                                RWA
                            </div>
</div>

<div className="absolute top-0 right-[-10px] lg:right-[-20px] glass-panel p-3 lg:p-4 rounded-2xl flex items-center gap-3 animate-[bounce_4s_infinite] z-30 scale-90 lg:scale-100">
<div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:graph-up-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<div className="text-[9px] lg:text-[10px] text-neutral-400 uppercase tracking-wide">APY Estimado</div>
<div className="text-sm lg:text-lg font-bold text-white">18.5%</div>
</div>
</div>
<div className="absolute bottom-5 lg:bottom-10 left-[-20px] lg:left-[-40px] glass-panel p-3 lg:p-4 rounded-2xl flex items-center gap-3 animate-[bounce_5s_infinite] z-30 animation-delay-2000 scale-90 lg:scale-100">
<div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:server-square-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<div className="text-[9px] lg:text-[10px] text-neutral-400 uppercase tracking-wide">Activos</div>
<div className="text-sm lg:text-lg font-bold text-white">$2.4M</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 lg:mb-40 scroll-mt-24" id="presale">
<div className="relative group">

<div className="absolute -inset-[1px] bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 rounded-[32px] opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-500"></div>
<div className="relative bg-[#050505] rounded-[30px] border border-white/5 overflow-hidden grid lg:grid-cols-12 shadow-2xl">

<div className="lg:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div>
<div className="flex items-center gap-2 mb-4 lg:mb-6">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-mono text-green-400 uppercase tracking-wider">Venta Pública Live</span>
</div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Fase 1: Seed Round</h2>
<p className="text-neutral-400 text-sm max-w-md leading-relaxed">
                                Adquiere $DRAC al precio más bajo posible. El precio aumentará un 20% en la siguiente etapa.
                            </p>
</div>
<div className="mt-8 lg:mt-12 space-y-6 lg:space-y-8">

<div className="grid grid-cols-4 gap-2 sm:gap-4">
<div className="text-center">
<div className="text-2xl sm:text-3xl font-mono font-light text-white mb-1" id="days">00</div>
<div className="text-[9px] sm:text-[10px] text-neutral-600 uppercase tracking-widest">Días</div>
</div>
<div className="text-center border-l border-white/5">
<div className="text-2xl sm:text-3xl font-mono font-light text-white mb-1" id="hours">00</div>
<div className="text-[9px] sm:text-[10px] text-neutral-600 uppercase tracking-widest">Hrs</div>
</div>
<div className="text-center border-l border-white/5">
<div className="text-2xl sm:text-3xl font-mono font-light text-white mb-1" id="minutes">00</div>
<div className="text-[9px] sm:text-[10px] text-neutral-600 uppercase tracking-widest">Min</div>
</div>
<div className="text-center border-l border-white/5">
<div className="text-2xl sm:text-3xl font-mono font-light text-violet-400 mb-1" id="seconds">00</div>
<div className="text-[9px] sm:text-[10px] text-neutral-600 uppercase tracking-widest">Seg</div>
</div>
</div>

<div className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/5">
<div className="flex justify-between text-xs mb-3">
<span className="text-neutral-400">Recaudado</span>
<span className="text-white font-mono">$450,230 <span className="text-neutral-600">/ $2M</span></span>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-violet-600 to-indigo-400 w-[22.5%] relative shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3 gap-1 sm:gap-0">
<span className="text-[10px] text-neutral-600">Soft Cap: $200k (Alcanzado)</span>
<span className="text-[10px] text-neutral-600">Participantes: 1,204</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-[#0a0a0a] border-t lg:border-t-0 lg:border-l border-white/5 p-6 sm:p-8 md:p-12 flex items-center">
<div className="w-full space-y-4 sm:space-y-6">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-white">Intercambio</span>
<span className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded-md whitespace-nowrap">1 DRAC = $0.05</span>
</div>

<div className="input-group">
<div className="input-bg bg-[#050505] rounded-xl p-3 sm:p-4 border border-white/10 transition-all">
<div className="flex justify-between text-[10px] text-neutral-500 mb-2 uppercase tracking-wide">
<span>Pagas (USDT)</span>
<span>Bal: 0.00</span>
</div>
<div className="flex items-center gap-3">
<input className="bg-transparent text-xl sm:text-2xl font-mono text-white outline-none w-full placeholder-neutral-700 min-w-0" placeholder="0" type="number"/>
<div className="flex-shrink-0 flex items-center gap-2 bg-[#1a1a1a] px-2 sm:px-3 py-1.5 rounded-lg border border-white/5 cursor-pointer hover:bg-[#252525] transition-colors">
<iconify-icon className="text-green-500" icon="cryptocurrency:usdt" width="20"></iconify-icon>
<span className="text-xs sm:text-sm font-bold text-white">USDT</span>
<iconify-icon className="text-neutral-500 text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex justify-center -my-3 relative z-10">
<div className="bg-[#1a1a1a] border border-white/10 p-1.5 sm:p-2 rounded-lg shadow-xl">
<iconify-icon className="text-neutral-400" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="input-group">
<div className="input-bg bg-[#050505] rounded-xl p-3 sm:p-4 border border-white/10 transition-all">
<div className="flex justify-between text-[10px] text-neutral-500 mb-2 uppercase tracking-wide">
<span>Recibes</span>
<span className="text-violet-500">Bonus +5%</span>
</div>
<div className="flex items-center gap-3">
<input className="bg-transparent text-xl sm:text-2xl font-mono text-white outline-none w-full placeholder-neutral-700 min-w-0" disabled="" placeholder="0" type="number"/>
<div className="flex-shrink-0 flex items-center gap-2 px-2 sm:px-3 py-1.5 rounded-lg">
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-[9px] font-bold">D</div>
<span className="text-xs sm:text-sm font-bold text-white">DRAC</span>
</div>
</div>
</div>
</div>
<button className="w-full py-3.5 sm:py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] active:scale-[0.98]">
                                Conectar Billetera
                            </button>
<div className="flex items-center justify-center gap-4 pt-2">
<iconify-icon className="opacity-50 grayscale hover:grayscale-0 transition-all" icon="logos:metamask-icon" width="24"></iconify-icon>
<iconify-icon className="opacity-50 grayscale hover:grayscale-0 transition-all" icon="logos:walletconnect" width="24"></iconify-icon>
<iconify-icon className="opacity-50 grayscale hover:grayscale-0 transition-all" icon="logos:ethereum" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-16 lg:py-20 mb-20 lg:mb-24 border-y border-white/5 bg-white/[0.01]" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12 lg:mb-16">
<h2 className="text-2xl sm:text-3xl font-medium text-white mb-3">Infraestructura Financiera</h2>
<p className="text-sm sm:text-base text-neutral-500 max-w-lg mx-auto">Uniendo la liquidez DeFi con activos de grado institucional.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-6 sm:p-8 rounded-2xl relative group overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-violet-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-500/10 transition-all"></div>
<iconify-icon className="text-violet-400 mb-4 sm:mb-6" icon="solar:chart-square-bold-duotone" width="36"></iconify-icon>
<h3 className="text-lg sm:text-xl font-medium text-white mb-3">Revenue Share</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Los tenedores de tokens pueden hacer staking para recibir el 30% de los beneficios generados por el portafolio en USDC.
                        </p>
</div>

<div className="glass-card p-6 sm:p-8 rounded-2xl relative group overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-all"></div>
<iconify-icon className="text-cyan-400 mb-4 sm:mb-6" icon="solar:check-circle-bold-duotone" width="36"></iconify-icon>
<h3 className="text-lg sm:text-xl font-medium text-white mb-3">Prueba de Reserva</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Oráculos de Chainlink verifican mensualmente los saldos bancarios y activos off-chain, reflejándolos on-chain.
                        </p>
</div>

<div className="glass-card p-6 sm:p-8 rounded-2xl relative group overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-fuchsia-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-fuchsia-500/10 transition-all"></div>
<iconify-icon className="text-fuchsia-400 mb-4 sm:mb-6" icon="solar:fire-bold-duotone" width="36"></iconify-icon>
<h3 className="text-lg sm:text-xl font-medium text-white mb-3">Mecanismo Deflacionario</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            El protocolo utiliza el excedente de caja para recomprar tokens en el mercado abierto y quemarlos permanentemente.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mb-24 lg:mb-32" id="tokenomics">
<div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-16 border border-white/5">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse">

<div className="order-2 lg:order-1">
<h2 className="text-2xl sm:text-3xl font-medium text-white mb-2">Tokenomics</h2>
<p className="text-sm sm:text-base text-neutral-500 mb-8">Estrategia de distribución diseñada para la estabilidad.</p>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-default">
<div className="flex items-center gap-3">
<div className="w-1.5 h-8 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">Venta Pública</span>
<span className="text-[10px] text-neutral-500">10% TGE, 12 meses vesting</span>
</div>
</div>
<span className="text-base sm:text-lg font-mono text-white">40%</span>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-default">
<div className="flex items-center gap-3">
<div className="w-1.5 h-8 rounded-full bg-indigo-500 opacity-80"></div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">Tesorería DAO</span>
<span className="text-[10px] text-neutral-500">Para futuras adquisiciones</span>
</div>
</div>
<span className="text-base sm:text-lg font-mono text-white">25%</span>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-default">
<div className="flex items-center gap-3">
<div className="w-1.5 h-8 rounded-full bg-cyan-500 opacity-60"></div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">Equipo Fundador</span>
<span className="text-[10px] text-neutral-500">Cliff de 1 año</span>
</div>
</div>
<span className="text-base sm:text-lg font-mono text-white">15%</span>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-default">
<div className="flex items-center gap-3">
<div className="w-1.5 h-8 rounded-full bg-white/20"></div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">Liquidez &amp; MM</span>
<span className="text-[10px] text-neutral-500">Bloqueo permanente</span>
</div>
</div>
<span className="text-base sm:text-lg font-mono text-white">20%</span>
</div>
</div>
</div>

<div className="relative flex items-center justify-center order-1 lg:order-2">
<div className="absolute inset-0 bg-violet-500/20 blur-[60px] rounded-full"></div>
<div className="relative w-52 h-52 sm:w-64 sm:h-64">
<svg className="transform -rotate-90 w-full h-full drop-shadow-2xl" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#1a1a1a" strokeWidth="12"></circle>

<circle className="opacity-100" cx="50" cy="50" fill="transparent" r="40" stroke="#8b5cf6" stroke-dasharray="251.2" stroke-dashoffset="150" strokeWidth="12"></circle> 
<circle className="opacity-80" cx="50" cy="50" fill="transparent" r="40" stroke="#6366f1" stroke-dasharray="251.2" stroke-dashoffset="210" strokeWidth="12" transform="rotate(144 50 50)"></circle> 
<circle className="opacity-60" cx="50" cy="50" fill="transparent" r="40" stroke="#06b6d4" stroke-dasharray="251.2" stroke-dashoffset="220" strokeWidth="12" transform="rotate(234 50 50)"></circle> 
<circle className="opacity-100" cx="50" cy="50" fill="transparent" r="40" stroke="#333" stroke-dasharray="251.2" stroke-dashoffset="200" strokeWidth="12" transform="rotate(288 50 50)"></circle> 
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="text-[9px] uppercase tracking-widest text-neutral-500">Total Supply</span>
<span className="text-xl sm:text-2xl font-bold text-white tracking-tight">100M</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020202] pt-16 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="16"></iconify-icon>
</div>
<span className="text-lg font-bold text-white tracking-tight">DRACMA</span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Construyendo el puente entre el capital cripto y los activos productivos del mundo real.
                    </p>
<div className="flex gap-2">
<a className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="#">
<iconify-icon icon="prime:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="#">
<iconify-icon icon="prime:discord" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all" href="#">
<iconify-icon icon="prime:telegram" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 w-full md:w-auto">
<div>
<h4 className="text-white font-medium mb-6">Plataforma</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Portafolio</a></li>
<li><a className="hover:text-white transition-colors" href="#">Staking</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gobernanza</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Términos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacidad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
<p className="text-[11px] text-neutral-600 text-center md:text-left">© 2024 Dracma Protocol Labs. Todos los derechos reservados.</p>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
<span className="text-[10px] font-medium text-neutral-400 uppercase tracking-wide">Systems Normal</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
