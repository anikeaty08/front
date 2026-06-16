import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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



        // --- SYSTEM CORE (Simulated Backend) ---
        
        const DB = {
            getUser: () => JSON.parse(localStorage.getItem('eh_user')),
            setUser: (user) => localStorage.setItem('eh_user', JSON.stringify(user)),
            init: () => {
                if(!localStorage.getItem('eh_transactions')) localStorage.setItem('eh_transactions', '[]');
            }
        };

        let currentUser = null;
        let miningInterval = null;

        // --- AUTH LOGIC ---

        function checkAuth() {
            currentUser = DB.getUser();
            if (currentUser) {
                document.getElementById('auth-screen').classList.add('hidden');
                document.getElementById('app-screen').classList.remove('hidden');
                document.getElementById('display-username').innerText = currentUser.username;
                document.getElementById('user-avatar').innerText = currentUser.username.charAt(0).toUpperCase();
                updateUIBalance();
                loadTransactions();
                startMining();
                
                // Check daily bonus
                const today = new Date().toDateString();
                const btn = document.getElementById('daily-bonus-btn');
                if(currentUser.lastBonus === today) {
                    btn.classList.add('opacity-50', 'cursor-not-allowed');
                    btn.innerText = 'Bonus Alındı';
                    btn.disabled = true;
                }
            } else {
                document.getElementById('auth-screen').classList.remove('hidden');
                document.getElementById('app-screen').classList.add('hidden');
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            const u = document.getElementById('login-username').value;
            // Simulate "Registering" automatically if not exists or logging in
            // For this single file, we just create a session
            const user = {
                username: u,
                balance: 50.00, // Starting bonus
                lastBonus: null
            };
            
            // If user existed before in localstorage, use that data instead
            const stored = DB.getUser();
            if(stored && stored.username === u) {
                currentUser = stored;
            } else {
                currentUser = user;
                DB.setUser(currentUser);
            }
            
            checkAuth();
            showToast(`Hoş geldin, ${u}!`);
        }

        function logout() {
            localStorage.removeItem('eh_user');
            clearInterval(miningInterval);
            location.reload();
        }

        function toggleAuthMode() {
            // Visual toggle only for this single file demo
            const title = document.querySelector('#auth-screen h1');
            const btn = document.querySelector('#auth-screen button[type="submit"]');
            if(title.innerText.includes('Katıl')) {
                title.innerText = 'Kayıt Ol';
                btn.innerText = 'Hesap Oluştur';
            } else {
                title.innerText = "EarnHub'a Katıl";
                btn.innerText = 'Giriş Yap';
            }
        }

        // --- WALLET LOGIC ---

        function updateBalance(amount, type = 'win') {
            currentUser.balance += amount;
            DB.setUser(currentUser);
            updateUIBalance();
            
            // Add transaction log if significant
            if(Math.abs(amount) >= 1) {
                addTransaction(type === 'win' ? 'Kazanç' : 'Oyun/Harcama', amount, 'Tamamlandı');
            }
        }

        function updateUIBalance() {
            const formatted = '$' + currentUser.balance.toFixed(2);
            document.getElementById('display-balance').innerText = formatted;
            document.getElementById('dash-balance').innerText = formatted;
            document.getElementById('wallet-balance-display').innerText = formatted;
        }

        function addTransaction(type, amount, status) {
            const history = JSON.parse(localStorage.getItem('eh_transactions'));
            const tx = {
                type,
                amount: (amount > 0 ? '+' : '') + '$' + amount.toFixed(2),
                status,
                date: new Date().toLocaleDateString('tr-TR')
            };
            history.unshift(tx);
            if(history.length > 10) history.pop(); // Keep last 10
            localStorage.setItem('eh_transactions', JSON.stringify(history));
            loadTransactions();
        }

        function loadTransactions() {
            const history = JSON.parse(localStorage.getItem('eh_transactions'));
            const tbody = document.getElementById('transaction-table');
            if(history.length === 0) return;
            
            tbody.innerHTML = history.map(tx => `
                <tr class="hover:bg-white/5 transition-colors">
                    <td class="px-6 py-4 font-medium text-white">${tx.type}</td>
                    <td class="px-6 py-4 ${tx.amount.includes('+') ? 'text-emerald-400' : 'text-red-400'}">${tx.amount}</td>
                    <td class="px-6 py-4"><span class="px-2 py-1 rounded text-[10px] font-bold uppercase ${tx.status === 'Bekliyor' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-green-500/20 text-green-500'}">${tx.status}</span></td>
                    <td class="px-6 py-4 text-right">${tx.date}</td>
                </tr>
            `).join('');
        }

        function togglePaymentFields() {
            const method = document.querySelector('input[name="withdraw_method"]:checked').value;
            if(method === 'bank') {
                document.getElementById('field-bank').classList.remove('hidden');
                document.getElementById('field-visa').classList.add('hidden');
            } else {
                document.getElementById('field-bank').classList.add('hidden');
                document.getElementById('field-visa').classList.remove('hidden');
            }
        }

        function handleWithdraw(e) {
            e.preventDefault();
            const amount = parseFloat(document.getElementById('w-amount').value);
            
            if(amount > currentUser.balance) {
                showToast('Yetersiz bakiye!');
                return;
            }
            
            currentUser.balance -= amount;
            DB.setUser(currentUser);
            updateUIBalance();
            addTransaction('Para Çekme', -amount, 'Bekliyor');
            showToast('Ödeme talebi oluşturuldu. Yönetici onayı bekleniyor.');
            document.querySelector('input[type="radio"][value="bank"]').checked = true; // Reset
            e.target.reset();
        }

        function addFakeFunds() {
            updateBalance(50.00, 'win');
            document.getElementById('deposit-modal').classList.add('hidden');
            showToast('Test bakiyesi eklendi: +$50.00');
        }

        function claimDailyBonus() {
            const today = new Date().toDateString();
            if(currentUser.lastBonus !== today) {
                currentUser.lastBonus = today;
                updateBalance(5.00, 'win');
                showToast('Günlük bonus alındı! +$5.00');
                const btn = document.getElementById('daily-bonus-btn');
                btn.classList.add('opacity-50', 'cursor-not-allowed');
                btn.innerText = 'Bonus Alındı';
                btn.disabled = true;
            }
        }

        // --- NAVIGATION ---
        function router(sectionId) {
            ['dashboard', 'games', 'wallet', 'tasks'].forEach(id => {
                const el = document.getElementById(id);
                if(el) el.classList.add('hidden');
            });
            document.getElementById(sectionId).classList.remove('hidden');
            window.scrollTo(0,0);
        }

        // --- UI UTILS ---
        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-msg').innerText = msg;
            toast.classList.remove('translate-x-[150%]');
            setTimeout(() => {
                toast.classList.add('translate-x-[150%]');
            }, 3000);
        }

        // --- GAME: WHEEL ---
        let isSpinning = false;
        function spinWheel() {
            if(isSpinning) return;
            if(currentUser.balance < 1) { showToast('Yetersiz bakiye. Bedel: $1.00'); return; }
            
            updateBalance(-1.00, 'loss');
            isSpinning = true;
            const wheel = document.getElementById('wheel');
            const btn = document.getElementById('spin-btn');
            btn.disabled = true;
            btn.classList.add('opacity-50');

            // Logic: 6 segments. 
            // 0-60: Red (Loss), 60-120: Orange ($0.5), 120-180: Yellow ($1), 
            // 180-240: Green ($5), 240-300: Blue ($2), 300-360: Purple ($20)
            // Random spin degree
            const baseSpins = 360 * 5; 
            const randomDeg = Math.floor(Math.random() * 360);
            const totalDeg = baseSpins + randomDeg;
            
            wheel.style.transform = `rotate(${totalDeg}deg)`;
            
            setTimeout(() => {
                // Calculate Prize based on angle (Standard coordinate system adjustment)
                // The arrow is at top (270deg in circle math, but CSS rotate starts 0 at top? No usually right. 
                // Let's simplify: pointer is fixed top. Rotation is clockwise.
                // The slice at Top is determined by (360 - (deg % 360)).
                const actualDeg = totalDeg % 360;
                let prize = 0;
                // Reverse engineering the gradient colors visually
                if(actualDeg < 60) prize = 20.00; // Purple segment lands at top
                else if(actualDeg < 120) prize = 2.00;
                else if(actualDeg < 180) prize = 5.00;
                else if(actualDeg < 240) prize = 1.00; // Return money
                else if(actualDeg < 300) prize = 0.50;
                else prize = 0.00; // Red

                if(prize > 0) {
                    updateBalance(prize, 'win');
                    showToast(`Tebrikler! $${prize} kazandınız.`);
                } else {
                    showToast('Maalesef boş. Tekrar dene!');
                }

                isSpinning = false;
                btn.disabled = false;
                btn.classList.remove('opacity-50');
                // Reset transform without animation for next spin
                setTimeout(() => {
                    wheel.style.transition = 'none';
                    wheel.style.transform = `rotate(${actualDeg}deg)`;
                    setTimeout(() => wheel.style.transition = 'transform 5s cubic-bezier(0.2, 0, 0.2, 1)', 50);
                }, 100);

            }, 5000);
        }

        // --- GAME: SCRATCH ---
        let scratchCtx, scratchCanvas;
        let isScratching = false;

        function initScratchGame() {
            const canvas = document.getElementById('scratchCanvas');
            // If buying new card
            if(currentUser && currentUser.balance < 0.50) { showToast('Yetersiz bakiye.'); return; }
            if(currentUser) updateBalance(-0.50, 'loss');

            const parent = canvas.parentElement;
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
            scratchCtx = canvas.getContext('2d');
            
            // Cover with silver
            scratchCtx.fillStyle = '#94a3b8'; // Slate 400
            scratchCtx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Add texture/text
            scratchCtx.fillStyle = '#64748b';
            scratchCtx.font = '16px Inter';
            scratchCtx.fillText("KAZIMAK İÇİN SÜRÜKLE", 60, 85);

            // Determine Prize
            const rand = Math.random();
            const prizeEl = document.getElementById('scratch-prize');
            let prizeVal = 0;
            if(rand > 0.95) prizeVal = 10.00;
            else if(rand > 0.8) prizeVal = 2.00;
            else if(rand > 0.5) prizeVal = 0.50; // Money back
            else prizeVal = 0;

            prizeEl.innerText = prizeVal > 0 ? `$${prizeVal.toFixed(2)}` : 'BOŞ';
            
            // Interaction
            scratchCtx.globalCompositeOperation = 'destination-out';

            const scratchMove = (e) => {
                if(!isScratching) return;
                e.preventDefault(); // Stop scrolling on touch
                const rect = canvas.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                const x = clientX - rect.left;
                const y = clientY - rect.top;
                
                scratchCtx.beginPath();
                scratchCtx.arc(x, y, 20, 0, Math.PI * 2);
                scratchCtx.fill();
            };
            
            const endScratch = () => {
                isScratching = false;
                // Here we would normally calculate percentage scratched to auto-reveal
                // For demo, we just award instantly if user interacts enough? 
                // Let's just trust the user sees the number. 
                // To be robust: If prize > 0, we credit it *now* but only show it via scratch.
                // To prevent double claiming, we handle logic on init.
                if(prizeVal > 0 && !canvas.getAttribute('data-claimed')) {
                    canvas.setAttribute('data-claimed', 'true');
                    setTimeout(() => {
                        updateBalance(prizeVal, 'win');
                        showToast(`Kazı Kazandan $${prizeVal} çıktı!`);
                    }, 1000);
                }
            };

            canvas.removeAttribute('data-claimed');
            canvas.onmousedown = () => isScratching = true;
            canvas.ontouchstart = () => isScratching = true;
            window.onmouseup = () => isScratching = false;
            window.ontouchend = () => isScratching = false;
            canvas.onmousemove = scratchMove;
            canvas.ontouchmove = scratchMove;
        }

        // --- GAME: COIN FLIP ---
        function flipCoin(choice) {
            if(currentUser.balance < 1.00) { showToast('Yetersiz bakiye.'); return; }
            updateBalance(-1.00, 'loss');

            const coin = document.getElementById('coin');
            const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
            
            // Reset
            coin.style.transition = 'none';
            coin.style.transform = 'rotateY(0deg)';
            
            setTimeout(() => {
                coin.style.transition = 'transform 1.5s ease-out';
                // 1800deg = 5 spins. Heads = 0deg (mod 360), Tails = 180deg.
                const rotations = 1800 + (outcome === 'heads' ? 0 : 180);
                coin.style.transform = `rotateY(${rotations}deg)`;
                
                setTimeout(() => {
                    if(choice === outcome) {
                        updateBalance(2.00, 'win');
                        showToast('Tebrikler! Kazandınız: $2.00');
                    } else {
                        showToast('Kaybettiniz.');
                    }
                }, 1500);
            }, 50);
        }

        // --- OTHER FUNCTIONS ---
        function startMining() {
            let mineVal = 0;
            miningInterval = setInterval(() => {
                mineVal += 0.000005;
                document.getElementById('mining-counter').innerText = mineVal.toFixed(6);
                // Occasionally add to real balance
                if(mineVal > 0.01) {
                    updateBalance(0.01, 'win');
                    mineVal = 0;
                }
            }, 100);
        }

        function placeBet(team) {
            if(currentUser.balance < 5) { showToast('Bahis için en az $5.00 gerekli.'); return; }
            updateBalance(-5.00, 'loss');
            showToast(`${team} üzerine $5.00 bahis alındı. Maç sonucu bekleniyor.`);
        }

        function playToto() {
            if(currentUser.balance < 2) { showToast('Bakiye yetersiz.'); return; }
            updateBalance(-2.00, 'loss');
            showToast('Spor Toto kuponu oynandı. Sonuçlar 24s içinde.');
        }

        function doTask(btn, reward) {
            btn.disabled = true;
            btn.innerText = 'Kontrol ediliyor...';
            setTimeout(() => {
                updateBalance(reward, 'win');
                showToast(`Görev tamamlandı: +$${reward}`);
                btn.innerText = 'Tamamlandı';
                btn.classList.add('text-green-500');
                // Update stats
                const countEl = document.getElementById('tasks-completed-count');
                countEl.innerText = parseInt(countEl.innerText) + 1;
            }, 2000);
        }

        // --- INIT ---
        DB.init();
        checkAuth();
        // Init scratch canvas size on load
        window.onload = () => {
            if(document.getElementById('scratchCanvas').offsetParent) initScratchGame();
        };

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[80px]"></div>
</div>

