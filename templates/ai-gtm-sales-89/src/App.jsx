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



      IntentWidget.mount(document.getElementById('mon-container'));
    


                          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                        Cal("init", "15min", {origin:"https://app.cal.com"});
                          Cal.ns["15min"]("inline", {
                            elementOrSelector:"#my-cal-inline-15min",
                            config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true", "theme":"dark"},
                            calLink: "guillaume-tonet-mejox0/15min",
                          });
                          Cal.ns["15min"]("ui", {"theme":"dark", "cssVarsPerTheme":{"light":{"cal-brand":"#881717"},"dark":{"cal-brand":"#ea580c","cal-text":"#ffffff","cal-text-muted":"#a1a1aa","cal-bg":"#0c0c0c"}},"hideEventTypeDetails":false,"layout":"month_view"});
                        


        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            card.onmousemove = e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };
        });

        const scene = document.getElementById('interactive-scene');
        const cube = document.getElementById('cube');
        let isHovering = false;

        scene.addEventListener('mousemove', (e) => {
            isHovering = true;
            const rect = scene.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; 
            const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
            const rotY = x * 60;
            const rotX = -y * 60;
            cube.style.animation = 'none';
            cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        });

        scene.addEventListener('mouseleave', () => {
            isHovering = false;
            cube.style.animation = 'spinCube 20s infinite linear';
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
      

<header bis_size='{"x":0,"y":24,"w":1063,"h":53,"abs_x":480,"abs_y":67}' className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav bis_size='{"x":83,"y":24,"w":896,"h":53,"abs_x":563,"abs_y":67}' className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a bis_size='{"x":96,"y":32,"w":123,"h":36,"abs_x":576,"abs_y":75}' className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div bis_size='{"x":96,"y":32,"w":36,"h":36,"abs_x":576,"abs_y":75}' className="flex shadow-lg shadow-orange-500/10 overflow-hidden group-hover:bg-orange-500/20 group-hover:border-orange-500/30 transition-all duration-300 bg-orange-500/10 w-9 h-9 border-orange-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon bis_size='{"x":104,"y":40,"w":20,"h":20,"abs_x":584,"abs_y":83}' className="text-orange-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="lucide:box" width="20"></iconify-icon>
</div>
<span bis_size='{"x":144,"y":39,"w":59,"h":22,"abs_x":624,"abs_y":82}' className="text-white font-bold tracking-tight text-[15px]">GTMLab</span>
</a>
<div bis_size='{"x":219,"y":41,"w":533,"h":19,"abs_x":699,"abs_y":84}' className="hidden md:flex gap-6 items-center flex-1 justify-center">
<a bis_size='{"x":325,"y":41,"w":50,"h":19,"abs_x":805,"abs_y":84}' className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap" href="#intent">Signaux</a>
<a bis_size='{"x":399,"y":41,"w":71,"h":19,"abs_x":879,"abs_y":84}' className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap" href="#automation">Automation</a>
<a bis_size='{"x":495,"y":41,"w":57,"h":19,"abs_x":975,"abs_y":84}' className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap" href="#engine">Résultats</a>
<a bis_size='{"x":576,"y":41,"w":70,"h":19,"abs_x":1056,"abs_y":84}' className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap" href="#use-cases">Cas Clients</a>
</div>
<div bis_size='{"x":760,"y":31,"w":211,"h":39,"abs_x":1240,"abs_y":74}' className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a bis_size='{"x":777,"y":31,"w":194,"h":39,"abs_x":1257,"abs_y":74}' className="text-[13px] hover:bg-zinc-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-semibold text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="https://cal.com/guillaume-tonet-mejox0/30min?overlayCalendar=true">
                    Prendre rendez-vous
                    <iconify-icon bis_size='{"x":936,"y":42,"w":16,"h":16,"abs_x":1416,"abs_y":85}' className="" height="16" icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main bis_size='{"x":0,"y":0,"w":1063,"h":7141,"abs_x":480,"abs_y":43}' className="">

<section bis_size='{"x":0,"y":0,"w":1063,"h":1256,"abs_x":480,"abs_y":43}' className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">
<div bis_size='{"x":31,"y":0,"w":1000,"h":500,"abs_x":511,"abs_y":43}' className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div bis_size='{"x":0,"y":0,"w":1063,"h":1256,"abs_x":480,"abs_y":43}' className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div bis_size='{"x":0,"y":176,"w":1063,"h":1000,"abs_x":480,"abs_y":219}' className="text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div bis_size='{"x":387,"y":177,"w":288,"h":26,"abs_x":867,"abs_y":220}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-[11px] uppercase font-semibold tracking-wide mb-8 hover:border-orange-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(234,88,12,0.1)] backdrop-blur-sm">
<span bis_size='{"x":400,"y":188,"w":6,"h":6,"abs_x":880,"abs_y":231}' className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-signal"></span>
                    Détection en temps réel · 50+ sources
                </div>
<h1 bis_size='{"x":24,"y":236,"w":1015,"h":192,"abs_x":504,"abs_y":279}' className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-bold text-white tracking-tighter mb-8">Vos prospects vous<br bis_size='{"x":950,"y":226,"w":0,"h":116,"abs_x":1430,"abs_y":269}'/> <span bis_size='{"x":201,"y":322,"w":660,"h":116,"abs_x":681,"abs_y":365}' className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">cherchent déjà.</span></h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-xl mr-auto mb-10 ml-auto">
    GTMLab détecte les signaux d'achat sur tout le web — recrutements, levées de fonds, changements techno — et déclenche vos séquences de prospection automatiquement.
    
</p>

<div bis_size='{"x":275,"y":588,"w":512,"h":0,"abs_x":755,"abs_y":631}' className="w-full max-w-lg mx-auto mb-20 relative z-20">
<intent-widget className="w-full">
<div id="mon-container"></div>


</intent-widget>
</div>

<div bis_size='{"x":24,"y":628,"w":1015,"h":500,"abs_x":504,"abs_y":671}' className="cube-scene hidden md:flex z-10 max-w-5xl mr-auto ml-auto relative" id="interactive-scene">
<style>
        @keyframes floatIn1 { 0% { left: 2%; top: 15%; opacity: 0; transform: translate(0, 0) scale(0.8); } 10% { opacity: 1; transform: translate(0, 0) scale(1); } 90% { opacity: 1; } 100% { left: 50%; top: 50%; opacity: 0; transform: translate(-50%, -50%) scale(0.2); } }
        @keyframes floatIn2 { 0% { left: 8%; top: 25%; opacity: 0; transform: translate(0, 0) scale(0.8); } 10% { opacity: 1; transform: translate(0, 0) scale(1); } 90% { opacity: 1; } 100% { left: 50%; top: 50%; opacity: 0; transform: translate(-50%, -50%) scale(0.2); } }
        @keyframes floatIn3 { 0% { left: 10%; top: 50%; opacity: 0; transform: translate(0, 0) scale(0.8); } 10% { opacity: 1; transform: translate(0, 0) scale(1); } 90% { opacity: 1; } 100% { left: 50%; top: 50%; opacity: 0; transform: translate(-50%, -50%) scale(0.2); } }
        @keyframes floatIn4 { 0% { left: 2%; top: 85%; opacity: 0; transform: translate(0, 0) scale(0.8); } 10% { opacity: 1; transform: translate(0, 0) scale(1); } 90% { opacity: 1; } 100% { left: 50%; top: 50%; opacity: 0; transform: translate(-50%, -50%) scale(0.2); } }
        
        @keyframes floatOut1 { 0% { left: 50%; top: 50%; opacity: 0; transform: translate(-50%, -50%) scale(0.2); } 10% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 90% { opacity: 1; } 100% { left: 95%; top: 15%; opacity: 0; transform: translate(-100%, -50%) scale(0.8); } }
        @keyframes floatOut2 { 0% { left: 50%; top: 50%; opacity: 0; transform: translate(-50%, -50%) scale(0.2); } 10% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 90% { opacity: 1; } 100% { left: 95%; top: 32%; opacity: 0; transform: translate(-100%, -50%) scale(0.8); } }
        @keyframes floatOut3 { 0% { left: 50%; top: 50%; opacity: 0; transform: translate(-50%, -50%) scale(0.2); } 10% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 90% { opacity: 1; } 100% { left: 95%; top: 50%; opacity: 0; transform: translate(-100%, -50%) scale(0.8); } }
        @keyframes floatOut4 { 0% { left: 50%; top: 50%; opacity: 0; transform: translate(-50%, -50%) scale(0.2); } 10% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 90% { opacity: 1; } 100% { left: 95%; top: 68%; opacity: 0; transform: translate(-100%, -50%) scale(0.8); } }
        @keyframes floatOut5 { 0% { left: 50%; top: 50%; opacity: 0; transform: translate(-50%, -50%) scale(0.2); } 10% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 90% { opacity: 1; } 100% { left: 95%; top: 85%; opacity: 0; transform: translate(-100%, -50%) scale(0.8); } }

        .node-action-1 { top: 15% !important; }
        .node-action-2 { top: 32% !important; }
        .node-action-3 { top: 85% !important; }
        .node-action-4 { top: 50%; right: 5%; border-color: rgba(34, 197, 94, 0.3); }
        .node-action-5 { top: 68%; right: 5%; border-color: rgba(59, 130, 246, 0.3); }
    </style>
<svg bis_size='{"x":24,"y":628,"w":1015,"h":500,"abs_x":504,"abs_y":671}' className="flow-svg-container" preserveaspectratio="none" viewbox="0 0 1000 500">
<defs bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}'>
<lineargradient bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' id="gradient-in" x1="0%" x2="100%" y1="0%" y2="0%">
<stop bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' offset="0%" style={{stopColor: 'rgba(255,255,255,0.05)'}}></stop>
<stop bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' offset="100%" style={{stopColor: 'rgba(255,255,255,0.9)'}}></stop>
</lineargradient>
<lineargradient bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' id="gradient-out" x1="0%" x2="100%" y1="0%" y2="0%">
<stop bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' offset="0%" style={{stopColor: 'rgba(249, 115, 22, 1)'}}></stop>
<stop bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' offset="100%" style={{stopColor: 'rgba(249, 115, 22, 0)'}}></stop>
</lineargradient>
<lineargradient bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' id="gradient-out-green" x1="0%" x2="100%" y1="0%" y2="0%">
<stop bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' offset="0%" style={{stopColor: 'rgba(34, 197, 94, 1)'}}></stop>
<stop bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' offset="100%" style={{stopColor: 'rgba(34, 197, 94, 0)'}}></stop>
</lineargradient>
<lineargradient bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' id="gradient-out-blue" x1="0%" x2="100%" y1="0%" y2="0%">
<stop bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' offset="0%" style={{stopColor: 'rgba(59, 130, 246, 1)'}}></stop>
<stop bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' offset="100%" style={{stopColor: 'rgba(59, 130, 246, 0)'}}></stop>
</lineargradient>
</defs>
<path bis_size='{"x":74,"y":703,"w":456,"h":175,"abs_x":554,"abs_y":746}' className="flow-path flow-in" d="M50 75 C 200 75, 300 250, 500 250" style={{animationDuration: '1.6s'}}></path>
<path bis_size='{"x":105,"y":753,"w":426,"h":125,"abs_x":585,"abs_y":796}' className="flow-path flow-in" d="M80 125 C 200 125, 300 250, 500 250" style={{animationDuration: '1.4s'}}></path>
<path bis_size='{"x":84,"y":828,"w":446,"h":50,"abs_x":564,"abs_y":871}' className="flow-path flow-in" d="M60 200 C 200 200, 300 250, 500 250" style={{animationDuration: '1.2s'}}></path>
<path bis_size='{"x":135,"y":878,"w":395,"h":0,"abs_x":615,"abs_y":921}' className="flow-path flow-in" d="M110 250 C 200 250, 300 250, 500 250" style={{animationDuration: '1.5s'}}></path>
<path bis_size='{"x":95,"y":878,"w":436,"h":75,"abs_x":575,"abs_y":921}' className="flow-path flow-in" d="M70 325 C 200 325, 300 250, 500 250" style={{animationDuration: '1.3s'}}></path>
<path bis_size='{"x":135,"y":878,"w":395,"h":125,"abs_x":615,"abs_y":921}' className="flow-path flow-in" d="M110 375 C 200 375, 300 250, 500 250" style={{animationDuration: '1.1s'}}></path>
<path bis_size='{"x":105,"y":878,"w":426,"h":185,"abs_x":585,"abs_y":921}' className="flow-path flow-in" d="M80 435 C 200 435, 300 250, 500 250" style={{animationDuration: '1.7s'}}></path>
<path bis_size='{"x":531,"y":703,"w":456,"h":175,"abs_x":1011,"abs_y":746}' className="flow-path flow-out" d="M500 250 C 700 250, 800 75, 950 75"></path>
<path bis_size='{"x":531,"y":788,"w":456,"h":90,"abs_x":1011,"abs_y":831}' className="flow-path flow-out" d="M500 250 C 700 250, 800 160, 950 160" style={{animationDuration: '1.6s'}}></path>
<path bis_size='{"x":531,"y":878,"w":456,"h":0,"abs_x":1011,"abs_y":921}' className="flow-path flow-out" d="M500 250 C 700 250, 800 250, 950 250" style={{animationDuration: '1.4s', stroke: 'url(#gradient-out-green)'}}></path>
<path bis_size='{"x":531,"y":878,"w":456,"h":90,"abs_x":1011,"abs_y":921}' className="flow-path flow-out" d="M500 250 C 700 250, 800 340, 950 340" style={{animationDuration: '1.2s', stroke: 'url(#gradient-out-blue)'}}></path>
<path bis_size='{"x":531,"y":878,"w":456,"h":175,"abs_x":1011,"abs_y":921}' className="flow-path flow-out" d="M500 250 C 700 250, 800 425, 950 425" style={{animationDuration: '0.8s'}}></path>
</svg>

<div bis_size='{"x":24,"y":628,"w":1015,"h":500,"abs_x":504,"abs_y":671}' className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
<div bis_size='{"x":24,"y":628,"w":107,"h":26,"abs_x":504,"abs_y":671}' className="absolute flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 bg-[#09090b]/90 border border-white/10 rounded-full shadow-xl shadow-black/50 backdrop-blur-md opacity-0" style={{animation: 'floatIn1 4s infinite linear 0s'}}>
<iconify-icon bis_size='{"x":31,"y":635,"w":12,"h":12,"abs_x":511,"abs_y":678}' className="text-blue-400 text-xs" icon="solar:magnifer-linear"></iconify-icon>
<span bis_size='{"x":49,"y":633,"w":71,"h":16,"abs_x":529,"abs_y":676}' className="text-xs text-zinc-300 tracking-wide whitespace-nowrap">"Outil CRM"</span>
</div>
<div bis_size='{"x":24,"y":628,"w":133,"h":26,"abs_x":504,"abs_y":671}' className="absolute flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 bg-[#09090b]/90 border border-white/10 rounded-full shadow-xl shadow-black/50 backdrop-blur-md opacity-0" style={{animation: 'floatIn2 5s infinite linear 1.5s'}}>
<iconify-icon bis_size='{"x":31,"y":635,"w":12,"h":12,"abs_x":511,"abs_y":678}' className="text-indigo-400 text-xs" icon="solar:user-plus-linear"></iconify-icon>
<span bis_size='{"x":49,"y":633,"w":97,"h":16,"abs_x":529,"abs_y":676}' className="text-xs text-zinc-300 tracking-wide whitespace-nowrap">+3 SDR recrutés</span>
</div>
<div bis_size='{"x":24,"y":628,"w":117,"h":26,"abs_x":504,"abs_y":671}' className="absolute flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 bg-[#09090b]/90 border border-white/10 rounded-full shadow-xl shadow-black/50 backdrop-blur-md opacity-0" style={{animation: 'floatIn3 4.5s infinite linear 2.5s'}}>
<iconify-icon bis_size='{"x":31,"y":635,"w":12,"h":12,"abs_x":511,"abs_y":678}' className="text-green-400 text-xs" icon="solar:wad-of-money-linear"></iconify-icon>
<span bis_size='{"x":49,"y":633,"w":81,"h":16,"abs_x":529,"abs_y":676}' className="text-xs text-zinc-300 tracking-wide whitespace-nowrap">Série A · 8M€</span>
</div>
<div bis_size='{"x":24,"y":628,"w":133,"h":26,"abs_x":504,"abs_y":671}' className="absolute flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 bg-[#09090b]/90 border border-white/10 rounded-full shadow-xl shadow-black/50 backdrop-blur-md opacity-0" style={{animation: 'floatIn4 5.5s infinite linear 0.5s'}}>
<iconify-icon bis_size='{"x":31,"y":635,"w":12,"h":12,"abs_x":511,"abs_y":678}' className="text-purple-400 text-xs" icon="solar:laptop-linear"></iconify-icon>
<span bis_size='{"x":49,"y":633,"w":97,"h":16,"abs_x":529,"abs_y":676}' className="text-xs text-zinc-300 tracking-wide whitespace-nowrap">Installe HubSpot</span>
</div>
<div bis_size='{"x":24,"y":628,"w":150,"h":26,"abs_x":504,"abs_y":671}' className="absolute flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 bg-orange-950/80 border border-orange-500/30 rounded-full shadow-xl shadow-orange-900/20 backdrop-blur-md opacity-0" style={{animation: 'floatOut1 4s infinite linear 2s'}}>
<iconify-icon bis_size='{"x":31,"y":635,"w":12,"h":12,"abs_x":511,"abs_y":678}' className="text-orange-200 text-xs" icon="solar:letter-linear"></iconify-icon>
<span bis_size='{"x":49,"y":633,"w":114,"h":16,"abs_x":529,"abs_y":676}' className="text-xs text-orange-100 tracking-wide whitespace-nowrap">Email contextualisé</span>
</div>
<div bis_size='{"x":24,"y":628,"w":146,"h":26,"abs_x":504,"abs_y":671}' className="absolute flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 bg-blue-950/80 border border-blue-500/30 rounded-full shadow-xl shadow-blue-900/20 backdrop-blur-md opacity-0" style={{animation: 'floatOut2 5s infinite linear 3s'}}>
<iconify-icon bis_size='{"x":31,"y":635,"w":12,"h":12,"abs_x":511,"abs_y":678}' className="text-blue-200 text-xs" icon="ri:linkedin-fill"></iconify-icon>
<span bis_size='{"x":49,"y":633,"w":110,"h":16,"abs_x":529,"abs_y":676}' className="text-xs text-blue-100 tracking-wide whitespace-nowrap">Demande LinkedIn</span>
</div>
<div bis_size='{"x":24,"y":628,"w":154,"h":26,"abs_x":504,"abs_y":671}' className="absolute flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 bg-green-950/80 border border-green-500/30 rounded-full shadow-xl shadow-green-900/20 backdrop-blur-md opacity-0" style={{animation: 'floatOut3 5.5s infinite linear 1.2s'}}>
<iconify-icon bis_size='{"x":31,"y":635,"w":12,"h":12,"abs_x":511,"abs_y":678}' className="text-xs" icon="logos:whatsapp-icon"></iconify-icon>
<span bis_size='{"x":49,"y":633,"w":118,"h":16,"abs_x":529,"abs_y":676}' className="text-xs text-green-100 tracking-wide whitespace-nowrap">Message WhatsApp</span>
</div>
<div bis_size='{"x":24,"y":628,"w":117,"h":26,"abs_x":504,"abs_y":671}' className="absolute flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 bg-blue-950/80 border border-blue-500/30 rounded-full shadow-xl shadow-blue-900/20 backdrop-blur-md opacity-0" style={{animation: 'floatOut4 6s infinite linear 2.5s'}}>
<iconify-icon bis_size='{"x":31,"y":635,"w":12,"h":12,"abs_x":511,"abs_y":678}' className="text-blue-200 text-xs" icon="solar:phone-calling-rounded-linear"></iconify-icon>
<span bis_size='{"x":49,"y":633,"w":81,"h":16,"abs_x":529,"abs_y":676}' className="text-xs text-blue-100 tracking-wide whitespace-nowrap">Appel qualifié</span>
</div>
<div bis_size='{"x":24,"y":628,"w":154,"h":26,"abs_x":504,"abs_y":671}' className="absolute flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 bg-zinc-900/80 border border-zinc-500/30 rounded-full shadow-xl shadow-black/20 backdrop-blur-md opacity-0" style={{animation: 'floatOut5 4.5s infinite linear 1.5s'}}>
<iconify-icon bis_size='{"x":31,"y":635,"w":12,"h":12,"abs_x":511,"abs_y":678}' className="text-zinc-200 text-xs" icon="solar:user-check-linear"></iconify-icon>
<span bis_size='{"x":49,"y":633,"w":118,"h":16,"abs_x":529,"abs_y":676}' className="text-xs text-zinc-100 tracking-wide whitespace-nowrap">→ CRM Opportunité</span>
</div>
</div>

<div bis_size='{"x":461,"y":808,"w":140,"h":140,"abs_x":941,"abs_y":851}' className="ai-cube" id="cube" style={{animation: '20s linear 0s infinite normal none running spinCube'}}>
<div bis_size='{"x":456,"y":802,"w":150,"h":150,"abs_x":936,"abs_y":845}' className="cube-face face-front group cursor-default"></div>
<div bis_size='{"x":466,"y":812,"w":130,"h":130,"abs_x":946,"abs_y":855}' className="cube-face face-back"></div>
<div bis_size='{"x":596,"y":802,"w":9,"h":150,"abs_x":1076,"abs_y":845}' className="cube-face face-right"></div>
<div bis_size='{"x":456,"y":802,"w":9,"h":150,"abs_x":936,"abs_y":845}' className="cube-face face-left"></div>
<div bis_size='{"x":456,"y":802,"w":150,"h":9,"abs_x":936,"abs_y":845}' className="cube-face face-top"></div>
<div bis_size='{"x":456,"y":943,"w":150,"h":9,"abs_x":936,"abs_y":986}' className="cube-face face-bottom"></div>
</div>

<div bis_size='{"x":44,"y":703,"w":40,"h":40,"abs_x":524,"abs_y":746}' className="node-icon node-source-1 group">
<iconify-icon bis_size='{"x":55,"y":713,"w":18,"h":18,"abs_x":535,"abs_y":756}' className="" icon="logos:google-icon" width="18"></iconify-icon>
<div bis_size='{"x":22,"y":672,"w":83,"h":26,"abs_x":502,"abs_y":715}' className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-900 border border-white/10 px-2 py-1 rounded text-white whitespace-nowrap z-50">Google Ads</div>
</div>
<div bis_size='{"x":105,"y":753,"w":40,"h":40,"abs_x":585,"abs_y":796}' className="node-icon node-source-2 group">
<iconify-icon bis_size='{"x":114,"y":762,"w":22,"h":22,"abs_x":594,"abs_y":805}' className="text-[#0A66C2]" icon="ri:linkedin-fill" width="22"></iconify-icon>
<div bis_size='{"x":71,"y":722,"w":106,"h":26,"abs_x":551,"abs_y":765}' className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-900 border border-white/10 px-2 py-1 rounded text-white whitespace-nowrap z-50">Sales Navigator</div>
</div>
<div bis_size='{"x":54,"y":828,"w":40,"h":40,"abs_x":534,"abs_y":871}' className="node-icon node-source-3 group">
<iconify-icon bis_size='{"x":63,"y":837,"w":22,"h":22,"abs_x":543,"abs_y":880}' className="" icon="logos:reddit-icon" width="22"></iconify-icon>
<div bis_size='{"x":47,"y":797,"w":54,"h":26,"abs_x":527,"abs_y":840}' className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-900 border border-white/10 px-2 py-1 rounded text-white whitespace-nowrap z-50">Reddit</div>
</div>
<div bis_size='{"x":125,"y":878,"w":40,"h":40,"abs_x":605,"abs_y":921}' className="node-icon node-source-4 group">
<iconify-icon bis_size='{"x":136,"y":889,"w":18,"h":18,"abs_x":616,"abs_y":932}' className="text-[#2164f3]" icon="simple-icons:indeed" width="18"></iconify-icon>
<div bis_size='{"x":104,"y":847,"w":82,"h":26,"abs_x":584,"abs_y":890}' className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-900 border border-white/10 px-2 py-1 rounded text-white whitespace-nowrap z-50">Job Boards</div>
</div>
<div bis_size='{"x":64,"y":953,"w":40,"h":40,"abs_x":544,"abs_y":996}' className="node-icon node-source-5 group">
<iconify-icon bis_size='{"x":74,"y":963,"w":20,"h":20,"abs_x":554,"abs_y":1006}' className="text-orange-400" icon="solar:shop-2-bold" width="20"></iconify-icon>
<div bis_size='{"x":37,"y":998,"w":94,"h":26,"abs_x":517,"abs_y":1041}' className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-900 border border-white/10 px-2 py-1 rounded text-white whitespace-nowrap z-50">Marketplaces</div>
</div>
<div bis_size='{"x":115,"y":1003,"w":40,"h":40,"abs_x":595,"abs_y":1046}' className="node-icon node-source-6 group">
<iconify-icon bis_size='{"x":126,"y":1014,"w":18,"h":18,"abs_x":606,"abs_y":1057}' className="text-[#FF492C]" icon="simple-icons:g2" width="18"></iconify-icon>
<div bis_size='{"x":90,"y":1048,"w":89,"h":26,"abs_x":570,"abs_y":1091}' className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-900 border border-white/10 px-2 py-1 rounded text-white whitespace-nowrap z-50">Review Sites</div>
</div>
<div bis_size='{"x":44,"y":1053,"w":40,"h":40,"abs_x":524,"abs_y":1096}' className="node-icon node-source-7 group">
<iconify-icon bis_size='{"x":53,"y":1062,"w":22,"h":22,"abs_x":533,"abs_y":1105}' className="text-green-400" icon="solar:dollar-minimalistic-linear" width="22"></iconify-icon>
<div bis_size='{"x":20,"y":1098,"w":86,"h":26,"abs_x":500,"abs_y":1141}' className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-900 border border-white/10 px-2 py-1 rounded text-white whitespace-nowrap z-50">Crunchbase</div>
</div>

<div bis_size='{"x":948,"y":703,"w":40,"h":40,"abs_x":1428,"abs_y":746}' className="node-icon node-action-1 group bg-[#1a0f0a]">
<iconify-icon bis_size='{"x":956,"y":711,"w":24,"h":24,"abs_x":1436,"abs_y":754}' className="text-orange-500" icon="solar:letter-linear" width="24"></iconify-icon>
<div bis_size='{"x":929,"y":672,"w":77,"h":26,"abs_x":1409,"abs_y":715}' className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-900 border border-orange-500/20 px-2 py-1 rounded text-orange-200 whitespace-nowrap z-50">Cold Email</div>
</div>
<div bis_size='{"x":948,"y":788,"w":40,"h":40,"abs_x":1428,"abs_y":831}' className="node-icon node-action-2 group bg-[#1a0f0a]">
<iconify-icon bis_size='{"x":956,"y":796,"w":24,"h":24,"abs_x":1436,"abs_y":839}' className="text-orange-500" icon="ri:linkedin-fill" width="24"></iconify-icon>
<div bis_size='{"x":907,"y":757,"w":121,"h":26,"abs_x":1387,"abs_y":800}' className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-900 border border-orange-500/20 px-2 py-1 rounded text-orange-200 whitespace-nowrap z-50">LinkedIn Outreach</div>
</div>
<div bis_size='{"x":948,"y":878,"w":40,"h":40,"abs_x":1428,"abs_y":921}' className="node-icon node-action-4 group bg-[#0a1a0f]">
<iconify-icon bis_size='{"x":957,"y":886,"w":22,"h":22,"abs_x":1437,"abs_y":929}' className="" icon="logos:whatsapp-icon" width="22"></iconify-icon>
<div bis_size='{"x":929,"y":847,"w":76,"h":26,"abs_x":1409,"abs_y":890}' className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-900 border border-green-500/20 px-2 py-1 rounded text-green-200 whitespace-nowrap z-50">WhatsApp</div>
</div>
<div bis_size='{"x":948,"y":968,"w":40,"h":40,"abs_x":1428,"abs_y":1011}' className="node-icon node-action-5 group bg-[#0f121a]">
<iconify-icon bis_size='{"x":956,"y":976,"w":24,"h":24,"abs_x":1436,"abs_y":1019}' className="text-blue-500" icon="solar:phone-calling-rounded-linear" width="24"></iconify-icon>
<div bis_size='{"x":933,"y":937,"w":68,"h":26,"abs_x":1413,"abs_y":980}' className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-900 border border-blue-500/20 px-2 py-1 rounded text-blue-200 whitespace-nowrap z-50">Cold Call</div>
</div>
<div bis_size='{"x":948,"y":1053,"w":40,"h":40,"abs_x":1428,"abs_y":1096}' className="node-icon node-action-3 group bg-[#1a0f0a]" style={{borderColor: 'rgba(249, 115, 22, 0.3)'}}>
<iconify-icon bis_size='{"x":956,"y":1061,"w":24,"h":24,"abs_x":1436,"abs_y":1104}' className="text-orange-500" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<div bis_size='{"x":929,"y":1098,"w":77,"h":26,"abs_x":1409,"abs_y":1141}' className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-zinc-900 border border-orange-500/20 px-2 py-1 rounded text-orange-200 whitespace-nowrap z-50">Sync CRM</div>
</div>
</div>
<div bis_size='{"x":24,"y":1160,"w":1015,"h":16,"abs_x":504,"abs_y":1203}' className="mt-8 flex justify-center gap-12 text-xs text-zinc-500 font-mono tracking-wider opacity-60">
<div bis_size='{"x":374,"y":1160,"w":114,"h":16,"abs_x":854,"abs_y":1203}' className="flex items-center gap-2">
<div bis_size='{"x":374,"y":1165,"w":6,"h":6,"abs_x":854,"abs_y":1208}' className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div> SIGNAUX CAPTÉS
                    </div>
<div bis_size='{"x":537,"y":1160,"w":150,"h":16,"abs_x":1017,"abs_y":1203}' className="flex items-center gap-2">
<div bis_size='{"x":537,"y":1165,"w":6,"h":6,"abs_x":1017,"abs_y":1208}' className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div> ACTIONS DÉCLENCHÉES
                    </div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1256,"w":1063,"h":173,"abs_x":480,"abs_y":1299}' className="py-12 border-t border-white/5 bg-[#020202] relative z-20">
