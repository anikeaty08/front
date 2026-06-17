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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/15 blur-[120px] rounded-full"></div>

<div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>
<div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] bg-orange-500/5 blur-[100px] rounded-full"></div>

<div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
<div className="w-3 h-3 bg-white rounded-full"></div>
</div>
<span className="text-xl font-semibold tracking-tight text-white">Fusion AI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#">About us</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Integration</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">Waitlist</a>
</div>
<div>
<a className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white border border-slate-700 rounded-full hover:bg-slate-800 transition-colors" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>
<main className="pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-slate-300 mb-8">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                SUPERCHARGE YOUR AI WORKFLOWS
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl mb-6 leading-tight">
                Automate Your<br/>AI Workflows<br/>with AI Agent
            </h1>
<p className="text-lg text-slate-400 max-w-2xl mb-10">
                Connect your favorite apps, set triggers and watch AI handle the rest - no coding required. Get up and running in minutes.
            </p>
<div className="flex items-center gap-4 mb-20">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 border border-slate-700 rounded-full hover:bg-slate-800 transition-colors" href="#">
                    Get Started - Free
                </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">
                    View Pricing
                </a>
</div>

<div className="relative w-full max-w-5xl mx-auto rounded-2xl border border-slate-800/80 bg-slate-950 shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.03] before:to-transparent before:pointer-events-none">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 w-[480px] z-20 rounded-xl border border-slate-700/80 bg-slate-900/95 backdrop-blur shadow-2xl p-4">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/50 text-sm font-medium">
<span>GPT 4.5</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
</div>
</div>
<div className="relative mb-4">
<input className="w-full bg-transparent text-lg text-white outline-none border-none placeholder-slate-500" readonly="" type="text" value="Generate weekly sales summary report |"/>
</div>
<div className="flex items-center justify-between pt-2 border-t border-slate-800">
<div className="flex gap-4 text-xs font-medium text-slate-400">
<span className="text-white">Chat</span>
<span>Launch Workflow</span>
<span>Data Analysis</span>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-600/20 text-blue-400 text-xs font-medium hover:bg-blue-600/30">
<i className="w-3 h-3" data-lucide="send"></i> Send
                        </button>
</div>
</div>

<div className="flex h-[400px] opacity-60">

<div className="w-64 border-r border-slate-800/60 p-4 flex flex-col gap-6">
<div className="flex gap-2 mb-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-white px-2">
<div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full"></div></div>
                            Fusion AI
                        </div>
<button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg border border-slate-700 bg-slate-800/50 text-sm font-medium text-white hover:bg-slate-800">
<i className="w-4 h-4" data-lucide="plus"></i> New Chat
                        </button>
<div className="flex flex-col gap-1 mt-4">
<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/30 text-xs font-medium text-slate-300"><i className="w-4 h-4" data-lucide="message-square"></i> Ethics of AI</div>
<div className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-500"><i className="w-4 h-4" data-lucide="message-square"></i> AI Communication Tool</div>
<div className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-500"><i className="w-4 h-4" data-lucide="message-square"></i> Start a conversation</div>
</div>
</div>

<div className="flex-1 bg-[#0a0f1c]"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent z-30 pointer-events-none"></div>
</section>

<section className="mt-16 mb-32 border-t border-b border-slate-800/50 py-10 bg-slate-900/20">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<p className="text-sm font-medium text-slate-400 mb-8">Trusted by 150,000+ users worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><i className="w-6 h-6" data-lucide="box"></i> Business</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><i className="w-6 h-6" data-lucide="cloud"></i> application</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><i className="w-6 h-6" data-lucide="trending-up"></i> startup</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><i className="w-6 h-6" data-lucide="layers"></i> Logoipsum</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight"><i className="w-6 h-6" data-lucide="hexagon"></i> Logoipsum</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 relative">
<div className="flex flex-col items-center text-center mb-16">
<div className="text-xs font-medium tracking-wider text-slate-500 uppercase mb-4">AI-Driven Features</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl mb-6">
                    Build, scale and manage entire AI workforce
                </h2>
<p className="text-lg text-slate-400 max-w-xl">
                    Fusion AI helps you tackle data bottlenecks, streamline analysis, and make smarter decisions with ease.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 p-8 overflow-hidden hover:bg-slate-900/60 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-48 mb-8 relative flex items-center justify-center">

