import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // DOM Elements
        const stepUpload = document.getElementById('step-upload');
        const cardContainer = document.getElementById('card-container');
        const theCard = document.getElementById('the-card');
        const scanBorder = document.getElementById('scan-border');
        const resultGlow = document.getElementById('result-glow');
        const statusText = document.getElementById('status-text');
        const stepDetail = document.getElementById('step-detail');
        const navBar = document.getElementById('nav-bar');
        const resetBtn = document.getElementById('resetBtn');

        // State Machine
        function triggerScan() {
            // 1. Hide Upload, Show Card
            stepUpload.classList.add('opacity-0', 'scale-95');
            navBar.style.transform = 'translateY(100%)';
            
            setTimeout(() => {
                stepUpload.classList.add('hidden');
                cardContainer.classList.remove('hidden');
                
                // Animate entrance
                theCard.classList.add('scale-50', 'opacity-0');
                requestAnimationFrame(() => {
                    theCard.classList.remove('scale-50', 'opacity-0');
                });

                // 2. Start Scanning (Rotating Colors)
                statusText.innerText = "正在分析成分...";
                scanBorder.classList.remove('opacity-0');
                
                // Simulate Processing Time (2.5 seconds)
                setTimeout(() => {
                    finishScan();
                }, 2500);

            }, 300);
        }

        function finishScan() {
            // 3. Stop rotation, Show Result Color
            scanBorder.classList.add('opacity-0'); // Fade out spinner
            
            // Determine Rarity (Mockup: Legendary/Gold)
            const rarity = 'legendary'; 
            
            setTimeout(() => {
                statusText.innerText = "识别完成";
                statusText.classList.add('text-yellow-500');
                statusText.innerHTML = "<span class='animate-pulse'>点击查看详情</span>";
                
                // Apply specific glow
                resultGlow.classList.add('glow-legendary');
                
                // Slight bounce effect to indicate readiness
                theCard.classList.add('scale-105');
                setTimeout(() => theCard.classList.remove('scale-105'), 200);

            }, 300);
        }

        function showDetails() {
            // Only clickable if scan finished (check if glow is applied)
            if (!resultGlow.classList.contains('glow-legendary')) return;

            // 4. Transition to Detail View
            cardContainer.classList.add('transition-all', 'duration-500', 'opacity-0', 'scale-110');
            
            setTimeout(() => {
                cardContainer.classList.add('hidden');
                stepDetail.classList.remove('hidden');
                
                // Reset button visibility
                resetBtn.classList.remove('hidden');
                resetBtn.classList.remove('opacity-0');

                // Animate details in
                requestAnimationFrame(() => {
                    stepDetail.classList.remove('opacity-0');
                });
            }, 400);
        }

        function resetApp() {
            // Hard reload for simplicity in demo, or reset states
            location.reload();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md h-[100dvh] bg-zinc-950 relative flex flex-col overflow-hidden shadow-2xl border-x border-zinc-900">

<header className="z-20 flex bg-gradient-to-b from-zinc-950 to-transparent w-full pt-6 pr-6 pb-6 pl-6 absolute top-0 left-0 items-center justify-between">
<div className="flex gap-2 items-center">
<svg aria-hidden="true" className="" data-icon="lucide:scan-eye" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></path><circle className="" cx="12" cy="12" r="1"></circle><path className="" d="M18.944 12.33a1 1 0 0 0 0-.66a7.5 7.5 0 0 0-13.888 0a1 1 0 0 0 0 .66a7.5 7.5 0 0 0 13.888 0"></path></g></svg>
<h1 className="uppercase text-sm font-medium text-zinc-100 tracking-tight">食神鉴 FoodLens</h1>
</div>
<button className="hidden opacity-0 transition-opacity duration-300" id="resetBtn" onclick="resetApp()">
<svg aria-hidden="true" data-icon="lucide:rotate-ccw" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></g></svg>
</button>
</header>

<main className="flex-1 flex w-full h-full pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">

<div className="flex flex-col transition-all duration-500 ease-in-out w-full items-center" id="step-upload">
<div className="w-full aspect-[3/4] rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center gap-6 group cursor-pointer hover:border-zinc-700 hover:bg-zinc-900 transition-colors relative overflow-hidden" onclick="triggerScan()">

<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/0 via-zinc-900/0 to-zinc-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/50">
<svg aria-hidden="true" data-icon="lucide:camera" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
</div>
<div className="text-center z-10">
<h2 className="text-lg font-medium text-zinc-200 tracking-tight mb-2">拍摄食物</h2>
<p className="text-xs text-zinc-500 font-light">识别热量与健康等级</p>
</div>
</div>
<div className="mt-8 flex gap-4 w-full justify-center">
<button className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
<svg aria-hidden="true" data-icon="lucide:image" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>
</button>
<button className="flex-1 h-12 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" onclick="triggerScan()">
                        开始鉴定
                    </button>
</div>
</div>

<div className="hidden absolute inset-0 flex items-center justify-center" id="card-container">

<div className="relative w-64 aspect-[2/3] rounded-2xl bg-zinc-900 cursor-pointer transition-transform duration-500" id="the-card" onclick="showDetails()">

<div className="absolute -inset-[2px] rounded-2xl overflow-hidden scanning-glow opacity-0 transition-opacity duration-300" id="scan-border">
<div className="absolute inset-[2px] bg-zinc-950 rounded-2xl z-0"></div>
</div>

<div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-700 z-10" id="result-glow"></div>

<div className="absolute inset-0 z-20 rounded-2xl card-back-pattern flex flex-col items-center justify-center border border-zinc-800 overflow-hidden">
<div className="w-20 h-20 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-900 relative">
<svg aria-hidden="true" data-icon="lucide:fingerprint" data-strokeWidth="1.0" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2"></path></g></svg>
</div>
<p className="mt-6 text-xs text-zinc-500 font-medium tracking-widest uppercase" id="status-text">等待识别...</p>
</div>
</div>
</div>

<div className="hidden w-full h-full flex-col pt-12 pb-6 overflow-y-auto z-30 opacity-0 transition-opacity duration-500" id="step-detail">

<div className="w-full aspect-square bg-zinc-900 rounded-3xl relative overflow-hidden mb-6 border border-zinc-800 shadow-2xl">

<img alt="Burger" className="absolute inset-0 w-full h-2/3 object-cover opacity-90 mask-image-gradient" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 flex flex-col items-center">
<div className="w-14 h-14 bg-zinc-950/80 backdrop-blur-md rounded-xl border border-yellow-500/30 flex items-center justify-center shadow-lg shadow-yellow-500/20 animate-bounce" style={{animationDuration: '3s'}}>
<svg aria-hidden="true" data-icon="lucide:gem" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
</div>
<div className="mt-3 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold tracking-wider uppercase">
                            传说级 Legendary
                        </div>
</div>

<div className="absolute bottom-0 left-0 w-full p-6">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">至尊牛肉汉堡</h2>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                            "一口咬下，肉汁四溢。虽然热量爆炸，但其带来的愉悦感堪称传说级别。是放纵日的完美选择。"
                        </p>
</div>
</div>

<div className="grid grid-cols-3 gap-3 mb-6">
<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">嘌呤</span>
<span className="text-lg font-medium text-red-400">高</span>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">果糖</span>
<span className="text-lg font-medium text-green-400">低</span>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">酒精</span>
<span className="text-lg font-medium text-zinc-300">0%</span>
</div>
</div>

<div className="flex-1">
<h3 className="text-xs text-zinc-500 uppercase tracking-wider mb-3 pl-1">核心食材</h3>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="text-sm text-zinc-300 font-light">安格斯牛肉饼</span>
</div>
<span className="text-xs text-zinc-500">300kcal</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-yellow-500"></span>
<span className="text-sm text-zinc-300 font-light">切达芝士</span>
</div>
<span className="text-xs text-zinc-500">110kcal</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-sm text-zinc-300 font-light">生菜 &amp; 番茄</span>
</div>
<span className="text-xs text-zinc-500">15kcal</span>
</div>
</div>
</div>
<div className="h-12"></div> 
</div>
</main>

<nav className="absolute bottom-0 w-full glass-panel h-16 flex justify-around items-center px-6 z-20 transition-transform duration-500" id="nav-bar">
<button className="flex flex-col items-center gap-1 text-zinc-100">
<svg aria-hidden="true" data-icon="lucide:home" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
<span className="text-[10px] font-medium">首页</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-500">
<svg aria-hidden="true" data-icon="lucide:library" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16 6l4 14M12 6v14M8 8v12M4 4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] font-medium">图鉴</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-500">
<svg aria-hidden="true" data-icon="lucide:user" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
<span className="text-[10px] font-medium">我的</span>
</button>
</nav>
</div>


    </>
  );
}
