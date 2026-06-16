import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



                  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
                


        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse duration-[4000ms]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] brightness-100 contrast-150 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">


<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#hem">Hem</a>
<a className="hover:text-white transition-colors" href="#om">Om</a>
<a className="hover:text-white transition-colors" href="#erfarenhet">Erfarenhet</a>
<a className="hover:text-white transition-colors" href="#musik">Musik</a>
<a className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-cyan-400 hover:scale-105 transition-all duration-300 font-semibold tracking-tight shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]" href="#bokning">
                    Boka nu
                </a>
</div>

<button className="md:hidden text-white hover:text-cyan-400 transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-neutral-950/95 backdrop-blur-xl border-b border-white/5 p-8 flex flex-col gap-6 md:hidden shadow-2xl" id="mobile-menu">
<a className="text-lg font-medium text-neutral-300 hover:text-white" href="#hem">Hem</a>
<a className="text-lg font-medium text-neutral-300 hover:text-white" href="#om">Om</a>
<a className="text-lg font-medium text-neutral-300 hover:text-white" href="#erfarenhet">Erfarenhet</a>
<a className="text-lg font-medium text-neutral-300 hover:text-white" href="#musik">Musik</a>
<a className="text-lg font-semibold text-cyan-400" href="#bokning">Boka nu</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hem">

<div className="z-0 overflow-hidden absolute inset-0 opacity-60">
<div className="aura-background-component absolute inset-0 w-full h-full">
<div className="absolute inset-0 w-full h-full" data-us-project="qpSlPSWA2bdkUAYztz8z"></div>

</div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-4xl">
<div className="flex flex-wrap gap-3 mb-8 reveal delay-100 active">

</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-white mb-8 leading-[0.9] reveal delay-200 drop-shadow-2xl active">
                    DJ ALEX
                </h1>
<p className="md:text-2xl leading-relaxed reveal delay-300 active text-xl font-light text-neutral-300 max-w-xl mb-12">Disco house, party &amp; svenska klassiker.
<br/> <span className="text-neutral-500">Musik som lyfter varje event</span></p>
<div className="flex flex-col sm:flex-row gap-5 reveal delay-300 active">
<a className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-1" href="#bokning">
                        Förfrågan &amp; pris
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float opacity-50">
<iconify-icon className="text-white" icon="solar:mouse-minimalistic-linear" width="32"></iconify-icon>
</div>
</section>

<section className="bg-neutral-950 pt-32 pb-24 border-t border-white/5 relative" id="om">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-4 reveal active">
<h2 className="uppercase flex items-center gap-3 text-xs font-bold text-cyan-500 tracking-[0.2em] mb-4">
<span className="w-8 h-[1px] bg-cyan-500"></span>
                    Sound &amp; Selection
                </h2>
</div>
<div className="md:col-span-8 max-w-3xl reveal delay-100 active">
<p className="md:text-4xl leading-tight text-3xl font-light text-white mb-8">
                    Bas i Göteborg. Internationell känsla. Musik som <span className="text-cyan-500/80">läser rummet</span>, publiken och ögonblicket.
                </p>
<div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
<p>Oavsett om det är en svettig nattklubb, ett elegant bröllop eller en stor företagsfest, levererar jag en mix som känns exklusiv men inbjudande.</p>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-32 pb-24 relative overflow-hidden" id="erfarenhet">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-cyan-900/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 reveal active">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">Erfarenhet</h2>
<p className="text-neutral-500 mt-4 md:mt-0 font-medium">
                    Residencies &amp; Tidigare spelningar
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-6">

<div className="group relative border-t border-white/10 pt-8 transition-colors duration-300 cursor-default reveal delay-100 active">
<div className="absolute top-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
<h3 className="text-xl font-medium text-neutral-300 group-hover:text-white transition-colors mb-1">Push</h3>
<span className="text-xs font-medium text-neutral-600 group-hover:text-cyan-500 uppercase tracking-wide transition-colors">Göteborg</span>
</div>

<div className="group relative border-t border-white/10 pt-8 transition-colors duration-300 cursor-default reveal delay-200 active">
<div className="absolute top-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
<h3 className="text-xl font-medium text-neutral-300 group-hover:text-white transition-colors mb-1">Park Lane</h3>
<span className="text-xs font-medium text-neutral-600 group-hover:text-cyan-500 uppercase tracking-wide transition-colors">Göteborg</span>
</div>

<div className="group relative border-t border-white/10 pt-8 transition-colors duration-300 cursor-default reveal delay-300 active">
<div className="absolute top-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
<h3 className="text-xl font-medium text-neutral-300 group-hover:text-white transition-colors mb-1">Lounges</h3>
<span className="text-xs font-medium text-neutral-600 group-hover:text-cyan-500 uppercase tracking-wide transition-colors">Göteborg</span>
</div>

