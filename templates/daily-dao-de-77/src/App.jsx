import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function setLang(lang) {
            const body = document.body;
            const btnEn = document.getElementById('btn-en');
            const btnZh = document.getElementById('btn-zh');
            
            // Remove both first to avoid conflict
            body.classList.remove('mode-en', 'mode-zh');
            body.classList.add('mode-' + lang);

            // Update Toggle Button Styles
            if(lang === 'en') {
                btnEn.className = "px-3 py-1 text-xs font-medium rounded text-zinc-100 bg-zinc-800 shadow-sm transition-all";
                btnZh.className = "px-3 py-1 text-xs font-medium rounded text-zinc-500 hover:text-zinc-300 transition-all";
            } else {
                btnZh.className = "px-3 py-1 text-xs font-medium rounded text-zinc-100 bg-zinc-800 shadow-sm transition-all";
                btnEn.className = "px-3 py-1 text-xs font-medium rounded text-zinc-500 hover:text-zinc-300 transition-all";
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-3xl space-y-8 pb-12 content-wrapper">

<header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100">
<iconify-icon height="16" icon="lucide:book-open" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h1 className="text-lg font-medium tracking-tight text-zinc-100">
<span className="lang-en">Daily Dao Companion</span>
<span className="lang-zh">每日问道</span>
</h1>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span>v1.2</span>
<span className="size-0.5 rounded-full bg-zinc-700"></span>
<span className="lang-en">Daily Guidance</span>
<span className="lang-zh">今日指引</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">

<div className="flex p-0.5 rounded-md border border-zinc-800 bg-zinc-900/50">
<button className="px-3 py-1 text-xs font-medium rounded text-zinc-100 bg-zinc-800 shadow-sm transition-all" id="btn-en" onclick="setLang('en')">EN</button>
<button className="px-3 py-1 text-xs font-medium rounded text-zinc-500 hover:text-zinc-300 transition-all" id="btn-zh" onclick="setLang('zh')">中文</button>
</div>
<div className="hidden md:block px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400">
<span className="lang-en">Standard Mode</span>
<span className="lang-zh">标准模式</span>
</div>
</div>
</header>

<section className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 md:p-8">
<div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
<iconify-icon height="120" icon="lucide:waves" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="space-y-6 relative z-10">
<div className="flex items-baseline justify-between">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
<span className="lang-en">Chapter 08</span>
<span className="lang-zh">道德经 · 第八章</span>
</span>
<iconify-icon className="text-zinc-700 hover:text-zinc-400 transition-colors cursor-pointer" height="16" icon="lucide:bookmark" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="space-y-4">
<h2 className="text-2xl md:text-3xl font-serif text-zinc-100 leading-snug tracking-tight">
<span className="lang-en">
                            The highest excellence is like water.<br/>
<span className="text-zinc-500 text-lg md:text-xl block mt-2 font-sans font-normal">"Water benefits all things and does not compete; it dwells in places that others disdain."</span>
</span>
<span className="lang-zh">
                            上善若水。<br/>
<span className="text-zinc-500 text-lg md:text-xl block mt-2 font-sans font-normal">水善利万物而不争，处众人之所恶，故几于道。</span>
</span>
</h2>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/10 space-y-3">
<div className="flex items-center gap-2 text-zinc-100 mb-1">
<iconify-icon height="14" icon="lucide:microscope" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-sm font-medium tracking-tight">
<span className="lang-en">Decoding</span>
<span className="lang-zh">深度解码</span>
</span>
</div>
<div className="space-y-3">
<div className="flex gap-3">
<span className="text-xs uppercase tracking-wide text-zinc-600 mt-0.5 min-w-[3rem] lang-en">Keyword</span>
<span className="text-xs uppercase tracking-wide text-zinc-600 mt-0.5 min-w-[3rem] lang-zh">核心词</span>
<p className="text-xs leading-relaxed text-zinc-400 lang-en"><strong className="text-zinc-200">不争 (Bu Zheng):</strong> Not passivity, but zero internal friction. Efficiency through alignment with gravity rather than frontal collision.</p>
<p className="text-xs leading-relaxed text-zinc-400 lang-zh"><strong className="text-zinc-200">不争：</strong>并非消极避世，而是零内耗。通过顺应形势而非正面硬抗来最大化效率。</p>
</div>
<div className="flex gap-3">
<span className="text-xs uppercase tracking-wide text-zinc-600 mt-0.5 min-w-[3rem] lang-en">Logic</span>
<span className="text-xs uppercase tracking-wide text-zinc-600 mt-0.5 min-w-[3rem] lang-zh">逻辑</span>
<p className="text-xs leading-relaxed text-zinc-400 lang-en">By occupying the "lowest" position, water gains potential energy and serves as the foundation, becoming indispensable.</p>
<p className="text-xs leading-relaxed text-zinc-400 lang-zh">处“下”位者，实则积蓄势能（Potential Energy）。作为万物之基石，方能不可或缺。</p>
</div>
</div>
</div>

<div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/10 space-y-3">
<div className="flex items-center gap-2 text-zinc-100 mb-1">
<iconify-icon height="14" icon="lucide:shield-alert" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-sm font-medium tracking-tight">
<span className="lang-en">Correction</span>
<span className="lang-zh">认知纠偏</span>
</span>
</div>
<div className="text-xs leading-relaxed text-zinc-400">
<span className="lang-en">
<span className="text-zinc-200 block mb-1">Mistake: "Be weak and do nothing."</span>
                        Correction: Water can erode stone. "Weakness" refers to fluidity and adaptability, not lack of force. It is the ultimate resilience strategy.
                    </span>
<span className="lang-zh">
<span className="text-zinc-200 block mb-1">误区：“示弱躺平”</span>
                        正解：滴水穿石。所谓“弱”是指流体性与适应性，而非软弱。这是应对刚性折断的终极韧性策略。
                    </span>
</div>
</div>
</div>

<section className="space-y-4 pt-4">
<h3 className="text-sm font-medium text-zinc-100 tracking-tight flex items-center gap-2">
<iconify-icon height="14" icon="lucide:network" strokeWidth="1.5" width="14"></iconify-icon>
<span className="lang-en">Knowledge Isomorphism</span>
<span className="lang-zh">跨界同构</span>
</h3>
<div className="divide-y divide-zinc-900 border-t border-b border-zinc-900">

<div className="py-3 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-zinc-900/30 transition-colors rounded-md px-2">
<div className="w-24 text-xs font-medium text-zinc-500 shrink-0 lang-en">Philosophy</div>
<div className="w-24 text-xs font-medium text-zinc-500 shrink-0 lang-zh">武术哲学</div>
<div className="flex-1 text-sm text-zinc-300">
<span className="lang-en"><span className="text-zinc-100 font-medium">Bruce Lee</span> — "Be water, my friend." Adaptability to the container removes the rigidity that causes breakage.</span>
<span className="lang-zh"><span className="text-zinc-100 font-medium">李小龙</span> — “像水一样，朋友。” 极度适应容器（环境），消除因刚性对抗而导致的折断。</span>
</div>
</div>

<div className="py-3 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-zinc-900/30 transition-colors rounded-md px-2">
<div className="w-24 text-xs font-medium text-zinc-500 shrink-0 lang-en">Physics</div>
<div className="w-24 text-xs font-medium text-zinc-500 shrink-0 lang-zh">物理学</div>
<div className="flex-1 text-sm text-zinc-300">
<span className="lang-en"><span className="text-zinc-100 font-medium">Entropy</span> — Water naturally flows to the lowest energy state. Systems aligned with natural gradients are most efficient.</span>
<span className="lang-zh"><span className="text-zinc-100 font-medium">熵定律</span> — 水顺势流向低势能处。顺应自然梯度（而非逆流做功）的系统最为节能高效。</span>
</div>
</div>

<div className="py-3 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-zinc-900/30 transition-colors rounded-md px-2">
<div className="w-24 text-xs font-medium text-zinc-500 shrink-0 lang-en">Product</div>
<div className="w-24 text-xs font-medium text-zinc-500 shrink-0 lang-zh">产品设计</div>
<div className="flex-1 text-sm text-zinc-300">
<span className="lang-en"><span className="text-zinc-100 font-medium">Don Norman</span> — Good design is like water; it guides users effortlessly without them noticing the container. Frictionless UX.</span>
<span className="lang-zh"><span className="text-zinc-100 font-medium">唐·诺曼</span> — 《设计心理学》。好的设计如水，无感引导用户，消除交互摩擦。</span>
</div>
</div>

<div className="py-3 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-zinc-900/30 transition-colors rounded-md px-2">
<div className="w-24 text-xs font-medium text-zinc-500 shrink-0 lang-en">Management</div>
<div className="w-24 text-xs font-medium text-zinc-500 shrink-0 lang-zh">管理学</div>
<div className="flex-1 text-sm text-zinc-300">
<span className="lang-en"><span className="text-zinc-100 font-medium">Servant Leadership</span> — Supporting the team from "below," enabling value creation rather than dictating from above.</span>
<span className="lang-zh"><span className="text-zinc-100 font-medium">仆人式领导</span> — 居下位以托举团队，通过赋能而非指令来创造价值。</span>
</div>
</div>

<div className="py-3 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-zinc-900/30 transition-colors rounded-md px-2">
<div className="w-24 text-xs font-medium text-zinc-500 shrink-0 lang-en">Investing</div>
<div className="w-24 text-xs font-medium text-zinc-500 shrink-0 lang-zh">投资</div>
<div className="flex-1 text-sm text-zinc-300">
<span className="lang-en"><span className="text-zinc-100 font-medium">Nassim Taleb</span> — Antifragility. Rigid structures break under stress; fluid structures absorb shock.</span>
<span className="lang-zh"><span className="text-zinc-100 font-medium">纳西姆·塔勒布</span> — 反脆弱。刚性结构易折，流体结构（如水）能吸收冲击并重组。</span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">

<div className="space-y-4">
<h4 className="text-xs font-medium text-zinc-500 uppercase tracking-widest pl-1">
<span className="lang-en">Mindset &amp; Management</span>
<span className="lang-zh">心智与管理</span>
</h4>

<div className="group flex items-start gap-3 p-4 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-all">
<div className="pt-0.5">
<input className="custom-checkbox appearance-none size-4 border border-zinc-700 rounded bg-transparent cursor-pointer transition-all" type="checkbox"/>
</div>
<div className="space-y-1">
<p className="text-sm text-zinc-200 font-medium">
<span className="lang-en">The 10-Minute Friction Check</span>
<span className="lang-zh">10分钟摩擦力自检</span>
</p>
<p className="text-xs text-zinc-500">
<span className="lang-en">When you feel anger/resistance today, ask: "What am I trying to force uphill?" Change the angle to bypass the conflict.</span>
<span className="lang-zh">今日感到愤怒或阻力时，自问：“我在逆势强推什么？” 尝试改变切入角度以绕过正面冲突。</span>
</p>
</div>
</div>

<div className="group flex items-start gap-3 p-4 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-all">
<div className="pt-0.5">
<input className="custom-checkbox appearance-none size-4 border border-zinc-700 rounded bg-transparent cursor-pointer transition-all" type="checkbox"/>
</div>
<div className="space-y-1">
<p className="text-sm text-zinc-200 font-medium">
<span className="lang-en">Mechanism over Argument</span>
<span className="lang-zh">机制 &gt; 争论</span>
</p>
<p className="text-xs text-zinc-500">
<span className="lang-en">Stop arguing about recurring errors. Create an automated rule (the "channel") that makes the error impossible.</span>
<span className="lang-zh">停止对重复性错误的争论。建立自动化规则或清单（如同修渠引水），从物理上杜绝错误。</span>
</p>
</div>
</div>
</div>

<div className="space-y-4">
<h4 className="text-xs font-medium text-zinc-500 uppercase tracking-widest pl-1">
<span className="lang-en">Product &amp; Trading</span>
<span className="lang-zh">产品与交易</span>
</h4>

<div className="group flex items-start gap-3 p-4 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-all">
<div className="pt-0.5">
<input className="custom-checkbox appearance-none size-4 border border-zinc-700 rounded bg-transparent cursor-pointer transition-all" type="checkbox"/>
</div>
<div className="space-y-1">
<p className="text-sm text-zinc-200 font-medium">
<span className="lang-en">Default Strategy Audit</span>
<span className="lang-zh">默认选项审计</span>
</p>
<p className="text-xs text-zinc-500">
<span className="lang-en">Users flow like water (path of least resistance). Check your product's "defaults". Are they the safest/best options?</span>
<span className="lang-zh">用户如水（遵循最小阻力路径）。检查产品的“默认设置”。默认项是否为最优、最安全的路径？</span>
</p>
</div>
</div>

<div className="group flex items-start gap-3 p-4 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-all">
<div className="pt-0.5">
<input className="custom-checkbox appearance-none size-4 border border-zinc-700 rounded bg-transparent cursor-pointer transition-all" type="checkbox"/>
</div>
<div className="space-y-1">
<p className="text-sm text-zinc-200 font-medium">
<span className="lang-en">Liquidity Check</span>
<span className="lang-zh">流动性压力测试</span>
</p>
<p className="text-xs text-zinc-500">
<span className="lang-en">Can you exit positions as easily as water flows? Rigid assets kill during volatility. Review liquidity today.</span>
<span className="lang-zh">你的资产能否像水一样自由进出？波动期刚性资产致命。今日务必审查持仓的流动性。</span>
</p>
</div>
</div>
</div>
</section>

<section className="mt-8 rounded-lg border border-zinc-700 bg-zinc-800/50 p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
<div className="space-y-2">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
<span className="lang-en">Daily Reflection</span>
<span className="lang-zh">每日一问</span>
</span>
<p className="text-sm text-zinc-100 font-medium leading-relaxed">
<span className="lang-en">"Where are you fighting for high ground (status) where you could instead occupy the low ground (utility) and become indispensable?"</span>
<span className="lang-zh">“你正在哪里为了‘高位’（面子/虚名）而战？何不尝试占领‘低位’（基础/实用性），从而变得不可或缺？”</span>
</p>
</div>
<button className="shrink-0 px-4 py-2 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 text-xs font-medium rounded-md transition-colors tracking-tight">
<span className="lang-en">Save Journal Entry</span>
<span className="lang-zh">保存反思日记</span>
</button>
</section>

<footer className="pt-12 border-t border-zinc-900 flex flex-col gap-4">
<div className="flex items-center justify-between text-xs text-zinc-600">
<span>
<span className="lang-en">Progress: Chapter 8/81</span>
<span className="lang-zh">进度：第8/81章</span>
</span>
<span>
<span className="lang-en">Weekly Streak: 4 Days</span>
<span className="lang-zh">本周坚持：4天</span>
</span>
</div>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-600" height="14" icon="lucide:sparkles" width="14"></iconify-icon>
</div>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all lang-en" placeholder="Ask for a specific theme (e.g., 'Risk Management', 'Product Design') or continue..." type="text"/>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all lang-zh" placeholder="探索特定主题（如：风险管理、产品设计）或继续学习..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-2 flex items-center">
<button className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 transition-colors">
<iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
<p className="text-[10px] text-zinc-700 text-center pt-2">
                DailyDaoDeJingCompanion v1.2 • 
                <span className="lang-en">Not Financial Advice</span><span className="lang-zh">非投资建议</span> • 
                <span className="hover:text-zinc-500 cursor-pointer transition-colors">
<span className="lang-en">Generate Weekly Review</span>
<span className="lang-zh">生成周报</span>
</span>
</p>
</footer>
</div>


    </>
  );
}
