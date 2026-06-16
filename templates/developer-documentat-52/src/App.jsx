import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-panel z-50 flex items-center justify-between px-6">
<div className="font-semibold tracking-tighter text-zinc-100 text-lg">ARCHIVUM</div>
<button className="text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</header>

<aside className="hidden lg:flex flex-col w-72 h-screen fixed left-0 top-0 border-r border-white/5 bg-[#050505] z-40">

<div className="p-6 pb-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center text-white shadow-lg shadow-indigo-500/10">
<span className="font-bold tracking-tighter text-sm">A</span>
</div>
<span className="font-medium tracking-tight text-zinc-100">ARCHIVUM</span>
</div>

<div className="relative group">
<span className="absolute left-3 top-2.5 text-zinc-500 group-focus-within:text-zinc-300 transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16"></span>
</span>
<input className="w-full bg-zinc-900/50 border border-white/5 rounded-lg py-2 pl-9 pr-3 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all" placeholder="Search entries..." type="text"/>
<div className="absolute right-3 top-2.5 flex items-center gap-1 pointer-events-none">
<kbd className="hidden xl:inline-flex items-center h-5 px-1.5 text-[10px] font-mono font-medium text-zinc-500 bg-zinc-800/50 border border-white/5 rounded">⌘K</kbd>
</div>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-4 space-y-6 py-4 hide-scrollbar">

<div>
<h3 className="px-2 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Compendium</h3>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all group" href="#">
<span className="iconify text-zinc-600 group-hover:text-indigo-400 transition-colors" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="16"></span>
                            Overview
                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all group" href="#">
<span className="iconify text-zinc-600 group-hover:text-indigo-400 transition-colors" data-icon="lucide:map" data-strokeWidth="1.5" data-width="16"></span>
                            Geography
                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-zinc-100 bg-white/5 rounded-md transition-all border border-white/5 shadow-sm" href="#">
<span className="iconify text-indigo-400" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="16"></span>
                            Magic Systems
                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all group" href="#">
<span className="iconify text-zinc-600 group-hover:text-indigo-400 transition-colors" data-icon="lucide:scroll" data-strokeWidth="1.5" data-width="16"></span>
                            History &amp; Timeline
                        </a>
</li>
</ul>
</div>

<div>
<h3 className="px-2 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Entities</h3>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all group" href="#">
<span className="iconify text-zinc-600 group-hover:text-indigo-400 transition-colors" data-icon="lucide:users" data-strokeWidth="1.5" data-width="16"></span>
                            Factions
                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all group" href="#">
<span className="iconify text-zinc-600 group-hover:text-indigo-400 transition-colors" data-icon="lucide:swords" data-strokeWidth="1.5" data-width="16"></span>
                            Bestiary
                        </a>
</li>
</ul>
</div>

<div>
<h3 className="px-2 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Pinned</h3>
<div className="grid grid-cols-2 gap-2 px-2">
<div className="h-20 rounded border border-white/5 bg-zinc-900/30 p-3 hover:border-indigo-500/30 transition-colors cursor-pointer group flex flex-col justify-between">
<span className="iconify text-indigo-500" data-icon="lucide:gem" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200">Soul Gems</span>
</div>
<div className="h-20 rounded border border-white/5 bg-zinc-900/30 p-3 hover:border-indigo-500/30 transition-colors cursor-pointer group flex flex-col justify-between">
<span className="iconify text-emerald-500" data-icon="lucide:tree-pine" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200">The Wilds</span>
</div>
</div>
</div>
</nav>

<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full p-2 hover:bg-white/5 rounded-md transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 overflow-hidden relative">
<img alt="Avatar" className="w-full h-full object-cover opacity-80" src="https://api.dicebear.com/7.x/notionists/svg?seed=Archivist"/>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-zinc-200 truncate">Archivist V.</div>
<div className="text-xs text-zinc-500 truncate">Editor Mode</div>
</div>
<span className="iconify text-zinc-600" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</aside>

<main className="lg:ml-72 flex-1 min-h-screen relative pt-20 lg:pt-0">

<div className="sticky top-0 z-30 glass-panel border-b border-white/5 px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Compendium</a>
<span className="iconify text-zinc-700" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="14"></span>
<a className="hover:text-zinc-300 transition-colors" href="#">Magic Systems</a>
<span className="iconify text-zinc-700" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="14"></span>
<span className="text-zinc-200 bg-white/5 px-2 py-0.5 rounded text-xs font-medium border border-white/5">The Aether Stream</span>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 text-xs text-green-500/80 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Verified
                </span>
