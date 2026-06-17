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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-white font-medium tracking-tighter text-lg">ARTISAAN</span>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</nav>
<main className="flex-grow pt-32 pb-20 px-6">

<section className="max-w-4xl mx-auto text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-300 mb-8">
<iconify-icon icon="solar:terminal-linear" width="14"></iconify-icon>
<span>v1.0 is now public</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Documentation that grows<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-600">with your project.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-xl mx-auto leading-relaxed mb-10">
                Start with the CLI. Scale with your team. <br className="hidden md:block"/>
                Own your documentation infrastructure.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 bg-white text-black text-sm font-medium rounded-md hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group">
                    Start Building
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-md hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    npm install -g artisaan
                    <iconify-icon className="text-slate-500" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto mb-24">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-xl p-8 flex flex-col h-full transition-all duration-300 group">
<div className="mb-6">
<iconify-icon className="text-slate-400 mb-4 text-3xl" icon="solar:code-square-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Hacker</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">For builders who move fast. Everything you need to generate and host docs directly from code.</p>
</div>
<div className="mb-8">
<span className="text-3xl font-medium text-white tracking-tight">Free</span>
</div>
<div className="space-y-4 mb-8 flex-grow">
<div className="flex gap-3 items-start">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Full CLI access (init, generate, sync)</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Automatic MDX generation</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Hosted at yourproject.artisaan.com.br</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Public documentation</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Open source friendly</span>
</div>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<p className="text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">Perfect for</p>
<p className="text-sm text-slate-400 font-light mb-6">Solo developers, Indie hackers, Early-stage projects</p>
<button className="w-full py-2.5 rounded-md border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                            Get Started
                        </button>
</div>
</div>

<div className="glass-card rounded-xl p-8 flex flex-col h-full relative transition-all duration-300 bg-white/[0.03] border-white/20">
<div className="absolute -top-px left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
<div className="mb-6">
<iconify-icon className="text-white mb-4 text-3xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Teams</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">For growing products and startups. Professional documentation infrastructure for collaborative teams.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight">$19</span>
<span className="text-sm text-slate-500 font-light">/month</span>
</div>
<div className="space-y-4 mb-8 flex-grow">
<p className="text-xs font-medium text-white/40 uppercase tracking-widest">Everything in Hacker, plus:</p>
<div className="flex gap-3 items-start">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Custom domain (docs.yourcompany.com)</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Workspace for teams</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Branding customization</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Project dashboard &amp; previews</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Priority support</span>
</div>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<p className="text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">Perfect for</p>
<p className="text-sm text-slate-400 font-light mb-6">Startups, SaaS products, API-first companies</p>
<button className="w-full py-2.5 rounded-md bg-white text-sm font-medium text-black hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Upgrade to Teams
                        </button>
</div>
</div>

<div className="glass-card rounded-xl p-8 flex flex-col h-full transition-all duration-300 group">
<div className="mb-6">
<iconify-icon className="text-slate-400 mb-4 text-3xl" icon="solar:buildings-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Enterprise</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">For companies where documentation drives revenue. Full control and governance.</p>
</div>
<div className="mb-8">
<span className="text-3xl font-medium text-white tracking-tight">Custom</span>
</div>
<div className="space-y-4 mb-8 flex-grow">
<p className="text-xs font-medium text-white/40 uppercase tracking-widest">Everything in Teams, plus:</p>
<div className="flex gap-3 items-start">
<iconify-icon className="text-slate-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Multi-workspace management</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-slate-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Advanced permissions (RBAC)</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-slate-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">SSO / OAuth integration</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-slate-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Versioned docs (v1, v2, v3)</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-slate-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300 font-light">Analytics, Insights &amp; Dedicated Support</span>
</div>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<p className="text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">Perfect for</p>
<p className="text-sm text-slate-400 font-light mb-6">Mission-critical documentation, Enterprise</p>
<button className="w-full py-2.5 rounded-md border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                            Contact Sales
                        </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto">
<div className="glass-card rounded-xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
<iconify-icon height="200" icon="solar:heart-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div className="max-w-xl">
<h2 className="text-2xl font-medium text-white tracking-tight mb-3">Support the Project</h2>
<p className="text-slate-400 font-light mb-6">
                            Help keep Artisaan independent. If you’re using the CLI for open-source or personal projects and want to support development.
                        </p>
<div className="flex flex-wrap gap-4 text-sm text-slate-300">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
<span className="text-white font-medium">$1</span>
<span className="font-light">Backer badge</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
<span className="text-white font-medium">$5</span>
<span className="font-light">GitHub Sponsor</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
<span className="text-white font-medium">$20+</span>
<span className="font-light">Community supporter</span>
</div>
</div>
</div>
<div>
<button className="px-6 py-3 bg-white text-black text-sm font-medium rounded-md hover:bg-slate-200 transition-all flex items-center gap-2">
<iconify-icon icon="solar:cup-linear"></iconify-icon>
                            Become a Supporter
                        </button>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-[#030303] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-slate-500 font-medium tracking-tight text-sm">ARTISAAN</span>
<div className="flex gap-8">
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Twitter</a>
</div>
<p className="text-xs text-slate-600 font-light">© 2024 Artisaan. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
