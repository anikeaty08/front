import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Accordion Logic mapped via utility classes
            const accordions = document.querySelectorAll('.accordion-btn');
            
            accordions.forEach(btn => {
                btn.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    const icon = this.querySelector('.accordion-icon');
                    const isOpen = content.classList.contains('grid-rows-[1fr]');
                    
                    // Close all others
                    document.querySelectorAll('.accordion-content').forEach(c => {
                        c.classList.remove('grid-rows-[1fr]');
                        c.classList.add('grid-rows-[0fr]');
                    });
                    document.querySelectorAll('.accordion-icon').forEach(i => i.textContent = '+');
                    
                    if (!isOpen) {
                        content.classList.remove('grid-rows-[0fr]');
                        content.classList.add('grid-rows-[1fr]');
                        icon.textContent = '—';
                        // Smooth scroll to top of accordion slightly
                        setTimeout(() => {
                            this.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 50);
                    }
                });
            });

            // Fake Audio Player Interaction
            const audioPlayers = document.querySelectorAll('.audio-play-btn');
            audioPlayers.forEach(btn => {
                btn.addEventListener('click', function() {
                    const icon = this.querySelector('iconify-icon');
                    const isPlaying = icon.getAttribute('icon') === 'solar:pause-linear';
                    
                    if (isPlaying) {
                        icon.setAttribute('icon', 'solar:play-linear');
                    } else {
                        icon.setAttribute('icon', 'solar:pause-linear');
                        
                        // Fake progress animation
                        const container = this.closest('.flex');
                        const progress = container.querySelector('.audio-progress');
                        const range = container.querySelector('input[type="range"]');
                        if (progress && range) {
                            let val = parseInt(range.value) || 0;
                            const interval = setInterval(() => {
                                if (icon.getAttribute('icon') !== 'solar:pause-linear') {
                                    clearInterval(interval);
                                    return;
                                }
                                val += 1;
                                if (val > 100) val = 0;
                                range.value = val;
                                progress.style.width = val + '%';
                            }, 500);
                        }
                    }
                });
            });

            // Range slider update visual progress
            const ranges = document.querySelectorAll('input[type="range"]');
            ranges.forEach(range => {
                range.addEventListener('input', function() {
                    const progress = this.nextElementSibling;
                    progress.style.width = this.value + '%';
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative">
<div className="max-w-3xl flex flex-col items-center gap-8">
<h1 className="font-['Playfair_Display'] font-medium text-[#f5f5f5] text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter">
                Origin
            </h1>
<p className="font-['Playfair_Display'] italic text-[#f5f5f5] text-xl md:text-3xl tracking-tight max-w-2xl">
                Ce qui est au point de départ sera à l'arrivée.
            </p>
<div className="flex items-center gap-4 text-[#4a4a4a] text-xs md:text-sm font-normal uppercase tracking-widest mt-8">
<span>Un parcours philosophique</span>
<span>·</span>
<span>41 jours</span>
<span>·</span>
<span>100% autonome</span>
</div>
</div>
<a className="absolute bottom-12 text-[#4a4a4a] hover:text-[#b8860b] transition-colors duration-500" href="#chemins">
<iconify-icon className="stroke-[1.5]" height="24" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</a>
</header>

<section className="bg-[#f5f5f5] text-[#1a1a1a] py-24 md:py-32 px-6 md:px-12 lg:px-24" id="chemins">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24 flex flex-col gap-6">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">Votre chemin</span>
<h2 className="font-['Playfair_Display'] font-medium tracking-tight text-3xl md:text-5xl max-w-4xl leading-tight">
                    ORIGIN se vit comme vous êtes.<br/>
                    Trois chemins s'offrent à vous — un seul programme.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[#4a4a4a]">

<a className="group block border-b border-r border-[#4a4a4a] p-8 md:p-12 hover:bg-[#1a1a1a] hover:text-[#f5f5f5] transition-colors duration-500" href="#part1">
<div className="flex flex-col h-full justify-between gap-12">
<div className="flex flex-col gap-4">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">01 · Les 41 Jours</span>
<p className="font-['Playfair_Display'] italic tracking-tight text-xl md:text-2xl">Un jour. Une ressource. Un pas. Le chemin balisé.</p>
</div>
<div className="text-[#b8860b]">
<iconify-icon className="stroke-[1.5] group-hover:translate-x-2 transition-transform duration-500" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</a>

<a className="group block border-b border-r border-[#4a4a4a] p-8 md:p-12 hover:bg-[#1a1a1a] hover:text-[#f5f5f5] transition-colors duration-500" href="#part2">
<div className="flex flex-col h-full justify-between gap-12">
<div className="flex flex-col gap-4">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">02 · Les 41 Étapes</span>
<p className="font-['Playfair_Display'] italic tracking-tight text-xl md:text-2xl">Le même parcours — à votre rythme.</p>
</div>
<div className="text-[#b8860b]">
<iconify-icon className="stroke-[1.5] group-hover:translate-x-2 transition-transform duration-500" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</a>

<a className="group block border-b border-r border-[#4a4a4a] p-8 md:p-12 hover:bg-[#1a1a1a] hover:text-[#f5f5f5] transition-colors duration-500" href="#part3">
<div className="flex flex-col h-full justify-between gap-12">
<div className="flex flex-col gap-4">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">03 · Au Feeling</span>
<p className="font-['Playfair_Display'] italic tracking-tight text-xl md:text-2xl">Toutes les ressources, librement. L'intuition comme seul guide.</p>
</div>
<div className="text-[#b8860b]">
<iconify-icon className="stroke-[1.5] group-hover:translate-x-2 transition-transform duration-500" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="md:py-32 md:px-12 lg:px-24 bg-[#1a1a1a] pt-24 pr-6 pb-24 pl-6" id="part1">
<div className="max-w-4xl mx-auto">
<div className="mb-16 md:mb-24 text-center flex flex-col items-center gap-6">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">Partie 01 — Le Parcours</span>

<div className="w-full mt-12 hidden md:flex items-center justify-between border-b border-[#4a4a4a] pb-4 relative text-xs tracking-widest text-[#4a4a4a]">
<span className="text-[#b8860b]">J1–J8: VOIR</span>
<span>J9–J17: DESCENDRE</span>
<span>J18–J27: FONDER</span>
<span>J28–J37: ALIGNER</span>
<span>J38–J41: ORIGIN</span>
<div className="absolute bottom-0 left-0 h-[1px] bg-[#b8860b] w-1/5 transition-all duration-1000"></div>
</div>
</div>
<div className="flex flex-col border-t border-[#4a4a4a]">

<div className="border-b border-[#4a4a4a]">
<button className="accordion-btn flex group text-left w-full pt-8 pb-8 items-center justify-between">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#f5f5f5] text-sm group-hover:text-[#b8860b] transition-colors">Jour 01</span>
<span className="font-['Playfair_Display'] italic tracking-tight text-[#4a4a4a] text-lg md:text-xl group-hover:text-[#f5f5f5] transition-colors">Le point d'origine</span>
</div>
<span className="accordion-icon font-['Inter'] text-[#4a4a4a] text-xl group-hover:text-[#b8860b] transition-colors">+</span>
</button>
<div className="accordion-content grid transition-[grid-template-rows] duration-700 ease-in-out">
<div className="overflow-hidden pb-12 flex flex-col gap-16">

<div className="flex flex-col gap-6">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">La Question</span>
<p className="font-['Playfair_Display'] italic tracking-tight text-2xl md:text-4xl text-[#f5f5f5] leading-snug">Qu'est-ce qui, fondamentalement, motive ma présence ici aujourd'hui ?</p>
</div>

<div className="flex flex-col gap-6 gap-x-6 gap-y-6">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">L'Enseignement</span>
<div className="flex gap-6 bg-[#1a1a1a] w-full max-w-xl border-[#4a4a4a] border pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6 items-center">
<audio onended="const icon = this.nextElementSibling.querySelector('iconify-icon'); icon.setAttribute('icon', 'solar:play-linear');" onloadedmetadata="const timeDisplay = this.nextElementSibling.nextElementSibling.nextElementSibling; const m = Math.floor(this.duration / 60).toString().padStart(2, '0'); const s = Math.floor(this.duration % 60).toString().padStart(2, '0'); timeDisplay.textContent = m + ':' + s;" ontimeupdate="const range = this.nextElementSibling.nextElementSibling.querySelector('input'); const progress = this.nextElementSibling.nextElementSibling.querySelector('div'); const timeDisplay = this.nextElementSibling.nextElementSibling.nextElementSibling; const val = (this.currentTime / this.duration) * 100 || 0; range.value = val; progress.style.width = val + '%'; const m = Math.floor(this.currentTime / 60).toString().padStart(2, '0'); const s = Math.floor(this.currentTime % 60).toString().padStart(2, '0'); timeDisplay.textContent = m + ':' + s;" preload="metadata" src="https://da32ev14kd4yl.cloudfront.net/versioned/karkadann/JLDW/01%20LE%20CORPS.mp3"></audio>
<button className="audio-play-btn w-10 h-10 flex items-center justify-center text-[#f5f5f5] hover:text-[#b8860b] transition-colors" onclick="const audio = this.previousElementSibling; const icon = this.querySelector('iconify-icon'); if (audio.paused) { audio.play(); icon.setAttribute('icon', 'solar:pause-linear'); } else { audio.pause(); icon.setAttribute('icon', 'solar:play-linear'); }">
<iconify-icon className="stroke-[1.5]" height="24" icon="solar:play-linear" style={{color: 'rgb(184, 134, 11)'}} width="24"></iconify-icon>
</button>
<div className="flex-1 relative h-6 flex items-center">
<input className="w-full z-10 appearance-none bg-transparent [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-0 [&amp;::-webkit-slider-thumb]:h-0 [&amp;::-webkit-slider-runnable-track]:w-full [&amp;::-webkit-slider-runnable-track]:h-[2px] [&amp;::-webkit-slider-runnable-track]:bg-[#4a4a4a] [&amp;::-webkit-slider-runnable-track]:cursor-pointer" max="100" min="0" oninput="const audio = this.parentElement.previousElementSibling.previousElementSibling; if(audio.duration) { audio.currentTime = (this.value / 100) * audio.duration; this.nextElementSibling.style.width = this.value + '%'; }" step="0.1" type="range" value="0"/>
<div className="audio-progress absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-[#b8860b] pointer-events-none w-[0%]" style={{width: '0%'}}>
</div>
</div>
<span className="text-xs text-[#4a4a4a] font-['Inter'] w-12 text-right">02:27</span>
</div>
</div>

<div className="flex flex-col gap-6 items-start">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">L'Exercice Philosophique</span>
<a className="inline-flex items-center gap-3 border border-[#b8860b] text-[#b8860b] py-4 px-8 uppercase font-normal tracking-wider text-xs hover:bg-[#b8860b] hover:text-[#1a1a1a] transition-colors duration-300" href="#" target="_blank">
                                    Télécharger le PDF
                                    <iconify-icon className="stroke-[1.5]" height="18" icon="solar:download-linear" width="18"></iconify-icon>
</a>
</div>

<div className="flex flex-col gap-6 items-start w-full">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">L'Intention d'Éveil</span>
<div className="w-full max-w-sm aspect-[3/4] bg-[#1a1a1a] border border-[#4a4a4a] flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNiODg2MGIiLz48L3N2Zz4=')] bg-[length:20px_20px]"></div>
<span className="font-['Playfair_Display'] italic text-[#b8860b] text-lg mb-8 relative z-10">Intention 01</span>
<p className="font-['Playfair_Display'] font-medium tracking-tight text-[#f5f5f5] text-2xl md:text-3xl leading-tight relative z-10">Je m'ouvre à ce qui est, sans chercher à le définir.</p>
</div>
<button className="mt-4 inline-flex items-center gap-3 bg-[#b8860b] text-[#f5f5f5] py-4 px-8 uppercase font-normal tracking-wider text-xs hover:bg-[#966d09] transition-colors duration-300">
                                    Sauvegarder l'image
                                </button>
</div>
</div>
</div>
</div>

<div className="border-b border-[#4a4a4a]">
<button className="accordion-btn flex group text-left w-full pt-8 pb-8 items-center justify-between">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
<span className="uppercase group-hover:text-[#b8860b] transition-colors text-sm font-normal text-[#f5f5f5] tracking-widest font-['Inter']">Jour 02</span>
<span className="md:text-xl group-hover:text-[#f5f5f5] transition-colors text-lg italic text-[#4a4a4a] tracking-tight font-['Playfair_Display']">La nature de l'Essence</span>
</div>
<span className="accordion-icon font-['Inter'] text-[#4a4a4a] text-xl group-hover:text-[#b8860b] transition-colors">+</span>
</button>
<div className="accordion-content grid transition-[grid-template-rows] duration-700 ease-in-out">
<div className="overflow-hidden pb-12 flex flex-col gap-16">
<div className="flex flex-col gap-6">
<span className="uppercase text-xs font-normal text-[#b8860b] tracking-widest font-['Inter']">La Question</span>
<p className="font-['Playfair_Display'] italic tracking-tight text-2xl md:text-4xl text-[#f5f5f5] leading-snug">Si je retire tout ce que je possède et ce que je fais, que reste-t-il ?</p>
</div>
<div className="flex flex-col gap-6">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">L'Enseignement</span>
<div className="flex gap-6 bg-[#1a1a1a] w-full max-w-xl border-[#4a4a4a] border pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6 items-center">
<audio onended="const icon = this.nextElementSibling.querySelector('iconify-icon'); icon.setAttribute('icon', 'solar:play-linear');" onloadedmetadata="const timeDisplay = this.nextElementSibling.nextElementSibling.nextElementSibling; const m = Math.floor(this.duration / 60).toString().padStart(2, '0'); const s = Math.floor(this.duration % 60).toString().padStart(2, '0'); timeDisplay.textContent = m + ':' + s;" ontimeupdate="const range = this.nextElementSibling.nextElementSibling.querySelector('input'); const progress = this.nextElementSibling.nextElementSibling.querySelector('div'); const timeDisplay = this.nextElementSibling.nextElementSibling.nextElementSibling; const val = (this.currentTime / this.duration) * 100 || 0; range.value = val; progress.style.width = val + '%'; const m = Math.floor(this.currentTime / 60).toString().padStart(2, '0'); const s = Math.floor(this.currentTime % 60).toString().padStart(2, '0'); timeDisplay.textContent = m + ':' + s;" preload="metadata" src="https://da32ev14kd4yl.cloudfront.net/versioned/karkadann/JLDW/01%20LE%20CORPS.mp3"></audio>
<button className="audio-play-btn w-10 h-10 flex items-center justify-center text-[#f5f5f5] hover:text-[#b8860b] transition-colors" onclick="const audio = this.previousElementSibling; const icon = this.querySelector('iconify-icon'); if (audio.paused) { audio.play(); icon.setAttribute('icon', 'solar:pause-linear'); } else { audio.pause(); icon.setAttribute('icon', 'solar:play-linear'); }">
<iconify-icon className="stroke-[1.5]" height="24" icon="solar:play-linear" style={{color: 'rgb(184, 134, 11)'}} width="24"></iconify-icon>
</button>
<div className="flex-1 relative h-6 flex items-center">
<input className="w-full z-10 appearance-none bg-transparent [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-0 [&amp;::-webkit-slider-thumb]:h-0 [&amp;::-webkit-slider-runnable-track]:w-full [&amp;::-webkit-slider-runnable-track]:h-[2px] [&amp;::-webkit-slider-runnable-track]:bg-[#4a4a4a] [&amp;::-webkit-slider-runnable-track]:cursor-pointer" max="100" min="0" oninput="const audio = this.parentElement.previousElementSibling.previousElementSibling; if(audio.duration) { audio.currentTime = (this.value / 100) * audio.duration; this.nextElementSibling.style.width = this.value + '%'; }" step="0.1" type="range" value="0"/>
<div className="audio-progress absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-[#b8860b] pointer-events-none w-[0%]" style={{width: '0%'}}>
</div>
</div>
<span className="text-xs text-[#4a4a4a] font-['Inter'] w-12 text-right">02:27</span>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-[#4a4a4a]">
<button className="accordion-btn flex group text-left w-full pt-8 pb-8 items-center justify-between">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#f5f5f5] text-sm group-hover:text-[#b8860b] transition-colors">Jour 08</span>
<span className="font-['Playfair_Display'] italic tracking-tight text-[#4a4a4a] text-lg md:text-xl group-hover:text-[#f5f5f5] transition-colors">Fermer la boucle de la vision</span>
</div>
<span className="accordion-icon font-['Inter'] text-[#4a4a4a] text-xl group-hover:text-[#b8860b] transition-colors">—</span>
</button>
<div className="accordion-content grid transition-[grid-template-rows] duration-700 ease-in-out">
<div className="overflow-hidden pb-12 flex flex-col gap-16">
<div className="flex flex-col gap-6">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">La Question</span>
<p className="font-['Playfair_Display'] italic tracking-tight text-2xl md:text-4xl text-[#f5f5f5] leading-snug">Suis-je prêt à regarder ce que j'évite depuis toujours ?</p>
</div>
<div className="flex flex-col gap-6">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">L'Enseignement</span>
<div className="flex items-center gap-6 border border-[#4a4a4a] p-4 w-full max-w-xl">
<button className="audio-play-btn w-10 h-10 flex items-center justify-center text-[#f5f5f5] hover:text-[#b8860b] transition-colors">
<iconify-icon className="stroke-[1.5]" height="24" icon="solar:play-linear" width="24"></iconify-icon>
</button>
<div className="flex-1 relative h-6 flex items-center">
<input className="w-full z-10 appearance-none bg-transparent [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-0 [&amp;::-webkit-slider-thumb]:h-0 [&amp;::-webkit-slider-runnable-track]:w-full [&amp;::-webkit-slider-runnable-track]:h-[2px] [&amp;::-webkit-slider-runnable-track]:bg-[#4a4a4a] [&amp;::-webkit-slider-runnable-track]:cursor-pointer" max="100" min="0" type="range" value="0"/>
<div className="audio-progress absolute top-0 left-0 h-[2px] bg-[#b8860b] pointer-events-none w-[0%]"></div>
</div>
<span className="text-xs text-[#4a4a4a] font-['Inter'] w-12 text-right">11:05</span>
</div>
</div>

<div className="flex flex-col gap-8 items-start border border-[#4a4a4a] p-8 md:p-12 w-full">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">Le Processus de Transformation</span>
<div className="w-full flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
<div className="flex items-center gap-6 p-4 w-full max-w-md bg-[#f5f5f5]">
<button className="audio-play-btn w-10 h-10 flex items-center justify-center text-[#1a1a1a] hover:text-[#b8860b] transition-colors">
<iconify-icon className="stroke-[1.5]" height="24" icon="solar:play-linear" width="24"></iconify-icon>
</button>
<div className="flex-1 relative h-6 flex items-center">
<input className="w-full z-10 appearance-none bg-transparent [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-0 [&amp;::-webkit-slider-thumb]:h-0 [&amp;::-webkit-slider-runnable-track]:w-full [&amp;::-webkit-slider-runnable-track]:h-[2px] [&amp;::-webkit-slider-runnable-track]:bg-[#4a4a4a] [&amp;::-webkit-slider-runnable-track]:cursor-pointer" max="100" min="0" type="range" value="0"/>
<div className="audio-progress absolute top-0 left-0 h-[2px] bg-[#b8860b] pointer-events-none w-[0%]"></div>
</div>
<span className="text-xs text-[#4a4a4a] font-['Inter'] w-12 text-right">45:00</span>
</div>
<a className="inline-flex items-center gap-3 border border-[#b8860b] text-[#b8860b] py-4 px-8 uppercase font-normal tracking-wider text-xs hover:bg-[#b8860b] hover:text-[#1a1a1a] transition-colors duration-300 whitespace-nowrap" href="#" target="_blank">
                                        Support d'intégration
                                        <iconify-icon className="stroke-[1.5]" height="18" icon="solar:document-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<span className="text-[#4a4a4a] text-xs uppercase tracking-widest">· 38 jours restants masqués pour l'aperçu ·</span>
</div>
</div>
</section>

<section className="bg-[#f5f5f5] text-[#1a1a1a] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-[#4a4a4a]" id="part2">
<div className="max-w-7xl mx-auto">
<div className="mb-24 flex flex-col gap-6 text-center items-center">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">Partie 02 — Les Ressources</span>
<p className="font-['Playfair_Display'] italic tracking-tight text-xl md:text-2xl max-w-2xl text-[#4a4a4a]">
                    Toutes les ressources du programme, organisées par pilier.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col gap-12">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs border-b border-[#4a4a4a] pb-4">Pilier 01 — Les 41 Questions</span>
<ul className="flex flex-col gap-6 font-['Playfair_Display'] italic tracking-tight text-lg md:text-xl">
<li className="cursor-pointer hover:text-[#b8860b] transition-colors flex gap-4">
<span className="text-xs font-['Inter'] font-medium not-italic text-[#4a4a4a] mt-1.5">01.</span>
                            Qu'est-ce qui, fondamentalement, motive ma présence ici aujourd'hui ?
                        </li>
<li className="cursor-pointer hover:text-[#b8860b] transition-colors flex gap-4">
<span className="text-xs font-['Inter'] font-medium not-italic text-[#4a4a4a] mt-1.5">02.</span>
                            Si je retire tout ce que je possède et ce que je fais, que reste-t-il ?
                        </li>
<li className="cursor-pointer hover:text-[#b8860b] transition-colors flex gap-4">
<span className="text-xs font-['Inter'] font-medium not-italic text-[#4a4a4a] mt-1.5">03.</span>
                            Où se loge la peur dans mon corps lorsque je m'arrête ?
                        </li>
<li className="text-[#4a4a4a] text-sm not-italic font-['Inter'] uppercase tracking-widest mt-4">· Voir les 38 autres ·</li>
</ul>
</div>

<div className="flex flex-col gap-12">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs border-b border-[#4a4a4a] pb-4">Pilier 02 — Les 41 Enseignements</span>
<div className="flex flex-col gap-4">

<div className="flex items-center gap-6 border border-[#4a4a4a] p-4 bg-[#f5f5f5] hover:bg-[#1a1a1a] hover:text-[#f5f5f5] hover:border-[#1a1a1a] transition-all group duration-300">
<span className="text-xs font-['Inter'] font-medium text-[#4a4a4a] w-6 group-hover:text-[#f5f5f5]">01.</span>
<button className="audio-play-btn w-8 h-8 flex items-center justify-center text-[#1a1a1a] group-hover:text-[#b8860b] transition-colors">
<iconify-icon className="stroke-[1.5]" height="20" icon="solar:play-linear" width="20"></iconify-icon>
</button>
<span className="font-['Playfair_Display'] italic tracking-tight flex-1 truncate">Le point d'origine</span>
<span className="text-xs text-[#4a4a4a] font-['Inter'] group-hover:text-[#f5f5f5]">08:24</span>
</div>
<div className="flex items-center gap-6 border border-[#4a4a4a] p-4 bg-[#f5f5f5] hover:bg-[#1a1a1a] hover:text-[#f5f5f5] hover:border-[#1a1a1a] transition-all group duration-300">
<span className="text-xs font-['Inter'] font-medium text-[#4a4a4a] w-6 group-hover:text-[#f5f5f5]">02.</span>
<button className="audio-play-btn w-8 h-8 flex items-center justify-center text-[#1a1a1a] group-hover:text-[#b8860b] transition-colors">
<iconify-icon className="stroke-[1.5]" height="20" icon="solar:play-linear" width="20"></iconify-icon>
</button>
<span className="font-['Playfair_Display'] italic tracking-tight flex-1 truncate">La nature de l'Essence</span>
<span className="text-xs text-[#4a4a4a] font-['Inter'] group-hover:text-[#f5f5f5]">14:10</span>
</div>
<div className="flex items-center gap-6 border border-[#4a4a4a] p-4 bg-[#f5f5f5] hover:bg-[#1a1a1a] hover:text-[#f5f5f5] hover:border-[#1a1a1a] transition-all group duration-300">
<span className="text-xs font-['Inter'] font-medium text-[#4a4a4a] w-6 group-hover:text-[#f5f5f5]">03.</span>
<button className="audio-play-btn w-8 h-8 flex items-center justify-center text-[#1a1a1a] group-hover:text-[#b8860b] transition-colors">
<iconify-icon className="stroke-[1.5]" height="20" icon="solar:play-linear" width="20"></iconify-icon>
</button>
<span className="font-['Playfair_Display'] italic tracking-tight flex-1 truncate">Le silence de la Périphérie</span>
<span className="text-xs text-[#4a4a4a] font-['Inter'] group-hover:text-[#f5f5f5]">11:45</span>
</div>
</div>
</div>

<div className="flex flex-col gap-12 lg:col-span-2 mt-12">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs border-b border-[#4a4a4a] pb-4">Pilier 03 — Les 4 Processus de Transformation</span>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-8 gap-y-8">
<div className="border border-[#4a4a4a] p-8 flex flex-col justify-between gap-8 bg-[#1a1a1a] text-[#f5f5f5]">
<div className="flex flex-col gap-2">
<span className="font-['Inter'] text-xs text-[#4a4a4a] uppercase tracking-widest">Processus 01</span>
<h3 className="font-['Playfair_Display'] italic tracking-tight text-2xl">L'Ancrage dans l'Absolu</h3>
</div>
<div className="flex items-center gap-4 border border-[#4a4a4a] p-3 w-full">
<button className="audio-play-btn text-[#f5f5f5] hover:text-[#b8860b]">
<iconify-icon height="20" icon="solar:play-linear" width="20"></iconify-icon>
</button>
<div className="flex-1 h-1 bg-[#4a4a4a]"></div>
<span className="text-xs text-[#4a4a4a]">45:00</span>
</div>
<a className="border border-[#b8860b] text-[#b8860b] text-center py-3 uppercase tracking-wider text-xs hover:bg-[#b8860b] hover:text-[#1a1a1a] transition-colors" href="#">Télécharger le support</a>
</div>
<div className="border border-[#4a4a4a] p-8 flex flex-col justify-between gap-8 bg-[#1a1a1a] text-[#f5f5f5]">
<div className="flex flex-col gap-2">
<span className="font-['Inter'] text-xs text-[#4a4a4a] uppercase tracking-widest">Processus 02</span>
<h3 className="font-['Playfair_Display'] italic tracking-tight text-2xl">La Déconstruction des Murs</h3>
</div>
<div className="flex items-center gap-4 border border-[#4a4a4a] p-3 w-full">
<button className="audio-play-btn text-[#f5f5f5] hover:text-[#b8860b]">
<iconify-icon height="20" icon="solar:play-linear" width="20"></iconify-icon>
</button>
<div className="flex-1 h-1 bg-[#4a4a4a]"></div>
<span className="text-xs text-[#4a4a4a]">52:10</span>
</div>
<a className="border border-[#b8860b] text-[#b8860b] text-center py-3 uppercase tracking-wider text-xs hover:bg-[#b8860b] hover:text-[#1a1a1a] transition-colors" href="#">Télécharger le support</a>
</div>
</div><div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-8 gap-y-8">
<div className="border border-[#4a4a4a] p-8 flex flex-col justify-between gap-8 bg-[#1a1a1a] text-[#f5f5f5]">
<div className="flex flex-col gap-2">
<span className="font-['Inter'] text-xs text-[#4a4a4a] uppercase tracking-widest">Processus 01</span>
<h3 className="font-['Playfair_Display'] italic tracking-tight text-2xl">L'Ancrage dans l'Absolu</h3>
</div>
<div className="flex items-center gap-4 border border-[#4a4a4a] p-3 w-full">
<button className="audio-play-btn text-[#f5f5f5] hover:text-[#b8860b]">
<iconify-icon height="20" icon="solar:play-linear" width="20"></iconify-icon>
</button>
<div className="flex-1 h-1 bg-[#4a4a4a]"></div>
<span className="text-xs text-[#4a4a4a]">45:00</span>
</div>
<a className="border border-[#b8860b] text-[#b8860b] text-center py-3 uppercase tracking-wider text-xs hover:bg-[#b8860b] hover:text-[#1a1a1a] transition-colors" href="#">Télécharger le support</a>
</div>
<div className="border border-[#4a4a4a] p-8 flex flex-col justify-between gap-8 bg-[#1a1a1a] text-[#f5f5f5]">
<div className="flex flex-col gap-2">
<span className="font-['Inter'] text-xs text-[#4a4a4a] uppercase tracking-widest">Processus 02</span>
<h3 className="font-['Playfair_Display'] italic tracking-tight text-2xl">La Déconstruction des Murs</h3>
</div>
<div className="flex items-center gap-4 border border-[#4a4a4a] p-3 w-full">
<button className="audio-play-btn text-[#f5f5f5] hover:text-[#b8860b]">
<iconify-icon height="20" icon="solar:play-linear" width="20"></iconify-icon>
</button>
<div className="flex-1 h-1 bg-[#4a4a4a]"></div>
<span className="text-xs text-[#4a4a4a]">52:10</span>
</div>
<a className="border border-[#b8860b] text-[#b8860b] text-center py-3 uppercase tracking-wider text-xs hover:bg-[#b8860b] hover:text-[#1a1a1a] transition-colors" href="#">Télécharger le support</a>
</div>
</div>
</div>

<div className="flex flex-col gap-12 lg:col-span-2 mt-12">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs border-b border-[#4a4a4a] pb-4">Pilier 04 — Les 5 Intentions d'Éveil</span>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
<div className="aspect-[3/4] bg-[#1a1a1a] border border-[#4a4a4a] flex flex-col items-center justify-center p-4 text-center hover:border-[#b8860b] transition-colors cursor-pointer group">
<span className="font-['Inter'] text-xs text-[#4a4a4a] uppercase tracking-widest mb-4 group-hover:text-[#b8860b] transition-colors">01</span>
<p className="font-['Playfair_Display'] font-medium text-[#f5f5f5] text-sm leading-tight">Je m'ouvre à ce qui est.</p>
</div>
<div className="aspect-[3/4] bg-[#1a1a1a] border border-[#4a4a4a] flex flex-col items-center justify-center p-4 text-center hover:border-[#b8860b] transition-colors cursor-pointer group">
<span className="font-['Inter'] text-xs text-[#4a4a4a] uppercase tracking-widest mb-4 group-hover:text-[#b8860b] transition-colors">02</span>
<p className="font-['Playfair_Display'] font-medium text-[#f5f5f5] text-sm leading-tight">Je lâche la Périphérie.</p>
</div>
<div className="aspect-[3/4] bg-[#1a1a1a] border border-[#4a4a4a] flex flex-col items-center justify-center p-4 text-center hover:border-[#b8860b] transition-colors cursor-pointer group">
<span className="font-['Inter'] text-xs text-[#4a4a4a] uppercase tracking-widest mb-4 group-hover:text-[#b8860b] transition-colors">03</span>
<p className="font-['Playfair_Display'] font-medium text-[#f5f5f5] text-sm leading-tight">J'habite le silence.</p>
</div>
<div className="aspect-[3/4] bg-[#1a1a1a] border border-[#4a4a4a] flex flex-col items-center justify-center p-4 text-center hover:border-[#b8860b] transition-colors cursor-pointer group">
<span className="font-['Inter'] text-xs text-[#4a4a4a] uppercase tracking-widest mb-4 group-hover:text-[#b8860b] transition-colors">04</span>
<p className="font-['Playfair_Display'] font-medium text-[#f5f5f5] text-sm leading-tight">J'accepte la descente.</p>
</div>
<div className="aspect-[3/4] bg-[#1a1a1a] border border-[#4a4a4a] flex flex-col items-center justify-center p-4 text-center hover:border-[#b8860b] transition-colors cursor-pointer group hidden md:flex">
<span className="font-['Inter'] text-xs text-[#4a4a4a] uppercase tracking-widest mb-4 group-hover:text-[#b8860b] transition-colors">05</span>
<p className="font-['Playfair_Display'] font-medium text-[#f5f5f5] text-sm leading-tight">Je suis l'Origine.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1a1a1a] text-[#f5f5f5] py-32 px-6 md:px-12 lg:px-24" id="part3">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-16">
<span className="font-['Inter'] font-normal uppercase tracking-widest text-[#b8860b] text-xs">Partie 03 — L'Instinct</span>
<div className="font-['Playfair_Display'] italic tracking-tight text-xl md:text-3xl leading-relaxed flex flex-col gap-8 max-w-3xl">
<p className="">Certains savent d'instinct ce dont ils ont besoin.<br/>
                Pas besoin d'un chemin balisé. Pas besoin d'un ordre.</p>
<p className="">Juste une question qui résonne. Un enseignement qui tombe au bon moment. Un processus qui s'impose de lui-même.</p>
<p className="text-[#b8860b]">Si c'est vous — vous êtes au bon endroit.<br/>
                Faites confiance à ce qui attire votre regard.<br/>
                C'est rarement un hasard.</p>
</div>
<a className="mt-12 bg-[#b8860b] text-[#f5f5f5] py-5 px-10 uppercase font-normal tracking-widest text-xs hover:bg-[#966d09] transition-colors duration-300" href="#part2">
                Explorer les ressources libres
            </a>
</div>
</section>
<footer className="bg-[#1a1a1a] border-t border-[#4a4a4a] py-12 text-center text-[#4a4a4a] text-xs uppercase tracking-widest font-['Inter']">
<span>ORIGIN — Jean-Luc De Wachter</span>
</footer>



    </>
  );
}
