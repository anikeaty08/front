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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg tracking-tighter">V</div>
<span className="text-white font-medium tracking-tight text-sm">VOICEHIRE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#vision">Vision</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex text-sm font-medium text-white hover:text-indigo-400 transition-colors" href="#access">Log in</a>
<a className="text-xs font-semibold bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-indigo-50 transition-colors" href="#access">Get Early Access</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                The new standard in hiring logic
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-6 leading-[1.1]">
                We’re here to flip how <br/>
<span className="text-gradient">talent gets hired.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                No resumes. No bias. Just pure potential. We use smart voice profiles and AI matching to connect talent with opportunities instantly.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 rounded-full font-medium text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group">
                    Join Talent Pool
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 glass-card text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all">
                    For Recruiters
                </button>
<button className="w-full sm:w-auto px-6 py-3.5 text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                    How it Works
                </button>
</div>

<div className="relative max-w-4xl mx-auto mt-8">
<div className="aspect-[16/9] rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-2xl shadow-indigo-500/10 flex items-center justify-center relative">

<div className="absolute inset-0 flex items-center justify-center gap-1 opacity-60">
<div className="w-1.5 h-12 bg-indigo-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-20 bg-purple-500 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-16 bg-blue-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-24 bg-pink-500 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-10 bg-indigo-500 rounded-full animate-[pulse_1.1s_ease-in-out_infinite]"></div>
</div>
<div className="z-10 text-center">
<div className="w-16 h-16 mx-auto bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
<iconify-icon className="text-white" icon="lucide:mic" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-white">Analyzing Voice Profile...</p>
<p className="text-xs text-slate-500 mt-1">Matching with 142 opportunities</p>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-slate-950 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Hiring is Fundamentally Broken</h2>
<p className="text-slate-400 font-light max-w-xl mx-auto">The resume age is over. The current process wastes human potential on both sides of the table.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-red-500/20 transition-colors group">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
<iconify-icon icon="lucide:user-x" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">The Talent Struggle</h3>
<ul className="space-y-3 text-slate-400 text-sm font-light">
<li className="flex items-start gap-2">
<iconify-icon className="text-red-400 mt-0.5" icon="lucide:x" strokeWidth="1.5" width="14"></iconify-icon>
                            Endless applications into the void
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-red-400 mt-0.5" icon="lucide:x" strokeWidth="1.5" width="14"></iconify-icon>
                            Ghosting after every interview
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-red-400 mt-0.5" icon="lucide:x" strokeWidth="1.5" width="14"></iconify-icon>
                            Judged by keywords, not capability
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-orange-500/20 transition-colors group">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6">
<iconify-icon icon="lucide:file-search" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">The Recruiter Burden</h3>
<ul className="space-y-3 text-slate-400 text-sm font-light">
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="lucide:alert-circle" strokeWidth="1.5" width="14"></iconify-icon>
                            Drowning in unqualified resumes
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="lucide:alert-circle" strokeWidth="1.5" width="14"></iconify-icon>
                            Zero personality insights before calls
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="lucide:alert-circle" strokeWidth="1.5" width="14"></iconify-icon>
                            Slow cycles losing top talent
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 neural-bg relative overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-2 block">The Solution</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Smart connections that<br/>change everything.</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-16">

<div className="glass-card p-10 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[60px] rounded-full"></div>
<div className="relative z-10">
<div className="mb-6">
<span className="text-5xl font-semibold text-white tracking-tighter block mb-2">0</span>
<span className="text-sm text-slate-400 uppercase tracking-widest">Applications Required</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">For Talent</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                            Record a single voice intro. Our AI analyzes your soft skills, passion, and expertise, then pitches you directly to decision-makers.
                        </p>
<div className="flex items-center gap-3 text-sm text-indigo-300">
<iconify-icon icon="lucide:mic" strokeWidth="1.5"></iconify-icon>
<span>Voice-first discovery</span>
</div>
</div>
</div>

<div className="glass-card p-10 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full"></div>
<div className="relative z-10">
<div className="mb-6">
<span className="text-5xl font-semibold text-white tracking-tighter block mb-2">10<span className="text-3xl align-top text-purple-400">×</span></span>
<span className="text-sm text-slate-400 uppercase tracking-widest">Faster Hiring Cycles</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">For Recruiters</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                            Skip the resume screen. Listen to curated 30-second intros from candidates who match your exact technical and cultural needs.
                        </p>
<div className="flex items-center gap-3 text-sm text-purple-300">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5"></iconify-icon>
<span>AI-filtered shortlist</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="relative rounded-3xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-transparent"></div>
<div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-6">
<iconify-icon icon="lucide:check-circle" width="14"></iconify-icon>
                            Match Confirmed
                        </div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">
                            Transparency at the<br/>speed of voice.
                        </h2>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                            Our platform facilitates direct, human connections. By the time you get on a call, you already know there's a vibe.
                        </p>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
<span className="text-sm text-slate-300">Match Accuracy</span>
<span className="text-sm font-semibold text-white">90%</span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
<span className="text-sm text-slate-300">Speed to Offer</span>
<span className="text-sm font-semibold text-white">5x Faster</span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
<span className="text-sm text-slate-300">Process Transparency</span>
<span className="text-sm font-semibold text-white">100%</span>
</div>
</div>
</div>

<div className="relative">
<div className="aspect-square rounded-2xl bg-slate-950 border border-white/10 p-6 relative shadow-2xl">

<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
<div>
<div className="h-3 w-32 bg-slate-800 rounded mb-2"></div>
<div className="h-2 w-20 bg-slate-800 rounded"></div>
</div>
<div className="ml-auto px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">98% Match</div>
</div>