<button className="p-2 text-zinc-500 hover:text-zinc-200 transition-colors rounded-md hover:bg-white/5">
<span className="iconify" data-icon="lucide:share" data-strokeWidth="1.5" data-width="16"></span>
</button>
<button className="p-2 text-zinc-500 hover:text-zinc-200 transition-colors rounded-md hover:bg-white/5">
<span className="iconify" data-icon="lucide:more-horizontal" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</div>

<div className="max-w-5xl mx-auto px-8 py-12 pb-32">

<div className="relative mb-12">

<div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<h1 className="relative text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 text-glow">
                    The Aether Stream
                </h1>
<p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                    The fundamental energetic current that flows through the <span className="text-zinc-200 border-b border-zinc-700 hover:border-indigo-400 transition-colors cursor-pointer">Astral Core</span>, powering all arcane machinations within the realm of Lumina.
                </p>
<div className="flex flex-wrap gap-3 mt-8">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="12"></span>
                        High Volatility
                    </div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700 text-zinc-400 text-xs font-medium">
<span className="iconify" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="12"></span>
                        Era: Pre-Fracture
                    </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 space-y-12">

<section className="group">
<div className="flex items-center gap-3 mb-6">
<h2 className="text-2xl font-medium tracking-tight text-zinc-100 group-hover:text-indigo-200 transition-colors">Origins &amp; Discovery</h2>
<div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent"></div>
</div>
<div className="prose prose-invert prose-zinc max-w-none text-zinc-400 font-light leading-7">
<p className="mb-4">
                                First discovered by the <strong className="text-zinc-200 font-medium">Synthetix Monks</strong> during the early Silicon Age, the Aether Stream was initially mistaken for background radiation. It wasn't until the development of the <em>Resonance Lens</em> that the true nature of the stream was revealed—a river of pure potentiality flowing beneath the fabric of reality.
                            </p>
<p>
                                Unlike traditional mana sources, Aether does not regenerate naturally. It is a finite resource left over from the <span className="inline-flex items-center gap-1 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-xs text-zinc-300 font-mono tracking-wide align-middle">EVENT_NULL</span> creation singularity.
                            </p>

<blockquote className="my-8 border-l-2 border-indigo-500/50 pl-6 italic text-zinc-300 text-lg relative">
<span className="absolute -left-3 -top-3 text-indigo-500/20">
<span className="iconify" data-icon="lucide:quote" data-strokeWidth="1.5" data-width="40"></span>
</span>
                                "To touch the Stream is to touch the mind of a dead god. It is chaos given form, and silence given voice."
                                <footer className="text-sm text-zinc-500 mt-2 not-italic font-medium tracking-wide uppercase">— High Arcanist Valen</footer>
</blockquote>
</div>
</section>

<section>
<div className="flex items-center gap-3 mb-6">
<h2 className="text-2xl font-medium tracking-tight text-zinc-100">Mechanics of Interaction</h2>
<div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-5 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-indigo-500/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-zinc-200 font-medium mb-2">Siphoning</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Extracting energy requires a stabilizer anchor. Without it, the user risks immediate molecular destabilization.</p>
</div>

<div className="p-5 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-emerald-500/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-zinc-200 font-medium mb-2">Weaving</h3>
<p className="text-sm text-zinc-500 leading-relaxed">The raw energy is woven into geometric constructs. More complex geometry allows for higher density spells.</p>
</div>

<div className="md:col-span-2 p-5 rounded-xl border border-white/5 bg-gradient-to-br from-zinc-900/20 to-zinc-900/50 hover:border-amber-500/20 transition-all duration-300 relative overflow-hidden group">
<div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 flex-shrink-0">
<span className="iconify" data-icon="lucide:triangle-alert" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-zinc-200 font-medium mb-1">Backlash Phenomena</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                                            Overdrawing from the Stream causes "Aether Burn," manifesting as crystalline growths on the caster's skin. Refer to <a className="text-amber-400 hover:underline" href="#">Medical Log 742</a> for treatment protocols.
                                        </p>
