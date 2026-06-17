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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
glass: {
surface: 'rgba(28, 28, 30, 0.4)',
card: 'rgba(44, 44, 46, 0.5)',
border: 'rgba(255, 255, 255, 0.1)',
highlight: 'rgba(255, 255, 255, 0.05)'
}
}
}
}
}



        const settingsMenu = document.getElementById('settings-menu');
        const backdrop = document.getElementById('modal-backdrop');
        const body = document.body;

        // Toggle Settings
        document.getElementById('settings-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSettings();
        });

        // Close Settings when clicking outside
        document.addEventListener('click', (e) => {
            if (!settingsMenu.contains(e.target) && !e.target.closest('#settings-btn')) {
                settingsMenu.classList.add('hidden');
            }
        });

        function toggleSettings() {
            settingsMenu.classList.toggle('hidden');
        }

        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            const modalContent = modal.querySelector('div');
            
            backdrop.classList.remove('hidden');
            modal.classList.remove('hidden');
            
            // Animation Frame
            requestAnimationFrame(() => {
                backdrop.classList.remove('opacity-0');
                modalContent.classList.remove('translate-y-full', 'scale-95', 'opacity-0');
                modalContent.classList.add('translate-y-0', 'scale-100', 'opacity-100');
                if(window.innerWidth >= 640) { // sm breakpoint
                     modalContent.classList.remove('sm:translate-y-10');
                     modalContent.classList.add('sm:translate-y-0');
                }
            });
        }

        function closeAllModals() {
            backdrop.classList.add('opacity-0');
            
            const modals = ['membership-modal', 'free-modal'];
            modals.forEach(id => {
                const modal = document.getElementById(id);
                const modalContent = modal.querySelector('div');
                
                modalContent.classList.add('translate-y-full', 'scale-95', 'opacity-0');
                modalContent.classList.remove('translate-y-0', 'scale-100', 'opacity-100', 'sm:translate-y-0');
                
                setTimeout(() => {
                    modal.classList.add('hidden');
                    backdrop.classList.add('hidden');
                }, 300);
            });
        }

        // Radio Selection Logic for Membership
        function selectPlan(label) {
            // Reset all check icons
            const allLabels = document.querySelectorAll('input[name="plan"]');
            allLabels.forEach(input => {
                const container = input.closest('label').querySelector('.relative');
                const checkIcon = container.querySelector('.check-icon');
                
                // Reset styles
                container.classList.remove('border-indigo-500');
                container.classList.add('border-transparent');
                
                // Hide icon
                checkIcon.classList.remove('bg-indigo-500', 'scale-100', 'opacity-100');
                checkIcon.classList.add('border-slate-500', 'bg-transparent', 'scale-0', 'opacity-0');
            });

            // Set Active
            const container = label.querySelector('.relative');
            const checkIcon = container.querySelector('.check-icon');
            
            container.classList.remove('border-transparent');
            container.classList.add('border-indigo-500');
            
            checkIcon.classList.remove('border-slate-500', 'bg-transparent', 'scale-0', 'opacity-0');
            checkIcon.classList.add('bg-indigo-500', 'scale-100', 'opacity-100');
        }

        // Initialize: Show Membership Modal for demo
        setTimeout(() => {
            // openModal('membership-modal'); 
        }, 500);

    
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
      

<div className="fixed inset-0 bg-black/40 z-[-1]"></div>

<div className="w-full max-w-md h-full bg-black/20 backdrop-blur-xl flex flex-col relative overflow-hidden shadow-2xl border-x border-white/5">

<header className="pt-8 pb-2 px-6 grid grid-cols-3 items-center z-20 relative select-none">

<button className="text-white/80 hover:text-white transition-colors justify-self-start p-2 -ml-2 rounded-full hover:bg-white/10">
<iconify-icon height="22" icon="lucide:menu" strokeWidth="1.5" width="22"></iconify-icon>
</button>

<div className="flex flex-col items-center justify-self-center">
<span className="text-lg font-bold text-white tracking-tight drop-shadow-md">时计里</span>
</div>

<div className="relative justify-self-end">
<button className="text-white/80 hover:text-white transition-colors p-2 -mr-2 rounded-full hover:bg-white/10" id="settings-btn">
<iconify-icon height="22" icon="lucide:more-horizontal" strokeWidth="1.5" width="22"></iconify-icon>
</button>

