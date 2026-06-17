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
background: '#0a0a0a',
surface: '#121212',
surfaceHighlight: '#1E1E1E',
border: '#2A2A2A',
primary: '#E1E1E1',
secondary: '#A1A1A1',
accent: '#ffffff',
}
}
}
}



        function router(viewName) {
            // Hide all views
            const views = ['home', 'dashboard', 'pricing', 'docs', 'about'];
            views.forEach(v => {
                document.getElementById('view-' + v).classList.add('hide-section');
                document.getElementById('view-' + v).classList.remove('fade-in');
            });

            // Show selected view
            const selected = document.getElementById('view-' + viewName);
            selected.classList.remove('hide-section');
            
            // Trigger reflow to restart animation
            void selected.offsetWidth; 
            selected.classList.add('fade-in');

            // Scroll to top
            window.scrollTo(0, 0);
        }

        function updateCalc(val) {
            document.getElementById('project-val').innerText = val;
            
            // Simple logic for demo
            const tokens = val * 5000;
            const cost = val * 2.5; // roughly
            
            document.getElementById('token-est').innerText = tokens.toLocaleString();
            document.getElementById('cost-est').innerHTML = '$' + Math.floor(cost) + '<span class="text-sm font-normal text-zinc-500">/mo</span>';
        }

        // Initialize
        router('home');
    
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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="router('home')">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black font-semibold text-xs tracking-tighter">L</div>
<span className="font-medium tracking-tight text-white">LOREMIA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-secondary text-sm font-medium">
<button className="hover:text-white transition-colors" onclick="router('home')">Product</button>
<button className="hover:text-white transition-colors" onclick="router('pricing')">Pricing</button>
<button className="hover:text-white transition-colors" onclick="router('docs')">Documentation</button>
<button className="hover:text-white transition-colors" onclick="router('about')">About</button>
</div>
<div className="flex items-center gap-4">
<button className="text-secondary hover:text-white text-sm font-medium transition-colors" onclick="router('dashboard')">Sign in</button>
<button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors" onclick="router('dashboard')">Get Plugin</button>
</div>
</div>
</nav>

<main className="pt-16 min-h-screen">

<div className="fade-in" id="view-home">

<section className="relative pt-20 pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-secondary mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        v2.0 is now live for Figma
                    </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 gradient-text">
                        Contextual content <br/> generated inside Figma.
                    </h1>
<p className="text-lg text-secondary mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Stop using Lorem Ipsum. Loremia understands your design context and generates realistic copy and imagery directly within your layers.
                    </p>
<div className="flex items-center justify-center gap-4">
<button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2" onclick="router('dashboard')">
<iconify-icon icon="lucide:figma" width="18"></iconify-icon>
                            Install Plugin
                        </button>
<button className="px-6 py-3 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-all" onclick="router('docs')">
                            How it works
                        </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-6">
<div className="border border-white/10 rounded-xl bg-[#1e1e1e] p-2 glow-effect relative">

<div className="bg-[#2C2C2C] rounded-lg aspect-video w-full overflow-hidden relative flex">

<div className="w-12 border-r border-white/5 flex flex-col items-center py-4 gap-4">
<div className="w-6 h-6 rounded bg-white/10"></div>
<div className="w-6 h-6 rounded bg-white/10"></div>
<div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center"><iconify-icon icon="lucide:pen-tool" width="14"></iconify-icon></div>
</div>

<div className="flex-1 bg-[#1e1e1e] relative p-10 flex items-center justify-center">

<div className="w-80 bg-black border border-white/10 rounded-lg p-6 relative">
<div className="h-4 w-12 bg-zinc-800 rounded mb-4"></div>
<div className="h-8 w-3/4 bg-zinc-800 rounded mb-2 animate-pulse"></div>
<div className="h-4 w-full bg-zinc-800 rounded mb-1 opacity-50"></div>
<div className="h-4 w-2/3 bg-zinc-800 rounded mb-6 opacity-50"></div>
<div className="h-40 w-full bg-zinc-800 rounded mb-4 flex items-center justify-center text-zinc-600">
<iconify-icon icon="lucide:image" width="32"></iconify-icon>
</div>
<div className="h-10 w-full bg-white rounded"></div>

