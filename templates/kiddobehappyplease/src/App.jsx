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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function createBackground() {
            const symbols = ['✨', '🌸', '🤍', '💫', '💖'];
            setInterval(() => {
                const el = document.createElement('div');
                el.innerText = symbols[Math.floor(Math.random() * symbols.length)];
                el.style.position = 'absolute';
                el.style.bottom = '-3rem';
                el.style.pointerEvents = 'none';
                el.style.opacity = '0.3';
                el.style.zIndex = '0';
                el.style.left = (Math.random() * 100) + 'vw';
                el.style.fontSize = (Math.random() * 0.8 + 1) + 'rem';
                el.style.animation = `floatUp ${Math.random() * 5 + 8}s linear infinite`;
                document.body.appendChild(el);
                setTimeout(() => el.remove(), 13000);
            }, 700);
        }
        createBackground();

        const audio = document.getElementById('bg-music');
        let isPlaying = false;
        function toggleAudio() {
            const icon = document.getElementById('audio-icon');
            if (isPlaying) {
                audio.pause();
                icon.setAttribute('icon', 'solar:music-notes-linear');
            } else {
                audio.volume = 0.3;
                audio.play();
                icon.setAttribute('icon', 'solar:muted-linear');
            }
            isPlaying = !isPlaying;
        }

        function nextSlide(step) {
            document.querySelectorAll('.slide').forEach(s => {
                s.classList.remove('flex', 'slide-anim');
                s.classList.add('hidden');
            });
            const next = document.getElementById(`slide-${step}`);
            next.classList.remove('hidden');
            next.classList.add('flex', 'slide-anim');
            
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                if (index < step) {
                    dot.className = 'dot w-3 h-1.5 rounded-full bg-rose-400 transition-all duration-500';
                } else {
                    dot.className = 'dot w-1.5 h-1.5 rounded-full bg-rose-400/20 transition-all duration-500';
                }
            });

            if(step === 10) {
                document.getElementById('progress').style.display = 'none';
            }
        }

        function animateAndNext(btn, next) {
            btn.classList.add('bounce-anim');
            setTimeout(() => {
                btn.classList.remove('bounce-anim');
                nextSlide(next);
            }, 350);
        }

        function moveAway(btn, e) {
            if(e && e.type === 'touchstart') e.preventDefault();
            
            if(btn.style.position !== 'fixed') {
                const rect = btn.getBoundingClientRect();
                btn.style.width = rect.width + 'px'; 
                btn.style.height = rect.height + 'px';
            }
            
            btn.style.position = 'fixed';
            
            const maxX = window.innerWidth - btn.offsetWidth - 24;
            const maxY = window.innerHeight - btn.offsetHeight - 24;
            
            const randomX = Math.max(12, Math.floor(Math.random() * maxX));
            const randomY = Math.max(12, Math.floor(Math.random() * maxY));
            
            btn.style.left = randomX + 'px';
            btn.style.top = randomY + 'px';
        }

        function showFinal() {
            nextSlide(10);
            document.getElementById('main-card').classList.add('shadow-[0_0_50px_rgba(244,63,94,0.15)]');
            fireConfetti();
        }

        function fireConfetti() {
            const container = document.getElementById('confetti-container');
            const items = ['💖', '✨', '🎉', '💕', '🥰'];
            
            for(let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const el = document.createElement('div');
                    el.innerText = items[Math.floor(Math.random() * items.length)];
                    el.style.position = 'absolute';
                    el.style.fontSize = (Math.random() * 1 + 1) + 'rem';
                    el.style.left = (Math.random() * 100) + 'vw';
                    el.style.top = '-4rem';
                    el.style.transition = 'top 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 3s';
                    
                    container.appendChild(el);

                    setTimeout(() => {
                        el.style.top = '110vh';
                        el.style.opacity = '0';
                    }, 50);
                    
                    setTimeout(() => el.remove(), 3500);
                }, i * 45);
            }
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
      
