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



                    const courses = [
                        { name: "SQL Mastery", lessons: 11, icon: "database", color: "text-blue-400", grad: "group-hover:shadow-blue-500/20" },
                        { name: "Python Pro", lessons: 12, icon: "box", color: "text-yellow-400", grad: "group-hover:shadow-yellow-500/20" },
                        { name: "HTML5 Modern", lessons: 10, icon: "file-code-2", color: "text-orange-400", grad: "group-hover:shadow-orange-500/20" },
                        { name: "CSS3 Advanced", lessons: 12, icon: "palette", color: "text-sky-400", grad: "group-hover:shadow-sky-500/20" },
                        { name: "Javascript ES6+", lessons: 14, icon: "file-json", color: "text-yellow-300", grad: "group-hover:shadow-yellow-300/20" },
                        { name: "Python OOP", lessons: 11, icon: "boxes", color: "text-indigo-400", grad: "group-hover:shadow-indigo-500/20" },
                        { name: "React Ecosystem", lessons: 13, icon: "atom", color: "text-cyan-400", grad: "group-hover:shadow-cyan-500/20" },
                        { name: "Java Enterprise", lessons: 13, icon: "coffee", color: "text-red-400", grad: "group-hover:shadow-red-500/20" },
                        { name: "C Language", lessons: 13, icon: "cpu", color: "text-slate-300", grad: "group-hover:shadow-slate-500/20" },
                        { name: "AI Fundamentals", lessons: 9, icon: "brain-circuit", color: "text-purple-400", grad: "group-hover:shadow-purple-500/20" },
                    ];

                    courses.forEach(course => {
                        document.write(`
                            <div class="group relative bg-[#130f26] border border-white/5 rounded-xl p-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 ${course.grad} hover:shadow-lg">
                                <div class="flex items-start justify-between mb-4">
                                    <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${course.color}">
                                        <i data-lucide="${course.icon}" class="w-5 h-5"></i>
                                    </div>
                                    <span class="text-xs font-medium text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5 flex items-center gap-1">
                                        <i data-lucide="book-open" class="w-3 h-3"></i> ${course.lessons} leçons
                                    </span>
                                </div>
                                <h3 class="text-lg font-medium text-white mb-2 group-hover:text-violet-200 transition-colors">${course.name}</h3>
                                <div class="w-full h-1 bg-white/5 rounded-full mb-4 overflow-hidden">
                                    <div class="h-full bg-slate-700 w-0 group-hover:w-1/3 transition-all duration-700 rounded-full"></div>
                                </div>
                                <div class="flex items-center justify-between mt-auto">
                                    <span class="text-xs text-slate-500">Débutant - Intermédiaire</span>
                                    <button class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-violet-600 transition-colors">
                                        <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                                    </button>
                                </div>
                            </div>
                        `);
                    });
                


        // Init Icons
        lucide.createIcons();

        // Intro Animation Logic
        document.addEventListener('DOMContentLoaded', () => {
            const introScreen = document.getElementById('intro-screen');
            const terminalText = document.getElementById('terminal-text');
            const lines = ['npm install success', 'building assets...', 'starting server...'];
            
            // Typewriter effect
            let lineIndex = 0;
            let charIndex = 0;
            
            function typeLine() {
                if (lineIndex < lines.length) {
                    if (charIndex < lines[lineIndex].length) {
                        terminalText.innerHTML = lines[lineIndex].substring(0, charIndex + 1);
                        charIndex++;
                        setTimeout(typeLine, 50);
                    } else {
                        lineIndex++;
                        charIndex = 0;
                        setTimeout(typeLine, 300);
                    }
                }
            }
            
            typeLine();

            // Remove Intro
            setTimeout(() => {
                introScreen.classList.add('-translate-y-full');
            }, 2500);
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
      

<div className="fixed inset-0 z-[100] bg-[#0b061f] flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out cubic-bezier(0.77, 0, 0.175, 1)" id="intro-screen">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full"></div>
</div>
<div className="relative z-10 flex flex-col items-center">

<div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(124,58,237,0.6)] animate-bounce">
<i className="w-8 h-8" data-lucide="code-2"></i>
</div>

<h1 className="text-3xl font-bold tracking-[0.2em] text-white mb-2 intro-text-reveal">PROGMA</h1>
<p className="text-xs text-slate-500 uppercase tracking-widest intro-text-reveal" style={{animationDelay: '0.4s'}}>Loading Environment</p>

<div className="w-48 h-1 bg-white/10 rounded-full mt-8 overflow-hidden relative">
<div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 intro-loader-bar shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
</div>

<div className="mt-4 font-mono text-[10px] text-slate-600 opacity-60">
<span id="terminal-text"></span><span className="animate-pulse">_</span>
</div>
</div>
</div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0b061f]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]">
<i className="w-5 h-5" data-lucide="code-2"></i>
</div>
<span className="font-bold text-xl tracking-tight text-white">PROGMA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Formations</a>
<a className="hover:text-white transition-colors" href="#">À propos</a>
<a className="hover:text-white transition-colors" href="#">Témoignages</a>
</div>
<button className="hidden md:flex group relative px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all duration-300">
<span className="text-white group-hover:text-violet-200">Espace Étudiant</span>
<i className="w-4 h-4 ml-2 text-violet-400 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden z-10">
<div className="max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                Nouvelle Session : Inscriptions Ouvertes 2025
            </div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                Deviens acteur du digital avec <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 text-glow">PROGMA ACADEMY</span>
