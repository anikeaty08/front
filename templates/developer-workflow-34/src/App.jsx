import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple View Switcher Logic
        function switchView(viewName) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Remove active state from all nav items
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('tab-active');
                el.classList.add('tab-inactive');
            });

            // Show selected view
            document.getElementById('view-' + viewName).classList.remove('hidden');

            // Set active nav item
            const activeNav = document.getElementById('nav-' + viewName);
            activeNav.classList.remove('tab-inactive');
            activeNav.classList.add('tab-active');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-[#262626] flex flex-col justify-between bg-[#0a0a0a] z-50">
<div>

<div className="p-4 border-b border-[#262626]">
<button className="flex items-center justify-between w-full hover:bg-neutral-900 p-2 rounded-md transition-colors group">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-700 rounded-md flex items-center justify-center text-black font-semibold text-xs tracking-tight shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                            O
                        </div>
<span className="font-medium text-neutral-200 tracking-tight group-hover:text-white transition-colors">Oryxa / Main</span>
</div>
<iconify-icon className="text-neutral-500" icon="lucide:chevrons-up-down" width="16"></iconify-icon>
</button>
</div>

<nav className="flex flex-col gap-1 p-3 mt-2">
<button className="nav-item tab-active flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200" id="nav-dashboard" onclick="switchView('dashboard')">
<iconify-icon icon="lucide:layout-grid" width="18"></iconify-icon>
                    Dashboard
                </button>
<button className="nav-item tab-inactive flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200" id="nav-code" onclick="switchView('code')">
<iconify-icon icon="lucide:code-2" width="18"></iconify-icon>
                    Code Intelligence
                </button>
<button className="nav-item tab-inactive flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200" id="nav-meeting" onclick="switchView('meeting')">
<iconify-icon icon="lucide:mic" width="18"></iconify-icon>
                    Meeting Context
                </button>
<button className="nav-item tab-inactive flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
<iconify-icon icon="lucide:book" width="18"></iconify-icon>
                    Documentation
                </button>
<button className="nav-item tab-inactive flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200">
<iconify-icon icon="lucide:settings" width="18"></iconify-icon>
                    Settings
                </button>
</nav>
</div>

<div className="p-4 border-t border-[#262626]">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 font-medium text-xs">
                    JD
                </div>
<div className="flex flex-col">
<span className="text-neutral-200 text-xs font-medium">John Developer</span>
<span className="text-neutral-500 text-[10px]">Pro Plan</span>
</div>
</div>
<div className="flex items-center justify-between bg-neutral-900/50 border border-neutral-800 rounded-full px-3 py-1.5">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium text-emerald-500 tracking-wide uppercase">RAG Engine</span>
</div>
<span className="text-[10px] text-neutral-600 font-mono">v2.4.0</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-[#0a0a0a] relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-900/50 to-transparent pointer-events-none z-0"></div>
<div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none z-0"></div>

<div className="view-section flex-1 overflow-y-auto p-8 relative z-10 animate-fade-in" id="view-dashboard">
<header className="mb-8 flex justify-between items-end">
<div>
<h1 className="text-2xl font-medium text-neutral-100 tracking-tight mb-1">Command Center</h1>
<p className="text-neutral-500">Welcome back. Your workflow intelligence overview.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-md hover:text-neutral-200 hover:border-neutral-700 transition-all">This Sprint</button>
<button className="px-3 py-1.5 text-xs font-medium text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-md hover:text-neutral-200 hover:border-neutral-700 transition-all">Filter</button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

<div className="col-span-12 md:col-span-8 glass-card rounded-xl p-6 relative overflow-hidden group">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-neutral-200 font-medium flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="lucide:activity"></iconify-icon>
                                Velocity &amp; Frequency
                            </h3>
<p className="text-xs text-neutral-500 mt-1">Commit volume increased by 14% this week.</p>
</div>
<span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">+14%</span>
</div>

<div className="h-40 w-full flex items-end justify-between gap-1 mt-4">

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 800 200">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#f59e0b" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#f59e0b" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,200 L0,150 C50,140 100,180 150,120 C200,60 250,90 300,80 C350,70 400,110 450,90 C500,70 550,40 600,60 C650,80 700,50 750,30 L800,50 L800,200 Z" fill="url(#gradient)"></path>
<path d="M0,150 C50,140 100,180 150,120 C200,60 250,90 300,80 C350,70 400,110 450,90 C500,70 550,40 600,60 C650,80 700,50 750,30 L800,50" fill="none" stroke="#f59e0b" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>

<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-neutral-600" icon="lucide:maximize-2"></iconify-icon>
</div>
</div>

<div className="col-span-12 md:col-span-4 glass-card rounded-xl p-6 flex flex-col">
<div className="flex items-center justify-between mb-4">
<h3 className="text-neutral-200 font-medium flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="lucide:sparkles"></iconify-icon>
                            Morning Digest
                        </h3>
<span className="text-[10px] text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded">Today</span>
</div>
<div className="space-y-4 flex-1">
<div className="flex gap-3 items-start">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
<div>
<p className="text-neutral-300 text-xs leading-relaxed">3 PRs merged into <span className="font-mono text-neutral-500 bg-neutral-900 px-1 rounded">main</span>, addressing the auth-flow latency.</p>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
<div>
<p className="text-neutral-300 text-xs leading-relaxed">Meeting regarding API Design completed. Consensus: move to tRPC.</p>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
<div>
<p className="text-neutral-300 text-xs leading-relaxed">Dependabot flagged 2 critical vulnerabilities in package.json.</p>
</div>
</div>
</div>
<button className="mt-4 w-full py-2 border border-neutral-800 rounded text-xs text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50 transition-colors">Read Full Report</button>
</div>

<div className="col-span-12 glass-card rounded-xl p-6">
<h3 className="text-neutral-200 font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="lucide:check-square"></iconify-icon>
                        Extracted Action Items
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="flex items-start gap-3 p-3 rounded-lg border border-neutral-800/50 bg-neutral-900/20 hover:border-neutral-700 transition-colors group cursor-pointer">
<div className="mt-0.5 relative flex items-center justify-center w-4 h-4 rounded border border-neutral-600 group-hover:border-amber-500 transition-colors">

</div>
<div>
<p className="text-neutral-300 text-sm font-medium">Refactor middleware</p>
<p className="text-neutral-500 text-xs mt-0.5 flex items-center gap-1">
<iconify-icon icon="lucide:link" width="10"></iconify-icon> From "Sprint Planning"
                                </p>
</div>
</div>

<div className="flex items-start gap-3 p-3 rounded-lg border border-neutral-800/50 bg-neutral-900/20 hover:border-neutral-700 transition-colors group cursor-pointer">
<div className="mt-0.5 relative flex items-center justify-center w-4 h-4 rounded border border-neutral-600 group-hover:border-amber-500 transition-colors"></div>
<div>
<p className="text-neutral-300 text-sm font-medium">Update Env Variables</p>
<p className="text-neutral-500 text-xs mt-0.5 flex items-center gap-1">
<iconify-icon icon="lucide:link" width="10"></iconify-icon> From Slack #dev-ops
                                </p>
</div>
</div>

<div className="flex items-start gap-3 p-3 rounded-lg border border-neutral-800/50 bg-neutral-900/20 hover:border-neutral-700 transition-colors group cursor-pointer">
<div className="mt-0.5 relative flex items-center justify-center w-4 h-4 rounded border border-neutral-600 group-hover:border-amber-500 transition-colors"></div>
<div>
<p className="text-neutral-300 text-sm font-medium">Review Schema Migration</p>
<p className="text-neutral-500 text-xs mt-0.5 flex items-center gap-1">
<iconify-icon icon="lucide:link" width="10"></iconify-icon> From "DB Sync"
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden h-full flex flex-row" id="view-code">

<div className="w-3/5 h-full border-r border-[#262626] bg-[#0f0f0f] flex flex-col">

<div className="flex items-center border-b border-[#262626] bg-[#0a0a0a]">
<div className="px-4 py-2.5 bg-[#0f0f0f] border-r border-[#262626] border-t-2 border-t-amber-500 flex items-center gap-2 text-neutral-200 text-xs font-mono">
<iconify-icon className="text-blue-400" icon="lucide:file-code-2"></iconify-icon>
                        server.ts
                        <iconify-icon className="ml-2 text-neutral-600 hover:text-white cursor-pointer" icon="lucide:x"></iconify-icon>
</div>
<div className="px-4 py-2.5 flex items-center gap-2 text-neutral-500 text-xs font-mono hover:text-neutral-300 cursor-pointer transition-colors">
                        utils.ts
                    </div>
</div>

<div className="flex-1 overflow-y-auto font-mono text-xs leading-6 p-4">
<div className="flex">
<div className="text-neutral-700 select-none pr-4 text-right w-8">1</div>
<div className="text-purple-400">import</div>
<div className="text-neutral-300 ml-2">{ <span className="text-blue-300">FastifyInstance</span> }</div>
<div className="text-purple-400 ml-2">from</div>
<div className="text-green-400 ml-2">'fastify'</div>
<div className="text-neutral-500">;</div>
</div>
<div className="flex">
<div className="text-neutral-700 select-none pr-4 text-right w-8">2</div>
<div className="text-purple-400">import</div>
<div className="text-neutral-300 ml-2">{ <span className="text-blue-300">PrismaClient</span> }</div>
<div className="text-purple-400 ml-2">from</div>
<div className="text-green-400 ml-2">'@prisma/client'</div>
<div className="text-neutral-500">;</div>
</div>
<div className="flex">
<div className="text-neutral-700 select-none pr-4 text-right w-8">3</div>
<div className="text-neutral-500"> </div>
</div>
<div className="flex bg-neutral-800/30 -mx-4 px-4 border-l-2 border-amber-500/50">
<div className="text-neutral-700 select-none pr-4 text-right w-8">4</div>
<div className="text-purple-400">export</div>
<div className="text-purple-400 ml-2">async</div>
<div className="text-blue-400 ml-2">function</div>
<div className="text-yellow-200 ml-2">buildServer</div>
<div className="text-neutral-300">(</div>
<div className="text-neutral-300">app: <span className="text-blue-300">FastifyInstance</span></div>
<div className="text-neutral-300">)</div>
<div className="text-neutral-300 ml-2">{</div>
</div>
<div className="flex bg-neutral-800/30 -mx-4 px-4 border-l-2 border-amber-500/50">
<div className="text-neutral-700 select-none pr-4 text-right w-8">5</div>
<div className="text-neutral-500 ml-4">// Initialize database connection</div>
</div>
<div className="flex bg-neutral-800/30 -mx-4 px-4 border-l-2 border-amber-500/50">
<div className="text-neutral-700 select-none pr-4 text-right w-8">6</div>
<div className="text-purple-400 ml-4">const</div>
<div className="text-neutral-300 ml-2">prisma =</div>
<div className="text-purple-400 ml-2">new</div>
<div className="text-yellow-200 ml-2">PrismaClient</div>
<div className="text-neutral-300">();</div>
</div>
<div className="flex">
<div className="text-neutral-700 select-none pr-4 text-right w-8">7</div>
<div className="text-neutral-500"> </div>
</div>
<div className="flex">
<div className="text-neutral-700 select-none pr-4 text-right w-8">8</div>
<div className="text-neutral-300 ml-4">app.<span className="text-blue-300">get</span>(<span className="text-green-400">'/health'</span>, <span className="text-purple-400">async</span> () =&gt; {</div>
</div>
<div className="flex">
<div className="text-neutral-700 select-none pr-4 text-right w-8">9</div>
<div className="text-purple-400 ml-8">return</div>
<div className="text-neutral-300 ml-2">{ status: <span className="text-green-400">'ok'</span> };</div>
</div>
<div className="flex">
<div className="text-neutral-700 select-none pr-4 text-right w-8">10</div>
<div className="text-neutral-300 ml-4">});</div>
</div>
<div className="flex">
<div className="text-neutral-700 select-none pr-4 text-right w-8">11</div>
<div className="text-neutral-300">}</div>
</div>
</div>

<div className="px-4 py-2 border-t border-[#262626] text-xs text-neutral-500 flex items-center gap-2">
<iconify-icon icon="lucide:git-branch" width="12"></iconify-icon> main
                     <span>/</span>
                     src
                     <span>/</span>
                     server.ts
                </div>
</div>

<div className="w-2/5 h-full flex flex-col bg-[#0a0a0a] relative">

<div className="p-4 border-b border-[#262626] flex items-center justify-between">
<span className="text-xs font-medium text-neutral-300 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="lucide:sparkles"></iconify-icon>
                        Oryxa Intelligence
                    </span>
<button className="text-neutral-500 hover:text-neutral-300"><iconify-icon icon="lucide:more-horizontal"></iconify-icon></button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div className="flex justify-end">
<div className="max-w-[85%] bg-neutral-800 text-neutral-200 px-4 py-3 rounded-2xl rounded-tr-sm text-sm border border-neutral-700">
                            Is the database connection initialized correctly here?
                        </div>
</div>

<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-amber-500 text-xs" icon="lucide:sparkles"></iconify-icon>
</div>
<div className="space-y-2">
<div className="text-neutral-300 text-sm leading-relaxed">
<span className="font-medium text-amber-500 text-xs mb-1 block">Analyzing lines 4-6...</span>
                                Yes, the <code className="font-mono bg-neutral-800 px-1 py-0.5 rounded text-xs">PrismaClient</code> instantiation looks standard. However, you should consider initializing it as a singleton in a separate file (e.g., <code className="font-mono bg-neutral-800 px-1 py-0.5 rounded text-xs">db.ts</code>) to prevent connection exhaustion during hot-reloads in development.
                            </div>
<div className="flex gap-2 mt-2">
<button className="text-xs border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 px-3 py-1.5 rounded-md text-neutral-400 transition-colors">Refactor to Singleton</button>
<button className="text-xs border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 px-3 py-1.5 rounded-md text-neutral-400 transition-colors">Explain Connection Exhaustion</button>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-[#262626] bg-[#0a0a0a]">

<div className="flex gap-2 mb-3 overflow-x-auto pb-1 no-scrollbar">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] text-blue-400 whitespace-nowrap">
<iconify-icon icon="lucide:file-code" width="10"></iconify-icon> server.ts
                        </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] text-purple-400 whitespace-nowrap">
<iconify-icon icon="lucide:calendar" width="10"></iconify-icon> @Meeting-Sept-22
                        </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] text-emerald-400 whitespace-nowrap">
