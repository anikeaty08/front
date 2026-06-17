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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Simple Single Page App Router Simulation
        function switchPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.remove('active');
                setTimeout(() => {
                    if(!page.classList.contains('active')) {
                        page.style.display = 'none';
                    }
                }, 300); // match transition
            });

            // Show selected page
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.style.display = 'block';
                // Small timeout to allow display:block to apply before opacity transition
                setTimeout(() => {
                    selectedPage.classList.add('active');
                }, 10);
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="mZq7XpvHyoo5yklnnqL9"></div>
</div>

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
<div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="switchPage('home')">
<div className="relative flex items-center justify-center h-8 w-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg text-white">
<iconify-icon icon="lucide:bot" width="18"></iconify-icon>
</div>
<span className="font-medium text-sm tracking-tight text-white">AI Education Agency</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
<button className="hover:text-white transition-colors" onclick="switchPage('home')">Home</button>
<button className="hover:text-white transition-colors" onclick="switchPage('education')">Curriculum</button>
<button className="hover:text-white transition-colors" onclick="switchPage('solutions')">Solutions</button>
<button className="hover:text-white transition-colors" onclick="switchPage('about')">About</button>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-200" href="https://calendar.app.google/hwmwKoScDZmgBtRK9" target="_blank">
                    Get Started
                </a>
</div>
</div>
</nav>

<div className="pt-20">

<div className="page-section active" id="home">

<main className="md:pt-32 md:pb-32 z-10 pt-16 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex gap-2 hover:bg-white/10 transition-colors cursor-default text-xs font-medium text-blue-200 bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center" style={{}}>Now Accepting new clients<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span></div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                        Master the Age of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            Autonomous Intelligence
                        </span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        We bridge the gap between human potential and artificial intelligence. Learn to build agents, automate workflows, and deploy systems that scale.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">

<button className="group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 btn-shine" onclick="switchPage('education')">
                            Start Learning
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>

<button className="group sm:w-auto hover:bg-zinc-100 hover:text-black hover:border-transparent transition-all duration-300 flex hover:-translate-y-0.5 active:translate-y-0 text-sm font-medium text-zinc-300 bg-zinc-900 w-full border-zinc-800 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center" onclick="switchPage('demo')">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:eye" width="16"></iconify-icon>
                            Sneak Peek
                        </button>
</div>
</div>

<div className="mt-24 pt-8 border-t border-white/5">
<p className="text-center text-xs text-zinc-500 font-medium uppercase tracking-widest mb-8">Master these technologies</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-zinc-300"><iconify-icon icon="lucide:cpu" width="24"></iconify-icon><span className="font-semibold text-lg">OpenAI</span></div>
<div className="flex items-center gap-2 text-zinc-300"><iconify-icon icon="lucide:zap" width="24"></iconify-icon><span className="font-semibold text-lg">Zapier</span></div>
<div className="flex items-center gap-2 text-zinc-300"><iconify-icon icon="lucide:database" width="24"></iconify-icon><span className="font-semibold text-lg">Pinecone</span></div>
<div className="flex items-center gap-2 text-zinc-300"><iconify-icon icon="lucide:bot" width="24"></iconify-icon><span className="font-semibold text-lg">LangChain</span></div>
<div className="flex items-center gap-2 text-zinc-300"><iconify-icon icon="lucide:code-2" width="24"></iconify-icon><span className="font-semibold text-lg">Python</span></div>
</div>
</div>
</main>

<section className="py-24 relative z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:flex items-end justify-between">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Core Competencies</h2>
<p className="text-zinc-400 font-light">Comprehensive education designed to take you from concept to deployed autonomous systems.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:workflow" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Workflow Automation</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Learn to architect complex, multi-step automations using tools like Make and Zapier without writing a single line of code.
                            </p>
</div>

<div className="group relative p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:brain-circuit" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">AI Agents</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Build autonomous agents capable of reasoning, browsing the web, and executing tasks. Master LangChain and AutoGPT frameworks.
                            </p>
</div>

<div className="group relative p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:graduation-cap" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Corporate Training</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Upskill your entire workforce. Custom modules designed for enterprise efficiency, data security, and prompt engineering best practices.
                            </p>
