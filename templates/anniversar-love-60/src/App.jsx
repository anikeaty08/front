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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Navigation SPA Logic
    function nav(pageId, btnElement) {
      document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
      document.getElementById(pageId).classList.remove('hidden');
      
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.removeAttribute('aria-current');
      });
      if(btnElement) btnElement.setAttribute('aria-current', 'page');
      
      window.scrollTo(0,0);

      // Trigger page specific initializations
      if(pageId === 'home') createFloatingHearts();
      if(pageId === 'games') {
        if(!document.querySelector('.game-tab.bg-\\[\\#ff6b8a\\]')) {
          switchGame('memory', document.querySelectorAll('.game-tab')[0]);
        }
      }
      if(pageId === 'quiz') initQuiz();
      if(pageId === 'wishes') createStars();
      if(pageId === 'forever') startConfetti();
    }

    // Floating Hearts (Home)
    function createFloatingHearts() {
      const container = document.getElementById('floatingHearts');
      if (!container) return;
      container.innerHTML = '';
      const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
      const opacities = ['opacity-40', 'opacity-60', 'opacity-80'];
      
      for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        const icon = document.createElement('iconify-icon');
        icon.setAttribute('icon', Math.random() > 0.5 ? 'solar:heart-bold' : 'solar:star-fall-bold');
        icon.setAttribute('class', 'text-[#ff6b8a]');
        heart.appendChild(icon);
        
        heart.className = `absolute ${sizes[Math.floor(Math.random() * sizes.length)]} ${opacities[Math.floor(Math.random() * opacities.length)]}`;
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animation = `floatUp ${Math.random() * 6 + 6}s linear ${Math.random() * 8}s infinite`;
        container.appendChild(heart);
      }
    }

    // Games Logic
    function switchGame(game, btn) {
      document.querySelectorAll('.game-panel').forEach(p => p.classList.add('hidden'));
      document.querySelectorAll('.game-tab').forEach(t => {
        t.className = 'game-tab text-white/60 hover:text-white px-5 py-2 rounded-full text-xs transition-all hover:bg-white/5';
      });
      document.getElementById('game-' + game).classList.remove('hidden');
      btn.className = 'game-tab bg-[#ff6b8a] text-white px-5 py-2 rounded-full text-xs transition-all shadow-[0_0_10px_rgba(255,107,138,0.3)]';

      if (game === 'memory') initMemoryGame();
      if (game === 'puzzle') newPuzzle();
    }

    // Memory Game
    let memoryMoves = 0, memoryMatches = 0, flippedCards = [], memoryLocked = false;
    function initMemoryGame() {
      memoryMoves = 0; memoryMatches = 0; flippedCards = []; memoryLocked = false;
      document.getElementById('memoryMoves').textContent = '0';
      document.getElementById('memoryMatches').textContent = '0';

      const icons = ['heart-bold', 'star-bold', 'music-note-bold', 'emoji-funny-circle-bold', 'gift-bold', 'sun-bold', 'moon-bold', 'cup-bold'];
      const cards = [...icons, ...icons].sort(() => Math.random() - 0.5);
      const board = document.getElementById('memoryBoard');
      board.innerHTML = '';

      cards.forEach((icon, i) => {
        const card = document.createElement('div');
        card.className = 'w-full h-full relative cursor-pointer group perspective-1000';
        card.dataset.icon = icon;
        card.innerHTML = `
          <div class="w-full h-full absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] card-inner">
            <div class="w-full h-full absolute inset-0 bg-gradient-to-br from-[#ff6b8a]/20 to-[#6a1b5e]/40 rounded-xl border border-[#ff6b8a]/30 flex items-center justify-center [backface-visibility:hidden] hover:bg-[#ff6b8a]/30 transition-colors">
              <iconify-icon icon="solar:question-circle-linear" class="text-white/30 text-2xl"></iconify-icon>
            </div>
            <div class="w-full h-full absolute inset-0 bg-gradient-to-br from-[#e91e63] to-[#9c27b0] rounded-xl flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-inner border border-white/20">
              <iconify-icon icon="solar:${icon}" class="text-white text-3xl"></iconify-icon>
            </div>
          </div>
        `;
        card.addEventListener('click', () => flipCard(card));
        board.appendChild(card);
      });
    }

    function flipCard(card) {
      if (memoryLocked || card.classList.contains('flipped') || card.classList.contains('matched')) return;
      card.classList.add('flipped');
      card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        memoryMoves++;
        document.getElementById('memoryMoves').textContent = memoryMoves;
        memoryLocked = true;

        if (flippedCards[0].dataset.icon === flippedCards[1].dataset.icon) {
          flippedCards.forEach(c => { c.classList.add('matched'); c.style.opacity = '0.5'; c.style.pointerEvents = 'none'; });
          memoryMatches++;
          document.getElementById('memoryMatches').textContent = memoryMatches;
          flippedCards = [];
          memoryLocked = false;
        } else {
          setTimeout(() => {
            flippedCards.forEach(c => { c.classList.remove('flipped'); c.querySelector('.card-inner').style.transform = 'rotateY(0deg)'; });
            flippedCards = [];
            memoryLocked = false;
          }, 800);
        }
      }
    }

    // Catch Game
    let catchScore = 0, catchTimeLeft = 30, catchTimer, catchInterval, catchActive = false;
    function startCatchGame() {
      if (catchActive) return;
      catchActive = true; catchScore = 0; catchTimeLeft = 30;
      document.getElementById('catchScore').textContent = '0';
      document.getElementById('catchTime').textContent = '30';
      const btn = document.getElementById('catchStartBtn');
      btn.innerHTML = '<iconify-icon icon="solar:gamepad-linear"></iconify-icon> Playing...';
      const area = document.getElementById('catchArea');
      area.querySelectorAll('.catch-item').forEach(h => h.remove());

      catchTimer = setInterval(() => {
        catchTimeLeft--;
        document.getElementById('catchTime').textContent = catchTimeLeft;
        if (catchTimeLeft <= 0) {
          clearInterval(catchTimer); clearInterval(catchInterval); catchActive = false;
          btn.innerHTML = '<iconify-icon icon="solar:refresh-linear"></iconify-icon> Play Again';
        }
      }, 1000);

      catchInterval = setInterval(() => { if (catchActive) spawnCatchItem(); }, 700);
    }

    function spawnCatchItem() {
      const area = document.getElementById('catchArea');
      const item = document.createElement('div');
      item.className = 'catch-item absolute text-2xl cursor-crosshair hover:scale-150 transition-transform';
      item.innerHTML = `<iconify-icon icon="solar:heart-bold" class="text-[#ff6b8a] drop-shadow-md"></iconify-icon>`;
      item.style.left = Math.random() * (area.offsetWidth - 30) + 'px';
      item.style.top = '-40px';
      const duration = Math.random() * 2 + 2.5;
      item.style.animation = `fall ${duration}s linear forwards`;

      item.addEventListener('touchstart', (e) => { e.preventDefault(); catchItemObj(item); });
      item.addEventListener('mousedown', () => catchItemObj(item));
      area.appendChild(item);
      setTimeout(() => { if (item.parentNode) item.remove(); }, duration * 1000);
    }

    function catchItemObj(item) {
      if(!catchActive) return;
      catchScore++;
      document.getElementById('catchScore').textContent = catchScore;
      item.style.opacity = '0';
      item.style.transform = 'scale(2)';
      setTimeout(() => item.remove(), 200);
    }

    const catchAreaEl = document.getElementById('catchArea');
    if (catchAreaEl) {
      const moveBasket = (x) => {
        const rect = catchAreaEl.getBoundingClientRect();
        document.getElementById('catchBasket').style.left = Math.max(32, Math.min(rect.width - 32, x - rect.left)) + 'px';
      };
      catchAreaEl.addEventListener('mousemove', e => moveBasket(e.clientX));
      catchAreaEl.addEventListener('touchmove', e => { e.preventDefault(); moveBasket(e.touches[0].clientX); }, {passive: false});
    }

    // Puzzle Game
    const puzzleWords = [{w:'LOVE', h:'What we share'}, {w:'FOREVER', h:'How long it lasts'}, {w:'TOGETHER', h:'Where we belong'}];
    let currentPuzzle = 0, puzzleScore = 0;
    function newPuzzle() {
      const p = puzzleWords[currentPuzzle % puzzleWords.length];
      document.getElementById('puzzleHint').innerHTML = `<iconify-icon icon="solar:lightbulb-bolt-linear"></iconify-icon> ${p.h}`;
      let s = p.w.split('').sort(() => Math.random() - 0.5).join('');
      while(s === p.w && p.w.length > 1) s = p.w.split('').sort(() => Math.random() - 0.5).join('');
      document.getElementById('puzzleWord').textContent = s;
      document.getElementById('puzzleInput').value = '';
      const fb = document.getElementById('puzzleFeedback');
      fb.textContent = ''; fb.className = 'mt-4 text-sm h-5 tracking-tight transition-colors duration-300';
    }
    function checkPuzzle() {
      const input = document.getElementById('puzzleInput').value.trim().toUpperCase();
      const fb = document.getElementById('puzzleFeedback');
      if(input === puzzleWords[currentPuzzle % puzzleWords.length].w) {
        fb.innerHTML = '<iconify-icon icon="solar:check-circle-linear" class="align-middle"></iconify-icon> Correct! Beautiful!';
        fb.className = 'mt-4 text-sm h-5 tracking-tight transition-colors duration-300 text-[#4caf50]';
        puzzleScore++; document.getElementById('puzzleScore').textContent = puzzleScore;
        currentPuzzle++; setTimeout(newPuzzle, 1000);
      } else {
        fb.innerHTML = '<iconify-icon icon="solar:close-circle-linear" class="align-middle"></iconify-icon> Not quite, try again!';
        fb.className = 'mt-4 text-sm h-5 tracking-tight transition-colors duration-300 text-[#f44336]';
      }
    }

    // Quiz Game
    const qData = [
      { q: "What makes every bad day instantly better?", o: ["Coffee", "Your smile", "Sleep", "Food"], a: 1 },
      { q: "How many days of pure love?", o: ["100", "50", "141", "200"], a: 2 },
      { q: "My favorite melody?", o: ["Rain", "Music", "Ocean", "Your voice"], a: 3 }
    ];
    let qIdx = 0, qScore = 0;
    function initQuiz() {
      qIdx = 0; qScore = 0;
      document.getElementById('quizResult').classList.add('hidden');
      document.getElementById('quizContent').classList.remove('hidden');
      renderQ();
    }
    function renderQ() {
      const q = qData[qIdx];
      document.getElementById('quizQuestion').textContent = q.q;
      const prog = document.getElementById('quizProgress');
      prog.innerHTML = qData.map((_, i) => `<div class="w-2.5 h-2.5 rounded-full transition-all ${i < qIdx ? 'bg-[#ffd700]' : i === qIdx ? 'bg-[#ff6b8a] scale-125' : 'bg-white/20'}"></div>`).join('');
      
      const opts = document.getElementById('quizOptions');
      opts.innerHTML = '';
      q.o.forEach((opt, i) => {
        const b = document.createElement('button');
        b.className = 'quiz-opt text-left px-5 py-4 border border-[#ff6b8a]/20 rounded-xl bg-white/5 text-sm transition-all hover:bg-[#ff6b8a]/10 hover:border-[#ff6b8a]/50 flex justify-between items-center';
        b.innerHTML = `<span>${opt}</span> <iconify-icon icon="solar:alt-arrow-right-linear" class="text-white/30"></iconify-icon>`;
        b.onclick = () => selectQ(i, b);
        opts.appendChild(b);
      });
      const fb = document.getElementById('quizFeedback');
      fb.classList.add('hidden');
      document.getElementById('quizNextBtn').classList.add('hidden');
    }
    function selectQ(i, btn) {
      document.querySelectorAll('.quiz-opt').forEach(b => b.style.pointerEvents = 'none');
      const q = qData[qIdx];
      const fb = document.getElementById('quizFeedback');
      fb.classList.remove('hidden');
      if (i === q.a) {
        btn.classList.replace('bg-white/5', 'bg-[#4caf50]/20');
        btn.classList.replace('border-[#ff6b8a]/20', 'border-[#4caf50]');
        btn.querySelector('iconify-icon').setAttribute('icon', 'solar:check-circle-bold');
        btn.querySelector('iconify-icon').classList.replace('text-white/30', 'text-[#4caf50]');
        fb.innerHTML = '✨ Perfect answer!'; fb.className = 'mt-4 p-3 rounded-xl text-xs font-medium bg-[#4caf50]/10 text-[#4caf50] border border-[#4caf50]/20';
        qScore++;
      } else {
        btn.classList.replace('bg-white/5', 'bg-[#f44336]/20');
        btn.classList.replace('border-[#ff6b8a]/20', 'border-[#f44336]');
        btn.querySelector('iconify-icon').setAttribute('icon', 'solar:close-circle-bold');
        btn.querySelector('iconify-icon').classList.replace('text-white/30', 'text-[#f44336]');
        const correctBtn = document.querySelectorAll('.quiz-opt')[q.a];
        correctBtn.classList.replace('bg-white/5', 'bg-[#4caf50]/10');
        correctBtn.classList.replace('border-[#ff6b8a]/20', 'border-[#4caf50]/50');
        fb.innerHTML = 'Oops! Love means learning.'; fb.className = 'mt-4 p-3 rounded-xl text-xs font-medium bg-[#f44336]/10 text-[#f44336] border border-[#f44336]/20';
      }
      if(qIdx < qData.length - 1) {
        document.getElementById('quizNextBtn').classList.remove('hidden');
        document.getElementById('quizNextBtn').classList.add('flex');
      } else {
        setTimeout(showQRes, 1500);
      }
    }
    function nextQuestion() { qIdx++; renderQ(); }
    function showQRes() {
      document.getElementById('quizContent').classList.add('hidden');
      const res = document.getElementById('quizResult');
      res.classList.remove('hidden');
      res.classList.add('flex');
      document.getElementById('resultScore').textContent = `${qScore}/${qData.length}`;
      document.getElementById('resultMessage').textContent = qScore === qData.length ? "Perfect Match! 💕" : "Still Learning Love! 💖";
      document.getElementById('resultDetail').textContent = `You scored ${Math.round((qScore/qData.length)*100)}%`;
    }

    // Wishes
    function createStars() {
      const bg = document.getElementById('starsBg');
      if(!bg || bg.children.length > 0) return;
      for (let i = 0; i < 70; i++) {
        const s = document.createElement('div');
        s.className = 'absolute bg-white rounded-full';
        s.style.left = Math.random() * 100 + '%'; s.style.top = Math.random() * 100 + '%';
        const size = Math.random() * 2 + 1; s.style.width = size + 'px'; s.style.height = size + 'px';
        s.style.animation = `twinkle ${Math.random() * 3 + 2}s ease infinite ${Math.random()*2}s`;
        bg.appendChild(s);
      }
    }
    function sendWish(lantern) {
      if (lantern.style.animationName === 'lanternFly') return;
      lantern.style.animation = 'lanternFly 2s cubic-bezier(0.4, 0, 0.2, 1) forwards';
      for(let i=0; i<6; i++) {
        const spark = document.createElement('div');
        spark.innerHTML = '<iconify-icon icon="solar:star-fall-bold" class="text-[#ffd700]"></iconify-icon>';
        spark.className = 'absolute text-sm transition-all duration-1000 pointer-events-none z-50';
        const rect = lantern.getBoundingClientRect();
        spark.style.left = rect.left + 20 + 'px'; spark.style.top = rect.top + 'px';
        document.body.appendChild(spark);
        setTimeout(() => {
          spark.style.transform = `translate(${(Math.random()-0.5)*100}px, -${Math.random()*150+50}px) scale(0)`;
          spark.style.opacity = '0';
        }, 10);
        setTimeout(() => spark.remove(), 1000);
      }
    }

    // Forever Confetti & Reply
    function sendReply() {
      const t = document.getElementById('replyText');
      if(!t.value.trim()) { t.classList.add('border-[#f44336]'); setTimeout(() => t.classList.remove('border-[#f44336]'), 1000); return; }
      document.getElementById('replySentMsg').classList.remove('hidden');
      t.value = ''; startConfetti();
    }
    
    let confettiActive = false;
    function startConfetti() {
      if(confettiActive) return; confettiActive = true;
      const cvs = document.getElementById('confettiCanvas');
      if(!cvs) return; const ctx = cvs.getContext('2d');
      cvs.width = window.innerWidth; cvs.height = window.innerHeight;
      const pts = [], colors = ['#ff6b8a', '#ffd700', '#e91e63', '#d4a053', '#ffffff'];
      for(let i=0; i<100; i++) pts.push({ x:Math.random()*cvs.width, y:-Math.random()*cvs.height, w:Math.random()*8+4, h:Math.random()*4+2, c:colors[Math.floor(Math.random()*colors.length)], s:Math.random()*3+2, a:Math.random()*Math.PI*2, sp:(Math.random()-0.5)*0.2, d:(Math.random()-0.5)*1.5 });
      let frame = 0;
      function anim() {
        ctx.clearRect(0,0,cvs.width,cvs.height);
        pts.forEach(p => {
          p.y+=p.s; p.x+=p.d+Math.sin(p.a)*0.5; p.a+=p.sp;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle=p.c; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore();
        });
        frame++; if(frame < 200) requestAnimationFrame(anim); else { ctx.clearRect(0,0,cvs.width,cvs.height); confettiActive=false; }
      }
      anim();
    }
    window.addEventListener('resize', () => {
      const cvs = document.getElementById('confettiCanvas');
      if(cvs) { cvs.width = window.innerWidth; cvs.height = window.innerHeight; }
    });

    // Init
    window.onload = () => createFloatingHearts();
  
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a0a2e]/80 backdrop-blur-xl border-b border-[#ff6b8a]/10 px-4 md:px-8 py-3 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-sm uppercase text-[#ff6b8a] select-none">OURSTORY</div>
<ul className="flex items-center gap-1 overflow-x-auto no-scrollbar mask-linear-fade">
<li><button aria-current="page" className="nav-btn active flex items-center gap-2 px-3 py-2 rounded-full text-xs transition-all duration-300 text-white/70 hover:text-white hover:bg-[#ff6b8a]/10 aria-[current=page]:bg-gradient-to-r aria-[current=page]:from-[#ff6b8a] aria-[current=page]:to-[#e91e63] aria-[current=page]:text-white aria-[current=page]:shadow-[0_4px_15px_rgba(255,107,138,0.2)]" onclick="nav('home', this)"><iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon> <span className="hidden md:inline tracking-tight">Home</span></button></li>
<li><button className="nav-btn flex items-center gap-2 px-3 py-2 rounded-full text-xs transition-all duration-300 text-white/70 hover:text-white hover:bg-[#ff6b8a]/10" onclick="nav('letter', this)"><iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> <span className="hidden md:inline tracking-tight">Letter</span></button></li>
<li><button className="nav-btn flex items-center gap-2 px-3 py-2 rounded-full text-xs transition-all duration-300 text-white/70 hover:text-white hover:bg-[#ff6b8a]/10" onclick="nav('games', this)"><iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon> <span className="hidden md:inline tracking-tight">Games</span></button></li>
<li><button className="nav-btn flex items-center gap-2 px-3 py-2 rounded-full text-xs transition-all duration-300 text-white/70 hover:text-white hover:bg-[#ff6b8a]/10" onclick="nav('memories', this)"><iconify-icon icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon> <span className="hidden md:inline tracking-tight">Memories</span></button></li>
<li><button className="nav-btn flex items-center gap-2 px-3 py-2 rounded-full text-xs transition-all duration-300 text-white/70 hover:text-white hover:bg-[#ff6b8a]/10" onclick="nav('quiz', this)"><iconify-icon icon="solar:question-circle-linear" strokeWidth="1.5"></iconify-icon> <span className="hidden md:inline tracking-tight">Quiz</span></button></li>
<li><button className="nav-btn flex items-center gap-2 px-3 py-2 rounded-full text-xs transition-all duration-300 text-white/70 hover:text-white hover:bg-[#ff6b8a]/10" onclick="nav('wishes', this)"><iconify-icon icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon> <span className="hidden md:inline tracking-tight">Wishes</span></button></li>
<li><button className="nav-btn flex items-center gap-2 px-3 py-2 rounded-full text-xs transition-all duration-300 text-white/70 hover:text-white hover:bg-[#ff6b8a]/10" onclick="nav('forever', this)"><iconify-icon icon="solar:infinity-linear" strokeWidth="1.5"></iconify-icon> <span className="hidden md:inline tracking-tight">Forever</span></button></li>
</ul>
<div className="w-[60px] hidden md:block"></div>
</nav>

<main className="flex-grow pt-16 flex flex-col relative w-full">

<section className="page-section flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] relative bg-[radial-gradient(ellipse_at_center,_#2d1b36_0%,_#1a0a2e_100%)] overflow-hidden" id="home">
<div className="absolute inset-0 pointer-events-none overflow-hidden" id="floatingHearts"></div>
<div className="z-10 flex flex-col items-center text-center px-4 animate-[fadeInUp_1.5s_ease_out]">
<h1 className="font-['Great_Vibes'] text-5xl md:text-7xl lg:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b8a] via-[#ffd700] to-[#ff6b8a] anim-shimmer mb-4 drop-shadow-sm">Happy Anniversary</h1>
<p className="text-sm md:text-base text-white/60 mb-12 tracking-tight">Every moment with you is a beautiful chapter in our love story <iconify-icon className="inline align-middle" icon="solar:stars-linear"></iconify-icon></p>
<div className="group relative inline-flex flex-col items-center justify-center p-8 md:px-16 md:py-10 rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105" onclick="nav('letter', document.querySelectorAll('.nav-btn')[1])">
<div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_0deg,_#ff6b8a,_#d4a053,_#e91e63,_#ff6b8a)] anim-rotate-border opacity-50 blur-md transition-opacity group-hover:opacity-100"></div>
<div className="absolute inset-[2px] rounded-[1.4rem] bg-[#1a0a2e] z-0"></div>
<div className="relative z-10 flex flex-col items-center anim-pulse">
<div className="font-['Playfair_Display'] text-6xl md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#ffd700] to-[#ff6b8a] leading-none tracking-tight">141</div>
<div className="text-xs tracking-[0.2em] text-[#d4a053] uppercase mt-2">Days</div>
<div className="font-['Dancing_Script'] text-xl md:text-2xl text-white/70 mt-2 tracking-tight">of Pure Love &amp; Happiness</div>
</div>
</div>
<button className="mt-16 px-8 py-3 bg-gradient-to-r from-[#ff6b8a] to-[#e91e63] text-white text-sm rounded-full tracking-tight transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,107,138,0.3)] flex items-center gap-2" onclick="nav('letter', document.querySelectorAll('.nav-btn')[1])">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon> Explore Our Story
        </button>
</div>
</section>

<section className="page-section hidden flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 bg-[radial-gradient(ellipse_at_top,_#2d1b36_0%,_#1a0a2e_100%)]" id="letter">
<div className="w-full max-w-2xl relative">
<div className="bg-gradient-to-br from-[#fdf6e3] via-[#f5e6c8] to-[#fdf6e3] rounded-xl p-8 md:p-14 text-[#4a3520] shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_60px_rgba(212,160,83,0.05)] -rotate-1 relative overflow-hidden transition-transform duration-700 hover:rotate-0">
<div className="absolute left-6 md:left-10 top-0 bottom-0 w-[1px] bg-[#d4a053]/30"></div>
<div className="text-center mb-10 relative z-10">
<h2 className="font-['Great_Vibes'] text-4xl md:text-5xl text-[#e91e63] tracking-tight mb-2">A Love Letter For You</h2>
<div className="font-['Dancing_Script'] text-base text-[#8b7355] tracking-tight">Written with all my heart <iconify-icon className="inline align-middle" icon="solar:heart-linear"></iconify-icon></div>
</div>
<div className="font-['Dancing_Script'] text-2xl text-[#e91e63] mb-6 relative z-10">My Dearest Love,</div>
<div className="font-['Dancing_Script'] text-xl leading-relaxed text-[#4a3520] mb-8 relative z-10 space-y-4">
<p>These 141 days have been the most beautiful chapter of my life. Every single day with you feels like a gift I never want to stop unwrapping. Here are just a few reasons why my heart beats for you:</p>
<div className="space-y-3 pl-2">
<div className="flex items-start gap-3 border-l-2 border-[#d4a053]/30 pl-4 py-1"><iconify-icon className="text-[#ff6b8a] mt-1 shrink-0" icon="solar:star-fall-linear"></iconify-icon> <span>Your smile lights up my entire world, brighter than a thousand suns</span></div>
<div className="flex items-start gap-3 border-l-2 border-[#d4a053]/30 pl-4 py-1"><iconify-icon className="text-[#ff6b8a] mt-1 shrink-0" icon="solar:emoji-funny-circle-linear"></iconify-icon> <span>The way you laugh makes every bad day instantly better</span></div>
<div className="flex items-start gap-3 border-l-2 border-[#d4a053]/30 pl-4 py-1"><iconify-icon className="text-[#ff6b8a] mt-1 shrink-0" icon="solar:hand-heart-linear"></iconify-icon> <span>Your kindness and compassion inspire me to be a better person</span></div>
<div className="flex items-start gap-3 border-l-2 border-[#d4a053]/30 pl-4 py-1"><iconify-icon className="text-[#ff6b8a] mt-1 shrink-0" icon="solar:users-group-two-rounded-linear"></iconify-icon> <span>You understand me in ways no one else ever has</span></div>
<div className="flex items-start gap-3 border-l-2 border-[#d4a053]/30 pl-4 py-1"><iconify-icon className="text-[#ff6b8a] mt-1 shrink-0" icon="solar:home-angle-linear"></iconify-icon> <span>Your presence alone makes any place feel like home</span></div>
<div className="flex items-start gap-3 border-l-2 border-[#d4a053]/30 pl-4 py-1"><iconify-icon className="text-[#ff6b8a] mt-1 shrink-0" icon="solar:music-note-linear"></iconify-icon> <span>Your voice is my favorite melody in this entire world</span></div>
<div className="flex items-start gap-3 border-l-2 border-[#d4a053]/30 pl-4 py-1"><iconify-icon className="text-[#ff6b8a] mt-1 shrink-0" icon="solar:heart-pulse-linear"></iconify-icon> <span>My heart chose you, and it will keep choosing you, every single day</span></div>
</div>
</div>
<div className="w-16 h-16 bg-[radial-gradient(circle,_#c0392b,_#96281b)] rounded-full flex items-center justify-center mx-auto mt-8 shadow-[0_4px_15px_rgba(0,0,0,0.2),inset_0_-2px_5px_rgba(0,0,0,0.3)] rotate-12 relative z-10 border border-[#96281b]">
<div className="absolute inset-1 border border-dashed border-white/20 rounded-full"></div>
<iconify-icon className="text-white/90 text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="text-right mt-6 font-['Great_Vibes'] text-3xl md:text-4xl text-[#e91e63] relative z-10">Forever Yours <iconify-icon className="inline text-2xl" icon="solar:heart-linear"></iconify-icon></div>
</div>
</div>
</section>

<section className="page-section hidden flex flex-col items-center min-h-[calc(100vh-4rem)] py-12 px-4 bg-[radial-gradient(ellipse_at_bottom,_#2d1b36_0%,_#1a0a2e_100%)] w-full" id="games">
<h2 className="font-['Great_Vibes'] text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b8a] to-[#ffd700] mb-8 text-center">Love Games</h2>
<div className="flex flex-wrap justify-center gap-2 mb-8 bg-[#2d1b36]/50 p-1 rounded-full border border-[#ff6b8a]/20 backdrop-blur-sm">
<button className="game-tab bg-[#ff6b8a] text-white px-5 py-2 rounded-full text-xs transition-all shadow-[0_0_10px_rgba(255,107,138,0.3)]" onclick="switchGame('memory', this)"><iconify-icon className="inline align-middle mr-1" icon="solar:gallery-circle-linear"></iconify-icon> Memory</button>
<button className="game-tab text-white/60 hover:text-white px-5 py-2 rounded-full text-xs transition-all hover:bg-white/5" onclick="switchGame('catch', this)"><iconify-icon className="inline align-middle mr-1" icon="solar:heart-angle-linear"></iconify-icon> Catch Hearts</button>
<button className="game-tab text-white/60 hover:text-white px-5 py-2 rounded-full text-xs transition-all hover:bg-white/5" onclick="switchGame('puzzle', this)"><iconify-icon className="inline align-middle mr-1" icon="solar:text-square-linear"></iconify-icon> Word Puzzle</button>
</div>

<div className="game-panel w-full max-w-md flex flex-col items-center block" id="game-memory">
<div className="text-sm text-[#d4a053] mb-6 tracking-tight flex gap-4">
<span className="bg-[#d4a053]/10 px-3 py-1 rounded-full border border-[#d4a053]/20">Moves: <span className="font-medium text-white" id="memoryMoves">0</span></span>
<span className="bg-[#d4a053]/10 px-3 py-1 rounded-full border border-[#d4a053]/20">Matches: <span className="font-medium text-white" id="memoryMatches">0</span>/8</span>
</div>
<div className="grid grid-cols-4 gap-3 w-full aspect-square" id="memoryBoard"></div>
<button className="mt-8 px-6 py-2 bg-gradient-to-r from-[#ff6b8a] to-[#e91e63] text-white text-xs rounded-full transition-transform hover:scale-105 tracking-tight flex items-center gap-2" onclick="initMemoryGame()"><iconify-icon icon="solar:refresh-linear"></iconify-icon> Restart Game</button>
</div>

<div className="game-panel w-full max-w-lg flex flex-col items-center hidden" id="game-catch">
<div className="text-sm text-[#d4a053] mb-6 tracking-tight flex gap-4">
<span className="bg-[#d4a053]/10 px-3 py-1 rounded-full border border-[#d4a053]/20">Score: <span className="font-medium text-white" id="catchScore">0</span></span>
<span className="bg-[#d4a053]/10 px-3 py-1 rounded-full border border-[#d4a053]/20 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> <span className="font-medium text-white" id="catchTime">30</span>s</span>
</div>
<div className="w-full h-80 md:h-96 bg-gradient-to-b from-[#1a0a2e] to-[#2d1b36] border border-[#ff6b8a]/20 rounded-2xl relative overflow-hidden shadow-inner touch-none cursor-crosshair" id="catchArea">
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-r from-[#d4a053] to-[#c4943d] rounded-b-xl rounded-t-sm shadow-[0_-2px_10px_rgba(212,160,83,0.3)] transition-all duration-75 ease-out flex items-center justify-center border border-[#ffd700]/30" id="catchBasket"><div className="w-full h-1 bg-black/20 absolute top-0 rounded-t-sm"></div></div>
</div>
<button className="mt-8 px-6 py-2 bg-gradient-to-r from-[#ff6b8a] to-[#e91e63] text-white text-xs rounded-full transition-transform hover:scale-105 tracking-tight flex items-center gap-2" id="catchStartBtn" onclick="startCatchGame()"><iconify-icon icon="solar:play-circle-linear"></iconify-icon> Start Game</button>
</div>

<div className="game-panel w-full max-w-md flex flex-col items-center hidden" id="game-puzzle">
<div className="text-sm text-[#d4a053] mb-6 tracking-tight">
<span className="bg-[#d4a053]/10 px-3 py-1 rounded-full border border-[#d4a053]/20">Score: <span className="font-medium text-white" id="puzzleScore">0</span> / 8</span>
</div>
<div className="bg-[#2d1b36]/40 border border-[#ff6b8a]/20 rounded-2xl p-8 w-full text-center backdrop-blur-sm">
<div className="text-white/60 text-sm mb-6 italic tracking-tight flex items-center justify-center gap-2" id="puzzleHint"><iconify-icon icon="solar:lightbulb-bolt-linear"></iconify-icon> Unscramble this love word!</div>
<div className="font-['Playfair_Display'] text-4xl md:text-5xl tracking-[0.3em] text-[#d4a053] mb-8 font-semibold select-none" id="puzzleWord"></div>
<div className="relative w-full max-w-xs mx-auto">
<input className="w-full bg-[#1a0a2e]/50 border border-[#ff6b8a]/30 text-white text-sm text-center py-3 px-4 rounded-full outline-none focus:border-[#d4a053] focus:ring-1 focus:ring-[#d4a053] transition-all tracking-widest uppercase placeholder:normal-case placeholder:tracking-normal placeholder:text-white/30" id="puzzleInput" onkeydown="if(event.key==='Enter')checkPuzzle()" placeholder="Type your answer..." type="text"/>
</div>
<div className="mt-4 text-sm h-5 tracking-tight transition-colors duration-300" id="puzzleFeedback"></div>
<div className="flex gap-3 justify-center mt-6">
<button className="px-6 py-2 bg-gradient-to-r from-[#ff6b8a] to-[#e91e63] text-white text-xs rounded-full transition-transform hover:scale-105 flex items-center gap-2" onclick="checkPuzzle()"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Check</button>
<button className="px-6 py-2 bg-white/5 border border-white/10 text-white/70 hover:text-white text-xs rounded-full transition-all hover:bg-white/10 flex items-center gap-2" onclick="newPuzzle()"><iconify-icon icon="solar:skip-next-linear"></iconify-icon> Skip</button>
</div>
</div>
</div>
</section>

<section className="page-section hidden flex flex-col items-center min-h-[calc(100vh-4rem)] py-12 px-4 bg-[radial-gradient(ellipse_at_center,_#2d1b36_0%,_#1a0a2e_100%)] w-full" id="memories">
<h2 className="font-['Great_Vibes'] text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b8a] to-[#ffd700] mb-10 text-center">Our Memories</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl w-full mb-16">
<div className="bg-gradient-to-br from-[#ff6b8a]/5 to-[#6a1b5e]/20 border border-[#ff6b8a]/10 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6b8a]/30 hover:shadow-[0_10px_30px_rgba(255,107,138,0.1)] group">
<div className="text-3xl mb-4 bg-white/5 w-12 h-12 rounded-full flex items-center justify-center border border-white/5 group-hover:bg-[#ff6b8a]/20 transition-colors"><iconify-icon className="text-[#ff6b8a]" icon="solar:star-fall-linear"></iconify-icon></div>
<h3 className="font-['Dancing_Script'] text-2xl text-[#d4a053] mb-2 tracking-tight">The Day We Met</h3>
<p className="text-xs text-white/60 leading-relaxed">The universe conspired to bring us together, and everything changed forever.</p>
</div>
<div className="bg-gradient-to-br from-[#ff6b8a]/5 to-[#6a1b5e]/20 border border-[#ff6b8a]/10 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6b8a]/30 hover:shadow-[0_10px_30px_rgba(255,107,138,0.1)] group">
<div className="text-3xl mb-4 bg-white/5 w-12 h-12 rounded-full flex items-center justify-center border border-white/5 group-hover:bg-[#ff6b8a]/20 transition-colors"><iconify-icon className="text-[#ff6b8a]" icon="solar:wineglass-triangle-linear"></iconify-icon></div>
<h3 className="font-['Dancing_Script'] text-2xl text-[#d4a053] mb-2 tracking-tight">Our First Date</h3>
<p className="text-xs text-white/60 leading-relaxed">Nervous hearts, shy smiles, and the beginning of something truly magical.</p>
</div>
<div className="bg-gradient-to-br from-[#ff6b8a]/5 to-[#6a1b5e]/20 border border-[#ff6b8a]/10 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6b8a]/30 hover:shadow-[0_10px_30px_rgba(255,107,138,0.1)] group">
<div className="text-3xl mb-4 bg-white/5 w-12 h-12 rounded-full flex items-center justify-center border border-white/5 group-hover:bg-[#ff6b8a]/20 transition-colors"><iconify-icon className="text-[#ff6b8a]" icon="solar:heart-pulse-linear"></iconify-icon></div>
<h3 className="font-['Dancing_Script'] text-2xl text-[#d4a053] mb-2 tracking-tight">First Kiss</h3>
<p className="text-xs text-white/60 leading-relaxed">Time stopped, the world faded, and all that existed in that moment was us.</p>
</div>
<div className="bg-gradient-to-br from-[#ff6b8a]/5 to-[#6a1b5e]/20 border border-[#ff6b8a]/10 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6b8a]/30 hover:shadow-[0_10px_30px_rgba(255,107,138,0.1)] group">
<div className="text-3xl mb-4 bg-white/5 w-12 h-12 rounded-full flex items-center justify-center border border-white/5 group-hover:bg-[#ff6b8a]/20 transition-colors"><iconify-icon className="text-[#ff6b8a]" icon="solar:sun-fog-linear"></iconify-icon></div>
<h3 className="font-['Dancing_Script'] text-2xl text-[#d4a053] mb-2 tracking-tight">Sunsets Together</h3>
<p className="text-xs text-white/60 leading-relaxed">Every sunset is infinitely more beautiful because I'm watching it with you.</p>
</div>
<div className="bg-gradient-to-br from-[#ff6b8a]/5 to-[#6a1b5e]/20 border border-[#ff6b8a]/10 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6b8a]/30 hover:shadow-[0_10px_30px_rgba(255,107,138,0.1)] group">
<div className="text-3xl mb-4 bg-white/5 w-12 h-12 rounded-full flex items-center justify-center border border-white/5 group-hover:bg-[#ff6b8a]/20 transition-colors"><iconify-icon className="text-[#ff6b8a]" icon="solar:confetti-linear"></iconify-icon></div>
<h3 className="font-['Dancing_Script'] text-2xl text-[#d4a053] mb-2 tracking-tight">Celebrations</h3>
<p className="text-xs text-white/60 leading-relaxed">Celebrating your existence is my favorite occasion of the entire year.</p>
</div>
<div className="bg-gradient-to-br from-[#ff6b8a]/5 to-[#6a1b5e]/20 border border-[#ff6b8a]/10 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6b8a]/30 hover:shadow-[0_10px_30px_rgba(255,107,138,0.1)] group">
<div className="text-3xl mb-4 bg-white/5 w-12 h-12 rounded-full flex items-center justify-center border border-white/5 group-hover:bg-[#ff6b8a]/20 transition-colors"><iconify-icon className="text-[#ff6b8a]" icon="solar:infinity-linear"></iconify-icon></div>
<h3 className="font-['Dancing_Script'] text-2xl text-[#d4a053] mb-2 tracking-tight">Every Single Day</h3>
<p className="text-xs text-white/60 leading-relaxed">Because every day spent with you is a cherished memory worth keeping forever.</p>
</div>
</div>
<h3 className="font-['Playfair_Display'] text-2xl md:text-3xl tracking-tight text-white/90 mb-10 font-semibold flex items-center gap-3"><iconify-icon className="text-[#ff6b8a]" icon="solar:history-linear"></iconify-icon> Our Love Timeline</h3>
<div className="relative max-w-3xl w-full mx-auto py-8 px-4">
<div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#ff6b8a]/50 to-transparent"></div>
<div className="flex flex-col md:flex-row items-center mb-8 relative md:pr-[50%] w-full group">
<div className="absolute left-[1.35rem] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#1a0a2e] border-2 border-[#ff6b8a] rounded-full z-10 transition-all group-hover:scale-150 group-hover:bg-[#ff6b8a]"></div>
<div className="ml-16 md:ml-0 md:mr-10 bg-[#2d1b36]/80 border border-[#ff6b8a]/20 backdrop-blur-sm rounded-2xl p-5 w-full transition-all group-hover:border-[#ff6b8a]/50 group-hover:bg-[#2d1b36]">
<h4 className="font-['Dancing_Script'] text-xl text-[#d4a053] mb-1 tracking-tight">Day 1 — The Beginning</h4>
<p className="text-xs text-white/70">The day our story started. One look was all it took to know you were special.</p>
</div>
</div>
<div className="flex flex-col md:flex-row-reverse items-center mb-8 relative md:pl-[50%] w-full group">
<div className="absolute left-[1.35rem] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#1a0a2e] border-2 border-[#ff6b8a] rounded-full z-10 transition-all group-hover:scale-150 group-hover:bg-[#ff6b8a]"></div>
<div className="ml-16 md:ml-10 bg-[#2d1b36]/80 border border-[#ff6b8a]/20 backdrop-blur-sm rounded-2xl p-5 w-full transition-all group-hover:border-[#ff6b8a]/50 group-hover:bg-[#2d1b36]">
<h4 className="font-['Dancing_Script'] text-xl text-[#d4a053] mb-1 tracking-tight">Day 7 — Deep Talk</h4>
<p className="text-xs text-white/70">We talked for hours and discovered how perfectly our souls align.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center mb-8 relative md:pr-[50%] w-full group">
<div className="absolute left-[1.35rem] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#1a0a2e] border-2 border-[#ff6b8a] rounded-full z-10 transition-all group-hover:scale-150 group-hover:bg-[#ff6b8a]"></div>
<div className="ml-16 md:ml-0 md:mr-10 bg-[#2d1b36]/80 border border-[#ff6b8a]/20 backdrop-blur-sm rounded-2xl p-5 w-full transition-all group-hover:border-[#ff6b8a]/50 group-hover:bg-[#2d1b36]">
<h4 className="font-['Dancing_Script'] text-xl text-[#d4a053] mb-1 tracking-tight">Day 30 — Falling In Love</h4>
<p className="text-xs text-white/70">The butterflies became a hurricane. I knew I was falling, and I didn't want to stop.</p>
</div>
</div>
<div className="flex flex-col md:flex-row-reverse items-center mb-8 relative md:pl-[50%] w-full group">
<div className="absolute left-[1.35rem] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#1a0a2e] border-2 border-[#ff6b8a] rounded-full z-10 transition-all group-hover:scale-150 group-hover:bg-[#ff6b8a]"></div>
<div className="ml-16 md:ml-10 bg-[#2d1b36]/80 border border-[#ff6b8a]/20 backdrop-blur-sm rounded-2xl p-5 w-full transition-all group-hover:border-[#ff6b8a]/50 group-hover:bg-[#2d1b36]">
<h4 className="font-['Dancing_Script'] text-xl text-[#d4a053] mb-1 tracking-tight">Day 100 — Century of Love</h4>
<p className="text-xs text-white/70">100 beautiful days of choosing each other, every single morning.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center relative md:pr-[50%] w-full group">
<div className="absolute left-[1.35rem] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#ff6b8a] border-2 border-[#ffd700] rounded-full z-10 shadow-[0_0_15px_rgba(255,107,138,0.8)]"></div>
<div className="ml-16 md:ml-0 md:mr-10 bg-gradient-to-br from-[#ff6b8a]/20 to-[#6a1b5e]/30 border border-[#ff6b8a]/50 backdrop-blur-sm rounded-2xl p-5 w-full shadow-[0_5px_20px_rgba(255,107,138,0.15)]">
<h4 className="font-['Dancing_Script'] text-xl text-[#ffd700] mb-1 tracking-tight">Day 141 — Today</h4>
<p className="text-xs text-white/80">Here we are, stronger and more in love than ever. This is just the beginning.</p>
</div>
</div>
</div>
</section>

<section className="page-section hidden flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 bg-[radial-gradient(ellipse_at_top,_#2d1b36_0%,_#1a0a2e_100%)] w-full" id="quiz">
<div className="w-full max-w-xl bg-gradient-to-br from-[#2d1b36]/80 to-[#1a0a2e]/90 border border-[#ff6b8a]/20 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md relative overflow-hidden">
<div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff6b8a]/10 rounded-full blur-3xl"></div>
<div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#d4a053]/10 rounded-full blur-3xl"></div>
<div className="relative z-10 text-center">
<h2 className="font-['Great_Vibes'] text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b8a] to-[#ffd700] mb-2">Love Quiz</h2>
<p className="text-xs text-white/50 mb-6">How well do you know our love story?</p>
<div className="flex justify-center gap-2 mb-8" id="quizProgress"></div>
<div id="quizContent">
<div className="text-lg md:text-xl font-medium tracking-tight mb-8 text-white/90 min-h-[4rem] flex items-center justify-center" id="quizQuestion"></div>
<div className="flex flex-col gap-3 mb-4" id="quizOptions"></div>
<div className="mt-4 p-3 rounded-xl text-xs hidden font-medium transition-all duration-300" id="quizFeedback"></div>
<button className="mt-6 px-8 py-3 bg-gradient-to-r from-[#ff6b8a] to-[#e91e63] text-white text-xs rounded-full hidden hover:scale-105 transition-transform mx-auto items-center gap-2" id="quizNextBtn" onclick="nextQuestion()"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Next Question</button>
</div>
<div className="hidden flex flex-col items-center py-6" id="quizResult">
<div className="font-['Playfair_Display'] text-6xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#ffd700] to-[#ff6b8a] mb-4" id="resultScore"></div>
<div className="font-['Dancing_Script'] text-3xl text-[#ff6b8a] mb-2 tracking-tight" id="resultMessage"></div>
<div className="text-xs text-white/60 mb-8" id="resultDetail"></div>
<button className="px-8 py-3 bg-white/5 border border-white/10 text-white text-xs rounded-full transition-all hover:bg-white/10 hover:border-[#ff6b8a]/50 flex items-center gap-2" onclick="initQuiz()"><iconify-icon icon="solar:refresh-linear"></iconify-icon> Try Again</button>
</div>
</div>
</div>
</section>

<section className="page-section hidden flex flex-col items-center min-h-[calc(100vh-4rem)] py-12 px-4 bg-[radial-gradient(ellipse_at_bottom,_#0a0a2e_0%,_#1a0a3e_50%,_#0d0d2d_100%)] w-full relative overflow-hidden" id="wishes">
<div className="absolute inset-0 pointer-events-none" id="starsBg"></div>
<div className="relative z-10 w-full flex flex-col items-center max-w-5xl">
<h2 className="font-['Great_Vibes'] text-5xl tracking-tight text-[#ffd700] mb-2 text-center drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">Wishes to the Stars</h2>
<p className="text-xs text-white/60 mb-12 text-center flex items-center gap-2 justify-center"><iconify-icon icon="solar:hand-stars-linear"></iconify-icon> Click a lantern to send your wish to the stars</p>
<div className="flex justify-center flex-wrap gap-6 md:gap-10 mb-16 w-full">
<div className="w-16 h-24 md:w-20 md:h-28 bg-gradient-to-br from-[#ff9800] to-[#ff6f00] rounded-t-2xl rounded-b-[40px] flex items-center justify-center cursor-pointer hover:-translate-y-4 transition-transform duration-500 shadow-[0_0_30px_rgba(255,152,0,0.3)] relative [animation:lanternFloat_4s_ease_infinite] border border-t-[#ffd700]/50 border-b-black/20" onclick="sendWish(this)">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#8d6e63] rounded-t-sm"></div>
<div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-[#8d6e63]"></div>
<div className="absolute bottom-1 w-8 h-4 rounded-full bg-white/20 blur-sm"></div>
<span className="text-[10px] text-white font-medium tracking-widest uppercase">Health</span>
</div>
<div className="w-16 h-24 md:w-20 md:h-28 bg-gradient-to-br from-[#ff9800] to-[#ff6f00] rounded-t-2xl rounded-b-[40px] flex items-center justify-center cursor-pointer hover:-translate-y-4 transition-transform duration-500 shadow-[0_0_30px_rgba(255,152,0,0.3)] relative [animation:lanternFloat_4.5s_ease_infinite_0.5s] border border-t-[#ffd700]/50 border-b-black/20" onclick="sendWish(this)">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#8d6e63] rounded-t-sm"></div>
<div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-[#8d6e63]"></div>
<div className="absolute bottom-1 w-8 h-4 rounded-full bg-white/20 blur-sm"></div>
<span className="text-[10px] text-white font-medium tracking-widest uppercase">Joy</span>
</div>
<div className="w-16 h-24 md:w-20 md:h-28 bg-gradient-to-br from-[#ff9800] to-[#ff6f00] rounded-t-2xl rounded-b-[40px] flex items-center justify-center cursor-pointer hover:-translate-y-4 transition-transform duration-500 shadow-[0_0_30px_rgba(255,152,0,0.3)] relative [animation:lanternFloat_3.8s_ease_infinite_1s] border border-t-[#ffd700]/50 border-b-black/20" onclick="sendWish(this)">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#8d6e63] rounded-t-sm"></div>
<div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-[#8d6e63]"></div>
<div className="absolute bottom-1 w-8 h-4 rounded-full bg-white/20 blur-sm"></div>
<span className="text-[10px] text-white font-medium tracking-widest uppercase">Love</span>
</div>
<div className="w-16 h-24 md:w-20 md:h-28 bg-gradient-to-br from-[#ff9800] to-[#ff6f00] rounded-t-2xl rounded-b-[40px] flex items-center justify-center cursor-pointer hover:-translate-y-4 transition-transform duration-500 shadow-[0_0_30px_rgba(255,152,0,0.3)] relative [animation:lanternFloat_4.2s_ease_infinite_1.5s] border border-t-[#ffd700]/50 border-b-black/20" onclick="sendWish(this)">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#8d6e63] rounded-t-sm"></div>
<div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-[#8d6e63]"></div>
<div className="absolute bottom-1 w-8 h-4 rounded-full bg-white/20 blur-sm"></div>
<span className="text-[10px] text-white font-medium tracking-widest uppercase">Dreams</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">

<div className="bg-[#1a0a2e]/50 border border-[#d4a053]/20 rounded-2xl p-6 text-center cursor-pointer hover:-translate-y-1 hover:border-[#d4a053]/50 transition-all backdrop-blur-sm group group-revealed-target relative overflow-hidden" onclick="this.classList.toggle('group-revealed')">
<div className="w-10 h-10 bg-gradient-to-br from-[#d4a053] to-[#a87a38] rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-semibold shadow-inner border border-[#ffd700]/30 text-white">1</div>
<h3 className="font-['Dancing_Script'] text-xl text-[#d4a053] mb-2 tracking-tight">A Wish for Us</h3>
<p className="text-xs text-white/60 mb-2">May our love grow deeper with each passing day...</p>
<div className="text-xs text-white/90 italic hidden group-[.group-revealed]:block mt-3 border-t border-[#d4a053]/20 pt-3 transition-all duration-300">...and may we never stop choosing each other, through every season of life. <iconify-icon className="inline" icon="solar:leaf-linear"></iconify-icon></div>
</div>
<div className="bg-[#1a0a2e]/50 border border-[#d4a053]/20 rounded-2xl p-6 text-center cursor-pointer hover:-translate-y-1 hover:border-[#d4a053]/50 transition-all backdrop-blur-sm group group-revealed-target relative overflow-hidden" onclick="this.classList.toggle('group-revealed')">
<div className="w-10 h-10 bg-gradient-to-br from-[#d4a053] to-[#a87a38] rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-semibold shadow-inner border border-[#ffd700]/30 text-white">2</div>
<h3 className="font-['Dancing_Script'] text-xl text-[#d4a053] mb-2 tracking-tight">A Wish for You</h3>
<p className="text-xs text-white/60 mb-2">May you always know how incredibly loved you are...</p>
<div className="text-xs text-white/90 italic hidden group-[.group-revealed]:block mt-3 border-t border-[#d4a053]/20 pt-3 transition-all duration-300">...because you deserve all the happiness in the world, and more. <iconify-icon className="inline" icon="solar:stars-linear"></iconify-icon></div>
</div>
<div className="bg-[#1a0a2e]/50 border border-[#d4a053]/20 rounded-2xl p-6 text-center cursor-pointer hover:-translate-y-1 hover:border-[#d4a053]/50 transition-all backdrop-blur-sm group group-revealed-target relative overflow-hidden" onclick="this.classList.toggle('group-revealed')">
<div className="w-10 h-10 bg-gradient-to-br from-[#d4a053] to-[#a87a38] rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-semibold shadow-inner border border-[#ffd700]/30 text-white">3</div>
<h3 className="font-['Dancing_Script'] text-xl text-[#d4a053] mb-2 tracking-tight">A Wish for Tomorrow</h3>
<p className="text-xs text-white/60 mb-2">May every tomorrow be brighter because we're together...</p>
<div className="text-xs text-white/90 italic hidden group-[.group-revealed]:block mt-3 border-t border-[#d4a053]/20 pt-3 transition-all duration-300">...facing whatever comes, hand in hand, heart to heart. <iconify-icon className="inline" icon="solar:hand-shake-linear"></iconify-icon></div>
</div>
</div>
</div>
</section>

<section className="page-section hidden flex flex-col items-center min-h-[calc(100vh-4rem)] py-12 px-4 bg-[radial-gradient(ellipse_at_center,_#2d1b36_0%,_#1a0a2e_100%)] w-full relative overflow-hidden" id="forever">
<canvas className="absolute inset-0 pointer-events-none z-0" id="confettiCanvas"></canvas>
<div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
<h2 className="font-['Great_Vibes'] text-5xl md:text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b8a] via-[#ffd700] to-[#ff6b8a] anim-shimmer mb-10 text-center drop-shadow-sm">Forever &amp; Always</h2>
<div className="mb-12 flex justify-center">
<div className="text-7xl md:text-8xl anim-heartbeat drop-shadow-[0_0_20px_rgba(255,107,138,0.6)] text-[#ff6b8a]"><iconify-icon icon="solar:heart-bold"></iconify-icon></div>
</div>
<div className="flex flex-col gap-4 w-full mb-12">
<div className="flex gap-4 p-5 bg-[#2d1b36]/60 border border-[#ff6b8a]/20 rounded-2xl items-start backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#ff6b8a]/40 shadow-sm">
<div className="w-8 h-8 shrink-0 bg-gradient-to-br from-[#ff6b8a] to-[#e91e63] rounded-full flex items-center justify-center text-xs font-semibold text-white mt-1 shadow-inner border border-white/20"><iconify-icon icon="solar:star-linear"></iconify-icon></div>
<div className="font-['Dancing_Script'] text-xl text-white/90 leading-relaxed tracking-tight pt-1">I promise to love you more with every sunrise, deeper with every heartbeat, and stronger with every challenge we face together.</div>
</div>
<div className="flex gap-4 p-5 bg-[#2d1b36]/60 border border-[#ff6b8a]/20 rounded-2xl items-start backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#ff6b8a]/40 shadow-sm">
<div className="w-8 h-8 shrink-0 bg-gradient-to-br from-[#ff6b8a] to-[#e91e63] rounded-full flex items-center justify-center text-xs font-semibold text-white mt-1 shadow-inner border border-white/20"><iconify-icon icon="solar:shield-check-linear"></iconify-icon></div>
<div className="font-['Dancing_Script'] text-xl text-white/90 leading-relaxed tracking-tight pt-1">I promise to be your safe place, your biggest cheerleader, and the hand that holds yours through every storm.</div>
</div>
<div className="flex gap-4 p-5 bg-[#2d1b36]/60 border border-[#ff6b8a]/20 rounded-2xl items-start backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#ff6b8a]/40 shadow-sm">
<div className="w-8 h-8 shrink-0 bg-gradient-to-br from-[#ff6b8a] to-[#e91e63] rounded-full flex items-center justify-center text-xs font-semibold text-white mt-1 shadow-inner border border-white/20"><iconify-icon icon="solar:smile-circle-linear"></iconify-icon></div>
<div className="font-['Dancing_Script'] text-xl text-white/90 leading-relaxed tracking-tight pt-1">I promise to never stop making you smile, to keep surprising you with love, and to make every day feel special.</div>
</div>
<div className="flex gap-4 p-5 bg-gradient-to-br from-[#ff6b8a]/10 to-[#6a1b5e]/20 border border-[#ff6b8a]/40 rounded-2xl items-start backdrop-blur-sm transition-all hover:-translate-y-1 shadow-[0_4px_20px_rgba(255,107,138,0.1)]">
<div className="w-8 h-8 shrink-0 bg-gradient-to-br from-[#ffd700] to-[#d4a053] rounded-full flex items-center justify-center text-xs font-semibold text-white mt-1 shadow-inner border border-white/20 text-[#1a0a2e]"><iconify-icon icon="solar:infinity-linear"></iconify-icon></div>
<div className="font-['Dancing_Script'] text-xl text-[#ffd700] leading-relaxed tracking-tight pt-1">I promise that this is just the beginning — our love story will span forever, and every chapter will be more beautiful than the last.</div>
</div>
</div>
<div className="w-full bg-[#1a0a2e]/60 border border-[#ff6b8a]/20 rounded-2xl p-6 md:p-8 backdrop-blur-md text-center">
<h3 className="font-['Dancing_Script'] text-2xl text-[#ff6b8a] mb-4 tracking-tight flex items-center justify-center gap-2"><iconify-icon icon="solar:pen-new-square-linear"></iconify-icon> Reply to My Love</h3>
<textarea className="w-full min-h-[120px] bg-white/5 border border-[#ff6b8a]/30 rounded-xl p-4 text-sm text-white placeholder:text-white/30 focus:border-[#ff6b8a] focus:ring-1 focus:ring-[#ff6b8a] outline-none transition-all resize-y mb-4" id="replyText" placeholder="Write your heart out... what would you like to say back?"></textarea>
<button className="px-8 py-3 bg-gradient-to-r from-[#ff6b8a] to-[#e91e63] text-white text-xs rounded-full transition-transform hover:scale-105 flex items-center gap-2 mx-auto tracking-tight" onclick="sendReply()"><iconify-icon icon="solar:plain-2-linear"></iconify-icon> Send With Love</button>
<div className="hidden mt-4 font-['Dancing_Script'] text-2xl text-[#d4a053] tracking-tight" id="replySentMsg">Your love has been sent to the universe! <iconify-icon className="inline" icon="solar:stars-linear"></iconify-icon></div>
</div>
<div className="mt-16 font-['Great_Vibes'] text-3xl md:text-4xl text-white/30 tracking-tight select-none">You + Me = Forever</div>
</div>
</section>
</main>


    </>
  );
}
