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



        const chatOutput = document.getElementById('chat-output');
        const userInput = document.getElementById('user-prompt');

        async function handleAIRequest() {
            const query = userInput.value.trim();
            if (!query) return;

            // User Message
            const userMsgHTML = `
                <div class="flex gap-4 flex-row-reverse animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div class="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-white shrink-0">
                        <iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
                    </div>
                    <div class="space-y-1 text-right max-w-[80%]">
                        <div class="text-sm text-white leading-relaxed bg-indigo-600/20 rounded-2xl rounded-tr-none px-4 py-3 border border-indigo-500/20 text-left">
                            ${query}
                        </div>
                    </div>
                </div>
            `;
            chatOutput.insertAdjacentHTML('beforeend', userMsgHTML);
            userInput.value = '';
            chatOutput.scrollTop = chatOutput.scrollHeight;

            // Loader
            const loadingId = 'loading-' + Date.now();
            const loadingHTML = `
                <div id="${loadingId}" class="flex gap-4 animate-in fade-in duration-300">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shrink-0">
                        <iconify-icon icon="solar:stars-minimalistic-bold" width="16"></iconify-icon>
                    </div>
                    <div class="flex items-center gap-1.5 h-10 px-2">
                        <div class="ai-pulse"></div>
                        <div class="ai-pulse"></div>
                        <div class="ai-pulse"></div>
                    </div>
                </div>
            `;
            chatOutput.insertAdjacentHTML('beforeend', loadingHTML);
            chatOutput.scrollTop = chatOutput.scrollHeight;

            // Simulate Response
            setTimeout(() => {
                const loader = document.getElementById(loadingId);
                if (loader) loader.remove();

                let responseContent = "";
                const lowerQuery = query.toLowerCase();
                
                if (lowerQuery.includes('gsp') || lowerQuery.includes('ходовая') || lowerQuery.includes('шрус')) {
                    responseContent = `
                        <div class="font-medium text-white mb-2">Найдено 2 варианта (GSP):</div>
                        <div class="space-y-2">
                            <div class="bg-white/5 p-3 rounded-lg border border-white/10 hover:border-indigo-500/30 transition-colors cursor-pointer group">
                                <div class="flex justify-between items-start">
                                    <div class="text-xs text-indigo-300 font-mono mb-1">GSP-8${Math.floor(Math.random()*100)+10}</div>
                                    <div class="text-xs text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">В наличии</div>
                                </div>
                                <div class="text-sm text-slate-200">ШРУС наружный ${query}</div>
                                <div class="mt-2 text-sm font-semibold text-white">1 850 с.</div>
                            </div>
                        </div>
                    `;
                } else {
                    responseContent = `
                        <div class="text-slate-200">
                            Анализирую наличие "${query}"... <br>
                            Пожалуйста, уточните год выпуска автомобиля и объем двигателя для точного подбора.
                        </div>
                    `;
                }

                const botMsgHTML = `
                    <div class="flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/20">
                            <iconify-icon icon="solar:stars-minimalistic-bold" width="16"></iconify-icon>
                        </div>
                        <div class="space-y-1 w-full max-w-[85%]">
                            <div class="text-sm font-medium text-indigo-200">Tetik AI</div>
                            <div class="text-sm text-slate-300 leading-relaxed bg-white/5 rounded-2xl rounded-tl-none px-4 py-3 border border-white/5">
                                ${responseContent}
                                <div class="mt-3 pt-3 border-t border-white/10 flex gap-3">
                                    <a href="https://wa.me/message/NMSEB5SVXJP2N1" class="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1">
                                        Заказать <iconify-icon icon="solar:cart-large-minimalistic-linear"></iconify-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                chatOutput.insertAdjacentHTML('beforeend', botMsgHTML);
                chatOutput.scrollTop = chatOutput.scrollHeight;
                
            }, 1800);
        }

        userInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') handleAIRequest();
        });
    
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
      

<nav className="fixed top-0 inset-x-0 z-50 h-16 border-b border-white/5 bg-[#030712]/70 backdrop-blur-xl">
<div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
<div className="flex items-center gap-2.5 group cursor-default">
<div className="relative w-8 h-8 rounded-lg bg-gradient-to-b from-indigo-500/20 to-indigo-500/5 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
<div className="absolute inset-0 bg-indigo-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
<iconify-icon className="relative z-10" icon="solar:cpu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-heading font-semibold tracking-tight text-lg">Tetik AI</span>
</div>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-sm font-medium hover:text-white transition-colors" href="#ai-brain">AI Поиск</a>
<a className="text-xs font-medium bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2" href="https://wa.me/message/NMSEB5SVXJP2N1">
<span>Связаться</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="scene-3d">
<div className="cube-wrapper">

<div className="cube">
<div className="face front"></div>
<div className="face back"></div>
<div className="face right"></div>
<div className="face left"></div>
<div className="face top"></div>
<div className="face bottom"></div>
</div>

<div className="cube-inner">
<div className="face-inner i-front"></div>
<div className="face-inner i-back"></div>
<div className="face-inner i-right"></div>
<div className="face-inner i-left"></div>
<div className="face-inner i-top"></div>
<div className="face-inner i-bottom"></div>
</div>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] opacity-20 pointer-events-none z-0">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 blur-[120px] rounded-full mix-blend-screen"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span>AI-магазин запчастей нового поколения</span>
</div>

<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1] drop-shadow-2xl">
                Умный поиск <br/>
<span className="text-gradient">автозапчастей</span> за секунды
            </h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md bg-[#030712]/40 backdrop-blur-sm rounded-xl p-2 inline-block">
                Первый AI-агент в Бишкеке, интегрированный со складами GSP и Wanlanda. 
                Точный подбор, мгновенная проверка наличия и доставка.
            </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95" href="#ai-brain">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="2" width="18"></iconify-icon>
                    Запустить AI Поиск
                </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:scale-105 active:scale-95" href="https://wa.me/message/NMSEB5SVXJP2N1">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                    WhatsApp
                </a>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<span className="text-xs uppercase tracking-[0.2em] font-medium text-slate-500">Официальные партнеры:</span>

<div className="flex items-center gap-2 group cursor-default">
<div className="text-2xl font-bold tracking-tighter text-white italic group-hover:text-indigo-400 transition-colors">GSP</div>
<span className="text-[10px] leading-tight text-slate-400 border-l border-slate-700 pl-2">AUTOMOTIVE<br/>GROUP</span>
</div>

<div className="flex items-center gap-2 group cursor-default">
<div className="h-6 w-6 border border-white/50 rounded flex items-center justify-center group-hover:border-indigo-400 group-hover:text-indigo-400 transition-colors text-white">
<span className="text-[10px] font-bold">W</span>
</div>
<div className="text-xl font-medium tracking-wide text-white group-hover:text-indigo-400 transition-colors">WANLANDA</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Как работает Tetik AI</h2>
<p className="text-slate-400">Технологичный подход к покупке запчастей</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full translate-x-10 -translate-y-10 group-hover:bg-indigo-500/20 transition-all"></div>
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 mb-6 shadow-lg shadow-indigo-900/10 transform transition-transform group-hover:scale-110 group-hover:rotate-6">
<iconify-icon icon="solar:keyboard-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-semibold mb-2 transform translate-z-10 group-hover:translate-x-1 transition-transform">1. Запрос</h3>
<p className="text-sm leading-relaxed text-slate-400">
                        Просто напишите название детали (например, "тормозные колодки Camry 50"). Нейросеть распознает запрос даже с ошибками.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full translate-x-10 -translate-y-10 group-hover:bg-indigo-500/20 transition-all"></div>
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 mb-6 shadow-lg shadow-indigo-900/10 transform transition-transform group-hover:scale-110 group-hover:rotate-6">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-semibold mb-2 transform translate-z-10 group-hover:translate-x-1 transition-transform">2. Анализ остатков</h3>
<p className="text-sm leading-relaxed text-slate-400">
                        Алгоритм мгновенно сканирует базы данных поставщиков, сверяет кросс-номера и находит лучшие цены.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full translate-x-10 -translate-y-10 group-hover:bg-indigo-500/20 transition-all"></div>
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 mb-6 shadow-lg shadow-indigo-900/10 transform transition-transform group-hover:scale-110 group-hover:rotate-6">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-semibold mb-2 transform translate-z-10 group-hover:translate-x-1 transition-transform">3. Логистика</h3>
<p className="text-sm leading-relaxed text-slate-400">
                        Мы бронируем деталь на складе и организуем быструю доставку до вашей двери или СТО.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="ai-brain">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<span className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2 block">Demo Mode</span>
<h2 className="text-3xl font-semibold text-white tracking-tight">Попробуйте Tetik AI прямо сейчас</h2>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0B0C15]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col h-[500px] transform transition-all hover:shadow-[0_0_50px_-10px_rgba(99,102,241,0.2)]">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
<span className="text-sm font-medium text-white">Tetik Assistant</span>
</div>
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth" id="chat-output">

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/20">
<iconify-icon icon="solar:stars-minimalistic-bold" width="16"></iconify-icon>
</div>
<div className="space-y-1">
<div className="text-sm font-medium text-indigo-200">Tetik AI</div>
<div className="text-sm text-slate-300 leading-relaxed bg-white/5 rounded-2xl rounded-tl-none px-4 py-3 border border-white/5">
                                Привет! Я помогу найти запчасти. Напишите VIN-код или название детали + марку авто. <br/><br/>
<span className="text-slate-500 text-xs">Например: "Масляный фильтр Kia Rio"</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-white/[0.02]">
<div className="relative flex items-center">
<input className="w-full bg-black/20 text-white text-sm rounded-xl pl-4 pr-12 py-3.5 border border-white/10 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600" id="user-prompt" placeholder="Сообщение Tetik AI..." type="text"/>
<button className="absolute right-2 p-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors flex items-center justify-center" onclick="handleAIRequest()">
<iconify-icon icon="solar:arrow-up-linear" width="18"></iconify-icon>
</button>
</div>
<div className="text-center mt-3">
<p className="text-[10px] text-slate-600">AI может допускать ошибки. Проверяйте совместимость перед покупкой.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#030712]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:cpu-linear" width="20"></iconify-icon>
<span className="text-white font-semibold tracking-tight">Tetik AI</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Политика</a>
<a className="hover:text-white transition-colors" href="#">Контакты</a>
</div>
<p className="text-xs text-slate-600">© 2024 Bishkek. All rights reserved.</p>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 group flex items-center gap-3" href="https://wa.me/message/NMSEB5SVXJP2N1" target="_blank">
<div className="absolute inset-0 bg-indigo-600 rounded-full blur-[20px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

<span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 bg-[#1a1d2d] border border-white/10 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xl">
            Связаться с агентом
        </span>
<div className="relative flex items-center gap-2 pl-4 pr-2 py-2 bg-white text-slate-950 rounded-full shadow-2xl hover:bg-slate-50 active:scale-95 transition-all duration-300 ring-1 ring-white/10">
<span className="text-xs font-semibold tracking-tight mr-1">Менеджер</span>
<div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:headset-bold" width="16"></iconify-icon>
</div>

<span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
</div>
</a>


    </>
  );
}
