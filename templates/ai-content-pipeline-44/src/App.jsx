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
      

<aside className="w-64 border-r border-zinc-800 flex flex-col bg-zinc-950 flex-shrink-0 hidden md:flex">
<div className="h-14 flex items-center px-6 border-b border-zinc-800">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-100 rounded text-zinc-950 flex items-center justify-center font-bold text-xs tracking-tighter">LDL</div>
<span className="font-medium text-sm text-zinc-100 tracking-tight">Launcher</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">

<div className="space-y-0.5">
<div className="px-3 text-xs font-medium text-zinc-500 mb-2">Platform</div>
<a className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="16"></span>
                    Grid View
                </a>
<a className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-100 bg-zinc-900 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="16"></span>
                    Pipelines
                </a>
<a className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:library" data-strokeWidth="1.5" data-width="16"></span>
                    Knowledge Base
                </a>
</div>

<div className="space-y-0.5">
<div className="px-3 flex items-center justify-between text-xs font-medium text-zinc-500 mb-2">
<span>Monitoring</span>
<span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded border border-emerald-500/20">Active</span>
</div>
<a className="flex items-center justify-between px-3 py-1.5 text-sm text-zinc-100 hover:bg-zinc-900 rounded-md group" href="#">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        ldl_AI
                    </div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">12m</span>
</a>
<a className="flex items-center justify-between px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-md group" href="#">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                        ldl_SaaS
                    </div>
<span className="text-xs text-zinc-600">4h</span>
</a>
<a className="flex items-center justify-between px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-md group" href="#">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                        ldl_DevOps
                    </div>
<span className="text-xs text-zinc-600">1d</span>
</a>
</div>
</nav>
<div className="p-4 border-t border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-600"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">Workspace</span>
<span className="text-[10px] text-zinc-500">Free Plan</span>
</div>
<button className="ml-auto text-zinc-500 hover:text-zinc-300">
<span className="iconify" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-zinc-950">

<header className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-950/50 backdrop-blur-sm z-10">
<div className="flex items-center gap-4">
<div className="md:hidden text-zinc-400">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</div>
<nav className="flex items-center text-sm text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer">Pipelines</span>
<span className="iconify mx-2" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="text-zinc-100 font-medium">ldl_AI</span>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="relative group">
<span className="iconify absolute left-2.5 top-2 text-zinc-500 group-focus-within:text-zinc-300" data-icon="lucide:search" data-width="14"></span>
<input className="bg-zinc-900 border border-zinc-800 text-xs rounded-md pl-8 pr-3 py-1.5 w-48 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 text-zinc-300 placeholder-zinc-600 transition-all" placeholder="Search insights..." type="text"/>
</div>
<button className="flex items-center gap-2 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 px-3 py-1.5 rounded-md text-xs font-medium transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                    Add Source
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="bg-zinc-900/50 border border-zinc-800/50 p-4 rounded-lg">
<div className="text-xs text-zinc-500 mb-1">Queue Status</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-zinc-100 tracking-tight">Active</span>
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/50 p-4 rounded-lg">
<div className="text-xs text-zinc-500 mb-1">Items Processed</div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">842</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/50 p-4 rounded-lg">
<div className="text-xs text-zinc-500 mb-1">Avg. Processing Time</div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">1.2m</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/50 p-4 rounded-lg flex flex-col justify-center">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400">API Usage (Gemini)</span>
<span className="text-xs text-zinc-400">72%</span>
</div>
<div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-indigo-500 h-full w-[72%] rounded-full"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold text-zinc-100 tracking-tight">Recent Insights</h2>
<div className="flex gap-2">
<button className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded">
<span className="iconify" data-icon="lucide:filter" data-width="16"></span>
</button>
<button className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded">
<span className="iconify" data-icon="lucide:arrow-up-down" data-width="16"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<div className="group relative bg-zinc-900 border border-zinc-700/50 rounded-lg overflow-hidden hover:border-zinc-600 transition-all cursor-pointer ring-2 ring-indigo-500/20 shadow-lg shadow-black/40">
<div className="aspect-video bg-zinc-800 relative">
<img alt="AI Agents" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-medium text-white">12:40</div>
<div className="absolute bottom-2 left-2 bg-indigo-500/90 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-semibold text-white tracking-wide">NEW</div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">ldl_AI</span>
<span className="text-[10px] text-zinc-600">•</span>
<span className="text-[10px] text-zinc-500">Just now</span>
</div>
<h3 className="text-sm font-medium text-zinc-100 leading-snug mb-2 line-clamp-2">Building Autonomous Agents with Gemini 1.5 Pro</h3>
<p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">A deep dive into multi-modal reasoning capabilities and function calling implementation...</p>
<div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-3">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-900 flex items-center justify-center text-[8px] text-zinc-400" title="Transcript">T</div>
<div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-900 flex items-center justify-center text-[8px] text-zinc-400" title="Diagram">D</div>
</div>
<span className="iconify text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>

