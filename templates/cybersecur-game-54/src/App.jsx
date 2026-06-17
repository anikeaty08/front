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



    const levels = [
      {
        name: "Password Strength",
        timer: 45,
        threat: "Low — city perimeter holding",
        challenge: {
          title: "Identify the strongest password",
          prompt: "A hacker is attempting a credential attack. Which password is strongest?",
          options: ["123456", "password", "Q7!pZ9@Lm", "football"],
          correct: 2,
          success: "Correct. Complex, unpredictable passwords resist guessing and brute-force attacks.",
          fail: "Not quite. Strong passwords should be random, unique, and hard to guess."
        }
      },
      {
        name: "Password Reuse Awareness",
        timer: 40,
        threat: "Elevated — reused credentials detected",
        challenge: {
          title: "Stop password reuse",
          prompt: "One site was breached. Which action best protects your accounts?",
          options: [
            "Keep using the same password if the site is small",
            "Change only your social media password",
            "Use a unique password for every account",
            "Add one extra number to your old password everywhere"
          ],
          correct: 2,
          success: "Correct. Unique passwords prevent one breach from exposing multiple accounts.",
          fail: "Incorrect. Reusing passwords lets attackers pivot from one breach to many accounts."
        }
      },
      {
        name: "Phishing Detection",
        timer: 35,
        threat: "High — suspicious messages entering the network",
        challenge: {
          title: "Identify the phishing response",
          prompt: "You receive an urgent email asking you to verify your bank login through a strange link. What should you do?",
          options: ["Ignore email", "Report phishing", "Click suspicious link", "Reply with your username"],
          correct: 1,
          success: "Correct. Reporting phishing helps block scams and protect other users.",
          fail: "Unsafe choice. Never click suspicious links or provide credentials through untrusted emails."
        }
      },
      {
        name: "Two-Factor Authentication",
        timer: 30,
        threat: "Severe — perimeter bypass attempts underway",
        challenge: {
          title: "Choose the best account defense",
          prompt: "An attacker guessed your password. What security step most improves protection now?",
          options: [
            "Use the same password but log in less often",
            "Enable two-factor authentication",
            "Write the password down near your device",
            "Share the password only with trusted friends"
          ],
          correct: 1,
          success: "Correct. Two-factor authentication can stop access even if a password is compromised.",
          fail: "Incorrect. Two-factor authentication adds a critical second barrier."
        }
      },
      {
        name: "Brute-Force Attack Defense",
        timer: 28,
        threat: "Critical — active brute-force barrage across districts",
        challenge: {
          title: "Defend against brute-force attacks",
          prompt: "Which combination gives the best defense against automated password guessing?",
          options: [
            "Short password changed once a year",
            "Common password plus birth year",
            "Long unique password with two-factor authentication",
            "Reuse a strong password on every site"
          ],
          correct: 2,
          success: "Correct. Long unique passwords plus 2FA greatly reduce brute-force success.",
          fail: "Not enough protection. Length, uniqueness, and 2FA are the strongest combined defense."
        }
      }
    ];

    const state = {
      score: 0,
      security: 100,
      level: 0,
      timer: 45,
      playing: false,
      attackOpen: false,
      currentBuilding: null,
      tickInterval: null,
      attackInterval: null,
      challengeAnswered: false
    };

    const scoreEl = document.getElementById('score');
    const timerEl = document.getElementById('timer');
    const securityBar = document.getElementById('securityBar');
    const levelLabel = document.getElementById('levelLabel');
    const threatStatus = document.getElementById('threatStatus');
    const eventLog = document.getElementById('eventLog');
    const startBtn = document.getElementById('startBtn');
    const challengeModal = document.getElementById('challengeModal');
    const challengeLevel = document.getElementById('challengeLevel');
    const challengeTitle = document.getElementById('challengeTitle');
    const challengePrompt = document.getElementById('challengePrompt');
    const optionsContainer = document.getElementById('optionsContainer');
    const feedback = document.getElementById('feedback');
    const closeChallenge = document.getElementById('closeChallenge');
    const endScreen = document.getElementById('endScreen');
    const finalScore = document.getElementById('finalScore');
    const restartBtn = document.getElementById('restartBtn');

    const buildingGroups = {};
    document.querySelectorAll('.building').forEach(el => {
      const key = el.dataset.building;
      if (!buildingGroups[key]) buildingGroups[key] = [];
      buildingGroups[key].push(el);
    });

    function updateUI() {
      scoreEl.textContent = state.score;
      timerEl.textContent = state.timer;
      securityBar.style.width = Math.max(0, state.security) + '%';
      securityBar.style.background = state.security > 60
        ? 'linear-gradient(90deg, #7A5CFF, #00D9FF)'
        : state.security > 30
        ? 'linear-gradient(90deg, #FFB020, #FF3B5C)'
        : 'linear-gradient(90deg, #FF3B5C, #FF6B81)';
      securityBar.style.boxShadow = state.security > 30
        ? '0 0 1rem rgba(0,217,255,0.35)'
        : '0 0 1rem rgba(255,59,92,0.35)';

      if (state.level < levels.length) {
        levelLabel.textContent = `${state.level + 1} / 5 · ${levels[state.level].name}`;
        threatStatus.textContent = levels[state.level].threat;
      }
    }

    function logEvent(message, tone = 'info') {
      const colors = {
        info: 'border-white/10 bg-black/20 text-[#E6E9F2]/75',
        success: 'border-[#00FF9C]/20 bg-[#00FF9C]/10 text-[#B4FFD9]',
        danger: 'border-[#FF3B5C]/20 bg-[#FF3B5C]/10 text-[#FFB2BF]'
      };
      const item = document.createElement('div');
      item.className = `rounded-2xl border px-4 py-3 text-sm ${colors[tone]}`;
      item.textContent = message;
      eventLog.prepend(item);
      while (eventLog.children.length > 4) eventLog.removeChild(eventLog.lastChild);
    }

    function setBuildingState(key, mode) {
      (buildingGroups[key] || []).forEach(el => {
        const shield = el.querySelector('.shield');
        const hacker = el.querySelector('.hacker');
        if (mode === 'idle') {
          el.classList.remove('ring-2', 'ring-[#FF3B5C]', 'scale-[1.02]');
          el.style.boxShadow = `0 0 1.5rem ${hexToRgba(el.dataset.glow, 0.16)}`;
          el.style.transform = '';
          hacker?.classList.add('hidden');
          shield?.classList.add('hidden');
          shield?.classList.remove('flex');
        }
        if (mode === 'attack') {
          el.classList.add('ring-2', 'ring-[#FF3B5C]', 'scale-[1.02]');
          el.style.boxShadow = '0 0 2rem rgba(255,59,92,0.35), inset 0 0 2rem rgba(255,59,92,0.08)';
          hacker?.classList.remove('hidden');
          if (hacker && el.closest('#desktopBuildings')) {
            hacker.animate(
              [
                { transform: 'translateX(-1.5rem)', opacity: 0.2, filter: 'blur(0.125rem)' },
                { transform: 'translateX(2.5rem)', opacity: 1, filter: 'blur(0)' }
              ],
              { duration: 900, fill: 'forwards', easing: 'cubic-bezier(.22,1,.36,1)' }
            );
          }
          el.animate(
            [
              { boxShadow: '0 0 1rem rgba(255,59,92,0.1)' },
              { boxShadow: '0 0 2rem rgba(255,59,92,0.4)' },
              { boxShadow: '0 0 1rem rgba(255,59,92,0.15)' }
            ],
            { duration: 700, iterations: 3 }
          );
        }
        if (mode === 'success') {
          el.classList.remove('ring-2', 'ring-[#FF3B5C]');
          el.style.boxShadow = '0 0 2rem rgba(0,255,156,0.28), inset 0 0 1rem rgba(0,255,156,0.06)';
          hacker?.classList.add('hidden');
          shield?.classList.remove('hidden');
          shield?.classList.add('flex');
          shield?.animate(
            [
              { transform: 'scale(0.6)', opacity: 0 },
              { transform: 'scale(1.08)', opacity: 1 },
              { transform: 'scale(1)', opacity: 1 }
            ],
            { duration: 600, easing: 'cubic-bezier(.22,1,.36,1)' }
          );
          setTimeout(() => setBuildingState(key, 'idle'), 1300);
        }
        if (mode === 'fail') {
          hacker?.classList.add('hidden');
          el.style.boxShadow = '0 0 2rem rgba(255,59,92,0.32), inset 0 0 1rem rgba(255,59,92,0.08)';
          el.animate(
            [
              { transform: 'translateX(0)' },
              { transform: 'translateX(-0.25rem)' },
              { transform: 'translateX(0.25rem)' },
              { transform: 'translateX(0)' }
            ],
            { duration: 260, iterations: 3 }
          );
          setTimeout(() => setBuildingState(key, 'idle'), 1200);
        }
      });
    }

    function hexToRgba(hex, alpha) {
      const res = hex.replace('#','');
      const bigint = parseInt(res, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function randomBuilding() {
      const keys = Object.keys(buildingGroups);
      return keys[Math.floor(Math.random() * keys.length)];
    }

    function openChallenge(buildingKey) {
      if (!state.playing || state.attackOpen) return;
      state.attackOpen = true;
      state.currentBuilding = buildingKey;
      state.challengeAnswered = false;

      const lvl = levels[state.level];
      challengeLevel.textContent = `Level ${state.level + 1} Challenge`;
      challengeTitle.textContent = lvl.challenge.title;
      challengePrompt.textContent = lvl.challenge.prompt;
      feedback.textContent = 'Choose the safest response.';
      feedback.className = 'text-sm text-[#E6E9F2]/60';
      closeChallenge.classList.add('hidden');
      optionsContainer.innerHTML = '';

      lvl.challenge.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = 'optionBtn rounded-[10px] border border-white/10 bg-white/[0.04] px-4 py-4 text-left text-sm sm:text-base text-[#E6E9F2] transition duration-200 hover:scale-[1.01] hover:border-[#00D9FF]/40 hover:bg-[#00D9FF]/[0.06]';
        btn.textContent = option;
        btn.addEventListener('click', () => answerChallenge(idx, btn));
        optionsContainer.appendChild(btn);
      });

      challengeModal.classList.remove('hidden');
      challengeModal.classList.add('flex');
    }

    function answerChallenge(index, clickedBtn) {
      if (state.challengeAnswered) return;
      state.challengeAnswered = true;
      const lvl = levels[state.level];
      const buttons = [...document.querySelectorAll('.optionBtn')];
      buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === lvl.challenge.correct) {
          btn.classList.add('border-[#00FF9C]/40', 'bg-[#00FF9C]/10');
        }
      });

      if (index === lvl.challenge.correct) {
        clickedBtn.classList.add('border-[#00FF9C]/40', 'bg-[#00FF9C]/10');
        state.score += 100;
        state.security = Math.min(100, state.security + 6);
        feedback.textContent = lvl.challenge.success;
        feedback.className = 'text-sm text-[#B4FFD9]';
        setBuildingState(state.currentBuilding, 'success');
        logEvent(`${formatBuilding(state.currentBuilding)} defended successfully. ${levels[state.level].name} lesson applied.`, 'success');
      } else {
        clickedBtn.classList.add('border-[#FF3B5C]/40', 'bg-[#FF3B5C]/10');
        state.score = Math.max(0, state.score - 25);
        state.security = Math.max(0, state.security - 14);
        feedback.textContent = lvl.challenge.fail;
        feedback.className = 'text-sm text-[#FFB2BF]';
        setBuildingState(state.currentBuilding, 'fail');
        logEvent(`${formatBuilding(state.currentBuilding)} breached warning. Security weakened by poor response.`, 'danger');
      }

      updateUI();
      closeChallenge.classList.remove('hidden');
    }

    function formatBuilding(key) {
      return {
        email: 'Email account',
        bank: 'Bank account',
        social: 'Social media account',
        shopping: 'Online shopping account',
        cloud: 'Cloud storage'
      }[key] || 'Building';
    }

    function nextLevel() {
      state.level += 1;
      if (state.level >= levels.length) {
        endGame(true);
        return;
      }
      state.timer = levels[state.level].timer;
      updateUI();
      logEvent(`Level ${state.level + 1} started: ${levels[state.level].name}. Hacker speed increased.`, 'info');
      restartAttackLoop();
    }

    function restartAttackLoop() {
      clearInterval(state.attackInterval);
      const interval = Math.max(2400, 5200 - state.level * 650);
      state.attackInterval = setInterval(() => {
        if (!state.attackOpen && state.playing) triggerAttack();
      }, interval);
    }

    function triggerAttack() {
      const key = randomBuilding();
      setBuildingState(key, 'attack');
      logEvent(`Attack incoming on ${formatBuilding(key)}. Respond immediately.`, 'danger');
      setTimeout(() => {
        if (!state.attackOpen && state.playing) openChallenge(key);
      }, 900);
    }

    function startGame() {
      clearInterval(state.tickInterval);
      clearInterval(state.attackInterval);
      state.score = 0;
      state.security = 100;
      state.level = 0;
      state.timer = levels[0].timer;
      state.playing = true;
      state.attackOpen = false;
      state.currentBuilding = null;
      state.challengeAnswered = false;
      endScreen.classList.add('hidden');
      endScreen.classList.remove('flex');
      Object.keys(buildingGroups).forEach(key => setBuildingState(key, 'idle'));
      eventLog.innerHTML = '';
      logEvent('Mission started. Monitor incoming attacks and apply the strongest authentication practices.', 'info');
      updateUI();
      restartAttackLoop();

      state.tickInterval = setInterval(() => {
        if (!state.playing || state.attackOpen) return;
        state.timer -= 1;
        if (state.timer <= 0) {
          nextLevel();
        }
        if (state.security <= 0) {
          endGame(false);
        }
        updateUI();
      }, 1000);
    }

    function endGame(won) {
      state.playing = false;
      clearInterval(state.tickInterval);
      clearInterval(state.attackInterval);
      challengeModal.classList.add('hidden');
      challengeModal.classList.remove('flex');

      if (won) {
        finalScore.textContent = state.score;
        endScreen.classList.remove('hidden');
        endScreen.classList.add('flex');
      } else {
        finalScore.textContent = state.score;
        document.querySelector('#endScreen h2').textContent = 'Cyber City was compromised';
        document.querySelector('#endScreen p.mt-4').textContent = 'The hacker wave overwhelmed your defenses. Review the tips below, then restart the mission and try again.';
        endScreen.classList.remove('hidden');
        endScreen.classList.add('flex');
      }
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', () => {
      document.querySelector('#endScreen h2').textContent = 'Congratulations! You have secured Cyber City.';
      document.querySelector('#endScreen p.mt-4').textContent = 'Your defenses held against escalating attacks. Keep practicing strong authentication habits to protect every digital account.';
      startGame();
    });

    closeChallenge.addEventListener('click', () => {
      challengeModal.classList.add('hidden');
      challengeModal.classList.remove('flex');
      state.attackOpen = false;
      state.currentBuilding = null;
    });

    Object.values(buildingGroups).flat().forEach(el => {
      el.addEventListener('click', () => {
        if (!state.playing) return;
        if (el.classList.contains('ring-[#FF3B5C]') && !state.attackOpen) {
          openChallenge(el.dataset.building);
        }
      });

      el.addEventListener('mouseenter', () => {
        if (el.classList.contains('ring-[#FF3B5C]')) return;
        el.style.boxShadow = `0 0 2rem ${hexToRgba(el.dataset.glow, 0.22)}`;
      });

      el.addEventListener('mouseleave', () => {
        if (el.classList.contains('ring-[#FF3B5C]')) return;
        el.style.boxShadow = `0 0 1.5rem ${hexToRgba(el.dataset.glow, 0.16)}`;
      });
    });

    updateUI();

    setInterval(() => {
      if (!state.playing) return;
      Object.values(buildingGroups).flat().forEach((el, idx) => {
        if (el.classList.contains('ring-[#FF3B5C]')) return;
        const strength = 0.08 + (idx % 3) * 0.03;
        el.animate(
          [
            { filter: 'brightness(1)', transform: 'translateY(0)' },
            { filter: 'brightness(1.08)', transform: 'translateY(-0.08rem)' },
            { filter: 'brightness(1)', transform: 'translateY(0)' }
          ],
          { duration: 2200 + idx * 180, easing: 'ease-in-out' }
        );
      });
    }, 2600);
  
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
      
