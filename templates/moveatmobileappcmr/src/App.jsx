import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-semibold tracking-tighter text-sm">
                    G.
                </div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="text-white transition-colors" href="#">Accueil</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Activité</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Portefeuille</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Support</a>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18"></span>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 border border-white/10 flex items-center justify-center text-xs text-white font-medium">
                    JD
                </div>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow pt-24 pb-12 px-6">
<div className="max-w-2xl mx-auto space-y-12">

<div className="text-center space-y-2">
<h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Bonjour, Julien</h1>
<p className="text-neutral-500 text-sm md:text-base">Que voulez-vous faire aujourd'hui ?</p>
</div>

<div className="p-1.5 bg-neutral-900/50 border border-white/5 rounded-2xl flex relative w-full md:w-3/4 mx-auto">
<button className="flex-1 py-3 px-4 rounded-xl bg-neutral-800 border border-white/10 text-white shadow-lg flex items-center justify-center gap-3 transition-all duration-300 group">
<span className="iconify text-indigo-400" data-icon="lucide:car-taxi-front" data-strokeWidth="1.5" data-width="20"></span>
<span className="font-medium text-sm">Se déplacer</span>
</button>
<button className="flex-1 py-3 px-4 rounded-xl hover:bg-white/5 text-neutral-400 hover:text-white flex items-center justify-center gap-3 transition-all duration-300">
<span className="iconify" data-icon="lucide:utensils" data-strokeWidth="1.5" data-width="20"></span>
<span className="font-medium text-sm">Manger</span>
</button>
</div>

<div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">

<div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-2 relative group focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/20 transition-all duration-300">
<div className="flex items-center px-4 py-4 gap-4">
<span className="iconify text-neutral-500 group-focus-within:text-indigo-400 transition-colors" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
<input className="bg-transparent border-none outline-none w-full text-lg text-white placeholder-neutral-500 font-medium" placeholder="Où allez-vous ?" type="text"/>
<div className="hidden md:flex items-center gap-2">
<span className="px-2 py-1 rounded-md bg-neutral-800 border border-white/5 text-xs text-neutral-400 font-mono">⌘K</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<button className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/30 border border-white/5 hover:bg-neutral-800/50 hover:border-white/10 transition-all group text-left">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
<span className="iconify" data-icon="lucide:home" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Maison</div>
<div className="text-xs text-neutral-500 mt-0.5">14 Rue de Rivoli, Paris</div>
</div>
</button>

<button className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/30 border border-white/5 hover:bg-neutral-800/50 hover:border-white/10 transition-all group text-left">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
<span className="iconify" data-icon="lucide:briefcase" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Bureau</div>
<div className="text-xs text-neutral-500 mt-0.5">Station F, Paris</div>
</div>
</button>
</div>

<div className="relative w-full h-64 bg-neutral-900/30 border border-white/5 rounded-2xl overflow-hidden group">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="w-32 h-32 rounded-full border border-indigo-500/20 bg-indigo-500/5 flex items-center justify-center animate-[pulse_3s_infinite]">
<div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center">
<span className="iconify text-indigo-400" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="24"></span>
</div>
</div>

<div className="absolute -top-8 -right-12 p-1.5 bg-neutral-800 rounded-lg border border-white/10 shadow-xl flex gap-2 items-center">
<span className="iconify text-white" data-icon="lucide:car" data-strokeWidth="1.5" data-width="14"></span>
<span className="text-xs text-neutral-300">3 min</span>
</div>
<div className="absolute bottom-4 -left-16 p-1.5 bg-neutral-800 rounded-lg border border-white/10 shadow-xl flex gap-2 items-center">
<span className="iconify text-white" data-icon="lucide:car" data-strokeWidth="1.5" data-width="14"></span>
<span className="text-xs text-neutral-300">7 min</span>
</div>
</div>
</div>
<div className="absolute bottom-4 right-4 flex gap-2">
<button className="p-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg border border-white/10 transition-colors">
<span className="iconify" data-icon="lucide:navigation" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</div>

<div className="pt-4">
<h3 className="text-sm font-medium text-neutral-400 mb-4 tracking-tight">Véhicules disponibles</h3>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-300">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<div className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">Électrique</div>
<div className="text-xs text-neutral-500">4 places • Sans émission</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">14,50 €</div>
<div className="text-xs text-neutral-500">4 min</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-300">
<span className="iconify" data-icon="lucide:crown" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<div className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">Premium</div>
<div className="text-xs text-neutral-500">Berline de luxe</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">22,00 €</div>
<div className="text-xs text-neutral-500">8 min</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 mt-8 group cursor-pointer">
<div className="absolute top-0 right-0 p-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500 group-hover:opacity-70"></div>
<div className="relative z-10 flex justify-between items-center">
<div>
<h3 className="text-lg font-medium text-white mb-1">Faim après le trajet ?</h3>
<p className="text-sm text-neutral-400">Commandez maintenant, arrivez en même temps.</p>
</div>
<div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
<span className="iconify text-white" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-8 mt-auto bg-neutral-950">
<div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-neutral-600">
                © 2024 GoOne Technologies.
            </div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Confidentialité</a>
<a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Conditions</a>
<a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Aide</a>
</div>
</div>
</footer>

    </>
  );
}
