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
      

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-fuchsia-900/10 blur-[120px] pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:record-circle-linear"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tighter text-white">NEXUS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#integrations">Integrations</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-300 mb-8 hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Introducing Nexus Intelligence 2.0
                <iconify-icon className="text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-tight">
                Stop Taking Notes in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Meetings.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto tracking-tight font-medium">
                Nexus automatically joins your calls, records the audio, and generates perfect transcriptions, action items, and summaries. Focus on the conversation, not the keyboard.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-sm font-medium bg-white text-black px-6 py-3 rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#">
                    Start for free
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-sm font-medium border border-white/10 bg-transparent text-white px-6 py-3 rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                    Watch demo
                </a>
</div>
</div>

<div className="max-w-5xl mx-auto mt-20 relative">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
<div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl shadow-indigo-500/10">
<div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="ml-4 text-xs font-medium text-slate-500">Q3 Planning Sync - transcript.nx</div>
</div>
<div className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
<div className="md:col-span-2 space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 text-xs font-medium border border-indigo-500/30">JD</div>
<div>
<div className="text-xs font-medium text-slate-500 mb-1">Sarah (Product) • 10:02 AM</div>
<p className="text-sm text-slate-300 leading-relaxed">Let's move on to the Q3 roadmap. I think the priority should be the new AI transcription features. We need to finalize the integration endpoints by next Friday.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center shrink-0 text-xs font-medium border border-fuchsia-500/30">MK</div>
<div>
<div className="text-xs font-medium text-slate-500 mb-1">Mike (Engineering) • 10:04 AM</div>
<p className="text-sm text-slate-300 leading-relaxed">Agreed. I'll have the team start working on the Zoom API integration tomorrow. We should schedule a quick sync with the design team to review the toggle states.</p>
</div>
</div>
</div>
<div className="hidden md:block border-l border-white/10 pl-8">
<div className="mb-6">
<h3 className="text-xs font-medium text-indigo-400 tracking-tight flex items-center gap-2 mb-3 uppercase">
<iconify-icon icon="solar:stars-linear"></iconify-icon> AI Summary
                            </h3>
<p className="text-xs text-slate-400 leading-relaxed">Team agreed to prioritize AI transcription features for Q3. Engineering will begin Zoom API work immediately.</p>
</div>
<div>
<h3 className="text-xs font-medium text-fuchsia-400 tracking-tight flex items-center gap-2 mb-3 uppercase">
<iconify-icon icon="solar:check-square-linear"></iconify-icon> Action Items
                            </h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-xs text-slate-300">
<div className="w-4 h-4 rounded border border-white/20 mt-0.5 shrink-0 flex items-center justify-center text-transparent hover:border-indigo-400 transition-colors cursor-pointer"></div>
                                    Finalize integration endpoints (Sarah - Friday)
                                </li>
<li className="flex items-start gap-2 text-xs text-slate-300">
<div className="w-4 h-4 rounded border border-white/20 mt-0.5 shrink-0 flex items-center justify-center text-transparent hover:border-indigo-400 transition-colors cursor-pointer"></div>
                                    Start Zoom API integration (Mike - Tomorrow)
                                </li>
<li className="flex items-start gap-2 text-xs text-slate-300">
<div className="w-4 h-4 rounded border border-white/20 mt-0.5 shrink-0 flex items-center justify-center text-transparent hover:border-indigo-400 transition-colors cursor-pointer"></div>
                                    Schedule design sync (Mike)
                                </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.02]" id="integrations">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8 tracking-tight">Works seamlessly wherever you meet</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-white" icon="solar:videocamera-record-linear"></iconify-icon>
<span className="text-base font-medium tracking-tighter text-white">ZOOM</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-white" icon="solar:camera-minimalistic-linear"></iconify-icon>
<span className="text-base font-medium tracking-tighter text-white">MEET</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-white" icon="solar:chat-square-line-linear"></iconify-icon>
<span className="text-base font-medium tracking-tighter text-white">TEAMS</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-white" icon="solar:hashtag-linear"></iconify-icon>
<span className="text-base font-medium tracking-tighter text-white">SLACK</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Intelligence that scales with you.</h2>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-medium tracking-tight">Everything you need to turn hours of meetings into seconds of reading. Powered by next-generation models.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 relative z-10">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3 relative z-10">Flawless Transcription</h3>
<p className="text-sm text-slate-400 leading-relaxed relative z-10">Capture every word with superhuman accuracy. Nexus understands context, technical jargon, and multiple speakers effortlessly.</p>
</div>

