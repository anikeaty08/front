import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function toggleMusic() {
            const audio = document.getElementById('bg-music');
            const playIcon = document.getElementById('play-icon');
            const pauseIcon = document.getElementById('pause-icon');
            const visualizer = document.getElementById('visualizer');
            const trackName = document.getElementById('track-name');

            if (audio.paused) {
                audio.play();
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
                visualizer.classList.remove('paused-anim');
                trackName.textContent = "Piano Moment";
            } else {
                audio.pause();
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
                visualizer.classList.add('paused-anim');
                trackName.textContent = "Click to Resume";
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<audio id="bg-music" loop="">
<source src="https://cdn.pixabay.com/download/audio/2022/10/05/audio_6862922cb8.mp3" type="audio/mp3"/>
</audio>

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-rose-950 via-rose-900 to-rose-950 opacity-90"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl mix-blend-screen animate-[float_10s_ease-in-out_infinite]"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl mix-blend-screen animate-[float_12s_ease-in-out_infinite_reverse]"></div>
<div className="absolute top-0 left-[10%] text-rose-300/30 animate-drift text-2xl">❀</div>
<div className="absolute top-0 left-[30%] text-rose-200/20 animate-drift delay-2000 text-xl">Are</div>
<div className="absolute top-0 left-[60%] text-rose-300/30 animate-drift delay-1000 text-3xl">❀</div>
<div className="absolute top-0 left-[85%] text-rose-200/20 animate-drift delay-3000 text-xl">Love</div>
<div className="absolute top-0 left-[50%] text-rose-400/20 animate-drift delay-4000 text-2xl">❀</div>
</div>

<button className="fixed top-6 right-6 z-40 mix-blend-plus-lighter opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer flex items-center gap-3 bg-rose-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-100/10 hover:bg-rose-900/50" id="music-toggle" onclick="toggleMusic()">
<div id="play-icon">
<iconify-icon className="text-xl text-amber-100" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="hidden" id="pause-icon">
<iconify-icon className="text-xl text-amber-100" icon="solar:pause-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col items-start text-left">
<span className="text-[10px] tracking-widest uppercase font-medium text-amber-100/60">Music</span>
<span className="text-xs tracking-wide font-medium text-amber-100" id="track-name">Click to Play</span>
</div>

<div className="flex gap-0.5 items-end h-4 paused-anim ml-1" id="visualizer">
<div className="w-0.5 bg-amber-100/80 h-2 animate-[pulse_1s_infinite]"></div>
<div className="w-0.5 bg-amber-100/80 h-4 animate-[pulse_1.5s_infinite]"></div>
<div className="w-0.5 bg-amber-100/80 h-3 animate-[pulse_1.2s_infinite]"></div>
</div>
</button>

<main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center">

<section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
<div className="mb-6 opacity-0 animate-[fadeInSlow_2s_ease-out_forwards]">
<iconify-icon className="text-4xl text-amber-100/80" icon="solar:heart-broken-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-amber-50 mb-4 opacity-0 animate-[fadeInSlow_2s_ease-out_0.5s_forwards]">
                Iss Promise Day... <br/>
<span className="italic font-light text-rose-200 font-[Great_Vibes] text-5xl md:text-7xl lg:text-8xl mt-2 block">dil se ek vaada.</span>
</h1>
<p className="font-light text-rose-200/80 text-sm md:text-base tracking-wide max-w-md mx-auto mt-6 opacity-0 animate-[fadeInSlow_2s_ease-out_1s_forwards]">
                A STORY OF LOVE, MISTAKES, FORGIVENESS, AND FOREVER.
            </p>
<div className="mt-12 opacity-0 animate-[fadeInSlow_2s_ease-out_1.5s_forwards]">
<iconify-icon className="text-2xl text-rose-200/50 animate-bounce" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</section>

<section className="w-full max-w-2xl px-6 py-20">
<div className="bg-[#fffdf5] text-slate-800 p-8 md:p-12 lg:p-16 rounded-sm shadow-[0_0_50px_-12px_rgba(255,200,200,0.3)] relative overflow-hidden transform rotate-1 transition hover:rotate-0 duration-700 ease-out">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply pointer-events-none"></div>
<div className="z-10 relative">
<div className="flex justify-between items-start mb-8 border-b border-slate-200 pb-4">
<span className="font-serif italic text-slate-500 text-lg">Feb 11, 2025</span>
<iconify-icon className="text-slate-400 text-2xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="font-[Great_Vibes] text-4xl md:text-5xl text-rose-900 mb-6">Meri Jaan,</h2>
<div className="font-serif text-base md:text-lg leading-relaxed text-slate-700 space-y-6">
<p className="">
                            Tumhe pata hai na tum mere liye kya ho? <span className="italic text-rose-800">You are my entire world.</span>
</p>
<p className="">Main jaanti hoon main thoda (okay, bohot zyada) pagal hoon and chutiya bhi but jo bhi hu tera hu bossy. Ek total "girly girl" jiske nakhre aur mood swings kabhi kabhi sambhalna mushkil ho jaata hai. I know I annoy you. I know main chhoti-chhoti baaton pe i become a cry baby, aur kabhi kabhi bina soche kuch bhi bol deti hoon.</p>
<p className="">
                            I'm sorry. <span className="font-semibold text-rose-900">Dil se sorry.</span>
</p>
<p className="">
                            Iss shor bhari duniya mein, mujhe tumhara <span className="italic">sukoon</span> banna tha... par shayad maine hi tumhe stress diya hai. I should have been your peace, your safe place, but I let my emotions get the best of me.
                        </p>
<p className="">Par sach ye hai, baby... main tumhare bina adhoori hoon. Tum sirf mere panda nahi, mere bestie ho, meri strength ho. I love you endlessly, even when I fail to show it the right way.</p>
</div>
<div className="mt-12 flex justify-end">
<div className="text-right">
<p className="text-3xl text-rose-900 font-[Great_Vibes]">Pagal monkey,</p>
<p className="font-serif text-xs uppercase tracking-widest text-slate-400 mt-1">Forever Yours</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-xl px-6 py-24 text-center">
<h3 className="font-serif text-2xl md:text-3xl text-amber-100 mb-12 tracking-tight">
                Iss Promise Day, main vaada karti hoon...
            </h3>
<div className="text-left space-y-8">

<div className="group flex gap-6 items-start p-4 rounded-xl transition duration-500 hover:bg-rose-900/20 border border-transparent hover:border-rose-800/30">
<div className="mt-1 p-2 rounded-full bg-rose-900/40 text-rose-200 group-hover:scale-110 transition duration-500">
<iconify-icon className="text-xl block" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h4 className="text-rose-100 font-serif text-lg mb-1 group-hover:text-amber-100 transition">To Listen More</h4>
<p className="leading-relaxed text-sm font-light text-rose-200/60">Main vaada karta hoon ki kuch bhi hi i will listen to you. I will try to understand your silence as much as your words.</p>
</div>
</div>

<div className="group flex gap-6 items-start p-4 rounded-xl transition duration-500 hover:bg-rose-900/20 border border-transparent hover:border-rose-800/30">
<div className="mt-1 p-2 rounded-full bg-rose-900/40 text-rose-200 group-hover:scale-110 transition duration-500">
<iconify-icon className="text-xl block" icon="solar:heart-shine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h4 className="text-rose-100 font-serif text-lg mb-1 group-hover:text-amber-100 transition">To Be Your Peace</h4>
<p className="leading-relaxed text-sm font-light text-rose-200/60">Main koshish karunga ki main tumhari pareshani nahi, tumhara sukoon banu. I promise to be calmer and more patient with us.</p>
</div>
</div>

<div className="group flex gap-6 items-start p-4 rounded-xl transition duration-500 hover:bg-rose-900/20 border border-transparent hover:border-rose-800/30">
<div className="mt-1 p-2 rounded-full bg-rose-900/40 text-rose-200 group-hover:scale-110 transition duration-500">
<iconify-icon className="text-xl block" icon="solar:infinity-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h4 className="text-rose-100 font-serif text-lg mb-1 group-hover:text-amber-100 transition">To Never Give Up</h4>
<p className="leading-relaxed text-sm font-light text-rose-200/60">
                            Chahe kitni bhi ladai ho, main humesha wapas aaungi. Yeh vaada aaj ke liye nahi, puri zindagi ke liye hai.
                        </p>
</div>
</div>
</div>
</section>

<div className="w-full flex justify-center py-10 opacity-50">
<div className="w-px h-24 bg-gradient-to-b from-transparent via-amber-100/40 to-transparent"></div>
</div>

<section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pb-20">
<p className="font-serif italic text-xl md:text-2xl text-rose-200/80 mb-6 font-light">
                Bas itna kehna tha...
            </p>
<h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-amber-50 leading-tight tracking-tight max-w-3xl mx-auto drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                “Tum sirf meri mohabbat nahi ho...<br/>
<span className="text-rose-300">tum meri zindagi ho.</span>”
            </h2>
<div className="mt-16 relative">
<div className="absolute inset-0 bg-rose-500 blur-3xl opacity-20 animate-pulse"></div>
<iconify-icon className="text-6xl text-rose-500 drop-shadow-lg relative z-10 animate-[pulse_3s_ease-in-out_infinite]" icon="solar:heart-bold"></iconify-icon>
</div>
<div className="mt-24 text-rose-900/20 text-xs font-serif tracking-widest uppercase">
                Happy Promise Day
            </div>
</section>
</main>


    </>
  );
}
