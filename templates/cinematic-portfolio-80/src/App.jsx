import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let players = {};

        function onYouTubeIframeAPIReady() {
            players['player1'] = new YT.Player('player1', {
                videoId: 'FGiOZgCOPS0',
                playerVars: {
                    'autoplay': 1,
                    'mute': 1,
                    'loop': 1,
                    'playlist': 'FGiOZgCOPS0',
                    'controls': 0,
                    'modestbranding': 1,
                    'rel': 0,
                    'showinfo': 0,
                    'iv_load_policy': 3
                },
                events: {
                    'onReady': (e) => e.target.playVideo()
                }
            });

            players['player2'] = new YT.Player('player2', {
                videoId: 'szmgGMmpUlM',
                playerVars: {
                    'autoplay': 1,
                    'mute': 1,
                    'loop': 1,
                    'playlist': 'szmgGMmpUlM',
                    'controls': 0,
                    'modestbranding': 1,
                    'rel': 0,
                    'showinfo': 0,
                    'iv_load_policy': 3
                },
                events: {
                    'onReady': (e) => e.target.playVideo()
                }
            });
        }

        function toggleMute(playerId, btn) {
            const player = players[playerId];
            const icon = btn.querySelector('.sound-icon');
            
            if (player.isMuted()) {
                player.unMute();
                icon.setAttribute('icon', 'solar:volume-loud-linear');
                btn.style.opacity = '1';
            } else {
                player.mute();
                icon.setAttribute('icon', 'solar:muted-linear');
                btn.style.opacity = '0.6';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>
<div className="scanlines"></div>

<div className="fixed bottom-8 right-8 z-50 pointer-events-none text-zinc-600 hidden md:block">
<span className="osd-text text-[10px] uppercase">Tape Status: Playing</span>
</div>
<nav className="fixed flex w-full z-40 p-6 md:p-8 top-0 left-0 items-center justify-between">
<div className="vhs-click cursor-pointer font-bold tracking-tighter text-sm uppercase z-50 text-white">
            Shalev Maymoni
        </div>
<div className="hidden md:flex flex-row space-x-12 text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-500">
<a className="vhs-click transition-colors duration-200 relative group hover:text-white" href="#work">Projects</a>
<a className="vhs-click transition-colors duration-200 group hover:text-white relative" href="#about">Vision</a>
<a className="vhs-click transition-colors duration-200 relative group hover:text-white" href="#contact">Contact</a>
</div>
<button className="md:hidden z-50 text-white vhs-click">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</nav>
<section className="relative h-[80vh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#080808]">
<div className="flex flex-col z-10 text-center w-full max-w-7xl mx-auto px-6 relative items-center">
<div className="space-y-6">
<h1 className="reveal-up delay-100 md:text-8xl lg:text-9xl leading-none vhs-click text-6xl font-bold text-white tracking-tighter uppercase">
                    Young Minds
                </h1>
<p className="reveal-up delay-200 text-[10px] md:text-xs uppercase text-zinc-500 tracking-[0.4em] font-mono">Archive Series 01</p>
</div>
</div>
</section>

<section className="pb-32 px-6 relative" id="about">
<div className="max-w-6xl mx-auto">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="space-y-4">
<div className="flex gap-3 items-center">
<iconify-icon className="text-zinc-600" icon="solar:videocamera-linear" width="14"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">Dual Sync Transmission</span>
</div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight uppercase">Visual Feed 001/002</h2>
</div>
<p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest max-w-xs md:text-right">
                    Capturing the raw essence of movement through high-contrast monochrome optics.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">

<div className="relative aspect-video group bg-black overflow-hidden">
<div className="absolute inset-0 z-30 pointer-events-none border border-white/5"></div>
<div className="absolute top-4 left-4 z-40 flex items-center gap-2">
</div>
<div className="video-clean-container">
<div className="w-full h-full" id="player1">
<iframe allow="autoplay; encrypted-media" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/FGiOZgCOPS0?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=FGiOZgCOPS0&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3" style={{filter: 'grayscale(100%) contrast(120%)', opacity: '0.8'}}></iframe>
</div>
</div>
<button className="sound-btn absolute bottom-4 right-4 z-50 text-white/70 p-3 flex items-center justify-center" onclick="toggleMute('player1', this)">
<iconify-icon className="sound-icon" icon="solar:muted-linear" width="16"></iconify-icon>
</button>
</div>

<div className="relative aspect-video group bg-black overflow-hidden">
<div className="absolute inset-0 z-30 pointer-events-none border border-white/5"></div>
<div className="absolute top-4 left-4 z-40 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
</div>
<div className="video-clean-container">
<div className="w-full h-full" id="player2">
<iframe allow="autoplay; encrypted-media" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/szmgGMmpUlM?si=QqeqH06UZas9LIQF&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=szmgGMmpUlM&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3"></iframe>
</div>
</div>
<button className="sound-btn absolute bottom-4 right-4 z-50 text-white/70 p-3 flex items-center justify-center" onclick="toggleMute('player2', this)">
<iconify-icon className="sound-icon" icon="solar:muted-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<section className="relative bg-black border-t border-zinc-900" id="work">
<div className="group relative block cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] md:h-screen">
<div className="relative overflow-hidden bg-zinc-900/20 vhs-image-container">
<img alt="Project" className="opacity-40 w-full h-full object-cover absolute inset-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center p-8 md:p-20 bg-black group-hover:bg-zinc-950 transition-colors border-l border-zinc-900">
<span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Project Alpha</span>
<h3 className="vhs-click text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 uppercase">Dark<br/>Matter</h3>
<p className="text-xs text-zinc-500 font-mono tracking-tight uppercase max-w-xs leading-relaxed">Systematic motion design for digital environments. Exploring the boundaries between signal and noise.</p>
</div>
</div>
</div>
</section>
<section className="relative py-24 md:py-40 px-6 bg-black border-t border-zinc-900" id="contact">
<div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20">
<div className="">
<h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-12 flex items-center gap-3">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                    Transmission
                </h2>
<h3 className="vhs-click text-5xl md:text-8xl font-bold tracking-tighter text-white mb-10 uppercase">Connect</h3>
<div className="space-y-4">
<a className="vhs-click block text-lg md:text-xl text-zinc-400 hover:text-white transition-colors font-mono tracking-tight underline decoration-zinc-800 underline-offset-8" href="mailto:hello@shalevmaymoni.com">
                        hello@shalevmaymoni.com
                    </a>
</div>
</div>
<div className="flex flex-col justify-end">
<div className="border-t border-zinc-900 pt-12">
<div className="grid grid-cols-2 gap-8">
<div className="">
<span className="text-[10px] font-mono text-zinc-600 uppercase block mb-4">Social</span>
<ul className="space-y-2 text-xs uppercase tracking-widest text-zinc-400">
<li className=""><a className="vhs-click hover:text-white" href="#">Instagram</a></li>
<li className=""><a className="vhs-click hover:text-white" href="#">Vimeo</a></li>
</ul>
</div>
<div className="">
<span className="text-[10px] font-mono text-zinc-600 uppercase block mb-4">Base</span>
<p className="text-xs uppercase tracking-widest text-zinc-400">Tel Aviv / Global</p>
</div>
</div>
</div>
</div>
</div>
<footer className="max-w-6xl mx-auto w-full mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[9px] text-zinc-700 font-mono uppercase tracking-[0.2em]">
<p>© 2024 Shalev Maymoni productions</p>
<p className="mt-4 md:mt-0 italic">Signal strength: 100%</p>
</footer>
</section>


    </>
  );
}
