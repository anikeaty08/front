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
      
    let defaultFlashcards = [
      {question: "What is the capital of France?", answer: "Paris"},
      {question: "2 + 2 =", answer: "4"},
      {question: "Largest planet in our Solar System?", answer: "Jupiter"},
      {question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci"},
      {question: "What is the boiling point of water (°C)?", answer: "100"},
      {question: "Fastest land animal?", answer: "Cheetah"},
      {question: "Chemical symbol for Gold?", answer: "Au"},
      {question: "First element on the periodic table?", answer: "Hydrogen"},
      {question: "Mount Everest is located in which range?", answer: "Himalayas"},
      {question: "Author of 'Harry Potter'?", answer: "J.K. Rowling"},
    ];
    let flashcards = [...defaultFlashcards];
    let current = 0, correct = 0, streak = 0, longestStreak = 0, showingAnswer = false, answered = Array(flashcards.length).fill(false), completed = false;

    function updateStats() {
      document.getElementById('progress').innerText = `Card ${current + 1} of ${flashcards.length}`;
      document.getElementById('score').innerText = `Score: ${correct}/${flashcards.length}`;
      document.getElementById('streak').innerText = `🔥 Streak: ${streak}  |  🏆 Best: ${longestStreak}`;
    }
    function showCard() {
      if(flashcards.length == 0) {
        document.getElementById('flash-question').innerText = "No cards loaded!";
        document.getElementById('flash-answer').innerText = "";
        document.getElementById('flash-answer').classList.add('hidden');
        document.getElementById('flashcard').classList.remove('hidden');
        document.getElementById('end-screen').classList.add('hidden');
        updateStats();
        return;
      }
      completed = false;
      document.getElementById('flashcard').classList.remove('hidden');
      document.getElementById('end-screen').classList.add('hidden');
      const card = flashcards[current];
      document.getElementById('flash-question').innerText = card.question;
      document.getElementById('flash-answer').innerText = card.answer;
      document.getElementById('flash-answer').classList.add('hidden');
      showingAnswer = false;
      // Hide 'Show Answer' if answer is visible
      document.getElementById('showAnswerBtn').classList.remove('hidden');
      // Disable prev/next at bounds
      document.getElementById('prevBtn').disabled = current === 0;
      document.getElementById('nextBtn').disabled = current === flashcards.length - 1;
      updateStats();
    }
    function flipCard() {
      if (!showingAnswer) {
        document.getElementById('flash-answer').classList.remove('hidden');
        showingAnswer = true;
        document.getElementById('showAnswerBtn').classList.add('hidden');
      }
    }
    function answerCard(isCorrect) {
      if (completed) return;
      // Only mark card if not already answered
      if (!answered[current]) {
        answered[current] = true;
        if (isCorrect) {
          correct++;
          streak++;
          if (streak > longestStreak) longestStreak = streak;
          celebrate();
        } else {
          streak = 0;
        }
      }
      // If last card, show end screen
      if (answered.filter(v=>v).length === flashcards.length) {
        showEnd();
      } else {
        // Go to next card if available
        if (current < flashcards.length - 1) {
          current++;
          showCard();
        } else {
          // Loop to first unanswered
          let nextUnanswered = answered.findIndex((a,i) => !a && i!==current);
          if (nextUnanswered !== -1) {
            current = nextUnanswered;
            showCard();
          }
        }
      }
    }
    function nextCard(skipAnswered=false) {
      if (current < flashcards.length - 1) {
        current++;
      } else {
        current = 0;
      }
      showCard();
    }
    function prevCard() {
      if (current > 0) {
        current--;
      } else {
        current = flashcards.length - 1;
      }
      showCard();
    }
    function showEnd() {
      completed = true;
      document.getElementById('flashcard').classList.add('hidden');
      document.getElementById('end-screen').classList.remove('hidden');
      document.getElementById('final-score').innerText = `You got ${correct} out of ${flashcards.length}!`;
      document.getElementById('final-streak').innerText = `🔥 Best streak: ${longestStreak}`;
      if (correct === flashcards.length) {
        document.getElementById('final-message').innerText = "Perfect! 🦉🌟";
      } else if (correct > flashcards.length / 2) {
        document.getElementById('final-message').innerText = "Great job! Keep going!";
      } else {
        document.getElementById('final-message').innerText = "Keep practicing! 💪";
      }
    }
    function restart() {
      current = 0; correct = 0; streak = 0; longestStreak = 0;
      answered = Array(flashcards.length).fill(false);
      completed = false;
      showCard();
    }
    function celebrate() {
      const confetti = document.getElementById('confetti');
      confetti.classList.remove('hidden');
      setTimeout(() => confetti.classList.add('hidden'), 800);
    }
    window.onload = () => { showCard(); };

    // Import modal logic
    document.getElementById('importBtn').onclick = function() {
      document.getElementById('importModal').classList.remove('hidden');
    };
    function closeModal() {
      document.getElementById('importModal').classList.add('hidden');
      document.getElementById('sheetUrl').value = '';
      document.getElementById('bulkText').value = '';
    }
    function importSheet() {
      const url = document.getElementById('sheetUrl').value.trim();
      if (!url) return alert('Please paste a CSV export link.');
      fetch(url)
        .then(r => r.text())
        .then(csv => {
          const rows = csv.split(/\r?\n/).filter(line => line.trim().length > 0);
          let cards = [];
          for (let row of rows) {
            let parts = row.split(',');
            if (parts.length < 2) continue;
            cards.push({
              question: parts[0].trim().replace(/^"|"$/g,''),
              answer: parts[1].trim().replace(/^"|"$/g,'')
            });
          }
          if (cards.length === 0) return alert('No valid cards found!');
          flashcards = cards;
          closeModal();
          restart();
        }).catch(e=>alert('Failed to fetch sheet! Make sure you use a CSV export link.'));
    }
    function importText() {
      const txt = document.getElementById('bulkText').value.trim();
      if (!txt) return alert('Paste or type cards!');
      // Try to auto-detect separator (tab, |, comma, etc)
      let lines = txt.split(/\r?\n/).filter(l=>l.trim().length>0);
      let cards = [];
      for (let line of lines) {
        let sep = /\t/.test(line) ? '\t' : /\|/.test(line) ? '|' : /,/.test(line) ? ',' : null;
        if (!sep) continue;
        let parts = line.split(sep);
        if (parts.length < 2) continue;
        cards.push({
          question: parts[0].trim(),
          answer: parts[1].trim()
        });
      }
      if (cards.length === 0) return alert('No valid cards found! Use: question | answer');
      flashcards = cards;
      closeModal();
      restart();
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
      

<header className="flex items-center gap-3 mb-8">
<div className="bg-green-200 rounded-full p-2 shadow-lg">
<svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><ellipse cx="16" cy="16" fill="#bbf7d0" rx="16" ry="15"></ellipse><ellipse cx="22" cy="18" fill="#fff" rx="2.5" ry="3.5"></ellipse><ellipse cx="10" cy="18" fill="#fff" rx="2.5" ry="3.5"></ellipse><ellipse cx="22" cy="18" fill="#1e293b" rx="1.2" ry="1.7"></ellipse><ellipse cx="10" cy="18" fill="#1e293b" rx="1.2" ry="1.7"></ellipse><ellipse cx="16" cy="25" fill="#fbbf24" rx="2.6" ry="1.3"></ellipse><ellipse cx="16" cy="11" fill="#34d399" rx="7" ry="5.5"></ellipse></svg>
</div>
<h1 className="text-3xl font-extrabold text-sky-700 tracking-wide">FlashCard Hero</h1>
<button className="ml-4 bg-amber-300 hover:bg-amber-400 font-bold px-4 py-2 rounded-full shadow transition text-teal-900 text-md" id="importBtn">Import Cards</button>
</header>

<div className="flex flex-wrap gap-4 items-center mb-6">
<span className="text-lg font-semibold text-teal-900" id="progress"></span>
<span className="text-lg font-semibold text-amber-600" id="score"></span>
<span className="text-lg font-semibold text-orange-500" id="streak"></span>
<button className="ml-2 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full transition shadow text-md" onClick={(e) => { restart() }}>Restart</button>
</div>

<div className="hidden pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-50" id="confetti">
<span className="text-5xl animate-bounce">🎉</span>
</div>

<div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md flex flex-col items-center space-y-6 transition duration-200" id="flashcard">
<div className="w-full flex items-center justify-between mb-2">
<button aria-label="Previous card" className="bg-cyan-100 text-cyan-600 hover:bg-cyan-200 rounded-full p-2 disabled:opacity-40" id="prevBtn" onClick={(e) => { prevCard() }} title="Previous">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="flex-grow"></div>
<button aria-label="Next card" className="bg-cyan-100 text-cyan-600 hover:bg-cyan-200 rounded-full p-2 disabled:opacity-40" id="nextBtn" onClick={(e) => { nextCard(true) }} title="Next">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="mb-2 w-full">
<div className="text-2xl font-bold text-teal-900 text-center mb-2 transition-all duration-150" id="flash-question"></div>
<div className="text-xl font-medium text-cyan-600 text-center bg-cyan-50 rounded-xl px-4 py-2 mt-4 hidden shadow-inner transition-all duration-150" id="flash-answer"></div>
</div>
<button className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-6 rounded-full transition shadow text-lg" id="showAnswerBtn" onClick={(e) => { flipCard() }}>
      Show Answer
    </button>
<div className="flex flex-col sm:flex-row gap-5">
<button className="flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white text-lg font-bold py-2 px-6 rounded-full shadow transition" onClick={(e) => { answerCard(true) }}>
<span>✔️</span> I got it!
      </button>
<button className="flex items-center gap-2 bg-rose-300 hover:bg-rose-400 text-white text-lg font-bold py-2 px-6 rounded-full shadow transition" onClick={(e) => { answerCard(false) }}>
<span>❌</span> Not yet
      </button>
</div>
<div className="mt-2 flex items-center gap-2 text-sky-500 text-sm">
<svg className="w-6 h-6 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c-1.657 0-3 1.567-3 3.5 0 1.249.7 2.31 1.757 2.845a1.607 1.607 0 01-.257 1.263C9.57 16.458 10.363 17 11.5 17h1c1.137 0 1.93-.542 1.999-1.392a1.607 1.607 0 01-.257-1.263C16.3 13.81 17 12.749 17 11.5 17 9.567 13.657 8 12 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
      Keep going! Every card gets you closer to mastery!
    </div>
</div>

<div className="hidden flex flex-col items-center bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center space-y-4" id="end-screen">
<div className="mb-2 text-4xl font-extrabold text-emerald-500">🎉</div>
<div className="text-2xl font-bold" id="final-message"></div>
<div className="text-lg text-teal-700 font-semibold" id="final-score"></div>
<div className="text-lg text-orange-400 font-semibold" id="final-streak"></div>
<button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow transition" onClick={(e) => { restart() }}>
      Restart
    </button>
</div>

<div className="fixed inset-0 z-50 hidden flex items-center justify-center" id="importModal">
<div className="modal-bg absolute inset-0"></div>
<div className="relative bg-white rounded-3xl shadow-2xl p-8 w-[95vw] max-w-lg flex flex-col gap-4">
<button className="absolute right-4 top-2 text-gray-400 hover:text-rose-400 text-2xl font-bold rounded-full" onClick={(e) => { closeModal() }}>×</button>
<h2 className="text-2xl font-bold text-sky-600 mb-2">Import Flashcards</h2>
<div className="mb-2">
<label className="font-semibold block mb-1" htmlFor="sheetUrl">Google Sheet Link (CSV export):</label>
<input className="w-full rounded-full border px-2 py-1 text-slate-700 focus:outline-none focus:ring-2 ring-sky-400" id="sheetUrl" placeholder="Paste your Google Sheet CSV export link..." type="text" />
<button className="mt-2 bg-sky-400 hover:bg-sky-500 text-white font-bold py-1 px-4 rounded-full transition" onClick={(e) => { importSheet() }}>Import from Google Sheet</button>
<div className="text-xs text-gray-600 mt-1">
<b>How to:</b> File → Share → Anyone with link, <br />
          then File → Download → CSV, or<br />
          use: <span className="font-mono bg-gray-100 px-1 rounded">https://docs.google.com/spreadsheets/d/YOUR_ID/export?format=csv</span>
</div>
</div>
<div className="mb-2">
<label className="font-semibold block mb-1" htmlFor="bulkText">Paste table or bulk cards (question | answer):</label>
<textarea className="w-full rounded-xl border px-2 py-1 text-slate-700 focus:outline-none focus:ring-2 ring-sky-400" id="bulkText" placeholder="question | answer
..." rows="5"></textarea>
<button className="mt-2 bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-4 rounded-full transition" onClick={(e) => { importText() }}>Import Pasted Cards</button>
<div className="text-xs text-gray-600 mt-1">
          Paste from Google Sheet, Excel, or type lines like:<br />
<span className="font-mono bg-gray-100 px-1 rounded">Capital of Japan | Tokyo</span>
</div>
</div>
<div className="flex justify-end gap-2 mt-2">
<button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-full transition" onClick={(e) => { closeModal() }}>Cancel</button>
</div>
</div>
</div>
<footer className="mt-12 text-teal-700 text-sm opacity-70">
<span>🦉 FlashCard Hero © 2024</span>
</footer>


    </>
  );
}
