import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Navigation Logic ---
        function switchView(viewName) {
            const views = ['discover', 'ai', 'messages', 'profile'];
            const buttons = ['nav-discover', 'nav-ai', 'nav-messages', 'nav-profile'];
            
            // Classes
            const activeClass = "nav-btn w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 shadow-lg shadow-white/10";
            const inactiveClass = "nav-btn w-12 h-12 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-all duration-300 flex items-center justify-center";

            views.forEach((v, index) => {
                const el = document.getElementById('view-' + v);
                const btn = document.getElementById(buttons[index]);
                
                if(v === viewName) {
                    el.classList.add('active');
                    btn.className = activeClass;
                    // Keep the notification dot if needed
                    if(v === 'messages') btn.className += " relative"; 
                } else {
                    el.classList.remove('active');
                    btn.className = inactiveClass;
                    if(v === 'messages') btn.className += " relative";
                }
            });
        }

        // --- Swipe Logic ---
        function handleSwipe(direction) {
            const card = document.getElementById('card-stack');
            
            // Animate card
            if (direction === 'left') {
                card.style.transform = 'translateX(-120%) rotate(-10deg)';
                card.style.opacity = '0.5';
                showToast("Passed");
            } else {
                card.style.transform = 'translateX(120%) rotate(10deg)';
                card.style.opacity = '0.5';
                
                // Trigger Match Overlay for demo
                setTimeout(() => {
                    const overlay = document.getElementById('match-overlay');
                    overlay.classList.remove('hidden');
                    void overlay.offsetWidth;
                    overlay.style.opacity = '1';
                }, 300);
            }

            // Reset Card (Demo infinite loop)
            setTimeout(() => {
                card.style.transition = 'none';
                card.style.transform = 'scale(0.95)';
                card.style.opacity = '0';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.transform = 'scale(1)';
                    card.style.opacity = '1';
                }, 50);
            }, 800);
        }

        function closeMatch() {
            const overlay = document.getElementById('match-overlay');
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 500);
        }

        // --- Overlays & Drawers ---
        function toggleInfo() {
            const modal = document.getElementById('info-modal');
            modal.classList.toggle('translate-y-full');
        }

        function toggleDrawer(id) {
            const el = document.getElementById(id);
            if(id === 'settings-drawer') {
                if(el.classList.contains('-translate-x-full')) el.classList.remove('-translate-x-full');
                else el.classList.add('-translate-x-full');
            } else {
                // Filter modal (vertical)
                if(el.classList.contains('translate-y-full')) el.classList.remove('translate-y-full');
                else el.classList.add('translate-y-full');
            }
        }

        // --- Toast System ---
        function showToast(msg) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-msg');
            toastMsg.innerText = msg;
            
            toast.style.opacity = '1';
            toast.style.transform = 'translate(-50%, 0)';
            
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translate(-50%, -16px)';
            }, 2000);
        }

        // --- AI Chat Logic ---
        function fillInput(text) {
            document.getElementById('ai-input').value = text;
        }

        function sendAIMessage() {
            const input = document.getElementById('ai-input');
            const history = document.getElementById('chat-history');
            if(!input.value) return;

            // Add User Message
            const userMsg = document.createElement('div');
            userMsg.className = "flex gap-3 justify-end";
            userMsg.innerHTML = `<div class="p-3 bg-blue-600 rounded-2xl rounded-tr-none text-white text-sm">${input.value}</div>`;
            history.appendChild(userMsg);

            // Clear Input
            input.value = '';

            // Simulate AI Response
            setTimeout(() => {
                const aiMsg = document.createElement('div');
                aiMsg.className = "flex gap-3 animate-pulse";
                aiMsg.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex-shrink-0 flex items-center justify-center mt-1">
                        <iconify-icon icon="lucide:bot" width="16" class="text-white"></iconify-icon>
                    </div>
                    <div class="p-3 bg-white/5 rounded-2xl rounded-tl-none border border-white/5">
                        <p class="text-sm text-white/90">That's a bold move! Maybe try: "I see you like brutalist architecture. Is it true you have a concrete heart?" 😉</p>
                    </div>`;
                history.appendChild(aiMsg);
                
                // Remove pulse after delay
                setTimeout(() => aiMsg.classList.remove('animate-pulse'), 500);
            }, 800);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[390px] h-[844px] bg-black rounded-[3rem] shadow-2xl overflow-hidden border-[6px] border-[#1a1a1a] ring-1 ring-white/10 flex flex-col">

<div className="absolute top-0 w-full px-8 pt-5 pb-2 flex justify-between items-center z-50 text-[10px] font-semibold tracking-widest text-white/90 mix-blend-difference uppercase pointer-events-none">
<span>Linear Date</span>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:wifi" width="14"></iconify-icon>
<iconify-icon icon="lucide:battery-medium" width="16"></iconify-icon>
</div>
</div>

<div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full shadow-xl z-[70] transition-all duration-300 opacity-0 -translate-y-4 pointer-events-none flex items-center gap-2 font-medium text-sm" id="toast">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle" width="16"></iconify-icon>
<span id="toast-msg">Action Successful</span>
</div>

<div className="page active" id="view-discover">
<div className="relative w-full h-full">

<div className="absolute inset-0 w-full h-full transition-transform duration-500" id="card-stack">
<img alt="Profile" className="absolute inset-0 w-full h-full object-cover opacity-90" id="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent via-50% to-black/95"></div>
</div>

<div className="absolute top-0 w-full pt-16 px-5 flex justify-between items-center z-20">
<button className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white transition-colors" onclick="toggleDrawer('settings-drawer')">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
<div className="glass-pill px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-colors">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium tracking-tight">Active Now</span>
</div>
<button className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white transition-colors" onclick="toggleDrawer('filter-modal')">
<iconify-icon icon="lucide:sliders-horizontal" width="20"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 w-full z-30 flex flex-col pb-28 px-5">

<div className="self-start mb-4">
<div className="glass-pill pl-2 pr-4 py-1.5 rounded-full flex items-center gap-3 border border-white/20">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center relative overflow-hidden">
<iconify-icon icon="lucide:music" width="14"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider opacity-60 font-semibold">My Anthem</span>
<span className="text-xs font-medium">Bad Habit - Steve Lacy</span>
</div>
</div>
</div>

<div className="flex items-end justify-between mb-4">
<div className="flex flex-col">
<h1 className="text-5xl font-semibold tracking-tighter mb-1 text-white">Maya <span className="text-3xl font-light opacity-60">23</span></h1>
<div className="flex items-center gap-2 text-white/70 mb-4">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
<span className="text-sm font-medium">Lower East Side • 2mi</span>
</div>
</div>
<button className="w-12 h-12 mb-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" onclick="toggleInfo()">
<iconify-icon icon="lucide:arrow-up" width="22"></iconify-icon>
</button>
</div>

<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-medium backdrop-blur-sm">Design 🎨</span>
<span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-medium backdrop-blur-sm">Matcha 🍵</span>
</div>

<div className="flex items-center justify-between gap-4">
<button className="flex-1 h-16 rounded-[2rem] bg-[#1A1A1A] border border-white/10 text-rose-500 flex items-center justify-center hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-black/50 group" onclick="handleSwipe('left')">
<iconify-icon className="opacity-80 group-hover:opacity-100" icon="lucide:x" strokeWidth="2" width="32"></iconify-icon>
</button>
<button className="h-16 w-16 rounded-[2rem] bg-[#1A1A1A] border border-white/10 text-amber-400 flex items-center justify-center hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-black/50 group" onclick="showToast('Super Like sent!')">
<iconify-icon className="opacity-80 group-hover:opacity-100" icon="lucide:star" strokeWidth="2" width="28"></iconify-icon>
</button>
<button className="flex-1 h-16 rounded-[2rem] bg-gradient-to-br from-rose-500 to-orange-600 text-white flex items-center justify-center hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-rose-900/40 group" onclick="handleSwipe('right')">
<iconify-icon className="group-hover:fill-white/20 transition-all" icon="lucide:heart" strokeWidth="2" width="32"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="page bg-[#0f0f11]" id="view-ai">
<div className="pt-16 px-6 pb-4 bg-[#0f0f11]/90 backdrop-blur-xl sticky top-0 z-20 border-b border-white/5 flex justify-between items-center">
<div>
<h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Wingman AI</h1>
<p className="text-xs text-white/50 font-medium">Your personal dating coach</p>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:sparkles" width="16"></iconify-icon>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-white" icon="lucide:bot" width="16"></iconify-icon>
</div>
<div className="p-3 bg-white/5 rounded-2xl rounded-tl-none border border-white/5 max-w-[85%]">
<p className="text-sm text-white/90 leading-relaxed">Hey! I noticed you matched with Maya. She's into Design and Brutalism. Want an opener that's better than "Hey"?</p>
</div>
</div>

<div className="flex gap-2 pl-11 overflow-x-auto hide-scrollbar">
<button className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300 hover:bg-blue-500/20 transition-colors whitespace-nowrap" onclick="fillInput('Give me a design pun')">Give me a pun</button>
<button className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300 hover:bg-purple-500/20 transition-colors whitespace-nowrap" onclick="fillInput('Critique her photos')">Profile Advice</button>
</div>

<div id="chat-history"></div>
</div>

<div className="p-4 pb-28">
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-2xl pl-4 pr-12 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors" id="ai-input" placeholder="Ask for advice..." type="text"/>
<button className="absolute right-2 top-2 w-9 h-9 bg-white text-black rounded-xl flex items-center justify-center hover:bg-white/90 transition-colors" onclick="sendAIMessage()">
<iconify-icon icon="lucide:arrow-up" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="page bg-[#0f0f11]" id="view-messages">
<div className="pt-16 px-6 pb-4 bg-[#0f0f11]/90 backdrop-blur-xl sticky top-0 z-20 border-b border-white/5">
<div className="flex justify-between items-center mb-6">
<h1 className="text-3xl font-semibold tracking-tighter text-white">Inbox <span className="text-rose-500 text-lg align-top">•</span></h1>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors">
<iconify-icon icon="lucide:search" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
<div className="flex flex-col items-center gap-2 group cursor-pointer min-w-[72px]">
<div className="w-[72px] h-[72px] rounded-[1.5rem] bg-gradient-to-br from-rose-500 to-orange-500 p-[2px] rotate-2 group-hover:rotate-0 transition-transform">
<div className="w-full h-full rounded-[1.4rem] bg-black overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<span className="text-[11px] font-semibold tracking-wide text-white">Sophie</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer min-w-[72px]">
<div className="w-[72px] h-[72px] rounded-[1.5rem] border border-white/10 bg-white/5 flex items-center justify-center">
<span className="text-xs font-medium text-white/40 group-hover:text-rose-500 transition-colors">99+</span>
</div>
<span className="text-[11px] font-medium text-white/40">Likes</span>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-1 pb-28">

<div className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex gap-4 items-center group border border-transparent hover:border-white/5" onclick="showToast('Opening Chat...')">
<div className="relative w-14 h-14">
<img className="w-full h-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-[3px] border-[#151515] rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="font-semibold text-white text-[15px]">Chloe</h3>
<span className="text-[10px] font-semibold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-md">NEW</span>
</div>
<p className="text-sm text-white/50 truncate group-hover:text-white/80 transition-colors">Sent a photo 📷</p>
</div>
</div>

<div className="p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer flex gap-4 items-center group border border-transparent hover:border-white/5" onclick="showToast('Opening Chat...')">
<div className="relative w-14 h-14">
<img className="w-full h-full rounded-2xl object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="font-medium text-white/90 text-[15px]">Jessica</h3>
<span className="text-[11px] text-white/30">2h</span>
</div>
<p className="text-sm text-white/40 truncate">Are you going to the gallery opening?</p>
</div>
</div>
</div>
</div>

<div className="page bg-[#0f0f11]" id="view-profile">
<div className="relative h-full overflow-y-auto pb-28">

<div className="h-64 relative w-full group cursor-pointer">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] to-transparent"></div>
<button className="absolute top-16 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
<iconify-icon icon="lucide:pencil" width="18"></iconify-icon>
</button>
</div>

<div className="px-6 -mt-12 relative z-10">
<div className="flex items-end justify-between mb-6">
<div>
<h1 className="text-3xl font-bold tracking-tight">Alex, 24</h1>
<p className="text-white/50 text-sm font-medium">Product Designer</p>
</div>
<div className="w-16 h-16 rounded-full border-[3px] border-[#0f0f11] bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg relative">
<span className="font-bold text-lg">86%</span>
<div className="absolute -bottom-1 -right-1 bg-white text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#0f0f11]">RANK</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 mb-8">
<div className="bg-white/5 border border-white/5 rounded-2xl p-3 flex flex-col items-center gap-1 hover:bg-white/10 transition-colors cursor-pointer">
<span className="text-2xl font-bold text-white">124</span>
<span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">Matches</span>
</div>
<div className="bg-white/5 border border-white/5 rounded-2xl p-3 flex flex-col items-center gap-1 hover:bg-white/10 transition-colors cursor-pointer">
<span className="text-2xl font-bold text-rose-500">28</span>
<span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">Likes</span>
</div>
<div className="bg-white/5 border border-white/5 rounded-2xl p-3 flex flex-col items-center gap-1 hover:bg-white/10 transition-colors cursor-pointer">
<span className="text-2xl font-bold text-amber-400">3</span>
<span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">Super</span>
</div>
</div>

<div className="w-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-5 mb-8 border border-white/10 relative overflow-hidden group cursor-pointer">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
<div className="relative z-10 flex justify-between items-center">
<div>
<h3 className="font-bold text-lg mb-1">Linear Gold</h3>
<p className="text-xs text-white/60">See who likes you &amp; more</p>
</div>
<div className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center">
<iconify-icon icon="lucide:chevron-right" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2">
<button className="w-full p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/60" icon="lucide:settings" width="18"></iconify-icon>
<span className="text-sm font-medium">Settings</span>
</div>
<iconify-icon className="text-white/30" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="w-full p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/60" icon="lucide:shield" width="18"></iconify-icon>
<span className="text-sm font-medium">Safety Center</span>
</div>
<iconify-icon className="text-white/30" icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>


<div className="absolute inset-0 z-40 bg-black/95 backdrop-blur-xl -translate-x-full transition-transform duration-300 flex flex-col" id="settings-drawer">
<div className="pt-16 px-6 pb-6 flex items-center justify-between border-b border-white/10">
<h2 className="text-xl font-bold">Menu</h2>
<button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20" onclick="toggleDrawer('settings-drawer')">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
</div>
<div className="p-6 space-y-6">
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Notifications</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-gray-900 appearance-none cursor-pointer transition-all duration-300 checked:right-0" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-800 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Ghost Mode</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-gray-900 appearance-none cursor-pointer transition-all duration-300" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-800 cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>
</div>
<div className="pt-6 border-t border-white/10">
<button className="w-full py-3 text-left text-sm text-white/70 hover:text-white">Help &amp; Support</button>
<button className="w-full py-3 text-left text-sm text-rose-500 hover:text-rose-400">Log Out</button>
</div>
</div>
</div>

<div className="absolute inset-0 z-40 bg-[#0f0f11] translate-y-full transition-transform duration-300 flex flex-col" id="filter-modal">
<div className="pt-16 px-6 pb-6 flex items-center justify-between">
<h2 className="text-xl font-bold">Discovery Filters</h2>
<button className="text-sm font-semibold text-rose-500" onclick="toggleDrawer('filter-modal')">Done</button>
</div>
<div className="p-6 space-y-8">

<div>
<div className="flex justify-between mb-4">
<span className="text-sm font-medium text-white/70">Maximum Distance</span>
<span className="text-sm font-bold">25mi</span>
</div>
<input className="accent-white" max="100" min="1" type="range" value="25"/>
</div>

<div>
<div className="flex justify-between mb-4">
<span className="text-sm font-medium text-white/70">Age Range</span>
<span className="text-sm font-bold">21 - 28</span>
</div>
<input className="accent-white" max="50" min="18" type="range" value="28"/>
</div>

<div className="flex items-center justify-between pt-4">
<div className="flex flex-col">
<span className="text-sm font-medium">Verified Profiles Only</span>
<span className="text-xs text-white/40">Only show people with photo verification</span>
</div>
<div className="relative inline-block w-10 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-gray-900 appearance-none cursor-pointer transition-all duration-300 checked:right-0" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-800 cursor-pointer"></label>
</input></div>
</div>
</div>
</div>

<div className="absolute inset-0 z-40 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] bg-[#0f0f11] overflow-y-auto" id="info-modal">
<div className="relative h-[45vh] w-full">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center z-50 hover:bg-black transition-colors border border-white/10" onclick="toggleInfo()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] to-transparent"></div>
<div className="absolute bottom-4 left-5">
<h2 className="text-4xl font-semibold tracking-tighter">Maya, 23</h2>
<p className="text-white/60 font-medium">UX Designer @ Linear</p>
</div>
</div>
<div className="px-5 pb-32 space-y-8">
<div className="bg-white/5 p-5 rounded-3xl border border-white/5">
<iconify-icon className="text-white/20 mb-2" icon="lucide:quote" width="24"></iconify-icon>
<p className="text-lg leading-relaxed font-light text-white/90">
                        Obsessed with brutalist architecture and spicy margaritas. Looking for someone to critique websites with. 
                    </p>
</div>
<div>
<h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 ml-1">The Basics</h3>
<div className="grid grid-cols-2 gap-3">
<div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2">
<iconify-icon className="text-white/50" icon="lucide:ruler" width="20"></iconify-icon>
<span className="font-medium">5'7"</span>
</div>
<div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2">
<iconify-icon className="text-white/50" icon="lucide:graduation-cap" width="20"></iconify-icon>
<span className="font-medium">Parsons</span>
</div>
</div>
</div>
<div className="sticky bottom-6 pt-4">
<button className="w-full py-4 bg-white text-black rounded-2xl font-bold text-lg tracking-tight hover:bg-white/90 transition-colors shadow-xl shadow-white/10" onclick="handleSwipe('right'); toggleInfo()">
                        Send Like
                    </button>
</div>
</div>
</div>

<div className="absolute inset-0 z-[60] bg-black/80 backdrop-blur-2xl hidden opacity-0 transition-opacity duration-500 flex flex-col items-center justify-center text-center" id="match-overlay">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10 flex flex-col items-center">
<h1 className="text-6xl font-black italic tracking-tighter text-white mb-12 skew-x-[-10deg] drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">IT'S A<br/><span className="text-rose-500">MATCH!</span></h1>
<div className="flex items-center justify-center -space-x-8 mb-16 scale-125">
<div className="w-32 h-32 rounded-3xl border-4 border-black bg-gray-800 rotate-[-10deg] overflow-hidden shadow-2xl z-10">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-32 h-32 rounded-3xl border-4 border-black bg-gray-800 rotate-[10deg] overflow-hidden shadow-2xl z-20">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="w-full px-8 space-y-4">
<button className="w-full h-16 bg-white text-black text-lg font-bold rounded-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2" onclick="switchView('messages'); closeMatch()">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
                        Say Hey
                    </button>
<button className="w-full h-16 bg-white/5 border border-white/10 text-white text-lg font-medium rounded-2xl hover:bg-white/10 active:scale-95 transition-all" onclick="closeMatch()">
                        Keep Swiping
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-6 w-full px-6 z-50" id="nav-dock">
<div className="mx-auto w-full max-w-[300px] h-16 rounded-[2rem] nav-blur flex items-center justify-between px-2 shadow-2xl shadow-black/50">

<button className="nav-btn w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 shadow-lg shadow-white/10" id="nav-discover" onclick="switchView('discover')">
<iconify-icon icon="lucide:layers" strokeWidth="2.5" width="22"></iconify-icon>
</button>

<button className="nav-btn w-12 h-12 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-all duration-300 flex items-center justify-center" id="nav-ai" onclick="switchView('ai')">
<iconify-icon icon="lucide:sparkles" strokeWidth="2" width="22"></iconify-icon>
</button>

<button className="nav-btn w-12 h-12 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-all duration-300 flex items-center justify-center relative" id="nav-messages" onclick="switchView('messages')">
<iconify-icon icon="lucide:message-circle" strokeWidth="2" width="22"></iconify-icon>
<div className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border border-black"></div>
</button>

<button className="nav-btn w-12 h-12 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-all duration-300 flex items-center justify-center" id="nav-profile" onclick="switchView('profile')">
<iconify-icon icon="lucide:user" strokeWidth="2" width="22"></iconify-icon>
</button>
</div>
</div>
</div>


    </>
  );
}
