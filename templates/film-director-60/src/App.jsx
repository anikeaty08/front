import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let modalPlayer;
        const modal = document.getElementById('videoModal');

        function openVideo(id, title, desc, tag) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalDesc').innerText = desc;
            document.getElementById('modalTag').innerText = tag;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';

            if (modalPlayer) {
                modalPlayer.loadVideoById(id);
            } else {
                modalPlayer = new YT.Player('modalPlayer', {
                    height: '100%', width: '100%', videoId: id,
                    playerVars: { 'autoplay': 1, 'modestbranding': 1, 'rel': 0, 'controls': 1 }
                });
            }
        }

        function closeModal() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            if (modalPlayer) modalPlayer.stopVideo();
        }

        window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>
<div className="scanlines"></div>
<div className="fixed inset-0 z-[100] hidden flex items-center justify-center p-4 md:p-10 modal-backdrop" id="videoModal">
<button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
<div className="lg:col-span-2 aspect-video bg-black border border-white/10 relative overflow-hidden">
<div className="w-full h-full" id="modalPlayer"></div>
</div>
<div className="space-y-6">
<div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2" id="modalTag">Transmission</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight uppercase" id="modalTitle">Video Title</h2>
</div>
<p className="text-sm text-zinc-400 font-normal leading-relaxed" id="modalDesc"></p>
<div className="pt-6 border-t border-white/10 text-[10px] font-mono text-zinc-500 uppercase">
<div className="grid grid-cols-2 gap-4">
<div><p className="text-zinc-600 mb-1">Director</p><p className="text-white">Shalev Maymoni</p></div>
<div><p className="text-zinc-600 mb-1">Year</p><p className="text-white">2024</p></div>
</div>
</div>
</div>
</div>
</div>
<nav className="fixed flex md:p-8 w-full z-40 pt-6 pr-6 pb-6 pl-6 top-0 left-0 items-center justify-between">
<div className="vhs-click cursor-pointer font-semibold tracking-tighter text-sm uppercase z-50 text-white">Shalev Maymoni</div>
<div className="hidden md:flex flex-row space-x-12 text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-500">
<a className="vhs-click hover:text-white" href="#work">Projects</a>
<a className="vhs-click hover:text-white" href="#about">Vision</a>
<a className="vhs-click hover:text-white" href="#contact">Contact</a>
</div>
</nav>
<section className="relative h-[70vh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#080808]">
<div className="flex flex-col z-10 text-center w-full max-w-7xl mx-auto px-6 relative items-center">
<div className="space-y-6">
<h1 className="reveal-up md:text-8xl lg:text-9xl text-6xl font-semibold text-white tracking-tighter uppercase vhs-click">Young Minds</h1>
<p className="reveal-up text-[10px] md:text-xs uppercase text-zinc-500 tracking-[0.4em] font-mono">Archive Series 01</p>
</div>
</div>
</section>
<section className="pb-32 px-6 relative" id="work">
<div className="max-w-6xl mx-auto">
<div className="mb-12 space-y-4">
<div className="flex gap-3 items-center">
<iconify-icon className="text-zinc-600" icon="solar:videocamera-linear" width="14"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">Live Visual Feed</span>
</div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight uppercase">Recent Productions</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
<div className="relative aspect-video group bg-black overflow-hidden cursor-pointer video-container" onclick="openVideo('FGiOZgCOPS0', 'A Sense of Purpose', 'A study of textures and meaning.', 'Series 001')">
<iframe className="absolute inset-0 w-full h-full grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" frameborder="0" src="https://www.youtube.com/embed/FGiOZgCOPS0?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=FGiOZgCOPS0&amp;controls=0&amp;modestbranding=1"></iframe>
<div className="absolute bottom-6 left-6 z-40">
<p className="text-[10px] font-mono text-zinc-200 uppercase mb-1">Project 01</p>
<p className="text-sm font-semibold uppercase text-white tracking-widest">A Sense of Purpose</p>
</div>
</div>
<div className="relative aspect-video group bg-black overflow-hidden cursor-pointer video-container" onclick="openVideo('szmgGMmpUlM', 'Dear Sun', 'Digital resonance.', 'Series 002')">
<iframe className="absolute inset-0 w-full h-full grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" frameborder="0" src="https://www.youtube.com/embed/szmgGMmpUlM?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=szmgGMmpUlM&amp;controls=0&amp;modestbranding=1"></iframe>
<div className="absolute bottom-6 left-6 z-40">
<p className="text-[10px] font-mono text-zinc-200 uppercase mb-1">Project 02</p>
<p className="text-sm font-semibold uppercase text-white tracking-widest">Dear Sun</p>
</div>
</div>
<div className="relative aspect-video group bg-black overflow-hidden cursor-pointer video-container" onclick="openVideo('wagzm9ENjM0', 'Freedom', 'Fragmented memories.', 'Series 003')">
<iframe className="absolute inset-0 w-full h-full grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" frameborder="0" src="https://www.youtube.com/embed/wagzm9ENjM0?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=wagzm9ENjM0&amp;controls=0&amp;modestbranding=1"></iframe>
<div className="absolute bottom-6 left-6 z-40">
<p className="text-[10px] font-mono text-zinc-200 uppercase mb-1">Project 03</p>
<p className="text-sm font-semibold uppercase text-white tracking-widest">Freedom</p>
</div>
</div>
</div>
<div className="mt-24 pt-16 border-t border-white/5">
<p className="text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-600 mb-12 text-center">Selected Collaborations</p>
<div className="flex flex-wrap justify-center items-end gap-x-12 gap-y-12 md:gap-x-16 px-4 max-w-5xl mx-auto">
<div className="brand-item">
<iconify-icon className="text-white" icon="simple-icons:ferrari" width="38"></iconify-icon>
</div>
<div className="brand-item">
<iconify-icon className="text-white" icon="simple-icons:maserati" width="42"></iconify-icon>
</div>
<div className="brand-item flex flex-col gap-2 items-center">
<img alt="Harley-Davidson" className="white-img-filter" src="https://upload.wikimedia.org/wikipedia/commons/d/de/Harley-Davidson_logo.svg"/>
<span className="text-[8px] font-bold tracking-[0.2em] font-mono text-white leading-none">HARLEY DAVIDSON</span>
</div>
<div className="brand-item">
<span className="text-lg font-bold tracking-[-0.05em] italic font-sans leading-none text-white">HOKA</span>
</div>
<div className="brand-item">
<span className="text-[11px] font-bold tracking-[0.2em] font-mono text-white">FACTORY 54</span>
</div>
<div className="brand-item">
<span className="text-[11px] font-medium tracking-[0.1em] font-sans underline underline-offset-4 decoration-white/20 text-white">SAUCONY</span>
</div>
<div className="brand-item">
<span className="text-[10px] font-semibold tracking-[0.3em] font-mono italic text-white">RUDY PROJECT</span>
</div>
<div className="brand-item">
<iconify-icon className="text-white" icon="simple-icons:aiways" width="36"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-24 md:py-40 px-6 bg-black border-t border-zinc-900" id="contact">
<div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20">
<div className="">
<h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-12 flex items-center gap-3">
<iconify-icon icon="solar:letter-linear"></iconify-icon>Transmission
                </h2>