<div className="absolute w-40 h-40 bg-blue-600/10 rounded-full blur-2xl"></div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 shadow-lg"><i className="w-5 h-5 text-blue-400" data-lucide="slack"></i></div>
<div className="w-8 border-t border-dashed border-slate-600"></div>
<div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30 shadow-lg shadow-blue-500/10"><i className="w-6 h-6 text-blue-400" data-lucide="zap"></i></div>
<div className="w-8 border-t border-dashed border-slate-600"></div>
<div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 shadow-lg"><i className="w-5 h-5 text-green-400" data-lucide="mail"></i></div>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Seamless Integrations</h3>
<p className="text-slate-400 text-base">Integrate Slack, HubSpot, Zendesk &amp; more—automate data flow instantly.</p>
</div>

<div className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 p-8 overflow-hidden hover:bg-slate-900/60 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-48 mb-8 relative flex items-center justify-center">
<div className="absolute right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl"></div>
<div className="w-full max-w-sm rounded-xl border border-slate-700 bg-slate-800/80 p-4 shadow-xl relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center"><i className="w-4 h-4 text-slate-300" data-lucide="user"></i></div>
<div className="text-sm font-medium text-slate-300 bg-slate-900/50 px-3 py-1.5 rounded-lg">Create a new customer record for John Smith</div>
</div>
<div className="ml-11 border border-slate-700 rounded-lg bg-slate-900/80 p-3 text-sm">
<div className="text-xs text-slate-500 mb-2 font-medium">AI set:</div>
<div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
<span className="text-slate-400">Customer</span>
<span className="text-orange-400 font-medium">#C-1024 added to CRM</span>
</div>
<div className="flex justify-between border-b border-slate-800 pb-2 mb-2">
<span className="text-slate-400">Assigned to</span>
<span className="text-white">Sarah Lee</span>
</div>
<div className="text-slate-400 text-xs">Welcome email queued for May 28, 10:00 AM</div>
</div>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Conversational Actions</h3>
<p className="text-slate-400 text-base">Create records, assign tasks &amp; queue emails with a simple prompt in seconds flat.</p>
</div>

<div className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 p-8 overflow-hidden hover:bg-slate-900/60 transition-colors">
<div className="h-48 mb-8 relative flex items-center justify-center">
<div className="absolute w-full h-full bg-gradient-to-r from-blue-900/10 to-transparent blur-xl"></div>
<div className="relative z-10 flex items-center w-full justify-between max-w-[280px]">
<div className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">Agent</div>
<div className="w-12 border-t border-slate-600 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-slate-600"></div></div>
<div className="w-10 h-10 rounded-full border border-blue-500/30 bg-blue-600/20 flex items-center justify-center text-blue-400"><i className="w-5 h-5" data-lucide="git-merge"></i></div>
<div className="w-8 border-t border-slate-600"></div>
<div className="flex flex-col gap-2">
<div className="px-4 py-1.5 rounded-lg border border-orange-500/30 bg-slate-800 text-xs font-medium text-slate-300">Create a new customer</div>
<div className="px-4 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-xs font-medium text-slate-300">Email Outreach</div>
<div className="px-4 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-xs font-medium text-slate-300">Customer Follow-Up</div>
</div>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Visual Workflow Designer</h3>
<p className="text-slate-400 text-base">Drag &amp; drop AI actions to build workflows visually—no coding required.</p>
</div>

<div className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 p-8 overflow-hidden hover:bg-slate-900/60 transition-colors">
<div className="absolute right-0 bottom-0 w-64 h-64 bg-orange-600/20 blur-3xl rounded-full"></div>
<div className="h-48 mb-8 relative flex items-center justify-center flex-col gap-3">
<div className="w-64 px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/80 shadow-lg flex items-center gap-3 relative z-10">
<i className="w-4 h-4 text-orange-400" data-lucide="zap"></i>
<span className="text-sm font-medium text-slate-200">Workflow trigger</span>
</div>
<div className="w-56 px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/60 shadow flex items-center gap-3 relative z-10 opacity-80">
<i className="w-4 h-4 text-slate-400" data-lucide="mail"></i>
<span className="text-sm font-medium text-slate-300">Email</span>
</div>
<div className="w-48 px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/40 shadow flex items-center gap-3 relative z-10 opacity-60">
<i className="w-4 h-4 text-slate-500" data-lucide="message-square"></i>
<span className="text-sm font-medium text-slate-400">SMS</span>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Multi-Channel Automation</h3>
<p className="text-slate-400 text-base">Trigger email, SMS &amp; chat messages automatically on schedule.</p>
</div>
</div>
</section>

<section className="mb-32 relative">
<div className="text-center mb-12">
<h2 className="text-6xl md:text-8xl font-semibold tracking-tight text-white flex items-center justify-center gap-4">
<div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-slate-800 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-transparent">
<div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
</div>
                    AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-orange-500">Powered</span>
