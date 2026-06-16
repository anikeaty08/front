import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Initialize Lucide Icons
        lucide.createIcons();

        // Dark Mode Logic
        // Keeping logic here to maintain the dark theme class on load, even without the toggle button.
        const themeToggleBtn = document.getElementById('themeToggle');
        const htmlElement = document.documentElement;
        
        // Check system preference or previous save
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                htmlElement.classList.toggle('dark');
                if (htmlElement.classList.contains('dark')) {
                    localStorage.theme = 'dark';
                } else {
                    localStorage.theme = 'light';
                }
            });
        }

        // Mobile Menu Logic
        const openMenuBtn = document.getElementById('openMenu');
        const closeMenuBtn = document.getElementById('closeMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        const backdrop = document.getElementById('backdrop');

        function toggleMenu(show) {
            if (show) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        }

        if(openMenuBtn) openMenuBtn.addEventListener('click', () => toggleMenu(true));
        if(closeMenuBtn) closeMenuBtn.addEventListener('click', () => toggleMenu(false));
        if(backdrop) backdrop.addEventListener('click', () => toggleMenu(false));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="BqS5vTHVEpn6NiF0g8iJ"></div>

</div></div>

<header className="sticky z-50 top-0 w-full glass-panel transition-colors duration-300">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="h-7 w-7 bg-neutral-900 dark:bg-white rounded-md flex items-center justify-center text-white dark:text-neutral-900 transition-colors" style={{}}>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<span className="text-lg tracking-tight font-bold text-neutral-900 dark:text-white" style={{fontFamily: '\'Inter\', sans-serif'}}>Miracle</span>
</a>

<nav className="hidden md:flex gap-8">
<a className="dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center transition-colors text-sm font-medium text-neutral-600 h-16" href="/#capability">核心能力</a><a className="dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center transition-colors text-sm font-medium text-neutral-600 h-16" href="#custom">客製化開發</a>
<a className="dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center transition-colors text-sm font-medium text-neutral-600 h-16" href="#advisory">AI 導入顧問</a>
<div className="relative group h-16 flex items-center">
<button className="dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex cursor-pointer text-sm font-medium text-neutral-600 gap-x-1 gap-y-1 items-center" onclick="window.location.href='/#products';window.location.href='/#products';window.location.href='/#products';window.location.href='/#products';window.location.href='/#products';window.location.href='/#products';window.location.href='/home-roy';window.location.href='/#products';window.location.href='/#products';window.location.href='/#products'" role="button">
                            產品服務 <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] p-2 hidden group-hover:block pt-0">
<div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-xl p-4 grid grid-cols-2 gap-2 mt-2" style={{}}>
<a className="block hover:bg-neutral-50 dark:hover:bg-neutral-800 group/item transition-colors rounded-lg pt-3 pr-3 pb-3 pl-3" href="/insight">
<div className="flex gap-2 mb-1 gap-x-2 gap-y-2 items-center">
<span className="text-neutral-900 dark:text-neutral-100 font-bold text-sm" style={{}}>Insight 企業大腦</span>
</div>
<p className="text-xs text-neutral-500 dark:text-neutral-400" style={{}}>自然語言數據分析與決策</p>
</a>
<a className="block hover:bg-neutral-50 dark:hover:bg-neutral-800 group/item transition-colors rounded-lg pt-3 pr-3 pb-3 pl-3" href="/automate">
<div className="flex items-center gap-2 mb-1">
<span className="text-neutral-900 dark:text-neutral-100 font-bold text-sm" style={{}}>Automate 流程自動化</span>
</div>
<p className="dark:text-neutral-400 text-xs text-neutral-500">文件解析與流程機器人</p>
</a>
<a className="block hover:bg-neutral-50 dark:hover:bg-neutral-800 group/item transition-colors rounded-lg pt-3 pr-3 pb-3 pl-3" href="/transcribe">
<div className="flex items-center gap-2 mb-1">
<span className="text-neutral-900 dark:text-neutral-100 font-bold text-sm" style={{}}>Transcribe 語音智能</span>
</div>
<p className="text-xs text-neutral-500 dark:text-neutral-400" style={{}}>高精準度會議與通話轉錄</p>
</a>
<a className="block hover:bg-neutral-50 dark:hover:bg-neutral-800 group/item transition-colors rounded-lg pt-3 pr-3 pb-3 pl-3" href="/ai-sales">
<div className="flex gap-2 mb-1 gap-x-2 gap-y-2 items-center">
<span className="text-neutral-900 dark:text-neutral-100 font-bold text-sm" style={{}}>Sales 銷售助手</span>
</div>
<p className="text-xs text-neutral-500 dark:text-neutral-400" style={{}}>全通路 AI 客服與業務代理</p>
</a>
</div>
</div>
</div>
<a className="dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center transition-colors text-sm font-medium text-neutral-600 h-16" href="#about">關於我們</a>
</nav>

