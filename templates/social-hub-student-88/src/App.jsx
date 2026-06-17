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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
<div className="absolute inset-0 scanlines pointer-events-none z-0"></div>

<nav className="relative z-10 border-b border-white/[0.1] bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-white flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.2)]">
<span className="text-black text-xs font-mono font-medium tracking-tighter">42</span>
</div>
<span className="text-white text-sm font-mono tracking-widest uppercase">Connect</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-neutral-500">
<a className="hover:text-white transition-colors duration-200" href="#features">Fonctionnalités</a>
<a className="hover:text-white transition-colors duration-200" href="#interface">Interface</a>
<a className="hover:text-white transition-colors duration-200" href="#campus">Campus</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-mono uppercase tracking-widest text-white hover:text-neutral-400 transition-colors duration-200 hidden md:block" href="#">Login</a>
<a className="border border-white text-white px-4 py-2 text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-200" href="#">
                    Init
                </a>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 bg-white/[0.02] text-xs font-mono tracking-widest text-white uppercase mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<span className="text-white">&gt;_</span>
            Sys.Status: Bêta (Paris &amp; Lyon)
        </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white max-w-4xl mx-auto leading-[1.1] mb-6">
            Le hub social exclusif <br className="hidden md:block"/>des étudiants de <span className="font-mono">42</span><span className="blink">_</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Fil d'actualité, messagerie, historique de projets et espace photographie. 
            Tout votre campus réuni dans une interface brute conçue pour la concentration. Zéro bruit.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-white text-black px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-300 transition-colors duration-200 flex items-center justify-center gap-2" href="#">
                [ Connect via Intra ]
            </a>
<a className="w-full sm:w-auto px-6 py-3 text-xs font-mono uppercase tracking-widest text-white border border-white/20 hover:bg-white/[0.05] transition-colors duration-200 flex items-center justify-center" href="#interface">
                Explorer_UI
            </a>
</div>
</main>

<section className="relative z-10 max-w-6xl mx-auto px-6 w-full mb-32" id="interface">
<div className="border border-white/20 bg-[#000000] overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)] flex flex-col h-[600px]">

<div className="h-10 border-b border-white/20 bg-[#050505] flex items-center justify-between px-4">
<div className="text-xs font-mono text-neutral-500">root@42connect:~/interface$ ./start.sh</div>
<div className="flex items-center gap-2 text-neutral-600">
<iconify-icon icon="solar:minimize-square-2-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:maximize-square-2-linear" width="14"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:close-square-linear" width="14"></iconify-icon>
</div>
</div>

<div className="flex flex-grow overflow-hidden">

<div className="hidden md:flex flex-col w-64 border-r border-white/10 bg-[#030303] p-4">
<div className="space-y-1 mb-8 text-xs font-mono uppercase tracking-widest text-neutral-500">
<div className="flex items-center gap-3 px-3 py-2 bg-white/[0.08] text-white border-l-2 border-white">
<iconify-icon icon="solar:feed-linear" width="18"></iconify-icon> /feed
                        </div>
<div className="flex items-center gap-3 px-3 py-2 hover:bg-white/[0.03] transition-colors cursor-pointer border-l-2 border-transparent">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon> /msg
                            <span className="ml-auto bg-white text-black text-[10px] px-1.5 py-0.5">3</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 hover:bg-white/[0.03] transition-colors cursor-pointer border-l-2 border-transparent">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon> /campus
                        </div>
<div className="flex items-center gap-3 px-3 py-2 hover:bg-white/[0.03] transition-colors cursor-pointer border-l-2 border-transparent">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon> /photo
                        </div>
</div>
<div className="mt-auto">
<div className="text-[10px] font-mono text-white/40 px-3 mb-3 tracking-widest">&gt;&gt; PROCESSUS ACTUELS</div>
<div className="space-y-1 text-xs font-mono text-neutral-400">
<div className="flex items-center gap-2 px-3 py-1.5 hover:text-white cursor-pointer">
<span className="text-neutral-600">└─</span> minshell
                            </div>
<div className="flex items-center gap-2 px-3 py-1.5 hover:text-white cursor-pointer">
<span className="text-neutral-600">└─</span> cub3d
                            </div>
</div>
</div>
</div>

