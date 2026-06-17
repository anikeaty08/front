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



(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "vfhfm7bolc");

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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/40 rounded-full blur-[100px]"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#02040a]/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-blue-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white">AI BOOTCAMP</span>
</div>
<a className="text-xs font-medium bg-white/10 hover:bg-white/15 text-white border border-white/10 px-4 py-2 rounded-full transition-all" href="#join">
                Get Started
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New Cohort Open for Enrollment
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 leading-[1.1] gradient-text text-glow">
                Build &amp; Launch Your Own App Business With AI — <span className="text-white/40">Even If You’ve Never Coded.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                A step-by-step AI coding bootcamp that shows non-technical entrepreneurs how to build, launch, and get their first paying customers using AI tools like Lovable, Supabase, and Stripe.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 text-sm text-slate-300">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
<span>Build a real app, not tutorials</span>
</div>
<div className="hidden md:block w-1 h-1 bg-slate-700 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
<span>No coding experience needed</span>
</div>
<div className="hidden md:block w-1 h-1 bg-slate-700 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
<span>Launch faster with AI</span>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<a className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-white border border-transparent rounded-full bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]" href="#join">
                    Join the AI App Bootcamp
                    <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<span className="text-xs text-slate-500 uppercase tracking-wide">Beginner-friendly • Limited spots • Real results</span>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                        You Have the Ideas… <br/>
<span className="text-slate-500">But Tech Is Holding You Back.</span>
</h2>
<p className="text-slate-400 leading-relaxed mb-6">
                        You know you could build a profitable app or SaaS. But every time you try, you hit the same walls:
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded-md bg-red-500/10 text-red-400">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</div>
<span className="text-slate-300">Developers are expensive and slow</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded-md bg-red-500/10 text-red-400">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</div>
<span className="text-slate-300">Coding feels overwhelming and confusing</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded-md bg-red-500/10 text-red-400">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</div>
<span className="text-slate-300">You watch tutorials but never ship</span>
</li>
</ul>
<div className="glass-card p-6 rounded-xl border-l-4 border-l-indigo-500">
<p className="text-indigo-200 italic font-medium">“What if I never actually build anything?”</p>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
<div className="glass-card rounded-2xl p-8 relative z-10">
<div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<div>
<div className="h-2 w-24 bg-slate-800 rounded mb-2"></div>
<div className="h-2 w-16 bg-slate-800 rounded"></div>
</div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-slate-800 rounded"></div>
<div className="h-2 w-5/6 bg-slate-800 rounded"></div>
<div className="h-2 w-4/6 bg-slate-800 rounded"></div>
</div>
<div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
<div className="h-8 w-24 bg-indigo-500/20 rounded"></div>
<div className="h-8 w-8 bg-slate-800 rounded-full"></div>
</div>

<div className="absolute -right-4 top-1/2 -translate-y-1/2 glass-card p-4 rounded-xl flex items-center gap-3 animate-pulse">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-xs font-mono text-slate-300">ERROR: Syntax Error</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                This Is Not a Coding Course. <br/>
<span className="text-indigo-400">It’s a Business-Building System.</span>
</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Built specifically for non-technical entrepreneurs who want results. You don’t need to become a programmer. You need a repeatable system.
            </p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[60px] rounded-full group-hover:bg-indigo-500/20 transition-all"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<span className="font-mono font-bold text-lg">01</span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Build With AI</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Use AI and Lovable to create your app UI and logic quickly. Describe your idea and watch the code generate instantly.
                    </p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-all"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<span className="font-mono font-bold text-lg">02</span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Power With Infra</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Connect Supabase for a real backend database and Stripe for payments. Secure, scalable, and professional.
                    </p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/20 transition-all"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
<span className="font-mono font-bold text-lg">03</span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Launch &amp; Monetize</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Follow proven launch strategies to get your first paying users. Don't just build—sell.
                    </p>
</div>
</div>
</div>
<div className="text-center mt-12">
<button className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium border border-white/10 transition-all flex items-center gap-2 mx-auto">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                Build My App With AI
            </button>
</div>
</section>

<section className="py-24 px-6 bg-slate-950/50">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>

