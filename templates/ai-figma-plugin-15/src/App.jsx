import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b', // Custom deep dark
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Simple SPA Router Logic
        function switchPage(pageId) {
            // Hide all pages
            const pages = ['landing', 'dashboard', 'pricing', 'docs', 'about', 'features'];
            pages.forEach(p => {
                const el = document.getElementById(p + '-page');
                if(el) el.classList.add('hidden');
            });

            // Handle 'features' as landing for now
            if(pageId === 'features') pageId = 'landing';

            // Show selected page
            const target = document.getElementById(pageId + '-page');
            if (target) {
                target.classList.remove('hidden');
                window.scrollTo(0,0);
            }
        }

        // Pricing Calculator Logic
        function calculateTokens() {
            const imgCount = parseInt(document.getElementById('img-slider').value);
            const txtCount = parseInt(document.getElementById('txt-slider').value);

            // Update UI values
            document.getElementById('img-val').innerText = imgCount;
            document.getElementById('txt-val').innerText = txtCount;

            // Logic: 50 tokens per image, 1 token per text gen
            const total = (imgCount * 50) + (txtCount * 1);
            document.getElementById('total-tokens').innerText = total.toLocaleString();

            // Recommendation Logic
            const planLabel = document.getElementById('rec-plan');
            if(total <= 10000) {
                planLabel.innerText = "Starter";
                planLabel.className = "text-zinc-400 font-medium";
            } else if (total <= 50000) {
                planLabel.innerText = "Pro";
                planLabel.className = "text-indigo-400 font-medium";
            } else {
                planLabel.innerText = "Agency";
                planLabel.className = "text-purple-400 font-medium";
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-zinc-100 text-lg font-medium tracking-tighter flex items-center gap-2" href="#" onclick="switchPage('landing')">
<div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-sm"></div>
                    LOREMIA
                </a>
<div className="hidden md:flex gap-6 text-sm font-medium">
<button className="hover:text-zinc-100 transition-colors" onclick="switchPage('features')">Features</button>
<button className="hover:text-zinc-100 transition-colors" onclick="switchPage('pricing')">Pricing</button>
<button className="hover:text-zinc-100 transition-colors" onclick="switchPage('docs')">Docs</button>
<button className="hover:text-zinc-100 transition-colors" onclick="switchPage('about')">About</button>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium hover:text-zinc-100 transition-colors hidden md:block" onclick="switchPage('dashboard')">Log in</button>
<button className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200 text-sm font-medium px-4 py-2 rounded-full transition-colors" onclick="switchPage('dashboard')">
                    Dashboard
                </button>
</div>
</div>
</nav>

<main className="pt-24 pb-20 min-h-screen" id="app-content">

<div className="animate-fade-in block" id="landing-page">

<section className="max-w-7xl mx-auto px-6 text-center py-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-300 mb-8">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    v2.0 is now live for Figma
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-zinc-100 tracking-tight mb-6 leading-[1.1]">
                    Stop using <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Lorem Ipsum.</span><br/>
                    Design with real context.
                </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Generate context-aware text and photorealistic images directly inside your Figma frames. Powered by AI, designed for UI pros.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto bg-zinc-100 text-zinc-950 hover:bg-white h-12 px-8 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2" onclick="switchPage('dashboard')">
                        Install Plugin
                        <iconify-icon icon="lucide:figma" width="16"></iconify-icon>
</button>
<button className="w-full md:w-auto bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-700 h-12 px-8 rounded-full font-medium transition-all flex items-center justify-center gap-2" onclick="switchPage('docs')">
<iconify-icon icon="lucide:play-circle" width="16"></iconify-icon>
                        Watch Demo
                    </button>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="relative rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] group">

<div className="h-10 border-b border-zinc-800 flex items-center px-4 justify-between bg-zinc-950">
<div className="flex gap-4">
<iconify-icon className="text-zinc-500" icon="lucide:menu"></iconify-icon>
<iconify-icon className="text-zinc-100" icon="lucide:mouse-pointer-2"></iconify-icon>
<iconify-icon className="text-zinc-500" icon="lucide:layout-grid"></iconify-icon>
</div>
<div className="text-xs font-medium text-zinc-400">Landing Page - Desktop</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-indigo-500 text-[10px] flex items-center justify-center text-white border border-zinc-950">JD</div>
<div className="w-6 h-6 rounded-full bg-purple-500 text-[10px] flex items-center justify-center text-white border border-zinc-950">AL</div>
</div>
</div>

<div className="relative h-full flex">

<div className="w-60 border-r border-zinc-800 bg-zinc-950 p-4 hidden md:block">
<div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-4">Layers</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-zinc-300 bg-indigo-500/10 p-1.5 rounded"><iconify-icon icon="lucide:layout"></iconify-icon> Hero Section</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 px-1.5"><iconify-icon icon="lucide:type"></iconify-icon> Headline</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 px-1.5"><iconify-icon icon="lucide:image"></iconify-icon> Cover Image</div>
</div>
</div>

<div className="flex-1 bg-zinc-900 flex items-center justify-center relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-zinc-950 border border-zinc-700 rounded-lg shadow-2xl p-4 z-20">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<div className="w-4 h-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-sm"></div>
                                        Loremia
                                    </div>
<iconify-icon className="text-zinc-500 cursor-pointer" icon="lucide:x"></iconify-icon>
</div>
<div className="space-y-3">
<div>
<label className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wider">Context</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded px-2 py-1.5 text-xs text-zinc-300 mt-1 focus:outline-none focus:border-indigo-500" type="text" value="Modern SaaS Header"/>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs py-2 rounded font-medium transition-colors">Generate Text</button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs py-2 rounded font-medium transition-colors">Generate Image</button>
</div>
<div className="h-px bg-zinc-800 my-2"></div>
<div className="flex justify-between text-[10px] text-zinc-500">
<span>Tokens: 1,420</span>
<span>Account: Pro</span>
</div>
</div>
</div>

<div className="bg-white w-[500px] h-[300px] rounded shadow-sm p-8 opacity-20 scale-90 md:scale-100">
<div className="w-2/3 h-8 bg-black rounded mb-4"></div>
<div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
<div className="w-5/6 h-4 bg-gray-300 rounded mb-8"></div>
<div className="flex gap-4">
<div className="w-32 h-10 bg-black rounded"></div>
<div className="w-32 h-10 bg-gray-200 rounded"></div>
</div>
</div>
</div>

<div className="w-60 border-l border-zinc-800 bg-zinc-950 p-4 hidden lg:block">
<div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-4">Plugin Properties</div>
<div className="text-xs text-zinc-400">
                                Select a text layer or frame to populate with content.
                            </div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-100 group-hover:border-indigo-500/50 transition-colors">
<span className="font-mono text-sm">01</span>
</div>
<h3 className="text-zinc-100 font-semibold mb-2">Connect Figma</h3>
<p className="text-sm leading-relaxed text-zinc-500">Install the plugin from the community, enter your API key, and link your team workspace instantly.</p>
</div>
<div className="group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-100 group-hover:border-purple-500/50 transition-colors">
<span className="font-mono text-sm">02</span>
</div>
<h3 className="text-zinc-100 font-semibold mb-2">Select Context</h3>
<p className="text-sm leading-relaxed text-zinc-500">Tell Loremia what you're designing. "Fintech dashboard", "Yoga app", or "Pet store landing page".</p>
</div>
<div className="group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-100 group-hover:border-pink-500/50 transition-colors">
<span className="font-mono text-sm">03</span>
</div>
<h3 className="text-zinc-100 font-semibold mb-2">Generate Assets</h3>
<p className="text-sm leading-relaxed text-zinc-500">One click fills your text layers with coherent copy and frames with stock-quality AI imagery.</p>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-900 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-8">Trusted by product teams at</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">
<div className="text-lg font-semibold tracking-tighter text-white">ACME Corp</div>
<div className="text-lg font-semibold tracking-tighter text-white">ZYNC</div>
<div className="text-lg font-semibold tracking-tighter text-white">GALAXY</div>
<div className="text-lg font-semibold tracking-tighter text-white">NEXUS</div>
<div className="text-lg font-semibold tracking-tighter text-white">STRATOS</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800">
<div className="text-red-400 mb-4 font-mono text-xs">WITHOUT LOREMIA</div>
<h4 className="text-xl text-zinc-300 font-medium mb-4">The "Lorem Ipsum" Trap</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className="flex gap-3"><iconify-icon className="text-red-500/50" icon="lucide:x"></iconify-icon> Generic, meaningless placeholders</li>
<li className="flex gap-3"><iconify-icon className="text-red-500/50" icon="lucide:x"></iconify-icon> Clients get distracted by fake text</li>
<li className="flex gap-3"><iconify-icon className="text-red-500/50" icon="lucide:x"></iconify-icon> Hours wasted searching Unsplash</li>
</ul>
</div>
<div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/10 to-purple-900/10 border border-indigo-500/20">
<div className="text-indigo-400 mb-4 font-mono text-xs">WITH LOREMIA</div>
<h4 className="text-xl text-zinc-100 font-medium mb-4">Production-Ready Context</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex gap-3"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Context-aware copy that sells</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Better stakeholder feedback loop</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Unique images generated in seconds</li>
</ul>
</div>
</div>
</section>

<section className="py-24 text-center">
<h2 className="text-3xl font-semibold text-zinc-100 tracking-tight mb-6">Ready to speed up your workflow?</h2>
<p className="text-zinc-500 mb-8">Join 10,000+ designers saving 80% of content time.</p>
<button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors" onclick="switchPage('pricing')">Start Free Trial</button>
</section>
</div>

<div className="hidden" id="dashboard-page">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">

<aside className="w-full md:w-64 flex-shrink-0">
<div className="sticky top-24 space-y-8">
<div>
<div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4 px-2">Account</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-100 bg-zinc-900 rounded-md font-medium" href="#"><iconify-icon icon="lucide:layout-dashboard"></iconify-icon> Overview</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md transition-colors" href="#"><iconify-icon icon="lucide:credit-card"></iconify-icon> Subscription</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md transition-colors" href="#"><iconify-icon icon="lucide:users"></iconify-icon> Team</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md transition-colors" href="#"><iconify-icon icon="lucide:settings"></iconify-icon> Settings</a>
</nav>
</div>
<div>
<div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4 px-2">Developer</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md transition-colors" href="#"><iconify-icon icon="lucide:key"></iconify-icon> API Keys</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-md transition-colors" href="#"><iconify-icon icon="lucide:file-text"></iconify-icon> Usage Logs</a>
</nav>
</div>
</div>
</aside>

<div className="flex-1 space-y-8">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
<div className="text-sm text-zinc-500 mb-2">Available Tokens</div>
<div className="text-3xl font-semibold text-zinc-100 tracking-tight">24,500</div>
<div className="text-xs text-indigo-400 mt-2">+500 recharge incoming</div>
</div>
<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
<div className="text-sm text-zinc-500 mb-2">Images Generated</div>
<div className="text-3xl font-semibold text-zinc-100 tracking-tight">142</div>
<div className="text-xs text-zinc-500 mt-2">This billing cycle</div>
</div>
<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
<div className="text-sm text-zinc-500 mb-2">Time Saved (Est.)</div>
<div className="text-3xl font-semibold text-zinc-100 tracking-tight">12h 30m</div>
<div className="text-xs text-zinc-500 mt-2">Based on avg. user</div>
</div>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-zinc-100">API Access</h3>
<button className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-md transition-colors">Generate New Key</button>
</div>
<div className="flex items-center gap-4 bg-zinc-950 border border-zinc-800 p-3 rounded-lg">
<div className="bg-zinc-900 px-2 py-1 rounded text-xs text-zinc-500 font-mono">sk_live_...4x89</div>
<input className="bg-transparent flex-1 text-sm text-zinc-500 font-mono focus:outline-none" disabled="" type="text" value="********************************"/>
<button className="text-zinc-400 hover:text-white"><iconify-icon icon="lucide:copy" width="16"></iconify-icon></button>
<button className="text-red-400 hover:text-red-300"><iconify-icon icon="lucide:trash-2" width="16"></iconify-icon></button>
</div>
<p className="text-xs text-zinc-600 mt-3">Use this key in the Figma plugin settings to authenticate.</p>
</div>

<div className="border border-zinc-800 rounded-xl overflow-hidden">
<div className="bg-zinc-900/50 px-6 py-4 border-b border-zinc-800 flex justify-between items-center">
<h3 className="text-sm font-medium text-zinc-100">Generation History</h3>
<button className="text-xs text-zinc-500 hover:text-zinc-300">View All</button>
</div>
<table className="w-full text-left text-sm text-zinc-500">
<thead className="bg-zinc-900/30 text-xs uppercase font-medium">
<tr>
<th className="px-6 py-3">Type</th>
<th className="px-6 py-3">Context</th>
<th className="px-6 py-3">Cost</th>
<th className="px-6 py-3 text-right">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50">
<tr className="hover:bg-zinc-900/20">
<td className="px-6 py-4 flex items-center gap-2"><iconify-icon className="text-purple-400" icon="lucide:image"></iconify-icon> Image</td>
<td className="px-6 py-4">Portrait of CEO, studio lighting</td>
<td className="px-6 py-4 text-zinc-300">50 Tokens</td>
<td className="px-6 py-4 text-right">2 mins ago</td>
</tr>
<tr className="hover:bg-zinc-900/20">
<td className="px-6 py-4 flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:type"></iconify-icon> Text</td>
<td className="px-6 py-4">SaaS Pricing tier descriptions</td>
<td className="px-6 py-4 text-zinc-300">5 Tokens</td>
<td className="px-6 py-4 text-right">15 mins ago</td>
</tr>
<tr className="hover:bg-zinc-900/20">
<td className="px-6 py-4 flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:type"></iconify-icon> Text</td>
<td className="px-6 py-4">Blog post summary</td>
<td className="px-6 py-4 text-zinc-300">3 Tokens</td>
<td className="px-6 py-4 text-right">1 hour ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="hidden animate-fade-in" id="pricing-page">
<section className="max-w-7xl mx-auto px-6 py-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-zinc-100 tracking-tight mb-4">Pay for what you generate</h2>
<p className="text-zinc-500">All plans include full feature access. Upgrade anytime as your team scales.</p>
</div>

<div className="max-w-3xl mx-auto bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 mb-16">
<h3 className="text-zinc-100 font-medium mb-8 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="lucide:calculator"></iconify-icon> Token Calculator
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-8">
<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-medium text-zinc-400">Images / Month</label>
<span className="text-xs font-mono text-zinc-100" id="img-val">100</span>
</div>
<input className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400" id="img-slider" max="500" min="0" oninput="calculateTokens()" type="range" value="100"/>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-medium text-zinc-400">Text generations / Month</label>
<span className="text-xs font-mono text-zinc-100" id="txt-val">500</span>
</div>
<input className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400" id="txt-slider" max="2000" min="0" oninput="calculateTokens()" type="range" value="500"/>
</div>
</div>
<div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex flex-col justify-center text-center">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Estimated Tokens</div>
<div className="text-4xl font-semibold text-white tracking-tight mb-2" id="total-tokens">5,500</div>
<div className="text-xs text-zinc-600">Recommends: <span className="text-indigo-400 font-medium" id="rec-plan">Starter</span></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-zinc-800 bg-zinc-900/20 rounded-2xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
<h3 className="text-zinc-100 font-medium text-lg mb-2">Starter</h3>
<p className="text-sm text-zinc-500 mb-6">For freelance designers.</p>
<div className="text-3xl font-semibold text-zinc-100 tracking-tight mb-1">$9<span className="text-sm font-normal text-zinc-500">/mo</span></div>
<div className="text-xs text-zinc-500 mb-8">10,000 Tokens</div>
<button className="w-full py-2 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-sm font-medium transition-colors mb-8">Subscribe</button>
<ul className="space-y-3 text-sm text-zinc-400 flex-1">
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="lucide:check"></iconify-icon> 1 User</li>
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="lucide:check"></iconify-icon> ~200 Images</li>
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="lucide:check"></iconify-icon> Unlimited Text</li>
</ul>
</div>

<div className="border border-indigo-500/30 bg-zinc-900/40 rounded-2xl p-8 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-indigo-600 text-[10px] font-bold px-3 py-1 rounded-bl-lg text-white">POPULAR</div>
<h3 className="text-zinc-100 font-medium text-lg mb-2">Pro</h3>
<p className="text-sm text-zinc-500 mb-6">For small product teams.</p>
<div className="text-3xl font-semibold text-zinc-100 tracking-tight mb-1">$29<span className="text-sm font-normal text-zinc-500">/mo</span></div>
<div className="text-xs text-zinc-500 mb-8">50,000 Tokens</div>
<button className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors mb-8">Subscribe</button>
<ul className="space-y-3 text-sm text-zinc-400 flex-1">
<li className="flex gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check"></iconify-icon> 5 Users</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check"></iconify-icon> ~1000 Images</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check"></iconify-icon> Priority Speed</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check"></iconify-icon> Usage Analytics</li>
</ul>
</div>

<div className="border border-zinc-800 bg-zinc-900/20 rounded-2xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
<h3 className="text-zinc-100 font-medium text-lg mb-2">Agency</h3>
<p className="text-sm text-zinc-500 mb-6">For heavy usage.</p>
<div className="text-3xl font-semibold text-zinc-100 tracking-tight mb-1">$99<span className="text-sm font-normal text-zinc-500">/mo</span></div>
<div className="text-xs text-zinc-500 mb-8">200,000 Tokens</div>
<button className="w-full py-2 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-sm font-medium transition-colors mb-8">Subscribe</button>
<ul className="space-y-3 text-sm text-zinc-400 flex-1">
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="lucide:check"></iconify-icon> Unlimited Users</li>
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="lucide:check"></iconify-icon> ~4000 Images</li>
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="lucide:check"></iconify-icon> Dedicated Support</li>
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="lucide:check"></iconify-icon> Single Sign-On (SSO)</li>
</ul>
</div>
</div>
</section>
</div>

<div className="hidden animate-fade-in" id="docs-page">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 py-12">
<div className="w-full md:w-64 flex-shrink-0">
<h3 className="font-semibold text-zinc-100 mb-4">Documentation</h3>
<ul className="space-y-2 text-sm border-l border-zinc-800 pl-4">
<li className="text-indigo-400 border-l border-indigo-500 -ml-[17px] pl-4">Getting Started</li>
<li className="text-zinc-500 hover:text-zinc-300 cursor-pointer">Installation</li>
<li className="text-zinc-500 hover:text-zinc-300 cursor-pointer">Generating Text</li>
<li className="text-zinc-500 hover:text-zinc-300 cursor-pointer">Generating Images</li>
<li className="text-zinc-500 hover:text-zinc-300 cursor-pointer">Token Calculation</li>
<li className="text-zinc-500 hover:text-zinc-300 cursor-pointer">FAQ</li>
</ul>
</div>
<div className="flex-1 max-w-3xl prose prose-invert prose-zinc">
<h1 className="text-3xl font-semibold text-zinc-100 tracking-tight mb-6">Getting Started with Loremia</h1>
<p className="text-zinc-400 mb-8 leading-relaxed">Loremia integrates directly into your Figma workflow. Follow this guide to install the plugin and generate your first assets.</p>
<h3 className="text-xl font-medium text-zinc-200 mb-4">Installation</h3>
<div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-8 font-mono text-sm text-zinc-400">
                        1. Open Figma <br/>
                        2. Go to "Community" tab <br/>
                        3. Search "Loremia" <br/>
                        4. Click "Try it out" or "Install"
                    </div>
<h3 className="text-xl font-medium text-zinc-200 mb-4">How Tokens Work</h3>
<p className="text-zinc-400 mb-4">We use a unified token system for both text and image generation. This allows flexibility based on your specific needs.</p>
<ul className="space-y-2 mb-8 text-zinc-400">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> <strong>Text:</strong> ~1 token per 10 words.</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> <strong>Images:</strong> 50 tokens per standard image generation.</li>
</ul>
<h3 className="text-xl font-medium text-zinc-200 mb-4">Best Practices</h3>
<p className="text-zinc-400">To get the best results, be specific with your context. Instead of "Header", try "Header for a fintech SaaS targeting millennials".</p>
</div>
</div>
</div>

<div className="hidden animate-fade-in" id="about-page">
<section className="max-w-4xl mx-auto px-6 py-24 text-center">
<h1 className="text-4xl md:text-5xl font-semibold text-zinc-100 tracking-tight mb-8">Design at the speed of thought.</h1>
<p className="text-xl text-zinc-500 leading-relaxed mb-16">
                     Our mission is to automate 80% of the repetitive content work in UI/UX design, allowing designers to focus on structure, flow, and empathy.
                 </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
<div className="p-6 bg-zinc-900/30 rounded-xl border border-zinc-800">
<iconify-icon className="text-yellow-500 mb-4 text-2xl" icon="lucide:zap"></iconify-icon>
<h3 className="font-medium text-zinc-100 mb-2">Speed</h3>
<p className="text-sm text-zinc-500">We believe context switching kills creativity. Keep everything inside Figma.</p>
</div>
<div className="p-6 bg-zinc-900/30 rounded-xl border border-zinc-800">
<iconify-icon className="text-green-500 mb-4 text-2xl" icon="lucide:shield-check"></iconify-icon>
<h3 className="font-medium text-zinc-100 mb-2">Reliability</h3>
<p className="text-sm text-zinc-500">Enterprise-grade uptime and secure data handling for sensitive client projects.</p>
</div>
<div className="p-6 bg-zinc-900/30 rounded-xl border border-zinc-800">
<iconify-icon className="text-indigo-500 mb-4 text-2xl" icon="lucide:layers"></iconify-icon>
<h3 className="font-medium text-zinc-100 mb-2">Integration</h3>
<p className="text-sm text-zinc-500">It shouldn't feel like a tool. It should feel like a superpower native to your environment.</p>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-zinc-500 text-sm">
<div className="w-4 h-4 bg-zinc-800 rounded-sm"></div>
                © 2023 Loremia AI Inc.
            </div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-300" href="#">Privacy</a>
<a className="hover:text-zinc-300" href="#">Terms</a>
<a className="hover:text-zinc-300" href="#">Twitter</a>
<a className="hover:text-zinc-300" href="#">Contact Support</a>
</div>
</div>
</footer>


    </>
  );
}
