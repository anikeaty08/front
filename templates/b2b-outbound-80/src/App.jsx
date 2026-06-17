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

        if (scene && cube) {
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
      

<header bis_size='{"x":0,"y":24,"w":1490,"h":54,"abs_x":480,"abs_y":67}' className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Menu principal" bis_size='{"x":297,"y":24,"w":896,"h":54,"abs_x":777,"abs_y":67}' className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Retour à l'accueil GTMlab" bis_size='{"x":310,"y":33,"w":114,"h":36,"abs_x":790,"abs_y":76}' className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div bis_size='{"x":310,"y":33,"w":36,"h":36,"abs_x":790,"abs_y":76}' className="flex shadow-lg shadow-orange-500/10 overflow-hidden group-hover:bg-orange-500/20 group-hover:border-orange-500/30 transition-all duration-300 bg-orange-500/10 w-9 h-9 border-orange-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" bis_size='{"x":318,"y":41,"w":20,"h":20,"abs_x":798,"abs_y":84}' className="text-orange-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span bis_size='{"x":358,"y":41,"w":50,"h":20,"abs_x":838,"abs_y":84}' className="text-white font-semibold tracking-tight text-sm">GTMlab</span>
</a>
<div bis_size='{"x":424,"y":41,"w":532,"h":20,"abs_x":904,"abs_y":84}' className="hidden md:flex gap-6 items-center flex-1 justify-center">
<a bis_size='{"x":514,"y":41,"w":41,"h":20,"abs_x":994,"abs_y":84}' className="text-sm font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap" href="#problem">Vision</a>
<a bis_size='{"x":579,"y":41,"w":102,"h":20,"abs_x":1059,"abs_y":84}' className="text-sm font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap" href="#agents">Suite Agents IA</a>
<a bis_size='{"x":706,"y":41,"w":62,"h":20,"abs_x":1186,"abs_y":84}' className="text-sm font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap" href="#solutions">Solutions</a>
<a bis_size='{"x":792,"y":41,"w":75,"h":20,"abs_x":1272,"abs_y":84}' className="text-sm font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap" href="#use-cases">Cas Clients</a>
</div>
<div bis_size='{"x":965,"y":31,"w":220,"h":40,"abs_x":1445,"abs_y":74}' className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a bis_size='{"x":982,"y":31,"w":203,"h":40,"abs_x":1462,"abs_y":74}' className="text-sm hover:bg-zinc-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#demo">
                    Prendre rendez-vous
                    <iconify-icon aria-hidden="true" bis_size='{"x":1150,"y":43,"w":16,"h":16,"abs_x":1630,"abs_y":86}' height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main bis_size='{"x":0,"y":0,"w":1490,"h":8068,"abs_x":480,"abs_y":43}' className="">

<section bis_size='{"x":0,"y":0,"w":1490,"h":1465,"abs_x":480,"abs_y":43}' className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">
<div bis_size='{"x":245,"y":0,"w":1000,"h":500,"abs_x":725,"abs_y":43}' className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div bis_size='{"x":0,"y":0,"w":1490,"h":1465,"abs_x":480,"abs_y":43}' className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div bis_size='{"x":105,"y":176,"w":1280,"h":1209,"abs_x":585,"abs_y":219}' className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div bis_size='{"x":575,"y":178,"w":338,"h":26,"abs_x":1055,"abs_y":221}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-orange-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(234,88,12,0.1)] backdrop-blur-sm">
<span bis_size='{"x":588,"y":188,"w":6,"h":6,"abs_x":1068,"abs_y":231}' className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-signal"></span>
                    50+ Agents IA B2B · Pilotés par des experts
                </div>
<h1 bis_size='{"x":129,"y":236,"w":1232,"h":288,"abs_x":609,"abs_y":279}' className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8">
    Propulsez votre Go-To-Market avec<br bis_size='{"x":1017,"y":322,"w":0,"h":116,"abs_x":1497,"abs_y":365}'/> <span bis_size='{"x":182,"y":418,"w":1124,"h":116,"abs_x":662,"abs_y":461}' className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">l'Outbound Piloté par l'IA.</span>
</h1>
<p bis_size='{"x":409,"y":556,"w":672,"h":87,"abs_x":889,"abs_y":599}' className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                    GTMlab remplace l'outbound générique par une suite d'agents IA pilotés par des experts, conçus pour s'adapter à la complexité des cycles de vente B2B avancés et générer du revenu prévisible, à grande échelle.
                </p>
<div bis_size='{"x":129,"y":683,"w":1232,"h":72,"abs_x":609,"abs_y":726}' className="flex flex-col mb-20 items-center justify-center">
<div bis_size='{"x":489,"y":683,"w":512,"h":48,"abs_x":969,"abs_y":726}' className="flex w-full max-w-lg mb-6 pr-4 pl-4 items-center justify-center">
<a bis_size='{"x":596,"y":683,"w":297,"h":48,"abs_x":1076,"abs_y":726}' className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-base font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] ring-1 ring-black/5" href="#agents">
<span bis_size='{"x":596,"y":683,"w":297,"h":48,"abs_x":1076,"abs_y":726}' className="cursor-pointer mix-blend-overlay border-black/5 border rounded-full absolute top-0 right-0 bottom-0 left-0" role="button">qsdqsd</span>
                            Découvrir la suite d'Agents
                            <iconify-icon bis_size='{"x":843,"y":698,"w":18,"h":18,"abs_x":1323,"abs_y":741}' className="transition-transform duration-300 group-hover:translate-y-1" height="18" icon="solar:arrow-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div aria-hidden="true" bis_size='{"x":233,"y":835,"w":1024,"h":550,"abs_x":713,"abs_y":878}' className="cube-scene hidden md:flex flex-row items-center justify-between w-full z-10 max-w-5xl mx-auto relative" id="interactive-scene" style={{minHeight: '550px', padding: '2rem 0'}}>
<style>
                        @keyframes pulseLine {
                            0% { left: -10%; opacity: 0; }
                            10% { opacity: 1; }
                            90% { opacity: 1; }
                            100% { left: 100%; opacity: 0; }
                        }
                        @keyframes floatGentle {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-4px); }
                        }
                        @keyframes pulseGlow {
                            0%, 100% { box-shadow: 0 0 30px rgba(249, 115, 22, 0.05); border-color: rgba(249, 115, 22, 0.2); }
                            50% { box-shadow: 0 0 50px rgba(249, 115, 22, 0.2); border-color: rgba(249, 115, 22, 0.4); }
                        }
                    </style>