<div className="absolute right-0 top-12 w-56 glass-panel rounded-2xl py-1.5 hidden origin-top-right transition-all duration-200 z-50" id="settings-menu">
<button className="w-full text-left px-4 py-2.5 hover:bg-white/10 flex items-center gap-3 transition-colors group" onclick="openModal('free-modal'); toggleSettings()">
<iconify-icon className="text-indigo-400" icon="lucide:gift" width="16"></iconify-icon>
<span className="text-sm font-medium text-slate-200 group-hover:text-white">免费领会员</span>
</button>
<button className="w-full text-left px-4 py-2.5 hover:bg-white/10 flex items-center gap-3 transition-colors group" onclick="openModal('membership-modal'); toggleSettings()">
<iconify-icon className="text-amber-400" icon="lucide:crown" width="16"></iconify-icon>
<span className="text-sm font-medium text-slate-200 group-hover:text-white">订阅会员</span>
</button>
<div className="h-px bg-white/10 mx-3 my-1.5"></div>
<div className="px-4 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">联系我们</div>
<button className="w-full text-left px-4 py-2 hover:bg-white/10 flex items-center gap-3 transition-colors group">
<iconify-icon className="text-rose-500" icon="simple-icons:xiaohongshu" width="16"></iconify-icon>
<span className="text-sm text-slate-300 group-hover:text-white">小红书</span>
</button>
<button className="w-full text-left px-4 py-2 hover:bg-white/10 flex items-center gap-3 transition-colors group">
<iconify-icon className="text-emerald-500" icon="simple-icons:wechat" width="16"></iconify-icon>
<span className="text-sm text-slate-300 group-hover:text-white">微信</span>
</button>
</div>
</div>
</header>

<div className="px-4 py-4 z-10 relative">
<div className="flex justify-between items-center text-sm font-medium text-slate-400 glass-card p-1.5 rounded-[20px]">
<button className="flex flex-col items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 hover:text-slate-200 transition-all cursor-pointer">
<span className="text-xs">一</span>
</button>
<button className="flex flex-col items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 hover:text-slate-200 transition-all cursor-pointer">
<span className="text-xs">二</span>
</button>

<button className="flex flex-col items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm text-black rounded-full shadow-[0_0_15px_rgba(255,255,255,0.15)] transform transition-all cursor-pointer">
<span className="text-xs font-bold">三</span>
</button>
<button className="flex flex-col items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 hover:text-slate-200 transition-all cursor-pointer">
<span className="text-xs">四</span>
</button>
<button className="flex flex-col items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 hover:text-slate-200 transition-all cursor-pointer">
<span className="text-xs">五</span>
</button>
<button className="flex flex-col items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 hover:text-slate-200 transition-all cursor-pointer">
<span className="text-xs">六</span>
</button>
<button className="flex flex-col items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 hover:text-slate-200 transition-all cursor-pointer">
<span className="text-xs">日</span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pb-32 px-4 space-y-3 z-0">

<div className="glass-panel rounded-[32px] p-6 relative">
<div className="flex justify-between items-center mb-2 pl-1">
<h2 className="text-lg font-medium text-white drop-shadow-sm">今日分布</h2>
<span className="text-xs font-medium text-slate-300 bg-white/10 px-2 py-1 rounded-full border border-white/5 backdrop-blur-md">24H</span>
</div>

<div className="relative w-full aspect-square max-w-[340px] mx-auto">

<svg className="w-full h-full" viewbox="0 0 320 320">

<defs>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="3"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<g className="text-[9px] font-medium fill-slate-400" style={{textAnchor: 'middle', dominantBaseline: 'middle'}}>



<text className="fill-white font-bold" x="160" y="25">0</text>
<text x="195" y="29">1</text>
<text x="227.5" y="43">2</text>
<text className="fill-white font-bold" x="255" y="65">3</text>
<text x="277" y="92.5">4</text>
<text x="291" y="125">5</text>
<text className="fill-white font-bold" x="295" y="160">6</text>
<text x="291" y="195">7</text>
<text x="277" y="227.5">8</text>
<text className="fill-white font-bold" x="255" y="255">9</text>
<text x="227.5" y="277">10</text>
<text x="195" y="291">11</text>
<text className="fill-white font-bold" x="160" y="295">12</text>
<text x="125" y="291">13</text>
<text x="92.5" y="277">14</text>
<text className="fill-white font-bold" x="65" y="255">15</text>
<text x="43" y="227.5">16</text>
<text x="29" y="195">17</text>
<text className="fill-white font-bold" x="25" y="160">18</text>
<text x="29" y="125">19</text>
<text x="43" y="92.5">20</text>
<text className="fill-white font-bold" x="65" y="65">21</text>
<text x="92.5" y="43">22</text>
<text x="125" y="29">23</text>
</g>

