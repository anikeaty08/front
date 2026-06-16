import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function switchChar(charId) {
            // Hide all
            ['victor', 'monster', 'walton'].forEach(id => {
                document.getElementById('content-' + id).classList.add('hidden');
                document.getElementById('content-' + id).classList.remove('block');
                
                // Reset Sidebar Buttons
                const btn = document.getElementById('tab-' + id);
                btn.classList.remove('bg-white/10', 'text-white', 'border-white/10');
                btn.classList.add('text-zinc-500', 'hover:text-white', 'hover:bg-white/5');
                
                // Hide chevron
                const chevron = btn.querySelector('.lucide-chevron-right');
                chevron.classList.add('opacity-0');
                chevron.classList.remove('opacity-50');
            });

            // Show selected
            const content = document.getElementById('content-' + charId);
            content.classList.remove('hidden');
            content.classList.add('block');

            // Active State Sidebar
            const btn = document.getElementById('tab-' + charId);
            btn.classList.remove('text-zinc-500', 'hover:text-white', 'hover:bg-white/5');
            btn.classList.add('bg-white/10', 'text-white', 'border-white/10');
            
            // Show chevron
            const chevron = btn.querySelector('.lucide-chevron-right');
            chevron.classList.remove('opacity-0');
            chevron.classList.add('opacity-50');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-500" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-tight text-white">PROMETHEUS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#history">HISTORY (1818)</a>
<a className="hover:text-white transition-colors" href="#characters">CHARACTERS</a>
<a className="hover:text-white transition-colors" href="#themes">KEY THEMES</a>
<a className="hover:text-white transition-colors" href="#science">MODERN SCIENCE</a>
</div>
<button className="text-xs font-medium text-zinc-900 bg-white px-3 py-1.5 rounded-md hover:bg-zinc-200 transition-all">
                Start Analysis
            </button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-950 to-zinc-950 pointer-events-none"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
<div className="relative z-10 text-center max-w-4xl px-6 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-emerald-400 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Interactive Study Guide
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-tight">
                Frankenstein: <br/>
<span className="text-zinc-500">The Cost of Creation</span>
</h1>
<p className="text-lg text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
                Mary Shelley's 1818 novel isn't just a ghost story. It is a warning about science without ethics, parents who abandon children, and the danger of playing God.
            </p>

<div className="mt-8 mx-auto max-w-sm glass rounded-xl p-4 flex flex-col items-center gap-2 text-center border border-white/5">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-1">
<i className="w-4 h-4" data-lucide="book-open"></i>
</div>
<p className="text-sm font-medium text-white">First Science Fiction Novel</p>
<p className="text-xs text-zinc-500">Written by an 18-year-old girl during the Industrial Revolution.</p>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 relative" id="history">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3 sticky top-24">
<span className="text-emerald-500 text-xs font-mono mb-2 block tracking-widest">CONTEXT</span>
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">Why was this written?</h2>
<p className="text-zinc-500 leading-relaxed text-sm mb-6">
                        The world was changing fast in the early 1800s. Science was replacing religion, and electricity was a new, magical force.
                    </p>
<div className="glass p-5 rounded-lg border border-white/5">
<div className="flex items-center gap-3 mb-3">
<i className="w-4 h-4 text-zinc-300" data-lucide="cloud-off"></i>
<span className="text-xs font-medium text-white">The Year Without a Summer</span>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">
                            In 1816, a massive volcanic eruption (Mount Tambora) blocked the sun. It snowed in July across Europe. This dark, gloomy weather forced Mary Shelley and her friends to stay indoors near Lake Geneva, setting the mood for horror.
                        </p>
</div>
</div>
<div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/20 transition-colors">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center mb-4">
<i className="w-4 h-4 text-zinc-400" data-lucide="pen-tool"></i>
</div>
<h3 className="text-white font-medium mb-2">1816: The Ghost Story Contest</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Trapped by bad weather in Switzerland, Lord Byron challenged his friends to write ghost stories. Mary Shelley, only 18 years old, had a nightmare about a student creating life. This dream became <i>Frankenstein</i>.
                        </p>
</div>

<div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/20 transition-colors">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center mb-4">
<i className="w-4 h-4 text-emerald-500" data-lucide="zap"></i>
</div>
<h3 className="text-white font-medium mb-2">Galvanism: Real Science</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Scientists like Luigi Galvani were using electricity to make dead frog legs twitch. People truly believed electricity might be the "spark of life" that could bring the dead back.
                        </p>
</div>

<div className="md:col-span-2 p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/20 transition-colors">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-zinc-800 flex-shrink-0 flex items-center justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="book"></i>
</div>
<div>
<h3 className="text-white font-medium mb-2">The Full Title</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                                    The book is called <i>Frankenstein; or, The Modern Prometheus</i>.
                                </p>
<div className="p-4 bg-zinc-950 rounded border border-white/5 text-xs text-zinc-400">
<strong className="text-white">Prometheus (Greek Myth):</strong> A Titan who stole fire from the gods to give to humans. He was punished eternally. <br/><br/>
<strong className="text-white">Victor Frankenstein:</strong> A scientist who stole the secret of life (fire) from nature. He was punished by his creation.
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative" id="characters">
<div className="max-w-6xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium text-white mb-2 tracking-tight">The Main Characters</h2>
<p className="text-zinc-500 text-sm">Click a character to see their profile.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-3 space-y-2">
<button className="w-full text-left p-3 rounded-lg text-sm font-medium transition-all bg-white/10 text-white border border-white/10 flex items-center justify-between group" id="tab-victor" onclick="switchChar('victor')">
<span>Victor Frankenstein</span>
<i className="w-4 h-4 opacity-50" data-lucide="chevron-right"></i>
</button>
<button className="w-full text-left p-3 rounded-lg text-sm font-medium text-zinc-500 hover:text-white transition-all hover:bg-white/5 flex items-center justify-between group" id="tab-monster" onclick="switchChar('monster')">
<span>The Creature</span>
<i className="w-4 h-4 opacity-0 group-hover:opacity-50" data-lucide="chevron-right"></i>
</button>
<button className="w-full text-left p-3 rounded-lg text-sm font-medium text-zinc-500 hover:text-white transition-all hover:bg-white/5 flex items-center justify-between group" id="tab-walton" onclick="switchChar('walton')">
<span>Robert Walton</span>
<i className="w-4 h-4 opacity-0 group-hover:opacity-50" data-lucide="chevron-right"></i>
</button>
</div>

<div className="lg:col-span-9">

<div className="glass rounded-xl p-8 border border-white/5 block relative overflow-hidden" id="content-victor">
<div className="absolute top-0 right-0 p-32 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-8 relative z-10">
<div className="md:w-2/3">
<div className="flex items-center gap-3 mb-4">
<h3 className="text-2xl font-medium text-white">Victor Frankenstein</h3>
<span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-zinc-800 text-zinc-300">The Creator</span>
</div>
<p className="text-sm text-zinc-400 leading-7 mb-6">
                                    Victor is not a "mad scientist" in a lab coat. He is a young student obsessed with glory. He wants to be famous for defeating death. However, he is irresponsible. The moment his creature opens its eyes, Victor runs away because it is ugly. He is a bad "father" who abandons his child.
                                </p>
<div className="space-y-3">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-red-400 mt-0.5" data-lucide="x-circle"></i>
<div>
<span className="text-xs text-white font-medium block">Fatal Flaw: Ambition</span>
<p className="text-[11px] text-zinc-500">He cares more about being the first to do something than about the consequences.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/3 bg-zinc-900/50 rounded-lg p-5 border border-white/5">
<h4 className="text-xs font-medium text-zinc-300 mb-4 uppercase tracking-wider">Key Quote</h4>
<p className="italic text-zinc-400 font-serif text-sm leading-relaxed">
                                    "I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart."
                                </p>
<p className="text-[10px] text-zinc-600 mt-3 text-right">- Chapter 5</p>
</div>
</div>
</div>

<div className="glass rounded-xl p-8 border border-white/5 hidden relative overflow-hidden" id="content-monster">
<div className="absolute top-0 right-0 p-32 bg-yellow-500/5 blur-3xl rounded-full pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-8 relative z-10">
<div className="md:w-2/3">
<div className="flex items-center gap-3 mb-4">
<h3 className="text-2xl font-medium text-white">The Creature</h3>
<span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-zinc-800 text-zinc-300">The Creation</span>
</div>
<p className="text-sm text-zinc-400 leading-7 mb-6">
                                    He has no name. He is born huge, strong, and ugly, but his mind is like a baby's. He is kind at first and wants to be loved. He learns to speak and read by watching a family. But when humans attack him because of his looks, he becomes angry. He becomes a monster only because he is treated like one.
                                </p>
<div className="space-y-3">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-yellow-400 mt-0.5" data-lucide="alert-triangle"></i>
<div>
<span className="text-xs text-white font-medium block">Motivation: Loneliness</span>
<p className="text-[11px] text-zinc-500">He kills Victor's family to make Victor feel the same pain of isolation.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/3 bg-zinc-900/50 rounded-lg p-5 border border-white/5">
<h4 className="text-xs font-medium text-zinc-300 mb-4 uppercase tracking-wider">Key Quote</h4>
<p className="italic text-zinc-400 font-serif text-sm leading-relaxed">
                                    "I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous."
                                </p>
<p className="text-[10px] text-zinc-600 mt-3 text-right">- Chapter 10</p>
</div>
</div>
</div>

<div className="glass rounded-xl p-8 border border-white/5 hidden relative overflow-hidden" id="content-walton">
<div className="absolute top-0 right-0 p-32 bg-blue-500/5 blur-3xl rounded-full pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-8 relative z-10">
<div className="md:w-2/3">
<div className="flex items-center gap-3 mb-4">
<h3 className="text-2xl font-medium text-white">Robert Walton</h3>
<span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-zinc-800 text-zinc-300">The Explorer</span>
</div>
<p className="text-sm text-zinc-400 leading-7 mb-6">
                                    Walton is a ship captain exploring the North Pole. He finds Victor dying on the ice. Walton is important because he is like a "second Victor." He also wants glory and is risking his crew's lives. By hearing Victor's scary story, Walton learns a lesson and turns his ship around to save his men.
                                </p>
<div className="space-y-3">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-400 mt-0.5" data-lucide="check-circle"></i>
<div>
<span className="text-xs text-white font-medium block">Role: The Listener</span>
<p className="text-[11px] text-zinc-500">He represents the choice to stop before it is too late.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/3 bg-zinc-900/50 rounded-lg p-5 border border-white/5">
<h4 className="text-xs font-medium text-zinc-300 mb-4 uppercase tracking-wider">Key Quote</h4>
<p className="italic text-zinc-400 font-serif text-sm leading-relaxed">
                                    "One man's life or death were but a small price to pay for the acquirement of the knowledge which I sought."
                                </p>
<p className="text-[10px] text-zinc-600 mt-3 text-right">- Letter 4</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950/50" id="themes">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white mb-12 tracking-tight">Major Themes</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="p-2 rounded bg-zinc-800 border border-zinc-700">
<i className="w-5 h-5 text-orange-400" data-lucide="flame"></i>
</div>
<i className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Dangerous Knowledge</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Victor wants to know secrets that humans shouldn't know. The book asks: just because we <i>can</i> do something, <i>should</i> we do it?
                    </p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="p-2 rounded bg-zinc-800 border border-zinc-700">
<i className="w-5 h-5 text-blue-400" data-lucide="users"></i>
</div>
<i className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Nature vs. Nurture</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Is the monster born evil (Nature)? Or does he become evil because society treats him badly (Nurture)? Shelley suggests we create our own monsters.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="p-2 rounded bg-zinc-800 border border-zinc-700">
<i className="w-5 h-5 text-purple-400" data-lucide="ghost"></i>
</div>
<i className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Isolation</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Everyone in the book is lonely. Victor works alone. The monster lives alone. Loneliness drives them both to madness and destruction.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="science">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="mb-16 text-center max-w-2xl mx-auto">
<span className="text-emerald-500 text-xs font-mono mb-3 block tracking-widest">ETHICAL ANALYSIS</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Is Frankenstein real today?</h2>
<p className="text-zinc-400 text-sm leading-relaxed">
                    We live in an age of biotechnology and Artificial Intelligence. The questions Mary Shelley asked in 1818 are even more important now.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8 hover:bg-zinc-900/50 transition-colors">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-emerald-500" data-lucide="dna"></i>
<h3 className="text-lg font-medium text-white">Genetic Engineering</h3>
</div>
<span className="px-2 py-1 rounded bg-white/5 text-[10px] text-zinc-400 border border-white/5">CRISPR</span>
</div>
<div className="space-y-4">
<div className="relative pl-4 border-l-2 border-zinc-700">
<p className="text-xs text-zinc-500 uppercase font-medium mb-1">In The Novel</p>
<p className="text-sm text-zinc-300">Victor stitches together body parts to make a "perfect" human, but creates something he cannot control.</p>
</div>
<div className="relative pl-4 border-l-2 border-emerald-500">
<p className="text-xs text-emerald-500 uppercase font-medium mb-1">In Reality Today</p>
<p className="text-sm text-zinc-300">Scientists can edit DNA to cure diseases. But we worry: will people try to create "designer babies"? If we change human DNA, are we playing God?</p>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8 hover:bg-zinc-900/50 transition-colors">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-blue-500" data-lucide="bot"></i>
<h3 className="text-lg font-medium text-white">Artificial Intelligence</h3>
</div>
<span className="px-2 py-1 rounded bg-white/5 text-[10px] text-zinc-400 border border-white/5">AGI</span>
</div>
<div className="space-y-4">
<div className="relative pl-4 border-l-2 border-zinc-700">
<p className="text-xs text-zinc-500 uppercase font-medium mb-1">In The Novel</p>
<p className="text-sm text-zinc-300">The creature is intelligent and learns quickly. He becomes dangerous because his creator does not teach him right from wrong.</p>
</div>
<div className="relative pl-4 border-l-2 border-blue-500">
<p className="text-xs text-blue-500 uppercase font-medium mb-1">In Reality Today</p>
<p className="text-sm text-zinc-300">We are building AI that is smarter than humans. The "Alignment Problem" asks: How do we ensure AI shares our values and doesn't turn against us?</p>
</div>
</div>
</div>
</div>

<div className="mt-12 bg-gradient-to-r from-emerald-900/20 to-zinc-900 rounded-xl p-8 border border-white/10 text-center">
<i className="w-8 h-8 text-emerald-400 mx-auto mb-4" data-lucide="scale"></i>
<h3 className="text-lg font-medium text-white mb-2">The Final Lesson</h3>
<p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
                    Frankenstein teaches us that <strong>responsibility</strong> is more important than intelligence. Creating something new is easy; taking care of it is hard.
                </p>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-zinc-950 text-center">
<div className="flex items-center justify-center gap-2 mb-4 opacity-50">
<i className="w-4 h-4 text-zinc-400" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<p className="text-zinc-600 text-xs">Educational Resource • Literature &amp; Ethics</p>
</footer>


    </>
  );
}
