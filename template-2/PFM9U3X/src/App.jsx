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
      
// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



      // Icons
      lucide.createIcons({
        attrs: { 'stroke-width': 1.5 }
      });

      // Progress Chart
      const ctx = document.getElementById('progressChart');
      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
              label: 'Minutes',
              data: [10, 12, 8, 9, 7, 6, 6],
              borderColor: '#6366F1',
              backgroundColor: 'rgba(99,102,241,0.15)',
              pointRadius: 3,
              tension: 0.35,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(17,24,39,0.9)',
                padding: 10,
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                titleColor: '#fff',
                bodyColor: '#d4d4d8'
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: '#a3a3a3', font: { size: 11 } }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: '#a3a3a3', font: { size: 11 } },
                suggestedMin: 0
              }
            }
          }
        });
      }

      // Flashcards data
      const cards = [
        { word: 'serene', meaning: 'Calm, peaceful, and untroubled; tranquil.', example: 'The lake was serene at dawn.', topic: 'Nature', level: 'Intermediate' },
        { word: 'elated', meaning: 'Ecstatically happy; overjoyed.', example: 'She felt elated after passing the test.', topic: 'Emotions', level: 'Beginner' },
        { word: 'meticulous', meaning: 'Showing great attention to detail; very careful and precise.', example: 'He is meticulous about his work.', topic: 'Work', level: 'Upper-Int.' },
        { word: 'ambiguous', meaning: 'Open to more than one interpretation; not having one obvious meaning.', example: 'The question was ambiguous.', topic: 'General', level: 'Intermediate' },
      ];
      let cardIndex = 0;
      const flashcard = document.getElementById('flashcard');
      const flashcardInner = document.getElementById('flashcardInner');
      const cardWord = document.getElementById('cardWord');
      const cardMeaning = document.getElementById('cardMeaning');
      const speakWordBtn = document.getElementById('speakWordBtn');
      const nextCardBtn = document.getElementById('nextCardBtn');

      function renderCard(i) {
        const c = cards[i % cards.length];
        cardWord.textContent = c.word;
        cardMeaning.textContent = c.meaning;
        // Reset flip
        flashcardInner.style.transform = 'rotateY(0deg)';
      }

      renderCard(cardIndex);

      flashcard.addEventListener('click', () => {
        const isBack = flashcardInner.style.transform.includes('180deg');
        flashcardInner.style.transform = isBack ? 'rotateY(0deg)' : 'rotateY(180deg)';
      });

      function speak(text) {
        try {
          const u = new SpeechSynthesisUtterance(text);
          u.lang = 'en-US';
          u.rate = 0.98;
          u.pitch = 1;
          window.speechSynthesis.speak(u);
        } catch (e) {
          console.log('Speech not supported');
        }
      }

      speakWordBtn.addEventListener('click', () => {
        speak(cardWord.textContent);
      });

      nextCardBtn.addEventListener('click', () => {
        cardIndex = (cardIndex + 1) % cards.length;
        renderCard(cardIndex);
      });

      document.getElementById('againBtn').addEventListener('click', () => {
        // Send card to near future
        cards.splice(cardIndex + 2, 0, cards.splice(cardIndex, 1)[0]);
        renderCard(cardIndex % cards.length);
      });
      document.getElementById('hardBtn').addEventListener('click', () => {
        cards.splice(cardIndex + 3, 0, cards.splice(cardIndex, 1)[0]);
        renderCard(cardIndex % cards.length);
      });
      document.getElementById('easyBtn').addEventListener('click', () => {
        cards.push(cards.splice(cardIndex, 1)[0]);
        renderCard(cardIndex % cards.length);
      });

      // Quick Quiz
      const quizBank = [
        {
          q: 'Choose the correct sentence:',
          options: [
            { t: 'She is reading now.', correct: true, why: 'Present Continuous for action happening now.' },
            { t: 'She read now.', correct: false, why: 'Incorrect tense for an action happening now.' },
            { t: 'She reads now.', correct: false, why: 'Reads (simple) suggests routine, not the present moment.' }
          ]
        },
        {
          q: 'Pick the correct form:',
          options: [
            { t: 'They usually have lunch at 1 pm.', correct: true, why: 'Simple present for routines.' },
            { t: 'They are usually having lunch at 1 pm.', correct: false, why: 'Continuous + usually is odd unless emphasizing temporariness.' },
            { t: 'They has lunch at 1 pm.', correct: false, why: 'Subject-verb agreement error.' }
          ]
        },
        {
          q: 'Which is correct?',
          options: [
            { t: 'I am working right now.', correct: true, why: 'Action happening at the moment.' },
            { t: 'I work right now.', correct: false, why: 'Simple present suggests habit.' },
            { t: 'I am work right now.', correct: false, why: 'Be + -ing is required.' }
          ]
        }
      ];
      let quizIdx = 0;

      const quizQuestion = document.getElementById('quizQuestion');
      const quizOptions = document.getElementById('quizOptions');
      const quizFeedback = document.getElementById('quizFeedback');
      const nextQuizBtn = document.getElementById('nextQuizBtn');
      const explainBtn = document.getElementById('explainBtn');

      function renderQuiz(i) {
        const item = quizBank[i % quizBank.length];
        quizQuestion.textContent = item.q;
        quizOptions.innerHTML = '';
        quizFeedback.textContent = '';
        item.options.forEach((opt, idx) => {
          const btn = document.createElement('button');
          btn.className = 'flex w-full items-center gap-3 rounded-lg border border-white/10 bg-neutral-800/60 px-3 py-2 text-left text-sm text-neutral-200 hover:bg-white/10';
          btn.innerHTML = '<span class="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10">'+ String.fromCharCode(65+idx) +'</span><span class="flex-1">'+ opt.t +'</span>';
          btn.addEventListener('click', () => {
            Array.from(quizOptions.children).forEach(c => {
              c.classList.remove('ring-2','ring-emerald-400/40','ring-rose-400/40','bg-emerald-500/10','bg-rose-500/10');
            });
            if (opt.correct) {
              btn.classList.add('ring-2','ring-emerald-400/40','bg-emerald-500/10');
              quizFeedback.className = 'mt-3 text-sm text-emerald-300';
              quizFeedback.textContent = 'Correct! ' + opt.why;
            } else {
              btn.classList.add('ring-2','ring-rose-400/40','bg-rose-500/10');
              quizFeedback.className = 'mt-3 text-sm text-rose-300';
              quizFeedback.textContent = 'Not quite. ' + opt.why;
            }
          });
          quizOptions.appendChild(btn);
        });
      }
      renderQuiz(quizIdx);

      nextQuizBtn.addEventListener('click', () => {
        quizIdx = (quizIdx + 1) % quizBank.length;
        renderQuiz(quizIdx);
      });

      explainBtn.addEventListener('click', () => {
        const item = quizBank[quizIdx % quizBank.length];
        const correct = item.options.find(o => o.correct);
        quizFeedback.className = 'mt-3 text-sm text-neutral-300';
        quizFeedback.textContent = 'Explanation: ' + correct.why;
      });

      // Listening Practice
      const sentences = [
        'The weather is nice today.',
        'I am reading a fascinating book.',
        'They usually eat dinner at seven.',
        'Please close the door quietly.',
        'She is studying for her exam right now.'
      ];
      let currentSentence = sentences[0];
      const playBtn = document.getElementById('playSentenceBtn');
      const input = document.getElementById('listeningInput');
      const feedback = document.getElementById('listeningFeedback');
      const newSentenceBtn = document.getElementById('newSentenceBtn');
      const checkListeningBtn = document.getElementById('checkListeningBtn');

      function playSentence(text) {
        speak(text);
      }

      playBtn.addEventListener('click', () => {
        playSentence(currentSentence);
      });

      newSentenceBtn.addEventListener('click', () => {
        currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
        document.getElementById('listeningPrompt').textContent = 'Type what you hear.';
        input.value = '';
        feedback.innerHTML = '';
        playSentence(currentSentence);
      });

      checkListeningBtn.addEventListener('click', () => {
        const guess = (input.value || '').trim().toLowerCase();
        const target = currentSentence.trim().toLowerCase();
        if (!guess) {
          feedback.className = 'mt-3 text-sm text-amber-300';
          feedback.textContent = 'Type your answer first.';
          return;
        }
        if (guess === target) {
          feedback.className = 'mt-3 text-sm text-emerald-300';
          feedback.innerHTML = 'Great job! Perfect match.';
        } else {
          // simple diff: show target
          feedback.className = 'mt-3 text-sm text-neutral-300';
          feedback.innerHTML = 'Almost! Correct sentence: <span class="text-neutral-100">"' + currentSentence + '"</span>';
        }
      });

      // Word of the Day speak
      document.getElementById('wotdSpeak').addEventListener('click', () => {
        const word = document.getElementById('wotdWord').textContent;
        const meaning = document.getElementById('wotdMeaning').textContent;
        speak(word + '. ' + meaning);
      });

      // Settings: Daily Goal
      const goalValue = document.getElementById('goalValue');
      document.getElementById('increaseGoal').addEventListener('click', () => {
        let v = parseInt(goalValue.textContent, 10) || 0;
        v = Math.min(120, v + 5);
        goalValue.textContent = v;
      });
      document.getElementById('decreaseGoal').addEventListener('click', () => {
        let v = parseInt(goalValue.textContent, 10) || 0;
        v = Math.max(5, v - 5);
        goalValue.textContent = v;
      });

      // Settings: Review toggle
      const toggleReview = document.getElementById('toggleReview');
      const toggleKnob = document.getElementById('toggleKnob');
      let reviewEnabled = false;
      toggleReview.addEventListener('click', () => {
        reviewEnabled = !reviewEnabled;
        if (reviewEnabled) {
          toggleReview.classList.add('bg-indigo-500/30');
          toggleKnob.classList.add('translate-x-6','bg-indigo-200');
        } else {
          toggleReview.classList.remove('bg-indigo-500/30');
          toggleKnob.classList.remove('translate-x-6','bg-indigo-200');
        }
      });

      // Accessibility: keyboard support for flashcard flip
      flashcard.setAttribute('tabindex', '0');
      flashcard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          flashcard.click();
        }
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900"></div>
<div className="absolute left-1/2 top-[-10%] h-[50vh] w-[80vw] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute right-[-10%] bottom-[-20%] h-[40vh] w-[50vw] rounded-full bg-fuchsia-500/10 blur-3xl"></div>
</div>
<div className="mx-auto flex max-w-[1300px] gap-6 px-4 py-6 md:px-6 lg:py-8">

