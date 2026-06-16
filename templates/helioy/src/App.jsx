import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const cards = document.querySelectorAll('.webgl-card');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    cards.forEach((card) => {
      let raf = null;
      let currentX = 0;
      let currentY = 0;
      let targetX = 0;
      let targetY = 0;
      let glowX = 50;
      let glowY = 50;

      const animate = () => {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;

        card.style.transform = prefersReduced
          ? 'translateY(-0.15rem)'
          : `rotateX(${currentY}deg) rotateY(${currentX}deg) translateY(-0.15rem) scale(1.01)`;

        card.style.boxShadow = `0 1.5rem 4rem rgba(0,0,0,0.38), 0 0 0.1rem rgba(255,255,255,0.04), 0 0 2.5rem rgba(251,146,60,0.12)`;

        if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
          raf = requestAnimationFrame(animate);
        } else {
          raf = null;
        }
      };

      card.addEventListener('mousemove', (e) => {
        if (prefersReduced) return;
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        glowX = px * 100;
        glowY = py * 100;

        targetX = (px - 0.5) * 10;
        targetY = (0.5 - py) * 10;

        card.style.setProperty('--mx', `${glowX}%`);
        card.style.setProperty('--my', `${glowY}%`);
        card.style.setProperty('--tx', `${(px - 0.5) * 1.5}rem`);
        card.style.setProperty('--ty', `${(py - 0.5) * 1.5}rem`);

        if (!raf) raf = requestAnimationFrame(animate);
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 120ms linear, box-shadow 220ms ease, border-color 220ms ease, background-color 220ms ease';
      });

      card.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
        card.style.setProperty('--mx', `50%`);
        card.style.setProperty('--my', `50%`);
        card.style.setProperty('--tx', `0rem`);
        card.style.setProperty('--ty', `0rem`);
        card.style.transition = 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms ease, background-color 220ms ease';
        card.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
        if (!raf) raf = requestAnimationFrame(animate);
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative min-h-screen">
<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute inset-0 bg-[#050505]"></div>
<div className="absolute -top-24 left-1/2 h-[42rem] w-[90rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.42)_0%,rgba(194,65,12,0.28)_26%,rgba(120,33,0,0.16)_46%,rgba(0,0,0,0)_72%)] blur-3xl"></div>
<div className="absolute top-[10rem] left-1/2 h-[34rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,244,237,0.16)_0%,rgba(253,186,116,0.12)_24%,rgba(251,146,60,0.08)_42%,rgba(0,0,0,0)_70%)] blur-2xl"></div>
<div className="absolute inset-x-0 bottom-0 h-[26rem] bg-[linear-gradient(to_top,rgba(255,237,227,0.16),rgba(255,237,227,0.08),rgba(0,0,0,0))]"></div>
<div className="absolute top-0 right-0 text-[20rem] md:text-[26rem] lg:text-[34rem] font-medium tracking-tight text-white/[0.03] select-none scale-[1.2] md:scale-[1.35] origin-top-right translate-x-12 -translate-y-8">
        H
      </div>
</div>
<div className="relative z-10 flex min-h-screen flex-col p-6 md:p-12 lg:p-20">
<header className="mx-auto mb-20 w-full max-w-6xl md:mb-32">
<div className="flex items-center gap-3 select-none">
<svg className="flex-shrink-0" fill="none" height="28" viewbox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2L2.5 8.5V19.5L14 26L25.5 19.5V8.5L14 2Z" stroke="white" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M14 14L2.5 8.5M14 14L25.5 8.5M14 14V26" stroke="white" strokeLinejoin="round" stroke-opacity="0.2" strokeWidth="2"></path>
<circle cx="14" cy="14" fill="#fb923c" r="4"></circle>
</svg>
<div className="mt-0.5 text-xl font-medium uppercase tracking-tight text-white md:text-2xl">
            HELIOY
          </div>
</div>
</header>
<main className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
<section className="mb-32 flex max-w-4xl flex-col md:mb-48">
<div className="mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-orange-300 md:text-sm">
<iconify-icon className="h-4 w-4 md:h-5 md:w-5" icon="solar:code-square-linear"></iconify-icon>
<span>every token counts</span>
</div>
<h1 className="mb-10 text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-5xl lg:text-7xl">
            Infrastructure for AI agents <br className="hidden lg:block"/>
<span className="bg-gradient-to-r from-orange-200 via-orange-300 to-orange-500 bg-clip-text text-transparent">
              that waste less and remember more.
            </span>
</h1>
<div className="flex max-w-2xl flex-col gap-6">
<h2 className="text-2xl font-medium tracking-tight text-orange-50 md:text-3xl">
              Context windows are finite.
            </h2>
<div className="flex flex-col gap-4 text-lg leading-relaxed text-zinc-300 md:text-xl">
<p>
                Most tokens are wasted on navigation — reading files to find files, scanning docs to find sections, re-learning what was known yesterday.
              </p>
<p>
                We build the tools to eliminate that waste.
              </p>
</div>
</div>
</section>
<section className="mb-24 flex w-full flex-col">
<div className="mb-12 flex flex-col gap-3 md:mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
              the stack
            </h2>
<p className="text-lg font-medium text-orange-100/70 md:text-xl">
              Three problems. Three libraries. One orchestrator.
            </p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8" id="card-grid" style={{perspective: '1200px'}}>
<div className="webgl-card group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition duration-300 hover:border-orange-400/20 hover:bg-white/[0.06] md:p-10" style={{transformStyle: 'preserve-3d', willChange: 'transform', boxShadow: '0 0 0 rgba(0,0,0,0)'}}>
<div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(251,146,60,0.18), rgba(251,146,60,0.08) 22%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 68%)', transform: 'translateZ(0.1rem)'}}></div>
<div className="pointer-events-none absolute inset-[1px] rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100" style={{background: 'linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 24%, rgba(255,255,255,0) 42%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0) 72%)', transform: 'translate3d(calc(var(--tx,0) * 0.2), calc(var(--ty,0) * 0.2), 0.15rem)', mixBlendMode: 'screen'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent opacity-70" style={{transform: 'translateZ(0.2rem)'}}></div>
<div className="relative z-10 mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-orange-200/70" style={{transform: 'translateZ(1.4rem)'}}>
<iconify-icon className="h-4 w-4 text-orange-300" icon="solar:database-linear"></iconify-icon>
<span>memory</span>
</div>
<h3 className="relative z-10 mb-4 text-2xl font-medium tracking-tight text-orange-50 md:text-3xl" style={{transform: 'translateZ(2rem)'}}>
                attention matters
              </h3>
<p className="relative z-10 mb-8 flex-grow text-base leading-relaxed text-zinc-300 md:text-lg" style={{transform: 'translateZ(1.2rem)'}}>
                Geometric recall on the S³ hypersphere. Quaternion drift, phasor interference, Kuramoto coupling. One brain per developer, not per project.
              </p>
<div className="relative z-10 mb-8 mt-auto flex flex-wrap items-center gap-2" style={{transform: 'translateZ(1.6rem)'}}>
<span className="rounded-full border border-orange-300/15 bg-orange-400/10 px-3 py-1.5 text-xs font-medium text-orange-100">Rust</span>
<span className="rounded-full border border-orange-300/15 bg-orange-400/10 px-3 py-1.5 text-xs font-medium text-orange-100">MCP</span>
</div>
<div className="relative z-10 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-xs text-zinc-300 transition-colors group-hover:text-white" style={{transform: 'translateZ(2.2rem)'}}>
<span>npm i attention-matters</span>
<button aria-label="Copy command" className="flex items-center text-zinc-500 transition-colors hover:text-orange-200">
<iconify-icon className="h-4 w-4" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
<div className="webgl-card group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition duration-300 hover:border-orange-400/20 hover:bg-white/[0.06] md:p-10" style={{transformStyle: 'preserve-3d', willChange: 'transform', boxShadow: '0 0 0 rgba(0,0,0,0)'}}>
<div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(253,186,116,0.18), rgba(253,186,116,0.08) 22%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 68%)', transform: 'translateZ(0.1rem)'}}></div>
<div className="pointer-events-none absolute inset-[1px] rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100" style={{background: 'linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 24%, rgba(255,255,255,0) 42%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0) 72%)', transform: 'translate3d(calc(var(--tx,0) * 0.2), calc(var(--ty,0) * 0.2), 0.15rem)', mixBlendMode: 'screen'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent opacity-70" style={{transform: 'translateZ(0.2rem)'}}></div>
<div className="relative z-10 mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-orange-200/70" style={{transform: 'translateZ(1.4rem)'}}>
<iconify-icon className="h-4 w-4 text-amber-300" icon="solar:code-square-linear"></iconify-icon>
<span>code</span>
</div>
<h3 className="relative z-10 mb-4 text-2xl font-medium tracking-tight text-orange-50 md:text-3xl" style={{transform: 'translateZ(2rem)'}}>
                frontmatter matters
              </h3>
<p className="relative z-10 mb-6 text-base leading-relaxed text-zinc-300 md:text-lg" style={{transform: 'translateZ(1.2rem)'}}>
                Structural metadata for source files. Auto-generated sidecars via tree-sitter. LLMs know what a file does without reading it.
              </p>
<div className="relative z-10 mb-8 flex flex-grow items-center gap-2 text-xs font-medium text-amber-300" style={{transform: 'translateZ(1.5rem)'}}>
<iconify-icon className="h-4 w-4" icon="solar:chart-linear"></iconify-icon>
<span>80–90% fewer file reads</span>
</div>
<div className="relative z-10 mb-8 mt-auto flex flex-wrap items-center gap-2" style={{transform: 'translateZ(1.6rem)'}}>
<span className="rounded-full border border-amber-300/15 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-50">Rust</span>
<span className="rounded-full border border-amber-300/15 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-50">tree-sitter</span>
<span className="rounded-full border border-amber-300/15 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-50">MCP</span>
</div>
<div className="relative z-10 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-xs text-zinc-300 transition-colors group-hover:text-white" style={{transform: 'translateZ(2.2rem)'}}>
<span>npm i frontmatter-matters</span>
<button aria-label="Copy command" className="flex items-center text-zinc-500 transition-colors hover:text-amber-200">
<iconify-icon className="h-4 w-4" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
<div className="webgl-card group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition duration-300 hover:border-orange-400/20 hover:bg-white/[0.06] md:p-10" style={{transformStyle: 'preserve-3d', willChange: 'transform', boxShadow: '0 0 0 rgba(0,0,0,0)'}}>
<div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(251,146,60,0.18), rgba(251,146,60,0.08) 22%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 68%)', transform: 'translateZ(0.1rem)'}}></div>
<div className="pointer-events-none absolute inset-[1px] rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100" style={{background: 'linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 24%, rgba(255,255,255,0) 42%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0) 72%)', transform: 'translate3d(calc(var(--tx,0) * 0.2), calc(var(--ty,0) * 0.2), 0.15rem)', mixBlendMode: 'screen'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent opacity-70" style={{transform: 'translateZ(0.2rem)'}}></div>
<div className="relative z-10 mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-orange-200/70" style={{transform: 'translateZ(1.4rem)'}}>
<iconify-icon className="h-4 w-4 text-orange-300" icon="solar:document-text-linear"></iconify-icon>
<span>documents</span>
</div>
<h3 className="relative z-10 mb-4 text-2xl font-medium tracking-tight text-orange-50 md:text-3xl" style={{transform: 'translateZ(2rem)'}}>
                mdcontext
              </h3>
<p className="relative z-10 mb-6 text-base leading-relaxed text-zinc-300 md:text-lg" style={{transform: 'translateZ(1.2rem)'}}>
                Structural intelligence for markdown. Hybrid search with BM25 and semantic embeddings. Section-level indexing.
              </p>
<div className="relative z-10 mb-8 flex flex-grow items-center gap-2 text-xs font-medium text-orange-300" style={{transform: 'translateZ(1.5rem)'}}>
<iconify-icon className="h-4 w-4" icon="solar:minimize-linear"></iconify-icon>
<span>80%+ token compression</span>
</div>
<div className="relative z-10 mb-8 mt-auto flex flex-wrap items-center gap-2" style={{transform: 'translateZ(1.6rem)'}}>
<span className="rounded-full border border-orange-300/15 bg-orange-400/10 px-3 py-1.5 text-xs font-medium text-orange-50">TypeScript</span>
<span className="rounded-full border border-orange-300/15 bg-orange-400/10 px-3 py-1.5 text-xs font-medium text-orange-50">Effect</span>
<span className="rounded-full border border-orange-300/15 bg-orange-400/10 px-3 py-1.5 text-xs font-medium text-orange-50">MCP</span>
</div>
<div className="relative z-10 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-xs text-zinc-300 transition-colors group-hover:text-white" style={{transform: 'translateZ(2.2rem)'}}>
<span>npm i mdcontext</span>
<button aria-label="Copy command" className="flex items-center text-zinc-500 transition-colors hover:text-orange-200">
<iconify-icon className="h-4 w-4" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>
<div className="webgl-card group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition duration-300 hover:border-orange-400/20 hover:bg-white/[0.06] md:p-10" style={{transformStyle: 'preserve-3d', willChange: 'transform', boxShadow: '0 0 0 rgba(0,0,0,0)'}}>
<div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(252,165,165,0.18), rgba(248,113,113,0.08) 22%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 68%)', transform: 'translateZ(0.1rem)'}}></div>
<div className="pointer-events-none absolute inset-[1px] rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100" style={{background: 'linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 24%, rgba(255,255,255,0) 42%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0) 72%)', transform: 'translate3d(calc(var(--tx,0) * 0.2), calc(var(--ty,0) * 0.2), 0.15rem)', mixBlendMode: 'screen'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-300/60 to-transparent opacity-70" style={{transform: 'translateZ(0.2rem)'}}></div>
<div className="relative z-10 mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-orange-200/70" style={{transform: 'translateZ(1.4rem)'}}>
<iconify-icon className="h-4 w-4 text-red-300" icon="solar:widget-5-linear"></iconify-icon>
<span>orchestration</span>
</div>
<h3 className="relative z-10 mb-4 text-2xl font-medium tracking-tight text-orange-50 md:text-3xl" style={{transform: 'translateZ(2rem)'}}>
                nancyr
              </h3>
<p className="relative z-10 mb-8 flex-grow text-base leading-relaxed text-zinc-300 md:text-lg" style={{transform: 'translateZ(1.2rem)'}}>
                Multi-agent orchestrator wrapping Claude Code CLI. Hub-and-spoke coordination with token budgets. Compiles context. Learns from outcomes.
              </p>
<div className="relative z-10 mt-auto flex flex-wrap items-center gap-2" style={{transform: 'translateZ(1.6rem)'}}>
<span className="rounded-full border border-red-300/15 bg-red-400/10 px-3 py-1.5 text-xs font-medium text-red-50">Rust</span>
<span className="rounded-full border border-red-300/15 bg-red-400/10 px-3 py-1.5 text-xs font-medium text-red-50">Claude Code</span>
<span className="rounded-full border border-red-300/15 bg-red-400/10 px-3 py-1.5 text-xs font-medium text-red-50">TUI</span>
</div>
</div>
</div>
</section>
</main>
<footer className="mx-auto mt-auto flex w-full max-w-6xl items-center justify-between border-t border-white/10 pt-8">
<p className="text-xs font-medium uppercase tracking-[0.2em] text-orange-100/45 md:text-sm">
          all open source. all composable.
        </p>
</footer>
</div>
</div>


    </>
  );
}
