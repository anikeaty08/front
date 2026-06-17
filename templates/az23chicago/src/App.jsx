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



tailwind.config = {
darkMode: 'class',
}



        // Data for animation
        const words = [
            "patient", 
            "observant", 
            "persistent", 
            "wide-eyed", 
            "detail oriented", 
            "free minded", 
            "open spirited", 
            "purpose driven", 
            "faithful", 
            "humble", 
            "risk"
        ];

        // Elements
        const startScreen = document.getElementById('start-screen');
        const startBtn = document.getElementById('start-btn');
        const introOverlay = document.getElementById('intro-overlay');
        const text1 = document.getElementById('intro-text-1');
        const container2 = document.getElementById('intro-text-2-container');
        const staticText = document.getElementById('intro-text-static');
        const dynamicText = document.getElementById('intro-text-dynamic');
        const mainContent = document.getElementById('main-content');
        const themeToggleWrapper = document.getElementById('theme-toggle-wrapper');
        const audio = document.getElementById('startup-audio');
        const body = document.body;

        // Theme Toggle Logic
        const themeBtn = document.getElementById('theme-toggle');
        const html = document.documentElement;

        // Initialize Theme from LocalStorage
        if (localStorage.theme === 'light') {
            html.classList.remove('dark');
        } else {
            html.classList.add('dark');
        }

        themeBtn.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });

        // Start Button Logic
        startBtn.addEventListener('click', () => {
            // 1. Play Audio immediately
            audio.play().catch(e => console.error("Audio play failed:", e));

            // 2. Hide Start Screen
            startScreen.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                startScreen.style.display = 'none';
            }, 700);

            // 3. Begin Intro Sequence
            startIntroSequence();
        });

        // Animation Sequence Function
        function startIntroSequence() {
            // Show intro overlay
            introOverlay.classList.remove('hidden');

            // 1. Fade in first sentence
            setTimeout(() => {
                text1.classList.remove('opacity-0');
            }, 500);

            // 2. Fade out first sentence
            setTimeout(() => {
                text1.classList.add('opacity-0');
            }, 5500);

            // 3. Blur in "But I remained"
            setTimeout(() => {
                text1.style.display = 'none'; 
                container2.classList.remove('hidden');
                container2.classList.add('flex');
                void container2.offsetWidth; 
                staticText.classList.remove('blur-in-start');
                staticText.classList.add('blur-in-end');
            }, 6000);

            // 4. Start Word Flicker
            setTimeout(() => {
                let index = 0;
                let delay = 1300; 

                const showNextWord = () => {
                    if (index < words.length) {
                        dynamicText.textContent = words[index];
                        dynamicText.style.opacity = '1';
                        index++;
                        delay = Math.max(80, delay * 0.7); 
                        setTimeout(showNextWord, delay);
                    } else {
                        setTimeout(() => {
                            dynamicText.textContent = "me.";
                            dynamicText.className = ""; 
                            dynamicText.classList.add(
                                'text-3xl', 'md:text-5xl', 
                                'font-serif', 'italic', 'font-normal', 
                                'tracking-tight', 'text-gray-800', 
                                'dark:text-gray-200', 'super-glow'
                            );
                            
                            // 6. Transition to Site
                            setTimeout(finishIntro, 2500);
                        }, delay);
                    }
                };
                showNextWord();
            }, 7500);
        }

        function finishIntro() {
            // Fade out intro overlay
            introOverlay.classList.add('opacity-0', 'pointer-events-none');
            
            // Unlock scrolling
            body.classList.remove('intro-active');
            
            // Fade in main elements
            mainContent.classList.remove('opacity-0', 'pointer-events-none');
            themeToggleWrapper.classList.remove('opacity-0');

            setTimeout(() => {
                introOverlay.style.display = 'none';
            }, 1000);
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
      

<audio id="startup-audio" preload="auto">
<source src="https://d3o8hbmq1ueggw.cloudfront.net/6l4fa%2Ffile%2Fcb320dd783666d946da02dfe5a8b8c12_66198b3faf945066146e55e18f4ab65b.mp3?response-content-disposition=inline%3Bfilename%3D%22cb320dd783666d946da02dfe5a8b8c12_66198b3faf945066146e55e18f4ab65b.mp3%22%3B&amp;response-content-type=audio%2Fmpeg&amp;Expires=1765784244&amp;Signature=gMDPR8e2YLrVL2BvoQdV8yhFqCmWtx8wQu4pxyGp8E5u-g50cj78fpaj8Tdc-h3T270a4Ut9fQ-~utnYhRcizmb9De01nojJ1KdilOEj5kpRT0~N~8TGuevP-Sufb~MA912~blWHD6W5TyZMdiqGf9L5yfihbe0BvHHMnHjlb9fVL-yO8Lg9GhD0rEMsXIexLKCMH1rOOUXvuKb8r9XshHXRO3gZQWvroQyDaChKyWAninh-J9JdW6~E5Ue-gTMyk7JxrpX~cROc8Fd5aJLkzU9NM~y9eRn9IerB-L5u-8zk~9t5J1LX47moAgS119tVZaWhGZVHkOBulNk-aSk5Aw__&amp;Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" type="audio/mpeg"/>
</audio>

<div className="fixed top-6 right-6 z-50 opacity-0 transition-opacity duration-1000" id="theme-toggle-wrapper">
<button className="p-2 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors duration-200 focus:outline-none border border-transparent dark:border-zinc-800 cursor-pointer" id="theme-toggle">
<iconify-icon className="hidden dark:block text-gray-400" icon="lucide:sun" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden text-gray-500" icon="lucide:moon" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f2f2f2] dark:bg-[#050505] transition-opacity duration-700" id="start-screen">
<div className="flex flex-col items-center gap-4 animate-pulse">
<span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">press play</span>
<button className="text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform duration-300 focus:outline-none" id="start-btn">
<iconify-icon className="opacity-80 hover:opacity-100 transition-opacity" icon="lucide:play-circle" strokeWidth="1.0" width="48"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 z-40 flex flex-col items-center justify-center p-8 bg-[#f2f2f2] dark:bg-[#050505] transition-opacity duration-1000 hidden" id="intro-overlay">

<p className="text-xl md:text-3xl font-sans font-light text-center max-w-4xl text-balance leading-relaxed opacity-0 transition-opacity duration-700 tracking-tight text-gray-600 dark:text-gray-300" id="intro-text-1">
            "Growing up, if you looked at my circumstances, you'd think I wouldn't achieve much in this life."
        </p>

<div className="hidden flex-col items-center gap-4 mt-4 text-center" id="intro-text-2-container">
<h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-gray-400 dark:text-gray-500 transition-all duration-700 blur-in-start" id="intro-text-static">
                But I remained
            </h2>

<span className="text-3xl md:text-5xl font-serif italic font-normal tracking-tight text-gray-800 dark:text-gray-200 h-14 word-glow transition-all duration-200" id="intro-text-dynamic"></span>
</div>
</div>

<main className="relative z-10 flex-grow flex flex-col w-full max-w-2xl mx-auto pt-24 px-6 pb-32 opacity-0 transition-opacity duration-1000 pointer-events-none" id="main-content">

<header className="flex items-center gap-6 mb-16">
<img alt="Asim Zaidi" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-1 ring-black/5 dark:ring-white/10" src="https://i.ibb.co/jPQyRSkB/aismz.png"/>
<div>
<h1 className="text-2xl md:text-3xl font-medium tracking-tight mb-0.5 text-black dark:text-white">Asim Zaidi</h1>
<p className="text-sm text-gray-500 dark:text-gray-400 font-normal">Engineer &amp; Builder</p>
</div>
</header>

<section className="mb-12 w-full space-y-6 text-sm md:text-[15px] leading-7 text-gray-600 dark:text-[#A1A1AA] font-normal">
<p>
                I’m currently a <span className="text-gray-900 dark:text-white font-medium">senior engineer</span> at a fintech startup building the world’s first perpetual futures exchange. Before that, I was a Lead Frontend Engineer on the <span className="text-gray-900 dark:text-white font-medium">AI Hub at Apple</span> headquarters. Prior to Apple, I <span className="text-gray-900 dark:text-white font-medium">led a team at Atlassian</span> where we built an internal customer analytics platform (C360), working directly with the Head of Data and the CRO. Earlier in my career, I worked at Livly, a prop-tech startup in Chicago’s West Loop — an experience that shaped how I think about product, teams, and ownership.
            </p>
<p>
                Outside of work, I run <a className="text-gray-900 dark:text-white font-medium link-hover" href="https://techmade.co" target="_blank">Techmade</a>. It’s mostly a collection of things I enjoy building with friends. Sometimes that means creating world-class websites for people we believe in. Other times it’s writing. Techmade is now one of the <span className="text-gray-900 dark:text-white font-medium">largest programming blogs on the internet</span>, and we recently <span className="text-gray-900 dark:text-white font-medium">launched a frontend interview prep platform</span> designed to be the most practical, no-fluff resource for engineers aiming for big-tech roles.
            </p>
<p>
                I’m also the creator of <a className="text-gray-900 dark:text-white font-medium link-hover" href="https://autogripghost.com" target="_blank">Ghost Driver</a> — an idea I came up with while not driving my Tesla.
            </p>
<p>
                What’s next? I’m focused on growing as an engineer, especially in the AI-driven era we’ve entered. I want to keep empowering others through Techmade. Longer term, I plan to devote my time and energy to a cause that matters far more to me than temporary monetary outcomes. That chapter isn’t ready to be shared yet.
            </p>
<p>
                Fitness is another major part of my life. It’s something I neglected for years while I was fully focused on building software products. These days, I train consistently and enjoy <span className="text-gray-900 dark:text-white font-medium">triathlons</span>, <span className="text-gray-900 dark:text-white font-medium">boxing</span>, and <span className="text-gray-900 dark:text-white font-medium">lifting</span>. I’m a former <span className="text-gray-900 dark:text-white font-medium">gymnast</span> — not actively competing anymore, but the mindset never really leaves.
            </p>
</section>

<section className="z-10 sm:pb-24 sm:pt-10 pt-8 pb-8 relative w-full" style={{opacity: '1'}}>
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-10">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-wide">Forever grateful for</p>
</div>

<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>

<div className="z-10 pointer-events-none bg-gradient-to-r from-[#f2f2f2] dark:from-[#050505] via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>

<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">

<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-instrument-serif italic">Roomi</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Navaid</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-playfair">Faisal</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Maheen</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-merriweather italic">Justis</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Joe</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-instrument-serif">Nicolai</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Daniel</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-playfair italic">Jayce</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Owen</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-merriweather">Rondo</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Abrar</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-instrument-serif italic">Patrick</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Ryan</span>
</div>

<div className="flex items-center gap-16 shrink-0 gap-x-16 gap-y-16">
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-instrument-serif italic">Roomi</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Navaid</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-playfair">Faisal</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Maheen</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-merriweather italic">Justis</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Joe</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-instrument-serif">Nicolai</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Daniel</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-playfair italic">Jayce</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Owen</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-merriweather">Rondo</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Abrar</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight font-instrument-serif italic">Patrick</span>
<span className="text-lg text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-normal tracking-tight">Ryan</span>
</div>
</div>
</div>
</div>
</section>
<footer className="mt-8 mb-10 text-xs text-gray-400 dark:text-zinc-600 font-light">
            © 2025 Asim Zaidi. All rights reserved.
        </footer>
</main>


    </>
  );
}