</div>
</div>
</div>
</section>
</div>

<div className="page-section min-h-screen" id="demo">
<div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-20">
<button className="mb-8 flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors" onclick="switchPage('home')">
<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon> Back to Home
                </button>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Service examples</h2>
<p className="text-zinc-400 max-w-2xl mb-12">See these quick examples of workflow automations we've built. These examples demonstrate real-world workflows that optimize operations.</p>

<div className="w-full h-[500px] bg-white rounded-xl shadow-2xl border border-white/10 overflow-hidden flex flex-row text-slate-600 font-sans relative select-none mb-4 ring-1 ring-zinc-800">

<div className="w-16 bg-[#632a8e] flex flex-col items-center py-4 gap-6 z-20 shrink-0">
<div className="text-white opacity-90 hover:opacity-100 cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors"><iconify-icon icon="lucide:home" width="22"></iconify-icon></div>
<div className="text-white/60 hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors"><iconify-icon icon="lucide:layers" width="22"></iconify-icon></div>
<div className="text-white/60 hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors"><iconify-icon icon="lucide:zap" width="22"></iconify-icon></div>
<div className="text-white/60 hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors"><iconify-icon icon="lucide:link" width="22"></iconify-icon></div>
<div className="text-white/60 hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors"><iconify-icon icon="lucide:globe" width="22"></iconify-icon></div>
<div className="mt-auto text-white/60 hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors"><iconify-icon icon="lucide:settings" width="22"></iconify-icon></div>
</div>

<div className="flex-1 flex flex-col bg-[#f4f4f5] relative overflow-hidden">

<div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0 z-10">
<div className="flex items-center gap-3">
<button className="p-1.5 hover:bg-slate-100 rounded-md text-slate-400 transition-colors"><iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon></button>
<span className="font-semibold text-slate-700 text-sm">Integration Airtable (copy)</span>
<iconify-icon className="text-slate-400 ml-2" icon="lucide:sliders-horizontal" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-semibold hover:bg-slate-50 flex items-center gap-2 transition-colors text-slate-600">
<iconify-icon icon="lucide:share-2" width="14"></iconify-icon> Share
                                </button>
<button className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors"><iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon></button>
</div>
</div>

<div className="flex-1 relative cursor-grab active:cursor-grabbing overflow-x-auto overflow-y-hidden group scrollbar-hide">
<div className="absolute inset-0 min-w-[800px] h-full">
<div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>


<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" fill="none">
<defs>
<marker id="arrowhead" markerheight="6" markerwidth="8" orient="auto" refx="7" refy="3">
<polygon fill="#cbd5e1" points="0 0, 8 3, 0 6"></polygon>
</marker>
</defs>

<path d="M90,200 L160,200" marker-end="url(#arrowhead)" stroke="#cbd5e1" stroke-dasharray="6,4" strokeWidth="2"></path>
<path d="M200,200 L270,200" marker-end="url(#arrowhead)" stroke="#cbd5e1" stroke-dasharray="6,4" strokeWidth="2"></path>
<path d="M310,200 L380,200" marker-end="url(#arrowhead)" stroke="#cbd5e1" stroke-dasharray="6,4" strokeWidth="2"></path>

<path d="M420,200 C460,200 460,120 500,120" marker-end="url(#arrowhead)" stroke="#cbd5e1" stroke-dasharray="6,4" strokeWidth="2"></path>
<path d="M420,200 C460,200 460,280 500,280" marker-end="url(#arrowhead)" stroke="#cbd5e1" stroke-dasharray="6,4" strokeWidth="2"></path>

<path d="M540,120 L610,120" marker-end="url(#arrowhead)" stroke="#cbd5e1" stroke-dasharray="6,4" strokeWidth="2"></path>

<path d="M540,280 L610,280" marker-end="url(#arrowhead)" stroke="#cbd5e1" stroke-dasharray="6,4" strokeWidth="2"></path>
</svg>