<div className="fixed top-6 right-6 z-[60] transform translate-x-[150%] transition-transform duration-500 glass-strong border-l-4 border-emerald-500 pl-4 pr-6 py-4 rounded-lg shadow-2xl flex items-center gap-4" id="toast">
<div className="bg-emerald-500/10 p-2 rounded-full text-emerald-400">
<span className="iconify" data-icon="lucide:check-circle" data-width="24"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-white">İşlem Başarılı</h4>
<p className="text-xs text-slate-400" id="toast-msg">Bakiyeniz güncellendi.</p>
</div>
</div>

<div className="relative z-50 min-h-screen flex items-center justify-center p-4" id="auth-screen">
<div className="w-full max-w-md glass p-8 rounded-2xl shadow-2xl shadow-indigo-900/20 border-t border-white/10">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white mb-4 shadow-lg shadow-indigo-500/25">
<span className="iconify" data-icon="lucide:gem" data-width="24"></span>
</div>
<h1 className="text-2xl font-bold text-white tracking-tight">EarnHub'a Katıl</h1>
<p className="text-sm text-slate-400 mt-2">Kazanmaya başlamak için giriş yapın.</p>
</div>

<form className="space-y-4" id="login-form" onsubmit="handleLogin(event)">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Kullanıcı Adı</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-slate-500"><span className="iconify" data-icon="lucide:user" data-width="18"></span></span>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 transition-colors" id="login-username" placeholder="kullaniciadi" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Şifre</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-slate-500"><span className="iconify" data-icon="lucide:lock" data-width="18"></span></span>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 transition-colors" id="login-password" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-indigo-600/20 mt-2" type="submit">Giriş Yap</button>
</form>
<p className="text-center text-xs text-slate-500 mt-6">
                Hesabın yok mu? <button className="text-indigo-400 hover:text-indigo-300 font-medium ml-1" onclick="toggleAuthMode()">Kayıt Ol</button>