<iconify-icon icon="lucide:git-pull-request" width="10"></iconify-icon> @PR-342
                        </span>
</div>
<div className="relative">
<input className="w-full bg-[#0f0f0f] border border-neutral-800 rounded-lg pl-4 pr-10 py-3 text-sm text-neutral-200 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 placeholder:text-neutral-600 shadow-sm shadow-black transition-all" placeholder="Ask Oryxa about this file..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-neutral-500 hover:text-amber-500 transition-colors">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="view-section hidden h-full flex flex-row" id="view-meeting">

<div className="w-80 border-r border-[#262626] flex flex-col bg-[#0a0a0a]">
<div className="p-4 border-b border-[#262626]">
<h2 className="font-medium text-neutral-200 mb-1">Recent Meetings</h2>
<div className="relative mt-2">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-600" icon="lucide:search" width="14"></iconify-icon>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded px-8 py-1.5 text-xs focus:outline-none focus:border-neutral-600" placeholder="Search transcripts..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto">

<div className="p-4 border-l-2 border-amber-500 bg-neutral-900/30 cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="font-medium text-neutral-200 text-sm">Sprint Planning</span>
<span className="text-[10px] text-neutral-500">2h ago</span>
</div>
<p className="text-xs text-neutral-500 line-clamp-1">Discussion on Q4 roadmap and API...</p>
<div className="flex gap-2 mt-2">
<span className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">#planning</span>
<span className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400">#backend</span>
</div>
</div>