<div bis_size='{"x":0,"y":1305,"w":1063,"h":76,"abs_x":480,"abs_y":1348}' className="max-w-7xl mx-auto px-6">
<p bis_size='{"x":24,"y":1305,"w":1015,"h":16,"abs_x":504,"abs_y":1348}' className="text-center text-xs text-zinc-600 mb-8 font-mono uppercase tracking-widest">+200 équipes Sales accélèrent leur pipeline avec GTMLab</p>
<div bis_size='{"x":24,"y":1353,"w":1015,"h":28,"abs_x":504,"abs_y":1396}' className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
<ul bis_size='{"x":24,"y":1353,"w":1485,"h":28,"abs_x":504,"abs_y":1396}' className="flex items-center justify-center md:justify-start [&amp;_li]:mx-12 animate-scroll">
<li bis_size='{"x":72,"y":1353,"w":53,"h":28,"abs_x":552,"abs_y":1396}' className="text-lg font-bold text-zinc-500 font-sans">Qonto</li>
<li bis_size='{"x":221,"y":1353,"w":38,"h":28,"abs_x":701,"abs_y":1396}' className="text-lg font-bold text-zinc-500 font-sans">Alan</li>
<li bis_size='{"x":355,"y":1353,"w":51,"h":28,"abs_x":835,"abs_y":1396}' className="text-lg font-bold text-zinc-500 font-sans">PayFit</li>
<li bis_size='{"x":503,"y":1353,"w":80,"h":28,"abs_x":983,"abs_y":1396}' className="text-lg font-bold text-zinc-500 font-sans">Spendesk</li>
<li bis_size='{"x":680,"y":1353,"w":44,"h":28,"abs_x":1160,"abs_y":1396}' className="text-lg font-bold text-zinc-500 font-sans">Swile</li>
<li bis_size='{"x":820,"y":1353,"w":54,"h":28,"abs_x":1300,"abs_y":1396}' className="text-lg font-bold text-zinc-500 font-sans">Mirakl</li>
<li bis_size='{"x":970,"y":1353,"w":59,"h":28,"abs_x":1450,"abs_y":1396}' className="text-lg font-bold text-zinc-500 font-sans">Algolia</li>
<li bis_size='{"x":1126,"y":1353,"w":53,"h":28,"abs_x":1606,"abs_y":1396}' className="text-lg font-bold text-zinc-500 font-sans">Qonto</li>
<li bis_size='{"x":1276,"y":1353,"w":38,"h":28,"abs_x":1756,"abs_y":1396}' className="text-lg font-bold text-zinc-500 font-sans">Alan</li>
<li bis_size='{"x":1410,"y":1353,"w":51,"h":28,"abs_x":1890,"abs_y":1396}' className="text-lg font-bold text-zinc-500 font-sans">PayFit</li>
</ul>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1429,"w":1063,"h":933,"abs_x":480,"abs_y":1472}' className="bg-black border-white/5 border-t pt-24 pb-24 relative">
<div bis_size='{"x":0,"y":1526,"w":1063,"h":740,"abs_x":480,"abs_y":1569}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":1526,"w":1015,"h":165,"abs_x":504,"abs_y":1569}' className="flex flex-col md:flex-row md:items-end gap-6 mb-12 justify-between">
<div bis_size='{"x":24,"y":1526,"w":576,"h":165,"abs_x":504,"abs_y":1569}' className="max-w-xl">
<div bis_size='{"x":24,"y":1526,"w":576,"h":16,"abs_x":504,"abs_y":1569}' className="text-orange-500 font-mono text-xs uppercase tracking-wider mb-2">Bibliothèque de Signaux</div>
<h2 bis_size='{"x":24,"y":1550,"w":576,"h":80,"abs_x":504,"abs_y":1593}' className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                            Chaque signal est <span bis_size='{"x":24,"y":1548,"w":568,"h":84,"abs_x":504,"abs_y":1591}' className="text-zinc-500">une opportunité manquée.</span>
</h2>
<p bis_size='{"x":24,"y":1646,"w":576,"h":45,"abs_x":504,"abs_y":1689}' className="text-zinc-400 leading-relaxed text-sm">
                            Vos concurrents ne les voient pas. Activez nos détecteurs pré-configurés et soyez le premier à réagir aux moments clés du parcours d'achat.
                        </p>
