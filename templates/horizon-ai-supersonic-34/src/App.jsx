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
theme: {
extend: {
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.rotate-x-12': { transform: 'perspective(1000px) rotateX(12deg)' },
'.rotate-x-0': { transform: 'perspective(1000px) rotateX(0deg)' }
});
}
]
};



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Reveal Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });

        // Modal Functionality
        function toggleModal() {
            const modal = document.getElementById('demo-modal');
            const isHidden = modal.classList.contains('hidden-modal');
            
            if (isHidden) {
                modal.classList.remove('hidden-modal');
                modal.classList.add('visible-modal');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                modal.classList.remove('visible-modal');
                modal.classList.add('hidden-modal');
                document.body.style.overflow = ''; // Restore scrolling
            }
        }
        
        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = document.getElementById('demo-modal');
                if (modal.classList.contains('visible-modal')) {
                    toggleModal();
                }
            }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md transition-all duration-300 reveal active">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[10px] font-semibold tracking-tighter">AI</div>
<span className="text-white font-medium tracking-tight text-sm group-hover:opacity-80 transition-opacity uppercase">Horizon AI</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#problem">挑戰</a>
<a className="hover:text-white transition-colors" href="#solutions">解決方案</a>
<a className="hover:text-white transition-colors" href="#methodology">方法論</a>
<a className="hover:text-white transition-colors" href="#faq">常見問題</a>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20" onclick="toggleModal()">
                    預約免費診斷
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[11px] font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Full-Stack AI Solutions
                </div>
<h1 className="reveal delay-100 text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] title-gradient">
                    流動的智慧，<br/>落地的未來。
                </h1>
<p className="reveal delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
                    算力只是起點，流動才有價值。我們協助企業跨越導入隔閡，建立真實運作的 AI 生態系。
                </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
<button className="w-full sm:w-auto group relative px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" onclick="toggleModal()">
                        預約免費診斷
                        <iconify-icon className="inline ml-1 group-hover:translate-x-0.5 transition-transform text-lg align-middle" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all duration-300" href="#solutions">
                        探索解決方案
                    </a>
</div>

<div className="reveal delay-300 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl border-t border-white/10 pt-8">
<div className="text-center md:text-left md:border-r border-white/10 last:border-0">
<div className="text-3xl font-bold text-white mb-1">85%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">AI 專案失敗率</div>
</div>
<div className="text-center md:text-left md:border-r border-white/10 last:border-0">
<div className="text-3xl font-bold text-indigo-400 mb-1">3x</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">導入成功率提升</div>
</div>
<div className="text-center md:text-left md:border-r border-white/10 last:border-0">
<div className="text-3xl font-bold text-white mb-1">50+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">企業導入經驗</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-bold text-white mb-1">6週</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">平均 PoC 週期</div>
</div>
</div>
</div>

<div className="mt-20 relative perspective-[2000px] group reveal delay-300">
<div className="relative w-full max-w-5xl mx-auto glass-panel rounded-xl p-1 shadow-2xl transition-transform duration-700 ease-out transform rotate-x-12 group-hover:rotate-x-0 overflow-hidden border-t border-white/10">
<div className="bg-[#0A0A0C] rounded-lg overflow-hidden border border-white/5 h-[450px] md:h-[550px] relative">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>

<div className="absolute inset-0 z-10 p-8 flex flex-col justify-center items-center">

<div className="flex gap-12 mb-12">
<div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-2 border-dashed border-white/20">
<iconify-icon className="text-blue-400 text-lg" icon="solar:database-linear"></iconify-icon>
<span className="text-xs text-slate-300">Enterprise Data</span>
</div>
<div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-2 border-dashed border-white/20">
<iconify-icon className="text-pink-400 text-lg" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs text-slate-300">Documents</span>
</div>
</div>

<div className="h-8 w-[1px] bg-gradient-to-b from-white/20 to-indigo-500/50 -mt-12 mb-2"></div>

<div className="relative z-20 w-full max-w-2xl bg-[#0F0F11] border border-white/10 rounded-xl p-6 shadow-2xl">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 rounded-full text-[10px] text-white border border-indigo-400 font-medium tracking-wide shadow-lg shadow-indigo-500/30">HORIZON CORE</div>
<div className="grid grid-cols-3 gap-4 mt-2">

