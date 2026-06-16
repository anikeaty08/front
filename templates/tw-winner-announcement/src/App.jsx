import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        lucide.createIcons();

        /* ========================================== */
        /* CONFIGURATION: GENERATED WINNER NAMES      */
        /* ========================================== */
        const WINNER_DATA = {
            'iPhone 17 Pro Max': ['Winner 1'],
            'AirPods Pro 3': ['Winner 1', 'Winner 2', 'Winner 3', 'Winner 4', 'Winner 5'],
            'Insta360 GO 3S': ['Winner 1', 'Winner 2'],
            '50 USDT': Array.from({length: 20}, (_, i) => `Winner ${i + 1}`), // Generates Winner 1 to Winner 20
            '600 USDT of SCA': ['Winner 1'] // Updated from 500 to 600 USDT
        };
        /* ========================================== */

        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalContent = document.getElementById('modalContent');
        const modalTitle = document.getElementById('modalTitle');
        const winnersList = document.getElementById('winnersList');
        const winnerText = document.getElementById('winnerText');
        
        const countdownState = document.getElementById('countdownState');
        const resultState = document.getElementById('resultState');
        const countdownNumber = document.getElementById('countdownNumber');

        let countdownInterval;

        function triggerWinSequence(title) {
            // 1. Retrieve Winners from Data Object
            // If no data found for title, default to a placeholder
            const winners = WINNER_DATA[title] || ['Winner 1'];
            const winnerCount = winners.length;

            // 2. Set Content
            modalTitle.textContent = title;
            // Updated text as requested
            winnerText.textContent = "恭喜得獎者!";

            // 3. Generate Winners HTML
            winnersList.innerHTML = ''; 
            
            winners.forEach((name) => {
                const div = document.createElement('div');
                div.className = "flex items-center justify-between p-2.5 rounded-md bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors group";
                
                div.innerHTML = `
                    <div class="flex items-center gap-3">
                        <div class="w-6 h-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-[10px] font-mono font-bold text-white/70 ring-1 ring-white/10">
                            ${name.split(' ')[1] || '1'}
                        </div>
                        <span class="text-xs font-medium text-white/90 font-mono">${name}</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <svg class="w-3 h-3 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-[9px] uppercase font-bold tracking-wider text-emerald-500/90 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            Winner
                        </span>
                    </div>
                `;
                winnersList.appendChild(div);
            });

            // 4. Reset Modal to Countdown State
            countdownState.classList.remove('hidden');
            resultState.classList.remove('flex');
            resultState.classList.add('hidden');
            countdownNumber.textContent = "3";

            // 5. Show Modal
            modalBackdrop.classList.remove('hidden');
            requestAnimationFrame(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            });

            // 6. Start Countdown
            let count = 3;
            if(countdownInterval) clearInterval(countdownInterval);

            countdownInterval = setInterval(() => {
                count--;
                if (count > 0) {
                    countdownNumber.textContent = count;
                } else {
                    clearInterval(countdownInterval);
                    revealWinner();
                }
            }, 800);
        }

        function revealWinner() {
            // Switch Views
            countdownState.classList.add('hidden');
            resultState.classList.remove('hidden');
            resultState.classList.add('flex');

            // Trigger Confetti
            var duration = 3000;
            var end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#10b981', '#ffffff'], // Emerald and White
                    zIndex: 100
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#10b981', '#ffffff'],
                    zIndex: 100
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }

        function closeModal() {
            if(countdownInterval) clearInterval(countdownInterval);
            
            modalBackdrop.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            
            setTimeout(() => {
                modalBackdrop.classList.add('hidden');
            }, 300);
        }

        // Close on backdrop click
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<div className="fixed overflow-hidden -z-20 bg-black w-full h-full top-0 right-0 bottom-0 left-0">
<video autoplay="" className="min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 grayscale-[20%] contrast-125 w-auto h-auto object-cover absolute top-1/2 left-1/2" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&amp;w=2048&amp;auto=format&amp;fit=crop">
<source src="https://assets.mixkit.co/videos/preview/mixkit-flying-through-infinite-stars-in-space-1597-large.mp4" type="video/mp4"/>
</video>
</div>

