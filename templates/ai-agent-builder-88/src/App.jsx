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
      

<nav className="w-64 flex-shrink-0 border-r border-white/5 flex flex-col justify-between bg-neutral-950/50">
<div>

<div className="h-14 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-neutral-100 to-neutral-400 flex items-center justify-center text-black font-semibold text-xs tracking-tighter">
                        NX
                    </div>
<span className="font-medium text-sm text-neutral-100 tracking-tight">Nexus</span>
</div>
</div>

<div className="px-3 py-4 space-y-0.5">
<div className="px-3 text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-2">Platform</div>
<a className="group flex items-center gap-2.5 px-3 py-2 text-sm text-neutral-400 rounded-md hover:bg-white/5 hover:text-white transition-colors" href="#">
<span className="iconify text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="16"></span>
                    Dashboard
                </a>
<a className="group flex items-center gap-2.5 px-3 py-2 text-sm text-white bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify text-white" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="16"></span>
                    Agents
                </a>
<a className="group flex items-center gap-2.5 px-3 py-2 text-sm text-neutral-400 rounded-md hover:bg-white/5 hover:text-white transition-colors" href="#">
<span className="iconify text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:database" data-strokeWidth="1.5" data-width="16"></span>
                    Knowledge
                </a>
<a className="group flex items-center gap-2.5 px-3 py-2 text-sm text-neutral-400 rounded-md hover:bg-white/5 hover:text-white transition-colors" href="#">
<span className="iconify text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="16"></span>
                    Workflows
                </a>
</div>
<div className="px-3 py-2 space-y-0.5">
<div className="px-3 text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-2">Settings</div>
<a className="group flex items-center gap-2.5 px-3 py-2 text-sm text-neutral-400 rounded-md hover:bg-white/5 hover:text-white transition-colors" href="#">
<span className="iconify text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:credit-card" data-strokeWidth="1.5" data-width="16"></span>
                    Billing
                </a>
<a className="group flex items-center gap-2.5 px-3 py-2 text-sm text-neutral-400 rounded-md hover:bg-white/5 hover:text-white transition-colors" href="#">
<span className="iconify text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="16"></span>
                    Preferences
                </a>
</div>
</div>

<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full group">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs text-neutral-400">
                    JD
                </div>
<div className="flex flex-col items-start">
<span className="text-xs font-medium text-neutral-200 group-hover:text-white">John Doe</span>
<span className="text-[10px] text-neutral-500">Pro Plan</span>
</div>
<span className="iconify ml-auto text-neutral-600 group-hover:text-neutral-400" data-icon="lucide:chevron-up" data-width="14"></span>
</button>
</div>
</nav>

<main className="flex-1 flex flex-col min-w-0 bg-neutral-950">

<header className="h-14 flex items-center justify-between px-6 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-10">
<div className="flex items-center gap-3 text-sm">
<a className="text-neutral-500 hover:text-neutral-300" href="#">Agents</a>
<span className="text-neutral-700">/</span>
<span className="text-white font-medium">Customer Support Bot</span>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 ml-2">Active</span>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:share" data-width="14"></span>
                    Share
                </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="iconify" data-icon="lucide:rocket" data-width="14"></span>
                    Deploy
                </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="w-1/2 lg:w-[600px] border-r border-white/5 overflow-y-auto p-8 pb-20">
<div className="max-w-xl mx-auto space-y-8">

<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-white tracking-tight">Agent Identity</h2>
<span className="iconify text-neutral-600" data-icon="lucide:fingerprint" data-width="16"></span>
</div>
<div className="grid gap-5">
<div className="group">
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-0.5">Name</label>
<div className="relative focus-ring rounded-md transition-all">
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors" spellcheck="false" type="text" value="Customer Support Bot"/>
</div>
</div>
<div className="group">
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-0.5">Description</label>
<div className="relative focus-ring rounded-md transition-all">
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors h-20 resize-none" placeholder="Describe what this agent does...">Handles inbound support queries for SaaS products, focusing on billing and technical troubleshooting.</textarea>
</div>
</div>
</div>
</section>
<div className="h-px w-full bg-white/5"></div>

