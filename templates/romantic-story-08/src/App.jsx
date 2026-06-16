import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference text-stone-500">
<div className="max-w-screen-xl mx-auto flex justify-between items-center">
<div className="text-sm font-medium tracking-tighter uppercase opacity-80 hover:opacity-100 transition-opacity cursor-default">
                D &amp; Me
            </div>
<iconify-icon className="opacity-80" icon="solar:heart-linear" width="20"></iconify-icon>
</div>
</nav>

<section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">

<div className="blob bg-rose-200 w-96 h-96 rounded-full top-1/4 left-1/4 mix-blend-multiply"></div>
<div className="blob bg-orange-100 w-80 h-80 rounded-full bottom-1/4 right-1/4 mix-blend-multiply delay-1000"></div>
<div className="max-w-2xl text-center space-y-8 z-10 reveal active">
<span className="inline-block text-xs font-medium tracking-widest text-stone-500 uppercase border-b border-stone-300 pb-1">
                A Memory
            </span>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-800 leading-[1.1]">
                Some connections <br/> <span className="italic text-stone-600">change you forever.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 font-light max-w-md mx-auto leading-relaxed">
                A story of timing, warmth, and the quiet regret of things left unsaid.
            </p>
</div>
<div className="absolute bottom-12 animate-bounce opacity-40">
<iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="min-h-screen flex items-center justify-center relative px-6 py-24 bg-slate-900 text-slate-200 transition-colors duration-1000">
<div className="absolute inset-0 overflow-hidden">
<div className="blob bg-indigo-900/50 w-[50rem] h-[50rem] rounded-full -top-40 -left-40"></div>
</div>
<div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
<div className="space-y-8 reveal">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center ring-1 ring-white/10">
<iconify-icon className="text-indigo-300" icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium serif tracking-tight">
                    It started with a simple hello.
                </h2>
<div className="space-y-4 text-slate-400 font-light text-lg leading-relaxed">
<p>
                        A year ago, I stumbled across a profile. Her name was <span className="text-indigo-200 font-normal">Dhruvika</span>. 
                        It wasn’t just a match; it felt like finding a missing verse to a song I already knew.
                    </p>
<p>
                        We talked day and night. Sleep became secondary to the glow of the screen and the depth of our conversation. 
                        It was effortless. It was instant. It was rare.
                    </p>
</div>
</div>

<div className="relative h-96 w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-white/5 flex flex-col p-6 space-y-4 reveal delay-200 backdrop-blur-sm">

<div className="self-start bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 px-4 py-3 rounded-2xl rounded-tl-none max-w-xs text-sm">
                    Feels like I've known you for years.
                </div>
<div className="self-end bg-slate-700/30 border border-slate-600/30 text-slate-300 px-4 py-3 rounded-2xl rounded-tr-none max-w-xs text-sm">
                    I was just thinking the same thing.
                </div>
<div className="self-start bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 px-4 py-3 rounded-2xl rounded-tl-none max-w-xs text-sm mt-auto">
                    Tell me everything.
                </div>
</div>
</div>
</section>

<section className="min-h-screen flex items-center justify-center relative px-6 py-24 bg-[#fdf8f4] text-stone-800">
<div className="max-w-4xl mx-auto z-10 w-full">
<div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 reveal">
<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 ring-1 ring-orange-200">
<iconify-icon icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<div>
<h2 className="text-3xl md:text-5xl serif tracking-tight font-medium">December 8th</h2>
<p className="text-stone-500 mt-2 text-lg">My Birthday. Our First Date.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 reveal delay-100">
<div className="prose prose-stone prose-lg">
<p className="font-light leading-relaxed">
                        I remember the air that day. Crisp, anticipating. Meeting her in person felt like the most natural thing in the world. 
                    </p>
<p className="font-light leading-relaxed mt-4">
                        She didn't just show up; she arrived with intention. She made my birthday feel like a monument. The care in her eyes, the effort in her gestures—it was overwhelming. I remember looking at her across the table, fighting back tears because I hadn't felt that kind of warmth in a long time.
                    </p>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-orange-200 rounded-lg blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
<div className="relative h-full border-l border-orange-200 pl-8 flex flex-col justify-center space-y-6">
<blockquote className="text-2xl font-serif italic text-stone-700 leading-snug">
                            "You made a simple day feel like a lifetime of memories."
                        </blockquote>
<div className="flex items-center gap-3 text-sm text-stone-400 uppercase tracking-widest">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
<span>Core Memory</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-[80vh] flex items-center justify-center relative px-6 py-24 bg-stone-100">
<div className="max-w-2xl mx-auto text-center reveal">
<iconify-icon className="text-stone-300 mb-6" icon="solar:route-linear" width="32"></iconify-icon>
<h2 className="text-3xl md:text-4xl serif text-stone-600 mb-8">The Slow Fade</h2>
<p className="text-lg text-stone-500 font-light leading-relaxed mb-6">
                Not all paths stay parallel. Differences crept in, quiet at first, then unavoidable. We decided to separate, not out of anger, but out of necessity.
            </p>
<p className="text-lg text-stone-500 font-light leading-relaxed">
                "We'll reconnect someday," we said. A promise floating in the uncertain air of the future. Life moved on, dragging us into its busy currents, and the daily messages turned into silence.
            </p>
<div className="mt-12 w-px h-24 bg-gradient-to-b from-stone-300 to-transparent mx-auto"></div>
</div>
</section>

<section className="min-h-screen flex bg-white pt-24 pr-6 pb-24 pl-6 relative items-center justify-center">

<div className="max-w-xl w-full relative reveal">

<div className="bg-stone-50 p-8 md:p-12 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-stone-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-200 via-orange-100 to-rose-200"></div>
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-stone-400" icon="solar:letter-linear" width="28"></iconify-icon>
<span className="text-xs font-mono text-stone-400">DECEMBER 8 (ONE YEAR LATER)</span>
</div>
<h3 className="text-2xl md:text-3xl serif text-stone-800 mb-6">I'm Sorry, Dhruvika.</h3>
<div className="space-y-4 text-stone-600 font-light leading-relaxed">
<p className="" style={{}}>On 20th Oct . your birthday</p>
<p className="">
                        And I forgot.
                    </p>
<p className="">
                        It wasn't malice. It wasn't lack of care. It was the sheer, blinding speed of life that made me lose track of the date. But the realization hit me with a heavy heart. I missed your birthday.
                    </p>
<p className="">
                        I hope you were happy. I hope you smiled. I hope you felt as special as you made me feel last year. This is my quiet apology to the universe, and to you.
                    </p>
</div>
<div className="mt-10 pt-8 border-t border-stone-100 flex items-center justify-between">
<span className="font-serif italic text-stone-500">Happy Belated Birthday</span>
<iconify-icon className="text-rose-300" icon="solar:heart-broken-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</section>

<footer className="text-center bg-[#fcfbf9] border-stone-100 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-lg mx-auto space-y-6 reveal">
<p className="text-stone-400 font-light text-sm tracking-wide">
                PEOPLE LEAVE, BUT MEMORIES STAY.
            </p>
<div className="flex justify-center gap-4 opacity-50">
<div className="w-1 h-1 rounded-full bg-stone-400"></div>
<div className="w-1 h-1 rounded-full bg-stone-400"></div>
<div className="w-1 h-1 rounded-full bg-stone-400"></div>
</div>
<p className="text-xs text-stone-300 mt-12" style={{}}>© A Personal Memory</p>
</div>
</footer>



    </>
  );
}