<div className="bg-[#0B0F19] p-4 h-[400px]">
<div className="flex items-center justify-between mb-8">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="w-32 h-2 rounded-full bg-white/5"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 h-32 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
<span className="text-indigo-400/50 font-mono text-xs">REVENUE_CHART_COMPONENT</span>
</div>
<div className="h-24 rounded-xl bg-white/5 border border-white/5"></div>
<div className="h-24 rounded-xl bg-white/5 border border-white/5"></div>
</div>
<div className="mt-4 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between">
<div>
<div className="text-[10px] text-indigo-300 uppercase">Monthly Revenue</div>
<div className="text-xl text-white font-mono">$1,240.00</div>
</div>
<iconify-icon className="text-indigo-400 text-2xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">What You’ll Have By The End</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">A fully functional app or SaaS MVP</h4>
<p className="text-xs text-slate-400">Deployed live on the web.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">Live payments with Stripe</h4>
<p className="text-xs text-slate-400">Ready to accept credit cards globally.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">Reusable AI Workflows</h4>
<p className="text-xs text-slate-400">Prompts and systems for your next idea.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">A clear path to customers</h4>
<p className="text-xs text-slate-400">Marketing strategy tailored for SaaS.</p>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10">
<p className="text-lg text-white font-medium">"This is not learning. This is building."</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Is This Bootcamp Right For You?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card p-8 rounded-2xl border-t-4 border-t-green-500/50">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-green-400 text-2xl" icon="solar:user-check-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-white">This Is For You If...</h3>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                            You’re non-technical but ambitious
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                            You want to build a real SaaS business
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                            You’re tired of theory-only courses
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                            You want speed, clarity, and execution
                        </li>
</ul>
</div>

<div className="glass-card p-8 rounded-2xl border-t-4 border-t-red-500/50 opacity-80">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-red-400 text-2xl" icon="solar:user-cross-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-white">This Is NOT For You If...</h3>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon>
                            You want to be a traditional engineer
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon>
                            You’re not willing to take action
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon>
                            You're looking for get-rich-quick schemes
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-12">Built For Real Entrepreneurs — Not Coders</h2>
<div className="glass-card p-10 rounded-2xl relative">
<iconify-icon className="absolute top-8 left-8 text-4xl text-indigo-500/20" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-xl md:text-2xl font-medium text-slate-200 leading-relaxed mb-8 relative z-10">
                    "I had zero coding experience. I launched my first app and charged customers within weeks. The AI workflows are absolute magic."
                </p>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 font-bold">JD</div>
<div className="text-left">
<div className="text-white font-medium text-sm">James Doe</div>
<div className="text-indigo-400 text-xs">Founder, TaskFlow AI</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Common Questions</h2>
<div className="space-y-4">
<div className="glass-card rounded-xl p-6">
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:question-circle-linear"></iconify-icon>
                        Do I need coding experience?
                    </h3>
<p className="text-slate-400 text-sm ml-7">No. Everything is taught step-by-step for beginners using visual tools and AI.</p>
</div>
<div className="glass-card rounded-xl p-6">
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:clock-circle-linear"></iconify-icon>
                        How fast can I launch?
                    </h3>
<p className="text-slate-400 text-sm ml-7">Many students launch during the bootcamp. The goal is speed to market.</p>
</div>
<div className="glass-card rounded-xl p-6">
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:code-file-linear"></iconify-icon>
                        Is this just another no-code course?
                    </h3>
<p className="text-slate-400 text-sm ml-7">No. This is a build → launch → monetize system. We focus on business outcomes.</p>
</div>
<div className="glass-card rounded-xl p-6">
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:wallet-money-linear"></iconify-icon>
                        Will I make money?
                    </h3>
<p className="text-slate-400 text-sm ml-7">We teach you how to launch and sell. Results depend on your execution, but we give you the playbook.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="join">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Your App Idea Doesn’t Need <br className="hidden md:block"/> Another Year of Waiting
            </h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                AI changed the game. The tools are ready. The only thing missing is your decision.
                <br/><br/>
                If you’ve ever said: <span className="text-white italic">“One day I’ll build my app…”</span>
</p>
<div className="flex flex-col items-center gap-6">
<button className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white transition-all duration-200 bg-white border border-transparent rounded-full bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] hover:-translate-y-1">
                    Join the AI App Bootcamp Now
                    <iconify-icon className="ml-2" icon="solar:rocket-linear" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Start building today</span>
<span className="w-1 h-1 bg-slate-700 rounded-full"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ticket-linear"></iconify-icon> Limited seats</span>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#010205]">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-white text-xs">AI</div>
<span className="text-slate-400 text-sm">App Bootcamp</span>
</div>
<div className="text-slate-500 text-xs">
                Built for non-technical founders.
            </div>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