</p>
</div>
</div>

<div className="hidden relative z-10 flex flex-col md:flex-row min-h-screen" id="app-screen">

<aside className="w-full md:w-72 glass border-r border-white/5 flex flex-col fixed md:sticky top-0 h-auto md:h-screen z-40">
<div className="p-6 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
<span className="iconify" data-icon="lucide:gem" data-width="18"></span>
</div>
<span className="text-lg font-bold text-white tracking-tight">EarnHub</span>
</div>
<nav className="flex-1 px-4 space-y-1.5 overflow-y-auto py-4">
<p className="px-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Platform</p>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all group" onclick="router('dashboard')">
<span className="iconify group-hover:text-indigo-400 transition-colors" data-icon="lucide:layout-dashboard" data-width="18"></span>
                    Kontrol Paneli
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all group" onclick="router('games')">
<span className="iconify group-hover:text-purple-400 transition-colors" data-icon="lucide:gamepad-2" data-width="18"></span>
                    Oyunlar &amp; Bahis
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all group" onclick="router('wallet')">
<span className="iconify group-hover:text-emerald-400 transition-colors" data-icon="lucide:wallet" data-width="18"></span>
                    Cüzdan &amp; Çekim
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all group" onclick="router('tasks')">
<span className="iconify group-hover:text-amber-400 transition-colors" data-icon="lucide:list-todo" data-width="18"></span>
                    Görevler
                </button>