<div className="group p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-6 text-fuchsia-400 relative z-10">
<iconify-icon className="text-2xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3 relative z-10">Automated Action Items</h3>
<p className="text-sm text-slate-400 leading-relaxed relative z-10">Never miss a follow-up. Nexus detects tasks, assigns owners, and pushes them directly to your project management tools.</p>
</div>

<div className="group p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 relative z-10">
<iconify-icon className="text-2xl" icon="solar:lightbulb-bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3 relative z-10">Smart Highlights</h3>
<p className="text-sm text-slate-400 leading-relaxed relative z-10">Extract the most critical insights, decisions, and metrics from an hour-long call into a crisp, readable summary.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-black/50 backdrop-blur-3xl">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-16 text-center">Loved by remote teams.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-white/10 bg-black/40">
<div className="flex items-center gap-1 text-indigo-400 mb-4">
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6 leading-relaxed">"Nexus completely changed how we run our engineering standups. We just talk, and all the tickets are created automatically by the end of the call."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium text-white">AJ</div>
<div>
<div className="text-sm font-medium text-white tracking-tight">Alex Johnson</div>
<div className="text-xs text-slate-500">CTO at Vertex</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-black/40">
<div className="flex items-center gap-1 text-indigo-400 mb-4">
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6 leading-relaxed">"As a product manager with back-to-back meetings, I was drowning in notes. Now, I just review the AI summaries. It saves me about 5 hours a week."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium text-white">SW</div>
<div>
<div className="text-sm font-medium text-white tracking-tight">Sarah Wu</div>
<div className="text-xs text-slate-500">VP Product</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-black/40 md:hidden lg:block">
<div className="flex items-center gap-1 text-indigo-400 mb-4">
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6 leading-relaxed">"The slack integration is flawless. The moment a client call ends, a beautiful summary is dropped in our #sales channel. Magic."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium text-white">MR</div>
<div>
<div className="text-sm font-medium text-white tracking-tight">Marcus Rowe</div>
<div className="text-xs text-slate-500">Sales Lead</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6" id="pricing">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Simple, transparent pricing.</h2>

<div className="inline-flex items-center bg-white/5 border border-white/10 p-1 rounded-full relative">
<div className="absolute w-[calc(50%-4px)] h-[calc(100%-8px)] bg-white rounded-full left-1 top-1 transition-all shadow-sm"></div>
<button className="relative z-10 px-6 py-2 text-sm font-medium text-black w-32 transition-colors rounded-full">Monthly</button>
<button className="relative z-10 px-6 py-2 text-sm font-medium text-slate-400 hover:text-white w-32 transition-colors rounded-full">Annually</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 rounded-3xl border border-white/10 bg-black/40">
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Starter</h3>
<p className="text-sm text-slate-500 mb-6">Perfect for individuals wanting to supercharge their personal productivity.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tighter text-white">$0</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon>
                            10 meetings per month
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon>
                            Standard transcription
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon>
                            Basic summaries
                        </li>
</ul>
<a className="block w-full text-center text-sm font-medium border border-white/20 bg-transparent text-white py-3 rounded-full hover:bg-white/5 transition-colors" href="#">Get Started Free</a>
</div>

<div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-indigo-500 via-fuchsia-500/20 to-transparent">
<div className="absolute top-0 right-8 transform -translate-y-1/2">
<span className="bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full tracking-tight">Most Popular</span>
</div>
<div className="p-8 rounded-[23px] bg-slate-950 h-full">
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Pro AI</h3>
<p className="text-sm text-slate-500 mb-6">For power users and teams who need comprehensive intelligence.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tighter text-white">$19</span>
<span className="text-sm text-slate-500">/user/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                Unlimited meetings
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                High-accuracy AI model
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                Action item extraction
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                Slack &amp; Jira integrations
                            </li>
</ul>
<a className="block w-full text-center text-sm font-medium bg-white text-black py-3 rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)]" href="#">Upgrade to Pro</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:record-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tighter text-slate-400">NEXUS</span>
</div>
<div className="flex gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<p className="text-xs text-slate-600">© 2024 Nexus Intelligence Inc.</p>
</div>
</footer>

    </>
  );
}
