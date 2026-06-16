import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Cursor Logic
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        });

        function animateCursor() {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover Effects
        const triggers = document.querySelectorAll('.hover-trigger');
        triggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => {
                follower.style.width = '60px';
                follower.style.height = '60px';
                follower.style.border = '1px solid var(--accent)';
                follower.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
            });
            trigger.addEventListener('mouseleave', () => {
                follower.style.width = '40px';
                follower.style.height = '40px';
                follower.style.border = '1px solid rgba(255,255,255,0.2)';
                follower.style.backgroundColor = 'transparent';
            });
        });

        // Scroll Reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>
<div className="cursor" style={{transform: 'translate(432px, 0px) translate(-50%, -50%)'}}></div>
<div className="cursor-follower" style={{transform: 'translate(0px, 0px) translate(-50%, -50%)', width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: 'transparent'}}></div>

<nav className="fixed z-50 md:px-12 flex mix-blend-difference w-full pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
<div className="font-display font-bold text-xl tracking-tighter hover-trigger">BPM.</div>
<a className="hover-trigger group flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-zinc-400 hover:text-white transition-colors" href="#postuler">
<span className="">Postuler</span>
<div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform duration-300"></div>
</a>
</nav>
<main className="">

<section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 border-b border-white/5 pt-20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-6xl">

<div className="reveal inline-flex items-center gap-3 mb-8 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] uppercase text-zinc-300 tracking-widest font-display">Rappeurs New Gen (16-24)</span>
</div>

<h1 className="reveal font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-8 active">
                    ZERO TO<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 hover-trigger">SPOTIFY.</span>
</h1>

<div className="reveal flex flex-col md:flex-row gap-8 md:items-end max-w-4xl active">
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 max-w-xl">3 sons complètement prêts à sortir sur Spotify en 7 jours. Beatmaker + Coach Créatif. Pas de label. Juste ta vision.</p>
<div className="pb-1 flex flex-col items-start gap-4">
<a className="hover-trigger inline-flex items-center gap-2 hover:border-indigo-400 transition-colors uppercase text-xs font-semibold text-indigo-400 tracking-widest border-indigo-400/30 border-b pb-1" href="#postuler">
    Postuler maintenant <iconify-icon icon="lucide:arrow-down-right"></iconify-icon>
