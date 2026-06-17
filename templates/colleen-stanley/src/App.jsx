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



        // Spotlight effect for cards
        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            card.onmousemove = e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };
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
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Main menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-green-500/10 overflow-hidden group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-300 bg-green-500/10 w-9 h-9 border-green-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon className="text-green-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm hidden sm:block">SalesLeadership</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-zinc-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#demo">
                    Improve Conversations
                    <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main>

<section className="overflow-hidden min-h-[95vh] pt-44 pb-20 relative flex items-center">

<div className="absolute inset-0 bg-flowing-layer z-0 pointer-events-none mix-blend-screen"></div>
<div className="absolute inset-0 bg-network-pattern z-0 pointer-events-none"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="z-10 text-center max-w-5xl mx-auto px-6 relative w-full">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-300 text-xs uppercase font-medium tracking-wide mb-8 shadow-[0_0_20px_rgba(34,197,94,0.1)] backdrop-blur-sm cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-signal"></span>
                    Emotional Intelligence in Sales
                </div>
<h1 className="text-5xl md:text-7xl lg:text-[5rem] font-semibold text-white tracking-tight leading-[1.05] mb-6">
                    You Don’t Lose Deals<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-300 to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">Because of Price.</span>
</h1>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Most deals are lost because trust never fully forms. Colleen Stanley helps sales teams build the emotional intelligence needed to earn it.
                </p>

<div className="relative w-full aspect-video bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-black/80 ring-1 ring-white/5 group mb-8 flex flex-col items-center justify-center sc-card cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-50"></div>
<div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-md border border-green-500/30 group-hover:scale-110 transition-transform duration-500 z-10">
<iconify-icon className="text-green-400 ml-1" icon="solar:play-bold" width="32"></iconify-icon>
</div>
<div className="absolute bottom-6 left-0 right-0 text-center z-10">
<p className="text-white font-medium text-sm mb-1">Watch: Why Buyers Don’t Trust Sales Conversations</p>
<p className="text-xs text-zinc-500 font-mono tracking-widest uppercase">Video Placeholder</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm">
<div>
<p className="text-lg text-white font-medium mb-4">If your team is having conversations but not converting, the issue isn’t activity. <span className="text-green-400">It’s connection.</span></p>
<p className="text-sm text-zinc-400 mb-4">Most sales teams:</p>
<ul className="space-y-3 text-sm text-zinc-300">
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" icon="solar:close-circle-linear" width="18"></iconify-icon>
                                Focus on what to say instead of how buyers feel
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" icon="solar:close-circle-linear" width="18"></iconify-icon>
                                Rush conversations instead of building trust
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" icon="solar:close-circle-linear" width="18"></iconify-icon>
                                Handle objections without understanding emotion
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" icon="solar:close-circle-linear" width="18"></iconify-icon>
                                Miss the signals buyers actually give
                            </li>
</ul>
</div>
<div className="flex flex-col justify-center">
<p className="text-sm text-zinc-400 mb-4">In this video, Colleen breaks down:</p>
<ul className="space-y-3 text-sm text-zinc-300 mb-8">
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Why trust is the real driver of decisions
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                How emotional intelligence changes conversations
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                What top-performing salespeople do differently
                            </li>
</ul>
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-green-500 px-8 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]" href="#demo">
                            Improve My Sales Conversations
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#020202] relative z-20">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8 text-center">Sales teams developing trust-based selling</p>
<div className="w-full max-w-4xl h-16 bg-zinc-900/50 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-[#020202] z-10"></div>
<span className="text-sm font-mono text-zinc-600 tracking-widest z-0">IMAGE PLACEHOLDER (CLIENT LOGOS)</span>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative z-20" id="philosophy">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 mb-8 border border-blue-500/20">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Why Sales Conversations Don’t Convert
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Trust never fully develops</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Buyers don’t feel understood. They sense they are being managed through a process rather than listened to.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Reps focus on logic only</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Emotions driving decisions are ignored. Reps pitch features and ROI while missing the underlying anxiety or motivation.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Objections are handled too late</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Instead of being prevented early through empathetic questioning and active listening, they become roadblocks.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Managers coach activity, not behavior</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Teams improve volume but not outcomes. Doing the wrong thing faster doesn't lead to more closed deals.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#020202] relative z-20 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-green-900/5 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">
                    Sales Isn’t Just Skill.<br/>
