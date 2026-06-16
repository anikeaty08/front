import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // 1. Background Hearts Logic
    const heartsContainer = document.getElementById('hearts-container');
    const heartColors = ['text-rose-600', 'text-rose-800', 'text-red-700', 'text-red-900'];
    
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '<iconify-icon icon="solar:heart-bold" width="100%"></iconify-icon>';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 8 + 7) + 's';
        heart.style.animationDelay = (Math.random() * 10) + 's';
        heart.className += ` ${heartColors[Math.floor(Math.random() * heartColors.length)]}`;
        const size = (Math.random() * 30 + 30) + 'px';
        heart.style.width = size;
        heart.style.height = size;
        heartsContainer.appendChild(heart);
    }

    // 2. Confetti Function
    function fireConfetti() {
        const duration = 3 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#e11d48', '#fb7185', '#ffffff']
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#e11d48', '#fb7185', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    // 3. View 1 Logic (Checkbox Animations)
    window.onload = () => {
        const checks = ['check1', 'check2', 'check3'];
        checks.forEach((id, index) => {
            setTimeout(() => {
                const el = document.getElementById(id);
                if(el) el.checked = true;
            }, 600 * (index + 1));
        });
        setTimeout(() => {
            const btn = document.getElementById('continue-btn-wrapper');
            if(btn) btn.style.opacity = '1';
        }, 2500);
    };

    // 4. Quiz Logic
    const questions = [
        {
            q: 'What is my absolute favorite "meal" in the entire world?',
            options: ['A plate of spicy Biryani', 'A tub of chocolate ice cream', 'You (In your Birthday suit)'],
            correct: 2,
            msg: "Bingo! My heart just skipped a beat."
        },
        {
            q: 'If I could do one "task" for the rest of my life, what would it be?',
            options: ['Sightadichifying you', 'Making out whenever possible', 'Smelling you', 'All of the above'],
            correct: 3,
            msg: "You know me too well..."
        },
        {
            q: 'What’s the quickest way to get "lil dude" up?',
            options: ['Hearing your voice', 'Whiff of your perfume', 'Just the sight of you', 'All of the above (24/7 marathon)'],
            correct: 3,
            msg: "Correct! It's a permanent state."
        }
    ];

    let currentQ = 0;
    let progress = 0;

    function loadQuestion() {
        const q = questions[currentQ];
        document.getElementById('question-text').innerText = q.q;
        const grid = document.getElementById('options-grid');
        grid.innerHTML = '';
        
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = "w-full p-3 text-xs md:text-sm bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-600 font-medium rounded-xl text-left transition-all active:scale-95";
            btn.innerText = opt;
            btn.onclick = () => handleAnswer(idx, btn);
            grid.appendChild(btn);
        });
    }

    function handleAnswer(idx, btn) {
        const q = questions[currentQ];
        if (idx === q.correct) {
            btn.className = "w-full p-3 text-xs md:text-sm bg-rose-50 border border-rose-200 text-rose-600 font-bold rounded-xl text-left transition-all shadow-sm";
            progress += 34;
            if(progress > 100) progress = 100;
            
            document.getElementById('heart-fill-container').style.height = progress + '%';
            document.getElementById('meter-text').innerText = Math.round(progress) + '%';
            document.getElementById('meter-text').style.opacity = '1';

            const toast = document.getElementById('quiz-toast');
            document.getElementById('toast-msg').innerText = q.msg;
            toast.style.opacity = '1';

            setTimeout(() => {
                toast.style.opacity = '0';
                currentQ++;
                if (currentQ < questions.length) {
                    loadQuestion();
                } else {
                    finishQuiz();
                }
            }, 1500);
        } else {
            btn.classList.add('shake', 'bg-red-50', 'text-red-500', 'border-red-200');
            setTimeout(() => btn.classList.remove('shake'), 500);
        }
    }

    function finishQuiz() {
        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('unlock-btn').classList.remove('hidden');
    }

    // 5. Navigation & Runaway Button
    const noBtn = document.getElementById('no-btn');
    const view2 = document.getElementById('view-2');

    function nextStep(currentId, nextId) {
        const current = document.getElementById(currentId);
        const next = document.getElementById(nextId);
        
        if(currentId === 'view-2' && nextId === 'view-3') {
            fireConfetti();
        }

        current.style.opacity = '0';
        current.style.transform = 'translateY(-10px) scale(0.95)';
        
        setTimeout(() => {
            current.classList.add('hidden');
            next.classList.remove('hidden');
            next.classList.add('fade-in');
            if (nextId === 'view-quiz' && currentQ === 0) loadQuestion();
        }, 400);
    }

    function moveButton(e) {
        e.preventDefault();
        
        // NO BUTTON MOVEMENT ONLY
        const randomX = (Math.random() - 0.5) * 250;
        const randomY = (Math.random() - 0.5) * 250;
        
        if(noBtn.style.position !== 'absolute') {
            noBtn.style.position = 'absolute';
            noBtn.style.width = '120px';
        }
        noBtn.style.left = '50%';
        noBtn.style.bottom = '4rem';
        noBtn.style.transform = `translate(calc(-50% + ${randomX}px), ${randomY}px)`;
        noBtn.style.zIndex = "100";
    }

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('touchstart', moveButton);

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="hearts-container"></div>