<div className="group bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer">
<div className="aspect-video bg-zinc-800 relative">
<div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700">
<span className="iconify" data-icon="lucide:image" data-width="32"></span>
</div>
<div className="absolute top-2 right-2 bg-black/60 px-1.5 py-0.5 rounded text-[10px] font-medium text-white">45:12</div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">ldl_AI</span>
<span className="text-[10px] text-zinc-600">•</span>
<span className="text-[10px] text-zinc-500">2h ago</span>
</div>
<h3 className="text-sm font-medium text-zinc-200 leading-snug mb-2 line-clamp-2">The Future of Large Language Models in Enterprise</h3>
<p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">Key takeaways from the annual AI summit regarding privacy and local deployment.</p>
</div>
</div>

<div className="group bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer">
<div className="aspect-video bg-zinc-800 relative">
<div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700">
<span className="iconify" data-icon="lucide:image" data-width="32"></span>
</div>
<div className="absolute top-2 right-2 bg-black/60 px-1.5 py-0.5 rounded text-[10px] font-medium text-white">08:30</div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">ldl_AI</span>
<span className="text-[10px] text-zinc-600">•</span>
<span className="text-[10px] text-zinc-500">5h ago</span>
</div>
<h3 className="text-sm font-medium text-zinc-200 leading-snug mb-2 line-clamp-2">Vector Databases Explained Simply</h3>
<p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">Understanding embeddings and similarity search for RAG applications.</p>
</div>
</div>

<div className="group bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer">
<div className="aspect-video bg-zinc-800 relative">
<div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700">
<span className="iconify" data-icon="lucide:image" data-width="32"></span>
</div>
<div className="absolute top-2 right-2 bg-black/60 px-1.5 py-0.5 rounded text-[10px] font-medium text-white">15:00</div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">ldl_AI</span>
<span className="text-[10px] text-zinc-600">•</span>
<span className="text-[10px] text-zinc-500">1d ago</span>
</div>
<h3 className="text-sm font-medium text-zinc-200 leading-snug mb-2 line-clamp-2">LangChain vs LlamaIndex: Comparison</h3>
<p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">Choosing the right orchestration framework for your next project.</p>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">

<div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"></div>

<div className="relative w-full max-w-5xl h-[85vh] bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-200">

<button className="absolute top-4 right-4 z-10 p-1 bg-black/50 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-white transition-colors border border-transparent hover:border-zinc-700">
<span className="iconify" data-icon="lucide:x" data-width="16"></span>
</button>

<div className="w-full md:w-[35%] bg-zinc-900/50 border-r border-zinc-800 flex flex-col overflow-y-auto">

<div className="aspect-video bg-black relative group shrink-0">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-xl">
<span className="iconify text-white ml-1" data-fill="currentColor" data-icon="lucide:play" data-width="20"></span>
</div>
</button>

<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1.5 py-0.5 rounded text-[10px] font-medium tracking-wide">PROCESSED</span>
</div>
</div>

<div className="p-5 flex-1 flex flex-col gap-6">
<div>
<h2 className="text-base font-semibold text-zinc-100 leading-snug tracking-tight mb-2">Building Autonomous Agents with Gemini 1.5 Pro</h2>
<div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-zinc-500">
<span className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:monitor-play" data-width="12"></span>
                                Google Cloud Tech
                            </span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Oct 24, 2023</span>
