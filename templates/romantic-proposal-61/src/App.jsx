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



        let currentStep = 1;
        const totalSteps = 5;
        const noPhrases = ["Are you sure? 🥺", "Really? 💔", "Think again! 🌸", "Don't break my heart! 😢", "Pretty please? 🥺"];
        let noCount = 0;

        function updateProgress() {
            const progress = (currentStep / totalSteps) * 100;
            document.getElementById('progress-bar').style.width = `${progress}%`;
        }

        function handleAnswer(btnElement, isCorrect, nextStepNum) {
            if (!isCorrect) {
                // Wrong answer animation
                btnElement.classList.add('shake', 'btn-error');
                
                // Remove class after animation to allow re-shake
                setTimeout(() => {
                    btnElement.classList.remove('shake');
                    // We keep btn-error for a bit or until clicked again, but let's clear it
                    setTimeout(() => {
                        btnElement.classList.remove('btn-error');
                    }, 500);
                }, 500);
                return;
            }

            // Correct answer
            document.getElementById(`step-${currentStep}`).classList.add('hidden');
            currentStep = nextStepNum;
            const nextEl = document.getElementById(`step-${currentStep}`);
            nextEl.classList.remove('hidden');
            nextEl.classList.add('fade-in');
            updateProgress();
        }

        function handleNo() {
            const noBtn = document.getElementById('no-btn');
            const yesBtn = document.getElementById('yes-btn');
            const container = document.querySelector('.bg-white\\/70');
            
            container.classList.remove('shake');
            void container.offsetWidth; 
            container.classList.add('shake');

            noBtn.innerText = noPhrases[noCount % noPhrases.length];
            noCount++;

            const currentScale = 1 + (noCount * 0.1);
            yesBtn.style.transform = `scale(${currentScale})`;
        }

        function finishProposal() {
            document.getElementById(`step-5`).classList.add('hidden');
            const success = document.getElementById('success-screen');
            success.classList.remove('hidden');
            success.classList.add('fade-in');
            success.style.display = 'flex';
            
            createHearts();
            document.getElementById('progress-bar').style.width = '100%';
            document.getElementById('progress-bar').classList.add('bg-green-400');
        }

        function createHearts() {
            const container = document.getElementById('background-hearts');
            const colors = ['#f43f5e', '#fb7185', '#fda4af'];
            
            for(let i=0; i<20; i++) {
                const heart = document.createElement('div');
                heart.innerHTML = `<iconify-icon icon="solar:heart-linear"></iconify-icon>`;
                heart.className = 'floating-heart text-2xl absolute';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
                heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                heart.style.bottom = '-50px';
                container.appendChild(heart);
            }
        }

        window.addEventListener('load', () => {
            setInterval(() => {
                const container = document.getElementById('background-hearts');
                const heart = document.createElement('div');
                heart.innerHTML = `<iconify-icon icon="solar:heart-bold"></iconify-icon>`;
                heart.className = 'floating-heart absolute text-rose-200/40';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
                heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
                heart.style.bottom = '-50px';
                container.appendChild(heart);
                setTimeout(() => { heart.remove() }, 15000);
            }, 800);
        });
    
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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1c500fe-99c8-40f6-bdb3-18ebc3b007a1_3840w.webp?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="background-hearts"></div>

<main className="relative z-10 w-full max-w-sm mx-auto p-6 transition-all duration-300" id="card-container">

<div className="w-full bg-rose-200/50 h-1.5 rounded-full mb-8 backdrop-blur-sm">
<div className="bg-gradient-to-r from-rose-400 to-pink-500 h-1.5 rounded-full transition-all duration-500 w-[20%]" id="progress-bar"></div>
</div>

<div className="bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 sm:p-8 fade-in flex flex-col items-center text-center min-h-[400px] justify-center relative overflow-hidden">

<div className="mb-6 w-full h-32 bg-rose-50 rounded-2xl flex items-center justify-center overflow-hidden border border-rose-100 group transition-colors">
<iconify-icon className="text-4xl text-rose-300 group-hover:scale-110 transition-transform duration-500" icon="solar:gallery-favourite-linear"></iconify-icon>
</div>

<div className="step w-full" id="step-1">
<h2 className="text-2xl font-medium text-rose-950 mb-2 tracking-tight">Question 1/5</h2>
<p className="text-rose-600/80 text-lg mb-8 font-normal leading-relaxed">Where did we go on our first outside date? 🌹</p>
<div className="space-y-3 w-full">
<button className="w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group" onclick="handleAnswer(this, false)">
<span>Restaurant</span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500" icon="solar:wineglass-linear"></iconify-icon>
</button>
<button className="w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group" onclick="handleAnswer(this, false)">
<span>Dress store</span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500" icon="solar:bag-heart-linear"></iconify-icon>
</button>
<button className="w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group" onclick="handleAnswer(this, true, 2)">
<span className="">Road drive to nursery</span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500" icon="solar:wheel-angle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="step w-full hidden" id="step-2">
<h2 className="text-2xl font-medium text-rose-950 mb-2 tracking-tight">Question 2/5</h2>
<p className="text-rose-600/80 text-lg mb-8 font-normal leading-relaxed">When was our first meet-up date? 📅</p>
<div className="grid grid-cols-1 gap-3 w-full">
<button className="w-full py-4 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all shadow-sm" onclick="handleAnswer(this, false)">
                        20 March
                    </button>