<aside className="hidden w-64 shrink-0 md:block">
<div className="sticky top-6 space-y-6">

<div className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-900/60 px-4 py-3 backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10">
<span className="text-lg font-semibold tracking-tight text-white">EL</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white/90">English Learn</div>
<div className="text-[11px] text-neutral-400">Your daily practice</div>
</div>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md text-neutral-300 hover:bg-white/5 hover:text-white hover:ring-1 hover:ring-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
<i className="h-4 w-4" data-lucide="settings"></i>
</button>
</div>

<nav className="rounded-xl border border-white/10 bg-neutral-900/50 p-2 backdrop-blur-md">
<ul className="space-y-1">
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white hover:ring-1 hover:ring-white/10" href="#">
<i className="h-4 w-4 text-neutral-400 group-hover:text-white" data-lucide="layout-dashboard"></i>
<span className="font-medium">Dashboard</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white hover:ring-1 hover:ring-white/10" href="#lessons">
<i className="h-4 w-4 text-neutral-400 group-hover:text-white" data-lucide="book-open"></i>
<span className="font-medium">Lessons</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white hover:ring-1 hover:ring-white/10" href="#flashcards">
<i className="h-4 w-4 text-neutral-400 group-hover:text-white" data-lucide="files"></i>
<span className="font-medium">Flashcards</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white hover:ring-1 hover:ring-white/10" href="#listening">
<i className="h-4 w-4 text-neutral-400 group-hover:text-white" data-lucide="headphones"></i>
<span className="font-medium">Listening</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white hover:ring-1 hover:ring-white/10" href="#quiz">
<i className="h-4 w-4 text-neutral-400 group-hover:text-white" data-lucide="help-circle"></i>
<span className="font-medium">Quick Quiz</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white hover:ring-1 hover:ring-white/10" href="#progress">
<i className="h-4 w-4 text-neutral-400 group-hover:text-white" data-lucide="chart-line"></i>
<span className="font-medium">Progress</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white hover:ring-1 hover:ring-white/10" href="#settings">
<i className="h-4 w-4 text-neutral-400 group-hover:text-white" data-lucide="sliders"></i>
<span className="font-medium">Settings</span>
</a>
</li>
</ul>
<div className="my-2 border-t border-white/10"></div>
<div className="px-3 py-2.5">
<div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
<img alt="User" className="h-9 w-9 rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop" />
<div className="min-w-0">
<p className="truncate text-sm font-medium text-white/90">Alex Morgan</p>
<p className="truncate text-xs text-neutral-400">Streak: 7 days</p>
</div>
<button className="ml-auto inline-flex h-8 items-center gap-2 rounded-md bg-indigo-500/10 px-2.5 text-xs font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/30 hover:bg-indigo-500/20 hover:text-indigo-200">
<i className="h-4 w-4" data-lucide="flame"></i><span>Boost</span>
</button>
</div>
</div>
</nav>
</div>
</aside>