<div bis_size='{"x":233,"y":1110,"w":1024,"h":1,"abs_x":713,"abs_y":1153}' className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0 pointer-events-none"></div>
<div bis_size='{"x":233,"y":1109,"w":341,"h":2,"abs_x":713,"abs_y":1152}' className="absolute top-1/2 left-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-orange-500 to-transparent -translate-y-1/2 z-0 pointer-events-none" style={{animation: 'pulseLine 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>

<div bis_size='{"x":233,"y":978,"w":280,"h":264,"abs_x":713,"abs_y":1021}' className="w-[280px] flex flex-col gap-3 z-10">
<div bis_size='{"x":233,"y":978,"w":280,"h":16,"abs_x":713,"abs_y":1021}' className="text-xs font-mono text-zinc-500 uppercase tracking-wide pl-1 mb-2">1. Inputs complexes</div>
<div bis_size='{"x":233,"y":1014,"w":280,"h":68,"abs_x":713,"abs_y":1057}' className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out infinite'}}>
<div bis_size='{"x":234,"y":1015,"w":278,"h":66,"abs_x":714,"abs_y":1058}' className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div bis_size='{"x":248,"y":1030,"w":36,"h":36,"abs_x":728,"abs_y":1073}' className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-400 z-10 shrink-0">
<iconify-icon bis_size='{"x":257,"y":1039,"w":18,"h":18,"abs_x":737,"abs_y":1082}' icon="solar:server-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div bis_size='{"x":296,"y":1029,"w":140,"h":38,"abs_x":776,"abs_y":1072}' className="flex flex-col z-10 min-w-0">
<span bis_size='{"x":296,"y":1029,"w":140,"h":20,"abs_x":776,"abs_y":1072}' className="text-sm font-normal text-zinc-200 truncate">Données CRM</span>
<span bis_size='{"x":296,"y":1051,"w":140,"h":16,"abs_x":776,"abs_y":1094}' className="text-xs text-zinc-500 truncate mt-0.5">Historique, deals gagnés</span>
</div>
</div>
<div bis_size='{"x":233,"y":1094,"w":280,"h":68,"abs_x":713,"abs_y":1137}' className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 1.5s infinite'}}>
<div bis_size='{"x":234,"y":1095,"w":278,"h":66,"abs_x":714,"abs_y":1138}' className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div bis_size='{"x":248,"y":1110,"w":36,"h":36,"abs_x":728,"abs_y":1153}' className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-indigo-400 z-10 shrink-0">
<iconify-icon bis_size='{"x":257,"y":1119,"w":18,"h":18,"abs_x":737,"abs_y":1162}' icon="solar:radar-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div bis_size='{"x":296,"y":1109,"w":116,"h":38,"abs_x":776,"abs_y":1152}' className="flex flex-col z-10 min-w-0">
<span bis_size='{"x":296,"y":1109,"w":116,"h":20,"abs_x":776,"abs_y":1152}' className="text-sm font-normal text-zinc-200 truncate">Signaux Multiples</span>
<span bis_size='{"x":296,"y":1131,"w":116,"h":16,"abs_x":776,"abs_y":1174}' className="text-xs text-zinc-500 truncate mt-0.5">Web, actus, technos</span>
</div>
</div>
<div bis_size='{"x":233,"y":1174,"w":280,"h":68,"abs_x":713,"abs_y":1217}' className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 3s infinite'}}>
<div bis_size='{"x":234,"y":1175,"w":278,"h":66,"abs_x":714,"abs_y":1218}' className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div bis_size='{"x":248,"y":1190,"w":36,"h":36,"abs_x":728,"abs_y":1233}' className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-green-400 z-10 shrink-0">
<iconify-icon bis_size='{"x":257,"y":1199,"w":18,"h":18,"abs_x":737,"abs_y":1242}' icon="solar:graph-new-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div bis_size='{"x":296,"y":1189,"w":137,"h":38,"abs_x":776,"abs_y":1232}' className="flex flex-col z-10 min-w-0">
<span bis_size='{"x":296,"y":1189,"w":137,"h":20,"abs_x":776,"abs_y":1232}' className="text-sm font-normal text-zinc-200 truncate">Benchmarks Secteur</span>
<span bis_size='{"x":296,"y":1211,"w":137,"h":16,"abs_x":776,"abs_y":1254}' className="text-xs text-zinc-500 truncate mt-0.5">Performances ICP</span>
</div>
</div>
</div>

<div bis_size='{"x":513,"y":909,"w":464,"h":403,"abs_x":993,"abs_y":952}' className="flex-1 flex flex-col items-center justify-center relative min-w-[320px] z-10 px-4">
<div bis_size='{"x":665,"y":909,"w":158,"h":30,"abs_x":1145,"abs_y":952}' className="text-xs font-mono text-orange-500 uppercase tracking-wide mb-6 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                            2. Suite Agents IA
                        </div>
<div bis_size='{"x":575,"y":963,"w":340,"h":349,"abs_x":1055,"abs_y":1006}' className="relative bg-black/90 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-6 w-full max-w-[340px] z-10" style={{animation: 'pulseGlow 4s ease-in-out infinite'}}>
<div bis_size='{"x":560,"y":948,"w":370,"h":379,"abs_x":1040,"abs_y":991}' className="absolute -inset-4 bg-gradient-to-b from-orange-500/20 to-transparent opacity-30 blur-2xl pointer-events-none rounded-[3rem] z-[-1]"></div>
<div bis_size='{"x":600,"y":988,"w":290,"h":75,"abs_x":1080,"abs_y":1031}' className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
<div bis_size='{"x":600,"y":989,"w":48,"h":48,"abs_x":1080,"abs_y":1032}' className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] shrink-0">
<iconify-icon bis_size='{"x":612,"y":1001,"w":24,"h":24,"abs_x":1092,"abs_y":1044}' icon="solar:cpu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div bis_size='{"x":664,"y":988,"w":140,"h":50,"abs_x":1144,"abs_y":1031}' className="min-w-0">
<div bis_size='{"x":664,"y":988,"w":140,"h":28,"abs_x":1144,"abs_y":1031}' className="text-xl font-medium text-white tracking-tight truncate">GTMlab Copilot</div>
<div bis_size='{"x":664,"y":1022,"w":140,"h":16,"abs_x":1144,"abs_y":1065}' className="text-xs text-orange-400 font-mono flex items-center gap-1.5 mt-1.5">
<span bis_size='{"x":664,"y":1027,"w":6,"h":6,"abs_x":1144,"abs_y":1070}' className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span> Piloté par experts
                                    </div>
</div>
</div>
<div bis_size='{"x":600,"y":1087,"w":290,"h":200,"abs_x":1080,"abs_y":1130}' className="space-y-2.5">
<div bis_size='{"x":600,"y":1087,"w":290,"h":60,"abs_x":1080,"abs_y":1130}' className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/40 border border-white/5 transition-colors hover:bg-zinc-900 hover:border-white/10">
<div bis_size='{"x":611,"y":1105,"w":24,"h":24,"abs_x":1091,"abs_y":1148}' className="w-6 h-6 rounded-md bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400 border border-white/5 shrink-0">01</div>
<div bis_size='{"x":647,"y":1098,"w":206,"h":38,"abs_x":1127,"abs_y":1141}' className="flex-1 min-w-0">
<div bis_size='{"x":647,"y":1098,"w":206,"h":20,"abs_x":1127,"abs_y":1141}' className="text-sm font-normal text-zinc-200 truncate">ICP Refinement</div>
<div bis_size='{"x":647,"y":1120,"w":206,"h":16,"abs_x":1127,"abs_y":1163}' className="text-xs text-zinc-500 font-mono mt-0.5 truncate">Data-driven targeting</div>
</div>
<iconify-icon bis_size='{"x":865,"y":1110,"w":14,"h":14,"abs_x":1345,"abs_y":1153}' className="text-orange-500 shrink-0" icon="solar:target-linear" width="14"></iconify-icon>
</div>
<div bis_size='{"x":600,"y":1157,"w":290,"h":60,"abs_x":1080,"abs_y":1200}' className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/40 border border-white/5 transition-colors hover:bg-zinc-900 hover:border-white/10">
<div bis_size='{"x":611,"y":1175,"w":24,"h":24,"abs_x":1091,"abs_y":1218}' className="w-6 h-6 rounded-md bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400 border border-white/5 shrink-0">02</div>
<div bis_size='{"x":647,"y":1168,"w":206,"h":38,"abs_x":1127,"abs_y":1211}' className="flex-1 min-w-0">
<div bis_size='{"x":647,"y":1168,"w":206,"h":20,"abs_x":1127,"abs_y":1211}' className="text-sm font-normal text-zinc-200 truncate">Account Research</div>
<div bis_size='{"x":647,"y":1190,"w":206,"h":16,"abs_x":1127,"abs_y":1233}' className="text-xs text-zinc-500 font-mono mt-0.5 truncate">Listes enrichies</div>
</div>
<iconify-icon bis_size='{"x":865,"y":1180,"w":14,"h":14,"abs_x":1345,"abs_y":1223}' className="text-orange-500 shrink-0" icon="solar:database-linear" width="14"></iconify-icon>
</div>
<div bis_size='{"x":600,"y":1227,"w":290,"h":60,"abs_x":1080,"abs_y":1270}' className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/40 border border-white/5 transition-colors hover:bg-zinc-900 hover:border-white/10">
<div bis_size='{"x":611,"y":1245,"w":24,"h":24,"abs_x":1091,"abs_y":1288}' className="w-6 h-6 rounded-md bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400 border border-white/5 shrink-0">03</div>
<div bis_size='{"x":647,"y":1238,"w":206,"h":38,"abs_x":1127,"abs_y":1281}' className="flex-1 min-w-0">
<div bis_size='{"x":647,"y":1238,"w":206,"h":20,"abs_x":1127,"abs_y":1281}' className="text-sm font-normal text-zinc-200 truncate">Warm Outreach</div>
<div bis_size='{"x":647,"y":1260,"w":206,"h":16,"abs_x":1127,"abs_y":1303}' className="text-xs text-zinc-500 font-mono mt-0.5 truncate">Copywriting IA B2B</div>
</div>
<iconify-icon bis_size='{"x":865,"y":1250,"w":14,"h":14,"abs_x":1345,"abs_y":1293}' className="text-orange-500 shrink-0" icon="solar:pen-new-square-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div bis_size='{"x":977,"y":978,"w":280,"h":264,"abs_x":1457,"abs_y":1021}' className="w-[280px] flex flex-col gap-3 z-10">
<div bis_size='{"x":977,"y":978,"w":280,"h":16,"abs_x":1457,"abs_y":1021}' className="text-xs font-mono text-zinc-500 uppercase tracking-wide text-right pr-1 mb-2">3. Scalable Results</div>
<div bis_size='{"x":977,"y":1014,"w":280,"h":68,"abs_x":1457,"abs_y":1057}' className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 0.5s infinite'}}>
<div bis_size='{"x":978,"y":1015,"w":278,"h":66,"abs_x":1458,"abs_y":1058}' className="absolute inset-0 bg-gradient-to-l from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div bis_size='{"x":992,"y":1029,"w":202,"h":38,"abs_x":1472,"abs_y":1072}' className="flex flex-col text-right flex-1 min-w-0 z-10">
<span bis_size='{"x":992,"y":1029,"w":202,"h":20,"abs_x":1472,"abs_y":1072}' className="text-sm font-normal text-zinc-200 truncate">Sales Allocation</span>
<span bis_size='{"x":992,"y":1051,"w":202,"h":16,"abs_x":1472,"abs_y":1094}' className="text-xs text-zinc-500 truncate mt-0.5">Routing &amp; Tiering</span>
</div>
<div bis_size='{"x":1206,"y":1030,"w":36,"h":36,"abs_x":1686,"abs_y":1073}' className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-orange-400 z-10 shrink-0">
<iconify-icon bis_size='{"x":1215,"y":1039,"w":18,"h":18,"abs_x":1695,"abs_y":1082}' icon="solar:routing-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div bis_size='{"x":977,"y":1094,"w":280,"h":68,"abs_x":1457,"abs_y":1137}' className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 2s infinite'}}>
<div bis_size='{"x":978,"y":1095,"w":278,"h":66,"abs_x":1458,"abs_y":1138}' className="absolute inset-0 bg-gradient-to-l from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div bis_size='{"x":992,"y":1109,"w":202,"h":38,"abs_x":1472,"abs_y":1152}' className="flex flex-col text-right flex-1 min-w-0 z-10">
<span bis_size='{"x":992,"y":1109,"w":202,"h":20,"abs_x":1472,"abs_y":1152}' className="text-sm font-normal text-zinc-200 truncate">RevOps Insights</span>
<span bis_size='{"x":992,"y":1131,"w":202,"h":16,"abs_x":1472,"abs_y":1174}' className="text-xs text-zinc-500 truncate mt-0.5">Tableaux de bord IA</span>
</div>
<div bis_size='{"x":1206,"y":1110,"w":36,"h":36,"abs_x":1686,"abs_y":1153}' className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-400 z-10 shrink-0">
<iconify-icon bis_size='{"x":1215,"y":1119,"w":18,"h":18,"abs_x":1695,"abs_y":1162}' icon="solar:chart-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div bis_size='{"x":977,"y":1174,"w":280,"h":68,"abs_x":1457,"abs_y":1217}' className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 3.5s infinite'}}>
<div bis_size='{"x":978,"y":1175,"w":278,"h":66,"abs_x":1458,"abs_y":1218}' className="absolute inset-0 bg-gradient-to-l from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div bis_size='{"x":992,"y":1189,"w":202,"h":38,"abs_x":1472,"abs_y":1232}' className="flex flex-col text-right flex-1 min-w-0 z-10">
<span bis_size='{"x":992,"y":1189,"w":202,"h":20,"abs_x":1472,"abs_y":1232}' className="text-sm font-normal text-zinc-200 truncate">Revenu Prévisible</span>
<span bis_size='{"x":992,"y":1211,"w":202,"h":16,"abs_x":1472,"abs_y":1254}' className="text-xs text-zinc-500 truncate mt-0.5">Croissance scalable</span>
</div>
<div bis_size='{"x":1206,"y":1190,"w":36,"h":36,"abs_x":1686,"abs_y":1233}' className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-green-400 z-10 shrink-0">
<iconify-icon bis_size='{"x":1215,"y":1199,"w":18,"h":18,"abs_x":1695,"abs_y":1242}' icon="solar:wad-of-money-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1465,"w":1490,"h":630,"abs_x":480,"abs_y":1508}' className="py-32 border-t border-white/5 bg-[#020202] relative z-20" id="problem">
<div bis_size='{"x":297,"y":1594,"w":896,"h":373,"abs_x":777,"abs_y":1637}' className="max-w-4xl mx-auto px-6 text-center">
<div bis_size='{"x":721,"y":1594,"w":48,"h":48,"abs_x":1201,"abs_y":1637}' className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-8 border border-red-500/20">
<iconify-icon bis_size='{"x":733,"y":1606,"w":24,"h":24,"abs_x":1213,"abs_y":1649}' icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 bis_size='{"x":321,"y":1674,"w":848,"h":144,"abs_x":801,"abs_y":1717}' className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight mb-8">
    L'outbound traditionnel est obsolète pour <br bis_size='{"x":796,"y":1716,"w":0,"h":59,"abs_x":1276,"abs_y":1759}' className="hidden md:block"/>les ventes B2B complexes.
</h2>
<p bis_size='{"x":409,"y":1850,"w":672,"h":117,"abs_x":889,"abs_y":1893}' className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                    Les outils basiques (plateformes d'outbound, AI SDRs) échouent parce qu'ils utilisent une approche <span bis_size='{"x":617,"y":1884,"w":169,"h":21,"abs_x":1097,"abs_y":1927}' className="text-white font-medium">« one-size-fits-all »</span> qui ne capte pas les nuances de l'ICP, ne s'alignent pas avec l'organisation commerciale, et ne s'intègrent pas correctement au CRM, empêchant le suivi des résultats.
                </p>
</div>
</section>

<section bis_size='{"x":0,"y":2095,"w":1490,"h":2470,"abs_x":480,"abs_y":2138}' className="py-32 bg-[#050505] border-y border-white/5" id="agents">
<div bis_size='{"x":169,"y":2224,"w":1152,"h":2212,"abs_x":649,"abs_y":2267}' className="max-w-6xl mx-auto px-6">
<div bis_size='{"x":193,"y":2224,"w":1104,"h":178,"abs_x":673,"abs_y":2267}' className="text-center mb-24">
<h2 bis_size='{"x":193,"y":2224,"w":1104,"h":96,"abs_x":673,"abs_y":2267}' className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Une suite de <span bis_size='{"x":733,"y":2218,"w":308,"h":59,"abs_x":1213,"abs_y":2261}' className="text-orange-500">50+ agents IA</span><br bis_size='{"x":1041,"y":2218,"w":0,"h":59,"abs_x":1521,"abs_y":2261}'/>pilotés par des experts
                    </h2>
<p bis_size='{"x":409,"y":2344,"w":672,"h":58,"abs_x":889,"abs_y":2387}' className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Construite par des stratèges B2B seniors, la suite GTMlab fonctionne sous supervision experte pour maximiser la performance outbound à chaque étape.
                    </p>
</div>

<div bis_size='{"x":193,"y":2499,"w":1104,"h":401,"abs_x":673,"abs_y":2542}' className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div bis_size='{"x":170,"y":2499,"w":48,"h":48,"abs_x":650,"abs_y":2542}' className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-orange-500 transition-colors">
<iconify-icon bis_size='{"x":182,"y":2511,"w":24,"h":24,"abs_x":662,"abs_y":2554}' icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div bis_size='{"x":258,"y":2499,"w":1039,"h":305,"abs_x":738,"abs_y":2542}' className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div bis_size='{"x":258,"y":2499,"w":404,"h":162,"abs_x":738,"abs_y":2542}' className="lg:col-span-5 pt-1">
<span bis_size='{"x":258,"y":2503,"w":404,"h":16,"abs_x":738,"abs_y":2546}' className="text-orange-400 font-mono text-xs uppercase tracking-wide mb-3 block">Pilier 01</span>
<h3 bis_size='{"x":258,"y":2531,"w":404,"h":36,"abs_x":738,"abs_y":2574}' className="text-3xl text-white font-semibold mb-4 tracking-tight">ICP Refinement AI</h3>
<p bis_size='{"x":258,"y":2583,"w":404,"h":78,"abs_x":738,"abs_y":2626}' className="text-zinc-400 text-base leading-relaxed">
                                Affûte l'ICP grâce aux données clients réelles et à l'expertise sectorielle. Nous remplaçons les suppositions par des certitudes data-driven.
                            </p>
</div>
<div bis_size='{"x":710,"y":2499,"w":586,"h":305,"abs_x":1190,"abs_y":2542}' className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div bis_size='{"x":710,"y":2499,"w":285,"h":144,"abs_x":1190,"abs_y":2542}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":731,"y":2520,"w":243,"h":32,"abs_x":1211,"abs_y":2563}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":731,"y":2520,"w":32,"h":32,"abs_x":1211,"abs_y":2563}' className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
<iconify-icon bis_size='{"x":738,"y":2527,"w":18,"h":18,"abs_x":1218,"abs_y":2570}' icon="solar:shield-warning-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":775,"y":2526,"w":99,"h":20,"abs_x":1255,"abs_y":2569}' className="text-white text-sm font-medium">ICP Challenger</h4>
</div>
<p bis_size='{"x":731,"y":2564,"w":243,"h":39,"abs_x":1211,"abs_y":2607}' className="text-zinc-500 text-xs leading-relaxed">Confronte les hypothèses ICP avec les données CRM et benchmarks sectoriels.</p>
</div>

<div bis_size='{"x":1011,"y":2499,"w":285,"h":144,"abs_x":1491,"abs_y":2542}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":1032,"y":2520,"w":243,"h":32,"abs_x":1512,"abs_y":2563}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":1032,"y":2520,"w":32,"h":32,"abs_x":1512,"abs_y":2563}' className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
<iconify-icon bis_size='{"x":1039,"y":2527,"w":18,"h":18,"abs_x":1519,"abs_y":2570}' icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":1076,"y":2526,"w":99,"h":20,"abs_x":1556,"abs_y":2569}' className="text-white text-sm font-medium">CRM Lookalike</h4>
</div>
<p bis_size='{"x":1032,"y":2564,"w":243,"h":58,"abs_x":1512,"abs_y":2607}' className="text-zinc-500 text-xs leading-relaxed">Analyse la performance CRM pour identifier les comptes à fort potentiel de conversion.</p>
</div>

<div bis_size='{"x":710,"y":2659,"w":285,"h":144,"abs_x":1190,"abs_y":2702}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":731,"y":2680,"w":243,"h":32,"abs_x":1211,"abs_y":2723}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":731,"y":2680,"w":32,"h":32,"abs_x":1211,"abs_y":2723}' className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
<iconify-icon bis_size='{"x":738,"y":2687,"w":18,"h":18,"abs_x":1218,"abs_y":2730}' icon="solar:rocket-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":775,"y":2686,"w":92,"h":20,"abs_x":1255,"abs_y":2729}' className="text-white text-sm font-medium">GTM Strategy</h4>
</div>
<p bis_size='{"x":731,"y":2724,"w":243,"h":58,"abs_x":1211,"abs_y":2767}' className="text-zinc-500 text-xs leading-relaxed">Construit une stratégie Go-To-Market multi-canal millimétrée, basée sur l'ICP final.</p>
</div>

<div bis_size='{"x":1011,"y":2659,"w":285,"h":144,"abs_x":1491,"abs_y":2702}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":1032,"y":2680,"w":243,"h":32,"abs_x":1512,"abs_y":2723}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":1032,"y":2680,"w":32,"h":32,"abs_x":1512,"abs_y":2723}' className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
<iconify-icon bis_size='{"x":1039,"y":2687,"w":18,"h":18,"abs_x":1519,"abs_y":2730}' icon="solar:book-bookmark-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":1076,"y":2686,"w":101,"h":20,"abs_x":1556,"abs_y":2729}' className="text-white text-sm font-medium">ICP Knowledge</h4>
</div>
<p bis_size='{"x":1032,"y":2724,"w":243,"h":39,"abs_x":1512,"abs_y":2767}' className="text-zinc-500 text-xs leading-relaxed">Apprend en continu de chaque interaction pour affiner et adapter le ciblage.</p>
</div>
</div>
</div>
</div>

