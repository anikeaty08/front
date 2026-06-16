import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav h-14 flex items-center">
<div className="max-w-5xl w-full mx-auto px-6 flex justify-between items-center">
<a className="text-sm font-semibold tracking-tighter flex items-center gap-2 group" href="#">
<span className="w-5 h-5 bg-zinc-900 text-white rounded flex items-center justify-center text-xs font-mono group-hover:bg-zinc-700 transition-colors">A</span>
                ALGO.LOG
            </a>
<div className="flex gap-6 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#roadmap">规划</a>
<a className="hover:text-zinc-900 transition-colors" href="#tech-stack">路线</a>
<a className="hover:text-zinc-900 transition-colors" href="#tools">工具</a>
<a className="hover:text-zinc-900 transition-colors" href="#">笔记</a>
</div>
</div>
</nav>
<main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

<header className="mb-24">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-medium text-zinc-600 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Current Focus: Graph Theory &amp; DP
            </div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                构建思维的<br className="hidden md:block"/>
<span className="text-zinc-400">底层逻辑与算法。</span>
</h1>
<p className="text-lg text-zinc-500 max-w-xl leading-relaxed font-light">
                这是一个数字花园，用于记录我在计算机科学领域的探索。专注于算法复杂度分析、数据结构优化以及高效的编程实践。
            </p>
<div className="mt-8 flex gap-4">
<a className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-200/50" href="#roadmap">
                    查看学习规划
                    <span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</a>
<a className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 text-zinc-600 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-colors hover:border-zinc-300" href="https://github.com" target="_blank">
<span className="iconify" data-icon="lucide:github" data-width="16"></span>
                    Github
                </a>
</div>
</header>

<section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
<div className="p-4 border border-zinc-100 bg-zinc-50/50 rounded-xl">
<div className="text-zinc-400 mb-1 text-xs font-medium uppercase tracking-wider">Solved</div>
<div className="text-2xl font-semibold tracking-tight">420+</div>
</div>
<div className="p-4 border border-zinc-100 bg-zinc-50/50 rounded-xl">
<div className="text-zinc-400 mb-1 text-xs font-medium uppercase tracking-wider">Streak</div>
<div className="text-2xl font-semibold tracking-tight">42 Days</div>
</div>
<div className="p-4 border border-zinc-100 bg-zinc-50/50 rounded-xl">
<div className="text-zinc-400 mb-1 text-xs font-medium uppercase tracking-wider">Notes</div>
<div className="text-2xl font-semibold tracking-tight">85</div>
</div>
<div className="p-4 border border-zinc-100 bg-zinc-50/50 rounded-xl">
<div className="text-zinc-400 mb-1 text-xs font-medium uppercase tracking-wider">Rank</div>
<div className="text-2xl font-semibold tracking-tight">Top 5%</div>
</div>
</section>

<section className="mb-32" id="roadmap">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-medium tracking-tight">年度规划</h2>
<div className="flex gap-2">
<span className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-colors cursor-pointer">
<span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span>
</span>
<span className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-colors cursor-pointer">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</span>
</div>
</div>
<div className="relative border-l border-zinc-200 ml-3 md:ml-6 space-y-12">

<div className="relative pl-8 md:pl-12 group">
<span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-200 border-2 border-white ring-1 ring-zinc-200 group-hover:bg-zinc-900 group-hover:ring-zinc-900 transition-all duration-300"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
<h3 className="text-lg font-medium text-zinc-900">Q1: 夯实基础 &amp; 数据结构</h3>
<span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Completed</span>
</div>
<p className="text-zinc-500 text-sm mb-4 max-w-2xl">
                        深入理解基本数据结构（数组、链表、栈、队列）。完成 LeetCode 精选 Top 100 题目中的简单与中等题。
                    </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl">
<li className="flex items-center gap-2 text-sm text-zinc-600">
<span className="iconify text-zinc-400" data-icon="lucide:check-circle-2" data-width="16"></span>
                            Java/C++ 语言特性深度复习
                        </li>
<li className="flex items-center gap-2 text-sm text-zinc-600">
<span className="iconify text-zinc-400" data-icon="lucide:check-circle-2" data-width="16"></span>
                            手动实现 ArrayList &amp; HashMap
                        </li>
<li className="flex items-center gap-2 text-sm text-zinc-600">
<span className="iconify text-zinc-400" data-icon="lucide:check-circle-2" data-width="16"></span>
                            双指针与滑动窗口专题
                        </li>
</ul>
</div>

<div className="relative pl-8 md:pl-12 group">
<span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-900 border-2 border-white ring-1 ring-zinc-900 shadow-[0_0_0_4px_rgba(244,244,245,1)]"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
<h3 className="text-lg font-medium text-zinc-900">Q2: 进阶算法 &amp; 搜索</h3>
<span className="text-xs font-mono text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">In Progress</span>
</div>
<p className="text-zinc-500 text-sm mb-4 max-w-2xl">
                        重点攻克树与图论算法。理解 DFS/BFS 的应用场景，开始接触动态规划的基础概念。
                    </p>
