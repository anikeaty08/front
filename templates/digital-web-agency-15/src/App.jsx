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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#F9FAFB',  // Main BG
100: '#F1F5F9', // Muted BG
200: '#E2E8F0', // Borders
300: '#CBD5E1',
400: '#94A3B8',
500: '#64748B', // Muted Text
600: '#475569', // Secondary Text
800: '#1E293B',
900: '#0F172A', // Primary Text
},
accent: {
DEFAULT: '#4F46E5', // Indigo Premium
light: '#818CF8',
dark: '#3730A3',
},
tech: {
cyan: '#06B6D4',
success: '#10B981',
}
},
fontFamily: {
sans: ['"Inter"', 'sans-serif'],
display: ['"Space Grotesk"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
backgroundImage: {
'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(79, 70, 229, 0.05) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(6, 182, 212, 0.05) 0px, transparent 50%)',
'gradient-glow': 'conic-gradient(from 180deg at 50% 50%, #4F46E5 0deg, #06B6D4 180deg, #4F46E5 360deg)',
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
'float': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
}
}
}
}



        lucide.createIcons();
        
        // Interaction Logic
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
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
      

<div className="hidden md:flex justify-between items-center px-6 py-2 bg-white border-b border-brand-200 text-[10px] font-mono font-medium text-brand-500 z-50">
<div className="flex gap-4">
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-tech-success animate-pulse"></span>
                SYSTEM OPERATIONAL
            </span>
<span>V.4.2.0 (BUILD 2024)</span>
</div>
<div className="flex gap-4">
<span className="hover:text-brand-900 cursor-pointer transition-colors">LATENCY: 12ms</span>
<span className="text-brand-300">|</span>
<a className="hover:text-brand-900 transition-colors" href="#">INVESTOR RELATIONS</a>
<a className="hover:text-brand-900 transition-colors" href="#">PARTNER API</a>
</div>
</div>

<header className="fixed top-8 w-full z-40 px-6">
<div className="max-w-[1400px] mx-auto glass rounded-2xl border border-white/50 shadow-sm">
<div className="h-16 flex items-center justify-between px-6">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-brand-900 text-white rounded-lg flex items-center justify-center font-display font-bold text-lg shadow-lg group-hover:bg-accent transition-colors">D</div>
<div className="leading-none">
<span className="block font-display font-bold text-brand-900 tracking-tight text-lg">DIGIT</span>
<span className="block font-mono text-[9px] tracking-[0.2em] text-brand-500 uppercase">Architecture</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-1">
<div className="group relative px-4 py-6">
<button className="flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors">
                            Plateforme <i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
<div className="w-[600px] bg-white rounded-xl border border-brand-200 shadow-float p-1 grid grid-cols-2 gap-1 overflow-hidden">
<div className="p-4 space-y-4 bg-brand-50/50">
<span className="text-[10px] font-mono text-brand-400 uppercase tracking-wider">Foundation</span>
<a className="flex items-start gap-3 p-2 rounded-lg hover:bg-white hover:shadow-subtle transition-all group/item" href="#">
<div className="mt-0.5 text-brand-400 group-hover/item:text-accent transition-colors"><i className="w-4 h-4" data-lucide="layers"></i></div>
<div>
<div className="text-sm font-semibold text-brand-900">Composable Core</div>
<div className="text-xs text-brand-500 leading-snug mt-0.5">Architecture découplée pour scale infini.</div>
</div>
</a>
<a className="flex items-start gap-3 p-2 rounded-lg hover:bg-white hover:shadow-subtle transition-all group/item" href="#">
<div className="mt-0.5 text-brand-400 group-hover/item:text-accent transition-colors"><i className="w-4 h-4" data-lucide="cpu"></i></div>
<div>
<div className="text-sm font-semibold text-brand-900">Intelligence Layer</div>
<div className="text-xs text-brand-500 leading-snug mt-0.5">Intégration IA native et automation.</div>
</div>
</a>
</div>
<div className="p-4 space-y-4">
<span className="text-[10px] font-mono text-brand-400 uppercase tracking-wider">Expansion</span>
<a className="flex items-start gap-3 p-2 rounded-lg hover:bg-brand-50 transition-all group/item" href="#">
<div className="mt-0.5 text-brand-400 group-hover/item:text-tech-cyan transition-colors"><i className="w-4 h-4" data-lucide="globe"></i></div>
<div>
<div className="text-sm font-semibold text-brand-900">Global Commerce</div>
<div className="text-xs text-brand-500 leading-snug mt-0.5">Headless, multi-devise, instantané.</div>
</div>
</a>
</div>
</div>
</div>
</div>
<a className="px-4 py-2 text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors" href="#">Solutions</a>
<a className="px-4 py-2 text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors" href="#">Ressources</a>
<a className="px-4 py-2 text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors" href="#">Entreprise</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:flex px-4 py-2 text-xs font-medium text-brand-600 border border-brand-200 rounded-lg hover:bg-brand-50 transition-colors" href="#">
                        Connexion
                    </a>