<div className="flex-grow border-r border-white/10 bg-[#000000] flex flex-col relative overflow-hidden">
<div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-[#030303]">
<span className="text-xs font-mono uppercase tracking-widest text-white">Activité_Paris</span>
<span className="text-[10px] font-mono text-neutral-600">LIVE // SECURE</span>
</div>
<div className="p-6 space-y-6 overflow-y-auto">

<div className="flex gap-4">
<div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
<span className="text-xs font-mono font-medium text-black uppercase">ag</span>
</div>
<div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-xs font-mono text-white">@agali</span>
<span className="text-[10px] font-mono text-neutral-600">T-MINUS 2H</span>
</div>
<p className="text-sm text-neutral-300 font-normal leading-relaxed mb-3">
                                    Enfin validé ft_transcendence après 3 semaines de debug sur les websockets. Si quelqu'un a besoin d'aide sur la partie NestJS, je suis en e2r1.
                                </p>
<div className="flex gap-6 text-neutral-500 font-mono text-[10px]">
<button className="flex items-center gap-2 hover:text-white transition-colors">
<iconify-icon icon="solar:heart-linear" width="14"></iconify-icon> ACK: 12
                                    </button>
<button className="flex items-center gap-2 hover:text-white transition-colors">
<iconify-icon icon="solar:chat-round-linear" width="14"></iconify-icon> REQ: 4
                                    </button>
</div>
</div>
</div>

<div className="flex gap-4 pt-4 border-t border-white/[0.05]">
<div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
<span className="text-xs font-mono font-medium text-black uppercase">lb</span>
</div>
<div className="w-full">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-xs font-mono text-white">@lbrunet</span>
<span className="text-[10px] font-mono text-neutral-600">T-MINUS 5H</span>
</div>
<p className="text-sm text-neutral-300 font-normal leading-relaxed mb-3">
                                    Coucher de soleil depuis le cluster 3.
                                </p>
<div className="w-full h-48 border border-white/10 bg-[#050505] mb-3 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 scanlines opacity-50"></div>
<iconify-icon className="text-neutral-700" icon="solar:gallery-linear" width="24"></iconify-icon>
</div>
<div className="flex gap-6 text-neutral-500 font-mono text-[10px]">
<button className="flex items-center gap-2 hover:text-white transition-colors">
<iconify-icon icon="solar:heart-linear" width="14"></iconify-icon> ACK: 45
                                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex flex-col w-72 bg-[#030303] p-6">
<div className="mb-10">
<h3 className="text-[10px] font-mono text-neutral-500 mb-4 tracking-widest uppercase border-b border-white/10 pb-2">SYS.EVENTS</h3>
<div className="space-y-4">
<div className="flex gap-3">
<div className="flex flex-col items-center justify-center w-12 h-12 bg-black border border-white/20 flex-shrink-0">
<span className="text-[10px] font-mono text-neutral-500">JEU</span>
<span className="text-sm font-mono text-white">14</span>
</div>
<div>
<div className="text-xs font-mono text-white uppercase">Conférence IA</div>
<div className="text-[10px] font-mono text-neutral-600 mt-1">Amphithéâtre // 18:00</div>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-[10px] font-mono text-neutral-500 mb-4 tracking-widest uppercase border-b border-white/10 pb-2">SYS.PEERS</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-neutral-800 border border-white/10"></div>
<div className="text-xs font-mono text-white">@mdupon</div>
</div>
<button className="text-[10px] font-mono text-neutral-500 hover:text-white border border-transparent hover:border-white/20 px-2 py-1 transition-all">LINK</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-neutral-800 border border-white/10"></div>
<div className="text-xs font-mono text-white">@jmartin</div>
</div>
<button className="text-[10px] font-mono text-neutral-500 hover:text-white border border-transparent hover:border-white/20 px-2 py-1 transition-all">LINK</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-16 mb-24" id="features">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tighter mb-4">Pensé pour le workflow 42</h2>
<p className="text-sm text-neutral-400 font-mono max-w-xl mx-auto">&gt; Aucune distraction. Performance maximale.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-6 border border-white/10 bg-[#050505] hover:border-white/30 transition-colors duration-300 group">
<div className="mb-4 text-white">
<iconify-icon icon="solar:clapperboard-edit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xs font-mono text-white mb-3 tracking-widest uppercase">/feed</h3>
<p className="text-xs text-neutral-500 font-normal leading-relaxed">Suivez l'activité de vos pairs, les annonces du bocal et les validations de projets de votre campus.</p>
</div>

<div className="p-6 border border-white/10 bg-[#050505] hover:border-white/30 transition-colors duration-300 group">
<div className="mb-4 text-white">
<iconify-icon icon="solar:chat-square-code-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xs font-mono text-white mb-3 tracking-widest uppercase">/msg</h3>
<p className="text-xs text-neutral-500 font-normal leading-relaxed">Échangez rapidement pour des peer-évaluations, trouvez de l'aide sur un projet ou organisez des groupes de travail.</p>
</div>

<div className="p-6 border border-white/10 bg-[#050505] hover:border-white/30 transition-colors duration-300 group">
<div className="mb-4 text-white">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xs font-mono text-white mb-3 tracking-widest uppercase">/profile</h3>
<p className="text-xs text-neutral-500 font-normal leading-relaxed">Mettez en avant votre historique de projets, votre niveau, et connectez-vous avec des étudiants.</p>
</div>

<div className="p-6 border border-white/10 bg-[#050505] hover:border-white/30 transition-colors duration-300 group">
<div className="mb-4 text-white">
<iconify-icon icon="solar:camera-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xs font-mono text-white mb-3 tracking-widest uppercase">/photo</h3>
<p className="text-xs text-neutral-500 font-normal leading-relaxed">Une section dédiée pour partager l'ambiance du campus, vos setups ou les moments forts de la piscine.</p>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 bg-[#030303]">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div>
<h2 className="text-xl font-medium text-white tracking-tighter mb-2">Prêt à rejoindre le réseau ?</h2>
<p className="text-xs font-mono text-neutral-500">&gt; Execute auth.sh</p>
</div>
<a className="bg-white text-black px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-300 transition-colors duration-200" href="#">
                    [ Init Connection ]
                </a>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-white flex items-center justify-center">
<span className="text-black text-[10px] font-mono font-medium">42</span>
</div>
<span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">Connect_SYS</span>
</div>
<div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest text-neutral-600">
<a className="hover:text-white transition-colors" href="#">X.COM</a>
<a className="hover:text-white transition-colors" href="#">GITHUB</a>
<a className="hover:text-white transition-colors" href="#">PRIVACY</a>
<a className="hover:text-white transition-colors" href="#">TERMS</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