<div className="bg-white/5 rounded-lg p-3 border border-white/5">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Ingestion</span>
<span className="text-[10px] text-emerald-400">Active</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 p-1.5 rounded bg-white/5">
<div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[8px]">DB</div>
<div className="h-1.5 w-12 bg-white/10 rounded"></div>
</div>
<div className="flex items-center gap-2 p-1.5 rounded bg-white/5">
<div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[8px]">API</div>
<div className="h-1.5 w-16 bg-white/10 rounded"></div>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/5 z-0"></div>
<div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mb-2 animate-pulse">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:cpu-linear"></iconify-icon>
</div>
<span className="text-[10px] text-indigo-200 text-center relative z-10">Processing...</span>
<div className="mt-2 w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-indigo-500"></div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 border border-white/5">
<div className="flex items-center gap-1 mb-3">
<iconify-icon className="text-green-400 text-sm" icon="solar:widget-linear"></iconify-icon>
<span className="text-[10px] text-slate-400">Integration</span>
</div>
<div className="space-y-2">
<div className="flex justify-end">
<div className="bg-green-500/20 text-green-100 px-2 py-1 rounded-t-lg rounded-bl-lg text-[9px]">Insight Gen</div>
</div>
<div className="flex justify-start">
<div className="bg-white/10 text-slate-300 px-2 py-1 rounded-t-lg rounded-br-lg text-[9px] border border-white/5">Workflow Triggered</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-8 w-[1px] bg-gradient-to-b from-indigo-500/50 to-white/20 mt-2"></div>

<div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 border border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-300">Business Value Delivered</span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-[#030304] to-transparent z-20"></div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="flex-1 reveal">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">為什麼 AI 專案<br/><span className="text-red-400/80">會失敗？</span></h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        技術不是問題，落地才是挑戰。85% 的企業 PoC 專案最終無法轉化為實際商業價值。
                    </p>
<div className="p-6 bg-red-500/5 border border-red-500/10 rounded-xl">
<p className="text-sm font-medium text-red-200 italic">"模型很厲害，但無法整合到我們的工作流程中。"</p>
<p className="text-xs text-red-400/60 mt-2">— 常見的企業痛點</p>
</div>
</div>
<div className="flex-1 w-full grid gap-4 reveal delay-100">
<div className="glass-panel p-4 rounded-lg flex items-center gap-4 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-400 text-xl" icon="solar:dollar-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium">成本陷阱 (Cost Trap)</h3>
<p className="text-slate-500 text-xs mt-1">許多企業低估了 AI 的總體成本與隱藏運維費用。</p>
</div>
</div>
<div className="glass-panel p-4 rounded-lg flex items-center gap-4 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-400 text-xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium">資安風險 (Security Risk)</h3>
<p className="text-slate-500 text-xs mt-1">資料安全與合規問題成為 AI 專案的最大阻礙。</p>
</div>
</div>
<div className="glass-panel p-4 rounded-lg flex items-center gap-4 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-400 text-xl" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium">導入隔閡 (Implementation Gap)</h3>
<p className="text-slate-500 text-xs mt-1">大部分 PoC 無法成功上線到正式生產環境。</p>
</div>
</div>
<div className="glass-panel p-4 rounded-lg flex items-center gap-4 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-400 text-xl" icon="solar:link-broken-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium">整合困難 (Integration Difficulty)</h3>
<p className="text-slate-500 text-xs mt-1">與現有舊系統 (Legacy) 整合的複雜度遠超預期。</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050507] border-y border-white/5" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center text-white mb-16 tracking-tight reveal">解決方案概覽</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-panel p-8 rounded-2xl reveal delay-100 flex flex-col group hover:border-indigo-500/30 transition-colors">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-400 text-2xl" icon="solar:library-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">企業知識庫</h3>
<p className="text-sm text-slate-500 mb-4">智慧搜尋與知識管理平台</p>
<p className="text-sm text-slate-400 leading-relaxed">
                        打破資訊孤島，將散落的企業文件轉化為可對話的智慧資產。支援多模態檢索，讓員工即時獲取準確資訊。
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-100 flex flex-col group hover:border-indigo-500/30 transition-colors">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-purple-400 text-2xl" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">AI 會議翻譯</h3>
<p className="text-sm text-slate-500 mb-4">即時多語言會議翻譯系統</p>
<p className="text-sm text-slate-400 leading-relaxed">
                        消除跨國溝通障礙。即時語音轉文字與翻譯，自動生成會議摘要與待辦事項，提升跨團隊協作效率。
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-200 flex flex-col group hover:border-indigo-500/30 transition-colors">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Document AI</h3>
<p className="text-sm text-slate-500 mb-4">智慧文件辨識與處理</p>
<p className="text-sm text-slate-400 leading-relaxed">
                        自動化處理發票、合約、表單等非結構化數據。結合 OCR 與 LLM 技術，精準提取關鍵欄位，減少人工輸入錯誤。
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-200 flex flex-col group hover:border-indigo-500/30 transition-colors">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-400 text-2xl" icon="solar:factory-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">AI Factory Digital Twin</h3>
<p className="text-sm text-slate-500 mb-4">智慧工廠數位孿生解決方案</p>
<p className="text-sm text-slate-400 leading-relaxed">
                        結合 IoT 數據與 AI 模擬，即時監控產線狀態。預測設備維護需求，優化生產排程，實現工業 4.0 智慧製造。
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Full-Stack AI 方法論</h2>
<p className="text-slate-400 text-lg">
                    三層架構確保 AI 成功落地，從底層基礎到前端應用，構建穩固的智慧生態。
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-0"></div>

