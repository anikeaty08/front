import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Auto-resize textarea
        const textarea = document.querySelector('textarea');
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
      

<div className="fixed top-0 right-0 w-[800px] h-[600px] bg-indigo-900/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

<aside className="w-14 hover:w-64 group/sidebar border-r border-white/5 flex flex-col bg-neutral-950 z-30 transition-all duration-300 ease-in-out shrink-0 overflow-hidden relative" id="sidebar">
<div className="w-64 flex flex-col h-full">

<div className="h-14 flex items-center px-4 border-b border-white/5 shrink-0">
<div className="w-6 h-6 bg-white text-black rounded flex items-center justify-center font-bold text-xs tracking-tighter shrink-0">
                    V
                </div>
<span className="font-medium tracking-tight text-sm ml-3 opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">VIBE.</span>
</div>

<div className="p-2 shrink-0">
<button className="w-full flex items-center gap-2 bg-white/5 hover:bg-white/10 text-neutral-200 text-xs font-medium py-2 px-2.5 rounded-lg border border-white/5 transition-all">
<iconify-icon className="shrink-0" icon="lucide:plus" strokeWidth="1.5" width="16"></iconify-icon>
<span className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap">New Project</span>
</button>
</div>

<div className="px-2 py-2 space-y-1 overflow-y-auto flex-1">
<a className="flex items-center gap-3 px-2.5 py-2 rounded-md hover:bg-white/5 text-neutral-400 hover:text-neutral-200 transition-colors" href="#">
<iconify-icon className="shrink-0" icon="lucide:layout-dashboard" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-md bg-white/5 text-white border border-white/5 shadow-sm" href="#">
<iconify-icon className="shrink-0 text-indigo-400" icon="lucide:message-square" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap">Chat</span>
</a>
<a className="flex items-center gap-3 px-2.5 py-2 rounded-md hover:bg-white/5 text-neutral-400 hover:text-neutral-200 transition-colors" href="#">
<iconify-icon className="shrink-0" icon="lucide:git-branch" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap">History</span>
</a>
</div>

<div className="p-2 border-t border-white/5 shrink-0">
<button className="flex items-center gap-3 w-full p-1.5 rounded-lg hover:bg-white/5 transition-colors text-left">
<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-medium ring-1 ring-white/10 shrink-0">
                        JD
                    </div>
<div className="flex flex-col overflow-hidden opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
<span className="text-xs font-medium text-neutral-200 truncate">John Developer</span>
</div>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden">

<header className="h-14 flex items-center justify-between px-4 border-b border-white/5 bg-neutral-950 shrink-0 z-20">
<div className="flex items-center gap-3">
<div className="flex items-center text-xs text-neutral-500 gap-2">
<span className="text-neutral-400">john-dev</span>
<span className="text-neutral-700">/</span>
<span className="text-neutral-200 font-medium">e-commerce-dashboard</span>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 ml-2">Beta</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-1 text-[10px] text-neutral-500 mr-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span>Saved</span>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-black/20 hover:bg-white/5 text-xs text-neutral-400 transition-colors">
<iconify-icon icon="lucide:share" width="12"></iconify-icon>
                    Share
                </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-medium transition-colors">
<iconify-icon icon="lucide:rocket" width="12"></iconify-icon>
                    Deploy
                </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden relative">

<div className="w-[380px] flex flex-col border-r border-white/5 bg-neutral-950/50 backdrop-blur-sm shrink-0 z-10">

<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-white" icon="lucide:bot" width="14"></iconify-icon>
</div>
<div className="space-y-2">
<p className="text-sm text-neutral-300 leading-relaxed">
                                Ready to build. I can help you create React applications with Tailwind CSS. What would you like to create today?
                            </p>
<div className="flex flex-wrap gap-2 pt-1">
<button className="text-[10px] px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/5 text-neutral-400 transition-colors">
                                    Landing Page
                                </button>
<button className="text-[10px] px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/5 text-neutral-400 transition-colors">
                                    Dashboard
                                </button>
</div>
</div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-medium text-neutral-400 border border-white/5">
                            JD
                        </div>
<div className="bg-neutral-900 border border-white/5 rounded-lg rounded-tr-sm p-3 max-w-[85%]">
<p className="text-sm text-neutral-200">
                                Create a minimalist e-commerce dashboard with a sidebar, a stats grid on top, and a recent orders table below. Use dark mode.
                            </p>
</div>
</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-white" icon="lucide:bot" width="14"></iconify-icon>
</div>
<div className="space-y-2">
<p className="text-sm text-neutral-300 leading-relaxed">
                                I've generated the dashboard layout for you. It includes a responsive sidebar, key metrics, and a styled data table.
                            </p>
