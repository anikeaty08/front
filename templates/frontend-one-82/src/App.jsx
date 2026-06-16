import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 z-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>

<div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 blur-[120px] rounded-full z-0"></div>

<header className="relative z-10 border-b border-white/5 bg-black/40 backdrop-blur-xl flex-none h-16 flex items-center justify-between px-8">
<div className="flex items-center gap-6">
<div className="text-xl tracking-tighter font-medium text-white flex items-center gap-2">
                DPLY
            </div>
<nav className="hidden md:flex items-center gap-6 text-sm font-normal text-zinc-500">
<a className="text-white" href="#">Pipelines</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Environments</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Settings</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/50 border border-white/5 px-3 py-1.5 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]"></div>
                All Systems Normal
            </div>
<div className="h-8 w-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white">
<iconify-icon className="text-sm" icon="solar:user-linear"></iconify-icon>
</div>
</div>
</header>

<main className="flex-1 relative z-10 flex flex-col lg:flex-row gap-6 p-6 lg:p-8 overflow-hidden max-w-[1600px] w-full mx-auto">

<aside className="w-full lg:w-80 flex-none flex flex-col gap-6 h-[40vh] lg:h-full">

<div className="p-5 rounded-2xl border border-white/10 bg-zinc-950/50 backdrop-blur-md shadow-2xl">
<h2 className="text-lg tracking-tight font-medium text-zinc-100 mb-4">Deploy Service</h2>

<div className="flex p-1 bg-black/50 border border-white/5 rounded-lg mb-4">
<button className="flex-1 py-1.5 text-xs text-black bg-white rounded shadow-sm transition-all text-center font-medium">Git URL</button>
<button className="flex-1 py-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors text-center font-normal">CLI Upload</button>
</div>

<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500" icon="solar:link-minimalistic-linear"></iconify-icon>
</div>
<input className="w-full bg-black border border-white/10 text-zinc-200 text-sm rounded-xl focus:ring-0 focus:border-zinc-500 block pl-10 p-2.5 placeholder-zinc-600 transition-colors font-normal outline-none shadow-inner" placeholder="github.com/user/repo" type="text"/>
</div>
<button className="w-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white font-medium rounded-xl text-sm px-5 py-2.5 text-center transition-all flex items-center justify-center gap-2 group">
                        Deploy
                        <iconify-icon className="text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>

<div className="flex-1 rounded-2xl border border-white/10 bg-zinc-950/50 backdrop-blur-md flex flex-col overflow-hidden shadow-2xl">
<div className="px-5 py-4 border-b border-white/5 flex justify-between items-center bg-black/20">
<div className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Active Jobs</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:sort-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">

<button className="w-full text-left p-3 rounded-xl bg-blue-500/5 border border-blue-500/20 transition-all flex flex-col gap-2 relative group">
<div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
<div className="flex justify-between items-start w-full pl-4">
<div>
<div className="text-sm font-medium text-blue-50">api-gateway-core</div>
<div className="text-xs text-blue-200/50 mt-0.5 flex items-center gap-1.5">
<iconify-icon className="text-[10px]" icon="solar:branch-linear"></iconify-icon>
                                    main
                                </div>
</div>
<div className="flex items-center gap-1.5 text-blue-400 text-[10px] font-medium tracking-wide uppercase">
<iconify-icon className="animate-spin text-sm" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
</div>
</button>

<button className="w-full text-left p-3 rounded-xl hover:bg-white/5 border border-transparent transition-all flex flex-col gap-2 group">
<div className="flex justify-between items-start w-full pl-4">
<div>
<div className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">frontend-web-client</div>
<div className="text-xs text-zinc-600 mt-0.5 flex items-center gap-1.5">
<iconify-icon className="text-[10px]" icon="solar:branch-linear"></iconify-icon>
                                    production
                                </div>
</div>
<div className="flex items-center gap-1.5 text-teal-400 text-[10px] font-medium tracking-wide uppercase">
                                Ready
                            </div>
</div>
</button>

<button className="w-full text-left p-3 rounded-xl hover:bg-white/5 border border-transparent transition-all flex flex-col gap-2 group">
<div className="flex justify-between items-start w-full pl-4">
<div>
<div className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">worker-queue-processor</div>
<div className="text-xs text-zinc-600 mt-0.5 flex items-center gap-1.5">
<iconify-icon className="text-[10px]" icon="solar:branch-linear"></iconify-icon>
                                    fix/memory-leak
                                </div>
