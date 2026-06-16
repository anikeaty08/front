import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // MOBILE MENU ANIMATION LOGIC
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuBackdrop = document.getElementById('menu-backdrop');
        const menuIcon = menuBtn.querySelector('iconify-icon');
        const mobileLinks = mobileMenu.querySelectorAll('a');

        let isMenuOpen = false;

        function toggleMenu() {
            if (!isMenuOpen) {
                // OPEN MENU
                menuBackdrop.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('invisible', 'opacity-0', '-translate-y-6');
                mobileMenu.classList.add('translate-y-0', 'opacity-100');
                menuIcon.setAttribute('icon', 'lucide:x');
                document.body.style.overflow = 'hidden';
                isMenuOpen = true;
            } else {
                // CLOSE MENU
                menuBackdrop.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('translate-y-0', 'opacity-100');
                mobileMenu.classList.add('opacity-0', '-translate-y-6');
                
                setTimeout(() => {
                    if(!isMenuOpen) {
                         mobileMenu.classList.add('invisible');
                    }
                }, 300);

                menuIcon.setAttribute('icon', 'lucide:menu');
                document.body.style.overflow = '';
                isMenuOpen = false;
            }
        }

        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        menuBackdrop.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });

        // SNOWFALL GENERATOR
        function createHeavySnow(containerId, count) {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = '';
            const shapes = ['❄️', '•']; 

            for (let i = 0; i < count; i++) {
                const flake = document.createElement('div');
                flake.classList.add('snowflake');
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                flake.innerText = shape;

                if (shape === '•') {
                    flake.style.color = 'white';
                    flake.style.fontSize = (Math.random() * 10 + 5) + 'px';
                    flake.style.opacity = Math.random() * 0.4 + 0.1;
                } else {
                    flake.style.fontSize = (Math.random() * 12 + 8) + 'px';
                    flake.style.opacity = Math.random() * 0.3 + 0.2;
                }
                
                flake.style.left = Math.random() * 100 + 'vw';
                flake.style.animationName = 'snow-fall';
                flake.style.animationDuration = Math.random() * 10 + 5 + 's';
                flake.style.animationDelay = Math.random() * 5 + 's';
                flake.style.animationIterationCount = 'infinite';
                flake.style.animationTimingFunction = 'linear';

                container.appendChild(flake);
            }
        }

        createHeavySnow('snow-container', 100); 
        createHeavySnow('footer-snow', 35);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-winter-gradient">

<div className="bg-emoji-container">

<div className="bg-emoji top-[10%] left-[5%] animate-float">🟧</div>

<div className="bg-emoji top-[20%] right-[10%] animate-float-slow">💎</div>

<div className="bg-emoji bottom-[25%] left-[15%] animate-drift">🟣</div>

<div className="bg-emoji top-[50%] left-[45%] animate-float">🪙</div>

<div className="bg-emoji bottom-[15%] right-[20%] animate-float-slow">✖️</div>

<div className="bg-emoji top-[15%] left-[30%] animate-drift" style={{opacity: '0.06'}}>🌐</div>

<div className="bg-emoji top-[60%] right-[5%] animate-float text-4xl">❄️</div>
<div className="bg-emoji bottom-[40%] left-[5%] animate-float-slow text-4xl">❄️</div>
</div>

<div className="absolute inset-0 z-10" id="snow-container"></div>

<div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#1EC9B9] opacity-[0.05] blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-300 opacity-[0.05] blur-[120px] rounded-full"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b border-white/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50 bg-white/50 backdrop-blur-sm">

<a className="flex items-center gap-2 group opacity-100 hover:opacity-90 transition-opacity" href="#">
<img alt="Actualys" className="w-auto h-8 object-contain" src="https://res.cloudinary.com/dtgpflxg3/image/upload/v1766151673/Light-Mode-Logo_vpppbi.png"/>
</a>

