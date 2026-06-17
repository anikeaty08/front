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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#030304',
surface: '#0B0C0E',
accent: '#5E6AD2',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="iconify text-indigo-500 group-hover:text-indigo-400 transition-colors" data-height="20" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-slate-200 font-medium tracking-tighter text-lg">NEXUS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-slate-200 transition-colors" href="#">Features</a>
<a className="hover:text-slate-200 transition-colors" href="#">Integration</a>
<a className="hover:text-slate-200 transition-colors" href="#">Customers</a>
<a className="hover:text-slate-200 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-slate-200 transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all" href="#">
                    Start trial
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] glow-bg pointer-events-none -z-10 opacity-60"></div>
<div className="max-w-7xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Nexus 2.0 is now available
                <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14"></span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-100 tracking-tight mb-6 leading-[1.1]">
                Customer support,<br/>
<span className="gradient-text">solved by intelligence.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                Instantly resolve 80% of support tickets with an AI that understands context, tone, and your product documentation.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-slate-100 text-slate-950 font-medium hover:bg-white transition-all flex items-center gap-2 text-sm w-full sm:w-auto justify-center">
                    Start building free
                    <span className="iconify" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-transparent text-slate-300 font-medium hover:bg-white/5 transition-all flex items-center gap-2 text-sm w-full sm:w-auto justify-center group">
<span className="iconify text-slate-500 group-hover:text-slate-300 transition-colors" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="18"></span>
                    Watch demo
                </button>
</div>

<div className="relative max-w-4xl mx-auto animate-float">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20"></div>
<div className="relative bg-surface border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 h-5 w-64 bg-white/5 rounded-md"></div>
</div>

<div className="flex h-[400px] md:h-[500px]">

<div className="hidden md:block w-64 border-r border-white/5 bg-white/[0.01] p-4">
<div className="flex items-center gap-2 mb-6 text-slate-200 font-medium text-sm">
<span className="iconify" data-icon="lucide:inbox" data-strokeWidth="1.5" data-width="16"></span>
                                Inbox
                            </div>
<div className="space-y-1">
<div className="p-3 bg-white/5 rounded-lg border border-white/5 cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium text-slate-300">Alex M.</span>
<span className="text-[10px] text-slate-500">2m</span>
</div>
<p className="text-xs text-slate-400 truncate">API rate limiting issue...</p>
</div>
<div className="p-3 hover:bg-white/[0.02] rounded-lg cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium text-slate-400">Sarah K.</span>
<span className="text-[10px] text-slate-600">1h</span>
</div>
<p className="text-xs text-slate-500 truncate">Billing cycle question</p>
</div>
</div>
</div>

<div className="flex-1 flex flex-col relative">

<div className="flex-1 p-6 space-y-6 overflow-y-auto">

<div className="flex items-end justify-end gap-3">
<div className="bg-indigo-600/20 text-indigo-100 border border-indigo-500/30 px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[80%] leading-relaxed">
                                        Hi, I'm getting a 429 error when trying to batch create users via the API. Is there a limit?
                                    </div>
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs text-white font-medium">AM</div>
</div>

<div className="flex items-center gap-2 text-xs text-slate-500 ml-12">
<span className="iconify animate-spin" data-icon="lucide:loader-2" data-strokeWidth="1.5" data-width="12"></span>
                                    Nexus is analyzing documentation...
                                </div>

<div className="flex items-end justify-start gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="14"></span>
</div>
<div className="bg-white/5 border border-white/10 text-slate-300 px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[80%] leading-relaxed">
<p className="mb-2">Yes, the standard tier has a rate limit of <strong>100 requests per minute</strong>. You can implement exponential backoff to handle this.</p>
<div className="bg-black/40 rounded border border-white/5 p-3 font-mono text-xs text-slate-400">
                                            await new Promise(r =&gt; setTimeout(r, 2 ** attempt * 100));
                                        </div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-white/[0.01]">
<div className="relative">
<input className="w-full bg-background border border-white/10 rounded-lg pl-4 pr-12 py-3 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="Reply to customer..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-500/20 hover:bg-indigo-500 text-indigo-400 hover:text-white rounded-md transition-all">
<span className="iconify" data-icon="lucide:arrow-up" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
<div className="flex gap-4 mt-3">
<button className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="14"></span>
                                        AI Actions
                                    </button>