</div>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-2xl font-medium tracking-tight text-zinc-100 mb-6">Known Conduits</h2>
<div className="border border-white/5 rounded-lg overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-white/5 text-zinc-400">
<tr>
<th className="p-4 font-medium border-b border-white/5">Name</th>
<th className="p-4 font-medium border-b border-white/5">Location</th>
<th className="p-4 font-medium border-b border-white/5 text-right">Output</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors">
<td className="p-4 text-zinc-200 font-medium">The Spire of Dawn</td>
<td className="p-4 text-zinc-500">Capital City</td>
<td className="p-4 text-right font-mono text-zinc-400">94.2%</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="p-4 text-zinc-200 font-medium">Deep Hollow Ridge</td>
<td className="p-4 text-zinc-500">Northern Wastes</td>
<td className="p-4 text-right font-mono text-zinc-400">42.8%</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="p-4 text-zinc-200 font-medium">Project Silence</td>
<td className="p-4 text-zinc-500 flex items-center gap-2">
<span className="iconify text-zinc-600" data-icon="lucide:lock" data-width="12"></span> 
                                             Unknown
                                         </td>
<td className="p-4 text-right font-mono text-red-400">UNSTABLE</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>

<aside className="lg:col-span-4 space-y-8">

<div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl shadow-black/50">
<div className="h-32 bg-gradient-to-b from-indigo-900/20 to-black/80 relative">

<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<div className="absolute bottom-4 left-4">
<div className="w-16 h-16 bg-black border border-white/10 rounded-lg flex items-center justify-center shadow-xl">
<span className="iconify text-indigo-400" data-icon="lucide:orbit" data-strokeWidth="1.5" data-width="32"></span>
</div>
</div>
</div>
<div className="p-6 pt-2">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white">Aether Stream</h3>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Classification: Meta-Physical</span>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-sm text-zinc-500">Color Spectrum</span>
<span className="text-sm text-zinc-300 flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span> Violet/Cyan
                                    </span>
</div>
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-sm text-zinc-500">Threat Level</span>
<span className="text-sm text-orange-400 font-medium">Class IV</span>
</div>
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-sm text-zinc-500">Primary Use</span>
<span className="text-sm text-zinc-300">Power Generation</span>
</div>
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-sm text-zinc-500">Discovery Date</span>
<span className="text-sm text-zinc-300 font-mono">Cycle 492.2</span>
</div>
</div>
<div className="mt-6">
<span className="text-xs font-medium text-zinc-500 uppercase mb-2 block">Resonance Stability</span>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 w-[72%]"></div>
</div>
<div className="flex justify-between mt-1">
<span className="text-[10px] text-zinc-600">Critical</span>
<span className="text-[10px] text-zinc-600">Stable</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/5 p-6">
<h4 className="text-sm font-medium text-zinc-200 mb-4 flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:link" data-width="14"></span>
                            Linked Entries
                        </h4>
<div className="space-y-3">
<a className="block p-3 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-zinc-700 transition-colors group" href="#">
<div className="text-sm text-zinc-300 group-hover:text-indigo-300 transition-colors font-medium">The Void Walkers</div>
<div className="text-xs text-zinc-600 mt-1 line-clamp-1">Entities capable of traversing the stream without protection.</div>
</a>
<a className="block p-3 rounded-lg bg-zinc-900/30 border border-white/5 hover:border-zinc-700 transition-colors group" href="#">
<div className="text-sm text-zinc-300 group-hover:text-indigo-300 transition-colors font-medium">Crystal Resonance</div>
<div className="text-xs text-zinc-600 mt-1 line-clamp-1">Harmonic frequencies used to stabilize flow.</div>
</a>
</div>
</div>

<div className="sticky top-24">
<h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">On this page</h4>
<ul className="space-y-2 border-l border-white/10 pl-4">
<li><a className="block text-sm text-indigo-400 border-l border-indigo-500 -ml-[17px] pl-4 transition-colors" href="#">Origins &amp; Discovery</a></li>
<li><a className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Mechanics of Interaction</a></li>
<li><a className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors pl-2" href="#">Siphoning</a></li>
<li><a className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors pl-2" href="#">Weaving</a></li>
<li><a className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Known Conduits</a></li>
</ul>
</div>
</aside>
</div>
</div>

<footer className="border-t border-white/5 py-8 mt-auto">
<div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-zinc-600">
                    Last updated by <span className="text-zinc-400">Archivist V.</span> on <span className="font-mono">2044.11.02</span>
</div>
<div className="flex gap-4">
<button className="text-zinc-600 hover:text-zinc-400 transition-colors">
<span className="iconify" data-icon="lucide:flag" data-width="14"></span>
</button>
<button className="text-zinc-600 hover:text-zinc-400 transition-colors">
<span className="iconify" data-icon="lucide:message-square" data-width="14"></span>
</button>
</div>
</div>
</footer>
</main>

    </>
  );
}