</div>
<a bis_size='{"x":853,"y":1671,"w":185,"h":20,"abs_x":1333,"abs_y":1714}' className="hover:text-orange-400 transition-colors flex items-center gap-1 group text-sm font-medium text-white" href="https://cal.com/guillaume-tonet-mejox0/30min?overlayCalendar=true">
                        Explorer les 50+ signaux
                        <iconify-icon bis_size='{"x":1023,"y":1673,"w":16,"h":16,"abs_x":1503,"abs_y":1716}' className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div bis_size='{"x":24,"y":1739,"w":1015,"h":527,"abs_x":504,"abs_y":1782}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div bis_size='{"x":24,"y":1739,"w":322,"h":251,"abs_x":504,"abs_y":1782}' className="group p-5 rounded-2xl border border-white/10 bg-[#080808] hover:border-orange-500/30 hover:bg-[#0c0c0c] transition-all cursor-default">
<div bis_size='{"x":45,"y":1760,"w":280,"h":40,"abs_x":525,"abs_y":1803}' className="flex justify-between items-start mb-4">
<div bis_size='{"x":45,"y":1760,"w":40,"h":40,"abs_x":525,"abs_y":1803}' className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
<iconify-icon bis_size='{"x":54,"y":1769,"w":22,"h":22,"abs_x":534,"abs_y":1812}' icon="solar:case-round-linear" width="22"></iconify-icon>
</div>
<span bis_size='{"x":246,"y":1760,"w":78,"h":25,"abs_x":726,"abs_y":1803}' className="px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-[10px] text-orange-400 font-mono">HIGH INTENT</span>
</div>
<h3 bis_size='{"x":45,"y":1816,"w":280,"h":28,"abs_x":525,"abs_y":1859}' className="text-white font-medium text-lg mb-1">Recrutement Stratégique</h3>
<p bis_size='{"x":45,"y":1848,"w":280,"h":48,"abs_x":525,"abs_y":1891}' className="text-zinc-500 text-xs mb-4">Une entreprise recrute un Head of Sales ? Elle s'apprête à structurer son acquisition. Soyez le premier outil qu'elle évalue.</p>
<div bis_size='{"x":45,"y":1912,"w":280,"h":57,"abs_x":525,"abs_y":1955}' className="mt-auto p-3 bg-zinc-900/50 rounded-lg border border-white/5 flex items-center gap-3">
<div bis_size='{"x":58,"y":1929,"w":24,"h":24,"abs_x":538,"abs_y":1972}' className="w-6 h-6 rounded bg-zinc-800 text-xs flex items-center justify-center text-white font-bold">L</div>
<div bis_size='{"x":94,"y":1925,"w":218,"h":31,"abs_x":574,"abs_y":1968}' className="flex-1 min-w-0">
<div bis_size='{"x":94,"y":1925,"w":218,"h":16,"abs_x":574,"abs_y":1968}' className="text-[11px] text-white truncate">Lydia recrute "Head of Growth"</div>
<div bis_size='{"x":94,"y":1942,"w":218,"h":15,"abs_x":574,"abs_y":1985}' className="text-[10px] text-zinc-500">Il y a 4h · LinkedIn Jobs</div>
</div>
</div>
</div>

