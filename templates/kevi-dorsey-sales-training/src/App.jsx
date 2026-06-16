import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Spotlight effect for Bento cards
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
  }, []);

  return (
    <>
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Main Menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="KD Dorsey Home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-yellow-500/10 overflow-hidden group-hover:bg-yellow-500/20 group-hover:border-yellow-500/30 transition-all duration-300 bg-yellow-500/10 w-9 h-9 border-yellow-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="transition-transform duration-300 group-hover:scale-110 text-yellow-400" height="20" icon="solar:round-alt-arrow-left-outline" strokeWidth="1.5" style={{color: 'rgb(250, 204, 21)'}} width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">KD Dorsey</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-yellow-300 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-black bg-yellow-400 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#demo">
                    Book a Strategy Call
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-screen flex flex-col pt-44 pb-20 relative justify-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="text-center w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-yellow-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(250,204,21,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-signal"></span>
                    Sales Leadership Accelerator
                </div>
<h1 className="leading-[1.05] text-5xl font-medium text-white tracking-tight max-w-5xl mr-auto mb-8 ml-auto md:text-7xl lg:text-7xl">
                    Build Sales Leaders Who <br/> <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Drive Real Performance.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                    KD Dorsey helps companies develop sales managers into confident leaders who can coach teams, strengthen culture, and drive consistent sales performance.
                </p>

<div className="w-full max-w-4xl mx-auto mb-12 aspect-video bg-[#050505] border border-white/10 rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl z-20">
<div className="absolute inset-0 bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors"></div>
<iconify-icon className="text-6xl text-yellow-400 mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300" icon="solar:play-circle-linear"></iconify-icon>
<span className="text-zinc-500 font-mono text-xs tracking-widest mb-2 uppercase">Video Placeholder</span>
<span className="text-white font-medium text-lg">Watch KD Explain Sales Leadership Development</span>
</div>
<div className="flex flex-col mb-16 items-center justify-center">
<div className="flex w-full max-w-lg mb-6 pr-4 pl-4 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-yellow-400 px-8 text-base font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(250,204,21,0.15)] hover:shadow-[0_0_60px_rgba(250,204,21,0.25)] ring-1 ring-yellow-500/50" href="#demo">
                            Book a Strategy Call
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div aria-hidden="true" className="cube-scene hidden md:flex flex-row items-center justify-between w-full z-10 max-w-5xl mx-auto relative mb-16" id="interactive-scene" style={{minHeight: '400px', padding: '2rem 0'}}>
<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0 pointer-events-none"></div>
<div className="absolute top-1/2 left-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-yellow-500 to-transparent -translate-y-1/2 z-0 pointer-events-none" style={{animation: 'pulseLine 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>

<div className="w-[280px] flex flex-col gap-3 z-10">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-wide pl-1 mb-2">Current State</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all" style={{animation: 'floatGentle 6s ease-in-out infinite'}}>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 z-10 shrink-0">
<iconify-icon icon="solar:graph-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-normal text-zinc-200 truncate">Inconsistent Results</span>
</div>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all" style={{animation: 'floatGentle 6s ease-in-out 1.5s infinite'}}>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 z-10 shrink-0">
<iconify-icon icon="solar:eye-closed-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-normal text-zinc-200 truncate">No Real Coaching</span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative min-w-[320px] z-10 px-4">
<div className="text-xs font-mono text-yellow-500 uppercase tracking-wide mb-6 bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20 shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                            Leadership Development
                        </div>
<div className="relative bg-black/90 backdrop-blur-xl border border-yellow-500/30 rounded-3xl p-6 w-full max-w-[340px] z-10 text-center" style={{animation: 'pulseGlow 4s ease-in-out infinite'}}>
<div className="absolute -inset-4 bg-gradient-to-b from-yellow-500/20 to-transparent opacity-30 blur-2xl pointer-events-none rounded-[3rem] z-[-1]"></div>
<div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black shadow-[0_0_20px_rgba(250,204,21,0.4)] mb-4">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-xl font-medium text-white tracking-tight">Sales Leadership Accelerator</div>
<div className="text-sm text-zinc-400 mt-2">Transforming managers into high-impact leaders.</div>
</div>
</div>

<div className="w-[280px] flex flex-col gap-3 z-10">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-wide text-right pr-1 mb-2">Future State</div>
<div className="flex items-center justify-end gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all" style={{animation: 'floatGentle 6s ease-in-out 0.5s infinite'}}>
<div className="flex flex-col text-right z-10 min-w-0">
<span className="text-sm font-normal text-zinc-200 truncate">Strong Culture</span>
</div>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-yellow-400 z-10 shrink-0">
<iconify-icon icon="solar:shield-star-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-end gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all" style={{animation: 'floatGentle 6s ease-in-out 2s infinite'}}>
<div className="flex flex-col text-right z-10 min-w-0">
<span className="text-sm font-normal text-zinc-200 truncate">Consistent Performance</span>
</div>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-yellow-400 z-10 shrink-0">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-white/5 bg-[#020202] relative z-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="text-zinc-500 font-mono text-xs uppercase tracking-wide mb-8">
                    Sales leaders learning from KD Dorsey and Sales Leadership Accelerator
                </div>
<div className="w-full h-24 bg-zinc-900/30 border border-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<span className="text-zinc-600 font-mono text-sm uppercase tracking-widest relative z-10">Image Placeholder (Logos)</span>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#050505] relative z-20" id="pain-points">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/10 text-yellow-400 mb-8 border border-yellow-500/20">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight">
                        Why Many Sales Teams Struggle <br className="hidden md:block"/>to Improve Performance
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Managers promoted without leadership training</h3>
<p className="text-base text-zinc-400 leading-relaxed">Many sales managers are promoted from top individual contributors without learning how to lead.</p>
</div>
<div className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Coaching rarely happens</h3>
<p className="text-base text-zinc-400 leading-relaxed">Managers spend time on pipeline reviews instead of helping reps improve.</p>
</div>
<div className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Sales culture lacks accountability</h3>
<p className="text-base text-zinc-400 leading-relaxed">Teams struggle when leadership habits and expectations are unclear.</p>
</div>
<div className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Performance becomes inconsistent</h3>
<p className="text-base text-zinc-400 leading-relaxed">Without strong leadership, results vary month to month.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-y border-white/5 relative" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
                        Why Sales Leaders Work With KD Dorsey
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:star-fall-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-3">Real sales leadership experience</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">KD built and led high-performing sales teams before teaching leadership. He understands the pressure and reality of the role.</p>
</div>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:target-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-3">Focus on practical leadership habits</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-4">Managers learn how to coach effectively, not just manage dashboards and run pipeline interrogations.</p>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:lamp-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Modern sales leadership mindset</h3>
<p className="text-zinc-400 text-base leading-relaxed">Leadership development built specifically around today's complex sales environments.</p>
</div>
</div>

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-center overflow-hidden gap-6">
<div className="relative z-10 max-w-lg">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-3">Operator-first approach</h3>
<p className="text-zinc-400 text-base leading-relaxed">The programs are not theoretical. They focus entirely on how sales leaders actually run teams, coach reps, and drive measurable performance.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020202] border-b border-white/5 relative z-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="aspect-[21/9] w-full bg-zinc-900/40 border border-white/10 rounded-3xl flex items-center justify-center mb-10 relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-grid-pattern opacity-20 mix-blend-overlay"></div>
<span className="text-zinc-600 font-mono text-sm uppercase tracking-widest relative z-10">Image Placeholder</span>
<div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
<span className="text-xs text-zinc-400 bg-black/80 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full">
                            Sales leaders developing leadership skills through Sales Leadership Accelerator
                        </span>
</div>
</div>
<p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
                    Sales leaders work with KD Dorsey to strengthen coaching habits, improve team culture, and develop stronger leadership capability.
                </p>
</div>
</section>

<section className="py-32 bg-[#050505] border-b border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
                        How Sales Leadership Accelerator <br/>Develops Sales Leaders
                    </h2>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-yellow-500 transition-colors">
<span className="font-mono text-sm">1</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
<div className="pt-1">
<h3 className="text-3xl text-white font-medium mb-4 tracking-tight">Evaluate Leadership Gaps</h3>
<p className="text-zinc-400 text-lg leading-relaxed">
                                Identify the specific leadership behaviors and management habits that are limiting team performance.
                            </p>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-white transition-colors">
<span className="font-mono text-sm">2</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
<div className="pt-1">
<h3 className="text-3xl text-white font-medium mb-4 tracking-tight">Develop Coaching Skills</h3>
<p className="text-zinc-400 text-lg leading-relaxed">
                                Managers learn exactly how to coach reps in real sales situations, moving away from simple pipeline management to true skill development.
                            </p>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-yellow-500 transition-colors">
<span className="font-mono text-sm">3</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
<div className="pt-1">
<h3 className="text-3xl text-white font-medium mb-4 tracking-tight">Build Stronger Leadership Culture</h3>
<p className="text-zinc-400 text-lg leading-relaxed">
                                Create embedded leadership habits that scale, ensuring clear expectations, accountability, and improved team performance.
                            </p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-yellow-400 px-8 text-base font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" href="#demo">
                        Develop My Sales Leaders
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-[#020202] border-b border-white/5 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">What's Included in the Program</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 text-center hover:bg-zinc-900/80 transition-colors">
<iconify-icon className="text-3xl text-yellow-400 mb-4" icon="solar:diploma-linear"></iconify-icon>
<h4 className="text-white text-sm font-medium">Sales Leadership Training</h4>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 text-center hover:bg-zinc-900/80 transition-colors">
<iconify-icon className="text-3xl text-white mb-4" icon="solar:chat-square-check-linear"></iconify-icon>
<h4 className="text-white text-sm font-medium">Manager Coaching Frameworks</h4>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 text-center hover:bg-zinc-900/80 transition-colors">
<iconify-icon className="text-3xl text-yellow-400 mb-4" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h4 className="text-white text-sm font-medium">Leadership Development Programs</h4>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 text-center hover:bg-zinc-900/80 transition-colors">
<iconify-icon className="text-3xl text-white mb-4" icon="solar:shield-star-linear"></iconify-icon>
<h4 className="text-white text-sm font-medium">Sales Team Culture Development</h4>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 text-center hover:bg-zinc-900/80 transition-colors sm:col-span-2 lg:col-span-1">
<iconify-icon className="text-3xl text-yellow-400 mb-4" icon="solar:presentation-graph-linear"></iconify-icon>
<h4 className="text-white text-sm font-medium">Leadership Strategy Workshops</h4>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5 relative z-20" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="aspect-[4/5] w-full max-w-md mx-auto bg-zinc-900/50 border border-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent"></div>
<span className="text-zinc-600 font-mono text-sm uppercase tracking-widest relative z-10">Image Placeholder<br/>(KD Dorsey)</span>
</div>
<div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">Hi, I'm KD Dorsey.</h2>
<div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
<p>I work with companies that want their sales managers to become stronger leaders.</p>
<p>Through Sales Leadership Accelerator, I help sales managers develop coaching habits, leadership mindset, and the skills needed to build high-performing teams.</p>
<p className="text-white font-medium text-xl border-l-2 border-yellow-400 pl-6 my-8 py-2">
                                The goal is simple: better leaders create better sales teams.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020202] border-b border-white/5 relative z-20">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<details className="group bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                            Who is this designed for?
                            <span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-yellow-400 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400">
                            Sales managers and leaders responsible for developing teams.
                        </div>
</details>
<details className="group bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                            Is this leadership training or sales training?
                            <span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-yellow-400 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400">
                            The focus is leadership — helping managers become effective coaches.
                        </div>
</details>
<details className="group bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                            Does this work for experienced leaders?
                            <span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-yellow-400 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400">
                            Yes. The programs help leaders strengthen coaching and leadership habits, regardless of tenure.
                        </div>
</details>
<details className="group bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                            What makes this different from typical sales training?
                            <span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-yellow-400 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400">
                            The focus is strictly on leadership development, habits, and culture, not just selling techniques or product knowledge.
                        </div>
</details>
<details className="group bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                            How do we get started?
                            <span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-yellow-400 text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400">
                            Book a strategy call using the calendar below.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
                            Develop Stronger<br/>Sales Leaders.
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a call with KD Dorsey to explore how Sales Leadership Accelerator can help develop stronger sales managers and improve team performance.
                        </p>
</div>

<div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#0c0c0c] border border-white/10 rounded-2xl flex flex-col items-center justify-center overflow-hidden shadow-2xl ring-1 ring-white/5 p-8 text-center group">
<div className="absolute inset-0 bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors"></div>
<iconify-icon className="text-6xl text-zinc-600 mb-6 relative z-10" icon="solar:calendar-date-linear"></iconify-icon>
<span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-8 relative z-10">Calendly Placeholder</span>
<button className="relative z-10 inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-yellow-400 px-8 text-base font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                            Book My Call
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-12 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-3 text-white font-medium tracking-tight text-lg">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400">
<iconify-icon icon="solar:crown-linear" width="18"></iconify-icon>
</div>
                    Sales Leadership Accelerator
                </div>
<div className="text-zinc-600 text-xs">
                    © 2024 Sales Leadership Accelerator. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
