import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();

    // Update time
    function updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeString = `${hours}:${minutes.toString().padStart(2, '0')}`;
      
      ['time1', 'time2', 'time3'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = timeString;
      });
    }
    
    updateTime();
    setInterval(updateTime, 60000);

    // Card reveal animation
    const cardReveal = document.getElementById('cardReveal');
    if (cardReveal) {
      cardReveal.addEventListener('click', function() {
        this.style.animation = 'cardFlip 0.6s ease-out forwards';
        setTimeout(() => {
          alert('✨ The Moon card revealed! Tap to see full interpretation.');
        }, 600);
      });
    }

    // Reading type selection
    document.querySelectorAll('.reading-type').forEach(btn => {
      btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
          alert('Starting your mystical reading... 🔮');
        }, 150);
      });
    });

    // Tab interactions
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const parent = this.closest('.absolute');
        parent.querySelectorAll('.tab-btn svg').forEach(svg => {
          svg.classList.remove('text-purple-600');
          svg.classList.add('text-slate-400');
        });
        parent.querySelectorAll('.tab-btn span').forEach(span => {
          span.classList.remove('text-purple-600');
          span.classList.add('text-slate-400');
        });
        
        const svg = this.querySelector('svg');
        const span = this.querySelector('span');
        svg.classList.add('text-purple-600');
        svg.classList.remove('text-slate-400');
        span.classList.add('text-purple-600');
        span.classList.remove('text-slate-400');
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 w-full -z-10 h-screen bg-cover bg-center blur-3xl" style={{backgroundImage: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)'}}></div>
<main className="min-h-screen flex w-full py-8 items-center justify-center">
<div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4">

<section className="w-[393px] h-[852px] bg-white rounded-[46px] border border-purple-200 overflow-hidden shadow-[0_2.8px_2.2px_rgba(139,_92,_246,_0.02),_0_6.7px_5.3px_rgba(139,_92,_246,_0.028),_0_12.5px_10px_rgba(139,_92,_246,_0.035),_0_22.3px_17.9px_rgba(139,_92,_246,_0.042),_0_41.8px_33.4px_rgba(139,_92,_246,_0.05),_0_100px_80px_rgba(139,_92,_246,_0.07)]" style={{animation: '0.8s ease-out 0s 1 normal both running scaleIn', scrollBehavior: 'smooth'}}>
<div className="h-full flex flex-col overflow-y-auto pb-20">

<div className="px-6 pt-6 pb-3 flex items-center justify-between text-slate-800" style={{animation: 'slideDown 0.6s ease-out 0.2s both'}}>
<span className="text-sm font-medium" id="time1">23:46</span>
<div className="flex items-center gap-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
</div>