<button className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors">
<span className="iconify" data-icon="lucide:paperclip" data-strokeWidth="1.5" data-width="14"></span>
                                        Attach
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01] py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-600 uppercase tracking-widest mb-8">Trusted by engineering teams at</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1"><span className="w-4 h-4 bg-white rounded-sm"></span> ACME</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1"><span className="w-4 h-4 rounded-full border-2 border-white"></span> GLOBEX</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1"><span className="w-4 h-4 bg-white rotate-45"></span> SOYUZ</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1"><span className="w-4 h-4 bg-transparent border border-white"></span> INITECH</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1"><span className="w-4 h-4 bg-white rounded-tr-lg"></span> UMBRELLA</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-200 tracking-tight mb-4">Built for resolution.</h2>
<p className="text-slate-500 text-lg max-w-xl">Nexus doesn't just chat. It acts, resolves, and learns from every interaction to improve over time.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl glass-panel hover:bg-white/[0.05] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all">
<span className="iconify" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-3">Semantic Learning</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Nexus ingests your Notion, JIRA, and public docs. It understands technical nuances, not just keywords.
                    </p>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:bg-white/[0.05] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all">
<span className="iconify" data-icon="lucide:git-merge" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-3">Seamless Handoff</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        When issues get complex, Nexus drafts a summary and routes the ticket to the right engineer instantly.
                    </p>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:bg-white/[0.05] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all">
<span className="iconify" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-3">Sentiment Analytics</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Track customer happiness in real-time. Identify friction points in your documentation automatically.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-200 tracking-tight mb-6">Customize your bot behavior</h2>
<p className="text-slate-500 mb-8">Control tone, response length, and escalation thresholds with a simple interface.</p>
<div className="space-y-6">

<div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="p-2 rounded-md bg-white/5">
<span className="iconify text-slate-400" data-icon="lucide:mic" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div>
<div className="text-sm font-medium text-slate-300">Tone of Voice</div>
<div className="text-xs text-slate-600">Adjust formality</div>
</div>
</div>

<div className="flex items-center bg-black rounded-lg p-1 border border-white/10">
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-300">Casual</button>
<button className="px-3 py-1 text-xs font-medium bg-slate-800 text-white rounded shadow-sm">Formal</button>
</div>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="p-2 rounded-md bg-white/5">
<span className="iconify text-slate-400" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div>
<div className="text-sm font-medium text-slate-300">Escalation</div>
<div className="text-xs text-slate-600">Auto-handoff trigger</div>
</div>
</div>

<div className="w-32 h-1.5 bg-slate-800 rounded-full relative">
<div className="absolute left-0 top-0 h-full w-2/3 bg-indigo-500 rounded-full"></div>
<div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
<div className="flex items-center gap-3 p-4">
<div className="w-5 h-5 rounded border border-indigo-500 bg-indigo-500/20 flex items-center justify-center">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-strokeWidth="2" data-width="12"></span>
</div>
<span className="text-sm text-slate-400">Enable advanced debugging mode</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-10 bg-indigo-500/10 blur-3xl rounded-full"></div>
<div className="relative bg-surface border border-white/10 rounded-xl p-8 shadow-2xl">
<div className="font-mono text-xs text-slate-400 space-y-2">
<div className="flex gap-2">
<span className="text-purple-400">const</span> <span className="text-blue-400">config</span> = {
                        </div>
<div className="pl-4">
<span className="text-slate-300">model:</span> <span className="text-green-400">'gpt-4-turbo'</span>,
                        </div>
<div className="pl-4">
<span className="text-slate-300">temperature:</span> <span className="text-orange-400">0.2</span>,
                        </div>
<div className="pl-4">
<span className="text-slate-300">knowledge_base:</span> <span className="text-green-400">['docs', 'confluence']</span>,
                        </div>
<div className="pl-4">
<span className="text-slate-300">handoff_threshold:</span> <span className="text-orange-400">0.85</span>
</div>
<div>};</div>
<div className="h-4"></div>
<div className="text-slate-600">// Initializing Nexus Engine...</div>
<div className="text-green-500">&gt;&gt; Ready. Listening on port 3000</div>
<div className="flex gap-1 animate-pulse">
<span className="w-2 h-4 bg-slate-500 block"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/20 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to automate support?</h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">Join 4,000+ companies using Nexus to deliver instant answers and happier customers.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-all">
                    Get Started
                </button>
<button className="h-12 px-8 rounded-full border border-white/10 text-white font-medium hover:bg-white/10 transition-all">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6 text-sm">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-indigo-500" data-icon="lucide:sparkles" data-width="18"></span>
<span className="text-white font-semibold tracking-tight">NEXUS</span>
</div>
<p className="text-slate-500 max-w-xs">AI-first customer support infrastructure for the modern internet.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-slate-300 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-slate-300 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-slate-300 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-600 pt-8 border-t border-white/10">
<p>© 2024 Nexus AI Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="iconify hover:text-white cursor-pointer transition-colors" data-icon="lucide:twitter" data-width="18"></span>
<span className="iconify hover:text-white cursor-pointer transition-colors" data-icon="lucide:github" data-width="18"></span>
<span className="iconify hover:text-white cursor-pointer transition-colors" data-icon="lucide:linkedin" data-width="18"></span>
</div>
</div>
</footer>

    </>
  );
}
