import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#1769AA', // Extracted from your site
500: '#1769AA',
600: '#125286',
},
action: {
DEFAULT: '#18AB41', // Extracted Call Button Green
500: '#18AB41',
600: '#138934',
},
dark: {
950: '#020408',
900: '#0A0A0A',
800: '#141414',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'grid-white': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="/">
<div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:cab-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold text-lg tracking-tight group-hover:text-brand-500 transition-colors">MonTaxi</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white hover:text-brand-500 transition-colors" href="/">Accueil</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#app">Application</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all hover:border-brand-500/50" href="tel:1-873-376-2227">
<iconify-icon className="text-action-500" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span>1-873-376-2227</span>
</a>
<button className="md:hidden text-white p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-20 pointer-events-none" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/19229729/19229729-uhd_3840_2160_24fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/60 to-dark-950"></div>
<div className="absolute inset-0 bg-grid-white bg-[length:40px_40px] opacity-10"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-semibold uppercase tracking-wider mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    Disponible 24h/7j
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Votre Taxi de <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-indigo-400">
                        Confiance
                    </span>
</h1>
<p className="text-xl text-zinc-400 font-light leading-relaxed mb-8 max-w-lg">
                    Montaxi vous accompagne partout à Gatineau, Hull, Aylmer, Ottawa et Sherbrooke. Tarifs premium et chauffeurs professionnels.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-action-500 text-white hover:bg-action-600 px-6 py-3.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(24,171,65,0.3)]" href="tel:1-873-376-2227">
<iconify-icon icon="solar:phone-calling-bold" width="18"></iconify-icon>
<span>Appeler Maintenant</span>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all shadow-[0_0_20px_rgba(23,105,170,0.3)]" href="https://passenger.taxicaller.net/app/5f6f62024e220c9a" target="_blank">
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
<span>Réserver en Ligne</span>
</a>
</div>
<div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight">4.8/5</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Note Client</span>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white tracking-tight">2000+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Courses / mois</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center mask-gradient hidden md:flex">
<div className="absolute inset-0 bg-gradient-radial from-brand-500/20 to-transparent blur-3xl"></div>

<div className="relative w-full max-w-lg">
<img alt="Map Interface" className="w-full h-auto rounded-2xl shadow-2xl border border-white/10 glass-card" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=436,fit=crop/HK1BDm2gvD0Flal5/chatgpt-image-oct-10-2025-03_36_54-pm-uGZWoHkfcf9iypCL.png"/>

<div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl flex items-center gap-4 border border-white/10 shadow-lg animate-[bounce_3s_infinite]">
<div className="w-10 h-10 rounded-full bg-action-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-400">Statut</div>
<div className="text-white text-sm font-medium">Chauffeur en route</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Nos Services</h2>
<p className="text-zinc-400 max-w-xl">Montaxi vous accompagne partout, jour et nuit, sans souci. Une gamme complète pour vos déplacements.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl md:col-span-2 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="solar:city-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-500 mb-6">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Transport Urbain &amp; Régional</h3>
<p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                            Service de taxi disponible à Gatineau, Hull, Aylmer, Ottawa et Sherbrooke. Trajets sécuritaires, chauffeurs locaux et connaissance parfaite du trafic.
                        </p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Trajets Sécuritaires</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Nos chauffeurs professionnels assurent votre sécurité à chaque course. Véhicules inspectés et propres.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:smartphone-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Réservation Facile</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Réservez rapidement via notre app ou site web, sans complication. Suivi en temps réel.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl md:col-span-2 group relative overflow-hidden flex items-center">
<div className="relative z-10 w-full">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Disponible 24/7</h3>
<p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                            Peu importe l'heure, Montaxi est là pour vous. Service ininterrompu jour et nuit pour tous vos besoins urgents.
                        </p>
</div>
<div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.02]" id="app">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative flex justify-center">

