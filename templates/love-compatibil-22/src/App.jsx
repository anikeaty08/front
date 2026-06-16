import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State
        const state = {
            theme: 'dark',
            history: [],
            currentResult: null
        };

        // DOM Elements
        const views = {
            input: document.getElementById('input-view'),
            loading: document.getElementById('loading-view'),
            result: document.getElementById('result-view')
        };

        // Initial Setup
        if(localStorage.getItem('loveHistory')) {
            try { state.history = JSON.parse(localStorage.getItem('loveHistory')); } catch(e) {}
        }

        // Logic
        function calculateLove(e) {
            e.preventDefault();
            const n1 = document.getElementById('name1').value.trim();
            const n2 = document.getElementById('name2').value.trim();
            
            if(!n1 || !n2) return;

            // UI Transition
            views.input.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                views.input.classList.add('hidden');
                views.input.classList.remove('opacity-0', 'scale-95');
                views.loading.classList.remove('hidden');
                startLoadingSimulation(n1, n2);
            }, 500);
        }

        function startLoadingSimulation(n1, n2) {
            const msgs = ["Reading Pheromones...", "Calculating Zodiac...", "Checking Pulse...", "Finalizing Destiny..."];
            const txt = document.getElementById('loading-text');
            let i = 0;
            
            const interval = setInterval(() => {
                txt.innerText = msgs[i % msgs.length];
                i++;
            }, 800);

            setTimeout(() => {
                clearInterval(interval);
                generateResult(n1, n2);
            }, 3000);
        }

        function generateResult(n1, n2) {
            // Algorithm: 70% - 100%
            const combined = (n1 + n2).toLowerCase().replace(/[^a-z]/g, '');
            let hash = 0;
            for(let i=0; i<combined.length; i++) hash = combined.charCodeAt(i) + ((hash << 5) - hash);
            const score = 70 + (Math.abs(hash) % 31); // 70 to 100

            // Data
            const kids = ["No Kids", "1 Kid", "2 Kids", "3 Kids", "Full House", "Twins"];
            const kidPred = kids[Math.abs(hash) % kids.length];
            
            const marriages = ["Definitely", "Within 1 Year", "In 2 Years", "Soulmates", "Destined"];
            const marryPred = marriages[Math.abs(hash) % marriages.length];

            const quotes = [
                "A match made in heaven.",
                "The stars have aligned for you.",
                "True love is rare, and you found it.",
                "Two souls, one destiny.",
                "Chemistry that can't be explained."
            ];
            const quote = quotes[Math.abs(hash) % quotes.length];

            state.currentResult = { n1, n2, score, kidPred, marryPred, quote };
            saveToHistory(state.currentResult);

            // Update DOM
            document.getElementById('res-name1').innerText = n1;
            document.getElementById('res-name2').innerText = n2;
            document.getElementById('romance-msg').innerText = `"${quote}"`;
            document.getElementById('romance-title').innerText = score > 90 ? "Twin Flames 🔥" : score > 80 ? "Perfect Match ❤️" : "Great Potential ✨";
            document.getElementById('kids-prediction').innerText = kidPred;
            document.getElementById('marriage-prediction').innerText = marryPred;

            // Show Result View
            views.loading.classList.add('hidden');
            views.result.classList.remove('hidden');
            
            // Animate Score
            animateScore(score);
        }

        function animateScore(target) {
            const circle = document.getElementById('score-circle');
            const val = document.getElementById('score-val');
            const circumference = 276;
            
            circle.style.strokeDashoffset = circumference; // Reset
            
            let current = 0;
            const duration = 1500;
            const start = performance.now();

            requestAnimationFrame(function animate(time) {
                let timeFraction = (time - start) / duration;
                if (timeFraction > 1) timeFraction = 1;

                const progress = 1 - Math.pow(1 - timeFraction, 3); // Ease out cubic
                const currentScore = Math.floor(progress * target);
                
                val.innerText = currentScore + "%";
                circle.style.strokeDashoffset = circumference - (currentScore / 100) * circumference;

                if (timeFraction < 1) requestAnimationFrame(animate);
            });
        }

        function saveToHistory(item) {
            state.history.unshift({ ...item, date: new Date().toLocaleDateString() });
            if(state.history.length > 10) state.history.pop();
            localStorage.setItem('loveHistory', JSON.stringify(state.history));
            renderHistory();
        }

        function renderHistory() {
            const list = document.getElementById('history-list');
            if(state.history.length === 0) return;
            
            list.innerHTML = state.history.map(h => `
                <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <div>
                        <div class="text-xs font-bold text-primary">${h.n1} & ${h.n2}</div>
                        <div class="text-[10px] text-secondary">${h.date}</div>
                    </div>
                    <div class="text-sm font-bold text-rose-500">${h.score}%</div>
                </div>
            `).join('');
        }

        function toggleTheme() {
            document.body.classList.toggle('dark');
            const icon = document.getElementById('theme-icon');
            if(document.body.classList.contains('dark')) {
                icon.setAttribute('icon', 'solar:sun-2-linear');
            } else {
                icon.setAttribute('icon', 'solar:moon-linear');
            }
        }

        function toggleHistory() {
            const overlay = document.getElementById('history-overlay');
            const panel = document.getElementById('history-panel');
            
            if(overlay.classList.contains('hidden')) {
                renderHistory();
                overlay.classList.remove('hidden');
                setTimeout(() => panel.classList.remove('translate-y-full'), 10);
            } else {
                panel.classList.add('translate-y-full');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }

        function resetApp() {
            document.getElementById('name1').value = '';
            document.getElementById('name2').value = '';
            views.result.classList.add('hidden');
            views.input.classList.remove('hidden');
        }

        // Feature: Proposal Mode
        function openProposal() {
            const ol = document.getElementById('proposal-overlay');
            const content = document.getElementById('proposal-content');
            ol.classList.remove('pointer-events-none', 'opacity-0');
            content.classList.remove('scale-90');
            content.classList.add('scale-100');
            startConfetti();
        }

        function closeProposal() {
            const ol = document.getElementById('proposal-overlay');
            ol.classList.add('opacity-0', 'pointer-events-none');
            showToast("Congratulations! 💍");
        }

        // Sharing
        function shareWhatsApp() {
            if(!state.currentResult) return;
            const text = `LoveMeter Analysis: ${state.currentResult.n1} + ${state.currentResult.n2} = ${state.currentResult.score}% Love! 💘 "${state.currentResult.quote}"`;
            window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
        }

        function shareInstagram() {
            // Instagram doesn't support direct text share via web URL, usually requires copying to clipboard or using native share
            if(navigator.share) {
                navigator.share({
                    title: 'LoveMeter Result',
                    text: `${state.currentResult.n1} & ${state.currentResult.n2} have ${state.currentResult.score}% compatibility!`,
                }).catch(console.error);
            } else {
                navigator.clipboard.writeText(`${state.currentResult.n1} + ${state.currentResult.n2} = ${state.currentResult.score}%`).then(() => showToast("Result copied to clipboard!"));
            }
        }

        function showToast(msg) {
            const t = document.getElementById('toast');
            document.getElementById('toast-msg').innerText = msg;
            t.classList.remove('opacity-0', '-translate-y-20');
            setTimeout(() => t.classList.add('opacity-0', '-translate-y-20'), 3000);
        }

        // Effects
        function createParticles() {
            const container = document.getElementById('particles');
            setInterval(() => {
                if(document.hidden) return;
                const p = document.createElement('div');
                p.classList.add('heart-particle');
                p.innerHTML = `<iconify-icon icon="solar:heart-bold" width="${Math.random() * 10 + 5}"></iconify-icon>`;
                p.style.left = Math.random() * 100 + '%';
                p.style.color = Math.random() > 0.5 ? '#f43f5e' : '#a855f7';
                p.style.animationDuration = (Math.random() * 3 + 3) + 's';
                container.appendChild(p);
                setTimeout(() => p.remove(), 6000);
            }, 800);
        }

        function startConfetti() {
            const canvas = document.getElementById('confetti-canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const particles = [];
            for(let i=0; i<100; i++) {
                particles.push({
                    x: canvas.width/2, y: canvas.height/2,
                    vx: (Math.random()-0.5)*10, vy: (Math.random()-0.5)*10 - 5,
                    color: ['#f43f5e', '#fff', '#fb7185'][Math.floor(Math.random()*3)],
                    size: Math.random()*5+2
                });
            }

            function render() {
                ctx.clearRect(0,0,canvas.width,canvas.height);
                particles.forEach((p, i) => {
                    p.x += p.vx; p.y += p.vy; p.vy += 0.2;
                    ctx.fillStyle = p.color;
                    ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
                    if(p.y > canvas.height) particles.splice(i, 1);
                });
                if(particles.length > 0) requestAnimationFrame(render);
            }
            render();
        }

        createParticles();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0" id="particles"></div>

<main className="w-full max-w-sm mx-auto p-4 relative z-10 h-full flex flex-col justify-center">

<header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-rose-500/20">
<iconify-icon icon="solar:heart-angle-bold" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-primary">LoveMeter</span>
</div>
<div className="flex gap-2">
<button className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-secondary hover:text-rose-500 transition-colors" onclick="toggleTheme()">
<iconify-icon icon="solar:sun-2-linear" id="theme-icon" width="18"></iconify-icon>
</button>
<button className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-secondary hover:text-rose-500 transition-colors" onclick="toggleHistory()">
<iconify-icon icon="solar:history-linear" width="18"></iconify-icon>
</button>
</div>
</header>

<section className="glass-panel rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 transform" id="input-view">
<div className="text-center mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-primary mb-2">Analyze Compatibility</h1>
<p className="text-xs text-secondary leading-relaxed max-w-[260px] mx-auto">Enter names to discover your cosmic relationship potential using our advanced algorithm.</p>
</div>
<form className="space-y-4" id="love-form" onsubmit="calculateLove(event)">
<div className="space-y-1">
<label className="text-[10px] font-semibold text-rose-500 ml-1 uppercase tracking-wider">You</label>
<input autocomplete="off" className="input-field block w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all placeholder:text-slate-400" id="name1" placeholder="Your Name" required="" type="text"/>
</div>
<div className="flex justify-center -my-3 relative z-10">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 flex items-center justify-center text-white shadow-lg border-2 border-white dark:border-slate-900">
<iconify-icon icon="solar:infinity-bold" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-purple-500 ml-1 uppercase tracking-wider">Partner</label>
<input autocomplete="off" className="input-field block w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all placeholder:text-slate-400" id="name2" placeholder="Partner's Name" required="" type="text"/>
</div>
<div className="pt-4">
<button className="w-full bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-medium py-4 px-4 rounded-xl shadow-xl shadow-rose-500/20 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group" id="analyze-btn" type="submit">
<span>Analyze Connection</span>
<iconify-icon className="group-hover:animate-pulse" icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
</button>
</div>
</form>
</section>

<section className="hidden absolute inset-0 z-20 flex flex-col items-center justify-center p-4" id="loading-view">
<div className="glass-panel w-full max-w-xs rounded-3xl p-8 flex flex-col items-center text-center">
<div className="relative w-24 h-24 mb-6">
<svg className="animate-spin w-full h-full text-rose-500" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-rose-500 animate-pulse" icon="solar:heart-bold" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-primary mb-1">Aligning Stars...</h3>
<p className="text-xs text-secondary font-medium" id="loading-text">Calculating emotional resonance</p>
</div>
</section>

<section className="hidden w-full space-y-4" id="result-view">
<div className="glass-panel rounded-3xl p-1 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500"></div>
<div className="p-5 pb-2 text-center relative z-10">

<div className="flex items-center justify-center gap-2 mb-4 opacity-80">
<span className="text-xs font-semibold uppercase tracking-wide text-secondary" id="res-name1">You</span>
<iconify-icon className="text-rose-500" icon="solar:heart-angle-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide text-secondary" id="res-name2">Partner</span>
</div>

<div className="relative w-40 h-40 mx-auto mb-4">
<svg className="w-full h-full transform -rotate-90 drop-shadow-xl" viewbox="0 0 100 100">
<circle className="stroke-slate-200 dark:stroke-slate-800" cx="50" cy="50" fill="none" r="44" strokeLinecap="round" strokeWidth="8"></circle>
<circle className="progress-circle text-rose-500" cx="50" cy="50" fill="none" id="score-circle" r="44" stroke="currentColor" stroke-dasharray="276" stroke-dashoffset="276" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-4xl font-bold text-primary tracking-tighter" id="score-val">0%</span>
<span className="text-[9px] font-bold text-rose-500 uppercase tracking-wider mt-1 bg-rose-500/10 px-2 py-0.5 rounded-full">Match</span>
</div>
</div>

<h2 className="text-lg font-semibold text-primary mb-1" id="romance-title">Soulmates Found</h2>
<p className="text-xs text-secondary italic" id="romance-msg">"Your connection defies the laws of physics."</p>
</div>

<div className="grid grid-cols-2 divide-x divide-slate-200/20 border-t border-slate-200/20 bg-slate-50/50 dark:bg-slate-900/30">
<div className="p-3 text-center">
<div className="flex items-center justify-center gap-1.5 mb-1 text-purple-500">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-wider text-secondary">Kids</span>
</div>
<span className="text-xs font-medium text-primary" id="kids-prediction">2 Kids</span>
</div>
<div className="p-3 text-center">
<div className="flex items-center justify-center gap-1.5 mb-1 text-rose-500">
<iconify-icon icon="solar:ring-linear" width="16"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-wider text-secondary">Marriage</span>
</div>
<span className="text-xs font-medium text-primary" id="marriage-prediction">High Chance</span>
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-2">
<button className="glass-panel col-span-2 rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-green-500 hover:text-white group transition-all" onclick="shareWhatsApp()">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
<span className="text-xs font-medium">Share</span>
</button>
<button className="glass-panel rounded-xl p-3 flex items-center justify-center hover:bg-gradient-to-tr hover:from-orange-500 hover:to-purple-600 hover:text-white transition-all text-secondary" onclick="shareInstagram()">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
</button>
<button className="bg-rose-500 text-white rounded-xl p-3 flex items-center justify-center shadow-lg shadow-rose-500/30 hover:scale-105 transition-transform" onclick="openProposal()">
<iconify-icon icon="solar:heart-bold" width="18"></iconify-icon>
</button>
</div>
<button className="w-full py-3 text-xs font-medium text-secondary hover:text-primary transition-colors flex items-center justify-center gap-1" onclick="resetApp()">
<iconify-icon icon="solar:restart-linear" width="14"></iconify-icon>
                Calculate Another Pair
            </button>
</section>
</main>

<div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-6 opacity-0 pointer-events-none transition-opacity duration-700" id="proposal-overlay">
<canvas className="absolute inset-0 w-full h-full pointer-events-none" id="confetti-canvas"></canvas>
<div className="relative z-10 text-center transform scale-90 transition-transform duration-700" id="proposal-content">
<div className="w-24 h-24 mx-auto bg-rose-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(244,63,94,0.6)] animate-pulse">
<iconify-icon className="text-white" icon="solar:ring-bold" width="48"></iconify-icon>
</div>
<h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">Will You Marry Me?</h1>
<p className="text-rose-200 text-sm mb-8 max-w-xs mx-auto">My heart has found its home in you.</p>
<button className="px-8 py-3 bg-white text-rose-600 rounded-full font-bold text-sm tracking-wide hover:bg-rose-50 transition-colors" onclick="closeProposal()">YES! 💍</button>
</div>
</div>

<div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm hidden flex items-end sm:items-center justify-center sm:p-4" id="history-overlay">
<div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl transform transition-transform duration-300 translate-y-full sm:translate-y-0" id="history-panel">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-semibold text-primary">Relationship History</h3>
<button className="text-secondary hover:text-primary" onclick="toggleHistory()"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>
<div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1" id="history-list">

<div className="text-center text-xs text-secondary py-8">No calculations yet.</div>
</div>
</div>
</div>

<div className="fixed top-6 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full shadow-xl flex items-center gap-2 transform -translate-y-20 opacity-0 transition-all duration-300 z-50" id="toast">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-xs font-bold" id="toast-msg">Action Successful</span>
</div>


    </>
  );
}
