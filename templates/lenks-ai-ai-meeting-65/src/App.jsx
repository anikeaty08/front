import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Year
        document.getElementById('y').textContent = new Date().getFullYear();
        // Cursor glow follow
        const glow = document.getElementById('cursor-glow');
        window.addEventListener('pointermove', (e) => {
          glow.style.left = e.clientX + 'px';
          glow.style.top = e.clientY + 'px';
        });
        // Subtle parallax on hero aurora
        const aurora = document.getElementById('hero-aurora');
        window.addEventListener('pointermove', (e) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 6;
          const y = (e.clientY / window.innerHeight - 0.5) * 6;
          aurora.style.transform = `translate(${x}%, ${y}%)`;
        });
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">

<div className="absolute inset-0">
<div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-50 animate-pulse" style={{background: 'radial-gradient(closest-side, rgba(139,92,246,0.20), transparent 60%)'}}></div>
<div className="absolute -top-32 -right-24 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-50 animate-pulse" style={{background: 'radial-gradient(closest-side, rgba(236,72,153,0.18), transparent 60%)', animationDelay: '400ms'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[30rem] w-[60rem] rounded-[999rem] blur-3xl opacity-30" style={{background: 'radial-gradient(closest-side, rgba(34,197,94,0.14), transparent 60%)'}}></div>
</div>

<div className="absolute inset-0 opacity-20">
<div className="h-full w-full" style="background-image:
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 3rem 3rem;"></div>
</div>

<div className="absolute -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-60 mix-blend-screen transition-transform duration-200" id="cursor-glow" style={{background: 'radial-gradient(closest-side, rgba(124,58,237,0.18), transparent 60%)'}}></div>
</div>

<div className="pointer-events-none fixed inset-x-0 top-0 z-0 flex justify-center">
<div className="h-40 w-full max-w-5xl bg-gradient-to-b from-violet-500/10 via-fuchsia-500/5 to-transparent blur-3xl animate-pulse"></div>
</div>

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-6 py-5 md:px-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-zinc-900/70 ring-1 ring-white/5 px-3 py-1.5">
<span className="text-sm tracking-tight font-semibold text-zinc-100">LENKS</span>
</div>
<span className="hidden md:inline text-xs text-zinc-400">AI Platform</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
<a className="hover:text-zinc-100" href="#what">What is Lens</a>
<a className="hover:text-zinc-100" href="#capabilities">Capabilities</a>
<a className="hover:text-zinc-100" href="#arabic">Arabic IQ</a>
<a className="hover:text-zinc-100" href="#process">How it works</a>
<a className="hover:text-zinc-100" href="#modes">Modes</a>
<a className="hover:text-zinc-100" href="#security">Security</a>
<a className="hover:text-zinc-100" href="#benefits">Benefits</a>
</nav>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors px-3.5 py-2 text-sm text-zinc-100" href="#contact">
<iconify-icon className="h-4 w-4" icon="lucide:message-square" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
              Contact
            </a>
</div>
</div>
</div>
</header>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pt-10 pb-14 md:px-8 md:pt-16 md:pb-20">
<div className="grid items-center gap-10 md:grid-cols-2">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-zinc-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-violet-400"></span>
              Lenks.ai — AI Agent
            </div>
<h1 className="mt-4 text-5xl tracking-tight font-semibold leading-tight md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-300">
              Meet Lens
            </h1>
<p className="mt-4 text-lg text-zinc-300 md:text-xl">
              Lens, always assisting.
            </p>
<p className="mt-5 text-base text-zinc-300">
              An AI meeting agent embedded within the Lenks platform. It captures, processes, and structures meeting conversations in real time—transforming unstructured discussions into actionable outputs. Runs during live meetings and delivers artifacts instantly after.
            </p>
<div className="mt-7 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500/90 to-fuchsia-500/90 hover:from-violet-500 hover:to-fuchsia-500 transition-colors px-4 py-2.5 text-sm font-medium text-white shadow-sm" href="#process">
<iconify-icon className="h-4 w-4" icon="lucide:play-circle" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                See how it works
              </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors px-4 py-2.5 text-sm text-zinc-100" href="#modes">
<iconify-icon className="h-4 w-4" icon="lucide:user-cog" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                Usage modes
              </a>
</div>
<div className="mt-6 flex items-center gap-4">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 ring-2 ring-zinc-950"></div>
<div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 ring-2 ring-zinc-950"></div>
<div className="h-7 w-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 ring-2 ring-zinc-950"></div>
</div>
<span className="text-xs text-zinc-400">Designed for accuracy, language awareness, and reliable meeting intelligence.</span>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 -z-10 bg-gradient-to-tr from-violet-600/25 via-fuchsia-600/15 to-transparent blur-2xl will-change-transform" id="hero-aurora"></div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur hover:border-white/15 transition-colors">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-xs text-zinc-300">Live meeting</span>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-400">
<div className="inline-flex items-center gap-1">
<iconify-icon className="h-3.5 w-3.5" icon="lucide:mic" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                    On
                  </div>
<div className="inline-flex items-center gap-1">
<iconify-icon className="h-3.5 w-3.5" icon="lucide:waveform" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                    Processing
                  </div>
</div>
</div>
<div className="p-4">
<div className="grid gap-3">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-violet-500/20 ring-1 ring-violet-500/30 flex items-center justify-center">
<iconify-icon className="h-4 w-4 text-violet-300" icon="lucide:broadcast" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-200">Lens</span>
<span className="text-[0.7rem] text-zinc-400">Real-time</span>
</div>
<p className="mt-1 text-sm text-zinc-300">Capturing speech, identifying speakers, and tracking topics as they evolve.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-fuchsia-500/20 ring-1 ring-fuchsia-500/30 flex items-center justify-center">
<iconify-icon className="h-4 w-4 text-fuchsia-300" icon="lucide:highlighter" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-200">Understanding</span>
<span className="text-[0.7rem] text-zinc-400">Arabic + English</span>
</div>
<p className="mt-1 text-sm text-zinc-300">Dialect-aware analysis preserves meaning—even in fast, informal code-switching.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 flex items-center justify-center">
<iconify-icon className="h-4 w-4 text-emerald-300" icon="lucide:square-mouse-pointer" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-200">Outputs</span>
<span className="text-[0.7rem] text-zinc-400">Auto-generated</span>
</div>
<p className="mt-1 text-sm text-zinc-300">Summaries, actions with owners, decisions, transcripts, and insights.</p>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 hover:ring-white/20 transition">
<p className="text-xs text-zinc-400">Topic</p>
<p className="mt-1 text-sm text-zinc-200">Launch readiness</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 hover:ring-white/20 transition">
<p className="text-xs text-zinc-400">Action</p>
<p className="mt-1 text-sm text-zinc-200">Assign QA owners</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 hover:ring-white/20 transition">
<p className="text-xs text-zinc-400">Decision</p>
<p className="mt-1 text-sm text-zinc-200">Go live Friday</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="h-3.5 w-3.5" icon="lucide:shield-check" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                    Enterprise-grade privacy
                  </div>
<a className="text-xs text-violet-300 hover:text-violet-200" href="#security">Learn more</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="what">
<div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
<div className="grid gap-10 md:grid-cols-3">
<div className="md:col-span-1">
<h2 className="text-3xl tracking-tight font-semibold text-zinc-50">What is Lens?</h2>
<p className="mt-3 text-base text-zinc-300">Embedded within Lenks to turn live conversations into structured, actionable outcomes.</p>
</div>
<div className="md:col-span-2 grid gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<p className="text-sm text-zinc-300">
                Lens captures, processes, and structures meeting conversations in real time. It transforms unstructured discussions into clear summaries, action items with ownership, decisions, and searchable transcripts—delivered automatically at the end of the meeting.
              </p>
<p className="mt-3 text-sm text-zinc-300">
                Built for organizations that require accuracy, language awareness, and reliable meeting intelligence.
              </p>
</div>
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-300 hover:ring-white/20 transition">
<iconify-icon className="h-3.5 w-3.5 text-violet-300" icon="lucide:bot" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                Live agent
              </span>
<span className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-300 hover:ring-white/20 transition">
<iconify-icon className="h-3.5 w-3.5 text-fuchsia-300" icon="lucide:sparkles" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                Real-time structuring
              </span>
<span className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-300 hover:ring-white/20 transition">
<iconify-icon className="h-3.5 w-3.5 text-emerald-300" icon="lucide:clock" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                Immediate outputs
              </span>
<span className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-300 hover:ring-white/20 transition">
<iconify-icon className="h-3.5 w-3.5 text-cyan-300" icon="lucide:languages" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                Language-aware
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="capabilities">
<div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-zinc-50">Core capabilities</h2>
<p className="mt-2 text-base text-zinc-300">During and after meetings, Lens delivers technical precision.</p>
</div>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:-translate-y-0.5 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<iconify-icon className="h-4 w-4 text-violet-300" icon="lucide:audio-lines" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
              1 — Speech Processing
            </div>
<ul className="mt-3 space-y-2 text-sm text-zinc-300">
<li className="flex gap-2"><span>•</span><span>Real-time speech-to-text transcription</span></li>
<li className="flex gap-2"><span>•</span><span>Speaker identification</span></li>
<li className="flex gap-2"><span>•</span><span>Accurate handling of overlapping speech</span></li>
</ul>
</div>

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:-translate-y-0.5 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<iconify-icon className="h-4 w-4 text-fuchsia-300" icon="lucide:languages" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
              2 — Language &amp; Dialect Understanding
            </div>
<ul className="mt-3 space-y-2 text-sm text-zinc-300">
<li className="flex gap-2"><span>•</span><span>Dialect-aware Arabic language processing</span></li>
<li className="flex gap-2"><span>•</span><span>Support for Saudi, Egyptian, Levant, Gulf dialects</span></li>
<li className="flex gap-2"><span>•</span><span>Mixed Arabic–English conversation handling</span></li>
<li className="flex gap-2"><span>•</span><span>Contextual meaning preservation</span></li>
</ul>
</div>

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:-translate-y-0.5 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<iconify-icon className="h-4 w-4 text-cyan-300" icon="lucide:waypoints" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
              3 — Contextual Analysis
            </div>
<ul className="mt-3 space-y-2 text-sm text-zinc-300">
<li className="flex gap-2"><span>•</span><span>Topic segmentation</span></li>
<li className="flex gap-2"><span>•</span><span>Identification of discussion shifts</span></li>
<li className="flex gap-2"><span>•</span><span>Detection of key moments and emphasis</span></li>
</ul>
</div>

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:-translate-y-0.5 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<iconify-icon className="h-4 w-4 text-emerald-300" icon="lucide:square-stack" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
              4 — Automated Output Generation
            </div>
<ul className="mt-3 space-y-2 text-sm text-zinc-300">
<li className="flex gap-2"><span>•</span><span>Structured meeting summaries</span></li>
<li className="flex gap-2"><span>•</span><span>Action item extraction with ownership</span></li>
<li className="flex gap-2"><span>•</span><span>Decision detection and highlighting</span></li>
<li className="flex gap-2"><span>•</span><span>Full searchable transcripts</span></li>
<li className="flex gap-2"><span>•</span><span>Key topic insights</span></li>
</ul>
</div>

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:-translate-y-0.5 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<iconify-icon className="h-4 w-4 text-blue-300" icon="lucide:database" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
              5 — Data Organization
            </div>
<ul className="mt-3 space-y-2 text-sm text-zinc-300">
<li className="flex gap-2"><span>•</span><span>Automatic storage within Lenks workspaces</span></li>
<li className="flex gap-2"><span>•</span><span>Association with meetings, departments, and users</span></li>
<li className="flex gap-2"><span>•</span><span>Centralized access to historical meeting data</span></li>
</ul>
</div>

<div className="rounded-xl bg-gradient-to-br from-violet-600/15 to-fuchsia-600/15 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<p className="text-sm text-zinc-200">Other tools transcribe Arabic. Lens understands it.</p>
<p className="mt-2 text-sm text-zinc-300">Built for meaning, not literal matching.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="arabic">
<div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
<div className="grid gap-8 lg:grid-cols-2">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-zinc-50">Arabic Language Intelligence</h2>
<p className="mt-3 text-base text-zinc-300">
              Lens is built specifically for real Arabic conversations—not just Modern Standard Arabic.
            </p>
<div className="mt-6 grid gap-3">
<div className="flex items-start gap-3">
<div className="mt-1 h-6 w-6 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="h-3.5 w-3.5 text-violet-300" icon="lucide:map-pin" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-zinc-300">Understands regional accents and dialect variations</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 h-6 w-6 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="h-3.5 w-3.5 text-fuchsia-300" icon="lucide:zap" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-zinc-300">Handles fast, informal speech</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 h-6 w-6 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="h-3.5 w-3.5 text-cyan-300" icon="lucide:shuffle" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-zinc-300">Robust code-switching between Arabic and English</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 h-6 w-6 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="h-3.5 w-3.5 text-emerald-300" icon="lucide:bookmark-check" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-zinc-300">Prioritizes semantic understanding and intent</p>
</div>
</div>
<div className="mt-6 rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<p className="text-sm text-zinc-200">Summaries reflect what was meant, not just what was said.</p>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 hover:border-white/15 transition">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<div className="text-sm text-zinc-300">Meaning-aware extraction</div>
<div className="text-xs text-zinc-400">Example</div>
</div>
<div className="mt-4 space-y-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-zinc-400 mb-1">Conversation</div>
<p className="text-sm text-zinc-200">"نخلّص على الخميس؟ أو نأجّل للأسبوع الجاي؟" → "Let's wrap by Thursday or push to next week?"</p>
</div>
<div className="rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 p-4">
<div className="text-xs text-emerald-300 mb-1">Decision detected</div>
<p className="text-sm text-emerald-200">Go-live target: Thursday, with fallback next week.</p>
</div>
<div className="rounded-lg bg-violet-500/10 ring-1 ring-violet-500/20 p-4">
<div className="text-xs text-violet-300 mb-1">Action items</div>
<p className="text-sm text-violet-200">Finalize QA checklist; confirm owner per module.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="process">
<div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
<h2 className="text-3xl tracking-tight font-semibold text-zinc-50">How Lens works</h2>
<p className="mt-2 text-base text-zinc-300">From live ingestion to structured outputs—delivered automatically.</p>
<div className="mt-8 grid gap-6 lg:grid-cols-3">

<div className="relative rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="absolute -top-3 left-5 rounded-full bg-violet-500/90 text-white text-xs px-2 py-0.5">Step 1</div>
<div className="flex items-center gap-2 text-sm text-zinc-200">
<iconify-icon className="h-4 w-4 text-violet-300" icon="lucide:radio" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
              Meeting Ingestion
            </div>
<p className="mt-2 text-sm text-zinc-300">Lens joins the meeting and processes live audio streams.</p>
</div>

<div className="relative rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="absolute -top-3 left-5 rounded-full bg-fuchsia-500/90 text-white text-xs px-2 py-0.5">Step 2</div>
<div className="flex items-center gap-2 text-sm text-zinc-200">
<iconify-icon className="h-4 w-4 text-fuchsia-300" icon="lucide:brain-circuit" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
              Language Understanding
            </div>
<p className="mt-2 text-sm text-zinc-300">Analyzes speech for meaning, intent, and context across dialects and languages.</p>
</div>

<div className="relative rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="absolute -top-3 left-5 rounded-full bg-emerald-500/90 text-white text-xs px-2 py-0.5">Step 3</div>
<div className="flex items-center gap-2 text-sm text-zinc-200">
<iconify-icon className="h-4 w-4 text-emerald-300" icon="lucide:boxes" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
              Output Creation
            </div>
<ul className="mt-2 space-y-1 text-sm text-zinc-300">
<li className="flex gap-2"><span>•</span><span>A clear summary</span></li>
<li className="flex gap-2"><span>•</span><span>Action items and next steps</span></li>
<li className="flex gap-2"><span>•</span><span>Decision highlights</span></li>
<li className="flex gap-2"><span>•</span><span>Full transcript</span></li>
<li className="flex gap-2"><span>•</span><span>Meeting insights</span></li>
</ul>
<p className="mt-2 text-xs text-zinc-400">All outputs are delivered automatically.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="modes">
<div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-zinc-50">Usage modes</h2>
<p className="mt-2 text-base text-zinc-300">For individuals and teams.</p>
</div>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-2">

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:border-white/15 transition">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-violet-300" icon="lucide:user" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl tracking-tight font-semibold text-zinc-100">Personal meetings</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex gap-2"><span>•</span><span>Private summaries</span></li>
<li className="flex gap-2"><span>•</span><span>Personal action items</span></li>
<li className="flex gap-2"><span>•</span><span>Personal meeting history</span></li>
<li className="flex gap-2"><span>•</span><span>Full control and visibility</span></li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:border-white/15 transition">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-fuchsia-300" icon="lucide:users" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl tracking-tight font-semibold text-zinc-100">Department / Workspace</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex gap-2"><span>•</span><span>Shared summaries and outputs</span></li>
<li className="flex gap-2"><span>•</span><span>Team-wide action items</span></li>
<li className="flex gap-2"><span>•</span><span>Organized department history</span></li>
<li className="flex gap-2"><span>•</span><span>Improved accountability and continuity</span></li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="security">
<div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
<div className="grid gap-8 lg:grid-cols-3">
<div className="lg:col-span-1">
<h2 className="text-3xl tracking-tight font-semibold text-zinc-50">Security &amp; environment</h2>
<p className="mt-2 text-base text-zinc-300">Lens operates entirely within the Lenks platform.</p>
</div>
<div className="lg:col-span-2 grid gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<iconify-icon className="h-4 w-4 text-violet-300" icon="lucide:key-round" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                Role-based access control
              </div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<iconify-icon className="h-4 w-4 text-fuchsia-300" icon="lucide:lock" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                Secure storage of meeting data
              </div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<iconify-icon className="h-4 w-4 text-cyan-300" icon="lucide:share-2" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                Controlled sharing across teams
              </div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-sm text-zinc-200">
<iconify-icon className="h-4 w-4 text-emerald-300" icon="lucide:building-2" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                Designed for enterprise and institutional environments
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="benefits">
<div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
<h2 className="text-3xl tracking-tight font-semibold text-zinc-50">Benefits</h2>
<p className="mt-2 text-base text-zinc-300">What this means for users.</p>
<div className="mt-8 grid gap-6 lg:grid-cols-3">

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:border-white/15 transition">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-violet-300" icon="lucide:workflow" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg tracking-tight font-semibold text-zinc-100">Operational</h3>
</div>
<ul className="mt-3 space-y-2 text-sm text-zinc-300">
<li className="flex gap-2"><span>•</span><span>No manual note-taking</span></li>
<li className="flex gap-2"><span>•</span><span>Faster meeting follow-ups</span></li>
<li className="flex gap-2"><span>•</span><span>Reduced repetition and clarification</span></li>
<li className="flex gap-2"><span>•</span><span>Clear documentation of decisions</span></li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:border-white/15 transition">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-fuchsia-300" icon="lucide:group" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg tracking-tight font-semibold text-zinc-100">Team</h3>
</div>
<ul className="mt-3 space-y-2 text-sm text-zinc-300">
<li className="flex gap-2"><span>•</span><span>Everyone aligned on outcomes</span></li>
<li className="flex gap-2"><span>•</span><span>Clear ownership of tasks</span></li>
<li className="flex gap-2"><span>•</span><span>Shared understanding across departments</span></li>
<li className="flex gap-2"><span>•</span><span>Better continuity between meetings</span></li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:border-white/15 transition">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-emerald-300" icon="lucide:timer" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg tracking-tight font-semibold text-zinc-100">Time &amp; productivity</h3>
</div>
<ul className="mt-3 space-y-2 text-sm text-zinc-300">
<li className="flex gap-2"><span>•</span><span>Less time spent writing summaries</span></li>
<li className="flex gap-2"><span>•</span><span>Shorter follow-up meetings</span></li>
<li className="flex gap-2"><span>•</span><span>Faster execution after meetings</span></li>
<li className="flex gap-2"><span>•</span><span>More focus during discussions</span></li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="principles">
<div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:border-white/15 transition">
<div className="flex items-center justify-between flex-wrap gap-3">
<h2 className="text-3xl tracking-tight font-semibold text-zinc-50">Principles</h2>
<div className="text-sm text-zinc-400">Lens does not try to replace people in meetings—it removes the friction around them.</div>
</div>
<div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 hover:ring-white/20 transition">
<p className="text-sm text-zinc-200">Clarity over chaos</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 hover:ring-white/20 transition">
<p className="text-sm text-zinc-200">Understanding over transcription</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 hover:ring-white/20 transition">
<p className="text-sm text-zinc-200">Focus over distraction</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 hover:ring-white/20 transition">
<p className="text-sm text-zinc-200">Accuracy over assumptions</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 hover:ring-white/20 transition">
<p className="text-sm text-zinc-200">Trust and reliability</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 hover:ring-white/20 transition">
<p className="text-sm text-zinc-200">Respect for Arabic language and how people actually speak</p>
</div>
</div>
<div className="mt-6 rounded-xl bg-gradient-to-br from-violet-600/15 to-fuchsia-600/15 ring-1 ring-white/10 p-5">
<p className="text-base text-zinc-100">Lens transforms conversations into clarity.</p>
<p className="mt-1 text-sm text-zinc-300">It listens and assists. You focus.</p>
<p className="mt-1 text-sm text-zinc-300">Lens, always assisting.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="contact">
<div className="mx-auto max-w-7xl px-6 pb-16 md:px-8">
<div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 md:p-8 hover:border-white/15 transition">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h3 className="text-2xl tracking-tight font-semibold text-zinc-50">Ready to meet Lens?</h3>
<p className="mt-2 text-sm text-zinc-300">Bring clarity to every conversation—private or shared, individual or organizational.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500/90 to-fuchsia-500/90 hover:from-violet-500 hover:to-fuchsia-500 transition-colors px-4 py-2.5 text-sm font-medium text-white" href="#">
<iconify-icon className="h-4 w-4" icon="lucide:rocket" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                Request access
              </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors px-4 py-2.5 text-sm text-zinc-100" href="#what">
<iconify-icon className="h-4 w-4" icon="lucide:book-open" style={{-IconStrokeWidth: '1.5'}}></iconify-icon>
                Learn more
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pb-10 md:px-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="flex items-center gap-2">
<div className="rounded-lg bg-zinc-900/70 ring-1 ring-white/5 px-2.5 py-1.5">
<span className="text-sm tracking-tight font-semibold text-zinc-100">LENKS</span>
</div>
<span className="text-xs text-zinc-400">Lens — AI Meeting Agent</span>
</div>
<div className="text-xs text-zinc-500">© <span id="y"></span> Lenks. All rights reserved.</div>
</div>
</div>

</footer>

    </>
  );
}
