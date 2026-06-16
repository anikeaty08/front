import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#007E7A',
light: '#009e99',
dark: '#005f5c',
50: '#f0fdfc'
}
}
}
}
}



        // Theme Toggle Logic
        function toggleTheme() {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
            } else {
                html.classList.add('dark');
            }
        }

        // Navigation Logic
        function navigateTo(screenId) {
            // Hide all screens
            document.querySelectorAll('.screen').forEach(el => {
                el.classList.remove('active');
                el.classList.add('inactive');
                setTimeout(() => {
                    if(!el.classList.contains('active')) el.style.display = 'none';
                }, 400); 
            });

            // Reset modal if leaving reward screen
            if (screenId !== 'screen-reward') {
                setTimeout(closeRewardModal, 400);
            }

            // Show target screen
            const target = document.getElementById(screenId);
            target.style.display = 'flex';
            
            setTimeout(() => {
                target.classList.remove('inactive');
                target.classList.add('active');
            }, 10);

            // Update Nav State
            document.querySelectorAll('.nav-item').forEach(btn => {
                const isTarget = btn.getAttribute('data-target') === screenId;
                
                if(isTarget) {
                    btn.classList.remove('text-neutral-400', 'dark:text-neutral-500');
                    btn.classList.add('text-neutral-900', 'dark:text-white');
                } else if (btn.getAttribute('data-target')) {
                    btn.classList.add('text-neutral-400', 'dark:text-neutral-500');
                    btn.classList.remove('text-neutral-900', 'dark:text-white');
                }
            });
        }

        // Spin Logic
        let isSpinning = false;
        function spinWheel() {
            if (isSpinning) return;
            isSpinning = true;
            
            const wheel = document.getElementById('spin-wheel');
            const degrees = Math.floor(3000 + Math.random() * 360); 
            
            wheel.style.transform = `rotate(${degrees}deg)`;

            setTimeout(() => {
                showRewardModal();
                isSpinning = false;
                setTimeout(() => {
                    wheel.style.transition = 'none';
                    wheel.style.transform = `rotate(${degrees % 360}deg)`;
                    setTimeout(() => { wheel.style.transition = 'transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)'; }, 50);
                }, 1000);
            }, 4000);
        }

        function showRewardModal() {
            const modal = document.getElementById('reward-modal');
            const card = document.getElementById('reward-card');
            modal.classList.remove('pointer-events-none', 'opacity-0');
            modal.classList.add('opacity-100');
            card.classList.remove('scale-95');
            card.classList.add('scale-100');
            createConfetti();
        }

        function closeRewardModal() {
            const modal = document.getElementById('reward-modal');
            const card = document.getElementById('reward-card');
            modal.classList.remove('opacity-100');
            modal.classList.add('opacity-0', 'pointer-events-none');
            card.classList.remove('scale-100');
            card.classList.add('scale-95');
            document.getElementById('confetti-container').innerHTML = ''; 
        }

        function addRewardAndGoHistory() {
            closeRewardModal();
            setTimeout(() => {
                navigateTo('screen-history');
                const list = document.getElementById('history-list');
                const newItem = `
                <div class="flex items-center justify-between group animate-[fadeIn_0.5s_ease-out]">
                    <div class="flex items-center gap-4">
                        <div class="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-brand dark:text-brand-light">
                            <iconify-icon icon="lucide:sparkles" width="18"></iconify-icon>
                        </div>
                        <div>
                            <div class="text-sm text-neutral-900 dark:text-white font-medium">New Cashback</div>
                            <div class="text-[10px] text-neutral-500">Just now • Credited</div>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="text-sm text-brand font-medium">+₹50</div>
                    </div>
                </div>`;
                list.insertAdjacentHTML('afterbegin', newItem);
            }, 300);
        }

        function createConfetti() {
            const container = document.getElementById('confetti-container');
            // Updated confetti colors to match the new Teal theme
            const colors = ['#007E7A', '#009e99', '#facc15', '#a855f7', '#ffffff'];
            
            for (let i = 0; i < 40; i++) {
                const conf = document.createElement('div');
                conf.classList.add('confetti');
                conf.style.left = Math.random() * 100 + '%';
                conf.style.top = -10 + 'px';
                conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                conf.style.animationDuration = (Math.random() * 2 + 2) + 's';
                conf.style.animationDelay = (Math.random() * 1) + 's';
                container.appendChild(conf);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<button className="absolute top-6 right-6 p-2 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors z-50" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block" icon="lucide:sun-medium" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="lucide:moon" width="20"></iconify-icon>
</button>

<div className="relative w-full max-w-sm h-[844px] bg-white dark:bg-neutral-950 shadow-2xl overflow-hidden sm:rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 transition-colors duration-300">

<div className="absolute top-0 w-full px-6 py-3 flex justify-between items-center z-50 text-[10px] font-medium tracking-wide text-neutral-900 dark:text-neutral-500">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="lucide:signal" width="14"></iconify-icon>
<iconify-icon icon="lucide:wifi" width="14"></iconify-icon>
<iconify-icon icon="lucide:battery-medium" width="16"></iconify-icon>
</div>
</div>

<div className="screen active flex flex-col pt-12 pb-24 hide-scrollbar" id="screen-home">

<div className="px-6 flex justify-between items-center mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-50 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center text-xs font-medium text-brand dark:text-white border border-neutral-200 dark:border-neutral-600 shadow-inner">
                        JD
                    </div>
</div>
<div className="relative">
<iconify-icon className="text-neutral-500 dark:text-neutral-400" icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-white dark:border-neutral-950"></span>
</div>
</div>

<div className="px-6 mb-8">
<div className="text-neutral-500 text-xs font-medium uppercase tracking-wider mb-1">Total Balance</div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-light text-neutral-400">₹</span>
<span className="text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight transition-colors">1,24,500</span>
<span className="text-xl font-light text-neutral-400">.00</span>
</div>
<div className="flex gap-2 mt-2 text-xs text-brand font-medium items-center bg-brand-50 dark:bg-brand/10 w-fit px-2 py-1 rounded-md">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon>
<span>+2.4% this month</span>
</div>
</div>

<div className="px-6 mb-8">
<div className="relative overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 group transition-colors duration-300">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/5 dark:bg-brand/10 rounded-full blur-3xl"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-base font-medium text-neutral-900 dark:text-white tracking-tight mb-1">Reward Unlocked</h3>
<p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[80%]">You've completed 5 transactions. Spin to claim your cashback.</p>
</div>
<div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-brand dark:text-brand-light shadow-sm dark:shadow-none">
<iconify-icon icon="lucide:sparkles" width="16"></iconify-icon>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-brand hover:bg-brand-dark dark:bg-white text-white dark:text-neutral-950 text-sm font-semibold tracking-tight shadow-lg shadow-brand/20 dark:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2" onclick="navigateTo('screen-reward')">
<span>Spin Now</span>
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="px-6 mb-8">
<div className="grid grid-cols-4 gap-4">
<div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer group">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white transition-colors group-hover:border-brand/30 dark:group-hover:border-neutral-700 group-hover:text-brand dark:group-hover:text-white">
<iconify-icon icon="lucide:qr-code" width="20"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 dark:text-neutral-400">Scan</span>
</div>
<div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer group">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white transition-colors group-hover:border-brand/30 dark:group-hover:border-neutral-700 group-hover:text-brand dark:group-hover:text-white">
<iconify-icon icon="lucide:send" width="20"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 dark:text-neutral-400">Send</span>
</div>
<div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer group">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white transition-colors group-hover:border-brand/30 dark:group-hover:border-neutral-700 group-hover:text-brand dark:group-hover:text-white">
<iconify-icon icon="lucide:wallet" width="20"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 dark:text-neutral-400">Add</span>
</div>
<div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer group">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white transition-colors group-hover:border-brand/30 dark:group-hover:border-neutral-700 group-hover:text-brand dark:group-hover:text-white">
<iconify-icon icon="lucide:more-horizontal" width="20"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 dark:text-neutral-400">More</span>
</div>
</div>
</div>

<div className="px-6">
<div className="flex justify-between items-end mb-4">
<h3 className="text-sm font-medium text-neutral-900 dark:text-white tracking-tight">Recent</h3>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center transition-colors">
<iconify-icon className="text-neutral-400" icon="lucide:shopping-bag" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-neutral-900 dark:text-white">Starbucks</div>
<div className="text-[10px] text-neutral-500">Today, 10:23 AM</div>
</div>
</div>
<div className="text-sm text-neutral-900 dark:text-white font-medium">- ₹340</div>
</div>
</div>
</div>
</div>

<div className="screen flex flex-col h-full bg-white/95 dark:bg-neutral-950/95 backdrop-blur-3xl z-20 transition-colors duration-300" id="screen-reward">

<div className="px-6 py-4 pt-12 flex items-center justify-between relative z-10">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 active:scale-95 transition-all" onclick="navigateTo('screen-home')">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
<div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Your Reward</div>
<div className="w-10"></div> 
</div>

<div className="flex-1 flex flex-col items-center justify-center relative">
<div className="text-center mb-8 relative z-10">
<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-2">Spin &amp; Win</h2>
<p className="text-xs text-neutral-500 dark:text-neutral-400">Tap the wheel to reveal your prize</p>
</div>

<div className="wheel-container mb-12 relative cursor-pointer active:scale-[0.99] transition-transform" onclick="spinWheel()">
<div className="marker"></div>
<div className="wheel" id="spin-wheel">

<div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-neutral-400 dark:text-white/80">
<iconify-icon icon="lucide:coins" width="24"></iconify-icon>
</div>
<div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 text-neutral-400 dark:text-white/80 rotate-180">
<iconify-icon icon="lucide:ticket" width="24"></iconify-icon>
</div>
<div className="absolute top-1/2 left-[15%] -translate-y-1/2 text-neutral-400 dark:text-white/80 -rotate-90">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<div className="absolute top-1/2 right-[15%] -translate-y-1/2 text-neutral-400 dark:text-white/80 rotate-90">
<iconify-icon icon="lucide:gift" width="24"></iconify-icon>
</div>
</div>
<div className="wheel-center">
<div className="w-12 h-12 bg-white dark:bg-neutral-950 rounded-full flex items-center justify-center border border-neutral-200 dark:border-neutral-800 transition-colors">
<span className="text-[10px] font-bold tracking-widest uppercase text-brand">Spin</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 dark:bg-black/60 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-500" id="reward-modal">
<div className="w-[85%] bg-white dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 text-center shadow-2xl transform scale-95 transition-all duration-500" id="reward-card">
<div className="w-16 h-16 mx-auto bg-gradient-to-tr from-brand to-teal-400 rounded-full flex items-center justify-center text-white mb-4 shadow-[0_0_30px_-5px_rgba(0,126,122,0.4)]">
<iconify-icon icon="lucide:indian-rupee" width="32"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-1">₹50</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Cashback added to your balance</p>
<div className="space-y-3">
<button className="w-full py-3 bg-brand hover:bg-brand-dark dark:bg-white text-white dark:text-black text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity" onclick="addRewardAndGoHistory()">
                            View History
                        </button>
<button className="w-full py-3 text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white text-sm font-medium transition-colors" onclick="closeRewardModal()">
                            Close
                        </button>
</div>
</div>

<div className="absolute inset-0 pointer-events-none overflow-hidden" id="confetti-container"></div>
</div>
</div>

<div className="screen flex flex-col pt-12 pb-24 hide-scrollbar" id="screen-history">

<div className="px-6 flex items-center justify-between mb-6">
<h1 className="text-xl font-semibold text-neutral-900 dark:text-white tracking-tight">Reward History</h1>
<div className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
<iconify-icon className="text-yellow-600 dark:text-yellow-500" icon="lucide:trophy" width="14"></iconify-icon>
<span className="text-xs font-medium text-neutral-900 dark:text-white">₹850 Earned</span>
</div>
</div>

<div className="px-6 mb-6">
<div className="flex p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-transparent">
<button className="flex-1 py-1.5 text-xs font-medium text-neutral-900 dark:text-neutral-950 bg-white dark:bg-white rounded-md shadow-sm transition-all">All</button>
<button className="flex-1 py-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all">Cashback</button>
<button className="flex-1 py-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all">Coins</button>
</div>
</div>

<div className="px-6 space-y-4" id="history-list">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-brand dark:text-brand-light group-hover:border-brand/30 transition-colors">
<iconify-icon icon="lucide:disc" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm text-neutral-900 dark:text-white font-medium">Spin Wheel Reward</div>
<div className="text-[10px] text-neutral-500">2 mins ago • Credited</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-brand font-medium">+₹50</div>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-purple-500 dark:text-purple-400">
<iconify-icon icon="lucide:ticket" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm text-neutral-900 dark:text-white font-medium">Scratch Card</div>
<div className="text-[10px] text-neutral-500">Yesterday • Credited</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-brand font-medium">+₹15</div>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-yellow-600 dark:text-yellow-500">
<iconify-icon icon="lucide:coins" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm text-neutral-900 dark:text-white font-medium">Referral Bonus</div>
<div className="text-[10px] text-neutral-500">20 Oct • Expired</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-neutral-400 dark:text-neutral-500 font-medium line-through">100 pts</div>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-brand dark:text-brand-light">
<iconify-icon icon="lucide:disc" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm text-neutral-900 dark:text-white font-medium">Spin Wheel Reward</div>
<div className="text-[10px] text-neutral-500">18 Oct • Credited</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-brand font-medium">+₹25</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-lg border-t border-neutral-200 dark:border-neutral-800 z-40 pb-5 pt-3 transition-colors duration-300">
<div className="grid grid-cols-4 place-items-center">
<button className="nav-item flex flex-col items-center gap-1 text-neutral-900 dark:text-white transition-colors" data-target="screen-home" onclick="navigateTo('screen-home')">
<iconify-icon icon="lucide:home" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
<iconify-icon icon="lucide:credit-card" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Cards</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors" data-target="screen-history" onclick="navigateTo('screen-history')">
<iconify-icon icon="lucide:history" width="20"></iconify-icon>
<span className="text-[10px] font-medium">History</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
<iconify-icon icon="lucide:user" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</button>
</div>
</div>
</div>


    </>
  );
}