<nav className="w-full flex justify-between items-center p-6 md:p-8 fixed top-0 left-0 z-50 pointer-events-none">
<div className="text-xs font-semibold tracking-tighter uppercase text-zinc-900 flex items-center gap-2 pointer-events-auto">
<div className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></div>
            SooooooshiWoooooshi Bujjuku Bummbooooz Shuuuchuuuumitha
        </div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center p-4 relative z-10 w-full max-w-md">

<div className="w-full bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-rose-900/5 border border-white/50 p-8 fade-in flex flex-col gap-6 relative overflow-hidden" id="view-1">
<div className="flex flex-col gap-2 items-center text-center">
<div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-1 shadow-inner shadow-rose-100">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">System Check</h1>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Analyzing Compatibility</p>
</div>
<div className="space-y-3 pl-2 pr-2">
<label className="custom-checkbox flex items-center gap-4 cursor-default group p-2 hover:bg-zinc-50 rounded-xl transition-colors">
<input className="hidden" disabled="" id="check1" type="checkbox"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-200 flex items-center justify-center transition-all duration-300">
<svg className="hidden w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm text-zinc-600 font-medium">Unmatched beauty</span>
</label>
<label className="custom-checkbox flex items-center gap-4 cursor-default group p-2 hover:bg-zinc-50 rounded-xl transition-colors">
<input className="hidden" disabled="" id="check2" type="checkbox"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-200 flex items-center justify-center transition-all duration-300">
<svg className="hidden w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm text-zinc-600 font-medium">Radiant smile</span>
</label>
<label className="custom-checkbox flex items-center gap-4 cursor-default group p-2 hover:bg-zinc-50 rounded-xl transition-colors">
<input className="hidden" disabled="" id="check3" type="checkbox"/>
<div className="w-5 h-5 rounded-full border-2 border-zinc-200 flex items-center justify-center transition-all duration-300">
<svg className="hidden w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm text-zinc-600 font-medium">Makes me go OOOooooo</span>
</label>
</div>
<div className="pt-2 opacity-0 transition-opacity duration-500" id="continue-btn-wrapper">
<button className="group w-full h-11 bg-zinc-900 hover:bg-rose-600 text-white text-sm font-medium rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-zinc-200" onclick="nextStep('view-1', 'view-quiz')">
                    Verify Identity
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden w-full bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-rose-200/40 border border-white p-6 flex flex-col gap-6 items-center relative transition-all duration-500" id="view-quiz">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[2.5rem] pointer-events-none">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100/50 rounded-full blur-3xl"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-100/50 rounded-full blur-3xl"></div>
</div>

<div className="flex flex-col items-center gap-1 z-10 w-full">
<span className="text-[10px] uppercase tracking-widest text-rose-400 font-bold">Calibration Required</span>
<h2 className="text-xl font-bold text-zinc-900">The Love Meter</h2>
</div>

<div className="relative w-32 h-28 flex items-center justify-center z-10 my-2">

<iconify-icon className="text-zinc-100 absolute inset-0 w-full h-full text-[8rem]" icon="solar:heart-bold"></iconify-icon>

<div className="absolute inset-0 w-full h-full flex items-end justify-center overflow-hidden">

<div className="relative w-full h-0 liquid-fill overflow-hidden flex items-center justify-center" id="heart-fill-container" style={{width: '8rem'}}>
<div className="text-rose-500 absolute bottom-0 left-0 w-full flex justify-center items-end h-[8rem]">
<iconify-icon className="text-[8rem]" icon="solar:heart-bold"></iconify-icon>
</div>
</div>
</div>