<div bis_size='{"x":193,"y":2900,"w":1104,"h":401,"abs_x":673,"abs_y":2943}' className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div bis_size='{"x":170,"y":2900,"w":48,"h":48,"abs_x":650,"abs_y":2943}' className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<iconify-icon bis_size='{"x":182,"y":2912,"w":24,"h":24,"abs_x":662,"abs_y":2955}' icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div bis_size='{"x":258,"y":2900,"w":1039,"h":305,"abs_x":738,"abs_y":2943}' className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div bis_size='{"x":258,"y":2900,"w":404,"h":162,"abs_x":738,"abs_y":2943}' className="lg:col-span-5 pt-1">
<span bis_size='{"x":258,"y":2904,"w":404,"h":16,"abs_x":738,"abs_y":2947}' className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Pilier 02</span>
<h3 bis_size='{"x":258,"y":2932,"w":404,"h":36,"abs_x":738,"abs_y":2975}' className="text-3xl text-white font-semibold mb-4 tracking-tight">Account Research AI</h3>
<p bis_size='{"x":258,"y":2984,"w":404,"h":78,"abs_x":738,"abs_y":3027}' className="text-zinc-400 text-base leading-relaxed">
                                Construit des listes hyper-ciblées avec des données enrichies et à jour, et détecte les signaux émergents avant la concurrence.
                            </p>
