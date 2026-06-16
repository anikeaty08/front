import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Dropdown Logic
        const targetTrigger = document.getElementById('target-trigger');
        const targetMenu = document.getElementById('target-menu');
        const targetArrow = document.getElementById('target-arrow');
        const targetValue = document.getElementById('target-value');
        const targetOptions = document.querySelectorAll('.target-option');
        const dropdownContainer = document.getElementById('target-dropdown-container');

        // Toggle dropdown
        targetTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = targetMenu.classList.contains('hidden');
            if (isHidden) {
                targetMenu.classList.remove('hidden');
                targetArrow.style.transform = 'rotate(180deg)';
                targetTrigger.classList.add('bg-neutral-900');
            } else {
                targetMenu.classList.add('hidden');
                targetArrow.style.transform = 'rotate(0deg)';
                targetTrigger.classList.remove('bg-neutral-900');
            }
        });

        // Handle selection
        targetOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedText = option.innerText.replace('<', '').trim();
                targetValue.innerText = selectedText;
                
                // Simulate data refresh on change
                historyContainer.innerHTML = '<div class="p-4 text-center text-[#8DF885] text-[10px] animate-pulse">LOADING_DATA...</div>';
                setTimeout(() => {
                    generateHistory(); // Re-populate list
                }, 500);

                // Close menu
                targetMenu.classList.add('hidden');
                targetArrow.style.transform = 'rotate(0deg)';
                targetTrigger.classList.remove('bg-neutral-900');
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdownContainer.contains(e.target)) {
                targetMenu.classList.add('hidden');
                targetArrow.style.transform = 'rotate(0deg)';
                targetTrigger.classList.remove('bg-neutral-900');
            }
        });

        // Generate History Data
        const historyContainer = document.getElementById('history-container');
        
        function generateHistory() {
            const epochs = 15;
            let html = '';
            for (let i = 0; i < epochs; i++) {
                html += `
                    <div class="grid grid-cols-4 px-6 py-4 border-b border-neutral-900/50 hover:bg-neutral-900/80 transition-colors cursor-pointer group/row">
                        <div class="col-span-1 text-white group-hover/row:text-[#8DF885] text-[10px]">EPOCH_${String(12 - i).padStart(2, '0')}</div>
                        <div class="col-span-2 text-white text-[10px]">2025-07-${String(15 - i).padStart(2, '0')} -> 2025-07-${String(21 - i).padStart(2, '0')}</div>
                        <div class="col-span-1 text-right font-bold text-white group-hover/row:text-[#8DF885] group-hover/row:translate-x-[-2px] transition-transform">0 XP</div>
                    </div>
                `;
            }
            historyContainer.innerHTML = html;
        }
        
        // Initial Load
        generateHistory();

        // Big Rolling Number Animation (Load on Refresh)
        const counterElement = document.getElementById('points-counter');
        const targetNumber = 248925.00;
        const duration = 2500; // Total duration in ms
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;

        // Cubic Ease-out for smooth finish
        const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

        function animateNumberCount() {
            frame++;
            const progress = frame / totalFrames;
            const easedProgress = easeOutExpo(progress);
            
            const current = targetNumber * easedProgress;
            
            if (progress < 1) {
                // Update number format
                counterElement.innerText = current.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                
                // Add slight flicker/opacity variance during count for "digital" feel
                if(Math.random() > 0.8) {
                     counterElement.style.opacity = 0.8;
                } else {
                     counterElement.style.opacity = 1;
                }
                
                requestAnimationFrame(animateNumberCount);
            } else {
                // Ensure exact final number
                counterElement.innerText = targetNumber.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                counterElement.style.opacity = 1;
                counterElement.style.color = '#fff'; // Settle on white
            }
        }
        
        // Start animation immediately
        requestAnimationFrame(animateNumberCount);

        // Typing effect for "YOUR REWARDS"
        const textElement = document.querySelector('.typing-effect');
        const text = textElement.getAttribute('data-text');
        textElement.innerText = '';
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < text.length) {
                textElement.innerText += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100); 
            }
        }
        setTimeout(typeWriter, 500);

        // Terminal Command Simulator
        const cmdElement = document.querySelector('.typing-cmd');
        const commands = ['checking_integrity...', 'fetching_rewards...', 'syncing_ledger...', '_'];
        
        function cycleCommands() {
            if(Math.random() > 0.95) {
                const randomCmd = commands[Math.floor(Math.random() * (commands.length - 1))];
                let i = 0;
                cmdElement.innerText = '';
                const interval = setInterval(() => {
                    cmdElement.innerText += randomCmd[i];
                    i++;
                    if(i >= randomCmd.length) {
                        clearInterval(interval);
                        setTimeout(() => { cmdElement.innerText = '_'; }, 1000);
                    }
                }, 50);
            }
        }
        setInterval(cycleCommands, 2000);

        // Hacker Scramble Effect
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@";
        document.querySelectorAll('.glitch-hover').forEach(element => {
            element.addEventListener('mouseover', event => {
                let iteration = 0;
                const originalText = event.target.innerText;
                clearInterval(event.target.interval);
                
                event.target.interval = setInterval(() => {
                    event.target.innerText = originalText
                        .split("")
                        .map((letter, index) => {
                            if(index < iteration) return originalText[index];
                            return letters[Math.floor(Math.random() * 38)]
                        })
                        .join("");
                    
                    if(iteration >= originalText.length) clearInterval(event.target.interval);
                    iteration += 1 / 3;
                }, 30);
            });
        });

        // Initialize animation for card buttons
        document.querySelectorAll('.group-btn').forEach(btn => {
            const card = btn.closest('.group');
            if(card) {
                card.addEventListener('mouseenter', () => {
                    const original = "Execute Trade";
                    btn.firstChild.textContent = "INITIALIZING...";
                    setTimeout(() => {
                        btn.firstChild.textContent = original;
                    }, 300);
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="border-b border-neutral-900 bg-[#050505]/90 backdrop-blur-sm sticky top-0 z-40">
<div className="max-w-[1920px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-[#8DF885] rounded-none flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
<div className="w-2 h-2 bg-black transform rotate-45"></div>
</div>
<span className="font-bold text-white tracking-tight text-lg group-hover:text-[#8DF885] transition-colors">TxFlow</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-light text-neutral-400">
<a className="hover:text-white hover:underline decoration-[#8DF885] decoration-2 underline-offset-4 transition-all" href="#">Trade</a>
<a className="hover:text-white hover:underline decoration-[#8DF885] decoration-2 underline-offset-4 transition-all" href="#">Vaults</a>
<a className="text-white" href="#">Portfolio</a>
<a className="hover:text-white hover:underline decoration-[#8DF885] decoration-2 underline-offset-4 transition-all" href="#">Referrals</a>
<a className="hover:text-white hover:underline decoration-[#8DF885] decoration-2 underline-offset-4 transition-all" href="#">Explorer</a>
<a className="hover:text-white hover:underline decoration-[#8DF885] decoration-2 underline-offset-4 transition-all" href="#">Testnet</a>
<a className="hover:text-white hover:underline decoration-[#8DF885] decoration-2 underline-offset-4 transition-all" href="#">Docs</a>
<a className="hover:text-white hover:underline decoration-[#8DF885] decoration-2 underline-offset-4 transition-all" href="#">Points</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-[#8DF885] hover:bg-[#7ce075] text-black px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors">Deposit</button>
<button className="border border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 px-3 py-1.5 text-xs flex items-center gap-2 transition-colors">
<span className="w-2 h-2 bg-[#8DF885] rounded-none animate-pulse"></span>
                    0xEbbE...3EDC
                    <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="p-2 border border-neutral-800 hover:bg-neutral-800 transition-colors rounded-none flex items-center">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:monitor-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-64px)]">

<main className="lg:col-span-8 border-r border-neutral-900 p-8 flex flex-col relative">

<div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
<div className="flex items-center gap-2 text-lg">
<span className="text-[#8DF885] font-bold">&gt;</span>
<span className="tracking-tight text-white typing-effect" data-text="YOUR REWARDS"></span>
</div>
<div className="flex items-center gap-8 text-sm">
<a className="text-[#8DF885] border-b border-[#8DF885] pb-0.5 glitch-hover" href="#">[01] YOUR REWARDS</a>
<a className="text-neutral-500 hover:text-neutral-300 transition-colors glitch-hover" href="#">[02] LEADERBOARD</a>
<a className="flex items-center gap-2 text-neutral-300 hover:text-white ml-8" href="#">
<iconify-icon className="text-lg" icon="solar:file-text-linear"></iconify-icon>
                        LEARN MORE
                    </a>
</div>
</div>

<div className="mb-20 relative">

<div className="flex items-center gap-2 text-xs text-[#8DF885] mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
<span className="w-2 h-2 bg-[#8DF885] animate-status-glow rounded-none"></span>
                    Status: Extended
                </div>

<div className="text-center relative py-10 border-y border-neutral-900/50">
<div className="text-xs text-[#8DF885] font-bold tracking-[0.2em] mb-4 uppercase opacity-80">My Total Points <span className="cursor-blink">_</span></div>
<div className="font-light text-6xl md:text-8xl text-white tracking-tighter mb-2 tabular-nums">
<span id="points-counter">0.00</span>
</div>
<div className="text-xl md:text-2xl text-[#8DF885] font-medium tracking-tight mb-8 crt-text">XPoints</div>
<div className="flex justify-between items-end text-[10px] text-neutral-600 font-medium uppercase tracking-wider px-4">
<span className="flex gap-2">HASH: <span className="text-neutral-500">0x8A...29F</span></span>
<div className="flex flex-col items-center gap-1">
<iconify-icon className="text-neutral-700 text-base" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-neutral-500 tracking-widest">Total Rank</span>
<span className="text-white text-lg tracking-tight">#29,852</span>
</div>
<span className="flex gap-2">SYNC: <span className="text-[#8DF885]">ACTIVE</span></span>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#8DF885]/5 blur-[100px] rounded-none pointer-events-none"></div>
</div>
</div>

<div className="flex-1 flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2 text-[#8DF885]">
<iconify-icon className="text-base fill-[#8DF885]/20" icon="solar:bolt-linear"></iconify-icon>
<span className="text-sm font-bold tracking-widest uppercase">BOOST_VECTORS</span>
</div>
<span className="text-[10px] text-neutral-700 tracking-widest">[LOADED_4_MODULES]</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900">

<div className="bg-[#050505] p-6 relative group card-hover cursor-pointer overflow-hidden">
<div className="absolute top-4 right-4 text-[10px] text-neutral-700">MOD_01</div>
<div className="icon-box w-10 h-10 border border-neutral-800 rounded-none flex items-center justify-center mb-6 text-neutral-400 transition-colors bg-[#050505] relative z-10">

<iconify-icon className="tech-icon text-xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h3 className="text-white text-sm font-bold tracking-wide uppercase mb-2">Perps Trading Vol</h3>
<p className="text-neutral-500 text-xs leading-relaxed mb-8 h-12">
                            Trading activity on TxFlow Perpetual directly converts into Points. Trade more to earn more.
                        </p>
<button className="w-full border border-neutral-800 bg-neutral-900/30 text-xs text-neutral-300 py-3 uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-btn group-hover:border-[#8DF885]/50 group-hover:bg-[#8DF885]/10 group-hover:text-[#8DF885]">
                            Execute Trade <span className="transform transition-transform group-hover:translate-x-1">-&gt;</span>
</button>
</div>

<div className="bg-[#050505] p-6 relative group card-hover cursor-pointer overflow-hidden">
<div className="absolute top-4 right-4 text-[10px] text-neutral-700">MOD_02</div>
<div className="icon-box w-10 h-10 border border-neutral-800 rounded-none flex items-center justify-center mb-6 text-neutral-400 transition-colors bg-[#050505] relative z-10">

<iconify-icon className="tech-icon text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-white text-sm font-bold tracking-wide uppercase mb-2">OI Booster</h3>
<p className="text-neutral-500 text-xs leading-relaxed mb-8 h-12">
                            The more open interest (OI) you hold and the longer you hold it, the more points you earn.
                        </p>
<button className="w-full border border-neutral-800 bg-neutral-900/30 text-xs text-neutral-300 py-3 uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-btn group-hover:border-[#8DF885]/50 group-hover:bg-[#8DF885]/10 group-hover:text-[#8DF885]">
                            Execute Trade <span className="transform transition-transform group-hover:translate-x-1">-&gt;</span>
</button>
</div>

<div className="bg-[#050505] p-6 relative group card-hover cursor-pointer overflow-hidden">
<div className="absolute top-4 right-4 text-[10px] text-neutral-700">MOD_03</div>
<div className="icon-box w-10 h-10 border border-neutral-800 rounded-none flex items-center justify-center mb-6 text-neutral-400 transition-colors bg-[#050505] relative z-10">

<iconify-icon className="tech-icon text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-white text-sm font-bold tracking-wide uppercase mb-2">Balance Booster</h3>
<p className="text-neutral-500 text-xs leading-relaxed mb-8 h-12">
                            Maintaining a higher account balance during the event significantly increases earnings.
                        </p>
<button className="w-full border border-neutral-800 bg-neutral-900/30 text-xs text-neutral-300 py-3 uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-btn group-hover:border-[#8DF885]/50 group-hover:bg-[#8DF885]/10 group-hover:text-[#8DF885]">
                            Execute Trade <span className="transform transition-transform group-hover:translate-x-1">-&gt;</span>
</button>
</div>

<div className="bg-[#050505] p-6 relative group card-hover cursor-pointer overflow-hidden">
<div className="absolute top-4 right-4 text-[10px] text-neutral-700">MOD_04</div>
<div className="icon-box w-10 h-10 border border-neutral-800 rounded-none flex items-center justify-center mb-6 text-neutral-400 transition-colors bg-[#050505] relative z-10">

<iconify-icon className="tech-icon text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-white text-sm font-bold tracking-wide uppercase mb-2">Referring Boost</h3>
<p className="text-neutral-500 text-xs leading-relaxed mb-8 h-12">
                            Inviter and invitees receive +10% / +5% boost in points respectively.
                        </p>
<button className="w-full border border-neutral-800 bg-neutral-900/30 text-xs text-neutral-300 py-3 uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-btn group-hover:border-[#8DF885]/50 group-hover:bg-[#8DF885]/10 group-hover:text-[#8DF885]">
                            Execute Trade <span className="transform transition-transform group-hover:translate-x-1">-&gt;</span>
</button>
</div>
</div>
</div>
</main>

<aside className="lg:col-span-4 bg-[#080808] flex flex-col border-l border-neutral-900 h-[800px] lg:h-auto relative z-30">

<div className="p-4 border-b border-neutral-900 flex items-center justify-between bg-[#080808] z-50 relative">
<div className="flex items-center gap-2 text-xs font-bold text-white tracking-widest uppercase">
<iconify-icon className="text-neutral-500 text-sm" icon="solar:history-linear"></iconify-icon>
                    Points History
                </div>

<div className="relative" id="target-dropdown-container">
<button className="flex items-center gap-2 border border-neutral-800 px-3 py-1 bg-black hover:bg-neutral-900 transition-colors w-full text-left" id="target-trigger">
<span className="text-[10px] text-[#8DF885] uppercase">Target:</span>
<span className="text-[10px] text-white" id="target-value">STAGE_05</span>
<iconify-icon className="text-neutral-500 text-xs ml-2 transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="target-arrow"></iconify-icon>
</button>

<div className="hidden absolute right-0 top-full mt-1 w-36 bg-[#080808] border border-neutral-800 z-50 shadow-2xl shadow-black" id="target-menu">
<div className="flex flex-col">
<div className="target-option px-3 py-2 text-[10px] text-neutral-400 hover:text-white hover:bg-neutral-900 cursor-pointer flex justify-between items-center group transition-colors border-b border-neutral-900/50">
                                STAGE_05 <span className="text-[#8DF885] opacity-0 group-hover:opacity-100 transition-opacity">&lt;</span>
</div>
<div className="target-option px-3 py-2 text-[10px] text-neutral-400 hover:text-white hover:bg-neutral-900 cursor-pointer flex justify-between items-center group transition-colors border-b border-neutral-900/50">
                                STAGE_04 <span className="text-[#8DF885] opacity-0 group-hover:opacity-100 transition-opacity">&lt;</span>
</div>
<div className="target-option px-3 py-2 text-[10px] text-neutral-400 hover:text-white hover:bg-neutral-900 cursor-pointer flex justify-between items-center group transition-colors border-b border-neutral-900/50">
                                STAGE_03 <span className="text-[#8DF885] opacity-0 group-hover:opacity-100 transition-opacity">&lt;</span>
</div>
<div className="target-option px-3 py-2 text-[10px] text-neutral-400 hover:text-white hover:bg-neutral-900 cursor-pointer flex justify-between items-center group transition-colors">
                                ARCHIVE <span className="text-[#8DF885] opacity-0 group-hover:opacity-100 transition-opacity">&lt;</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 relative flex flex-col overflow-hidden scanner-grid z-10">

<div className="scanner-beam"></div>

<div className="grid grid-cols-4 px-6 py-3 border-b border-neutral-900 text-[9px] font-bold text-neutral-600 uppercase tracking-widest bg-[#080808] z-30 relative">
<div className="col-span-1">ID</div>
<div className="col-span-2">Timestamp</div>
<div className="col-span-1 text-right">Value</div>
</div>

<div className="flex-1 overflow-y-auto text-xs relative group z-20" id="history-container">

</div>

<div className="border-t border-neutral-900 bg-[#080808] p-3 z-30 flex items-center justify-between text-[10px] select-none">
<span className="text-neutral-600 uppercase tracking-widest">Page 01/12</span>
<div className="flex items-center gap-1">
<button className="w-6 h-6 flex items-center justify-center border border-neutral-800 hover:border-[#8DF885] hover:bg-[#8DF885]/10 hover:text-[#8DF885] transition-colors disabled:opacity-50 group">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="flex items-center gap-1 px-2">
<button className="w-5 h-5 flex items-center justify-center text-[#8DF885] font-bold bg-[#8DF885]/10 border border-[#8DF885]/30">1</button>
<button className="w-5 h-5 flex items-center justify-center text-neutral-500 hover:text-white transition-colors">2</button>
<button className="w-5 h-5 flex items-center justify-center text-neutral-500 hover:text-white transition-colors">3</button>
<span className="text-neutral-700">...</span>
<button className="w-5 h-5 flex items-center justify-center text-neutral-500 hover:text-white transition-colors">12</button>
</div>
<button className="w-6 h-6 flex items-center justify-center border border-neutral-800 hover:border-[#8DF885] hover:bg-[#8DF885]/10 hover:text-[#8DF885] transition-colors group">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="mt-auto border-t border-neutral-900 p-4 bg-black z-30 relative">
<div className="text-[#8DF885] text-xs mb-2 font-bold tracking-wide">
                        root@sys:~# <span className="text-white typing-cmd">_</span>
</div>
<div className="flex justify-between items-center text-[10px] text-neutral-600 font-medium tracking-wider uppercase border-t border-neutral-900 pt-2 mt-2">
<span>MEM: 64MB [OK]</span>
<span className="text-[#8DF885]/50">ENCRYPTED // TLS 1.3</span>
</div>
</div>
</div>
</aside>
</div>


    </>
  );
}
