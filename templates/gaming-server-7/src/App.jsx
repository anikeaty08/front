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
sans: ['Outfit', 'sans-serif'],
pixel: ['VT323', 'monospace'],
},
colors: {
brand: {
purple: '#8b5cf6',
lime: '#84cc16',
orange: '#f97316',
dark: '#0f172a',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-brand-orange to-brand-purple rounded flex items-center justify-center font-pixel text-xl text-white">P</div>
<span className="font-pixel text-2xl tracking-tight text-white">POLOGEEK</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-brand-lime transition-colors" href="#about">Concept</a>
<a className="hover:text-brand-lime transition-colors" href="#features">Features</a>
<a className="hover:text-brand-lime transition-colors" href="#join">Rejoindre</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium transition-all group" href="https://discord.com" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Discord</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.07]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none"></div>

<div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px]"></div>
<div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange/20 rounded-full blur-[100px]"></div>

<div className="absolute top-32 right-[15%] text-white/5 animate-float hidden lg:block">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="absolute bottom-32 left-[15%] text-white/5 animate-float-delayed hidden lg:block">
<iconify-icon icon="solar:gamepad-charge-linear" strokeWidth="1" width="56"></iconify-icon>
</div>
<div className="relative z-10 container mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-lime mb-6 hover:bg-white/10 transition-colors cursor-default">
<span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
<span>En Ligne • 124 Joueurs</span>
</div>

<h1 className="font-pixel text-7xl md:text-9xl tracking-tight text-white mb-4 leading-none select-none">
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">POLOGEEK</span>
<span className="text-brand-orange">RP</span>
</h1>

<p className="text-xl md:text-2xl text-slate-400 font-light mb-8 max-w-2xl mx-auto">
                GTA meets Minecraft. Le serveur <span className="text-white font-medium">Roleplay Ultime</span> où les blocs rencontrent la rue.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-brand-lime text-slate-950 font-pixel text-xl hover:bg-lime-400 transition-all transform hover:-translate-y-1 shadow-[0_4px_0_rgb(63,98,18)] active:translate-y-0 active:shadow-none rounded" href="#join">
                    Rejoindre le serveur
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-slate-800 text-white font-pixel text-xl hover:bg-slate-700 transition-all border border-slate-700 rounded flex items-center justify-center gap-2" href="https://discord.com">
<iconify-icon icon="solar:chat-square-code-linear" width="20"></iconify-icon>
                    Rejoindre Discord
                </a>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 flex items-end justify-center opacity-20 pointer-events-none space-x-1">
<div className="w-8 h-16 bg-brand-purple/50"></div>
<div className="w-12 h-24 bg-brand-orange/50"></div>
<div className="w-10 h-12 bg-white/50"></div>
<div className="w-14 h-32 bg-brand-lime/50"></div>
<div className="w-8 h-20 bg-brand-purple/50"></div>
<div className="w-16 h-10 bg-white/50"></div>

</div>
</div>
</header>

<section className="py-24 relative overflow-hidden" id="about">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="font-pixel text-4xl md:text-5xl text-white tracking-tight">
                        C'est quoi <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">Pologeek?</span>
</h2>
<p className="text-slate-400 leading-relaxed font-light text-lg">
                        Imaginez Los Santos mais construit cube par cube. Pologeek RP fusionne l'intensité du roleplay GTA (gangs, économie réaliste, police) avec l'esthétique unique de Minecraft.
                    </p>
<ul className="space-y-4 text-sm font-medium text-slate-300">
<li className="flex items-center gap-3">
<div className="p-1 rounded bg-brand-lime/10 text-brand-lime">
<iconify-icon icon="solar:check-square-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
                            Une économie 100% gérée par les joueurs
                        </li>
<li className="flex items-center gap-3">
<div className="p-1 rounded bg-brand-orange/10 text-brand-orange">
<iconify-icon icon="solar:check-square-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
                            Véhicules moddés et textures HD
                        </li>
<li className="flex items-center gap-3">
<div className="p-1 rounded bg-brand-purple/10 text-brand-purple">
<iconify-icon icon="solar:check-square-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
                            Système vocal 3D immersif
                        </li>
</ul>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-orange via-brand-purple to-brand-lime rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative aspect-video bg-slate-900 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628277613967-6ab58cf56736?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay"></div>
<div className="text-center z-10">
<iconify-icon className="text-white mb-2" icon="solar:play-circle-linear" width="48"></iconify-icon>
<p className="font-pixel text-xl text-white">Voir le Trailer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/50 border-y border-white/5" id="features">
<div className="container mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-pixel text-4xl md:text-5xl text-white tracking-tight mb-4">Fonctionnalités Exclusives</h2>
<p className="text-slate-400 font-light">Tout ce dont vous avez besoin pour vivre votre meilleure vie (ou la pire) en ville.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-slate-950 border border-white/5 hover:border-brand-orange/50 hover:bg-slate-900/80 transition-all group">
<div className="w-12 h-12 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Véhicules Custom</h3>
<p className="text-sm text-slate-400 leading-relaxed">Des supercars aux lowriders, conduisez des modèles 3D exclusifs avec physique réaliste.</p>
</div>

<div className="p-6 rounded-xl bg-slate-950 border border-white/5 hover:border-brand-lime/50 hover:bg-slate-900/80 transition-all group">
<div className="w-12 h-12 rounded-lg bg-brand-lime/10 text-brand-lime flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:case-round-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Métiers &amp; Économie</h3>
<p className="text-sm text-slate-400 leading-relaxed">Devenez policier, médecin, mécanicien ou entrepreneur. Gagnez votre argent honnêtement.</p>
</div>

<div className="p-6 rounded-xl bg-slate-950 border border-white/5 hover:border-brand-purple/50 hover:bg-slate-900/80 transition-all group">
<div className="w-12 h-12 rounded-lg bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:skull-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Gangs &amp; Territoires</h3>
<p className="text-sm text-slate-400 leading-relaxed">Contrôlez les quartiers, gérez le trafic et défendez votre zone contre les gangs rivaux.</p>
</div>

<div className="p-6 rounded-xl bg-slate-950 border border-white/5 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all group">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Police &amp; Justice</h3>
<p className="text-sm text-slate-400 leading-relaxed">Un système judiciaire complet avec codes pénaux, avocats et prisons sécurisées.</p>
</div>

<div className="p-6 rounded-xl bg-slate-950 border border-white/5 hover:border-pink-500/50 hover:bg-slate-900/80 transition-all group">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 text-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Map Urbaine</h3>
<p className="text-sm text-slate-400 leading-relaxed">Une ville gigantesque construite sur mesure avec des appartements achetables et meublables.</p>
</div>

<div className="p-6 rounded-xl bg-slate-950 border border-white/5 hover:border-teal-400/50 hover:bg-slate-900/80 transition-all group">
<div className="w-12 h-12 rounded-lg bg-teal-400/10 text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Communauté Active</h3>
<p className="text-sm text-slate-400 leading-relaxed">Staff à l'écoute, événements réguliers et une ambiance chill pour les 12-18 ans.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="container mx-auto px-6">
<h2 className="font-pixel text-4xl text-white tracking-tight mb-8">La Vie en Ville</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
<div className="col-span-2 row-span-2 bg-slate-900 rounded-xl border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 flex items-center justify-center text-slate-700 font-pixel text-2xl group-hover:text-brand-orange transition-colors">Centre Ville</div>
<div className="absolute bottom-4 left-4 p-2 bg-black/50 backdrop-blur rounded text-xs text-white">Place des Cubes</div>
</div>
<div className="bg-slate-900 rounded-xl border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 flex items-center justify-center text-slate-700 font-pixel text-xl group-hover:text-brand-lime transition-colors">Commissariat</div>
</div>
<div className="bg-slate-900 rounded-xl border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 flex items-center justify-center text-slate-700 font-pixel text-xl group-hover:text-brand-purple transition-colors">Concessionnaire</div>
</div>
<div className="col-span-2 bg-slate-900 rounded-xl border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 flex items-center justify-center text-slate-700 font-pixel text-xl group-hover:text-white transition-colors">Quartier Résidentiel</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-t from-slate-900 to-slate-950 relative" id="join">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-brand-lime to-transparent opacity-50"></div>
<div className="container mx-auto px-6 text-center">
<h2 className="font-pixel text-4xl md:text-6xl text-white tracking-tight mb-16">Commencer l'Aventure</h2>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800 -z-10"></div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:border-brand-purple/50 transition-colors">
<iconify-icon className="text-brand-purple" icon="solar:download-square-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">1. Télécharge</h3>
<p className="text-sm text-slate-400">Assure-toi d'avoir Minecraft Java Edition version <span className="text-white">1.20.1</span></p>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:border-brand-lime/50 transition-colors">
<iconify-icon className="text-brand-lime" icon="solar:copy-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">2. Copie l'IP</h3>
<div className="mt-2 flex items-center justify-center gap-2">
<code className="bg-black/30 px-3 py-1.5 rounded text-brand-lime text-sm font-mono border border-white/5">play.pologeek.fr</code>
<button className="text-slate-400 hover:text-white transition-colors" title="Copier">
<iconify-icon icon="solar:copy-bold" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:border-brand-orange/50 transition-colors">
<iconify-icon className="text-brand-orange" icon="solar:gamepad-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">3. Connecte-toi</h3>
<p className="text-sm text-slate-400">Lance le jeu, ajoute le serveur et rejoins la ville !</p>
</div>
</div>
<div className="mt-16">
<p className="text-slate-500 text-sm mb-4">Besoin d'aide pour l'installation ?</p>
<a className="inline-flex items-center gap-2 text-white border-b border-brand-lime/50 pb-0.5 hover:text-brand-lime transition-colors" href="#">
<span>Consulter le guide complet sur Discord</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 py-12">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center font-pixel text-xs text-white">P</div>
<span className="font-pixel text-xl text-slate-400">POLOGEEK RP</span>
</div>
<div className="flex items-center gap-6 text-sm text-slate-500">
<a className="hover:text-brand-orange transition-colors" href="#">Règlement</a>
<a className="hover:text-brand-orange transition-colors" href="#">Boutique</a>
<a className="hover:text-brand-orange transition-colors" href="#">Staff</a>
<a className="hover:text-brand-orange transition-colors" href="#">Support</a>
</div>
<div className="flex items-center gap-4">
<a className="text-slate-500 hover:text-[#5865F2] transition-colors" href="#">
<iconify-icon icon="logos:discord-icon" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-[#FF0000] transition-colors" href="#">
<iconify-icon icon="logos:youtube-icon" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-[#1DA1F2] transition-colors" href="#">
<iconify-icon icon="logos:twitter" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="mt-8 text-center md:text-left text-xs text-slate-600 font-light">
                © 2023 Pologeek RP. Not affiliated with Mojang or Rockstar Games. Design inspired by the streets.
            </div>
</div>
</footer>

    </>
  );
}
