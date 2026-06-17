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
slate: {
850: '#151b28',
900: '#0f172a',
950: '#020617', // Custom dark base
}
},
backgroundImage: {
'glow': 'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0f172a 100%)',
'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)"
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
      

<div className="fixed inset-0 z-0 pointer-events-none" style={{backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)', opacity: '0.05'}}></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-slate-950">
<span className="iconify" data-icon="lucide:aperture" data-width="14"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-white group-hover:opacity-80 transition-opacity">
            OXYGEN
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Developers</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors hidden sm:block" href="#">
            Log in
          </a>
<a className="bg-white text-slate-950 px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors" href="#">
            Start Building
          </a>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-5xl mx-auto px-6 text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300 mb-8 animate-fade-in hover:border-white/20 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
          Vibe Coding 2.0 is now live
        </div>
<h1 className="text-5xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 tracking-tight leading-[1.1] mb-6">
          Agentic Applications for Every Decision
        </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light mb-10">
          Oxygen is the most sophisticated platform for building and deploying
          full-stack agentic applications powered by your enterprise data
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-slate-950 text-sm font-medium hover:bg-slate-200 transition-colors flex items-center gap-2">
            Start Coding
            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="h-10 px-6 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800 hover:border-slate-600 transition-all flex items-center gap-2 group">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:terminal" data-width="16"></span>
            Documentation
          </button>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-sm overflow-hidden shadow-2xl subtle-glow relative">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
</div>
<div className="text-xs text-slate-500 font-mono flex items-center gap-2">
<span className="iconify" data-icon="lucide:lock" data-width="10"></span>
              oxygen-agent-builder
            </div>
<div className="w-10"></div>
</div>

<div className="grid md:grid-cols-12 h-[600px] divide-y md:divide-y-0 md:divide-x divide-white/5">

<div className="md:col-span-3 bg-slate-950/30 p-4 flex flex-col gap-6">
<div>
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3 block">
                  Agent Configuration
                </label>
<div className="space-y-3">
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-300">Autonomy Level</span>
<span className="text-xs text-sky-400">High</span>
</div>

<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-sky-500 rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-white/5">
<span className="text-xs text-slate-300">
                      Human-in-the-loop
                    </span>

<div className="relative inline-block w-8 h-4 align-middle select-none">
<div className="w-8 h-4 bg-slate-700 rounded-full shadow-inner"></div>
<div className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full shadow transition-transform transform translate-x-4"></div>
</div>
</div>
</div>
</div>
<div>
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3 block">
                  Connectors
                </label>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-slate-400 p-2 hover:bg-white/5 rounded cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:database" data-width="14"></span>
                    PostgreSQL Prod
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-auto shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400 p-2 hover:bg-white/5 rounded cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:slack" data-width="14"></span>
                    Slack Enterprise
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-auto shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400 p-2 hover:bg-white/5 rounded cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:globe" data-width="14"></span>
                    Stripe API
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 ml-auto shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-9 relative bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]">

<div className="absolute bottom-6 left-6 right-6">
<div className="glass-panel rounded-xl p-1 flex items-center gap-2 shadow-2xl">
<div className="p-2 text-slate-400">
<span className="iconify" data-icon="lucide:sparkles" data-width="18"></span>
</div>
<input className="w-full bg-transparent border-none text-sm text-slate-200 focus:outline-none placeholder-slate-600 h-10" readonly="" type="text" value="Create a workflow that monitors inventory and triggers a reorder when stock &lt; 15%"/>
<button className="h-8 px-3 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-colors border border-white/10">
                    Refine
                  </button>
<button className="h-8 w-8 bg-sky-500 hover:bg-sky-400 text-white rounded-lg flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(14,165,233,0.4)]">
<span className="iconify" data-icon="lucide:arrow-up" data-width="16"></span>
</button>
</div>
</div>

<div className="absolute inset-0 p-8 flex items-center justify-center overflow-hidden">

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-700" style={{zIndex: '0'}}>
<path d="M 200 300 C 300 300, 300 150, 400 150" fill="none" strokeWidth="2"></path>
<path d="M 200 300 C 300 300, 300 450, 400 450" fill="none" strokeWidth="2"></path>
<path d="M 600 150 C 650 150, 650 300, 700 300" fill="none" strokeWidth="2"></path>
<path d="M 600 450 C 650 450, 650 300, 700 300" fill="none" strokeWidth="2"></path>
</svg>

<div className="absolute left-[10%] top-[45%] w-48 p-3 rounded-lg border border-sky-500/30 bg-slate-900/90 backdrop-blur shadow-[0_0_30px_rgba(14,165,233,0.1)] z-10">
<div className="flex items-center gap-2 mb-2">
<div className="p-1 rounded bg-sky-500/20 text-sky-400">
<span className="iconify" data-icon="lucide:clock" data-width="14"></span>
</div>
<span className="text-xs font-medium text-slate-200">
                      Daily Cron
                    </span>
</div>
<div className="text-[10px] text-slate-500 font-mono">
                    Run @ 09:00 AM EST
                  </div>
</div>

<div className="absolute left-[40%] top-[20%] w-48 p-3 rounded-lg border border-slate-700 bg-slate-900/90 backdrop-blur z-10">
<div className="flex items-center gap-2 mb-2">
<div className="p-1 rounded bg-purple-500/20 text-purple-400">
<span className="iconify" data-icon="lucide:database" data-width="14"></span>
</div>
<span className="text-xs font-medium text-slate-200">
                      Inventory Check
                    </span>
</div>
<div className="text-[10px] text-slate-500 font-mono">
                    SELECT * FROM stock...
                  </div>
</div>

<div className="absolute left-[40%] top-[70%] w-48 p-3 rounded-lg border border-slate-700 bg-slate-900/90 backdrop-blur z-10">
<div className="flex items-center gap-2 mb-2">
<div className="p-1 rounded bg-amber-500/20 text-amber-400">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="14"></span>
</div>
<span className="text-xs font-medium text-slate-200">
                      Stock Analysis
                    </span>
</div>
<div className="text-[10px] text-slate-500 font-mono">
                    Model: gpt-4-turbo
                  </div>
</div>

<div className="absolute left-[70%] top-[45%] w-48 p-3 rounded-lg border border-emerald-500/30 bg-slate-900/90 backdrop-blur shadow-[0_0_30px_rgba(16,185,129,0.1)] z-10">
<div className="flex items-center gap-2 mb-2">
<div className="p-1 rounded bg-emerald-500/20 text-emerald-400">
<span className="iconify" data-icon="lucide:shopping-cart" data-width="14"></span>
</div>
<span className="text-xs font-medium text-slate-200">
                      Create Order
                    </span>
</div>
<div className="text-[10px] text-slate-500 font-mono">
                    POST /api/suppliers
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
            Enterprise-grade capabilities
          </h2>
<p className="text-slate-400 max-w-xl mx-auto">
            Build with confidence using a platform designed for scale, security,
            and complex decision-making.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-slate-900/50">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
<div className="w-10 h-10 bg-slate-950 border border-white/10 rounded-lg flex items-center justify-center mb-4 text-sky-400 shadow-lg">
<span className="iconify" data-icon="lucide:wand-2" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Vibe Coding</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Describe your business logic in plain English. Our engine
              translates intent into deterministic, executable code graphs.
            </p>
</div>

<div className="group relative p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-slate-900/50">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
<div className="w-10 h-10 bg-slate-950 border border-white/10 rounded-lg flex items-center justify-center mb-4 text-purple-400 shadow-lg">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Secure Sandboxing
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Every agent runs in an isolated environment. Enterprise controls
              for data egress, API access, and user permissions.
            </p>
</div>

<div className="group relative p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-slate-900/50">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
<div className="w-10 h-10 bg-slate-950 border border-white/10 rounded-lg flex items-center justify-center mb-4 text-emerald-400 shadow-lg">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Instant Deployment
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              From prompt to production in seconds. One-click deploy to
              serverless infrastructure with auto-scaling built in.
            </p>
</div>
</div>

<div className="mt-6 rounded-2xl border border-white/5 bg-slate-900/20 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="max-w-md">
<h3 className="text-xl font-medium text-white mb-2">
              Connects with everything
            </h3>
<p className="text-sm text-slate-400">
              Oxygen integrates natively with your existing stack. SQL, NoSQL,
              REST, GraphQL, and proprietary enterprise tools.
            </p>
</div>
<div className="flex flex-wrap justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:github" data-width="20"></span>
</div>
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center">
<span className="iconify text-blue-400" data-icon="lucide:database" data-width="20"></span>
</div>
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center">
<span className="iconify text-orange-400" data-icon="lucide:cloud" data-width="20"></span>
</div>
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center">
<span className="iconify text-indigo-400" data-icon="lucide:message-square" data-width="20"></span>
</div>
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center">
<span className="iconify text-green-400" data-icon="lucide:table" data-width="20"></span>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Ready to automate decision making?
        </h2>
<p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Start building agentic applications today. No credit card required for
          the developer tier.
        </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 h-12 rounded-lg bg-slate-900 border border-slate-800 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors" placeholder="Enter your work email" type="email"/>
<button className="h-12 px-6 rounded-lg bg-white text-slate-950 font-medium text-sm hover:bg-slate-200 transition-colors whitespace-nowrap" type="submit">
            Get Access
          </button>
</form>
<p className="text-xs text-slate-600 mt-4">
          By subscribing, you agree to our Policy and Terms.
        </p>
</section>
</main>
<footer className="border-t border-white/5 bg-slate-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-slate-500" data-icon="lucide:aperture" data-width="16"></span>
<span className="text-sm font-semibold text-slate-500 tracking-tight">
            OXYGEN
          </span>
</div>
<div className="flex gap-6 text-xs text-slate-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
</div>
<div className="text-xs text-slate-600">© 2024 Oxygen Labs Inc.</div>
</div>
</footer>

    </>
  );
}
