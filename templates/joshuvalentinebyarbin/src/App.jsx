import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const audio = document.getElementById('audioPlayer');
            const playBtn = document.getElementById('playBtn');
            const iconPlay = document.getElementById('iconPlay');
            const iconPause = document.getElementById('iconPause');
            const volumeSlider = document.getElementById('volumeSlider');
            const volumeProgress = document.getElementById('volumeProgress');
            const volumeLabel = document.getElementById('volumeLabel');
            const muteBtn = document.getElementById('muteBtn');
            const iconVol = document.getElementById('iconVol');

            let isPlaying = false;
            let lastVolume = 0.5;

            // Initialize volume
            audio.volume = 0.5;

            // Toggle Play/Pause
            playBtn.addEventListener('click', () => {
                if (isPlaying) {
                    audio.pause();
                    iconPlay.classList.remove('hidden');
                    iconPause.classList.add('hidden');
                } else {
                    audio.play().catch(e => console.log("Audio play failed, interaction required", e));
                    iconPlay.classList.add('hidden');
                    iconPause.classList.remove('hidden');
                }
                isPlaying = !isPlaying;
            });

            // Update Volume & Slider visual
            const updateVolume = (val) => {
                const percentage = val;
                audio.volume = percentage / 100;
                volumeLabel.textContent = Math.round(percentage) + '%';
                volumeProgress.style.width = percentage + '%';

                // Update Icons based on volume
                if (percentage == 0) {
                    iconVol.setAttribute('icon', 'solar:volume-cross-linear');
                } else if (percentage < 40) {
                    iconVol.setAttribute('icon', 'solar:volume-small-linear');
                } else {
                    iconVol.setAttribute('icon', 'solar:volume-loud-linear');
                }
            };

            // Slider Input Event
            volumeSlider.addEventListener('input', (e) => {
                updateVolume(e.target.value);
            });

            // Mute Button Toggle
            muteBtn.addEventListener('click', () => {
                if (audio.volume > 0) {
                    lastVolume = volumeSlider.value;
                    volumeSlider.value = 0;
                    updateVolume(0);
                } else {
                    volumeSlider.value = lastVolume > 0 ? lastVolume : 50; // default to 50 if last was 0
                    updateVolume(volumeSlider.value);
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed transition-all duration-300 z-50 pt-6 top-0 right-0 left-0 pointer-events-none">

<div className="pointer-events-auto w-fit mx-auto glass-panel rounded-full px-6 py-2.5 flex items-center gap-6 shadow-lg shadow-rose-200/40 border border-white/60">

<button className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-md shadow-rose-300 hover:scale-105 active:scale-95 transition-all duration-300" id="playBtn">
<div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>

<iconify-icon className="ml-0.5" icon="solar:play-circle-linear" id="iconPlay" strokeWidth="1.5" width="24"></iconify-icon>

<iconify-icon className="hidden" icon="solar:pause-circle-linear" id="iconPause" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="h-6 w-px bg-slate-200"></div>

<div className="flex items-center gap-3">
<button className="text-slate-400 hover:text-rose-500 transition-colors flex items-center justify-center w-6 h-6" id="muteBtn">
<iconify-icon icon="solar:volume-loud-linear" id="iconVol" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="relative w-24 md:w-32 h-4 flex items-center group">
<input className="w-full z-10 relative" id="volumeSlider" max="100" min="0" type="range" value="50"/>

<div className="absolute top-1/2 -translate-y-1/2 left-0 h-1 bg-rose-500 rounded-full pointer-events-none" id="volumeProgress" style={{width: '50%'}}></div>
</div>
<span className="text-xs font-medium text-slate-500 tabular-nums w-8 text-right" id="volumeLabel">50%</span>
</div>
</div>


<audio id="audioPlayer" loop="" preload="auto" src="https://assets.mixkit.co/music/preview/mixkit-piano-horror-670.mp3"></audio>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse-soft"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-rose-100 to-transparent rounded-full blur-3xl opacity-60"></div>
</div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="absolute top-0 left-10 md:left-20 animate-float text-rose-300 opacity-60">
<iconify-icon icon="solar:heart-broken-linear" width="32"></iconify-icon>
</div>
<div className="absolute bottom-20 right-10 md:right-32 animate-float-slow text-purple-300 opacity-60">
<iconify-icon icon="solar:cupid-linear" width="40"></iconify-icon>
</div>
<span className="inline-block py-1 px-3 rounded-full bg-white/60 border border-rose-100 text-rose-600 text-xs tracking-widest font-medium mb-6 uppercase shadow-sm backdrop-blur-sm">
                February 14th
            </span>
<h1 className="md:text-8xl leading-[1.1] text-6xl font-medium text-slate-900 tracking-tight mb-6" style={{}}>Celebrate <span className="serif text-gradient italic">Love</span> <br/> in every moment.</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-500 max-w-xl mr-auto mb-10 ml-auto">
                Join us for an evening of romance, elegance, and unforgettable memories. A celebration dedicated to the two of us.
            </p>
</div>
</header>

<section className="relative py-24 md:py-32 px-6" id="story">
<div className="max-w-4xl mx-auto">
<div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-100/50 to-transparent rounded-full blur-2xl -mr-16 -mt-16"></div>
<div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-6">
<div className="flex items-center gap-3 mb-2">
<div className="h-px w-8 bg-rose-400"></div>
<span className="text-xs uppercase tracking-widest text-rose-500 font-medium">Our Story</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-800 tracking-tight serif italic">
                            A romance written in the stars.
                        </h2>
<p className="leading-loose font-light text-slate-500" style={{}}>We first met here ani here ani here</p>
<div className="flex gap-6 pt-4">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
<iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400">Since 2018</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
<iconify-icon icon="solar:heart-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400">Endless Love</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-rose-100/50 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
<img alt="Couple holding hands" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg shadow-black/5 animate-float-slow hidden md:block">
<iconify-icon className="text-rose-400" icon="solar:chat-round-like-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/50 relative" id="gifts">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-800 tracking-tight mb-4">Tokens of Affection</h2>
<p className="text-slate-400 font-light">Small gestures that mean the world.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-rose-100/60 transition-all duration-500 border border-slate-100 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
<iconify-icon className="text-rose-500" icon="solar:gift-linear" width="80"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-2">Surprise Gift</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">A carefully wrapped mystery box containing your favorite little things.</p>
<a className="text-sm font-medium text-rose-500 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Reveal
                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-rose-100/60 transition-all duration-500 border border-slate-100 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
<iconify-icon className="text-purple-500" icon="solar:wineglass-linear" width="80"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:wineglass-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-2">Dinner Date</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">A candlelight dinner at our favorite spot with jazz and wine.</p>
<a className="text-sm font-medium text-purple-500 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Menu
                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-rose-100/60 transition-all duration-500 border border-slate-100 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
<iconify-icon className="text-rose-400" icon="solar:rose-linear" width="80"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:rose-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-800 mb-2">Fresh Flowers</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">A bouquet of hand-picked roses to brighten the room.</p>
<a className="text-sm font-medium text-rose-400 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        See bouquet
                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden" id="gallery">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-800 tracking-tight serif italic">Captured Moments</h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-rose-300 hover:text-rose-500 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-rose-300 hover:text-rose-500 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 justify-center items-center">
<div className="bg-white p-3 pb-12 shadow-md rounded-sm transform -rotate-2 hover:rotate-0 transition-transform duration-500 hover:z-10 hover:shadow-xl w-full max-w-sm">
<div className="aspect-square bg-slate-100 overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Memory 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<p className="font-handwriting text-center text-slate-500 font-medium serif italic">First Date</p>
</div>
<div className="bg-white p-3 pb-12 shadow-md rounded-sm transform rotate-1 hover:rotate-0 transition-transform duration-500 hover:z-10 hover:shadow-xl w-full max-w-sm mt-8 md:mt-0">
<div className="aspect-square bg-slate-100 overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Memory 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<p className="font-handwriting text-center text-slate-500 font-medium serif italic">Summer Trip</p>
</div>
<div className="bg-white p-3 pb-12 shadow-md rounded-sm transform -rotate-1 hover:rotate-0 transition-transform duration-500 hover:z-10 hover:shadow-xl w-full max-w-sm">
<div className="aspect-square bg-slate-100 overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Memory 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<p className="font-handwriting text-center text-slate-500 font-medium serif italic">Paris</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-rose-100/40 to-transparent pointer-events-none"></div>

<div className="absolute top-10 left-10 text-rose-300 opacity-40 animate-float"><iconify-icon icon="solar:confetti-minimalistic-linear" width="24"></iconify-icon></div>
<div className="absolute bottom-10 right-20 text-purple-300 opacity-40 animate-float-slow"><iconify-icon icon="solar:confetti-minimalistic-linear" width="32"></iconify-icon></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="w-16 h-16 mx-auto bg-gradient-to-tr from-rose-400 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-300/50 mb-8 rotate-3">
<iconify-icon icon="solar:heart-shine-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-8 tracking-tight serif">
                "You are my today and all of my tomorrows."
            </h2>
<p className="text-slate-500 mb-10 font-light">
                Let's make this Valentine's Day another beautiful page in our story.
            </p>
<button className="px-10 py-4 bg-slate-900 text-white rounded-full font-medium tracking-wide hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Be My Valentine
            </button>
</div>
</section>

<footer className="border-t border-rose-100 py-12 bg-white/40">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
<div className="flex items-center gap-4 text-rose-300">
<div className="h-px w-12 bg-rose-200"></div>
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
<div className="h-px w-12 bg-rose-200"></div>
</div>
<div className="text-center space-y-2">
<p className="text-slate-900 font-medium tracking-wider text-sm uppercase">With Love</p>
<p className="text-slate-400 text-xs font-light">© 2024 Valentine Celebration</p>
</div>
<div className="flex gap-4 opacity-50">
<a className="text-slate-400 hover:text-rose-500 transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="16"></iconify-icon></a>
<a className="text-slate-400 hover:text-rose-500 transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