</div>
</div>

<div className="bg-zinc-900 border border-zinc-800/50 rounded-lg p-3">
<div className="flex items-center gap-2 mb-2 text-xs font-medium text-zinc-400">
<span className="text-amber-400" data-icon="lucide:sparkles" data-width="12"></span>
                            AI Abstract
                        </div>
<p className="text-xs text-zinc-300 leading-relaxed">
                            This video demonstrates building a multi-agent system using Gemini 1.5. Key focuses include context caching for efficiency and function calling for real-world interactions.
                        </p>
</div>

<div className="flex-1">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">Tools &amp; Resources</h3>
<ul className="space-y-2">
<li>
<a className="group flex items-start gap-3 p-2 rounded-md hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-700" href="#">
<div className="w-8 h-8 rounded bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center shrink-0 border border-zinc-700">
<span className="iconify text-zinc-400" data-icon="lucide:box" data-width="14"></span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200 group-hover:text-indigo-400 transition-colors">Gemini API</span>
<span className="text-[10px] text-zinc-500 line-clamp-1">Multimodal generative model access</span>
</div>
<span className="iconify ml-auto text-zinc-600 group-hover:text-zinc-400" data-icon="lucide:external-link" data-width="12"></span>
</a>
</li>
<li>
<a className="group flex items-start gap-3 p-2 rounded-md hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-700" href="#">
<div className="w-8 h-8 rounded bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center shrink-0 border border-zinc-700">
<span className="iconify text-zinc-400" data-icon="lucide:code-2" data-width="14"></span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200 group-hover:text-indigo-400 transition-colors">LangChain</span>
<span className="text-[10px] text-zinc-500 line-clamp-1">Framework for developing applications</span>
</div>
<span className="iconify ml-auto text-zinc-600 group-hover:text-zinc-400" data-icon="lucide:external-link" data-width="12"></span>
</a>
</li>
</ul>
</div>
<div className="mt-auto pt-4 border-t border-zinc-800 flex gap-2">
<button className="flex-1 bg-zinc-100 text-zinc-900 hover:bg-white text-xs font-medium py-2 rounded shadow-sm transition-colors">
                            Open in YouTube
                        </button>
<button className="flex-1 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 text-xs font-medium py-2 rounded border border-zinc-700 transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:share" data-width="12"></span>
                            Export JSON
                        </button>
</div>
</div>
</div>

<div className="w-full md:w-[65%] flex flex-col bg-zinc-950">

<div className="flex items-center border-b border-zinc-800 px-6 pt-4">
<button className="pb-3 px-1 mr-6 text-xs font-medium text-indigo-400 border-b-2 border-indigo-500 transition-colors">
                        Summary &amp; Tasks
                    </button>
<button className="pb-3 px-1 mr-6 text-xs font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-700 transition-colors">
                        Process Map
                    </button>
<button className="pb-3 px-1 mr-6 text-xs font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent hover:border-zinc-700 transition-colors">
                        Transcript
                    </button>
</div>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">

<div className="mb-8">
<h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
<span className="iconify" data-icon="lucide:check-square" data-width="14"></span>
                            Actionable Tasks
                        </h4>
<div className="space-y-2">
<label className="flex items-start gap-3 p-3 bg-zinc-900/40 border border-zinc-800/60 rounded-lg hover:border-zinc-700 transition-colors cursor-pointer group">
<div className="relative flex items-center pt-0.5">
<input className="peer appearance-none w-4 h-4 border border-zinc-600 rounded bg-zinc-800 checked:bg-indigo-500 checked:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-colors" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-1" data-icon="lucide:check" data-width="12"></span>
</div>
<div className="text-xs text-zinc-300 leading-relaxed group-hover:text-zinc-200">
                                    Obtain a Gemini API key from Google AI Studio and enable "Function Calling" in project settings.
                                </div>