<a className="flex items-center gap-2 bg-brand-900 hover:bg-brand-800 text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-subtle hover:shadow-lg hover:-translate-y-0.5" href="#">
<span>DÉMARRER L'ARCHITECTURE</span>
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</header>
<main className="relative pt-24">
<div className="bg-grid absolute top-0 inset-x-0 h-[80vh] pointer-events-none z-0"></div>
<div className="noise-bg z-0"></div>

<section className="relative z-10 pt-20 pb-20 md:pt-32">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 space-y-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-200 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
<span className="text-[10px] font-mono uppercase tracking-wide text-brand-600">Nouvelle Architecture v2.0 Disponible</span>
</div>
<h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-brand-900">
                            Construire <br/>
                            l'avantage injuste <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-tech-cyan">de votre écosystème.</span>
</h1>
<p className="font-sans text-lg text-brand-600 max-w-xl leading-relaxed text-balance">
                            Nous remplaçons les sites web obsolètes par des plateformes digitales intelligentes, modulaires et conçues pour la domination de marché.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-brand-900 text-white rounded-xl font-medium text-sm transition-all hover:bg-accent hover:scale-[1.01] shadow-card" href="#">
                                Audit d'Architecture
                                <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white border border-brand-200 text-brand-900 rounded-xl font-medium text-sm transition-all hover:bg-brand-50 hover:border-brand-300" href="#">
<i className="w-4 h-4 text-brand-400" data-lucide="play-circle"></i>
                                Voir la Demo Platform
                            </a>
</div>

<div className="pt-8 flex items-center gap-6 border-t border-brand-200/60">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">L</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">S</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-xs font-bold text-gray-600">A</div>
</div>
<div className="text-xs font-medium text-brand-600">
                                Architectes pour <span className="text-brand-900 font-bold">Unicorns &amp; Fortune 500</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">

<div className="relative w-full aspect-square md:aspect-[4/3] perspective-1000">

<div className="absolute inset-0 bg-brand-100 rounded-2xl transform translate-x-4 translate-y-4 border border-brand-200/50"></div>

<div className="absolute inset-0 bg-white rounded-2xl shadow-float border border-brand-200 overflow-hidden flex flex-col">

<div className="h-12 border-b border-brand-100 flex items-center justify-between px-4 bg-brand-50/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/50"></div>
</div>
<div className="h-6 w-32 bg-brand-100 rounded text-[9px] flex items-center justify-center text-brand-400 font-mono">dashboard.digit.sys</div>
</div>

<div className="p-6 grid grid-cols-2 gap-4 h-full">
<div className="col-span-2 space-y-2">
<div className="h-4 w-1/3 bg-brand-100 rounded animate-pulse"></div>
<div className="h-32 bg-brand-50 rounded border border-brand-100 relative overflow-hidden">

