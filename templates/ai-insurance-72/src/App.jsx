import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function showScreen(screenId) {
            // Hide all
            document.querySelectorAll('.screen-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('flex');
            });
            
            // Show selected
            const target = document.getElementById('screen-' + screenId);
            if (target) {
                target.classList.remove('hidden');
                if (screenId !== 'landing') {
                    target.classList.add('flex'); // Add flex back for dashboards
                }
            }

            // Update Buttons
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('bg-indigo-600', 'text-white');
                btn.classList.add('text-slate-400');
                if(btn.textContent.toLowerCase().includes(screenId.replace('screen-',''))) {
                   btn.classList.add('bg-indigo-600', 'text-white');
                   btn.classList.remove('text-slate-400');
                } else if (screenId === 'landing' && btn.textContent === 'Landing') {
                   btn.classList.add('bg-indigo-600', 'text-white');
                   btn.classList.remove('text-slate-400');
                } else if (screenId === 'dashboard' && btn.textContent === 'User Dash') {
                   btn.classList.add('bg-indigo-600', 'text-white');
                   btn.classList.remove('text-slate-400');
                } else if (screenId === 'chat' && btn.textContent === 'Chat AI') {
                   btn.classList.add('bg-indigo-600', 'text-white');
                   btn.classList.remove('text-slate-400');
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-float"></div>
<div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-3xl opacity-40 mix-blend-screen" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/3 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl opacity-30 mix-blend-screen" style={{animationDelay: '4s'}}></div>
</div>

<div className="relative z-10 h-screen flex flex-col" id="app-container">

<div className="bg-amber-500/10 border-b border-amber-500/20 backdrop-blur-md text-center py-2 relative z-[60]">
<div className="flex items-center justify-center gap-2 text-xs font-medium tracking-wide text-amber-200 animate-pulse">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
<span>THIS IS A DEMO VERSION CREATED TO SHOWCASE HOW THE SCREENS AND EXPERIENCE WILL LOOK DURING PRODUCTION. ALL CONTENT IS SAMPLE DATA.</span>
</div>
</div>

<header className="w-full glass sticky top-0 z-50 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="showScreen('landing')">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]">
<iconify-icon icon="solar:shield-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-lg">InsureMe</span>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#demo-gallery">Demo</a>
<a className="hover:text-white transition-colors" href="#api">API</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="h-8 w-[1px] bg-slate-800"></div>
<button className="text-sm font-medium text-slate-300 hover:text-white" onclick="showScreen('dashboard')">Log In</button>
<button className="text-xs font-semibold bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-indigo-50 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]" onclick="showScreen('dashboard')">Get Started</button>
</div>
</div>
</header>

<main className="screen-section flex-1 overflow-y-auto scroll-smooth" id="screen-landing">

<div className="relative pt-20 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-8 fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span>The Future of Risk Management</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-8 fade-in" style={{animationDelay: '0.1s'}}>
                        AI-Powered Insurance That <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 text-glow">Understands You.</span>
</h1>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed fade-in" style={{animationDelay: '0.2s'}}>
                        Experience the first insurance platform built on conversational AI. Get covered in seconds, file claims with a simple chat, and let our algorithms protect your future automatically.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in" style={{animationDelay: '0.3s'}}>
<button className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 group" onclick="showScreen('dashboard')">
<span>Get Started</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all backdrop-blur-sm" onclick="showScreen('dashboard')">
                            Sign In
                        </button>
</div>

<div className="mt-16 mx-auto max-w-5xl rounded-t-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-2 shadow-2xl fade-in" style={{animationDelay: '0.4s'}}>
<div className="rounded-t-xl overflow-hidden bg-slate-950 border border-white/5 aspect-[16/8] relative">

<div className="absolute inset-0 flex">
<div className="w-16 h-full border-r border-white/5 bg-slate-900/50 hidden md:block"></div>
<div className="flex-1 p-6">
<div className="flex justify-between items-center mb-6">
<div className="h-4 w-32 bg-slate-800 rounded"></div>
<div className="h-8 w-8 rounded-full bg-indigo-500/20"></div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-32 rounded-xl bg-slate-800/50 border border-white/5"></div>
<div className="h-32 rounded-xl bg-slate-800/50 border border-white/5"></div>
<div className="h-32 rounded-xl bg-indigo-600/10 border border-indigo-500/20"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
</div>
</div>
</div>
</div>

<div className="py-24 border-t border-white/5 bg-slate-950/50" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Insurance in Three Steps</h2>
<p className="text-slate-400">Forget paperwork. Just chat.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-all"></div>
<div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
<iconify-icon icon="solar:chat-square-like-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">1. Chat with AI</h3>
<p className="text-sm text-slate-400 leading-relaxed">Tell our assistant what you need protected. It asks only what's necessary, skipping the jargon.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all"></div>
<div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">2. Get Instant Coverage</h3>
<p className="text-sm text-slate-400 leading-relaxed">Our risk engine analyzes data in real-time. Review your custom policy and activate it in seconds.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-all"></div>
<div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">3. Manage &amp; Claim Easily</h3>
<p className="text-sm text-slate-400 leading-relaxed">Need to file a claim? Just snap a photo and upload. AI validates and processes payouts instantly.</p>
</div>
</div>
</div>
</div>

<div className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-indigo-400 font-medium tracking-wider text-xs uppercase mb-2 block">System Capabilities</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">The Complete Ecosystem</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

<div className="md:col-span-2 glass-card rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center gap-8 group">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:camera-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Smart Claims Automation</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Simply describe the incident and upload photos. Our Computer Vision AI assesses damage severity, cross-references geolocation, and estimates repair costs instantly.</p>
<button className="text-sm font-medium text-pink-400 hover:text-pink-300 flex items-center gap-2" onclick="showScreen('claims')">Try Demo Claim <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>

<div className="w-full md:w-64 h-48 rounded-xl bg-slate-900 border border-white/5 relative overflow-hidden flex items-center justify-center">
<iconify-icon className="text-pink-500/20 text-6xl group-hover:scale-110 transition-transform duration-500" icon="solar:scanner-linear"></iconify-icon>
<div className="absolute bottom-4 left-4 right-4 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-pink-500 w-[70%]"></div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 group">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Conversational Advisor</h3>
<p className="text-slate-400 text-sm leading-relaxed">It remembers your properties, vehicles, and history, offering personalized advice rather than generic quotes.</p>
</div>

<div className="glass-card rounded-3xl p-8 group">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:folder-with-files-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Policy Management Hub</h3>
<p className="text-slate-400 text-sm leading-relaxed">Centralize everything. Car, home, health, and gadget insurance in one unified dashboard view.</p>
</div>

<div className="glass-card rounded-3xl p-8 group">
<div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:card-recieved-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Auto-Payments</h3>
<p className="text-slate-400 text-sm leading-relaxed">Smart reminders and auto-renewals ensure you never have a lapse in coverage.</p>
</div>

<div className="md:col-span-2 glass-card rounded-3xl p-8 flex flex-col md:flex-row-reverse items-start md:items-center gap-8 group">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Fraud Detection &amp; Admin</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Enterprise-grade tools for insurance teams. AI flags suspicious patterns, metadata mismatches, and identity risks for manual review in the fast-review dashboard.</p>
<button className="text-sm font-medium text-orange-400 hover:text-orange-300 flex items-center gap-2" onclick="showScreen('admin')">View Admin Panel <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
<div className="w-full md:w-64 h-48 rounded-xl bg-slate-900 border border-white/5 relative overflow-hidden flex flex-col p-4 gap-2">
<div className="w-full h-8 bg-slate-800 rounded border border-white/5"></div>
<div className="w-full h-8 bg-slate-800 rounded border border-white/5"></div>
<div className="w-full h-8 bg-red-500/10 rounded border border-red-500/20 flex items-center px-2">
<div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
</div>
</div>
</div>

<div className="md:col-span-3 glass-card rounded-3xl p-8 bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:code-square-linear"></iconify-icon>
                                    Developer API Access
                                </h3>
<p className="text-slate-400 text-sm max-w-xl">Built for scale. Integrate InsureMe's quoting and claims engine directly into your fintech app, dealership software, or property management platform.</p>
</div>
<button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap" onclick="showScreen('api')">Read Documentation</button>
</div>
</div>
</div>
</div>

<div className="py-24 border-y border-white/5 bg-slate-950/30">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Why Choose InsureMe?</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
<div className="p-4">
<h4 className="text-white font-semibold text-lg mb-2">10x Faster</h4>
<p className="text-sm text-slate-400">Claims processed in minutes, not weeks.</p>
</div>
<div className="p-4">
<h4 className="text-white font-semibold text-lg mb-2">Precision AI</h4>
<p className="text-sm text-slate-400">Risk models that are fair and accurate.</p>
</div>
<div className="p-4">
<h4 className="text-white font-semibold text-lg mb-2">Zero Paperwork</h4>
<p className="text-sm text-slate-400">Entirely digital, from quote to payout.</p>
</div>
<div className="p-4">
<h4 className="text-white font-semibold text-lg mb-2">Hyper-Personal</h4>
<p className="text-sm text-slate-400">Coverage that adapts to your lifestyle.</p>
</div>
<div className="p-4">
<h4 className="text-white font-semibold text-lg mb-2">24/7 Support</h4>
<p className="text-sm text-slate-400">The AI assistant never sleeps.</p>
</div>
<div className="p-4">
<h4 className="text-white font-semibold text-lg mb-2">Data Driven</h4>
<p className="text-sm text-slate-400">Better decisions backed by real-time analytics.</p>
</div>
</div>
</div>
</div>

<div className="py-24 relative overflow-hidden" id="demo-gallery">
<div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-end">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Experience the Platform</h2>
<p className="text-slate-400">Swipe to explore the interface.</p>
</div>
<div className="flex gap-2">
<iconify-icon className="text-slate-500" icon="solar:arrow-left-linear"></iconify-icon>
<iconify-icon className="text-white" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="flex overflow-x-auto snap-x-mandatory hide-scrollbar gap-6 px-6 pb-10 max-w-7xl mx-auto">

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] glass-card rounded-2xl p-2 border border-white/10 group cursor-pointer" onclick="showScreen('chat')">
<div className="bg-slate-900 rounded-xl overflow-hidden aspect-video relative border border-white/5">
<div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-sm">
<span className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full">Interact with Chat</span>
</div>
<div className="p-6 flex flex-col h-full">
<div className="flex gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-indigo-500"></div><div className="flex-1 h-12 bg-slate-800 rounded-tr-xl rounded-b-xl"></div></div>
<div className="flex gap-3 mb-4 flex-row-reverse"><div className="w-8 h-8 rounded-full bg-slate-700"></div><div className="flex-1 h-8 bg-indigo-600 rounded-tl-xl rounded-b-xl"></div></div>
</div>
</div>
<div className="p-4">
<h4 className="text-white font-medium">Conversational Interface</h4>
<p className="text-xs text-slate-400">Natural language processing for instant quotes.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] glass-card rounded-2xl p-2 border border-white/10 group cursor-pointer" onclick="showScreen('dashboard')">
<div className="bg-slate-900 rounded-xl overflow-hidden aspect-video relative border border-white/5">
<div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-sm">
<span className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full">View Dashboard</span>
</div>
<div className="p-6 grid grid-cols-2 gap-4">
<div className="h-24 bg-slate-800 rounded-xl"></div>
<div className="h-24 bg-slate-800 rounded-xl"></div>
<div className="col-span-2 h-20 bg-slate-800 rounded-xl"></div>
</div>
</div>
<div className="p-4">
<h4 className="text-white font-medium">User Dashboard</h4>
<p className="text-xs text-slate-400">Overview of policies, payments, and alerts.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] glass-card rounded-2xl p-2 border border-white/10 group cursor-pointer" onclick="showScreen('claims')">
<div className="bg-slate-900 rounded-xl overflow-hidden aspect-video relative border border-white/5">
<div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-sm">
<span className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full">View Claims</span>
</div>
<div className="p-6 space-y-3">
<div className="h-16 bg-slate-800 rounded-xl border-l-4 border-green-500"></div>
<div className="h-16 bg-slate-800 rounded-xl border-l-4 border-orange-500"></div>
</div>
</div>
<div className="p-4">
<h4 className="text-white font-medium">Claims Tracking</h4>
<p className="text-xs text-slate-400">Real-time status updates and evidence upload.</p>
</div>
</div>
</div>
</div>

