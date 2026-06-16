import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();

    const io=new IntersectionObserver(entries=>{
      entries.forEach(el=>{if(el.isIntersecting)el.target.style.opacity=1});
    },{threshold:.1});
    document.querySelectorAll('[class*="animate-fade-up"]').forEach(el=>io.observe(el));

    const ctx=document.getElementById('impactChart');
    if(ctx){
      new Chart(ctx,{
        type:'line',
        data:{
          labels:['wk1','wk2','wk3','wk4'],
          datasets:[{data:[60,70,75,88],borderColor:'#7eee91',backgroundColor:'transparent',tension:.4}]
        },
        options:{
          responsive:true,
          plugins:{legend:{display:false}},
          scales:{x:{display:false},y:{display:false}}
        }
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 backdrop-blur-sm bg-[#1e2b2c]/80 border-b border-white/5">
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
<a aria-label="SyncNest home" className="text-xl md:text-2xl font-semibold tracking-tight" href="#">SyncNest</a>
<nav aria-label="Primary" className="hidden md:flex gap-6 text-sm">
<a className="flex items-center gap-2 text-white/60 hover:text-[#7eee91]" href="#integrations">
<i className="w-4 h-4" data-lucide="layers"></i>Integrations
        </a>
<a className="flex items-center gap-2 text-white/60 hover:text-[#7eee91]" href="#analytics">
<i className="w-4 h-4" data-lucide="activity"></i>Analytics
        </a>
<a className="flex items-center gap-2 text-white/60 hover:text-[#7eee91]" href="#pricing">
<i className="w-4 h-4" data-lucide="credit-card"></i>Pricing
        </a>
<a className="flex items-center gap-2 text-white/60 hover:text-[#7eee91]" href="#docs">
<i className="w-4 h-4" data-lucide="book-open"></i>Docs
        </a>
</nav>
<div className="flex items-center gap-3">
<button aria-label="Sign in" className="hidden sm:flex items-center gap-2 text-sm text-white/60 hover:text-white">
<i className="w-4 h-4" data-lucide="log-in"></i>Sign in
        </button>
<button aria-label="Start your free trial" className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition bg-[#fed075] text-[#1e2b2c]">
<i className="w-4 h-4" data-lucide="play-circle"></i>Start Trial
        </button>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#1e2b2c] via-[#1e2b2c]/80 to-[#1e2b2c]"></div>
<div className="relative z-10 max-w-6xl md:px-8 text-center mx-auto pt-16 pb-24 px-4">
<span className="inline-flex items-center gap-2 md:text-sm animate-fade-up animate-delay-100 text-xs text-[#7eee91] bg-white/5 border-white/10 border rounded-full py-1.5 px-4">
        The AI Agent That Turns Marketing Strategy Into Consistent Action
        <i className="w-4 h-4" data-lucide="zap"></i>
</span>
<h1 className="mt-8 text-3xl md:text-6xl font-bold tracking-tight animate-fade-up animate-delay-200">
        Stop Planning. <span className="text-[#7eee91]">Start Executing.</span>
</h1>
<p className="max-w-2xl mx-auto mt-6 text-white/70 animate-fade-up animate-delay-300">
        Small marketing teams have great strategies but struggle with execution. TalkToTheo bridges that gap, transforming your marketing vision into targeted daily action—so you can focus on what you do best: driving results.
      </p>

<form className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3 animate-fade-up animate-delay-400">
<label className="sr-only" htmlFor="email">Work email</label>
<input className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#7eee91]/60" id="email" placeholder="you@company.com" required="" type="email"/>
<button className="px-6 py-3 rounded-lg bg-[#fed075] text-[#1e2b2c] font-semibold hover:brightness-105 transition" type="submit">Get Demo</button>
</form>
<p className="mt-4 text-xs text-white/40 animate-fade-up animate-delay-500">We only accept 20 clients in our pilot program</p>

<div className="mt-16 animate-fade-up animate-delay-600">
<img alt="TalkToTheo dashboard screenshot" className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl ring-1 ring-white/10 hover-lift" loading="lazy" src="talktotheo-dashboard.png"/>
</div>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-24">

<article className="relative hover-lift animate-fade-up animate-delay-200 bg-white/5 border-white/10 border rounded-2xl p-6">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#7eee91]/20">
<i className="w-5 h-5 text-[#7eee91]" data-lucide="hash"></i>
</div>
<h3 className="font-semibold">Less Meetings</h3>
</div>
<div className="space-y-3">
<div className="flex gap-3 p-3 bg-white/5 rounded-lg">
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#fed075] text-[#1e2b2c] text-xs font-semibold">A</div>
<div className="flex-1">
<p className="text-sm font-medium">Alice Chen</p>
<p className="text-sm text-white/70">🎉 Launch successful!</p>
</div>
</div>
<p className="text-xs text-white/40">42 teammates online</p>
</div>
<button aria-label="Reply in thread" className="w-full mt-6 flex items-center justify-center gap-2 py-2 rounded-lg border border-[#7eee91]/40 text-[#7eee91] hover:bg-[#7eee91]/10 transition">
<i className="w-4 h-4" data-lucide="message-circle"></i>Reply
          </button>
</article>

<article className="relative p-6 bg-white/5 border border-white/10 rounded-2xl hover-lift animate-fade-up animate-delay-300">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#7eee91]/20">
<i className="w-5 h-5 text-[#7eee91]" data-lucide="bar-chart-2"></i>
</div>
<div>
<h3 className="font-semibold">Impact</h3>
<p className="text-xs text-white/50">Last 30 days</p>
</div>
</div>
<div className="space-y-4">
<div className="text-center">
<p className="text-4xl font-bold tracking-tight">88%</p>
<p className="text-sm text-white/70">Manual work eliminated</p>
</div>

<div className="rounded-lg p-4 bg-white/5">
<canvas height="380" id="impactChart" width="760"></canvas>
</div>
</div>
</article>

<article className="relative hover-lift animate-fade-up animate-delay-400 bg-white/5 border-white/10 border rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="font-semibold">Unified Workspace</h3>
<p className="text-xs text-white/50">6 tools connected</p>
</div>
<i className="w-5 h-5 text-[#7eee91] animate-pulse" data-lucide="zap"></i>
</div>
<div className="space-y-3 text-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#7eee91]" data-lucide="github"></i> GitHub ↔ Jira
            </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#7eee91]" data-lucide="figma"></i> Figma ↔ Notion
            </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#7eee91]" data-lucide="slack"></i> Slack ↔ Linear
            </div>
</div>
<button aria-label="Add new integration" className="w-full mt-6 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#fed075] text-[#1e2b2c] font-semibold hover:brightness-105 transition">
<i className="w-4 h-4" data-lucide="plus"></i>Add Integration
          </button>
</article>
</div>
</div>
</section>


    </>
  );
}
