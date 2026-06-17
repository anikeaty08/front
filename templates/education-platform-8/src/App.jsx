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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        }
        window.addEventListener('resize', resize);
        resize();

        const nodes = [];
        const numNodes = 200;
        let baseAngleX = 0;
        let baseAngleY = 0;
        let mouseAngleX = 0;
        let mouseAngleY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        window.addEventListener('mousemove', (e) => {
            targetMouseY = (e.clientX - width / 2) * 0.0005;
            targetMouseX = (e.clientY - height / 2) * 0.0005;
        });

        for (let i = 0; i < numNodes; i++) {
            nodes.push({
                x: (Math.random() - 0.5) * 2000,
                y: (Math.random() - 0.5) * 2000,
                z: (Math.random() - 0.5) * 2000,
                radius: Math.random() * 1.5 + 0.5
            });
        }

        function rotate3D(x, y, z, ax, ay) {
            let cosY = Math.cos(ay), sinY = Math.sin(ay);
            let x1 = x * cosY - z * sinY;
            let z1 = z * cosY + x * sinY;
            
            let cosX = Math.cos(ax), sinX = Math.sin(ax);
            let y1 = y * cosX - z1 * sinX;
            let z2 = z1 * cosX + y * sinX;
            
            return { x: x1, y: y1, z: z2 };
        }

        function render() {
            ctx.clearRect(0, 0, width, height);
            
            baseAngleY += 0.0008;
            baseAngleX += 0.0004;
            
            mouseAngleX += (targetMouseX - mouseAngleX) * 0.05;
            mouseAngleY += (targetMouseY - mouseAngleY) * 0.05;

            let angleX = baseAngleX + mouseAngleX;
            let angleY = baseAngleY + mouseAngleY;

            let projectedNodes = [];

            nodes.forEach(node => {
                let rotated = rotate3D(node.x, node.y, node.z, angleX, angleY);
                let z = rotated.z + 1000;
                
                if (z > 0) {
                    let fov = 800;
                    let scale = fov / z;
                    let x2d = rotated.x * scale + width / 2;
                    let y2d = rotated.y * scale + height / 2;
                    
                    projectedNodes.push({ 
                        original: node,
                        x: x2d, 
                        y: y2d, 
                        z: rotated.z, 
                        scale: scale 
                    });
                }
            });

            ctx.lineWidth = 0.5;
            for (let i = 0; i < projectedNodes.length; i++) {
                for (let j = i + 1; j < projectedNodes.length; j++) {
                    let dx = projectedNodes[i].original.x - projectedNodes[j].original.x;
                    let dy = projectedNodes[i].original.y - projectedNodes[j].original.y;
                    let dz = projectedNodes[i].original.z - projectedNodes[j].original.z;
                    let dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
                    
                    if (dist < 280) {
                        let alpha = (1 - (dist / 280)) * 0.4;
                        ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(projectedNodes[i].x, projectedNodes[i].y);
                        ctx.lineTo(projectedNodes[j].x, projectedNodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            projectedNodes.forEach(node => {
                let alpha = Math.min(1, Math.max(0.1, (node.z + 1000) / 2000));
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.original.radius * node.scale, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(render);
        }
        render();
    
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
      
<div className="cyber-grid-container">

<canvas className="absolute inset-0 w-full h-full pointer-events-none opacity-40" height="1704" id="bg-canvas" width="786"></canvas>
<div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-orange-600/30 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
<div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-rose-700/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-1"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] bg-amber-500/20 rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-2"></div>
<div className="cyber-grid"></div>
</div>
<div className="scanlines"></div>
<header className="fixed top-0 w-full z-50 bg-[#030303]/70 backdrop-blur-xl border-b border-white/10">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="flex flex-col items-start leading-none">
<div className="text-orange-500 font-medium text-2xl tracking-tighter flex items-center -mb-1 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">UX</div>
<span className="text-lg font-semibold text-white tracking-tight font-montserrat">UnivX</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8 text-base font-medium text-zinc-300">
<a className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" href="#plateforme">Plateforme</a>
<a className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" href="#methode">Méthode</a>
<a className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" href="#tarifs">Tarifs</a>
</nav>
<div className="flex items-center gap-2 sm:gap-4">
<a className="flex items-center justify-center hover:text-white hover:bg-white/5 transition-all text-base font-medium text-zinc-300 h-10 rounded-full pr-4 pl-4" href="https://www.univx.ma/learn">Se connecter</a>
<a className="flex items-center justify-center hover:bg-orange-400 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] text-base font-medium text-white bg-orange-500 h-10 rounded-full pr-5 pl-5 shadow-[0_0_20px_rgba(249,115,22,0.5)]" href="https://www.univx.ma/learn/account/signup">S'enregistrer</a>
</div>
</div>
</header>
<main className="z-10 pt-24 pb-16 relative">
<section className="border-white/5 border-b pt-20 pb-24 relative">
<div className="text-center max-w-4xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.2)]">
<iconify-icon className="text-lg" icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Inscriptions ouvertes pour le nouveau semestre</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight mb-6 drop-shadow-2xl">
                    Réussis ton semestre <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">à la fac w jib la mention dialek</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg text-zinc-300 bg-[#030303]/40 max-w-2xl border-white/5 border rounded-2xl mx-auto mb-10 p-4 backdrop-blur-sm">Fini les cours incompréhensibles et le stress des partiels. UnivX t'accompagne avec des vidéos claires, des TDs et des examens corrigés pour valider tes modules haut la main.</p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
<a className="sm:w-auto flex items-center justify-center hover:bg-orange-400 transition-all text-base font-medium text-white bg-orange-500 w-full h-14 rounded-full pr-8 pl-8 shadow-[0_0_30px_rgba(249,115,22,0.6)]" href="https://www.univx.ma/learn/account/signup?">Commencer maintenant</a>
<a className="w-full sm:w-auto flex items-center justify-center h-14 px-8 rounded-full bg-white/5 border border-white/20 text-white text-base font-medium hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all" href="#fonctionnement">Voir le fonctionnement</a>
</div>
</div>
<div className="mt-20 relative mx-auto max-w-5xl px-6 z-10">
<div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.15)] group">
<div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10"></div>
<img alt="Étudiants qui réussissent" className="w-full h-80 md:h-[28rem] object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="z-20 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-70 group-hover:opacity-80 transition-opacity duration-700">
<style>
    @keyframes scrollCarousel {
      0%, 26% { transform: translateX(0%); }
      33%, 60% { transform: translateX(-33.3333%); }
      66%, 93% { transform: translateX(-66.6666%); }
      100% { transform: translateX(0%); }
    }
  </style>
<div className="flex w-[300%] h-full" style={{animation: 'scrollCarousel 8s infinite cubic-bezier(0.4, 0, 0.2, 1)'}}>
<img alt="Étudiants souriants devant des ordinateurs" className="shrink-0 w-1/3 h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47d1c0af-9f64-40e7-a11a-091873733831_1600w.webp"/>
<img alt="Application mobile UnivX" className="shrink-0 w-1/3 h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8e4de30-2404-4fc3-938e-9ca5d191f7f0_1600w.jpg"/>
<img alt="Students Focused During Classroom Lecture" className="shrink-0 w-1/3 h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b29de48-0e66-459e-93bf-f56b045a482e_1600w.webp"/>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent pointer-events-none"></div>
</div>
<div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 z-30 text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-xl">
<div className="inline-flex gap-2 text-xs font-medium text-orange-400 bg-orange-500/20 border-orange-500/30 border rounded-full mb-4 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center">Taux de réussite de 96%</div>
<h3 className="md:text-3xl text-2xl font-medium text-white tracking-tight mb-2 drop-shadow-md">Rejoins tes amis maintenant !</h3>
<p className="md:text-lg text-base text-zinc-300">Déjà plus de 2000 étudiants ont validé leurs semestres haut la main grâce à notre méthode d'apprentissage. Ach katsenna ?</p>
</div>
<div className="hidden md:flex flex-col bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shrink-0 shadow-2xl">
<div className="text-sm text-zinc-400 mb-2 font-medium">Étudiants actifs</div>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="text-2xl font-medium text-white tracking-tight">+2k</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#050505]/60 pt-24 pb-24 relative backdrop-blur-xl" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-4 drop-shadow-md">La fac machi s3iba, la fac khasha l'3win !</h2>
<p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">Nous savons ce que tu traverses. Le système universitaire n'est pas fait pour te faciliter la tâche.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-[#080808]/80 backdrop-blur-2xl border border-white/10 hover:border-orange-500/40 transition-colors group">
<div className="flex group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all bg-orange-500/10 w-14 h-14 border-orange-500/20 border rounded-full mb-6 items-center justify-center">
<iconify-icon className="text-2xl text-orange-400" icon="lucide:fast-forward" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Le rythme est trop rapide</h3>
<p className="leading-relaxed group-hover:text-zinc-300 transition-colors text-lg text-zinc-400">Les professeurs enchaînent les chapitres. Si tu rates une explication, c'est tout le module qui devient incompréhensible.</p>
</div>
<div className="p-8 rounded-2xl bg-[#080808]/80 backdrop-blur-2xl border border-white/10 hover:border-orange-500/40 transition-colors group">
<div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all">
<iconify-icon className="text-2xl text-orange-400" icon="lucide:help-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Manque de méthodologie</h3>
<p className="text-lg text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">Comprendre le cours ne suffit pas. Face à la feuille d'examen, tu ne sais pas par où commencer ni comment rédiger.</p>
</div>
<div className="p-8 rounded-2xl bg-[#080808]/80 backdrop-blur-2xl border border-white/10 hover:border-orange-500/40 transition-colors group">
<div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all">
<iconify-icon className="text-2xl text-orange-400" icon="lucide:zap" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Le stress des révisions</h3>
<p className="text-lg text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">À l'approche des partiels, tu te retrouves avec des piles de TDs non corrigés sans savoir ce qui va réellement tomber.</p>
</div>
</div>
</div>
</section>
<section className="z-10 pt-32 pb-32 relative" id="fonctionnement" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:w-2/3 p-6 rounded-3xl bg-[#050505]/40 backdrop-blur-md border border-white/5">
<h2 className="md:text-5xl leading-tight text-3xl font-medium text-white tracking-tight mb-6 drop-shadow-lg">Koulchi kayn f l'application, matkhmemch !</h2>
<p className="text-lg md:text-xl text-zinc-300">Notre plateforme repose sur 4 piliers fondamentaux conçus spécifiquement pour les étudiants des facultés marocaines.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group relative overflow-hidden rounded-2xl bg-[#080808]/70 backdrop-blur-xl border border-white/10 p-8 hover:border-orange-500/50 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-[60px] -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
<iconify-icon className="text-2xl text-orange-400" icon="lucide:video" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white">Lives interactifs</h3>
</div>
<p className="text-lg text-zinc-300 leading-relaxed relative z-10">Ne reste plus bloqué sur un concept. Participe à nos sessions en direct, pose tes questions et comprends enfin les points les plus difficiles du programme.</p>
</div>
<div className="group relative overflow-hidden rounded-2xl bg-[#080808]/70 backdrop-blur-xl border border-white/10 p-8 hover:border-orange-500/50 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-[60px] -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
<iconify-icon className="text-2xl text-orange-400" icon="lucide:play-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white">Vidéos explicatives</h3>
</div>
<p className="text-lg text-zinc-300 leading-relaxed relative z-10">Des cours denses résumés en vidéos claires et concises. Apprends à ton rythme avec des explications vulgarisées, disponibles 24h/24 et 7j/7.</p>
</div>
<div className="group relative overflow-hidden rounded-2xl bg-[#080808]/70 backdrop-blur-xl border border-white/10 p-8 hover:border-orange-500/50 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-[60px] -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
<iconify-icon className="text-2xl text-orange-400" icon="lucide:file-plus-2" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white">TDs corrigés</h3>
</div>
<p className="text-lg text-zinc-300 leading-relaxed relative z-10">La théorie ne sert à rien sans la pratique. Entraîne-toi efficacement avec notre large base de travaux dirigés résolus et expliqués étape par étape.</p>
</div>
<div className="group relative overflow-hidden rounded-2xl bg-[#080808]/70 backdrop-blur-xl border border-white/10 p-8 hover:border-orange-500/50 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-[60px] -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
<iconify-icon className="text-2xl text-orange-400" icon="lucide:graduation-cap" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white">Examens corrigés</h3>
</div>
<p className="text-lg text-zinc-300 leading-relaxed relative z-10">Sache exactement comment répondre le jour J. On te donne la méthodologie de rédaction et les astuces pour maximiser ta note finale.</p>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#050505]/40 z-10 border-white/10 border-t pt-32 pb-32 relative backdrop-blur-xl" id="plateforme">
<div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] bg-orange-500/10 rounded-full blur-[120px] -translate-y-1/2 -z-10"></div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 flex flex-col justify-center relative z-20">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm font-medium mb-6 backdrop-blur-md self-start">
<iconify-icon className="text-lg text-orange-400" icon="lucide:smartphone" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Ton campus dans ta poche</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 drop-shadow-md leading-tight">
                        Tout ton programme,<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">parfaitement structuré.</span>
</h2>
<p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed max-w-lg">
                        Accède à ton tableau de bord personnalisé et navigue facilement dans l'arborescence de tes modules. De la présentation du cours aux corrigés d'examens, tout est organisé pour une révision fluide et sans stress.
                    </p>
<ul className="space-y-5">
<li className="flex items-center gap-4 text-base md:text-lg text-zinc-300">
<div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/30 shrink-0">
<iconify-icon className="text-base text-orange-400" icon="lucide:layout-dashboard" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                            Tableau de bord intelligent et personnalisé
                        </li>
<li className="flex items-center gap-4 text-base md:text-lg text-zinc-300">
<div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/30 shrink-0">
<iconify-icon className="text-base text-orange-400" icon="lucide:layers" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                            Arborescence claire par chapitres et leçons
                        </li>
<li className="flex items-center gap-4 text-base md:text-lg text-zinc-300">
<div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/30 shrink-0">
<iconify-icon className="text-base text-orange-400" icon="lucide:activity" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                            Suivi de progression en temps réel
                        </li>
</ul>
</div>
<div className="order-1 lg:order-2 flex md:h-[700px] md:mt-0 h-[550px] mt-10 relative perspective-[2000px] items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent blur-[80px] rounded-full scale-75 -z-10"></div>


<div className="absolute left-[-5%] md:left-[0%] top-[5%] md:top-[15%] w-[260px] md:w-[320px] bg-[#050505] rounded-[2.5rem] md:rounded-[3rem] border-8 border-[#1a1a1a] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10 transform rotate-[-10deg] scale-[0.8] md:scale-85 opacity-60 hover:opacity-100 hover:rotate-0 hover:scale-[0.95] hover:z-50 transition-all duration-700 ease-out z-20 group cursor-pointer">
<div className="absolute top-0 inset-x-0 h-6 bg-[#1a1a1a] rounded-b-2xl w-32 mx-auto z-50 flex justify-center items-end pb-1.5">
<div className="w-10 h-1 bg-black rounded-full"></div>
</div>
<div className="flex items-center justify-between p-4 pt-10 bg-[#050505] border-b border-white/5 sticky top-0 z-40">
<div className="flex items-center gap-1.5">
<div className="text-orange-500 font-medium text-xl tracking-tighter leading-none">UX</div>
<div className="text-white font-medium text-sm leading-none mt-1 tracking-tight">UnivX</div>
</div>
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="text-zinc-400 text-xs" icon="lucide:search" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<iconify-icon className="text-zinc-300 text-xl" icon="lucide:menu" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="overflow-y-hidden select-none bg-[#050505] h-[510px] md:h-[540px] pb-10">
<div className="bg-gradient-to-br from-orange-600 to-orange-500/80 p-5 pb-10 relative overflow-hidden">
<div className="absolute right-0 top-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-8 -mt-8"></div>
<div className="z-10 text-xs font-medium text-orange-50 mb-1 relative">Bonjour Chaimae,</div>
<div className="text-xl font-medium tracking-tight text-white relative z-10 drop-shadow-sm">Bienvenue sur UnivX</div>
</div>
<div className="px-4 relative z-20 -mt-5">
<div className="mb-6 bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-xl overflow-hidden backdrop-blur-md">
<div className="p-3 border-b border-white/5 flex items-center justify-between">
<h3 className="text-sm font-medium text-white tracking-tight">Continuer l'apprentissage</h3>
</div>
<div className="p-3 flex gap-3 items-center">
<div className="w-20 h-14 rounded-lg bg-[#111] border border-white/10 flex items-center justify-center relative overflow-hidden shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 to-black/90 z-10"></div>
<div className="relative z-20 flex flex-col items-center justify-center w-full h-full p-1.5">
<div className="text-[6px] text-orange-500 font-semibold mb-0.5">UX UnivX</div>
<div className="text-[5px] text-white/70 uppercase tracking-widest text-center leading-tight">Préparation Intensive</div>
<div className="text-[8px] text-white font-medium uppercase mt-0.5">Fiscalité I</div>
</div>
</div>
<div className="flex-1">
<div className="leading-snug text-xs font-medium text-white mb-1.5 line-clamp-2">Fiscalité I - S5 - FSJES AIN CHOCK</div>
<span className="inline-flex text-[9px] uppercase font-medium text-red-400 tracking-wider bg-red-500/10 border-red-500/20 border rounded px-1.5 py-0.5">En cours</span>
</div>
</div>
</div>
<div className="">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<h3 className="text-sm font-medium text-white tracking-tight">Cours</h3>
<span className="bg-white/10 text-zinc-300 text-[9px] font-medium px-1.5 py-0.5 rounded-full">06</span>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-lg">
<div className="h-24 bg-zinc-900 relative p-2 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-10"></div>
<div className="absolute bottom-0 left-2 w-12 h-14 bg-zinc-800 rounded-t-lg z-0 opacity-50"></div>
<div className="relative z-20 flex flex-col items-center justify-center h-full pt-1">
<div className="text-[7px] text-orange-500 font-medium tracking-tight mb-1">UX UnivX</div>
<div className="text-[6px] text-zinc-300 uppercase tracking-widest mb-1">Formation</div>
<div className="text-[9px] uppercase font-medium text-white tracking-wider text-center">Comptabilité générale</div>
</div>
</div>
<div className="p-3 bg-[#0a0a0a] relative z-20">
<h4 className="leading-snug text-xs font-medium text-white mb-1.5 line-clamp-1">Comptabilité générale - S1</h4>
<div className="text-[10px] text-zinc-500 flex items-center gap-1.5 font-medium">
<span>7 Leçons</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-[-5%] md:right-[0%] bottom-0 md:bottom-[5%] w-[290px] md:w-[340px] bg-[#0a0a0a] rounded-[2.5rem] md:rounded-[3rem] border-8 border-[#1a1a1a] shadow-[-20px_20px_60px_rgba(0,0,0,0.9),_0_0_30px_rgba(249,115,22,0.2)] overflow-hidden ring-1 ring-white/10 transform rotate-[8deg] scale-[0.9] md:scale-95 opacity-90 hover:opacity-100 hover:rotate-0 hover:scale-[1.02] hover:z-50 transition-all duration-700 ease-out z-30 group">
<div className="absolute top-0 inset-x-0 h-7 bg-[#1a1a1a] rounded-b-3xl w-40 mx-auto z-50 flex justify-center items-end pb-1.5">
<div className="w-12 h-1.5 bg-black rounded-full"></div>
</div>
<div className="h-[580px] md:h-[620px] overflow-y-auto hide-scrollbar bg-[#050505]">
<div className="flex items-center justify-between p-4 pt-10 bg-[#0a0a0a] sticky top-0 z-40 border-b border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-300 text-xl" icon="lucide:chevron-left" style={{strokeWidth: '2'}}></iconify-icon>
<div className="text-white font-medium text-sm tracking-tight truncate w-44 md:w-52">Fiscalité I - S5 - FSJES AIN CHOCK</div>
</div>
<iconify-icon className="text-zinc-300 text-xl" icon="lucide:more-vertical" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<div className="overflow-hidden bg-[#11141e] border-white/5 border-b pt-6 pr-6 pb-8 pl-6 relative animate-auto-scroll">
<style>
        @keyframes autoScrollMockup {
            0%, 15% { margin-top: 0px; }
            45%, 55% { margin-top: -160px; }
            85%, 100% { margin-top: 0px; }
        }
        .animate-auto-scroll {
            animation: autoScrollMockup 14s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            will-change: margin-top;
        }
    </style>
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="flex items-center justify-between mb-6 relative z-10 cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-6 md:w-8 font-medium text-orange-500 text-sm md:text-base">01</div>
<div className="">
<h2 className="text-base md:text-lg font-medium text-white tracking-tight leading-tight group-hover:text-orange-400 transition-colors">Partie I : La taxe sur la valeur ajoutée</h2>
<p className="text-xs text-zinc-500 mt-1">3 éléments • Progression : 0%</p>
</div>
</div>
<iconify-icon className="text-zinc-400 text-xl group-hover:text-white transition-colors" icon="lucide:chevron-up" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="pl-10 md:pl-12 space-y-2 relative z-10">
<div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 text-red-400 group-hover:scale-110 group-hover:bg-red-500/20 transition-all shadow-[0_0_10px_rgba(239,68,68,0.2)]">
<iconify-icon className="text-sm" icon="lucide:radio" style={{strokeWidth: '2.5'}}></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-white mb-1 tracking-tight">Live 1 : Session de révision</h3>
<p className="text-xs text-zinc-500 flex items-center gap-1.5">
<span className="text-orange-400 font-medium">Mardi 5 avril</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="">20h00</span>
</p>
</div>
<button className="text-[10px] uppercase hover:bg-orange-400 transition-colors font-semibold text-white tracking-wider bg-orange-500 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_0_15px_rgba(249,115,22,0.3)] -translate-x-8">Rejoindre</button>
</div>
<div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-[0_0_10px_rgba(249,115,22,0.2)]">
<iconify-icon className="text-sm" icon="lucide:play" style={{fill: 'currentColor'}}></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-white mb-1 tracking-tight">Vidéo : Correction TD</h3>
<p className="text-xs text-zinc-500 flex items-center gap-1.5">
<span className="text-zinc-400">Série d'exercices 1</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="">45m 20s</span>
</p>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<iconify-icon className="text-sm" icon="lucide:file-text" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-white mb-1 tracking-tight">Fiche : Correction exam</h3>
<p className="text-xs text-zinc-500 flex items-center gap-1.5">
<span className="text-zinc-400">Examen normal 2023</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="">PDF (2.4 MB)</span>
</p>
</div>
<iconify-icon className="text-zinc-500 text-lg group-hover:text-white transition-colors" icon="lucide:download"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-center border-b border-white/5 bg-[#0a0a0a] px-2 sticky top-[68px] z-30 shadow-lg">
<button className="flex-1 py-4 text-xs font-medium text-zinc-500 tracking-wider uppercase hover:text-zinc-300 transition-colors">À propos</button>
<button className="flex-1 py-4 text-xs font-medium text-zinc-500 tracking-wider uppercase hover:text-zinc-300 transition-colors">Ajouté récemment</button>
<button className="flex-1 py-4 text-xs font-medium text-orange-500 tracking-wider uppercase border-b-[3px] border-orange-500 relative">Programme</button>
</div>
<div className="bg-[#050505] p-3 space-y-1 pb-24 relative z-20">
<div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group border border-transparent hover:border-white/5">
<div className="mt-1 flex-shrink-0 relative">
<div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_12px_rgba(249,115,22,0.5)] group-hover:scale-110 transition-transform">
<iconify-icon className="text-white text-xs md:text-sm" icon="lucide:check" style={{strokeWidth: '3'}}></iconify-icon>
</div>
</div>
<div className="flex-1">
<h3 className="text-sm md:text-base font-medium text-white mb-1.5 tracking-tight">Présentation du cours</h3>
<p className="text-xs md:text-sm text-zinc-500 flex items-center gap-1.5">
<span className="text-zinc-400">Vidéo</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="">5m 40s</span>
</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border-t border-white/5 group">
<div className="mt-0.5 w-6 md:w-8 font-medium text-zinc-500 text-sm md:text-base group-hover:text-zinc-300 transition-colors">02</div>
<div className="flex-1">
<h3 className="text-sm md:text-base font-medium text-white mb-1.5 leading-snug group-hover:text-orange-400 transition-colors tracking-tight">Partie I : La taxe sur la valeur ajoutée...</h3>
<p className="text-xs md:text-sm text-zinc-500">7 Leçons</p>
</div>
<iconify-icon className="md:text-xl group-hover:text-white transition-colors text-lg text-zinc-500 mt-0.5" height="72" icon="lucide:chevron-down" style={{strokeWidth: '1.5', color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
<div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border-t border-white/5 group">
<div className="mt-0.5 w-6 md:w-8 font-medium text-zinc-500 text-sm md:text-base group-hover:text-zinc-300 transition-colors">03</div>
<div className="flex-1">
<h3 className="text-sm md:text-base font-medium text-white mb-1.5 leading-snug group-hover:text-orange-400 transition-colors tracking-tight">Partie II : Impôt sur les sociétés (IS)</h3>
<p className="text-xs md:text-sm text-zinc-500">6 Leçons</p>
</div>
<iconify-icon className="text-zinc-500 text-lg md:text-xl mt-0.5 group-hover:text-white transition-colors" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border-t border-white/5 group">
<div className="mt-0.5 w-6 md:w-8 font-medium text-zinc-500 text-sm md:text-base group-hover:text-zinc-300 transition-colors">04</div>
<div className="flex-1">
<h3 className="text-sm md:text-base font-medium text-white mb-1.5 leading-snug group-hover:text-orange-400 transition-colors tracking-tight">Corrigés des examens</h3>
<p className="text-xs md:text-sm text-zinc-500">1 Leçon</p>
</div>
<iconify-icon className="text-zinc-500 text-lg md:text-xl mt-0.5 group-hover:text-white transition-colors" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-50"></div>
</div>
</div>
</div>
</section>
<section className="border-y bg-[#050505]/60 border-white/10 pt-24 pb-24 relative backdrop-blur-xl" id="methode" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="p-8 rounded-3xl bg-[#030303]/50 backdrop-blur-md border border-white/5">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-6 drop-shadow-md">La méthode dial l'prof dialek, dreb tye7 ! </h2>
<p className="text-lg text-zinc-300 mb-8 leading-relaxed">On ne se contente pas de recracher des livres. Notre approche suit la méthodologie exacte attendue par les professeurs d'université au Maroc.</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 bg-orange-500/20 rounded-full p-1.5 border border-orange-500/40 shadow-[0_0_10px_rgba(249,115,22,0.3)]">
<iconify-icon className="text-lg text-orange-400" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium text-xl mb-1 drop-shadow-sm tracking-tight">Ciblé sur les examens réels</h4>
<p className="text-lg text-zinc-400">On se concentre sur les chapitres et les exercices qui tombent le plus souvent aux partiels.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-orange-500/20 rounded-full p-1.5 border border-orange-500/40 shadow-[0_0_10px_rgba(249,115,22,0.3)]">
<iconify-icon className="text-lg text-orange-400" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium text-xl mb-1 drop-shadow-sm tracking-tight">Gain de temps massif</h4>
<p className="text-lg text-zinc-400">Plus besoin de passer des heures à déchiffrer un polycopié. Va à l'essentiel et révise plus vite.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-orange-500/20 rounded-full p-1.5 border border-orange-500/40 shadow-[0_0_10px_rgba(249,115,22,0.3)]">
<iconify-icon className="text-lg text-orange-400" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium text-xl mb-1 drop-shadow-sm tracking-tight">Confiance absolue</h4>
<p className="text-lg text-zinc-400">Arrive le jour de l'examen en sachant que tu as vu et compris tous les cas de figure possibles.</p>
</div>
</li>
</ul>
</div>
<div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl border border-white/20 overflow-hidden flex items-center justify-center p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
<img alt="Plateforme éducative" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#030303] via-[#030303]/80 to-transparent"></div>
<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center pointer-events-none p-8">
<div className="opacity-60 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMDUwNTA1Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMWExYTFhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] absolute inset-0 pointer-events-none"></div>
<style>
        [data-element-id="aura-emmi55l9536xsiz4b"] ~ div { display: none !important; }
    </style>
<div className="relative w-full max-w-sm rounded-2xl bg-[#030303]/90 border border-white/10 shadow-2xl overflow-hidden flex flex-col backdrop-blur-md pointer-events-auto">
<div className="h-12 border-b border-white/10 flex items-center px-5 gap-2 bg-gradient-to-r from-zinc-900/50 to-transparent">
<div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="p-6">
<div className="w-full h-36 bg-zinc-900/80 rounded-xl mb-5 flex items-center justify-center border border-white/10 relative overflow-hidden group/btn cursor-pointer">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621360841013-c76831f185b3?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover/btn:opacity-50 transition-opacity"></div>
<div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.6)] relative z-10 group-hover/btn:scale-110 transition-transform">
<iconify-icon className="text-2xl text-white ml-1" icon="lucide:play" style={{strokeWidth: '1.5', fill: 'currentColor'}}></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
</div>
<div className="space-y-3">
<div className="h-3 w-3/4 bg-zinc-800 rounded-full"></div>
<div className="h-3 w-1/2 bg-zinc-800 rounded-full"></div>
</div>
<div className="mt-8 space-y-3 max-h-[140px] overflow-y-auto pr-2 [&amp;::-webkit-scrollbar]:w-1.5 [&amp;::-webkit-scrollbar-track]:bg-transparent [&amp;::-webkit-scrollbar-thumb]:bg-zinc-700 [&amp;::-webkit-scrollbar-thumb]:rounded-full hover:[&amp;::-webkit-scrollbar-thumb]:bg-zinc-600">
<div className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/80 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-orange-400" icon="lucide:book-open" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Cours TVA (Prof Alami)</span>
</div>
<iconify-icon className="text-xl text-zinc-500" icon="lucide:download" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/80 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-orange-400" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Exercices avec corrigé</span>
</div>
<iconify-icon className="text-xl text-zinc-500" icon="lucide:download" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/80 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-orange-400" icon="lucide:file-text" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">TD Série 3 Corrigé (Prof Kadiri)</span>
</div>
<iconify-icon className="text-xl text-zinc-500" icon="lucide:download" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/80 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-orange-400" icon="lucide:file-text" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">TD Série 4 Corrigé (Prof Kadiri)</span>
</div>
<iconify-icon className="text-xl text-zinc-500" icon="lucide:download" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/80 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-orange-400" icon="lucide:clipboard-check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Examen Blanc 2025 (Prof Kadiri)</span>
</div>
<iconify-icon className="text-xl text-zinc-500" icon="lucide:download" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="relative w-full max-w-sm rounded-2xl bg-[#030303]/90 border border-white/10 shadow-2xl overflow-hidden flex flex-col backdrop-blur-md">
<div className="h-12 border-b border-white/10 flex items-center px-5 gap-2 bg-gradient-to-r from-zinc-900/50 to-transparent">
<div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="pt-6 pb-6 pl-6 pr-4 max-h-[380px] overflow-y-auto [&amp;::-webkit-scrollbar]:w-1.5 [&amp;::-webkit-scrollbar-track]:bg-transparent [&amp;::-webkit-scrollbar-thumb]:bg-zinc-700 [&amp;::-webkit-scrollbar-thumb]:rounded-full hover:[&amp;::-webkit-scrollbar-thumb]:bg-zinc-600">
<div className="w-full h-36 bg-zinc-900/80 rounded-xl mb-5 flex items-center justify-center border border-white/10 relative overflow-hidden group/btn cursor-pointer">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621360841013-c76831f185b3?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover/btn:opacity-50 transition-opacity"></div>
<div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.6)] relative z-10 group-hover/btn:scale-110 transition-transform">
<iconify-icon className="text-2xl text-white ml-1" icon="lucide:play" style={{strokeWidth: '1.5', fill: 'currentColor'}}></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
</div>
<div className="space-y-3">
<div className="h-3 w-3/4 bg-zinc-800 rounded-full"></div>
<div className="h-3 w-1/2 bg-zinc-800 rounded-full"></div>
</div>
<div className="mt-8 space-y-4">
<div className="flex hover:bg-zinc-800/80 transition-colors cursor-pointer bg-zinc-900/60 border-white/10 border rounded-xl p-4 items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-orange-400" icon="lucide:file-text" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">TD Série 3 Corrigé (Prof Kadiri)</span>
</div>
<iconify-icon className="text-xl text-zinc-500" icon="lucide:download" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/80 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-orange-400" icon="lucide:clipboard-check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Examen Blanc 2025 (Prof Kadiri)</span>
</div>
<iconify-icon className="text-xl text-zinc-500" icon="lucide:download" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/80 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-orange-400" icon="lucide:book-open" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Cours TVA (Prof Alami)</span>
</div>
<iconify-icon className="text-xl text-zinc-500" icon="lucide:download" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/80 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-orange-400" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Exercices avec corrigé</span>
</div>
<iconify-icon className="text-xl text-zinc-500" icon="lucide:download" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden z-10 pt-24 pb-24 relative" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 p-6 rounded-3xl bg-[#050505]/40 backdrop-blur-md border border-white/5 inline-block mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white drop-shadow-md">Ils ont sauvé leur semestre avec UnivX</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-[#080808]/80 backdrop-blur-2xl border border-white/10 relative shadow-xl hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
</div>
<p className="leading-relaxed text-lg text-zinc-300 mb-8">Chokran bzzf wllah</p>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="">
<div className="text-base font-medium text-white">Youssef B.</div>
<div className="text-sm text-zinc-500">Étudiant FSR (S1)</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-[#080808]/80 backdrop-blur-2xl border border-white/10 relative shadow-xl hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
</div>
<p className="leading-relaxed text-lg text-zinc-300 mb-8">Tri9 jdida daroulna tutorat fabor w dakchi kan zwin t9yedt f 2eme semestre</p>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<img alt="Sarah M." className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-inner" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="">
<div className="text-base font-medium text-white">Sarah M.</div>
<div className="text-sm text-zinc-500">Étudiante FSJES (S3)</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-[#080808]/80 backdrop-blur-2xl border border-white/10 relative shadow-xl hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-xl text-orange-500" icon="lucide:star" style={{fill: 'currentColor'}}></iconify-icon>
<iconify-icon className="text-xl text-zinc-600" height="20" icon="lucide:star" style={{color: 'rgb(82, 82, 91)'}} width="20"></iconify-icon>
</div>
<p className="text-lg text-zinc-300 mb-8 leading-relaxed">"Le format live est génial. Pouvoir poser des questions quand on bloque sur une étape d'un calcul, ça change tout par rapport à un amphi de 500 personnes."</p>
<div className="flex items-center gap-4 border-t border-white/10 pt-6">
<div className="">
<div className="text-base font-medium text-white">Amine R.</div>
<div className="text-sm text-zinc-500">Étudiant FST (S2)</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 bg-[#050505]/60 border-white/10 border-t pt-24 pb-24 relative backdrop-blur-xl" id="tarifs" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 bg-[#030303]/40 p-6 rounded-3xl inline-block mx-auto border border-white/5 backdrop-blur-md">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4 drop-shadow-md">Un investissement pour ta réussite</h2>
<p className="text-lg md:text-xl text-zinc-300">Des prix pensés pour le budget des étudiants.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mr-auto ml-auto gap-x-8 gap-y-8 items-center">
<div className="flex flex-col bg-[#080808]/80 h-full border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur-2xl">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Découverte</h3>
<div className="mb-6"><span className="text-4xl font-medium tracking-tight text-white drop-shadow-md">0 DH</span></div>
<p className="text-base text-zinc-400 mb-8 flex-grow">Idéal pour tester la plateforme et revoir les bases.</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-base text-zinc-300"><iconify-icon className="text-lg text-zinc-500" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>Accès aux vidéos d'introduction</li>
<li className="flex items-center gap-3 text-base text-zinc-300"><iconify-icon className="text-lg text-zinc-500" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>Fiches de cours synthétiques</li>
<li className="flex items-center gap-3 text-base text-zinc-600"><iconify-icon className="text-lg text-zinc-700" icon="lucide:minus-circle" style={{strokeWidth: '1.5'}}></iconify-icon>Sans lives ni TDs ni examens</li>
</ul>
<a className="flex items-center justify-center hover:bg-white/10 transition-all text-base font-medium text-white bg-white/5 w-full h-12 border-white/10 border rounded-full" href="https://www.univx.ma/learn/account/signup?">Créer un compte</a>
</div>
<div className="flex flex-col md:-mt-6 md:-mb-6 bg-[#0a0a0a]/90 h-full border-orange-500 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_40px_rgba(249,115,22,0.2)] backdrop-blur-2xl">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Par Module</h3>
<div className="mb-6 flex flex-col">
<div className="flex items-baseline gap-2">
<span className="text-5xl font-medium text-white tracking-tight drop-shadow-md">250 DH</span>
<span className="text-base text-zinc-400">/ semestre</span>
</div>
<span className="text-base text-zinc-500 line-through mt-2">au lieu de 500 DH</span>
</div>
<p className="text-base text-zinc-300 mb-8">Pour valider un module spécifique avec mention.</p>
<ul className="mb-10 space-y-4">
<li className="flex items-center gap-3 text-base text-zinc-200"><iconify-icon className="text-lg text-orange-400" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>Vidéos explicatives complètes</li>
<li className="flex items-center gap-3 text-base text-zinc-200"><iconify-icon className="text-lg text-orange-400" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>Séries de TDs corrigés en vidéo</li>
<li className="flex items-center gap-3 text-base text-zinc-200"><iconify-icon className="text-lg text-orange-400" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>Examens des années précédentes</li>
</ul>
<a className="mt-auto flex items-center justify-center hover:bg-orange-400 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] text-lg font-medium text-white bg-orange-500 w-full h-14 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)]" href="https://www.univx.ma/learn/account/signup?">Créer un compte</a>
</div>
<div className="relative flex flex-col bg-[#0a0a0a]/90 h-full border border-orange-500 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.3)] backdrop-blur-2xl md:-mt-6 md:-mb-6 z-20">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 bg-gradient-to-r from-orange-600 to-orange-400 text-white text-xs font-medium rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(249,115,22,0.5)] whitespace-nowrap">Recommandé</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Pack Semestre</h3>
<div className="mb-6 flex flex-col">
<div className="flex items-baseline gap-2">
<span className="text-5xl font-medium tracking-tight text-white drop-shadow-md">950 DH</span>
</div>
<span className="text-base text-zinc-500 line-through mt-2">au lieu de 1950 DH</span>
</div>
<p className="text-base text-zinc-300 mb-8 flex-grow">La garantie de valider l'intégralité de ton semestre avec un accompagnement optimal.</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-base text-zinc-200">
<iconify-icon className="text-lg text-orange-400" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>Accès total à tous les modules
        </li>
<li className="flex items-center gap-3 text-base text-zinc-200">
<iconify-icon className="text-lg text-orange-400" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>Méthodologie globale d'organisation
        </li>
<li className="flex items-center gap-3 text-base text-zinc-200">
<iconify-icon className="text-lg text-orange-400" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>Support prioritaire des professeurs
        </li>
</ul>
<a className="flex items-center justify-center hover:bg-orange-400 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] text-lg font-medium text-white bg-orange-500 w-full h-14 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)]" href="https://www.univx.ma/learn/account/signup?">Prendre le pack</a>
</div>
</div>
</div>
</section>
<section className="z-10 pt-32 pb-32 relative">
<div className="max-w-3xl mx-auto px-6 text-center bg-[#050505]/60 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 drop-shadow-lg">Prends ton avenir en main.</h2>
<p className="text-xl md:text-2xl text-zinc-300 mb-10">N'attends pas la veille des partiels pour réagir. Rejoins des milliers d'étudiants qui réussissent avec UnivX.</p>
<a className="inline-flex items-center justify-center hover:bg-orange-400 transition-all hover:shadow-[0_0_60px_rgba(249,115,22,0.8)] hover:scale-105 text-xl font-medium text-white bg-orange-500 h-16 rounded-full pr-12 pl-12 shadow-[0_0_40px_rgba(249,115,22,0.5)] scale-100" href="https://www.univx.ma/learn/account/signup?">Commencer à réviser</a>
</div>
</section>
</main>
<footer className="bg-[#020202]/90 z-10 border-white/10 border-t pt-16 pb-8 relative backdrop-blur-2xl">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 gap-x-12 gap-y-12">
<div className="md:col-span-1 scale-100" style={{maskImage: 'linear-gradient(100deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(100deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="flex flex-col items-start leading-none mb-4">
<div className="text-orange-500 font-medium text-xl tracking-tighter flex items-center -mb-1 drop-shadow-[0_0_5px_rgba(249,115,22,0.5)]">UX</div>
<span className="text-white font-medium text-base tracking-tight">UnivX</span>
</div>
<p className="leading-relaxed text-base text-zinc-400">La plateforme de référence pour la réussite universitaire au Maroc.</p>
</div>
<div className="">
<ul className="space-y-3 text-base text-zinc-500">
<li className=""></li>
<li className=""></li>
</ul>
</div>
<div className="">
<ul className="space-y-3 text-base text-zinc-500">
<li className=""></li>
<li className=""></li>
</ul>
</div>
<div className="">
<ul className="space-y-3 text-base text-zinc-500">
<li className=""></li>
<li className=""></li>
<li className=""></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 border-white/10 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-sm text-zinc-600">© 2026 UnivX.ma. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="lucide:instagram" style={{strokeWidth: '1.5'}}></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="lucide:facebook" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