<div className="hidden lg:flex items-center gap-1">
<a className="text-xs font-medium text-slate-600 hover:text-[#1EC9B9] hover:bg-white/60 px-3 py-2 rounded-lg transition-all" href="#">Accueil</a>
<a className="text-xs font-medium text-slate-600 hover:text-[#1EC9B9] hover:bg-white/60 px-3 py-2 rounded-lg transition-all" href="#">Actifs Crypto</a>
<a className="text-xs font-medium text-slate-600 hover:text-[#1EC9B9] hover:bg-white/60 px-3 py-2 rounded-lg transition-all" href="#">Aperçu des Marchés</a>
<a className="text-xs font-medium text-slate-600 hover:text-[#1EC9B9] hover:bg-white/60 px-3 py-2 rounded-lg transition-all" href="#">Humeur Crypto</a>
<a className="text-xs font-medium text-slate-600 hover:text-[#1EC9B9] hover:bg-white/60 px-3 py-2 rounded-lg transition-all" href="#">Types de Livrets</a>
<a className="text-xs font-medium text-slate-600 hover:text-[#1EC9B9] hover:bg-white/60 px-3 py-2 rounded-lg transition-all" href="#">Types de Comptes</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<button className="text-xs font-semibold text-slate-500 hover:text-slate-800">EN / FR</button>
<div className="h-4 w-[1px] bg-slate-300"></div>
<a className="text-xs font-medium text-slate-600 hover:text-[#1EC9B9]" href="#">Connexion</a>
<a className="bg-slate-900 hover:bg-[#1EC9B9] text-white text-xs font-medium px-5 py-2.5 rounded-lg shadow-lg shadow-slate-900/10 hover:shadow-[#1EC9B9]/30 transition-all transform hover:-translate-y-0.5" href="#">S’inscrire</a>
</div>

<button className="lg:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-md transition-colors focus:outline-none" id="menu-btn">
<iconify-icon className="transition-transform duration-300" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>

<div className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40 lg:hidden mobile-menu-solid flex flex-col p-6 gap-4 transition-all duration-300 ease-premium transform -translate-y-6 opacity-0 invisible origin-top" id="mobile-menu">
<div className="flex flex-col gap-1">
<a className="text-base font-semibold text-slate-800 py-3 border-b border-slate-100 hover:text-[#1EC9B9] transition-colors" href="#">Accueil</a>
<a className="text-base font-semibold text-slate-700 py-3 border-b border-slate-100 hover:text-[#1EC9B9] transition-colors" href="#">Actifs Crypto</a>
<a className="text-base font-semibold text-slate-700 py-3 border-b border-slate-100 hover:text-[#1EC9B9] transition-colors" href="#">Aperçu des Marchés</a>
<a className="text-base font-semibold text-slate-700 py-3 border-b border-slate-100 hover:text-[#1EC9B9] transition-colors" href="#">Humeur Crypto</a>
<a className="text-base font-semibold text-slate-700 py-3 border-b border-slate-100 hover:text-[#1EC9B9] transition-colors" href="#">Types de Livrets</a>
<a className="text-base font-semibold text-slate-700 py-3 border-b border-slate-100 hover:text-[#1EC9B9] transition-colors" href="#">Types de Comptes</a>
</div>
<div className="flex flex-col gap-4 mt-2">
<div className="flex items-center justify-between text-slate-600 font-medium py-2">
<span>Langue</span>
<button className="font-bold text-slate-900">EN / FR</button>
</div>
<div className="grid grid-cols-2 gap-4">
<a className="text-center text-slate-800 font-semibold py-3 border border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors" href="#">Connexion</a>
<a className="text-center bg-[#1EC9B9] text-white font-semibold py-3 rounded-xl shadow-lg shadow-[#1EC9B9]/20 hover:bg-[#18a093] transition-colors" href="#">S’inscrire</a>
</div>
</div>
</div>

<div className="fixed inset-0 top-20 z-30 bg-black/20 lg:hidden backdrop-blur-[2px] transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none" id="menu-backdrop"></div>
</nav>

<section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden z-10">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="lg:w-1/2 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#1EC9B9]/30 mb-6 shadow-sm hover:shadow-md transition-shadow cursor-default bg-white/80">
<span className="text-lg">❄️</span>
<span className="text-[10px] font-bold tracking-widest text-[#1EC9B9] uppercase">Édition Hiver 2026</span>
<div className="ml-1 flex items-center justify-center pb-0.5">
<iconify-icon className="animate-santa filter drop-shadow-sm" icon="fluent-emoji:santa-claus" width="22"></iconify-icon>
</div>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.05] mb-6">
                        Investissez dans <br/>