</h2>
</div>
<div className="max-w-5xl mx-auto px-6 relative">

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-sm shadow-2xl overflow-hidden flex h-[600px] relative z-20">

<div className="w-64 border-r border-slate-800/60 p-4 flex flex-col hidden md:flex bg-slate-950">
<div className="flex gap-2 mb-6">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-white px-2 mb-6">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center"><div className="w-2.5 h-2.5 bg-white rounded-full"></div></div>
                            Fusion AI <i className="w-4 h-4 ml-auto text-slate-500" data-lucide="chevrons-up-down"></i>
</div>
<button className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg border border-slate-700 bg-slate-800/50 text-sm font-medium text-white hover:bg-slate-800 mb-4">
<i className="w-4 h-4" data-lucide="plus"></i> New Chat
                        </button>
<div className="flex flex-col gap-1 flex-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800/30"><i className="w-4 h-4" data-lucide="mail"></i> Email Outreach</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800/30"><i className="w-4 h-4" data-lucide="users"></i> Customer Follow-Up</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800/30"><i className="w-4 h-4" data-lucide="bar-chart-2"></i> Data Analysis</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800/30"><i className="w-4 h-4" data-lucide="calendar"></i> Meeting Scheduler</div>
</div>
<div className="mt-auto border-t border-slate-800/60 pt-4 flex flex-col gap-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400"><i className="w-4 h-4" data-lucide="user"></i> My account</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400"><i className="w-4 h-4" data-lucide="sun"></i> Light mode</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400"><i className="w-4 h-4" data-lucide="log-out"></i> Log out</div>
</div>
</div>

<div className="flex-1 flex flex-col relative bg-[#050914] overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none"></div>

<div className="flex-1 p-8 overflow-y-auto flex flex-col gap-6 relative z-10">

<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0"><div className="w-3 h-3 bg-blue-400 rounded-full"></div></div>
<div className="bg-slate-800/50 border border-slate-700 rounded-2xl rounded-tl-sm px-5 py-3 text-sm text-slate-300 max-w-md">
                                     Hey, can you generate a customer follow-up list
                                 </div>
</div>

<div className="flex items-start gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0"><i className="w-4 h-4 text-slate-300" data-lucide="user"></i></div>
<div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl rounded-tr-sm px-5 py-3 text-sm text-slate-300 max-w-md">
                                     Hey Mark - Done—compiled 60 leads and emailed the list to you. Ready for your outreach!
                                 </div>
</div>

<div className="flex items-start gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0"><i className="w-4 h-4 text-slate-300" data-lucide="user"></i></div>
<div className="bg-slate-800/50 border border-slate-700 rounded-2xl rounded-tr-sm px-5 py-3 text-sm text-slate-300 max-w-sm">
                                     That's awesome, thanks!
                                 </div>
</div>

<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0"><div className="w-3 h-3 bg-blue-400 rounded-full"></div></div>
<div className="bg-slate-800/50 border border-slate-700 rounded-2xl rounded-tl-sm px-5 py-3 text-sm text-slate-300 max-w-sm">
                                     Want me to draft a quick template for your outreach?
                                 </div>
</div>

<div className="flex items-start gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0"><i className="w-4 h-4 text-slate-300" data-lucide="user"></i></div>
<div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl rounded-tr-sm px-5 py-3 text-sm text-slate-300 max-w-sm">
                                     Yes please—that'd be a huge help!
                                 </div>
</div>
</div>

<div className="p-6 relative z-10">
<div className="w-full rounded-xl border border-slate-700/80 bg-slate-900/90 backdrop-blur shadow-lg p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/50 text-xs font-medium">
<span>GPT 4.5</span>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="flex gap-1">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
</div>
<div className="relative mb-3">
<input className="w-full bg-transparent text-base text-white outline-none border-none placeholder-slate-500" readonly="" type="text" value="Generate weekly sa |"/>
</div>
<div className="flex items-center justify-between pt-2 border-t border-slate-800">
<div className="flex gap-4 text-xs font-medium text-slate-400 hidden sm:flex">
<span className="text-white">Chat</span>
<span>Launch Workflow</span>
<span>Data Analysis</span>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-600/20 text-blue-400 text-xs font-medium ml-auto sm:ml-0">
<i className="w-3 h-3" data-lucide="send"></i> Send
                                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap justify-center gap-4 mt-8 relative z-20">