<div className="absolute -right-24 top-10 w-64 bg-[#222] border border-white/10 rounded-lg shadow-2xl p-4 z-20">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-white rounded-full"></div>
<span className="text-xs font-medium">Loremia</span>
</div>
<iconify-icon className="text-zinc-500" icon="lucide:x" width="14"></iconify-icon>
</div>
<div className="space-y-3">
<div className="text-xs text-zinc-400">Context: "Travel App Hero"</div>
<div className="bg-black/50 p-2 rounded border border-white/5 text-xs text-zinc-300">
                                                Generate headline and hero image for a mountain hiking trip.
                                            </div>
<button className="w-full bg-indigo-600 text-white text-xs py-2 rounded font-medium mt-2 flex items-center justify-center gap-2">
<iconify-icon icon="lucide:sparkles" width="12"></iconify-icon> Generate
                                            </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="space-y-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-medium">1</div>
<h3 className="text-lg font-medium text-white">Select Layer</h3>
<p className="text-secondary leading-relaxed">Click any text layer, frame, or shape in your Figma file. Loremia automatically detects the node type.</p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-medium">2</div>
<h3 className="text-lg font-medium text-white">Describe Intent</h3>
<p className="text-secondary leading-relaxed">Briefly describe what you need, or let the "Auto-Context" feature read your surrounding design components.</p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-medium">3</div>
<h3 className="text-lg font-medium text-white">Generate &amp; Fill</h3>
<p className="text-secondary leading-relaxed">Content is streamed directly into the selected layers. No copy-pasting required.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight/30 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Engineered for Product Teams</h2>
<p className="text-secondary">Why leading agencies are switching to automated content workflows.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-background border border-white/5 hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" icon="lucide:wand-2" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-2">Text &amp; Image Gen</h4>
<p className="text-secondary text-sm">Generate copy that fits the container and photorealistic images that match your palette.</p>
</div>

<div className="p-6 rounded-xl bg-background border border-white/5 hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" icon="lucide:key" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-2">Secure API Management</h4>
<p className="text-secondary text-sm">Bring your own key or use our managed token system. Enterprise-grade security.</p>
</div>

<div className="p-6 rounded-xl bg-background border border-white/5 hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" icon="lucide:layers" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-2">Bulk Generation</h4>
<p className="text-secondary text-sm">Select 50 item cards and populate them all with unique content in one click.</p>
</div>

<div className="p-6 rounded-xl bg-background border border-white/5 hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" icon="lucide:languages" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-2">Multi-language</h4>
<p className="text-secondary text-sm">Test your UI layout with German, Japanese, or French copy instantly.</p>
</div>

<div className="col-span-1 md:col-span-2 p-6 rounded-xl bg-background border border-white/5 hover:border-white/20 transition-colors flex flex-col md:flex-row gap-6 items-center">
<div className="flex-1">
<h4 className="text-white font-medium mb-2">Team Sync</h4>
<p className="text-secondary text-sm">Share custom prompts and tone-of-voice settings across your entire organization.</p>
</div>
<div className="flex -space-x-2">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-xs">JD</div>
<div className="w-10 h-10 rounded-full bg-zinc-700 border border-black flex items-center justify-center text-xs">AS</div>
<div className="w-10 h-10 rounded-full bg-zinc-600 border border-black flex items-center justify-center text-xs">MR</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 text-center">
<p className="text-xs font-medium uppercase tracking-widest text-secondary mb-8">Trusted by designers at</p>
<div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">

<span className="text-xl font-bold tracking-tighter">ACME Corp</span>
<span className="text-xl font-bold tracking-tighter italic">Stark</span>
<span className="text-xl font-bold tracking-tighter">Vortex</span>
<span className="text-xl font-bold tracking-tighter font-serif">Chronos</span>
</div>
</section>

<section className="py-24 border-t border-white/10">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-medium tracking-tight mb-6 text-white">Ready to speed up your workflow?</h2>
<p className="text-secondary mb-10">Join 10,000+ designers automating content.</p>
<button className="bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:scale-105 transition-transform" onclick="router('dashboard')">
                        Start Free Trial
                    </button>
</div>
</section>
</div>

<div className="hide-section h-[calc(100vh-64px)] flex overflow-hidden" id="view-dashboard">