<div className="bg-zinc-50 rounded-lg p-4 border border-zinc-100 max-w-2xl">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-zinc-700">当前进度: 二叉树遍历</span>
<span className="text-xs text-zinc-400 font-mono">65%</span>
</div>
<div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
<div className="bg-zinc-900 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12 group">
<span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-200 border-2 border-white ring-1 ring-zinc-200 group-hover:bg-zinc-400 transition-colors"></span>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
<h3 className="text-lg font-medium text-zinc-900">Q3: 动态规划 &amp; 系统设计</h3>
<span className="text-xs font-mono text-zinc-400 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">Upcoming</span>
</div>
<p className="text-zinc-500 text-sm mb-4 max-w-2xl">
                        解决背包问题、区间 DP 等难点。开始阅读 DDIA (Designing Data-Intensive Applications)。
                    </p>
</div>
</div>
</section>

<section className="mb-32" id="tech-stack">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-medium tracking-tight">知识体系</h2>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1" href="#">
                    查看思维导图 <span className="iconify" data-icon="lucide:arrow-up-right" data-width="14"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify w-24 h-24 text-zinc-900" data-icon="lucide:git-graph" strokeWidth="1"></span>
</div>
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<span className="iconify" data-icon="lucide:network" data-width="20"></span>
</div>
<h3 className="text-base font-medium mb-2 text-zinc-900">图论算法</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        最短路径 (Dijkstra, Floyd), 最小生成树 (Prim, Kruskal), 拓扑排序与连通性分析。
                    </p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] font-medium text-zinc-500">DFS/BFS</span>
<span className="px-2 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] font-medium text-zinc-500">Union Find</span>
</div>
</div>

<div className="group p-6 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify w-24 h-24 text-zinc-900" data-icon="lucide:box" strokeWidth="1"></span>
</div>
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<h3 className="text-base font-medium mb-2 text-zinc-900">动态规划</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        理解状态转移方程，从记忆化搜索到表格法。涵盖线性DP、背包、区间DP及状态压缩。
                    </p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] font-medium text-zinc-500">Memoization</span>
<span className="px-2 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] font-medium text-zinc-500">Knapsack</span>
</div>
</div>

<div className="group p-6 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify w-24 h-24 text-zinc-900" data-icon="lucide:cpu" strokeWidth="1"></span>
</div>
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<span className="iconify" data-icon="lucide:database" data-width="20"></span>
</div>
<h3 className="text-base font-medium mb-2 text-zinc-900">高级数据结构</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        线段树、树状数组、Trie树以及跳表。专注于解决海量数据查询与更新的效率问题。
                    </p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] font-medium text-zinc-500">Segment Tree</span>
<span className="px-2 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] font-medium text-zinc-500">Trie</span>
</div>
</div>
</div>
</section>

<section className="mb-20" id="tools">
<h2 className="text-2xl font-medium tracking-tight mb-8">常用工具</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="flex items-center gap-3 p-3 rounded-lg border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50 transition-all group" href="#">
<div className="w-8 h-8 flex items-center justify-center rounded bg-white border border-zinc-200 shadow-sm text-blue-500">
<span className="iconify" data-icon="lucide:code-2" data-width="16"></span>
</div>
<div>
<div className="text-sm font-medium text-zinc-900 group-hover:text-black">VS Code</div>
<div className="text-[10px] text-zinc-400">Editor</div>
</div>
</a>
<a className="flex items-center gap-3 p-3 rounded-lg border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50 transition-all group" href="#">
<div className="w-8 h-8 flex items-center justify-center rounded bg-white border border-zinc-200 shadow-sm text-amber-500">
<span className="iconify" data-icon="lucide:terminal" data-width="16"></span>
</div>
<div>
<div className="text-sm font-medium text-zinc-900 group-hover:text-black">LeetCode</div>
<div className="text-[10px] text-zinc-400">Practice</div>
</div>
</a>
<a className="flex items-center gap-3 p-3 rounded-lg border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50 transition-all group" href="#">
<div className="w-8 h-8 flex items-center justify-center rounded bg-white border border-zinc-200 shadow-sm text-purple-500">
<span className="iconify" data-icon="lucide:sticky-note" data-width="16"></span>
</div>
<div>
<div className="text-sm font-medium text-zinc-900 group-hover:text-black">Obsidian</div>
<div className="text-[10px] text-zinc-400">Knowledge</div>
</div>
</a>
<a className="flex items-center gap-3 p-3 rounded-lg border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50 transition-all group" href="#">
<div className="w-8 h-8 flex items-center justify-center rounded bg-white border border-zinc-200 shadow-sm text-zinc-700">
<span className="iconify" data-icon="lucide:git-branch" data-width="16"></span>
</div>
<div>
<div className="text-sm font-medium text-zinc-900 group-hover:text-black">Git</div>
<div className="text-[10px] text-zinc-400">Version Control</div>
</div>
</a>
</div>
</section>
</main>

<footer className="border-t border-zinc-100 py-12 bg-zinc-50/50">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-zinc-400">
                © 2024 Algo.Log. Crafted with precision.
            </div>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18"></span>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
