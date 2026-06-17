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
<nav aria-label="Main menu" className="border-white/[0.05] flex shadow-black/50 bg-[#040814]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-yellow-500/10 overflow-hidden group-hover:bg-yellow-500/20 group-hover:border-yellow-500/30 transition-all duration-300 bg-yellow-500/10 w-9 h-9 border-yellow-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-yellow-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">MySalesCoach</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-yellow-400 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-slate-900 bg-yellow-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_20px_rgba(250,204,21,0.2)]" href="#booking">
                    Book a Strategy Call
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">

<div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen animate-float-1 pointer-events-none z-0"></div>
<div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full mix-blend-screen animate-float-2 pointer-events-none z-0"></div>
<div className="absolute -bottom-[10%] left-[30%] w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen animate-float-3 pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-yellow-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(250,204,21,0.05)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-signal"></span>
                    Sales Coaching &amp; Leadership
                </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] text-5xl font-medium text-white tracking-tight mb-8">
                    Develop Sales Teams That<br/> <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-slate-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">Perform With Confidence.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-slate-400 max-w-2xl mr-auto mb-10 ml-auto">
                    Kevin Beales helps sales professionals and leaders strengthen their sales approach, improve conversations with customers, and build stronger sales performance.
                </p>
<div className="flex flex-col mb-16 items-center justify-center">
<div className="flex w-full max-w-lg mb-6 pr-4 pl-4 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-yellow-500 px-8 text-base font-medium text-slate-900 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(250,204,21,0.2)] hover:shadow-[0_0_60px_rgba(250,204,21,0.3)] ring-1 ring-yellow-400/50" href="#booking">
                            Book a Strategy Call
                            <iconify-icon className="transition-transform duration-300 group-hover:rotate-12" height="18" icon="solar:calendar-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="max-w-4xl mx-auto w-full aspect-video rounded-3xl bg-[#0A1329]/60 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group flex flex-col items-center justify-center mt-12">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
<div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4 border border-yellow-500/30 group-hover:scale-110 transition-transform duration-500 z-10 shadow-[0_0_30px_rgba(250,204,21,0.2)]">
<iconify-icon className="text-yellow-400" icon="solar:play-circle-linear" width="32"></iconify-icon>
</div>
<span className="text-slate-400 text-xs font-mono uppercase tracking-widest z-10">Video Placeholder</span>
<span className="text-white font-medium mt-2 z-10 text-sm md:text-base">Watch Kevin Explain the Sales Coaching Approach</span>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#02040A] relative z-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-8">Sales professionals developing their skills through MySalesCoach</p>
<div className="w-full h-24 rounded-2xl bg-[#0A1329]/50 border border-white/5 flex items-center justify-center border-dashed backdrop-blur-sm relative overflow-hidden">
<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)]"></div>
<span className="text-slate-500 font-mono text-sm uppercase tracking-widest z-10 flex items-center gap-2">
<iconify-icon icon="solar:gallery-linear" width="18"></iconify-icon>
                        Image Placeholder
                    </span>
</div>
</div>
</section>