<div bis_size='{"x":370,"y":1739,"w":322,"h":251,"abs_x":850,"abs_y":1782}' className="group p-5 rounded-2xl border border-white/10 bg-[#080808] hover:border-orange-500/30 hover:bg-[#0c0c0c] transition-all cursor-default">
<div bis_size='{"x":391,"y":1760,"w":280,"h":40,"abs_x":871,"abs_y":1803}' className="flex justify-between items-start mb-4">
<div bis_size='{"x":391,"y":1760,"w":40,"h":40,"abs_x":871,"abs_y":1803}' className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
<iconify-icon bis_size='{"x":400,"y":1769,"w":22,"h":22,"abs_x":880,"abs_y":1812}' icon="solar:laptop-linear" width="22"></iconify-icon>
</div>
<span bis_size='{"x":620,"y":1760,"w":51,"h":25,"abs_x":1100,"abs_y":1803}' className="px-2 py-1 rounded bg-zinc-900 border border-white/10 text-[10px] text-zinc-500 font-mono">TECHNO</span>
</div>
<h3 bis_size='{"x":391,"y":1816,"w":280,"h":28,"abs_x":871,"abs_y":1859}' className="text-white font-medium text-lg mb-1">Changement de Stack</h3>
<p bis_size='{"x":391,"y":1848,"w":280,"h":48,"abs_x":871,"abs_y":1891}' className="text-zinc-500 text-xs mb-4">Détectez l'installation ou la suppression d'un outil concurrent. Si un prospect change de CRM, c'est le moment d'agir.</p>
<div bis_size='{"x":391,"y":1912,"w":280,"h":57,"abs_x":871,"abs_y":1955}' className="mt-auto p-3 bg-zinc-900/50 rounded-lg border border-white/5 flex items-center gap-3">
<div bis_size='{"x":404,"y":1929,"w":24,"h":24,"abs_x":884,"abs_y":1972}' className="w-6 h-6 rounded bg-zinc-800 text-xs flex items-center justify-center text-white font-bold">M</div>
<div bis_size='{"x":440,"y":1925,"w":218,"h":31,"abs_x":920,"abs_y":1968}' className="flex-1 min-w-0">
<div bis_size='{"x":440,"y":1925,"w":218,"h":16,"abs_x":920,"abs_y":1968}' className="text-[11px] text-white truncate">ManoMano supprime Pipedrive → installe HubSpot</div>
<div bis_size='{"x":440,"y":1942,"w":218,"h":15,"abs_x":920,"abs_y":1985}' className="text-[10px] text-zinc-500">Il y a 20min · BuiltWith</div>
</div>
</div>
</div>

<div bis_size='{"x":716,"y":1739,"w":322,"h":251,"abs_x":1196,"abs_y":1782}' className="group p-5 rounded-2xl border border-white/10 bg-[#080808] hover:border-orange-500/30 hover:bg-[#0c0c0c] transition-all cursor-default">
<div bis_size='{"x":737,"y":1760,"w":280,"h":40,"abs_x":1217,"abs_y":1803}' className="flex justify-between items-start mb-4">
<div bis_size='{"x":737,"y":1760,"w":40,"h":40,"abs_x":1217,"abs_y":1803}' className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20 group-hover:scale-110 transition-transform">
<iconify-icon bis_size='{"x":746,"y":1769,"w":22,"h":22,"abs_x":1226,"abs_y":1812}' icon="solar:user-id-linear" width="22"></iconify-icon>
</div>
<span bis_size='{"x":956,"y":1760,"w":61,"h":25,"abs_x":1436,"abs_y":1803}' className="px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-[10px] text-orange-400 font-mono">CHAMPION</span>
</div>
<h3 bis_size='{"x":737,"y":1816,"w":280,"h":28,"abs_x":1217,"abs_y":1859}' className="text-white font-medium text-lg mb-1">Champion en Mouvement</h3>
<p bis_size='{"x":737,"y":1848,"w":280,"h":48,"abs_x":1217,"abs_y":1891}' className="text-zinc-500 text-xs mb-4">Un ancien client change d'entreprise ? Il connaît déjà votre produit. C'est votre meilleur taux de conversion — 3x supérieur à du cold.</p>
<div bis_size='{"x":737,"y":1912,"w":280,"h":57,"abs_x":1217,"abs_y":1955}' className="mt-auto p-3 bg-zinc-900/50 rounded-lg border border-white/5 flex items-center gap-3">
<div bis_size='{"x":750,"y":1929,"w":24,"h":24,"abs_x":1230,"abs_y":1972}' className="w-6 h-6 rounded-full bg-zinc-700 overflow-hidden">
<iconify-icon bis_size='{"x":750,"y":1929,"w":24,"h":24,"abs_x":1230,"abs_y":1972}' className="text-zinc-400" icon="solar:user-circle-bold" width="24"></iconify-icon>
</div>
<div bis_size='{"x":786,"y":1925,"w":218,"h":31,"abs_x":1266,"abs_y":1968}' className="flex-1 min-w-0">
<div bis_size='{"x":786,"y":1925,"w":218,"h":16,"abs_x":1266,"abs_y":1968}' className="text-[11px] text-white truncate">Julie Martin (ex-cliente) → VP Marketing @ Spendesk</div>
<div bis_size='{"x":786,"y":1942,"w":218,"h":15,"abs_x":1266,"abs_y":1985}' className="text-[10px] text-zinc-500">Hier · LinkedIn</div>
</div>
</div>
</div>

<div bis_size='{"x":24,"y":2015,"w":322,"h":251,"abs_x":504,"abs_y":2058}' className="group p-5 rounded-2xl border border-white/10 bg-[#080808] hover:border-orange-500/30 hover:bg-[#0c0c0c] transition-all cursor-default">
<div bis_size='{"x":45,"y":2036,"w":280,"h":40,"abs_x":525,"abs_y":2079}' className="flex justify-between items-start mb-4">
<div bis_size='{"x":45,"y":2036,"w":40,"h":40,"abs_x":525,"abs_y":2079}' className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20 group-hover:scale-110 transition-transform">
<iconify-icon bis_size='{"x":54,"y":2045,"w":22,"h":22,"abs_x":534,"abs_y":2088}' icon="solar:wad-of-money-linear" width="22"></iconify-icon>
</div>
<span bis_size='{"x":274,"y":2036,"w":51,"h":25,"abs_x":754,"abs_y":2079}' className="px-2 py-1 rounded bg-zinc-900 border border-white/10 text-[10px] text-zinc-500 font-mono">BUDGET</span>
</div>
<h3 bis_size='{"x":45,"y":2092,"w":280,"h":28,"abs_x":525,"abs_y":2135}' className="text-white font-medium text-lg mb-1">Levée de Fonds</h3>
<p bis_size='{"x":45,"y":2124,"w":280,"h":48,"abs_x":525,"abs_y":2167}' className="text-zinc-500 text-xs mb-4">Qui dit levée dit budget. Les 90 jours suivant un financement sont la fenêtre d'or pour vendre des outils de scaling.</p>
<div bis_size='{"x":45,"y":2188,"w":280,"h":57,"abs_x":525,"abs_y":2231}' className="mt-auto p-3 bg-zinc-900/50 rounded-lg border border-white/5 flex items-center gap-3">
<div bis_size='{"x":58,"y":2204,"w":24,"h":24,"abs_x":538,"abs_y":2247}' className="w-6 h-6 rounded bg-zinc-800 text-xs flex items-center justify-center text-white font-bold">P</div>
<div bis_size='{"x":94,"y":2201,"w":218,"h":31,"abs_x":574,"abs_y":2244}' className="flex-1 min-w-0">
<div bis_size='{"x":94,"y":2201,"w":218,"h":16,"abs_x":574,"abs_y":2244}' className="text-[11px] text-white truncate">Pennylane lève 40M€ en Série C</div>
<div bis_size='{"x":94,"y":2217,"w":218,"h":15,"abs_x":574,"abs_y":2260}' className="text-[10px] text-zinc-500">Aujourd'hui · TechCrunch</div>
</div>
</div>
</div>

<div bis_size='{"x":370,"y":2015,"w":322,"h":251,"abs_x":850,"abs_y":2058}' className="group p-5 rounded-2xl border border-white/10 bg-[#080808] hover:border-orange-500/30 hover:bg-[#0c0c0c] transition-all cursor-default">
<div bis_size='{"x":391,"y":2036,"w":280,"h":40,"abs_x":871,"abs_y":2079}' className="flex justify-between items-start mb-4">
<div bis_size='{"x":391,"y":2036,"w":40,"h":40,"abs_x":871,"abs_y":2079}' className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 border border-pink-500/20 group-hover:scale-110 transition-transform">
<iconify-icon bis_size='{"x":400,"y":2045,"w":22,"h":22,"abs_x":880,"abs_y":2088}' icon="solar:chat-round-linear" width="22"></iconify-icon>
</div>
<span bis_size='{"x":620,"y":2036,"w":51,"h":25,"abs_x":1100,"abs_y":2079}' className="px-2 py-1 rounded bg-zinc-900 border border-white/10 text-[10px] text-zinc-500 font-mono">SOCIAL</span>
</div>
<h3 bis_size='{"x":391,"y":2092,"w":280,"h":28,"abs_x":871,"abs_y":2135}' className="text-white font-medium text-lg mb-1">Intention Sociale</h3>
<p bis_size='{"x":391,"y":2124,"w":280,"h":48,"abs_x":871,"abs_y":2167}' className="text-zinc-500 text-xs mb-4">Un décideur commente un post sur un sujet lié à votre offre ? Il est en veille active. Le bon message au bon moment fait toute la différence.</p>
<div bis_size='{"x":391,"y":2188,"w":280,"h":57,"abs_x":871,"abs_y":2231}' className="mt-auto p-3 bg-zinc-900/50 rounded-lg border border-white/5 flex items-center gap-3">
<div bis_size='{"x":404,"y":2204,"w":24,"h":24,"abs_x":884,"abs_y":2247}' className="w-6 h-6 rounded bg-zinc-800 text-xs flex items-center justify-center text-white font-bold">K</div>
<div bis_size='{"x":440,"y":2201,"w":218,"h":31,"abs_x":920,"abs_y":2244}' className="flex-1 min-w-0">
<div bis_size='{"x":440,"y":2201,"w":218,"h":16,"abs_x":920,"abs_y":2244}' className="text-[11px] text-white truncate">Kevin (CTO) commente "meilleur outil d'automation"</div>
<div bis_size='{"x":440,"y":2217,"w":218,"h":15,"abs_x":920,"abs_y":2260}' className="text-[10px] text-zinc-500">Il y a 1h · LinkedIn</div>
</div>
</div>
</div>