<div className="relative min-h-screen overflow-hidden">
<div className="pointer-events-none absolute inset-0 opacity-40" style="background-image:
      linear-gradient(rgba(0,217,255,0.05) 0.0625rem, transparent 0.0625rem),
      linear-gradient(90deg, rgba(0,217,255,0.05) 0.0625rem, transparent 0.0625rem);
      background-size: 2rem 2rem;"></div>
<header className="sticky top-0 z-40 h-[70px] bg-[#111827]/95 backdrop-blur-xl border-b-2 border-[#00D9FF]">
<div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
<div className="min-w-0">
<h1 className="truncate text-base sm:text-lg md:text-xl font-semibold tracking-tight text-[#E6E9F2]" style={{fontFamily: '\'Orbitron\', sans-serif', textShadow: '0 0 1rem rgba(0,217,255,0.25)'}}>
            CYBER CITY DEFENDER
          </h1>
</div>
<div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm">
<div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<div className="text-[#E6E9F2]/60">Score</div>
<div className="font-medium text-[#00FF9C]" id="score">0</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 min-w-[8rem]">
<div className="text-[#E6E9F2]/60">Security</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-[#7A5CFF] to-[#00D9FF]" id="securityBar" style={{width: '100%', boxShadow: '0 0 1rem rgba(0,217,255,0.35)'}}></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<div className="text-[#E6E9F2]/60">Timer</div>
<div className="font-medium text-[#00D9FF]" id="timer">45</div>
</div>
</div>
</div>
</header>
<main className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
<section className="mb-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 shadow-2xl" style={{boxShadow: 'inset 0 0 0.5rem rgba(255, 255, 255, 0.02), 0 0 2rem rgba(0,0,0,0.25)'}}>
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-[#00D9FF]/80">Mission Status</p>
<h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Orbitron\', sans-serif'}}>
                Defend the cyber skyline
              </h2>