</div>
<div bis_size='{"x":710,"y":2900,"w":586,"h":305,"abs_x":1190,"abs_y":2943}' className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div bis_size='{"x":710,"y":2900,"w":285,"h":144,"abs_x":1190,"abs_y":2943}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":731,"y":2921,"w":243,"h":32,"abs_x":1211,"abs_y":2964}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":731,"y":2921,"w":32,"h":32,"abs_x":1211,"abs_y":2964}' className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon bis_size='{"x":738,"y":2928,"w":18,"h":18,"abs_x":1218,"abs_y":2971}' icon="solar:user-plus-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":775,"y":2927,"w":114,"h":20,"abs_x":1255,"abs_y":2970}' className="text-white text-sm font-medium">Audience Builder</h4>
</div>
<p bis_size='{"x":731,"y":2965,"w":243,"h":39,"abs_x":1211,"abs_y":3008}' className="text-zinc-500 text-xs leading-relaxed">Génère des listes d'audiences exhaustives et parfaitement alignées sur l'ICP validé.</p>
</div>
<div bis_size='{"x":1011,"y":2900,"w":285,"h":144,"abs_x":1491,"abs_y":2943}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":1032,"y":2921,"w":243,"h":32,"abs_x":1512,"abs_y":2964}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":1032,"y":2921,"w":32,"h":32,"abs_x":1512,"abs_y":2964}' className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon bis_size='{"x":1039,"y":2928,"w":18,"h":18,"abs_x":1519,"abs_y":2971}' icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":1076,"y":2927,"w":131,"h":20,"abs_x":1556,"abs_y":2970}' className="text-white text-sm font-medium">Custom Enrichment</h4>
</div>
<p bis_size='{"x":1032,"y":2965,"w":243,"h":58,"abs_x":1512,"abs_y":3008}' className="text-zinc-500 text-xs leading-relaxed">Enrichit les données de contact et de compte avec des informations personnalisées complexes.</p>
</div>
<div bis_size='{"x":710,"y":3060,"w":285,"h":144,"abs_x":1190,"abs_y":3103}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":731,"y":3081,"w":243,"h":32,"abs_x":1211,"abs_y":3124}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":731,"y":3081,"w":32,"h":32,"abs_x":1211,"abs_y":3124}' className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon bis_size='{"x":738,"y":3088,"w":18,"h":18,"abs_x":1218,"abs_y":3131}' icon="solar:broom-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":775,"y":3087,"w":91,"h":20,"abs_x":1255,"abs_y":3130}' className="text-white text-sm font-medium">CRM Hygiene</h4>
</div>
<p bis_size='{"x":731,"y":3125,"w":243,"h":58,"abs_x":1211,"abs_y":3168}' className="text-zinc-500 text-xs leading-relaxed">Nettoie, met à jour et enrichit votre CRM en temps réel, évitant la dégradation des données.</p>
</div>
<div bis_size='{"x":1011,"y":3060,"w":285,"h":144,"abs_x":1491,"abs_y":3103}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":1032,"y":3081,"w":243,"h":32,"abs_x":1512,"abs_y":3124}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":1032,"y":3081,"w":32,"h":32,"abs_x":1512,"abs_y":3124}' className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon bis_size='{"x":1039,"y":3088,"w":18,"h":18,"abs_x":1519,"abs_y":3131}' icon="solar:radar-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":1076,"y":3087,"w":104,"h":20,"abs_x":1556,"abs_y":3130}' className="text-white text-sm font-medium">Signal Identifier</h4>
</div>
<p bis_size='{"x":1032,"y":3125,"w":243,"h":58,"abs_x":1512,"abs_y":3168}' className="text-zinc-500 text-xs leading-relaxed">Détecte les signaux d'achat précoces (levées, recrutements) à partir de 50+ sources externes.</p>
</div>
</div>
</div>
</div>

<div bis_size='{"x":193,"y":3301,"w":1104,"h":401,"abs_x":673,"abs_y":3344}' className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div bis_size='{"x":170,"y":3301,"w":48,"h":48,"abs_x":650,"abs_y":3344}' className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-purple-500 transition-colors">
<iconify-icon bis_size='{"x":182,"y":3313,"w":24,"h":24,"abs_x":662,"abs_y":3356}' icon="solar:routing-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div bis_size='{"x":258,"y":3301,"w":1039,"h":305,"abs_x":738,"abs_y":3344}' className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div bis_size='{"x":258,"y":3301,"w":404,"h":162,"abs_x":738,"abs_y":3344}' className="lg:col-span-5 pt-1">
<span bis_size='{"x":258,"y":3305,"w":404,"h":16,"abs_x":738,"abs_y":3348}' className="text-purple-400 font-mono text-xs uppercase tracking-wide mb-3 block">Pilier 03</span>
<h3 bis_size='{"x":258,"y":3333,"w":404,"h":36,"abs_x":738,"abs_y":3376}' className="text-3xl text-white font-semibold mb-4 tracking-tight">Sales Allocation AI</h3>
<p bis_size='{"x":258,"y":3385,"w":404,"h":78,"abs_x":738,"abs_y":3428}' className="text-zinc-400 text-base leading-relaxed">
                                Le seul AI qui route les leads avec des règles personnalisées et précises pour aligner le pipeline sur la réalité de votre équipe Sales.
                            </p>
</div>
<div bis_size='{"x":710,"y":3301,"w":586,"h":305,"abs_x":1190,"abs_y":3344}' className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div bis_size='{"x":710,"y":3301,"w":285,"h":144,"abs_x":1190,"abs_y":3344}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":731,"y":3322,"w":243,"h":32,"abs_x":1211,"abs_y":3365}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":731,"y":3322,"w":32,"h":32,"abs_x":1211,"abs_y":3365}' className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon bis_size='{"x":738,"y":3329,"w":18,"h":18,"abs_x":1218,"abs_y":3372}' icon="solar:sort-from-top-to-bottom-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":775,"y":3328,"w":106,"h":20,"abs_x":1255,"abs_y":3371}' className="text-white text-sm font-medium">Account Tiering</h4>
</div>
<p bis_size='{"x":731,"y":3366,"w":243,"h":58,"abs_x":1211,"abs_y":3409}' className="text-zinc-500 text-xs leading-relaxed">Classe automatiquement les comptes par niveau d'impact (Tier 1, 2, 3) pour prioriser l'effort.</p>
</div>
<div bis_size='{"x":1011,"y":3301,"w":285,"h":144,"abs_x":1491,"abs_y":3344}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":1032,"y":3322,"w":243,"h":32,"abs_x":1512,"abs_y":3365}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":1032,"y":3322,"w":32,"h":32,"abs_x":1512,"abs_y":3365}' className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon bis_size='{"x":1039,"y":3329,"w":18,"h":18,"abs_x":1519,"abs_y":3372}' icon="solar:star-fall-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":1076,"y":3328,"w":95,"h":20,"abs_x":1556,"abs_y":3371}' className="text-white text-sm font-medium">Scoring Agent</h4>
</div>
<p bis_size='{"x":1032,"y":3366,"w":243,"h":58,"abs_x":1512,"abs_y":3409}' className="text-zinc-500 text-xs leading-relaxed">Détecte les signaux subtils d'intention d'achat (ex : visite pricing, réouverture répétée d'un ancien email).</p>
</div>
<div bis_size='{"x":710,"y":3461,"w":285,"h":144,"abs_x":1190,"abs_y":3504}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":731,"y":3482,"w":243,"h":32,"abs_x":1211,"abs_y":3525}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":731,"y":3482,"w":32,"h":32,"abs_x":1211,"abs_y":3525}' className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon bis_size='{"x":738,"y":3489,"w":18,"h":18,"abs_x":1218,"abs_y":3532}' icon="solar:share-circle-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":775,"y":3488,"w":91,"h":20,"abs_x":1255,"abs_y":3531}' className="text-white text-sm font-medium">Team Routing</h4>
</div>
<p bis_size='{"x":731,"y":3526,"w":243,"h":58,"abs_x":1211,"abs_y":3569}' className="text-zinc-500 text-xs leading-relaxed">Distribue les prospects et alloue les comptes CRM selon le tiering, le territoire et des règles custom.</p>
</div>
<div bis_size='{"x":1011,"y":3461,"w":285,"h":144,"abs_x":1491,"abs_y":3504}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":1032,"y":3482,"w":243,"h":32,"abs_x":1512,"abs_y":3525}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":1032,"y":3482,"w":32,"h":32,"abs_x":1512,"abs_y":3525}' className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon bis_size='{"x":1039,"y":3489,"w":18,"h":18,"abs_x":1519,"abs_y":3532}' icon="solar:calendar-search-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":1076,"y":3488,"w":126,"h":20,"abs_x":1556,"abs_y":3531}' className="text-white text-sm font-medium">Pre-meeting Agent</h4>
</div>
<p bis_size='{"x":1032,"y":3526,"w":243,"h":58,"abs_x":1512,"abs_y":3569}' className="text-zinc-500 text-xs leading-relaxed">Pré-qualifie du MQL au SQL (via frameworks MEDDIC ou BANT) et maintient les leads engagés avant le call.</p>
</div>
</div>
</div>
</div>

<div bis_size='{"x":193,"y":3702,"w":1104,"h":381,"abs_x":673,"abs_y":3745}' className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div bis_size='{"x":170,"y":3702,"w":48,"h":48,"abs_x":650,"abs_y":3745}' className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-indigo-500 transition-colors">
<iconify-icon bis_size='{"x":182,"y":3714,"w":24,"h":24,"abs_x":662,"abs_y":3757}' icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div bis_size='{"x":258,"y":3702,"w":1039,"h":285,"abs_x":738,"abs_y":3745}' className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div bis_size='{"x":258,"y":3702,"w":404,"h":162,"abs_x":738,"abs_y":3745}' className="lg:col-span-5 pt-1">
<span bis_size='{"x":258,"y":3706,"w":404,"h":16,"abs_x":738,"abs_y":3749}' className="text-indigo-400 font-mono text-xs uppercase tracking-wide mb-3 block">Pilier 04</span>
<h3 bis_size='{"x":258,"y":3734,"w":404,"h":36,"abs_x":738,"abs_y":3777}' className="text-3xl text-white font-semibold mb-4 tracking-tight">Warm Outreach AI</h3>
<p bis_size='{"x":258,"y":3786,"w":404,"h":78,"abs_x":738,"abs_y":3829}' className="text-zinc-400 text-base leading-relaxed">
                                Un outreach qui "semble humain" : ultra-personnalisé, envoyé au moment le plus opportun, et déployé sur le meilleur canal.
                            </p>
