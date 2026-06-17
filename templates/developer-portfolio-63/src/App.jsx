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
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
animation: {
'blob': 'blob 7s infinite',
'scrolling': 'scrolling 40s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scrolling: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}

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
      

<div className="noise-bg"></div>

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
<div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[25rem] h-[25rem] bg-pink-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white hover:opacity-80 transition-opacity" href="#">
                alex<span className="text-indigo-400">.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#projects">Projets</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
<a className="hover:text-white transition-colors" href="#about">À propos</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-zinc-950 text-xs font-semibold rounded-full hover:bg-zinc-200 transition-colors tracking-wide" href="#contact">
                Me contacter
                <iconify-icon height="16" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-zinc-300">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">

<header className="mb-24 text-center md:text-left relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Disponible pour de nouveaux projets
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] mb-6">
                Créatif <br/>
<span className="gradient-text font-semibold">Développeur.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl font-light leading-relaxed mb-8">
                Je conçois des expériences numériques immersives et performantes. Spécialisé dans le design d'interface moderne et le développement front-end réactif.
            </p>
<div className="flex flex-col md:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-white text-zinc-950 font-medium rounded-full hover:scale-[1.02] transition-transform active:scale-95 text-sm" href="#projects">
                    Voir mes travaux
                    <iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-zinc-800/50 border border-white/10 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors text-sm" href="https://github.com" target="_blank">
<iconify-icon icon="lucide:github" strokeWidth="1.5" width="16"></iconify-icon>
                    GitHub
                </a>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]" id="projects">

<div className="group glass-card rounded-3xl p-6 md:col-span-2 lg:col-span-2 relative overflow-hidden transition-all duration-300 hover:border-indigo-500/30">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex flex-col h-full justify-between relative z-10">
<div className="flex justify-between items-start">
<div className="p-2 bg-zinc-900/50 rounded-lg border border-white/5">
<iconify-icon className="text-indigo-400" icon="lucide:layout-template" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 font-mono">2023</span>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-2 text-white">Lumina Dashboard</h3>
<p className="text-zinc-400 text-sm mb-4">Une interface d'analyse SaaS avec visualisation de données en temps réel.</p>
<div className="flex gap-2">
<span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-zinc-300">React</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-zinc-300">Tailwind</span>
</div>
</div>
</div>

<div className="absolute -right-12 -bottom-12 w-64 h-48 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl transform rotate-[-12deg] group-hover:rotate-[-8deg] transition-transform duration-500 p-4">
<div className="flex gap-2 mb-3">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="space-y-2">
<div className="h-8 w-full bg-white/5 rounded"></div>
<div className="flex gap-2">
<div className="h-20 w-1/3 bg-indigo-500/20 rounded"></div>
<div className="h-20 w-2/3 bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-0 md:col-span-1 overflow-hidden relative group" id="stack">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
<div className="p-6 pb-0 relative z-20">
<h3 className="text-lg font-semibold tracking-tight text-zinc-200">Ma Stack</h3>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-40 blur-3xl bg-purple-500/20"></div>
<div className="mt-8 space-y-4">

<div className="flex gap-4 animate-scrolling w-[200%]">
<div className="flex gap-4 items-center">
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:react" width="24"></iconify-icon></div>
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:tailwindcss-icon" width="24"></iconify-icon></div>
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:typescript-icon" width="24"></iconify-icon></div>
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:figma" width="24"></iconify-icon></div>
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:nextjs-icon" width="24"></iconify-icon></div>

<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:react" width="24"></iconify-icon></div>
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:tailwindcss-icon" width="24"></iconify-icon></div>
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:typescript-icon" width="24"></iconify-icon></div>
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:figma" width="24"></iconify-icon></div>
</div>
</div>

<div className="flex gap-4 animate-scrolling w-[200%] style={{animationDirection: 'reverse'}}">
<div className="flex gap-4 items-center">
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:nodejs-icon" width="24"></iconify-icon></div>
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:postgresql" width="24"></iconify-icon></div>
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:git-icon" width="24"></iconify-icon></div>
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:vercel-icon" width="24"></iconify-icon></div>