<div className="group relative z-10 reveal delay-100">
<div className="glass-panel bg-[#050507] p-8 rounded-2xl h-full border hover:border-indigo-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-[#0A0A0C] border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10 mx-auto md:mx-0">
<span className="text-indigo-400 font-bold">01</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 text-center md:text-left">Application Layer</h3>
<p className="text-xs font-semibold text-indigo-400 mb-2 text-center md:text-left">應用層</p>
<p className="text-sm text-slate-400 text-center md:text-left">
                            直觀的智慧應用與使用者介面 (UI/UX)，確保終端用戶能無縫使用 AI 功能，最大化生產力。
                        </p>
</div>
</div>

<div className="group relative z-10 reveal delay-200">
<div className="glass-panel bg-[#050507] p-8 rounded-2xl h-full border hover:border-indigo-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-[#0A0A0C] border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10 mx-auto md:mx-0">
<span className="text-indigo-400 font-bold">02</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 text-center md:text-left">Integration Layer</h3>
<p className="text-xs font-semibold text-indigo-400 mb-2 text-center md:text-left">整合層</p>
<p className="text-sm text-slate-400 text-center md:text-left">
                            系統整合與資料流程自動化 (RAG/Agent)，連接孤島數據，讓 AI 模型能存取即時且準確的企業資訊。
                        </p>
</div>
</div>

<div className="group relative z-10 reveal delay-300">
<div className="glass-panel bg-[#050507] p-8 rounded-2xl h-full border hover:border-indigo-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-[#0A0A0C] border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10 mx-auto md:mx-0">
<span className="text-indigo-400 font-bold">03</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 text-center md:text-left">Infrastructure Layer</h3>
<p className="text-xs font-semibold text-indigo-400 mb-2 text-center md:text-left">基礎層</p>
<p className="text-sm text-slate-400 text-center md:text-left">
                            穩健的基礎建設、MLOps 與資安架構，確保模型訓練與推論的高可用性、合規性與安全性。
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#050507]" id="faq">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">常見問題</h2>
<p className="text-slate-400">關於企業 AI 轉型的疑問</p>
</div>
<div className="space-y-4 reveal delay-100">

<div className="glass-panel p-6 rounded-xl">
<h3 className="text-white font-medium text-lg mb-2 flex items-start gap-3">
<iconify-icon className="text-indigo-400 text-xl mt-1 flex-shrink-0" icon="solar:question-circle-linear"></iconify-icon>
                        什麼樣的企業適合開始 AI 導入？
                    </h3>
