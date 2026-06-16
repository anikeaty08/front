import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Simple JS for mock multiplier and timers
    let multiplier = 1;
    let interval;
    let crashed = false;
    function startGame() {
      multiplier = 1;
      crashed = false;
      document.getElementById('multiplier').innerText = multiplier.toFixed(2) + 'x';
      document.getElementById('cashout-btn').disabled = false;
      document.getElementById('cashout-btn').innerText = 'Cash Out';
      document.getElementById('plane').style.transform = 'translateY(0)';
      interval = setInterval(() => {
        multiplier += Math.random() * 0.08 + 0.02;
        document.getElementById('multiplier').innerText = multiplier.toFixed(2) + 'x';
        document.getElementById('plane').style.transform = `translateY(-${multiplier*10}px)`;
        if (multiplier > Math.random() * 9 + 1.5) { // random crash between 1.5-10x
          crashed = true;
          clearInterval(interval);
          document.getElementById('multiplier').innerText = '💥 ' + multiplier.toFixed(2) + 'x';
          document.getElementById('cashout-btn').disabled = true;
          document.getElementById('cashout-btn').innerText = 'Crashed';
          addHistory(multiplier, false);
        }
      }, 70);
    }
    function cashOut() {
      if (!crashed) {
        clearInterval(interval);
        document.getElementById('cashout-btn').disabled = true;
        document.getElementById('cashout-btn').innerText = 'Cashed Out!';
        addHistory(multiplier, true);
      }
    }
    function addHistory(mult, win) {
      let color = mult < 2 ? 'bg-red-600' : mult > 5 ? 'bg-green-600' : 'bg-yellow-500';
      let text = win ? 'You' : 'Crash';
      let el = `<div class="flex items-center gap-2 ${color} rounded px-2 py-1 text-xs mb-1 font-semibold">
        <span>${text}</span>
        <span>${mult.toFixed(2)}x</span>
      </div>`;
      document.getElementById('history').innerHTML = el + document.getElementById('history').innerHTML;
    }
    window.onload = () => {
      let countdown = 5;
      let countdownEl = document.getElementById('countdown');
      let cdInt = setInterval(() => {
        if (countdown > 1) {
          countdown--;
          countdownEl.innerText = countdown;
        } else {
          clearInterval(cdInt);
          countdownEl.innerText = '';
          startGame();
        }
      }, 1000);
      document.getElementById('cashout-btn').addEventListener('click', cashOut);
      document.getElementById('bet-btn').addEventListener('click', () => {
        countdown = 5;
        countdownEl.innerText = countdown;
        let cdInt2 = setInterval(() => {
          if (countdown > 1) {
            countdown--;
            countdownEl.innerText = countdown;
          } else {
            clearInterval(cdInt2);
            countdownEl.innerText = '';
            startGame();
          }
        }, 1000);
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="flex items-center justify-between w-full max-w-2xl py-6 px-4">
<div className="flex items-center gap-2">
<span className="text-3xl font-extrabold text-green-500 tracking-widest" style={{fontFamily: '\'Orbitron\', sans-serif'}}>Aviator</span>
<svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 48 48">

<path d="M24 4l3 14h8L24 44l-2-12h-6l-2 4-2-12 2-4h-8l17-16z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="uppercase text-xs tracking-widest text-gray-400 font-bold">Real-Time Crash Game</span>
</header>

<main className="flex flex-col md:flex-row w-full max-w-5xl gap-6 px-4">

<section className="relative flex-1 bg-gray-800 rounded-2xl shadow-lg overflow-hidden min-h-[380px] flex flex-col items-center justify-end pb-8">

<div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
<span className="text-5xl font-bold text-green-400 drop-shadow-md" id="multiplier" style={{fontFamily: '\'Orbitron\', sans-serif'}}>1.00x</span>
<span className="uppercase text-xs text-gray-400 mt-1 tracking-widest">Live Multiplier</span>
</div>

<div className="absolute left-1/2 bottom-20 z-20 transition-transform duration-300" id="plane" style={{transform: 'translateY(0)'}}>
<svg className="w-16 h-16 text-white" fill="currentColor" viewbox="0 0 48 48">
<path d="M24 4l3 14h8L24 44l-2-12h-6l-2 4-2-12 2-4h-8l17-16z"></path>
</svg>
</div>

<div className="absolute bottom-0 left-0 w-full h-2/3 flex items-end">
<svg className="w-full h-full" fill="none" viewbox="0 0 600 220">
<polyline className="stroke-green-400 opacity-50" fill="none" points="0,200 80,180 160,140 240,90 320,60 400,40 480,30 600,20" strokeWidth="3"></polyline>
<line stroke="#fff" stroke-opacity="0.2" strokeWidth="2" x1="0" x2="600" y1="200" y2="200"></line>
</svg>
</div>

<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 z-30 text-6xl font-bold text-white transition-all" id="countdown">5</div>

<button className="absolute right-8 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 disabled:bg-gray-700 text-white text-lg font-bold px-6 py-3 rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-300 z-20" id="cashout-btn">
        Cash Out
      </button>
</section>

<aside className="flex flex-col w-full md:w-80 gap-4">

<div className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="text-lg font-bold tracking-wide">Your Bet</span>
<label className="flex items-center gap-1 cursor-pointer">
<span className="text-xs text-gray-400">Auto Bet</span>
<input className="form-toggle h-5 w-10 rounded-full bg-gray-600 checked:bg-green-500 transition-all" type="checkbox"/>
</label>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-gray-400 font-semibold">Amount</label>
<input className="rounded-lg bg-gray-700 text-white font-bold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all text-lg" max="2000" min="1" placeholder="e.g. 100" type="number"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-gray-400 font-semibold">Auto Cashout (<span className="text-green-400">x</span>)</label>
<input className="rounded-lg bg-gray-700 text-white font-bold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all text-lg" min="1.1" placeholder="e.g. 2.00" step="0.01" type="number"/>
</div>
<button className="mt-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl py-3 text-lg transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-green-300 w-full uppercase tracking-wider" id="bet-btn">
          Place Bet
        </button>
<div className="flex justify-center mt-1">
<span className="text-xs text-gray-400">Next round in</span>
<span className="ml-1 text-green-400 font-bold" id="side-countdown"></span>
</div>
</div>

<div className="bg-gray-800 rounded-2xl p-4 shadow-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-bold tracking-wide">Live Bets</span>
<span className="text-xs text-green-400 uppercase font-bold">Top Wins</span>
</div>
<div className="flex flex-col gap-2 max-h-24 overflow-y-auto">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="bg-green-500 rounded-full w-2.5 h-2.5 animate-pulse"></span>
<span className="font-semibold text-sm">PilotJack</span>
</div>
<span className="text-green-400 font-bold">3.20x</span>
<span className="text-xs text-gray-400">Cashed</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="bg-yellow-400 rounded-full w-2.5 h-2.5"></span>
<span className="font-semibold text-sm">SkyQueen</span>
</div>
<span className="text-yellow-300 font-bold">1.80x</span>
<span className="text-xs text-red-400">Crashed</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="bg-green-400 rounded-full w-2.5 h-2.5"></span>
<span className="font-semibold text-sm">F16Ace</span>
</div>
<span className="text-green-400 font-bold">7.00x</span>
<span className="text-xs text-green-300">Cashed</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="bg-red-500 rounded-full w-2.5 h-2.5"></span>
<span className="font-semibold text-sm">JetFan</span>
</div>
<span className="text-red-400 font-bold">1.20x</span>
<span className="text-xs text-red-400">Crashed</span>
</div>
</div>
</div>

<div className="bg-gray-800 rounded-2xl p-4 shadow-lg">
<span className="text-sm font-bold tracking-wide mb-2 block">Game History</span>
<div className="flex flex-col" id="history"></div>
</div>
</aside>
</main>

<footer className="w-full max-w-2xl mt-8 mb-4 text-center text-xs text-gray-500 font-semibold">
<span>Play responsibly • Aviator © 2024</span>
</footer>

    </>
  );
}
