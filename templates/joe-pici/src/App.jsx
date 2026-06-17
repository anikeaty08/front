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



        // Spotlight effect logic retained from template
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
<div className="flex shadow-violet-600/10 group-hover:bg-violet-600/20 group-hover:border-violet-600/30 transition-all duration-300 bg-violet-600/10 w-9 h-9 border-violet-600/20 border rounded-xl relative shadow-lg items-center justify-center" style={{perspective: '800px'}}>
<div className="w-5 h-5 relative group-hover:scale-110 transition-transform duration-300" style={{transformStyle: 'preserve-3d', animation: 'navCubeSpin 8s linear infinite'}}>
<div className="absolute inset-0 border-[1.5px] border-violet-600 bg-violet-600/20 backdrop-blur-sm shadow-[inset_0_0_8px_rgba(124,58,237,0.4)]"></div>
<div className="absolute inset-0 border-[1.5px] border-violet-600 bg-violet-600/20 backdrop-blur-sm shadow-[inset_0_0_8px_rgba(124,58,237,0.4)]"></div>
<div className="absolute inset-0 border-[1.5px] border-violet-600 bg-violet-600/20 backdrop-blur-sm shadow-[inset_0_0_8px_rgba(124,58,237,0.4)]"></div>
<div className="absolute inset-0 border-[1.5px] border-violet-600 bg-violet-600/20 backdrop-blur-sm shadow-[inset_0_0_8px_rgba(124,58,237,0.4)]"></div>
<div className="absolute inset-0 border-[1.5px] border-violet-600 bg-violet-600/20 backdrop-blur-sm shadow-[inset_0_0_8px_rgba(124,58,237,0.4)]"></div>
<div className="absolute inset-0 border-[1.5px] border-violet-600 bg-violet-600/20 backdrop-blur-sm shadow-[inset_0_0_8px_rgba(124,58,237,0.4)]"></div>
</div>
</div>
<span className="text-white font-semibold tracking-tight text-sm">Joe Pici</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-xs hover:bg-violet-500 hover:text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-white bg-violet-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#booking">
                    Book a Call
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative flex flex-col items-center justify-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-5xl mx-auto px-6 relative w-full">
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8">
                    Master the Skills That<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Drive Sales Success</span>
</h1>
<p className="leading-relaxed text-base md:text-lg font-normal text-zinc-400 max-w-2xl mx-auto mb-12">
                    Joe Pici helps sales professionals and organisations improve prospecting, communication, and closing skills to achieve stronger sales performance.
                </p>

<div className="w-full max-w-4xl mx-auto mb-12 aspect-video bg-[#09090b] border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group spotlight-card sc-card shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-50"></div>
<div className="flex flex-col items-center gap-4 z-10 text-center p-6">
<div className="w-16 h-16 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">VIDEO PLACEHOLDER</span>
<span className="text-white font-medium tracking-tight text-lg">Watch Joe Explain Sales Performance Training</span>
</div>
</div>
<div className="flex justify-center">
<a className="group relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-violet-600 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(124,58,237,0.5)]" href="#booking">
                        Book a Sales Strategy Call
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="z-20 bg-[#020202] border-y border-white/5 py-12 relative">
<div className="max-w-7xl mx-auto px-6">

<div className="w-full max-w-4xl mx-auto bg-zinc-900/40 border border-white/5 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-zinc-600 mb-3" icon="solar:gallery-wide-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-2">IMAGE PLACEHOLDER</span>
<p className="text-zinc-400 text-sm">Organizations and professionals who follow Joe Pici’s training</p>
</div>
</div>
</section>

<section className="bg-black pt-24 pb-24 relative" id="challenges">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<div className="text-violet-500 font-mono text-xs uppercase tracking-wider mb-3">The Challenge</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                        Why Sales Teams Struggle to <span className="text-zinc-500">Hit Their Targets</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="sc-card spotlight-card p-8 rounded-2xl group flex flex-col justify-start">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-xl mb-3 tracking-tight">Poor Prospecting Skills</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                            Salespeople struggle to consistently generate new opportunities. Without a full pipeline, hitting quotas becomes a constant scramble.
                        </p>
</div>
<div className="sc-card spotlight-card p-8 rounded-2xl group flex flex-col justify-start">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-colors">
<iconify-icon icon="solar:chat-round-call-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-xl mb-3 tracking-tight">Weak Communication</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                            Conversations fail to clearly communicate value. Prospects disconnect when messaging isn't tailored to their specific needs and pain points.
                        </p>
</div>
<div className="sc-card spotlight-card p-8 rounded-2xl group flex flex-col justify-start">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-colors">
<iconify-icon icon="solar:hand-shake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-xl mb-3 tracking-tight">Low Closing Confidence</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                            Sales professionals hesitate during key decision moments. The inability to ask for the business confidently leaves revenue on the table.
                        </p>
