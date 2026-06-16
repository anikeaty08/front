import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
925: '#121212', // Custom deeper black
950: '#0a0a0a',
}
}
}
}
}



        // Simple script to adjust textarea height
        const textarea = document.querySelector('textarea[placeholder="Message Chatbot..."]');
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-16 lg:w-64 border-r border-white/5 bg-neutral-925 flex flex-col justify-between transition-all duration-300 z-20">
<div>

<div className="h-14 flex items-center px-4 lg:px-6 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shrink-0">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<span className="font-medium text-sm tracking-tight text-white hidden lg:block">NEXUS AI</span>
</div>
</div>

<nav className="flex flex-col gap-1 p-2">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="18"></span>
<span className="hidden lg:block font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-white/10 rounded-md transition-colors" href="#">
<span className="iconify text-white" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="18"></span>
<span className="hidden lg:block font-medium">My Chatbots</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:database" data-strokeWidth="1.5" data-width="18"></span>
<span className="hidden lg:block font-medium">Knowledge Base</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5" data-width="18"></span>
<span className="hidden lg:block font-medium">Analytics</span>
</a>
</nav>
</div>

<div className="p-2 border-t border-white/5">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:settings" data-strokeWidth="1.5" data-width="18"></span>
<span className="hidden lg:block font-medium">Settings</span>
</a>
<div className="mt-2 flex items-center gap-3 px-3 py-3 border-t border-white/5">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 border border-white/10"></div>
<div className="hidden lg:flex flex-col">
<span className="text-xs text-white font-medium">karl.design</span>
<span className="text-[10px] text-neutral-500">Free Plan</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-neutral-950 relative">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

<header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-neutral-950/80 backdrop-blur-md z-10 sticky top-0">
<div className="flex items-center gap-4">
<nav className="flex items-center text-sm text-neutral-500">
<span className="hover:text-white cursor-pointer transition-colors">Chatbots</span>
<span className="mx-2 text-neutral-700">/</span>
<span className="text-white font-medium">Customer Support Agent</span>
</nav>
<span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium border border-emerald-500/20 tracking-wide uppercase">Active</span>
</div>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-neutral-400 hover:text-white px-3 py-1.5 transition-colors">
                    Save Draft
                </button>
<button className="flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-3 py-1.5 rounded text-xs font-medium transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="iconify" data-icon="lucide:rocket" data-width="14"></span>
                    Deploy Changes
                </button>
</div>
</header>

<div className="flex-1 overflow-hidden flex flex-col lg:flex-row relative z-0">

<div className="flex-1 lg:max-w-xl xl:max-w-2xl border-r border-white/5 overflow-y-auto custom-scrollbar p-6 lg:p-8 pb-32">
<div className="max-w-lg mx-auto space-y-8">

<div className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium text-white tracking-tight">Configuration</h2>
<button className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
<span className="iconify" data-icon="lucide:rotate-ccw" data-width="12"></span>
                                Reset to default
                            </button>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Name</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 placeholder-neutral-600 transition-all" type="text" value="Customer Support Agent"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 flex items-center justify-between">
                                Model 
                                <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-neutral-500">GPT-4 Turbo</span>
</label>
<div className="relative">
<select className="w-full bg-neutral-900 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer hover:border-white/20 transition-colors">
<option>GPT-4 Turbo (128k context)</option>
<option>GPT-3.5 Turbo</option>
<option>Claude 3 Opus</option>
<option>Mistral Large</option>
</select>
<span className="iconify absolute right-3 top-2.5 text-neutral-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
<hr className="border-white/5"/>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">System Instructions</h3>
<span className="text-[10px] text-neutral-500">Prompts the AI on how to behave.</span>
</div>
<div className="relative group">
<textarea className="w-full h-48 bg-neutral-900 border border-white/10 rounded-lg p-3 text-sm text-neutral-300 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 resize-none leading-relaxed custom-scrollbar font-mono text-xs" spellcheck="false">You are a helpful, witty, and concise customer support agent for Nexus AI. 

Your goal is to assist users with deploying their chatbots. 
- Be polite but direct.
- Use emojis sparingly.
- If you don't know the answer, ask for clarification.
- Provide code snippets in JSON or Python when relevant.</textarea>
<div className="absolute bottom-2 right-2 flex gap-1">
<button className="p-1 hover:bg-white/10 rounded text-neutral-500 hover:text-white transition-colors" title="Optimize with AI">
<span className="iconify" data-icon="lucide:wand-2" data-width="14"></span>
</button>
</div>
</div>
</div>
<hr className="border-white/5"/>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Knowledge Base</h3>
<button className="text-xs text-neutral-400 hover:text-white border border-white/10 bg-neutral-900 px-2 py-1 rounded flex items-center gap-1.5 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="12"></span>
                                Add Source
                            </button>
</div>
<div className="bg-neutral-900/50 border border-dashed border-white/10 rounded-lg p-4 flex flex-col items-center justify-center gap-2 text-center hover:border-white/20 hover:bg-neutral-900 transition-all cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
<span className="iconify text-neutral-400 group-hover:text-white" data-icon="lucide:upload-cloud" data-width="16"></span>
</div>
<div>
<p className="text-xs text-neutral-300">Click to upload files</p>
<p className="text-[10px] text-neutral-500">PDF, TXT, CSV (Max 10MB)</p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 bg-neutral-900 border border-white/5 rounded text-xs">
<div className="flex items-center gap-2">
<span className="iconify text-red-400" data-icon="lucide:file-text" data-width="14"></span>
<span className="text-neutral-300">pricing_tier_2024.pdf</span>
</div>
<span className="text-neutral-600">142 KB</span>
</div>
</div>
</div>
<hr className="border-white/5"/>