<p className="text-slate-400 text-sm leading-relaxed pl-8">
                        任何希望提升營運效率、降低成本或開創新商業模式的企業都適合。我們建議先進行 AI 準備度評估，了解您的企業現況與最適合的導入路徑。
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl">
<h3 className="text-white font-medium text-lg mb-2 flex items-start gap-3">
<iconify-icon className="text-indigo-400 text-xl mt-1 flex-shrink-0" icon="solar:question-circle-linear"></iconify-icon>
                        Horizon AI 與一般 AI 工具供應商有何不同？
                    </h3>
<p className="text-slate-400 text-sm leading-relaxed pl-8">
                        我們不只提供工具，更提供完整的 Full-Stack AI 方法論。從評估、設計、開發到治理，我們確保您的 AI 專案能真正落地並創造價值，而非僅止於實驗階段。
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl">
<h3 className="text-white font-medium text-lg mb-2 flex items-start gap-3">
<iconify-icon className="text-indigo-400 text-xl mt-1 flex-shrink-0" icon="solar:question-circle-linear"></iconify-icon>
                        是否一定要先做 AI 診斷？
                    </h3>
<p className="text-slate-400 text-sm leading-relaxed pl-8">
                        AI 診斷能幫助您避免常見的導入陷阱，但並非絕對必要。如果您已有明確的專案目標，也可以直接與我們討論 PoC 合作方案。
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-white/5" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">準備好開始您的 AI 轉型旅程嗎？</h2>
<p className="text-slate-400 mb-10">從概念驗證到大規模落地，我們是您最可靠的技術夥伴。</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-all duration-300" onclick="toggleModal()">
                    預約免費診斷
                </button>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/5 transition-all duration-300" href="#solutions">
                    瀏覽成功案例
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[100px] pointer-events-none"></div>
</section>

<footer className="bg-[#020203] py-12 text-sm reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[9px] font-bold">AI</div>
<span className="text-white font-medium tracking-tight uppercase">Horizon AI</span>
</div>
<p className="text-slate-500 text-xs leading-relaxed">
                        流動的智慧，落地的未來。我們專注於協助企業導入可擴展的 AI 解決方案。
                    </p>
<div className="mt-6 flex flex-col gap-2 text-xs text-slate-500">
<a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:contact@horizon.ai">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon> contact@horizon.ai
                         </a>
</div>
</div>
<div className="flex gap-12">
<div>
<h4 className="text-white font-medium mb-4">導覽</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-white transition-colors" href="#solutions">解決方案</a></li>
<li><a className="hover:text-white transition-colors" href="#methodology">方法論</a></li>
<li><a className="hover:text-white transition-colors" href="#faq">常見問題</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">條款</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">隱私權政策</a></li>
<li><a className="hover:text-white transition-colors" href="#">服務條款</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex justify-between items-center">
<p className="text-slate-600 text-xs">© 2024 Horizon AI Technologies. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center hidden-modal p-4" id="demo-modal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="toggleModal()"></div>

<div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 w-full max-w-md relative z-10 shadow-2xl" id="modal-content">
<button className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors" onclick="toggleModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="text-center mb-6">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 mb-4 border border-indigo-500/20">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">預約免費診斷</h3>
<p className="text-sm text-slate-400">了解您的企業最適合的 AI 導入路徑。</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">姓名</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" placeholder="王大明" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">公司 Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" placeholder="name@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">公司名稱</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" placeholder="Horizon Inc." type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">感興趣的解決方案</label>
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-slate-400">
<option disabled="" selected="" value="">請選擇</option>
<option value="knowledge">企業知識庫</option>
<option value="meeting">AI 會議翻譯</option>
<option value="doc">Document AI</option>
<option value="factory">Digital Twin</option>
<option value="consulting">全方位顧問諮詢</option>
</select>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition-colors mt-2 shadow-lg shadow-indigo-500/20" type="button">
                    送出申請
                </button>
</form>
</div>
</div>



    </>
  );
}
