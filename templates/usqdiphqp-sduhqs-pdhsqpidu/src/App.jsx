import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        document.getElementById('halloweenForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const wheel = document.getElementById('wheel');
            const randomRotation = 360 * 5 + Math.floor(Math.random() * 360);
            
            wheel.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
            wheel.style.transform = `rotate(${randomRotation}deg)`;
            
            setTimeout(() => {
                alert('🎃 Félicitations ! Vous avez participé au tirage au sort Halloween !');
            }, 4000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="border-b border-orange-500/10 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-gradient-to-br from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center text-black font-bold text-lg" style={{letterSpacing: '-0.05em'}}>HW</div>
<span className="text-xl font-semibold tracking-tight">HostWare<span className="text-orange-500 ml-1">Halloween</span></span>
</div>
<div className="flex items-center gap-2 text-orange-500/80 text-sm">
<i className="w-4 h-4" data-lucide="ghost"></i>
<span className="hidden sm:inline">Événement Spécial</span>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

<div className="text-center mb-12 sm:mb-16">
<div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6 text-sm text-orange-500">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span>Concours Halloween 2024</span>
</div>
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-orange-100 to-orange-500 bg-clip-text text-transparent">
                Tournez la Roue<br/>de l'Horreur
            </h1>
<p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                Participez à notre événement Halloween et tentez de gagner des cadeaux effrayants pour votre serveur gaming
            </p>
</div>

<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

<div className="order-2 lg:order-1">
<div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-orange-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-6">
<div className="bg-orange-500/10 p-2 rounded-lg">
<i className="w-5 h-5 text-orange-500" data-lucide="user-circle"></i>
</div>
<h2 className="text-2xl font-semibold tracking-tight">Inscription</h2>
</div>
<form className="space-y-5" id="halloweenForm">

<div>
<label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="discord">
                                Nom d'utilisateur Discord
                            </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<svg className="w-5 h-5 text-gray-500" fill="currentColor" viewbox="0 0 24 24">
<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"></path>
</svg>
</div>
<input className="w-full bg-black/50 border border-zinc-800 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all" id="discord" name="discord" placeholder="username#0000" required="" type="text"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
                                Adresse email
                            </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-gray-500" data-lucide="mail"></i>
</div>
<input className="w-full bg-black/50 border border-zinc-800 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all" id="email" name="email" placeholder="votre@email.com" required="" type="email"/>
</div>
</div>

<div className="flex items-start gap-3 pt-2">
<div className="flex items-center h-5">
<input className="w-4 h-4 rounded border-zinc-700 bg-black/50 text-orange-500 focus:ring-2 focus:ring-orange-500/50" id="terms" required="" type="checkbox"/>
</div>
<label className="text-sm text-gray-400 leading-tight" htmlFor="terms">
                                J'accepte les conditions et le règlement du concours Halloween
                            </label>
</div>

<button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40" type="submit">
<span>Tourner la roue</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</form>

<div className="mt-6 p-4 bg-orange-500/5 border border-orange-500/20 rounded-lg">
<div className="flex gap-3">
<i className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" data-lucide="info"></i>
<div className="text-sm text-gray-400">
<p className="font-medium text-orange-500 mb-1">Une seule participation par personne</p>
<p>Les gagnants seront contactés par email dans les 48h suivant le tirage</p>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-orange-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-6">
<div className="bg-orange-500/10 p-2 rounded-lg">
<i className="w-5 h-5 text-orange-500" data-lucide="trophy"></i>
</div>
<h2 className="text-2xl font-semibold tracking-tight">Prix à Gagner</h2>
</div>

<div className="relative aspect-square max-w-md mx-auto mb-8">

<div className="absolute inset-0 rounded-full border-4 border-orange-500/30 overflow-hidden" id="wheel">

<svg className="w-full h-full transform -rotate-90" viewbox="0 0 200 200">

<path d="M 100 100 L 100 0 A 100 100 0 0 1 170.71 29.29 Z" fill="#ea580c" opacity="0.9"></path>
<path d="M 100 100 L 170.71 29.29 A 100 100 0 0 1 200 100 Z" fill="#dc2626" opacity="0.9"></path>
<path d="M 100 100 L 200 100 A 100 100 0 0 1 170.71 170.71 Z" fill="#ea580c" opacity="0.9"></path>
<path d="M 100 100 L 170.71 170.71 A 100 100 0 0 1 100 200 Z" fill="#dc2626" opacity="0.9"></path>
<path d="M 100 100 L 100 200 A 100 100 0 0 1 29.29 170.71 Z" fill="#ea580c" opacity="0.9"></path>
<path d="M 100 100 L 29.29 170.71 A 100 100 0 0 1 0 100 Z" fill="#dc2626" opacity="0.9"></path>
<path d="M 100 100 L 0 100 A 100 100 0 0 1 29.29 29.29 Z" fill="#ea580c" opacity="0.9"></path>
<path d="M 100 100 L 29.29 29.29 A 100 100 0 0 1 100 0 Z" fill="#dc2626" opacity="0.9"></path>
</svg>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-4 border-zinc-900 flex items-center justify-center shadow-2xl">
<i className="w-8 h-8 text-white" data-lucide="zap"></i>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
<div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-orange-500"></div>
</div>
</div>

<div className="space-y-3">
<h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Cadeaux disponibles</h3>
<div className="flex items-center gap-3 p-3 bg-black/30 border border-zinc-800 rounded-lg hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-orange-500" data-lucide="server"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white">Serveur Minecraft 8GB</p>
<p className="text-xs text-gray-500">1 mois gratuit</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-black/30 border border-zinc-800 rounded-lg hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-red-500" data-lucide="gamepad-2"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white">Serveur FiveM</p>
<p className="text-xs text-gray-500">2 semaines gratuites</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-black/30 border border-zinc-800 rounded-lg hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-purple-500" data-lucide="crown"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white">VPS Premium</p>
<p className="text-xs text-gray-500">1 mois gratuit</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-black/30 border border-zinc-800 rounded-lg hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-500" data-lucide="shield"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white">Protection Anti-DDoS</p>
<p className="text-xs text-gray-500">1 mois gratuit</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-black/30 border border-zinc-800 rounded-lg hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-500" data-lucide="gift"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white">Code Promo 50%</p>
<p className="text-xs text-gray-500">Sur tous les services</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-4 mt-12">
<div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-orange-500/10 rounded-xl p-6 text-center">
<p className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">1,247</p>
<p className="text-sm text-gray-400">Participants</p>
</div>
<div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-orange-500/10 rounded-xl p-6 text-center">
<p className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">50+</p>
<p className="text-sm text-gray-400">Prix à gagner</p>
</div>
<div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-orange-500/10 rounded-xl p-6 text-center">
<p className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">31 Oct</p>
<p className="text-sm text-gray-400">Fin du concours</p>
</div>
</div>
</main>

<footer className="border-t border-orange-500/10 mt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-gray-500">© 2024 HostWare. Tous droits réservés.</p>
<div className="flex items-center gap-6 text-sm text-gray-500">
<a className="hover:text-orange-500 transition-colors" href="#">Règlement</a>
<a className="hover:text-orange-500 transition-colors" href="#">Contact</a>
<a className="hover:text-orange-500 transition-colors" href="https://hostware.fr">Site principal</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