</label>
<label className="flex items-start gap-3 p-3 bg-zinc-900/40 border border-zinc-800/60 rounded-lg hover:border-zinc-700 transition-colors cursor-pointer group">
<div className="relative flex items-center pt-0.5">
<input className="peer appearance-none w-4 h-4 border border-zinc-600 rounded bg-zinc-800 checked:bg-indigo-500 checked:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-colors" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-1" data-icon="lucide:check" data-width="12"></span>
</div>
<div className="text-xs text-zinc-300 leading-relaxed group-hover:text-zinc-200">
                                    Define tool definitions in JSON schema format for the `search_tool` and `calculator_tool`.
                                </div>
</label>
<label className="flex items-start gap-3 p-3 bg-zinc-900/40 border border-zinc-800/60 rounded-lg hover:border-zinc-700 transition-colors cursor-pointer group">
<div className="relative flex items-center pt-0.5">
<input className="peer appearance-none w-4 h-4 border border-zinc-600 rounded bg-zinc-800 checked:bg-indigo-500 checked:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-colors" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-1" data-icon="lucide:check" data-width="12"></span>
</div>
<div className="text-xs text-zinc-300 leading-relaxed group-hover:text-zinc-200">
                                    Implement the `ChatSession` loop in Python to handle model callbacks.
                                </div>
</label>
</div>
</div>

<div className="mb-8">
<h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
<span className="iconify" data-icon="lucide:list-video" data-width="14"></span>
                            Executive Summary
                        </h4>
<div className="prose prose-invert prose-xs max-w-none text-zinc-300">
<ul className="list-disc list-outside ml-4 space-y-2 marker:text-zinc-600">
<li className="pl-1"><span className="text-zinc-100 font-medium">Multimodal Input:</span> Gemini 1.5 allows seamless mixing of text, images, and video in a single prompt context, enabling agents to "see" the environment.</li>
<li className="pl-1"><span className="text-zinc-100 font-medium">Context Caching:</span> A new feature that significantly reduces latency and cost for long-running agent sessions by storing the initial system prompt and tool definitions on the server side.</li>
<li className="pl-1"><span className="text-zinc-100 font-medium">Error Handling:</span> The presenter emphasizes the importance of providing the model with the output of failed function calls so it can self-correct, rather than crashing the pipeline.</li>
<li className="pl-1"><span className="text-zinc-100 font-medium">State Management:</span> Unlike stateless REST APIs, the agent loop maintains a history of the conversation, which is critical for multi-step reasoning tasks.</li>
</ul>
</div>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-3">
<h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
<span className="iconify" data-icon="lucide:git-fork" data-width="14"></span>
                                Logic Flow (Mermaid Preview)
                            </h4>
<button className="text-[10px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                                Maximize <span className="iconify" data-icon="lucide:maximize-2" data-width="10"></span>
</button>
</div>

<div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 overflow-x-auto">
<div className="min-w-[400px] flex flex-col items-center gap-6 text-[10px] font-mono text-zinc-400">

<div className="border border-zinc-600 bg-zinc-800 text-zinc-100 px-3 py-1.5 rounded-md relative connector-down">
                                    Start: User Query
                                </div>

<div className="border border-indigo-500/50 bg-indigo-500/10 text-indigo-200 px-3 py-1.5 rounded-md relative connector-down">
                                    Agent Analysis (Gemini)
                                </div>

<div className="flex gap-12 relative">
<div className="flex flex-col items-center">
<div className="border border-zinc-700 bg-zinc-900 px-3 py-1.5 rounded-md mb-4 relative z-10">
                                            Tool Required?
                                        </div>
<div className="border border-zinc-700 border-dashed bg-zinc-900/50 px-3 py-1.5 rounded-md text-zinc-500">
                                            Execute Function
                                        </div>
</div>
<div className="flex flex-col items-center pt-10">
<div className="border border-zinc-700 bg-zinc-900 px-3 py-1.5 rounded-md">
                                            Direct Answer
                                        </div>
</div>

<div className="absolute top-4 left-1/2 -translate-x-1/2 w-full h-[1px] bg-zinc-700 -z-10" style={{width: '140px'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