<div bis_size='{"x":716,"y":2015,"w":322,"h":251,"abs_x":1196,"abs_y":2058}' className="group p-5 rounded-2xl border border-white/10 bg-[#080808] hover:border-orange-500/30 hover:bg-[#0c0c0c] transition-all cursor-default">
<div bis_size='{"x":737,"y":2036,"w":280,"h":40,"abs_x":1217,"abs_y":2079}' className="flex justify-between items-start mb-4">
<div bis_size='{"x":737,"y":2036,"w":40,"h":40,"abs_x":1217,"abs_y":2079}' className="flex group-hover:scale-110 transition-transform text-yellow-400 bg-yellow-500/10 w-10 h-10 border-yellow-500/20 border rounded-lg items-center justify-center">
<iconify-icon bis_size='{"x":746,"y":2045,"w":22,"h":22,"abs_x":1226,"abs_y":2088}' icon="solar:earth-linear" width="22"></iconify-icon>
</div>
<span bis_size='{"x":950,"y":2036,"w":67,"h":25,"abs_x":1430,"abs_y":2079}' className="px-2 py-1 rounded bg-zinc-900 border border-white/10 text-[10px] text-zinc-500 font-mono">EXPANSION</span>
</div>
<h3 bis_size='{"x":737,"y":2092,"w":280,"h":28,"abs_x":1217,"abs_y":2135}' className="text-white font-medium text-lg mb-1">Croissance &amp; Expansion</h3>
<p bis_size='{"x":737,"y":2124,"w":280,"h":48,"abs_x":1217,"abs_y":2167}' className="text-zinc-500 text-xs mb-4">Nouveau bureau, acquisition ou lancement international : ces entreprises ont des besoins urgents en outils, services et partenaires.</p>
<div bis_size='{"x":737,"y":2188,"w":280,"h":57,"abs_x":1217,"abs_y":2231}' className="mt-auto p-3 bg-zinc-900/50 rounded-lg border border-white/5 flex items-center gap-3">
<div bis_size='{"x":750,"y":2204,"w":24,"h":24,"abs_x":1230,"abs_y":2247}' className="w-6 h-6 rounded bg-zinc-800 text-xs flex items-center justify-center text-white font-bold">B</div>
<div bis_size='{"x":786,"y":2201,"w":218,"h":31,"abs_x":1266,"abs_y":2244}' className="flex-1 min-w-0">
<div bis_size='{"x":786,"y":2201,"w":218,"h":16,"abs_x":1266,"abs_y":2244}' className="text-[11px] text-white truncate">BackMarket ouvre ses bureaux à Berlin</div>
<div bis_size='{"x":786,"y":2217,"w":218,"h":15,"abs_x":1266,"abs_y":2260}' className="text-[10px] text-zinc-500">Hier · Communiqué de presse</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2362,"w":1063,"h":1390,"abs_x":480,"abs_y":2405}' className="py-24 bg-[#050505] border-y border-white/5">
<div bis_size='{"x":19,"y":2459,"w":1024,"h":1196,"abs_x":499,"abs_y":2502}' className="max-w-5xl mx-auto px-6">
<div bis_size='{"x":43,"y":2459,"w":976,"h":168,"abs_x":523,"abs_y":2502}' className="text-center mb-20">
<h2 bis_size='{"x":43,"y":2459,"w":976,"h":96,"abs_x":523,"abs_y":2502}' className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6">
                        Du signal au rendez-vous.<br bis_size='{"x":804,"y":2453,"w":0,"h":59,"abs_x":1284,"abs_y":2496}'/>
<span bis_size='{"x":249,"y":2501,"w":563,"h":59,"abs_x":729,"abs_y":2544}' className="text-orange-500">Zéro intervention humaine.</span>
</h2>
<p bis_size='{"x":275,"y":2579,"w":512,"h":48,"abs_x":755,"abs_y":2622}' className="text-zinc-400 max-w-lg mx-auto">Trois étapes. Entièrement automatisées. Votre équipe ne gère que les réponses positives.</p>
</div>

<div bis_size='{"x":43,"y":2707,"w":976,"h":346,"abs_x":523,"abs_y":2750}' className="relative pl-12 pb-20 border-l border-zinc-800 last:border-0 group scroll-mt-32" id="intent">
<div bis_size='{"x":24,"y":2707,"w":40,"h":40,"abs_x":504,"abs_y":2750}' className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-orange-500 transition-colors">
<iconify-icon bis_size='{"x":34,"y":2717,"w":20,"h":20,"abs_x":514,"abs_y":2760}' icon="solar:radar-linear" width="20"></iconify-icon>
</div>
<div bis_size='{"x":92,"y":2707,"w":927,"h":266,"abs_x":572,"abs_y":2750}' className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div bis_size='{"x":92,"y":2707,"w":439,"h":266,"abs_x":572,"abs_y":2750}' className="">
<span bis_size='{"x":92,"y":2707,"w":439,"h":16,"abs_x":572,"abs_y":2750}' className="text-orange-400 font-mono text-xs uppercase tracking-wider mb-2 block">Étape 01 · Détection</span>
<h3 bis_size='{"x":92,"y":2731,"w":439,"h":64,"abs_x":572,"abs_y":2774}' className="text-2xl text-white font-semibold mb-4">Captez les signaux d'achat avant vos concurrents</h3>
<p bis_size='{"x":92,"y":2811,"w":439,"h":78,"abs_x":572,"abs_y":2854}' className="text-zinc-400 leading-relaxed mb-6">Notre moteur scanne le web en continu pour identifier les entreprises qui montrent des intentions d'achat. Pas de suppositions — uniquement des faits observables.</p>
<div bis_size='{"x":92,"y":2913,"w":439,"h":60,"abs_x":572,"abs_y":2956}' className="flex flex-wrap gap-2">
<span bis_size='{"x":92,"y":2913,"w":151,"h":26,"abs_x":572,"abs_y":2956}' className="px-3 py-1 bg-zinc-900 border border-white/10 rounded-full text-xs text-zinc-300 flex items-center gap-1.5"><iconify-icon bis_size='{"x":105,"y":2919,"w":14,"h":14,"abs_x":585,"abs_y":2962}' icon="solar:case-round-linear" width="14"></iconify-icon> Recrutements clés</span>
<span bis_size='{"x":251,"y":2913,"w":139,"h":26,"abs_x":731,"abs_y":2956}' className="px-3 py-1 bg-zinc-900 border border-white/10 rounded-full text-xs text-zinc-300 flex items-center gap-1.5"><iconify-icon bis_size='{"x":264,"y":2919,"w":14,"h":14,"abs_x":744,"abs_y":2962}' icon="solar:graph-up-linear" width="14"></iconify-icon> Levées de fonds</span>
<span bis_size='{"x":92,"y":2947,"w":167,"h":26,"abs_x":572,"abs_y":2990}' className="px-3 py-1 bg-zinc-900 border border-white/10 rounded-full text-xs text-zinc-300 flex items-center gap-1.5"><iconify-icon bis_size='{"x":105,"y":2953,"w":14,"h":14,"abs_x":585,"abs_y":2996}' icon="solar:cpu-linear" width="14"></iconify-icon> Changements techno</span>
<span bis_size='{"x":267,"y":2947,"w":128,"h":26,"abs_x":747,"abs_y":2990}' className="px-3 py-1 bg-zinc-900 border border-white/10 rounded-full text-xs text-zinc-300 flex items-center gap-1.5"><iconify-icon bis_size='{"x":280,"y":2953,"w":14,"h":14,"abs_x":760,"abs_y":2996}' icon="solar:earth-linear" width="14"></iconify-icon> Posts LinkedIn</span>
</div>
</div>
<div bis_size='{"x":580,"y":2763,"w":439,"h":154,"abs_x":1060,"abs_y":2806}' className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
<div bis_size='{"x":581,"y":2764,"w":437,"h":152,"abs_x":1061,"abs_y":2807}' className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(234,88,12,0.15),transparent_70%)] animate-pulse"></div>
<div bis_size='{"x":605,"y":2788,"w":389,"h":104,"abs_x":1085,"abs_y":2831}' className="relative z-10 space-y-3">
<div bis_size='{"x":605,"y":2788,"w":389,"h":46,"abs_x":1085,"abs_y":2831}' className="flex items-center justify-between p-3 bg-zinc-900/80 rounded border border-orange-500/30">
<div bis_size='{"x":618,"y":2801,"w":202,"h":20,"abs_x":1098,"abs_y":2844}' className="flex items-center gap-3">
<div bis_size='{"x":618,"y":2807,"w":8,"h":8,"abs_x":1098,"abs_y":2850}' className="w-2 h-2 rounded-full bg-orange-500"></div>
<span bis_size='{"x":638,"y":2801,"w":182,"h":20,"abs_x":1118,"abs_y":2844}' className="text-sm text-white">Lydia recrute Head of Sales</span>
</div>
<span bis_size='{"x":928,"y":2803,"w":52,"h":16,"abs_x":1408,"abs_y":2846}' className="text-xs text-orange-400 font-mono">SCORE 92</span>
</div>
<div bis_size='{"x":605,"y":2846,"w":389,"h":46,"abs_x":1085,"abs_y":2889}' className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-white/5">
<div bis_size='{"x":618,"y":2859,"w":208,"h":20,"abs_x":1098,"abs_y":2902}' className="flex items-center gap-3">
<div bis_size='{"x":618,"y":2865,"w":8,"h":8,"abs_x":1098,"abs_y":2908}' className="w-2 h-2 rounded-full bg-zinc-600"></div>
<span bis_size='{"x":638,"y":2859,"w":188,"h":20,"abs_x":1118,"abs_y":2902}' className="text-sm text-zinc-400">Algolia — visite page pricing</span>
</div>
<span bis_size='{"x":928,"y":2861,"w":52,"h":16,"abs_x":1408,"abs_y":2904}' className="text-xs text-zinc-600 font-mono">SCORE 34</span>
</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":43,"y":3053,"w":976,"h":396,"abs_x":523,"abs_y":3096}' className="relative pl-12 pb-20 border-l border-zinc-800 last:border-0 group scroll-mt-32" id="automation">
<div bis_size='{"x":24,"y":3053,"w":40,"h":40,"abs_x":504,"abs_y":3096}' className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-indigo-500 transition-colors">
<iconify-icon bis_size='{"x":44,"y":3073,"w":0,"h":0,"abs_x":524,"abs_y":3116}' icon="solar:robot-linear" width="20"></iconify-icon>
</div>
<div bis_size='{"x":92,"y":3053,"w":927,"h":316,"abs_x":572,"abs_y":3096}' className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div bis_size='{"x":580,"y":3053,"w":439,"h":316,"abs_x":1060,"abs_y":3096}' className="md:order-2">
<span bis_size='{"x":580,"y":3053,"w":439,"h":16,"abs_x":1060,"abs_y":3096}' className="text-indigo-400 font-mono text-xs uppercase tracking-wider mb-2 block">Étape 02 · Enrichissement &amp; Rédaction</span>
<h3 bis_size='{"x":580,"y":3077,"w":439,"h":64,"abs_x":1060,"abs_y":3120}' className="text-2xl text-white font-semibold mb-4">L'IA enrichit, rédige et envoie à votre place</h3>
<p bis_size='{"x":580,"y":3157,"w":439,"h":104,"abs_x":1060,"abs_y":3200}' className="text-zinc-400 leading-relaxed mb-6">Dès qu'un signal est capté, l'IA trouve l'email et le mobile du décideur (cascading sur 15+ sources), puis génère un message ultra-personnalisé basé sur le contexte exact du signal.</p>
<div bis_size='{"x":580,"y":3285,"w":439,"h":84,"abs_x":1060,"abs_y":3328}' className="space-y-3">
<div bis_size='{"x":580,"y":3285,"w":439,"h":20,"abs_x":1060,"abs_y":3328}' className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon bis_size='{"x":580,"y":3287,"w":16,"h":16,"abs_x":1060,"abs_y":3330}' className="text-indigo-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                    Waterfall Enrichment (email + mobile + LinkedIn)
                                </div>
<div bis_size='{"x":580,"y":3317,"w":439,"h":20,"abs_x":1060,"abs_y":3360}' className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon bis_size='{"x":580,"y":3319,"w":16,"h":16,"abs_x":1060,"abs_y":3362}' className="text-indigo-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                    Icebreaker IA basé sur le signal détecté
                                </div>
<div bis_size='{"x":580,"y":3349,"w":439,"h":20,"abs_x":1060,"abs_y":3392}' className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon bis_size='{"x":580,"y":3351,"w":16,"h":16,"abs_x":1060,"abs_y":3394}' className="text-indigo-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                    Séquence multicanal : Email → LinkedIn → WhatsApp
                                </div>
</div>
</div>
<div bis_size='{"x":92,"y":3080,"w":439,"h":263,"abs_x":572,"abs_y":3123}' className="md:order-1 bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
<div bis_size='{"x":117,"y":3105,"w":389,"h":213,"abs_x":597,"abs_y":3148}' className="flex flex-col items-center gap-4 relative z-10">
<div bis_size='{"x":117,"y":3105,"w":389,"h":42,"abs_x":597,"abs_y":3148}' className="w-full p-3 rounded bg-zinc-900 border border-white/10 text-xs text-zinc-400 text-center">🔔 Signal reçu : "Lydia recrute Head of Sales"</div>
<div bis_size='{"x":311,"y":3163,"w":1,"h":16,"abs_x":791,"abs_y":3206}' className="h-4 w-px bg-zinc-700"></div>
<div bis_size='{"x":117,"y":3195,"w":389,"h":42,"abs_x":597,"abs_y":3238}' className="w-full p-3 rounded bg-indigo-900/20 border border-indigo-500/30 text-xs text-indigo-300 flex items-center justify-center gap-2">
<iconify-icon bis_size='{"x":144,"y":3209,"w":14,"h":14,"abs_x":624,"abs_y":3252}' icon="solar:stars-linear" width="14"></iconify-icon>
                                    IA : "J'ai vu que vous structurez votre équipe Growth..."
                                </div>