<div className="flex items-end justify-center gap-1 h-24 mb-6 opacity-80">
<div className="w-1.5 bg-indigo-500 rounded-full h-12"></div>
<div className="w-1.5 bg-indigo-500 rounded-full h-16"></div>
<div className="w-1.5 bg-indigo-500 rounded-full h-8"></div>
<div className="w-1.5 bg-indigo-500 rounded-full h-20"></div>
<div className="w-1.5 bg-indigo-500 rounded-full h-14"></div>
<div className="w-1.5 bg-indigo-500 rounded-full h-10"></div>
<div className="w-1.5 bg-indigo-500 rounded-full h-24"></div>
<div className="w-1.5 bg-indigo-500 rounded-full h-12"></div>
<div className="w-1.5 bg-indigo-500 rounded-full h-6"></div>
</div>

<div className="flex gap-3">
<div className="h-10 w-full bg-indigo-600 rounded-lg flex items-center justify-center text-xs font-medium text-white">Schedule Call</div>
<div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="lucide:message-square" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-slate-900 border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-white">Interview Confirmed</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Respect for Time</h3>
<p className="text-slate-400 text-sm font-light">We eliminate the redundant steps. No cover letters, no repetitive forms. Just value.</p>
</div>
<div className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Unwavering Trust</h3>
<p className="text-slate-400 text-sm font-light">Verified profiles and transparent salary data upfront. No hidden games.</p>
</div>
<div className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Equal Opportunity</h3>
<p className="text-slate-400 text-sm font-light">Our AI is trained to ignore bias, focusing purely on skill, tone, and potential match.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex flex-col items-center justify-center" id="vision">

<div className="absolute inset-0 bg-slate-950">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-slate-900/50 to-purple-900/20"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] rounded-full"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter mb-8">
                Building the Neural Network<br/>of Human Capital.
            </h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mt-16 border-t border-white/5 pt-12">
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">11k+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Talent Profiles</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">60k+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Skills Analyzed</div>
</div>
<div className="col-span-2 md:col-span-1">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">85%</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Placement Success</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-white/5" id="access">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Join the Private Beta</h2>
<p className="text-slate-400 text-sm max-w-lg mx-auto">We are currently accepting a limited number of users to ensure the highest quality of matches.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 hover:border-indigo-500/50 transition-all group relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-xl font-medium text-white mb-2">For Talent</h3>
<p className="text-slate-500 text-sm mb-6">Skip the queue and get discovered.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="16"></iconify-icon>
                            Priority profile review
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="16"></iconify-icon>
                            Access to hidden salary data
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="16"></iconify-icon>
                            Direct intro to founders
                        </li>
</ul>
<button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-indigo-500/20">
                        Request Access
                    </button>
</div>

<div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 hover:border-purple-500/50 transition-all group relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-xl font-medium text-white mb-2">For Recruiters</h3>
<p className="text-slate-500 text-sm mb-6">Build your dream team in days.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-purple-400" icon="lucide:check" width="16"></iconify-icon>
                            3 Free "Perfect Matches"
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-purple-400" icon="lucide:check" width="16"></iconify-icon>
                            AI Voice Analysis Dashboard
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-purple-400" icon="lucide:check" width="16"></iconify-icon>
                            White-glove onboarding
                        </li>
</ul>
<button className="w-full py-3 bg-white hover:bg-slate-200 text-slate-950 rounded-lg text-sm font-medium transition-colors">
                        Get Started
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-10 text-center">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-slate-900/30 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-slate-900/50">
<summary className="flex justify-between items-center p-6 cursor-pointer text-sm font-medium text-slate-200">
                        How does the voice profile work?
                        <iconify-icon className="text-slate-500 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                        You answer 3 simple prompts about your work style and ambition. Our AI analyzes tone, clarity, and keyword relevance to build a sonic profile that recruiters can listen to instantly.
                    </div>
</details>
<details className="group bg-slate-900/30 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-slate-900/50">
<summary className="flex justify-between items-center p-6 cursor-pointer text-sm font-medium text-slate-200">
                        Is my identity hidden?
                        <iconify-icon className="text-slate-500 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                        Yes. You can choose to remain anonymous until you accept an interview request. Your voice profile is the only thing recruiters interact with initially.
                    </div>
</details>
<details className="group bg-slate-900/30 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-slate-900/50">
<summary className="flex justify-between items-center p-6 cursor-pointer text-sm font-medium text-slate-200">
                        What kind of roles are supported?
                        <iconify-icon className="text-slate-500 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                        We are currently optimized for Tech, Sales, Marketing, and Design roles where communication skills are paramount.
                    </div>
</details>
<details className="group bg-slate-900/30 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-slate-900/50">
<summary className="flex justify-between items-center p-6 cursor-pointer text-sm font-medium text-slate-200">
                        Is it free for talent?
                        <iconify-icon className="text-slate-500 transition-transform group-open:rotate-180" icon="lucide:chevron-down" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                        Absolutely. We never charge talent to be part of the pool.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-slate-950 text-slate-500 text-sm font-light">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-xs tracking-tighter">V</div>
<span className="text-white font-medium tracking-tight">VOICEHIRE</span>
</div>
<p className="mb-4">Hiring logic for the next era of work.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="hover:text-indigo-400 transition-colors" href="#">For Talent</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">For Recruiters</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p>© 2024 VoiceHire Inc. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span>Systems Operational</span>
</div>
</div>
</footer>

    </>
  );
}
