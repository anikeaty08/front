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



      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              threshold: 0.1,
              rootMargin: "0px 0px -50px 0px"
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.style.animationPlayState = 'running';
                      entry.target.style.opacity = '1';
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.fade-in').forEach(el => {
              el.style.opacity = '0';
              observer.observe(el);
          });
      });
    


      window.addEventListener('scroll', () => { const bg = document.querySelector('.fixed.z-0'); if(bg) { bg.style.transform = 'translateY(-' + (window.scrollY * 0.1) + 'px)'; } });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed -inset-[10%] w-[120%] h-[120%] z-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-20 w-[600px] h-[600px] bg-orange-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
<div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-pink-900/20 via-purple-900/10 to-transparent blur-3xl animate-shade pointer-events-none z-0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/60 backdrop-blur-2xl transition-all duration-500 ease-out">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white hover:text-pink-400 transition-colors flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 group-hover:border-pink-500/50 transition-all duration-300">
<span className="iconify text-pink-500 group-hover:scale-110 transition-transform duration-300" data-icon="lucide:terminal" data-width="16"></span>
</div>
          CHRIS
        </a>
<div className="flex items-center gap-8 text-sm font-medium">
<div className="hidden md:flex gap-6">
<a className="text-neutral-400 hover:text-white transition-colors" href="#about">
              À propos
            </a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#vision">
              Vision
            </a>
</div>
<a className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-pink-500/10 hover:border-pink-500/50 hover:text-pink-400 transition-all duration-300 text-xs" href="#contact">
            Contact
          </a>
</div>
</div>
</nav>
<main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

<section className="flex flex-row items-center justify-between gap-6 lg:gap-16 mb-32 fade-in">

<div className="flex-1 flex flex-col items-start gap-5 sm:gap-6 min-w-0">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/5 border border-pink-500/10 text-pink-400 text-[10px] sm:text-xs font-medium tracking-wide whitespace-nowrap">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
</span>
            Étudiant &amp; Explorateur
          </div>
<h1 className="text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.15] break-words">
            Info &amp;
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-500 to-purple-400 animate-gradient">
              systèmes.
            </span>
</h1>
<p className="text-xs sm:text-lg text-neutral-400 font-light leading-relaxed max-w-xl">
            J’explore et je démystifie la cybersécurité et la tech. Rendre
            l'incompréhensible, utile.
          </p>
<div className="flex flex-col sm:flex-row gap-3 mt-1 w-full sm:w-auto">
<a className="inline-flex justify-center items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-lg font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-colors whitespace-nowrap" href="#vision">
              Vision
              <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</a>
</div>
</div>

<div className="shrink-0 w-44 sm:w-72 lg:w-[28rem] relative group perspective-1000">
<div className="relative w-full aspect-[3/4] rounded-xl sm:rounded-2xl transition-all duration-700 ease-out transform group-hover:rotate-0 rotate-2">

<div className="absolute -inset-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-500 rounded-xl sm:rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-700"></div>

<div className="relative h-full w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
<img alt="Chris" className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop'; this.nextElementSibling.style.display='flex';" src="YOUR_IMAGE_PATH_HERE"/>