<div className="absolute top-[180px] left-[50px] flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer group/node">
<div className="w-10 h-10 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 ring-[3px] ring-white">
<iconify-icon icon="lucide:clock" width="20"></iconify-icon>
<div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm"><iconify-icon className="text-blue-500 block" icon="lucide:zap" width="8"></iconify-icon></div>
</div>
<span className="text-[9px] font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded-sm border border-slate-200 uppercase tracking-wide">Trigger</span>
</div>

<div className="absolute top-[180px] left-[160px] flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer group/node">
<div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white shadow-lg shadow-yellow-500/20 ring-[3px] ring-white">
<iconify-icon icon="lucide:table" width="20"></iconify-icon>
</div>
<span className="text-[9px] font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded-sm border border-slate-200 uppercase tracking-wide">Airtable</span>
</div>

<div className="absolute top-[180px] left-[270px] flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer group/node">
<div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-600/20 ring-[3px] ring-white">
<iconify-icon icon="lucide:bot" width="20"></iconify-icon>
</div>
<div className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">1</div>
<span className="text-[9px] font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded-sm border border-slate-200 uppercase tracking-wide">OpenAI</span>
</div>

<div className="absolute top-[180px] left-[380px] flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer group/node">
<div className="w-10 h-10 rounded-full bg-[#84cc16] flex items-center justify-center text-white shadow-lg shadow-lime-500/20 ring-[3px] ring-white">
<iconify-icon icon="lucide:git-branch" width="20"></iconify-icon>
</div>
<span className="text-[9px] font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded-sm border border-slate-200 uppercase tracking-wide">Router</span>
</div>

<div className="absolute top-[100px] left-[500px] flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer group/node">
<div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/20 ring-[3px] ring-white">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<span className="text-[9px] font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded-sm border border-slate-200 uppercase tracking-wide">Gmail</span>
</div>

<div className="absolute top-[260px] left-[500px] flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer group/node">
<div className="w-10 h-10 rounded-full bg-[#4a154b] flex items-center justify-center text-white shadow-lg shadow-purple-900/20 ring-[3px] ring-white">
<iconify-icon icon="lucide:hash" width="20"></iconify-icon>
</div>
<span className="text-[9px] font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded-sm border border-slate-200 uppercase tracking-wide">Slack</span>
</div>

<div className="absolute top-[100px] left-[610px] flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer group/node">
<div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20 ring-[3px] ring-white">
<iconify-icon icon="lucide:check-circle" width="20"></iconify-icon>
</div>
</div>

<div className="absolute top-[260px] left-[610px] flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer group/node">
<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 ring-[3px] ring-white">
<iconify-icon icon="lucide:database" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="h-16 bg-white border-t border-slate-200 flex items-center justify-between px-6 shrink-0 z-10">
<div className="flex items-center gap-4">
<button className="bg-[#632a8e] hover:bg-[#522176] text-white pl-4 pr-5 py-2.5 rounded-md font-semibold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-purple-900/20 hover:scale-105 active:scale-95 duration-200">
<iconify-icon icon="lucide:play" width="16"></iconify-icon> Run once
                                </button>
<div className="hidden sm:flex items-center gap-3 px-3 py-1.5 bg-slate-100 rounded-full border border-slate-200">
<div className="w-9 h-5 bg-slate-300 rounded-full relative cursor-pointer"><div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div></div>
<span className="text-xs font-medium text-slate-500">Every 15 minutes</span>
</div>
</div>
<div className="flex items-center gap-5 text-slate-400">
<button className="hover:text-[#632a8e] transition-colors"><iconify-icon icon="lucide:save" width="20"></iconify-icon></button>
<button className="hover:text-[#632a8e] transition-colors"><iconify-icon icon="lucide:wrench" width="20"></iconify-icon></button>
<button className="hover:text-[#632a8e] transition-colors"><iconify-icon icon="lucide:settings-2" width="20"></iconify-icon></button>
<div className="w-px h-6 bg-slate-200"></div>
<button className="w-9 h-9 rounded-full bg-[#632a8e] text-white flex items-center justify-center shadow-md shadow-purple-900/10 hover:bg-[#522176] transition-colors"><iconify-icon icon="lucide:help-circle" width="20"></iconify-icon></button>
</div>
</div>
</div>
</div>
<div className="bg-zinc-900/40 border border-white/5 p-6 rounded-xl backdrop-blur-sm mb-20">
<div className="flex items-center justify-between">
<div>
<h3 className="text-white font-medium">Automated CRM &amp; Outreach</h3>
<p className="text-sm text-zinc-400 mt-1">Integrated: Airtable, OpenAI, Gmail, Slack</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">Live Production</span>
</div>
</div>
</div>