</div>
<div className="sc-card spotlight-card p-8 rounded-2xl group flex flex-col justify-start">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-colors">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-xl mb-3 tracking-tight">Lack of Structured Training</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                            Without ongoing development and proven frameworks, performance plateaus. Ad-hoc advice cannot replace systematic skill building.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030303] relative border-t border-white/5" id="approach">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                        Why Sales Leaders Learn <span className="text-violet-400">From Joe Pici</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
<div className="md:col-span-2 sc-card rounded-[2rem] p-8 md:p-10 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-violet-600/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:medal-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-4">Experienced Sales Trainer</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-lg">
                                Years of hands-on experience helping professionals improve sales skills. Joe doesn't just teach theory; he shares tested methodologies forged in the reality of building businesses and driving direct sales.
                            </p>
</div>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 md:p-10 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-6 shadow-lg shadow-black/50 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-colors">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">Practical Sales Techniques</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                            Training designed for real sales conversations. No fluff, just actionable strategies that your team can implement immediately to navigate objections and control the dialogue.
                        </p>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 md:p-10 relative spotlight-card flex flex-col justify-between overflow-hidden group">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-6 shadow-lg shadow-black/50 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-colors">
<iconify-icon icon="solar:funnel-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">Focus on Prospecting and Closing</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                                Develop the skills that directly impact revenue. We zero in on the front-end (filling the pipeline) and the back-end (securing the deal).
                            </p>
</div>
</div>
<div className="md:col-span-2 sc-card rounded-[2rem] p-8 md:p-10 relative spotlight-card flex flex-col justify-center overflow-hidden group">
<div className="relative z-10 max-w-xl">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-6 shadow-lg shadow-black/50 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-colors">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-4">Performance-Driven Approach</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Training designed to improve measurable results. We focus on activities and skill adoption that translate directly into higher conversion rates, larger deal sizes, and shorter sales cycles.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-y border-white/5 relative">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12">The Impact of Practical Training</h2>

<div className="w-full mx-auto aspect-[21/9] bg-zinc-900/40 border border-white/5 border-dashed rounded-2xl flex flex-col items-center justify-center mb-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#020202] to-transparent opacity-50"></div>
<iconify-icon className="text-zinc-600 mb-4 z-10" icon="solar:user-speak-linear" strokeWidth="1.5" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-2 z-10">IMAGE PLACEHOLDER</span>
<span className="text-zinc-400 text-sm z-10">Client feedback and training outcomes</span>
</div>
<p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mx-auto">
                    "Sales professionals and organisations value Joe Pici’s practical approach to improving sales performance and communication skills."
                </p>
</div>
</section>

<section className="py-24 bg-[#050505]" id="process">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                        How Joe Pici Improves<br/>
<span className="text-violet-500">Sales Performance</span>
</h2>
</div>

<div className="relative pl-12 pb-20 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-zinc-400 z-10 shadow-[0_0_0_8px_#050505] group-hover:border-violet-500 group-hover:text-violet-400 transition-colors">
<span className="font-mono text-xs">01</span>
</div>
<div>
<span className="text-violet-400 font-mono text-xs uppercase tracking-wider mb-2 block">Step 1</span>
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">Assess Sales Skills</h3>
<p className="text-zinc-400 leading-relaxed text-sm max-w-xl">
                            Identify prospecting and communication gaps. Before prescribing a solution, we diagnose the specific areas where your team is losing leverage or momentum in the sales cycle.
                        </p>
</div>
</div>

<div className="relative pl-12 pb-20 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-zinc-400 z-10 shadow-[0_0_0_8px_#050505] group-hover:border-violet-500 group-hover:text-violet-400 transition-colors">
<span className="font-mono text-xs">02</span>
</div>
<div>
<span className="text-violet-400 font-mono text-xs uppercase tracking-wider mb-2 block">Step 2</span>
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">Deliver Practical Training</h3>
<p className="text-zinc-400 leading-relaxed text-sm max-w-xl">
                            Teach proven sales frameworks and techniques. Interactive, high-energy sessions focused on real-world application, scripting, and objection handling that professionals can use on their very next call.
                        </p>
</div>
</div>

<div className="relative pl-12 pb-12 border-l border-transparent group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-zinc-400 z-10 shadow-[0_0_0_8px_#050505] group-hover:border-violet-500 group-hover:text-violet-400 transition-colors">
<span className="font-mono text-xs">03</span>
</div>
<div>
<span className="text-violet-400 font-mono text-xs uppercase tracking-wider mb-2 block">Step 3</span>
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">Strengthen Sales Confidence</h3>
<p className="text-zinc-400 leading-relaxed text-sm max-w-xl mb-8">
                            Help teams consistently apply new skills. True performance improvement comes from reinforcement. We ensure the techniques become second nature, leading to higher closing rates and confident execution.
                        </p>