<span className="text-blue-400">It’s Emotional Intelligence.</span>
</h2>
<div className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto space-y-6">
<p>Better scripts won’t fix this. More calls won’t fix this.</p>
<p className="text-white font-medium">Sales performance improves when:</p>
<ul className="text-left max-w-md mx-auto space-y-4 text-zinc-300 bg-black/50 p-6 rounded-2xl border border-white/10">
<li className="flex items-center gap-3">
<iconify-icon className="text-green-500 shrink-0" icon="solar:heart-angle-linear" width="20"></iconify-icon>
                            Reps understand buyer emotions
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-green-500 shrink-0" icon="solar:shield-check-linear" width="20"></iconify-icon>
                            Conversations feel safe and natural
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-green-500 shrink-0" icon="solar:hand-shake-linear" width="20"></iconify-icon>
                            Trust builds early in the process
                        </li>
</ul>
<p className="text-xl text-white italic pt-4">That’s what changes outcomes.</p>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-white/5 relative">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight">Emotional Intelligence in Sales</h2>
<p className="text-zinc-500 mt-2">The difference between average reps and top performers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-center overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:star-fall-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-4">Top performers don't just ask better questions.</h3>
<ul className="space-y-4 text-zinc-400 text-base">
<li className="flex items-start gap-3">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:eye-linear" width="20"></iconify-icon>
<span className="text-white">Read emotional signals:</span> They notice hesitation, excitement, or anxiety before it's spoken.
                                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="solar:chat-round-like-linear" width="20"></iconify-icon>
<span className="text-white">Respond with awareness:</span> They don't react defensively; they validate and explore concerns.
                                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:routing-2-linear" width="20"></iconify-icon>
<span className="text-white">Guide conversations with empathy:</span> They lead the buyer on a journey of discovery, not a pressured pitch.
                                </li>
</ul>
</div>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col items-center justify-center text-center overflow-hidden">
<h3 className="text-xl text-white font-medium tracking-tight mb-6">This is what separates:</h3>
<div className="w-full bg-zinc-900/50 rounded-xl p-4 border border-white/5 mb-4">
<span className="text-sm text-zinc-400">Standard Conversations</span>
</div>
<iconify-icon className="text-zinc-600 mb-4" icon="solar:arrow-down-linear" width="24"></iconify-icon>
<div className="w-full bg-green-500/10 rounded-xl p-4 border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
<span className="text-base font-medium text-green-400">Closed Deals</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Teams strengthening trust-based selling</h2>
<p className="text-zinc-400 text-base max-w-xl mx-auto">Sales teams use Colleen’s approach to improve conversations, build trust, and create stronger customer relationships.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 items-center text-center">
<div className="w-full h-32 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent"></div>
<span className="text-xs text-zinc-500 font-mono tracking-widest z-10">IMAGE PLACEHOLDER</span>
</div>
<p className="text-zinc-300 text-sm italic">"Our team learned to pause, listen, and connect. The difference in our pipeline quality is remarkable."</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 items-center text-center">
<div className="w-full h-32 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent"></div>
<span className="text-xs text-zinc-500 font-mono tracking-widest z-10">IMAGE PLACEHOLDER</span>
</div>
<p className="text-zinc-300 text-sm italic">"Colleen's framework shifted us from pushing features to truly partnering with our clients."</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 items-center text-center">
<div className="w-full h-32 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-white/5 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent"></div>
<span className="text-xs text-zinc-500 font-mono tracking-widest z-10">IMAGE PLACEHOLDER</span>
</div>
<p className="text-zinc-300 text-sm italic">"Finally, a training that addresses the human element of sales, not just the mechanical steps."</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-b border-white/5" id="process">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-24 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        How SalesLeadership Improves Performance
                    </h2>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-blue-500 transition-colors">
<span className="font-mono text-sm">01</span>
</div>
<div className="pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 1</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Assess sales conversations and behaviors</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-2xl">
                            We start by understanding the current state. Where are deals stalling? Are reps reacting defensively to objections? We identify the behavioral gaps hindering your team's success.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-green-500 transition-colors">
<span className="font-mono text-sm">02</span>
</div>
<div className="pt-1">
<span className="text-green-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 2</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Develop emotional intelligence skills</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-2xl">
                            We equip your team with the tools to self-regulate, demonstrate empathy, and stay present in high-pressure situations. This shifts the focus from 'selling' to genuinely helping the buyer.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-blue-500 transition-colors">
