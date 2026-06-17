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

      // Store questions text for summary
      const questionsText = [
        "What you find adorable about me:",
        "Your secret weapon for my rough days:",
        "How I changed your world:",
        "The version of me you love to hang with:"
      ];

      // Store user answers
      let userAnswers = [];

      function updateProgress() {
          const progress = (currentStep / totalSteps) * 100;
          document.getElementById('progress-bar').style.width = `${progress}%`;
      }

      function handleAnswer(btnElement, nextStepNum) {
          // Glow effect on click
          btnElement.classList.add('!bg-rose-100', '!border-rose-300', 'ring-4', 'ring-rose-200', 'scale-[1.02]');

          // Save answer
          const answerText = btnElement.querySelector('span').innerText;
          userAnswers.push(answerText);

          // Delay to show glow effect
          setTimeout(() => {
              document.getElementById(`step-${currentStep}`).classList.add('hidden');
              currentStep = nextStepNum;
              const nextEl = document.getElementById(`step-${currentStep}`);
              nextEl.classList.remove('hidden');
              nextEl.classList.add('fade-in');
              updateProgress();
          }, 600); // 600ms delay for user feedback
      }

      function handleNo() {
          const noBtn = document.getElementById('no-btn');
          const yesBtn = document.getElementById('yes-btn');
          const container = document.querySelector('#main-content');

          container.classList.remove('shake');
          void container.offsetWidth; // Trigger reflow
          container.classList.add('shake');

          noBtn.innerText = noPhrases[noCount % noPhrases.length];
          noCount++;

          const currentScale = 1 + (noCount * 0.15);
          yesBtn.style.transform = `scale(${currentScale})`;
          yesBtn.style.transition = "transform 0.3s ease";
      }

      function finishProposal() {
          // Add the final yes to data if needed, or just proceed
          document.getElementById(`step-5`).classList.add('hidden');
          const success = document.getElementById('success-screen');
          success.classList.remove('hidden');
          success.classList.add('fade-in');
          success.style.display = 'flex';

          generateSummary();
          createHearts();

          document.getElementById('progress-bar').style.width = '100%';
          document.getElementById('progress-bar').classList.remove('from-rose-400', 'to-pink-500');
          document.getElementById('progress-bar').classList.add('bg-green-400');
      }

      function generateSummary() {
          const container = document.getElementById('summary-container');
          container.innerHTML = '';

          userAnswers.forEach((answer, index) => {
              if (index < questionsText.length) {
                  const item = document.createElement('div');
                  item.className = 'bg-white border border-rose-100 p-3 rounded-xl shadow-sm';
                  item.innerHTML = `
                      <p class="text-xs font-semibold text-rose-400 uppercase tracking-wide mb-1">${questionsText[index]}</p>
                      <p class="text-rose-900 font-medium text-sm leading-snug">"${answer}"</p>
                  `;
                  container.appendChild(item);
              }
          });
      }

      function createHearts() {
          const container = document.getElementById('background-hearts');
          const colors = ['#f43f5e', '#fb7185', '#fda4af', '#f9a8d4'];
          const icons = ['solar:heart-linear', 'solar:cat-linear', 'solar:cupcake-linear', 'solar:star-fall-linear'];
          for(let i=0; i<30; i++) {
              const heart = document.createElement('div');
              heart.innerHTML = `<iconify-icon icon="${icons[Math.floor(Math.random() * icons.length)]}"></iconify-icon>`;
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
          // Periodic background hearts
          setInterval(() => {
              const container = document.getElementById('background-hearts');
              const heart = document.createElement('div');
              const icons = ['solar:heart-bold', 'solar:cat-linear', 'solar:cupcake-linear', 'solar:star-fall-linear'];
              heart.innerHTML = `<iconify-icon icon="${icons[Math.floor(Math.random() * icons.length)]}"></iconify-icon>`;
              heart.className = 'floating-heart absolute text-rose-200/40';
              heart.style.left = Math.random() * 100 + 'vw';
              heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
              heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
              heart.style.bottom = '-50px';
              container.appendChild(heart);
              setTimeout(() => { heart.remove() }, 15000);
          }, 800);
      });
    


      function copyLink(btn){navigator.clipboard.writeText(window.location.href).then(()=>{const icon=btn.querySelector('iconify-icon');const span=btn.querySelector('span');const originalIcon=icon.getAttribute('icon');const originalText=span.innerText;icon.setAttribute('icon','solar:check-circle-bold');span.innerText='Copied!';btn.classList.add('!bg-rose-500','!text-white','!border-rose-500');setTimeout(()=>{icon.setAttribute('icon',originalIcon);span.innerText=originalText;btn.classList.remove('!bg-rose-500','!text-white','!border-rose-500');},2000);});}
    
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
      