<div className="group relative border-t border-white/10 pt-8 transition-colors duration-300 cursor-default reveal delay-100 active">
<div className="absolute top-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
<h3 className="text-xl font-medium text-neutral-300 group-hover:text-white transition-colors mb-1">Valand</h3>
<span className="text-xs font-medium text-neutral-600 group-hover:text-cyan-500 uppercase tracking-wide transition-colors">Göteborg</span>
</div>

<div className="group relative border-t border-white/10 pt-8 transition-colors duration-300 cursor-default reveal delay-200 active">
<div className="absolute top-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-500 group-hover:w-full"></div>
<h3 className="text-xl font-medium text-neutral-300 group-hover:text-white transition-colors mb-1">Excet</h3>
<span className="text-xs font-medium text-neutral-600 group-hover:text-cyan-500 uppercase tracking-wide transition-colors">Göteborg</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900/20 border-t border-white/5" id="musik">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="w-full lg:w-1/2 reveal">
<div className="relative aspect-square w-full bg-neutral-800 rounded-lg overflow-hidden group shadow-2xl shadow-black/50">

<div className="absolute inset-0 z-10 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" style={{backgroundImage: 'linear-gradient(to top right, rgba(22, 78, 99, 0.6), rgba(23, 23, 23, 0.6), rgba(38, 38, 38, 0.2)), url(\'https://i.imgur.com/MHa9fat.jpeg\')'}}>
</div>

<img alt="DJ Alex Live Performance" className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out transform group-hover:scale-105" src="https://i.imgur.com/MHa9fat.jpeg"/>
<div className="absolute bottom-10 left-10 right-10 z-20">
<iconify-icon className="text-white mb-6 animate-float" icon="solar:turntable-music-note-linear" width="48"></iconify-icon>
<h3 className="md:text-6xl leading-none text-4xl font-semibold text-cyan-400 tracking-tighter mb-3 drop-shadow-lg">SELECTED SOUNDS</h3>
<p className="text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Featuring DJ Alex
                            </p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 flex flex-col justify-center reveal delay-200">
<div className="mb-12">
<span className="text-xs font-bold text-cyan-500 uppercase tracking-[0.2em] flex items-center gap-2 mb-3">
<iconify-icon icon="solar:headphones-round-linear" width="16"></iconify-icon> Current Selection
                        </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">UTVALDA LÅTAR</h2>
<p className="text-neutral-400 text-lg font-light">Ett smakprov på energin för ditt nästa event.</p>
</div>
<div className="space-y-5">

<div className="group w-full bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-cyan-500/30 hover:bg-neutral-900 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 transform hover:-translate-x-[-4px]">
<iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" className="opacity-80 group-hover:opacity-100 transition-opacity duration-300" frameborder="0" height="80" loading="lazy" src="https://open.spotify.com/embed/track/3vkQ5DAB1qQMYO4Mr9zJN6?utm_source=generator&amp;theme=0" style={{borderRadius: '12px'}} width="100%"></iframe>
</div>

<div className="group w-full bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-cyan-500/30 hover:bg-neutral-900 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 transform hover:-translate-x-[-4px]">
<iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" className="opacity-80 group-hover:opacity-100 transition-opacity duration-300" frameborder="0" height="80" loading="lazy" src="https://open.spotify.com/embed/track/08fMRujpKhEDTanKN9l2ud?utm_source=generator&amp;theme=0" style={{borderRadius: '12px'}} width="100%"></iframe>
</div>

<div className="group w-full bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-cyan-500/30 hover:bg-neutral-900 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 transform hover:-translate-x-[-4px]">
<iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" className="opacity-80 group-hover:opacity-100 transition-opacity duration-300" frameborder="0" height="80" loading="lazy" src="https://open.spotify.com/embed/track/0DiWol3AO6WpXZgp0goxAV?utm_source=generator&amp;theme=0" style={{borderRadius: '12px'}} width="100%"></iframe>
</div>

<div className="group w-full bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-cyan-500/30 hover:bg-neutral-900 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 transform hover:-translate-x-[-4px]">
<iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" className="opacity-80 group-hover:opacity-100 transition-opacity duration-300" frameborder="0" height="80" loading="lazy" src="https://open.spotify.com/embed/track/1zsFr9rPcsMwRtqjDJJpnC?utm_source=generator&amp;theme=0" style={{borderRadius: '12px'}} width="100%"></iframe>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/5">
<a className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-white transition-colors group tracking-wide" href="#">
                            Öppna Spotify <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-neutral-900/40 border border-white/5 p-10 rounded-2xl hover:bg-neutral-900 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl reveal delay-100">
<div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center mb-8 text-neutral-400 group-hover:text-cyan-400 group-hover:bg-cyan-900/20 group-hover:scale-110 transition-all duration-500">
<iconify-icon height="28" icon="solar:wineglass-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Passar för</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Företagsevent, bröllop, privatfest och nattklubb. Jag anpassar energin och låtvalet dynamiskt efter rummet.
                    </p>