<div className="relative w-full max-w-md">
<img alt="MonTaxi Application" className="rounded-3xl shadow-2xl border border-white/10 glass-card w-full" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=515,fit=crop/HK1BDm2gvD0Flal5/green-and-white-graphic-designer-job-hiring-instagram-post-lYmKtwheSwoaG2TI.png"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-500/20 rounded-full blur-[80px] -z-10"></div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                    Téléchargez l'application. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-brand-500">Économisez 20%.</span>
</h2>
<p className="text-lg text-zinc-400 font-light mb-8 leading-relaxed">
                    Commandez votre taxi en quelques secondes, suivez votre chauffeur en temps réel et payez directement via l'application.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-zinc-200 transition-colors" href="https://apps.apple.com/ca/app/montaxi/id6444715529" target="_blank">
<iconify-icon icon="cib:apple" width="24"></iconify-icon>
<div className="text-left leading-tight">
<div className="text-[10px] font-medium uppercase tracking-wider">Télécharger sur</div>
<div className="text-sm font-bold">App Store</div>
</div>
</a>
<a className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/5 transition-colors" href="https://play.google.com/store/apps/details?id=com.taxicaller.MonTaxi.app" target="_blank">
<iconify-icon icon="cib:google-play" width="24"></iconify-icon>
<div className="text-left leading-tight">
<div className="text-[10px] font-medium uppercase tracking-wider">DISPONIBLE SUR</div>
<div className="text-sm font-bold">Google Play</div>
</div>
</a>
</div>
<div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
<div>
<div className="text-2xl font-semibold text-white tracking-tight">1750+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Utilisateurs</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">112</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Chauffeurs</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">5/5</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Étoiles</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-radial from-brand-500/10 to-transparent opacity-50"></div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">Besoin d'un taxi ?</h2>
<p className="text-zinc-400 mb-10 text-lg">Contactez-nous vite. Nos répartiteurs sont disponibles 24/7 pour vous servir.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
<a className="group inline-flex items-center gap-3 bg-action-500 text-white px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105 hover:bg-action-600" href="tel:1-873-376-2227">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
<span>1-873-376-2227</span>
</a>
<a className="group inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-semibold transition-colors hover:bg-white/10" href="mailto:montaxiservice@gmail.com">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
<span>montaxiservice@gmail.com</span>
</a>
</div>
<div className="grid md:grid-cols-2 gap-6 text-left">
<div className="glass-card p-6 rounded-xl flex items-start gap-4">
<div className="min-w-[40px] h-10 rounded-lg bg-brand-500/20 text-brand-500 flex items-center justify-center">
<iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Gatineau</h4>
<p className="text-sm text-zinc-500">23 Rue de Navarre, Gatineau</p>
</div>
</div>
<div className="glass-card p-6 rounded-xl flex items-start gap-4">
<div className="min-w-[40px] h-10 rounded-lg bg-brand-500/20 text-brand-500 flex items-center justify-center">
<iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Sherbrooke</h4>
<p className="text-sm text-zinc-500">1035 Rue Des Jardins-Fleuris, Sherbrooke</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-dark-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-6" href="/">
<div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:cab-bold" width="14"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight">MonTaxi</span>
</a>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Service de taxi fiable et professionnel desservant la région de Gatineau, Ottawa et Sherbrooke.
                    </p>
</div>
<div className="grid grid-cols-2 gap-12">
<div>
<h4 className="text-white font-medium mb-4 text-sm">Navigation</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="/">Accueil</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Social</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="https://www.facebook.com/MonTaxiService" target="_blank">Facebook</a></li>
<li><a className="hover:text-white transition-colors" href="https://www.instagram.com/montaxi_canada" target="_blank">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="https://www.tiktok.com/@montaxicanada" target="_blank">TikTok</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2024 MonTaxi Canada. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="https://www.facebook.com/MonTaxiService">
<iconify-icon icon="cib:facebook" width="16"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="https://www.instagram.com/montaxi_canada">
<iconify-icon icon="cib:instagram" width="16"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="https://www.tiktok.com/@montaxicanada">
<iconify-icon icon="cib:tiktok" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