<div className="flex items-center gap-3">
<a className="text-sm font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-sm" href="#" style={{}}>立即諮詢</a>
<button className="md:hidden p-2 text-neutral-600 dark:text-neutral-400" id="openMenu" style={{}}>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24"><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</div>
</header>

<div className="fixed z-[60] hidden inset-0" id="mobileMenu">
<div className="absolute inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm" id="backdrop"></div>
<div className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 flex flex-col transform transition-transform duration-300">
<div className="flex justify-between items-center mb-8">
<span className="text-lg font-bold text-neutral-900 dark:text-white">選單</span>
<button className="p-1 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md" id="closeMenu" style={{}}>
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="space-y-6">
<div className="space-y-3">
<a className="block text-sm font-medium text-neutral-600 dark:text-neutral-400" href="#custom" style={{}}>客製化開發</a>
<a className="block text-sm font-medium text-neutral-600 dark:text-neutral-400" href="#advisory" style={{}}>AI 導入顧問</a>
</div>
<div className="h-px bg-neutral-100 dark:bg-neutral-800" style={{}}></div>
<div className="space-y-3">
<p className="text-xs font-bold text-neutral-400 uppercase tracking-wider" style={{}}>產品服務</p>
<a className="block text-sm font-medium text-neutral-900 dark:text-neutral-200" href="#" style={{}}>Insight 企業大腦</a>
<a className="block text-sm font-medium text-neutral-900 dark:text-neutral-200" href="#" style={{}}>Automate 流程自動化</a>
<a className="block text-sm font-medium text-neutral-900 dark:text-neutral-200" href="#" style={{}}>Transcribe 語音智能</a>
<a className="block text-sm font-medium text-neutral-900 dark:text-neutral-200" href="#" style={{}}>Sales 銷售助手</a>
</div>
<div className="h-px bg-neutral-100 dark:bg-neutral-800" style={{}}></div>
<div className="space-y-3">
<a className="block text-sm font-medium text-neutral-600 dark:text-neutral-400" href="#" style={{}}>關於我們</a>
</div>
</div>
</div>
</div>

<section className="overflow-hidden pt-24 pb-32 relative">
<div className="absolute inset-0 grid-bg z-0 pointer-events-none"></div>
<div className="z-10 sm:px-6 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="inline-flex animate-fade-in-up bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-sm gap-x-2 gap-y-2 items-center transition-colors cursor-default" style={{}}>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6D6FE6] opacity-75" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#6D6FE6]" style={{}}></span>
</span>
<span className="dark:text-neutral-300 text-xs font-medium text-neutral-600">全新推出 Miracle Automate 2.0</span>
</div>
<h1 className="sm:text-6xl lg:text-7xl leading-tight bg-clip-text text-5xl font-bold text-transparent tracking-tight bg-gradient-to-b from-white via-white to-neutral-400 max-w-5xl mr-auto mb-6 ml-auto">
                企業 AI 數位轉型的<br className="hidden sm:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6D6FE6] via-white to-[#6D6FE6]">最佳技術夥伴</span>