<p className="mt-2 max-w-2xl text-sm sm:text-base text-[#E6E9F2]/70">
                Hackers are targeting key accounts across the city. Answer security challenges to strengthen defenses, stop intrusions, and secure every district.
              </p>
</div>
<div className="flex items-center gap-3">
<div className="rounded-2xl border border-[#00D9FF]/20 bg-[#00D9FF]/10 px-4 py-3">
<div className="text-xs text-[#E6E9F2]/60">Level</div>
<div className="text-sm font-medium text-[#00D9FF]" id="levelLabel">1 / 5 · Password Strength</div>
</div>
<button className="rounded-[10px] px-4 py-3 text-sm font-medium text-white transition duration-200 hover:scale-[1.03] active:scale-[0.98]" id="startBtn" style={{background: 'linear-gradient(135deg, #7A5CFF, #00D9FF)', boxShadow: '0 0 1.25rem rgba(0,217,255,0.22)'}}>
                Start Mission
              </button>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-[#7A5CFF]/80">Threat Feed</p>
<h3 className="mt-2 text-lg sm:text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Orbitron\', sans-serif'}}>Live Briefing</h3>
</div>
<div className="rounded-full border border-[#FF3B5C]/30 bg-[#FF3B5C]/10 px-3 py-1 text-xs text-[#FF8DA0]">
              Active
            </div>
</div>
<div className="mt-4 space-y-3 text-sm text-[#E6E9F2]/75" id="eventLog">
<div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">Awaiting command. Press <span className="text-[#00D9FF]">Start Mission</span> to begin defending the city.</div>
</div>
</div>
</section>
<section className="grid gap-6 lg:grid-cols-[1fr_20rem]">
<div className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-4 sm:p-6 overflow-hidden">
<div className="mb-4 flex items-center justify-between">
<div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Orbitron\', sans-serif'}}>Cyber City Map</h3>
<p className="text-sm text-[#E6E9F2]/60">Each building is a critical account. Protect all five to complete the mission.</p>
</div>
<div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#E6E9F2]/70">
<span className="inline-block h-2 w-2 rounded-full bg-[#00FF9C]" style={{boxShadow: '0 0 0.75rem rgba(0,255,156,0.8)'}}></span>
              Stable network
            </div>