<div className="p-4 border-l-2 border-transparent hover:bg-neutral-900/30 cursor-pointer border-b border-neutral-900">
<div className="flex justify-between items-start mb-1">
<span className="font-medium text-neutral-400 text-sm">Bug Bash: Auth</span>
<span className="text-[10px] text-neutral-500">Yesterday</span>
</div>
<p className="text-xs text-neutral-500 line-clamp-1">Reviewing the OAuth callback failure...</p>
</div>

<div className="p-4 border-l-2 border-transparent hover:bg-neutral-900/30 cursor-pointer border-b border-neutral-900">
<div className="flex justify-between items-start mb-1">
<span className="font-medium text-neutral-400 text-sm">Design Review</span>
<span className="text-[10px] text-neutral-500">Sept 21</span>
</div>
<p className="text-xs text-neutral-500 line-clamp-1">Figma handoff for the dashboard...</p>
</div>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden bg-[#0a0a0a]">

<div className="p-8 border-b border-[#262626] bg-neutral-900/20">
<div className="flex justify-between items-start mb-6">
<div>
<h1 className="text-2xl font-medium text-neutral-100 tracking-tight">Sprint Planning &amp; API Architecture</h1>
<div className="flex items-center gap-4 mt-2 text-sm text-neutral-500">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:clock" width="14"></iconify-icon> 45m 12s</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:users" width="14"></iconify-icon> 5 Participants</span>
</div>
</div>
<button className="bg-amber-500 text-black px-4 py-2 rounded-md font-medium text-xs hover:bg-amber-400 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:play"></iconify-icon> Play Recording
                        </button>
</div>

<div className="h-16 flex items-center gap-1 justify-center opacity-80 mask-image-gradient">

<div className="w-1 bg-amber-500/50 h-4 rounded-full"></div>
<div className="w-1 bg-amber-500/80 h-8 rounded-full"></div>
<div className="w-1 bg-amber-500 h-12 rounded-full"></div>
<div className="w-1 bg-amber-500 h-6 rounded-full"></div>
<div className="w-1 bg-amber-500/60 h-10 rounded-full"></div>
<div className="w-1 bg-amber-500/40 h-5 rounded-full"></div>
<div className="w-1 bg-amber-500/90 h-14 rounded-full"></div>
<div className="w-1 bg-amber-500 h-10 rounded-full"></div>
<div className="w-1 bg-amber-500/50 h-4 rounded-full"></div>
<div className="w-1 bg-amber-500/30 h-8 rounded-full"></div>
<div className="w-1 bg-amber-500 h-12 rounded-full"></div>
<div className="w-1 bg-amber-500 h-6 rounded-full"></div>
<div className="w-1 bg-amber-500/60 h-10 rounded-full"></div>
<div className="w-1 bg-amber-500/40 h-5 rounded-full"></div>
<div className="w-1 bg-amber-500/90 h-14 rounded-full"></div>
<div className="w-1 bg-amber-500 h-10 rounded-full"></div>
<div className="w-1 bg-amber-500/50 h-4 rounded-full"></div>
<div className="w-1 bg-amber-500/30 h-8 rounded-full"></div>
<div className="w-1 bg-amber-500 h-12 rounded-full"></div>
<div className="w-1 bg-amber-500 h-6 rounded-full"></div>
<div className="w-1 bg-amber-500/60 h-10 rounded-full"></div>
<div className="w-1 bg-amber-500/40 h-5 rounded-full"></div>
<div className="w-1 bg-amber-500/90 h-14 rounded-full"></div>
<div className="w-1 bg-amber-500 h-10 rounded-full"></div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-8 grid grid-cols-3 gap-8">

<div className="col-span-2 space-y-6">
<div className="glass-panel p-6 rounded-xl border-l-4 border-l-amber-500">
<h3 className="text-neutral-200 font-medium mb-3 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="lucide:bot"></iconify-icon>
                                AI Executive Summary
                            </h3>
<p className="text-neutral-400 leading-relaxed mb-4">
                                The team agreed to refactor the authentication middleware to support the new tRPC implementation. <span className="text-neutral-200 font-medium">Sarah</span> raised concerns about database latency, which <span className="text-neutral-200 font-medium">David</span> will investigate. The deadline for the API schema migration is set for Friday.
                            </p>
<div className="flex gap-2">
<span className="text-[10px] bg-neutral-800 border border-neutral-700 px-2 py-1 rounded text-neutral-300">Auth</span>
<span className="text-[10px] bg-neutral-800 border border-neutral-700 px-2 py-1 rounded text-neutral-300">Performance</span>
</div>
</div>
<div>
<h3 className="text-neutral-200 font-medium mb-3">Transcript Highlights</h3>
<div className="space-y-4">
<div className="flex gap-4">
<div className="text-xs font-mono text-neutral-500 pt-1">04:20</div>
<div>
<span className="text-xs font-bold text-blue-400">Sarah (Tech Lead)</span>
<p className="text-neutral-300 mt-1">"We need to make sure the JWT validation doesn't block the event loop in the new node service."</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-xs font-mono text-neutral-500 pt-1">04:45</div>
<div>
<span className="text-xs font-bold text-purple-400">David (Dev)</span>
<p className="text-neutral-300 mt-1">"Agreed. I'll look into using the async verify method in the middleware."</p>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 space-y-4">
<h3 className="text-neutral-400 text-xs uppercase tracking-wider font-semibold mb-2">Linked Artifacts</h3>

<div className="group border border-neutral-800 bg-neutral-900/20 p-3 rounded-lg hover:border-amber-500/50 hover:bg-neutral-900/40 transition-all cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 bg-neutral-800 rounded">
<iconify-icon className="text-blue-400" icon="lucide:file-code-2"></iconify-icon>
</div>
<div>
<p className="text-sm text-neutral-200 font-medium group-hover:text-amber-400 transition-colors">auth-middleware.ts</p>
<p className="text-[10px] text-neutral-500">src/middleware</p>
</div>
</div>
<p className="text-[10px] text-neutral-400 pl-1 border-l-2 border-neutral-700">Mentioned 4 times regarding JWT validation.</p>
</div>

<div className="group border border-neutral-800 bg-neutral-900/20 p-3 rounded-lg hover:border-amber-500/50 hover:bg-neutral-900/40 transition-all cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 bg-neutral-800 rounded">
<iconify-icon className="text-emerald-400" icon="lucide:database"></iconify-icon>
</div>
<div>
<p className="text-sm text-neutral-200 font-medium group-hover:text-amber-400 transition-colors">schema.prisma</p>
<p className="text-[10px] text-neutral-500">prisma/</p>
</div>
</div>
<p className="text-[10px] text-neutral-400 pl-1 border-l-2 border-neutral-700">Context: User table migration.</p>
</div>

<div className="group border border-neutral-800 bg-neutral-900/20 p-3 rounded-lg hover:border-amber-500/50 hover:bg-neutral-900/40 transition-all cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 bg-neutral-800 rounded">
<iconify-icon className="text-amber-500" icon="lucide:ticket"></iconify-icon>
</div>
<div>
<p className="text-sm text-neutral-200 font-medium group-hover:text-amber-400 transition-colors">Ticket-402</p>
<p className="text-[10px] text-neutral-500">Linear / Core</p>
</div>
</div>
<p className="text-[10px] text-neutral-400">Status: In Progress</p>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
