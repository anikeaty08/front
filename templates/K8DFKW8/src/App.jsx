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
      
<div className="min-h-screen">

<div className="absolute inset-0 -z-10" style="background:
        radial-gradient(1200px 600px at 80% -10%, rgba(56, 189, 248, 0.12), transparent),
        radial-gradient(900px 480px at 10% 0%, rgba(168, 85, 247, 0.08), transparent),
        radial-gradient(700px 400px at 90% 90%, rgba(255, 255, 255, 0.04), transparent);">
</div>

<header className="px-6 md:px-10 py-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-[18px] tracking-tight font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui'}}>HL</div>
<div className="h-6 w-px bg-neutral-800"></div>
<div className="text-sm text-neutral-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>HypurrLink — Prime Broker Protocol</div>
</div>
<div className="hidden sm:flex items-center gap-3 text-xs text-neutral-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
<span className="px-2.5 py-1 rounded-md border border-neutral-800/60 bg-neutral-900/40 hover:bg-neutral-900/70 hover:border-neutral-700 transition">Mono</span>
<span className="px-2.5 py-1 rounded-md border border-neutral-800/60 bg-neutral-900/40 hover:bg-neutral-900/70 hover:border-neutral-700 transition">Dual-tone</span>
<span className="px-2.5 py-1 rounded-md border border-neutral-800/60 bg-neutral-900/40 hover:bg-neutral-900/70 hover:border-neutral-700 transition">Lettermark</span>
</div>
</header>

<section className="px-6 md:px-10">
<div className="mx-auto max-w-6xl rounded-2xl border border-neutral-800/60 bg-neutral-900/30 backdrop-blur-md p-8 md:p-12 hover:border-neutral-700 transition">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div>
<h1 className="text-[56px] sm:text-[72px] md:text-[88px] leading-none tracking-tight font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>
<span className="text-neutral-100">Hypurr</span><span className="text-cyan-400">Link</span>
</h1>
<p className="mt-4 text-sm md:text-base text-neutral-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
                Futuristic, minimalist wordmark and monogram — letters only, tight tracking, precise spacing.
              </p>
</div>
<div className="flex items-center gap-3">

<a className="px-3.5 py-2.5 rounded-lg border border-neutral-800/70 bg-neutral-900/40 text-neutral-200 text-sm hover:border-neutral-700 hover:bg-neutral-900/70 transition" download="HypurrLink-wordmark-dualtone.svg" href="data:image/svg+xml;utf8,&lt;?xml version='1.0' encoding='UTF-8'?&gt;&lt;svg xmlns='http://www.w3.org/2000/svg' width='1600' height='400' viewBox='0 0 1600 400'&gt;&lt;rect width='100%' height='100%' fill='transparent'/&gt;&lt;g&gt;&lt;text x='50' y='270' fontFamily='Space Grotesk, Inter, system-ui, -apple-system, Segoe UI, Roboto' font-weight='600' fontSize='220' letter-spacing='-0.02em' fill='%23e5e7eb'&gt;Hypurr&lt;/text&gt;&lt;text x='860' y='270' fontFamily='Space Grotesk, Inter, system-ui, -apple-system, Segoe UI, Roboto' font-weight='600' fontSize='220' letter-spacing='-0.02em' fill='%2367e8f9'&gt;Link&lt;/text&gt;&lt;/g&gt;&lt;/svg&gt;" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
                Download SVG
              </a>

<div className="hidden md:flex items-center gap-3 pl-3">
<div className="px-3 py-2 rounded-lg border border-neutral-800/60 bg-neutral-50">
<span className="text-[20px] font-semibold tracking-tight text-neutral-900" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>Hypurr</span><span className="text-[20px] font-semibold tracking-tight text-cyan-600" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>Link</span>
</div>
</div>
</div>
</div>

<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-2 rounded-xl border border-neutral-800/70 bg-neutral-900/40 p-6 hover:border-neutral-700 transition">
<div className="text-xs text-neutral-400 mb-4" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Clearspace (Safe Area)</div>
<div className="relative rounded-lg bg-neutral-950 p-6 border border-neutral-900/80">
<div className="relative border border-neutral-800/70 rounded-md p-6">

<div className="absolute inset-3 rounded-md border border-neutral-700/40 pointer-events-none"></div>
<div className="w-full overflow-x-auto">
<div className="inline-block">
<div className="text-[44px] sm:text-[56px] lg:text-[64px] leading-none tracking-tight font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>
<span className="text-neutral-100">Hypurr</span><span className="text-cyan-400">Link</span>
</div>
</div>
</div>
</div>
<p className="mt-4 text-[12px] text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
                  Keep at least one “H” stem width of padding on all sides for clarity and impact.
                </p>
</div>
</div>

<div className="rounded-xl border border-neutral-800/70 bg-neutral-900/40 p-6 hover:border-neutral-700 transition">
<div className="text-xs text-neutral-400 mb-4" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Palette</div>
<div className="grid grid-cols-4 gap-3">
<div className="aspect-[4/3] rounded-md border border-neutral-800/70" style={{background: '#0b0f14'}}></div>
<div className="aspect-[4/3] rounded-md border border-neutral-800/70" style={{background: '#e5e7eb'}}></div>
<div className="aspect-[4/3] rounded-md border border-neutral-800/70" style={{background: '#67e8f9'}}></div>
<div className="aspect-[4/3] rounded-md border border-neutral-800/70" style={{background: '#6d28d9'}}></div>
</div>
<div className="mt-4 space-y-1 text-[12px] text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
<p>BG: #0B0F14</p>
<p>Mono: #E5E7EB</p>
<p>Accent: #67E8F9</p>
<p>Depth: #6D28D9</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-10 mt-10">
<div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/30 p-6 hover:border-neutral-700 transition">
<div className="text-xs text-neutral-400 mb-3" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Primary (Dual-tone)</div>
<div className="rounded-lg border border-neutral-900/80 bg-neutral-950 p-6">
<div className="text-[40px] sm:text-[48px] leading-none tracking-tight font-semibold" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>
<span className="text-neutral-100">Hypurr</span><span className="text-cyan-400">Link</span>
</div>
</div>
<p className="mt-3 text-[12px] text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
              Accentuates “Link” for clarity and concept alignment.
            </p>
