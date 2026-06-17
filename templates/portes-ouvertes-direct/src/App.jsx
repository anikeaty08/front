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
      

<div className="fb_reset" id="fb-root"><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div><div style={{position: 'absolute', top: '-10000px', width: '0px', height: '0px'}}><div></div></div></div>


<header className="w-full h-[64px] px-6 flex justify-center items-center absolute top-0 z-20 bg-[#FDFBF7] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
<div className="tracking-widest font-serif font-semibold text-[20px] text-[#C9A227] uppercase">ICC</div>
</header>

<section className="overflow-hidden flex flex-col animate-on-load md:pt-40 md:pl-4 md:pr-4 md:pb-24 text-center bg-[#FDFBF7] pt-32 pr-4 pb-20 pl-4 relative items-center justify-center">

<div className="absolute top-1/4 left-1/4 text-[#C9A227] opacity-[0.04]"><iconify-icon className="text-8xl" icon="solar:star-fall-linear" strokeWidth="2"></iconify-icon></div>
<div className="absolute top-1/3 right-1/4 text-[#6B8F71] opacity-[0.04]"><iconify-icon className="text-9xl" icon="solar:stars-linear" strokeWidth="2"></iconify-icon></div>
<div className="absolute bottom-1/4 left-1/3 text-[#C9A227] opacity-[0.04]"><iconify-icon className="text-8xl" icon="solar:heart-linear" strokeWidth="2"></iconify-icon></div>
<div className="inline-flex items-center gap-2 px-[10px] py-[4px] rounded-[6px] bg-[#6B8F71]/12 mb-6 z-10">
<span className="relative flex h-2 w-2">
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#6B8F71]"></span>
</span>
<span className="text-[11px] font-medium text-[#6B8F71] uppercase tracking-wide">14 mai 2026 — En direct</span>
</div>
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight mb-4 max-w-[800px] z-10 leading-snug font-semibold">
            Journée Portes Ouvertes de l'ICC
        </h1>
<p className="font-serif italic text-xl md:text-2xl text-[#2D3436]/55 mb-2 z-10">
            Bienvenue ! Vous êtes au bon endroit. Au bon moment.
        </p>
<p className="md:text-lg leading-relaxed text-base text-[#2D3436] font-sans max-w-[800px] z-10 mt-6 mb-8">Suivez le live, participez aux Cercles du Choix et découvrez nos formations pour passer de la confusion à la clarté.</p>
</section>

<section className="-mt-8 animate-on-load lg:px-8 py-20 md:py-24 w-full max-w-[1400px] z-20 mr-auto mb-16 ml-auto pr-4 pl-4 relative bg-[#FDFBF7]" id="stream">
<div className="flex flex-col lg:flex-row gap-6 lg:h-[600px]">

<div className="w-full lg:w-[60%] flex flex-col h-full card-icc overflow-hidden relative group p-0">
<div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F7F2EC] z-0">
<iconify-icon className="text-5xl text-[#C9A227] mb-4 opacity-50" icon="solar:play-circle-linear" strokeWidth="2"></iconify-icon>
<p className="text-base text-[#2D3436]/55 font-normal">Le live commence bientôt...</p>
</div>
<div className="relative w-full h-full aspect-video lg:aspect-auto z-10 bg-[#1A1A1A]">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full object-cover" frameborder="0" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&amp;mute=1" title="ICC Live Stream" width="100%"></iframe>
</div>
</div>

<div className="w-full lg:w-[40%] flex flex-col h-[500px] lg:h-full card-icc overflow-hidden p-0">
<div className="flex bg-[#FFFFFF] z-10 border-[#F7F2EC] border-b p-7 items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#C9A227]" icon="solar:chat-round-dots-linear" strokeWidth="2"></iconify-icon>
<h2 className="font-serif text-[22px] md:text-[26px] tracking-tight text-[#1A1A1A] font-medium">Chat en direct</h2>
</div>
</div>
<div className="flex-1 overflow-y-auto chat-scroll bg-[#FFFFFF] p-7">
<div className="fb-comments" data-href="https://votre-domaine.com/live" data-numposts="50" data-order-by="reverse_time" data-width="100%"></div>