<span className="text-gradient-teal">l’avenir 2026</span>
</h1>
<p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                        La plateforme de trading nouvelle génération. Sécurisée, intuitive et conçue pour maximiser votre potentiel sur les marchés mondiaux avec Actualys.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#1EC9B9] to-[#18a093] text-white rounded-xl font-medium shadow-lg shadow-[#1EC9B9]/25 hover:shadow-[#1EC9B9]/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group" href="#">
                            Commencer maintenant
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 glass-card text-slate-700 rounded-xl font-medium hover:text-[#1EC9B9] transition-all flex items-center justify-center gap-2" href="#">
<iconify-icon icon="lucide:play-circle" width="20"></iconify-icon>
                            Démonstration
                        </a>
</div>
<div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-80">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#1EC9B9]" icon="lucide:shield-check"></iconify-icon>
<span className="text-xs font-semibold text-slate-500 tracking-wide">RÉGULÉ UE</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#1EC9B9]" icon="lucide:users"></iconify-icon>
<span className="text-xs font-semibold text-slate-500 tracking-wide">200K+ CLIENTS</span>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full relative">
<div className="relative z-10 glass rounded-3xl p-6 shadow-2xl shadow-[#1EC9B9]/10 border border-white/60 animate-float bg-white/40 backdrop-blur-md">
<div className="flex justify-between items-center mb-6">
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Portefeuille Total</span>
<span className="text-3xl font-semibold text-slate-800 tracking-tight">$124,592.45</span>
</div>
<div className="bg-teal-50 text-[#1EC9B9] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-[#1EC9B9]/20">
<iconify-icon icon="lucide:trending-up"></iconify-icon> +12.5%
                            </div>
</div>
<div className="h-40 w-full bg-gradient-to-t from-[#1EC9B9]/10 to-transparent rounded-xl border border-[#1EC9B9]/20 relative overflow-hidden flex items-end justify-between px-4 pb-4 mb-6">
<div className="w-[8%] h-[40%] bg-[#1EC9B9]/30 rounded-sm"></div>
<div className="w-[8%] h-[60%] bg-[#1EC9B9]/50 rounded-sm"></div>
<div className="w-[8%] h-[45%] bg-[#1EC9B9]/30 rounded-sm"></div>
<div className="w-[8%] h-[80%] bg-[#1EC9B9]/70 rounded-sm"></div>
<div className="w-[8%] h-[70%] bg-[#1EC9B9]/50 rounded-sm"></div>
<div className="w-[8%] h-[90%] bg-[#1EC9B9] rounded-sm shadow-[0_0_15px_rgba(30,201,185,0.4)]"></div>
<div className="w-[8%] h-[75%] bg-[#1EC9B9]/60 rounded-sm"></div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-2xl bg-white/60 hover:bg-white/90 transition-colors cursor-pointer border border-white/50 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
<iconify-icon icon="simple-icons:bitcoin" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-800">Bitcoin</span>
<span className="text-[10px] text-slate-400 font-medium">BTC</span>
</div>
</div>
<span className="text-sm font-semibold text-slate-700">$98,230</span>
</div>
<div className="flex items-center justify-between p-3 rounded-2xl bg-white/60 hover:bg-white/90 transition-colors cursor-pointer border border-white/50 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500">
<iconify-icon icon="simple-icons:ethereum" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-800">Ethereum</span>
<span className="text-[10px] text-slate-400 font-medium">ETH</span>
</div>
</div>
<span className="text-sm font-semibold text-slate-700">$5,450</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 relative">
<span className="text-[#1EC9B9] font-bold tracking-widest text-[10px] uppercase mb-3 block">Nos Services</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Solutions d’Investissement</h2>
<div className="w-12 h-1 bg-gradient-to-r from-[#1EC9B9] to-transparent mx-auto mt-6 rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-3xl flex flex-col items-start group relative overflow-hidden bg-white/70">
<div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-[#1EC9B9] mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:candlestick-chart" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 mb-3">Trading Crypto</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                        Accédez à plus de 50 actifs numériques avec une exécution ultra-rapide et des spreads compétitifs.
                    </p>
<a className="text-sm font-semibold text-[#1EC9B9] flex items-center gap-1 group mt-auto" href="#">
                        En savoir plus <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="glass-card p-8 rounded-3xl flex flex-col items-start bg-white/80 border-[#1EC9B9]/30 relative overflow-hidden group shadow-lg">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#1EC9B9]/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-[#1EC9B9]/10"></div>
<div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:wallet" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 mb-3">Livrets d'Épargne</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                        Des solutions d'épargne sécurisées offrant des taux attractifs pour faire fructifier votre capital.
                    </p>
<a className="text-sm font-semibold text-blue-500 flex items-center gap-1 group mt-auto" href="#">
                        Voir les taux <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="glass-card p-8 rounded-3xl flex flex-col items-start group relative overflow-hidden bg-white/70">
<div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:globe-2" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 mb-3">Marchés Mondiaux</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                        Investissez sur les marchés internationaux, actions, indices et matières premières depuis un compte unique.
                    </p>
<a className="text-sm font-semibold text-purple-500 flex items-center gap-1 group mt-auto" href="#">
                        Explorer <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/40 backdrop-blur-sm border-y border-white/50 z-20 relative">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Leader Européen en Trading</h2>
<p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                    Depuis 2013, Actualys redéfinit les standards de la finance numérique. Notre technologie propriétaire assure une stabilité et une performance inégalées, même lors des pics de volatilité hivernaux.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 group">
<div className="w-6 h-6 rounded-full bg-[#1EC9B9]/10 flex items-center justify-center text-[#1EC9B9]">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">Exécution en moins de 15ms</span>
</li>
<li className="flex items-center gap-3 group">
<div className="w-6 h-6 rounded-full bg-[#1EC9B9]/10 flex items-center justify-center text-[#1EC9B9]">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">Support client 24/7 en français</span>
</li>
<li className="flex items-center gap-3 group">
<div className="w-6 h-6 rounded-full bg-[#1EC9B9]/10 flex items-center justify-center text-[#1EC9B9]">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">Conformité AML &amp; KYC stricte</span>
</li>
</ul>
</div>
<div className="lg:w-1/2 grid grid-cols-2 gap-6">
<div className="glass-card p-8 rounded-3xl text-center hover:-translate-y-2 bg-white/80">
<span className="block text-4xl font-bold text-slate-900 mb-1" style={{}}>18+</span>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Années d'expérience</span>
</div>
<div className="glass-card p-8 rounded-3xl text-center hover:-translate-y-2 bg-white/80">
<span className="block text-4xl font-bold text-[#1EC9B9] mb-1">99.9%</span>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Disponibilité</span>
</div>
<div className="glass-card p-8 rounded-3xl text-center col-span-2 hover:-translate-y-2 bg-white/80">
<span className="block text-4xl font-bold text-slate-900 mb-1">€2M+</span>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Volume Transigé</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 z-10 relative">
<div className="max-w-7xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Sécurité &amp; Confiance</h2>
<p className="text-slate-500 max-w-2xl mx-auto font-light">Votre sécurité est notre priorité absolue.</p>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#1EC9B9]/10 hover:border-[#1EC9B9]/30 transition-all duration-300">
<iconify-icon className="text-[#1EC9B9] text-3xl mb-5" icon="lucide:lock"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Chiffrement SSL</h4>
<p className="text-xs text-slate-500 leading-relaxed">Données cryptées de bout en bout pour une confidentialité totale.</p>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#1EC9B9]/10 hover:border-[#1EC9B9]/30 transition-all duration-300">
<iconify-icon className="text-[#1EC9B9] text-3xl mb-5" icon="lucide:shield-check"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Fonds Ségrégés</h4>
<p className="text-xs text-slate-500 leading-relaxed">Vos fonds sont détenus sur des comptes bancaires distincts.</p>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#1EC9B9]/10 hover:border-[#1EC9B9]/30 transition-all duration-300">
<iconify-icon className="text-[#1EC9B9] text-3xl mb-5" icon="lucide:user-check"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Vérification 2FA</h4>
<p className="text-xs text-slate-500 leading-relaxed">Authentification à deux facteurs obligatoire pour les retraits.</p>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#1EC9B9]/10 hover:border-[#1EC9B9]/30 transition-all duration-300">
<iconify-icon className="text-[#1EC9B9] text-3xl mb-5" icon="lucide:file-search"></iconify-icon>
<h4 className="font-semibold text-slate-900 mb-2">Audits Réguliers</h4>
<p className="text-xs text-slate-500 leading-relaxed">Audit par des cabinets indépendants pour garantir la transparence.</p>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl mx-auto relative group animate-fade-up">

<div className="relative rounded-2xl overflow-hidden p-12 lg:p-20 text-center bg-gradient-to-b from-white/70 to-[#EBF5FF]/30 backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_-15px_rgba(30,201,185,0.15)] hover:shadow-[0_30px_70px_-15px_rgba(30,201,185,0.2)] transition-all duration-500 ease-out transform hover:-translate-y-1">

<div className="absolute top-[-20px] left-[-20px] text-slate-300 opacity-[0.03] transform -rotate-12 pointer-events-none select-none">
<iconify-icon icon="simple-icons:bitcoin" width="200"></iconify-icon>
</div>
<div className="absolute bottom-[-30px] right-[-20px] text-[#1EC9B9] opacity-[0.03] transform rotate-12 pointer-events-none select-none">
<iconify-icon icon="simple-icons:ethereum" width="220"></iconify-icon>
</div>

<div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
<div className="absolute top-10 left-[10%] opacity-40 text-sm animate-float">❄️</div>
<div className="absolute top-1/2 right-[15%] opacity-30 text-xs animate-drift">❄️</div>
<div className="absolute bottom-10 left-[20%] opacity-20 text-lg animate-float-slow">❄️</div>
<div className="absolute top-[20%] right-[30%] opacity-20 text-xs animate-float">❄️</div>
</div>

<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4 font-display">
                      Prêt à investir pour 2026 ? <span className="align-middle inline-block animate-santa">🎅</span>
</h2>
<p className="text-slate-500 text-lg md:text-xl mb-10 max-w-lg mx-auto font-light leading-relaxed">
                      Rejoignez la communauté Actualys dès aujourd'hui.
                  </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 bg-[#1EC9B9] blur-[40px] opacity-20 animate-pulse pointer-events-none"></div>

<a className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#1EC9B9] to-[#18a093] text-white rounded-xl font-medium shadow-lg shadow-[#1EC9B9]/30 hover:shadow-[#1EC9B9]/50 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group/btn" href="#">
<span className="relative z-10 flex items-center justify-center gap-2">
                              Ouvrir un compte
                              <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</span>
</a>

<a className="w-full sm:w-auto px-10 py-4 bg-white/40 border border-[#1EC9B9]/20 text-slate-600 hover:text-[#1EC9B9] hover:bg-white/80 rounded-xl font-medium transition-all duration-300 hover:border-[#1EC9B9]/40 backdrop-blur-md shadow-sm hover:shadow-md" href="#">
                          Nous contacter
                      </a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative bg-[#0F1B1B] text-slate-400 pt-20 pb-10 px-6 overflow-hidden glass-dark border-t border-white/5 z-20">

<div className="absolute inset-0 pointer-events-none z-0 opacity-20" id="footer-snow"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<h3 className="text-white font-semibold mb-6 tracking-wide text-sm">À propos</h3>
<ul className="space-y-3">
<li><a className="hover:text-[#1EC9B9] transition-colors text-xs font-light" href="#">Politique de Remboursement</a></li>
<li><a className="hover:text-[#1EC9B9] transition-colors text-xs font-light" href="#">Politique AML</a></li>
<li><a className="hover:text-[#1EC9B9] transition-colors text-xs font-light" href="#">Avertissement KYC</a></li>
</ul>
</div>

<div>
<h3 className="text-white font-semibold mb-6 tracking-wide text-sm">Produits</h3>
<ul className="space-y-3">
<li><a className="hover:text-[#1EC9B9] transition-colors text-xs font-light" href="#">Types de comptes</a></li>
<li><a className="hover:text-[#1EC9B9] transition-colors text-xs font-light" href="#">Livrets d'épargne</a></li>
<li><a className="hover:text-[#1EC9B9] transition-colors text-xs font-light" href="#">Cryptomonnaies</a></li>
</ul>
</div>

<div>
<h3 className="text-white font-semibold mb-6 tracking-wide text-sm">Contact</h3>
<ul className="space-y-4 text-xs font-light">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#1EC9B9]" icon="lucide:map-pin"></iconify-icon>
<span>21 Quay St ManchesterM3 4AE, UK</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#1EC9B9]" icon="lucide:mail"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:support@actualys.com">support@actualys.com</a>
</li>
</ul>
</div>

<div className="flex flex-col items-start lg:items-end">
<img alt="Actualys" className="h-6 w-auto mb-6 opacity-80 brightness-0 invert" src="https://res.cloudinary.com/dtgpflxg3/image/upload/v1766151348/Light-Mode-Logo_ldnc8k.png"/>
<p className="text-[10px] text-slate-500 lg:text-right max-w-xs leading-relaxed">
                        Actualys est une marque déposée. Investir comporte des risques.
                    </p>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-500">© 2013 Actualys. Tous droits réservés</p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-[#1EC9B9] transition-colors" href="#"><iconify-icon icon="lucide:twitter"></iconify-icon></a>
<a className="text-slate-500 hover:text-[#1EC9B9] transition-colors" href="#"><iconify-icon icon="lucide:linkedin"></iconify-icon></a>
<a className="text-slate-500 hover:text-[#1EC9B9] transition-colors" href="#"><iconify-icon icon="lucide:facebook"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