<div className="fixed -z-10 backdrop-blur-[1px] bg-gradient-to-b from-black/30 via-black/10 to-black/90 top-0 right-0 bottom-0 left-0"></div>

<nav className="md:p-8 flex fixed z-10 bg-gradient-to-b from-black/60 to-transparent w-full pt-6 pr-6 pb-6 pl-6 top-0 left-0 items-center justify-between">
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
</div>
<button className="md:hidden text-white/80">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<main className="flex-grow flex flex-col z-0 w-full h-full pt-32 pr-4 pb-12 pl-4 relative items-center justify-center">

<div className="md:mb-16 text-center max-w-4xl mr-auto mb-16 ml-auto space-y-6">

<img alt="Flipster" className="md:h-8 select-none opacity-80 h-6 object-cover bg-center mr-auto ml-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff820466-ae65-49fe-a290-7e4f4747675e_1600w.png"/>
<h1 className="md:text-6xl bg-clip-text text-4xl font-medium text-transparent tracking-tighter bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl">誰是贏家?</h1>
<p className="leading-relaxed text-sm font-normal text-gray-50/50 tracking-wide max-w-lg mr-auto ml-auto">點擊各獎揭曉得獎者!</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 z-20 w-full max-w-6xl mr-auto ml-auto pr-2 pl-2">

<button className="group flex flex-col transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] overflow-hidden text-left bg-white/5 w-full h-64 border-white/10 border rounded-xl relative backdrop-blur-sm" onclick="triggerWinSequence('AirPods Pro 3')">
<div className="overflow-hidden w-full h-2/3 relative">
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div><img alt="Headphones" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100 bg-center opacity-80 w-full h-full object-cover z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d0fb503-47e7-4925-a16e-1cb4cf579a02_800w.png"/>
</div>
<div className="flex flex-col z-20 h-1/3 border-white/5 border-t pt-4 pr-4 pb-4 pl-4 relative justify-center">
<span className="text-xs font-semibold text-white tracking-tight">AirPods Pro 3</span>
<span className="text-[10px] uppercase text-white/40 tracking-widest mt-1">5 位得獎者</span>
</div>
</button>

<button className="group relative flex flex-col text-left h-64 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] overflow-hidden w-full" onclick="triggerWinSequence('600 USDT of SCA')">
<div className="h-2/3 w-full overflow-hidden relative">
<div className="z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Controller" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d66ef1f2-93ea-47ad-b9ec-becf0881828c_800w.png"/>
</div>
<div className="h-1/3 p-4 flex flex-col justify-center relative z-20 border-t border-white/5 bg-white/[0.02]">
<span className="text-xs font-semibold text-white tracking-tight">600 USDT of SCA</span>
<span className="text-[10px] uppercase text-white/40 tracking-widest mt-1">1 位得獎者</span>
</div>
</button>

<button className="group flex flex-col transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] overflow-hidden z-10 text-left bg-white/5 w-full h-64 border-white/10 border rounded-xl relative backdrop-blur-sm" onclick="triggerWinSequence('iPhone 17 Pro Max')">
<div className="overflow-hidden w-full h-2/3 z-10 relative">
<div className="z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div><img alt="Prize 1" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4b99980-6d0a-456d-afb0-98ce514cfc0d_800w.png"/>
</div>
<div className="flex flex-col z-10 h-1/3 border-white/5 border-t pt-4 pr-4 pb-4 pl-4 relative justify-center">
<span className="text-xs font-semibold text-white tracking-tight">iPhone 17 Pro Max</span>
<span className="text-[10px] uppercase text-white/40 tracking-widest mt-1">1 位得獎者</span>
</div>
</button>