<h3 className="text-2xl font-medium text-white mb-6">Voice Agent Workflow</h3>
<div className="w-full h-[650px] bg-[#F9FAFB] rounded-xl shadow-2xl border border-white/10 overflow-hidden flex flex-row text-slate-600 font-sans relative select-none ring-1 ring-zinc-800">

<div className="w-14 bg-[#1C1C1C] flex flex-col items-center py-4 gap-6 shrink-0 z-20 border-r border-white/5">
<div className="text-white hover:text-blue-400 cursor-pointer transition-colors mb-4"><iconify-icon icon="lucide:aperture" width="24"></iconify-icon></div>
<div className="text-zinc-500 hover:text-white cursor-pointer transition-colors"><iconify-icon icon="lucide:git-branch" width="20"></iconify-icon></div>
<div className="text-zinc-500 hover:text-white cursor-pointer transition-colors"><iconify-icon icon="lucide:brain-circuit" width="20"></iconify-icon></div>
<div className="text-zinc-500 hover:text-white cursor-pointer transition-colors"><iconify-icon icon="lucide:box" width="20"></iconify-icon></div>
<div className="text-zinc-500 hover:text-white cursor-pointer transition-colors"><iconify-icon icon="lucide:message-square" width="20"></iconify-icon></div>
<div className="text-zinc-500 hover:text-white cursor-pointer transition-colors"><iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon></div>
<div className="mt-auto text-zinc-500 hover:text-white cursor-pointer transition-colors"><iconify-icon icon="lucide:settings" width="20"></iconify-icon></div>
</div>

<div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-8 shrink-0 z-20">
<div className="flex flex-col items-center gap-1 group cursor-pointer">
<div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors"><iconify-icon icon="lucide:bot" width="20"></iconify-icon></div>
<span className="text-[10px] font-medium text-slate-600">Agent</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer opacity-60 hover:opacity-100">
<div className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><iconify-icon icon="lucide:mic" width="20"></iconify-icon></div>
<span className="text-[10px] font-medium text-slate-500">Talk</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer opacity-60 hover:opacity-100">
<div className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><iconify-icon icon="lucide:ear" width="20"></iconify-icon></div>
<span className="text-[10px] font-medium text-slate-500">Listen</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer opacity-60 hover:opacity-100">
<div className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><iconify-icon icon="lucide:split" width="20"></iconify-icon></div>
<span className="text-[10px] font-medium text-slate-500">Logic</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer opacity-60 hover:opacity-100">
<div className="p-2 rounded-lg hover:bg-gray-100 transition-colors"><iconify-icon icon="lucide:code-2" width="20"></iconify-icon></div>
<span className="text-[10px] font-medium text-slate-500">Dev</span>
</div>
</div>

<div className="flex-1 flex flex-col relative bg-[#F4F4F5]">

<div className="h-16 bg-white border-b border-gray-200 flex justify-between px-6 items-center z-20 shrink-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-200"><iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon></div>
<div className="text-sm font-semibold text-slate-800">Competitor Analysis Bot</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-slate-600 rounded-md text-xs font-medium transition-colors border border-gray-200">
<iconify-icon icon="lucide:share-2" width="14"></iconify-icon> Share
                                </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-slate-600 rounded-md text-xs font-medium transition-colors border border-gray-200">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon> Call
                                </button>
<button className="flex items-center gap-2 px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-xs font-medium transition-colors shadow-sm shadow-blue-500/20">
<iconify-icon icon="lucide:play" width="14"></iconify-icon> Run
                                </button>
