import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
aura: {
DEFAULT: '#ff3b3b',
dark: '#cc2f2f',
glow: 'rgba(255, 59, 59, 0.15)'
},
background: '#050505',
surface: '#0f0f0f'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-aura"></span>
                GYMBRO
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Fonctionnalités</a>
<a className="hover:text-white transition-colors" href="#mission">Mission</a>
<a className="hover:text-white transition-colors" href="#community">Communauté</a>
</div>
<a className="text-xs font-medium bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all text-white" href="#">
                Connexion
            </a>
</div>
</nav>

<header className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-aura/20 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-neutral-400 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aura opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-aura"></span>
</span>
                Application disponible en Bêta
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Trouve ton <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">Partenaire</span>.<br/>
                Deviens un <span className="text-aura text-glow">Gymbro</span>.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Entraîne-toi plus fort. Progresse plus vite. L'application sociale pour connecter avec les athlètes de ta salle.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-aura px-8 font-medium text-white transition-all hover:bg-aura-dark hover:ring-2 hover:ring-aura hover:ring-offset-2 hover:ring-offset-background" href="#">
<span className="mr-2">Rejoins la communauté</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10" href="#discover">
                    En savoir plus
                </a>
</div>
</div>
</header>
<main className="max-w-6xl mx-auto px-6" id="discover">

<section className="grid md:grid-cols-2 gap-6 mb-32">

<div className="group relative p-8 rounded-3xl border border-white/5 bg-surface/50 overflow-hidden hover:border-white/10 transition-all duration-500">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon height="48" icon="lucide:battery-low" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-neutral-200">S’entraîner seul, c’est plus dur</h3>
<p className="text-neutral-400 leading-relaxed font-light">
                    Manque de motivation, personne pour te spotter sur ta PR, personne pour partager la progression... 
                    <span className="block mt-4 text-neutral-500">Pourtant, ton futur partenaire s'entraîne peut-être à 5 mètres de toi.</span>
</p>
</div>

<div className="group relative p-8 rounded-3xl border border-aura/20 bg-gradient-to-br from-surface to-aura/5 overflow-hidden hover:border-aura/40 transition-all duration-500">
<div className="absolute top-0 right-0 p-8 text-aura opacity-30 group-hover:opacity-60 transition-opacity">
<iconify-icon height="48" icon="lucide:zap" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">La solution : Gymbro</h3>
<p className="text-neutral-300 leading-relaxed font-light">
                    L'application sociale qui te connecte instantanément aux partenaires dans <strong className="text-white font-medium">ta salle de sport</strong>. Match selon ton niveau, tes objectifs et ton split.
                </p>
</div>
</section>

<section className="mb-32" id="features">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Fonctionnalités Clés</h2>
<p className="text-neutral-400 max-w-xl">Tout ce dont tu as besoin pour transformer tes séances solitaires en sessions légendaires.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-6 rounded-2xl border border-white/5 bg-surface hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-aura group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="lucide:map-pin" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Matching local</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Trouve des gymbros qui s’entraînent dans la même salle que toi, au même moment.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-surface hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-aura group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="lucide:user-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Profils Fitness</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Filtre par niveau, objectifs (force, hypertrophie), et disponibilité.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-surface hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-aura group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="lucide:message-square" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Connexion</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Discute, planifie tes séances et motive-toi mutuellement via le chat intégré.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-surface hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-aura group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="lucide:trending-up" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Progression</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Partage tes PRs, ta transformation et inspire la communauté locale.</p>
</div>
</div>
</section>

<section className="mb-32 py-12 border-y border-white/5 relative">
<div className="absolute inset-0 bg-white/5 blur-3xl opacity-10 pointer-events-none"></div>
<div className="text-center mb-10">
<h2 className="text-xl font-medium tracking-tight mb-2">Un modèle gratuit et durable</h2>
<p className="text-sm text-neutral-500">Soutenu par les leaders de l'industrie</p>
</div>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<span className="text-xl font-bold tracking-tighter hover:text-white transition-colors">GYMSHARK</span>
<span className="text-xl font-bold tracking-tighter italic hover:text-white transition-colors">NIKE</span>
<span className="text-xl font-bold tracking-tighter hover:text-white transition-colors">MYPROTEIN</span>
<span className="text-xl font-bold tracking-tighter uppercase hover:text-white transition-colors">Basic-Fit</span>
</div>
</section>

<section className="text-center max-w-3xl mx-auto mb-32">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                Construis ton physique.<br/>
                Rejoins <span className="text-aura">Gymbro</span>.
            </h2>
<div className="flex flex-col items-center gap-4">
<a className="w-full sm:w-auto h-14 px-10 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors" href="#">
<iconify-icon height="20" icon="lucide:download" strokeWidth="1.5" width="20"></iconify-icon>
                    Télécharger Gymbro
                </a>
<p className="text-xs text-neutral-500 mt-2">Disponible sur iOS et Android. Gratuit pour toujours.</p>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-background py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-aura"></div>
<span className="text-sm font-medium tracking-tight text-neutral-300">Gymbro</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
<a className="hover:text-white transition-colors" href="#">CGU</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
<div className="text-xs text-neutral-600">
                © 2026 Gymbro Inc.
            </div>
</div>
</footer>

    </>
  );
}