</nav>
<div className="p-4 border-t border-white/5 bg-black/20">
<div className="flex items-center gap-3 mb-3">
<div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-white font-semibold text-xs border border-white/10" id="user-avatar">
                        U
                    </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate" id="display-username">Kullanıcı</p>
<p className="text-xs text-slate-500 truncate" id="display-balance">$0.00</p>
</div>
</div>
<button className="w-full py-1.5 rounded border border-red-900/30 text-red-400 hover:bg-red-950/30 text-xs font-medium transition-colors" onclick="logout()">Çıkış Yap</button>
</div>
</aside>

<main className="flex-1 p-6 md:p-10 overflow-y-auto scroll-smooth">

<section className="space-y-8 animate-fade-in" id="dashboard">
<header className="flex justify-between items-center">
<div>
<h2 className="text-2xl font-bold text-white tracking-tight">Genel Bakış</h2>
<p className="text-sm text-slate-400">Bugünkü kazanç performansınız.</p>
</div>
<button className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform" id="daily-bonus-btn" onclick="claimDailyBonus()">
<span className="iconify" data-icon="lucide:gift" data-width="16"></span>
                        Günlük Bonus Al
                    </button>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass p-6 rounded-xl relative overflow-hidden group">
<div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-white w-24 h-24" data-icon="lucide:wallet"></span>
</div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Toplam Bakiye</p>
<h3 className="text-3xl font-bold text-white tracking-tight" id="dash-balance">$0.00</h3>
<div className="mt-4 flex gap-2">
<button className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded transition-colors" onclick="router('wallet')">Yatır</button>
<button className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded transition-colors shadow-lg shadow-indigo-500/20" onclick="router('wallet')">Çek</button>
</div>
</div>
<div className="glass p-6 rounded-xl border-l-4 border-l-emerald-500">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Aktif Madencilik</p>
<h3 className="text-2xl font-bold text-emerald-400 tracking-tight font-mono" id="mining-counter">0.000000</h3>
<p className="text-[10px] text-slate-500 mt-1">Sitede kaldıkça artar (Auto-Mine)</p>
</div>
<div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center animate-pulse">
<span className="iconify" data-icon="lucide:cpu" data-width="18"></span>
</div>
</div>
</div>
<div className="glass p-6 rounded-xl border-l-4 border-l-blue-500">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Tamamlanan Görevler</p>
<h3 className="text-2xl font-bold text-blue-400 tracking-tight" id="tasks-completed-count">0</h3>
<p className="text-[10px] text-slate-500 mt-1">Son 24 saat</p>
</div>
<div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center">
<span className="iconify" data-icon="lucide:check-square" data-width="18"></span>
</div>
</div>
</div>
</div>

