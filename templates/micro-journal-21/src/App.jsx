import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init dynamic dates
        const dateOptions = { weekday: 'long', month: 'short', day: 'numeric' };
        const today = new Date();
        document.getElementById('current-date').textContent = today.toLocaleDateString('en-US', dateOptions);
        document.getElementById('entry-date').textContent = today.toLocaleDateString('en-US', { ...dateOptions, year: 'numeric' });
        
        // Navigation Logic
        function nav(screenId) {
            // Hide all screens
            const screens = document.querySelectorAll('.screen');
            screens.forEach(s => s.classList.remove('active'));
            
            // Show target screen
            const target = document.getElementById(screenId);
            if(target) {
                target.classList.add('active');
                target.scrollTop = 0; // Reset scroll
                
                // Add simple animation classes if needed for re-entry
                if(screenId === 'success') {
                    const pop = target.querySelector('.animate-pop');
                    if(pop) {
                        pop.style.animation = 'none';
                        pop.offsetHeight; /* trigger reflow */
                        pop.style.animation = null; 
                    }
                }
            }
        }

        // Like Interaction Logic
        function toggleLike(btn) {
            const icon = btn.querySelector('iconify-icon');
            const countSpan = btn.querySelector('.count');
            let count = parseInt(countSpan.textContent);
            
            // Check if already liked (by icon type or class)
            if (btn.classList.contains('text-red-500')) {
                // Unlike
                btn.classList.remove('text-red-500');
                btn.classList.add('text-zinc-400');
                icon.setAttribute('icon', 'solar:heart-linear');
                count--;
            } else {
                // Like
                btn.classList.remove('text-zinc-400');
                btn.classList.add('text-red-500');
                icon.setAttribute('icon', 'solar:heart-bold');
                icon.classList.add('animate-like');
                setTimeout(() => icon.classList.remove('animate-like'), 400); // Reset animation
                count++;
            }
            countSpan.textContent = count;
        }

        function toggleLikeInDetail(btn) {
            const icon = btn.querySelector('iconify-icon');
            const textSpan = btn.querySelector('span');
            
            // Check if already liked via background color for this specific button style
            if (btn.classList.contains('bg-red-500')) {
                // Unlike state
                btn.classList.remove('bg-red-500');
                btn.classList.add('bg-[#9B7EBD]');
                textSpan.textContent = "Send Love (24)";
            } else {
                // Like state
                btn.classList.remove('bg-[#9B7EBD]');
                btn.classList.add('bg-red-500');
                textSpan.textContent = "Loved! (25)";
                
                // Add pop effect
                btn.style.transform = "scale(1.05)";
                setTimeout(() => btn.style.transform = "scale(1)", 150);
            }
        }

        // Clock
        setInterval(() => {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; 
            minutes = minutes < 10 ? '0'+minutes : minutes;
            document.getElementById('clock').textContent = hours + ':' + minutes;
        }, 1000);

        // Simple onboarding auto-fade
        setTimeout(() => {
            nav('onboarding-1');
        }, 2500); // Wait for splash
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[393px] h-[852px] bg-black rounded-[3.5rem] shadow-2xl border-[12px] border-zinc-900 overflow-hidden ring-4 ring-zinc-200/50">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[34px] w-[120px] bg-black rounded-b-3xl z-50 flex items-center justify-center pointer-events-none">
<div className="w-16 h-4 bg-zinc-900/50 rounded-full"></div>
</div>

<div className="absolute top-0 w-full h-12 z-40 flex justify-between items-center px-8 pt-3 text-white text-xs font-medium select-none pointer-events-none mix-blend-difference">
<span id="clock">9:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="solar:signal-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" width="16"></iconify-icon>
</div>
</div>

<div className="w-full h-full bg-[#F5F1E8] text-zinc-800 relative">

<div className="screen active bg-[#F5F1E8] items-center justify-center z-50" id="splash">
<div className="flex flex-col items-center animate-fade-in">
<div className="w-24 h-24 bg-[#9B7EBD] rounded-3xl flex items-center justify-center shadow-lg mb-6 rotate-3">
<iconify-icon className="text-[#F5F1E8]" icon="solar:notebook-linear" width="48"></iconify-icon>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-zinc-800">Reflect</h1>
<p className="text-zinc-500 mt-2 text-sm tracking-wide">Your daily moment of reflection</p>
</div>
</div>

<div className="screen bg-[#F5F1E8]" id="onboarding-1">
<div className="flex-1 flex flex-col items-center justify-center px-8 pt-20 animate-slide-up">
<div className="w-64 h-64 bg-white rounded-full flex items-center justify-center mb-10 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 bg-[#A8C5A6]/20 rounded-full scale-90"></div>
<iconify-icon className="text-[#9B7EBD]" icon="solar:pen-new-square-linear" width="80"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-center mb-3 tracking-tight">Welcome to Your Safe Space</h2>
<p className="text-zinc-500 text-center leading-relaxed">Journal in just 3 minutes a day with guided prompts and mood tracking.</p>
</div>
<div className="p-8 pb-12 w-full">
<button className="w-full bg-[#9B7EBD] text-white py-4 rounded-2xl font-medium text-lg hover:opacity-90 transition active:scale-[0.98] shadow-lg shadow-[#9B7EBD]/20" onclick="nav('onboarding-2')">Get Started</button>
<button className="w-full text-center mt-4 text-zinc-400 text-sm font-medium" onclick="nav('home')">Skip</button>
</div>
</div>