<div className="absolute inset-0 hidden flex-col items-center justify-center bg-neutral-900 text-center p-2 z-20">
<span className="iconify text-pink-500" data-icon="lucide:image" data-width="20"></span>
</div>
</div>
</div>
</div>
</section>
<section className="w-full overflow-hidden mb-24 fade-in delay-100 opacity-60 pointer-events-none select-none py-4 border-y border-white/5 bg-neutral-900/20 backdrop-blur-sm">
<div className="relative flex w-full overflow-x-hidden">
<div className="animate-marquee whitespace-nowrap flex items-center gap-16 text-4xl sm:text-6xl font-bold text-white/5 uppercase tracking-tighter">
<span>AI Engineering</span>
<span className="text-pink-500/20">●</span>
<span>Cybersecurity</span>
<span className="text-purple-500/20">●</span>
<span>Systems</span>
<span className="text-blue-500/20">●</span>
<span>Automation</span>
<span className="text-orange-500/20">●</span>
<span>Cloud Native</span>
<span className="text-green-500/20">●</span>
<span>AI Engineering</span>
<span className="text-pink-500/20">●</span>
<span>Cybersecurity</span>
<span className="text-purple-500/20">●</span>
<span>Systems</span>
<span className="text-blue-500/20">●</span>
<span>Automation</span>
<span className="text-orange-500/20">●</span>
<span>Cloud Native</span>
<span className="text-green-500/20">●</span>
</div>
<div className="absolute top-0 animate-marquee whitespace-nowrap flex items-center gap-16 text-4xl sm:text-6xl font-bold text-white/5 uppercase tracking-tighter" style={{left: '100%'}}>
<span>AI Engineering</span>
<span className="text-pink-500/20">●</span>
<span>Cybersecurity</span>
<span className="text-purple-500/20">●</span>
<span>Systems</span>
<span className="text-blue-500/20">●</span>
<span>Automation</span>
<span className="text-orange-500/20">●</span>
<span>Cloud Native</span>
<span className="text-green-500/20">●</span>
<span>AI Engineering</span>
<span className="text-pink-500/20">●</span>
<span>Cybersecurity</span>
<span className="text-purple-500/20">●</span>
<span>Systems</span>
<span className="text-blue-500/20">●</span>
<span>Automation</span>
<span className="text-orange-500/20">●</span>
<span>Cloud Native</span>
<span className="text-green-500/20">●</span>
</div>
</div>
</section>

<section className="mb-32 fade-in delay-200 max-w-2xl mx-auto lg:mx-0" id="about">
<h2 className="text-lg font-medium text-white mb-8 flex items-center gap-2">
<span className="p-1 rounded bg-pink-500/10 text-pink-500">
<span className="iconify" data-icon="lucide:user" data-width="16"></span>
</span>
          Authenticité &amp; Lucidité
        </h2>
<div className="space-y-6 text-neutral-400 font-light leading-relaxed text-base md:text-lg">
<p>
            Je suis étudiant en informatique, passionné par la compréhension des
            systèmes technologiques plutôt que par la simple exécution d’outils.
          </p>
<p>
            Je m’intéresse particulièrement à la manière dont les métiers tech
            évoluent, à la valeur réelle des certifications et aux choix de
            parcours en informatique (cyber, cloud, IA, dev…). J’ai longtemps
            cherché "la bonne techno à apprendre", avant de comprendre que ce
            qui compte vraiment, ce sont les
            <strong className="text-white font-medium decoration-pink-500/30 underline decoration-2 underline-offset-2">
              fondations et la logique
            </strong>
            .
          </p>
<p>
            Aujourd’hui, je construis ma progression en apprenant, en
            expérimentant et en partageant ce que je comprends — sans jargon
            inutile.
          </p>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-32 fade-in delay-300" id="vision">

<div className="lg:col-span-2 relative group overflow-hidden rounded-3xl bg-neutral-900/30 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 hover:border-pink-500/40 transition-all duration-700 ease-out">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-neutral-800/50 flex items-center justify-center border border-white/5 group-hover:border-pink-500/20 group-hover:text-pink-400 transition-colors shadow-inner">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">
                Ce que je fais
              </h3>
</div>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
<span className="iconify text-green-400 mt-0.5 shrink-0" data-icon="lucide:graduation-cap" data-width="18"></span>
<span className="text-sm text-neutral-300 leading-snug">
                  Apprentissage structuré en informatique (réseaux, backend,
                  cybersécurité)
                </span>
</li>
<li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
<span className="iconify text-green-400 mt-0.5 shrink-0" data-icon="lucide:brain-circuit" data-width="18"></span>
<span className="text-sm text-neutral-300 leading-snug">
                  Analyse et vulgarisation de concepts techniques complexes
                </span>
</li>
<li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
<span className="iconify text-green-400 mt-0.5 shrink-0" data-icon="lucide:video" data-width="18"></span>
<span className="text-sm text-neutral-300 leading-snug">
                  Création de contenu éducatif autour de l’informatique
                </span>
</li>
<li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
<span className="iconify text-green-400 mt-0.5 shrink-0" data-icon="lucide:flask-conical" data-width="18"></span>
<span className="text-sm text-neutral-300 leading-snug">
                  Expérimentation de projets pour comprendre les bases
                </span>