<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-white tracking-tight">Model Configuration</h2>
<span className="iconify text-neutral-600" data-icon="lucide:cpu" data-width="16"></span>
</div>
<div className="grid gap-5">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-0.5">Base Model</label>
<div className="relative group">
<select className="w-full appearance-none bg-neutral-900/50 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-neutral-600 transition-colors cursor-pointer">
<option>GPT-4o (OpenAI)</option>
<option>Claude 3.5 Sonnet (Anthropic)</option>
<option>Llama 3 70B (Meta)</option>
</select>
<span className="iconify absolute right-3 top-2.5 text-neutral-500 pointer-events-none group-hover:text-neutral-300" data-icon="lucide:chevrons-up-down" data-width="14"></span>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="block text-xs font-medium text-neutral-500 ml-0.5">Temperature</label>
<span className="text-xs text-neutral-400 font-mono">0.7</span>
</div>
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="70"/>
<div className="flex justify-between mt-1">
<span className="text-[10px] text-neutral-600">Precise</span>
<span className="text-[10px] text-neutral-600">Creative</span>
</div>
</div>
</div>
</section>
<div className="h-px w-full bg-white/5"></div>

<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-white tracking-tight">System Prompt</h2>
<button className="text-[10px] text-neutral-400 hover:text-white flex items-center gap-1">
<span className="iconify" data-icon="lucide:sparkles" data-width="10"></span>
                                Enhance
                            </button>
</div>
<div className="relative focus-ring rounded-md">
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-md px-3 py-3 text-sm text-neutral-300 font-mono leading-relaxed placeholder-neutral-600 focus:outline-none transition-colors h-64 resize-y" spellcheck="false">You are a helpful and polite customer support agent for Nexus. 

Your goal is to assist users with technical issues and billing inquiries. 

Guidelines:
- Be concise and direct.
- Use a friendly, professional tone.
- If you don't know the answer, ask clarifying questions or escalate to a human.
- Do not make up facts.</textarea>
<div className="absolute bottom-2 right-2 text-[10px] text-neutral-600 bg-neutral-900 px-1 rounded">Markdown supported</div>
</div>
</section>
<div className="h-px w-full bg-white/5"></div>

<section className="space-y-4">
<h2 className="text-sm font-medium text-white tracking-tight">Capabilities</h2>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 border border-white/5 rounded-lg bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-blue-500/10 rounded text-blue-400">
<span className="iconify" data-icon="lucide:globe" data-width="16"></span>
</div>
<div>
<div className="text-sm text-neutral-200">Web Browsing</div>
<div className="text-[10px] text-neutral-500">Allow agent to search the internet</div>
</div>
</div>
<div className="relative inline-block w-9 h-5 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-neutral-800 appearance-none cursor-pointer transition-all duration-300 left-0 checked:left-4 checked:bg-blue-500 checked:border-blue-500" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>

<div className="flex items-center justify-between p-3 border border-white/5 rounded-lg bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-amber-500/10 rounded text-amber-400">
<span className="iconify" data-icon="lucide:code-2" data-width="16"></span>
</div>
<div>
<div className="text-sm text-neutral-200">Code Interpreter</div>
<div className="text-[10px] text-neutral-500">Execute Python code for analysis</div>
</div>
</div>
<div className="relative inline-block w-9 h-5 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-neutral-400 border-4 border-neutral-800 appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle2"></label>
</input></div>
</div>