</h1>

<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Formations pratiques en code, IA et carrière IT. Transforme ton avenir avec la première académie tech marocaine pensée pour l'excellence.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg text-white font-medium hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                    Commencer gratuitement
                    <i className="w-4 h-4" data-lucide="zap"></i>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                    Contacte-nous
                    <i className="w-4 h-4" data-lucide="message-circle"></i>
</button>
</div>

<div className="relative mt-20 mx-auto max-w-5xl">
<div className="absolute inset-0 bg-gradient-to-t from-[#0b061f] via-transparent to-transparent z-10 h-full w-full"></div>
<div className="bg-[#130f26]/80 backdrop-blur-sm border border-white/10 rounded-xl p-2 shadow-2xl transform rotate-x-12 perspective-1000 opacity-90 animate-float">
<div className="bg-[#0b061f] rounded-lg border border-white/5 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded bg-violet-500/20 text-violet-400"><i className="w-4 h-4" data-lucide="code"></i></div>
<span className="text-xs text-slate-400">Progrès Coding</span>
</div>
<div className="text-2xl font-semibold text-white">85%</div>
<div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
<div className="h-full bg-violet-500 w-[85%]"></div>
</div>
</div>

<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded bg-pink-500/20 text-pink-400"><i className="w-4 h-4" data-lucide="activity"></i></div>
<span className="text-xs text-slate-400">Taux d'embauche</span>
</div>
<div className="text-2xl font-semibold text-white">95%</div>
<div className="flex items-center mt-3 gap-1">
<span className="block w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-[10px] text-green-400">Active hiring</span>
</div>
</div>

<div className="p-4 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-between">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">Next Lesson</span>
<span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded">Live</span>
</div>
<div className="text-sm font-medium text-white truncate">Introduction to React Hooks</div>
<div className="flex -space-x-2 mt-3">
<div className="w-6 h-6 rounded-full bg-slate-700 border border-[#0b061f]"></div>
<div className="w-6 h-6 rounded-full bg-slate-600 border border-[#0b061f]"></div>
<div className="w-6 h-6 rounded-full bg-slate-500 border border-[#0b061f] flex items-center justify-center text-[8px] text-white">+24</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm z-10 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
<div className="py-4 md:py-0 px-4 group">
<h3 className="text-3xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">500+</h3>
<p className="text-sm text-slate-500 uppercase tracking-widest">Étudiants formés</p>
</div>
<div className="py-4 md:py-0 px-4 group">
<h3 className="text-3xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">95%</h3>
<p className="text-sm text-slate-500 uppercase tracking-widest">Taux de réussite</p>
</div>
<div className="py-4 md:py-0 px-4 group">
<h3 className="text-3xl font-bold text-white mb-1 flex items-center justify-center gap-2 group-hover:text-yellow-400 transition-colors">
                        4.9/5 <i className="w-5 h-5 fill-current" data-lucide="star"></i>
