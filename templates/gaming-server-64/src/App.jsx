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
      

<div className="fixed inset-0 z-[-2] pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px'}}></div>

<div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px] z-[-1] pointer-events-none animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[50%] rounded-full bg-indigo-900/20 blur-[150px] z-[-1] pointer-events-none animate-pulse" style={{animationDuration: '6s'}}></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#050505]/70 border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-['Montserrat',sans-serif] text-xl font-semibold tracking-tighter text-white flex items-center gap-2 group" href="#">
<iconify-icon className="text-purple-500 text-2xl group-hover:rotate-90 transition-transform duration-700" icon="solar:planet-linear" strokeWidth="1.5"></iconify-icon>
                CMU
            </a>

<div className="hidden md:flex items-center space-x-1">
<a className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" href="#">YouTube</a>
<a className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" href="#">Serwer</a>
<a className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" href="#">Sklep</a>
<a className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" href="#">Social Media</a>

<div className="h-4 w-px bg-white/10 mx-2"></div>
<button className="px-4 py-2 text-sm font-medium text-purple-400/70 hover:text-purple-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                    Regulamin
                </button>
<button className="px-4 py-2 text-sm font-medium text-purple-400/70 hover:text-purple-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] flex items-center gap-2">
<iconify-icon icon="solar:shield-user-linear" strokeWidth="1.5"></iconify-icon>
                    Administracja
                </button>
</div>

<button className="md:hidden text-gray-400 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-[2px]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full max-h-[400px] bg-gradient-to-b from-transparent via-purple-500/30 to-transparent blur-[2px]"></div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 text-xs font-medium mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                Status: Online
            </div>
<h1 className="font-['Montserrat',sans-serif] text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]" style={{textShadow: '0 0 40px rgba(168, 85, 247, 0.4), 0 0 100px rgba(168, 85, 247, 0.2)'}}>
                Cyber <br className="md:hidden"/> Minecraft <br/> Universe
            </h1>
<p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
                Wejdź do nowego wymiaru rozgrywki. Odkryj futurystyczny świat, gdzie technologia spotyka się z nieskończonymi możliwościami.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 group">
<iconify-icon className="text-xl group-hover:-translate-y-0.5 transition-transform" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
                    Graj Teraz
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-purple-500/50 text-purple-300 font-medium rounded-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2 group relative overflow-hidden">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
<iconify-icon className="text-xl" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
                    Odwiedź Sklep
                </button>
</div>
</div>
</header>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-['Montserrat',sans-serif] text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Wymiar Innowacji</h2>
<p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">Zaprojektowany z myślą o wydajności i unikalnych mechanikach. Poznaj funkcje, które definiują nasz serwer.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-colors duration-500 overflow-hidden flex flex-col items-start">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] group-hover:bg-purple-500/20 transition-colors duration-700"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Montserrat',sans-serif] text-xl font-medium text-white mb-3 tracking-tight">Wydajność Core</h3>
<p className="text-sm text-gray-400 leading-relaxed">Autorskie optymalizacje silnika zapewniają płynną rozgrywkę nawet podczas najbardziej intensywnych bitew i eventów.</p>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-colors duration-500 overflow-hidden flex flex-col items-start">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Montserrat',sans-serif] text-xl font-medium text-white mb-3 tracking-tight">Cyber Ekonomia</h3>
<p className="text-sm text-gray-400 leading-relaxed">Zbalansowany rynek, zaawansowany system handlu i wirtualne waluty. Zbuduj swoje imperium od podstaw.</p>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-colors duration-500 overflow-hidden flex flex-col items-start">
<div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-[40px] group-hover:bg-fuchsia-500/20 transition-colors duration-700"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Montserrat',sans-serif] text-xl font-medium text-white mb-3 tracking-tight">Społeczność</h3>
<p className="text-sm text-gray-400 leading-relaxed">System gildii, sojusze i wojny o terytoria. Dołącz do tysięcy graczy i twórzcie wspólnie historię serwera.</p>
</div>
</div>
</div>
</section>

<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-purple-500 blur-[2px]"></div>
</div>

<section className="py-16 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
<div className="md:w-1/2">
<h2 className="font-['Montserrat',sans-serif] text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Dołącz do dyskusji</h2>
<p className="text-sm text-gray-400 mb-8 max-w-md">Nasz Discord to centrum dowodzenia. Znajdziesz tam ogłoszenia, pomoc techniczną i kanały głosowe do gry z ekipą.</p>
<button className="px-6 py-3 bg-[#5865F2]/10 border border-[#5865F2]/30 text-[#5865F2] font-medium rounded-lg hover:bg-[#5865F2] hover:text-white transition-all duration-300 flex items-center gap-2 group">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
                    Discord Serwera
                </button>
</div>
<div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
<div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl text-center backdrop-blur-sm">
<div className="text-3xl font-['Montserrat',sans-serif] text-white tracking-tight mb-1">1,240</div>
<div className="text-xs text-gray-500 uppercase tracking-widest">Graczy Online</div>
</div>
<div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl text-center backdrop-blur-sm">
<div className="text-3xl font-['Montserrat',sans-serif] text-white tracking-tight mb-1">99.9%</div>
<div className="text-xs text-gray-500 uppercase tracking-widest">Uptime</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-16 pb-8 mt-20 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<a className="font-['Montserrat',sans-serif] text-xl font-medium tracking-tighter text-white/50 hover:text-white transition-colors flex items-center gap-2 mb-8 group" href="#">
<iconify-icon className="text-xl group-hover:text-purple-500 transition-colors" icon="solar:planet-linear" strokeWidth="1.5"></iconify-icon>
                CMU
            </a>
<div className="flex items-center space-x-6 mb-12">
<a className="text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" href="#">
<iconify-icon className="text-2xl" icon="solar:clapperboard-play-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" href="#">
<iconify-icon className="text-2xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" href="#">
<iconify-icon className="text-2xl" icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="text-xs text-gray-600 flex flex-col md:flex-row items-center gap-4 text-center">
<span>© 2024 Cyber Minecraft Universe. Wszelkie prawa zastrzeżone.</span>
<span className="hidden md:inline text-gray-800">|</span>
<div className="flex gap-4">
<a className="hover:text-gray-300 transition-colors" href="#">Polityka Prywatności</a>
<a className="hover:text-gray-300 transition-colors" href="#">Kontakt</a>
</div>
</div>
</div>
</footer>

<style>
        @keyframes shimmer {
            100% {
                transform: translateX(100%);
            }
        }
    </style>



    </>
  );
}