<button className="flex items-center gap-2 px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md text-xs font-medium transition-colors shadow-sm shadow-green-600/20">
<iconify-icon icon="lucide:zap" width="14"></iconify-icon> Publish
                                </button>
</div>
</div>

<div className="flex-1 overflow-auto relative custom-scrollbar cursor-grab active:cursor-grabbing">
<div className="w-[2000px] h-[800px] relative">

<div className="absolute inset-0 opacity-40 pointer-events-none" style={{backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" fill="none">

<path d="M90,320 L130,320" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M330,320 L370,320" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M570,290 C600,290 600,320 630,320" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M570,350 L600,350" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M830,320 L870,320" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M1070,320 L1110,320" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M1310,320 L1350,320" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M1550,320 L1590,320" stroke="#cbd5e1" strokeWidth="2"></path>

<path d="M1790,320 C1820,320 1820,380 1850,380" stroke="#cbd5e1" strokeWidth="2"></path>
</svg>

<div className="absolute top-[305px] left-[30px] flex items-center justify-center bg-green-600 text-white rounded-full px-4 py-1.5 shadow-md shadow-green-600/20 hover:scale-105 transition-transform">
<iconify-icon className="mr-2" icon="lucide:zap" width="14"></iconify-icon>
<span className="text-xs font-semibold">Start</span>
<div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
</div>

<div className="absolute top-[270px] left-[130px] w-[200px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden group">
<div className="h-8 bg-gray-50 border-b border-gray-100 px-3 flex items-center justify-between">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Welcome!</span>
<iconify-icon className="text-gray-400" icon="lucide:more-horizontal" width="14"></iconify-icon>
</div>
<div className="p-3 text-xs text-slate-600 leading-relaxed">
                                        Hi! Want a free website + competitor analysis for your business?
                                    </div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
</div>

<div className="absolute top-[260px] left-[370px] w-[200px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
<div className="h-8 bg-blue-50/50 border-b border-gray-100 px-3 flex items-center justify-between">
<span className="text-[10px] font-semibold text-blue-500 uppercase tracking-wide">Logic Split</span>
</div>
<div className="p-2 space-y-2">
<div className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-100 text-xs">
<span className="flex items-center gap-2"><iconify-icon icon="lucide:git-merge" width="12"></iconify-icon> AffirmIntent</span>
<div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
</div>
<div className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-100 text-xs">
<span className="flex items-center gap-2 text-gray-400"><iconify-icon icon="lucide:x-circle" width="12"></iconify-icon> No Interest</span>
<div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
</div>
</div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
</div>

<div className="absolute top-[270px] left-[630px] w-[200px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
<div className="h-8 bg-gray-50 border-b border-gray-100 px-3 flex items-center justify-between">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Question</span>
</div>
<div className="p-3 text-xs text-slate-600">
                                        Great! Can you share your website URL so I can analyze it?
                                    </div>
<div className="px-3 pb-3">
<div className="text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-2">
<iconify-icon icon="lucide:save" width="10"></iconify-icon> Save to: {website}
                                        </div>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
</div>

<div className="absolute top-[270px] left-[870px] w-[200px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
<div className="h-8 bg-gray-50 border-b border-gray-100 px-3 flex items-center justify-between">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Question</span>
</div>
<div className="p-3 text-xs text-slate-600">
                                        Who are your main competitors? You can list 1-3.
                                    </div>
<div className="px-3 pb-3">
<div className="text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-2">
<iconify-icon icon="lucide:save" width="10"></iconify-icon> Save to: {competitors}
                                        </div>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
</div>

<div className="absolute top-[270px] left-[1110px] w-[200px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
<div className="h-8 bg-gray-50 border-b border-gray-100 px-3 flex items-center justify-between">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Question</span>
</div>
<div className="p-3 text-xs text-slate-600">
                                        What are your main goals or challenges right now?
                                    </div>
<div className="px-3 pb-3">
<div className="text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-2">
<iconify-icon icon="lucide:save" width="10"></iconify-icon> Save to: {goals}
                                        </div>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
</div>

<div className="absolute top-[270px] left-[1350px] w-[200px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
<div className="h-8 bg-gray-50 border-b border-gray-100 px-3 flex items-center justify-between">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Question</span>
</div>
<div className="p-3 text-xs text-slate-600">
                                        Thanks! What email should I send your free analysis to?
                                    </div>
<div className="px-3 pb-3">
<div className="text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-2">
<iconify-icon icon="lucide:save" width="10"></iconify-icon> Save to: {email}
                                        </div>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
</div>

<div className="absolute top-[270px] left-[1590px] w-[200px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
<div className="h-8 bg-purple-50 border-b border-gray-100 px-3 flex items-center justify-between">
<span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wide">API Action</span>
</div>
<div className="p-3 text-xs text-slate-600">
                                        One sec while I generate that report...
                                    </div>
<div className="px-3 pb-3">
<div className="text-[10px] text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100 flex items-center gap-2 truncate">
<iconify-icon icon="lucide:webhook" width="10"></iconify-icon> POST api.openai.com/v1...
                                        </div>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
</div>

<div className="absolute top-[350px] left-[1850px] w-[180px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
<div className="h-8 bg-red-50 border-b border-gray-100 px-3 flex items-center justify-between">
<span className="text-[10px] font-semibold text-red-600 uppercase tracking-wide">Gmail</span>
<iconify-icon className="text-red-400" icon="lucide:mail" width="14"></iconify-icon>
</div>
<div className="p-3 flex items-center gap-3">
<div className="h-8 w-8 rounded bg-red-100 flex items-center justify-center text-red-500">
<iconify-icon icon="lucide:send" width="16"></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-700">Sent Report</div>
</div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-white border border-gray-300 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
<div className="bg-zinc-900/40 border border-white/5 p-6 rounded-xl backdrop-blur-sm mt-6">
<div className="flex items-center justify-between">
<div>
<h3 className="text-white font-medium">Voice Conversational Agent</h3>
<p className="text-sm text-zinc-400 mt-1">Platform: Vapi / Retell AI integration pattern</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20">Beta</span>
</div>
</div>
</div>
</div>
</div>

<div className="page-section min-h-screen" id="solutions">
<div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-20">
<button className="mb-8 flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors" onclick="switchPage('home')">
<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon> Back to Home
                </button>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Our Services</h2>
<p className="text-zinc-400 max-w-2xl mb-12">We offer tailored solutions to integrate artificial intelligence into your business infrastructure.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

<div className="p-8 rounded-2xl bg-zinc-900/20 border border-white/10 hover:bg-zinc-900/40 transition-all flex flex-col">
<div className="h-10 w-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="lucide:rocket" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Custom Agent Development</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-grow">
                            We build bespoke AI agents tailored to your specific business logic. From customer support bots to internal research assistants.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="lucide:check" width="14"></iconify-icon> GPT-4 &amp; Claude Integration
                            </li>
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="lucide:check" width="14"></iconify-icon> Custom Knowledge Base (RAG)
                            </li>
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="lucide:check" width="14"></iconify-icon> Secure API Deployment
                            </li>
</ul>
<button className="w-full py-3 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-semibold hover:bg-blue-600/20 transition-colors">$1,000 - $5,000</button>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/20 border border-white/10 hover:bg-zinc-900/40 transition-all flex flex-col">
<div className="h-10 w-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-6">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Workforce Training</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-grow">
                            Don't let your team fall behind. We provide hands-on workshops to teach your employees how to leverage AI tools effectively and safely.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-purple-500" icon="lucide:check" width="14"></iconify-icon> Prompt Engineering Workshops
                            </li>
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-purple-500" icon="lucide:check" width="14"></iconify-icon> AI Safety &amp; Ethics
                            </li>
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-purple-500" icon="lucide:check" width="14"></iconify-icon> Tool Selection Strategy
                            </li>
</ul>
<button className="w-full py-3 rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-400 text-sm font-semibold hover:bg-purple-600/20 transition-colors">$250 - $500</button>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/20 border border-white/10 hover:bg-zinc-900/40 transition-all flex flex-col">
<div className="h-10 w-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon icon="lucide:briefcase" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Strategic Consulting</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-grow">
                            Expert guidance on implementation strategy. We audit your infrastructure and provide a roadmap for scalable automation.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-indigo-500" icon="lucide:check" width="14"></iconify-icon> Infrastructure Audit
                            </li>
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-indigo-500" icon="lucide:check" width="14"></iconify-icon> Security Compliance
                            </li>
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-indigo-500" icon="lucide:check" width="14"></iconify-icon> Scalability Roadmap
                            </li>
</ul>
<button className="w-full py-3 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold hover:bg-indigo-600/20 transition-colors">$500+</button>
</div>
</div>
</div>
</div>

<div className="page-section min-h-screen" id="education">
<div className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-20">
<button className="mb-8 flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors" onclick="switchPage('home')">
<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon> Back to Home
                </button>
<div className="prose prose-invert prose-lg max-w-none">
<span className="text-blue-400 font-medium text-sm tracking-widest uppercase">Learning Hub</span>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mt-4 mb-8">Understanding AI Systems</h1>
<p className="text-xl text-zinc-300 font-light leading-relaxed mb-12">
                        Before building agents, one must understand the fundamental architecture of modern autonomous systems. This page outlines the key concepts we cover in our extensive curriculum.
                    </p>
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 mb-12">
<h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="lucide:bot"></iconify-icon>
                            What is an AI Agent?
                        </h3>
<p className="text-zinc-400 text-sm leading-7">
                            Unlike a standard chatbot that simply responds to text, an <strong>AI Agent</strong> is a system designed to perceive its environment, reason about how to achieve a goal, and execute actions to reach that goal. It uses an LLM (Large Language Model) as its "brain" but is equipped with "arms and legs" in the form of tools (API connections, web browsers, code executors).
                        </p>
</div>
<h3 className="text-2xl text-white font-medium mb-4">The Automation Hierarchy</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400">1</div>
</div>
<div>
<h4 className="text-white font-medium">Scripted Automation (Zapier/Make)</h4>
<p className="text-zinc-400 text-sm mt-1">Linear, "If This Then That" logic. Rigid but reliable for simple data transfer.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400">2</div>
</div>
<div>
<h4 className="text-white font-medium">Cognitive Automation</h4>
<p className="text-zinc-400 text-sm mt-1">Injecting LLMs into scripted workflows to summarize, classify, or draft content within a fixed flow.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400">3</div>
</div>
<div>
<h4 className="text-white font-medium">Autonomous Agents</h4>
<p className="text-zinc-400 text-sm mt-1">Systems that determine their own steps to solve a vague problem (e.g., "Research this company and write a report").</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section min-h-screen" id="about">
<div className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-20">
<button className="mb-8 flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors" onclick="switchPage('home')">
<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon> Back to Home
                </button>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">About the Agency</h1>
<p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                    We are a collective of engineers, educators, and futurists dedicated to democratizing access to autonomous technology.
                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
<div className="aspect-square rounded-2xl bg-zinc-800 relative overflow-hidden group border border-white/5">
<img alt="Agency Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-2xl text-white font-medium mb-4">Our Mission</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            The technological landscape is shifting faster than traditional education can keep up. We exist to close that gap. Our agency doesn't just build tools for you; we empower your organization to own the technology.
                        </p>
<div className="grid grid-cols-2 gap-6">
<div>
<div className="text-3xl font-semibold text-white">50+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Enterprise Clients</div>
</div>
<div>
<div className="text-3xl font-semibold text-white">12k+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Hours Automated</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="py-24 px-6 relative z-10 border-t border-white/5 bg-black">
<div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/5 rounded-3xl p-12 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Ready to future proof your business?</h2>
<p className="text-zinc-400 mb-8 max-w-2xl mx-auto">Join the 1000s of businesses automating their future today.</p>
<p className="text-xs text-zinc-500 mt-4">No spam. Unsubscribe anytime.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6 relative z-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-zinc-800 rounded flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:bot" width="14"></iconify-icon>
</div>
<span className="text-zinc-400 font-medium text-sm">AI Education Agency</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<p className="text-xs text-zinc-600">© 2024 AI Education Agency. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