<div className="hidden lg:flex flex-col gap-6 opacity-20 pointer-events-none mt-4">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#2D3436]/20"></div>
<div className="flex-1"><div className="h-3 w-32 bg-[#2D3436]/20 rounded mb-3"></div><div className="h-2 w-full bg-[#2D3436]/20 rounded mb-2"></div><div className="h-2 w-2/3 bg-[#2D3436]/20 rounded"></div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F7F2EC] py-20 md:py-24 px-4">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-[28px] md:text-[36px] lg:text-[48px] tracking-tight text-[#1A1A1A] font-medium mb-2">Rejoignez les Cercles CALL</h2>
<div className="h-px w-[60px] bg-[#C9A227] mx-auto mb-8 mt-6"></div>
<p className="md:text-lg leading-relaxed text-base text-[#2D3436] max-w-[800px] mr-auto ml-auto">Vivez l'expérience du Protocole CALL® en temps réel.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="card-icc relative overflow-hidden flex flex-col p-7 md:p-9">
<div className="absolute top-0 left-0 w-full h-1 bg-[#C96A4A] rounded-t-2xl"></div>
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 flex items-center justify-start text-[#1A1A1A]">
<iconify-icon className="text-3xl" icon="solar:heart-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-[#C96A4A] uppercase bg-[#C96A4A]/10 px-[10px] py-[4px] rounded-[6px]">11h00</span>
</div>
<h3 className="font-serif font-medium text-[22px] md:text-[26px] tracking-tight text-[#1A1A1A] mb-2">Cercle : AMOUR</h3>
<p className="text-sm text-[#2D3436]/55 font-normal mb-4">Animé par Sophie Delrot</p>
<p className="text-base text-[#2D3436] flex-grow mb-8 leading-relaxed">Relations sentimentales, affectives, sensuelles… Posez LE choix qui change tout dans votre vie amoureuse.</p>
<button className="btn-primary font-medium text-base w-full rounded-[10px] mb-4 py-[14px] md:py-[16px] px-[28px] md:px-[36px] flex items-center justify-center gap-2">
                        REJOINDRE LE CERCLE
                    </button>
<div className="text-center mt-2">
<a className="text-[14px] text-[#2D3436]/55 hover:text-[#C9A227] flex items-center justify-center gap-2 transition-colors" href="#">
<iconify-icon icon="solar:link-linear" strokeWidth="2"></iconify-icon> Lien Zoom direct
                        </a>
</div>
</div>

<div className="card-icc relative overflow-hidden flex flex-col p-7 md:p-9">
<div className="absolute top-0 left-0 w-full h-1 bg-[#C96A4A] rounded-t-2xl"></div>
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 flex items-center justify-start text-[#1A1A1A]">
<iconify-icon className="text-3xl" icon="solar:wad-of-money-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-[#C96A4A] uppercase bg-[#C96A4A]/10 px-[10px] py-[4px] rounded-[6px]">14h00</span>
</div>
<h3 className="font-serif font-medium text-[22px] md:text-[26px] tracking-tight text-[#1A1A1A] mb-2">Cercle : ARGENT</h3>
<p className="text-sm text-[#2D3436]/55 font-normal mb-4">Animé par Sophie Delrot</p>
<p className="text-base text-[#2D3436] flex-grow mb-8 leading-relaxed">Prospérité, ressources matérielles, abondance… Changez de trajectoire financière.</p>
<button className="btn-primary font-medium text-base w-full rounded-[10px] mb-4 py-[14px] md:py-[16px] px-[28px] md:px-[36px] flex items-center justify-center gap-2">
                        REJOINDRE LE CERCLE
                    </button>
<div className="text-center mt-2">
<a className="text-[14px] text-[#2D3436]/55 hover:text-[#C9A227] flex items-center justify-center gap-2 transition-colors" href="#">
<iconify-icon icon="solar:link-linear" strokeWidth="2"></iconify-icon> Lien Zoom direct
                        </a>
</div>
</div>

<div className="card-icc relative overflow-hidden flex flex-col p-7 md:p-9">
<div className="absolute top-0 left-0 w-full h-1 bg-[#C96A4A] rounded-t-2xl"></div>
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 flex items-center justify-start text-[#1A1A1A]">
<iconify-icon className="text-3xl" icon="solar:case-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-[#C96A4A] uppercase bg-[#C96A4A]/10 px-[10px] py-[4px] rounded-[6px]">16h30</span>
</div>
<h3 className="font-serif font-medium text-[22px] md:text-[26px] tracking-tight text-[#1A1A1A] mb-2">Cercle : VIE PRO</h3>
<p className="text-sm text-[#2D3436]/55 font-normal mb-4">Animé par Sophie Delrot</p>
<p className="text-base text-[#2D3436] flex-grow mb-8 leading-relaxed">Métier, plaisir, sens… Offrez-vous enfin un job de rêve aligné et porteur de sens.</p>
<button className="btn-primary font-medium text-base w-full rounded-[10px] mb-4 py-[14px] md:py-[16px] px-[28px] md:px-[36px] flex items-center justify-center gap-2">
                        REJOINDRE LE CERCLE
                    </button>
<div className="text-center mt-2">
<a className="text-[14px] text-[#2D3436]/55 hover:text-[#C9A227] flex items-center justify-center gap-2 transition-colors" href="#">
<iconify-icon icon="solar:link-linear" strokeWidth="2"></iconify-icon> Lien Zoom direct
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FDFBF7] py-20 md:py-24 px-4">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-[28px] md:text-[36px] lg:text-[48px] tracking-tight text-[#1A1A1A] font-medium mb-2">Formations &amp; Expériences</h2>
<div className="h-px w-[60px] bg-[#C9A227] mx-auto mb-8 mt-6"></div>
<p className="text-base md:text-lg text-[#2D3436] max-w-[800px] mx-auto leading-relaxed">Allez plus loin et approfondissez la mécanique de la conscience.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group card-icc flex flex-col p-0 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-1 bg-[#C96A4A] z-20"></div>
<div className="flex bg-[#FDFBF7] border-b border-[#F7F2EC] h-48 relative items-center justify-center overflow-hidden">
<span className="absolute top-6 left-6 bg-[#C96A4A] px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium tracking-wide uppercase text-[#FDFBF7] z-10">🌍 Tournée 2026</span>
<iconify-icon className="text-6xl text-[#1A1A1A] group-hover:scale-110 transition-transform duration-500 relative z-10" icon="solar:users-group-two-rounded-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="p-7 md:p-9 flex flex-col flex-grow bg-[#FFFFFF]">
<h3 className="font-serif font-medium text-[22px] md:text-[26px] tracking-tight text-[#1A1A1A] mb-3">
<span className="font-accent text-3xl text-[#C96A4A] pr-2">Cercle</span> du Choix
                        </h3>
<p className="text-base text-[#2D3436] mb-6 flex-grow leading-relaxed">Vivez l'expérience du Cercle du Choix en présentiel (1h à 1h30). Posez un choix profond et puissant dans tous les domaines de votre vie.</p>
<div className="space-y-3 mb-8 text-[14px] text-[#2D3436]">
<div className="flex items-center gap-3"><iconify-icon className="text-lg text-[#C9A227]" icon="solar:map-point-linear" strokeWidth="2"></iconify-icon> Présentiel (plusieurs villes)</div>
<div className="flex items-center gap-3"><iconify-icon className="text-lg text-[#C9A227]" icon="solar:clock-circle-linear" strokeWidth="2"></iconify-icon> 1h à 1h30</div>
</div>
<button className="btn-secondary text-base font-medium w-full py-[14px] md:py-[16px] px-[28px] md:px-[36px] cursor-pointer" onclick="window.location.href='https://tournee-icc-2026.aura.build/'" role="button">
                            RÉSERVER MA PLACE
                        </button>
</div>
</div>

<div className="group card-icc flex flex-col p-0 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-1 bg-[#6B8F71] z-20"></div>
<div className="h-48 bg-[#FDFBF7] border-b border-[#F7F2EC] flex items-center justify-center relative overflow-hidden">
<span className="uppercase text-[11px] font-medium text-[#FDFBF7] tracking-wide bg-[#6B8F71] z-10 rounded-[6px] py-[4px] px-[10px] absolute top-6 left-6">🎓 Formation</span>
<iconify-icon className="text-6xl text-[#1A1A1A] group-hover:scale-110 transition-transform duration-500 relative z-10" icon="solar:diploma-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="p-7 md:p-9 flex flex-col flex-grow relative z-10 bg-[#FFFFFF]">
<h3 className="font-serif font-medium text-[22px] md:text-[26px] tracking-tight text-[#1A1A1A] mb-3">Animateur de Cercle</h3>
<p className="text-base flex-grow leading-relaxed text-[#2D3436] mb-6">Devenez guide du choix conscient. Accompagnez des collectifs à passer de la confusion à la clarté.</p>
<div className="space-y-3 mb-8 text-[14px] text-[#2D3436]">
<div className="flex items-center justify-between"><span className="flex items-center gap-3"><iconify-icon className="text-lg text-[#C9A227]" icon="solar:calendar-linear" strokeWidth="2"></iconify-icon> Mai/Juin 2026</span> <span className="font-medium text-[#1A1A1A]">1200€</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-lg text-[#C9A227]" icon="solar:laptop-linear" strokeWidth="2"></iconify-icon> En ligne + 1 WE Présentiel</div>
</div>
<button className="btn-primary text-base font-medium w-full py-[14px] md:py-[16px] px-[28px] md:px-[36px]" onclick="window.location.href='https://animateur-call.aura.build/'" role="button">
                            DEVENIR ANIMATEUR
                        </button>
</div>
</div>

<div className="group card-icc flex flex-col p-0 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-1 bg-[#C96A4A] z-20"></div>
<div className="h-48 bg-[#FDFBF7] border-b border-[#F7F2EC] flex items-center justify-center relative overflow-hidden">
<span className="uppercase text-[11px] font-medium text-[#FDFBF7] tracking-wide bg-[#C96A4A] z-10 rounded-[6px] py-[4px] px-[10px] absolute top-6 left-6">🎓 Formation Avancée</span>
<iconify-icon className="text-6xl text-[#1A1A1A] group-hover:scale-110 transition-transform duration-500 relative z-10" icon="solar:magic-stick-3-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="p-7 md:p-9 flex flex-col flex-grow bg-[#FFFFFF]">
<h3 className="font-serif font-medium text-[22px] md:text-[26px] tracking-tight text-[#1A1A1A] mb-3">Praticien CALL</h3>
<p className="text-base flex-grow leading-relaxed text-[#2D3436] mb-6">Transformez en profondeur et embellissez des trajectoires de vie. Formation pour accompagner en individuel.</p>
<div className="space-y-3 mb-8 text-[14px] text-[#2D3436]">
<div className="flex items-center justify-between"><span className="flex items-center gap-3"><iconify-icon className="text-lg text-[#C9A227]" icon="solar:calendar-linear" strokeWidth="2"></iconify-icon> Août/Sept 2026</span> <span className="font-medium text-[#1A1A1A]">3000€</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-lg text-[#C9A227]" icon="solar:laptop-linear" strokeWidth="2"></iconify-icon> Mixte (Ligne + Présentiel)</div>
</div>
<button className="btn-secondary text-base font-medium w-full py-[14px] md:py-[16px] px-[28px] md:px-[36px]" onclick="window.location.href='https://praticien-call.aura.build/'" role="button">
                            DEVENIR PRATICIEN
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F7F2EC] py-20 md:py-24 px-4 overflow-hidden relative">
<div className="max-w-[1200px] mx-auto relative z-10">
<div className="text-center mb-20">
<h2 className="font-serif font-medium text-[28px] md:text-[36px] lg:text-[48px] tracking-tight text-[#1A1A1A] mb-2">Notre Mission</h2>
<div className="h-px w-[60px] bg-[#C9A227] mx-auto mb-8 mt-6"></div>
<div className="bg-[#FFFFFF] border border-[#C9A227]/20 rounded-[14px] p-8 md:p-12 max-w-[800px] mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative">
<iconify-icon className="absolute -top-6 -left-4 text-5xl text-[#C9A227] bg-[#FFFFFF] rounded-full p-2" icon="solar:quote-right-linear" strokeWidth="2"></iconify-icon>
<p className="font-serif text-[22px] md:text-[26px] text-[#1A1A1A] italic mb-6 leading-relaxed">
                        "Le changement en conscience pour une transformation en profondeur !"
                    </p>
<p className="font-sans text-base md:text-lg text-[#2D3436] leading-relaxed">
                        Accompagner les individus à développer la maîtrise d'eux-mêmes pour créer de l'équilibre dans leur vie, de la joie dans leurs relations et du succès dans leurs entreprises.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
<div className="card-icc p-7 md:p-9 relative overflow-hidden group">
<iconify-icon className="text-4xl text-[#C96A4A] mb-6 relative z-10" icon="solar:heart-linear" strokeWidth="2"></iconify-icon>
<h4 className="font-serif font-normal text-[22px] md:text-[26px] tracking-tight text-[#1A1A1A] mb-3 relative z-10">Amour</h4>
<p className="font-sans text-base text-[#2D3436] leading-relaxed relative z-10">Évidence. L'amour est au cœur de tout ce que nous faisons.</p>
</div>
<div className="card-icc p-7 md:p-9 relative overflow-hidden group">
<iconify-icon className="text-4xl text-[#6B8F71] mb-6 relative z-10" icon="solar:target-linear" strokeWidth="2"></iconify-icon>
<h4 className="font-serif font-normal text-[22px] md:text-[26px] tracking-tight text-[#1A1A1A] mb-3 relative z-10">Justesse</h4>
<p className="font-sans text-base text-[#2D3436] leading-relaxed relative z-10">Alignement, respect du rythme. Pas de forcing, ce qui est juste pour vous.</p>
</div>
<div className="card-icc p-7 md:p-9 relative overflow-hidden group">
<iconify-icon className="text-4xl text-[#C9A227] mb-6 relative z-10" icon="solar:star-fall-linear" strokeWidth="2"></iconify-icon>
<h4 className="font-serif font-normal text-[22px] md:text-[26px] tracking-tight text-[#1A1A1A] mb-3 relative z-10">Transformation</h4>
<p className="font-sans text-base text-[#2D3436] leading-relaxed relative z-10">Changement incarné. Pas de concepts vides, on vit la transformation.</p>
</div>
<div className="card-icc p-7 md:p-9 relative overflow-hidden group">
<iconify-icon className="text-4xl text-[#C9A227] mb-6 relative z-10" icon="solar:key-linear" strokeWidth="2"></iconify-icon>
<h4 className="font-serif font-normal text-[22px] md:text-[26px] tracking-tight text-[#1A1A1A] mb-3 relative z-10">Autonomie</h4>
<p className="font-sans text-base text-[#2D3436] leading-relaxed relative z-10">Pas de dépendance. Nous révélons votre capacité à être acteur de votre vie.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#FDFBF7] py-20 md:py-24 px-4">
<div className="max-w-[1200px] mx-auto">
<h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-medium text-[#1A1A1A] tracking-tight font-serif text-center mb-2">Qui sommes-nous ?</h2>
<div className="h-px w-[60px] bg-[#C9A227] mx-auto mb-20 mt-6"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">

<div className="flex flex-col text-center px-6 items-center">
<div className="w-40 h-40 rounded-full p-1.5 border-[1.5px] border-[#C9A227] mb-8 relative group bg-[#FFFFFF] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400 ease-in-out hover:-translate-y-1">
<div className="w-full h-full rounded-full bg-[#F7F2EC] overflow-hidden flex items-center justify-center relative">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aabd7d62-9b7e-455c-9af3-aa3f73e5b847_320w.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
</div>
</div>
<h3 className="font-serif font-medium text-[26px] md:text-[34px] tracking-tight text-[#1A1A1A] mb-2">Sophie Delrot</h3>
<p className="font-sans font-medium text-[14px] text-[#C9A227] uppercase tracking-wide mb-8">Directrice ICC &amp; Magifestatrice</p>
<div className="font-sans text-base md:text-lg text-[#2D3436] space-y-4 mb-10 leading-relaxed max-w-[600px] mx-auto">
<p>Sophie est une présence rare. Hypersensible, ancienne contrôleuse aérienne, elle guide aujourd'hui les êtres sur leur chemin avec justesse, clarté et douceur.</p>
<p>On dit d'elle qu'elle est une magifestatrice : elle relie le ciel et la terre, le mental et le cœur. Elle crée un espace sacré où vous pouvez enfin vous écouter.</p>
<p>Son approche ? <span className="font-accent text-[26px] text-[#C96A4A] px-1 align-middle">Joisir</span> — choisir de mettre la joie au point de départ de chaque choix.</p>
</div>
<p className="font-serif italic text-[22px] md:text-[26px] text-[#1A1A1A] mt-auto relative px-8">
<span className="absolute top-0 left-0 text-3xl text-[#C9A227]">"</span>
                        Tout ce qui est choisi, n'est pas subi.
                        <span className="absolute bottom-0 right-0 text-3xl text-[#C9A227]">"</span>
</p>
</div>

<div className="flex flex-col text-center px-6 items-center mt-12 lg:mt-0">
<div className="w-40 h-40 rounded-full p-1.5 border-[1.5px] border-[#6B8F71] mb-8 relative group bg-[#FFFFFF] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400 ease-in-out hover:-translate-y-1">
<div className="w-full h-full rounded-full bg-[#F7F2EC] overflow-hidden flex items-center justify-center relative">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06ac6201-6c97-4065-805e-02d8104005be_320w.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
</div>
</div>
<h3 className="font-serif font-medium text-[26px] md:text-[34px] tracking-tight text-[#1A1A1A] mb-2">Jean-Luc De Wachter</h3>
<p className="font-sans font-medium text-[14px] text-[#6B8F71] uppercase tracking-wide mb-8">Inventeur du Protocole CALL®</p>
<div className="font-sans text-base md:text-lg text-[#2D3436] space-y-4 mb-10 leading-relaxed max-w-[600px] mx-auto">
<p className="">Jean-Luc est auteur, penseur et conseiller philosophique pour les leaders à haut niveau d'impact. Auteur de "Business Bénédiction" et "Je te dis la vérité", il a inventé le Protocole CALL® et l'Introspection Dynamique®.</p>
<p>En 2015, au bord de la faillite, il pose un choix si profond qu'il devient non-négociable… et sa vie bascule.</p>
<p>Aujourd'hui, il transmet la mécanique du choix pour que chacun puisse transformer sa trajectoire et vivre avec confiance et abondance.</p>
</div>
<p className="font-serif italic text-[22px] md:text-[26px] text-[#1A1A1A] mt-auto relative px-8">
<span className="absolute top-0 left-0 text-3xl text-[#C9A227]">"</span>
                        Ne laissons pas être négocié notre essentiel !
                        <span className="absolute bottom-0 right-0 text-3xl text-[#C9A227]">"</span>
</p>
</div>
</div>
</div>
</section>

<section className="bg-[#F7F2EC] py-20 md:py-24 px-4">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif font-medium text-[28px] md:text-[36px] lg:text-[48px] tracking-tight text-[#1A1A1A] mb-2">Les Praticiens CALL Certifiés</h2>
<div className="h-px w-[60px] bg-[#C9A227] mx-auto mb-8 mt-6"></div>
<p className="font-sans text-base md:text-lg text-[#2D3436] max-w-[800px] mx-auto leading-relaxed">Découvrez les praticiens formés pour vous accompagner en profondeur.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="card-icc p-7 md:p-9 flex items-center gap-5 group cursor-default">
<div className="w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#C9A227]/30 group-hover:border-[#C9A227] transition-colors flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-3xl text-[#1A1A1A]" icon="solar:user-circle-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<h4 className="font-serif font-normal text-[22px] md:text-[26px] text-[#1A1A1A] mb-1">Marie L.</h4>
<p className="font-sans text-[11px] text-[#C9A227] font-medium uppercase tracking-wide">Transition de vie</p>
<p className="font-sans text-[14px] text-[#2D3436]/55 mt-1">Paris, France</p>
</div>
</div>

<div className="card-icc p-7 md:p-9 flex items-center gap-5 group cursor-default">
<div className="w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#C96A4A]/30 group-hover:border-[#C96A4A] transition-colors flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-3xl text-[#1A1A1A]" icon="solar:user-circle-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<h4 className="font-serif font-normal text-[22px] md:text-[26px] text-[#1A1A1A] mb-1">Thomas D.</h4>
<p className="font-sans text-[11px] text-[#C96A4A] font-medium uppercase tracking-wide">Relations / Couple</p>
<p className="font-sans text-[14px] text-[#2D3436]/55 mt-1">Lyon, France</p>
</div>
</div>

<div className="card-icc p-7 md:p-9 flex items-center gap-5 group cursor-default">
<div className="w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#6B8F71]/30 group-hover:border-[#6B8F71] transition-colors flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-3xl text-[#1A1A1A]" icon="solar:user-circle-linear" strokeWidth="2"></iconify-icon>
</div>
<div>
<h4 className="font-serif font-normal text-[22px] md:text-[26px] text-[#1A1A1A] mb-1">Élodie M.</h4>
<p className="font-sans text-[11px] text-[#6B8F71] font-medium uppercase tracking-wide">Carrière &amp; Sens</p>
<p className="font-sans text-[14px] text-[#2D3436]/55 mt-1">Genève, Suisse</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center gap-3 text-base font-medium text-[#C9A227] hover:text-[#B88A1A] transition-colors group" href="https://protocole-call.fr/" target="_blank">
<iconify-icon className="text-xl transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
<span className="border-b border-transparent group-hover:border-[#B88A1A] pb-0.5 transition-colors">Découvrez tous nos praticiens certifiés</span>
</a>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] py-[80px] px-4 text-center">
<div className="max-w-[800px] mx-auto flex flex-col items-center">
<div className="tracking-widest font-serif font-semibold text-[20px] text-[#C9A227] uppercase mb-8">ICC</div>
<p className="font-sans font-light text-[14px] text-[#FDFBF7]/45 mb-4">
                ©2026 · Institut Choix et Conscience (ICC) · Tous Droits Réservés
            </p>
<div className="flex items-center justify-center gap-4 text-[14px] text-[#FDFBF7]/55 mb-8">
<a className="hover:text-[#C9A227] transition-colors" href="#">Politique de confidentialité</a>
<span>·</span>
<a className="hover:text-[#C9A227] transition-colors" href="#">Conditions générales d'utilisation</a>
</div>
<div className="w-full h-px bg-[#FDFBF7] opacity-[0.08] mb-8"></div>
<p className="font-sans font-light text-[14px] text-[#FDFBF7]/45">
                Des questions ? Contactez-nous à <a className="font-medium hover:text-[#C9A227] transition-colors" href="mailto:contact@icc.com">contact@icc.com</a>
</p>
</div>
</footer>

    </>
  );
}