<svg className="absolute bottom-0 left-0 right-0 text-accent/20" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0,10 Q20,20 40,10 T80,15 T100,5 V20 H0 Z" fill="currentColor"></path>
</svg>
</div>
</div>
<div className="bg-brand-50 rounded border border-brand-100 p-4 flex flex-col justify-between">
<div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center text-accent"><i className="w-4 h-4" data-lucide="trending-up"></i></div>
<div>
<div className="text-2xl font-display font-bold text-brand-900">+127%</div>
<div className="text-[10px] uppercase font-mono text-brand-500">Conversion Rate</div>
</div>
</div>
<div className="bg-brand-50 rounded border border-brand-100 p-4 flex flex-col justify-between">
<div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center text-tech-cyan"><i className="w-4 h-4" data-lucide="zap"></i></div>
<div>
<div className="text-2xl font-display font-bold text-brand-900">0.05s</div>
<div className="text-[10px] uppercase font-mono text-brand-500">TTFB Speed</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-6 top-20 bg-white p-4 rounded-xl shadow-float border border-brand-200 animate-[bounce_4s_infinite]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><i className="w-5 h-5" data-lucide="check"></i></div>
<div>
<div className="text-xs font-bold text-brand-900">Deployment Ready</div>
<div className="text-[10px] text-brand-500 font-mono">Build #9928 completed</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-brand-200 bg-white">
<div className="max-w-[1400px] mx-auto px-6 py-12">
<p className="text-center text-[10px] font-mono uppercase tracking-widest text-brand-400 mb-8">Partenaire technologique des infrastructures critiques</p>
<div className="flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-60 grayscale">
<img alt="Stripe" className="h-7" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"/>
<img alt="Vercel" className="h-5" src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png"/>
<svg className="h-6 w-auto text-brand-800 fill-current" viewbox="0 0 106 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.6 15.6c1.8-1.5 2.4-4 1.4-6.2-1.3-2.9-5.3-3.1-6.9-.3l-1.1 1.9-1-2C5.9 6.8 2.6 7 1.4 9.4c-1 2.2-.4 4.7 1.4 6.2l4.3 3.4 7.5-3.4zm10.7 3.5l1.6-1.5c-1.2-.5-1.9-1.3-2.3-2.2-.4.8-1.1 1.7-2.3 2.2l1.6 1.5c2.3-1.1 3.5-2.8 3.5-5.1 0-4-4.5-5.5-5.5-2.2-.3.9-.1 1.8.4 2.4l-1.3 1.2c-1-1.3-1.3-3.1-.7-4.8 1-3.2 5.5-4.4 8.5-2.1 1.8 1.4 2.5 3.7 1.7 5.7-.9 2.5-2.9 4-5.2 4.9zM52 14.6l-2-2.3c.6-1.1.2-2.1-.9-2.5-1.4-.4-2.5.6-2.5 1.9 0 2 1.9 2.5 4.3 2.3l.5 2c-4.3.4-6.8-.9-6.8-4.3 0-2.3 1.8-4.2 4.3-4.2 2.1 0 3.7 1.5 3.7 3.6 0 .5-.1.9-.3 1.3l2.3 2.6-2.6-.4zm15.6-6.4c1.1 1.6 1 3.6-.2 5-1.3 1.5-3.6 1.7-5.2.5-1.5-1.3-1.7-3.6-.5-5.2 1.2-1.5 3.6-1.7 5.2-.5.2.2.5.4.7.2zM89 12.3c0 4.1-3.9 6.8-8.1 5.6-1.9-.5-3.2-1.9-3.7-3.7l2.2-.7c.3 1.1 1 1.9 2.1 2.2 2.3.6 4.6-.9 4.6-3.3 0-2.2-2-3.8-4.4-3.5-2 .3-3.1 1.4-3.1 1.4l-1.8-1.4s1.7-1.8 4.7-2.2c3.8-.5 7.5 1.6 7.5 5.6zm13.1-3.7l-2.4 2.8 2.3 2.8h-2.9l-2.3-2.8v2.8H95V5.5h1.9v4.5l2.2-2.7h3z"></path></svg>
<span className="font-display font-bold text-xl tracking-tight">OpenAI</span>
<span className="font-display font-bold text-xl tracking-tight">SHOPIFY PLUS</span>
</div>
</div>
</section>

<section className="py-24 max-w-[1400px] mx-auto px-6">
<div className="mb-16">
<span className="text-accent font-mono text-xs uppercase tracking-wider mb-3 block">Architecture Modulaire</span>
<h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-900 mb-6 tracking-tight">
                    Une stack conçue pour<br/>la dominance.
                </h2>
<div className="h-1 w-20 bg-gradient-to-r from-accent to-tech-cyan"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">