<button className="w-full py-4 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all shadow-sm" onclick="handleAnswer(this, false)">
                        21 March
                    </button>
<button className="w-full py-4 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all shadow-sm" onclick="handleAnswer(this, true, 3)">
                        22 March
                    </button>
</div>
</div>

<div className="step w-full hidden" id="step-3">
<h2 className="text-2xl font-medium text-rose-950 mb-2 tracking-tight">Question 3/5</h2>
<p className="text-rose-600/80 text-lg mb-8 font-normal leading-relaxed">What is my favourite color combination? 🎨</p>
<div className="space-y-3 w-full">
<button className="w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all shadow-sm flex items-center gap-4" onclick="handleAnswer(this, true, 4)">
<div className="flex gap-1"><div className="w-4 h-4 rounded-full bg-red-500 shadow-sm"></div><div className="w-4 h-4 rounded-full bg-white border border-gray-200 shadow-sm"></div></div>
                        Red and White
                    </button>
<button className="w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all shadow-sm flex items-center gap-4" onclick="handleAnswer(this, false)">
<div className="flex gap-1"><div className="w-4 h-4 rounded-full bg-blue-500 shadow-sm"></div><div className="w-4 h-4 rounded-full bg-white border border-gray-200 shadow-sm"></div></div>
                        Blue and White
                    </button>
<button className="w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all shadow-sm flex items-center gap-4" onclick="handleAnswer(this, false)">
<div className="flex gap-1"><div className="w-4 h-4 rounded-full bg-red-500 shadow-sm"></div><div className="w-4 h-4 rounded-full bg-blue-500 shadow-sm"></div></div>
                        Red and Blue
                    </button>
</div>
</div>

<div className="step w-full hidden" id="step-4">
<h2 className="text-2xl font-medium text-rose-950 mb-2 tracking-tight">Question 4/5</h2>
<p className="text-rose-600/80 text-lg mb-8 font-normal leading-relaxed">What makes you always feel drawn toward me? ✨</p>
<div className="space-y-3 w-full text-left">
<button className="w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all shadow-sm hover:shadow-md group" onclick="handleAnswer(this, true, 5)">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-rose-300 group-hover:text-rose-500 flex-shrink-0" icon="solar:heart-angle-linear"></iconify-icon>
<span>My care and affection</span>
</div>
</button>
<button className="w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all shadow-sm hover:shadow-md group" onclick="handleAnswer(this, true, 5)">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-rose-300 group-hover:text-rose-500 flex-shrink-0" icon="solar:chat-round-dots-linear"></iconify-icon>
<span>The way I understand you</span>
</div>
</button>
<button className="w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all shadow-sm hover:shadow-md group" onclick="handleAnswer(this, true, 5)">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-rose-300 group-hover:text-rose-500 flex-shrink-0" icon="solar:sofa-2-linear"></iconify-icon>
<span>The comfort you feel with me</span>
</div>
</button>
</div>
</div>

<div className="step w-full hidden" id="step-5">
<iconify-icon className="text-6xl text-rose-500 mb-4 animate-pulse" icon="solar:heart-bold"></iconify-icon>
<h2 className="text-3xl font-medium text-rose-950 mb-3 tracking-tight">One last question...</h2>
<p className="text-rose-600/80 text-lg mb-10 font-normal leading-relaxed">After everything we’ve shared… will you accept my proposal? 💍</p>
<div className="flex flex-col gap-4 w-full relative h-40">
<button className="w-full py-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl text-white font-medium text-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:scale-[1.02] transition-all z-10 flex items-center justify-center gap-2" id="yes-btn" onclick="finishProposal()">
<span>Yes, I will!</span>
<iconify-icon className="text-2xl" icon="solar:heart-shine-linear"></iconify-icon>
</button>
<button className="w-full py-4 bg-white border border-rose-100 rounded-2xl text-rose-400 hover:bg-rose-50 transition-all text-lg font-normal" id="no-btn" onclick="handleNo()">
                        No
                    </button>
</div>
</div>

<div className="hidden w-full flex-col items-center justify-center h-full" id="success-screen">
<div className="relative mb-6">
<div className="absolute inset-0 bg-rose-200 blur-2xl opacity-50 rounded-full animate-pulse"></div>
<iconify-icon className="text-8xl text-rose-500 relative z-10" icon="solar:chat-heart-linear"></iconify-icon>
</div>
<h1 className="text-4xl font-medium text-rose-950 mb-4 tracking-tight">I knew it! ❤️</h1>
<p className="text-rose-600 text-xl font-normal leading-relaxed max-w-[280px] mx-auto">
                    I just wanted you to know how special you are to me.
                </p>
<div className="mt-8 flex gap-2">
<span className="text-2xl animate-bounce" style={{animationDelay: '0.1s'}}>🌹</span>
<span className="text-2xl animate-bounce" style={{animationDelay: '0.2s'}}>✨</span>
<span className="text-2xl animate-bounce" style={{animationDelay: '0.3s'}}>💑</span>
</div>
</div>
</div>
</main>


    </>
  );
}