</div>
<div bis_size='{"x":710,"y":3702,"w":586,"h":285,"abs_x":1190,"abs_y":3745}' className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div bis_size='{"x":710,"y":3702,"w":285,"h":144,"abs_x":1190,"abs_y":3745}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":731,"y":3723,"w":243,"h":32,"abs_x":1211,"abs_y":3766}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":731,"y":3723,"w":32,"h":32,"abs_x":1211,"abs_y":3766}' className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon bis_size='{"x":738,"y":3730,"w":18,"h":18,"abs_x":1218,"abs_y":3773}' icon="solar:share-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":775,"y":3729,"w":138,"h":20,"abs_x":1255,"abs_y":3772}' className="text-white text-sm font-medium">Multi-Channel Agent</h4>
</div>
<p bis_size='{"x":731,"y":3767,"w":243,"h":58,"abs_x":1211,"abs_y":3810}' className="text-zinc-500 text-xs leading-relaxed">Adapte dynamiquement le message, le timing et le canal selon les signaux comportementaux du prospect.</p>
</div>
<div bis_size='{"x":1011,"y":3702,"w":285,"h":144,"abs_x":1491,"abs_y":3745}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":1032,"y":3723,"w":243,"h":32,"abs_x":1512,"abs_y":3766}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":1032,"y":3723,"w":32,"h":32,"abs_x":1512,"abs_y":3766}' className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon bis_size='{"x":1039,"y":3730,"w":18,"h":18,"abs_x":1519,"abs_y":3773}' icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":1076,"y":3729,"w":124,"h":20,"abs_x":1556,"abs_y":3772}' className="text-white text-sm font-medium">Copywriting Agent</h4>
</div>
<p bis_size='{"x":1032,"y":3767,"w":243,"h":58,"abs_x":1512,"abs_y":3810}' className="text-zinc-500 text-xs leading-relaxed">Rédaction experte de haut niveau, conçue pour un fort taux de conversion et adaptée au ton de l'ICP.</p>
</div>
<div bis_size='{"x":710,"y":3862,"w":586,"h":125,"abs_x":1190,"abs_y":3905}' className="sm:col-span-2 bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":731,"y":3883,"w":544,"h":32,"abs_x":1211,"abs_y":3926}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":731,"y":3883,"w":32,"h":32,"abs_x":1211,"abs_y":3926}' className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon bis_size='{"x":738,"y":3890,"w":18,"h":18,"abs_x":1218,"abs_y":3933}' icon="solar:phone-calling-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":775,"y":3889,"w":170,"h":20,"abs_x":1255,"abs_y":3932}' className="text-white text-sm font-medium">Warm Call Booking Agent</h4>
</div>
<p bis_size='{"x":731,"y":3927,"w":512,"h":39,"abs_x":1211,"abs_y":3970}' className="text-zinc-500 text-xs leading-relaxed max-w-lg">Gère la complexité de l'agenda et planifie automatiquement les appels de découverte lorsque l'engagement du prospect est à son pic maximal.</p>
</div>
</div>
</div>
</div>

<div bis_size='{"x":193,"y":4083,"w":1104,"h":353,"abs_x":673,"abs_y":4126}' className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div bis_size='{"x":169,"y":4083,"w":48,"h":48,"abs_x":649,"abs_y":4126}' className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-green-500 transition-colors">
<iconify-icon bis_size='{"x":181,"y":4095,"w":24,"h":24,"abs_x":661,"abs_y":4138}' icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div bis_size='{"x":257,"y":4083,"w":1040,"h":305,"abs_x":737,"abs_y":4126}' className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div bis_size='{"x":257,"y":4083,"w":405,"h":162,"abs_x":737,"abs_y":4126}' className="lg:col-span-5 pt-1">
<span bis_size='{"x":257,"y":4087,"w":405,"h":16,"abs_x":737,"abs_y":4130}' className="text-green-400 font-mono text-xs uppercase tracking-wide mb-3 block">Pilier 05</span>
<h3 bis_size='{"x":257,"y":4115,"w":405,"h":36,"abs_x":737,"abs_y":4158}' className="text-3xl text-white font-semibold mb-4 tracking-tight">Revenue Orchestration AI</h3>
<p bis_size='{"x":257,"y":4167,"w":405,"h":78,"abs_x":737,"abs_y":4210}' className="text-zinc-400 text-base leading-relaxed">
                                Réalloue automatiquement les ressources vers les canaux, séquences et segments générant le meilleur ROI pour la croissance.
                            </p>
</div>
<div bis_size='{"x":710,"y":4083,"w":586,"h":305,"abs_x":1190,"abs_y":4126}' className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div bis_size='{"x":710,"y":4083,"w":285,"h":144,"abs_x":1190,"abs_y":4126}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":731,"y":4104,"w":243,"h":32,"abs_x":1211,"abs_y":4147}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":731,"y":4104,"w":32,"h":32,"abs_x":1211,"abs_y":4147}' className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon bis_size='{"x":738,"y":4111,"w":18,"h":18,"abs_x":1218,"abs_y":4154}' icon="solar:pie-chart-2-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":775,"y":4110,"w":148,"h":20,"abs_x":1255,"abs_y":4153}' className="text-white text-sm font-medium">Real-time Dashboards</h4>
</div>
<p bis_size='{"x":731,"y":4148,"w":243,"h":39,"abs_x":1211,"abs_y":4191}' className="text-zinc-500 text-xs leading-relaxed">Suivi du ROI en temps réel et visibilité complète sur la machine outbound.</p>
</div>
<div bis_size='{"x":1011,"y":4083,"w":285,"h":144,"abs_x":1491,"abs_y":4126}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":1032,"y":4104,"w":243,"h":32,"abs_x":1512,"abs_y":4147}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":1032,"y":4104,"w":32,"h":32,"abs_x":1512,"abs_y":4147}' className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon bis_size='{"x":1039,"y":4111,"w":18,"h":18,"abs_x":1519,"abs_y":4154}' icon="solar:document-text-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":1076,"y":4110,"w":108,"h":20,"abs_x":1556,"abs_y":4153}' className="text-white text-sm font-medium">Reporting Agent</h4>
</div>
<p bis_size='{"x":1032,"y":4148,"w":243,"h":58,"abs_x":1512,"abs_y":4191}' className="text-zinc-500 text-xs leading-relaxed">Interprète le dashboard comme un expert humain et vous donne des insights stratégiques concrets.</p>
</div>
<div bis_size='{"x":710,"y":4244,"w":285,"h":144,"abs_x":1190,"abs_y":4287}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":731,"y":4265,"w":243,"h":32,"abs_x":1211,"abs_y":4308}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":731,"y":4265,"w":32,"h":32,"abs_x":1211,"abs_y":4308}' className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon bis_size='{"x":738,"y":4272,"w":18,"h":18,"abs_x":1218,"abs_y":4315}' icon="solar:settings-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":775,"y":4271,"w":95,"h":20,"abs_x":1255,"abs_y":4314}' className="text-white text-sm font-medium">RevOps Agent</h4>
</div>
<p bis_size='{"x":731,"y":4309,"w":243,"h":58,"abs_x":1211,"abs_y":4352}' className="text-zinc-500 text-xs leading-relaxed">Crée des playbooks d'enrichissement et d'engagement sur mesure selon l'évolution de vos données.</p>
</div>
<div bis_size='{"x":1011,"y":4244,"w":285,"h":144,"abs_x":1491,"abs_y":4287}' className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div bis_size='{"x":1032,"y":4265,"w":243,"h":32,"abs_x":1512,"abs_y":4308}' className="flex items-center gap-3 mb-3">
<div bis_size='{"x":1032,"y":4265,"w":32,"h":32,"abs_x":1512,"abs_y":4308}' className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon bis_size='{"x":1039,"y":4272,"w":18,"h":18,"abs_x":1519,"abs_y":4315}' icon="solar:chart-2-linear" width="18"></iconify-icon>
</div>
<h4 bis_size='{"x":1076,"y":4271,"w":137,"h":20,"abs_x":1556,"abs_y":4314}' className="text-white text-sm font-medium">Strategy Adjustment</h4>
</div>
<p bis_size='{"x":1032,"y":4309,"w":243,"h":58,"abs_x":1512,"abs_y":4352}' className="text-zinc-500 text-xs leading-relaxed">Ajuste automatiquement les stratégies GTM globales selon l'analyse du meilleur ROI constaté.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4565,"w":1490,"h":824,"abs_x":480,"abs_y":4608}' className="py-24 bg-black border-y border-white/5 relative" id="solutions">
<div bis_size='{"x":105,"y":4662,"w":1280,"h":630,"abs_x":585,"abs_y":4705}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":129,"y":4662,"w":1232,"h":630,"abs_x":609,"abs_y":4705}' className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div bis_size='{"x":129,"y":4662,"w":813,"h":326,"abs_x":609,"abs_y":4705}' className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div bis_size='{"x":130,"y":4663,"w":811,"h":324,"abs_x":610,"abs_y":4706}' className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none"></div>
<div bis_size='{"x":162,"y":4695,"w":747,"h":186,"abs_x":642,"abs_y":4738}' className="relative z-10">
<div bis_size='{"x":162,"y":4695,"w":40,"h":40,"abs_x":642,"abs_y":4738}' className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" bis_size='{"x":172,"y":4705,"w":20,"h":20,"abs_x":652,"abs_y":4748}' icon="solar:database-linear" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":162,"y":4759,"w":747,"h":32,"abs_x":642,"abs_y":4802}' className="text-2xl text-white font-semibold tracking-tight mb-3">Une Data sur-mesure pour votre GTM</h3>
<p bis_size='{"x":162,"y":4803,"w":448,"h":78,"abs_x":642,"abs_y":4846}' className="text-zinc-400 text-base leading-relaxed max-w-md">L'agent Account Research croise LinkedIn, job boards, sites de review, données légales et RSS pour détecter les signaux que vos concurrents ignorent.</p>
</div>
<div bis_size='{"x":162,"y":4929,"w":747,"h":26,"abs_x":642,"abs_y":4972}' className="mt-8 flex flex-wrap gap-2">
<span bis_size='{"x":162,"y":4929,"w":79,"h":26,"abs_x":642,"abs_y":4972}' className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">Intent Data</span>
<span bis_size='{"x":249,"y":4929,"w":135,"h":26,"abs_x":729,"abs_y":4972}' className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">Waterfall Enrichment</span>
<span bis_size='{"x":393,"y":4929,"w":95,"h":26,"abs_x":873,"abs_y":4972}' className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">CRM Hygiene</span>
<span bis_size='{"x":497,"y":4929,"w":109,"h":26,"abs_x":977,"abs_y":4972}' className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">Technographics</span>
<span bis_size='{"x":614,"y":4929,"w":90,"h":26,"abs_x":1094,"abs_y":4972}' className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-white">50+ Sources</span>
</div>
</div>