<div className="bento-card md:col-span-2 rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-mesh opacity-50 transition-opacity group-hover:opacity-100"></div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 bg-brand-50 rounded-xl border border-brand-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-brand-900" data-lucide="layout-grid"></i>
</div>
<h3 className="font-display text-2xl font-bold text-brand-900 mb-2">Composabilité Core</h3>
<p className="text-brand-500 text-sm leading-relaxed max-w-sm">
                                Finis les monolithes. Nous déployons des architectures micro-services où chaque brique (CMS, PIM, Checkout) est la meilleure de sa catégorie.
                            </p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white border border-brand-200 rounded text-[10px] font-mono text-brand-500">NEXT.JS 14</span>
<span className="px-2 py-1 bg-white border border-brand-200 rounded text-[10px] font-mono text-brand-500">REACT SERVER COMPONENTS</span>
</div>
</div>
</div>

<div className="bento-card rounded-2xl p-8 relative group hover-lift">
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-tech-success"></div>
<i className="w-8 h-8 text-brand-400 mb-6 group-hover:text-accent transition-colors" data-lucide="shopping-bag"></i>
<h3 className="font-display text-xl font-bold text-brand-900 mb-2">Commerce</h3>
<p className="text-brand-500 text-xs leading-relaxed mb-4">
                        Infrastructures transactionnelles haute vélocité. 
                    </p>
<div className="mt-auto border-t border-brand-100 pt-4 flex justify-between items-center">
<span className="font-mono text-xs text-brand-400">UPTIME</span>
<span className="font-mono text-sm text-brand-900 font-bold">99.99%</span>
</div>
</div>

<div className="bento-card rounded-2xl p-8 relative group hover-lift">
<i className="w-8 h-8 text-brand-400 mb-6 group-hover:text-tech-cyan transition-colors" data-lucide="bot"></i>
<h3 className="font-display text-xl font-bold text-brand-900 mb-2">Intelligence</h3>
<p className="text-brand-500 text-xs leading-relaxed">
                        Vector search, personnalisation prédictive et automation workflows.
                    </p>
</div>

<div className="bento-card md:col-span-1 md:row-span-2 rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-50 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="mb-6">
<h3 className="font-display text-xl font-bold text-brand-900">Design System</h3>
<p className="text-brand-500 text-xs mt-2">Cohérence atomique.</p>
</div>

<div className="space-y-3 mt-4 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="h-8 bg-brand-100 rounded w-full animate-pulse"></div>
<div className="flex gap-2">
<div className="h-8 bg-accent/10 rounded w-1/3 border border-accent/20"></div>
<div className="h-8 bg-brand-100 rounded w-2/3"></div>
</div>
<div className="h-24 bg-brand-50 border border-brand-200 rounded p-2">
<div className="w-8 h-8 rounded-full bg-brand-200 mb-2"></div>
<div className="h-2 bg-brand-200 rounded w-1/2"></div>
</div>
</div>
<div className="mt-auto pt-6">
<a className="text-xs font-bold text-brand-900 flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                                Explorer la Librairie <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="bento-card md:col-span-3 rounded-2xl p-8 relative flex items-center overflow-hidden">
<div className="absolute right-0 top-0 bottom-0 w-1/2 bg-grid opacity-50 mask-image-l"></div>
<div className="relative z-10 max-w-lg">
<div className="flex items-center gap-3 mb-4">
<div className="px-2 py-1 bg-brand-900 text-white text-[10px] font-mono rounded">EDGE NETWORK</div>
<div className="text-[10px] font-mono text-brand-500">35 REGIONS</div>
</div>
<h3 className="font-display text-2xl font-bold text-brand-900 mb-3">Scale Global Natif</h3>
<p className="text-brand-500 text-sm">
                            Votre plateforme est déployée sur l'Edge. Contenu servi en &lt;50ms à New York, Paris, Tokyo. Multi-langue et multi-devise gérés par l'architecture, pas des plugins.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-brand-200">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20">
<div>
<h2 className="font-display text-4xl font-semibold text-brand-900 mb-8 tracking-tight">
                            De la Vision à<br/>l'Infrastructure.
                        </h2>
<div className="space-y-8 relative">