<div className="fixed -z-10 bg-center w-full h-screen bg-cover top-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1534125880521-8979313b6329?q=80&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', opacity: '0.4'}}></div>

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="background-hearts"></div>

<main className="transition-all duration-300 z-10 w-full max-w-sm mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative" id="card-container">

<div className="h-1.5 bg-rose-200/50 w-full rounded-full mb-8 backdrop-blur-sm">
<div className="bg-gradient-to-r from-rose-400 to-pink-500 h-1.5 rounded-full transition-all duration-500 w-[20%]" id="progress-bar"></div>
</div>

<div className="sm:p-8 fade-in flex flex-col min-h-[450px] overflow-hidden transition-all duration-500 text-center bg-white/70 border-white/60 border rounded-[2rem] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl items-center justify-center" id="main-content">

<div className="step flex flex-col w-full items-center" id="step-1">

<img alt="Cute Cat" className="w-32 h-32 object-contain mb-6 drop-shadow-sm hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d950a69-b32b-426e-a016-1028c0246534_3840w.png"/>
<h2 className="text-2xl font-medium text-rose-950 mb-2 tracking-tight">
            Question 1/5
          </h2>
<p className="leading-relaxed text-lg font-normal text-rose-600/80 mb-8">
            What is that one thing about me that you’ve actually grown to love
            (or at least find adorable)?
          </p>
<div className="w-full space-y-3">
<button className="answer-btn w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group text-left relative overflow-hidden" onclick="handleAnswer(this, 2)">
<span className="z-10 relative">
                The way I get way too excited over small things.
              </span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500 flex-shrink-0 ml-2 z-10 relative" icon="solar:stars-minimalistic-linear"></iconify-icon>
</button>
<button className="answer-btn hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 hover:shadow-md flex group overflow-hidden text-rose-900 text-left bg-white w-full border-rose-100 border rounded-2xl pt-4 pr-6 pb-4 pl-6 relative shadow-sm items-center justify-between" onclick="handleAnswer(this, 2)">
<span className="z-10 relative">
                My love for food and experiences
              </span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500 flex-shrink-0 ml-2 z-10 relative" icon="solar:donuts-linear"></iconify-icon>
</button>
<button className="answer-btn w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group text-left relative overflow-hidden" onclick="handleAnswer(this, 2)">
<span className="z-10 relative">
                My face full of different expressions
              </span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500 flex-shrink-0 ml-2 z-10 relative" icon="solar:emoji-funny-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="step w-full hidden" id="step-2">
<h2 className="text-2xl font-medium text-rose-950 mb-2 tracking-tight">
            Question 2/5
          </h2>
<p className="text-rose-600/80 text-lg mb-8 font-normal leading-relaxed">
            If I’m having a rough day, what is your "secret weapon" to make me
            feel like everything is going to be okay?
          </p>
<div className="space-y-3 w-full">
<button className="answer-btn w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group text-left relative overflow-hidden" onclick="handleAnswer(this, 3)">
<span className="z-10 relative">
                Just giving me a long hug and staying quiet.
              </span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500 flex-shrink-0 ml-2 z-10 relative" icon="solar:heart-angle-linear"></iconify-icon>
</button>
<button className="answer-btn w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group text-left relative overflow-hidden" onclick="handleAnswer(this, 3)">
<span className="z-10 relative">
                Bringing me my favorite snack/treat without me asking.
              </span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500 flex-shrink-0 ml-2 z-10 relative" icon="solar:cookie-linear"></iconify-icon>
</button>
<button className="answer-btn w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group text-left relative overflow-hidden" onclick="handleAnswer(this, 3)">
<span className="z-10 relative">Sing me a song.</span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500 flex-shrink-0 ml-2 z-10 relative" icon="solar:music-note-linear"></iconify-icon>
</button>
</div>
</div>

<div className="step w-full hidden" id="step-3">
<h2 className="text-2xl font-medium text-rose-950 mb-2 tracking-tight">
            Question 3/5
          </h2>
<p className="text-rose-600/80 text-lg mb-8 font-normal leading-relaxed">
            Since I’ve been in your life, what is the biggest way I’ve changed
            your world for the better?
          </p>
<div className="space-y-3 w-full">
<button className="answer-btn w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group text-left relative overflow-hidden" onclick="handleAnswer(this, 4)">
<span className="z-10 relative">
                You’re my "calm" in the middle of a stressful day.
              </span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500 flex-shrink-0 ml-2 z-10 relative" icon="solar:sun-fog-linear"></iconify-icon>
</button>
<button className="answer-btn w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group text-left relative overflow-hidden" onclick="handleAnswer(this, 4)">
<span className="z-10 relative">
                You’ve shown me what it really feels like to be understood.
              </span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500 flex-shrink-0 ml-2 z-10 relative" icon="solar:chat-round-check-linear"></iconify-icon>