<div className="space-y-6">
<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-neutral-400">Temperature</label>
<span className="text-xs text-white font-mono bg-white/10 px-1.5 rounded">0.7</span>
</div>
<input className="w-full" max="1" min="0" step="0.1" type="range" value="0.7"/>
<div className="flex justify-between text-[10px] text-neutral-600 font-medium">
<span>Precise</span>
<span>Creative</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-white">Web Search</span>
<span className="text-[10px] text-neutral-500">Allow bot to browse the internet.</span>
</div>

<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 left-0 top-0 border-neutral-600" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-700 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</input></div>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-white">Code Interpreter</span>
<span className="text-[10px] text-neutral-500">Execute Python code.</span>
</div>
<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-neutral-400 border-4 appearance-none cursor-pointer transition-all duration-300 left-0 top-0 border-neutral-600" id="toggle2" name="toggle2" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-800 cursor-pointer transition-colors duration-300" htmlFor="toggle2"></label>
</input></div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-black/40 flex flex-col relative">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
<span className="text-9xl font-bold tracking-tighter">PREVIEW</span>
</div>

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-neutral-950/50 backdrop-blur">
<div className="flex items-center gap-2.5">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-neutral-300">Preview Mode</span>
</div>
<button className="p-1.5 hover:bg-white/5 rounded text-neutral-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:rotate-cw" data-width="14"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6 custom-scrollbar">

<div className="flex gap-4 max-w-2xl mx-auto">
<div className="w-8 h-8 rounded bg-indigo-600/20 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400">
<span className="iconify" data-icon="lucide:bot" data-width="16"></span>
</div>
<div className="space-y-1.5 pt-1">
<div className="flex items-baseline gap-2">
<span className="text-xs font-medium text-white">Support Agent</span>
<span className="text-[10px] text-neutral-500">Just now</span>
</div>
<div className="text-sm text-neutral-300 leading-relaxed">
<p>Hello! I'm your virtual assistant. How can I help you configure your chatbot today?</p>
</div>
</div>
</div>

<div className="flex gap-4 max-w-2xl mx-auto flex-row-reverse">
<div className="w-8 h-8 rounded bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0 text-neutral-400">
<span className="iconify" data-icon="lucide:user" data-width="16"></span>
</div>
<div className="space-y-1.5 pt-1 text-right">
<div className="flex items-baseline gap-2 justify-end">
<span className="text-[10px] text-neutral-500">Just now</span>
<span className="text-xs font-medium text-white">User</span>
</div>
<div className="text-sm text-neutral-300 bg-neutral-800/50 border border-white/5 rounded-2xl rounded-tr-sm px-4 py-2 text-left inline-block shadow-sm">
<p>Can you explain the difference between the Basic and Pro plans?</p>
</div>
</div>
</div>

<div className="flex gap-4 max-w-2xl mx-auto">
<div className="w-8 h-8 rounded bg-indigo-600/20 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400">
<span className="iconify" data-icon="lucide:bot" data-width="16"></span>
</div>
<div className="space-y-1.5 pt-1 w-full">
<div className="flex items-baseline gap-2">
<span className="text-xs font-medium text-white">Support Agent</span>
</div>
<div className="text-sm text-neutral-300 leading-relaxed">
<p className="mb-2">Certainly. Based on the document <span className="text-indigo-400 bg-indigo-500/10 px-1 rounded border border-indigo-500/20 font-mono text-xs">pricing_tier_2024.pdf</span>, here is the breakdown:</p>
<div className="bg-neutral-900 border border-white/10 rounded-md overflow-hidden my-3">
<table className="w-full text-xs text-left">
<thead className="bg-white/5 text-neutral-400 font-medium border-b border-white/5">
<tr>
<th className="px-3 py-2">Feature</th>
<th className="px-3 py-2">Basic</th>
<th className="px-3 py-2">Pro</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-neutral-300">
<tr>
<td className="px-3 py-2">Messages</td>
<td className="px-3 py-2">1,000/mo</td>
<td className="px-3 py-2">Unlimited</td>
</tr>
<tr>
<td className="px-3 py-2">Models</td>
<td className="px-3 py-2">GPT-3.5</td>
<td className="px-3 py-2">GPT-4</td>
</tr>
</tbody>
</table>
</div>
<p>Would you like to upgrade now?</p>
</div>

<div className="flex gap-2 mt-2">
<button className="text-xs bg-white/5 hover:bg-white/10 border border-white/5 px-3 py-1.5 rounded-full text-neutral-300 transition-colors">Yes, upgrade me</button>
<button className="text-xs bg-white/5 hover:bg-white/10 border border-white/5 px-3 py-1.5 rounded-full text-neutral-300 transition-colors">Tell me more</button>
</div>
</div>
</div>
</div>

<div className="p-4 lg:p-6 pb-6 pt-2 max-w-3xl mx-auto w-full">
<div className="relative glass-panel rounded-xl shadow-2xl">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<textarea className="w-full bg-transparent text-sm text-white placeholder-neutral-500 px-4 py-4 pr-12 focus:outline-none resize-none max-h-32 custom-scrollbar" placeholder="Message Chatbot..." rows="1"></textarea>
<div className="absolute right-2 bottom-2.5 flex items-center gap-1">
<button className="p-1.5 text-neutral-500 hover:text-white transition-colors rounded">
<span className="iconify" data-icon="lucide:paperclip" data-width="16"></span>
</button>
<button className="p-1.5 bg-white text-black rounded hover:bg-neutral-200 transition-colors">
<span className="iconify" data-icon="lucide:arrow-up" data-width="16"></span>
</button>
</div>
</div>
<div className="text-center mt-3">
<p className="text-[10px] text-neutral-600">AI can make mistakes. Consider checking important information.</p>
</div>
</div>
</div>
</div>
</main>




    </>
  );
}
