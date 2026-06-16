import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Simple year setter
      document.getElementById('year').textContent = new Date().getFullYear();

      // Fake submit for CTA form
      const ctaForm = document.getElementById('ctaForm');
      const ctaSuccess = document.getElementById('ctaSuccess');
      if (ctaForm) {
        ctaForm.addEventListener('submit', (e) => {
          e.preventDefault();
          ctaSuccess.classList.remove('hidden');
          ctaForm.querySelector('button[type="submit"]').disabled = true;
          ctaForm.querySelector('button[type="submit"]').classList.add('opacity-70','cursor-not-allowed');
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0" style={{background: 'radial-gradient(600px 300px at 20% 10%, rgba(56,189,248,0.16), transparent 55%), radial-gradient(480px 260px at 80% 20%, rgba(167,139,250,0.16), transparent 55%), radial-gradient(420px 220px at 60% 80%, rgba(34,197,94,0.12), transparent 60%)'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,9,11,0)_0%,rgba(9,9,11,0.8)_40%,rgba(9,9,11,1)_100%)]"></div>
<div className="absolute inset-0 opacity-60 bg-[url('data:image/svg+xml;utf8,&lt;svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2248%22 height=%2248%22 viewBox=%220 0 48 48%22&gt;&lt;path fill=%22rgba(255,255,255,0.035)%22 d=%22M0 0h1v1H0z%22/&gt;&lt;/svg&gt;')]"></div>
</div>

<header className="sticky top-0 z-50">
<div className="mx-auto max-w-7xl px-5">
<div className="mt-4 mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900/40 px-4 py-3 backdrop-blur">
<a className="flex items-center gap-2" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-400/15 ring-1 ring-emerald-300/20">
<svg className="text-emerald-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 16c4.5-4 11.5-4 16 0"></path><path d="M8 20c2.5-2.5 5.5-2.5 8 0"></path><path d="M2 12c6-6 14-6 20 0"></path></svg>
</div>
<span className="text-sm text-white tracking-tight" style={{fontFamily: '\'Inter\',sans-serif'}}>StemGen</span>
</a>
<nav className="hidden items-center gap-7 md:flex">
<a className="text-sm text-zinc-300 hover:text-white transition-colors tracking-tight" href="#product">Product</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors tracking-tight" href="#how-it-works">How it works</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors tracking-tight" href="#genres">Genres</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors tracking-tight" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 tracking-tight text-emerald-300" href="#final-cta" style={{fontSize: '14px', padding: '0.5rem 0.75rem', letterSpacing: '0.02em', position: 'relative', borderRadius: '0.5rem', overflow: 'hidden', transition: 'all 0.3s', lineHeight: '1.3em', border: '2px solid rgba(16,185,129,0.9)', background: 'linear-gradient(to right, rgba(16,185,129,0.12) 1%, transparent 40%, transparent 60%, rgba(16,185,129,0.12) 100%)', boxShadow: 'inset 0 0 10px rgba(16,185,129,0.35), 0 0 9px 3px rgba(16,185,129,0.08)'}}>
<svg className="text-emerald-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              Start generating
            </a>
<button className="md:hidden p-2 text-zinc-300" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
<svg className="h-5 w-5" fill="none" height="22" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
<div className="hidden rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur mb-4 p-4" id="mobileMenu">
<nav className="space-y-3">
<a className="block text-sm text-zinc-300 hover:text-white transition-colors tracking-tight" href="#product">Product</a>
<a className="block text-sm text-zinc-300 hover:text-white transition-colors tracking-tight" href="#how-it-works">How it works</a>
<a className="block text-sm text-zinc-300 hover:text-white transition-colors tracking-tight" href="#genres">Genres</a>
<a className="block text-sm text-zinc-300 hover:text-white transition-colors tracking-tight" href="#faq">FAQ</a>
</nav>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-5 pt-8 pb-16 md:pb-24">
<div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
<div className="space-y-6">
<p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/40 px-3 py-1 text-[11px] text-zinc-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span> AI Music, For Producers
            </p>
<h1 className="text-4xl md:text-5xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\',ui-sans-serif', fontWeight: '300'}}>
              Ultra‑optimized stems for every genre
            </h1>
<p className="max-w-xl text-base text-zinc-400 tracking-tight">
              Stop fighting generic music AI. StemGen uses genre‑specific prompt intelligence to create clean, loop‑perfect stems that drop straight into your workflow.
            </p>
<div className="flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 tracking-tight text-emerald-300" href="#final-cta" style={{fontSize: '15px', padding: '0.7em 2.2em', borderRadius: '0.6em', letterSpacing: '0.02em', border: '2px solid rgba(16,185,129,0.9)', background: 'linear-gradient(to right, rgba(16,185,129,0.12) 1%, transparent 40%, transparent 60%, rgba(16,185,129,0.12) 100%)', boxShadow: 'inset 0 0 10px rgba(16,185,129,0.35), 0 0 9px 3px rgba(16,185,129,0.08)'}}>
<svg className="h-4 w-4" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m4.93 10.93 2.83 2.83"></path><path d="M2 12h4"></path><path d="M12 18v4"></path><path d="m16.24 7.76 2.83-2.83"></path><path d="M18 12h4"></path><path d="m7.76 16.24-2.83 2.83"></path></svg>
                Generate my first stems
              </a>
<a className="inline-flex items-center justify-center gap-2 tracking-tight text-white border border-white/20 rounded-lg px-4 py-2.5 hover:bg-white/5 transition" href="#product">
<svg className="h-4 w-4" fill="none" height="19" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m10 8 6 4-6 4z"></path></svg>
                See it in action
              </a>
</div>
<div className="grid grid-cols-1 gap-2 sm:grid-cols-3 pt-2">
<div className="flex items-center gap-2 text-sm text-zinc-300 tracking-tight">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span> In‑browser &amp; instant
              </div>
<div className="flex items-center gap-2 text-sm text-zinc-300 tracking-tight">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span> Loop‑perfect by design
              </div>
<div className="flex items-center gap-2 text-sm text-zinc-300 tracking-tight">
<span className="h-1.5 w-1.5 rounded-full bg-violet-300"></span> DAW‑ready exports
              </div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-cyan-400/20 to-indigo-500/20 blur-2xl opacity-40"></div>
<div className="relative rounded-2xl border border-white/10 bg-zinc-900/40 p-4 backdrop-blur">

<div className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-900/50 px-3 py-2">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-400/15 ring-1 ring-cyan-300/25">
<svg className="text-cyan-300" fill="none" height="15" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M4 16c4.5-4 11.5-4 16 0"></path><path d="M8 20c2.5-2.5 5.5-2.5 8 0"></path><path d="M2 12c6-6 14-6 20 0"></path></svg>
</div>
<span className="text-xs text-zinc-300 tracking-tight">StemGen Session</span>
</div>
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/30 transition">
<svg className="h-3.5 w-3.5" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 21v-7"></path><path d="M8 21V10"></path><path d="M12 21V3"></path><path d="M16 21v-5"></path><path d="M20 21V8"></path></svg>
                    Mix
                  </button>
<button className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/30 transition">
<svg className="h-3.5 w-3.5" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                    Play
                  </button>
<button className="inline-flex items-center gap-1 rounded-md bg-white text-zinc-900 px-2.5 py-1.5 text-xs ring-1 ring-white/10 hover:bg-zinc-100 transition">
<svg className="h-3.5 w-3.5" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                    Export
                  </button>
</div>
</div>

<div className="mt-3 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-3">
<p className="text-[11px] text-zinc-400 tracking-tight">Key</p>
<div className="mt-1 flex items-center justify-between">
<span className="text-sm text-white tracking-tight">Am</span>
<button className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[11px] text-zinc-200 ring-1 ring-white/10">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
                      Set
                    </button>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-3">
<p className="text-[11px] text-zinc-400 tracking-tight">Tempo</p>
<div className="mt-1 flex items-center justify-between">
<span className="text-sm text-white tracking-tight">128 BPM</span>
<button className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[11px] text-zinc-200 ring-1 ring-white/10">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
                      Set
                    </button>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-3">
<p className="text-[11px] text-zinc-400 tracking-tight">Bars</p>
<div className="mt-1 flex items-center justify-between">
<span className="text-sm text-white tracking-tight">8</span>
<button className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[11px] text-zinc-200 ring-1 ring-white/10">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
                      Set
                    </button>
</div>
</div>
</div>

<div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-3">
<div className="flex items-start justify-between">
<div>
<p className="text-xs text-zinc-400 tracking-tight">Instrument</p>
<p className="text-sm text-white tracking-tight">Drums</p>
</div>
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-2 py-0.5 text-[11px] text-emerald-300 ring-1 ring-emerald-400/20">Locked to grid</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-300 tracking-tight">
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 10h18"></path><path d="M12 10v11"></path><path d="M5 10v6"></path><path d="M19 10v6"></path></svg>
                      Kick+Snare+Hats
                    </div>
<div className="text-sm text-zinc-400 tracking-tight">8 bars</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/30 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        Generate
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/30 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m10 8 6 4-6 4z"></path></svg>
                        Play
                      </button>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md bg-white text-zinc-900 px-2.5 py-1.5 text-xs ring-1 ring-white/10 hover:bg-zinc-100 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                      Download
                    </button>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-3">
<div className="flex items-start justify-between">
<div>
<p className="text-xs text-zinc-400 tracking-tight">Instrument</p>
<p className="text-sm text-white tracking-tight">Bass</p>
</div>
<span className="inline-flex items-center gap-1 rounded-md bg-cyan-500/15 px-2 py-0.5 text-[11px] text-cyan-300 ring-1 ring-cyan-400/20">Key: Am</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-300 tracking-tight">
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 8c8-5 12 5 20 0"></path><path d="M2 16c8-5 12 5 20 0"></path></svg>
                      Reese/Sub
                    </div>
<div className="text-sm text-zinc-400 tracking-tight">8 bars</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/30 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        Generate
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/30 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m10 8 6 4-6 4z"></path></svg>
                        Play
                      </button>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md bg-white text-zinc-900 px-2.5 py-1.5 text-xs ring-1 ring-white/10 hover:bg-zinc-100 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                      Download
                    </button>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-3">
<div className="flex items-start justify-between">
<div>
<p className="text-xs text-zinc-400 tracking-tight">Instrument</p>
<p className="text-sm text-white tracking-tight">Lead</p>
</div>
<span className="inline-flex items-center gap-1 rounded-md bg-violet-500/15 px-2 py-0.5 text-[11px] text-violet-300 ring-1 ring-violet-400/20">Solo, no FX</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-300 tracking-tight">
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 10h18"></path><path d="M12 10v11"></path><path d="M5 21h14"></path></svg>
                      Hook‑ready
                    </div>
<div className="text-sm text-zinc-400 tracking-tight">8 bars</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/30 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        Generate
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/30 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m10 8 6 4-6 4z"></path></svg>
                        Play
                      </button>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md bg-white text-zinc-900 px-2.5 py-1.5 text-xs ring-1 ring-white/10 hover:bg-zinc-100 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                      Download
                    </button>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-3">
<div className="flex items-start justify-between">
<div>
<p className="text-xs text-zinc-400 tracking-tight">Instrument</p>
<p className="text-sm text-white tracking-tight">Pad / Perc FX</p>
</div>
<span className="inline-flex items-center gap-1 rounded-md bg-zinc-100/10 px-2 py-0.5 text-[11px] text-zinc-300 ring-1 ring-white/10">Width &amp; air</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-300 tracking-tight">
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 8c8-5 12 5 20 0"></path><path d="M2 16c8-5 12 5 20 0"></path></svg>
                      Lush &amp; wide
                    </div>
<div className="text-sm text-zinc-400 tracking-tight">8 bars</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/30 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        Generate
                      </button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/30 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m10 8 6 4-6 4z"></path></svg>
                        Play
                      </button>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md bg-white text-zinc-900 px-2.5 py-1.5 text-xs ring-1 ring-white/10 hover:bg-zinc-100 transition">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                      Download
                    </button>
</div>
</div>
</div>

<div className="mt-4 rounded-lg border border-white/10 p-3">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-white tracking-tight">Loop: 8 bars</p>
<p className="text-xs text-zinc-400 tracking-tight">Phase‑locked across stems</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-2 py-0.5 text-[11px] text-emerald-300 ring-1 ring-emerald-400/20">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span> Clean boundaries
                    </span>
<span className="inline-flex items-center gap-1 rounded-md bg-cyan-500/15 px-2 py-0.5 text-[11px] text-cyan-300 ring-1 ring-cyan-400/20">On‑grid</span>
</div>
</div>
<div className="mt-3 grid grid-cols-12 gap-1">
<div className="h-10 col-span-12 rounded-md bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-violet-400/20 ring-1 ring-white/10"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="product">
<div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
<h2 className="text-3xl md:text-4xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\',ui-sans-serif', fontWeight: '300'}}>Built for creators</h2>
<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
<div className="rounded-xl border border-white/10 bg-zinc-900/40 p-5">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-emerald-400/15 ring-1 ring-emerald-300/25 flex items-center justify-center">
<svg className="text-emerald-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<div>
<p className="text-sm text-white tracking-tight">Producers &amp; remixers</p>
<p className="text-xs text-zinc-400 tracking-tight mt-1">Print stems for fast arrangement and mix moves.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/40 p-5">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
<svg className="text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 22v-5l10-10 5 5L12 22z"></path><path d="M16 7 7 16 4 13l9-9"></path></svg>
</div>
<div>
<p className="text-sm text-white tracking-tight">DJs</p>
<p className="text-xs text-zinc-400 tracking-tight mt-1">Build custom intros/outros; keep elements independent for live edits.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/40 p-5">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-violet-400/15 ring-1 ring-violet-300/25 flex items-center justify-center">
<svg className="text-violet-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<div>
<p className="text-sm text-white tracking-tight">Content &amp; game teams</p>
<p className="text-xs text-zinc-400 tracking-tight mt-1">Generate variations that stay on‑brand and on‑grid.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/40 p-5">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-amber-400/15 ring-1 ring-amber-300/25 flex items-center justify-center">
<svg className="text-amber-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><path d="m3 7 6-1v12l-6 1z"></path></svg>
</div>
<div>
<p className="text-sm text-white tracking-tight">Filmmakers</p>
<p className="text-xs text-zinc-400 tracking-tight mt-1">Dial energy by muting stems instead of searching for new tracks.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="why">
<div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
<div className="mb-8">
<h2 className="text-3xl md:text-4xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\',ui-sans-serif', fontWeight: '300'}}>Why StemGen</h2>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 hover:border-white/20 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-violet-400/20 ring-1 ring-violet-300/30">
<svg className="text-violet-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 4v16"></path><path d="M10 4v16"></path><path d="M14 4v16"></path><path d="M18 4v16"></path></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight">Genre brains</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Each genre ships with tuned prompts per instrument—so a techno hat doesn’t sound like a trap hat, and a cinematic pad isn’t a house stab.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 hover:border-white/20 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-400/20 ring-1 ring-emerald-300/30">
<svg className="text-emerald-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18"></path><path d="M3 6h18"></path><path d="M3 18h18"></path></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight">One‑click, loop‑perfect</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">We generate exact bar lengths and polish loop boundaries, so stems lock together and repeat cleanly without clicks or timing drift.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 hover:border-white/20 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-400/20 ring-1 ring-cyan-300/30">
<svg className="text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight">Master control</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Set project key/tempo/bars once; every stem follows. Regenerate parts without re‑typing.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 hover:border-white/20 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-400/20 ring-1 ring-amber-300/30">
<svg className="text-amber-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight">Stem‑first workflow</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Drums, bass, lead, pads, FX—and more—exported individually for real mix control, not a flattened file.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 hover:border-white/20 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-400/20 ring-1 ring-indigo-300/30">
<svg className="text-indigo-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="18" x="3" y="4"></rect><path d="M8 10v4"></path><path d="M12 8v8"></path><path d="M16 11v3"></path></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight">In‑browser engine</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Audition instantly with sample‑accurate start times. Mute/solo to sculpt the arrangement before you ever commit to audio.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 hover:border-white/20 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-fuchsia-400/20 ring-1 ring-fuchsia-300/30">
<svg className="text-fuchsia-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 17v4"></path><path d="M8 21h8"></path><path d="M12 3v11"></path><path d="m3 11 9-8 9 8"></path></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight">DAW‑ready downloads</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Bounce individual stems and drag them into Ableton, Logic, FL, or wherever you work.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="how-it-works">
<div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\',ui-sans-serif', fontWeight: '300'}}>Three steps to a usable loop</h2>
<p className="mt-3 text-zinc-400 max-w-2xl mx-auto tracking-tight">Pick a genre, set the scaffold, then generate stems that just work together.</p>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
<div className="relative rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/5 via-zinc-900/40 to-zinc-900/60 p-6">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/20 ring-1 ring-cyan-300/30">
<svg className="text-cyan-300" fill="none" height="28" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m3 5 7 7-7 7"></path><path d="M14 19h7"></path><path d="M14 5h7"></path></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight">1. Pick a genre</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Choose a style (Techno, House, Hip‑Hop, DnB, Ambient, Cinematic, etc.).</p>
</div>
<div className="relative rounded-2xl border border-emerald-300/20 bg-gradient-to-br from-emerald-500/5 via-zinc-900/40 to-zinc-900/60 p-6">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-300/30">
<svg className="text-emerald-300" fill="none" height="28" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M4 12h16"></path><path d="M8 18V6"></path><path d="M16 18V6"></path></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight">2. Set the scaffold</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Use the master Key / Tempo / Bars controls.</p>
</div>
<div className="relative rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-500/5 via-zinc-900/40 to-zinc-900/60 p-6">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-400/20 ring-1 ring-violet-300/30">
<svg className="text-violet-300" fill="none" height="28" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v8"></path><path d="m7 12 5-5 5 5"></path><path d="m7 12 5 5 5-5"></path></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight">3. Generate stems</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Click Generate on each instrument card (Drums, Bass, Lead, Pad, Perc FX). Preview, mute/solo, and download what you like.</p>
</div>
</div>
<p className="text-xs text-zinc-500 tracking-tight text-center mt-6">Pro tip: Save per‑track prompts so you can regenerate variations without re‑typing.</p>
</div>
</section>

<section className="relative border-t border-white/10" id="genres">
<div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
<div className="mb-8">
<h2 className="text-3xl md:text-4xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\',ui-sans-serif', fontWeight: '300'}}>Genre‑specific kits</h2>
<p className="mt-2 max-w-2xl text-zinc-400 tracking-tight">Each genre includes tuned defaults for timing, tone, and role separation—so parts cooperate instead of colliding.</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:border-white/20 hover:bg-zinc-900/60 transition">
<div className="flex items-center justify-between">
<h3 className="text-lg text-white tracking-tight">Techno</h3>
<span className="text-[11px] text-cyan-300 bg-cyan-500/15 ring-1 ring-cyan-400/25 rounded-md px-2 py-0.5">Flagship</span>
</div>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Four‑on‑the‑floor foundation, off‑beat hats, sub‑tight bass, functional stabs, wide pads, tasteful perc FX.</p>
<div className="mt-4 text-xs text-zinc-400 tracking-tight">Stems: Kick+Snare, Hihat, Bass, Lead, Pad, Perc FX</div>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:border-white/20 hover:bg-zinc-900/60 transition">
<h3 className="text-lg text-white tracking-tight">House</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Groove‑led drums, lively tops, round bass, piano/organ stabs, lush pads, ear‑candy fills.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:border-white/20 hover:bg-zinc-900/60 transition">
<h3 className="text-lg text-white tracking-tight">Hip‑Hop</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Knocking drums, 808/low bass, hook leads, soulful chords, textures, ad‑lib FX (no vocals).</p>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:border-white/20 hover:bg-zinc-900/60 transition">
<h3 className="text-lg text-white tracking-tight">Drum &amp; Bass</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Break‑based drums, Reese/sub bass, mid leads, atmos pads, risers and FX.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:border-white/20 hover:bg-zinc-900/60 transition">
<h3 className="text-lg text-white tracking-tight">Ambient</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Evolving pads, plucked motifs, granular textures, soft percussion, noise beds.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:border-white/20 hover:bg-zinc-900/60 transition">
<h3 className="text-lg text-white tracking-tight">Cinematic</h3>
<p className="mt-2 text-sm text-zinc-400 tracking-tight">Low percussion, ostinatos, brass/strings pads, pulses, impacts, risers.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
<div className="mb-8">
<h2 className="text-3xl md:text-4xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\',ui-sans-serif', fontWeight: '300'}}>What makes it “ultra‑optimized”?</h2>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/15 flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v8"></path><path d="M8 12h8"></path><path d="M4 4h16v16H4z"></path></svg>
</div>
<div>
<p className="text-sm text-white tracking-tight">Instrument‑aware prompting</p>
<p className="text-sm text-zinc-400 tracking-tight mt-1">We ask the model for solo instruments (e.g., “solo hi‑hats,” “solo pad”) and instrumental‑only content, which produces cleaner separation and fewer leaks between stems.</p>
</div>
</div>
<div className="mt-5 flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/15 flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18"></path><path d="M3 6h18"></path><path d="M3 18h18"></path></svg>
</div>
<div>
<p className="text-sm text-white tracking-tight">Loop hygiene</p>
<p className="text-sm text-zinc-400 tracking-tight mt-1">Exact musical lengths with optimized boundaries—no clicks, no micro‑silences—while every stem shares the same bar length to stay phase‑locked.</p>
</div>
</div>
<div className="mt-5 flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/15 flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M8 8h8"></path><path d="M10 16h4"></path></svg>
</div>
<div>
<p className="text-sm text-white tracking-tight">Role separation</p>
<p className="text-sm text-zinc-400 tracking-tight mt-1">Defaults push lows to kick/bass, brightness to hats/leads, width to pads/FX—minimizing spectral overlap.</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/15 flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 7v10"></path><path d="M15 7v10"></path><rect height="18" rx="2" width="16" x="4" y="3"></rect></svg>
</div>
<div>
<p className="text-sm text-white tracking-tight">Prompt memory</p>
<p className="text-sm text-zinc-400 tracking-tight mt-1">Each instrument card remembers its text; regenerate variants without re‑writing.</p>
</div>
</div>
<div className="mt-5 flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/15 flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="m8 12 3 3 5-5"></path></svg>
</div>
<div>
<p className="text-sm text-white tracking-tight">Real‑time audition</p>
<p className="text-sm text-zinc-400 tracking-tight mt-1">Play/stop/mute/solo in place, then download only the stems you want.</p>
</div>
</div>
<div className="mt-5 flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/15 flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</div>
<div>
<p className="text-sm text-white tracking-tight">On‑grid, DAW‑ready bounces</p>
<p className="text-sm text-zinc-400 tracking-tight mt-1">Bar‑aligned WAV files with clear stem names and embedded tempo metadata—drag into Ableton, Logic, FL, or Reaper and they snap perfectly.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-emerald-400/15 ring-1 ring-emerald-300/25 flex items-center justify-center">
<svg className="text-emerald-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v-6"></path><path d="M6 20v-4"></path><path d="M18 20v-8"></path><path d="M2 20h20"></path></svg>
</div>
<div className="min-w-0">
<p className="text-sm text-white tracking-tight">Nova</p>
<p className="text-xs text-zinc-400 tracking-tight">Techno producer</p>
</div>
</div>
<p className="mt-4 text-sm text-zinc-300 tracking-tight">“The stems actually loop right. No clicks, no weird tails. Dropped them into Ableton and started arranging immediately.”</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-cyan-400/15 ring-1-cyan-300/25 flex items-center justify-center">
<svg className="text-cyan-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 10h18"></path><path d="M3 6h18"></path><path d="M3 14h18"></path><path d="M3 18h18"></path></svg>
</div>
<div className="min-w-0">
<p className="text-sm text-white tracking-tight">Khai</p>
<p className="text-xs text-zinc-400 tracking-tight">Hip‑Hop beatmaker</p>
</div>
</div>
<p className="mt-4 text-sm text-zinc-300 tracking-tight">“Genre settings save me from prompt roulette. Drums hit right, bass stays in its lane, pads add width.”</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-violet-400/15 ring-1 ring-violet-300/25 flex items-center justify-center">
<svg className="text-violet-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h13"></path><path d="M3 6h.01"></path><path d="M8 12h13"></path><path d="M3 12h.01"></path><path d="M8 18h13"></path><path d="M3 18h.01"></path></svg>
</div>
<div className="min-w-0">
<p className="text-sm text-white tracking-tight">Lena</p>
<p className="text-xs text-zinc-400 tracking-tight">Game audio</p>
</div>
</div>
<p className="mt-4 text-sm text-zinc-300 tracking-tight">“We need loops that scale energy quickly. StemGen’s separation lets us mute parts per scene without remixing.”</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="faq">
<div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
<div className="mb-8 text-center">
<h2 className="text-3xl md:text-4xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\',ui-sans-serif', fontWeight: '300'}}>Frequently asked</h2>
<p className="mt-2 text-zinc-400 tracking-tight">Everything you need to know about StemGen.</p>
</div>
<div className="mx-auto max-w-3xl space-y-3">
<details className="group rounded-xl border border-white/10 bg-zinc-900/40 p-4 open:bg-zinc-900/60 transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm text-white tracking-tight">What formats do you export?</span>
<svg className="h-5 w-5 text-zinc-400 transition group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-zinc-400 tracking-tight">16‑ or 24‑bit WAV, bar‑aligned, with embedded tempo. More formats (AIFF/FLAC) are planned.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-zinc-900/40 p-4 open:bg-zinc-900/60 transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm text-white tracking-tight">Can I use the stems commercially?</span>
<svg className="h-5 w-5 text-zinc-400 transition group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-zinc-400 tracking-tight">Yes—licensing includes commercial use of your generated stems. You own your exports.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-zinc-900/40 p-4 open:bg-zinc-900/60 transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm text-white tracking-tight">Does it support custom keys and tempos?</span>
<svg className="h-5 w-5 text-zinc-400 transition group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-zinc-400 tracking-tight">Absolutely. Set project key, tempo, and bar length once; all stems follow and stay phase‑locked.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-zinc-900/40 p-4 open:bg-zinc-900/60 transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm text-white tracking-tight">Which browsers are supported?</span>
<svg className="h-5 w-5 text-zinc-400 transition group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-zinc-400 tracking-tight">Latest Chrome, Edge, and Safari on desktop. Mobile support is in preview; use headphones for best results.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-zinc-900/40 p-4 open:bg-zinc-900/60 transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm text-white tracking-tight">How is this different from a “full track” generator?</span>
<svg className="h-5 w-5 text-zinc-400 transition group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-zinc-400 tracking-tight">StemGen focuses on instrument‑separated, loop‑perfect parts. You get control over arrangement and mix—no flattened stereo file.</p>
</details>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="final-cta">
<div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-8 md:p-10">
<div className="pointer-events-none absolute -inset-1 opacity-50 blur-2xl" style={{background: 'radial-gradient(600px 300px at 85% 30%, rgba(16,185,129,0.16), transparent 55%), radial-gradient(420px 220px at 20% 80%, rgba(99,102,241,0.16), transparent 60%)'}}></div>
<div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
<div className="md:col-span-2">
<h3 className="text-3xl md:text-4xl tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\',ui-sans-serif', fontWeight: '300'}}>Generate your first genre‑tuned loop</h3>
<p className="mt-3 text-zinc-300 tracking-tight max-w-xl">Pick a style, set your scaffold, and print stems that line up and sound intentional—right in the browser.</p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 tracking-tight text-emerald-300" href="#" style={{fontSize: '15px', padding: '0.8em 2.2em', borderRadius: '0.6em', letterSpacing: '0.02em', border: '2px solid rgba(16,185,129,0.9)', background: 'linear-gradient(to right, rgba(16,185,129,0.12) 1%, transparent 40%, transparent 60%, rgba(16,185,129,0.12) 100%)', boxShadow: 'inset 0 0 10px rgba(16,185,129,0.35), 0 0 9px 3px rgba(16,185,129,0.08)'}}>
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  Start generating
                </a>
<a className="inline-flex items-center justify-center gap-2 tracking-tight text-white border border-white/20 rounded-lg px-4 py-2.5 hover:bg-white/5 transition" href="#how-it-works">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m10 8 6 4-6 4z"></path></svg>
                  How it works
                </a>
</div>
<p className="mt-3 text-xs text-zinc-500 tracking-tight">No credit card required in beta. Exports are yours to use commercially.</p>
</div>
<div className="md:col-span-1">
<form className="rounded-xl border border-white/10 bg-zinc-900/50 p-4 backdrop-blur" id="ctaForm">
<label className="block text-xs text-zinc-400 tracking-tight" htmlFor="email">Join the beta waitlist</label>
<input className="mt-2 w-full rounded-lg border border-white/10 bg-zinc-950/80 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" id="email" name="email" placeholder="you@studio.com" required="" type="email"/>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white text-zinc-900 px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-zinc-100 transition" type="submit">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                  Request access
                </button>
<p className="hidden mt-3 text-xs text-emerald-300" id="ctaSuccess">Thanks—check your email shortly.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-5 py-10">
<div className="flex flex-col items-start justify-between gap-6 md:flex-row">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-400/15 ring-1 ring-emerald-300/20">
<svg className="text-emerald-300" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 16c4.5-4 11.5-4 16 0"></path><path d="M8 20c2.5-2.5 5.5-2.5 8 0"></path><path d="M2 12c6-6 14-6 20 0"></path></svg>
</div>
<span className="text-sm text-white tracking-tight">StemGen</span>
</div>
<nav className="flex flex-wrap items-center gap-4 text-sm">
<a className="text-zinc-400 hover:text-white transition" href="#product">Product</a>
<a className="text-zinc-400 hover:text-white transition" href="#how-it-works">How it works</a>
<a className="text-zinc-400 hover:text-white transition" href="#genres">Genres</a>
<a className="text-zinc-400 hover:text-white transition" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a aria-label="Twitter" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.1c1.6 12-13 12-16 6 1.8.2 3.2-.5 4-1C4 10 3 6.5 4.5 5c1.8 2 3.9 3.3 7.5 3-1-4.2 4.8-6.6 7.5-3.5 1.2 0 3-1 3-1z"></path></svg>
</a>
<a aria-label="Discord" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-zinc-300" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.369A18.06 18.06 0 0 0 16.558 3a13.2 13.2 0 0 0-.624 1.303 17.217 17.217 0 0 0-4.868 0A13.2 13.2 0 0 0 10.442 3c-1.336.246-2.65.65-3.76 1.369C3.12 8.27 2.41 12.067 2.744 15.807A18.41 18.41 0 0 0 8 18.5c.522-.7.99-1.446 1.396-2.231-.774-.29-1.516-.654-2.215-1.086.187-.135.371-.275.55-.42 4.233 1.997 8.827 1.997 13.06 0 .179.145.363.285.55.42-.699.432-1.441.796-2.215 1.086.406.785.874 1.531 1.396 2.231a18.41 18.41 0 0 0 5.256-2.693c.41-4.583-.66-8.343-3.461-11.431zM9.68 13.873c-1.03 0-1.868-.986-1.868-2.2 0-1.214.836-2.2 1.868-2.2s1.872.986 1.872 2.2c0 1.214-.842 2.2-1.872 2.2zm4.64 0c-1.03 0-1.868-.986-1.868-2.2 0-1.214.836-2.2 1.868-2.2s1.872.986 1.872 2.2c0 1.214-.842 2.2-1.872 2.2z"></path></svg>
</a>
</div>
</div>
<div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
<p className="text-xs text-zinc-500">© <span id="year"></span> StemGen. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs">
<a className="text-zinc-400 hover:text-white transition" href="#">Privacy</a>
<a className="text-zinc-400 hover:text-white transition" href="#">Terms</a>
<a className="text-zinc-400 hover:text-white transition" href="#">Support</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