<div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm min-w-[120px] hover:border-blue-500/30 transition-colors cursor-pointer">
<i className="w-6 h-6 text-slate-400" data-lucide="headphones"></i>
<span className="text-xs font-medium text-slate-400">Customer Support</span>
</div>
<div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-blue-500/30 bg-blue-900/10 backdrop-blur-sm min-w-[120px] cursor-pointer shadow-[0_0_15px_rgba(59,130,246,0.1)]">
<i className="w-6 h-6 text-blue-400" data-lucide="activity"></i>
<span className="text-xs font-medium text-blue-400">Healthcare</span>
</div>
<div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm min-w-[120px] hover:border-blue-500/30 transition-colors cursor-pointer">
<i className="w-6 h-6 text-slate-400" data-lucide="pie-chart"></i>
<span className="text-xs font-medium text-slate-400">Marketing</span>
</div>
<div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm min-w-[120px] hover:border-blue-500/30 transition-colors cursor-pointer">
<i className="w-6 h-6 text-slate-400" data-lucide="book-open"></i>
<span className="text-xs font-medium text-slate-400">Education</span>
</div>
<div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm min-w-[120px] hover:border-blue-500/30 transition-colors cursor-pointer">
<i className="w-6 h-6 text-slate-400" data-lucide="dollar-sign"></i>
<span className="text-xs font-medium text-slate-400">Finance</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="flex flex-col items-center text-center mb-24">
<div className="text-xs font-medium tracking-wider text-slate-500 uppercase mb-4">AI-Driven Features</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl mb-6">
                    Build, scale and manage entire AI workforce
                </h2>
<p className="text-lg text-slate-400 max-w-xl">
                    Fluence AI helps you tackle data bottlenecks, streamline analysis, and make smarter decisions with ease.
                </p>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
<div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">Instant, One-Command Actions</h3>
<p className="text-lg text-slate-400 mb-8">
                        Type an action once—Fusion AI executes it across Slack, WhatsApp, HubSpot, Calendar, and more.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><i className="w-3 h-3 text-blue-400" data-lucide="check"></i></div>
                            Draft &amp; send multi-channel messages
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><i className="w-3 h-3 text-blue-400" data-lucide="check"></i></div>
                            Create CRM contacts on the fly
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><i className="w-3 h-3 text-blue-400" data-lucide="check"></i></div>
                            Cancel meetings or raise issues instantly
                        </li>
</ul>
</div>
<div className="relative h-[400px] rounded-2xl border border-slate-800/80 bg-slate-900/30 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-orange-900/10 blur-xl"></div>

<div className="relative z-10 w-72 rounded-xl border border-slate-700 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
<div className="p-3 border-b border-slate-800 text-xs font-medium text-slate-400">Actions</div>
<div className="p-2 flex flex-col gap-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800/50 text-sm text-white">
<i className="w-4 h-4 text-blue-400" data-lucide="mail"></i> Create Email Draft
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800/30 text-sm text-slate-300 transition-colors">
<i className="w-4 h-4 text-green-400" data-lucide="message-square"></i> Send WhatsApp
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800/30 text-sm text-slate-300 transition-colors">
<i className="w-4 h-4 text-orange-400" data-lucide="users"></i> Create Hubspot Contact
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800/30 text-sm text-slate-300 transition-colors">
<i className="w-4 h-4 text-red-400" data-lucide="calendar-x"></i> Cancel Meeting
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800/30 text-sm text-slate-300 transition-colors">
<i className="w-4 h-4 text-purple-400" data-lucide="alert-circle"></i> Create Issue
                            </div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
<div className="order-2 lg:order-1 relative h-[400px] rounded-2xl border border-slate-800/80 bg-slate-900/30 overflow-hidden flex items-center justify-center">
<div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/10 to-transparent"></div>
<div className="relative z-10 flex flex-col gap-4 w-64">

<div className="px-6 py-3 rounded-full border border-orange-500/30 bg-slate-900/80 text-center text-sm font-medium text-slate-200 shadow-[0_0_15px_rgba(249,115,22,0.1)] relative">
                             AI Analyst
                             <div className="absolute bottom-[-17px] left-1/2 -translate-x-1/2 w-[1px] h-4 bg-slate-600"></div>
</div>
<div className="px-6 py-3 rounded-full border border-slate-700 bg-slate-900/80 text-center text-sm font-medium text-slate-300 relative">
                             Workflows
                             <div className="absolute bottom-[-17px] left-1/2 -translate-x-1/2 w-[1px] h-4 bg-slate-600"></div>