<div className="absolute left-[19px] top-4 bottom-4 w-[1px] bg-brand-200 z-0"></div>
<div className="relative z-10 flex gap-6 group">
<div className="w-10 h-10 rounded-full bg-white border border-brand-200 shadow-sm flex items-center justify-center font-mono text-sm text-brand-500 group-hover:border-accent group-hover:text-accent transition-colors">01</div>
<div>
<h4 className="text-lg font-bold text-brand-900">Audit Stratégique</h4>
<p className="text-brand-500 text-sm mt-2 leading-relaxed">Nous déconstruisons votre business model pour aligner la technologie sur vos objectifs de revenus à 3 ans.</p>
</div>
</div>
<div className="relative z-10 flex gap-6 group">
<div className="w-10 h-10 rounded-full bg-white border border-brand-200 shadow-sm flex items-center justify-center font-mono text-sm text-brand-500 group-hover:border-accent group-hover:text-accent transition-colors">02</div>
<div>
<h4 className="text-lg font-bold text-brand-900">Architecture &amp; Design</h4>
<p className="text-brand-500 text-sm mt-2 leading-relaxed">Conception des schémas de données, flux API et direction artistique premium (Light Theme Elite).</p>
</div>
</div>
<div className="relative z-10 flex gap-6 group">
<div className="w-10 h-10 rounded-full bg-white border border-brand-200 shadow-sm flex items-center justify-center font-mono text-sm text-brand-500 group-hover:border-accent group-hover:text-accent transition-colors">03</div>
<div>
<h4 className="text-lg font-bold text-brand-900">Engineering &amp; Deploy</h4>
<p className="text-brand-500 text-sm mt-2 leading-relaxed">Développement agile par sprints. Tests unitaires, E2E et audit de sécurité avant mise en production.</p>
</div>
</div>
</div>
</div>

<div className="bg-brand-50 rounded-2xl border border-brand-200 p-8 flex flex-col justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-30"></div>
<div className="relative z-10">
<h3 className="font-mono text-xs uppercase text-brand-500 mb-6 tracking-widest">Impact Métrique</h3>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-xl shadow-subtle border border-brand-100">
<div className="text-3xl font-display font-bold text-brand-900 mb-1">98/100</div>
<div className="text-[10px] font-mono text-brand-400">PERFORMANCE SCORE</div>
<div className="w-full bg-brand-100 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-tech-success h-full w-[98%]"></div>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-subtle border border-brand-100">
<div className="text-3xl font-display font-bold text-brand-900 mb-1">-45%</div>
<div className="text-[10px] font-mono text-brand-400">CAC (ACQUISITION)</div>
<div className="w-full bg-brand-100 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-accent h-full w-[45%]"></div>
</div>
</div>
<div className="col-span-2 bg-white p-6 rounded-xl shadow-subtle border border-brand-100 flex items-center justify-between">
<div>
<div className="text-xl font-display font-bold text-brand-900">Architecture Ready</div>
<div className="text-xs text-brand-500">API, Headless, AI-Native</div>
</div>
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1400px] mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-display text-3xl font-semibold text-brand-900">Intelligence Hub</h2>
<p className="text-brand-500 text-sm mt-2">Ressources stratégiques pour décideurs.</p>
</div>
<a className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors flex items-center gap-2" href="#">
                    Voir tout le cluster <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">
<article className="group cursor-pointer">
<div className="aspect-video bg-brand-100 rounded-lg mb-4 overflow-hidden relative border border-brand-200">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-4 left-4 px-2 py-1 bg-white/90 backdrop-blur rounded text-[10px] font-mono font-medium text-brand-800">ENGINEERING</div>
</div>
<h3 className="font-display text-lg font-bold text-brand-900 leading-tight mb-2 group-hover:text-accent transition-colors">
                        Pourquoi Vercel et Next.js dominent le marché Enterprise
                    </h3>
<p className="text-sm text-brand-500 line-clamp-2">
                        Analyse comparative des architectures monolithiques vs composables pour les revenus &gt;10M€.
                    </p>