<main className="flex-1 space-y-6">

<header className="flex flex-col gap-4 rounded-xl border border-white/10 bg-neutral-900/60 p-4 backdrop-blur md:flex-row md:items-center md:justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-white">Welcome back, Alex</h1>
<p className="text-sm text-neutral-400">Continue your daily English practice.</p>
</div>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
<div className="flex items-center gap-2">
<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="calendar"></i>
<span className="text-xs text-neutral-300">Day 8 of 30</span>
</div>
<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<i className="h-4 w-4 text-orange-300" data-lucide="flame"></i>
<span className="text-xs text-neutral-300">7-day streak</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="relative flex-1">
<i className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" data-lucide="search"></i>
<input className="w-full rounded-lg border border-white/10 bg-neutral-800/60 py-2 pl-9 pr-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:w-72" placeholder="Search words, topics..." type="text" />
</div>
<button className="inline-flex h-9 items-center gap-2 rounded-lg bg-indigo-500/10 px-3 text-sm font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/30 hover:bg-indigo-500/20 hover:text-indigo-200">
<i className="h-4 w-4" data-lucide="rocket"></i>
<span>Start Daily</span>
</button>
</div>
</div>
</header>

<section className="grid grid-cols-1 gap-6 lg:grid-cols-3">

<div className="space-y-6 lg:col-span-2">