</div>
<div className="px-6 py-3 rounded-full border border-slate-700 bg-slate-900/80 text-center text-sm font-medium text-slate-300 relative">
                             Data Summary
                             <div className="absolute bottom-[-17px] left-1/2 -translate-x-1/2 w-[1px] h-4 bg-slate-600"></div>
</div>
<div className="px-6 py-3 rounded-full border border-blue-500/30 bg-slate-900/80 text-center text-sm font-medium text-slate-200 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                             Ask Questions
                         </div>
</div>
</div>
<div className="order-1 lg:order-2">
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">No-Code Workflow Builder</h3>
<p className="text-lg text-slate-400 mb-8">
                        Design complex, multi-step automations with drag-and-drop ease—no coding required.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><i className="w-3 h-3 text-blue-400" data-lucide="check"></i></div>
                            Visual workflow canvas
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><i className="w-3 h-3 text-blue-400" data-lucide="check"></i></div>
                            Pre-built action blocks
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><i className="w-3 h-3 text-blue-400" data-lucide="check"></i></div>
                            Conditional logic &amp; branching
                        </li>
</ul>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">Natural-Language Interaction</h3>
<p className="text-lg text-slate-400 mb-8">
                        Chat with your AI agents to run tasks, query data, or generate content—just type what you need.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><i className="w-3 h-3 text-blue-400" data-lucide="check"></i></div>
                            Context-aware Q&amp;A
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><i className="w-3 h-3 text-blue-400" data-lucide="check"></i></div>
                            Instant task execution
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><i className="w-3 h-3 text-blue-400" data-lucide="check"></i></div>
                            Follow-up action chaining
                        </li>
</ul>
</div>
<div className="relative h-[400px] rounded-2xl border border-slate-800/80 bg-slate-900/30 overflow-hidden flex flex-col justify-end p-8">
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

<div className="relative z-10 flex flex-col gap-4 w-full max-w-sm ml-auto">
<div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-slate-300 self-end max-w-[90%]">
                            Sure. I will draft the email workflow now.
                        </div>
<div className="flex items-center gap-2 self-start w-full">
<div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 border border-blue-500/30"><div className="w-3 h-3 bg-blue-400 rounded-full"></div></div>
<div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-white w-full">
                                Please schedule it for tomorrow
                            </div>
</div>
<div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-slate-300 self-end max-w-[90%]">
                            Done! Anything else?
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-900/20 border-t border-b border-slate-800/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="text-xs font-medium tracking-wider text-slate-500 uppercase mb-4">PRODUCT FEATURES</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl mx-auto">
                        Build Workflows, Track Insights,<br/>Connect Tools
                    </h2>
</div>

<div className="rounded-2xl border border-slate-800/80 bg-slate-950 shadow-2xl overflow-hidden mb-16">
<div className="flex h-[500px]">

<div className="w-64 border-r border-slate-800/60 p-4 bg-slate-950 hidden lg:block">
<div className="flex items-center gap-2 text-sm font-medium text-white px-2 mb-8">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center"><div className="w-2.5 h-2.5 bg-white rounded-full"></div></div>
                                Fusion AI
                            </div>
<div className="text-xs font-medium text-slate-500 mb-3 px-2">Triggers</div>
<div className="flex flex-col gap-1 mb-6">
<div className="px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-xs text-white flex gap-2 items-center"><i className="w-3 h-3 text-slate-400" data-lucide="mail"></i> New Email</div>
<div className="px-3 py-2 rounded-lg text-xs text-slate-400 flex gap-2 items-center"><i className="w-3 h-3" data-lucide="message-square"></i> New Chat</div>
<div className="px-3 py-2 rounded-lg text-xs text-slate-400 flex gap-2 items-center"><i className="w-3 h-3" data-lucide="clock"></i> Time Delay</div>
</div>
<div className="text-xs font-medium text-slate-500 mb-3 px-2">Actions</div>
<div className="flex flex-col gap-1">
<div className="px-3 py-2 rounded-lg text-xs text-slate-400 flex gap-2 items-center"><i className="w-3 h-3" data-lucide="file-text"></i> Send Template</div>
<div className="px-3 py-2 rounded-lg text-xs text-slate-400 flex gap-2 items-center"><i className="w-3 h-3" data-lucide="user-plus"></i> Create Record</div>
</div>
</div>

<div className="flex-1 bg-[#050914] relative overflow-hidden p-8 border-t-[40px] border-slate-900 before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]">