<span className="font-mono text-sm">03</span>
</div>
<div className="pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 3</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Strengthen trust-driven selling</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-2xl">
                            Integration is key. We integrate EI frameworks into your daily sales motion, ensuring reps consistently build trust, uncover deeper needs, and navigate complex buying cycles with confidence.
                        </p>
</div>
</div>
<div className="mt-16 ml-8 md:ml-16">
<a className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-sm font-medium text-black transition-all hover:bg-zinc-200" href="#demo">
                        Strengthen My Sales Team
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">What's Included in Our Programs</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 flex flex-col items-start hover:border-green-500/30 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:brain-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Emotional Intelligence Training</h3>
<p className="text-sm text-zinc-500">Core skills to manage emotions and read buyer signals effectively.</p>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 flex flex-col items-start hover:border-blue-500/30 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Sales Leadership Development</h3>
<p className="text-sm text-zinc-500">Equipping managers to coach behaviors, not just pipeline metrics.</p>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 flex flex-col items-start hover:border-green-500/30 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Sales Coaching Programs</h3>
<p className="text-sm text-zinc-500">Ongoing support to ensure new habits stick and results improve.</p>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 flex flex-col items-start hover:border-blue-500/30 transition-colors group lg:col-start-2">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:book-bookmark-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Trust-Based Selling Frameworks</h3>
<p className="text-sm text-zinc-500">Structured approaches that prioritize connection and mutual value.</p>
</div>

<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 flex flex-col items-start hover:border-green-500/30 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:presentation-graph-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Team Sales Workshops</h3>
<p className="text-sm text-zinc-500">Interactive sessions designed to shift team culture and performance.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-white/5 relative" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="sc-card rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/3 aspect-[4/5] bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden relative flex items-center justify-center shrink-0">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<span className="text-xs text-zinc-500 font-mono tracking-widest z-0">IMAGE PLACEHOLDER<br/>(Colleen Stanley)</span>
</div>
<div className="flex-1 text-left space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Hi, I’m Colleen Stanley.</h2>
<div className="text-zinc-400 text-base leading-relaxed space-y-4">
<p>I work with sales teams that want to improve how they connect with buyers.</p>
<p>My focus is helping sales professionals develop the emotional intelligence needed to build trust and guide better conversations.</p>
<p className="text-white text-lg italic mt-6">Because when trust improves, results follow.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-2">
<details className="group bg-zinc-900/30 border border-white/5 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                            Who is this for?
                            <span className="transition duration-300 group-open:-rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                            Sales teams and leaders focused on improving performance through better communication and connection.
                        </div>
</details>
<details className="group bg-zinc-900/30 border border-white/5 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                            Is this sales training or leadership training?
                            <span className="transition duration-300 group-open:-rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                            Both — it is focused on behavior and communication at all levels of the sales organization.
                        </div>
</details>
<details className="group bg-zinc-900/30 border border-white/5 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                            Does this work for experienced teams?
                            <span className="transition duration-300 group-open:-rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                            Yes, especially teams needing stronger connection with buyers, regardless of their tenure.
                        </div>
</details>
<details className="group bg-zinc-900/30 border border-white/5 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                            What makes this different?
                            <span className="transition duration-300 group-open:-rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                            Our focus is on emotional intelligence, not just mechanical sales technique. We change how reps think and feel, not just what they say.
                        </div>
</details>
<details className="group bg-zinc-900/30 border border-white/5 rounded-xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                            How do we start?
                            <span className="transition duration-300 group-open:-rotate-180 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                            Book a call using the calendar below to discuss your team's specific challenges.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-black border-t border-white/5" id="demo">
<div className="absolute inset-0 bg-network-pattern opacity-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-0">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Build Trust.<br/>Close More Deals.
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a call to explore how emotional intelligence can improve your sales performance.
                        </p>
</div>

<div className="relative w-full min-h-[400px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex flex-col items-center justify-center p-8 text-center">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center border border-white/10 mb-6 text-blue-400">
<iconify-icon icon="solar:calendar-date-linear" width="32"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">CALENDLY PLACEHOLDER</h3>
<p className="text-zinc-500 text-sm mb-6">Interactive booking widget will render here.</p>
<button className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-blue-500 px-8 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                            Book My Call
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-12 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg">
<iconify-icon className="text-green-500" icon="solar:leaf-linear" width="20"></iconify-icon>
                SalesLeadership, Inc.
            </div>
<div className="text-zinc-600 text-xs">
                © 2024 SalesLeadership, Inc. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