<div className="px-6 pb-5 flex items-center justify-between" style={{animation: 'slideDown 0.6s ease-out 0.3s both'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-sm">
<span className="text-[18px]">🐱</span>
</div>
<div className="">
<h1 className="text-[24px] leading-6 font-semibold tracking-tight gradient-text">MystiCats</h1>
<p className="text-[12px] text-purple-600">Your mystical guide</p>
</div>
</div>
<button className="h-11 w-11 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-purple-700 transition-colors relative" id="historyBtn">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
</button>
</div>

<div className="px-6 mb-5" style={{animation: 'blurIn 0.8s ease-out 0.4s both'}}>
<div className="relative overflow-hidden rounded-3xl mystical-bg">
<div className="relative p-5 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
<div className="absolute top-0 right-0 opacity-20" style={{animation: 'float 3s ease-in-out infinite'}}>
<span className="text-[80px]">🌙</span>
</div>
<div className="relative">
<div className="flex items-center gap-2 mb-3">
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[11px] font-medium">Daily Insight</span>
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[11px] font-medium">December 9</span>
</div>
<h3 className="text-[20px] font-semibold tracking-tight mb-2">The Moon Guides You</h3>
<p className="text-[14px] text-white/90 leading-relaxed">Trust your intuition today. The universe is aligning in your favor, revealing hidden truths and illuminating your path forward.</p>
</div>
</div>
</div>
</div>

<div className="px-6 mb-6" style={{animation: 'slideUp 0.6s ease-out 0.5s both'}}>
<div className="flex items-center justify-between mb-4">
<h3 className="text-[18px] font-semibold tracking-tight text-slate-900">Choose your reading</h3>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="reading-type flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 ring-1 ring-purple-200 hover:ring-purple-300 transition-all">
<div className="text-[32px]">🔮</div>
<div className="text-center">
<p className="text-[14px] font-semibold text-slate-900">Daily Card</p>
<p className="text-[11px] text-slate-600 mt-1">Quick insight</p>
</div>
</button>
<button className="reading-type flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 ring-1 ring-pink-200 hover:ring-pink-300 transition-all">
<div className="text-[32px]">💝</div>
<div className="text-center">
<p className="text-[14px] font-semibold text-slate-900">Love Reading</p>
<p className="text-[11px] text-slate-600 mt-1">Heart matters</p>
</div>
</button>
<button className="reading-type flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100 ring-1 ring-violet-200 hover:ring-violet-300 transition-all">
<div className="text-[32px]">💼</div>
<div className="text-center">
<p className="text-[14px] font-semibold text-slate-900">Career Path</p>
<p className="text-[11px] text-slate-600 mt-1">Work guidance</p>
</div>
</button>
<button className="reading-type flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 ring-1 ring-amber-200 hover:ring-amber-300 transition-all">
<div className="text-[32px]">🌟</div>
<div className="text-center">
<p className="text-[14px] font-semibold text-slate-900">Full Spread</p>
<p className="text-[11px] text-slate-600 mt-1">Deep insight</p>
</div>
</button>
</div>
</div>

<div className="px-6 mb-6" style={{animation: 'slideUp 0.6s ease-out 0.6s both'}}>
<button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 ring-1 ring-purple-200 hover:ring-purple-300 transition-all">
<div className="flex -space-x-3">
<span className="w-9 h-9 rounded-full ring-2 ring-white bg-purple-200 flex items-center justify-center text-[16px]">😺</span>
<span className="w-9 h-9 rounded-full ring-2 ring-white bg-pink-200 flex items-center justify-center text-[16px]">😸</span>
<span className="w-9 h-9 rounded-full ring-2 ring-white bg-violet-200 flex items-center justify-center text-[16px]">😻</span>
<div className="w-9 h-9 rounded-full ring-2 ring-white bg-purple-600 flex items-center justify-center text-white text-[11px] font-semibold">+8</div>
</div>
<div className="flex-1 text-left">
<p className="text-[13px] font-semibold text-slate-900">Join mystic seekers</p>
<p className="text-[11px] text-slate-600">500K+ readings daily</p>
</div>
<svg className="w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="px-6 mb-6" style={{animation: 'slideLeft 0.6s ease-out 0.7s both'}}>
<h4 className="text-[16px] font-semibold tracking-tight text-slate-900 mb-4">Your mystical guides</h4>
<div className="grid grid-cols-3 gap-3">
<div className="p-4 rounded-2xl bg-purple-50 ring-1 ring-purple-200 text-center">
<div className="text-[40px] mb-2">🐱</div>
<p className="text-[12px] font-semibold text-slate-900">Luna</p>
<p className="text-[10px] text-slate-600">Intuition</p>
</div>
<div className="p-4 rounded-2xl bg-pink-50 ring-1 ring-pink-200 text-center">
<div className="text-[40px] mb-2">😸</div>
<p className="text-[12px] font-semibold text-slate-900">Mystic</p>
<p className="text-[10px] text-slate-600">Wisdom</p>
</div>
<div className="p-4 rounded-2xl bg-violet-50 ring-1 ring-violet-200 text-center">
<div className="text-[40px] mb-2">😻</div>
<p className="text-[12px] font-semibold text-slate-900">Star</p>
<p className="text-[10px] text-slate-600">Guidance</p>
</div>
</div>
</div>
<div className="h-8"></div>
</div>

<div className="tab-bar-shadow bg-white/95 border-purple-200 border-t pt-3 pr-6 pb-3 pl-6 absolute right-0 bottom-0 left-0 backdrop-blur-xl" style={{animation: 'slideUp 0.6s ease-out 1.3s both'}}>
<div className="flex items-center justify-around">
<button className="tab-btn flex flex-col items-center gap-1 py-2 px-4">
<svg className="w-6 h-6 text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-medium text-purple-600">Home</span>
</button>
<button className="tab-btn flex flex-col items-center gap-1 py-2 px-4">
<svg className="w-6 h-6 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8z"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Journal</span>
</button>
<button className="tab-btn flex flex-col items-center gap-1 py-2 px-4">
<svg className="w-6 h-6 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Chat</span>
</button>
<button className="tab-btn flex flex-col items-center gap-1 py-2 px-4">
<svg className="w-6 h-6 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path className="" d="M20 21a8 8 0 0 0-16 0"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Profile</span>
</button>
</div>
</div>
</section>

<section className="w-[393px] h-[852px] bg-white rounded-[46px] border border-purple-200 overflow-hidden shadow-[0_2.8px_2.2px_rgba(139,_92,_246,_0.02),_0_6.7px_5.3px_rgba(139,_92,_246,_0.028),_0_12.5px_10px_rgba(139,_92,_246,_0.035),_0_22.3px_17.9px_rgba(139,_92,_246,_0.042),_0_41.8px_33.4px_rgba(139,_92,_246,_0.05),_0_100px_80px_rgba(139,_92,_246,_0.07)]" style={{animation: '0.8s ease-out 0.2s 1 normal both running scaleIn'}}>
<div className="h-full flex flex-col pb-20">

<div className="px-6 pt-6 pb-3 flex items-center justify-between text-slate-800" style={{animation: 'slideDown 0.6s ease-out 0.4s both'}}>
<span className="text-sm font-medium" id="time2">23:46</span>
<div className="flex items-center gap-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center px-6" style={{animation: 'blurIn 1s ease-out 0.5s both'}}>
<div className="w-full max-w-[280px]">

<div className="text-center mb-8" style={{animation: 'float 3s ease-in-out infinite'}}>
<div className="text-[80px] mb-3">🐱</div>
<p className="text-[14px] font-semibold text-slate-900">Luna awaits...</p>
<p className="text-[12px] text-slate-600">Tap to reveal your card</p>
</div>

<button className="w-full aspect-[2/3] rounded-3xl card-back relative overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300" id="cardReveal">
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center text-white">
<div className="text-[48px] mb-3">🌙</div>
<div className="text-[14px] font-medium">MystiCats</div>
<div className="text-[11px] opacity-80 mt-1">Tarot</div>
</div>
</div>
<div className="bg-gradient-to-br from-white/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</button>

<div className="mt-6 text-center" style={{animation: 'pulse 2s ease-in-out infinite'}}>
<p className="text-[13px] text-purple-600 font-medium">✨ Focus on your question ✨</p>
</div>
</div>
</div>

<div className="px-6 mb-6">
<div className="grid grid-cols-3 gap-3">
<button className="p-3 rounded-xl bg-purple-50 ring-1 ring-purple-200 hover:ring-purple-300 transition-all">
<svg className="w-5 h-5 mx-auto mb-1 text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M16 6h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"></path><path d="M12 2v4"></path></svg>
<p className="text-[11px] font-medium text-slate-900">Save</p>
</button>
<button className="p-3 rounded-xl bg-pink-50 ring-1 ring-pink-200 hover:ring-pink-300 transition-all">
<svg className="w-5 h-5 mx-auto mb-1 text-pink-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<p className="text-[11px] font-medium text-slate-900">Share</p>
</button>
<button className="p-3 rounded-xl bg-violet-50 ring-1 ring-violet-200 hover:ring-violet-300 transition-all">
<svg className="w-5 h-5 mx-auto mb-1 text-violet-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
<p className="text-[11px] font-medium text-slate-900">Again</p>
</button>
</div>
</div>
</div>

<div className="tab-bar-shadow bg-white/95 border-purple-200 border-t pt-3 pr-6 pb-3 pl-6 absolute right-0 bottom-0 left-0 backdrop-blur-xl">
<div className="flex items-center justify-around">
<button className="tab-btn flex flex-col items-center gap-1 py-2 px-4">
<svg className="w-6 h-6 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Home</span>
</button>
<button className="tab-btn flex flex-col items-center gap-1 py-2 px-4">
<svg className="w-6 h-6 text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8z"></path></svg>
<span className="text-[10px] font-medium text-purple-600">Reading</span>
</button>
<button className="tab-btn flex flex-col items-center gap-1 py-2 px-4">
<svg className="w-6 h-6 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Chat</span>
</button>
<button className="tab-btn flex flex-col items-center gap-1 py-2 px-4">
<svg className="w-6 h-6 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Profile</span>
</button>
</div>
</div>
</section>

<section className="w-[393px] h-[852px] bg-white rounded-[46px] border border-purple-200 overflow-hidden shadow-[0_2.8px_2.2px_rgba(139,_92,_246,_0.02),_0_6.7px_5.3px_rgba(139,_92,_246,_0.028),_0_12.5px_10px_rgba(139,_92,_246,_0.035),_0_22.3px_17.9px_rgba(139,_92,_246,_0.042),_0_41.8px_33.4px_rgba(139,_92,_246,_0.05),_0_100px_80px_rgba(139,_92,_246,_0.07)]" style={{animation: '0.8s ease-out 0.4s 1 normal both running scaleIn'}}>
<div className="h-full flex flex-col">

<div className="px-6 pt-6 pb-3 flex items-center justify-between text-slate-800" style={{animation: 'slideDown 0.6s ease-out 0.6s both'}}>
<span className="text-sm font-medium" id="time3">23:46</span>
<div className="flex items-center gap-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
</div>

<div className="px-6 pb-4 flex items-center justify-between" style={{animation: 'slideDown 0.6s ease-out 0.7s both'}}>
<div className="flex items-center gap-3">
<button className="p-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-700 transition-colors">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-[20px]">😸</div>
<div className="">
<h2 className="text-[16px] font-semibold tracking-tight text-slate-900">Mystic Guide</h2>
<p className="text-[11px] text-purple-600 flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Online
                  </p>
</div>
</div>
</div>
<button className="p-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-700 transition-colors">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto px-6 pb-4 space-y-4" style={{animation: 'fadeIn 0.8s ease-out 0.8s both'}}>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-[16px] flex-shrink-0">😸</div>
<div className="flex-1">
<div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl rounded-tl-sm p-4">
<p className="text-[14px] text-slate-900 leading-relaxed">Welcome! I see you've drawn . This card speaks of intuition, dreams, and the unconscious. What aspect would you like to explore?</p>
</div>
<p className="text-[10px] text-slate-500 mt-1 ml-1">Just now</p>
</div>
</div>

<div className="flex justify-center my-6">
<div className="w-[140px] aspect-[2/3] rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg p-4 flex flex-col items-center justify-center text-white">
<div className="text-[36px] mb-2">🌙</div>
<p className="text-[13px] font-semibold">The Moon</p>
<p className="text-[10px] opacity-80 mt-1">XVIII</p>
</div>
</div>

<div className="flex gap-3 justify-end">
<div className="flex-1 flex justify-end">
<div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
<p className="text-[14px] leading-relaxed">What does this mean for my career path?</p>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[16px] flex-shrink-0">👤</div>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-[16px] flex-shrink-0">😸</div>
<div className="flex-1">
<div className="bg-purple-50 rounded-2xl rounded-tl-sm p-4 inline-block">
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-purple-400" style={{animation: 'pulse 1.4s ease-in-out infinite'}}></span>
<span className="w-2 h-2 rounded-full bg-purple-400" style={{animation: 'pulse 1.4s ease-in-out 0.2s infinite'}}></span>
<span className="w-2 h-2 rounded-full bg-purple-400" style={{animation: 'pulse 1.4s ease-in-out 0.4s infinite'}}></span>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 pb-3">
<div className="flex gap-2 overflow-x-auto pb-2">
<button className="px-4 py-2 rounded-full bg-purple-50 ring-1 ring-purple-200 text-[12px] font-medium text-purple-700 hover:bg-purple-100 transition-colors whitespace-nowrap">🔮 Draw another</button>
<button className="px-4 py-2 rounded-full bg-purple-50 ring-1 ring-purple-200 text-[12px] font-medium text-purple-700 hover:bg-purple-100 transition-colors whitespace-nowrap">💝 Love reading</button>
<button className="px-4 py-2 rounded-full bg-purple-50 ring-1 ring-purple-200 text-[12px] font-medium text-purple-700 hover:bg-purple-100 transition-colors whitespace-nowrap">✨ More details</button>
</div>
</div>

<div className="px-6 pb-6">
<div className="flex gap-2">
<div className="flex-1 relative">
<input className="w-full pl-4 pr-12 py-3.5 rounded-2xl bg-purple-50 text-slate-900 placeholder-slate-500 ring-1 ring-purple-200 focus:ring-2 focus:ring-purple-300 focus:outline-none text-[14px] transition-all" placeholder="Ask about your reading..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-600 transition-colors">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</div>
<button className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center hover:shadow-lg transition-all">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 16 17 6"></path><path d="M17 6v8"></path><path d="M17 6H9"></path></svg>
</button>
</div>
</div>
</div>
</section>
</div>
</main>



    </>
  );
}
