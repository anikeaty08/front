import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Make canvas full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix characters (Katakana + Latin)
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const nums = '01';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Green text
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        // Randomly brighter green for some characters
        if(Math.random() > 0.95) {
             ctx.fillStyle = '#80FF80'; 
        } else {
             ctx.fillStyle = '#003300'; // Darker green for depth
             if(Math.random() > 0.5) ctx.fillStyle = '#00FF41'; // Standard Matrix green
        }

        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    setInterval(draw, 30);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas height="695" id="matrix-canvas" width="1536"></canvas>

<header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 rounded bg-green-900/20 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
<span className="icon-[lucide--terminal] text-xl text-green-500"></span>
</div>
<span className="group-hover:text-green-400 transition-colors text-lg font-bold text-white tracking-tight font-mono">NEO</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-green-400 transition-colors" href="#mission">La Mission</a>
<a className="hover:text-green-400 transition-colors" href="#systeme">Le Système</a>
<a className="hover:text-green-400 transition-colors" href="#tarifs">Accès Root</a>
<a className="hover:text-green-400 transition-colors" href="#avis">Logs</a>
</nav>

<button className="btn-glitch hidden sm:flex items-center gap-2 bg-white text-black px-5 py-2 rounded font-mono text-xs font-bold uppercase tracking-wider hover:bg-green-400 transition-colors">
<span>Réserver</span>
<span className="icon-[lucide--chevron-right] text-sm"></span>
</button>
</div>
</header>
<main className="">

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 z-10">
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tighter" data-text="BIENVENUE DANS LA MATRICE">
<span className="glitch-text block" data-text="ESCAPE GAME">ESCAPE GAME</span>
<span className="text-green-500 glitch-text" data-text="LA MATRICE">LA MATRICE</span>
</h1>
<p className="md:text-2xl text-xl text-neutral-400 font-mono max-w-lg border-green-500/50 border-l-2 pt-1 pb-1 pl-4">&gt; Es-tu vraiment l'élu ?</p>
<p className="leading-relaxed text-base text-neutral-400 max-w-xl">Tu as 60 minutes pour infiltrer le serveur central, décrypter les données et t'exfiltrer avant que l'IA de sécurité ne verrouille les issues.</p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="group relative inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-black px-8 py-3.5 rounded font-semibold transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(0,255,65,0.3)]">
<span>INITIALISER LA MISSION</span>
<span className="icon-[lucide--cpu] group-hover:rotate-90 transition-transform duration-500"></span>
</button>
<button className="inline-flex items-center gap-3 px-8 py-3.5 rounded border border-white/10 hover:border-green-500/50 bg-white/5 hover:bg-white/10 text-white transition-all backdrop-blur-md">
<span className="icon-[lucide--play-circle] text-green-500"></span>
<span>Voir le Trailer</span>
</button>
</div>
</div>

<div className="relative lg:h-[500px] flex items-center justify-center perspective-[1000px]">

<div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full opacity-50"></div>

<div className="relative w-full max-w-md bg-black/80 border border-green-500/30 rounded-xl p-1 shadow-2xl backdrop-blur-xl transform transition-transform hover:rotate-y-6 hover:rotate-x-6 duration-500 ease-out" style={{transformStyle: 'preserve-3d'}}>

<div className="bg-neutral-900 px-4 py-2 rounded-t-lg flex items-center gap-2 border-b border-white/5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
<div className="ml-auto text-[10px] font-mono text-neutral-500">root@the-glitch:~</div>
</div>

<div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-green-400 min-h-[300px] flex flex-col justify-between relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
<div className="space-y-2 z-20">
<p className=""><span className="text-blue-400">root@sys:</span><span className="text-white">~#</span> ./init_sequence.sh</p>
<p className="text-white">Initialisation du protocole d'évasion...</p>
<p>[OK] Chargement des modules neuronaux</p>
<p>[OK] Contournement du pare-feu <span className="text-yellow-400">[WARNING: Trace détectée]</span></p>
<p className="animate-pulse">[...] Déchiffrement de la clé m3GA_K3Y</p>
<div className="p-3 border border-red-500/30 bg-red-900/10 rounded text-red-400">
<span className="icon-[lucide--alert-triangle] inline-block mr-1 align-middle"></span>
                   ALERTE INTRUSION : AGENTS EN ROUTE
                 </div>
