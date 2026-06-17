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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const questions = [
            // Romantic
            { q: "What is your absolute favorite memory of us together?", c: "Romantic", color: "text-rose-300", border: "border-rose-400/20", bg: "bg-rose-400/10", icon: "solar:hearts-linear" },
            { q: "What was the exact moment you realized you had feelings for me?", c: "Romantic", color: "text-rose-300", border: "border-rose-400/20", bg: "bg-rose-400/10", icon: "solar:hearts-linear" },
            { q: "Describe your idea of a perfectly romantic date night.", c: "Romantic", color: "text-rose-300", border: "border-rose-400/20", bg: "bg-rose-400/10", icon: "solar:hearts-linear" },
            { q: "What is my best physical feature in your eyes?", c: "Romantic", color: "text-rose-300", border: "border-rose-400/20", bg: "bg-rose-400/10", icon: "solar:hearts-linear" },
            { q: "If you had to describe my personality in three words, what would they be?", c: "Romantic", color: "text-rose-300", border: "border-rose-400/20", bg: "bg-rose-400/10", icon: "solar:hearts-linear" },
            { q: "What song automatically makes you think of me?", c: "Romantic", color: "text-rose-300", border: "border-rose-400/20", bg: "bg-rose-400/10", icon: "solar:hearts-linear" },
            { q: "What is a small, everyday thing I do that makes you feel loved?", c: "Romantic", color: "text-rose-300", border: "border-rose-400/20", bg: "bg-rose-400/10", icon: "solar:hearts-linear" },
            { q: "How do I make you feel safe and secure?", c: "Romantic", color: "text-rose-300", border: "border-rose-400/20", bg: "bg-rose-400/10", icon: "solar:hearts-linear" },
            { q: "What is your favorite compliment that I've ever given you?", c: "Romantic", color: "text-rose-300", border: "border-rose-400/20", bg: "bg-rose-400/10", icon: "solar:hearts-linear" },
            { q: "What is your dream vacation for just the two of us?", c: "Romantic", color: "text-rose-300", border: "border-rose-400/20", bg: "bg-rose-400/10", icon: "solar:hearts-linear" },

            // Deep
            { q: "What is your biggest unspoken fear regarding our relationship?", c: "Deep", color: "text-violet-300", border: "border-violet-400/20", bg: "bg-violet-400/10", icon: "solar:moon-stars-linear" },
            { q: "In what ways do you feel you've grown since we met?", c: "Deep", color: "text-violet-300", border: "border-violet-400/20", bg: "bg-violet-400/10", icon: "solar:moon-stars-linear" },
            { q: "What is a vulnerability you struggle to share with me?", c: "Deep", color: "text-violet-300", border: "border-violet-400/20", bg: "bg-violet-400/10", icon: "solar:moon-stars-linear" },
            { q: "What is your biggest regret in life so far?", c: "Deep", color: "text-violet-300", border: "border-violet-400/20", bg: "bg-violet-400/10", icon: "solar:moon-stars-linear" },
            { q: "How do you personally define a happy, successful life?", c: "Deep", color: "text-violet-300", border: "border-violet-400/20", bg: "bg-violet-400/10", icon: "solar:moon-stars-linear" },
            { q: "What do you need most from me when you are going through a hard time?", c: "Deep", color: "text-violet-300", border: "border-violet-400/20", bg: "bg-violet-400/10", icon: "solar:moon-stars-linear" },
            { q: "How would you describe your primary love language?", c: "Deep", color: "text-violet-300", border: "border-violet-400/20", bg: "bg-violet-400/10", icon: "solar:moon-stars-linear" },
            { q: "What childhood experience most shaped who you are today?", c: "Deep", color: "text-violet-300", border: "border-violet-400/20", bg: "bg-violet-400/10", icon: "solar:moon-stars-linear" },
            { q: "What accomplishment are you quietly most proud of?", c: "Deep", color: "text-violet-300", border: "border-violet-400/20", bg: "bg-violet-400/10", icon: "solar:moon-stars-linear" },
            { q: "Where do you realistically and hopefully see us in 5 years?", c: "Deep", color: "text-violet-300", border: "border-violet-400/20", bg: "bg-violet-400/10", icon: "solar:moon-stars-linear" },

            // Spicy
            { q: "What is a fantasy you've been hesitant to share?", c: "Spicy", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/10", icon: "solar:fire-linear" },
            { q: "Where is the most daring place you'd want to be intimate?", c: "Spicy", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/10", icon: "solar:fire-linear" },
            { q: "What is your absolute favorite thing I do to you in bed?", c: "Spicy", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/10", icon: "solar:fire-linear" },
            { q: "Which outfit or item of clothing of mine turns you on the most?", c: "Spicy", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/10", icon: "solar:fire-linear" },
            { q: "What is something totally new you want to try with me?", c: "Spicy", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/10", icon: "solar:fire-linear" },
            { q: "Describe the best, most passionate kiss we have ever shared.", c: "Spicy", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/10", icon: "solar:fire-linear" },
            { q: "What specific touch or look turns you on instantly?", c: "Spicy", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/10", icon: "solar:fire-linear" },
            { q: "Do you prefer slow and romantic or fast and rough?", c: "Spicy", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/10", icon: "solar:fire-linear" },
            { q: "Have you ever had an intense dream about me? Tell me about it.", c: "Spicy", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/10", icon: "solar:fire-linear" },
            { q: "Where is your favorite sensitive spot to be kissed?", c: "Spicy", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/10", icon: "solar:fire-linear" },

            // Everyday/Fun
            { q: "If we could only eat one meal together forever, what is it?", c: "Fun", color: "text-emerald-300", border: "border-emerald-400/20", bg: "bg-emerald-400/10", icon: "solar:ghost-smile-linear" },
            { q: "If our relationship was a TV show, what genre would it be?", c: "Fun", color: "text-emerald-300", border: "border-emerald-400/20", bg: "bg-emerald-400/10", icon: "solar:ghost-smile-linear" },
            { q: "What is my most annoying, yet somewhat lovable, habit?", c: "Fun", color: "text-emerald-300", border: "border-emerald-400/20", bg: "bg-emerald-400/10", icon: "solar:ghost-smile-linear" },
            { q: "If we were an animal pair, what animals would we be?", c: "Fun", color: "text-emerald-300", border: "border-emerald-400/20", bg: "bg-emerald-400/10", icon: "solar:ghost-smile-linear" },
            { q: "What is your favorite ridiculous inside joke we share?", c: "Fun", color: "text-emerald-300", border: "border-emerald-400/20", bg: "bg-emerald-400/10", icon: "solar:ghost-smile-linear" },
            { q: "Who is honestly more likely to survive a zombie apocalypse?", c: "Fun", color: "text-emerald-300", border: "border-emerald-400/20", bg: "bg-emerald-400/10", icon: "solar:ghost-smile-linear" },
            { q: "What is a practical skill you wish I was much better at?", c: "Fun", color: "text-emerald-300", border: "border-emerald-400/20", bg: "bg-emerald-400/10", icon: "solar:ghost-smile-linear" },
            { q: "If we won the lottery right now, what's the first thing you'd buy us?", c: "Fun", color: "text-emerald-300", border: "border-emerald-400/20", bg: "bg-emerald-400/10", icon: "solar:ghost-smile-linear" },
            { q: "What is the weirdest, most obscure thing you find attractive about me?", c: "Fun", color: "text-emerald-300", border: "border-emerald-400/20", bg: "bg-emerald-400/10", icon: "solar:ghost-smile-linear" },
            { q: "What is your ideal way to spend a completely lazy Sunday together?", c: "Fun", color: "text-emerald-300", border: "border-emerald-400/20", bg: "bg-emerald-400/10", icon: "solar:ghost-smile-linear" },

            // Future/Growth
            { q: "What is a major goal we should set together for this year?", c: "Growth", color: "text-blue-300", border: "border-blue-400/20", bg: "bg-blue-400/10", icon: "solar:sprout-linear" },
            { q: "How can I be a better, more supportive partner to you right now?", c: "Growth", color: "text-blue-300", border: "border-blue-400/20", bg: "bg-blue-400/10", icon: "solar:sprout-linear" },
            { q: "What is a new hobby or skill you want us to learn together?", c: "Growth", color: "text-blue-300", border: "border-blue-400/20", bg: "bg-blue-400/10", icon: "solar:sprout-linear" },
            { q: "What is a meaningful tradition we should start for ourselves?", c: "Growth", color: "text-blue-300", border: "border-blue-400/20", bg: "bg-blue-400/10", icon: "solar:sprout-linear" },
            { q: "How do you think we handle arguments, and how can we improve?", c: "Growth", color: "text-blue-300", border: "border-blue-400/20", bg: "bg-blue-400/10", icon: "solar:sprout-linear" },
            { q: "What is a financial or career goal we should support each other on?", c: "Growth", color: "text-blue-300", border: "border-blue-400/20", bg: "bg-blue-400/10", icon: "solar:sprout-linear" },
            { q: "Describe the vibe of the home you want us to live in eventually.", c: "Growth", color: "text-blue-300", border: "border-blue-400/20", bg: "bg-blue-400/10", icon: "solar:sprout-linear" },
            { q: "What is a negative habit we share that we should try to break?", c: "Growth", color: "text-blue-300", border: "border-blue-400/20", bg: "bg-blue-400/10", icon: "solar:sprout-linear" },
            { q: "What is something you want to achieve independently, and how can I help?", c: "Growth", color: "text-blue-300", border: "border-blue-400/20", bg: "bg-blue-400/10", icon: "solar:sprout-linear" },
            { q: "How do we ensure we keep our romantic spark alive over the years?", c: "Growth", color: "text-blue-300", border: "border-blue-400/20", bg: "bg-blue-400/10", icon: "solar:sprout-linear" }
        ];

        let usedQuestions = [];
        let isPlayerOneTurn = true;

        function startSession() {
            document.getElementById('setup-view').classList.add('hidden');
            const gameView = document.getElementById('game-view');
            gameView.classList.remove('hidden');
            gameView.classList.add('flex');
            
            // Randomize starting player
            isPlayerOneTurn = Math.random() > 0.5;
            updateTurnUI(false);
        }

        function rollTurn() {
            isPlayerOneTurn = !isPlayerOneTurn;
            updateTurnUI(true);
            
            // Reset question area
            document.getElementById('q-category').classList.add('hidden');
            const qText = document.getElementById('q-text');
            qText.style.opacity = '0';
            
            setTimeout(() => {
                qText.textContent = "Draw a card to ask.";
                qText.className = "text-xl sm:text-2xl font-medium tracking-tight text-zinc-500 leading-snug italic transition-opacity duration-200";
                qText.style.opacity = '1';
            }, 200);
        }

        function updateTurnUI(animate) {
            const askerContainer = document.getElementById('asker-container');
            const answererContainer = document.getElementById('answerer-container');
            const askerName = document.getElementById('asker-name');
            const answererName = document.getElementById('answerer-name');

            const activeClasses = ['bg-zinc-800/80', 'border', 'border-zinc-700/50', 'shadow-sm'];
            
            if (isPlayerOneTurn) {
                askerName.textContent = 'You';
                askerName.className = 'text-base text-white font-medium tracking-tight';
                answererName.textContent = 'Me';
                answererName.className = 'text-base text-zinc-500 font-medium tracking-tight';
                
                askerContainer.classList.add(...activeClasses);
                answererContainer.classList.remove(...activeClasses);
            } else {
                askerName.textContent = 'I';
                askerName.className = 'text-base text-zinc-500 font-medium tracking-tight';
                answererName.textContent = 'You';
                answererName.className = 'text-base text-white font-medium tracking-tight';
                
                askerContainer.classList.remove(...activeClasses);
                answererContainer.classList.add(...activeClasses);
            }
        }

        function drawQuestion() {
            if (questions.length === usedQuestions.length) {
                usedQuestions = []; // Reset pool if all 50 are exhausted
            }

            let available = questions.filter(q => !usedQuestions.includes(q));
            let randomQ = available[Math.floor(Math.random() * available.length)];
            usedQuestions.push(randomQ);

            const qText = document.getElementById('q-text');
            const qCat = document.getElementById('q-category');

            // Fade out current text
            qText.style.opacity = '0';
            qCat.style.opacity = '0';

            setTimeout(() => {
                // Update text
                qText.textContent = randomQ.q;
                qText.className = "text-2xl sm:text-3xl font-medium tracking-tight text-white leading-tight animate-fade-in-up";
                
                // Update Category Pill
                qCat.innerHTML = `<iconify-icon icon="${randomQ.icon}" width="14"></iconify-icon> ${randomQ.c}`;
                qCat.className = `text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border ${randomQ.border} ${randomQ.color} ${randomQ.bg} mb-4 flex items-center gap-1.5 animate-fade-in-up`;
                qCat.classList.remove('hidden');
                
                qText.style.opacity = '1';
                qCat.style.opacity = '1';
            }, 200);
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 flex items-center justify-center">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-rose-500/10 rounded-full blur-[120px]"></div>
<div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-violet-500/10 rounded-full blur-[120px]"></div>
</div>
<main className="w-full max-w-md relative z-10 flex flex-col h-full max-h-[800px] justify-center">

<div className="bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative">

<header className="flex justify-between items-center mb-10">
<div className="text-xl font-medium tracking-tighter text-white">US.</div>
<iconify-icon className="text-rose-400" icon="solar:hearts-linear" width="24"></iconify-icon>
</header>

<div className="space-y-8 py-8 flex flex-col items-center text-center" id="setup-view">
<div className="space-y-2">
<h1 className="text-2xl font-medium tracking-tight text-white">Question Roulette</h1>
<p className="text-sm text-zinc-400">50 questions. No skips. Total honesty.</p>
</div>
<button className="w-full py-3 bg-zinc-100 text-zinc-950 rounded-xl font-medium text-sm hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-900 flex items-center justify-center gap-2 mt-4" onclick="startSession()">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Start Session
                </button>
</div>

<div className="hidden flex-col items-center text-center space-y-10 min-h-[360px] justify-between" id="game-view">

<div className="flex flex-col items-center gap-3 w-full">
<span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Current Turn</span>
<div className="flex items-center gap-3 bg-zinc-950/60 p-1.5 rounded-2xl border border-zinc-800/60 w-full justify-center shadow-inner">
<div className="flex-1 flex justify-center py-2 bg-zinc-800/80 rounded-xl border border-zinc-700/50 shadow-sm transition-all duration-300" id="asker-container">
<span className="text-base text-white font-medium tracking-tight" id="asker-name">You</span>
</div>
<span className="text-xs text-zinc-500 font-medium px-1">ask</span>
<div className="flex-1 flex justify-center py-2 rounded-xl transition-all duration-300" id="answerer-container">
<span className="text-base text-zinc-400 font-medium tracking-tight" id="answerer-name">Me</span>
</div>
</div>
</div>

<div className="w-full space-y-5 flex-1 flex flex-col justify-center relative">
<div className="flex justify-center h-6">
<span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-700 text-zinc-400 hidden items-center gap-1.5" id="q-category">
                            Category
                        </span>
</div>
<div className="min-h-[140px] flex items-center justify-center">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-500 leading-snug italic transition-opacity duration-200" id="q-text">
                            Draw a card to begin.
                        </h2>
</div>
</div>

<div className="grid grid-cols-2 gap-3 w-full pt-4 border-t border-zinc-800/50">
<button className="py-3 px-4 rounded-xl border border-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-800/50 hover:text-white transition-all flex items-center justify-center gap-2 group" onclick="rollTurn()">
<iconify-icon className="group-active:-rotate-180 transition-transform duration-500" icon="solar:refresh-linear" width="18"></iconify-icon>
                        Switch Turn
                    </button>
<button className="py-3 px-4 bg-zinc-100 text-zinc-950 rounded-xl font-medium text-sm hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-lg shadow-white/5" onclick="drawQuestion()">
<iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="solar:card-2-linear" width="18"></iconify-icon>
                        Draw Card
                    </button>
</div>
</div>
</div>

<p className="text-center text-xs text-zinc-600 mt-6 tracking-wide">Take your time. Be honest.</p>
</main>


    </>
  );
}