<div bis_size='{"x":311,"y":3253,"w":1,"h":16,"abs_x":791,"abs_y":3296}' className="h-4 w-px bg-zinc-700"></div>
<div bis_size='{"x":117,"y":3285,"w":389,"h":33,"abs_x":597,"abs_y":3328}' className="flex w-full gap-2">
<div bis_size='{"x":117,"y":3285,"w":190,"h":33,"abs_x":597,"abs_y":3328}' className="flex-1 p-2 rounded bg-zinc-900 border border-white/10 text-[10px] text-center text-zinc-500">📧 Email J+0</div>
<div bis_size='{"x":316,"y":3285,"w":190,"h":33,"abs_x":796,"abs_y":3328}' className="flex-1 p-2 rounded bg-zinc-900 border border-white/10 text-[10px] text-center text-zinc-500">💬 LinkedIn J+2</div>
</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":43,"y":3449,"w":976,"h":206,"abs_x":523,"abs_y":3492}' className="relative pl-12 border-l border-zinc-800 last:border-0 group scroll-mt-32" id="engine">
<div bis_size='{"x":23,"y":3449,"w":40,"h":40,"abs_x":503,"abs_y":3492}' className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-green-500 transition-colors">
<iconify-icon bis_size='{"x":33,"y":3459,"w":20,"h":20,"abs_x":513,"abs_y":3502}' icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<div bis_size='{"x":91,"y":3449,"w":928,"h":206,"abs_x":571,"abs_y":3492}' className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div bis_size='{"x":91,"y":3449,"w":440,"h":206,"abs_x":571,"abs_y":3492}' className="">
<span bis_size='{"x":91,"y":3449,"w":440,"h":16,"abs_x":571,"abs_y":3492}' className="text-green-400 font-mono text-xs uppercase tracking-wider mb-2 block">Étape 03 · Conversion</span>
<h3 bis_size='{"x":91,"y":3473,"w":440,"h":64,"abs_x":571,"abs_y":3516}' className="text-2xl text-white font-semibold mb-4">Vous ne recevez que les réponses positives</h3>
<p bis_size='{"x":91,"y":3553,"w":440,"h":78,"abs_x":571,"abs_y":3596}' className="text-zinc-400 leading-relaxed mb-6">Les réponses arrivent dans votre CRM. Les rendez-vous se bookent automatiquement. Votre équipe se concentre sur ce qui compte : closer.</p>
</div>
<div bis_size='{"x":579,"y":3497,"w":440,"h":110,"abs_x":1059,"abs_y":3540}' className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 relative overflow-hidden flex items-center justify-center">
<div bis_size='{"x":658,"y":3522,"w":281,"h":60,"abs_x":1138,"abs_y":3565}' className="flex gap-12 items-center">
<div bis_size='{"x":658,"y":3522,"w":70,"h":60,"abs_x":1138,"abs_y":3565}' className="text-center">
<div bis_size='{"x":658,"y":3522,"w":70,"h":40,"abs_x":1138,"abs_y":3565}' className="text-4xl font-bold text-white mb-1">24x</div>
<div bis_size='{"x":658,"y":3566,"w":70,"h":16,"abs_x":1138,"abs_y":3609}' className="text-xs text-zinc-500 uppercase tracking-wide">ROI moyen</div>
</div>
<div bis_size='{"x":776,"y":3528,"w":1,"h":48,"abs_x":1256,"abs_y":3571}' className="w-px h-12 bg-zinc-800"></div>
<div bis_size='{"x":825,"y":3522,"w":114,"h":60,"abs_x":1305,"abs_y":3565}' className="text-center">
<div bis_size='{"x":825,"y":3522,"w":114,"h":40,"abs_x":1305,"abs_y":3565}' className="text-4xl font-bold text-white mb-1">3.2%</div>
<div bis_size='{"x":825,"y":3566,"w":114,"h":16,"abs_x":1305,"abs_y":3609}' className="text-xs text-zinc-500 uppercase tracking-wide">Taux de réponse</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3752,"w":1063,"h":839,"abs_x":480,"abs_y":3795}' className="py-24 bg-black relative" id="solutions">
<div bis_size='{"x":0,"y":3848,"w":1063,"h":647,"abs_x":480,"abs_y":3891}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":3848,"w":1015,"h":647,"abs_x":504,"abs_y":3891}' className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div bis_size='{"x":24,"y":3848,"w":668,"h":343,"abs_x":504,"abs_y":3891}' className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div bis_size='{"x":25,"y":3849,"w":666,"h":341,"abs_x":505,"abs_y":3892}' className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none"></div>
<div bis_size='{"x":57,"y":3881,"w":602,"h":205,"abs_x":537,"abs_y":3924}' className="relative z-10">
<div bis_size='{"x":57,"y":3881,"w":40,"h":40,"abs_x":537,"abs_y":3924}' className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon bis_size='{"x":67,"y":3891,"w":20,"h":20,"abs_x":547,"abs_y":3934}' icon="solar:database-linear" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":57,"y":3945,"w":602,"h":32,"abs_x":537,"abs_y":3988}' className="text-2xl text-white font-semibold tracking-tight mb-3">50+ Sources. Zéro Angle Mort.</h3>
<p bis_size='{"x":57,"y":3989,"w":384,"h":97,"abs_x":537,"abs_y":4032}' className="text-zinc-400 text-[15px] leading-relaxed max-w-sm">LinkedIn, job boards, sites de review, données légales, registres de brevets, RSS tech… Nous scannons tout ce que vos commerciaux n'ont pas le temps de surveiller.</p>
</div>
<div bis_size='{"x":57,"y":4133,"w":602,"h":26,"abs_x":537,"abs_y":4176}' className="mt-8 flex flex-wrap gap-2">
<span bis_size='{"x":57,"y":4133,"w":57,"h":26,"abs_x":537,"abs_y":4176}' className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">Indeed</span>
<span bis_size='{"x":122,"y":4133,"w":86,"h":26,"abs_x":602,"abs_y":4176}' className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">Crunchbase</span>
<span bis_size='{"x":216,"y":4133,"w":74,"h":26,"abs_x":696,"abs_y":4176}' className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">Sales Nav</span>
<span bis_size='{"x":299,"y":4133,"w":68,"h":26,"abs_x":779,"abs_y":4176}' className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">BuiltWith</span>
<span bis_size='{"x":375,"y":4133,"w":79,"h":26,"abs_x":855,"abs_y":4176}' className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-white">+45 autres</span>
</div>
</div>

<div bis_size='{"x":716,"y":3848,"w":322,"h":343,"abs_x":1196,"abs_y":3891}' className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div bis_size='{"x":749,"y":3881,"w":40,"h":40,"abs_x":1229,"abs_y":3924}' className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon bis_size='{"x":759,"y":3891,"w":20,"h":20,"abs_x":1239,"abs_y":3934}' icon="solar:filter-linear" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":749,"y":3945,"w":256,"h":32,"abs_x":1229,"abs_y":3988}' className="text-2xl text-white font-semibold tracking-tight mb-3">Scoring Prédictif</h3>
<p bis_size='{"x":749,"y":3989,"w":256,"h":121,"abs_x":1229,"abs_y":4032}' className="text-zinc-400 text-[15px] leading-relaxed mb-4">Chaque prospect reçoit un score de 0 à 100. Ne perdez plus de temps sur des comptes froids — concentrez-vous sur ceux qui sont prêts.</p>
<div bis_size='{"x":749,"y":4127,"w":256,"h":8,"abs_x":1229,"abs_y":4170}' className="mt-auto w-full bg-zinc-900 rounded-full h-2 overflow-hidden">
<div bis_size='{"x":749,"y":4127,"w":217,"h":8,"abs_x":1229,"abs_y":4170}' className="bg-gradient-to-r from-blue-500 to-green-400 h-full w-[85%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
<div bis_size='{"x":749,"y":4143,"w":256,"h":16,"abs_x":1229,"abs_y":4186}' className="text-right text-xs text-white mt-2 font-mono">Score: 85/100 — Prêt à acheter</div>
</div>

<div bis_size='{"x":24,"y":4216,"w":322,"h":280,"abs_x":504,"abs_y":4259}' className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div bis_size='{"x":57,"y":4249,"w":40,"h":40,"abs_x":537,"abs_y":4292}' className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon bis_size='{"x":67,"y":4259,"w":20,"h":20,"abs_x":547,"abs_y":4302}' icon="solar:plug-circle-linear" width="20"></iconify-icon>
</div>
<div bis_size='{"x":57,"y":4325,"w":256,"h":137,"abs_x":537,"abs_y":4368}'>
<h3 bis_size='{"x":57,"y":4325,"w":256,"h":32,"abs_x":537,"abs_y":4368}' className="text-2xl text-white font-semibold tracking-tight mb-2">Branché sur votre CRM</h3>
<p bis_size='{"x":57,"y":4365,"w":256,"h":97,"abs_x":537,"abs_y":4408}' className="text-zinc-400 text-[15px] leading-relaxed">Sync native avec HubSpot, Salesforce, Pipedrive. Les opportunités arrivent là où votre équipe travaille déjà.</p>
</div>
</div>

<div bis_size='{"x":370,"y":4216,"w":668,"h":280,"abs_x":850,"abs_y":4259}' className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col md:flex-row items-center justify-between overflow-hidden gap-6">
<div bis_size='{"x":403,"y":4253,"w":313,"h":205,"abs_x":883,"abs_y":4296}' className="relative z-10 max-w-sm">
<div bis_size='{"x":403,"y":4253,"w":40,"h":40,"abs_x":883,"abs_y":4296}' className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon bis_size='{"x":413,"y":4263,"w":20,"h":20,"abs_x":893,"abs_y":4306}' icon="solar:plain-linear" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":403,"y":4317,"w":313,"h":32,"abs_x":883,"abs_y":4360}' className="text-2xl text-white font-semibold tracking-tight mb-3">Vos règles. Notre exécution.</h3>
<p bis_size='{"x":403,"y":4361,"w":313,"h":97,"abs_x":883,"abs_y":4404}' className="text-zinc-400 text-[15px] leading-relaxed">Définissez vos critères ("Si levée &gt; 2M€ + recrute un CTO → séquence Tech") et laissez GTMLab faire tourner la machine 24/7.</p>
</div>
<div bis_size='{"x":740,"y":4339,"w":265,"h":34,"abs_x":1220,"abs_y":4382}' className="flex items-center gap-2 opacity-80">
<div bis_size='{"x":740,"y":4339,"w":60,"h":34,"abs_x":1220,"abs_y":4382}' className="px-3 py-2 bg-zinc-900 border border-white/10 rounded text-xs text-zinc-400">Signal</div>
<iconify-icon bis_size='{"x":809,"y":4348,"w":16,"h":16,"abs_x":1289,"abs_y":4391}' className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div bis_size='{"x":833,"y":4339,"w":69,"h":34,"abs_x":1313,"abs_y":4382}' className="px-3 py-2 bg-indigo-900/30 border border-indigo-500/30 rounded text-xs text-indigo-300">Enrichir</div>
<iconify-icon bis_size='{"x":910,"y":4348,"w":16,"h":16,"abs_x":1390,"abs_y":4391}' className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div bis_size='{"x":934,"y":4339,"w":71,"h":34,"abs_x":1414,"abs_y":4382}' className="px-3 py-2 bg-green-900/30 border border-green-500/30 rounded text-xs text-green-300">Envoyer</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4592,"w":1063,"h":883,"abs_x":480,"abs_y":4635}' className="py-24 bg-black border-t border-white/5 relative" id="use-cases">
<div bis_size='{"x":0,"y":4689,"w":1063,"h":690,"abs_x":480,"abs_y":4732}' className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div bis_size='{"x":24,"y":4689,"w":1015,"h":176,"abs_x":504,"abs_y":4732}' className="text-center mb-16">
<div bis_size='{"x":24,"y":4689,"w":1015,"h":16,"abs_x":504,"abs_y":4732}' className="text-orange-500 font-mono text-xs uppercase tracking-wider mb-2">Cas clients</div>
<h2 bis_size='{"x":24,"y":4713,"w":1015,"h":96,"abs_x":504,"abs_y":4756}' className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-4">
                        Ils ne prospectent plus.<br bis_size='{"x":787,"y":4707,"w":0,"h":59,"abs_x":1267,"abs_y":4750}'/>Ils récoltent.
                    </h2>
