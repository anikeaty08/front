import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
indigo: {
400: '#818cf8',
500: '#6366f1',
600: '#4f46e5',
}
}
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
".perspective-1000": { perspective: "1000px" },
".transform-style-3d": { "transform-style": "preserve-3d" },
});
}
]
};



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-window').forEach(section => {
                observer.observe(section);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-50 pointer-events-none select-none overflow-hidden bg-[#F5F5F7]">
<div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-[#E0E7FF] opacity-80 mix-blend-multiply blur-[100px] animate-blob"></div>
<div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-white opacity-100 mix-blend-multiply blur-[100px] animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-[#F5F5F7] opacity-80 mix-blend-multiply blur-[100px] animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-6">
<div className="flex backdrop-blur-[60px] transition-all hover:bg-white/80 bg-white/70 h-[56px] border-white/50 border ring-white/60 ring-1 rounded-full pr-1.5 pl-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] items-center justify-between">
<a className="flex items-center gap-3 shrink-0 group" href="#">
<img alt="Rool'z" className="w-auto h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2adbddfa-ab1f-4b2a-94ed-7dcd675a2fd8_320w.webp" style={{transition: 'outline 0.1s ease-in-out'}}/>
</a>
<div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#86868b] tracking-normal">
<a className="hover:text-[#1d1d1f] transition-colors duration-200" href="#features">Bornes</a>
<a className="hover:text-[#1d1d1f] transition-colors duration-200" href="#features">Site Web</a>
<a className="hover:text-[#1d1d1f] transition-colors duration-200" href="#results">Rentabilité</a>
</div>
<div className="shrink-0">
<a className="flex items-center gap-1.5 bg-[#1d1d1f] text-white px-5 h-10 rounded-full text-xs font-semibold tracking-wide hover:bg-black transition-all shadow-md" href="#access">
<span className="">Démo Gratuite</span>
<svg aria-hidden="true" className="" data-icon="lucide:arrow-up-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</nav>

<header className="flex-grow flex w-full pt-36 pr-4 pb-20 pl-4 relative items-center justify-center">
<div className="vision-window md:p-12 overflow-visible reveal-window is-visible w-full max-w-6xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8">

<div className="absolute top-5 left-5 flex gap-2 z-20 opacity-80 hover:opacity-100 transition-opacity">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5 shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5 shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5 shadow-sm"></div>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 z-10 min-h-[520px] text-left mt-6 relative gap-x-12 gap-y-12 items-center">

<div className="flex flex-col items-start relative z-10">
<h1 className="text-4xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-tighter mb-6 leading-[1.05]">
                        Les bornes de commande <br/>
<span className="text-indigo-600" style={{}}>qui augmentent vos ventes.</span>
</h1>
<h2 className="text-2xl lg:text-3xl font-medium text-[#1d1d1f] tracking-tight mb-8">
                        Le site web qui remplace les plateformes.
                    </h2>
<p className="text-lg leading-relaxed font-medium text-[#86868b] tracking-tight max-w-lg mb-10">
                        Réduisez l’attente, augmentez le panier moyen et reprenez le contrôle de vos commandes grâce à vos propres bornes et site de commande.
                    </p>
<a className="group px-8 py-4 rounded-full bg-indigo-600 text-white font-medium text-[15px] transition-all hover:bg-indigo-700 shadow-[0_4px_20px_rgba(99,102,241,0.25)] flex items-center gap-2" href="#access">
<span className="">Lancer une démo gratuite</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="relative w-full h-full min-h-[400px] perspective-1000 flex items-center justify-center lg:justify-end">
<div className="absolute top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-400/20 rounded-full blur-[90px] animate-pulse pointer-events-none z-0"></div>

<div className="relative z-10 w-full max-w-[420px] animate-float-card">
<img alt="Ecosystème de commande Rool'z" className="w-full h-auto object-contain drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/402edfed-707c-4d01-acd8-8079c10d76fe_1600w.png"/>
</div>
</div>
</div>
</div>
</header>

<footer className="w-full border-t border-gray-200 bg-white/60 backdrop-blur-xl pt-16 pb-12 px-6 md:px-12 relative z-10 mt-auto">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4 group" href="#">
<span className="font-bold tracking-tight text-lg text-[#1d1d1f]">Rool'z</span>
</a>
<p className="text-xs text-[#86868b] leading-relaxed max-w-[160px] font-medium">
                        Digitalisez sans dépendre des plateformes.
                    </p>
</div>

<div>
<h4 className="font-bold text-[#1d1d1f] text-sm mb-4">Produit</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#86868b] hover:text-indigo-600 transition-colors" href="#">Bornes</a></li>
<li><a className="text-sm text-[#86868b] hover:text-indigo-600 transition-colors" href="#">Site Web</a></li>
<li><a className="text-sm text-[#86868b] hover:text-indigo-600 transition-colors" href="#">App Mobile</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-[#1d1d1f] text-sm mb-4">Clients</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#86868b] hover:text-indigo-600 transition-colors" href="#">Indépendants</a></li>
<li><a className="text-sm text-[#86868b] hover:text-indigo-600 transition-colors" href="#">Fast-food</a></li>
<li><a className="text-sm text-[#86868b] hover:text-indigo-600 transition-colors" href="#">Dark kitchens</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-[#1d1d1f] text-sm mb-4">Légal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#86868b] hover:text-indigo-600 transition-colors" href="#">Confidentialité</a></li>
<li><a className="text-sm text-[#86868b] hover:text-indigo-600 transition-colors" href="#">CGV</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#86868b]">© 2024 Rool'z. Tous droits réservés.</p>
</div>
</div>
</footer>



    </>
  );
}