<a className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:bg-zinc-200" href="#booking">
                            Improve Your Sales Performance
                        </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">What's Included</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="p-6 rounded-xl bg-[#09090b] border border-white/5 flex items-center gap-4 hover:border-violet-500/30 transition-colors">
<iconify-icon className="text-violet-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-zinc-200 text-sm font-medium">Sales Prospecting Training</span>
</div>
<div className="p-6 rounded-xl bg-[#09090b] border border-white/5 flex items-center gap-4 hover:border-violet-500/30 transition-colors">
<iconify-icon className="text-violet-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-zinc-200 text-sm font-medium">Closing Skills Development</span>
</div>
<div className="p-6 rounded-xl bg-[#09090b] border border-white/5 flex items-center gap-4 hover:border-violet-500/30 transition-colors">
<iconify-icon className="text-violet-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-zinc-200 text-sm font-medium">Communication Skills Coaching</span>
</div>
<div className="p-6 rounded-xl bg-[#09090b] border border-white/5 flex items-center gap-4 hover:border-violet-500/30 transition-colors">
<iconify-icon className="text-violet-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-zinc-200 text-sm font-medium">Sales Leadership Development</span>
</div>
<div className="p-6 rounded-xl bg-[#09090b] border border-white/5 flex items-center gap-4 hover:border-violet-500/30 transition-colors">
<iconify-icon className="text-violet-500 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-zinc-200 text-sm font-medium">Sales Performance Workshops</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030303] border-t border-white/5 relative overflow-hidden" id="about">
<div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center sc-card rounded-[2.5rem] p-8 md:p-12">

<div className="w-full aspect-[4/5] md:aspect-square bg-zinc-900/50 border border-white/10 border-dashed rounded-2xl flex flex-col items-center justify-center text-center">
<iconify-icon className="text-zinc-600 mb-4" icon="solar:user-circle-linear" strokeWidth="1.5" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-2">IMAGE PLACEHOLDER</span>
<span className="text-zinc-400 text-sm">Portrait of Joe Pici</span>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Hi, I’m Joe Pici.</h2>
<div className="space-y-6 text-zinc-400 text-base leading-relaxed">
<p>
                                Through Pici &amp; Pici Inc., I help sales professionals and organisations improve prospecting, communication, and closing performance.
                            </p>
<p>
                                My goal is simple: equip teams with the practical skills needed to consistently win more business.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/5">
<h3 className="text-white font-medium text-lg mb-2">Who is this designed for?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Sales professionals and organisations seeking stronger performance.</p>
</div>

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/5">
<h3 className="text-white font-medium text-lg mb-2">Is this training for individuals or teams?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Both — individuals and organisations benefit.</p>
</div>

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/5">
<h3 className="text-white font-medium text-lg mb-2">Do you focus on prospecting or closing?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Both skills are essential for consistent sales success.</p>
</div>

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/5">
<h3 className="text-white font-medium text-lg mb-2">What makes Joe’s approach different?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Practical training designed for real sales environments.</p>
</div>

<div className="p-6 rounded-2xl bg-[#09090b] border border-white/5">
<h3 className="text-white font-medium text-lg mb-2">How do we get started?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Book a strategy call.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#020202]" id="booking">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Improve Your<br/>
<span className="text-violet-400">Sales Performance</span>
</h2>
<p className="text-zinc-400 text-base md:text-lg mb-10 leading-relaxed max-w-md">
                            Book a conversation with Joe Pici to explore how his sales training can help your team achieve stronger results.
                        </p>
<div>
<button className="group relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-violet-600 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(124,58,237,0.5)]">
                                Book My Call
                                <iconify-icon className="transition-transform duration-300 group-hover:scale-110" height="18" icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] bg-zinc-900/40 border border-white/5 border-dashed rounded-2xl flex flex-col items-center justify-center mt-8 lg:mt-0 text-center p-8">
<iconify-icon className="text-zinc-600 mb-4" icon="solar:calendar-mark-linear" strokeWidth="1.5" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-2">CALENDLY PLACEHOLDER</span>
<span className="text-zinc-400 text-sm">Interactive booking calendar will load here</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-12 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-3 text-white font-semibold tracking-tight">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-violet-400">
<iconify-icon icon="solar:user-circle-bold" width="18"></iconify-icon>
</div>
                    Joe Pici
                </div>
<div className="text-zinc-600 text-xs">
                    © 2024 Pici &amp; Pici Inc. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