<section className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur" id="lessons">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight text-white">Daily Lesson</h2>
<p className="text-sm text-neutral-400">Grammar focus: Present Simple vs. Present Continuous</p>
</div>
<button className="inline-flex h-9 items-center gap-2 rounded-lg bg-white/5 px-3 text-sm font-medium text-neutral-200 ring-1 ring-inset ring-white/10 hover:bg-white/10">
<i className="h-4 w-4 text-green-300" data-lucide="play-circle"></i>
<span>Resume</span>
</button>
</div>
<div className="mt-4 grid gap-4 md:grid-cols-2">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-yellow-300" data-lucide="zap"></i>
<p className="text-sm font-medium text-white/90">Concept</p>
</div>
<ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
<li>Use Present Simple for routines: I work every day.</li>
<li>Use Present Continuous for actions now: I am working now.</li>
<li>Signal words: always, usually, now, at the moment.</li>
</ul>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="clipboard-check"></i>
<p className="text-sm font-medium text-white/90">Examples</p>
</div>
<div className="mt-3 space-y-2 text-sm text-neutral-300">
<p>I read news every morning.</p>
<p>She is reading a book right now.</p>
<p>They play football on weekends.</p>
</div>
</div>
</div>
<div className="mt-5">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs text-neutral-400">Progress</span>
<span className="text-xs font-medium text-neutral-200" id="lessonProgressValue">45%</span>
</div>
<div className="h-2 w-full rounded-full bg-neutral-800">
<div className="h-2 rounded-full bg-indigo-500" id="lessonProgressBar" style={{width: `45%`}}></div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
<i className="h-4 w-4" data-lucide="clock"></i>
                  ~12 minutes remaining
                </div>
</div>
</section>