</div>
<div className="mt-4 pt-4 border-t border-green-500/20 flex justify-between items-center z-20">
<div className="flex flex-col">
<span className="text-neutral-500 text-[10px] uppercase">Difficulté</span>
<div className="flex gap-1 mt-1">
<div className="h-1.5 w-4 bg-green-500 rounded-sm"></div>
<div className="h-1.5 w-4 bg-green-500 rounded-sm"></div>
<div className="h-1.5 w-4 bg-green-500 rounded-sm"></div>
<div className="h-1.5 w-4 bg-green-500 rounded-sm"></div>
<div className="h-1.5 w-4 bg-neutral-700 rounded-sm"></div>
</div>
</div>
<div className="flex flex-col text-right">
<span className="text-neutral-500 text-[10px] uppercase">Status</span>
<span className="text-green-400 font-bold animate-pulse">EN LIGNE</span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-4 bg-neutral-900 border border-green-500/50 p-4 rounded-lg shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<span className="icon-[lucide--users] text-green-400 text-xl"></span>
<div>
<div className="text-[10px] text-neutral-400 uppercase tracking-wider">Joueurs</div>
<div className="text-sm font-bold text-white">3 - 6 Hackers</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-black/50 backdrop-blur-sm py-6 overflow-hidden relative z-10">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="flex gap-16 whitespace-nowrap animate-[marquee_20s_linear_infinite] hover:pause">

<div className="flex items-center gap-2 text-neutral-500 font-mono text-sm uppercase tracking-widest">
<span className="icon-[lucide--hash] text-green-800"></span> PROTOCOLE_ZERO
          </div>
<div className="flex items-center gap-2 text-neutral-500 font-mono text-sm uppercase tracking-widest">
<span className="icon-[lucide--shield-alert] text-green-800"></span> BLACK_ICE
          </div>
<div className="flex items-center gap-2 text-neutral-500 font-mono text-sm uppercase tracking-widest">
<span className="icon-[lucide--binary] text-green-800"></span> DED_SEC_V2
          </div>
<div className="flex items-center gap-2 text-neutral-500 font-mono text-sm uppercase tracking-widest">
<span className="icon-[lucide--globe] text-green-800"></span> ANONYMOUS_PROXY
          </div>
<div className="flex items-center gap-2 text-neutral-500 font-mono text-sm uppercase tracking-widest">
<span className="icon-[lucide--cpu] text-green-800"></span> NEURAL_NET
          </div>
<div className="flex items-center gap-2 text-neutral-500 font-mono text-sm uppercase tracking-widest">
<span className="icon-[lucide--eye-off] text-green-800"></span> GHOST_SHELL
          </div>

<div className="flex items-center gap-2 text-neutral-500 font-mono text-sm uppercase tracking-widest">
<span className="icon-[lucide--hash] text-green-800"></span> PROTOCOLE_ZERO
          </div>
<div className="flex items-center gap-2 text-neutral-500 font-mono text-sm uppercase tracking-widest">
<span className="icon-[lucide--shield-alert] text-green-800"></span> BLACK_ICE
          </div>
<div className="flex items-center gap-2 text-neutral-500 font-mono text-sm uppercase tracking-widest">
<span className="icon-[lucide--binary] text-green-800"></span> DED_SEC_V2
          </div>
<div className="flex items-center gap-2 text-neutral-500 font-mono text-sm uppercase tracking-widest">
<span className="icon-[lucide--globe] text-green-800"></span> ANONYMOUS_PROXY
          </div>
</div>
</div>
<style>
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .hover\:pause:hover { animation-play-state: paused; }
    </style>

<section className="py-24 max-w-7xl mx-auto px-6 relative" id="mission">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
          Votre objectif : <span className="text-green-500">Le Noyau</span>
</h2>
<p className="text-neutral-400 text-lg">
          L'architecture de la salle est conçue pour tester votre logique, votre coopération et votre résistance au stress. Ce n'est pas juste un jeu, c'est une simulation de crise.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="hacker-card bg-neutral-900/50 p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<span className="icon-[lucide--lock] text-4xl text-green-500"></span>
</div>
<div className="w-12 h-12 rounded bg-green-900/20 flex items-center justify-center mb-6 border border-green-500/20">
<span className="icon-[lucide--binary] text-2xl text-green-400"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-mono">1. Infiltration</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
            Pénétrez physiquement dans la salle des serveurs. Évitez les capteurs lasers et connectez votre terminal au port principal.
          </p>
</div>

<div className="hacker-card bg-neutral-900/50 p-8 rounded-2xl relative overflow-hidden group border-green-500/30">
<div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/40 shadow-[0_0_15px_rgba(0,255,65,0.2)]">
<span className="icon-[lucide--code-2] text-2xl text-green-400"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-mono">2. Déchiffrement</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
            Manipulez le code source. Résolvez des énigmes algorithmiques pour contourner les pare-feux de l'IA.
          </p>
</div>