</h1>
<p className="sm:text-xl text-neutral-200 leading-relaxed text-lg font-medium max-w-2xl mr-auto mb-10 ml-auto">
                整合企業數據、自動化流程，並為您的業務部署 AI 智能體。<br className="hidden sm:block"/>從認知洞察到自主運營，我們是您最可靠的技術後盾。
            </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<button className="sm:w-auto hover:bg-neutral-200 hover:shadow-lg transition-all flex cursor-pointer font-semibold text-neutral-900 bg-white w-full border-gray-400 border rounded-lg pt-3 pr-8 pb-3 pl-8 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='/about-us-janey#contact';window.location.href='/about-us-janey#contact';window.location.href='/about-us-janey';window.location.href='/about-us-janey#contact';window.location.href='/about-us-janey#contact-form';window.location.href='/about-us-janey#contact-form';window.location.href='/about-us-janey#contact-form';window.location.href='/about-us-janey#contact-form';window.location.href='/about-us-janey#contact-form';window.location.href='/about-us-janey#contact-form';window.location.href='/about-us-janey#contact-form'" role="button">
                    立即預約免費 AI 諮詢
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 shadow-2xl shadow-neutral-200/50 dark:shadow-black/50 overflow-hidden aspect-[16/9] sm:aspect-[2/1] group transition-colors" style={{}}>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<img alt="Miracle Dashboard UI" className="dark:opacity-70 transition-opacity opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/caec0246-5cff-4783-8608-911a96e9a47a_1600w.jpg"/>
</div>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="JUFg0MwEcM3urKc9W7Vg"></div>

