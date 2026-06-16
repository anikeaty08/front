import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function notify(msg) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'pointer-events-auto bg-zinc-900 border border-white/10 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 text-sm min-w-[200px] backdrop-blur-xl animate-[slideIn_0.3s_ease_forwards]';
            toast.innerHTML = `
                <iconify-icon icon="solar:info-circle-linear" class="text-indigo-400 text-lg"></iconify-icon>
                <span class="font-medium">${msg}</span>
            `;
            container.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(10px)';
                toast.style.transition = 'all 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // Add keyframes for toast via JS to avoid cluttering style tag too much
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes slideIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#" onclick="notify('Refreshing...')">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon icon="solar:command-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-base">Cryptic</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<button className="hover:text-white transition-colors" onclick="notify('Scrolling to Features')">Features</button>
<button className="hover:text-white transition-colors" onclick="notify('Opening Scripts Library')">Scripts</button>
<button className="flex items-center gap-2 hover:text-white transition-colors" onclick="notify('Checking Status... All Systems Operational')">
                    Status
                    <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
</button>
<button className="hover:text-white transition-colors" onclick="notify('Opening Pricing')">Pricing</button>
</div>

<div className="flex items-center gap-4">
<button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" onclick="notify('Opening Login Modal')">Log In</button>
<button className="h-9 px-4 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2" onclick="notify('Redirecting to Purchase...')">
                    Purchase
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-24 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
<div className="relative max-w-5xl mx-auto px-6 text-center z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<span className="px-1.5 py-0.5 rounded-[4px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 text-[10px] uppercase tracking-wider font-bold">New</span>
                Cloud Config v3.0 is live
            </div>

<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-5xl font-semibold text-white tracking-tighter mb-8">Zykozzz on dih</h1>

<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>Advanced execution environment built for stability and performance. Experience the next generation of undetected software.</p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2 w-full sm:w-auto justify-center" onclick="notify('Initiating Download...')">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
                    Download Client
                </button>
<button className="h-12 px-8 rounded-lg border border-zinc-800 bg-zinc-950 text-sm font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-2 w-full sm:w-auto justify-center group" onclick="notify('Opening Discord Community')">
<iconify-icon className="text-indigo-400 group-hover:text-indigo-300" icon="solar:chat-round-line-linear" width="18"></iconify-icon>
                    Join Discord
                </button>
</div>

<div className="mt-20 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-12 gap-y-6">
<div className="text-center">
<div className="text-2xl font-bold text-white tracking-tight">100k+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Users</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-white tracking-tight">0%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Detection</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-white tracking-tight">24/7</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Support</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950/50 border-y border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Engineered for dominance.</h2>
<p className="text-zinc-500 max-w-md">Every feature is meticulously crafted to bypass security measures while maintaining optimal system performance.</p>
</div>
<button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors">
                    View all features <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card bg-zinc-900/20 border border-white/5 p-8 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 text-indigo-500">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="relative z-10 pt-12">
<h3 className="text-xl font-medium text-white mb-3">Undetected</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Our kernel-level driver ensures your activity remains completely invisible to anti-cheat systems.
                        </p>
</div>
</div>

<div className="glass-card bg-zinc-900/20 border border-white/5 p-8 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 text-purple-500">
<iconify-icon icon="solar:cloud-upload-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="relative z-10 pt-12">
<h3 className="text-xl font-medium text-white mb-3">Cloud Configs</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Save and load your settings instantly from the cloud. Share configurations with friends with one click.
                        </p>
</div>
</div>

<div className="glass-card bg-zinc-900/20 border border-white/5 p-8 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 text-emerald-500">
<iconify-icon icon="solar:code-circle-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="relative z-10 pt-12">
<h3 className="text-xl font-medium text-white mb-3">Lua Engine</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Powerful scripting API allows you to create custom modules and logic. Full documentation available.
                        </p>
</div>
</div>

<div className="md:col-span-3 glass-card bg-zinc-900/20 border border-white/5 rounded-xl relative overflow-hidden flex flex-col md:flex-row">
<div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
<span className="text-xs font-mono text-indigo-300">SYSTEM_ACTIVE</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Streamlined Interface</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-md">
                            No cluttered menus. Our UI is designed for speed, allowing you to toggle features mid-game without distraction. Fully customizable with themes.
                        </p>
<div className="flex gap-4">
<div className="flex flex-col gap-1">
<span className="text-2xl font-mono text-white">0.3<span className="text-zinc-600 text-lg">ms</span></span>
<span className="text-[10px] uppercase text-zinc-500 tracking-wider">Inject Time</span>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-mono text-white">120<span className="text-zinc-600 text-lg">fps</span></span>
<span className="text-[10px] uppercase text-zinc-500 tracking-wider">Performance</span>
</div>
</div>
</div>

<div className="md:w-1/2 bg-black/50 border-l border-white/5 relative">
<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
<div className="p-4 border-b border-white/5 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 text-[10px] text-zinc-500 font-mono">config.lua</div>
</div>
<div className="p-6 font-mono text-xs leading-6 overflow-hidden">
<div className="text-purple-400">local</div> <span className="text-white">Cryptic</span> = <span className="text-blue-400">require</span>(<span className="text-emerald-400">"api"</span>)
                            
                            <div className="text-zinc-500">-- Initialize security protocol</div>
<span className="text-white">Cryptic</span>.<span className="text-blue-300">load_protection</span>({
                              <span className="text-indigo-300">mode</span> = <span className="text-emerald-400">"stealth"</span>,
                              <span className="text-indigo-300">hwid_spoofer</span> = <span className="text-purple-400">true</span>,
                              <span className="text-indigo-300">overlay</span> = <span className="text-purple-400">true</span>
                            })
                            
                            <span className="text-white">Cryptic</span>.<span className="text-blue-300">on_render</span>(<span className="text-purple-400">function</span>()
                              <span className="text-zinc-500">-- Custom visual logic here</span>
<span className="text-purple-400">end</span>)
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-8">Ready to upgrade?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="p-6 rounded-xl border border-white/10 bg-zinc-900/20 hover:border-white/20 transition-colors">
<div className="text-sm font-medium text-zinc-400 mb-2">Weekly</div>
<div className="text-3xl font-bold text-white mb-6">$14.99</div>
<ul className="space-y-3 mb-8 text-sm text-zinc-400">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Full Access</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> HWID Spoofer</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 24/7 Support</li>
</ul>
<button className="w-full py-2 rounded-lg bg-zinc-800 text-white text-xs font-semibold hover:bg-zinc-700 transition-colors border border-white/5" onclick="notify('Selected Weekly Plan')">Select Plan</button>
</div>

<div className="p-6 rounded-xl border border-indigo-500/30 bg-indigo-500/5 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider">Best Value</div>
<div className="text-sm font-medium text-indigo-300 mb-2">Monthly</div>
<div className="text-3xl font-bold text-white mb-6">$39.99</div>
<ul className="space-y-3 mb-8 text-sm text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Full Access</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> HWID Spoofer</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Priority Support</li>
</ul>
<button className="w-full py-2 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors" onclick="notify('Selected Monthly Plan')">Select Plan</button>
</div>

<div className="p-6 rounded-xl border border-white/10 bg-zinc-900/20 hover:border-white/20 transition-colors">
<div className="text-sm font-medium text-zinc-400 mb-2">Lifetime</div>
<div className="text-3xl font-bold text-white mb-6">$199.99</div>
<ul className="space-y-3 mb-8 text-sm text-zinc-400">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Forever Access</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> HWID Spoofer</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Private Discord</li>
</ul>
<button className="w-full py-2 rounded-lg bg-zinc-800 text-white text-xs font-semibold hover:bg-zinc-700 transition-colors border border-white/5" onclick="notify('Selected Lifetime Plan')">Select Plan</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:command-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-semibold">Cryptic</span>
</a>
<p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
                        The premiere execution environment for enthusiasts. Built by developers, for developers.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Download</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-indigo-400 transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 Cryptic Software. All rights reserved.</p>
<div className="flex gap-2 items-center">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span>All systems operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
