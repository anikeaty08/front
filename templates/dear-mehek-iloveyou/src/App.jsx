import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // YouTube API Integration for Audio
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;
        var isPlaying = false;
        var btn = document.getElementById('music-toggle');
        var btnText = document.getElementById('music-text');
        var btnIcon = btn.querySelector('iconify-icon');

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player-container', {
                height: '0',
                width: '0',
                videoId: 'du7CTPkDPmc', // Video ID from your link
                playerVars: {
                    'playsinline': 1,
                    'controls': 0,
                    'loop': 1,
                    'playlist': 'du7CTPkDPmc' // Required for looping
                },
                events: {
                    'onReady': onPlayerReady
                }
            });
        }

        function onPlayerReady(event) {
            btn.addEventListener('click', function() {
                if (isPlaying) {
                    player.pauseVideo();
                    btnText.innerText = "Play Song";
                    btnIcon.setAttribute('icon', 'solar:music-note-linear');
                    btnIcon.classList.remove('animate-spin');
                    btn.classList.remove('border-rose-400', 'bg-rose-50');
                    isPlaying = false;
                } else {
                    player.playVideo();
                    player.setVolume(50);
                    btnText.innerText = "Playing...";
                    btnIcon.setAttribute('icon', 'solar:vinyl-record-linear');
                    btnIcon.classList.add('animate-spin');
                    btn.classList.add('border-rose-400', 'bg-rose-50');
                    isPlaying = true;
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 opacity-60 blur-sm bg-cover bg-center" data-alpha-mask="80" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79508096-5ce9-44f6-a966-763d5e8f6d4b_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-100/50 bg-white/80 backdrop-blur-xl transition-all duration-300">
<div className="flex h-14 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-sm font-semibold tracking-tighter text-rose-600 uppercase font-geist" href="#">
<span className="text-zinc-900 font-geist">সুখ.🌸</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-500 hover:text-rose-600 transition-colors font-geist" href="#promise">The Promise</a>
<a className="text-xs font-medium text-zinc-500 hover:text-rose-600 transition-colors font-geist" href="#memories">Our Memories</a>
<a className="text-xs font-medium text-zinc-500 hover:text-rose-600 transition-colors font-geist" href="#words">Words</a>
</div>
<button className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 hover:border-rose-200 transition-all" id="music-toggle">
<iconify-icon className="text-zinc-500 group-hover:text-rose-600 transition-colors" icon="solar:music-note-linear"></iconify-icon>
<span className="text-[10px] uppercase group-hover:text-zinc-900 font-medium text-zinc-500 tracking-wide font-geist" id="music-text">Play Song</span>
</button>
</div>
</nav>

<header className="min-h-screen flex flex-col overflow-hidden text-center pt-20 pr-6 pl-6 relative items-center justify-center">

<div className="relative z-10 max-w-3xl mx-auto space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-100 bg-rose-50/50">
<iconify-icon className="text-rose-500 text-sm" icon="solar:heart-angle-linear"></iconify-icon>
<span className="text-xs font-medium text-rose-600 tracking-wide uppercase font-geist">My Valentine</span>
</div>
<h1 className="leading-[1.1] md:text-7xl lg:text-8xl lg:bg-clip-text lg:text-transparent text-5xl italic tracking-tight font-playfair bg-gradient-to-tl from-red-400 to-red-600">Dearest Mehek</h1>
<p className="text-xl md:text-3xl text-zinc-600 leading-relaxed font-playfair font-medium">
                "In a world of temporary things, you are a perpetual feeling. A collection of moments, words, and silences that I want to keep forever."
            </p>
<div className="pt-8 flex justify-center">
<a className="group flex flex-col items-center gap-2 text-zinc-400 hover:text-rose-600 transition-colors duration-500" href="#memories">
<span className="text-[10px] uppercase text-red-600 tracking-widest font-geist">Explore Us</span>
<iconify-icon className="animate-bounce text-xl" height="20" icon="solar:arrow-down-outline" style={{color: 'rgb(225, 29, 72)'}} width="20"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="memories">
<div className="max-w-6xl mx-auto px-6 mb-12 flex items-end justify-between">
<div className="">
<h2 className="text-sm font-semibold text-rose-600 tracking-tight uppercase mb-2 font-geist">The Photobooth</h2>
<h3 className="text-3xl md:text-4xl tracking-tight text-zinc-900 font-playfair font-medium">Fragments of Time</h3>
</div>
<div className="hidden md:block text-right">
<p className="text-zinc-500 text-sm max-w-xs font-geist">Every pixel holds a heartbeat,<br/>every frame a memory of you.</p>
</div>
</div>

<div className="flex gap-6 w-full overflow-hidden mb-6 opacity-90 mask-linear-gradient">
<div className="flex gap-6 animate-scroll min-w-full">

<img alt="Love" className="hover:grayscale-0 transition-all duration-700 hover:scale-[1.02] w-96 h-64 object-auto rounded-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/057f4509-18e0-46b2-82fa-7b011ea8b9e9_800w.jpg"/>
<img alt="Smile" className="hover:grayscale-0 transition-all duration-700 hover:scale-[1.02] w-96 h-64 object-cover bg-center rounded-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79508096-5ce9-44f6-a966-763d5e8f6d4b_800w.jpg"/>
<img alt="Hands" className="hover:grayscale-0 transition-all duration-700 hover:scale-[1.02] w-64 h-64 object-cover bg-center rounded-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8fd64cd-f77d-44bd-93ea-2ba18705ea4a_800w.jpg"/>
<img alt="Flowers" className="hover:grayscale-0 transition-all duration-700 hover:scale-[1.02] w-80 h-64 object-cover bg-center rounded-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d283089b-6d08-447a-84d2-e7454814837c_800w.jpg"/>
<img alt="Flowers" className="hover:grayscale-0 transition-all duration-700 hover:scale-[1.02] w-80 h-64 object-cover bg-center rounded-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6387455a-6fd6-49e1-bdcd-3448a40ec280_800w.jpg"/>
<img alt="Flowers" className="hover:grayscale-0 transition-all duration-700 hover:scale-[1.02] w-80 h-64 object-cover bg-center rounded-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eba780d2-e815-4033-a691-d02275cae08d_800w.jpg"/>



<img alt="Love" className="h-64 w-96 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b2f148e-1c6c-4263-9ebd-9448d6f56ce0_320w.jpg"/>
<img alt="Hands" className="h-64 w-64 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7de4624-8129-47f4-a187-8c082c4cba0c_320w.jpg"/>
<img alt="Smile" className="h-64 w-96 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64964294-62f8-47e3-9525-4e75f480c025_320w.jpg"/>
<img alt="Flowers" className="h-64 w-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99e6d553-7b3a-4180-b61a-9c29fdfe2665_320w.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50 border-t border-zinc-100" id="words">
<div className="max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:border-rose-200 transition-all duration-500 group">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-geist">Shakespeare</span>
</div>
<blockquote className="text-2xl text-zinc-800 leading-relaxed group-hover:text-rose-900 transition-colors font-playfair font-medium">
                        "Doubt thou the stars are fire; Doubt that the sun doth move; Doubt truth to be a liar; But never doubt I love."
                    </blockquote>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:border-rose-200 transition-all duration-500 group md:translate-y-12">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-geist">Rumi</span>
</div>
<blockquote className="text-2xl text-zinc-800 leading-relaxed group-hover:text-rose-900 transition-colors font-playfair font-medium">
                        "The minute I heard my first love story, I started looking for you, not knowing how blind that was. Lovers don't finally meet somewhere. They're in each other all along."
                    </blockquote>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-white border border-zinc-100">
<h4 className="font-medium text-rose-600 mb-2 font-geist">Morning</h4>
<p className="text-zinc-600 font-serif text-lg leading-relaxed font-geist">
                        The sun rises,<br/>
                        not in the east,<br/>
                        but in your eyes,<br/>
                        Mehek.
                    </p>
</div>
<div className="md:col-span-2 flex bg-center bg-white bg-cover border-zinc-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 items-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a4ef9e0-ab56-410c-a580-3541ad31dae7_1600w.jpg)]">
<div className="">
<h4 className="font-medium text-cyan-300 font-geist mb-2">The Quiet</h4>
<p className="leading-relaxed text-xl font-medium text-sky-300 font-playfair">
                            It isn't just love that binds us.<br/>
                            It is the comfort of silence,<br/>
                            the safety of your presence,<br/>
                            and the certainty that no matter where life leads,<br/>
                            my compass points to you.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-32 pb-32 relative" id="promise">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-rose-500 mb-6" icon="solar:heart-lock-linear"></iconify-icon>
<h2 className="text-sm font-semibold text-rose-600 tracking-tight uppercase mb-4 font-geist">The Promise</h2>
<h3 className="md:text-5xl text-4xl font-medium text-red-500 tracking-tight font-playfair mb-12">To Mehek, Always.</h3>
<div className="relative bg-zinc-50 p-10 md:p-14 rounded-[2rem] border border-zinc-100 shadow-xl shadow-rose-100/50">
<div className="-top-3 -left-3 text-6xl font-medium text-red-700 font-playfair opacity-50 absolute">"</div>
<p className="md:text-2xl leading-relaxed text-xl font-medium text-zinc-700 font-playfair mb-8">
                    I promise to be the stillness when your world is chaotic, and the laughter when your days are quiet. I promise to cherish the "Mehek" that the world sees, and adore the one only I get to know. I will choose you, again and again, in every lifetime, in every moment.
                </p>
<div className="flex items-center justify-center gap-4">
<div className="h-px w-12 bg-zinc-300"></div>
<span className="uppercase text-sm text-red-600 tracking-widest font-script">Forever Yours</span>
<div className="h-px w-12 bg-zinc-300"></div>
</div>
</div>
</div>
</section>

<footer className="text-red-500 text-center bg-red-500 pt-16 pb-16">
<div className="max-w-4xl mr-auto ml-auto pr-6 pl-6 space-y-8">
<div className="flex justify-center">
<svg className="animate-pulse text-red-50 w-[30px] h-[30px]" data-icon-replaced="true" data-icon-set="solar" data-solar="heart-shine-bold" height="30" strokeWidth="2" style={{width: '30px', height: '30px'}} viewbox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M5.47 5.47a.75.75 0 0 1 1.06 0l.344.343a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 0-1.06m13.06 0a.75.75 0 0 1 0 1.06l-.343.344a.75.75 0 0 1-1.06-1.061l.343-.343a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M6.873 17.127a.75.75 0 0 1 0 1.06l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a.75.75 0 0 1 1.06 0m10.254 0a.75.75 0 0 1 1.06 0l.343.343a.75.75 0 1 1-1.06 1.06l-.343-.343a.75.75 0 0 1 0-1.06M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path><path className="" d="M7 11.06c0 2.542 2.01 3.897 3.48 5.11c.52.427 1.02.83 1.52.83s1-.403 1.52-.83c1.47-1.213 3.48-2.568 3.48-5.11s-2.75-4.346-5-1.902c-2.25-2.444-5-.64-5 1.902" fill="currentColor"></path></svg>
</div>
<h2 className="text-2xl font-medium text-red-50 tracking-tight font-playfair bg-red-500">Happy Valentine's Day</h2>
<p className="text-sm text-zinc-50 font-mono bg-red-500 opacity-60">
                Built with code, fueled by love, for you.<br/>
                Forever • Yours
            </p>
<div className="text-[10px] uppercase text-neutral-50 tracking-widest font-geist pt-8">© 2026 Mehek's Valentine</div>
</div>
</footer>

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="hidden" frameborder="0" height="0" id="player-container" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/du7CTPkDPmc?playsinline=1&amp;controls=0&amp;loop=1&amp;playlist=du7CTPkDPmc&amp;enablejsapi=1&amp;widgetid=1&amp;forigin=about%3Asrcdoc&amp;aoriginsup=1&amp;aorigins=https%3A%2F%2Fwww.aura.build&amp;vf=1" title="Bhalobashi jare || ভালোবাসি যারে || VIKINGS || lyrics || Soul of lyrics" width="0"></iframe>


    </>
  );
}