<audio id="bg-music" loop="">
<source src="https://cdn.pixabay.com/download/audio/2022/01/21/audio_31743c58bc.mp3?filename=soft-piano-100-bpm-121529.mp3" type="audio/mpeg"/>
</audio>
<button className="absolute top-6 right-6 bg-white/50 backdrop-blur-md border border-white/40 rounded-full w-12 h-12 flex items-center justify-center text-slate-600 shadow-sm z-50 transition-all duration-200 hover:bg-white/70 active:scale-90" id="audio-toggle" onclick="toggleAudio()">
<iconify-icon className="text-xl" icon="solar:music-notes-linear" id="audio-icon" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="absolute inset-0 pointer-events-none z-50 overflow-hidden" id="confetti-container"></div>
<div className="relative z-10 w-11/12 max-w-[26rem] bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2rem] shadow-[0_8px_32px_rgba(225,29,72,0.04)] p-8 sm:p-10 text-center flex flex-col justify-center min-h-[25rem] transition-shadow duration-700" id="main-card">
<div className="absolute top-8 left-0 w-full flex justify-center gap-1.5 z-20" id="progress">
<div className="dot w-3 h-1.5 rounded-full bg-rose-400 transition-all duration-500"></div>
<div className="dot w-1.5 h-1.5 rounded-full bg-rose-400/20 transition-all duration-500"></div>
<div className="dot w-1.5 h-1.5 rounded-full bg-rose-400/20 transition-all duration-500"></div>
<div className="dot w-1.5 h-1.5 rounded-full bg-rose-400/20 transition-all duration-500"></div>
<div className="dot w-1.5 h-1.5 rounded-full bg-rose-400/20 transition-all duration-500"></div>
<div className="dot w-1.5 h-1.5 rounded-full bg-rose-400/20 transition-all duration-500"></div>
<div className="dot w-1.5 h-1.5 rounded-full bg-rose-400/20 transition-all duration-500"></div>
<div className="dot w-1.5 h-1.5 rounded-full bg-rose-400/20 transition-all duration-500"></div>
<div className="dot w-1.5 h-1.5 rounded-full bg-rose-400/20 transition-all duration-500"></div>
<div className="dot w-1.5 h-1.5 rounded-full bg-rose-400/20 transition-all duration-500"></div>
</div>
<div className="slide slide-anim flex flex-col items-center w-full" id="slide-1">
<h1 className="font-['Poppins',_sans-serif] text-xl tracking-tight font-medium text-slate-800 mb-9 leading-relaxed">Hey Navi… I know today feels a bit heavy 💔<br/><br/>Can I try something to make it better?</h1>
<div className="flex flex-col gap-3.5 w-full relative">
<button className="w-full bg-slate-900 text-white font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 transition-all duration-200 hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95" onclick="nextSlide(2)">Okay... 🥺</button>
<button className="runaway-btn w-full bg-white text-slate-400 font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 border border-slate-200 transition-[left,top] duration-300 ease-out z-50 shadow-sm" onmouseover="moveAway(this, event)" ontouchstart="moveAway(this, event)">No <iconify-icon className="inline align-text-bottom text-lg ml-1" icon="solar:running-linear" style={{strokeWidth: '1.5'}}></iconify-icon></button>
</div>
</div>
<div className="slide hidden flex-col items-center w-full" id="slide-2">
<h1 className="font-['Poppins',_sans-serif] text-xl tracking-tight font-medium text-slate-800 mb-9 leading-relaxed">Are you at least smiling a tiny bit right now?</h1>
<div className="flex flex-col gap-3.5 w-full">
<button className="w-full bg-slate-900 text-white font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 transition-all duration-200 hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95" onclick="nextSlide(3)">Maybe 🙂</button>
<button className="w-full bg-white text-slate-600 font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 border border-slate-200 transition-all duration-200 hover:bg-slate-50 active:scale-95" onclick="nextSlide(3)">Not yet 😒</button>
</div>
</div>
<div className="slide hidden flex-col items-center w-full" id="slide-3">
<h1 className="font-['Poppins',_sans-serif] text-xl tracking-tight font-medium text-slate-800 mb-9 leading-relaxed">Quick question, Navi… are you secretly the cutest human ever?</h1>
<div className="flex flex-col gap-3.5 w-full">
<button className="w-full bg-slate-900 text-white font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 transition-all duration-200 hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95" onclick="animateAndNext(this, 4)">Yes 😌</button>
<button className="w-full bg-white text-slate-600 font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 border border-slate-200 transition-all duration-200 hover:bg-slate-50 active:scale-95" onclick="animateAndNext(this, 4)">Obviously yes 😌</button>
</div>
</div>
<div className="slide hidden flex-col items-center w-full" id="slide-4">
<h1 className="font-['Poppins',_sans-serif] text-xl tracking-tight font-medium text-slate-800 mb-9 leading-relaxed">You do realize you make people happy just by existing, right?</h1>
<div className="flex flex-col gap-3.5 w-full">
<button className="w-full bg-slate-900 text-white font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 transition-all duration-200 hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95" onclick="nextSlide(5)">Continue ❤️</button>
</div>
</div>
<div className="slide hidden flex-col items-center w-full" id="slide-5">
<h1 className="font-['Poppins',_sans-serif] text-xl tracking-tight font-medium text-slate-800 mb-9 leading-relaxed">If I could, I’d teleport right now just to make you smile… would that work?</h1>
<div className="flex flex-col gap-3.5 w-full">
<button className="w-full bg-slate-900 text-white font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 transition-all duration-200 hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95" onclick="nextSlide(6)">Yes 🥺</button>
<button className="w-full bg-white text-slate-600 font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 border border-slate-200 transition-all duration-200 hover:bg-slate-50 active:scale-95" onclick="nextSlide(6)">Maybe… try harder</button>
</div>
</div>
<div className="slide hidden flex-col items-center w-full" id="slide-6">
<h1 className="font-['Poppins',_sans-serif] text-xl tracking-tight font-medium text-slate-800 mb-9 leading-relaxed">Do you know how special you are to me?</h1>
<div className="flex flex-col gap-3.5 w-full">
<button className="w-full bg-slate-900 text-white font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 transition-all duration-200 hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95" onclick="nextSlide(7)">Tell me</button>
<button className="w-full bg-white text-slate-600 font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 border border-slate-200 transition-all duration-200 hover:bg-slate-50 active:scale-95" onclick="nextSlide(7)">I think so...</button>
</div>
</div>
<div className="slide hidden flex-col items-center w-full" id="slide-7">
<h1 className="font-['Poppins',_sans-serif] text-xl tracking-tight font-medium text-slate-800 mb-9 leading-relaxed">No matter how your day went… you’re still amazing. Nothing changes that.</h1>
<div className="flex flex-col gap-3.5 w-full">
<button className="w-full bg-slate-900 text-white font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 transition-all duration-200 hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95" onclick="nextSlide(8)">Next ✨</button>
</div>
</div>
<div className="slide hidden flex-col items-center w-full" id="slide-8">
<h1 className="font-['Poppins',_sans-serif] text-xl tracking-tight font-medium text-slate-800 mb-9 leading-relaxed">If I say something sweet right now… will you smile?</h1>
<div className="flex flex-col gap-3.5 w-full">
<button className="w-full bg-slate-900 text-white font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 transition-all duration-200 hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95" onclick="nextSlide(9)">Yes ❤️</button>
<button className="w-full bg-white text-slate-600 font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 border border-slate-200 transition-all duration-200 hover:bg-slate-50 active:scale-95" onclick="nextSlide(9)">Try me 😏</button>
</div>
</div>
<div className="slide hidden flex-col items-center w-full" id="slide-9">
<h1 className="font-['Poppins',_sans-serif] text-xl tracking-tight font-medium text-slate-800 mb-9 leading-relaxed">Okay final question… do you love me?</h1>
<div className="flex flex-col gap-3.5 w-full relative">
<button className="w-full bg-slate-900 text-white font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 transition-all duration-200 hover:bg-slate-800 shadow-md hover:shadow-lg active:scale-95" onclick="showFinal()">Yes ❤️</button>
<button className="runaway-btn w-full bg-white text-slate-400 font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 border border-slate-200 transition-[left,top] duration-300 ease-out z-50 shadow-sm" onmouseover="moveAway(this, event)" ontouchstart="moveAway(this, event)">No <iconify-icon className="inline align-text-bottom text-lg ml-1" icon="solar:running-linear" style={{strokeWidth: '1.5'}}></iconify-icon></button>
</div>
</div>
<div className="slide hidden flex-col items-center w-full" id="slide-10">
<h1 className="font-['Poppins',_sans-serif] text-2xl tracking-tight font-semibold text-rose-500 mb-3">I love you so much, Navi.</h1>
<p className="text-base text-slate-600 mb-2 leading-relaxed">And I hate seeing you sad…</p>
<p className="text-base text-rose-400 font-medium mt-4 mb-1">So here’s your reminder:</p>
<p className="text-base text-slate-600 mb-9 leading-relaxed">You’re strong, beautiful, and you mean everything to me ❤️</p>
<div className="flex flex-col gap-3.5 w-full">
<button className="w-full bg-rose-500 text-white font-['Poppins',_sans-serif] font-medium text-base rounded-full py-3.5 shadow-[0_8px_20px_rgba(244,63,94,0.25)] transition-all duration-200 hover:bg-rose-600 hover:shadow-[0_8px_25px_rgba(244,63,94,0.35)] active:scale-95" onclick="location.reload()">Watch again <iconify-icon className="inline align-text-bottom text-lg ml-1" icon="solar:restart-linear" style={{strokeWidth: '1.5'}}></iconify-icon></button>
</div>
</div>
</div>
<div className="absolute bottom-6 tracking-tighter text-xs font-medium uppercase text-slate-400/80 pointer-events-none">
        Made with love
    </div>


    </>
  );
}