</div>
<div className="hidden md:block relative h-[34rem] rounded-[1.5rem] border border-white/10 bg-[#0c1426]/80 overflow-hidden" style="background:
            radial-gradient(circle at 50% 100%, rgba(0,217,255,0.08), transparent 35%),
            linear-gradient(180deg, rgba(17,24,39,0.9) 0%, rgba(11,15,26,1) 100%);">
<div className="absolute inset-x-0 bottom-0 h-24" style="background:
              linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.6) 100%);"></div>
<div className="absolute inset-x-0 bottom-10 h-px bg-gradient-to-r from-transparent via-[#00D9FF]/30 to-transparent"></div>
<div className="absolute inset-0" id="desktopBuildings">
<button className="building absolute left-[6%] bottom-[16%] w-28 lg:w-32 rounded-t-2xl border border-[#00D9FF]/30 bg-[#11213f]/70 p-3 text-left transition duration-200 hover:scale-[1.02]" data-building="email" data-glow="#00D9FF" style={{height: '14rem', boxShadow: '0 0 1.5rem rgba(0,217,255,0.15)'}}>
<div className="absolute inset-x-2 top-3 grid grid-cols-3 gap-1">
<span className="h-3 rounded bg-[#00D9FF]/50"></span><span className="h-3 rounded bg-[#00D9FF]/30"></span><span className="h-3 rounded bg-[#00D9FF]/45"></span>
<span className="h-3 rounded bg-[#00D9FF]/25"></span><span className="h-3 rounded bg-[#00D9FF]/55"></span><span className="h-3 rounded bg-[#00D9FF]/35"></span>
<span className="h-3 rounded bg-[#00D9FF]/45"></span><span className="h-3 rounded bg-[#00D9FF]/20"></span><span className="h-3 rounded bg-[#00D9FF]/50"></span>
</div>
<div className="absolute bottom-4 left-3 right-3">
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:letter-linear" style={{color: '#00D9FF'}} width="18"></iconify-icon>
<span className="text-xs font-medium text-white">Email Account</span>
</div>
<div className="mt-2 text-xs text-[#E6E9F2]/60">Blue sector</div>
</div>
<div className="shield absolute -top-3 right-2 hidden h-9 w-9 items-center justify-center rounded-full bg-[#00FF9C]/15 border border-[#00FF9C]/30">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#00FF9C'}} width="18"></iconify-icon>
</div>
<div className="hacker pointer-events-none absolute -left-10 bottom-3 hidden">
<div className="rounded-xl border border-[#FF3B5C]/30 bg-[#FF3B5C]/10 p-2 backdrop-blur-sm" style={{boxShadow: '0 0 1rem rgba(255,59,92,0.2)'}}>
<iconify-icon height="22" icon="solar:ghost-linear" style={{color: '#FF3B5C'}} width="22"></iconify-icon>
</div>
</div>
</button>
<button className="building absolute left-[25%] bottom-[16%] w-32 lg:w-36 rounded-t-2xl border border-[#00FF9C]/30 bg-[#122b22]/70 p-3 text-left transition duration-200 hover:scale-[1.02]" data-building="bank" data-glow="#00FF9C" style={{height: '18rem', boxShadow: '0 0 1.5rem rgba(0,255,156,0.15)'}}>
<div className="absolute inset-x-2 top-3 grid grid-cols-4 gap-1">
<span className="h-3 rounded bg-[#00FF9C]/30"></span><span className="h-3 rounded bg-[#00FF9C]/45"></span><span className="h-3 rounded bg-[#00FF9C]/30"></span><span className="h-3 rounded bg-[#00FF9C]/5"></span>
<span className="h-3 rounded bg-[#00FF9C]/4"></span><span className="h-3 rounded bg-[#00FF9C]/45"></span><span className="h-3 rounded bg-[#00FF9C]/35"></span><span className="h-3 rounded bg-[#00FF9C]/25"></span>
<span className="h-3 rounded bg-[#00FF9C]/20"></span><span className="h-3 rounded bg-[#00FF9C]/45"></span><span className="h-3 rounded bg-[#00FF9C]/15"></span><span className="h-3 rounded bg-[#00FF9C]/35"></span>
</div>
<div className="absolute bottom-4 left-3 right-3">
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:card-2-linear" style={{color: '#00FF9C'}} width="18"></iconify-icon>
<span className="text-xs font-medium text-white">Bank Account</span>
</div>
<div className="mt-2 text-xs text-[#E6E9F2]/60">Vault district</div>
</div>
<div className="shield absolute -top-3 right-2 hidden h-9 w-9 items-center justify-center rounded-full bg-[#00FF9C]/15 border border-[#00FF9C]/30">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#00FF9C'}} width="18"></iconify-icon>
</div>
<div className="hacker pointer-events-none absolute -left-10 bottom-3 hidden">
<div className="rounded-xl border border-[#FF3B5C]/30 bg-[#FF3B5C]/10 p-2 backdrop-blur-sm" style={{boxShadow: '0 0 1rem rgba(255,59,92,0.2)'}}>
<iconify-icon height="22" icon="solar:ghost-linear" style={{color: '#FF3B5C'}} width="22"></iconify-icon>
</div>
</div>
</button>
<button className="building absolute left-[47%] bottom-[16%] w-28 lg:w-32 rounded-t-2xl border border-[#7A5CFF]/30 bg-[#1f1b40]/70 p-3 text-left transition duration-200 hover:scale-[1.02]" data-building="social" data-glow="#7A5CFF" style={{height: '12.5rem', boxShadow: '0 0 1.5rem rgba(122,92,255,0.18)'}}>
<div className="absolute inset-x-2 top-3 grid grid-cols-3 gap-1">
<span className="h-3 rounded bg-[#7A5CFF]/45"></span><span className="h-3 rounded bg-[#7A5CFF]/25"></span><span className="h-3 rounded bg-[#7A5CFF]/35"></span>
<span className="h-3 rounded bg-[#7A5CFF]/22"></span><span className="h-3 rounded bg-[#7A5CFF]/45"></span><span className="h-3 rounded bg-[#7A5CFF]/20"></span>
</div>
<div className="absolute bottom-4 left-3 right-3">
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:users-group-rounded-linear" style={{color: '#7A5CFF'}} width="18"></iconify-icon>
<span className="text-xs font-medium text-white">Social Media</span>
</div>
<div className="mt-2 text-xs text-[#E6E9F2]/60">Purple zone</div>
</div>
<div className="shield absolute -top-3 right-2 hidden h-9 w-9 items-center justify-center rounded-full bg-[#00FF9C]/15 border border-[#00FF9C]/30">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#00FF9C'}} width="18"></iconify-icon>
</div>
<div className="hacker pointer-events-none absolute -left-10 bottom-3 hidden">
<div className="rounded-xl border border-[#FF3B5C]/30 bg-[#FF3B5C]/10 p-2 backdrop-blur-sm" style={{boxShadow: '0 0 1rem rgba(255,59,92,0.2)'}}>
<iconify-icon height="22" icon="solar:ghost-linear" style={{color: '#FF3B5C'}} width="22"></iconify-icon>
</div>
</div>
</button>
<button className="building absolute left-[65%] bottom-[16%] w-28 lg:w-32 rounded-t-2xl border border-[#00D9FF]/20 bg-[#172035]/70 p-3 text-left transition duration-200 hover:scale-[1.02]" data-building="shopping" data-glow="#00D9FF" style={{height: '15.5rem', boxShadow: '0 0 1.5rem rgba(0,217,255,0.12)'}}>
<div className="absolute inset-x-2 top-3 grid grid-cols-3 gap-1">
<span className="h-3 rounded bg-[#00D9FF]/22"></span><span className="h-3 rounded bg-[#00D9FF]/40"></span><span className="h-3 rounded bg-[#00D9FF]/16"></span>
<span className="h-3 rounded bg-[#00D9FF]/36"></span><span className="h-3 rounded bg-[#00D9FF]/26"></span><span className="h-3 rounded bg-[#00D9FF]/42"></span>
</div>
<div className="absolute bottom-4 left-3 right-3">
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:bag-4-linear" style={{color: '#00D9FF'}} width="18"></iconify-icon>
<span className="text-xs font-medium text-white">Online Shopping</span>
</div>
<div className="mt-2 text-xs text-[#E6E9F2]/60">Commerce hub</div>
</div>
<div className="shield absolute -top-3 right-2 hidden h-9 w-9 items-center justify-center rounded-full bg-[#00FF9C]/15 border border-[#00FF9C]/30">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#00FF9C'}} width="18"></iconify-icon>
</div>
<div className="hacker pointer-events-none absolute -left-10 bottom-3 hidden">
<div className="rounded-xl border border-[#FF3B5C]/30 bg-[#FF3B5C]/10 p-2 backdrop-blur-sm" style={{boxShadow: '0 0 1rem rgba(255,59,92,0.2)'}}>
<iconify-icon height="22" icon="solar:ghost-linear" style={{color: '#FF3B5C'}} width="22"></iconify-icon>
</div>
</div>
</button>
<button className="building absolute left-[82%] bottom-[16%] w-24 lg:w-28 -translate-x-1/2 rounded-t-2xl border border-[#7A5CFF]/25 bg-[#181d3c]/70 p-3 text-left transition duration-200 hover:scale-[1.02]" data-building="cloud" data-glow="#7A5CFF" style={{height: '10.5rem', boxShadow: '0 0 1.5rem rgba(122,92,255,0.16)'}}>
<div className="absolute inset-x-2 top-3 grid grid-cols-2 gap-1">
<span className="h-3 rounded bg-[#7A5CFF]/35"></span><span className="h-3 rounded bg-[#7A5CFF]/15"></span>
<span className="h-3 rounded bg-[#7A5CFF]/25"></span><span className="h-3 rounded bg-[#7A5CFF]/38"></span>
</div>
<div className="absolute bottom-4 left-3 right-3">
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:cloud-linear" style={{color: '#7A5CFF'}} width="18"></iconify-icon>
<span className="text-xs font-medium text-white">Cloud Storage</span>
</div>
<div className="mt-2 text-xs text-[#E6E9F2]/60">Archive node</div>
</div>
<div className="shield absolute -top-3 right-2 hidden h-9 w-9 items-center justify-center rounded-full bg-[#00FF9C]/15 border border-[#00FF9C]/30">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#00FF9C'}} width="18"></iconify-icon>
</div>
<div className="hacker pointer-events-none absolute -left-10 bottom-3 hidden">
<div className="rounded-xl border border-[#FF3B5C]/30 bg-[#FF3B5C]/10 p-2 backdrop-blur-sm" style={{boxShadow: '0 0 1rem rgba(255,59,92,0.2)'}}>
<iconify-icon height="22" icon="solar:ghost-linear" style={{color: '#FF3B5C'}} width="22"></iconify-icon>
</div>
</div>
</button>
</div>
<div className="absolute inset-x-0 bottom-4 flex justify-center">
<div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-[#E6E9F2]/65">
                Tap or click attacked buildings to respond
              </div>
</div>
</div>
<div className="md:hidden -mx-2 flex snap-x gap-4 overflow-x-auto px-2 pb-2" id="mobileBuildings">
<button className="building shrink-0 snap-start w-[78vw] rounded-[1.5rem] border border-[#00D9FF]/25 bg-[#11213f]/75 p-5 text-left" data-building="email" data-glow="#00D9FF" style={{boxShadow: '0 0 1.5rem rgba(0,217,255,0.15)'}}>
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-2">
<iconify-icon height="20" icon="solar:letter-linear" style={{color: '#00D9FF'}} width="20"></iconify-icon>
<h4 className="text-sm font-medium text-white">Email Account</h4>
</div>
<p className="mt-2 text-xs text-[#E6E9F2]/60">Blue sector</p>
</div>
<div className="shield hidden h-10 w-10 items-center justify-center rounded-full bg-[#00FF9C]/15 border border-[#00FF9C]/30">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#00FF9C'}} width="18"></iconify-icon>
</div>
</div>
<div className="hacker mt-5 hidden rounded-xl border border-[#FF3B5C]/30 bg-[#FF3B5C]/10 p-2 w-fit">
<iconify-icon height="22" icon="solar:ghost-linear" style={{color: '#FF3B5C'}} width="22"></iconify-icon>
</div>
</button>
<button className="building shrink-0 snap-start w-[78vw] rounded-[1.5rem] border border-[#00FF9C]/25 bg-[#122b22]/75 p-5 text-left" data-building="bank" data-glow="#00FF9C" style={{boxShadow: '0 0 1.5rem rgba(0,255,156,0.15)'}}>
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-2">
<iconify-icon height="20" icon="solar:card-2-linear" style={{color: '#00FF9C'}} width="20"></iconify-icon>
<h4 className="text-sm font-medium text-white">Bank Account</h4>
</div>
<p className="mt-2 text-xs text-[#E6E9F2]/60">Vault district</p>
</div>
<div className="shield hidden h-10 w-10 items-center justify-center rounded-full bg-[#00FF9C]/15 border border-[#00FF9C]/30">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#00FF9C'}} width="18"></iconify-icon>
</div>
</div>
<div className="hacker mt-5 hidden rounded-xl border border-[#FF3B5C]/30 bg-[#FF3B5C]/10 p-2 w-fit">
<iconify-icon height="22" icon="solar:ghost-linear" style={{color: '#FF3B5C'}} width="22"></iconify-icon>
</div>
</button>
<button className="building shrink-0 snap-start w-[78vw] rounded-[1.5rem] border border-[#7A5CFF]/25 bg-[#1f1b40]/75 p-5 text-left" data-building="social" data-glow="#7A5CFF" style={{boxShadow: '0 0 1.5rem rgba(122,92,255,0.18)'}}>
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-2">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" style={{color: '#7A5CFF'}} width="20"></iconify-icon>
<h4 className="text-sm font-medium text-white">Social Media</h4>
</div>
<p className="mt-2 text-xs text-[#E6E9F2]/60">Purple zone</p>
</div>
<div className="shield hidden h-10 w-10 items-center justify-center rounded-full bg-[#00FF9C]/15 border border-[#00FF9C]/30">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#00FF9C'}} width="18"></iconify-icon>
</div>
</div>
<div className="hacker mt-5 hidden rounded-xl border border-[#FF3B5C]/30 bg-[#FF3B5C]/10 p-2 w-fit">
<iconify-icon height="22" icon="solar:ghost-linear" style={{color: '#FF3B5C'}} width="22"></iconify-icon>
</div>
</button>
<button className="building shrink-0 snap-start w-[78vw] rounded-[1.5rem] border border-[#00D9FF]/20 bg-[#172035]/75 p-5 text-left" data-building="shopping" data-glow="#00D9FF" style={{boxShadow: '0 0 1.5rem rgba(0,217,255,0.12)'}}>
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-2">
<iconify-icon height="20" icon="solar:bag-4-linear" style={{color: '#00D9FF'}} width="20"></iconify-icon>
<h4 className="text-sm font-medium text-white">Online Shopping</h4>
</div>
<p className="mt-2 text-xs text-[#E6E9F2]/60">Commerce hub</p>
</div>
<div className="shield hidden h-10 w-10 items-center justify-center rounded-full bg-[#00FF9C]/15 border border-[#00FF9C]/30">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#00FF9C'}} width="18"></iconify-icon>
</div>
</div>
<div className="hacker mt-5 hidden rounded-xl border border-[#FF3B5C]/30 bg-[#FF3B5C]/10 p-2 w-fit">
<iconify-icon height="22" icon="solar:ghost-linear" style={{color: '#FF3B5C'}} width="22"></iconify-icon>
</div>
</button>
<button className="building shrink-0 snap-start w-[78vw] rounded-[1.5rem] border border-[#7A5CFF]/20 bg-[#181d3c]/75 p-5 text-left" data-building="cloud" data-glow="#7A5CFF" style={{boxShadow: '0 0 1.5rem rgba(122,92,255,0.16)'}}>
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-2">
<iconify-icon height="20" icon="solar:cloud-linear" style={{color: '#7A5CFF'}} width="20"></iconify-icon>
<h4 className="text-sm font-medium text-white">Cloud Storage</h4>
</div>
<p className="mt-2 text-xs text-[#E6E9F2]/60">Archive node</p>
</div>
<div className="shield hidden h-10 w-10 items-center justify-center rounded-full bg-[#00FF9C]/15 border border-[#00FF9C]/30">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#00FF9C'}} width="18"></iconify-icon>
</div>
</div>
<div className="hacker mt-5 hidden rounded-xl border border-[#FF3B5C]/30 bg-[#FF3B5C]/10 p-2 w-fit">
<iconify-icon height="22" icon="solar:ghost-linear" style={{color: '#FF3B5C'}} width="22"></iconify-icon>
</div>
</button>
</div>
</div>
<aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 sm:p-6">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-[#00D9FF]/80">Training Objectives</p>
<h3 className="mt-2 text-lg sm:text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Orbitron\', sans-serif'}}>Defense Playbook</h3>
</div>
<div className="mt-5 space-y-3">
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#00D9FF]/10 p-2 border border-[#00D9FF]/20">
<iconify-icon height="18" icon="solar:key-minimalistic-linear" style={{color: '#00D9FF'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Strong passwords</div>
<div className="text-xs text-[#E6E9F2]/60">Use long, unique, random credentials</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#7A5CFF]/10 p-2 border border-[#7A5CFF]/20">
<iconify-icon height="18" icon="solar:lock-password-linear" style={{color: '#7A5CFF'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Avoid reuse</div>
<div className="text-xs text-[#E6E9F2]/60">One breached password can expose many accounts</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#FF3B5C]/10 p-2 border border-[#FF3B5C]/20">
<iconify-icon height="18" icon="solar:danger-triangle-linear" style={{color: '#FF3B5C'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Spot phishing</div>
<div className="text-xs text-[#E6E9F2]/60">Report suspicious messages and links</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-[#00FF9C]/10 p-2 border border-[#00FF9C]/20">
<iconify-icon height="18" icon="solar:shield-user-linear" style={{color: '#00FF9C'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Enable 2FA</div>
<div className="text-xs text-[#E6E9F2]/60">A second step blocks many attacks</div>
</div>
</div>
</div>
</div>
<div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4">
<div className="text-xs uppercase tracking-[0.2em] text-[#E6E9F2]/50">Threat Pressure</div>
<div className="mt-2 text-sm font-medium text-[#FF8DA0]" id="threatStatus">Low — city perimeter holding</div>
</div>
</aside>
</section>
</main>
<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="challengeModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
<div className="relative w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#0f1728]/95 p-5 sm:p-7 shadow-2xl" style={{boxShadow: '0 0 2.5rem rgba(0, 0, 0, 0.45), 0 0 2rem rgba(0,217,255,0.08)'}}>
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-[#00D9FF]/80" id="challengeLevel">Level 1 Challenge</p>
<h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-white" id="challengeTitle" style={{fontFamily: '\'Orbitron\', sans-serif'}}>Incoming Threat</h3>
<p className="mt-3 text-sm sm:text-base text-[#E6E9F2]/75" id="challengePrompt"></p>
</div>
<div className="rounded-2xl border border-[#FF3B5C]/20 bg-[#FF3B5C]/10 px-3 py-2 text-xs text-[#FF8DA0]">
            Attack detected
          </div>
</div>
<div className="mt-6 grid gap-3" id="optionsContainer"></div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-sm text-[#E6E9F2]/60" id="feedback">Choose the safest response.</div>
<button className="hidden rounded-[10px] px-4 py-3 text-sm font-medium text-white transition duration-200 hover:scale-[1.03]" id="closeChallenge" style={{background: 'linear-gradient(135deg, #7A5CFF, #00D9FF)', boxShadow: '0 0 1.25rem rgba(0,217,255,0.22)'}}>
            Continue
          </button>
</div>
</div>
</div>
<div className="fixed inset-0 z-[60] hidden items-center justify-center p-4" id="endScreen">
<div className="absolute inset-0 bg-[#050812]/90 backdrop-blur-lg"></div>
<div className="relative w-full max-w-3xl rounded-[2rem] border border-[#00D9FF]/20 bg-[#0d1527]/95 p-6 sm:p-8 text-center" style={{boxShadow: '0 0 3rem rgba(0,217,255,0.08)'}}>
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#00FF9C]/30 bg-[#00FF9C]/10">
<iconify-icon height="30" icon="solar:shield-check-linear" style={{color: '#00FF9C'}} width="30"></iconify-icon>
</div>
<p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#00D9FF]/80">Mission Complete</p>
<h2 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Orbitron\', sans-serif'}}>
          Congratulations! You have secured Cyber City.
        </h2>
<p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-[#E6E9F2]/70">
          Your defenses held against escalating attacks. Keep practicing strong authentication habits to protect every digital account.
        </p>
<div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-xs text-[#E6E9F2]/55">Final Score</div>
<div className="mt-1 text-xl font-medium text-[#00FF9C]" id="finalScore">0</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-xs text-[#E6E9F2]/55">Levels Completed</div>
<div className="mt-1 text-xl font-medium text-[#00D9FF]">5 / 5</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-xs text-[#E6E9F2]/55">Security Status</div>
<div className="mt-1 text-xl font-medium text-[#7A5CFF]">Fortified</div>
</div>
</div>
<div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-left">
<h3 className="text-lg font-medium text-white">Cybersecurity tips</h3>
<ul className="mt-4 space-y-3 text-sm text-[#E6E9F2]/75">
<li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#00D9FF]"></span><span>Use a password manager to create and store unique passwords.</span></li>
<li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#00FF9C]"></span><span>Enable two-factor authentication on email, banking, and cloud accounts.</span></li>
<li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#7A5CFF]"></span><span>Never reuse passwords across important services.</span></li>
<li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#FF3B5C]"></span><span>Pause before clicking links or downloading files from unexpected messages.</span></li>
</ul>
</div>
<button className="mt-6 rounded-[10px] px-5 py-3 text-sm font-medium text-white transition duration-200 hover:scale-[1.03]" id="restartBtn" style={{background: 'linear-gradient(135deg, #7A5CFF, #00D9FF)', boxShadow: '0 0 1.25rem rgba(0,217,255,0.22)'}}>
          Restart Mission
        </button>
</div>
</div>
</div>


    </>
  );
}