<div bis_size='{"x":966,"y":4662,"w":394,"h":326,"abs_x":1446,"abs_y":4705}' className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div bis_size='{"x":999,"y":4695,"w":40,"h":40,"abs_x":1479,"abs_y":4738}' className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" bis_size='{"x":1009,"y":4705,"w":20,"h":20,"abs_x":1489,"abs_y":4748}' icon="solar:filter-linear" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":999,"y":4759,"w":328,"h":32,"abs_x":1479,"abs_y":4802}' className="text-2xl text-white font-semibold tracking-tight mb-3">Account Tiering &amp; Scoring</h3>
<p bis_size='{"x":999,"y":4803,"w":328,"h":104,"abs_x":1479,"abs_y":4846}' className="text-zinc-400 text-base leading-relaxed mb-4">L'agent Sales Allocation attribue un score dynamique. Ne perdez plus de temps sur des comptes froids — concentrez-vous sur le Tier 1.</p>
<div bis_size='{"x":999,"y":4923,"w":328,"h":8,"abs_x":1479,"abs_y":4966}' className="mt-auto w-full bg-zinc-900 rounded-full h-2 overflow-hidden">
<div bis_size='{"x":999,"y":4923,"w":279,"h":8,"abs_x":1479,"abs_y":4966}' className="bg-gradient-to-r from-blue-500 to-green-400 h-full w-[85%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
<div bis_size='{"x":999,"y":4939,"w":328,"h":16,"abs_x":1479,"abs_y":4982}' className="text-right text-xs text-white mt-2 font-mono">Tier 1 · Score: 85/100</div>
</div>

<div bis_size='{"x":129,"y":5012,"w":394,"h":280,"abs_x":609,"abs_y":5055}' className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div bis_size='{"x":162,"y":5045,"w":40,"h":40,"abs_x":642,"abs_y":5088}' className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" bis_size='{"x":172,"y":5055,"w":20,"h":20,"abs_x":652,"abs_y":5098}' icon="solar:plug-circle-linear" width="20"></iconify-icon>
</div>
<div bis_size='{"x":162,"y":5115,"w":328,"h":144,"abs_x":642,"abs_y":5158}'>
<h3 bis_size='{"x":162,"y":5115,"w":328,"h":32,"abs_x":642,"abs_y":5158}' className="text-2xl text-white font-semibold tracking-tight mb-2">Nativement intégré</h3>
<p bis_size='{"x":162,"y":5155,"w":328,"h":104,"abs_x":642,"abs_y":5198}' className="text-zinc-400 text-base leading-relaxed">Notre agent RevOps synchronise parfaitement HubSpot, Salesforce ou Pipedrive. L'IA travaille là où votre équipe opère.</p>
</div>
</div>

<div bis_size='{"x":547,"y":5012,"w":813,"h":280,"abs_x":1027,"abs_y":5055}' className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col md:flex-row items-center justify-between overflow-hidden gap-6">
<div bis_size='{"x":580,"y":5059,"w":384,"h":186,"abs_x":1060,"abs_y":5102}' className="relative z-10 max-w-sm">
<div bis_size='{"x":580,"y":5059,"w":40,"h":40,"abs_x":1060,"abs_y":5102}' className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" bis_size='{"x":590,"y":5069,"w":20,"h":20,"abs_x":1070,"abs_y":5112}' icon="solar:plain-linear" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":580,"y":5123,"w":384,"h":32,"abs_x":1060,"abs_y":5166}' className="text-2xl text-white font-semibold tracking-tight mb-3">Copywriting Expert, à l'échelle</h3>
<p bis_size='{"x":580,"y":5167,"w":384,"h":78,"abs_x":1060,"abs_y":5210}' className="text-zinc-400 text-base leading-relaxed">L'agent Warm Outreach génère des séquences qui "semblent humaines", respectant les frameworks B2B les plus avancés (MEDDIC, BANT).</p>
</div>
<div bis_size='{"x":988,"y":5127,"w":339,"h":50,"abs_x":1468,"abs_y":5170}' className="flex items-center gap-2 opacity-80">
<div bis_size='{"x":988,"y":5127,"w":91,"h":50,"abs_x":1468,"abs_y":5170}' className="px-3 py-2 bg-zinc-900 border border-white/10 rounded text-xs text-zinc-400">Signal Capté</div>
<iconify-icon aria-hidden="true" bis_size='{"x":1088,"y":5144,"w":16,"h":16,"abs_x":1568,"abs_y":5187}' className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div bis_size='{"x":1112,"y":5127,"w":102,"h":50,"abs_x":1592,"abs_y":5170}' className="px-3 py-2 bg-indigo-900/30 border border-indigo-500/30 rounded text-xs text-indigo-300">Copywriting IA</div>
<iconify-icon aria-hidden="true" bis_size='{"x":1222,"y":5144,"w":16,"h":16,"abs_x":1702,"abs_y":5187}' className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div bis_size='{"x":1246,"y":5127,"w":81,"h":50,"abs_x":1726,"abs_y":5170}' className="px-3 py-2 bg-green-900/30 border border-green-500/30 rounded text-xs text-green-300">Call Booké</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":5389,"w":1490,"h":924,"abs_x":480,"abs_y":5432}' className="py-24 bg-black relative" id="use-cases">
<div bis_size='{"x":105,"y":5485,"w":1280,"h":732,"abs_x":585,"abs_y":5528}' className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div bis_size='{"x":129,"y":5485,"w":1232,"h":208,"abs_x":609,"abs_y":5528}' className="text-center mb-16">
<div bis_size='{"x":129,"y":5485,"w":1232,"h":16,"abs_x":609,"abs_y":5528}' className="text-orange-500 font-mono text-xs uppercase tracking-wide mb-2">Cas clients B2B</div>
<h2 bis_size='{"x":129,"y":5509,"w":1232,"h":96,"abs_x":609,"abs_y":5552}' className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-4">
                        Ils ne prospectent plus.<br bis_size='{"x":1001,"y":5503,"w":0,"h":59,"abs_x":1481,"abs_y":5546}'/>Ils pilotent l'IA.
                    </h2>
<p bis_size='{"x":457,"y":5621,"w":576,"h":72,"abs_x":937,"abs_y":5664}' className="text-zinc-400 text-base max-w-xl mx-auto">
                        De la HR Tech au génie climatique, GTMlab déploie ses agents pour s'adapter à votre marché et générer du pipeline mesurable dès les premières semaines.
                    </p>
</div>
<div bis_size='{"x":129,"y":5757,"w":1232,"h":460,"abs_x":609,"abs_y":5800}' className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div bis_size='{"x":129,"y":5757,"w":394,"h":460,"abs_x":609,"abs_y":5800}' className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-orange-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(234,88,12,0.1)]">
<div bis_size='{"x":162,"y":5790,"w":328,"h":48,"abs_x":642,"abs_y":5833}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":162,"y":5790,"w":48,"h":48,"abs_x":642,"abs_y":5833}' className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-semibold text-xl font-sans tracking-tight shadow-inner">H</div>
<div bis_size='{"x":222,"y":5792,"w":126,"h":44,"abs_x":702,"abs_y":5835}'>
<h3 bis_size='{"x":222,"y":5792,"w":126,"h":28,"abs_x":702,"abs_y":5835}' className="text-white font-semibold text-lg">Hreact</h3>
<div bis_size='{"x":222,"y":5820,"w":126,"h":16,"abs_x":702,"abs_y":5863}' className="text-xs text-zinc-500 uppercase tracking-wide">HR Tech · SaaS B2B</div>
</div>
</div>
<div bis_size='{"x":162,"y":5862,"w":328,"h":64,"abs_x":642,"abs_y":5905}' className="mb-6 space-y-2">
<div bis_size='{"x":162,"y":5862,"w":328,"h":36,"abs_x":642,"abs_y":5905}' className="text-3xl font-semibold text-white tracking-tight">250 leads/mois</div>
<div bis_size='{"x":162,"y":5906,"w":328,"h":20,"abs_x":642,"abs_y":5949}' className="text-sm text-zinc-500">Pipeline piloté par les agents IA</div>
</div>
<p bis_size='{"x":162,"y":5950,"w":328,"h":156,"abs_x":642,"abs_y":5993}' className="text-zinc-400 text-base leading-relaxed mb-8 flex-grow">
                            L'agent <strong bis_size='{"x":221,"y":5953,"w":121,"h":20,"abs_x":701,"abs_y":5996}' className="text-white">Signal Identifier</strong> détecte les entreprises qui structurent leurs équipes RH. L'agent Outreach arrive avec la bonne offre au bon moment — avant même que le besoin soit formalisé.
                        </p>
<button bis_size='{"x":162,"y":6138,"w":328,"h":46,"abs_x":642,"abs_y":6181}' className="hover:bg-white/20 hover:text-white hover:border-white/20 transition-all flex gap-2 group-hover:bg-white/10 text-sm font-medium text-white bg-white/5 w-full border-white/10 border rounded-xl pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center">
                            Lire le cas complet
                            <iconify-icon aria-hidden="true" bis_size='{"x":385,"y":6153,"w":16,"h":16,"abs_x":865,"abs_y":6196}' className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div bis_size='{"x":547,"y":5757,"w":394,"h":460,"abs_x":1027,"abs_y":5800}' className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
<div bis_size='{"x":580,"y":5790,"w":328,"h":48,"abs_x":1060,"abs_y":5833}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":580,"y":5790,"w":48,"h":48,"abs_x":1060,"abs_y":5833}' className="w-12 h-12 rounded-xl bg-purple-900/20 border border-purple-500/20 flex items-center justify-center text-purple-400 font-semibold text-xl shadow-inner">
<iconify-icon aria-hidden="true" bis_size='{"x":592,"y":5802,"w":24,"h":24,"abs_x":1072,"abs_y":5845}' icon="solar:sofa-2-bold" width="24"></iconify-icon>
</div>
<div bis_size='{"x":640,"y":5792,"w":180,"h":44,"abs_x":1120,"abs_y":5835}'>
<h3 bis_size='{"x":640,"y":5792,"w":180,"h":28,"abs_x":1120,"abs_y":5835}' className="text-white font-semibold text-lg">Metamorphoze</h3>
<div bis_size='{"x":640,"y":5820,"w":180,"h":16,"abs_x":1120,"abs_y":5863}' className="text-xs text-zinc-500 uppercase tracking-wide">Aménagement de bureaux</div>
</div>
</div>
<div bis_size='{"x":580,"y":5862,"w":328,"h":64,"abs_x":1060,"abs_y":5905}' className="mb-6 space-y-2">
<div bis_size='{"x":580,"y":5862,"w":328,"h":36,"abs_x":1060,"abs_y":5905}' className="text-3xl font-semibold text-white tracking-tight">+35% conversion</div>
<div bis_size='{"x":580,"y":5906,"w":328,"h":20,"abs_x":1060,"abs_y":5949}' className="text-sm text-zinc-500">vs. prospection SDR classique</div>
</div>
<p bis_size='{"x":580,"y":5950,"w":328,"h":156,"abs_x":1060,"abs_y":5993}' className="text-zinc-400 text-base leading-relaxed mb-8 flex-grow">
                            Grâce aux agents croisant les données <strong bis_size='{"x":580,"y":5979,"w":230,"h":20,"abs_x":1060,"abs_y":6022}' className="text-white">"Déménagement de bureaux"</strong> et <strong bis_size='{"x":580,"y":6005,"w":171,"h":20,"abs_x":1060,"abs_y":6048}' className="text-white">"Croissance effectifs"</strong>, Metamorphoze route les décideurs immobiliers directement dans les agendas des commerciaux.
                        </p>