<div className="hacker-card bg-neutral-900/50 p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<span className="icon-[lucide--wifi] text-4xl text-green-500"></span>
</div>
<div className="w-12 h-12 rounded bg-green-900/20 flex items-center justify-center mb-6 border border-green-500/20">
<span className="icon-[lucide--door-open] text-2xl text-green-400"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 font-mono">3. Exfiltration</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
            Récupérez les données cryptées et déverrouillez la sortie avant le redémarrage du système. 60 minutes chrono.
          </p>
</div>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur">
<div className="text-3xl font-mono font-bold text-white mb-1">60</div>
<div className="text-xs text-green-500 uppercase tracking-widest">Minutes</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur">
<div className="text-3xl font-mono font-bold text-white mb-1">20%</div>
<div className="text-xs text-green-500 uppercase tracking-widest">Réussite</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur">
<div className="text-3xl font-mono font-bold text-white mb-1">3-6</div>
<div className="text-xs text-green-500 uppercase tracking-widest">Joueurs</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur">
<div className="text-3xl font-mono font-bold text-white mb-1">4.9</div>
<div className="text-xs text-green-500 uppercase tracking-widest">Note Moyenne</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5" id="tarifs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">Tarifs d'Infiltration</h2>
<p className="text-neutral-400">Choisissez la taille de votre équipe d'intervention.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="relative bg-black border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/30 transition-colors">
<div className="mb-4">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Escouade Légère</span>
<div className="text-3xl font-bold text-white mt-2">30€ <span className="text-sm font-normal text-neutral-500">/joueur</span></div>
</div>
<ul className="space-y-3 mb-8 text-sm text-neutral-300 flex-1">
<li className="flex items-center gap-3">
<span className="icon-[lucide--check] text-green-500"></span> 3 Joueurs
              </li>
<li className="flex items-center gap-3">
<span className="icon-[lucide--check] text-green-500"></span> Difficulté Adaptative
              </li>
<li className="flex items-center gap-3">
<span className="icon-[lucide--check] text-green-500"></span> Photo souvenir cryptée
              </li>
</ul>
<button className="w-full py-3 rounded bg-white/5 border border-white/10 text-white font-mono hover:bg-white hover:text-black transition-colors uppercase text-xs font-bold tracking-wider">
              Réserver (3 Pers)
            </button>
</div>

<div className="relative bg-black border border-green-500/50 rounded-2xl p-8 flex flex-col shadow-[0_0_40px_rgba(0,255,65,0.1)] scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-lg">Recommandé</div>
<div className="mb-4">
<span className="text-xs font-mono text-green-400 uppercase tracking-widest">Standard Ops</span>
<div className="text-3xl font-bold text-white mt-2">26€ <span className="text-sm font-normal text-neutral-500">/joueur</span></div>
</div>
<ul className="space-y-3 mb-8 text-sm text-neutral-300 flex-1">
<li className="flex items-center gap-3">
<span className="icon-[lucide--check] text-green-500"></span> 4 à 5 Joueurs
              </li>
<li className="flex items-center gap-3">
<span className="icon-[lucide--check] text-green-500"></span> Ratio optimal espace/énigme
              </li>
<li className="flex items-center gap-3">
<span className="icon-[lucide--check] text-green-500"></span> Boisson "Antidote" offerte
              </li>
</ul>
<button className="w-full py-3 rounded bg-green-500 text-black font-mono hover:bg-green-400 transition-colors uppercase text-xs font-bold tracking-wider shadow-lg shadow-green-500/20">
              Réserver (4-5 Pers)
            </button>
</div>

<div className="relative bg-black border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/30 transition-colors">
<div className="mb-4">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Raid Complet</span>
<div className="text-3xl font-bold text-white mt-2">22€ <span className="text-sm font-normal text-neutral-500">/joueur</span></div>
</div>
<ul className="space-y-3 mb-8 text-sm text-neutral-300 flex-1">
<li className="flex items-center gap-3">
<span className="icon-[lucide--check] text-green-500"></span> 6 Joueurs
              </li>
<li className="flex items-center gap-3">
<span className="icon-[lucide--check] text-green-500"></span> Mode Chaos (Optionnel)
              </li>
<li className="flex items-center gap-3">
<span className="icon-[lucide--check] text-green-500"></span> Privatisation lounge
              </li>
</ul>
<button className="w-full py-3 rounded bg-white/5 border border-white/10 text-white font-mono hover:bg-white hover:text-black transition-colors uppercase text-xs font-bold tracking-wider">
              Réserver (6 Pers)
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden" id="avis">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="sticky top-32">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Logs de Connexion</h2>
<p className="text-neutral-400 mb-8 text-lg">
            Ce que les agents rebelles disent de leur expérience dans le Glitch. Taux de satisfaction : 99.9%.
          </p>