</li>
</ul>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl bg-neutral-900/30 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 hover:border-red-500/40 transition-all duration-700 ease-out">
<div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-neutral-800/50 flex items-center justify-center border border-white/5 group-hover:border-red-500/20 group-hover:text-red-400 transition-colors shadow-inner">
<span className="iconify" data-icon="lucide:x-circle" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">
                Anti-Goals
              </h3>
</div>
<ul className="space-y-4 mb-6">
<li className="flex items-start gap-3 text-neutral-400">
<span className="iconify text-red-400 mt-1 shrink-0" data-icon="lucide:x" data-width="14"></span>
<span className="text-sm">
                  Vendre du rêve ou des promesses irréalistes
                </span>
</li>
<li className="flex items-start gap-3 text-neutral-400">
<span className="iconify text-red-400 mt-1 shrink-0" data-icon="lucide:x" data-width="14"></span>
<span className="text-sm">
                  Copier des roadmaps toutes faites sans comprendre
                </span>
</li>
<li className="flex items-start gap-3 text-neutral-400">
<span className="iconify text-red-400 mt-1 shrink-0" data-icon="lucide:x" data-width="14"></span>
<span className="text-sm">
                  Faire croire qu’une techno "garantit" un avenir
                </span>
</li>
</ul>
<div className="mt-auto pt-4 border-t border-white/5">
<span className="text-xs text-neutral-500 font-medium italic block text-center">
                "Je préfère la clarté à la hype."
              </span>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl bg-neutral-900/30 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-700 ease-out">
<div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-neutral-800/50 flex items-center justify-center border border-white/5 group-hover:border-purple-500/20 group-hover:text-purple-400 transition-colors shadow-inner">
<span className="iconify" data-icon="lucide:heart" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">
                Intérêts
              </h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-md bg-neutral-800/50 border border-white/5 text-xs text-neutral-300 hover:border-pink-500/30 hover:text-white transition-colors cursor-default">
                Informatique fondamentale
              </span>
<span className="px-3 py-1.5 rounded-md bg-neutral-800/50 border border-white/5 text-xs text-neutral-300 hover:border-pink-500/30 hover:text-white transition-colors cursor-default">
                Cybersécurité
              </span>
<span className="px-3 py-1.5 rounded-md bg-neutral-800/50 border border-white/5 text-xs text-neutral-300 hover:border-pink-500/30 hover:text-white transition-colors cursor-default">
                Certifications IT
              </span>
<span className="px-3 py-1.5 rounded-md bg-neutral-800/50 border border-white/5 text-xs text-neutral-300 hover:border-pink-500/30 hover:text-white transition-colors cursor-default">
                Systèmes
              </span>
<span className="px-3 py-1.5 rounded-md bg-neutral-800/50 border border-white/5 text-xs text-neutral-300 hover:border-pink-500/30 hover:text-white transition-colors cursor-default">
                Carrières Tech
              </span>
</div>
</div>
</div>

<div className="lg:col-span-2 relative group overflow-hidden rounded-3xl bg-neutral-900/30 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 hover:border-pink-500/40 transition-all duration-700 ease-out">
<div className="absolute inset-0 bg-gradient-to-l from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div>
<h3 className="text-xl font-medium text-white tracking-tight flex items-center gap-2">
<span className="iconify text-neutral-400" data-icon="lucide:share-2" data-width="20"></span>
                Contenu &amp; Partage
              </h3>
<p className="text-sm text-neutral-400 font-light mt-2 max-w-sm">
                Je partage régulièrement du contenu éducatif sur les métiers
                tech, les certifications et la réalité du terrain.
              </p>
</div>

<a className="px-5 py-2.5 bg-neutral-950 border border-white/10 rounded-lg text-sm text-white hover:border-pink-500/50 hover:text-pink-400 transition-all duration-300 flex items-center gap-2 group whitespace-nowrap shadow-lg" href="https://www.tiktok.com/@chriss0day?_r=1&amp;_t=ZN-92HepuXLKZa" rel="noopener noreferrer" target="_blank">
<span className="iconify" data-icon="simple-icons:tiktok" data-width="16"></span>
              Suivre sur TikTok
              <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</section>