<div className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight text-center mb-16">Trusted by Early Adopters</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="glass-card p-6 rounded-2xl">
<div className="flex gap-1 text-amber-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6">"I filed a claim for a scratched bumper and was paid out in 4 minutes. I didn't talk to a single human. This is magic."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-xs text-white">JD</div>
<div><div className="text-white text-sm font-medium">John D.</div><div className="text-slate-500 text-xs">Tesla Owner</div></div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl">
<div className="flex gap-1 text-amber-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6">"The AI advisor actually helped me save money by suggesting I bundle my home and auto. Super intuitive UI."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-xs text-white">SA</div>
<div><div className="text-white text-sm font-medium">Sarah A.</div><div className="text-slate-500 text-xs">Homeowner</div></div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl">
<div className="flex gap-1 text-amber-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6">"As a developer, the API documentation is top-notch. Integrated the quoting engine into our app in a weekend."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-xs text-white">MK</div>
<div><div className="text-white text-sm font-medium">Mike K.</div><div className="text-slate-500 text-xs">Fintech CTO</div></div>
</div>
</div>
</div>
</div>
</div>

<div className="py-24 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight text-center mb-16">Flexible Plans</h2>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="glass-card p-8 rounded-2xl border border-white/5">
<h3 className="text-white font-medium mb-2">Basic Demo</h3>
<div className="text-3xl font-bold text-white mb-6">$0 <span className="text-sm font-normal text-slate-500">/mo</span></div>
<ul className="space-y-3 text-sm text-slate-400 mb-8">
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Chat Interface</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Basic Claims</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> 1 Vehicle</li>
</ul>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-colors">Start Demo</button>
</div>