<section className="py-32 bg-[#040814] relative z-20" id="challenges">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#12203D] text-slate-300 mb-8 border border-white/10 shadow-lg">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-16 leading-tight">
                    Why Sales Teams Often<br className="hidden md:block"/> Struggle to Improve
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div className="p-8 rounded-[2rem] bg-[#0A1329] border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-[#12203D] flex items-center justify-center text-slate-300 mb-6 border border-white/5">
<iconify-icon icon="solar:map-point-remove-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Lack of structured coaching</h3>
<p className="text-sm text-slate-400 leading-relaxed">Many teams operate without consistent coaching or development, leaving sales professionals to figure it out on their own.</p>
</div>
<div className="p-8 rounded-[2rem] bg-[#0A1329] border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-[#12203D] flex items-center justify-center text-slate-300 mb-6 border border-white/5">
<iconify-icon icon="solar:shield-cross-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Sales confidence challenges</h3>
<p className="text-sm text-slate-400 leading-relaxed">Salespeople often hesitate during key conversations with prospects, struggling to guide the process smoothly.</p>
</div>
<div className="p-8 rounded-[2rem] bg-[#0A1329] border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-[#12203D] flex items-center justify-center text-slate-300 mb-6 border border-white/5">
<iconify-icon icon="solar:graph-down-new-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Inconsistent sales performance</h3>
<p className="text-sm text-slate-400 leading-relaxed">Without clear frameworks, results vary widely across the team, making forecasting and scaling difficult.</p>
</div>
<div className="p-8 rounded-[2rem] bg-[#0A1329] border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-[#12203D] flex items-center justify-center text-slate-300 mb-6 border border-white/5">
<iconify-icon icon="solar:book-bookmark-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Training that doesn't translate</h3>
<p className="text-sm text-slate-400 leading-relaxed">Many programs teach theory without helping reps apply it to real selling scenarios they face daily.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#02040A] border-y border-white/5 relative" id="why-kevin">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Why Sales Teams Work With Kevin Beales</h2>
<p className="text-slate-400 text-base max-w-xl mx-auto">A practical approach focused on continuous development and real-world application.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:star-fall-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-3">Sales coaching expertise</h3>
<p className="text-slate-400 text-base leading-relaxed max-w-md">Focused on developing practical sales capability, moving beyond one-off training events to embed lasting skills and behaviors.</p>
</div>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-3">Leadership development</h3>
<p className="text-slate-400 text-base leading-relaxed mb-4">Helping sales managers coach and guide their teams effectively, creating a culture of continuous improvement.</p>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:layers-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Practical sales frameworks</h3>
<p className="text-slate-400 text-base leading-relaxed">Strategies designed for real sales conversations, easy to understand and quick to deploy in the field.</p>
</div>
</div>
<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-center overflow-hidden">
<div className="relative z-10 max-w-lg">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-3">Confidence-driven performance</h3>
<p className="text-slate-400 text-base leading-relaxed">Helping sales professionals communicate value clearly, overcome objections smoothly, and build the confidence needed to perform at their best consistently.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#040814] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="p-8 md:p-12 rounded-[2rem] bg-[#0A1329] border border-white/5 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative spotlight-card">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none"></div>
<div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl bg-[#040814]/80 border border-white/10 flex flex-col items-center justify-center border-dashed relative z-10">
<iconify-icon className="text-slate-500 mb-2" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<span className="text-slate-500 font-mono text-sm uppercase tracking-widest text-center px-4">Image Placeholder<br/><span className="text-xs text-slate-600 mt-1 block">Sales professionals strengthening their sales skills</span></span>
</div>
<div className="w-full md:w-1/2 relative z-10">
<div className="flex text-yellow-500 gap-1 mb-6">
<iconify-icon aria-hidden="true" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon aria-hidden="true" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon aria-hidden="true" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon aria-hidden="true" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon aria-hidden="true" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-6 leading-relaxed">
                            "Sales teams work with Kevin Beales to improve sales conversations, leadership habits, and team performance."
                        </h3>
<p className="text-slate-400 text-base">
                            Building stronger capability through focused, practical coaching that delivers measurable improvements in confidence and execution.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#02040A] border-y border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                        How Sales Teams Improve<br/> <span className="text-yellow-500">With MySalesCoach</span>
</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        A structured approach to transforming sales potential into consistent performance.
                    </p>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-white/10 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0A1329] border border-white/10 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#02040A] group-hover:border-yellow-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
<div className="pt-1">
<span className="text-yellow-500 font-mono text-xs uppercase tracking-wide mb-3 block">Step 1</span>
<h3 className="text-3xl text-white font-medium mb-4 tracking-tight">Understand Current Sales Challenges</h3>
<p className="text-slate-400 text-base leading-relaxed">
                                We begin by identifying exactly where sales conversations break down and what is holding your team back from peak performance.
                            </p>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-white/10 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0A1329] border border-white/10 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#02040A] group-hover:border-yellow-500 transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
<div className="pt-1">
<span className="text-yellow-500 font-mono text-xs uppercase tracking-wide mb-3 block">Step 2</span>
<h3 className="text-3xl text-white font-medium mb-4 tracking-tight">Introduce Practical Sales Frameworks</h3>
<p className="text-slate-400 text-base leading-relaxed">
                                Develop stronger communication and sales habits with frameworks designed for immediate application in real-world scenarios.
                            </p>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-white/10 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0A1329] border border-white/10 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#02040A] group-hover:border-yellow-500 transition-colors">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
<div className="pt-1">
<span className="text-yellow-500 font-mono text-xs uppercase tracking-wide mb-3 block">Step 3</span>
<h3 className="text-3xl text-white font-medium mb-4 tracking-tight">Build Confidence and Consistency</h3>
<p className="text-slate-400 text-base leading-relaxed mb-8">
                                Help teams perform more effectively in real sales situations through ongoing support, reinforcement, and targeted coaching.
                            </p>
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white/5 hover:bg-white/10 px-6 text-sm font-medium text-white border border-white/10 transition-colors cursor-pointer" href="#booking">
                                Strengthen My Sales Team
                                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#040814] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">What's Included</h2>