</article>
<article className="group cursor-pointer">
<div className="aspect-video bg-brand-100 rounded-lg mb-4 overflow-hidden relative border border-brand-200">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-4 left-4 px-2 py-1 bg-white/90 backdrop-blur rounded text-[10px] font-mono font-medium text-brand-800">STRATÉGIE</div>
</div>
<h3 className="font-display text-lg font-bold text-brand-900 leading-tight mb-2 group-hover:text-accent transition-colors">
                        Le coût caché de la dette technique UX
                    </h3>
<p className="text-sm text-brand-500 line-clamp-2">
                        Comment une architecture mal conçue impacte votre conversion et votre valorisation.
                    </p>
</article>
<div className="bg-brand-900 rounded-xl p-8 flex flex-col justify-between text-white relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-glow opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center mb-6 backdrop-blur">
<i className="w-5 h-5 text-white" data-lucide="file-text"></i>
</div>
<h3 className="font-display text-xl font-bold mb-2">White Paper 2025</h3>
<p className="text-brand-300 text-sm mb-6">
                            "L'Architecture de la Croissance: Guide pour CEO &amp; CTO."
                        </p>
<button className="w-full py-3 bg-white text-brand-900 font-bold text-xs rounded hover:bg-brand-100 transition-colors">
                            TÉLÉCHARGEMENT DIRECT
                        </button>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-white border-t border-brand-200 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_70%)]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-display text-5xl md:text-6xl font-bold text-brand-900 mb-8 tracking-tight">
                    Prêt à changer <br/>d'échelle ?
                </h2>
<p className="text-lg text-brand-600 mb-10 max-w-2xl mx-auto">
                    Nous n'acceptons que 4 projets "Platform Scale" par an pour garantir une exécution d'élite. Vérifions votre éligibilité.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 bg-brand-900 hover:bg-black text-white rounded-xl font-bold text-sm shadow-float transition-transform hover:-translate-y-1">
                        DÉMARRER LE PROJET
                    </button>
<button className="px-8 py-4 bg-white border border-brand-200 hover:border-brand-400 text-brand-900 rounded-xl font-bold text-sm transition-colors">
                        PARLER À UN ARCHITECTE
                    </button>
</div>
<div className="mt-12 flex justify-center gap-8 text-[10px] font-mono text-brand-400 uppercase tracking-widest">
<span>Paris</span>
<span>•</span>
<span>New York</span>
<span>•</span>
<span>Remote First</span>
</div>
</div>
</section>
</main>

<footer className="bg-brand-50 border-t border-brand-200 pt-20 pb-10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-brand-900 text-white rounded flex items-center justify-center font-display font-bold text-xs">D</div>
<span className="font-display font-bold text-brand-900 tracking-tight">DIGIT PLATFORM</span>
</a>
<p className="text-xs text-brand-500 max-w-xs leading-relaxed mb-6">
                        Architecture digitale pour l'élite économique. Nous concevons les outils de votre domination de marché.
                    </p>
<div className="flex gap-4">
<a className="text-brand-400 hover:text-brand-900" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-brand-400 hover:text-brand-900" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-brand-400 hover:text-brand-900" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase text-brand-900 font-bold mb-4 tracking-wider">Produit</h4>
<ul className="space-y-3 text-xs text-brand-500">
<li><a className="hover:text-accent transition-colors" href="#">Architecture</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Design System</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Headless Commerce</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Performance</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase text-brand-900 font-bold mb-4 tracking-wider">Entreprise</h4>
<ul className="space-y-3 text-xs text-brand-500">
<li><a className="hover:text-accent transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Carrières</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase text-brand-900 font-bold mb-4 tracking-wider">Légal</h4>
<ul className="space-y-3 text-xs text-brand-500">
<li><a className="hover:text-accent transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-accent transition-colors" href="#">SLA</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Sécurité</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase text-brand-900 font-bold mb-4 tracking-wider">Status</h4>
<div className="flex items-center gap-2 mt-2">
<span className="w-2 h-2 rounded-full bg-tech-success"></span>
<span className="text-xs text-brand-500">All systems normal</span>
</div>
</div>
</div>
<div className="border-t border-brand-200 pt-8 flex justify-between items-center text-[10px] text-brand-400 font-mono">
<div>© 2024 DIGIT ARCHITECTURE INC.</div>
<div>PARIS • SAN FRANCISCO</div>
</div>
</div>
</footer>


    </>
  );
}