<div className="glass-card p-8 rounded-2xl border border-indigo-500/50 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-indigo-600 rounded-full text-[10px] uppercase font-bold text-white tracking-wider">Most Popular</div>
<h3 className="text-white font-medium mb-2">Advanced Demo</h3>
<div className="text-3xl font-bold text-white mb-6">$29 <span className="text-sm font-normal text-slate-500">/mo</span></div>
<ul className="space-y-3 text-sm text-slate-400 mb-8">
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Everything in Basic</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Instant Payouts</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Multiple Policies</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Smart Alerts</li>
</ul>
<button className="w-full py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25">Start Demo</button>
</div>

<div className="glass-card p-8 rounded-2xl border border-white/5">
<h3 className="text-white font-medium mb-2">Enterprise Demo</h3>
<div className="text-3xl font-bold text-white mb-6">Custom</div>
<ul className="space-y-3 text-sm text-slate-400 mb-8">
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Admin Dashboard</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Fraud Detection API</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Dedicated Support</li>
</ul>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</div>

<div className="py-24 relative overflow-hidden" id="api">
<div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-300 text-xs font-medium mb-6">
<iconify-icon icon="solar:code-square-linear"></iconify-icon>
<span>Developers First</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Build the Future of Insurance</h2>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">Embed our quoting, binding, and claims APIs into your own applications. Perfect for proptech, automotive retail, and fintech platforms.</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-slate-300 text-sm">
<div className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
<span>99.9% Uptime SLA</span>
</div>
<div className="flex items-center gap-3 text-slate-300 text-sm">
<div className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
<span>REST &amp; GraphQL Support</span>
</div>
<div className="flex items-center gap-3 text-slate-300 text-sm">
<div className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
<span>Sandbox Environment Available</span>
</div>
</div>
<div className="flex gap-4">
<button className="px-6 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-200 transition-colors">Read API Docs</button>
<button className="px-6 py-3 border border-white/10 text-slate-400 rounded-lg hover:text-white hover:bg-white/5 transition-colors cursor-not-allowed opacity-50" title="Disabled for demo">Generate Key</button>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-[#0d1117] rounded-xl border border-white/10 p-6 shadow-2xl font-mono text-xs md:text-sm">
<div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
<span className="ml-2 text-slate-500">claim_submission.js</span>
</div>
<pre className="text-slate-300 overflow-x-auto">
<span className="text-purple-400">const</span> insureMe = <span className="text-purple-400">require</span>(<span className="text-green-400">'insureme-sdk'</span>);

<span className="text-slate-500">// Initialize AI Claim Handler</span>
<span className="text-purple-400">const</span> claim = <span className="text-purple-400">await</span> insureMe.claims.create({
  policy_id: <span className="text-green-400">'pol_88392_x'</span>,
  incident_type: <span className="text-green-400">'collision'</span>,
  images: [<span className="text-green-400">'img_bumper_01.jpg'</span>],
  description: <span className="text-green-400">'Rear ended at stop sign'</span>
});

<span className="text-slate-500">// AI Processing Response</span>
console.log(claim.decision);
<span className="text-slate-500">// Output: { status: 'approved', amount: 450.00 }</span>
</pre>
</div>
</div>
</div>
</div>

<footer className="border-t border-white/5 py-16 bg-slate-950/80">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-star-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-semibold">InsureMe</span>
</div>
<p className="text-xs text-slate-500">The next generation of insurance processing powered by Large Vision Models.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Products</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Solutions</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-slate-600 text-xs">© 2023 InsureMe AI Inc. All rights reserved. Demo Version.</span>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>
</main>

<main className="screen-section flex-1 flex hidden" id="screen-dashboard">

<aside className="w-64 border-r border-white/5 bg-slate-950/50 hidden md:flex flex-col p-4">
<div className="flex flex-col gap-1">
<button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-600/20 text-sm font-medium">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
                        Home
                    </button>
<button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-sm font-medium transition-colors">
<iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon>
                        Chat AI
                    </button>
<button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-sm font-medium transition-colors">
<iconify-icon icon="solar:file-check-linear" width="20"></iconify-icon>
                        My Policies
                    </button>
<button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-sm font-medium transition-colors">
<iconify-icon icon="solar:umbrella-linear" width="20"></iconify-icon>
                        Claims
                    </button>
<button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-sm font-medium transition-colors">
<iconify-icon icon="solar:card-linear" width="20"></iconify-icon>
                        Payments
                    </button>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-sm font-medium transition-colors w-full">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
                        Settings
                    </button>
</div>
</aside>

<div className="flex-1 overflow-y-auto p-6 lg:p-10">
<header className="flex justify-between items-center mb-8">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight">Welcome back, Alex</h2>
<p className="text-sm text-slate-400">Here's your insurance overview.</p>
</div>
<button className="relative w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full"></span>
</button>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="glass-card p-6 rounded-2xl">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-sm text-slate-400">Active Policies</p>
<h3 className="text-3xl font-semibold text-white mt-1">3</h3>
</div>
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
</div>
<div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-full"></div>
</div>
<p className="text-xs text-green-400 mt-2">All systems secure</p>
</div>

<div className="glass-card p-6 rounded-2xl">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-sm text-slate-400">Upcoming Payment</p>
<h3 className="text-3xl font-semibold text-white mt-1">$124.00</h3>
</div>
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:bill-list-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-xs text-slate-400">Due Oct 14, 2023 • Auto Policy</p>
<button className="mt-3 text-xs font-medium text-blue-400 hover:text-blue-300">Pay Now →</button>
</div>

<div className="glass-card p-6 rounded-2xl border-orange-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 p-16 bg-orange-500/5 blur-2xl rounded-full"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div>
<p className="text-sm text-slate-400">AI Risk Alert</p>
<h3 className="text-lg font-semibold text-white mt-1">Severe Weather</h3>
</div>
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 animate-pulse">
<iconify-icon icon="solar:danger-triangle-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-xs text-slate-300 relative z-10">Hailstorm detected in your area. Park your vehicle inside.</p>
</div>
</div>

<h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Quick Actions</h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<button className="glass-card p-5 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-all group text-left">
<div className="w-12 h-12 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Insure Something</h4>
<p className="text-xs text-slate-400">Get a quote in seconds</p>
</div>
</button>
<button className="glass-card p-5 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-all group text-left">
<div className="w-12 h-12 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">File a Claim</h4>
<p className="text-xs text-slate-400">Upload and process</p>
</div>
</button>
<button className="glass-card p-5 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-all group text-left">
<div className="w-12 h-12 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:question-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Ask Question</h4>
<p className="text-xs text-slate-400">Consult the AI</p>
</div>
</button>
</div>
</div>
</main>

<main className="screen-section flex-1 flex hidden relative overflow-hidden" id="screen-chat">

<aside className="w-20 border-r border-white/5 bg-slate-950/50 hidden md:flex flex-col items-center py-6 gap-6">
<button className="w-10 h-10 rounded-xl bg-white/5 text-slate-400 hover:text-white flex items-center justify-center" onclick="showScreen('dashboard')"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon></button>
<div className="w-8 h-[1px] bg-white/10"></div>
<button className="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20"><iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon></button>
</aside>
<div className="flex-1 flex flex-col relative">

<div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
<div className="px-4 py-1.5 rounded-full glass border border-indigo-500/20 flex items-center gap-2 shadow-lg">
<iconify-icon className="text-indigo-400" icon="solar:brain-linear" width="16"></iconify-icon>
<span className="text-xs text-indigo-300 font-medium tracking-tight">AI remembers you’re insuring a 2022 Toyota Camry</span>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-6 flex flex-col pt-16">

<div className="flex items-start gap-4 max-w-2xl fade-in">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shrink-0 shadow-lg">
<iconify-icon icon="solar:stars-minimalistic-bold" width="20"></iconify-icon>
</div>
<div className="space-y-2">
<div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 text-slate-300 text-sm leading-relaxed rounded-tl-none">
<p>Hello Alex! I see you're planning a road trip this weekend. Would you like to check if your current coverage includes roadside assistance for out-of-state travel?</p>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs hover:bg-indigo-500/20 transition">Yes, check coverage</button>
<button className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs hover:bg-indigo-500/20 transition">What's my deductible?</button>
</div>
</div>
</div>

<div className="flex items-start gap-4 max-w-2xl self-end flex-row-reverse fade-in" style={{animationDelay: '0.1s'}}>
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 shrink-0">
<span className="text-xs font-bold">AL</span>
</div>
<div className="p-5 rounded-2xl bg-indigo-600 text-white text-sm leading-relaxed rounded-tr-none shadow-[0_4px_20px_rgba(79,70,229,0.3)]">
<p>Actually, I want to report a minor scratch on the bumper. How does that affect my premium?</p>
</div>
</div>

<div className="flex items-start gap-4 max-w-2xl fade-in" style={{animationDelay: '0.2s'}}>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shrink-0 shadow-lg">
<iconify-icon icon="solar:stars-minimalistic-bold" width="20"></iconify-icon>
</div>
<div className="space-y-2">
<div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 text-slate-300 text-sm leading-relaxed rounded-tl-none">
<p>I can help with that. For minor aesthetic damages under $500, we recommend not filing a formal claim to keep your "No Claim Bonus" intact. <br/><br/>Would you like me to estimate the repair cost if you upload a photo?</p>
</div>
</div>
</div>
</div>

<div className="p-6 md:p-8 bg-slate-950/80 backdrop-blur-xl border-t border-white/5">
<div className="max-w-4xl mx-auto relative">
<div className="flex items-center gap-3 p-2 pr-2 rounded-2xl bg-slate-900 border border-white/10 focus-within:border-indigo-500/50 transition-colors shadow-lg">
<button className="w-10 h-10 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:paperclip-linear" width="20"></iconify-icon>
</button>
<input className="flex-1 bg-transparent text-white text-sm placeholder-slate-500 focus:outline-none h-10" placeholder="Type a message or describe your issue..." type="text"/>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</button>
<button className="h-10 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)]">
<span>Send</span>
<iconify-icon icon="solar:plain-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<p className="text-center text-[10px] text-slate-600 mt-3 uppercase tracking-widest">AI Agent v2.4 • Secured End-to-End</p>
</div>
</div>
</div>
</main>

<main className="screen-section flex-1 overflow-y-auto p-6 lg:p-10 hidden" id="screen-policy">
<div className="max-w-5xl mx-auto">
<button className="mb-6 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors" onclick="showScreen('dashboard')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Dashboard
                </button>

<div className="glass-card rounded-3xl p-8 mb-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="flex flex-col md:flex-row justify-between md:items-center gap-6 relative z-10">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active
                                </span>
<span className="text-slate-400 text-sm">#POL-88392-X</span>
</div>
<h1 className="text-3xl font-semibold text-white tracking-tight mb-1">Tesla Model 3 - Comprehensive</h1>
<p className="text-sm text-slate-400">Renewal Date: <span className="text-slate-200">Nov 12, 2024</span></p>
</div>
<div className="flex gap-4">
<button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-colors">Download Docs</button>
<button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all flex items-center gap-2">
<iconify-icon icon="solar:chat-line-linear" width="18"></iconify-icon>
                                Chat About Policy
                            </button>
</div>
</div>
</div>

<div className="flex gap-8 border-b border-white/10 mb-8">
<button className="pb-4 text-sm font-medium text-white border-b-2 border-indigo-500">Overview</button>
<button className="pb-4 text-sm font-medium text-slate-400 hover:text-white transition-colors">History</button>
<button className="pb-4 text-sm font-medium text-slate-400 hover:text-white transition-colors">Documents</button>
<button className="pb-4 text-sm font-medium text-slate-400 hover:text-white transition-colors">AI Insights</button>
</div>

<div className="grid md:grid-cols-3 gap-6">
<div className="md:col-span-2 space-y-6">
<div className="glass-card rounded-2xl p-6">
<h3 className="text-lg font-semibold text-white mb-4">Coverage Details</h3>
<div className="space-y-4">
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-slate-400 text-sm">Bodily Injury Liability</span>
<span className="text-white text-sm font-medium">$250,000 / $500,000</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-slate-400 text-sm">Property Damage</span>
<span className="text-white text-sm font-medium">$100,000</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-slate-400 text-sm">Collision Deductible</span>
<span className="text-white text-sm font-medium">$500</span>
</div>
</div>
</div>
</div>
<div className="space-y-6">
<div className="glass-card rounded-2xl p-6">
<h3 className="text-lg font-semibold text-white mb-4">Linked Drivers</h3>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">AL</div>
<span className="text-sm text-slate-200">Alex Doe (Primary)</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">SA</div>
<span className="text-sm text-slate-200">Sarah Doe</span>
</div>
</div>
<div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20">
<div className="flex items-center gap-2 mb-2 text-indigo-400">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">AI Optimization</span>
</div>
<p className="text-sm text-slate-300 mb-3">Based on your driving data (94/100 score), you qualify for a premium reduction next month.</p>
<button className="text-xs text-white font-medium underline decoration-indigo-500 underline-offset-4">View Analysis</button>
</div>
</div>
</div>
</div>
</main>

<main className="screen-section flex-1 overflow-y-auto p-6 lg:p-10 hidden" id="screen-claims">
<div className="max-w-6xl mx-auto">
<header className="flex justify-between items-center mb-10">
<div>
<button className="flex items-center gap-2 text-xs text-slate-400 mb-2 hover:text-white" onclick="showScreen('dashboard')"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Dashboard</button>
<h2 className="text-2xl font-semibold text-white tracking-tight">Your Claims</h2>
<p className="text-sm text-slate-400">Track status and file new requests.</p>
</div>
<button className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                        File New Claim
                    </button>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-2xl group cursor-pointer hover:border-indigo-500/30 transition-all">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<span className="px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium">Under Review</span>
</div>
<h3 className="text-lg font-semibold text-white mb-1">Windshield Crack</h3>
<p className="text-sm text-slate-400 mb-4">Filed: Oct 02, 2023</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-xs text-slate-500">Est. Amount</span>
<span className="text-sm font-medium text-white">$450.00</span>
</div>
</div>

<div className="glass-card p-6 rounded-2xl group cursor-pointer hover:border-indigo-500/30 transition-all opacity-75">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<span className="px-2.5 py-1 rounded-md bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">Approved</span>
</div>
<h3 className="text-lg font-semibold text-white mb-1">Minor Bumper Dent</h3>
<p className="text-sm text-slate-400 mb-4">Filed: Aug 15, 2023</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-xs text-slate-500">Paid Amount</span>
<span className="text-sm font-medium text-white">$1,200.00</span>
</div>
</div>

<div className="glass-card p-6 rounded-2xl border-indigo-500/30 bg-indigo-900/10">
<div className="flex items-center gap-2 mb-4 text-indigo-400">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">AI Analysis</span>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-4">Your current claim for the windshield is 85% likely to be approved within 24 hours based on the photos provided. No further evidence needed.</p>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700"></div> 
<div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-600"></div>
<div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-500 flex items-center justify-center text-[10px] text-white">+2</div>
</div>
</div>
</div>
</div>
</main>

<main className="screen-section flex-1 flex hidden" id="screen-admin">

<aside className="w-20 lg:w-64 border-r border-white/5 bg-slate-950/50 flex flex-col p-4">
<div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2 hidden lg:block">Admin Portal</div>
<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium mb-4" onclick="showScreen('landing')"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon><span className="hidden lg:block">Exit Demo</span></button>
<button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-indigo-600/20 text-indigo-300 text-sm font-medium"><iconify-icon icon="solar:widget-linear" width="20"></iconify-icon><span className="hidden lg:block">Dashboard</span></button>
<button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium"><iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon><span className="hidden lg:block">Users</span></button>
<button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium"><iconify-icon icon="solar:documents-linear" width="20"></iconify-icon><span className="hidden lg:block">Claims Queue</span></button>
<button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium"><iconify-icon icon="solar:shield-warning-linear" width="20"></iconify-icon><span className="hidden lg:block">Fraud Alerts</span></button>
</div>
</aside>
<div className="flex-1 overflow-y-auto p-8">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Enterprise Overview</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<div className="glass-card p-5 rounded-xl">
<p className="text-xs text-slate-400 uppercase">Pending Claims</p>
<h3 className="text-2xl font-semibold text-white mt-1">42</h3>
<span className="text-xs text-red-400 flex items-center gap-1 mt-2"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> +12% from yesterday</span>
</div>

<div className="glass-card p-5 rounded-xl">
<p className="text-xs text-slate-400 uppercase">Automation Score</p>
<h3 className="text-2xl font-semibold text-white mt-1">94.2%</h3>
<span className="text-xs text-green-400 flex items-center gap-1 mt-2"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> AI Handling Efficiency</span>
</div>

<div className="glass-card p-5 rounded-xl">
<p className="text-xs text-slate-400 uppercase">Fraud Detected</p>
<h3 className="text-2xl font-semibold text-white mt-1">3</h3>
<span className="text-xs text-orange-400 flex items-center gap-1 mt-2">Requires manual review</span>
</div>

<div className="glass-card p-5 rounded-xl">
<p className="text-xs text-slate-400 uppercase">Active Policies</p>
<h3 className="text-2xl font-semibold text-white mt-1">12,405</h3>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 glass-card p-6 rounded-2xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-white font-medium">Claims Volume</h3>
<select className="bg-slate-900 border border-white/10 text-xs text-white rounded p-1 outline-none"><option>This Week</option></select>
</div>

<div className="flex items-end justify-between h-48 gap-2">
<div className="w-full bg-indigo-500/20 rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm transition-all h-[40%] group-hover:bg-indigo-400"></div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm transition-all h-[65%] group-hover:bg-indigo-400"></div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm transition-all h-[50%] group-hover:bg-indigo-400"></div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm transition-all h-[85%] group-hover:bg-indigo-400"></div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm transition-all h-[30%] group-hover:bg-indigo-400"></div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm transition-all h-[60%] group-hover:bg-indigo-400"></div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm transition-all h-[75%] group-hover:bg-indigo-400"></div></div>
</div>
<div className="flex justify-between mt-2 text-xs text-slate-500">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
<div className="glass-card p-6 rounded-2xl">
<h3 className="text-white font-medium mb-4">Live Activity</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-2 h-2 mt-1.5 rounded-full bg-indigo-500"></div>
<div>
<p className="text-sm text-slate-300">New claim #9932 verified by AI.</p>
<span className="text-xs text-slate-500">2 min ago</span>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></div>
<div>
<p className="text-sm text-slate-300">Policy #221 renewed automatically.</p>
<span className="text-xs text-slate-500">14 min ago</span>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-2 h-2 mt-1.5 rounded-full bg-red-500"></div>
<div>
<p className="text-sm text-slate-300">Fraud alert triggered: ID Match fail.</p>
<span className="text-xs text-slate-500">1 hr ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="screen-section flex-1 overflow-y-auto p-6 lg:p-10 hidden" id="screen-review">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold text-white">Claim #CLM-99281</h2>
<span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium border border-yellow-500/20">Manual Review Required</span>
</div>

<div className="glass-card p-6 rounded-2xl">
<h3 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Evidence</h3>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center border border-white/5 relative group cursor-pointer overflow-hidden">
<iconify-icon className="text-slate-600" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-xs text-white">View Full</span>
</div>
</div>
<div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center border border-white/5">
<iconify-icon className="text-slate-600" icon="solar:play-circle-linear" width="32"></iconify-icon>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl">
<h3 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">User Statement (AI Transcript)</h3>
<div className="space-y-4">
<p className="text-sm text-slate-300 italic">"I was parked at the grocery store on 5th Ave. When I came out, the side mirror was hanging off. No note was left."</p>
<div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex gap-3 items-start">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:danger-circle-linear" width="16"></iconify-icon>
<p className="text-xs text-red-300">AI Note: Location metadata of photo does not match stated location (0.4 miles difference).</p>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="glass-card p-6 rounded-2xl border-t-4 border-t-indigo-500">
<h3 className="text-lg font-semibold text-white mb-4">AI Assessment</h3>
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-slate-400">Policy Status</span>
<span className="text-sm text-green-400">Active</span>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-slate-400">Coverage Type</span>
<span className="text-sm text-white">Comprehensive</span>
</div>
<div className="flex justify-between items-center mb-4">
<span className="text-sm text-slate-400">Est. Payout</span>
<span className="text-sm text-white font-bold">$320.00</span>
</div>
<div className="w-full bg-slate-800 h-2 rounded-full mb-2 overflow-hidden">
<div className="bg-yellow-500 w-[65%] h-full"></div>
</div>
<p className="text-xs text-slate-500 text-right">Confidence Score: 65%</p>
</div>
<div className="glass-card p-6 rounded-2xl">
<h3 className="text-lg font-semibold text-white mb-4">Admin Decision</h3>
<textarea className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-sm text-white mb-4 focus:border-indigo-500 outline-none h-24" placeholder="Internal notes..."></textarea>
<div className="grid grid-cols-2 gap-3">
<button className="py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-medium transition-colors">Approve</button>
<button className="py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-colors">Reject</button>
<button className="col-span-2 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-colors">Request Info</button>
</div>
</div>
</div>
</div>
</main>

<main className="screen-section flex-1 flex hidden" id="screen-api">

<aside className="w-64 border-r border-white/5 bg-slate-950/50 hidden lg:block overflow-y-auto">
<div className="p-6">
<button className="flex items-center gap-2 text-xs text-slate-400 mb-6 hover:text-white" onclick="showScreen('landing')"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Home</button>
<h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Documentation</h3>
<ul className="space-y-3 text-sm">
<li><a className="text-indigo-400 font-medium flex items-center gap-2" href="#"><iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon> Introduction</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Authentication</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Endpoints</a></li>
<li className="pl-4 border-l border-white/10 text-slate-500">POST /quote</li>
<li className="pl-4 border-l border-white/10 text-slate-500">GET /policies</li>
<li className="pl-4 border-l border-white/10 text-slate-500">POST /claim/analyze</li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Webhooks</a></li>
</ul>
</div>
</aside>
<div className="flex-1 overflow-y-auto p-8 lg:p-12">
<div className="max-w-4xl">
<h1 className="text-3xl font-semibold text-white tracking-tight mb-4">Claims AI Endpoint</h1>
<p className="text-lg text-slate-400 mb-8">Process images and incident descriptions instantly using our Vision-LLM hybrid model.</p>
<div className="flex items-center gap-4 mb-8">
<span className="px-3 py-1 rounded bg-green-500/20 text-green-400 font-mono text-sm border border-green-500/20">POST</span>
<code className="text-slate-300 font-mono text-sm">https://api.insureme.ai/v1/claims/analyze</code>
</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
<div>
<h3 className="text-sm font-semibold text-slate-300 mb-4">Request Body</h3>
<div className="bg-[#0d1117] border border-white/10 rounded-xl p-6 font-mono text-sm text-slate-300 shadow-2xl overflow-x-auto">
<pre><span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> fetch(<span className="text-green-400">'/analyze'</span>, {
  method: <span className="text-green-400">'POST'</span>,
  headers: {
    <span className="text-blue-400">'Authorization'</span>: <span className="text-green-400">'Bearer sk_live_...'</span>,
    <span className="text-blue-400">'Content-Type'</span>: <span className="text-green-400">'application/json'</span>
  },
  body: JSON.stringify({
    image_url: <span className="text-green-400">"https://..."</span>,
    description: <span className="text-green-400">"Rear bumper dent..."</span>
  })
});</pre>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-300 mb-4">Response Object</h3>
<div className="bg-[#0d1117] border border-white/10 rounded-xl p-6 font-mono text-sm text-slate-300 shadow-2xl overflow-x-auto">
<pre>{
  <span className="text-blue-400">"status"</span>: <span className="text-green-400">"success"</span>,
  <span className="text-blue-400">"data"</span>: {
    <span className="text-blue-400">"damage_assessment"</span>: <span className="text-green-400">"Minor Scratch"</span>,
    <span className="text-blue-400">"estimated_cost"</span>: 450.00,
    <span className="text-blue-400">"fraud_score"</span>: 0.02,
    <span className="text-blue-400">"decision"</span>: <span className="text-green-400">"auto_approve"</span>
  }
}</pre>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass px-2 py-2 rounded-full flex gap-1 shadow-2xl border border-white/20 scale-90 sm:scale-100 overflow-x-auto max-w-[90vw]">
<button className="nav-btn px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-600 text-white transition-all whitespace-nowrap" onclick="showScreen('landing')">Landing</button>
<button className="nav-btn px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white transition-all whitespace-nowrap" onclick="showScreen('dashboard')">User Dash</button>
<button className="nav-btn px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white transition-all whitespace-nowrap" onclick="showScreen('chat')">Chat AI</button>
<button className="nav-btn px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white transition-all whitespace-nowrap" onclick="showScreen('policy')">Policy</button>
<button className="nav-btn px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white transition-all whitespace-nowrap" onclick="showScreen('claims')">Claims</button>
<button className="nav-btn px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white transition-all whitespace-nowrap" onclick="showScreen('admin')">Admin</button>
<button className="nav-btn px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white transition-all whitespace-nowrap" onclick="showScreen('review')">Review</button>
<button className="nav-btn px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white transition-all whitespace-nowrap" onclick="showScreen('api')">API</button>
</div>


    </>
  );
}