<circle cx="160" cy="160" fill="none" r="85" stroke="rgba(255,255,255,0.08)" strokeWidth="20"></circle>

<g stroke="rgba(255,255,255,0.1)" strokeWidth="1">

<line x1="160" x2="160" y1="75" y2="245"></line>

<line x1="75" x2="245" y1="160" y2="160"></line>

<line x1="100" x2="220" y1="100" y2="220"></line>

<line x1="220" x2="100" y1="100" y2="220"></line>
</g>



<g transform="rotate(-90 160 160)">



<circle cx="160" cy="160" fill="none" filter="url(#glow)" opacity="0.9" r="85" stroke="#818cf8" stroke-dasharray="155.75 600" strokeLinecap="round" strokeWidth="12" transform="rotate(345 160 160)"></circle>

<circle cx="160" cy="160" fill="none" filter="url(#glow)" opacity="0.9" r="85" stroke="#34d399" stroke-dasharray="44.5 600" strokeLinecap="round" strokeWidth="12" transform="rotate(97.5 160 160)"></circle>

<circle cx="160" cy="160" fill="none" filter="url(#glow)" opacity="0.9" r="85" stroke="#38bdf8" stroke-dasharray="211.4 600" strokeLinecap="round" strokeWidth="12" transform="rotate(150 160 160)"></circle>

<circle cx="160" cy="160" fill="none" filter="url(#glow)" opacity="0.9" r="85" stroke="#fb7185" stroke-dasharray="44.5 600" strokeLinecap="round" strokeWidth="12" transform="rotate(292.5 160 160)"></circle>
</g>

<line opacity="0.5" stroke="white" strokeLinecap="round" strokeWidth="2" transform="rotate(157.5 160 160)" x1="160" x2="160" y1="160" y2="85"></line>
<circle cx="160" cy="160" fill="white" opacity="0.5" r="3"></circle>
</svg>



<div className="absolute top-1/2 left-1/2 w-7 h-7 -ml-3.5 -mt-3.5 bg-black/40 backdrop-blur-md rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-300 shadow-sm z-10" style={{transform: 'rotate(37.5deg) translateY(-60px) rotate(-37.5deg)'}}>
<iconify-icon icon="lucide:moon" strokeWidth="2" width="12"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 w-7 h-7 -ml-3.5 -mt-3.5 bg-black/40 backdrop-blur-md rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-300 shadow-sm z-10" style={{transform: 'rotate(112.5deg) translateY(-60px) rotate(-112.5deg)'}}>
<iconify-icon icon="lucide:book-open" strokeWidth="2" width="12"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 w-7 h-7 -ml-3.5 -mt-3.5 bg-black/40 backdrop-blur-md rounded-full border border-sky-500/30 flex items-center justify-center text-sky-300 shadow-sm z-10" style={{transform: 'rotate(221.25deg) translateY(-60px) rotate(-221.25deg)'}}>
<iconify-icon icon="lucide:briefcase" strokeWidth="2" width="12"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 w-7 h-7 -ml-3.5 -mt-3.5 bg-black/40 backdrop-blur-md rounded-full border border-rose-500/30 flex items-center justify-center text-rose-300 shadow-sm z-10" style={{transform: 'rotate(307.5deg) translateY(-60px) rotate(-307.5deg)'}}>
<iconify-icon icon="lucide:gamepad-2" strokeWidth="2" width="12"></iconify-icon>
</div>