<h3 className="vhs-click text-5xl md:text-8xl font-semibold tracking-tighter text-white mb-10 uppercase">Connect</h3>
<a className="vhs-click block md:text-xl underline underline-offset-8 text-lg text-zinc-400 tracking-tight font-mono" href="mailto:hello@shalevmaymoni.com">shalevmaymoniprods@gmail.com</a>
</div>
<div className="flex flex-col justify-end border-t border-zinc-900 pt-12 md:border-t-0 md:pt-0">
<div className="grid grid-cols-2 gap-8">
<div className="">
<span className="text-[10px] font-mono text-zinc-600 uppercase block mb-4">Social</span>
<ul className="space-y-2 text-xs uppercase tracking-widest text-zinc-400">
<li className=""><a className="vhs-click hover:text-white" href="#">Instagram</a></li>
</ul>
</div>
<div>
<span className="text-[10px] font-mono text-zinc-600 uppercase block mb-4">Base</span>
<p className="text-xs uppercase tracking-widest text-zinc-400">Tel Aviv / Global</p>
</div>
</div>
</div>
</div>
<footer className="max-w-6xl mx-auto w-full mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[9px] text-zinc-700 font-mono uppercase tracking-[0.2em]">
<p>© 2024 Shalev Maymoni productions</p>
<p>Signal strength: optimal</p>
</footer>
</section>


    </>
  );
}