<button bis_size='{"x":580,"y":6138,"w":328,"h":46,"abs_x":1060,"abs_y":6181}' className="hover:bg-white/20 hover:text-white hover:border-white/20 transition-all flex gap-2 group-hover:bg-white/10 text-sm font-medium text-white bg-white/5 w-full border-white/10 border rounded-xl pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center cursor-pointer">
                            Lire le cas complet
                            <iconify-icon aria-hidden="true" bis_size='{"x":803,"y":6153,"w":16,"h":16,"abs_x":1283,"abs_y":6196}' className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div bis_size='{"x":966,"y":5757,"w":394,"h":460,"abs_x":1446,"abs_y":5800}' className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
<div bis_size='{"x":999,"y":5790,"w":328,"h":48,"abs_x":1479,"abs_y":5833}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":999,"y":5790,"w":48,"h":48,"abs_x":1479,"abs_y":5833}' className="w-12 h-12 rounded-xl bg-cyan-900/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-semibold text-xl shadow-inner">
<iconify-icon aria-hidden="true" bis_size='{"x":1011,"y":5802,"w":24,"h":24,"abs_x":1491,"abs_y":5845}' icon="solar:snowflake-bold" width="24"></iconify-icon>
</div>
<div bis_size='{"x":1059,"y":5792,"w":154,"h":44,"abs_x":1539,"abs_y":5835}'>
<h3 bis_size='{"x":1059,"y":5792,"w":154,"h":28,"abs_x":1539,"abs_y":5835}' className="text-white font-semibold text-lg">Decoclim</h3>
<div bis_size='{"x":1059,"y":5820,"w":154,"h":16,"abs_x":1539,"abs_y":5863}' className="text-xs text-zinc-500 uppercase tracking-wide">Génie Climatique · CVC</div>
</div>
</div>
<div bis_size='{"x":999,"y":5862,"w":328,"h":64,"abs_x":1479,"abs_y":5905}' className="mb-6 space-y-2">
<div bis_size='{"x":999,"y":5862,"w":328,"h":36,"abs_x":1479,"abs_y":5905}' className="text-3xl font-semibold text-white tracking-tight">Orchestration totale</div>
<div bis_size='{"x":999,"y":5906,"w":328,"h":20,"abs_x":1479,"abs_y":5949}' className="text-sm text-zinc-500">Détection → Qualification en 24h</div>
</div>
<p bis_size='{"x":999,"y":5950,"w":328,"h":156,"abs_x":1479,"abs_y":5993}' className="text-base leading-relaxed flex-grow text-zinc-400 mb-8">
                            L'agent <strong bis_size='{"x":1059,"y":5953,"w":114,"h":20,"abs_x":1539,"abs_y":5996}' className="text-white">ICP Challenger</strong> a affiné leur cible. Le système détecte les nouvelles structures via codes NAF et l'agent <strong bis_size='{"x":999,"y":6005,"w":303,"h":46,"abs_x":1479,"abs_y":6048}' className="text-white">Pre-meeting</strong> qualifie l'intérêt avant tout contact humain.
                        </p>
<button bis_size='{"x":999,"y":6138,"w":328,"h":46,"abs_x":1479,"abs_y":6181}' className="hover:bg-white/20 hover:text-white hover:border-white/20 transition-all flex gap-2 group-hover:bg-white/10 text-sm font-medium text-white bg-white/5 w-full border-white/10 border rounded-xl pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center cursor-pointer">
                            Lire le cas complet
                            <iconify-icon aria-hidden="true" bis_size='{"x":1222,"y":6153,"w":16,"h":16,"abs_x":1702,"abs_y":6196}' className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":6313,"w":1490,"h":648,"abs_x":480,"abs_y":6356}' className="py-24 bg-black border-t border-white/5 relative">