<section className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur" id="flashcards">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white">Flashcards</h2>
<div className="flex items-center gap-2">
<button className="inline-flex h-9 items-center gap-2 rounded-lg bg-white/5 px-3 text-sm font-medium text-neutral-200 ring-1 ring-inset ring-white/10 hover:bg-white/10" id="speakWordBtn">
<i className="h-4 w-4" data-lucide="volume-2"></i>
<span>Speak</span>
</button>
<button className="inline-flex h-9 items-center gap-2 rounded-lg bg-indigo-500/10 px-3 text-sm font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/30 hover:bg-indigo-500/20 hover:text-indigo-200" id="nextCardBtn">
<i className="h-4 w-4" data-lucide="chevron-right"></i>
<span>Next</span>
</button>
</div>
</div>
<div className="mt-4 grid gap-4 md:grid-cols-2">

<div className="relative h-56 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 p-0 [perspective:1000px]" id="flashcard" title="Click to flip">
<div className="absolute inset-0 rounded-xl transition-transform duration-700 [transform-style:preserve-3d]" id="flashcardInner">

<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-neutral-900/80 to-neutral-900/60 p-6 ring-1 ring-inset ring-white/10 [backface-visibility:hidden]" id="flashcardFront">
<div className="inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-white/10">
<i className="h-4 w-4" data-lucide="book"></i> Vocabulary
                      </div>
<p className="mt-2 text-3xl font-semibold tracking-tight text-white" id="cardWord">serene</p>
<p className="text-sm text-neutral-400">Tap to see meaning</p>
</div>

<div className="absolute inset-0 rotate-y-180 flex flex-col justify-center gap-3 rounded-xl bg-gradient-to-b from-neutral-900/80 to-neutral-900/60 p-6 ring-1 ring-inset ring-white/10 [backface-visibility:hidden] [transform:rotateY(180deg)]" id="flashcardBack">
<p className="text-lg font-semibold tracking-tight text-white">Meaning</p>
<p className="text-sm text-neutral-300" id="cardMeaning">Calm, peaceful, and untroubled; tranquil.</p>
<div className="rounded-md border border-white/10 bg-white/5 p-3 text-sm text-neutral-300">
                        Example: The lake was serene at dawn.
                      </div>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-4">
<div className="space-y-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-sky-300" data-lucide="tag"></i>
<span className="text-sm text-neutral-300">Topic: Nature</span>
</div>
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-violet-300" data-lucide="sparkles"></i>
<span className="text-sm text-neutral-300">Level: Intermediate</span>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2 text-center">
<button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-white/10" id="againBtn">Again</button>
<button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-white/10" id="hardBtn">Hard</button>
<button className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-200 hover:bg-emerald-500/20" id="easyBtn">Easy</button>
</div>
</div>
</div>
</section>

<section className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur" id="quiz">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white">Quick Quiz</h2>
<div className="text-xs text-neutral-400">Grammar • 5 questions</div>
</div>
<div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4">
<p className="text-sm text-neutral-200" id="quizQuestion">Choose the correct sentence:</p>
<div className="mt-3 grid gap-2" id="quizOptions">

</div>
<div className="mt-3 text-sm" id="quizFeedback"></div>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex h-9 items-center gap-2 rounded-lg bg-indigo-500/10 px-3 text-sm font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/30 hover:bg-indigo-500/20 hover:text-indigo-200" id="nextQuizBtn">
<i className="h-4 w-4" data-lucide="chevrons-right"></i>
<span>Next</span>
</button>
<button className="inline-flex h-9 items-center gap-2 rounded-lg bg-white/5 px-3 text-sm font-medium text-neutral-200 ring-1 ring-inset ring-white/10 hover:bg-white/10" id="explainBtn">
<i className="h-4 w-4" data-lucide="message-circle"></i>
<span>Explain</span>
</button>
</div>
</div>
</section>
</div>

<div className="space-y-6">