<div className="glass rounded-xl overflow-hidden border border-white/5">
<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
<h3 className="text-sm font-semibold text-white">Son İşlemler</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300">Tümünü Gör</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-slate-400">
<thead className="bg-white/5 text-xs uppercase font-medium text-slate-300">
<tr>
<th className="px-6 py-3">Tür</th>
<th className="px-6 py-3">Tutar</th>
<th className="px-6 py-3">Durum</th>
<th className="px-6 py-3 text-right">Tarih</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5" id="transaction-table">

<tr>
<td className="px-6 py-8 text-center text-xs text-slate-600 italic" colspan="4">Henüz işlem geçmişi yok.</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="hidden space-y-8 animate-fade-in" id="games">
<h2 className="text-2xl font-bold text-white tracking-tight mb-6">Şans Oyunları &amp; Bahis</h2>
<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

<div className="glass p-6 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none"></div>
<div className="flex items-center gap-2 mb-6 z-10">
<span className="iconify text-purple-400" data-icon="lucide:disc" data-width="24"></span>
<h3 className="text-lg font-bold text-white">Şans Çarkı</h3>
</div>
<div className="relative mb-8">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 z-20 text-white filter drop-shadow-lg">
<span className="iconify" data-icon="lucide:map-pin" data-rotate="180deg" data-width="32"></span>
</div>