<div bis_size='{"x":105,"y":6410,"w":1280,"h":455,"abs_x":585,"abs_y":6453}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":129,"y":6410,"w":1232,"h":76,"abs_x":609,"abs_y":6453}' className="text-center mb-16">
<h2 bis_size='{"x":129,"y":6410,"w":1232,"h":36,"abs_x":609,"abs_y":6453}' className="text-3xl font-semibold text-white tracking-tight mb-4">Ce qu'en disent les leaders Revenue</h2>
<p bis_size='{"x":129,"y":6462,"w":1232,"h":24,"abs_x":609,"abs_y":6505}' className="text-zinc-400 text-base">Des résultats concrets, propulsés par notre suite d'agents IA.</p>
</div>
<div bis_size='{"x":129,"y":6550,"w":1232,"h":315,"abs_x":609,"abs_y":6593}' className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div bis_size='{"x":129,"y":6550,"w":394,"h":315,"abs_x":609,"abs_y":6593}' className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 hover:border-white/20 transition-colors">
<div bis_size='{"x":162,"y":6583,"w":328,"h":14,"abs_x":642,"abs_y":6626}' className="flex text-orange-500 gap-0.5">
<iconify-icon aria-hidden="true" bis_size='{"x":162,"y":6583,"w":14,"h":14,"abs_x":642,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon aria-hidden="true" bis_size='{"x":178,"y":6583,"w":14,"h":14,"abs_x":658,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon aria-hidden="true" bis_size='{"x":194,"y":6583,"w":14,"h":14,"abs_x":674,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon aria-hidden="true" bis_size='{"x":210,"y":6583,"w":14,"h":14,"abs_x":690,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon aria-hidden="true" bis_size='{"x":226,"y":6583,"w":14,"h":14,"abs_x":706,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p bis_size='{"x":162,"y":6621,"w":328,"h":130,"abs_x":642,"abs_y":6664}' className="text-zinc-300 text-base leading-relaxed">
                            "L'agent Account Tiering a changé notre façon de travailler. Au lieu de spammer 10 000 contacts, on laisse l'IA router les 500 vrais acheteurs potentiels. Le taux de réponse a triplé."
                        </p>
<div bis_size='{"x":162,"y":6775,"w":328,"h":57,"abs_x":642,"abs_y":6818}' className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
<div bis_size='{"x":162,"y":6792,"w":40,"h":40,"abs_x":642,"abs_y":6835}' className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-zinc-900 flex items-center justify-center text-white text-xs font-semibold ring-1 ring-white/10">PD</div>
<div bis_size='{"x":218,"y":6794,"w":202,"h":36,"abs_x":698,"abs_y":6837}'>
<div bis_size='{"x":218,"y":6794,"w":202,"h":20,"abs_x":698,"abs_y":6837}' className="text-white text-sm font-medium">Pierre Dubois</div>
<div bis_size='{"x":218,"y":6814,"w":202,"h":16,"abs_x":698,"abs_y":6857}' className="text-zinc-500 text-xs">VP Sales · Scale-up SaaS (85 pers.)</div>
</div>
</div>
</div>

<div bis_size='{"x":547,"y":6550,"w":394,"h":315,"abs_x":1027,"abs_y":6593}' className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 hover:border-white/20 transition-colors">
<div bis_size='{"x":580,"y":6583,"w":328,"h":14,"abs_x":1060,"abs_y":6626}' className="flex text-orange-500 gap-0.5">
<iconify-icon aria-hidden="true" bis_size='{"x":580,"y":6583,"w":14,"h":14,"abs_x":1060,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon aria-hidden="true" bis_size='{"x":596,"y":6583,"w":14,"h":14,"abs_x":1076,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon aria-hidden="true" bis_size='{"x":612,"y":6583,"w":14,"h":14,"abs_x":1092,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon aria-hidden="true" bis_size='{"x":628,"y":6583,"w":14,"h":14,"abs_x":1108,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon aria-hidden="true" bis_size='{"x":644,"y":6583,"w":14,"h":14,"abs_x":1124,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p bis_size='{"x":580,"y":6621,"w":328,"h":130,"abs_x":1060,"abs_y":6664}' className="text-zinc-300 text-base leading-relaxed">
                            "Le Scoring Agent est d'une précision redoutable. Mes SDRs ne font plus de recherche ou de séquençage manuel — l'IA orchestre tout, ils ne font que closer des rendez-vous chauds."
                        </p>
<div bis_size='{"x":580,"y":6775,"w":328,"h":57,"abs_x":1060,"abs_y":6818}' className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
<div bis_size='{"x":580,"y":6792,"w":40,"h":40,"abs_x":1060,"abs_y":6835}' className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-900 to-zinc-900 flex items-center justify-center text-white text-xs font-semibold ring-1 ring-white/10">SL</div>
<div bis_size='{"x":636,"y":6794,"w":184,"h":36,"abs_x":1116,"abs_y":6837}'>
<div bis_size='{"x":636,"y":6794,"w":184,"h":20,"abs_x":1116,"abs_y":6837}' className="text-white text-sm font-medium">Sarah Lecomte</div>
<div bis_size='{"x":636,"y":6814,"w":184,"h":16,"abs_x":1116,"abs_y":6857}' className="text-zinc-500 text-xs">Fondatrice · Agence Growth B2B</div>
</div>
</div>
</div>

<div bis_size='{"x":966,"y":6550,"w":394,"h":315,"abs_x":1446,"abs_y":6593}' className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 hover:border-white/20 transition-colors">
<div bis_size='{"x":999,"y":6583,"w":328,"h":14,"abs_x":1479,"abs_y":6626}' className="flex text-orange-500 gap-0.5">
<iconify-icon aria-hidden="true" bis_size='{"x":999,"y":6583,"w":14,"h":14,"abs_x":1479,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon aria-hidden="true" bis_size='{"x":1015,"y":6583,"w":14,"h":14,"abs_x":1495,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon aria-hidden="true" bis_size='{"x":1031,"y":6583,"w":14,"h":14,"abs_x":1511,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon aria-hidden="true" bis_size='{"x":1047,"y":6583,"w":14,"h":14,"abs_x":1527,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon aria-hidden="true" bis_size='{"x":1063,"y":6583,"w":14,"h":14,"abs_x":1543,"abs_y":6626}' icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p bis_size='{"x":999,"y":6621,"w":328,"h":130,"abs_x":1479,"abs_y":6664}' className="text-zinc-300 text-base leading-relaxed">
                            "L'agent Copywriting rédige des approches si contextuelles via le framework MEDDIC que personne ne devine que c'est l'IA. C'est du strategic outbound automatisé et parfaitement exécuté."
                        </p>
<div bis_size='{"x":999,"y":6775,"w":328,"h":57,"abs_x":1479,"abs_y":6818}' className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
<div bis_size='{"x":999,"y":6792,"w":40,"h":40,"abs_x":1479,"abs_y":6835}' className="w-10 h-10 rounded-full bg-gradient-to-br from-green-900 to-zinc-900 flex items-center justify-center text-white text-xs font-semibold ring-1 ring-white/10">TM</div>
<div bis_size='{"x":1055,"y":6794,"w":210,"h":36,"abs_x":1535,"abs_y":6837}'>
<div bis_size='{"x":1055,"y":6794,"w":210,"h":20,"abs_x":1535,"abs_y":6837}' className="text-white text-sm font-medium">Thomas Martin</div>
<div bis_size='{"x":1055,"y":6814,"w":210,"h":16,"abs_x":1535,"abs_y":6857}' className="text-zinc-500 text-xs">Head of Growth · FinTech (200 pers.)</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":6961,"w":1490,"h":1107,"abs_x":480,"abs_y":7004}' className="py-24 px-6 relative overflow-hidden" id="demo">
<div bis_size='{"x":0,"y":6961,"w":1490,"h":1107,"abs_x":480,"abs_y":7004}' className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div bis_size='{"x":0,"y":7568,"w":500,"h":500,"abs_x":480,"abs_y":7611}' className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div bis_size='{"x":105,"y":7057,"w":1280,"h":915,"abs_x":585,"abs_y":7100}' className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div bis_size='{"x":106,"y":7058,"w":1278,"h":913,"abs_x":586,"abs_y":7101}' className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div bis_size='{"x":170,"y":7122,"w":551,"h":785,"abs_x":650,"abs_y":7165}' className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<div bis_size='{"x":170,"y":7311,"w":220,"h":26,"abs_x":650,"abs_y":7354}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-xs uppercase font-medium tracking-wide mb-6 w-fit">
<span bis_size='{"x":183,"y":7321,"w":6,"h":6,"abs_x":663,"abs_y":7364}' className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-signal"></span>
                            Audit Stratégique Offert
                        </div>
<h2 bis_size='{"x":170,"y":7361,"w":551,"h":96,"abs_x":650,"abs_y":7404}' className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Déployez vos premiers<br bis_size='{"x":673,"y":7355,"w":0,"h":59,"abs_x":1153,"abs_y":7398}'/>Agents IA B2B.
                        </h2>
<p bis_size='{"x":170,"y":7481,"w":448,"h":117,"abs_x":650,"abs_y":7524}' className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            En 15 minutes, découvrez comment notre suite d'agents s'intègre à votre CRM pour remplacer l'outbound générique par un système prédictible et scalable.
                        </p>
<div bis_size='{"x":170,"y":7630,"w":551,"h":104,"abs_x":650,"abs_y":7673}' className="space-y-4 mb-8">
<div bis_size='{"x":170,"y":7630,"w":551,"h":24,"abs_x":650,"abs_y":7673}' className="flex items-center gap-3">
<div bis_size='{"x":170,"y":7630,"w":24,"h":24,"abs_x":650,"abs_y":7673}' className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon aria-hidden="true" bis_size='{"x":175,"y":7635,"w":14,"h":14,"abs_x":655,"abs_y":7678}' icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span bis_size='{"x":206,"y":7632,"w":258,"h":20,"abs_x":686,"abs_y":7675}' className="text-sm text-zinc-300">Audit de votre ICP &amp; signaux pertinents</span>
</div>
<div bis_size='{"x":170,"y":7670,"w":551,"h":24,"abs_x":650,"abs_y":7713}' className="flex items-center gap-3">
<div bis_size='{"x":170,"y":7670,"w":24,"h":24,"abs_x":650,"abs_y":7713}' className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon aria-hidden="true" bis_size='{"x":175,"y":7675,"w":14,"h":14,"abs_x":655,"abs_y":7718}' icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span bis_size='{"x":206,"y":7672,"w":299,"h":20,"abs_x":686,"abs_y":7715}' className="text-sm text-zinc-300">Démonstration des agents en condition réelle</span>
</div>
<div bis_size='{"x":170,"y":7710,"w":551,"h":24,"abs_x":650,"abs_y":7753}' className="flex items-center gap-3">
<div bis_size='{"x":170,"y":7710,"w":24,"h":24,"abs_x":650,"abs_y":7753}' className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon aria-hidden="true" bis_size='{"x":175,"y":7715,"w":14,"h":14,"abs_x":655,"abs_y":7758}' icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span bis_size='{"x":206,"y":7712,"w":174,"h":20,"abs_x":686,"abs_y":7755}' className="text-sm text-zinc-300">Aucun engagement requis</span>
</div>
</div>
</div>

<div bis_size='{"x":769,"y":7122,"w":551,"h":785,"abs_x":1249,"abs_y":7165}' className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
<div bis_size='{"x":770,"y":7123,"w":549,"h":783,"abs_x":1250,"abs_y":7166}' className="cal-inline-container" id="my-cal-inline-15min" style={{width: '100%', height: '100%', overflow: 'scroll'}}>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style></div>

</div>
</div>
</div>
</section>
</main>

<footer bis_size='{"x":0,"y":8068,"w":1490,"h":398,"abs_x":480,"abs_y":8111}' className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div bis_size='{"x":105,"y":8149,"w":1280,"h":277,"abs_x":585,"abs_y":8192}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":129,"y":8149,"w":1232,"h":164,"abs_x":609,"abs_y":8192}' className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div bis_size='{"x":129,"y":8149,"w":389,"h":164,"abs_x":609,"abs_y":8192}' className="col-span-2 pr-8">
<a aria-label="Retour à l'accueil GTMlab" bis_size='{"x":129,"y":8149,"w":357,"h":36,"abs_x":609,"abs_y":8192}' className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg mb-6 group" href="/">
<div bis_size='{"x":129,"y":8149,"w":36,"h":36,"abs_x":609,"abs_y":8192}' className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-orange-500/5 relative overflow-hidden group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-all duration-300">
<iconify-icon bis_size='{"x":137,"y":8157,"w":20,"h":20,"abs_x":617,"abs_y":8200}' className="text-white group-hover:text-orange-500 transition-colors duration-300" icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                        GTMlab
                    </a>
<p bis_size='{"x":129,"y":8209,"w":320,"h":68,"abs_x":609,"abs_y":8252}' className="text-zinc-500 mb-6 leading-relaxed max-w-xs">
                        The 1st AI co-pilot for Strategic Outbound. GTMlab remplace l'outbound générique par une suite d'agents IA pilotés par des experts.
                    </p>
</div>
<div bis_size='{"x":550,"y":8149,"w":178,"h":164,"abs_x":1030,"abs_y":8192}' className="flex flex-col gap-4">
<h4 bis_size='{"x":550,"y":8149,"w":178,"h":20,"abs_x":1030,"abs_y":8192}' className="text-white font-medium">Plateforme</h4>
<a bis_size='{"x":550,"y":8185,"w":178,"h":20,"abs_x":1030,"abs_y":8228}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">ICP Refinement</a>
<a bis_size='{"x":550,"y":8221,"w":178,"h":20,"abs_x":1030,"abs_y":8264}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Account Research</a>
<a bis_size='{"x":550,"y":8257,"w":178,"h":20,"abs_x":1030,"abs_y":8300}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Sales Allocation</a>
<a bis_size='{"x":550,"y":8293,"w":178,"h":20,"abs_x":1030,"abs_y":8336}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Warm Outreach</a>
</div>
<div bis_size='{"x":761,"y":8149,"w":178,"h":164,"abs_x":1241,"abs_y":8192}' className="flex flex-col gap-4">
<h4 bis_size='{"x":761,"y":8149,"w":178,"h":20,"abs_x":1241,"abs_y":8192}' className="text-white font-medium">Ressources</h4>
<a bis_size='{"x":761,"y":8185,"w":178,"h":20,"abs_x":1241,"abs_y":8228}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Blog &amp; Playbooks</a>
<a bis_size='{"x":761,"y":8221,"w":178,"h":20,"abs_x":1241,"abs_y":8264}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Revenue Orchestration</a>
<a bis_size='{"x":761,"y":8257,"w":178,"h":20,"abs_x":1241,"abs_y":8300}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Stratégie GTM</a>
</div>
<div bis_size='{"x":971,"y":8149,"w":178,"h":164,"abs_x":1451,"abs_y":8192}' className="flex flex-col gap-4">
<h4 bis_size='{"x":971,"y":8149,"w":178,"h":20,"abs_x":1451,"abs_y":8192}' className="text-white font-medium">Société</h4>
<a bis_size='{"x":971,"y":8185,"w":178,"h":20,"abs_x":1451,"abs_y":8228}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">À propos</a>
<a bis_size='{"x":971,"y":8221,"w":178,"h":20,"abs_x":1451,"abs_y":8264}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Contact</a>
<a bis_size='{"x":971,"y":8257,"w":178,"h":20,"abs_x":1451,"abs_y":8300}' className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Confidentialité</a>
</div>
</div>
<div bis_size='{"x":129,"y":8377,"w":1232,"h":49,"abs_x":609,"abs_y":8420}' className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div bis_size='{"x":129,"y":8410,"w":217,"h":16,"abs_x":609,"abs_y":8453}' className="text-zinc-600 text-xs">
                    © 2024 GTMlab. Tous droits réservés.
                </div>
</div>
</div>
</footer>


    </>
  );
}