</div>
<div className="flex items-center gap-1.5 text-rose-400/80 text-[10px] font-medium tracking-wide uppercase">
                                Error
                            </div>
</div>
</button>
</div>
</div>
</aside>

<section className="flex-1 flex flex-col rounded-2xl border border-white/10 bg-[#050505] relative overflow-hidden h-[60vh] lg:h-full shadow-2xl">

<div className="px-6 py-5 border-b border-white/5 flex flex-wrap lg:flex-nowrap justify-between items-center gap-4 bg-[#0a0a0a]/80 backdrop-blur-xl z-10 relative">
<div className="flex items-center gap-4">
<h1 className="text-xl tracking-tight font-medium text-white flex items-center gap-2">
                        api-gateway-core
                    </h1>

<div className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                        Building Image
                    </div>
</div>

<div className="flex items-center gap-4">
<div className="text-xs text-zinc-400 bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-zinc-500" icon="solar:code-square-linear"></iconify-icon>
                        8f92a1c
                    </div>
<button className="text-zinc-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
<iconify-icon icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 relative group bg-[#020202]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="text-xs leading-relaxed space-y-2 max-w-4xl text-zinc-500 font-light">

<div><span className="text-zinc-600 mr-4">09:41:22</span><span className="text-zinc-400">Initializing deployment pipeline for api-gateway-core...</span></div>
<div><span className="text-zinc-600 mr-4">09:41:23</span><span className="text-zinc-400">Cloning repository https://github.com/org/api-gateway.git (branch: main)</span></div>
<div><span className="text-zinc-600 mr-4">09:41:24</span><span className="text-teal-400/80">Successfully checked out commit 8f92a1c</span></div>
<div className="pt-2"><span className="text-zinc-600 mr-4">09:41:25</span><span className="text-zinc-300">Analyzing project structure...</span></div>
<div><span className="text-zinc-600 mr-4">09:41:25</span><span className="text-zinc-400">Detected framework: Node.js (Express)</span></div>
<div><span className="text-zinc-600 mr-4">09:41:26</span><span className="text-zinc-400">Generating optimized Dockerfile...</span></div>
<div><span className="text-zinc-600 mr-4">09:41:26</span><span className="text-teal-400/80">Dockerfile generated successfully.</span></div>
<div className="pt-2"><span className="text-zinc-600 mr-4">09:41:27</span><span className="text-zinc-300">Starting container image build...</span></div>
<div><span className="text-zinc-600 mr-4">09:41:27</span><span className="text-zinc-500">Step 1/8 : FROM node:20-alpine AS builder</span></div>
<div><span className="text-zinc-600 mr-4">09:41:28</span><span className="text-zinc-500">---&gt; 8a9b1c2d3e4f</span></div>
<div><span className="text-zinc-600 mr-4">09:41:28</span><span className="text-zinc-500">Step 2/8 : WORKDIR /app</span></div>
<div><span className="text-zinc-600 mr-4">09:41:28</span><span className="text-zinc-500">---&gt; Running in 1a2b3c4d5e6f</span></div>
<div><span className="text-zinc-600 mr-4">09:41:29</span><span className="text-zinc-500">Step 3/8 : COPY package*.json ./</span></div>
<div><span className="text-zinc-600 mr-4">09:41:30</span><span className="text-zinc-500">Step 4/8 : RUN npm ci --omit=dev</span></div>
<div><span className="text-zinc-600 mr-4">09:41:31</span><span className="text-zinc-400">added 142 packages, and audited 143 packages in 4s</span></div>
<div><span className="text-zinc-600 mr-4">09:41:35</span><span className="text-zinc-500">Step 5/8 : COPY . .</span></div>
<div>
<span className="text-zinc-600 mr-4">09:41:36</span>
<span className="text-blue-400">Building source code... [================&gt;   ] 85%</span>
</div>

<div className="inline-block w-2 h-3.5 bg-zinc-500 animate-pulse align-middle ml-1 mt-1"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none rounded-b-2xl"></div>
</section>
</main>
<style>
        /* Custom subtle scrollbar for the sidebar */
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        iconify-icon {
            display: inline-flex;
            vertical-align: middle;
        }
    </style>

    </>
  );
}