<aside className="w-64 border-r border-white/10 bg-surface hidden md:flex flex-col p-4">
<div className="mb-8 px-2">
<div className="flex items-center gap-3 mb-1">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600"></div>
<div>
<div className="text-sm font-medium text-white">Design Team</div>
<div className="text-xs text-secondary">Free Plan</div>
</div>
</div>
</div>
<nav className="space-y-1 flex-1">
<a className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-lg text-white text-sm font-medium" href="#">
<iconify-icon icon="lucide:layout-dashboard"></iconify-icon> Overview
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-secondary hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors" href="#">
<iconify-icon icon="lucide:history"></iconify-icon> History
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-secondary hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors" href="#">
<iconify-icon icon="lucide:users"></iconify-icon> Team
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-secondary hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors" href="#">
<iconify-icon icon="lucide:credit-card"></iconify-icon> Billing
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-secondary hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors" href="#">
<iconify-icon icon="lucide:settings"></iconify-icon> Settings
                    </a>
</nav>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-xs text-secondary mb-2">Tokens Remaining</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mb-1">
<div className="h-full bg-indigo-500 w-[75%]"></div>
</div>
<div className="flex justify-between text-xs text-zinc-400">
<span>7,500 / 10,000</span>
<a className="text-white hover:underline" href="#" onclick="router('pricing')">Top up</a>
</div>
</div>
</aside>

<div className="flex-1 overflow-y-auto bg-background p-6 md:p-10">
<header className="flex justify-between items-center mb-10">
<h2 className="text-2xl font-medium text-white">Dashboard</h2>
<div className="flex items-center gap-4">
<span className="text-xs text-zinc-500">Last login: Today, 10:42 AM</span>
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="lucide:user"></iconify-icon>
</div>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
<div className="bg-surface border border-white/5 p-6 rounded-xl">
<div className="text-secondary text-xs mb-2 uppercase tracking-wide">Total Generations</div>
<div className="text-3xl font-medium text-white">1,248</div>
<div className="text-xs text-green-500 mt-2 flex items-center gap-1">
<iconify-icon icon="lucide:trending-up"></iconify-icon> +12% this month
                        </div>
</div>
<div className="bg-surface border border-white/5 p-6 rounded-xl">
<div className="text-secondary text-xs mb-2 uppercase tracking-wide">Time Saved (Est.)</div>
<div className="text-3xl font-medium text-white">42 hrs</div>
<div className="text-xs text-zinc-500 mt-2">Based on avg typing speed</div>
</div>
<div className="bg-surface border border-white/5 p-6 rounded-xl relative overflow-hidden">
<div className="absolute right-0 top-0 p-3 opacity-10">
<iconify-icon icon="lucide:zap" width="60"></iconify-icon>
</div>
<div className="text-secondary text-xs mb-2 uppercase tracking-wide">Current Plan</div>
<div className="text-3xl font-medium text-white">Pro</div>
<button className="text-xs text-white border border-white/20 px-3 py-1 rounded-full mt-3 hover:bg-white/10" onclick="router('pricing')">Upgrade</button>
</div>
</div>

<div className="mb-10">
<h3 className="text-lg font-medium text-white mb-4">API Configuration</h3>
<div className="bg-surface border border-white/5 rounded-xl p-6">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex-1">
<label className="text-xs text-secondary block mb-1">Your Personal API Key</label>
<div className="flex items-center gap-2">
<input className="bg-black/30 border border-white/10 rounded px-3 py-2 text-zinc-400 w-full md:w-96 font-mono text-sm" disabled="" type="password" value="sk_live_51M..."/>
<button className="text-white hover:text-secondary p-2"><iconify-icon icon="lucide:eye"></iconify-icon></button>
<button className="text-white hover:text-secondary p-2"><iconify-icon icon="lucide:copy"></iconify-icon></button>
</div>
</div>
<button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                                Generate New Key
                            </button>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-medium text-white mb-4">Recent Generations</h3>