<div className="w-64 h-64 rounded-full border-4 border-slate-800 relative transition-transform duration-[5000ms] cubic-bezier(0.2, 0, 0.2, 1)" id="wheel" style={{background: 'conic-gradient(#ef4444 0deg 60deg, #f97316 60deg 120deg, #eab308 120deg 180deg, #22c55e 180deg 240deg, #3b82f6 240deg 300deg, #a855f7 300deg 360deg)'}}>

<div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-800 rounded-full z-10 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
</div>
</div>
<p className="text-xs text-slate-500 mb-3">Bedel: <span className="text-red-400 font-semibold">$1.00</span> | Max Kazanç: <span className="text-green-400">$20.00</span></p>
<button className="px-8 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-600/25 transition-all active:scale-95" id="spin-btn" onclick="spinWheel()">
                            ÇARKİ ÇEVİR
                        </button>
</div>

<div className="glass p-6 rounded-2xl flex flex-col items-center justify-center">
<div className="flex items-center gap-2 mb-6">
<span className="iconify text-emerald-400" data-icon="lucide:ticket" data-width="24"></span>
<h3 className="text-lg font-bold text-white">Kazı Kazan</h3>
</div>
<div className="relative w-[300px] h-[160px] rounded-lg overflow-hidden select-none shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700">
<div className="text-center">
<p className="text-xs text-slate-500 uppercase">Ödül</p>
<p className="text-3xl font-bold text-emerald-400 font-mono" id="scratch-prize">?</p>
</div>
</div>

<canvas className="absolute inset-0 z-10 w-full h-full" id="scratchCanvas"></canvas>
</div>
<div className="mt-6 flex flex-col items-center gap-2">
<p className="text-xs text-slate-500">Bedel: <span className="text-red-400">$0.50</span></p>
<button className="text-xs font-medium text-emerald-400 hover:text-emerald-300 underline" onclick="initScratchGame()">Yeni Kart Satın Al</button>
</div>
</div>

<div className="glass p-6 rounded-2xl flex flex-col items-center">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-amber-400" data-icon="lucide:coins" data-width="24"></span>
<h3 className="text-lg font-bold text-white">Yazı Tura</h3>
</div>
<div className="perspective-1000 w-32 h-32 my-6">
<div className="w-full h-full relative transform-style-3d transition-transform duration-1000" id="coin">

