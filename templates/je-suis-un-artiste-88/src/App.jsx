import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Set the date we're counting down to (48 hours from now)
        const now = new Date();
        const countDownDate = new Date(now.getTime() + 48 * 60 * 60 * 1000).getTime();

        const updateTimer = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Add leading zeros
            document.getElementById("days").innerText = days < 10 ? "0" + days : days;
            document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
            document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

            if (distance < 0) {
                clearInterval(updateTimer);
                document.getElementById("days").innerText = "00";
                document.getElementById("hours").innerText = "00";
                document.getElementById("minutes").innerText = "00";
                document.getElementById("seconds").innerText = "00";
            }
        }, 1000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-bg"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-zinc-900/40 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-red-950/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>

<nav className="w-full max-w-5xl px-6 py-8 flex justify-between items-center z-10">
<div className="font-medium tracking-tight text-white text-sm uppercase flex items-center gap-2">
<span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            Artiste
        </div>
<a className="text-xs font-medium text-zinc-500 hover:text-white transition-colors uppercase tracking-widest" href="#checkout">Pré-commander</a>
</nav>

<main className="flex-1 w-full max-w-3xl px-6 flex flex-col items-center justify-center text-center mt-12 mb-24 z-10">

<div className="mb-8 relative group">
<div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<iconify-icon className="text-6xl text-zinc-100 relative z-10" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-2 leading-[0.9] uppercase glitch-hover cursor-default transition-colors duration-300">
            Je les bz
        </h1>
<p className="text-zinc-500 text-sm md:text-base tracking-wide mt-4 uppercase font-medium">Nouvel Album — Édition Limitée</p>

<div className="grid grid-cols-4 gap-4 md:gap-8 mt-16 w-full max-w-lg border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm rounded-xl p-6 md:p-8">
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-light text-white tracking-tight font-mono" id="days">00</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-600 mt-2">Jours</span>
</div>
<div className="flex flex-col items-center relative">
<span className="absolute -left-2 md:-left-4 top-2 text-zinc-800 text-xl">:</span>
<span className="text-3xl md:text-4xl font-light text-white tracking-tight font-mono" id="hours">00</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-600 mt-2">Heures</span>
</div>
<div className="flex flex-col items-center relative">
<span className="absolute -left-2 md:-left-4 top-2 text-zinc-800 text-xl">:</span>
<span className="text-3xl md:text-4xl font-light text-white tracking-tight font-mono" id="minutes">00</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-600 mt-2">Min</span>
</div>
<div className="flex flex-col items-center relative">
<span className="absolute -left-2 md:-left-4 top-2 text-zinc-800 text-xl">:</span>
<span className="text-3xl md:text-4xl font-light text-red-500 tracking-tight font-mono" id="seconds">00</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-600 mt-2">Sec</span>
</div>
</div>

<div className="mt-20 animate-bounce">
<iconify-icon className="text-zinc-600 text-xl" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</main>

<section className="w-full max-w-5xl px-6 py-20 border-t border-zinc-900/50 relative z-10" id="checkout">
<div className="flex flex-col md:flex-row gap-12 md:gap-24">

<div className="w-full md:w-1/2">

<div className="aspect-square w-full rounded-xl border border-zinc-800 bg-black overflow-hidden relative shadow-2xl shadow-red-900/10 hover:border-zinc-600 transition-colors">
<iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" height="100%" loading="lazy" src="https://open.spotify.com/embed/track/1w86vRzFNaTjtnZygvxMc6?utm_source=generator&amp;theme=0" style={{borderRadius: '12px'}} width="100%"></iframe>
</div>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-4">
<iconify-icon className="text-zinc-500 mt-1 flex-shrink-0" icon="solar:verified-check-linear"></iconify-icon>
<div>
<h4 className="text-zinc-200 text-sm font-medium">Édition Collector</h4>
<p className="text-zinc-500 text-xs mt-1 leading-relaxed">Vinyle 180g, finition noir mat. Inclus un poster exclusif et un code de téléchargement digital.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-zinc-500 mt-1 flex-shrink-0" icon="solar:box-linear"></iconify-icon>
<div>
<h4 className="text-zinc-200 text-sm font-medium">Livraison Prioritaire</h4>
<p className="text-zinc-500 text-xs mt-1 leading-relaxed">Expédié le jour de la sortie. Emballage sécurisé anti-choc.</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 flex flex-col justify-center">
<div className="mb-8">
<h2 className="text-3xl font-semibold tracking-tighter text-white mb-2">Pré-commande</h2>
<p className="text-zinc-500 text-sm">Sélectionnez votre édition. Stock limité.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Redirection vers le paiement sécurisé...');">

<div className="space-y-3">
<label className="cursor-pointer relative block group">
<input checked="" className="peer sr-only radio-custom" name="edition" type="radio" value="vinyl"/>
<div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all flex justify-between items-center group-hover:border-zinc-700">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-600 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full opacity-0 transform scale-0 transition-all duration-200 radio-dot"></div>
</div>
<span className="text-sm text-zinc-200 font-medium">Vinyle Physique + Digital</span>
</div>
<span className="text-sm text-white font-semibold">35.00 €</span>
</div>
</label>
<label className="cursor-pointer relative block group">
<input className="peer sr-only radio-custom" name="edition" type="radio" value="digital"/>
<div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all flex justify-between items-center group-hover:border-zinc-700">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-600 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full opacity-0 transform scale-0 transition-all duration-200 radio-dot"></div>
</div>
<span className="text-sm text-zinc-200 font-medium">Album Digital (WAV/MP3)</span>
</div>
<span className="text-sm text-white font-semibold">9.99 €</span>
</div>
</label>
</div>

<div className="space-y-4 pt-4">
<div className="group relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-zinc-300" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="Adresse email" required="" type="email"/>
</div>
<div className="flex gap-4">
<div className="group relative w-1/2">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-zinc-300" icon="solar:user-linear"></iconify-icon>
<input className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="Prénom" required="" type="text"/>
</div>
<div className="group relative w-1/2">
<input className="w-full bg-black border border-zinc-800 rounded-lg py-3 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="Nom" required="" type="text"/>
</div>
</div>
</div>

<button className="w-full bg-white text-black font-semibold py-3.5 rounded-lg mt-6 hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group relative overflow-hidden" type="submit">
<span className="relative z-10">Commander maintenant</span>
<iconify-icon className="relative z-10 transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
</button>
<p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest mt-4">Paiement 100% sécurisé via Stripe</p>
</form>
</div>
</div>
</section>

<footer className="w-full border-t border-zinc-900 bg-black/50 backdrop-blur-md py-8 mt-12 z-10">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-zinc-600 text-xs font-medium uppercase tracking-widest">© 2024 Je les bz. Tous droits réservés.</span>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:music-note-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:bomb-linear"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