<button className="group flex flex-col transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] overflow-hidden text-left bg-white/5 w-full h-64 border-white/10 border rounded-xl relative backdrop-blur-sm" onclick="triggerWinSequence('Insta360 GO 3S')">
<div className="h-2/3 w-full overflow-hidden relative">
<div className="z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="VR" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24e66971-666d-4c8f-b978-1b066fbcf19f_800w.png" style={{}}/>
</div>
<div className="h-1/3 p-4 flex flex-col justify-center relative z-20 border-t border-white/5 bg-white/[0.02]">
<span className="text-xs font-semibold text-white tracking-tight">Insta360 GO 3S</span>
<span className="text-[10px] uppercase text-white/40 tracking-widest mt-1">2 位得獎者</span>
</div>
</button>

<button className="group relative flex flex-col text-left h-64 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] overflow-hidden w-full" onclick="triggerWinSequence('50 USDT')">
<div className="h-2/3 w-full overflow-hidden relative">
<div className="z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Drone" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d70cc1f-2dde-49f9-99ed-85646fa34409_800w.png"/>
</div>
<div className="h-1/3 p-4 flex flex-col justify-center relative z-20 border-t border-white/5 bg-white/[0.02]">
<span className="text-xs font-semibold text-white tracking-tight">50 USDT</span>
<span className="text-[10px] uppercase text-white/40 tracking-widest mt-1">20 位得獎者</span>
</div>
</button>
</div>
</main>



<div aria-hidden="true" className="fixed hidden flex transition-opacity duration-300 bg-black/60 opacity-0 top-0 right-0 bottom-0 left-0 backdrop-blur-md items-center justify-center" id="modalBackdrop">

<div className="glass-panel flex flex-col transform transition-transform duration-300 min-h-[350px] overflow-hidden text-center w-full max-w-sm max-h-[550px] border-white/10 border rounded-2xl mr-4 ml-4 relative shadow-2xl scale-95 items-center justify-center" id="modalContent">

<button className="hover:text-white transition-colors z-50 hover:bg-white/10 text-white/40 bg-white/5 rounded-full pt-1 pr-1 pb-1 pl-1 absolute top-4 right-4" onclick="closeModal()">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>

<div className="flex flex-col w-full pt-12 pb-12 items-center justify-center" id="countdownState">
<div className="flex w-24 h-24 relative items-center justify-center">
<span className="animate-number text-7xl font-semibold text-white tracking-tighter" id="countdownNumber">3</span>
<div className="animate-[spin_3s_linear_infinite] border-white/10 border rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<p className="text-[10px] uppercase animate-pulse text-slate-200 tracking-widest font-mono mt-8">抽獎中...</p>
</div>

<div className="hidden flex-col animate-[fadeIn_0.5s_ease-out] w-full h-full pt-8 pr-6 pb-6 pl-6 items-center justify-between" id="resultState">
<div className="flex flex-col w-full h-full items-center">

<div className="flex shrink-0 text-emerald-400 bg-gradient-to-b from-emerald-500/20 to-emerald-500/5 w-12 h-12 border-emerald-500/20 border rounded-full mb-4 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)] items-center justify-center">
<svg className="lucide lucide-crown w-6 h-6 z-10" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<h2 className="text-xl font-semibold text-white tracking-tight mb-1" id="modalTitle">Prize Name</h2>
<p className="z-10 text-xs text-white/50 mb-6" id="winnerText">Winner Announcement</p>

<div className="w-full relative flex-1 min-h-[150px] overflow-hidden rounded-lg bg-black/20 border border-white/5">
<div className="absolute inset-0 overflow-y-auto custom-scrollbar p-2">
<div className="flex flex-col gap-1.5" id="winnersList">

</div>
</div>
</div>
</div>

<button className="hover:bg-gray-100 transition-all active:scale-[0.98] shadow-white/5 shrink-0 text-xs font-semibold text-black bg-white w-full rounded-lg mt-6 pt-2.5 pb-2.5 shadow-lg" onclick="closeModal()">
                    完成
                </button>
</div>
</div>
</div>

<footer className="z-10 text-center w-full pt-8 pb-8 relative">
<div className="text-[10px] uppercase text-white/20 tracking-widest">flipster.io</div>
</footer>


    </>
  );
}