<div className="absolute inset-0 w-full h-full bg-amber-400 rounded-full backface-hidden flex items-center justify-center border-4 border-amber-600 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
<span className="text-4xl font-black text-amber-900 drop-shadow-sm">Y</span>
</div>

<div className="absolute inset-0 w-full h-full bg-slate-200 rounded-full backface-hidden rotate-y-180 flex items-center justify-center border-4 border-slate-400 shadow-xl">
<span className="text-4xl font-black text-slate-700 drop-shadow-sm">T</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-4">
<button className="py-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-white transition-all font-medium" onclick="flipCoin('heads')">
                                Yazı ($1.00)
                            </button>
<button className="py-3 rounded-lg bg-slate-500/10 border border-slate-500/30 text-slate-300 hover:bg-slate-500 hover:text-white transition-all font-medium" onclick="flipCoin('tails')">
                                Tura ($1.00)
                            </button>
</div>
<p className="text-[10px] text-slate-500 mt-3">Kazanç: Bahsin 2 katı.</p>
</div>

<div className="glass p-6 rounded-2xl">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="iconify text-blue-400" data-icon="lucide:trophy" data-width="24"></span>
<h3 className="text-lg font-bold text-white">Maç Sonucu</h3>
</div>
<span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/20">Canlı</span>
</div>
<div className="bg-black/40 rounded-xl p-4 border border-white/5">
<div className="flex justify-between items-center mb-4">
<div className="text-center w-1/3">
<div className="w-10 h-10 mx-auto rounded-full bg-red-900/50 flex items-center justify-center text-red-200 font-bold mb-1">GS</div>
<span className="text-xs font-bold text-white">Galatasaray</span>
</div>
<div className="text-center w-1/3">
<span className="text-xs text-slate-500 block">MS Oranları</span>
<span className="text-lg font-bold text-white">VS</span>
</div>
<div className="text-center w-1/3">
<div className="w-10 h-10 mx-auto rounded-full bg-yellow-900/50 flex items-center justify-center text-yellow-200 font-bold mb-1">FB</div>
<span className="text-xs font-bold text-white">Fenerbahçe</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="p-2 bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/50 rounded flex flex-col items-center transition-all group" onclick="placeBet('GS')">
<span className="text-xs text-slate-400 group-hover:text-green-300">MS 1</span>
<span className="font-bold text-white">2.10</span>
</button>
<button className="p-2 bg-white/5 hover:bg-slate-500/20 border border-white/10 hover:border-slate-500/50 rounded flex flex-col items-center transition-all group" onclick="placeBet('X')">
<span className="text-xs text-slate-400 group-hover:text-slate-300">X</span>
<span className="font-bold text-white">3.20</span>
</button>
<button className="p-2 bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/50 rounded flex flex-col items-center transition-all group" onclick="placeBet('FB')">
<span className="text-xs text-slate-400 group-hover:text-green-300">MS 2</span>
<span className="font-bold text-white">2.45</span>
</button>
</div>
</div>
<div className="mt-4">
<h4 className="text-sm font-semibold text-white mb-2">Spor Toto 15 (Hızlı)</h4>
<div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
<span className="text-xs text-slate-400">Rastgele 15 maç kuponu yap.</span>
<button className="px-3 py-1.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded transition-colors" onclick="playToto()">Oyna ($2)</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-8 animate-fade-in max-w-4xl mx-auto" id="wallet">
<div className="text-center py-6">
<p className="text-sm text-slate-400">Toplam Kullanılabilir Bakiye</p>
<h2 className="text-5xl font-bold text-white tracking-tighter mt-2 mb-6" id="wallet-balance-display">$0.00</h2>
<div className="flex justify-center gap-4">
<button className="px-6 py-2.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2" onclick="document.getElementById('deposit-modal').classList.remove('hidden')">
<span className="iconify" data-icon="lucide:arrow-down-circle"></span> Para Yatır
                        </button>
</div>
</div>

<div className="glass p-8 rounded-2xl border border-white/5">
<h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:banknote"></span> Para Çekme Talep Formu
                    </h3>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="withdraw_method" onchange="togglePaymentFields()" type="radio" value="bank"/>