</h3>
<p className="text-sm text-slate-500 uppercase tracking-widest">Note moyenne</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">À propos de <br/><span className="text-violet-400">PROGMA ACADEMY</span></h2>
<p className="text-slate-400 max-w-2xl text-lg">
                    La première académie marocaine dédiée à former la nouvelle génération de talents tech. 
                    Nous combinons excellence académique et pratique intensive.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-[#120c2b] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-violet-500/30 transition-all duration-500">
<div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-[80px] rounded-full group-hover:bg-violet-600/20 transition-all"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400 mb-6">
<i className="w-6 h-6" data-lucide="terminal-square"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Apprentissage Pratique</h3>
<p className="text-slate-400 mb-6">Fini la théorie ennuyeuse. Chez Progma, tu codes dès le premier jour sur des projets réels qui simulent l'environnement startup.</p>

<div className="bg-[#0b061f] border border-white/10 rounded-lg p-4 font-mono text-xs text-slate-300">
<div className="flex gap-1.5 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<p><span className="text-pink-400">const</span> student = <span className="text-violet-400">new</span> Developer();</p>
<p>student.<span className="text-blue-400">learn</span>(<span className="text-green-400">"Practical Skills"</span>);</p>
<p>student.<span className="text-blue-400">deploy</span>(<span className="text-green-400">"Production"</span>);</p>
</div>
</div>
</div>

<div className="bg-[#120c2b] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-pink-500/30 transition-all duration-500">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pink-500/10 to-transparent"></div>
<div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
<i className="w-6 h-6" data-lucide="rocket"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Objectif Carrière</h3>
<p className="text-slate-400 text-sm mb-6">Formations alignées avec le marché marocain et international.</p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle-2"></i> CV Review
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle-2"></i> Mock Interviews
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle-2"></i> Job Board
                        </div>
</div>
</div>

<div className="md:col-span-3 bg-[#120c2b] border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-indigo-500/30 transition-all duration-500">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-white">Communauté Active</h3>
</div>
<p className="text-slate-400 text-sm max-w-lg">Rejoins un réseau d'étudiants passionnés et de mentors experts disponibles 7j/7 pour t'aider à débloquer tes problèmes.</p>
</div>

<div className="flex -space-x-4">
<div className="w-12 h-12 rounded-full border-2 border-[#120c2b] bg-slate-700"></div>
<div className="w-12 h-12 rounded-full border-2 border-[#120c2b] bg-slate-600"></div>
<div className="w-12 h-12 rounded-full border-2 border-[#120c2b] bg-slate-500"></div>
<div className="w-12 h-12 rounded-full border-2 border-[#120c2b] bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white">+200</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="formations">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">Nos Formations</h2>
<p className="text-slate-400">Des parcours complets pour devenir expert dans ton domaine.</p>
</div>
<button className="text-violet-400 text-sm font-medium hover:text-violet-300 flex items-center gap-2 transition-colors">
                    Voir tout le catalogue <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">


</div>
</div>
</section>

<section className="py-24 relative z-10 overflow-hidden">

<div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full"></div>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-16 tracking-tight">Ils nous font <span className="text-pink-400 italic font-serif">confiance</span></h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative">
<i className="w-8 h-8 text-white/10 absolute top-6 right-6" data-lucide="quote"></i>
<p className="text-slate-300 mb-6 relative z-10 leading-relaxed">"Progamma m'a permis de passer de zéro à développeuse confirmée en 6 mois. L'accompagnement est exceptionnel !"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold">Y</div>
<div>
<h4 className="text-white text-sm font-medium">Yasmine El Amrani</h4>
<p className="text-xs text-slate-500">Dev Full-Stack, TechCorp Casa</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-gradient-to-b from-violet-900/20 to-white/5 border border-violet-500/20 backdrop-blur-md relative transform md:-translate-y-4 shadow-[0_10px_40px_-10px_rgba(124,58,237,0.2)]">
<i className="w-8 h-8 text-violet-500/20 absolute top-6 right-6" data-lucide="quote"></i>
<p className="text-slate-200 mb-6 relative z-10 leading-relaxed">"La formation en IA était exactement ce dont j'avais besoin. Des projets concrets et des mentors ultra compétents qui connaissent le marché."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold">O</div>
<div>
<h4 className="text-white text-sm font-medium">Omar Bennani</h4>
<p className="text-xs text-slate-500">Data Scientist, Rabat</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative">
<i className="w-8 h-8 text-white/10 absolute top-6 right-6" data-lucide="quote"></i>
<p className="text-slate-300 mb-6 relative z-10 leading-relaxed">"Grâce à Progamma, j'ai décroché mon premier job en tech 2 semaines après la fin de ma formation ! Une expérience qui change une vie."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center font-bold">S</div>
<div>
<h4 className="text-white text-sm font-medium">Sarah Idrissi</h4>
<p className="text-xs text-slate-500">Software Engineer, Startup</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-[#130f26]/80 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
<div>
<h2 className="text-3xl font-semibold text-white mb-4">Contacte-nous</h2>
<p className="text-slate-400 mb-8">Remplis ce formulaire et un conseiller pédagogique te répondra directement sur WhatsApp.</p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-slate-300">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-green-400"><i className="w-4 h-4" data-lucide="message-square"></i></div>
                                Réponse sous 2 heures
                            </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-violet-400"><i className="w-4 h-4" data-lucide="check"></i></div>
                                Audit de profil gratuit
                            </div>
</div>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Nom Complet</label>
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg opacity-0 group-focus-within:opacity-100 transition duration-500 blur-sm"></div>
<input className="relative w-full bg-[#0b061f] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:bg-[#120c2b] placeholder-slate-600 transition-colors" placeholder="Ton nom" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">WhatsApp (+212)</label>
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg opacity-0 group-focus-within:opacity-100 transition duration-500 blur-sm"></div>
<div className="relative flex">
<span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-white/10 bg-white/5 text-slate-400 text-sm">
<i className="w-4 h-4 mr-2" data-lucide="phone"></i> +212
                                    </span>
<input className="w-full bg-[#0b061f] border border-white/10 text-white rounded-r-lg px-4 py-3 focus:outline-none focus:bg-[#120c2b] placeholder-slate-600 transition-colors" placeholder="6 XX XX XX XX" type="tel"/>
</div>
</div>
</div>
<button className="w-full mt-2 py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group" type="button">
                            Envoyer via WhatsApp
                            <i className="w-4 h-4 text-violet-600 group-hover:translate-x-1 transition-transform" data-lucide="send"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 text-center relative z-10 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Rejoins la communauté <br/><span className="text-violet-400">PROGMA</span></h2>
<p className="text-lg text-slate-400 mb-10">Lance ta carrière tech dès aujourd'hui. Des milliers d'étudiants marocains nous font déjà confiance.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
<button className="px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-white font-medium shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:scale-105 transition-all duration-300">
                    Commencer gratuitement
                </button>
</div>
<div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-medium uppercase tracking-wider">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="shield-check"></i> Pas de carte requise</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-violet-500" data-lucide="clock"></i> Support 7j/7</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-pink-500" data-lucide="award"></i> Certificat inclus</span>
</div>
</div>
</section>

<footer className="bg-[#080418] border-t border-white/5 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-xs">
<i className="w-3 h-3" data-lucide="code-2"></i>
</div>
<span className="font-bold text-lg text-white">PROGMA</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Forme-toi aux métiers du digital avec la première académie tech marocaine d'excellence.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Formations</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-violet-400 transition-colors" href="#">Course Python</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Course React</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Fullstack JS</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Data Science</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Ressources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-violet-400 transition-colors" href="#">Blog Tech</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Guide Carrière</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Communauté Discord</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Événements</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="mail"></i> contact@progma.ma</li>
<li className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="map-pin"></i> Casablanca, Maroc</li>
<li className="mt-4 flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-slate-600 text-xs">© 2025 PROGMA ACADEMY. Tous droits réservés.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Confidentialité</a>
<a className="hover:text-slate-400" href="#">CGU</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