</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-neutral-950/50 dark:border-neutral-800 transition-colors bg-[#FAFAFA] border-neutral-200 border-b pt-24 pb-24" id="capability">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="max-w-4xl mx-auto mb-16 text-center">
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">Miracle 技術核心能力</h2>
<p className="text-xl sm:text-2xl text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed">Miracle 的技術底層實力，讓我們能成為你最可靠的 AI 後盾。</p>
<p className="text-base sm:text-lg text-[#6D6FE6] mt-4 font-mono uppercase tracking-widest font-semibold">Tech Capability Stack</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-[#6D6FE6]/30 transition-all hover:shadow-md group">
<div className="flex items-start gap-4 mb-5">
<span className="font-mono text-5xl font-bold tracking-tighter text-[#6D6FE6] opacity-80 leading-none">01</span>
<div className="pt-1.5">
<h3 className="font-bold text-xl text-neutral-900 dark:text-white leading-tight mb-1">LLM 與多模型混合架構能力</h3>
<div className="text-xs font-medium text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-wide">LLM Engineering</div>
</div>
</div>
<p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-5 pb-5 border-b border-neutral-100 dark:border-neutral-800">
                        核心能力：能搭建完整的 LLM Engine，而非只會 call API
                    </p>
<ul className="space-y-2.5">
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            支援 OpenAI、Anthropic、Google、Meta 多模型路由
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            LLM Function Calling / Agentic Workflow
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            專屬模型微調（Fine-tune / LoRA）
                        </li>
<li className="flex gap-2.5 dark:text-neutral-400 text-sm text-neutral-600 gap-x-2.5 gap-y-2.5 items-start">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            Prompt Routing &amp; Context Orchestration
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            多代理（Multi-Agent Framework）
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-[#6D6FE6]/30 transition-all hover:shadow-md group">
<div className="flex items-start gap-4 mb-5">
<span className="font-mono text-5xl font-bold tracking-tighter text-[#6D6FE6] opacity-80 leading-none">02</span>
<div className="pt-1.5">
<h3 className="font-bold text-xl text-neutral-900 dark:text-white leading-tight mb-1">知識庫、檢索與 RAG 工程</h3>
<div className="text-xs font-medium text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-wide">Retrieval Engineering</div>
</div>
</div>
<p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-5 pb-5 border-b border-neutral-100 dark:border-neutral-800">
                        核心能力：能讓企業的所有知識被搜尋、理解、定位、引用
                    </p>
<ul className="space-y-2.5">
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            向量資料庫（Weaviate / Pinecone / Elastic / pgvector）
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            Indexing、Chunking、Embedding 策略
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            Retriever-Reranker 雙層架構
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            企業知識庫權限切片（Permission-aware）
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            大文件 / 多格式（PDF、Word）全域索引
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-[#6D6FE6]/30 transition-all hover:shadow-md group">
<div className="flex items-start gap-4 mb-5">
<span className="font-mono text-5xl font-bold tracking-tighter text-[#6D6FE6] opacity-80 leading-none">03</span>
<div className="pt-1.5">
<h3 className="font-bold text-xl text-neutral-900 dark:text-white leading-tight mb-1">文件理解與結構化自動化</h3>
<div className="text-xs font-medium text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-wide">Document AI</div>
</div>
</div>
<p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-5 pb-5 border-b border-neutral-100 dark:border-neutral-800">
                        核心能力：能從任何文件得到乾淨的結構化資料
                    </p>
<ul className="space-y-2.5">
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            OCR（Vision OCR / Layout Parser）
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            文件理解（LLM + Vision → JSON Schema）
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            表單重建（Form Extraction）
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            內容比對、欄位填寫、流程轉自動化
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            高準確度文件 Pipeline（Validation Loop）
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-[#6D6FE6]/30 transition-all hover:shadow-md group">
<div className="flex items-start gap-4 mb-5">
<span className="font-mono text-5xl font-bold tracking-tighter text-[#6D6FE6] opacity-80 leading-none">04</span>
<div className="pt-1.5">
<h3 className="font-bold text-xl text-neutral-900 dark:text-white leading-tight mb-1">企業資料整合與 Data Pipeline</h3>
<div className="text-xs font-medium text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-wide">Data Engineering</div>
</div>
</div>
<p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-5 pb-5 border-b border-neutral-100 dark:border-neutral-800">
                        核心能力：能讓資料在企業內部流動、可信、可用
                    </p>
<ul className="space-y-2.5">
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            ETL / ELT 資料管線設計
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            API、Webhook、多系統整合
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            Data Lake、Data Warehouse、Event Streaming
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            資料清洗、Schema 設計、資料治理
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            高併發、高可靠度資料通路建置
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-[#6D6FE6]/30 transition-all hover:shadow-md group">
<div className="flex items-start gap-4 mb-5">
<span className="font-mono text-5xl font-bold tracking-tighter text-[#6D6FE6] opacity-80 leading-none">05</span>
<div className="pt-1.5">
<h3 className="font-bold text-xl text-neutral-900 dark:text-white leading-tight mb-1">地端 × 私有雲 × 混合雲 AI 部署</h3>
<div className="text-xs font-medium text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-wide">Infra &amp; DevOps</div>
</div>
</div>
<p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-5 pb-5 border-b border-neutral-100 dark:border-neutral-800">
                        核心能力：能在任何環境安全部署 AI，而不被鎖定雲廠商
                    </p>
<ul className="space-y-2.5">
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            On-Prem GPU 部署
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            私有模型（Self-hosted LLM / Embedding）
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            Hybrid Cloud Mesh Networking
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            模型監控、效能調整、ModelOps
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            Security：加密、權限、稽核、GDPR 合規
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-[#6D6FE6]/30 transition-all hover:shadow-md group">
<div className="flex items-start gap-4 mb-5">
<span className="font-mono text-5xl font-bold tracking-tighter text-[#6D6FE6] opacity-80 leading-none">06</span>
<div className="pt-1.5">
<h3 className="font-bold text-xl text-neutral-900 dark:text-white leading-tight mb-1">高標準產品化與系統工程</h3>
<div className="text-xs font-medium text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-wide">Product Engineering</div>
</div>
</div>
<p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-5 pb-5 border-b border-neutral-100 dark:border-neutral-800">
                        核心能力：能把 AI 技術變成可上線、可維運的正式產品
                    </p>
<ul className="space-y-2.5">
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            前後端系統、管理介面、客製化工具
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            企業級架構（Microservices / Clean Architecture）
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            AI UX、Prompt UI、模型解釋介面
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            Logging、Monitoring、SLA、錯誤追蹤
                        </li>
<li className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
<div className="mt-1 min-w-3"><div className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div></div>
                            持續部署（CI/CD）、可擴展模組化
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="dark:bg-neutral-900 dark:border-neutral-800 transition-colors bg-white border-neutral-200 border-b pt-24 pb-24" id="custom">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-5">
<span className="inline-block py-1 px-3 rounded-full bg-[#6D6FE6]/10 text-[#6D6FE6] text-xs font-bold uppercase tracking-wider mb-6">Development</span>
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">AI 客製化開發</h2>
<h3 className="text-xl font-medium text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">從想法到真正落地的企業級 AI 工程</h3>
<p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-base">
                        當現有產品無法滿足需求，我們提供完整的企業級 AI 系統開發，打造符合您業務邏輯的專屬解決方案。
                    </p>
<a className="hover:text-[#6D6FE6]/80 inline-flex items-center gap-1 transition-colors group text-sm font-semibold text-[#6D6FE6]" href="/services">
                        查看開發服務詳情
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path className="" d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="lg:col-span-7">
<div className="grid sm:grid-cols-2 gap-4">
<div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-[#6D6FE6] transition-colors group">
<div className="mb-3 text-neutral-900 dark:text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
<h4 className="font-bold text-neutral-900 dark:text-white text-sm mb-1">企業 ChatGPT / AI 助理</h4>
<p className="text-xs text-neutral-500 dark:text-neutral-400">客製化訓練與知識庫整合</p>
</div>
<div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-[#6D6FE6] transition-colors group">
<div className="mb-3 text-neutral-900 dark:text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
<h4 className="font-bold text-neutral-900 dark:text-white text-sm mb-1">文件理解與流程自動化</h4>
<p className="text-xs text-neutral-500 dark:text-neutral-400">高精度 OCR 與表單流程串接</p>
</div>
<div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-[#6D6FE6] transition-colors group">
<div className="mb-3 text-neutral-900 dark:text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
<h4 className="font-bold text-neutral-900 dark:text-white text-sm mb-1">模型微調與資料管線</h4>
<p className="text-xs text-neutral-500 dark:text-neutral-400">Fine-tuning / RAG / ETL</p>
</div>
<div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-[#6D6FE6] transition-colors group">
<div className="mb-3 text-neutral-900 dark:text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg></div>
<h4 className="font-bold text-neutral-900 dark:text-white text-sm mb-1">Web / App 全端開發</h4>
<p className="text-xs text-neutral-500 dark:text-neutral-400">現代化 AI 應用介面與後端架構</p>
</div>
<div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-[#6D6FE6] transition-colors group">
<div className="mb-3 text-neutral-900 dark:text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
<h4 className="font-bold text-neutral-900 dark:text-white text-sm mb-1">私有化部署 (On-Prem)</h4>
<p className="text-xs text-neutral-500 dark:text-neutral-400">地端 GPU 伺服器建置與維運</p>
</div>
<div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-[#6D6FE6] transition-colors group">
<div className="mb-3 text-neutral-900 dark:text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
<h4 className="font-bold text-neutral-900 dark:text-white text-sm mb-1">API 整合與中介軟體</h4>
<p className="text-xs text-neutral-500 dark:text-neutral-400">連接 ERP/CRM 等既有系統</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="advisory">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-5">
<span className="inline-block py-1 px-3 rounded-full bg-[#6D6FE6]/10 text-[#6D6FE6] text-xs font-bold uppercase tracking-wider mb-6">Consulting</span>
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">AI 導入顧問</h2>
<h3 className="text-xl font-medium text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">打造你的企業專屬 AI 轉型藍圖</h3>
<p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-base">
                        企業面臨的 AI 導入瓶頸（策略不清、資料分散、ROI 不明），我們以標準化顧問方法協助你建立可落地的 AI 推進計畫。
                    </p>
<a className="hover:text-[#6D6FE6]/80 inline-flex items-center gap-1 transition-colors group text-sm font-semibold text-[#6D6FE6]" href="/ai-consultant">
                        深入了解顧問服務
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="lg:col-span-7 flex flex-col justify-center">
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-neutral-900 transition-colors border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 shadow-sm hover:shadow-md">
<div className="mt-1 p-2 bg-white dark:bg-neutral-800 rounded-lg text-neutral-900 dark:text-white border border-neutral-100 dark:border-neutral-700"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></div>
<div>
<h4 className="font-bold text-neutral-900 dark:text-white text-lg mb-1">建立 AI 導入藍圖與優先級</h4>
<p className="text-neutral-500 dark:text-neutral-400 text-sm">協助企業盤點需求，定義 AI 專案的優先順序與時程規劃。</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-neutral-900 transition-colors border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 shadow-sm hover:shadow-md">
<div className="mt-1 p-2 bg-white dark:bg-neutral-800 rounded-lg text-neutral-900 dark:text-white border border-neutral-100 dark:border-neutral-700"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg></div>
<div>
<h4 className="font-bold text-neutral-900 dark:text-white text-lg mb-1">資料盤點與治理</h4>
<p className="text-neutral-500 dark:text-neutral-400 text-sm">評估資料可用性、品質與隱私合規，建立 AI Ready 的數據基礎。</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-neutral-900 transition-colors border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 shadow-sm hover:shadow-md">
<div className="mt-1 p-2 bg-white dark:bg-neutral-800 rounded-lg text-neutral-900 dark:text-white border border-neutral-100 dark:border-neutral-700"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg></div>
<div>
<h4 className="font-bold text-neutral-900 dark:text-white text-lg mb-1">流程 AI 化評估與 ROI 模型</h4>
<p className="text-neutral-500 dark:text-neutral-400 text-sm">量化 AI 導入效益，建立清晰的投資回報模型與成功指標。</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-neutral-900 transition-colors border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 shadow-sm hover:shadow-md">
<div className="mt-1 p-2 bg-white dark:bg-neutral-800 rounded-lg text-neutral-900 dark:text-white border border-neutral-100 dark:border-neutral-700"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
<div>
<h4 className="font-bold text-neutral-900 dark:text-white text-lg mb-1">POC → 導入 → 上線 Roadmap</h4>
<p className="text-neutral-500 dark:text-neutral-400 text-sm">從概念驗證到全公司推廣的完整執行路徑圖。</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-neutral-950 transition-colors bg-white pt-24 pb-24 relative" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 max-w-2xl">
<span className="text-sm font-semibold text-[#6D6FE6] uppercase tracking-wider mb-2 block">Miracle AI 產品解決方案</span>
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4" style={{}}>企業級 AI 產品</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 relative overflow-hidden card-hover group transition-colors flex flex-col h-full" style={{}}>
<div className="relative z-10 flex flex-col h-full">
<div className="h-10 w-10 rounded-lg bg-[#6D6FE6]/10 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-6 text-[#6D6FE6] shadow-sm transition-colors" style={{}}>
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4"></path><path d="M12 16V8"></path></svg>
</div>
<h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2" style={{}}>Miracle Insight｜企業大腦</h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6 leading-relaxed" style={{}}>自然語言數據分析與企業知識檢索，將分散資料整合為可即時回答的決策系統。</p>

<div className="flex flex-col gap-3 mb-8">
<div className="flex items-center gap-2.5">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6D6FE6]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#6D6FE6]"></div></div>
<span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">Text-to-SQL</span>
</div>
<div className="flex items-center gap-2.5">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6D6FE6]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#6D6FE6]"></div></div>
<span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">RAG 知識庫</span>
</div>
<div className="flex items-center gap-2.5">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6D6FE6]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#6D6FE6]"></div></div>
<span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">向量搜尋 &amp; 即時 Dashboard</span>
</div>
</div>
<div className="mt-auto">
<a className="inline-flex items-center gap-1.5 dark:text-white hover:opacity-70 transition-opacity text-sm font-semibold text-neutral-900" href="/insight">
                                查看產品介紹 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 relative overflow-hidden card-hover group transition-colors flex flex-col h-full" style={{}}>
<div className="relative z-10 flex flex-col h-full">
<div className="h-10 w-10 rounded-lg bg-[#6D6FE6]/10 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-6 text-[#6D6FE6] shadow-sm transition-colors" style={{}}>
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Miracle Automate｜流程自動化</h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6 leading-relaxed" style={{}}>次世代 AI RPA + OCR，處理 L/C、發票、契約等高複雜文件流程。</p>

<div className="flex flex-col gap-3 mb-8">
<div className="flex items-center gap-2.5">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6D6FE6]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#6D6FE6]"></div></div>
<span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">智能文件解析 (Intelligent OCR)</span>
</div>
<div className="flex items-center gap-2.5">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6D6FE6]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#6D6FE6]"></div></div>
<span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">自動審核與風險偵測</span>
</div>
<div className="flex items-center gap-2.5">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6D6FE6]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#6D6FE6]"></div></div>
<span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">AI 流程機器人</span>
</div>
</div>
<div className="mt-auto">
<a className="inline-flex items-center gap-1.5 dark:text-white hover:opacity-70 transition-opacity text-sm font-semibold text-neutral-900" href="/automate">
                                查看產品介紹 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 relative overflow-hidden card-hover group transition-colors flex flex-col h-full" style={{}}>
<div className="relative z-10 flex flex-col h-full">
<div className="h-10 w-10 rounded-lg bg-[#6D6FE6]/10 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-6 text-[#6D6FE6] shadow-sm transition-colors" style={{}}>
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2" style={{}}>Miracle Transcribe｜語音智能</h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6" style={{}}>具備語境感知的 STT，多模型投票確保最高辨識精準度。</p>

<div className="flex flex-col gap-3 mb-8">
<div className="flex items-center gap-2.5">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6D6FE6]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#6D6FE6]"></div></div>
<span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">會議記錄與摘要生成</span>
</div>
<div className="flex items-center gap-2.5">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6D6FE6]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#6D6FE6]"></div></div>
<span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">客服通話即時轉錄</span>
</div>
<div className="flex items-center gap-2.5">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6D6FE6]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#6D6FE6]"></div></div>
<span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">多語系自動辨識</span>
</div>
</div>
<div className="mt-auto">
<a className="inline-flex items-center gap-1.5 dark:text-white hover:opacity-70 transition-opacity text-sm font-semibold text-neutral-900" href="/transcribe">
                                查看產品介紹 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 relative overflow-hidden card-hover group transition-colors flex flex-col h-full" style={{}}>
<div className="relative z-10 flex flex-col h-full">
<div className="h-10 w-10 rounded-lg bg-[#6D6FE6]/10 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-6 text-[#6D6FE6] shadow-sm transition-colors" style={{}}>
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path className="" d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path className="" d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
</div>
<h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2" style={{}}>Miracle Sales｜銷售 AI 助手</h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6" style={{}}>跨渠道的銷售與客服 AI 代理人，24 小時上線。</p>

<div className="flex flex-col gap-3 mb-8">
<div className="flex items-center gap-2.5">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6D6FE6]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#6D6FE6]"></div></div>
<span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">Web / App 智慧小幫手</span>
</div>
<div className="flex items-center gap-2.5">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6D6FE6]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#6D6FE6]"></div></div>
<span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">LINE 官方帳號整合</span>
</div>
<div className="flex items-center gap-2.5">
<div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#6D6FE6]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#6D6FE6]"></div></div>
<span className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">B2B 開發 &amp; B2C 客服助理</span>
</div>
</div>
<div className="mt-auto">
<a className="inline-flex items-center gap-1.5 dark:text-white hover:opacity-70 transition-opacity text-sm font-semibold text-neutral-900" href="/ai-sales">
                                查看產品介紹 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-neutral-950 transition-colors text-center bg-white pt-24 pb-24">
<div className="max-w-3xl mx-auto px-4">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6" style={{}}>掌握 AI 數位革命，打造企業專屬智能化運營</h2>
<p className="text-neutral-500 dark:text-neutral-400 text-lg mb-10" style={{}}>
                立即啟動你的 AI 導入旅程，從策略、資料到落地應用，由 Miracle 全程掌舵。
                無論是企業級顧問、客製化開發，或部署上線，我們確保成果可見、風險可控。
            </p>
<div className="flex gap-4 gap-x-4 gap-y-4 justify-center">
<button className="dark:bg-white dark:text-neutral-900 hover:bg-black dark:hover:bg-neutral-200 shadow-neutral-500/20 dark:shadow-neutral-900/20 transition-all cursor-pointer font-semibold text-white bg-neutral-900 rounded-lg pt-3 pr-8 pb-3 pl-8 shadow-lg" onclick="window.location.href='/about#contact';window.location.href='/about-us-janey#contact';window.location.href='/about-us-janey#contact';window.location.href='/about-us-janey';window.location.href='/about#contact';window.location.href='/about-us-janey';window.location.href='/about-us-janey#contact-form';window.location.href='/about-us-janey#contact-form'" role="button">立即預約免費 AI 諮詢</button>
</div>
</div>
</section>

<footer className="dark:bg-neutral-900 dark:border-neutral-800 transition-colors bg-neutral-50 border-neutral-200 border-t pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="h-5 w-5 bg-neutral-900 dark:bg-white rounded flex items-center justify-center text-white dark:text-neutral-900 transition-colors" style={{}}>
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<span className="font-bold text-neutral-900 dark:text-white" style={{}}>Miracle</span>
</a>
<p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mb-6" style={{}}>
                        賦能企業運用次世代 AI 智能體、自動化工作流程與深度數據洞察，實現真正的數位轉型。
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100" href="#" style={{}}><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
<a className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100" href="#" style={{}}><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a>
</div>
</div>
<div className="">
<h4 className="font-bold text-neutral-900 dark:text-white mb-4 text-sm" style={{}}>產品服務</h4>
<ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400" style={{}}>
<li className=""><a className="hover:text-neutral-900 dark:hover:text-neutral-100" href="/insight">Miracle Insight</a></li>
<li className=""><a className="hover:text-neutral-900 dark:hover:text-neutral-100" href="/automate">Miracle Automate</a></li>
<li className=""><a className="hover:text-neutral-900 dark:hover:text-neutral-100" href="/transcribe">Miracle Transcribe</a></li>
<li className=""><a className="hover:text-neutral-900 dark:hover:text-neutral-100" href="/ai-sales">Miracle Sales</a></li>
</ul>
</div>
<div className="">
<h4 className="font-bold text-neutral-900 dark:text-white mb-4 text-sm" style={{}}>顧問與開發</h4>
<ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400" style={{}}>
<li className=""><a className="hover:text-neutral-900 dark:hover:text-neutral-100" href="/ai-consultant">AI 導入顧問</a></li>
<li className=""><a className="hover:text-neutral-900 dark:hover:text-neutral-100" href="/services">客製化開發</a></li>
<li className=""></li>
</ul>
</div>
<div className="">
<h4 className="font-bold text-neutral-900 dark:text-white mb-4 text-sm" style={{}}>關於我們</h4>
<ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400" style={{}}>
<li className="" onclick="window.location.href='/about-us'" role="button"><a className="hover:text-neutral-900 dark:hover:text-neutral-100" href="/about-us">公司簡介</a></li>
<li className=""></li>
<li className=""><a className="hover:text-neutral-900 dark:hover:text-neutral-100" href="https://www.104.com.tw/company/1a2x6bj98s">加入我們</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors" style={{}}>
<p className="text-xs text-neutral-400" style={{}}>© 2025 Miracle Mobile 2.0. All rights reserved.</p>
<div className="flex gap-6 text-xs text-neutral-500 dark:text-neutral-400" style={{}}>
<a className="hover:text-neutral-900 dark:hover:text-neutral-100" href="#" style={{}}>隱私權政策</a>
<a className="hover:text-neutral-900 dark:hover:text-neutral-100" href="#" style={{}}>服務條款</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