<div className="p-4 rounded-xl border border-white/10 bg-slate-900/40 peer-checked:bg-indigo-900/20 peer-checked:border-indigo-500 transition-all hover:border-white/20 flex items-center gap-3">
<span className="iconify text-slate-300 w-8 h-8" data-icon="lucide:landmark"></span>
<div>
<p className="font-medium text-white text-sm">Banka Havalesi / EFT</p>
<p className="text-[10px] text-slate-500">Min: $50</p>
</div>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="withdraw_method" onchange="togglePaymentFields()" type="radio" value="visa"/>
<div className="p-4 rounded-xl border border-white/10 bg-slate-900/40 peer-checked:bg-indigo-900/20 peer-checked:border-indigo-500 transition-all hover:border-white/20 flex items-center gap-3">
<span className="iconify text-blue-400 w-8 h-8" data-icon="logos:visa"></span>
<div>
<p className="font-medium text-white text-sm">Visa Direct</p>
<p className="text-[10px] text-slate-500">Min: $20 (Anında)</p>
</div>
</div>
</label>
</div>
<form className="space-y-5" onsubmit="handleWithdraw(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs text-slate-400 mb-1.5">Çekilecek Tutar ($)</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 transition-all" id="w-amount" min="20" placeholder="0.00" required="" type="number"/>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5">Ad Soyad (Hesap Sahibi)</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 transition-all" placeholder="Tam adınız" required="" type="text"/>
</div>
</div>

<div className="space-y-1.5" id="field-bank">
<label className="block text-xs text-slate-400">IBAN Numarası</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 font-mono tracking-wide transition-all" placeholder="TR00 0000 0000 0000 0000 0000 00" type="text"/>
</div>
<div className="hidden space-y-1.5" id="field-visa">
<label className="block text-xs text-slate-400">Kart Numarası (Sadece Banka Kartı)</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 font-mono tracking-wide transition-all" placeholder="0000 0000 0000 0000" type="text"/>
</div>
<button className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2" type="submit">
<span className="iconify" data-icon="lucide:check-circle"></span>
                            Ödeme Talep Et
                        </button>
</form>
</div>
</section>

<section className="hidden space-y-6 animate-fade-in" id="tasks">
<h2 className="text-2xl font-bold text-white mb-4">Aktif Görevler</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="glass p-5 rounded-xl flex items-center justify-between border border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center text-red-500">
<span className="iconify" data-icon="lucide:youtube" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-white">Sponsor Videosu İzle</h4>
<p className="text-xs text-slate-500">+ $0.50 Kazanç</p>
</div>
</div>
<button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white text-xs rounded border border-white/10 transition-colors" onclick="doTask(this, 0.50)">Başla</button>
</div>
<div className="glass p-5 rounded-xl flex items-center justify-between border border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-500">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-white">Twitter'da Takip Et</h4>
<p className="text-xs text-slate-500">+ $0.25 Kazanç</p>
</div>
</div>
<button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white text-xs rounded border border-white/10 transition-colors" onclick="doTask(this, 0.25)">Başla</button>
</div>
</div>
</section>
</main>
</div>

<div className="hidden fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" id="deposit-modal">
<div className="glass p-6 rounded-xl max-w-sm w-full relative">
<button className="absolute top-4 right-4 text-slate-500 hover:text-white" onclick="document.getElementById('deposit-modal').classList.add('hidden')">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
<h3 className="text-lg font-bold text-white mb-2">Para Yatır</h3>
<p className="text-sm text-slate-400 mb-4">Bu bir demo değil simülasyondur. Gerçek para yatırma işlemleri admin onayı gerektirir.</p>
<div className="bg-indigo-900/30 p-3 rounded border border-indigo-500/30 text-indigo-200 text-xs mb-4">
                Test modu: Bakiyeniz bittiğinde otomatik $50 hediye tanımlanacaktır.
            </div>
<button className="w-full py-2 bg-indigo-600 text-white rounded font-medium" onclick="addFakeFunds()">Test Bakiyesi Ekle ($50)</button>
</div>
</div>


    </>
  );
}
