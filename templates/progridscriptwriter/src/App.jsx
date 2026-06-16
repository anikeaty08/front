import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
}
}
}
}



        function togglePricing() {
            const isChecked = document.getElementById('price-toggle').checked;
            const monthlyPrices = document.querySelectorAll('.price-monthly');
            const annualPrices = document.querySelectorAll('.price-annual');
            const termLabels = document.querySelectorAll('.term-label');
            const circle = document.getElementById('toggle-circle');

            if (isChecked) {
                monthlyPrices.forEach(el => el.classList.add('hidden'));
                annualPrices.forEach(el => el.classList.remove('hidden'));
                termLabels.forEach(el => el.textContent = '/yr');
                circle.style.transform = 'translateX(24px)';
            } else {
                monthlyPrices.forEach(el => el.classList.remove('hidden'));
                annualPrices.forEach(el => el.classList.add('hidden'));
                termLabels.forEach(el => el.textContent = '/mo');
                circle.style.transform = 'translateX(0)';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="relative flex items-center gap-1.5 group pt-2.5 pb-1 px-1" href="#">
<div className="absolute inset-x-0 top-0 h-3 border-t-[3px] border-x-[3px] border-neutral-300 transition-colors group-hover:border-white"></div>
<span className="text-xl font-semibold tracking-tight text-neutral-300 group-hover:text-white transition-colors leading-none">ProGrid</span>
<svg className="w-3.5 h-3.5 text-neutral-300 fill-current group-hover:text-white transition-colors mt-0.5" viewbox="0 0 24 24">
<path d="M4 21.5V2.5L21 12L4 21.5Z"></path>
</svg>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#product">Product</a>
<a className="hover:text-white transition-colors" href="#examples">Examples</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-neutral-400 hover:text-white transition-colors font-medium" href="#">Log in</a>
<a className="bg-white text-black hover:bg-neutral-200 transition-colors px-4 py-2 rounded text-xs font-medium tracking-tight" href="#pricing">
                    Start trial
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Turn your race weekends into <br className="hidden md:block"/>
<span className="text-gradient">sponsor-grade videos.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                ProGrid turns your timing data, key moments, and notes into a retention-engineered script + shot list that makes you look like a serious driver teams and sponsors can back.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 transition-colors px-6 py-3 rounded-lg text-sm font-medium tracking-tight flex items-center justify-center gap-2" href="#pricing">
                    Start 7-day trial
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors px-6 py-3 rounded-lg text-sm font-medium tracking-tight flex items-center justify-center gap-2" href="#">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5"></iconify-icon>
                    Watch 60-sec demo
                </a>
</div>

<div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-12">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-neutral-300">
<iconify-icon className="text-blue-500" icon="lucide:flag" strokeWidth="1.5"></iconify-icon>
<span>Motorsport-native</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-neutral-300">
<iconify-icon className="text-green-500" icon="lucide:file-check" strokeWidth="1.5"></iconify-icon>
<span>Evidence-first</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-neutral-300">
<iconify-icon className="text-purple-500" icon="lucide:mic" strokeWidth="1.5"></iconify-icon>
<span>Your voice</span>
</div>
</div>
<p className="text-xs text-neutral-500">Cancel anytime. Your data stays yours.</p>
</div>

<div className="mt-16 max-w-5xl mx-auto px-4">
<div className="relative rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur shadow-2xl overflow-hidden group">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-neutral-950">
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
</div>

<div className="p-6 md:p-8 grid md:grid-cols-3 gap-6 bg-neutral-950/80">

<div className="space-y-4">
<div className="flex items-center gap-2 text-xs text-neutral-400 font-medium uppercase tracking-wider">
<iconify-icon icon="lucide:database" strokeWidth="1.5"></iconify-icon> Import Data
                        </div>
<div className="p-4 rounded-lg bg-neutral-900 border border-white/5 space-y-3">
<div className="flex items-center justify-between text-xs text-neutral-300">
<span>Lap 18 Delta</span>
<span className="text-red-400">+1.2s</span>
</div>
<div className="flex items-center justify-between text-xs text-neutral-300">
<span>Stint 2 Avg</span>
<span className="text-green-400">1:34.2</span>
</div>
<div className="h-px bg-white/5 w-full my-2"></div>
<div className="text-xs text-neutral-500 italic">"Caught in traffic L18, lost time but saved tyres..."</div>
</div>
</div>

<div className="space-y-4 relative">
<div className="absolute top-1/2 -left-3 hidden md:block text-neutral-600">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400 font-medium uppercase tracking-wider">
<iconify-icon icon="lucide:layout" strokeWidth="1.5"></iconify-icon> Story Beats
                        </div>
<div className="p-4 rounded-lg bg-neutral-900 border border-white/5 space-y-2">
<div className="h-2 w-1/3 bg-blue-500/20 rounded"></div>
<div className="h-2 w-full bg-neutral-800 rounded"></div>
<div className="h-2 w-4/5 bg-neutral-800 rounded"></div>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Hook</span>
<span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Conflict</span>
<span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Result</span>
</div>
</div>
</div>

<div className="space-y-4 relative">
<div className="absolute top-1/2 -left-3 hidden md:block text-neutral-600">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-xs text-blue-400 font-medium uppercase tracking-wider">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5"></iconify-icon> Script Ready
                        </div>
<div className="p-4 rounded-lg bg-gradient-to-br from-blue-900/10 to-neutral-900 border border-blue-500/20 space-y-2">
<div className="text-xs text-neutral-200 leading-relaxed">
<span className="text-blue-400 font-semibold">VO:</span> Everyone thinks the race was lost in the pits. It wasn't. It was lost on Lap 18...
                            </div>
<div className="mt-3 flex items-center gap-2">
<span className="text-[10px] text-neutral-500 bg-black/30 px-2 py-0.5 rounded border border-white/5">Shot: Onboard L18</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/30 py-8">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-neutral-500 mb-6 font-medium">Trusted by drivers and coaches who care about performance, not posting.</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-neutral-600 font-medium tracking-wide text-sm uppercase">
<span>Karting</span>
<span>Formula Regional</span>
<span>GT3</span>
<span>LMP2</span>
<span>Sim Pro</span>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                Being quick isn’t enough. <br/>
<span className="text-neutral-400">Being visible is the multiplier.</span>
</h2>
<p className="text-neutral-400 leading-relaxed mb-8">
                You’re judged on lap time and perceived professionalism. Content is now part of the career ladder — but most driver content is either:
            </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 shrink-0" icon="lucide:x"></iconify-icon>
<span className="text-neutral-300 text-sm">Too generic ("Great weekend, proud of the team...")</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 shrink-0" icon="lucide:x"></iconify-icon>
<span className="text-neutral-300 text-sm">Too technical (nobody watches)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 shrink-0" icon="lucide:x"></iconify-icon>
<span className="text-neutral-300 text-sm">Too time-expensive (you stop doing it)</span>
</li>
</ul>
</div>
<div className="relative p-8 rounded-2xl bg-neutral-900/50 border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl"></div>
<h3 className="text-xl font-medium text-white mb-4 relative z-10">The ProGrid Fix</h3>
<p className="text-neutral-400 text-sm leading-relaxed relative z-10 mb-6">
                Professional content that’s fast, specific, and worth watching. We turn race facts into a story teams and sponsors understand.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
<div className="p-4 bg-black/40 rounded border border-white/5">
<iconify-icon className="text-blue-500 mb-2" icon="lucide:file-text"></iconify-icon>
<div className="text-xs font-semibold text-neutral-200">Race Recap Scripts</div>
<div className="text-[10px] text-neutral-500 mt-1">Explain the "why" not just the "what"</div>
</div>
<div className="p-4 bg-black/40 rounded border border-white/5">
<iconify-icon className="text-green-500 mb-2" icon="lucide:trending-up"></iconify-icon>
<div className="text-xs font-semibold text-neutral-200">Sponsor Updates</div>
<div className="text-[10px] text-neutral-500 mt-1">Add value without sounding like an ad</div>
</div>
<div className="p-4 bg-black/40 rounded border border-white/5">
<iconify-icon className="text-purple-500 mb-2" icon="lucide:activity"></iconify-icon>
<div className="text-xs font-semibold text-neutral-200">Performance Data</div>
<div className="text-[10px] text-neutral-500 mt-1">Breakdowns with deltas &amp; stints</div>
</div>
<div className="p-4 bg-black/40 rounded border border-white/5">
<iconify-icon className="text-orange-500 mb-2" icon="lucide:video"></iconify-icon>
<div className="text-xs font-semibold text-neutral-200">Shot Lists</div>
<div className="text-[10px] text-neutral-500 mt-1">Editing made straightforward</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-white/5" id="product">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white mb-3">Paste your race notes. <span className="text-neutral-500">Get a script instantly.</span></h2>
</div>
<div className="grid lg:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-neutral-950">

<div className="p-8 border-b lg:border-b-0 lg:border-r border-white/5 relative group">
<div className="flex items-center justify-between mb-4">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Input: Your Notes</label>
<span className="text-[10px] bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded">Raw Data</span>
</div>
<div className="font-mono text-sm text-neutral-300 leading-relaxed p-4 bg-neutral-900/50 rounded-lg border border-white/5 h-64 overflow-y-auto">
<span className="text-neutral-500">Lap 18:</span> caught in traffic, lost 1.2s.<br/>
<span className="text-neutral-500">Lap 22:</span> boxed early for the undercut.<br/>
<span className="text-neutral-500">Lap 28:</span> safety car changed everything.<br/>
<span className="text-neutral-500">Goal:</span> Show that the strategy was right, execution was unlucky.
                        <span className="animate-pulse inline-block w-1.5 h-4 bg-blue-500 align-middle ml-1"></span>
</div>
<div className="mt-4 flex gap-2">
<div className="text-[10px] text-neutral-500 border border-white/5 px-2 py-1 rounded-full">Timing Highlights</div>
<div className="text-[10px] text-neutral-500 border border-white/5 px-2 py-1 rounded-full">Overtakes</div>
</div>
</div>

<div className="p-8 bg-neutral-900/30 relative">
<div className="flex items-center justify-between mb-4">
<label className="text-xs font-medium text-blue-400 uppercase tracking-wide">Output: ProGrid Script</label>
<button className="text-[10px] bg-blue-600 hover:bg-blue-500 text-white px-2 py-0.5 rounded transition-colors">Copy</button>
</div>
<div className="space-y-4 h-64 overflow-y-auto pr-2">

<div className="pl-3 border-l-2 border-blue-500/50">
<div className="text-[10px] text-blue-400 font-semibold mb-1">COLD OPEN (0:00 - 0:20)</div>
<p className="text-sm text-neutral-200 leading-relaxed">
                                "The result says P5, but the telemetry says a win was on the table. Today I'm breaking down how a 1.2s traffic hold-up on Lap 18 triggered a chain reaction that the Safety Car couldn't fix."
                            </p>
</div>

<div className="p-3 bg-neutral-800/50 rounded border border-white/5 flex gap-3 items-center">
<iconify-icon className="text-purple-400" icon="lucide:image"></iconify-icon>
<div className="text-xs text-neutral-400">
<span className="text-purple-400 font-medium">Graphic:</span> Overlay Lap 18 vs Lap 19 pace delta.
                            </div>
</div>

<div className="pl-3 border-l-2 border-neutral-700">
<div className="text-[10px] text-neutral-500 font-semibold mb-1">SEGMENT 1: THE UNDERCUT</div>
<p className="text-sm text-neutral-400 leading-relaxed">
                                [Outline] Discuss the decision to box on L22. Show the gap closing...
                            </p>
</div>
</div>
<div className="absolute bottom-6 left-8 right-8">
<a className="block w-full text-center bg-white text-black hover:bg-neutral-200 py-2 rounded text-xs font-medium tracking-tight shadow-lg transition-colors" href="#pricing">
                            Unlock full script + shot list →
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">From raw weekend to publishable script in 10 minutes.</h2>
<p className="text-sm text-neutral-500">You can edit everything. ProGrid is the engine, not the voice.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 rounded-xl border border-white/5 bg-neutral-900/20 hover:border-white/10 transition-colors">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-white font-medium mb-4">1</div>
<h3 className="text-lg font-medium text-white mb-2">Import</h3>
<p className="text-sm text-neutral-400 mb-4">Timing sheet (CSV) or just paste your raw notes. Add onboard timestamps or radio quotes.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-neutral-900/20 hover:border-white/10 transition-colors">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-white font-medium mb-4">2</div>
<h3 className="text-lg font-medium text-white mb-2">Format</h3>
<p className="text-sm text-neutral-400 mb-4">Choose Race Recap, Strategy Explainer, or Sponsor Update. Set runtime (e.g., 60s or 8 mins).</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-neutral-900/20 hover:border-white/10 transition-colors">
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-medium mb-4">3</div>
<h3 className="text-lg font-medium text-white mb-2">Generate</h3>
<p className="text-sm text-neutral-400 mb-4">Get a segmented script, shot list, and graphics prompts. Evidence links included for every claim.</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="examples">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-12">Examples that sound like a driver.</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative p-6 rounded-xl border border-white/10 bg-black hover:border-white/20 transition-all">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Race Recap (8-10m)</span>
</div>
<h3 className="text-lg font-medium text-white mb-3">"The race wasn’t won in the pits"</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 italic border-l-2 border-neutral-800 pl-4">
                        "Everyone will tell you this was won in the pit lane. It wasn’t. It was won in the two laps we got trapped in traffic — right as the tyre started to fall away. That’s where the gap was created..."
                    </p>
<div className="text-[10px] text-neutral-500 font-mono flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="lucide:zap"></iconify-icon>
                        Inputs: pace deltas + traffic note + pit window
                    </div>
</div>

<div className="group relative p-6 rounded-xl border border-white/10 bg-black hover:border-white/20 transition-all">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded">Sponsor Update (45s)</span>
</div>
<h3 className="text-lg font-medium text-white mb-3">"Update that adds value"</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 italic border-l-2 border-neutral-800 pl-4">
                        "Quick sponsor update — not the generic version. We made a setup change before quali that gave us rotation in Sector 2 without killing rear stability. That’s what put us in the fight..."
                    </p>
<div className="text-[10px] text-neutral-500 font-mono flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="lucide:zap"></iconify-icon>
                        Inputs: setup note + quali delta + next-round objective
                    </div>
</div>

<div className="group relative p-6 rounded-xl border border-white/10 bg-black hover:border-white/20 transition-all">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded">Strategy Explainer (6m)</span>
</div>
<h3 className="text-lg font-medium text-white mb-3">"The decisive moment"</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 italic border-l-2 border-neutral-800 pl-4">
                        "The turning point wasn’t the overtake you saw — it was the lap before it. The driver ahead defended into the wrong corner, overheated the fronts, and their pace dropped..."
                    </p>
<div className="text-[10px] text-neutral-500 font-mono flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="lucide:zap"></iconify-icon>
                        Inputs: lap pace drop + corner reference
                    </div>
</div>

<div className="group relative p-6 rounded-xl border border-white/10 bg-black hover:border-white/20 transition-all">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-red-400 bg-red-400/10 px-2 py-1 rounded">Incident Analysis (4m)</span>
</div>
<h3 className="text-lg font-medium text-white mb-3">"Incident breakdown (clean)"</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6 italic border-l-2 border-neutral-800 pl-4">
                        "Here’s what happened, without drama. On entry, my front is alongside. Mid-corner, the car rotates earlier than expected. From that point there are only two options..."
                    </p>
<div className="text-[10px] text-neutral-500 font-mono flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="lucide:zap"></iconify-icon>
                        Inputs: driver note + onboard timestamp + context
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white">Why this works when others don't.</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="px-4 py-4">
<iconify-icon className="text-2xl text-white mb-4" icon="lucide:flag-triangle-right"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Motorsport-native</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Understands stints, deltas, traffic, and penalties. Finds turning points from timing patterns automatically.</p>
</div>
<div className="px-4 py-4">
<iconify-icon className="text-2xl text-white mb-4" icon="lucide:eye"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Retention-engineered</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Cold opens with stakes. Open loops built into the structure. Segment timing ensures scripts hit runtime targets.</p>
</div>
<div className="px-4 py-4">
<iconify-icon className="text-2xl text-white mb-4" icon="lucide:shield-check"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Evidence-first</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Flags vague claims. Prompts for specific proof moments. Keeps you credible when teams watch.</p>
</div>
</div>
</section>

<section className="py-16 bg-neutral-900/30 border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
<div className="space-y-4">
<div className="flex text-yellow-500 text-xs">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed">"First tool I’ve used that doesn’t make me sound like a LinkedIn bot. It took my notes and produced something I’d actually say — with structure."</p>
<p className="text-xs text-neutral-500 font-medium">— Driver, GT / Touring Car</p>
</div>
<div className="space-y-4">
<div className="flex text-yellow-500 text-xs">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed">"As a coach, the shot list is the killer feature. The scripts are specific enough that the driver’s learning is visible, not just the highlight reel."</p>
<p className="text-xs text-neutral-500 font-medium">— Driver Coach</p>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="pricing">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Plans for drivers who treat content like a career asset.</h2>

<div className="flex items-center justify-center gap-3 mt-8">
<span className="text-sm text-neutral-400 font-medium">Monthly</span>
<label className="relative inline-block w-12 h-6 cursor-pointer" htmlFor="price-toggle">
<input className="toggle-checkbox absolute w-0 h-0 opacity-0" id="price-toggle" onchange="togglePricing()" type="checkbox"/>
<span className="toggle-label absolute cursor-pointer inset-0 bg-neutral-800 rounded-full transition-colors duration-300"></span>
<span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform" id="toggle-circle"></span>
</label>
<span className="text-sm text-white font-medium">Annual <span className="text-xs text-green-400 ml-1 font-normal">-20%</span></span>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

<div className="p-8 rounded-2xl border border-white/5 bg-neutral-900/20 hover:border-white/10 transition-colors flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Driver</h3>
<div className="mt-4 flex items-baseline">
<span className="text-3xl font-medium text-white price-monthly">£29</span>
<span className="text-3xl font-medium text-white price-annual hidden">£290</span>
<span className="ml-2 text-sm text-neutral-500 term-label">/mo</span>
</div>
<p className="text-xs text-neutral-400 mt-2">For drivers who want consistent, credible content.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Script generator + retention templates</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Sponsor update generator</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Shot list + graphics prompts</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Voice rules (basic)</li>
</ul>
<a className="block w-full text-center bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg text-sm font-medium transition-colors" href="#">Start 7-day trial</a>
</div>

<div className="p-8 rounded-2xl border border-blue-500/30 bg-neutral-900/40 glow-effect flex flex-col relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Pro</h3>
<div className="mt-4 flex items-baseline">
<span className="text-3xl font-medium text-white price-monthly">£79</span>
<span className="text-3xl font-medium text-white price-annual hidden">£790</span>
<span className="ml-2 text-sm text-neutral-500 term-label">/mo</span>
</div>
<p className="text-xs text-neutral-400 mt-2">For drivers actively climbing categories and pitching seats.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Everything in Driver</li>
<li className="flex items-center gap-3 text-sm text-white font-medium"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Timing + stint ingest (CSV)</li>
<li className="flex items-center gap-3 text-sm text-white font-medium"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Evidence linking for claims</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Multi-platform outputs</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> 5-piece content plan</li>
</ul>
<a className="block w-full text-center bg-white text-black hover:bg-neutral-200 py-3 rounded-lg text-sm font-medium transition-colors" href="#">Start 7-day trial</a>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-neutral-900/20 hover:border-white/10 transition-colors flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Team</h3>
<div className="mt-4 flex items-baseline">
<span className="text-3xl font-medium text-white price-monthly">£199</span>
<span className="text-3xl font-medium text-white price-annual hidden">£1,990</span>
<span className="ml-2 text-sm text-neutral-500 term-label">/mo</span>
</div>
<p className="text-xs text-neutral-400 mt-2">For teams, coaches, and multi-driver programmes.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Everything in Pro</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Multi-driver workspace</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Coach approvals + comments</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Shared compliance snippets</li>
</ul>
<a className="block w-full text-center bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg text-sm font-medium transition-colors" href="#">Talk to us</a>
</div>
</div>
<p className="text-center text-xs text-neutral-600 mt-8">Prices exclude VAT where applicable. Cancel anytime.</p>
</section>

<section className="py-24 max-w-3xl mx-auto px-6" id="faq">
<h2 className="text-2xl font-medium text-white mb-8 text-center">Frequently asked questions</h2>
<div className="space-y-4">
<details className="group bg-neutral-900/30 border border-white/5 rounded-lg open:bg-neutral-900/50 transition-all">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-neutral-200">Does this make me sound generic?</span>
<iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-400 leading-relaxed">
                    No — ProGrid uses your inputs (moments, deltas, decisions) and applies structure. You control the voice rules, and you can hard-ban phrases you hate.
                </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded-lg open:bg-neutral-900/50 transition-all">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-neutral-200">Do I need full timing data?</span>
<iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-400 leading-relaxed">
                    No. Timing data improves "evidence linking," but you can start with notes + a few key moments.
                </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded-lg open:bg-neutral-900/50 transition-all">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-neutral-200">Will it work for my category?</span>
<iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-400 leading-relaxed">
                    Yes. The story engine uses shared motorsport primitives (stints, pace, traffic, penalties). Templates adapt to your format (Karting, GT, Single-Seater, Sim).
                </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded-lg open:bg-neutral-900/50 transition-all">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-neutral-200">Can my coach/team review scripts?</span>
<iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-400 leading-relaxed">
                    Yes on Team plan: approvals + comments. On Pro plan, you can export and review anywhere.
                </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded-lg open:bg-neutral-900/50 transition-all">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-neutral-200">What about confidentiality?</span>
<iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-400 leading-relaxed">
                   You choose what goes in. Don’t paste sensitive setup details. You can delete projects anytime. Your data stays yours.
                </div>
</details>
</div>
</section>

<section className="py-24 text-center px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                Stop letting your race weekends disappear. <br />Turn them into leverage.
            </br></h2>
<p className="text-neutral-400 mb-8 text-lg">If you’re serious about moving up the ladder, your story needs to be as professional as your driving.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 transition-colors px-6 py-3 rounded-lg text-sm font-medium tracking-tight" href="#pricing">
                    Start 7-day trial
                </a>
<a className="w-full sm:w-auto bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors px-6 py-3 rounded-lg text-sm font-medium tracking-tight" href="#">
                    Watch 60-sec demo
                </a>
</div>
<p className="text-xs text-neutral-600">Cancel anytime. Keep your content. Keep your voice.</p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<a className="relative flex items-center gap-1 group pt-2 px-1 scale-90 origin-left" href="#">
<div className="absolute inset-x-0 top-0 h-2.5 border-t-[2px] border-x-[2px] border-neutral-600 transition-colors group-hover:border-neutral-400"></div>
<span className="text-sm font-semibold tracking-tight text-neutral-500 group-hover:text-neutral-300 transition-colors leading-none">ProGrid</span>
<svg className="w-2.5 h-2.5 text-neutral-500 fill-current group-hover:text-neutral-300 transition-colors mt-px" viewbox="0 0 24 24">
<path d="M4 21.5V2.5L21 12L4 21.5Z"></path>
</svg>
</a>
<span className="text-xs text-neutral-600">© 2024</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:youtube" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