<iconify-icon className="text-zinc-300 absolute inset-0 w-full h-full text-[8rem] pointer-events-none" icon="solar:heart-linear"></iconify-icon>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg drop-shadow-md opacity-0 transition-opacity" id="meter-text">0%</div>
</div>

<div className="h-6 text-sm font-semibold text-rose-600 opacity-0 transition-opacity duration-300 flex items-center gap-1" id="quiz-toast">
<iconify-icon icon="solar:star-bold"></iconify-icon> <span id="toast-msg">Correct!</span>
</div>

<div className="w-full z-10 flex flex-col gap-4" id="quiz-container">

<p className="text-center text-sm font-medium text-zinc-700 min-h-[3rem] flex items-center justify-center" id="question-text">
                    Loading question...
                </p>

<div className="flex flex-col gap-2.5 w-full" id="options-grid">

</div>
</div>

<button className="hidden w-full h-12 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-xl animate-bounce shadow-lg shadow-rose-300/50 flex items-center justify-center gap-2 z-20" id="unlock-btn" onclick="nextStep('view-quiz', 'view-2')">
<iconify-icon icon="solar:lock-unlocked-bold"></iconify-icon>
                Enter SushBum
            </button>
</div>

<div className="hidden w-full bg-white/95 backdrop-blur-xl rounded-[3rem] shadow-2xl shadow-rose-200/40 border border-white p-8 z-10 flex flex-col gap-8 text-center relative" id="view-2">
<div className="absolute inset-0 border-[6px] border-rose-50 rounded-[3rem] pointer-events-none"></div>
<div className="w-full flex flex-col items-center gap-4 relative z-10">
<div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center animate-bounce duration-[2000ms]">
<iconify-icon className="text-rose-600" icon="solar:heart-bold" width="40"></iconify-icon>
</div>
<div>
<h2 className="text-3xl font-bold tracking-tight text-zinc-900">Be my Valentine?</h2>
<p className="text-sm text-zinc-500 mt-2 px-4">You know my secrets. Now I need your answer.</p>
</div>
</div>
<div className="flex flex-col gap-3 relative z-10 min-h-[100px] justify-center">
<button className="w-full h-12 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-rose-200 flex items-center justify-center gap-2" onclick="nextStep('view-2', 'view-3')">
<iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
                    Yes, absolutely!
                </button>
<button className="w-full h-12 bg-zinc-100 hover:bg-zinc-200 text-zinc-500 text-sm font-medium rounded-xl transition-all flex items-center justify-center" id="no-btn">
                    No
                </button>
</div>
</div>

<div className="hidden w-full max-w-md z-10" id="view-3">
<div className="bg-white rounded-[2rem] shadow-2xl shadow-zinc-300 border border-zinc-100 overflow-hidden relative">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-transparent rounded-bl-full opacity-50"></div>
</div>
<div className="p-8 flex flex-col items-center text-center relative z-10 gap-6">
<div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center border-4 border-white shadow-xl shadow-green-100">
<iconify-icon icon="solar:confetti-minimalistic-bold" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-bold tracking-tight text-zinc-900">It's a Date!</h3>
<p className="text-sm text-zinc-500 mt-2">I knew you were the one.</p>
</div>
<div className="w-full bg-zinc-50 rounded-2xl p-4 border border-zinc-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-rose-100 p-2 rounded-lg text-rose-600">
<iconify-icon icon="solar:calendar-bold" width="20"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[10px] uppercase tracking-wide text-zinc-400 font-bold">When</div>
<div className="text-sm font-semibold text-zinc-900">Feb 14, 2026</div>
</div>
</div>
<div className="h-8 w-[1px] bg-zinc-200"></div>
<div className="text-right">
<div className="text-[10px] uppercase tracking-wide text-zinc-400 font-bold">Activity</div>
<div className="text-sm font-semibold text-zinc-900">Eating Eachother</div>
</div>
</div>
</div>
<div className="bg-zinc-900 p-4 text-center">
<p className="text-[10px] text-zinc-400 font-medium tracking-widest uppercase">SooooooshiWoooooshi_contract_signed</p>
</div>
</div>
</div>
</main>



    </>
  );
}
