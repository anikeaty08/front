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



    let currentLetter = '';
    let score = 0;
    let timer = null;
    let timeLeft = 10; // seconds

    function getRandomLetter() {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return letters[Math.floor(Math.random() * letters.length)];
    }

    function updateLetter() {
      currentLetter = getRandomLetter();
      document.getElementById('letter').textContent = currentLetter;
    }

    function updateScore() {
      document.getElementById('score').textContent = score;
    }

    function updateTimer() {
      document.getElementById('timer').textContent = timeLeft;
    }

    function endGame() {
      document.getElementById('overlay').classList.remove('hidden');
      document.getElementById('final-score').textContent = score;
      document.removeEventListener('keydown', keyHandler);
      clearInterval(timer);
    }

    function keyHandler(e) {
      if (e.key.toUpperCase() === currentLetter) {
        score++;
        updateScore();
        updateLetter();
      }
    }

    function startGame() {
      score = 0;
      timeLeft = 10;
      updateScore();
      updateLetter();
      updateTimer();
      document.getElementById('overlay').classList.add('hidden');
      document.addEventListener('keydown', keyHandler);
      timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) endGame();
      }, 1000);
    }

    window.onload = () => {
      document.getElementById('start-btn').onclick = startGame;
      document.getElementById('restart-btn').onclick = startGame;
    };
  
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
      
<div className="bg-gray-800 rounded-xl shadow-lg p-8 text-center w-80 flex flex-col items-center">
<h1 className="text-3xl font-bold text-white mb-2">Keyboard Game</h1>
<p className="text-gray-300 mb-6">Press the highlighted key as fast as you can!</p>
<div className="my-8">
<div className="text-7xl font-extrabold text-yellow-400 bg-gray-700 rounded-lg px-10 py-6 mx-auto mb-4 shadow-lg select-none" id="letter">A</div>
<div className="flex justify-between w-full text-lg mt-2">
<div className="text-white">Score: <span className="font-semibold" id="score">0</span></div>
<div className="text-white">Time: <span className="font-semibold" id="timer">10</span>s</div>
</div>
</div>
<button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-2 rounded-lg mt-4 transition" id="start-btn">Start</button>
</div>

<div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 hidden" id="overlay">
<div className="bg-white rounded-xl p-8 shadow-2xl text-center w-80">
<h2 className="text-2xl font-bold text-gray-900 mb-4">Time's up!</h2>
<p className="mb-2 text-gray-700">Your final score:</p>
<div className="text-4xl font-extrabold text-yellow-500 mb-6" id="final-score">0</div>
<button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-2 rounded-lg transition" id="restart-btn">Play Again</button>
</div>
</div>

    </>
  );
}