</a>
<a className="hover-trigger text-zinc-500 hover:text-white transition-colors text-sm" href="#concept">
                            Je veux en savoir plus
                        </a>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-[#0f0e0e]" id="concept">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center hover:bg-[#141414] transition-colors duration-500 group">
<span className="font-display text-xs text-indigo-500 uppercase tracking-widest mb-6">Le Concept</span>
<h2 className="font-display text-4xl md:text-5xl text-white mb-6 group-hover:text-indigo-400 transition-colors">All-in-One.</h2>
<div className="leading-relaxed text-lg text-zinc-500 max-w-sm">
<span className="block">On t'apporte une structure pro immédiate.</span>
<span className="block">3 sons en 7 jours. Mixés, masterisés, sortis.</span>
</div>
</div>

<div className="p-8 md:p-16 flex flex-col justify-center bg-[#0f0e0e]">
<ul className="space-y-0">
<li className="hover-trigger py-6 border-b border-white/5 flex justify-between items-center group">
<span className="text-zinc-500 text-lg group-hover:text-white transition-colors">Beatmaker + Coach</span>
<iconify-icon className="text-zinc-700 group-hover:text-indigo-500 transition-colors" icon="lucide:mic-2" width="24"></iconify-icon>
</li>
<li className="hover-trigger py-6 border-b border-white/5 flex justify-between items-center group">
<span className="text-zinc-500 text-lg group-hover:text-white transition-colors">3 sons en 7 jours</span>
<iconify-icon className="text-zinc-700 group-hover:text-indigo-500 transition-colors" icon="lucide:zap" width="24"></iconify-icon>
</li>
<li className="hover-trigger py-6 border-b border-white/5 flex justify-between items-center group">
<span className="text-zinc-500 text-lg group-hover:text-white transition-colors">Mindset Artiste</span>
<iconify-icon className="text-zinc-700 group-hover:text-indigo-500 transition-colors" icon="lucide:brain-circuit" width="24"></iconify-icon>
</li>
<li className="hover-trigger py-6 border-b border-white/5 flex justify-between items-center group">
<span className="group-hover:text-white transition-colors text-lg text-zinc-500">Niveau Professionnel</span>
<iconify-icon className="text-zinc-700 group-hover:text-indigo-500 transition-colors" icon="lucide:sparkles" width="24"></iconify-icon>
</li>
</ul>
</div>
</div>
</section>

<section className="md:px-12 overflow-hidden border-white/5 border-b pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<span className="font-display text-xs text-indigo-500 uppercase tracking-widest mb-2 block">Le Pack (No Brainer)</span>
<h2 className="md:text-7xl text-5xl text-white tracking-tighter font-display">ACCELERATOR</h2>
</div>
<div className="text-zinc-500 text-sm font-mono mt-4 md:mt-0">
                        BPM V1.0 // FULL ACCESS
                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-1 bg-white/5 p-[1px]">

<div className="md:col-span-2 md:p-12 overflow-hidden group hover-trigger bg-[#141414] pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[80px] rounded-full group-hover:bg-indigo-600/20 transition-all duration-700"></div>
<div className="z-10 flex flex-col h-full relative justify-between">
<div className="flex flex-wrap gap-2 mb-12">
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white bg-white/5">Production</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white bg-white/5">Mix &amp; Master</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-indigo-400 border-indigo-500/30 bg-indigo-500/10">Upload DSP</span>
</div>
<div className="">
<h3 className="font-display text-3xl text-white mb-4">L'offre complète.</h3>
<p className="leading-relaxed text-zinc-500 max-w-md">
                                    3 sons complètement prêts à sortir. Uploadés sur Spotify en 7 jours. Prods custom, rec, mix, master, covers.
                                </p>
</div>
</div>
</div>

<div className="flex flex-col gap-1 bg-transparent">

<div className="bg-[#141414] p-8 flex-1 group hover-trigger">
<iconify-icon className="text-zinc-600 mb-6 group-hover:text-white transition-colors" icon="lucide:users" width="32"></iconify-icon>
<h4 className="font-display text-xl text-white mb-2">Communauté</h4>
<p className="text-base text-zinc-500">+10 artistes accompagnés en 2025.</p>
</div>

<div className="bg-[#141414] p-8 flex-1 group hover-trigger flex flex-col justify-center">
<div className="group-hover:text-indigo-400 transition-colors text-4xl text-white font-display mb-1">7 Jours</div>
<p className="text-xs uppercase tracking-widest text-zinc-600">Pour tout plier</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-[#0f0e0e]">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

<div className="relative bg-[#111] overflow-hidden group border-b lg:border-b-0 lg:border-r border-white/5">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-[#0f0e0e] to-[#0f0e0e]"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex group-hover:scale-105 transition-transform duration-700 w-64 h-64 border-white/5 border rounded-full items-center justify-center">
<div className="w-48 h-48 rounded-full bg-zinc-900 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-zinc-700 opacity-50" icon="lucide:user" width="64"></iconify-icon>
<img alt="Nova" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b88cb3ce-0cd8-4d46-8aa9-9b9e64972528_800w.jpg"/>
</div>
</div>
</div>
<div className="absolute bottom-8 left-8">
<h3 className="font-display text-2xl text-white">Nova.</h3>
<p className="text-zinc-500 text-sm">Fondateur BPM</p>
</div>
</div>

<div className="md:p-16 lg:p-24 flex flex-col pt-8 pr-8 pb-8 pl-8 justify-center">
<span className="uppercase text-xs text-indigo-500 tracking-widest font-display mb-6">Mon histoire</span>
<h2 className="md:text-5xl leading-tight text-4xl text-white font-display max-w-2xl mb-8">"Je transforme ton idée en <span className="italic text-zinc-600 font-serif">carrière</span> en 1 semaine."</h2>
<div className="leading-relaxed text-lg font-light text-zinc-400 space-y-6">
<p className="">22 ans, 5 ans de son derrière moi. J'ai tout fait : prod, rec, mix, master, DA.</p>
<div className="">
<span className="block">Mon constat est simple : trop de talents se perdent parce qu'ils sont seuls.</span>
<span className="block">Avec BPM, on te donne l'équipe et la structure pour réussir. Proprement.</span>
</div>
</div>
<div className="grid grid-cols-2 gap-6 border-white/5 border-t mt-12 pt-8 gap-x-6 gap-y-6">
<div className="text-sm text-zinc-500">
<span className="block text-lg text-white font-display mb-1">Humain</span>
                            Accompagnement réel
                        </div>
<div className="text-sm text-zinc-500">
<span className="block text-white font-display text-lg mb-1">Pro</span>
                            Qualité studio
                        </div>
</div>
</div>
</div>
</section>

<section className="md:px-12 bg-[#0f0e0e] border-white/5 border-b pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto">
<h2 className="font-display text-3xl md:text-4xl text-white mb-16 text-center">Comment ça se passe ?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

<div className="group hover-trigger">
<span className="font-display text-6xl text-zinc-800 group-hover:text-indigo-500/20 transition-colors duration-500 mb-4 block">01</span>
<h3 className="text-white text-xl font-medium mb-3">Appel découverte</h3>
<p className="leading-relaxed text-sm text-zinc-500">On apprend à te connaître. Tes influences, tes objectifs, ta vibe, tout ce qui te définit vraiment.</p>
</div>

<div className="group hover-trigger">
<span className="font-display text-6xl text-zinc-800 group-hover:text-indigo-500/20 transition-colors duration-500 mb-4 block">02</span>
<h3 className="text-white text-xl font-medium mb-3">On crée 3 sons sur mesure</h3>
<p className="leading-relaxed text-sm text-zinc-500">Rec, mix, master. Qualité studio. On bosse jusqu'à ce que ça tape, sans jamais baisser l’exigence.</p>
</div>

<div className="group hover-trigger">
<span className="font-display text-6xl text-zinc-800 group-hover:text-indigo-500/20 transition-colors duration-500 mb-4 block">03</span>
<h3 className="text-white text-xl font-medium mb-3">Spotify en 7 jours</h3>
<p className="leading-relaxed text-sm text-zinc-500">Tout est prêt à sortir. Covers, upload. Tu n'as plus qu'à partager. Zéro stress. On te guide du début à la fin.</p>
</div>
</div>
</div>
</section>

<section className="text-center bg-[#0f0e0e] pt-32 pr-6 pb-32 pl-6 relative" id="postuler">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">
<span className="uppercase block text-xs text-zinc-500 tracking-widest font-display mb-4">Investissement</span>
<div className="mb-4 hover-trigger">
<h2 className="md:text-9xl outline-text cursor-default text-6xl text-white tracking-tighter font-display">
                        €297
                    </h2>
</div>
<div className="mb-12 space-y-2">
<p className="uppercase text-sm font-medium text-indigo-400 tracking-wide" style={{}}>Offre lancement réservée aux 5 premiers artistes</p>
<p className="text-zinc-600 text-sm">Accompagnement premium — prix accessible pour les talents motivés</p>
</div>
<div className="h-px w-24 bg-white/10 mx-auto mb-12"></div>
<div className="space-y-8">
<h3 className="font-display text-3xl md:text-4xl text-white">Tu veux lancer ta carrière ?</h3>
<p className="text-lg font-light text-zinc-400 max-w-xl mr-auto ml-auto">
                        On te prend par la main — de ta première idée… jusqu’à Spotify.
                    </p>
<div className="flex flex-col items-center gap-4">
<button className="hover-trigger relative group px-10 py-4 bg-indigo-600 text-white rounded-full overflow-hidden transition-all hover:scale-105">
<div className="group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full" onclick="window.location.href='https://www.instagram.com/nova.bpm/'" role="button">
</div>
<span className="relative font-display font-bold tracking-wider uppercase text-sm z-10">Postuler maintenant</span>
</button>
<a className="hover-trigger text-sm text-zinc-500 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-0.5" href="#concept">
                            Je veux en savoir plus
                        </a>
</div>
</div>
</div>
</section>

<footer className="md:text-left text-center bg-[#0f0e0e] border-white/5 border-t pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
<div className="font-display font-bold text-xl tracking-tighter text-zinc-700">BPM.</div>
<div className="text-[10px] uppercase tracking-widest text-zinc-600">
                    © BPM Artist Accelerator. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><svg className="" data-icon-set="lucide" data-lucide="instagram" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:mail" width="16"></iconify-icon></a>
</div>
</div>
</footer>
</main>


    </>
  );
}