<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:nodejs-icon" width="24"></iconify-icon></div>
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:postgresql" width="24"></iconify-icon></div>
<div className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-xl border border-white/5"><iconify-icon icon="logos:git-icon" width="24"></iconify-icon></div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-6 flex flex-col justify-center items-center text-center gap-4 hover:bg-white/5 transition-colors group cursor-pointer">
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center text-white shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white">Contactez-moi</h3>
<p className="text-xs text-zinc-500 mt-1">Réponse sous 24h</p>
</div>
</div>

<div className="group glass-card rounded-3xl p-6 md:col-span-1 lg:col-span-1 relative overflow-hidden flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white">EcoTrack App</h3>
<p className="text-zinc-400 text-xs mt-2 leading-relaxed">Application mobile cross-platform pour le suivi d'empreinte carbone.</p>
</div>
<div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-300 relative z-10 group-hover:translate-x-1 transition-transform">
                    Voir détails <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>

<div className="glass-card rounded-3xl p-8 md:col-span-2 lg:col-span-2 flex flex-col justify-center relative overflow-hidden" id="about">

<div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px]"></div>
<iconify-icon className="text-zinc-700 mb-4" icon="lucide:quote" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-xl md:text-2xl font-medium tracking-tight text-zinc-200 leading-snug">
                    "Le design n'est pas seulement ce à quoi il ressemble et ce qu'on ressent. Le design, c'est <span className="text-white border-b border-indigo-500">comment ça fonctionne</span>."
                </p>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-400">SJ</div>
<span className="text-xs text-zinc-500 font-medium">Steve Jobs</span>
</div>
</div>

<div className="glass-card rounded-3xl p-6 flex flex-col justify-between group hover:border-white/20 transition-colors">
<div>
<h4 className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Expérience</h4>
<div className="text-4xl font-semibold tracking-tighter text-white">5+ <span className="text-xl text-zinc-500 font-normal">ans</span></div>
</div>
<div className="w-full bg-zinc-800 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[75%] rounded-full"></div>
</div>
</div>
</section>

<section className="mt-24 max-w-4xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight mb-8 flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="lucide:sparkles" width="20"></iconify-icon>
                Services
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800/50 border border-white/5 rounded-2xl overflow-hidden">

<div className="bg-zinc-900/80 p-6 hover:bg-zinc-900 transition-colors group">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-zinc-300 group-hover:text-indigo-400 group-hover:scale-110 transition-all">
<iconify-icon icon="lucide:monitor" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Développement Web</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Sites vitrines, applications web complexes et plateformes e-commerce optimisées.</p>
</div>

<div className="bg-zinc-900/80 p-6 hover:bg-zinc-900 transition-colors group">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-zinc-300 group-hover:text-purple-400 group-hover:scale-110 transition-all">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">UI/UX Design</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Création d'interfaces intuitives, maquettage Figma et prototypage interactif.</p>
</div>

<div className="bg-zinc-900/80 p-6 hover:bg-zinc-900 transition-colors group">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-zinc-300 group-hover:text-pink-400 group-hover:scale-110 transition-all">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Performance</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Optimisation SEO, temps de chargement et accessibilité (Core Web Vitals).</p>
</div>

<div className="bg-zinc-900/80 p-6 hover:bg-zinc-900 transition-colors group">
<div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-zinc-300 group-hover:text-emerald-400 group-hover:scale-110 transition-all">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Clean Code</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Code maintenable, scalable et respectant les meilleures pratiques actuelles.</p>
</div>
</div>
</section>

<section className="mt-32 text-center" id="contact">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Prêt à collaborer ?</h2>
<p className="text-zinc-400 mb-8 max-w-lg mx-auto">Transformons vos idées en réalité digitale. Discutons de votre prochain projet autour d'un café virtuel.</p>
<form className="max-w-md mx-auto space-y-3 text-left" onsubmit="event.preventDefault();">
<div>
<input className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all" placeholder="votre@email.com" type="email"/>
</div>
<div>
<textarea className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all" placeholder="Parlez-moi de votre projet..." rows="3"></textarea>
</div>
<button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20">
                    Envoyer le message
                </button>
</form>
</section>
</main>

<footer className="border-t border-white/5 py-12 bg-zinc-950 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/5 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2024 Alex Dev. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