<div className="absolute top-[-40px] left-0 right-0 h-[40px] flex items-center justify-between px-6 border-b border-slate-800">
<div className="flex items-center gap-4 text-sm font-medium">
<span className="text-white">Workflow Canvas</span>
<span className="text-slate-500">Build your flow by connecting nodes</span>
</div>
<button className="px-3 py-1 rounded bg-slate-800 text-xs text-slate-300 flex items-center gap-1 hover:bg-slate-700"><i className="w-3 h-3" data-lucide="plus"></i> Add Node</button>
</div>

<div className="relative w-full h-full">

<div className="absolute top-10 left-10 w-56 rounded-lg border border-orange-500/30 bg-slate-900 shadow-lg p-3 z-10">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-orange-500/10 flex items-center justify-center text-orange-400"><i className="w-3 h-3" data-lucide="mail"></i></div>
<span className="text-sm font-medium text-white">New Email</span>
</div>
<div className="text-xs text-slate-400 mb-3">support@brand.com</div>
<div className="flex gap-2 text-[10px] font-medium">
<span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">On Success</span>
<span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">On Fail</span>
</div>
</div>

<svg className="absolute top-[80px] left-[260px] w-[100px] h-20" preserveaspectratio="none">
<path d="M 0 0 C 50 0, 50 60, 100 60" fill="none" stroke="#334155" stroke-dasharray="4" strokeWidth="2"></path>
</svg>

<div className="absolute top-32 left-[360px] w-56 rounded-lg border border-slate-700 bg-slate-900 shadow-lg p-3 z-10">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-slate-300"><i className="w-3 h-3" data-lucide="filter"></i></div>
<span className="text-sm font-medium text-white">Classify Intent</span>
</div>
<div className="text-xs text-slate-400 mb-3">Billing | Tech | Sales</div>
<div className="flex gap-2 text-[10px] font-medium">
<span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">On Success</span>
<span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">On Fail</span>
</div>
</div>

<svg className="absolute top-[160px] left-[580px] w-[80px] h-10" preserveaspectratio="none">
<path d="M 0 0 L 80 0" fill="none" stroke="#334155" strokeWidth="2"></path>
</svg>

<div className="absolute top-32 left-[660px] w-56 rounded-lg border border-blue-500/30 bg-slate-900 shadow-lg p-3 z-10">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center text-blue-400"><i className="w-3 h-3" data-lucide="send"></i></div>
<span className="text-sm font-medium text-white">Send Template</span>
</div>
<div className="text-xs text-slate-400 mb-3">Pricing email v2</div>
<div className="flex gap-2 text-[10px] font-medium">
<span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">On Success</span>
<span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">On Fail</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8">
<div>
<h4 className="text-white font-medium mb-2">Workflow:</h4>
<p className="text-slate-400 text-sm">Drag-and-drop multi-step automations with triggers, AI actions, and rules—built visually in minutes.</p>
</div>
<div>
<h4 className="text-white font-medium mb-2">Analytics:</h4>
<p className="text-slate-400 text-sm">Real-time dashboards surface trends, bottlenecks, and ROI at a glance—for faster decisions.</p>
</div>
<div>
<h4 className="text-white font-medium mb-2">Integration:</h4>
<p className="text-slate-400 text-sm">One-click connectors and an open API sync CRM, chat, calendar, and more—everything stays in sync.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="text-xs font-medium tracking-wider text-slate-500 uppercase mb-4">POWERFUL INTEGRATIONS</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-16">
                    Seamlessly Integrate<br/>Every App
                </h2>
<div className="relative w-full max-w-4xl mx-auto h-[300px] flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/30 blur-[80px] rounded-full"></div>

<div className="absolute w-full h-full top-0 left-0 flex flex-wrap justify-center items-center gap-6">

<div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg"><i className="w-6 h-6 text-white" data-lucide="slack"></i></div>
<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg transform -translate-y-8"><i className="w-5 h-5 text-white" data-lucide="figma"></i></div>
<div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/10 transform translate-y-4"><i className="w-7 h-7 text-blue-400" data-lucide="zap"></i></div>
<div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg"><i className="w-6 h-6 text-blue-500" data-lucide="trello"></i></div>
<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg transform -translate-y-6"><i className="w-5 h-5 text-white" data-lucide="github"></i></div>
<div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg transform translate-y-8"><i className="w-6 h-6 text-red-400" data-lucide="chrome"></i></div>
<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg"><i className="w-5 h-5 text-purple-400" data-lucide="twitch"></i></div>
<div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg transform -translate-y-4"><i className="w-6 h-6 text-blue-400" data-lucide="twitter"></i></div>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white border border-slate-700 rounded-full hover:bg-slate-800 transition-colors bg-slate-900" href="#">
                        Explore All
                    </a>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-800/50">