<p bis_size='{"x":243,"y":4825,"w":576,"h":40,"abs_x":723,"abs_y":4868}' className="text-zinc-400 text-sm max-w-xl mx-auto">
                        De la HR Tech au génie climatique, GTMLab s'adapte à votre marché et génère du pipeline mesurable dès les premières semaines.
                    </p>
</div>
<div bis_size='{"x":24,"y":4929,"w":1015,"h":450,"abs_x":504,"abs_y":4972}' className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div bis_size='{"x":24,"y":4929,"w":322,"h":450,"abs_x":504,"abs_y":4972}' className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-orange-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(234,88,12,0.1)]">
<div bis_size='{"x":57,"y":4962,"w":256,"h":48,"abs_x":537,"abs_y":5005}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":57,"y":4962,"w":48,"h":48,"abs_x":537,"abs_y":5005}' className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-bold text-xl font-sans tracking-tight shadow-inner">H</div>
<div bis_size='{"x":117,"y":4964,"w":116,"h":44,"abs_x":597,"abs_y":5007}'>
<h3 bis_size='{"x":117,"y":4964,"w":116,"h":28,"abs_x":597,"abs_y":5007}' className="text-white font-bold text-lg">Hreact</h3>
<div bis_size='{"x":117,"y":4992,"w":116,"h":16,"abs_x":597,"abs_y":5035}' className="text-[11px] text-zinc-500 uppercase tracking-wide">HR Tech · SaaS B2B</div>
</div>
</div>
<div bis_size='{"x":57,"y":5034,"w":256,"h":64,"abs_x":537,"abs_y":5077}' className="mb-6 space-y-2">
<div bis_size='{"x":57,"y":5034,"w":256,"h":36,"abs_x":537,"abs_y":5077}' className="text-3xl font-semibold text-white tracking-tight">250 leads/mois</div>
<div bis_size='{"x":57,"y":5078,"w":256,"h":20,"abs_x":537,"abs_y":5121}' className="text-sm text-zinc-500">Pipeline 100% automatisé</div>
</div>
<p bis_size='{"x":57,"y":5122,"w":256,"h":146,"abs_x":537,"abs_y":5165}' className="text-zinc-400 text-[15px] leading-relaxed mb-8 flex-grow">
                            Le signal <strong bis_size='{"x":124,"y":5124,"w":172,"h":19,"abs_x":604,"abs_y":5167}' className="text-white">"Recrutement RH actif"</strong> détecte les entreprises qui structurent leurs équipes. Hreact arrive avec la bonne offre au bon moment — avant même que le besoin soit formalisé.
                        </p>
<button bis_size='{"x":57,"y":5300,"w":256,"h":46,"abs_x":537,"abs_y":5343}' className="hover:bg-white/20 hover:text-white hover:border-white/20 transition-all flex gap-2 group-hover:bg-white/10 text-sm font-medium text-white bg-white/5 w-full border-white/10 border rounded-xl pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center">
                            Lire le cas complet
                            <iconify-icon bis_size='{"x":243,"y":5315,"w":16,"h":16,"abs_x":723,"abs_y":5358}' className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div bis_size='{"x":370,"y":4929,"w":322,"h":450,"abs_x":850,"abs_y":4972}' className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
<div bis_size='{"x":403,"y":4962,"w":256,"h":48,"abs_x":883,"abs_y":5005}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":403,"y":4962,"w":48,"h":48,"abs_x":883,"abs_y":5005}' className="w-12 h-12 rounded-xl bg-purple-900/20 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xl shadow-inner">
<iconify-icon bis_size='{"x":415,"y":4974,"w":24,"h":24,"abs_x":895,"abs_y":5017}' icon="solar:sofa-2-bold" width="24"></iconify-icon>
</div>
<div bis_size='{"x":463,"y":4964,"w":165,"h":44,"abs_x":943,"abs_y":5007}'>
<h3 bis_size='{"x":463,"y":4964,"w":165,"h":28,"abs_x":943,"abs_y":5007}' className="text-white font-bold text-lg">Metamorphoze</h3>
<div bis_size='{"x":463,"y":4992,"w":165,"h":16,"abs_x":943,"abs_y":5035}' className="text-[11px] text-zinc-500 uppercase tracking-wide">Aménagement de bureaux</div>
</div>
</div>
<div bis_size='{"x":403,"y":5034,"w":256,"h":64,"abs_x":883,"abs_y":5077}' className="mb-6 space-y-2">
<div bis_size='{"x":403,"y":5034,"w":256,"h":36,"abs_x":883,"abs_y":5077}' className="text-3xl font-semibold text-white tracking-tight">+35% conversion</div>
<div bis_size='{"x":403,"y":5078,"w":256,"h":20,"abs_x":883,"abs_y":5121}' className="text-sm text-zinc-500">vs. prospection classique</div>
</div>
<p bis_size='{"x":403,"y":5122,"w":256,"h":146,"abs_x":883,"abs_y":5165}' className="text-zinc-400 text-[15px] leading-relaxed mb-8 flex-grow">
                            Grâce aux signaux <strong bis_size='{"x":403,"y":5148,"w":218,"h":19,"abs_x":883,"abs_y":5191}' className="text-white">"Déménagement de bureaux"</strong> et <strong bis_size='{"x":403,"y":5173,"w":164,"h":19,"abs_x":883,"abs_y":5216}' className="text-white">"Croissance effectifs"</strong>, Metamorphoze contacte les décideurs immobiliers avant même l'appel d'offres.
                        </p>
<button bis_size='{"x":403,"y":5300,"w":256,"h":46,"abs_x":883,"abs_y":5343}' className="hover:bg-white/20 hover:text-white hover:border-white/20 transition-all flex gap-2 group-hover:bg-white/10 text-sm font-medium text-white bg-white/5 w-full border-white/10 border rounded-xl pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center cursor-pointer">
                            Lire le cas complet
                            <iconify-icon bis_size='{"x":590,"y":5315,"w":16,"h":16,"abs_x":1070,"abs_y":5358}' className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div bis_size='{"x":716,"y":4929,"w":322,"h":450,"abs_x":1196,"abs_y":4972}' className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
<div bis_size='{"x":749,"y":4962,"w":256,"h":48,"abs_x":1229,"abs_y":5005}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":749,"y":4962,"w":48,"h":48,"abs_x":1229,"abs_y":5005}' className="w-12 h-12 rounded-xl bg-cyan-900/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xl shadow-inner">
<iconify-icon bis_size='{"x":761,"y":4974,"w":24,"h":24,"abs_x":1241,"abs_y":5017}' className="" icon="solar:snowflake-bold" width="24"></iconify-icon>
</div>
<div bis_size='{"x":809,"y":4964,"w":141,"h":44,"abs_x":1289,"abs_y":5007}'>
<h3 bis_size='{"x":809,"y":4964,"w":141,"h":28,"abs_x":1289,"abs_y":5007}' className="text-white font-bold text-lg">Decoclim</h3>
<div bis_size='{"x":809,"y":4992,"w":141,"h":16,"abs_x":1289,"abs_y":5035}' className="text-[11px] text-zinc-500 uppercase tracking-wide">Génie Climatique · CVC</div>
</div>
</div>
<div bis_size='{"x":749,"y":5034,"w":256,"h":64,"abs_x":1229,"abs_y":5077}' className="mb-6 space-y-2">
<div bis_size='{"x":749,"y":5034,"w":256,"h":36,"abs_x":1229,"abs_y":5077}' className="text-3xl font-semibold text-white tracking-tight">100% automatisé</div>
<div bis_size='{"x":749,"y":5078,"w":256,"h":20,"abs_x":1229,"abs_y":5121}' className="text-sm text-zinc-500">Détection → Contact en 24h</div>
</div>
<p bis_size='{"x":749,"y":5122,"w":256,"h":146,"abs_x":1229,"abs_y":5165}' className="text-[15px] leading-relaxed flex-grow text-zinc-400 mb-8">
                            Le signal <strong bis_size='{"x":817,"y":5124,"w":172,"h":19,"abs_x":1297,"abs_y":5167}' className="text-white">"Création d'entreprise"</strong> filtré par code NAF (4322A/B) détecte les nouvelles structures ayant besoin de solutions CVC. Decoclim les contacte avant la concurrence locale.
                        </p>
<button bis_size='{"x":749,"y":5300,"w":256,"h":46,"abs_x":1229,"abs_y":5343}' className="hover:bg-white/20 hover:text-white hover:border-white/20 transition-all flex gap-2 group-hover:bg-white/10 text-sm font-medium text-white bg-white/5 w-full border-white/10 border rounded-xl pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center cursor-pointer">
                            Lire le cas complet
                            <iconify-icon bis_size='{"x":936,"y":5315,"w":16,"h":16,"abs_x":1416,"abs_y":5358}' className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":5475,"w":1063,"h":672,"abs_x":480,"abs_y":5518}' className="py-24 bg-black border-t border-white/5 relative">