</button>
<button className="answer-btn w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group text-left relative overflow-hidden" onclick="handleAnswer(this, 4)">
<span className="z-10 relative">
                Honestly, life is just 10x more fun with you around.
              </span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500 flex-shrink-0 ml-2 z-10 relative" icon="solar:confetti-minimalistic-linear"></iconify-icon>
</button>
</div>
</div>

<div className="step w-full hidden" id="step-4">
<h2 className="text-2xl font-medium text-rose-950 mb-2 tracking-tight">
            Question 4/5
          </h2>
<p className="text-rose-600/80 text-lg mb-8 font-normal leading-relaxed">
            If we were to spend a whole day doing exactly what I love, which
            version of "Me" are you most excited to hang out with?
          </p>
<div className="space-y-3 w-full">
<button className="answer-btn w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group text-left relative overflow-hidden" onclick="handleAnswer(this, 5)">
<span className="z-10 relative">
                "Adventurous Me" (Out exploring and trying something new).
              </span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500 flex-shrink-0 ml-2 z-10 relative" icon="solar:map-arrow-up-linear"></iconify-icon>
</button>
<button className="answer-btn w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group text-left relative overflow-hidden" onclick="handleAnswer(this, 5)">
<span className="z-10 relative">
                "Cozied-up Me" (Staying in, talking, and relaxing).
              </span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500 flex-shrink-0 ml-2 z-10 relative" icon="solar:sofa-linear"></iconify-icon>
</button>
<button className="answer-btn w-full py-4 px-6 bg-white border border-rose-100 rounded-2xl text-rose-900 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between group text-left relative overflow-hidden" onclick="handleAnswer(this, 5)">
<span className="z-10 relative">
                Any version—I just want to be the one standing next to you.
              </span>
<iconify-icon className="text-xl text-rose-300 group-hover:text-rose-500 flex-shrink-0 ml-2 z-10 relative" icon="solar:heart-lock-linear"></iconify-icon>
</button>
</div>
</div>

<div className="step w-full hidden flex-col items-center" id="step-5">

<img alt="Love Cat" className="w-32 h-32 object-contain mb-6 drop-shadow-sm animate-bounce" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18cbbc68-ef67-43c6-811b-17d56d37ee3a_3840w.png" style={{animationDuration: '2s'}}/>
<h2 className="text-3xl font-medium text-rose-950 mb-3 tracking-tight">
            One last question...
          </h2>
<p className="text-rose-600/80 text-lg mb-10 font-normal leading-relaxed">
            Now that you've spent all this time thinking about me... I have one
            more question. I promise it’s the most important one: Will you be my
            Valentine? 💍
          </p>
<div className="flex flex-col gap-4 w-full relative h-40">
<button className="w-full py-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl text-white font-medium text-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:scale-[1.02] transition-all z-10 flex items-center justify-center gap-2" id="yes-btn" onclick="finishProposal()">
<span>YES!</span>
<iconify-icon className="text-2xl" icon="solar:heart-shine-linear"></iconify-icon>
</button>
<button className="w-full py-4 bg-white border border-rose-100 rounded-2xl text-rose-400 hover:bg-rose-50 transition-all text-lg font-normal" id="no-btn" onclick="handleNo()">
              NO!
            </button>
</div>
</div>

<div className="hidden w-full flex-col items-center justify-center h-full" id="success-screen">
<div className="relative mb-6">
<div className="absolute inset-0 bg-rose-200 blur-2xl opacity-50 rounded-full animate-pulse"></div>
<iconify-icon className="text-7xl text-rose-500 relative z-10" icon="solar:chat-heart-linear"></iconify-icon>
</div>
<h1 className="text-3xl font-medium text-rose-950 mb-2 tracking-tight">
            I knew it! ❤️
          </h1>
<p className="text-rose-600 text-lg font-normal mb-6">
            Here's a little reminder of why you're amazing:
          </p>

<div className="w-full max-h-[250px] overflow-y-auto custom-scrollbar space-y-3 mb-6 px-1 text-left" id="summary-container">

</div>
<button className="mt-4 mb-8 px-6 py-3 bg-white border border-rose-200 text-rose-500 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all flex items-center gap-2 font-medium mx-auto group" id="share-btn" onclick="copyLink(this)">
<iconify-icon className="text-xl group-hover:rotate-45 transition-transform" icon="solar:link-circle-linear"></iconify-icon>
<span>Copy Link to Send</span>
</button>
<div className="flex gap-4">
<span className="text-2xl animate-bounce" style={{animationDelay: '0.1s'}}>
              🌹
            </span>
<span className="text-2xl animate-bounce" style={{animationDelay: '0.2s'}}>
              ✨
            </span>
<span className="text-2xl animate-bounce" style={{animationDelay: '0.3s'}}>
              💑
            </span>
</div>
</div>
</div>
</main>



    </>
  );
}