<div className="flex items-center gap-4">
<div className="flex -space-x-4">
<div className="w-12 h-12 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center text-xs font-mono">USR1</div>
<div className="w-12 h-12 rounded-full border-2 border-black bg-neutral-700 flex items-center justify-center text-xs font-mono">USR2</div>
<div className="w-12 h-12 rounded-full border-2 border-black bg-neutral-600 flex items-center justify-center text-xs font-mono">USR3</div>
</div>
<div className="text-sm text-neutral-500 font-mono">
<span className="text-green-500 font-bold">500+</span> Hackers certifiés
             </div>
</div>
</div>
<div className="space-y-6">

<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-xl backdrop-blur-sm">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-black p-[2px]">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center">
<span className="icon-[lucide--user] text-neutral-400"></span>
</div>
</div>
<div>
<div className="text-white font-mono text-sm">Sophie "Cipher" D.</div>
<div className="text-[10px] text-green-500 uppercase">Mission Réussie - 58min</div>
</div>
</div>
<div className="flex text-green-500 text-xs gap-0.5">
<span className="icon-[lucide--star]"></span><span className="icon-[lucide--star]"></span><span className="icon-[lucide--star]"></span><span className="icon-[lucide--star]"></span><span className="icon-[lucide--star]"></span>
</div>
</div>
<p className="text-neutral-300 text-sm leading-relaxed">
              "L'immersion est totale dès l'entrée. Le décor serveur est incroyable et les énigmes de piratage sont crédibles sans être trop techniques. On a eu chaud !"
            </p>
</div>

<div className="bg-neutral-900/50 border border-green-500/20 p-6 rounded-xl backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-black p-[2px]">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center">
<span className="icon-[lucide--user] text-neutral-400"></span>
</div>
</div>
<div>
<div className="text-white font-mono text-sm">Marc "Zero" L.</div>
<div className="text-[10px] text-red-500 uppercase">Échec Mission - Timeout</div>
</div>
</div>
<div className="flex text-green-500 text-xs gap-0.5">
<span className="icon-[lucide--star]"></span><span className="icon-[lucide--star]"></span><span className="icon-[lucide--star]"></span><span className="icon-[lucide--star]"></span><span className="icon-[lucide--star]"></span>
</div>
</div>
<p className="text-neutral-300 text-sm leading-relaxed">
              "On a échoué à 30 secondes de la fin... L'IA ne pardonne pas. L'ambiance sonore met une pression dingue. On reviendra pour la revanche."
            </p>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-xl backdrop-blur-sm">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-black p-[2px]">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center">
<span className="icon-[lucide--user] text-neutral-400"></span>
</div>
</div>
<div>
<div className="text-white font-mono text-sm">Team Alpha</div>
<div className="text-[10px] text-green-500 uppercase">Mission Réussie - 45min</div>
</div>
</div>
<div className="flex text-green-500 text-xs gap-0.5">
<span className="icon-[lucide--star]"></span><span className="icon-[lucide--star]"></span><span className="icon-[lucide--star]"></span><span className="icon-[lucide--star]"></span><span className="icon-[lucide--star]"></span>
</div>
</div>
<p className="text-neutral-300 text-sm leading-relaxed">
              "Le meilleur escape game de la région. Pas de cadenas à l'ancienne, que de la tech, des câbles et du code. Super accueil du Game Master."
            </p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black pt-16 pb-8 relative overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12 relative z-10">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<span className="icon-[lucide--terminal] text-green-500 text-xl"></span>
<span className="font-mono font-bold text-lg text-white">THE_GLITCH</span>
</div>
<p className="text-neutral-500 text-sm max-w-sm mb-6">
          Une expérience d'escape game nouvelle génération. Immersion technologique, scénario dystopique et défis cérébraux. Êtes-vous prêt à vous déconnecter ?
        </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-neutral-400 hover:text-green-500 hover:bg-white/10 transition-colors" href="#">
<span className="icon-[lucide--facebook]"></span>
</a>
<a className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-neutral-400 hover:text-green-500 hover:bg-white/10 transition-colors" href="#">
<span className="icon-[lucide--instagram]"></span>
</a>
<a className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-neutral-400 hover:text-green-500 hover:bg-white/10 transition-colors" href="#">
<span className="icon-[lucide--twitter]"></span>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Exploration</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-green-400 transition-colors" href="#">Le Scénario</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Nos Salles</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Cartes Cadeaux</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Base de données</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-green-400 transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">CGV</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-mono">
<p>© 2024 The Glitch. Tous droits réservés. System Version 2.0.4</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span>Système Stable</span>
</div>
</div>
</footer>



    </>
  );
}
