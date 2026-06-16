import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Configuration & State ---
        const defaultData = [
            { id: 1, text: "X2 Điểm", value: "x2", prob: 10, color: "#8b5cf6" },     // Purple
            { id: 2, text: "+500", value: "500", prob: 20, color: "#10b981" },       // Emerald
            { id: 3, text: "Chia đôi", value: "/2", prob: 10, color: "#ef4444" },    // Red
            { id: 4, text: "+100", value: "100", prob: 25, color: "#3b82f6" },       // Blue
            { id: 5, text: "+200", value: "200", prob: 15, color: "#f59e0b" },       // Amber
            { id: 6, text: "-100", value: "-100", prob: 20, color: "#525252" },      // Neutral
        ];

        let items = JSON.parse(JSON.stringify(defaultData));
        
        let players = [
            { id: 1, name: "Người chơi 1", score: 1000 },
            { id: 2, name: "Người chơi 2", score: 1000 },
        ];
        let currentPlayerIndex = 0;
        let isSpinning = false;
        let currentRotation = 0;
        let audioCtx = null;
        let isStreamMode = false;
        let isTransparent = false;

        // --- DOM Elements ---
        const canvas = document.getElementById('wheel-canvas');
        const ctx = canvas.getContext('2d');
        const playersListEl = document.getElementById('players-list');
        const itemsContainer = document.getElementById('items-container');
        const spinBtn = document.getElementById('spin-btn');
        const turnNameEl = document.getElementById('turn-name');
        const turnDisplayEl = document.getElementById('current-turn-display');
        
        // Center Elements
        const centerIdle = document.getElementById('center-idle');
        const centerResult = document.getElementById('center-result');
        const centerValue = document.getElementById('center-value');
        
        // Layout Elements
        const sidebar = document.getElementById('sidebar');
        const gameArea = document.getElementById('game-area');
        const bgLayer = document.getElementById('bg-layer');
        const mainHeader = document.getElementById('main-header');
        const floatingControls = document.getElementById('floating-controls');

        // --- OBS & Layout Logic ---
        function toggleStreamMode() {
            isStreamMode = !isStreamMode;
            if (isStreamMode) {
                // Hide sidebar
                sidebar.classList.add('hidden');
                // Expand game area
                gameArea.classList.remove('lg:col-span-8');
                gameArea.classList.add('lg:col-span-12');
                // Show floating button to restore
                floatingControls.classList.remove('opacity-0', 'pointer-events-none');
                
            } else {
                // Show sidebar
                sidebar.classList.remove('hidden');
                // Restore game area
                gameArea.classList.add('lg:col-span-8');
                gameArea.classList.remove('lg:col-span-12');
                // Hide floating button
                floatingControls.classList.add('opacity-0', 'pointer-events-none');
            }
            // Trigger resize after transition (300ms)
            setTimeout(resizeCanvas, 350);
        }

        function toggleTransparent() {
            isTransparent = !isTransparent;
            if (isTransparent) {
                bgLayer.classList.add('opacity-0');
                mainHeader.classList.remove('bg-neutral-950/80');
                mainHeader.classList.add('bg-neutral-950/30');
            } else {
                bgLayer.classList.remove('opacity-0');
                mainHeader.classList.add('bg-neutral-950/80');
                mainHeader.classList.remove('bg-neutral-950/30');
            }
        }

        // --- Init ---
        function init() {
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            renderPlayers();
            renderInputs();
            requestAnimationFrame(() => drawWheel()); 
        }

        function resizeCanvas() {
            // Adjust size based on mode
            const baseSize = isStreamMode ? Math.min(window.innerWidth * 0.9, 600) : Math.min(window.innerWidth * 0.9, 450);
            const size = baseSize;
            const scale = window.devicePixelRatio || 1;
            
            // Avoid resetting if size hasn't changed much to prevent flicker
            if (canvas.width === size * scale) return;

            canvas.width = size * scale;
            canvas.height = size * scale;
            ctx.scale(scale, scale);
            canvas.style.width = size + "px";
            canvas.style.height = size + "px";
            drawWheel();
        }

        // --- Render Players ---
        function renderPlayers() {
            playersListEl.innerHTML = '';
            
            if (players.length > 0) {
                const current = players[currentPlayerIndex];
                turnNameEl.innerText = current.name;
                turnDisplayEl.className = "mb-8 px-6 py-2 rounded-full border text-center transition-all duration-300 " + 
                    (isSpinning ? "bg-white/5 border-white/10 opacity-50" : "bg-indigo-500/20 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.3)] scale-105");
            } else {
                turnNameEl.innerText = "Chưa có người chơi";
            }

            players.forEach((p, i) => {
                const isActive = i === currentPlayerIndex;
                const div = document.createElement('div');
                div.className = `relative p-3 rounded-lg border transition-all duration-300 group ${isActive ? 'bg-indigo-500/10 border-indigo-500/50 glow-active' : 'bg-white/5 border-white/5 hover:bg-white/10'}`;
                
                div.innerHTML = `
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2 flex-1">
                            ${isActive ? '<iconify-icon icon="solar:play-circle-bold" class="text-indigo-400"></iconify-icon>' : '<iconify-icon icon="solar:user-circle-linear" class="text-neutral-500"></iconify-icon>'}
                            <input type="text" value="${p.name}" onchange="updatePlayer(${i}, 'name', this.value)" class="bg-transparent border-none text-sm text-white focus:outline-none w-full font-medium placeholder-neutral-600">
                        </div>
                        <button onclick="removePlayer(${i})" class="text-neutral-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
                        </button>
                    </div>
                    
                    <div class="flex items-center justify-between bg-black/20 rounded p-1.5">
                        <span class="text-[10px] text-neutral-500 uppercase font-semibold pl-1">Điểm</span>
                        <div class="flex items-center gap-2">
                            <button onclick="adjustScore(${i}, -100)" class="w-5 h-5 flex items-center justify-center rounded bg-white/5 hover:bg-white/20 text-neutral-400 text-xs">-</button>
                            <span class="text-lg font-mono font-bold ${p.score < 0 ? 'text-red-400' : 'text-emerald-400'} min-w-[60px] text-right">${p.score.toLocaleString()}</span>
                            <button onclick="adjustScore(${i}, 100)" class="w-5 h-5 flex items-center justify-center rounded bg-white/5 hover:bg-white/20 text-neutral-400 text-xs">+</button>
                        </div>
                    </div>
                `;
                playersListEl.appendChild(div);
            });
        }

        // --- Render Wheel Items ---
        function renderInputs() {
            itemsContainer.innerHTML = '';
            items.forEach((item, index) => {
                const row = document.createElement('div');
                row.className = "grid grid-cols-12 gap-2 items-center bg-white/5 p-1.5 rounded border border-transparent hover:border-white/10 transition-colors group";
                row.innerHTML = `
                    <div class="col-span-5 flex items-center gap-2">
                        <div class="relative w-4 h-4 flex-shrink-0">
                             <input type="color" value="${item.color}" onchange="updateItem(${index}, 'color', this.value)" class="absolute inset-0 opacity-0 cursor-pointer w-full h-full">
                             <div class="w-4 h-4 rounded-full border border-white/20" style="background-color: ${item.color}"></div>
                        </div>
                        <input type="text" value="${item.text}" oninput="updateItem(${index}, 'text', this.value)" class="w-full bg-transparent text-[11px] text-white focus:outline-none border-b border-transparent focus:border-white/20 pb-0.5 placeholder-neutral-600" placeholder="Tên">
                    </div>
                    <div class="col-span-3">
                        <input type="text" value="${item.value}" oninput="updateItem(${index}, 'value', this.value)" class="w-full bg-neutral-900/50 text-center text-[10px] font-mono text-yellow-500 rounded py-1 focus:outline-none focus:ring-1 ring-white/20 placeholder-neutral-700" placeholder="+100/x2">
                    </div>
                    <div class="col-span-3">
                        <input type="number" min="0" value="${item.prob}" oninput="updateItem(${index}, 'prob', this.value)" class="w-full bg-neutral-900 text-center text-[10px] text-white rounded py-1 focus:outline-none focus:ring-1 ring-white/20">
                    </div>
                    <div class="col-span-1 text-right">
                        <button onclick="deleteItem(${index})" class="text-neutral-600 hover:text-red-400" ${items.length <= 2 ? 'disabled' : ''}>
                            <iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon>
                        </button>
                    </div>
                `;
                itemsContainer.appendChild(row);
            });
            drawWheel();
        }

        // --- Drawing Logic ---
        function drawWheel(highlightIndex = -1) {
            const width = canvas.width / (window.devicePixelRatio || 1);
            const center = width / 2;
            const radius = center - 5; 
            
            ctx.clearRect(0, 0, width * 2, width * 2);
            
            const sliceAngle = (2 * Math.PI) / items.length;
            
            items.forEach((item, i) => {
                const startAngle = i * sliceAngle - Math.PI / 2;
                const endAngle = startAngle + sliceAngle;
                
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(center, center);
                ctx.arc(center, center, radius, startAngle, endAngle);
                ctx.closePath();
                ctx.fillStyle = item.color;
                ctx.fill();
                ctx.strokeStyle = "#171717"; 
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.translate(center, center);
                ctx.rotate(startAngle + sliceAngle / 2);
                ctx.textAlign = "right";
                ctx.fillStyle = getContrastColor(item.color);
                ctx.font = "600 13px Inter";
                let text = item.text;
                if (text.length > 14) text = text.substring(0, 13) + '..';
                ctx.fillText(text, radius - 15, 4);
                
                ctx.font = "400 9px monospace";
                ctx.globalAlpha = 0.7;
                ctx.fillText(item.value, radius - 15, 16);
                
                ctx.restore();
            });

            if (highlightIndex !== -1) {
                const i = highlightIndex;
                const startAngle = i * sliceAngle - Math.PI / 2;
                const endAngle = startAngle + sliceAngle;

                ctx.save();
                ctx.beginPath();
                ctx.moveTo(center, center);
                ctx.arc(center, center, radius, startAngle, endAngle);
                ctx.closePath();
                ctx.shadowColor = "white";
                ctx.shadowBlur = 30;
                ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
                ctx.fill();
                ctx.lineWidth = 4;
                ctx.strokeStyle = "#ffffff";
                ctx.stroke();
                ctx.restore();
            }
        }

        // --- Spinning Logic ---
        function spin() {
            if (isSpinning || players.length === 0) return;
            
            isSpinning = true;
            spinBtn.disabled = true;
            centerResult.style.opacity = '0';
            centerResult.style.transform = 'scale(0.5)';
            centerIdle.style.opacity = '1';
            centerIdle.style.transform = 'scale(1)';
            drawWheel(-1);
            renderPlayers();

            let totalWeight = items.reduce((sum, item) => sum + parseInt(item.prob), 0);
            let random = Math.random() * totalWeight;
            let winnerIndex = items.length - 1;
            
            for (let i = 0; i < items.length; i++) {
                if (random < parseInt(items[i].prob)) {
                    winnerIndex = i;
                    break;
                }
                random -= parseInt(items[i].prob);
            }

            const sliceAngle = 360 / items.length;
            const indexAngle = (winnerIndex * sliceAngle) + (sliceAngle / 2);
            let targetRotation = 270 - indexAngle;
            
            const jitter = (Math.random() - 0.5) * (sliceAngle * 0.7);
            targetRotation += jitter;

            const spins = 5 + Math.random() * 3;
            const fullSpins = spins * 360;
            
            const currentMod = currentRotation % 360;
            let finalRotation = currentRotation + fullSpins + (targetRotation - currentMod);
            
            if (finalRotation < currentRotation + 1000) finalRotation += 360 * 5;

            const duration = 5;
            canvas.style.transition = `transform ${duration}s cubic-bezier(0.15, 0.85, 0.35, 1)`;
            canvas.style.transform = `rotate(${finalRotation}deg)`;

            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const startT = performance.now();
            let lastRot = currentRotation;
            const step = 360 / items.length;

            function tick(t) {
                if (!isSpinning) return;
                const elapsed = (t - startT) / 1000;
                
                if (elapsed < duration) {
                    const p = elapsed / duration;
                    const ease = 1 - Math.pow(1 - p, 4);
                    const cur = currentRotation + (finalRotation - currentRotation) * ease;
                    
                    if (cur - lastRot >= step) {
                        playSound('tick');
                        lastRot = cur;
                    }
                    requestAnimationFrame(tick);
                } else {
                    finishSpin(winnerIndex, finalRotation);
                }
            }
            requestAnimationFrame(tick);
        }

        function finishSpin(winnerIndex, finalRot) {
            isSpinning = false;
            currentRotation = finalRot;
            spinBtn.disabled = false;
            
            const winnerItem = items[winnerIndex];
            
            centerIdle.style.opacity = '0';
            centerIdle.style.transform = 'scale(0.5)';
            centerResult.style.opacity = '1';
            centerResult.style.transform = 'scale(1)';
            centerValue.innerText = winnerItem.text;
            centerResult.style.color = winnerItem.color === '#ffffff' ? '#000' : getContrastColor(winnerItem.color) === '#ffffff' ? winnerItem.color : '#000';
            centerResult.style.backgroundColor = winnerItem.color === '#ffffff' ? '#000' : '#fff';

            drawWheel(winnerIndex);
            playSound('win');
            applyScore(winnerItem.value);

            setTimeout(() => {
                nextPlayer();
            }, 3000);
        }

        function applyScore(valStr) {
            if (players.length === 0) return;
            const p = players[currentPlayerIndex];
            let oldScore = p.score;
            let newScore = oldScore;

            valStr = valStr.toString().trim().toLowerCase();

            if (valStr.startsWith('x') || valStr.startsWith('*')) {
                const multiplier = parseFloat(valStr.substring(1));
                if (!isNaN(multiplier)) newScore = Math.round(oldScore * multiplier);
            } else if (valStr.startsWith('/')) {
                const divider = parseFloat(valStr.substring(1));
                if (!isNaN(divider) && divider !== 0) newScore = Math.round(oldScore / divider);
            } else {
                const val = parseFloat(valStr);
                if (!isNaN(val)) newScore = oldScore + val;
            }
            p.score = newScore;
            renderPlayers();
        }

        function nextPlayer() {
            if (players.length === 0) return;
            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
            renderPlayers();
            centerResult.style.opacity = '0';
            centerResult.style.transform = 'scale(0.5)';
            centerIdle.style.opacity = '1';
            centerIdle.style.transform = 'scale(1)';
            drawWheel(-1);
        }

        function addPlayer() {
            players.push({ id: Date.now(), name: `Người chơi ${players.length + 1}`, score: 0 });
            renderPlayers();
        }
        function removePlayer(i) {
            players.splice(i, 1);
            if (currentPlayerIndex >= players.length) currentPlayerIndex = 0;
            renderPlayers();
        }
        function updatePlayer(i, key, val) {
            players[i][key] = val;
            if(key === 'name') renderPlayers();
        }
        function adjustScore(i, amount) {
            players[i].score += amount;
            renderPlayers();
        }
        function addNewItem() {
            const colors = ["#ef4444", "#f97316", "#f59e0b", "#10b981", "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"];
            const color = colors[items.length % colors.length];
            items.push({ id: Date.now(), text: "Mới", value: "100", prob: 10, color: color });
            renderInputs();
        }
        function deleteItem(i) {
            if(items.length <= 2) return;
            items.splice(i, 1);
            renderInputs();
        }
        function updateItem(i, key, val) {
            items[i][key] = val;
            if (key !== 'value') drawWheel();
        }
        function resetGame() {
            if(confirm("Xoá điểm tất cả người chơi và bắt đầu lại?")) {
                players.forEach(p => p.score = 0);
                currentPlayerIndex = 0;
                renderPlayers();
                drawWheel(-1);
            }
        }
        function getContrastColor(hex) {
            if (!hex) return '#ffffff';
            const r = parseInt(hex.substr(1, 2), 16);
            const g = parseInt(hex.substr(3, 2), 16);
            const b = parseInt(hex.substr(5, 2), 16);
            return (((r * 299) + (g * 587) + (b * 114)) / 1000) >= 128 ? '#000000' : '#ffffff';
        }
        function playSound(type) {
            if (!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            const now = audioCtx.currentTime;

            if (type === 'tick') {
                osc.frequency.setValueAtTime(600, now);
                osc.frequency.exponentialRampToValueAtTime(100, now + 0.05);
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc.type = 'triangle';
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start();
                osc.stop(now + 0.06);
            } else if (type === 'win') {
                [523.25, 659.25, 783.99].forEach((f, i) => {
                    const o = audioCtx.createOscillator();
                    const g = audioCtx.createGain();
                    o.type = 'sine';
                    o.frequency.value = f;
                    g.gain.setValueAtTime(0.1, now + i*0.1);
                    g.gain.exponentialRampToValueAtTime(0.001, now + i*0.1 + 0.5);
                    o.connect(g);
                    g.connect(audioCtx.destination);
                    o.start(now + i*0.1);
                    o.stop(now + i*0.1 + 0.6);
                });
            }
        }

        init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-neutral-950 -z-10 transition-colors duration-300" id="bg-layer"></div>
<div className="w-full min-h-screen flex flex-col" id="app-wrapper">

<header className="w-full border-b border-white/5 py-3 px-6 flex items-center justify-between backdrop-blur-md sticky top-0 z-50 bg-neutral-950/80 transition-all duration-300" id="main-header">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-sm tracking-tighter shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    LW
                </div>
<h1 className="text-sm font-medium tracking-tight text-white hidden sm:block">Vòng Quay Tài Lộc</h1>
</div>
<div className="flex items-center gap-2">

<button className="text-[10px] bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors text-white" onclick="toggleTransparent()" title="Bật/Tắt nền trong suốt cho OBS">
<iconify-icon icon="solar:dropper-minimalistic-linear"></iconify-icon> <span className="hidden sm:inline">Nền trong suốt</span>
</button>
<button className="text-[10px] bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-indigo-300 px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors" onclick="toggleStreamMode()" title="Ẩn menu cài đặt">
<iconify-icon icon="solar:videocamera-record-linear"></iconify-icon> <span className="hidden sm:inline">Chế độ Stream</span>
</button>
<div className="h-4 w-[1px] bg-white/10 mx-1"></div>
<button className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors px-2" onclick="resetGame()">
<iconify-icon icon="solar:restart-square-linear" width="16"></iconify-icon>
</button>
</div>
</header>
<main className="flex-1 max-w-[1400px] mx-auto w-full p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start transition-all duration-500 relative">

<div className="lg:col-span-4 w-full space-y-4 order-2 lg:order-1 h-full flex flex-col transition-all duration-500 opacity-100 scale-100 origin-left" id="sidebar">

<div className="bg-white/5 border border-white/5 rounded-xl flex flex-col backdrop-blur-sm overflow-hidden flex-1 max-h-[50vh] lg:max-h-[500px]">
<div className="p-4 border-b border-white/5 bg-white/[0.02] flex justify-between items-center sticky top-0 z-10">
<div>
<h2 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
                                Người chơi
                            </h2>
<p className="text-[10px] text-neutral-500 mt-0.5">Tự động chuyển lượt sau khi quay</p>
</div>
<button className="w-7 h-7 flex items-center justify-center bg-white text-black rounded hover:bg-neutral-200 transition" onclick="addPlayer()">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
<div className="overflow-y-auto p-2 space-y-2 flex-1 scroll-smooth" id="players-list">

</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-xl p-4 backdrop-blur-sm">
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon icon="solar:wheel-angle-linear" width="16"></iconify-icon>
                            Cấu hình ô
                        </h2>
<button className="text-[10px] bg-white/10 text-white px-2 py-1 rounded hover:bg-white/20 transition" onclick="addNewItem()">
                            + Thêm ô
                        </button>
</div>
<div className="grid grid-cols-12 gap-2 text-[10px] text-neutral-500 mb-2 px-1 uppercase tracking-wider">
<div className="col-span-5">Tên hiển thị</div>
<div className="col-span-3">Giá trị</div>
<div className="col-span-3 text-center">Tỷ lệ %</div>
<div className="col-span-1"></div>
</div>
<div className="space-y-1.5 max-h-[250px] overflow-y-auto pr-1" id="items-container">

</div>
</div>
</div>

<div className="lg:col-span-8 w-full flex flex-col items-center justify-center order-1 lg:order-2 min-h-[500px] relative py-8 transition-all duration-500" id="game-area">

<div className="mb-8 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-center transition-all duration-300" id="current-turn-display">
<span className="text-xs text-neutral-400 uppercase tracking-widest mr-2">Lượt của</span>
<span className="text-white font-semibold text-lg" id="turn-name">---</span>
</div>

<div className="relative w-[90vw] max-w-[450px] aspect-square group select-none">

<div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[80px] opacity-30 pointer-events-none"></div>

<canvas className="w-full h-full relative z-10 drop-shadow-2xl" id="wheel-canvas"></canvas>

<div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 filter drop-shadow-lg">
<iconify-icon className="text-white" icon="solar:map-arrow-down-bold" width="56"></iconify-icon>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] bg-neutral-900 rounded-full z-20 shadow-[0_0_30px_rgba(0,0,0,0.5)] border-4 border-white/10 flex items-center justify-center overflow-hidden">

<div className="text-center transition-all duration-300 opacity-100 absolute inset-0 flex items-center justify-center flex-col" id="center-idle">
<iconify-icon className="text-yellow-500 mb-1" icon="solar:star-fall-bold-duotone" width="32"></iconify-icon>
<span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest">QUAY</span>
</div>

<div className="text-center transition-all duration-300 opacity-0 scale-50 absolute inset-0 flex items-center justify-center flex-col p-2 bg-white text-neutral-900" id="center-result">
<span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5">KẾT QUẢ</span>
<div className="text-xl md:text-2xl font-bold leading-tight break-words w-full px-1" id="center-value">---</div>
</div>
</div>
</div>

<button className="mt-12 group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed" id="spin-btn" onclick="spin()">
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
<span className="relative flex items-center gap-2">
                        BẮT ĐẦU QUAY
                    </span>
</button>
</div>
</main>

<div className="fixed bottom-6 right-6 z-50 transition-opacity duration-300 opacity-0 pointer-events-none" id="floating-controls">
<button className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10 rounded-full flex items-center justify-center text-white transition-colors shadow-lg" onclick="toggleStreamMode()">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</div>
</div>


    </>
  );
}