<section className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur" id="listening">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white">Listening</h2>
<button className="inline-flex h-9 items-center gap-2 rounded-lg bg-emerald-500/10 px-3 text-sm font-medium text-emerald-200 ring-1 ring-inset ring-emerald-500/30 hover:bg-emerald-500/20" id="playSentenceBtn">
<i className="h-4 w-4" data-lucide="play"></i>
<span>Play</span>
</button>
</div>
<p className="mt-3 text-sm text-neutral-300" id="listeningPrompt">Type what you hear.</p>
<input className="mt-3 w-full rounded-lg border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20" id="listeningInput" placeholder="Start typing..." type="text" />
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex h-9 items-center gap-2 rounded-lg bg-white/5 px-3 text-sm font-medium text-neutral-200 ring-1 ring-inset ring-white/10 hover:bg-white/10" id="checkListeningBtn">
<i className="h-4 w-4" data-lucide="check"></i>
<span>Check</span>
</button>
<button className="inline-flex h-9 items-center gap-2 rounded-lg bg-indigo-500/10 px-3 text-sm font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/30 hover:bg-indigo-500/20 hover:text-indigo-200" id="newSentenceBtn">
<i className="h-4 w-4" data-lucide="shuffle"></i>
<span>Try another</span>
</button>
</div>
<div className="mt-3 text-sm" id="listeningFeedback"></div>
</section>

<section className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur" id="progress">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white">Progress</h2>
<div className="text-xs text-neutral-400">Last 7 days</div>
</div>
<div className="mt-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="relative h-48 w-full">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">

<div className="h-full w-full">
<canvas id="progressChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-xs text-neutral-300">
<div className="rounded-md border border-white/10 bg-neutral-900/60 p-2">
<div className="text-neutral-400">Words</div>
<div className="text-white" id="statWords">142</div>
</div>
<div className="rounded-md border border-white/10 bg-neutral-900/60 p-2">
<div className="text-neutral-400">Accuracy</div>
<div className="text-white" id="statAccuracy">92%</div>
</div>
<div className="rounded-md border border-white/10 bg-neutral-900/60 p-2">
<div className="text-neutral-400">Minutes</div>
<div className="text-white" id="statMinutes">58</div>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white">Word of the Day</h2>
<button className="inline-flex h-9 items-center gap-2 rounded-lg bg-white/5 px-3 text-sm font-medium text-neutral-200 ring-1 ring-inset ring-white/10 hover:bg-white/10" id="wotdSpeak">
<i className="h-4 w-4" data-lucide="volume"></i>
<span>Listen</span>
</button>
</div>
<div className="mt-3 flex items-start gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<i className="h-5 w-5 text-violet-300" data-lucide="sparkle"></i>
</div>
<div>
<div className="text-lg font-semibold tracking-tight text-white"><span id="wotdWord">meticulous</span> <span className="text-sm text-neutral-400">/məˈtɪkjʊləs/</span></div>
<p className="text-sm text-neutral-300" id="wotdMeaning">Showing great attention to detail; very careful and precise.</p>
<p className="mt-2 rounded-md border border-white/10 bg-white/5 p-2 text-sm text-neutral-300">She kept meticulous notes during the meeting.</p>
</div>
</div>
</section>
</div>
</section>

<section className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur" id="settings">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white">Settings</h2>
<div className="text-xs text-neutral-400">Personalize your learning</div>
</div>
<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-neutral-200">Daily Goal</p>
<span className="text-xs text-neutral-400">15 min</span>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10" id="decreaseGoal">
<i className="h-4 w-4" data-lucide="minus"></i>
</button>
<div className="flex-1 rounded-md border border-white/10 bg-neutral-800/60 px-3 py-2 text-center text-sm text-neutral-200" id="goalValue">15</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10" id="increaseGoal">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
<span className="text-xs text-neutral-400">min</span>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-neutral-200">Review Mode</p>
<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/10 transition hover:ring-1 hover:ring-white/20" id="toggleReview">
<span className="sr-only">Toggle Review</span>
<span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-neutral-200 transition" id="toggleKnob"></span>
</button>
</div>
<p className="mt-2 text-xs text-neutral-400">Enable to prioritize weak words.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-neutral-200">Voice</p>
<div className="text-xs text-neutral-400">en-US</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="rounded-md border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm text-neutral-200 hover:bg-white/10">Female</button>
<button className="rounded-md border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm text-neutral-200 hover:bg-white/10">Male</button>
</div>
</div>
</div>
</section>
<footer className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-900/60 px-4 py-3 text-xs text-neutral-400">
<span>© 2025 EL. All rights reserved.</span>
<div className="flex items-center gap-3">
<a className="hover:text-neutral-200" href="#">Terms</a>
<span className="text-neutral-600">•</span>
<a className="hover:text-neutral-200" href="#">Privacy</a>
</div>
</footer>
</main>
</div>



    </>
  );
}