<div className="mb-16">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-slate-400 mb-4">SUCCESS STORIES</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-xl">
                    Hear from our customers &amp; their success stories
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 p-8 flex flex-col justify-between h-[320px]">
<div>
<div className="flex items-center gap-2 mb-6 text-lg font-semibold text-white"><i className="w-5 h-5" data-lucide="cloud"></i> application</div>
<p className="text-slate-300 text-sm leading-relaxed">
                            "Fusion AI cut our onboarding time by 50%—setup was effortless, and our AI agents are now core to daily ops."
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' viewBox='0 0 100 100'&gt;&lt;rect fill='%23334155' width='100' height='100'/&gt;&lt;circle cx='50' cy='40' r='20' fill='%2394a3b8'/&gt;&lt;path d='M20 90 Q50 60 80 90' stroke='%2394a3b8' strokeWidth='10' fill='none'/&gt;&lt;/svg&gt;"/>
</div>
<div>
<div className="text-sm font-medium text-white">Chris Milkulin</div>
<div className="text-xs text-slate-500">Performance Marketer</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 p-8 flex flex-col justify-between h-[320px]">
<div>
<div className="flex items-center gap-2 mb-6 text-lg font-semibold text-white"><i className="w-5 h-5" data-lucide="trending-up"></i> startup</div>
<p className="text-slate-300 text-sm leading-relaxed">
                            "Automating lead follow-ups boosted our conversion rate by 30% without adding headcount. Fusion AI is a game-changer."
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' viewBox='0 0 100 100'&gt;&lt;rect fill='%23334155' width='100' height='100'/&gt;&lt;circle cx='50' cy='40' r='20' fill='%2394a3b8'/&gt;&lt;path d='M20 90 Q50 60 80 90' stroke='%2394a3b8' strokeWidth='10' fill='none'/&gt;&lt;/svg&gt;"/>
</div>
<div>
<div className="text-sm font-medium text-white">Audrey Madden</div>
<div className="text-xs text-slate-500">Chief Growth Officer</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 p-8 flex flex-col justify-between h-[320px] opacity-60">
<div>
<div className="flex items-center gap-2 mb-6 text-lg font-semibold text-white"><i className="w-5 h-5" data-lucide="layers"></i> company</div>
<p className="text-slate-300 text-sm leading-relaxed">
                            "Real-time tracking and automated alerts help us spot issues before they become emergencies. Everything is smoother and faster."
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' viewBox='0 0 100 100'&gt;&lt;rect fill='%23334155' width='100' height='100'/&gt;&lt;circle cx='50' cy='40' r='20' fill='%2394a3b8'/&gt;&lt;path d='M20 90 Q50 60 80 90' stroke='%2394a3b8' strokeWidth='10' fill='none'/&gt;&lt;/svg&gt;"/>
</div>
<div>
<div className="text-sm font-medium text-white">James Doe</div>
<div className="text-xs text-slate-500">Head of Ops</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 text-center">
<div className="text-xs font-medium tracking-wider text-slate-500 uppercase mb-4">AI-DRIVEN FEATURES</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-16 max-w-2xl mx-auto">
                Automate workflows in three simple steps
            </h2>
<div className="grid md:grid-cols-3 gap-8 text-left">

<div className="group">
<div className="h-64 rounded-2xl border border-slate-800 bg-slate-900/40 mb-6 overflow-hidden relative flex flex-col items-center justify-center p-6 hover:border-blue-500/30 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
<div className="w-full max-w-[200px] border border-slate-700 bg-slate-900/80 rounded-lg p-3 flex items-center gap-3 mb-4 relative z-10 shadow-lg">
<i className="w-4 h-4 text-white" data-lucide="zap"></i>
<span className="text-sm text-white">When this happens</span>
</div>
<div className="w-1 h-6 border-l border-dashed border-slate-600 relative z-10"></div>
<div className="w-full max-w-[200px] border border-slate-700 bg-slate-900/80 rounded-lg p-3 flex items-center gap-3 mt-4 relative z-10 shadow-lg">
<i className="w-4 h-4 text-slate-400" data-lucide="play"></i>
<span className="text-sm text-slate-400">Do this</span>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-2">1. Select a trigger</h3>
<p className="text-slate-400 text-sm">Choose an event or schedule that kicks off your workflow.</p>
</div>