<div className="flex items-center gap-2 text-xs text-indigo-400 mt-1">
<iconify-icon icon="lucide:check-circle" width="12"></iconify-icon>
<span>Code generated successfully</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-neutral-950">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative bg-neutral-900 border border-white/10 rounded-lg shadow-lg input-glow flex flex-col transition-colors">
<textarea className="w-full bg-transparent text-sm text-white placeholder-neutral-500 p-3 min-h-[40px] max-h-[200px] outline-none resize-none font-light leading-relaxed scrollbar-hide" placeholder="Ask follow up..." rows="1"></textarea>
<div className="flex items-center justify-between px-2 pb-2">
<div className="flex items-center gap-1">
<button className="p-1.5 text-neutral-500 hover:text-white hover:bg-white/5 rounded transition-colors">
<iconify-icon icon="lucide:paperclip" width="14"></iconify-icon>
</button>
</div>
<button className="p-1.5 bg-white text-black rounded hover:bg-neutral-200 transition-colors">
<iconify-icon icon="lucide:arrow-up" strokeWidth="2.5" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="text-[10px] text-center text-neutral-600 mt-2">
                        Vibe can make mistakes. Check generated code.
                    </div>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#0f0f0f] relative overflow-hidden">

<div className="h-10 border-b border-white/5 flex items-center px-3 bg-neutral-950/30 justify-between shrink-0">
<div className="flex items-center gap-1 bg-neutral-900/50 p-0.5 rounded-lg border border-white/5">
<button className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-md shadow-sm">Preview</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors">Code</button>
</div>
<div className="flex items-center gap-2 bg-neutral-900 border border-white/5 rounded px-2 py-1 max-w-md w-full mx-4">
<iconify-icon className="text-neutral-500" icon="lucide:lock" width="10"></iconify-icon>
<span className="text-[11px] text-neutral-400 truncate">localhost:3000/dashboard</span>
<iconify-icon className="ml-auto text-neutral-500 cursor-pointer hover:text-white" icon="lucide:rotate-cw" width="10"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<button className="text-neutral-500 hover:text-white p-1.5"><iconify-icon icon="lucide:monitor" width="14"></iconify-icon></button>
<button className="text-neutral-500 hover:text-white p-1.5"><iconify-icon icon="lucide:smartphone" width="14"></iconify-icon></button>
<button className="text-neutral-500 hover:text-white p-1.5"><iconify-icon icon="lucide:external-link" width="14"></iconify-icon></button>
</div>
</div>

<div className="flex-1 overflow-auto p-4 md:p-8 flex items-start justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]">

<div className="w-full max-w-5xl bg-neutral-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden min-h-[600px] flex">

<div className="w-56 border-r border-white/5 bg-neutral-900 p-4 hidden sm:flex flex-col">
<div className="flex items-center gap-2 mb-8">
<div className="w-5 h-5 bg-indigo-500 rounded"></div>
<span className="text-sm font-semibold text-white">Store</span>
</div>
<div className="space-y-1">
<div className="px-2 py-1.5 bg-white/5 text-white text-xs rounded font-medium">Overview</div>
<div className="px-2 py-1.5 text-neutral-400 text-xs rounded hover:bg-white/5 hover:text-white transition">Orders</div>
<div className="px-2 py-1.5 text-neutral-400 text-xs rounded hover:bg-white/5 hover:text-white transition">Products</div>
<div className="px-2 py-1.5 text-neutral-400 text-xs rounded hover:bg-white/5 hover:text-white transition">Customers</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#050505]">
<div className="h-14 border-b border-white/5 flex items-center justify-between px-6">
<h1 className="text-sm font-medium text-white">Overview</h1>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-neutral-800"></div>
</div>
</div>
<div className="p-6 space-y-6">

<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded-lg bg-neutral-900 border border-white/5">
<div className="text-[10px] text-neutral-500 uppercase font-medium">Total Revenue</div>
<div className="text-xl font-semibold text-white mt-1">$45,231.89</div>
<div className="text-[10px] text-emerald-500 mt-2">+20.1% from last month</div>
</div>
<div className="p-4 rounded-lg bg-neutral-900 border border-white/5">
<div className="text-[10px] text-neutral-500 uppercase font-medium">Subscriptions</div>
<div className="text-xl font-semibold text-white mt-1">+2350</div>
<div className="text-[10px] text-emerald-500 mt-2">+180.1% from last month</div>
</div>
<div className="p-4 rounded-lg bg-neutral-900 border border-white/5">
<div className="text-[10px] text-neutral-500 uppercase font-medium">Active Now</div>
<div className="text-xl font-semibold text-white mt-1">+573</div>
<div className="text-[10px] text-emerald-500 mt-2">+201 since last hour</div>
</div>
</div>

<div className="rounded-lg border border-white/5 bg-neutral-900 overflow-hidden">
<div className="px-4 py-3 border-b border-white/5">
<h3 className="text-xs font-medium text-white">Recent Sales</h3>
<p className="text-[10px] text-neutral-500">You made 265 sales this month.</p>
</div>
<div className="p-4">
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-400">OM</div>
<div>
<div className="text-white font-medium">Olivia Martin</div>
<div className="text-neutral-500 text-[10px]">olivia.martin@email.com</div>
</div>
</div>
<div className="text-white font-medium">+$1,999.00</div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-400">JL</div>
<div>
<div className="text-white font-medium">Jackson Lee</div>
<div className="text-neutral-500 text-[10px]">jackson.lee@email.com</div>
</div>
</div>
<div className="text-white font-medium">+$39.00</div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-400">IN</div>
<div>
<div className="text-white font-medium">Isabella Nguyen</div>
<div className="text-neutral-500 text-[10px]">isabella.nguyen@email.com</div>
</div>
</div>
<div className="text-white font-medium">+$299.00</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