<div className="bg-surface border border-white/5 rounded-xl overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-white/5 border-b border-white/5 text-secondary">
<tr>
<th className="px-6 py-3 font-medium">Type</th>
<th className="px-6 py-3 font-medium">Context / Prompt</th>
<th className="px-6 py-3 font-medium">Tokens</th>
<th className="px-6 py-3 font-medium">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-zinc-300">
<tr className="hover:bg-white/[0.02]">
<td className="px-6 py-4"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">Text</span></td>
<td className="px-6 py-4">"Product description for coffee maker..."</td>
<td className="px-6 py-4">45</td>
<td className="px-6 py-4 text-zinc-500">2 mins ago</td>
</tr>
<tr className="hover:bg-white/[0.02]">
<td className="px-6 py-4"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">Image</span></td>
<td className="px-6 py-4">"Avatar of a young professional..."</td>
<td className="px-6 py-4">120</td>
<td className="px-6 py-4 text-zinc-500">1 hour ago</td>
</tr>
<tr className="hover:bg-white/[0.02]">
<td className="px-6 py-4"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">Text</span></td>
<td className="px-6 py-4">"Terms of service legal snippet"</td>
<td className="px-6 py-4">350</td>
<td className="px-6 py-4 text-zinc-500">Yesterday</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="hide-section fade-in" id="view-pricing">
<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium tracking-tight mb-4 gradient-text">Simple Token-Based Pricing</h2>
<p className="text-secondary">All features included in every plan. Just choose your volume.</p>
</div>

<div className="max-w-2xl mx-auto bg-surface border border-white/10 rounded-2xl p-8 mb-20">
<h3 className="text-lg font-medium text-white mb-6">Estimate your usage</h3>
<div className="space-y-8">
<div>
<div className="flex justify-between mb-2">
<span className="text-sm text-secondary">Projects per month</span>
<span className="text-sm text-white font-medium" id="project-val">5</span>
</div>
<input className="w-full" max="20" min="1" oninput="updateCalc(this.value)" type="range" value="5"/>
</div>
<div className="p-4 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
<div>
<div className="text-xs text-secondary uppercase tracking-wide">Recommended Tokens</div>
<div className="text-2xl font-medium text-white mt-1" id="token-est">25,000</div>
</div>
<div className="text-right">
<div className="text-xs text-secondary uppercase tracking-wide">Est. Cost</div>
<div className="text-2xl font-medium text-white mt-1" id="cost-est">$12<span className="text-sm font-normal text-zinc-500">/mo</span></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-white/10 bg-surface flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-3xl font-medium text-white mb-6">$0 <span className="text-sm font-normal text-secondary">/mo</span></div>
<p className="text-sm text-secondary mb-8">Perfect for hobbyists trying out AI workflows.</p>
<ul className="space-y-4 mb-8 flex-1 text-sm text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> 5,000 Monthly Tokens</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Basic Text Generation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> 1 User</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">Start Free</button>
</div>

<div className="p-8 rounded-2xl border border-white/20 bg-surfaceHighlight relative flex flex-col shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Freelancer</h3>
<div className="text-3xl font-medium text-white mb-6">$19 <span className="text-sm font-normal text-secondary">/mo</span></div>
<p className="text-sm text-secondary mb-8">For independent designers with active clients.</p>
<ul className="space-y-4 mb-8 flex-1 text-sm text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> 50,000 Monthly Tokens</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Text &amp; Image Gen</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Priority Support</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Rollover unused tokens</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-colors">Get Started</button>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-surface flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Agency</h3>
<div className="text-3xl font-medium text-white mb-6">$49 <span className="text-sm font-normal text-secondary">/mo</span></div>
<p className="text-sm text-secondary mb-8">For product teams and studios.</p>
<ul className="space-y-4 mb-8 flex-1 text-sm text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> 200,000 Monthly Tokens</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Unlimited Team Members</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Centralized Billing</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> SSO Enforcement</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>
</div>

<div className="hide-section fade-in" id="view-docs">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">

<div className="w-full md:w-64 shrink-0">
<div className="sticky top-24">
<div className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4">Getting Started</div>
<ul className="space-y-3 text-sm text-zinc-400 mb-8">
<li className="text-white font-medium">Installation</li>
<li className="hover:text-white cursor-pointer transition-colors">API Configuration</li>
<li className="hover:text-white cursor-pointer transition-colors">First Generation</li>
</ul>
<div className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4">Core Concepts</div>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="hover:text-white cursor-pointer transition-colors">Token Calculation</li>
<li className="hover:text-white cursor-pointer transition-colors">Context Awareness</li>
<li className="hover:text-white cursor-pointer transition-colors">Image Models</li>
<li className="hover:text-white cursor-pointer transition-colors">Best Practices</li>
</ul>
</div>
</div>