<div className="screen bg-[#F5F1E8]" id="onboarding-2">
<div className="flex-1 flex flex-col items-center justify-center px-8 pt-20 animate-slide-up">
<div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-10 shadow-sm">
<iconify-icon className="text-[#F5A962]" icon="solar:bell-bing-linear" width="60"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-center mb-3 tracking-tight">Stay Consistent</h2>
<p className="text-zinc-500 text-center mb-8">Choose your preferred journaling time for daily reminders.</p>
<div className="bg-white p-4 rounded-2xl w-full flex justify-between items-center shadow-sm">
<span className="text-zinc-700 font-medium">Daily Reminder</span>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-[#9B7EBD]" id="notif-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-[#9B7EBD]" htmlFor="notif-toggle"></label>
</div>
</div>
<div className="mt-4 bg-white px-6 py-3 rounded-xl border border-zinc-200">
<span className="text-2xl font-semibold text-zinc-800">9:00 PM</span>
</div>
</div>
<div className="p-8 pb-12 w-full">
<button className="w-full bg-[#9B7EBD] text-white py-4 rounded-2xl font-medium text-lg hover:opacity-90 transition active:scale-[0.98] shadow-lg shadow-[#9B7EBD]/20" onclick="nav('onboarding-3')">Continue</button>
<button className="w-full text-center mt-4 text-zinc-400 text-sm font-medium" onclick="nav('home')">Skip</button>
</div>
</div>

<div className="screen bg-[#F5F1E8]" id="onboarding-3">
<div className="flex-1 flex flex-col items-center justify-center px-8 pt-20 animate-slide-up">
<div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-10 shadow-sm">
<iconify-icon className="text-[#6B85A3]" icon="solar:shield-check-linear" width="60"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-center mb-3 tracking-tight">Your Thoughts Are Private</h2>
<p className="text-zinc-500 text-center">Set up biometric lock to keep your journal secure.</p>
</div>
<div className="p-8 pb-12 w-full">
<button className="w-full bg-[#9B7EBD] text-white py-4 rounded-2xl font-medium text-lg hover:opacity-90 transition active:scale-[0.98] shadow-lg shadow-[#9B7EBD]/20 flex items-center justify-center gap-2" onclick="nav('home')">
<iconify-icon icon="solar:face-scan-square-linear" width="24"></iconify-icon>
                        Enable Face ID
                    </button>
<button className="w-full text-center mt-4 text-zinc-400 text-sm font-medium" onclick="nav('home')">Skip for now</button>
</div>
</div>

<div className="screen bg-[#F5F1E8]" id="home">

<div className="pt-16 px-6 pb-6 flex justify-between items-start">
<div>
<p className="text-zinc-500 text-sm font-medium mb-1" id="current-date">Saturday, Oct 24</p>
<h1 className="text-2xl font-semibold text-zinc-800 tracking-tight">Good evening, Alex</h1>
</div>
<div className="bg-white px-3 py-2 rounded-xl shadow-sm flex items-center gap-2 border border-zinc-100">
<iconify-icon className="text-[#F5A962]" icon="solar:fire-bold" width="20"></iconify-icon>
<span className="font-semibold text-zinc-800">7</span>
</div>
</div>

<div className="flex-1 overflow-y-auto pb-24 hide-scrollbar">
<div className="px-6">

<div className="bg-white p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
<div className="flex justify-between items-end mb-3">
<div>
<p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-1">Weekly Goal</p>
<p className="text-lg font-semibold text-zinc-800">5/7 days completed</p>
</div>
<span className="text-xs text-[#9B7EBD] bg-[#9B7EBD]/10 px-2 py-1 rounded-lg font-medium">Keep going!</span>
</div>
<div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-[#9B7EBD] w-[71%] rounded-full"></div>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(155,126,189,0.15)] relative overflow-hidden mb-8 group">
<div className="absolute top-0 right-0 p-4 opacity-50">
<iconify-icon className="text-zinc-400 cursor-pointer hover:text-[#9B7EBD] transition" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<div className="inline-flex items-center gap-1 bg-[#F5F1E8] px-3 py-1 rounded-full mb-4">
<iconify-icon className="text-[#9B7EBD]" icon="solar:heart-angle-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-[#9B7EBD]">Gratitude</span>
</div>
<h3 className="text-xl font-serif-custom text-zinc-800 leading-relaxed mb-6">What made you smile today?</h3>
<button className="w-full bg-[#9B7EBD] text-white py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#8a6dad] transition active:scale-[0.98]" onclick="nav('new-entry')">
<iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
                                Start Writing
                            </button>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center px-6 mb-4">
<div className="flex items-center gap-2">
<h3 className="font-semibold text-zinc-800 text-lg">Community Live</h3>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
<button className="text-xs font-medium text-[#9B7EBD]">See All</button>
</div>

<div className="flex overflow-x-auto gap-4 px-6 pb-4 hide-scrollbar snap-x snap-mandatory">

<div className="min-w-[280px] snap-center bg-white p-5 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-zinc-100 active:scale-[0.98] transition-transform cursor-pointer relative overflow-hidden" onclick="nav('public-detail')">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center text-xs border border-white shadow-sm">🤫</div>
<span className="text-xs font-semibold text-zinc-600">Anonymous</span>
</div>
<span className="text-[10px] text-zinc-400 font-medium bg-zinc-50 px-2 py-1 rounded-full">2m ago</span>
</div>
<p className="text-sm text-zinc-700 font-serif-custom leading-6 line-clamp-3 mb-4">I finally stood up for myself in the meeting today. It was terrifying, but my hands stopped shaking afterwards.</p>
<div className="flex items-center justify-between border-t border-zinc-50 pt-3">
<div className="flex gap-1 items-center">
<span className="text-[10px] bg-[#F5A962]/10 text-[#F5A962] px-2 py-0.5 rounded-md font-medium">Anxious</span>
</div>
<button className="like-btn flex items-center gap-1.5 text-zinc-400 hover:text-red-400 transition" onclick="event.stopPropagation(); toggleLike(this)">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
<span className="text-xs font-medium count">24</span>
</button>
</div>
</div>

<div className="min-w-[280px] snap-center bg-white p-5 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-zinc-100 active:scale-[0.98] transition-transform cursor-pointer relative overflow-hidden" onclick="nav('public-detail')">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-100 to-yellow-200 flex items-center justify-center text-xs border border-white shadow-sm">🌸</div>
<span className="text-xs font-semibold text-zinc-600">Blossom</span>
</div>
<span className="text-[10px] text-zinc-400 font-medium bg-zinc-50 px-2 py-1 rounded-full">15m ago</span>
</div>
<p className="text-sm text-zinc-700 font-serif-custom leading-6 line-clamp-3 mb-4">Found a pressed flower in a book I borrowed from the library. Someone's memory from 1994.</p>
<div className="flex items-center justify-between border-t border-zinc-50 pt-3">
<div className="flex gap-1 items-center">
<span className="text-[10px] bg-[#A8C5A6]/10 text-[#5f7a5d] px-2 py-0.5 rounded-md font-medium">Inspired</span>
</div>
<button className="like-btn flex items-center gap-1.5 text-zinc-400 hover:text-red-400 transition" onclick="event.stopPropagation(); toggleLike(this)">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
<span className="text-xs font-medium count">8</span>
</button>
</div>
</div>

<div className="min-w-[280px] snap-center bg-white p-5 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-zinc-100 active:scale-[0.98] transition-transform cursor-pointer relative overflow-hidden" onclick="nav('public-detail')">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-cyan-200 flex items-center justify-center text-xs border border-white shadow-sm">🌊</div>
<span className="text-xs font-semibold text-zinc-600">Ocean</span>
</div>
<span className="text-[10px] text-zinc-400 font-medium bg-zinc-50 px-2 py-1 rounded-full">1h ago</span>
</div>
<p className="text-sm text-zinc-700 font-serif-custom leading-6 line-clamp-3 mb-4">Just realized I haven't looked at my phone for 4 hours. The silence is loud but necessary.</p>
<div className="flex items-center justify-between border-t border-zinc-50 pt-3">
<div className="flex gap-1 items-center">
<span className="text-[10px] bg-[#A8BBCD]/10 text-[#5A7C99] px-2 py-0.5 rounded-md font-medium">Calm</span>
</div>
<button className="like-btn flex items-center gap-1.5 text-zinc-400 hover:text-red-400 transition" onclick="event.stopPropagation(); toggleLike(this)">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
<span className="text-xs font-medium count">42</span>
</button>
</div>
</div>
</div>
</div>
<div className="px-6">

<div className="flex justify-between items-center mb-4">
<h3 className="font-semibold text-zinc-800 text-lg">Recent Memories</h3>
<button className="text-xs font-medium text-[#9B7EBD]">View All</button>
</div>

<div className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex gap-4 items-center mb-3 active:scale-[0.99] transition cursor-pointer" onclick="nav('detail')">
<div className="w-12 h-12 rounded-full bg-[#FFD93D]/20 flex items-center justify-center text-xl shrink-0">😊</div>
<div className="flex-1 min-w-0">
<p className="text-zinc-800 font-medium truncate">Coffee with Sarah</p>
<p className="text-zinc-400 text-xs truncate">Yesterday • 142 words</p>
</div>
<iconify-icon className="text-zinc-300" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-zinc-100 pb-8 pt-2 px-6 flex justify-between items-center z-50">
<button className="flex flex-col items-center gap-1 p-2 text-[#9B7EBD]" onclick="nav('home')">
<iconify-icon icon="solar:home-smile-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600" onclick="nav('calendar')">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">History</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600" onclick="nav('insights')">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Insights</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600" onclick="nav('settings')">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Settings</span>
</button>
</div>
</div>

<div className="screen bg-white z-50" id="new-entry">

<div className="pt-14 px-4 pb-2 flex justify-between items-center border-b border-zinc-50">
<button className="p-2 text-zinc-800 rounded-full hover:bg-zinc-100" onclick="nav('home')">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div className="text-center">
<p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">Today's Entry</p>
<p className="text-sm font-semibold text-zinc-800" id="entry-date">Oct 24, 2023</p>
</div>
<button className="p-2 text-zinc-800 rounded-full hover:bg-zinc-100 opacity-0 cursor-default">
<iconify-icon icon="solar:menu-dots-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto hide-scrollbar">

<div className="bg-[#F5F1E8] p-6 mx-4 mt-4 rounded-xl relative group">
<p className="text-zinc-500 text-xs font-semibold uppercase tracking-wide mb-2 text-[#9B7EBD]">Reflection Prompt</p>
<p className="text-lg font-serif-custom text-zinc-800">What made you smile today?</p>
<div className="absolute top-4 right-4 flex gap-2">
<button className="text-zinc-400 hover:text-[#9B7EBD]"><iconify-icon icon="solar:refresh-linear" width="18"></iconify-icon></button>
<button className="text-zinc-400 hover:text-red-400"><iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon></button>
</div>
</div>

<div className="mt-6 px-4">
<p className="text-sm font-medium text-zinc-500 mb-3">How are you feeling?</p>
<div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
<button className="flex flex-col items-center gap-1 shrink-0 group">
<div className="w-12 h-12 rounded-full bg-[#FFD93D] flex items-center justify-center text-xl shadow-sm border-2 border-transparent group-hover:scale-105 transition">🤩</div>
<span className="text-[10px] text-zinc-500 font-medium">Great</span>
</button>
<button className="flex flex-col items-center gap-1 shrink-0 group">
<div className="w-12 h-12 rounded-full bg-[#A8C5A6] flex items-center justify-center text-xl shadow-sm border-2 border-zinc-800 scale-110 transition">😊</div>
<span className="text-[10px] text-zinc-800 font-bold">Good</span>
</button>
<button className="flex flex-col items-center gap-1 shrink-0 group">
<div className="w-12 h-12 rounded-full bg-[#A8BBCD] flex items-center justify-center text-xl shadow-sm border-2 border-transparent hover:scale-105 transition">😐</div>
<span className="text-[10px] text-zinc-500 font-medium">Okay</span>
</button>
<button className="flex flex-col items-center gap-1 shrink-0 group">
<div className="w-12 h-12 rounded-full bg-[#9B7EBD] flex items-center justify-center text-xl shadow-sm border-2 border-transparent hover:scale-105 transition">😔</div>
<span className="text-[10px] text-zinc-500 font-medium">Low</span>
</button>
<button className="flex flex-col items-center gap-1 shrink-0 group">
<div className="w-12 h-12 rounded-full bg-[#F5A962] flex items-center justify-center text-xl shadow-sm border-2 border-transparent hover:scale-105 transition">😰</div>
<span className="text-[10px] text-zinc-500 font-medium">Anxious</span>
</button>
</div>
</div>

<div className="px-4 mt-4 flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-zinc-200 text-xs text-zinc-600 bg-white">Add emotion +</span>
<span className="px-3 py-1 rounded-full bg-[#A8C5A6]/20 text-[#5f7a5d] text-xs font-medium border border-transparent">Grateful</span>
<span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-500 text-xs border border-transparent">Tired</span>
</div>

<div className="mt-6 px-4 pb-32">
<textarea className="w-full h-64 resize-none outline-none text-lg font-serif-custom text-zinc-800 placeholder:text-zinc-300 leading-relaxed" placeholder="Start writing your thoughts..."></textarea>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-zinc-100 p-4 pb-8 z-50">
<div className="flex justify-between items-center mb-3 text-zinc-400">
<div className="flex gap-4">
<iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:microphone-linear" width="20"></iconify-icon>
<div className="w-px h-5 bg-zinc-200"></div>
<iconify-icon icon="solar:text-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:list-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-mono">0 / 300</span>
</div>
<button className="w-full bg-[#9B7EBD] text-white py-3.5 rounded-xl font-medium shadow-lg shadow-[#9B7EBD]/20 hover:opacity-90 transition" onclick="nav('success')">Save Entry</button>
</div>
</div>

<div className="screen bg-[#F5F1E8] items-center justify-center z-50" id="success">
<div className="bg-white p-8 rounded-3xl shadow-xl w-[85%] text-center animate-pop">
<div className="w-20 h-20 bg-[#A8C5A6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="40"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-zinc-800 mb-2">Entry Saved!</h2>
<p className="text-zinc-500 mb-6 text-sm">You've captured a moment for yourself.</p>
<div className="bg-[#FFF8E6] border border-[#FFEBA5] p-4 rounded-xl mb-6 flex items-center justify-center gap-3">
<iconify-icon className="text-[#F5A962]" icon="solar:fire-bold" width="24"></iconify-icon>
<div className="text-left">
<p className="text-xs font-bold text-[#F5A962] uppercase tracking-wide">Streak Update</p>
<p className="text-sm font-semibold text-zinc-800">8 Days! Keep it going!</p>
</div>
</div>
<div className="flex flex-col gap-3">
<button className="w-full bg-[#9B7EBD] text-white py-3 rounded-xl font-medium" onclick="nav('detail')">View Entry</button>
<button className="w-full text-zinc-500 py-2 text-sm font-medium" onclick="nav('home')">Back to Home</button>
</div>
</div>
</div>

<div className="screen bg-[#F5F1E8]" id="calendar">
<div className="pt-14 px-6 pb-4">
<h1 className="text-2xl font-semibold text-zinc-800 tracking-tight mb-6">My Journal</h1>

<div className="flex justify-between items-center mb-8">
<button className="p-2 bg-white rounded-lg shadow-sm text-zinc-600"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<span className="font-semibold text-lg text-zinc-800">October 2023</span>
<button className="p-2 bg-white rounded-lg shadow-sm text-zinc-600"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm mb-6">
<div className="grid grid-cols-7 gap-y-4 gap-x-1 mb-2">
<div className="text-center text-[10px] text-zinc-400 font-medium">S</div>
<div className="text-center text-[10px] text-zinc-400 font-medium">M</div>
<div className="text-center text-[10px] text-zinc-400 font-medium">T</div>
<div className="text-center text-[10px] text-zinc-400 font-medium">W</div>
<div className="text-center text-[10px] text-zinc-400 font-medium">T</div>
<div className="text-center text-[10px] text-zinc-400 font-medium">F</div>
<div className="text-center text-[10px] text-zinc-400 font-medium">S</div>
</div>
<div className="grid grid-cols-7 gap-y-2 gap-x-1 place-items-center">

<div className="h-8 w-8"></div>
<div className="h-8 w-8"></div>

<div className="h-9 w-9 flex flex-col items-center justify-center rounded-full text-sm text-zinc-600 hover:bg-zinc-50 relative">1<div className="w-1.5 h-1.5 bg-[#FFD93D] rounded-full mt-0.5"></div></div>
<div className="h-9 w-9 flex flex-col items-center justify-center rounded-full text-sm text-zinc-600 hover:bg-zinc-50 relative">2<div className="w-1.5 h-1.5 bg-[#A8C5A6] rounded-full mt-0.5"></div></div>
<div className="h-9 w-9 flex flex-col items-center justify-center rounded-full text-sm text-zinc-600 hover:bg-zinc-50 relative">3<div className="w-1.5 h-1.5 bg-[#9B7EBD] rounded-full mt-0.5"></div></div>
<div className="h-9 w-9 flex flex-col items-center justify-center rounded-full text-sm text-zinc-600 hover:bg-zinc-50 relative">4</div>
<div className="h-9 w-9 flex flex-col items-center justify-center rounded-full text-sm text-zinc-600 hover:bg-zinc-50 relative">5<div className="w-1.5 h-1.5 bg-[#A8BBCD] rounded-full mt-0.5"></div></div>

<div className="h-9 w-9 flex flex-col items-center justify-center rounded-full text-sm text-zinc-600 relative">22<div className="w-1.5 h-1.5 bg-[#F5A962] rounded-full mt-0.5"></div></div>
<div className="h-9 w-9 flex flex-col items-center justify-center rounded-full text-sm text-zinc-600 relative">23<div className="w-1.5 h-1.5 bg-[#FFD93D] rounded-full mt-0.5"></div></div>
<div className="h-9 w-9 flex flex-col items-center justify-center rounded-full text-sm text-white bg-[#9B7EBD] shadow-md cursor-pointer relative" onclick="nav('detail')">24</div>
</div>
</div>

<div className="flex gap-4">
<div className="flex-1 bg-white p-4 rounded-2xl shadow-sm">
<p className="text-zinc-400 text-xs mb-1">Total Entries</p>
<p className="text-xl font-semibold text-zinc-800">15</p>
</div>
<div className="flex-1 bg-white p-4 rounded-2xl shadow-sm">
<p className="text-zinc-400 text-xs mb-1">Avg Mood</p>
<p className="text-xl font-semibold text-zinc-800">Good 😊</p>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-zinc-100 pb-8 pt-2 px-6 flex justify-between items-center">
<button className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600" onclick="nav('home')">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-[#9B7EBD]" onclick="nav('calendar')">
<iconify-icon icon="solar:calendar-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">History</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600" onclick="nav('insights')">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Insights</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600" onclick="nav('settings')">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Settings</span>
</button>
</div>
</div>

<div className="screen bg-[#F5F1E8] z-50" id="detail">
<div className="pt-14 px-6 pb-6 flex justify-between items-center">
<button className="p-2 bg-white rounded-full shadow-sm text-zinc-800" onclick="nav('home')"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon></button>
<div className="flex gap-2">
<button className="p-2 bg-white rounded-full shadow-sm text-zinc-800"><iconify-icon icon="solar:pen-linear" width="20"></iconify-icon></button>
<button className="p-2 bg-white rounded-full shadow-sm text-zinc-800"><iconify-icon icon="solar:share-linear" width="20"></iconify-icon></button>
</div>
</div>
<div className="px-6 pb-24 overflow-y-auto hide-scrollbar">
<div className="bg-white rounded-3xl p-6 shadow-sm min-h-[500px]">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-2xl font-bold text-zinc-800 font-serif-custom">Saturday, Oct 24</h2>
<p className="text-zinc-400 text-sm mt-1">9:15 PM</p>
</div>
<div className="flex flex-col items-end">
<div className="w-10 h-10 rounded-full bg-[#A8C5A6] flex items-center justify-center text-lg mb-1">😊</div>
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Good</span>
</div>
</div>
<div className="bg-[#F5F1E8] p-4 rounded-xl mb-6">
<p className="text-[10px] font-bold text-[#9B7EBD] uppercase tracking-wide mb-1">Prompt</p>
<p className="text-zinc-700 italic font-medium">What made you smile today?</p>
</div>
<div className="prose prose-zinc prose-p:font-serif-custom prose-p:text-lg prose-p:leading-8 prose-p:text-zinc-700">
<p>Today was surprisingly peaceful. I woke up earlier than usual and managed to catch the sunrise. The way the light hit the trees outside my window was magical.</p>
<p>Met Sarah for coffee at that new place downtown. We talked for hours about everything and nothing. It's rare to find friends you can be completely yourself with. The barista made a little heart in my latte art, which was a small but sweet detail.</p>
<p>Feeling really grateful for these small moments of connection.</p>
</div>
<div className="mt-8 flex gap-2">
<span className="px-3 py-1 bg-[#F5F1E8] rounded-full text-xs text-zinc-600">#grateful</span>
<span className="px-3 py-1 bg-[#F5F1E8] rounded-full text-xs text-zinc-600">#friends</span>
</div>
</div>
</div>
</div>

<div className="screen bg-[#F5F1E8] z-50" id="public-detail">
<div className="pt-14 px-6 pb-6 flex justify-between items-center">
<button className="p-2 bg-white rounded-full shadow-sm text-zinc-800" onclick="nav('home')"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon></button>
<div className="flex gap-2">
<button className="p-2 bg-white rounded-full shadow-sm text-zinc-400 hover:text-red-400"><iconify-icon icon="solar:flag-linear" width="20"></iconify-icon></button>
</div>
</div>
<div className="px-6 pb-32 overflow-y-auto hide-scrollbar">
<div className="bg-white rounded-3xl p-6 shadow-sm min-h-[400px]">

<div className="flex justify-between items-center mb-6 pb-6 border-b border-zinc-50">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center text-lg border-2 border-white shadow-sm">🤫</div>
<div>
<h3 className="font-semibold text-zinc-800">Anonymous</h3>
<p className="text-xs text-zinc-400">2 mins ago • Public Entry</p>
</div>
</div>
<div className="bg-[#F5A962]/10 px-3 py-1 rounded-full">
<span className="text-xs font-bold text-[#F5A962]">Anxious</span>
</div>
</div>

<div className="prose prose-zinc prose-p:font-serif-custom prose-p:text-lg prose-p:leading-8 prose-p:text-zinc-700">
<p>I finally stood up for myself in the meeting today. It was terrifying, but my hands stopped shaking afterwards. For years I've let people talk over me, thinking my opinion didn't matter as much.</p>
<p>Today, when he interrupted me again, I just kept talking. Louder. Firmer.</p>
<p>"I wasn't finished yet."</p>
<p>The silence in the room was deafening, but seeing my manager nod in approval made it all worth it. I'm still feeling the adrenaline, but for the first time, it's not fear. It's pride.</p>
</div>
<div className="mt-8 flex gap-2">
<span className="px-3 py-1 bg-[#F5F1E8] rounded-full text-xs text-zinc-600">#work</span>
<span className="px-3 py-1 bg-[#F5F1E8] rounded-full text-xs text-zinc-600">#growth</span>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-zinc-100 p-4 pb-8 z-50 flex items-center justify-between px-8">
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Comment</span>
</button>
<button className="bg-[#9B7EBD] text-white px-8 py-3 rounded-2xl flex items-center gap-2 shadow-lg shadow-[#9B7EBD]/20 active:scale-95 transition" onclick="toggleLikeInDetail(this)">
<iconify-icon icon="solar:heart-bold" width="20"></iconify-icon>
<span className="font-semibold">Send Love (24)</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600">
<iconify-icon icon="solar:share-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Share</span>
</button>
</div>
</div>

<div className="screen bg-[#F5F1E8]" id="insights">
<div className="pt-14 px-6 pb-6">
<h1 className="text-2xl font-semibold text-zinc-800 tracking-tight mb-2">Your Insights</h1>
<div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-zinc-100">
<span className="text-xs font-medium text-zinc-600">Last 30 Days</span>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
<div className="px-6 pb-24 overflow-y-auto hide-scrollbar space-y-6">

<div className="bg-white p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
<h3 className="font-semibold text-zinc-800 mb-4">This Week</h3>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-3xl font-bold text-[#9B7EBD]">5</span>
<span className="text-sm text-zinc-500">entries</span>
</div>
<p className="text-xs text-zinc-400 mb-4">71% consistency</p>
<div className="flex justify-between items-end h-24 gap-2">
<div className="w-full bg-zinc-100 rounded-t-md h-[40%]"></div>
<div className="w-full bg-[#9B7EBD] rounded-t-md h-[80%] relative group"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded">Tue</div></div>
<div className="w-full bg-[#9B7EBD] rounded-t-md h-[60%]"></div>
<div className="w-full bg-[#9B7EBD] rounded-t-md h-[100%]"></div>
<div className="w-full bg-[#9B7EBD] rounded-t-md h-[30%]"></div>
<div className="w-full bg-[#9B7EBD] rounded-t-md h-[90%]"></div>
<div className="w-full bg-zinc-100 rounded-t-md h-[20%]"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-zinc-400">
<span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
</div>
</div>

<div className="bg-white p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
<h3 className="font-semibold text-zinc-800 mb-4">Mood Distribution</h3>
<div className="flex items-center gap-6">
<div className="relative w-32 h-32 rounded-full" style={{background: 'conic-gradient(#A8C5A6 0% 45%, #FFD93D 45% 70%, #9B7EBD 70% 90%, #A8BBCD 90% 100%)'}}>
<div className="absolute inset-4 bg-white rounded-full flex items-center justify-center flex-col">
<span className="text-xs text-zinc-400">Top Mood</span>
<span className="font-bold text-zinc-800">Good</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#A8C5A6]"></div><span className="text-xs text-zinc-600">Good 45%</span></div>
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#FFD93D]"></div><span className="text-xs text-zinc-600">Great 25%</span></div>
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#9B7EBD]"></div><span className="text-xs text-zinc-600">Low 20%</span></div>
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#A8BBCD]"></div><span className="text-xs text-zinc-600">Okay 10%</span></div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#9B7EBD] to-[#80669d] p-5 rounded-2xl shadow-lg text-white relative overflow-hidden cursor-pointer active:scale-[0.98] transition" onclick="nav('premium')">
<div className="absolute top-0 right-0 p-4 opacity-20"><iconify-icon icon="solar:stars-minimalistic-bold" width="60"></iconify-icon></div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide opacity-80">Premium Insight</span>
</div>
<p className="font-medium leading-snug mb-4 pr-8">You feel most anxious on Mondays. Unlock AI analysis to understand why.</p>
<button className="bg-white text-[#9B7EBD] text-xs font-bold py-2 px-4 rounded-lg shadow-sm">Unlock Insights</button>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-zinc-100 pb-8 pt-2 px-6 flex justify-between items-center">
<button className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600" onclick="nav('home')">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600" onclick="nav('calendar')">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">History</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-[#9B7EBD]" onclick="nav('insights')">
<iconify-icon icon="solar:chart-2-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Insights</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600" onclick="nav('settings')">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Settings</span>
</button>
</div>
</div>

<div className="screen bg-[#F5F1E8]" id="settings">
<div className="pt-14 px-6 pb-6">
<h1 className="text-2xl font-semibold text-zinc-800 tracking-tight">Settings</h1>
</div>
<div className="px-6 pb-24 overflow-y-auto hide-scrollbar">

<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 rounded-full bg-zinc-200 border-2 border-white shadow-sm flex items-center justify-center text-2xl text-zinc-400">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-lg text-zinc-800">Alex Doe</h3>
<p className="text-sm text-zinc-500">alex@example.com</p>
</div>
<button className="ml-auto text-[#9B7EBD] text-sm font-medium">Edit</button>
</div>

<div className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-4 rounded-xl shadow-md text-white mb-8 flex justify-between items-center cursor-pointer" onclick="nav('premium')">
<div>
<p className="font-semibold text-sm">Upgrade to Premium</p>
<p className="text-xs text-zinc-400 mt-1">Unlock AI insights &amp; unlimited backups</p>
</div>
<iconify-icon className="text-[#FFD93D]" icon="solar:crown-linear" width="24"></iconify-icon>
</div>

<div className="space-y-6">
<div>
<p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 pl-1">Preferences</p>
<div className="bg-white rounded-xl overflow-hidden shadow-sm">
<div className="p-4 flex justify-between items-center border-b border-zinc-50">
<span className="text-sm text-zinc-700">Daily Reminders</span>
<div className="relative inline-block w-10 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-[#9B7EBD]" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#9B7EBD] cursor-pointer"></label>
</div>
</div>
<div className="p-4 flex justify-between items-center">
<span className="text-sm text-zinc-700">Time</span>
<span className="bg-zinc-100 px-2 py-1 rounded text-xs text-zinc-600 font-medium">9:00 PM</span>
</div>
</div>
</div>
<div>
<p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 pl-1">Security</p>
<div className="bg-white rounded-xl overflow-hidden shadow-sm">
<div className="p-4 flex justify-between items-center border-b border-zinc-50">
<span className="text-sm text-zinc-700">Face ID</span>
<div className="relative inline-block w-10 align-middle select-none">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-[#9B7EBD]" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-300 cursor-pointer checked:bg-[#9B7EBD]"></label>
</div>
</div>
<div className="p-4 flex justify-between items-center">
<span className="text-sm text-zinc-700">Change Passcode</span>
<iconify-icon className="text-zinc-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<button className="w-full py-3 text-red-400 text-sm font-medium">Log Out</button>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-zinc-100 pb-8 pt-2 px-6 flex justify-between items-center">
<button className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600" onclick="nav('home')">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600" onclick="nav('calendar')">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">History</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600" onclick="nav('insights')">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Insights</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-[#9B7EBD]" onclick="nav('settings')">
<iconify-icon icon="solar:settings-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Settings</span>
</button>
</div>
</div>

<div className="screen bg-white z-[100]" id="premium">
<div className="absolute top-14 right-6 z-10">
<button className="bg-zinc-100 p-2 rounded-full text-zinc-500 hover:bg-zinc-200" onclick="nav('home')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="h-full overflow-y-auto hide-scrollbar pb-8">

<div className="bg-[#F5F1E8] pt-20 pb-10 px-6 text-center rounded-b-[3rem] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#9B7EBD 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="w-24 h-24 bg-white rounded-3xl mx-auto shadow-lg flex items-center justify-center mb-6 rotate-6">
<iconify-icon className="text-[#9B7EBD]" icon="solar:magic-stick-3-linear" width="48"></iconify-icon>
</div>
<h1 className="text-2xl font-semibold text-zinc-800 mb-2 tracking-tight">Unlock Your Mind</h1>
<p className="text-zinc-500 text-sm max-w-[250px] mx-auto">Get deeper emotional insights powered by AI.</p>
</div>

<div className="px-8 mt-8 space-y-6">
<div className="flex items-start gap-4">
<div className="bg-[#F5F1E8] p-2 rounded-lg text-[#9B7EBD]"><iconify-icon icon="solar:stars-minimalistic-linear" width="20"></iconify-icon></div>
<div>
<h3 className="font-semibold text-sm text-zinc-800">AI-Powered Insights</h3>
<p className="text-xs text-zinc-400 mt-1">Discover patterns in your mood &amp; writing.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-[#F5F1E8] p-2 rounded-lg text-[#9B7EBD]"><iconify-icon icon="solar:cloud-upload-linear" width="20"></iconify-icon></div>
<div>
<h3 className="font-semibold text-sm text-zinc-800">Cloud Sync &amp; Backup</h3>
<p className="text-xs text-zinc-400 mt-1">Never lose a memory, access anywhere.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-[#F5F1E8] p-2 rounded-lg text-[#9B7EBD]"><iconify-icon icon="solar:file-download-linear" width="20"></iconify-icon></div>
<div>
<h3 className="font-semibold text-sm text-zinc-800">PDF Export</h3>
<p className="text-xs text-zinc-400 mt-1">Create a beautiful book of your year.</p>
</div>
</div>
</div>

<div className="px-6 mt-10 space-y-3">
<div className="border-2 border-[#9B7EBD] bg-[#9B7EBD]/5 p-4 rounded-xl flex justify-between items-center relative">
<div className="absolute -top-3 left-4 bg-[#9B7EBD] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Recommended</div>
<div>
<p className="font-bold text-zinc-800">Annual Plan</p>
<p className="text-xs text-zinc-500">$3.33 / month</p>
</div>
<p className="font-bold text-lg text-[#9B7EBD]">$39.99</p>
</div>
<div className="border border-zinc-200 p-4 rounded-xl flex justify-between items-center opacity-60">
<div>
<p className="font-semibold text-zinc-800">Monthly Plan</p>
</div>
<p className="font-medium text-zinc-600">$4.99</p>
</div>
</div>
<div className="px-6 mt-6">
<button className="w-full bg-[#9B7EBD] text-white py-4 rounded-2xl font-medium shadow-lg shadow-[#9B7EBD]/20 hover:opacity-90 transition active:scale-[0.98]">Start 7-Day Free Trial</button>
<p className="text-center text-[10px] text-zinc-400 mt-3">Cancel anytime. Terms apply.</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-900 rounded-full z-[200] pointer-events-none"></div>
</div>


    </>
  );
}