<section className="mb-32 fade-in delay-500 max-w-3xl">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight">
            En ce moment
          </h2>
<div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[10px] text-green-400 flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
            ACTIF
          </div>
</div>
<div className="relative border-l border-white/10 ml-3 space-y-16">

<div className="relative pl-10 group">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-white/10 group-hover:bg-pink-500 group-hover:border-pink-400 transition-all duration-300 shadow-[0_0_10px_rgba(236,72,153,0.3)]"></span>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
<h3 className="text-lg font-medium text-white group-hover:text-pink-400 transition-colors">
                Portfolio Personnel
              </h3>
<span className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-white/5 px-2 py-1 rounded">
                Q4 2024
              </span>
</div>
<p className="text-sm text-neutral-400 font-light max-w-xl mb-4 leading-relaxed">
              Construction de mon portfolio, structuration de mes connaissances
              et identité numérique. Refonte complète de l'UI pour un aspect
              plus épuré.
            </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400 border border-white/5 px-2 py-1 rounded bg-neutral-900/50">
                Frontend
              </span>
<span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400 border border-white/5 px-2 py-1 rounded bg-neutral-900/50">
                UI/UX
              </span>
</div>
</div>

<div className="relative pl-10 group">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-white/10 group-hover:bg-blue-500 group-hover:border-blue-400 transition-all duration-300"></span>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
<h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                Ressources Débutants
              </h3>
<span className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-white/5 px-2 py-1 rounded">
                En planification
              </span>
</div>
<p className="text-sm text-neutral-400 font-light max-w-xl mb-4 leading-relaxed">
              Création de ressources simples pour les débutants en informatique.
              Ce portfolio évoluera avec mon parcours pour inclure des guides
              PDF.
            </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400 border border-white/5 px-2 py-1 rounded bg-neutral-900/50">
                Éducation
              </span>
<span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400 border border-white/5 px-2 py-1 rounded bg-neutral-900/50">
                Contenu
              </span>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-12 pb-8" id="contact">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h4 className="text-white font-medium mb-3">Restons en contact</h4>
<p className="text-sm text-neutral-400 mb-6 font-light">
              Ouvert aux discussions sur la tech, les études et les
              opportunités.
            </p>
<div className="flex flex-wrap gap-3">
<a className="text-neutral-300 text-xs font-medium hover:text-white transition-colors flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/5 hover:border-green-500/30 hover:bg-green-500/10 backdrop-blur-md" href="https://wa.me/905079223928" target="_blank">
<span className="iconify" data-icon="simple-icons:whatsapp" data-width="14"></span>
                WhatsApp
              </a>
<a className="text-neutral-300 text-xs font-medium hover:text-white transition-colors flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/10 backdrop-blur-md" href="https://www.linkedin.com/in/n-teko-chris-52109b1b1" target="_blank">
<span className="iconify" data-icon="simple-icons:linkedin" data-width="14"></span>
                LinkedIn
              </a>
<a className="text-neutral-300 text-xs font-medium hover:text-white transition-colors flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/5 hover:border-pink-500/30 hover:bg-pink-500/10 backdrop-blur-md" href="https://www.instagram.com/nteko_chris/" target="_blank">
<span className="iconify" data-icon="simple-icons:instagram" data-width="14"></span>
                Instagram
              </a>
<a className="text-neutral-300 text-xs font-medium hover:text-white transition-colors flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/10 backdrop-blur-md" href="https://www.tiktok.com/@chriss0day?_r=1&amp;_t=ZN-92HepuXLKZa" target="_blank">
<span className="iconify" data-icon="simple-icons:tiktok" data-width="14"></span>
                TikTok
              </a>
</div>
</div>
<div className="flex flex-col justify-end md:items-end">
<div className="text-right">
<div className="text-xl font-bold tracking-tighter text-white mb-1">
                CHRIS
              </div>
<p className="text-xs text-neutral-500">Construit pour apprendre.</p>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-wider text-neutral-600">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
<span>La valeur réside dans la compréhension</span>
</div>
<div>© 2024 Tous droits réservés.</div>
</div>
</footer>
</main>



    </>
  );
}