</div>

<div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/30 p-6 hover:border-neutral-700 transition">
<div className="text-xs text-neutral-400 mb-3" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Monochrome</div>
<div className="rounded-lg border border-neutral-900/80 bg-neutral-950 p-6">
<div className="text-[40px] sm:text-[48px] leading-none tracking-tight font-semibold text-neutral-100" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>
                HypurrLink
              </div>
</div>
<p className="mt-3 text-[12px] text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
              For single-ink or constrained environments.
            </p>
</div>

<div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/30 p-6 hover:border-neutral-700 transition">
<div className="text-xs text-neutral-400 mb-3" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Lettermark</div>
<div className="rounded-lg border border-neutral-900/80 bg-neutral-950 p-6">
<div className="flex items-center gap-5">
<div className="text-[44px] leading-none tracking-tight font-semibold text-neutral-100" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', letterSpacing: '-0.03em'}}>HL</div>
<div className="h-10 w-px bg-neutral-800/70"></div>
<div className="text-[28px] leading-none tracking-tight font-semibold text-neutral-100" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>
                  Hypurr<span className="text-cyan-400">Link</span>
</div>
</div>
</div>
<p className="mt-3 text-[12px] text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
              Compact usage: favicons, badges, or app chrome.
            </p>
</div>
</div>
</section>

<section className="px-6 md:px-10 mt-10 pb-16">
<div className="mx-auto max-w-6xl rounded-2xl border border-neutral-800/60 bg-neutral-900/30 p-6 md:p-8 hover:border-neutral-700 transition">
<div className="text-xs text-neutral-400 mb-4" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Scale &amp; Legibility</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="rounded-lg border border-neutral-900/80 bg-neutral-950 p-5">
<div className="text-[28px] leading-none tracking-tight font-semibold text-neutral-100" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>
                Hypurr<span className="text-cyan-400">Link</span>
</div>
<p className="mt-3 text-[11px] text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Display</p>
</div>
<div className="rounded-lg border border-neutral-900/80 bg-neutral-950 p-5">
<div className="text-[22px] leading-none tracking-tight font-semibold text-neutral-100" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>
                Hypurr<span className="text-cyan-400">Link</span>
</div>
<p className="mt-3 text-[11px] text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Heading</p>
</div>
<div className="rounded-lg border border-neutral-900/80 bg-neutral-950 p-5">
<div className="text-[18px] leading-none tracking-tight font-semibold text-neutral-100" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', letterSpacing: '-0.02em'}}>
                Hypurr<span className="text-cyan-400">Link</span>
</div>
<p className="mt-3 text-[11px] text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>UI</p>
</div>
<div className="rounded-lg border border-neutral-900/80 bg-neutral-950 p-5">
<div className="text-[14px] leading-none tracking-tight font-semibold text-neutral-100" style={{fontFamily: '\'Space Grotesk\', ui-sans-serif, system-ui', letterSpacing: '-0.015em'}}>
                Hypurr<span className="text-cyan-400">Link</span>
</div>
<p className="mt-3 text-[11px] text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Compact</p>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-10 pb-20">
<div className="mx-auto max-w-6xl rounded-2xl border border-neutral-800/60 bg-neutral-900/30 p-6 md:p-8 hover:border-neutral-700 transition">
<div className="flex items-center justify-between mb-4">
<div className="text-xs text-neutral-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Vector Preview</div>
<div className="text-[11px] text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>Letters only • Semibold • Tracking-tight</div>
</div>
<div className="rounded-lg border border-neutral-900/80 bg-neutral-950 p-6">
<div className="overflow-auto">
<svg className="w-[900px] max-w-none" viewbox="0 0 1400 260" xmlns="http://www.w3.org/2000/svg">
<rect fill="transparent" height="100%" width="100%"></rect>
<text fill="#e5e7eb" fontFamily="Space Grotesk, Inter, system-ui, -apple-system, Segoe UI, Roboto" fontSize="160" font-weight="600" letter-spacing="-0.02em" x="0" y="185">Hypurr</text>
<text fill="#67e8f9" fontFamily="Space Grotesk, Inter, system-ui, -apple-system, Segoe UI, Roboto" fontSize="160" font-weight="600" letter-spacing="-0.02em" x="725" y="185">Link</text>
</svg>
</div>
<p className="mt-4 text-[12px] text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
              This preview uses live fonts. For production, outline text during export if you need font independence.
            </p>
</div>
</div>
</section>

<footer className="px-6 md:px-10 pb-14">
<div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="text-sm text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
            Hypurr<span className="text-neutral-300">Link</span> — Crypto prime broker protocol
          </div>
<div className="flex items-center gap-2 text-xs text-neutral-500" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
<span className="px-2 py-1 rounded-md border border-neutral-800/60">Letters-only</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/60">Semibold</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/60">Tracking-tight</span>
</div>
</div>
</footer>
</div>

    </>
  );
}