<div className="flex-1 max-w-3xl">
<h1 className="text-3xl font-medium text-white mb-6">Installation &amp; Setup</h1>
<p className="text-secondary leading-relaxed mb-8">
                        Loremia installs directly as a plugin within the Figma ecosystem. Follow these steps to authenticate your account and start generating content.
                    </p>
<div className="space-y-12">
<section>
<h2 className="text-xl font-medium text-white mb-4">1. Install from Community</h2>
<p className="text-zinc-400 mb-4">Navigate to the Figma Community tab and search for "Loremia". Click "Try it out" to add it to your plugins list.</p>
<div className="bg-black/50 border border-white/10 rounded-lg p-4 font-mono text-xs text-zinc-300">
                                Figma &gt; Community &gt; Plugins &gt; Loremia &gt; Install
                            </div>
</section>
<section>
<h2 className="text-xl font-medium text-white mb-4">2. Authenticate</h2>
<p className="text-zinc-400 mb-4">Open the plugin in any file (Cmd+/). You will be prompted to enter your API key found in your dashboard settings.</p>
<div className="bg-surface border-l-2 border-indigo-500 p-4">
<p className="text-sm text-zinc-300">Tip: If you are part of a team, ask your admin for the organization key to share the token pool.</p>
</div>
</section>
<section>
<h2 className="text-xl font-medium text-white mb-4">Understanding Tokens</h2>
<p className="text-zinc-400 mb-4">
                                One token is approximately 4 characters of text. Images cost a fixed amount per generation (usually 50 tokens for SDXL models).
                            </p>
<ul className="list-disc list-inside text-zinc-400 space-y-2 ml-2">
<li>Short Headline: ~10 tokens</li>
<li>Paragraph (50 words): ~75 tokens</li>
<li>Hero Image: 50 tokens</li>
</ul>
</section>
<section>
<h2 className="text-xl font-medium text-white mb-4">FAQ</h2>
<div className="space-y-4">
<details className="bg-white/5 rounded-lg open:bg-white/10 transition-colors">
<summary className="p-4 font-medium cursor-pointer text-zinc-200">Does it work with FigJam?</summary>
<div className="px-4 pb-4 text-zinc-400 text-sm">Yes, Loremia supports sticky notes and text shapes in FigJam.</div>
</details>
<details className="bg-white/5 rounded-lg open:bg-white/10 transition-colors">
<summary className="p-4 font-medium cursor-pointer text-zinc-200">Is my design data private?</summary>
<div className="px-4 pb-4 text-zinc-400 text-sm">We only process the text layers and immediate context you select. We do not store your design files.</div>
</details>
</div>
</section>
</div>
</div>
</div>
</div>

<div className="hide-section fade-in" id="view-about">
<div className="max-w-3xl mx-auto px-6 py-24 text-center">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-white">Automating the mundane, <br/>empowering creativity.</h1>
<p className="text-lg text-secondary leading-relaxed mb-16">
                    Designers spend 30% of their time searching for stock photos and writing placeholder text. Loremia exists to reclaim that time.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-20">
<div>
<h3 className="text-white font-medium mb-2">Speed</h3>
<p className="text-sm text-zinc-400">We believe content generation should be instantaneous and feel like a native part of the design tool.</p>
</div>
<div>
<h3 className="text-white font-medium mb-2">Context</h3>
<p className="text-sm text-zinc-400">Random "Lorem Ipsum" kills design reviews. Relevant content sells the vision.</p>
</div>
<div>
<h3 className="text-white font-medium mb-2">Integration</h3>
<p className="text-sm text-zinc-400">No new tabs. No context switching. Everything happens on the canvas.</p>
</div>
</div>
<div className="border-t border-white/10 pt-16">
<h2 className="text-2xl font-medium text-white mb-6">Our Ambition</h2>
<p className="text-secondary max-w-xl mx-auto">
                        To automate 80% of content population tasks in UI/UX workflows by 2026, allowing designers to focus purely on architecture, interaction, and aesthetics.
                    </p>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-black py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-800 rounded-full flex items-center justify-center text-[8px] text-white">L</div>
<span className="text-zinc-500 text-sm">© 2023 Loremia Inc.</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