</div>

<div className="group bg-neutral-900/40 border border-white/5 p-10 rounded-2xl hover:bg-neutral-900 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl reveal delay-200">
<div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center mb-8 text-neutral-400 group-hover:text-cyan-400 group-hover:bg-cyan-900/20 group-hover:scale-110 transition-all duration-500">
<iconify-icon height="28" icon="solar:music-note-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Stil &amp; Genre</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Disco house • Party • Svenska klassiker. Alltid levererat med en modern touch och sömlösa övergångar.
                    </p>
</div>

<div className="group bg-neutral-900/40 border border-white/5 p-10 rounded-2xl hover:bg-neutral-900 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl reveal delay-300">
<div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center mb-8 text-neutral-400 group-hover:text-cyan-400 group-hover:bg-cyan-900/20 group-hover:scale-110 transition-all duration-500">
<iconify-icon height="28" icon="solar:speaker-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Teknik &amp; Setup</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Behövs ljud och ljus? Kompletta lösningar kan ordnas via mina professionella samarbetspartners.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-neutral-900/30 to-neutral-950 border-white/5 border-t pt-32 pb-32" id="bokning">
<div className="max-w-3xl mx-auto px-6 reveal">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                    Bokning
                </span>
<h2 className="md:text-6xl text-4xl font-semibold tracking-tight mb-6 text-white">Förfrågan &amp; pris</h2>
<p className="text-neutral-400 text-lg font-light">Berätta datum, plats och typ av event så återkommer jag med ett upplägg.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2 group">
<label className="text-xs font-bold text-neutral-500 group-focus-within:text-cyan-500 uppercase tracking-wide transition-colors">Namn</label>
<input className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-neutral-700" placeholder="Förnamn Efternamn" type="text"/>
</div>
<div className="space-y-2 group">
<label className="text-xs font-bold text-neutral-500 group-focus-within:text-cyan-500 uppercase tracking-wide transition-colors">E-post</label>
<input className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-neutral-700" placeholder="namn@foretag.se" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2 group">
<label className="text-xs font-bold text-neutral-500 group-focus-within:text-cyan-500 uppercase tracking-wide transition-colors">Datum</label>
<input className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all [color-scheme:dark] placeholder:text-neutral-700" type="date"/>
</div>
<div className="space-y-2 group">
<label className="text-xs font-bold text-neutral-500 group-focus-within:text-cyan-500 uppercase tracking-wide transition-colors">Typ av event</label>
<div className="relative">
<select className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none cursor-pointer">
<option>Företagsevent</option>
<option>Bröllop</option>
<option>Privatfest</option>
<option>Nattklubb</option>
<option>Annat</option>
</select>
<iconify-icon className="absolute right-5 top-4.5 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2 group">
<label className="text-xs font-bold text-neutral-500 group-focus-within:text-cyan-500 uppercase tracking-wide transition-colors">Plats / Stad</label>
<input className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-neutral-700" placeholder="T.ex. Park Lane, Göteborg" type="text"/>
</div>
<div className="space-y-2 group">
<label className="text-xs font-bold text-neutral-500 group-focus-within:text-cyan-500 uppercase tracking-wide transition-colors">Meddelande</label>
<textarea className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none placeholder:text-neutral-700" placeholder="Berätta lite mer om upplägget..." rows="4"></textarea>
</div>
<button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-5 rounded-lg transition-all duration-300 mt-6 tracking-tight shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-1 transform" type="button">
                    Skicka förfrågan
                </button>
<p className="text-center text-xs text-neutral-500 mt-6">Svar inom 24 timmar (vardagar).</p>
<div className="flex justify-center mt-10">
<a className="flex items-center text-neutral-400 hover:text-white transition-colors gap-3 px-6 py-3 rounded-full border border-white/5 hover:border-cyan-500/50 hover:bg-neutral-900 group" href="mailto:booking@djalex.se">
<iconify-icon className="group-hover:text-cyan-400 transition-colors" icon="solar:letter-linear" width="20"></iconify-icon>
<span className="group-hover:text-white transition-colors">booking@djalex.se</span>
</a>
</div>
</form>
</div>
</section>

<footer className="py-16 border-t border-white/5 text-center bg-neutral-950 relative overflow-hidden">
<div className="flex justify-center gap-8 mb-8 relative z-10">
<a className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-1" href="#">
<iconify-icon height="24" icon="solar:camera-linear" width="24"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-1" href="#">
<iconify-icon height="24" icon="solar:music-note-linear" width="24"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-1" href="#">
<iconify-icon height="24" icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</a>
</div>
<p className="text-sm text-neutral-600 relative z-10">© 2024 DJ Alex – Göteborg</p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-cyan-400 transition-colors uppercase tracking-widest relative z-10" href="#hem">
                Back to top <iconify-icon icon="solar:arrow-up-linear"></iconify-icon>
</a>
</div>
</footer>



    </>
  );
}
