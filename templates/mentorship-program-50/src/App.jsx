import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
indigo: {
300: '#a5b4fc',
400: '#818cf8',
500: '#6366f1',
600: '#4f46e5',
900: '#312e81',
950: '#1e1b4b',
},
paper: {
50: '#f9f9f7',
100: '#e6e3df',
},
ink: {
900: '#050505',
800: '#0c0c0c',
700: '#1a1a1a',
500: '#52525b',
400: '#a1a1aa',
300: '#d4d4d8',
},
zinc: {
800: '#27272a',
900: '#18181b',
}
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
body: ['"Libre Baskerville"', 'serif'],
sans: ['system-ui', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
},
animation: {
'scan': 'scan 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'shimmer': 'shimmer 2.5s infinite linear',
'dash': 'dash 20s linear infinite',
},
keyframes: {
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(1000%)' },
},
shimmer: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(200%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
dash: {
to: {
strokeDashoffset: '1000',
},
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                class: 'stroke-[1.5]' 
            }
        });

        function switchTab(index) {
            const tabs = document.querySelectorAll('.protocol-tab');
            const contents = document.querySelectorAll('.tab-content');
            
            tabs.forEach((tab, i) => {
                const indicator = tab.querySelector('.indicator');
                const text = tab.querySelector('h3');
                
                if (i === index) {
                    tab.classList.add('active');
                    text.classList.remove('text-ink-500');
                    text.classList.add('text-paper-50');
                    indicator.classList.remove('scale-x-0');
                    indicator.classList.add('scale-x-100');
                } else {
                    tab.classList.remove('active');
                    text.classList.remove('text-paper-50');
                    text.classList.add('text-ink-500');
                    indicator.classList.remove('scale-x-100');
                    indicator.classList.add('scale-x-0');
                }
            });

            contents.forEach((content, i) => {
                if (i === index) {
                    content.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                    content.classList.add('opacity-100', 'z-10', 'translate-y-0');
                } else {
                    content.classList.remove('opacity-100', 'z-10', 'translate-y-0');
                    content.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] animate-float opacity-30"></div>
<div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[100px] opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-4 group cursor-pointer">
<span className="font-serif text-xl tracking-tight text-paper-50 group-hover:text-indigo-300 transition-colors">Protocole D.A.O.</span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-ink-500 hover:text-indigo-400 transition-colors" href="#manifesto">Manifeste</a>
<a className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-ink-500 hover:text-indigo-400 transition-colors" href="#protocol">Le Système</a>
<a className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-ink-500 hover:text-indigo-400 transition-colors" href="#curriculum">Mentorat</a>
</div>
<div className="flex items-center gap-6">
<a className="relative px-6 py-2 group overflow-hidden border border-white/10" href="#curriculum">
<div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10 text-paper-50 text-xs font-sans uppercase tracking-[0.2em] font-semibold group-hover:text-white transition-colors">Postuler</span>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-32 pb-20 px-6 border-b border-white/5 flex flex-col justify-center overflow-hidden" id="manifesto">
<div className="absolute inset-0 z-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.03]"></div>
<div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-6 pt-12">
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-paper-50 mb-10">
                    Le Savoir est <br/>
<span className="italic text-indigo-400 font-serif pr-2 relative inline-block text-glow">
                        Obsolète.
                        <svg className="absolute -bottom-2 left-0 w-full h-2 text-indigo-500/50" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 15 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span>
</h1>
<p className="text-xl text-ink-400 max-w-xl leading-relaxed text-balance font-light mb-12">
                    Nous souffrons d'Obésité Informationnelle. À une ère où l'IA possède la somme des connaissances humaines, l'accumulation est un passif. La nouvelle richesse est l'<span className="text-paper-50 italic border-b border-indigo-500/30">Intelligence Logistique</span>.
                </p>
<div className="flex flex-col sm:flex-row gap-6">
<a className="group relative px-8 py-4 bg-paper-50 text-ink-900 overflow-hidden inline-block text-center w-full sm:w-auto" href="#curriculum">
<div className="flex items-center justify-center gap-3 relative z-10">
<span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] group-hover:text-indigo-600 transition-colors">Postuler</span>
<i className="w-4 h-4 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all" data-lucide="arrow-right"></i>
</div>
<div className="absolute inset-0 bg-indigo-50 transition-transform duration-500 group-hover:scale-x-0 origin-left"></div>
</a>
</div>
</div>

<div className="lg:col-span-6 relative lg:pl-24 pt-12 md:pt-0">
<div className="absolute left-10 top-0 bottom-0 w-px bg-white/5 hidden lg:block">
<div className="absolute top-0 left-0 w-px h-64 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent animate-scan blur-[1px]"></div>
</div>
<div className="flex flex-col gap-20 relative">

<div className="group relative opacity-50 hover:opacity-90 transition-all duration-700 cursor-default">
<div className="flex justify-between items-end mb-4 border-b border-white/10 pb-4">
<h3 className="text-xs text-ink-500 uppercase tracking-[0.25em] font-sans font-semibold">Modèle Héritage</h3>
<span className="text-red-500/90 text-xs font-mono tracking-wider">-40% ROI</span>
</div>
<div className="relative">
<p className="text-3xl md:text-4xl font-serif text-ink-400 group-hover:text-ink-300 transition-colors leading-tight tracking-tight font-normal">
                                "Tout apprendre au cas où."
                            </p>
</div>
</div>

<div className="group relative cursor-default">
<div className="absolute -left-14 top-10 w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_15px_2px_rgba(99,102,241,0.6)] hidden lg:block animate-pulse-slow"></div>
<div className="flex justify-between items-end mb-4 relative z-10 border-b border-indigo-500/30 pb-4">
<h3 className="text-xs text-indigo-400 uppercase tracking-[0.25em] font-sans font-semibold group-hover:text-indigo-300 transition-colors">Modèle D.A.O.</h3>
<span className="text-indigo-400 text-xs font-mono tracking-wider relative z-10 group-hover:text-white transition-colors text-shadow-glow">Levier Infini</span>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 animate-shimmer"></div>
</div>
<div className="relative z-10">
<p className="text-3xl md:text-4xl font-serif text-paper-50 italic leading-tight group-hover:text-white transition-colors tracking-tight">
                                "Filtrer agressivement. Exécuter <br/>
<span className="relative">
                                    instantanément."
                                    <svg className="absolute -bottom-1 left-0 w-full h-1 text-indigo-500/80" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</span>
</p>
<div className="absolute inset-0 -z-10 bg-indigo-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-1000"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#080808] border-b border-white/5" id="protocol">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-24">
<div className="max-w-xl">
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
<span className="text-indigo-500 font-sans text-xs uppercase tracking-[0.2em] font-semibold">Architecture Système</span>
</div>
<h2 className="text-4xl md:text-5xl text-paper-50 mb-6 tracking-tight">La Séquence D.A.O.</h2>
<p className="text-xl text-ink-400 font-light leading-relaxed">
                        Impossible d'apprendre efficacement sans d'abord décider quoi ignorer. Le protocole impose une progression linéaire : Élimination avant Acquisition.
                    </p>
</div>
<div className="flex gap-12 mt-12 md:mt-0 border-b border-white/5">
<button className="protocol-tab active relative pb-4 group outline-none" onclick="switchTab(0)">
<h3 className="text-base font-sans uppercase tracking-widest transition-colors duration-300 text-paper-50">I. Décider</h3>
<div className="indicator absolute -bottom-px left-0 w-full h-px bg-indigo-500 transition-all duration-300 origin-left scale-x-100"></div>
</button>
<button className="protocol-tab relative pb-4 group outline-none" onclick="switchTab(1)">
<h3 className="text-base font-sans uppercase tracking-widest transition-colors duration-300 text-ink-500 group-hover:text-ink-300">II. Apprendre</h3>
<div className="indicator absolute -bottom-px left-0 w-full h-px bg-indigo-500 transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-50"></div>
</button>
<button className="protocol-tab relative pb-4 group outline-none" onclick="switchTab(2)">
<h3 className="text-base font-sans uppercase tracking-widest transition-colors duration-300 text-ink-500 group-hover:text-ink-300">III. Organiser</h3>
<div className="indicator absolute -bottom-px left-0 w-full h-px bg-indigo-500 transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-50"></div>
</button>
</div>
</div>
<div className="relative min-h-[600px] glass-panel p-1 rounded-sm overflow-hidden border border-white/5 bg-[#0a0a0a]">
<div className="absolute inset-0 bg-grid-pattern bg-[size:30px_30px] opacity-[0.03]"></div>

<div className="tab-content absolute inset-0 opacity-100 z-10 transition-all duration-700 p-8 md:p-16 flex flex-col lg:flex-row gap-20" id="content-0">
<div className="flex-1 flex flex-col justify-center">
<div className="text-indigo-500 font-mono text-xs mb-6 tracking-widest">01 // COUCHE STRATÉGIE</div>
<h3 className="text-3xl md:text-4xl text-paper-50 mb-8 italic">Saut Stratégique</h3>
<p className="text-ink-400 leading-relaxed mb-10 text-xl font-light">
                            La plupart des compétences sont des "symptômes". Nous ne ciblons que les "racines". En identifiant le nœud à fort levier, vous contournez 80% de la courbe d'apprentissage.
                        </p>
<div className="grid grid-cols-1 gap-4">

<div className="group flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02] rounded hover:border-red-900/30 transition-colors">
<div className="w-8 h-8 rounded flex items-center justify-center bg-red-900/10 text-red-400">
<i className="w-5 h-5" data-lucide="x-square"></i>
</div>
<div>
<div className="text-xs uppercase tracking-widest text-ink-500 mb-1">Rejeter</div>
<div className="text-base text-ink-400 group-hover:text-ink-200 transition-colors">Syntaxe, Mémorisation par cœur</div>
</div>
</div>

<div className="group flex items-center gap-4 p-4 border border-indigo-500/20 bg-indigo-500/5 rounded relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/5 animate-pulse"></div>
<div className="w-8 h-8 rounded flex items-center justify-center bg-indigo-500/20 text-indigo-400 relative z-10">
<i className="w-5 h-5" data-lucide="check-square"></i>
</div>
<div className="relative z-10">
<div className="text-xs uppercase tracking-widest text-indigo-400 mb-1">Retenir</div>
<div className="text-base text-paper-50">Logique, Modèles, Architecture</div>
</div>
</div>
</div>
</div>
<div className="flex-1 relative border border-white/10 bg-[#050505] flex items-center justify-center overflow-hidden group">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
<div className="relative w-72 h-72">
<div className="absolute bottom-0 left-0 w-full h-px bg-ink-700"></div>
<div className="absolute bottom-0 left-0 w-px h-full bg-ink-700"></div>
<div className="absolute -bottom-6 right-0 text-[10px] uppercase tracking-widest text-ink-500 font-sans">Levier (x)</div>
<div className="absolute -left-8 top-0 text-[10px] uppercase tracking-widest text-ink-500 font-sans -rotate-90 origin-right">Impact (y)</div>
<svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
<path d="M0 288 C 100 288, 144 144, 288 0" fill="none" stroke="#312e81" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="animate-[dash_3s_linear_infinite]" d="M0 288 C 100 288, 144 144, 288 0" fill="none" stroke="#6366f1" stroke-dasharray="300" stroke-dashoffset="300" strokeWidth="2"></path>
</svg>
<div className="absolute top-[10%] right-[10%] w-24 h-24 border border-indigo-500/50 bg-indigo-500/10 rounded-sm backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<div className="absolute w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
<div className="text-xs font-mono text-indigo-300 text-center">Haut<br/>Rendement</div>
</div>
</div>
</div>
</div>

<div className="tab-content absolute inset-0 opacity-0 pointer-events-none transition-all duration-700 p-8 md:p-16 flex flex-col lg:flex-row gap-20 transform translate-y-4" id="content-1">
<div className="flex-1 flex flex-col justify-center">
<div className="text-indigo-500 font-mono text-xs mb-6 tracking-widest">02 // COUCHE BIOLOGIQUE</div>
<h3 className="text-3xl md:text-4xl text-paper-50 mb-8 italic">La Logistique de la Myéline</h3>
<p className="text-ink-400 leading-relaxed mb-10 text-xl font-light">
                            L'apprentissage est un processus biologique. Cela nécessite de la friction. Nous ingénions une friction spécifique pour approfondir la digestion et la rétention à long terme.
                        </p>
<div className="border-l-2 border-indigo-500 pl-6 py-2 bg-indigo-900/5">
<p className="text-xl text-paper-50 font-serif italic">"Ne lisez pas pour finir. Lisez pour souffrir."</p>
</div>
</div>
<div className="flex-1 relative bg-[#050505] border border-white/10 flex items-center justify-center overflow-hidden min-h-[400px]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
<div className="relative w-full h-full flex items-center justify-center p-6 scale-90 md:scale-100">

<svg className="w-full max-w-lg drop-shadow-[0_0_30px_rgba(99,102,241,0.15)] overflow-visible" viewbox="0 0 600 240">
<path d="M100 120 L 520 120" fill="none" stroke="#262626" strokeWidth="2"></path>
<circle cx="100" cy="120" fill="#0a0a0a" r="25" stroke="#52525b" strokeWidth="1.5"></circle>
<circle className="animate-pulse" cx="100" cy="120" fill="#4f46e5" opacity="0.8" r="8"></circle>
<g>
<rect className="animate-[pulse_3s_ease-in-out_infinite]" fill="#18181b" height="24" rx="4" stroke="#6366f1" strokeWidth="1" width="45" x="150" y="108"></rect>
<rect className="animate-[pulse_3s_ease-in-out_1s_infinite]" fill="#18181b" height="24" rx="4" stroke="#6366f1" strokeWidth="1" width="45" x="210" y="108"></rect>
<rect className="animate-[pulse_3s_ease-in-out_2s_infinite]" fill="#18181b" height="24" rx="4" stroke="#6366f1" strokeWidth="1" width="45" x="270" y="108"></rect>
<rect className="animate-[pulse_3s_ease-in-out_0.5s_infinite]" fill="#18181b" height="24" rx="4" stroke="#6366f1" strokeWidth="1" width="45" x="330" y="108"></rect>
<rect className="animate-[pulse_3s_ease-in-out_1.5s_infinite]" fill="#18181b" height="24" rx="4" stroke="#6366f1" strokeWidth="1" width="45" x="390" y="108"></rect>
<rect className="animate-[pulse_3s_ease-in-out_2.5s_infinite]" fill="#18181b" height="24" rx="4" stroke="#6366f1" strokeWidth="1" width="45" x="450" y="108"></rect>
</g>
<path d="M520 120 L 560 90" stroke="#262626" strokeWidth="1"></path>
<path d="M520 120 L 570 120" stroke="#262626" strokeWidth="1"></path>
<path d="M520 120 L 560 150" stroke="#262626" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>

<div className="tab-content absolute inset-0 opacity-0 pointer-events-none transition-all duration-700 p-8 md:p-16 flex flex-col lg:flex-row gap-20 transform translate-y-4" id="content-2">
<div className="flex-1 flex flex-col justify-center">
<div className="text-indigo-500 font-mono text-xs mb-6 tracking-widest">03 // COUCHE EXÉCUTION</div>
<h3 className="text-3xl md:text-4xl text-paper-50 mb-8 italic">Architecture Hybride</h3>
<p className="text-ink-400 leading-relaxed mb-10 text-xl font-light">
                            Le novice cherche la perfection. Le maître cherche le flow. Apprenez à changer de mode : Toyota (Juste-à-Temps, imparfait) pour le prototypage, et Rolls Royce (Sur-mesure, lent) pour l'infrastructure.
                        </p>
</div>
<div className="flex-1 relative bg-[#0a0a0a] border border-white/10 flex flex-col items-center justify-center p-12">
<div className="w-full max-w-sm relative">
<div className="absolute top-8 left-0 w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="w-full h-full bg-gradient-to-r from-transparent via-indigo-900 to-transparent animate-[shimmer_3s_infinite]"></div>
</div>
<div className="flex justify-between relative z-10">
<div className="text-center group cursor-pointer">
<div className="w-16 h-16 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center mb-4 group-hover:border-indigo-500/50 transition-colors duration-500">
<i className="text-ink-500 group-hover:text-indigo-400 w-8 h-8 transition-colors" data-lucide="zap"></i>
</div>
<div className="text-xs font-sans uppercase tracking-widest text-ink-400">Toyota</div>
</div>
<div className="relative pt-6">
<div className="w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)] absolute -top-[5px] left-1/2 -translate-x-1/2 border border-black"></div>
<div className="text-center mt-12">
<div className="text-xs font-sans uppercase tracking-widest text-indigo-400">Hybride</div>
</div>
</div>
<div className="text-center group cursor-pointer">
<div className="w-16 h-16 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center mb-4 group-hover:border-indigo-500/50 transition-colors duration-500">
<i className="text-ink-500 group-hover:text-indigo-400 w-8 h-8 transition-colors" data-lucide="gem"></i>
</div>
<div className="text-xs font-sans uppercase tracking-widest text-ink-400">Rolls Royce</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#050505]">
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-block p-4 rounded-full bg-white/5 mb-8 border border-white/5 hover:bg-white/10 transition-colors duration-500 cursor-default">
<i className="w-8 h-8 text-indigo-500 animate-pulse-slow" data-lucide="cpu"></i>
</div>
<h2 className="text-4xl md:text-6xl text-paper-50 mb-8 leading-tight">
                L'IA est un <span className="text-indigo-400 italic">Amplificateur.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto mt-12">

<div className="group p-8 border border-white/5 hover:border-red-900/30 transition-all duration-500 bg-[#080808] hover:bg-red-950/5 relative overflow-hidden">
<div className="text-red-400 text-xs font-mono mb-4 tracking-widest flex justify-between items-center">
<span>ENTRÉE : BRUIT</span>
<i className="w-4 h-4 opacity-50" data-lucide="trending-up"></i>
</div>
<p className="text-ink-400 font-serif text-xl mb-6 group-hover:text-ink-200 transition-colors">Vous + Chaos + IA =</p>
<div className="text-xl text-paper-50 font-semibold uppercase tracking-widest group-hover:text-red-200 transition-colors">Chaos Accéléré</div>
<div className="absolute bottom-0 left-0 h-1 w-full bg-red-900/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>

<div className="group p-8 border border-indigo-500/30 bg-indigo-900/5 shadow-[0_0_50px_rgba(99,102,241,0.05)] hover:shadow-[0_0_80px_rgba(99,102,241,0.1)] transition-all duration-500 relative overflow-hidden">
<div className="text-indigo-400 text-xs font-mono mb-4 tracking-widest flex justify-between items-center">
<span>ENTRÉE : SYSTÈME</span>
<i className="w-4 h-4" data-lucide="network"></i>
</div>
<p className="text-ink-400 font-serif text-xl mb-6 group-hover:text-ink-200 transition-colors">Vous + D.A.O. + IA =</p>
<div className="text-xl text-paper-50 font-semibold uppercase tracking-widest text-glow">Richesse Logistique</div>
<div className="absolute bottom-0 left-0 h-1 w-full bg-indigo-500 transform scale-x-100 transition-transform origin-left"></div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#050505] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-6">
<span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></span>
<span className="text-xs uppercase tracking-widest font-sans font-semibold text-indigo-300">Retours Opérationnels</span>
</div>
<h2 className="text-3xl md:text-5xl font-serif text-paper-50 tracking-tight">Impact du Protocole</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative p-8 md:p-10 rounded-sm border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
<div className="absolute top-8 right-8 text-indigo-500/20 text-6xl font-serif leading-none select-none">"</div>
<p className="text-xl text-ink-300 font-light leading-relaxed mb-8 relative z-10 italic">
                        J'ai eu la chance d'être coachée par Nadir, et c'est l'un des rares coachs qui travaillent vraiment à la racine des problèmes. Son approche est à la fois concrète, ludique et profonde. En tant que cliente, j'ai vu immédiatement la différence. Je le recommande sans hésiter.
                    </p>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">

<img alt="Alice Samou" className="w-12 h-12 rounded-full border border-white/10 group-hover:scale-105 transition-all duration-500 object-cover bg-indigo-900/20" src="alice.jpg"/>
<div>
<h4 className="text-base font-serif text-paper-50 mb-0.5">Alice Samou</h4>
<p className="text-xs text-indigo-400 font-mono tracking-tight uppercase">CEO MyDataClean • Transformation des données</p>
</div>
</div>
</div>

<div className="group relative p-8 md:p-10 rounded-sm border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
<div className="absolute top-8 right-8 text-indigo-500/20 text-6xl font-serif leading-none select-none">"</div>
<p className="text-xl text-ink-300 font-light leading-relaxed mb-8 relative z-10 italic">
                        J'ai eu le plaisir d'être accompagné par Nadir pour renforcer mes compétences commerciales. Grâce à son expertise, j'ai pu clarifier et résoudre des problématiques business importantes. Les méthodes et outils partagés ont déjà un impact concret sur ma productivité.
                    </p>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">

<img alt="Anthony Bard" className="w-12 h-12 rounded-full border border-white/10 group-hover:scale-105 transition-all duration-500 object-cover bg-indigo-900/20" src="anthony.jpg"/>
<div>
<h4 className="text-base font-serif text-paper-50 mb-0.5">Anthony Bard</h4>
<p className="text-xs text-indigo-400 font-mono tracking-tight uppercase">Consultant Cybersécurité • Sécurité SI</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#050505] border-t border-white/5 overflow-hidden" id="curriculum">
<div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8">
<span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></span>
<span className="text-xs uppercase tracking-widest font-sans font-semibold text-indigo-300">Programme 8 Semaines</span>
</div>
<h2 className="text-4xl md:text-6xl font-serif text-paper-50 mb-8 leading-[1.1] tracking-tight">
                Apprendre deux fois plus vite.<br/>
<span className="italic text-indigo-400">Sans travailler plus.</span>
</h2>
<p className="text-xl md:text-2xl text-ink-400 font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                Postulez pour un mentorat intensif où nous installons ensemble le protocole D.A.O. directement dans votre flux de travail actuel.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">

<div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all group rounded-sm">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-indigo-500 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="signpost"></i>
</div>
<h3 className="text-xl font-serif text-paper-50 mb-3">Prise de Décision</h3>
<p className="text-base text-ink-500 leading-relaxed font-light">Éliminer le bruit informationnel. Trancher avec une précision chirurgicale.</p>
</div>

<div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all group rounded-sm">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-indigo-500 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="crown"></i>
</div>
<h3 className="text-xl font-serif text-paper-50 mb-3">Leadership Personnel</h3>
<p className="text-base text-ink-500 leading-relaxed font-light">Maîtrise de l'attention et direction autonome.</p>
</div>

<div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all group rounded-sm">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-indigo-500 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="wand-2"></i>
</div>
<h3 className="text-xl font-serif text-paper-50 mb-3">Symbiose IA</h3>
<p className="text-base text-ink-500 leading-relaxed font-light">Augmentation cognitive via l'intelligence artificielle.</p>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<button className="group relative px-10 py-5 bg-indigo-600 overflow-hidden hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.2)] hover:shadow-[0_0_40px_rgba(79,70,229,0.4)]">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10 text-xs font-sans font-semibold uppercase tracking-[0.2em] text-white">Postuler au Mentorat</span>
</button>
<div className="flex items-center gap-2 mt-4 opacity-60">
<span className="w-1 h-1 bg-green-500 rounded-full"></span>
<span className="text-xs text-ink-400 font-mono tracking-wide">3 places restantes pour cette cohorte</span>
</div>
</div>
</div>
<div className="absolute bottom-6 w-full text-center border-t border-white/5 pt-6 px-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto left-0 right-0">
<p className="text-[10px] text-ink-600 uppercase tracking-widest font-sans">© 2024 Protocole D.A.O.</p>
<div className="flex gap-4">
<i className="w-4 h-4 text-ink-600 hover:text-indigo-500 cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 text-ink-600 hover:text-indigo-500 cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</section>


    </>
  );
}