<div className="group">
<div className="h-64 rounded-2xl border border-slate-800 bg-slate-900/40 mb-6 overflow-hidden relative flex items-center justify-center p-6 hover:border-orange-500/30 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 to-transparent"></div>
<div className="grid grid-cols-2 gap-4 relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center"><i className="w-6 h-6 text-white" data-lucide="slack"></i></div>
<div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.2)]"><i className="w-6 h-6 text-orange-400" data-lucide="git-merge"></i></div>
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center"><i className="w-6 h-6 text-white" data-lucide="mail"></i></div>
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center"><i className="w-6 h-6 text-white" data-lucide="database"></i></div>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-2">2. Connect your apps</h3>
<p className="text-slate-400 text-sm">Sync Fusion AI with your tools—CRM, email, Slack, and more.</p>
</div>

<div className="group">
<div className="h-64 rounded-2xl border border-slate-800 bg-slate-900/40 mb-6 overflow-hidden relative flex items-center justify-center p-6 hover:border-blue-500/30 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
<div className="w-20 h-20 rounded-2xl border-2 border-blue-500/50 bg-blue-900/20 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
<i className="w-10 h-10 text-blue-400" data-lucide="check-circle"></i>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-2">3. Let AI do the work</h3>
<p className="text-slate-400 text-sm">Lets Fusion AI execute tasks automatically.</p>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-800/50">
<div className="grid md:grid-cols-2 gap-16">
<div>
<div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-slate-400 mb-6">FAQ</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        Frequently<br/>asked<br/>questions
                    </h2>
<p className="text-slate-400 text-sm mb-8 max-w-sm">
                        Got any Questions?<br/>
                        Let us know! Reach out and our team will get right back to you.
                    </p>
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white border border-slate-700 rounded-full hover:bg-slate-800 transition-colors bg-slate-900" href="#">
                        Contact us
                    </a>
</div>
<div className="flex flex-col gap-4">

<div className="border border-slate-800 rounded-2xl p-6 bg-slate-900/30 flex justify-between items-center cursor-pointer hover:bg-slate-900/50 transition-colors">
<span className="text-white font-medium">What is Fusion AI and how does it work?</span>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>

<div className="border border-slate-700 rounded-2xl p-6 bg-slate-900/60 flex flex-col gap-4 cursor-pointer">
<div className="flex justify-between items-center">
<span className="text-white font-medium">Which apps can I integrate?</span>
<i className="w-5 h-5 text-slate-400" data-lucide="minus"></i>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                            Fusion AI supports 50+ integrations, including Slack, HubSpot, Zendesk, Salesforce, Google Workspace, WhatsApp, Zapier, and more.
                        </p>
</div>

<div className="border border-slate-800 rounded-2xl p-6 bg-slate-900/30 flex justify-between items-center cursor-pointer hover:bg-slate-900/50 transition-colors">
<span className="text-white font-medium">How does Fluence AI automate tasks?</span>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>

<div className="border border-slate-800 rounded-2xl p-6 bg-slate-900/30 flex justify-between items-center cursor-pointer hover:bg-slate-900/50 transition-colors">
<span className="text-white font-medium">Is my data secure with Fluence AI?</span>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>

<div className="border border-slate-800 rounded-2xl p-6 bg-slate-900/30 flex justify-between items-center cursor-pointer hover:bg-slate-900/50 transition-colors">
<span className="text-white font-medium">What kind of support do you offer?</span>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>
</div>
</div>
</section>

<section className="py-32 relative text-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-blue-900/20 border border-blue-500/30 flex items-center justify-center mb-8">
<div className="w-6 h-6 rounded bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"><div className="w-2.5 h-2.5 bg-white rounded-full"></div></div>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                    Start Your AI Automation<br/>Journey Today
                </h2>
<p className="text-slate-400 text-sm mb-10">
                    Sign up for Fusion AI and let AI handle your routine tasks—no credit card needed.
                </p>
<div className="flex items-center justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 border border-slate-700 rounded-full hover:bg-slate-800 transition-colors" href="#">
                        Get Started - Free
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">
                        View Pricing
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800/60 bg-slate-950 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Fusion AI</span>
</div>
<p className="text-slate-400 text-sm max-w-xs">
                        Fusion AI and let AI handle your routine tasks.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Main Page</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blogs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Quick Links</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Integration</a></li>
<li><a className="hover:text-white transition-colors" href="#">Teams</a></li>
<li><a className="hover:text-white transition-colors" href="#">Career</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">404</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Others</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms &amp; Condition</a></li>
<li><a className="hover:text-white transition-colors" href="#">Waitlist</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/60 text-xs text-slate-500 gap-4">
<div>© 2025 Design &amp; Developed by Amani Design. Rebuilt with HTML/Tailwind.</div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