<p className="text-slate-400 text-base max-w-xl mx-auto">Comprehensive support to elevate every aspect of your sales engine.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
<div className="bg-[#0A1329] border border-white/5 rounded-2xl p-6 flex items-center gap-4 hover:border-yellow-500/30 transition-colors">
<div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">Sales Coaching Programs</span>
</div>
<div className="bg-[#0A1329] border border-white/5 rounded-2xl p-6 flex items-center gap-4 hover:border-yellow-500/30 transition-colors">
<div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">Sales Leadership Development</span>
</div>
<div className="bg-[#0A1329] border border-white/5 rounded-2xl p-6 flex items-center gap-4 hover:border-yellow-500/30 transition-colors">
<div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">Sales Training Workshops</span>
</div>
<div className="bg-[#0A1329] border border-white/5 rounded-2xl p-6 flex items-center gap-4 hover:border-yellow-500/30 transition-colors lg:col-start-2 lg:col-span-1 sm:col-span-1">
<div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">Sales Conversation Frameworks</span>
</div>
<div className="bg-[#0A1329] border border-white/5 rounded-2xl p-6 flex items-center gap-4 hover:border-yellow-500/30 transition-colors lg:col-span-1 sm:col-span-2">
<div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">Team Sales Coaching</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#02040A] border-y border-white/5 relative" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
<div className="aspect-square w-full rounded-[2rem] bg-[#0A1329] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#02040A] to-transparent opacity-50 z-10"></div>
<iconify-icon className="text-slate-600 mb-3 z-0" icon="solar:user-linear" width="48"></iconify-icon>
<span className="text-slate-500 font-mono text-sm uppercase tracking-widest z-0 text-center px-4">Kevin Beales<br/><span className="text-xs text-slate-600 mt-1 block">Image Placeholder</span></span>
</div>
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-300 text-xs uppercase font-medium tracking-wide mb-6">
                            Meet Your Coach
                        </div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8">Hi, I'm Kevin Beales.</h2>
<div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
<p>
                                Through MySalesCoach, I work with sales professionals and leaders to improve how they approach sales conversations and develop stronger sales habits.
                            </p>
<p>
                                My focus is helping teams build confidence, improve communication with customers, and strengthen sales performance.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#040814] relative">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<div className="bg-[#0A1329] border border-white/5 rounded-2xl p-6 md:p-8">
<h3 className="text-lg font-medium text-white mb-3">Who is this designed for?</h3>
<p className="text-slate-400 text-sm leading-relaxed">Sales professionals and leaders looking to improve performance, whether you're an individual contributor or managing a growing team.</p>
</div>
<div className="bg-[#0A1329] border border-white/5 rounded-2xl p-6 md:p-8">
<h3 className="text-lg font-medium text-white mb-3">Is this sales training or coaching?</h3>
<p className="text-slate-400 text-sm leading-relaxed">Both — combining structured learning with coaching support to ensure skills are actually applied in real conversations.</p>
</div>
<div className="bg-[#0A1329] border border-white/5 rounded-2xl p-6 md:p-8">
<h3 className="text-lg font-medium text-white mb-3">Does this work for experienced sales teams?</h3>
<p className="text-slate-400 text-sm leading-relaxed">Yes. The focus is improving real sales conversations and leadership habits, which benefits both new hires and seasoned veterans looking to sharpen their edge.</p>
</div>
<div className="bg-[#0A1329] border border-white/5 rounded-2xl p-6 md:p-8">
<h3 className="text-lg font-medium text-white mb-3">What makes MySalesCoach different?</h3>
<p className="text-slate-400 text-sm leading-relaxed">The approach focuses on practical sales coaching rather than abstract theory. We work on the actual conversations you're having today.</p>
</div>
<div className="bg-[#0A1329] border border-white/5 rounded-2xl p-6 md:p-8">
<h3 className="text-lg font-medium text-white mb-3">How do we get started?</h3>
<p className="text-slate-400 text-sm leading-relaxed">Simply book a strategy call to discuss your team's current challenges and see if our approach is the right fit.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#02040A] border-t border-white/5" id="booking">
<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#0A1329]/80 backdrop-blur-sm relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">
<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
                            Strengthen Your<br/> Sales Team
                        </h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a conversation with Kevin Beales to explore how MySalesCoach can help improve your sales conversations and team performance.
                        </p>
<div className="mt-8 flex items-center gap-4">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-yellow-500 px-8 text-sm font-medium text-slate-900 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(250,204,21,0.2)]" href="#">
                                Book My Call
                                <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#040814] border border-white/5 rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center mt-8 lg:mt-0">
<iconify-icon className="text-slate-600 mb-4" icon="solar:calendar-date-linear" width="48"></iconify-icon>
<span className="text-slate-500 font-mono text-sm uppercase tracking-widest text-center px-4">Calendly Placeholder<br/><span className="text-xs text-slate-600 mt-1 block">Interactive booking widget will appear here</span></span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#040814] border-t border-white/5 pt-20 pb-10 text-sm relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div className="pr-8">
<a aria-label="Home" className="flex items-center gap-3 text-white font-medium tracking-tight text-lg mb-4 group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden group-hover:bg-yellow-500/10 group-hover:border-yellow-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-yellow-500 transition-colors duration-300" icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                        MySalesCoach
                    </a>
<p className="text-slate-500 leading-relaxed max-w-xs">
                        Develop Sales Teams That Perform With Confidence.
                    </p>
</div>
<div className="flex gap-8">
<a className="text-slate-500 hover:text-yellow-400 transition-colors" href="#why-kevin">Why Kevin</a>
<a className="text-slate-500 hover:text-yellow-400 transition-colors" href="#process">Process</a>
<a className="text-slate-500 hover:text-yellow-400 transition-colors" href="#about">About</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-slate-600 text-xs">
                    © 2024 MySalesCoach &amp; Kevin Beales. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
