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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    // --- Color square rendering ---
    const square = document.getElementById('colorSquare');
    const ctx = square.getContext('2d');
    const SQSIZE = square.width;
    function drawColorSquare(hue) {
      const img = ctx.createImageData(SQSIZE, SQSIZE);
      for (let y = 0; y < SQSIZE; y++) {
        for (let x = 0; x < SQSIZE; x++) {
          let s = x / (SQSIZE - 1);
          let l = 1 - (y / (SQSIZE - 1));
          let [r, g, b] = hsl2rgb(hue, s, l);
          let idx = (y * SQSIZE + x) * 4;
          img.data[idx] = r;
          img.data[idx + 1] = g;
          img.data[idx + 2] = b;
          img.data[idx + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
      ctx.globalAlpha = 1;
    }

    // --- State ---
    let targetH = 0, targetS = 0.7, targetL = 0.5;
    let guessS = null, guessL = null;
    let challenge = 1, maxChallenges = 10;
    let errors = [];
    let times = [];
    let roundScores = [];
    let totalScore = 0;
    let timer = 0;
    let timerInterval = null;
    let hintTimeout = null;
    let gameActive = true;
    const marker = document.getElementById('marker');
    const targetMarker = document.getElementById('targetMarker');
    const hintArrow = document.getElementById('hintArrow');
    const feedback = document.getElementById('feedback');
    const totalScoreDiv = document.getElementById('totalScore');
    const nextBtn = document.getElementById('nextBtn');
    const restartBtn = document.getElementById('restartBtn');
    const targetColorDiv = document.getElementById('targetColor');
    const targetRGBDiv = document.getElementById('targetRGB');
    const challengeNumDiv = document.getElementById('challengeNum');
    const timerDiv = document.getElementById('timer');
    const summaryDiv = document.getElementById('summary');
    const logList = document.getElementById('logList');
    const logEmptyState = document.getElementById('logEmptyState');

    function hsl2rgb(h, s, l) {
      let c = (1 - Math.abs(2 * l - 1)) * s;
      let x = c * (1 - Math.abs((h / 60) % 2 - 1));
      let m = l - c / 2, r = 0, g = 0, b = 0;
      if (h < 60) [r, g, b] = [c, x, 0];
      else if (h < 120) [r, g, b] = [x, c, 0];
      else if (h < 180) [r, g, b] = [0, c, x];
      else if (h < 240) [r, g, b] = [0, x, c];
      else if (h < 300) [r, g, b] = [x, 0, c];
      else [r, g, b] = [c, 0, x];
      return [
        Math.round((r + m) * 255),
        Math.round((g + m) * 255),
        Math.round((b + m) * 255)
      ];
    }
    function hslObjToStr(h, s, l) {
      let [r, g, b] = hsl2rgb(h, s, l);
      return `rgb(${r}, ${g}, ${b})`;
    }
    function setTargetColorDisplay() {
      targetColorDiv.style.background = hslObjToStr(targetH, targetS, targetL);
      let [r, g, b] = hsl2rgb(targetH, targetS, targetL);
      targetRGBDiv.textContent = `rgb(${r}, ${g}, ${b})`;
    }
    function showChallengeNum() {
      challengeNumDiv.textContent = challenge;
    }
    function startTimer() {
      timer = 0;
      timerDiv.textContent = '0.0';
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        timer += 0.1;
        timerDiv.textContent = timer.toFixed(1);
      }, 100);

      if (hintTimeout) clearTimeout(hintTimeout);
      hintTimeout = setTimeout(() => {
        if (gameActive) setHintArrow();
      }, 3000);
    }
    function stopTimer() {
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = null;
      if (hintTimeout) clearTimeout(hintTimeout);
      hintTimeout = null;
    }

    function setMarker(s, l) {
      const x = s * (SQSIZE - 1);
      const y = (1 - l) * (SQSIZE - 1);
      marker.style.left = `${13 + x}px`;
      marker.style.top = `${13 + y}px`;
      marker.classList.remove('hidden');
    }
    function setTargetMarker() {
      const x = targetS * (SQSIZE - 1);
      const y = (1 - targetL) * (SQSIZE - 1);
      targetMarker.style.left = `${13 + x}px`;
      targetMarker.style.top = `${13 + y}px`;
      targetMarker.classList.remove('hidden');
    }
    function hideMarker() {
      marker.classList.add('hidden');
    }
    function hideTargetMarker() {
      targetMarker.classList.add('hidden');
    }
    function setHintArrow() {
      const x = 13 + targetS * (SQSIZE - 1) * 0.7;
      const y = 13 + (1 - targetL) * (SQSIZE - 1) * 0.7;
      hintArrow.style.left = `${x}px`;
      hintArrow.style.top = `${y}px`;
      hintArrow.style.transform = "rotate(0deg)";
      hintArrow.classList.remove('hidden');
    }
    function hideHintArrow() {
      hintArrow.classList.add('hidden');
    }

    // Scoring function
    function computeScore(dist, time) {
      let maxDist = 0.28;
      let accuracy = Math.max(0, 1 - (dist / maxDist));
      let accuracyScore = Math.round(accuracy * 90);
      let timeBonus = 0;
      if (time <= 2) timeBonus = 10;
      else if (time >= 7) timeBonus = 0;
      else timeBonus = Math.round((7 - time) / 5 * 10);
      return { accuracyScore, timeBonus, total: accuracyScore + timeBonus };
    }

    function updateLogEmptyState() {
      if (logList.children.length === 0) {
        logEmptyState.style.display = "flex";
      } else {
        logEmptyState.style.display = "none";
      }
    }

    function logMessage(html, opt = {}) {
      const li = document.createElement('li');
      li.innerHTML = html;
      li.className = "bg-[#20212d]/70 border border-[#232330] rounded-md px-2.5 py-1.5 flex flex-col";
      if (opt.color) li.style.borderLeft = `3px solid ${opt.color}`;
      if (opt.highlight) li.classList.add("ring-1", "ring-[#7D7FF2]/25");
      logList.appendChild(li);
      setTimeout(() => {
        li.style.transition = 'opacity 0.3s';
        li.style.opacity = '0.66';
      }, 2200);
      logList.scrollTop = logList.scrollHeight;
      updateLogEmptyState();
    }

    function showFeedback(dist, time, score) {
      let phrase, color, icon;
      if (dist < 0.10) {
        phrase = "Perfect";
        color = "#2BCBBA";
        icon = "🎯";
      } else if (dist < 0.28) {
        phrase = "Close";
        color = "#FFBE5B";
        icon = "👀";
      } else {
        phrase = "";
        color = "#FF6B8B";
        icon = "";
      }
      feedback.innerHTML = phrase ? `<span style="color:${color}">${phrase}</span> <span class="text-xs text-[#8E92A5]">(${(dist*100).toFixed(1)}% error)</span>` : `<span class="text-[#8E92A5]">Error: ${(dist*100).toFixed(1)}%</span>`;
      totalScoreDiv.textContent = totalScore;

      if (phrase) {
        logMessage(
          `<div class="flex items-center gap-2">
            <span style="font-size:1.1em">${icon}</span>
            <span class="font-semibold" style="color:${color}">${phrase}</span>
          </div>
          <div class="mt-0.5 text-xs text-[#BDBFC9]">Error: ${(dist*100).toFixed(1)}%, Time: ${time.toFixed(1)}s, <span style="color:#7D7FF2">+${score.total}pts</span></div>`,
          { color }
        );
      } else {
        logMessage(
          `<div class="text-[#8E92A5]">Error: ${(dist*100).toFixed(1)}%, Time: ${time.toFixed(1)}s, <span style="color:#7D7FF2">+${score.total}pts</span></div>`,
          { color }
        );
      }
    }
    function showSummary() {
      const avg = errors.length ? errors.reduce((a, b) => a + b, 0) / errors.length : 0;
      const avgT = times.length ? times.reduce((a, b) => a + b, 0) / times.length : 0;
      const scoreSum = roundScores.reduce((a,b) => a+b, 0);
      summaryDiv.innerHTML = `
        <div class="mb-2 text-[#7D7FF2] font-semibold">All done!</div>
        <div class="mb-1">Avg. error: <span class="font-semibold text-[#E3E4E8]">${(avg*100).toFixed(1)}%</span></div>
        <div class="mb-1">Avg. time: <span class="font-semibold text-[#E3E4E8]">${avgT.toFixed(1)}s</span></div>
        <div class="mb-1">Total: <span class="font-bold text-[#2BCBBA]">${scoreSum}</span> / ${maxChallenges*100}</div>
      `;
      summaryDiv.classList.remove('hidden');
      restartBtn.classList.remove('hidden');
      logMessage(
        `<div class="flex items-center gap-2">
          <span style="font-size:1.1em">🏆</span>
          <span class="font-semibold" style="color:#2BCBBA">Game finished!</span>
        </div>
        <div class="mt-1 text-xs text-[#BDBFC9]">
          Avg. error: ${(avg*100).toFixed(1)}%<br>
          Avg. time: ${avgT.toFixed(1)}s<br>
          Total: <span style="color:#7D7FF2">${scoreSum}</span> pts
        </div>`,
        { color:'#2BCBBA', highlight:true }
      );
    }

    function newChallenge() {
      gameActive = true;
      targetH = Math.floor(Math.random() * 360);
      targetS = Math.random() * 0.7 + 0.25;
      targetL = Math.random() * 0.7 + 0.15;
      guessS = null;
      guessL = null;
      drawColorSquare(targetH);
      setTargetColorDisplay();
      hideMarker();
      hideTargetMarker();
      hideHintArrow();
      feedback.textContent = '';
      summaryDiv.classList.add('hidden');
      nextBtn.classList.add('hidden');
      restartBtn.classList.add('hidden');
      showChallengeNum();
      startTimer();
    }
    function resetGame() {
      challenge = 1;
      errors = [];
      times = [];
      roundScores = [];
      totalScore = 0;
      totalScoreDiv.textContent = totalScore;
      summaryDiv.classList.add('hidden');
      logList.innerHTML = "";
      updateLogEmptyState();
      newChallenge();
    }

    square.onclick = function (e) {
      if (!gameActive) return;
      const rect = square.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      x = Math.max(0, Math.min(SQSIZE-1, x));
      y = Math.max(0, Math.min(SQSIZE-1, y));
      const s = x / (SQSIZE - 1);
      const l = 1 - (y / (SQSIZE - 1));
      guessS = s;
      guessL = l;
      setMarker(guessS, guessL);
      setTargetMarker();
      hideHintArrow();

      let diff = Math.sqrt(Math.pow(targetS - guessS,2) + Math.pow(targetL - guessL,2));
      errors.push(diff);
      stopTimer();
      let usedTime = Number(timer.toFixed(1));
      times.push(usedTime);

      // Scoring
      let score = computeScore(diff, usedTime);
      roundScores.push(score.total);
      totalScore += score.total;

      showFeedback(diff, usedTime, score);
      gameActive = false;
      if (challenge < maxChallenges) {
        nextBtn.classList.remove('hidden');
      } else {
        showSummary();
      }
    };

    nextBtn.onclick = function () {
      challenge++;
      newChallenge();
    };
    restartBtn.onclick = function () {
      challenge = 1;
      errors = [];
      times = [];
      roundScores = [];
      totalScore = 0;
      totalScoreDiv.textContent = totalScore;
      logList.innerHTML = "";
      updateLogEmptyState();
      newChallenge();
    };

    resetGame();

    hintArrow.addEventListener('mousedown', e => e.stopPropagation());
    hintArrow.addEventListener('click', e => e.stopPropagation());
  
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
      
<div className="w-full max-w-5xl mx-4 md:mx-12 min-h-[560px] flex bg-[#20212d]/80 border border-[#292a37] rounded-xl shadow-lg overflow-hidden">

<div className="flex-1 flex flex-col items-center justify-center px-6 py-9">
<div className="w-full max-w-md flex flex-col items-center gap-5">
<div className="w-full flex flex-col items-center gap-1">
<span className="text-xs font-normal text-[#8E92A5]">Target color</span>
<div className="w-8 h-8 rounded-full border border-[#252634]" id="targetColor"></div>
<span className="text-xs text-[#BDBFC9] font-mono tracking-wider" id="targetRGB"></span>
</div>
<div className="flex w-full justify-between items-center text-xs text-[#A2A5B8] mb-[-4px]">
<div>
<span className="font-semibold text-[#E3E4E8]" id="challengeNum"></span>
<span>/10</span>
</div>
<div>
<span className="text-[#8E92A5]">Time:</span>
<span className="font-mono text-[#E3E4E8]" id="timer"></span>
<span>s</span>
</div>
</div>
<div className="relative w-[280px] h-[280px] mx-auto flex items-center justify-center">
<canvas className="rounded-lg border border-[#232330]" height="260" id="colorSquare" width="260"></canvas>
<div className="square-marker hidden" id="marker"></div>
<div className="square-target hidden" id="targetMarker"></div>
<div className="hint-arrow hidden" id="hintArrow">
<svg fill="none" height="36" viewBox="0 0 52 52" width="36">
<g filter="url(#shadow)">
<polygon fill="#7D7FF2" points="26,7 35,27 26,22 17,27" stroke="#fff" strokeWidth="2"></polygon>
</g>
</svg>
<svg style={{display: `none`}}>
<defs>
<filter height="52" id="shadow" width="52">
<fedropshadow dx="0" dy="2" flood-color="#0006" stddeviation="2"></fedropshadow>
</filter>
</defs>
</svg>
</div>
</div>
<div className="min-h-[24px] text-center text-sm font-medium" id="feedback"></div>
<div className="w-full flex justify-between mt-1">
<div className="text-xs text-[#8E92A5]">Score: <span className="font-semibold text-[#E3E4E8]" id="totalScore">0</span></div>
<button className="hidden text-[#E3E4E8] border border-[#232330] rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-[#23253a]/50 transition" id="nextBtn">Next</button>
<button className="hidden text-[#E3E4E8] border border-[#232330] rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-[#23253a]/50 transition" id="restartBtn">Play again</button>
</div>
<div className="hidden w-full text-center text-sm mt-1" id="summary"></div>
</div>
</div>

<div className="flex-1 flex flex-col border-l border-[#232330] bg-[#181923] min-h-full max-h-full">
<ul className="flex-1 max-h-[500px] overflow-y-auto px-5 py-7 space-y-2 text-xs" id="logList"></ul>
<div className="flex-1 flex flex-col items-center justify-center text-[#8E92A5] px-5 py-7 text-sm select-none" id="logEmptyState">
<div className="flex flex-col items-center justify-center h-full w-full">
<svg className="mb-2" fill="none" height="36" viewBox="0 0 36 36" width="36">
<rect fill="#232330" height="20" rx="4" width="26"></rect>
<rect fill="#28283a" height="2" rx="1" width="18"></rect>
<rect fill="#28283a" height="2" rx="1" width="12"></rect>
<rect fill="#28283a" height="2" rx="1" width="8"></rect>
</svg>
<span>No guesses yet.<br />Try matching the color on the left!</span>
</div>
</div>
</div>
</div>


    </>
  );
}
