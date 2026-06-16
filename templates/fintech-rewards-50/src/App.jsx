import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function startSpin() {
            const wheel = document.getElementById('wheel');
            const button = document.getElementById('spin-btn');
            const overlay = document.getElementById('result-overlay');
            const content = document.getElementById('result-content');

            // Disable button
            button.classList.add('opacity-50', 'pointer-events-none');
            button.innerHTML = '<span class="animate-spin">⏳</span> Spinning...';

            // Reset rotation first
            wheel.style.transition = 'none';
            wheel.style.transform = 'rotate(12deg)';
            wheel.offsetHeight; // Force reflow

            // Spin Animation
            // Rotate 5 full circles + random amount to land on a segment
            // Roughly aiming for orange/teal segment
            const rotation = 1800 + Math.floor(Math.random() * 360); 
            
            wheel.style.transition = 'transform 3s cubic-bezier(0.2, 0, 0.2, 1)';
            wheel.style.transform = `rotate(${rotation}deg)`;

            // Show Result after spin
            setTimeout(() => {
                overlay.classList.remove('opacity-0', 'pointer-events-none');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
                
                // Fire confetti logic here if we had a library, 
                // for now just the modal appears.
            }, 3100);
        }

        function resetSpin() {
            const wheel = document.getElementById('wheel');
            const button = document.getElementById('spin-btn');
            const overlay = document.getElementById('result-overlay');
            const content = document.getElementById('result-content');

            // Hide overlay
            overlay.classList.add('opacity-0', 'pointer-events-none');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');

            // Reset button
            setTimeout(() => {
                button.classList.remove('opacity-50', 'pointer-events-none');
                button.innerHTML = '<i data-lucide="play" class="w-4 h-4 fill-current"></i> Spin Now';
                lucide.createIcons(); // Re-render icon
                
                // Reset wheel position silently
                wheel.style.transition = 'none';
                wheel.style.transform = 'rotate(12deg)';
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-slate-100 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#005f5f] rounded-md flex items-center justify-center text-white font-bold text-xs tracking-tighter">
                    BW
                </div>
<span className="text-[#F97316] font-bold text-lg tracking-tight">BENEFITWISE</span>
</div>

<div className="flex items-center gap-3">

<button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 text-amber-400 text-xs font-medium hover:bg-slate-800 transition-colors border border-slate-800">
<div className="w-4 h-4 rounded-full bg-amber-400/20 flex items-center justify-center">
<i className="w-3 h-3 stroke-[2] text-amber-400" data-lucide="crown"></i>
</div>
<span>Benefits Premium</span>
</button>

<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#004D40] text-white text-xs font-medium">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="wallet"></i>
<span>₹ 200.56</span>
</div>

<div className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-lg bg-slate-900 text-white cursor-pointer hover:bg-slate-800 transition-colors">
<div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-600 overflow-hidden">
<img alt="Rahul" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Rahul&amp;background=004D40&amp;color=fff"/>
</div>
<span className="text-xs font-medium hidden sm:block">Hello Rahul</span>
</div>
</div>
</div>
</header>

<nav className="bg-[#E0F7FA]/40 border-b border-cyan-100 overflow-x-auto hide-scroll">
<div className="max-w-7xl mx-auto px-4 py-3 min-w-max">
<div className="flex items-start justify-between gap-6 md:gap-8">

<a className="group flex flex-col items-center gap-2 min-w-[64px]" href="#">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform text-[#007E7A]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="ticket"></i>
</div>
<span className="text-[10px] font-medium text-slate-600 group-hover:text-[#007E7A]">Vouchers</span>
</a>
<a className="group flex flex-col items-center gap-2 min-w-[64px]" href="#">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform text-[#F59E0B]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shopping-bag"></i>
</div>
<span className="text-[10px] font-medium text-slate-600 group-hover:text-[#007E7A]">Merchandise</span>
</a>
<a className="group flex flex-col items-center gap-2 min-w-[64px]" href="#">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform text-[#10B981]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<span className="text-[10px] font-medium text-slate-600 group-hover:text-[#007E7A]">Insurance</span>
</a>
<a className="group flex flex-col items-center gap-2 min-w-[64px]" href="#">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform text-[#EC4899]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="flower-2"></i>
</div>
<span className="text-[10px] font-medium text-slate-600 group-hover:text-[#007E7A]">Wellness</span>
</a>
<a className="group flex flex-col items-center gap-2 min-w-[64px]" href="#">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform text-[#6366F1]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="clipboard-list"></i>
</div>
<span className="text-[10px] font-medium text-slate-600 group-hover:text-[#007E7A]">Survey</span>
</a>
<a className="group flex flex-col items-center gap-2 min-w-[64px]" href="#">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform text-[#8B5CF6]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="trophy"></i>
</div>
<span className="text-[10px] font-medium text-slate-600 group-hover:text-[#007E7A]">RnR</span>
</a>
<a className="group flex flex-col items-center gap-2 min-w-[64px]" href="#">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform text-[#EF4444]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="tag"></i>
</div>
<span className="text-[10px] font-medium text-slate-600 group-hover:text-[#007E7A]">Promocodes</span>
</a>
<a className="group flex flex-col items-center gap-2 min-w-[64px]" href="#">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform text-[#06B6D4]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="plane"></i>
</div>
<span className="text-[10px] font-medium text-slate-600 group-hover:text-[#007E7A]">Travel Perks</span>
</a>
<a className="group flex flex-col items-center gap-2 min-w-[64px]" href="#">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform text-[#F97316]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="coins"></i>
</div>
<span className="text-[10px] font-medium text-slate-600 group-hover:text-[#007E7A]">Super Coins</span>
</a>
</div>
</div>
</nav>

<section className="bg-[#0F5156] text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[#115e63] -skew-x-12 translate-x-1/4 opacity-50 z-0"></div>
<div className="absolute bottom-0 left-1/4 w-32 h-32 bg-[#F97316]/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 py-10 md:py-16 relative z-10 grid md:grid-cols-2 gap-8 items-center">
<div className="space-y-4 max-w-lg">
<h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                    BenefitWise: Try for <span className="font-bold text-[#F97316]">4 months</span>.
                    <br className="hidden md:block"/>
                    After that, it's like Netflix — <br/>
<span className="text-cyan-200">too good to cancel</span>
</h1>
<div className="pt-4">
<button className="px-6 py-2.5 bg-white text-[#0F5156] rounded-full text-sm font-semibold hover:bg-cyan-50 transition-colors shadow-lg shadow-[#0F5156]/20">
                        Explore Plans
                    </button>
</div>
</div>

<div className="relative h-48 md:h-64 flex items-center justify-center md:justify-end">

<div className="relative w-64 h-48">

<div className="absolute bottom-0 left-0 w-20 h-32 bg-amber-200 rounded-t-full rounded-b-lg border-4 border-white transform -rotate-6 shadow-xl flex items-center justify-center">
<i className="w-10 h-10 text-amber-700/50" data-lucide="smile"></i>
</div>

<div className="absolute bottom-0 right-10 w-24 h-40 bg-cyan-200 rounded-t-full rounded-b-lg border-4 border-white transform rotate-3 shadow-xl z-10 flex items-center justify-center">
<i className="w-12 h-12 text-cyan-700/50" data-lucide="laugh"></i>
</div>

<div className="absolute top-4 right-0 w-10 h-10 bg-yellow-400 rounded-full border-2 border-yellow-200 shadow-lg flex items-center justify-center animate-bounce">
<span className="font-bold text-yellow-700">₹</span>
</div>
<div className="absolute top-10 left-10 w-8 h-8 bg-orange-400 rounded-full border-2 border-orange-200 shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
<span className="font-bold text-orange-800 text-xs">₹</span>
</div>
</div>
</div>
</div>
</section>

<main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-6 py-8">

<div className="flex items-center gap-3 mb-8">
<div className="w-1.5 h-8 bg-[#007E7A] rounded-full"></div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Gamification</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-32 h-32 text-[#007E7A]" data-lucide="gamepad-2"></i>
</div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-10">

<div className="relative w-64 h-64 flex-shrink-0">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 text-slate-800 drop-shadow-md">
<svg className="transform rotate-180" fill="#1e293b" height="40" viewbox="0 0 24 24" width="40">
<path d="M12 2L22 22H2L12 2Z"></path>
</svg>
</div>

<div className="w-full h-full rounded-full border-[6px] border-slate-100 shadow-xl overflow-hidden relative rotate-12 transition-transform duration-[3000ms] ease-out" id="wheel">

<div className="w-full h-full rounded-full" style="background: conic-gradient(
                                    #e0f2fe 0% 25%, 
                                    #007E7A 25% 50%, 
                                    #ffedd5 50% 75%, 
                                    #F97316 75% 100%
                                 );">
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-inner flex items-center justify-center border border-slate-100 z-10">
<div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-lg">
<span className="font-bold text-xs">BW</span>
</div>
</div>
</div>
</div>

<div className="text-center md:text-left flex-1">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold mb-3 border border-green-100">
<i className="w-3 h-3" data-lucide="sparkles"></i>
                            Daily Chance Available
                        </div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Spin &amp; Win Rewards</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Use your daily free spin to win guaranteed cashback, coins, or exclusive vouchers. Streak: <strong className="text-slate-900">3 Days</strong> 🔥
                        </p>
<div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
<button className="px-8 py-3 rounded-xl bg-[#007E7A] text-white font-medium hover:bg-[#006865] hover:shadow-lg hover:shadow-[#007E7A]/20 transition-all active:scale-95 flex items-center justify-center gap-2" id="spin-btn" onclick="startSpin()">
<i className="w-4 h-4 fill-current" data-lucide="play"></i>
                                Spin Now
                            </button>
<button className="px-8 py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors">
                                View Prizes
                            </button>
</div>
</div>
</div>

<div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-500" id="result-overlay">
<div className="text-center transform scale-95 transition-transform duration-300" id="result-content">
<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4 animate-bounce">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="gift"></i>
</div>
<h3 className="text-2xl font-bold text-slate-900">You Won ₹50!</h3>
<p className="text-slate-500 text-sm mt-2 mb-6">Cashback has been added to your wallet.</p>
<button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors" onclick="resetSpin()">
                            Claim &amp; Spin Again
                        </button>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">Your Rewards</h4>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 bg-cyan-50 rounded-xl border border-cyan-100">
<p className="text-xs text-cyan-600 font-medium mb-1">Total Won</p>
<p className="text-xl font-bold text-[#007E7A]">₹450</p>
</div>
<div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
<p className="text-xs text-orange-600 font-medium mb-1">Super Coins</p>
<p className="text-xl font-bold text-[#F97316]">1,240</p>
</div>
</div>
</div>

<div className="group cursor-pointer bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl shadow-md text-white relative overflow-hidden hover:shadow-lg transition-all">
<div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[80px]"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
<i className="w-4 h-4 text-white" data-lucide="eraser"></i>
</div>
<span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded backdrop-blur-sm">New</span>
</div>
<h4 className="text-lg font-semibold mb-1">Mystery Scratch Card</h4>
<p className="text-indigo-100 text-xs mb-4">Unlock up to 500 Super Coins</p>
<div className="h-12 w-full bg-white/20 rounded-lg border-2 border-dashed border-white/30 flex items-center justify-center text-sm font-medium tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                            Scratch Here
                        </div>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Top Winners</h4>
<a className="text-xs text-[#007E7A] font-medium hover:underline" href="#">View All</a>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-200">
<img className="rounded-full" src="https://ui-avatars.com/api/?name=Alex&amp;background=random"/>
</div>
<span className="text-slate-700 font-medium">Alex M.</span>
</div>
<span className="text-[#007E7A] font-semibold">₹2,000</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-200">
<img className="rounded-full" src="https://ui-avatars.com/api/?name=Sarah&amp;background=random"/>
</div>
<span className="text-slate-700 font-medium">Sarah K.</span>
</div>
<span className="text-[#007E7A] font-semibold">₹1,850</span>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-100 py-6 mt-auto">
<div className="max-w-7xl mx-auto px-6 text-center text-xs text-slate-400">
            © 2023 BenefitWise. All rights reserved.
        </div>
</footer>


    </>
  );
}