<div className="flex items-center justify-between p-3 border border-white/5 rounded-lg bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-purple-500/10 rounded text-purple-400">
<span className="iconify" data-icon="lucide:file-text" data-width="16"></span>
</div>
<div>
<div className="text-sm text-neutral-200">Knowledge Retrieval</div>
<div className="text-[10px] text-neutral-500">Access uploaded documents</div>
</div>
</div>
<div className="relative inline-block w-9 h-5 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-neutral-800 appearance-none cursor-pointer transition-all duration-300 left-0 checked:left-4 checked:bg-purple-500 checked:border-purple-500" id="toggle3" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle3"></label>
</div>
</div>
</div>
</section>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#080808] relative">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-neutral-950/50 z-10 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Preview Mode</span>
</div>
<button className="p-1.5 hover:bg-white/5 rounded-md text-neutral-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="14"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 z-10 relative">

<div className="flex justify-center">
<span className="text-[10px] text-neutral-600 bg-neutral-900/50 px-2 py-1 rounded-full border border-white/5">Today, 10:23 AM</span>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center border border-white/5 flex-shrink-0">
<span className="iconify text-white" data-icon="lucide:bot" data-width="16"></span>
</div>
<div className="space-y-1.5 max-w-[80%]">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-white">Support Bot</span>
</div>
<div className="text-sm text-neutral-300 leading-relaxed bg-neutral-900 border border-white/5 rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
<p>Hello! I'm the Nexus support agent. How can I help you with your account or technical issues today?</p>
</div>
</div>
</div>

<div className="flex gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/5 flex items-center justify-center text-xs text-neutral-400 flex-shrink-0">
                            JD
                        </div>
<div className="space-y-1.5 max-w-[80%]">
<div className="text-sm text-white leading-relaxed bg-neutral-800 border border-white/5 rounded-lg rounded-tr-none px-4 py-3 shadow-sm">
<p>I'm having trouble exporting my analytics data to CSV. The button seems disabled.</p>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center border border-white/5 flex-shrink-0">
<span className="iconify text-white" data-icon="lucide:bot" data-width="16"></span>
</div>
<div className="space-y-1.5 max-w-[80%]">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-white">Support Bot</span>
<span className="text-[10px] text-neutral-500 flex items-center gap-1">
<span className="iconify animate-spin" data-icon="lucide:loader-2" data-width="10"></span>
                                    Consulting Knowledge Base...
                                </span>
</div>
<div className="text-sm text-neutral-300 leading-relaxed bg-neutral-900 border border-white/5 rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
<p>I can help with that. Exports are typically disabled if you are on the "Starter" plan, which only supports PDF exports.</p>
<p className="mt-2">Could you please confirm which subscription tier you are currently on?</p>
</div>

<div className="flex gap-2 mt-2">
<button className="text-xs bg-neutral-900 border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white px-3 py-1.5 rounded-full transition-colors">
                                    Check my plan
                                </button>
<button className="text-xs bg-neutral-900 border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white px-3 py-1.5 rounded-full transition-colors">
                                    It is not a plan issue
                                </button>
</div>
</div>
</div>
</div>

<div className="p-6 pt-2 z-20">
<div className="relative glass-panel rounded-xl shadow-2xl p-2 flex flex-col gap-2">
<textarea className="w-full bg-transparent text-sm text-white placeholder-neutral-500 resize-none focus:outline-none px-2 py-2 h-12" placeholder="Send a message to test..."></textarea>
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-1">
<button className="p-1.5 text-neutral-500 hover:text-white hover:bg-white/5 rounded-md transition-colors">
<span className="iconify" data-icon="lucide:paperclip" data-width="16"></span>
</button>
<button className="p-1.5 text-neutral-500 hover:text-white hover:bg-white/5 rounded-md transition-colors">
<span className="iconify" data-icon="lucide:image" data-width="16"></span>
</button>
</div>
<button className="p-1.5 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.15)]">
<span className="iconify" data-icon="lucide:arrow-up" data-width="16"></span>
</button>
</div>
</div>
<div className="text-center mt-3">
<span className="text-[10px] text-neutral-600">AI output can be unpredictable. Verify important information.</span>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