<div bis_size='{"x":0,"y":5572,"w":1063,"h":479,"abs_x":480,"abs_y":5615}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":5572,"w":1015,"h":72,"abs_x":504,"abs_y":5615}' className="text-center mb-16">
<h2 bis_size='{"x":24,"y":5572,"w":1015,"h":36,"abs_x":504,"abs_y":5615}' className="text-3xl font-semibold text-white tracking-tight mb-4">Ce qu'en disent les équipes Revenue</h2>
<p bis_size='{"x":24,"y":5624,"w":1015,"h":20,"abs_x":504,"abs_y":5667}' className="text-zinc-400 text-sm">Des résultats concrets, mesurés par ceux qui utilisent GTMLab au quotidien.</p>
</div>
<div bis_size='{"x":24,"y":5708,"w":1015,"h":343,"abs_x":504,"abs_y":5751}' className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div bis_size='{"x":24,"y":5708,"w":322,"h":343,"abs_x":504,"abs_y":5751}' className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 hover:border-white/20 transition-colors">
<div bis_size='{"x":57,"y":5741,"w":256,"h":14,"abs_x":537,"abs_y":5784}' className="flex text-orange-500 gap-0.5">
<iconify-icon bis_size='{"x":57,"y":5741,"w":14,"h":14,"abs_x":537,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon bis_size='{"x":73,"y":5741,"w":14,"h":14,"abs_x":553,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon bis_size='{"x":89,"y":5741,"w":14,"h":14,"abs_x":569,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon bis_size='{"x":105,"y":5741,"w":14,"h":14,"abs_x":585,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon bis_size='{"x":121,"y":5741,"w":14,"h":14,"abs_x":601,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p bis_size='{"x":57,"y":5779,"w":256,"h":121,"abs_x":537,"abs_y":5822}' className="text-zinc-300 text-[15px] leading-relaxed">
                            "On a divisé notre CAC par 2.5 en 3 mois. Au lieu de spammer 10 000 contacts, on en contacte 500 qui sont réellement en phase d'achat. Le taux de réponse a triplé."
                        </p>
<div bis_size='{"x":57,"y":5949,"w":256,"h":69,"abs_x":537,"abs_y":5992}' className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
<div bis_size='{"x":57,"y":5972,"w":39,"h":40,"abs_x":537,"abs_y":6015}' className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-zinc-900 flex items-center justify-center text-white text-xs font-bold ring-1 ring-white/10">PD</div>
<div bis_size='{"x":112,"y":5966,"w":200,"h":52,"abs_x":592,"abs_y":6009}'>
<div bis_size='{"x":112,"y":5966,"w":200,"h":20,"abs_x":592,"abs_y":6009}' className="text-white text-sm font-medium">Pierre Dubois</div>
<div bis_size='{"x":112,"y":5986,"w":200,"h":32,"abs_x":592,"abs_y":6029}' className="text-zinc-500 text-xs">VP Sales · Scale-up SaaS (85 pers.)</div>
</div>
</div>
</div>

<div bis_size='{"x":370,"y":5708,"w":322,"h":343,"abs_x":850,"abs_y":5751}' className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 hover:border-white/20 transition-colors">
<div bis_size='{"x":403,"y":5741,"w":256,"h":14,"abs_x":883,"abs_y":5784}' className="flex text-orange-500 gap-0.5">
<iconify-icon bis_size='{"x":403,"y":5741,"w":14,"h":14,"abs_x":883,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon bis_size='{"x":419,"y":5741,"w":14,"h":14,"abs_x":899,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon bis_size='{"x":435,"y":5741,"w":14,"h":14,"abs_x":915,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon bis_size='{"x":451,"y":5741,"w":14,"h":14,"abs_x":931,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon bis_size='{"x":467,"y":5741,"w":14,"h":14,"abs_x":947,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p bis_size='{"x":403,"y":5779,"w":256,"h":146,"abs_x":883,"abs_y":5822}' className="text-zinc-300 text-[15px] leading-relaxed">
                            "Le scoring prédictif est d'une précision redoutable. On sait exactement qui contacter en priorité. Mes SDRs ne font plus de recherche — ils ne font que closer des rendez-vous."
                        </p>
<div bis_size='{"x":403,"y":5961,"w":256,"h":57,"abs_x":883,"abs_y":6004}' className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
<div bis_size='{"x":403,"y":5978,"w":40,"h":40,"abs_x":883,"abs_y":6021}' className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-900 to-zinc-900 flex items-center justify-center text-white text-xs font-bold ring-1 ring-white/10">SL</div>
<div bis_size='{"x":459,"y":5980,"w":184,"h":36,"abs_x":939,"abs_y":6023}'>
<div bis_size='{"x":459,"y":5980,"w":184,"h":20,"abs_x":939,"abs_y":6023}' className="text-white text-sm font-medium">Sarah Lecomte</div>
<div bis_size='{"x":459,"y":6000,"w":184,"h":16,"abs_x":939,"abs_y":6043}' className="text-zinc-500 text-xs">Fondatrice · Agence Growth B2B</div>
</div>
</div>
</div>

<div bis_size='{"x":716,"y":5708,"w":322,"h":343,"abs_x":1196,"abs_y":5751}' className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 hover:border-white/20 transition-colors">
<div bis_size='{"x":749,"y":5741,"w":256,"h":14,"abs_x":1229,"abs_y":5784}' className="flex text-orange-500 gap-0.5">
<iconify-icon bis_size='{"x":749,"y":5741,"w":14,"h":14,"abs_x":1229,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon bis_size='{"x":765,"y":5741,"w":14,"h":14,"abs_x":1245,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon bis_size='{"x":781,"y":5741,"w":14,"h":14,"abs_x":1261,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon bis_size='{"x":797,"y":5741,"w":14,"h":14,"abs_x":1277,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon bis_size='{"x":813,"y":5741,"w":14,"h":14,"abs_x":1293,"abs_y":5784}' icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p bis_size='{"x":749,"y":5779,"w":256,"h":146,"abs_x":1229,"abs_y":5822}' className="text-zinc-300 text-[15px] leading-relaxed">
                            "L'IA rédige des accroches tellement contextuelles que personne ne devine que c'est automatisé. On reçoit des réponses du type 'votre timing est parfait'. C'est exactement ça le point."
                        </p>
<div bis_size='{"x":749,"y":5949,"w":256,"h":69,"abs_x":1229,"abs_y":5992}' className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
<div bis_size='{"x":749,"y":5972,"w":38,"h":40,"abs_x":1229,"abs_y":6015}' className="w-10 h-10 rounded-full bg-gradient-to-br from-green-900 to-zinc-900 flex items-center justify-center text-white text-xs font-bold ring-1 ring-white/10">TM</div>
<div bis_size='{"x":804,"y":5966,"w":201,"h":52,"abs_x":1284,"abs_y":6009}'>
<div bis_size='{"x":804,"y":5966,"w":201,"h":20,"abs_x":1284,"abs_y":6009}' className="text-white text-sm font-medium">Thomas Martin</div>
<div bis_size='{"x":804,"y":5986,"w":201,"h":32,"abs_x":1284,"abs_y":6029}' className="text-zinc-500 text-xs">Head of Growth · FinTech (200 pers.)</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":6147,"w":1063,"h":994,"abs_x":480,"abs_y":6190}' className="py-24 px-6 relative overflow-hidden" id="demo">
<div bis_size='{"x":0,"y":6147,"w":1063,"h":994,"abs_x":480,"abs_y":6190}' className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div bis_size='{"x":0,"y":6641,"w":500,"h":500,"abs_x":480,"abs_y":6684}' className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div bis_size='{"x":24,"y":6243,"w":1015,"h":802,"abs_x":504,"abs_y":6286}' className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div bis_size='{"x":25,"y":6244,"w":1013,"h":800,"abs_x":505,"abs_y":6287}' className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div bis_size='{"x":89,"y":6308,"w":418,"h":672,"abs_x":569,"abs_y":6351}' className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<div bis_size='{"x":89,"y":6417,"w":246,"h":26,"abs_x":569,"abs_y":6460}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-[11px] uppercase font-semibold tracking-wide mb-6 w-fit">
<span bis_size='{"x":102,"y":6427,"w":6,"h":6,"abs_x":582,"abs_y":6470}' className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-signal"></span>
                            Créneaux limités cette semaine
                        </div>
<h2 bis_size='{"x":89,"y":6467,"w":418,"h":144,"abs_x":569,"abs_y":6510}' className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Voyez qui vous<br bis_size='{"x":426,"y":6461,"w":0,"h":59,"abs_x":906,"abs_y":6504}'/>cherche. Maintenant.
                        </h2>
<p bis_size='{"x":89,"y":6635,"w":418,"h":117,"abs_x":569,"abs_y":6678}' className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            En 15 minutes, on vous montre combien d'entreprises de votre marché émettent des signaux d'achat en ce moment — et comment les convertir automatiquement.
                        </p>
<div bis_size='{"x":89,"y":6784,"w":418,"h":104,"abs_x":569,"abs_y":6827}' className="space-y-4 mb-8">
<div bis_size='{"x":89,"y":6784,"w":418,"h":24,"abs_x":569,"abs_y":6827}' className="flex items-center gap-3">
<div bis_size='{"x":89,"y":6784,"w":24,"h":24,"abs_x":569,"abs_y":6827}' className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon bis_size='{"x":94,"y":6789,"w":14,"h":14,"abs_x":574,"abs_y":6832}' icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span bis_size='{"x":125,"y":6786,"w":312,"h":20,"abs_x":605,"abs_y":6829}' className="text-sm text-zinc-300">Audit gratuit de votre marché et de vos signaux</span>
</div>
<div bis_size='{"x":89,"y":6824,"w":418,"h":24,"abs_x":569,"abs_y":6867}' className="flex items-center gap-3">
<div bis_size='{"x":89,"y":6824,"w":24,"h":24,"abs_x":569,"abs_y":6867}' className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon bis_size='{"x":94,"y":6829,"w":14,"h":14,"abs_x":574,"abs_y":6872}' icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span bis_size='{"x":125,"y":6826,"w":239,"h":20,"abs_x":605,"abs_y":6869}' className="text-sm text-zinc-300">50 leads qualifiés offerts pour tester</span>
</div>
<div bis_size='{"x":89,"y":6864,"w":418,"h":24,"abs_x":569,"abs_y":6907}' className="flex items-center gap-3">
<div bis_size='{"x":89,"y":6864,"w":24,"h":24,"abs_x":569,"abs_y":6907}' className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon bis_size='{"x":94,"y":6869,"w":14,"h":14,"abs_x":574,"abs_y":6912}' icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span bis_size='{"x":125,"y":6866,"w":291,"h":20,"abs_x":605,"abs_y":6909}' className="text-sm text-zinc-300">Aucun engagement · Aucune carte bancaire</span>
</div>
</div>
</div>

<div bis_size='{"x":555,"y":6308,"w":418,"h":672,"abs_x":1035,"abs_y":6351}' className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
<div bis_size='{"x":556,"y":6309,"w":416,"h":670,"abs_x":1036,"abs_y":6352}' className="cal-inline-container" id="my-cal-inline-15min" style={{width: '100%', height: '100%', overflow: 'scroll'}}>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style></div>

</div>
</div>
</div>
</section>
</main>

<footer bis_size='{"x":0,"y":7141,"w":1063,"h":386,"abs_x":480,"abs_y":7184}' className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div bis_size='{"x":0,"y":7222,"w":1063,"h":265,"abs_x":480,"abs_y":7265}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":7222,"w":1015,"h":152,"abs_x":504,"abs_y":7265}' className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div bis_size='{"x":24,"y":7222,"w":317,"h":152,"abs_x":504,"abs_y":7265}' className="col-span-2 pr-8">
<a bis_size='{"x":24,"y":7222,"w":285,"h":36,"abs_x":504,"abs_y":7265}' className="flex items-center gap-3 text-white font-bold tracking-tight text-lg mb-6 group" href="/">
<div bis_size='{"x":24,"y":7222,"w":36,"h":36,"abs_x":504,"abs_y":7265}' className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-orange-500/5 relative overflow-hidden group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-all duration-300">
<svg bis_size='{"x":32,"y":7230,"w":20,"h":20,"abs_x":512,"abs_y":7273}' className="text-white group-hover:text-orange-500 transition-colors duration-300" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":34,"y":7233,"w":15,"h":8,"abs_x":514,"abs_y":7276}' d="M12.0002 2.59766L2.46826 7.69766L12.0002 12.7977L21.5322 7.69766L12.0002 2.59766Z" fill="currentColor" fillOpacity="0.8"></path>
<path bis_size='{"x":42,"y":7237,"w":7,"h":12,"abs_x":522,"abs_y":7280}' d="M12.0002 12.7977V22.9977L21.5322 17.8977V7.69766L12.0002 12.7977Z" fill="currentColor" fillOpacity="0.4"></path>
<path bis_size='{"x":34,"y":7237,"w":7,"h":12,"abs_x":514,"abs_y":7280}' d="M2.46826 7.69766V17.8977L12.0002 22.9977V12.7977L2.46826 7.69766Z" fill="currentColor" fillOpacity="0.6"></path>
</svg>
</div>
                        GTMLab
                    </a>
<p bis_size='{"x":24,"y":7282,"w":285,"h":68,"abs_x":504,"abs_y":7325}' className="text-zinc-500 mb-6 leading-relaxed max-w-xs">
                        La plateforme qui transforme les signaux d'achat en pipeline prédictible. Intent data + IA + automation multicanal.
                    </p>
</div>
<div bis_size='{"x":373,"y":7222,"w":142,"h":152,"abs_x":853,"abs_y":7265}' className="flex flex-col gap-4">
<h4 bis_size='{"x":373,"y":7222,"w":142,"h":20,"abs_x":853,"abs_y":7265}' className="text-white font-semibold">Produit</h4>
<a bis_size='{"x":373,"y":7258,"w":142,"h":20,"abs_x":853,"abs_y":7301}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Détection de signaux</a>
<a bis_size='{"x":373,"y":7294,"w":142,"h":20,"abs_x":853,"abs_y":7337}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Enrichissement IA</a>
<a bis_size='{"x":373,"y":7330,"w":142,"h":40,"abs_x":853,"abs_y":7373}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Séquences multicanal</a>
</div>
<div bis_size='{"x":547,"y":7222,"w":142,"h":152,"abs_x":1027,"abs_y":7265}' className="flex flex-col gap-4">
<h4 bis_size='{"x":547,"y":7222,"w":142,"h":20,"abs_x":1027,"abs_y":7265}' className="text-white font-semibold">Ressources</h4>
<a bis_size='{"x":547,"y":7258,"w":142,"h":20,"abs_x":1027,"abs_y":7301}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Blog</a>
<a bis_size='{"x":547,"y":7294,"w":142,"h":20,"abs_x":1027,"abs_y":7337}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Playbooks GTM</a>
<a bis_size='{"x":547,"y":7330,"w":142,"h":20,"abs_x":1027,"abs_y":7373}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Calculateur ROI</a>
</div>
<div bis_size='{"x":722,"y":7222,"w":142,"h":152,"abs_x":1202,"abs_y":7265}' className="flex flex-col gap-4">
<h4 bis_size='{"x":722,"y":7222,"w":142,"h":20,"abs_x":1202,"abs_y":7265}' className="text-white font-semibold">Société</h4>
<a bis_size='{"x":722,"y":7258,"w":142,"h":20,"abs_x":1202,"abs_y":7301}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">À propos</a>
<a bis_size='{"x":722,"y":7294,"w":142,"h":20,"abs_x":1202,"abs_y":7337}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Contact</a>
<a bis_size='{"x":722,"y":7330,"w":142,"h":20,"abs_x":1202,"abs_y":7373}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Confidentialité</a>
</div>
</div>
<div bis_size='{"x":24,"y":7439,"w":1015,"h":49,"abs_x":504,"abs_y":7482}' className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div bis_size='{"x":24,"y":7472,"w":241,"h":16,"abs_x":504,"abs_y":7515}' className="text-zinc-600 text-xs">
                    © 2024 GTMLab Inc. Tous droits réservés.
                </div>
</div>
</div>
</footer>



    </>
  );
}