<div className="absolute top-1/2 left-1/2 w-3.5 h-3.5 -ml-[7px] -mt-[7px] bg-white rounded-full shadow-[0_0_15px_white] z-20" style={{transform: 'rotate(157.5deg) translateY(-85px)'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
<p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase mb-0.5">当前</p>
<p className="text-xl font-bold text-white tracking-tight drop-shadow-md">上班</p>
</div>
</div>
</div>

<div className="glass-card rounded-[24px] p-5 flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-300 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:text-indigo-200 transition-all">
<iconify-icon icon="lucide:moon" strokeWidth="2" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">睡觉</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-xs font-medium text-slate-400">23:00 - 06:00</span>
<span className="w-1 h-1 rounded-full bg-slate-500"></span>
<span className="text-xs text-slate-400">7h</span>
</div>
</div>
</div>
<iconify-icon className="text-slate-500" icon="lucide:chevron-right" strokeWidth="2" width="18"></iconify-icon>
</div>
<div className="glass-card rounded-[24px] p-5 flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-300 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:text-emerald-200 transition-all">
<iconify-icon icon="lucide:book-open" strokeWidth="2" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">学习</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-xs font-medium text-slate-400">06:30 - 08:30</span>
<span className="w-1 h-1 rounded-full bg-slate-500"></span>
<span className="text-xs text-slate-400">2h</span>
</div>
</div>
</div>
<iconify-icon className="text-slate-500" icon="lucide:chevron-right" strokeWidth="2" width="18"></iconify-icon>
</div>
<div className="glass-card rounded-[24px] p-5 flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-300 group-hover:scale-110 group-hover:bg-sky-500/20 group-hover:text-sky-200 transition-all">
<iconify-icon icon="lucide:briefcase" strokeWidth="2" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">上班</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-xs font-medium text-slate-400">10:00 - 19:30</span>
<span className="w-1 h-1 rounded-full bg-slate-500"></span>
<span className="text-xs text-slate-400">9.5h</span>
</div>
</div>
</div>
<iconify-icon className="text-slate-500" icon="lucide:chevron-right" strokeWidth="2" width="18"></iconify-icon>
</div>
<div className="glass-card rounded-[24px] p-5 flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-rose-300 group-hover:scale-110 group-hover:bg-rose-500/20 group-hover:text-rose-200 transition-all">
<iconify-icon icon="lucide:gamepad-2" strokeWidth="2" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">娱乐</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-xs font-medium text-slate-400">19:30 - 21:30</span>
<span className="w-1 h-1 rounded-full bg-slate-500"></span>
<span className="text-xs text-slate-400">2h</span>
</div>
</div>
</div>
<iconify-icon className="text-slate-500" icon="lucide:chevron-right" strokeWidth="2" width="18"></iconify-icon>
</div>
</div>

<div className="absolute bottom-8 left-0 right-0 flex justify-center px-6 pointer-events-none z-10">
<button className="pointer-events-auto w-full bg-white/90 backdrop-blur-md text-black h-14 rounded-full font-bold text-base tracking-tight shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all border border-white/20" onclick="openModal('membership-modal')">
<iconify-icon icon="lucide:plus-circle" strokeWidth="2" width="20"></iconify-icon>
<span>添加活动</span>
</button>
</div>


<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300" id="modal-backdrop" onclick="closeAllModals()"></div>

<div className="fixed inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50 pointer-events-none hidden" id="membership-modal">

<div className="glass-panel w-full sm:max-w-[400px] h-auto rounded-t-[32px] sm:rounded-[32px] p-6 relative pointer-events-auto border-t sm:border border-white/10 transform transition-transform duration-300 translate-y-full sm:translate-y-10 scale-95 opacity-0 bg-[#161618]/80">

<div className="flex items-center justify-between mb-8">
<button className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors" onclick="closeAllModals()">
<iconify-icon icon="lucide:x" strokeWidth="2" width="18"></iconify-icon>
</button>
<h2 className="text-lg font-bold text-white tracking-tight">订阅会员</h2>
<div className="w-9"></div>
</div>

<div className="relative overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-white/10 rounded-2xl p-5 mb-6 backdrop-blur-md">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
<h3 className="text-sm font-semibold text-white/90 mb-3 relative z-10">会员权益</h3>
<div className="flex items-center gap-3 relative z-10">
<div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px] shadow-[0_0_10px_rgba(99,102,241,0.4)]">
<iconify-icon icon="lucide:check" strokeWidth="4" width="12"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200">不限制添加次数</span>
</div>
</div>

<div className="space-y-3 mb-8">

<label className="block relative cursor-pointer group" onclick="selectPlan(this)">
<input checked="" className="peer sr-only" name="plan" type="radio"/>
<div className="relative bg-white/5 border-2 border-indigo-500/50 rounded-2xl p-4 transition-all hover:bg-white/10 peer-checked:bg-white/10 peer-checked:border-indigo-500">
<div className="flex items-center justify-between mb-1">
<span className="font-bold text-white text-[15px]">年度订阅</span>
<div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white transition-all scale-100 opacity-100 check-icon">
<iconify-icon icon="lucide:check" strokeWidth="4" width="12"></iconify-icon>
</div>
</div>
<div className="text-xs text-slate-400 flex items-center gap-2">
<span>每年 ¥28.00</span>
<span className="bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded text-[10px] font-semibold">推荐</span>
</div>
</div>
</label>

<label className="block relative cursor-pointer group" onclick="selectPlan(this)">
<input className="peer sr-only" name="plan" type="radio"/>
<div className="relative bg-white/5 border-2 border-transparent rounded-2xl p-4 transition-all hover:bg-white/10 peer-checked:bg-white/10 peer-checked:border-indigo-500">
<div className="flex items-center justify-between mb-1">
<span className="font-bold text-white text-[15px]">终身会员</span>
<div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center text-white transition-all scale-0 opacity-0 bg-transparent check-icon">
<iconify-icon icon="lucide:check" strokeWidth="4" width="12"></iconify-icon>
</div>
</div>
<div className="text-xs text-slate-400">
                                一次性 ¥38.00
                            </div>
</div>
</label>
</div>

<div className="flex items-center justify-center gap-4 text-xs text-slate-500 mb-5 font-medium">
<button className="hover:text-white transition-colors">管理订阅</button>
<div className="w-px h-3 bg-white/10"></div>
<button className="hover:text-white transition-colors">恢复购买</button>
</div>
<button className="w-full h-12 bg-white text-black font-bold rounded-full text-base tracking-tight hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] mb-4">
                    立即开启
                </button>
</div>
</div>

<div className="fixed inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50 pointer-events-none hidden" id="free-modal">
<div className="glass-panel w-full sm:max-w-[400px] h-auto max-h-[85vh] overflow-y-auto rounded-t-[32px] sm:rounded-[32px] p-6 relative pointer-events-auto border-t sm:border border-white/10 transform transition-transform duration-300 translate-y-full sm:translate-y-10 scale-95 opacity-0 bg-[#161618]/80">

<div className="flex items-center justify-between mb-6">
<button className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors" onclick="closeAllModals()">
<iconify-icon icon="lucide:x" strokeWidth="2" width="18"></iconify-icon>
</button>
<h2 className="text-lg font-bold text-white tracking-tight">免费领会员</h2>
<div className="w-9"></div>
</div>

<div className="mb-6">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/20 flex items-center justify-center text-rose-400">
<span className="font-bold text-sm">1</span>
</div>
<h3 className="text-base font-semibold text-white">分享到小红书</h3>
</div>
<div className="bg-white/5 rounded-2xl p-4 text-sm text-slate-300 space-y-3 leading-relaxed border border-white/5">
<p>发布使用心得（必须包含 APP 录屏或截图）。</p>
<p>添加开发者微信，分享发布的作品链接。</p>
<div className="flex items-center gap-2 text-indigo-300 font-medium bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20">
<iconify-icon icon="lucide:gift" width="16"></iconify-icon>
<span>领取 1 个月会员</span>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-500/20 flex items-center justify-center text-sky-400">
<span className="font-bold text-sm">2</span>
</div>
<h3 className="text-base font-semibold text-white">去应用市场好评</h3>
</div>
<div className="bg-white/5 rounded-2xl p-4 text-sm text-slate-300 space-y-3 leading-relaxed border border-white/5">
<p>在应用商店进行 5 星评价并撰写好评。</p>
<p>添加开发者微信，发送好评截图。</p>
<div className="flex items-center gap-2 text-indigo-300 font-medium bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20">
<iconify-icon icon="lucide:gift" width="16"></iconify-icon>
<span>领取 1 个月会员</span>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-5">
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 text-center">开发者联系方式</p>
<button className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/5">
<iconify-icon icon="lucide:copy" width="16"></iconify-icon>
<span className="text-sm font-medium">复制微信号: TimeKeeperDev</span>
</button>
</div>
</div>
</div>
</div>



    </>
  );
}
