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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
phantom: {
base: '#FBFBFB', // Off-white
surface: '#FFFFFF',
border: '#E5E5E5',
text: '#171717', // Charcoal
muted: '#737373',
accent: '#064E3B', // Deep Green
}
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 bg-phantom-base/80 backdrop-blur-md border-b border-phantom-border">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-semibold tracking-tight uppercase" href="#">Phantom</a>
<a className="text-xs font-mono text-phantom-muted hover:text-phantom-text transition-colors" href="mailto:connect@phantomadvisory.com">
                connect@phantomadvisory.com
            </a>
</div>
</nav>

<main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto space-y-32">

<section className="space-y-8 fade-in">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] text-phantom-text">
                Strategic clarity for the<br className="hidden md:block"/> founder-led enterprise.
            </h1>
<p className="text-lg md:text-xl text-phantom-muted font-light max-w-2xl leading-relaxed">
                We design decision architecture and operational leverage for businesses that value longevity over noise.
            </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 px-5 py-2.5 bg-phantom-text text-white text-sm font-medium rounded hover:bg-neutral-800 transition-colors" href="mailto:connect@phantomadvisory.com">
                    Start a conversation
                    <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</section>

<section className="grid md:grid-cols-12 gap-12 border-t border-phantom-border pt-20">
<div className="md:col-span-4">
<span className="text-xs font-mono text-phantom-muted uppercase tracking-wider">The Friction</span>
</div>
<div className="md:col-span-8 space-y-8">
<h2 className="text-2xl font-medium tracking-tight">The paradox of scale.</h2>
<div className="space-y-6 text-phantom-muted leading-relaxed">
<p>
                        As service businesses grow, clarity often degrades. The systems that once enabled speed begin to create drag. Founders find themselves managing complexity rather than designing the future.
                    </p>
<p>
                        In response, the market prescribes more: more tools, more automation, more AI agents. But adding high-velocity tools to low-clarity processes only accelerates confusion.
                    </p>
<p>
                        True leverage requires a reduction of noise, not an addition of volume.
                    </p>
</div>
</div>
</section>

<section className="border-t border-phantom-border pt-20">
<div className="mb-12">
<span className="text-xs font-mono text-phantom-muted uppercase tracking-wider">Thesis</span>
<h2 className="mt-4 text-2xl font-medium tracking-tight">First principles.</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-phantom-surface border border-phantom-border p-6 rounded-sm space-y-4">
<span className="iconify text-phantom-muted" data-height="20" data-icon="lucide:focus" data-width="20"></span>
<h3 className="text-sm font-semibold">Clarity precedes systems</h3>
<p className="text-sm text-phantom-muted leading-relaxed">
                        We do not automate ambiguity. We define the decision-making logic first, ensuring systems serve the strategy, not the other way around.
                    </p>
</div>

<div className="bg-phantom-surface border border-phantom-border p-6 rounded-sm space-y-4">
<span className="iconify text-phantom-muted" data-height="20" data-icon="lucide:scissors" data-width="20"></span>
<h3 className="text-sm font-semibold">Subtraction is leverage</h3>
<p className="text-sm text-phantom-muted leading-relaxed">
                        Growth often requires removing friction rather than adding resources. We audit operations to remove what doesn't matter.
                    </p>
</div>

<div className="bg-phantom-surface border border-phantom-border p-6 rounded-sm space-y-4">
<span className="iconify text-phantom-muted" data-height="20" data-icon="lucide:cpu" data-width="20"></span>
<h3 className="text-sm font-semibold">AI as infrastructure</h3>
<p className="text-sm text-phantom-muted leading-relaxed">
                        Artificial intelligence is not a strategy; it is infrastructure. We deploy it quietly to handle low-variance tasks, freeing cognitive load.
                    </p>
</div>
</div>
</section>

<section className="grid md:grid-cols-12 gap-12 border-t border-phantom-border pt-20">
<div className="md:col-span-4">
<span className="text-xs font-mono text-phantom-muted uppercase tracking-wider">Engagement</span>
</div>
<div className="md:col-span-8">
<div className="space-y-12">

<div className="group">
<div className="flex items-baseline gap-4">
<span className="text-xs font-mono text-phantom-accent">01</span>
<h3 className="text-lg font-medium text-phantom-text">Calibration</h3>
</div>
<p className="mt-2 ml-9 text-phantom-muted text-sm max-w-md">
                            We map your current constraints and define the primary objective. We align on what success looks like three years out, not three months out.
                        </p>
</div>

<div className="group">
<div className="flex items-baseline gap-4">
<span className="text-xs font-mono text-phantom-accent">02</span>
<h3 className="text-lg font-medium text-phantom-text">Architecture</h3>
</div>
<p className="mt-2 ml-9 text-phantom-muted text-sm max-w-md">
                            We design the operational flows. This is a pen-and-paper phase where we remove redundancies and clarify decision rights.
                        </p>
</div>

<div className="group">
<div className="flex items-baseline gap-4">
<span className="text-xs font-mono text-phantom-accent">03</span>
<h3 className="text-lg font-medium text-phantom-text">Integration</h3>
</div>
<p className="mt-2 ml-9 text-phantom-muted text-sm max-w-md">
                            We apply technology and AI only where it creates meaningful leverage. We build the infrastructure to run quietly in the background.
                        </p>
</div>

<div className="group">
<div className="flex items-baseline gap-4">
<span className="text-xs font-mono text-phantom-accent">04</span>
<h3 className="text-lg font-medium text-phantom-text">Advisory</h3>
</div>
<p className="mt-2 ml-9 text-phantom-muted text-sm max-w-md">
                            A recurring cadence to revisit decisions, adjust strategy, and ensure the infrastructure scales with your ambition.
                        </p>
</div>
</div>
</div>
</section>

<section className="grid md:grid-cols-2 gap-12 border-t border-phantom-border pt-20">

<div className="space-y-6">
<span className="text-xs font-mono text-phantom-muted uppercase tracking-wider">The Fit</span>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-phantom-accent mt-0.5 shrink-0" data-icon="lucide:check" data-width="16"></span>
<span className="text-sm text-phantom-text">Founders viewing business as a long-term asset.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-phantom-accent mt-0.5 shrink-0" data-icon="lucide:check" data-width="16"></span>
<span className="text-sm text-phantom-text">Leaders who value deep work and precision.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-phantom-accent mt-0.5 shrink-0" data-icon="lucide:check" data-width="16"></span>
<span className="text-sm text-phantom-text">Businesses generating $1M—$10M in revenue.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-phantom-accent mt-0.5 shrink-0" data-icon="lucide:check" data-width="16"></span>
<span className="text-sm text-phantom-text">Those willing to pause before accelerating.</span>
</li>
</ul>
</div>

<div className="space-y-6">
<span className="text-xs font-mono text-phantom-muted uppercase tracking-wider">The Mismatch</span>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-phantom-muted mt-0.5 shrink-0 opacity-50" data-icon="lucide:x" data-width="16"></span>
<span className="text-sm text-phantom-muted">Founders looking for "growth hacks" or viral tactics.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-phantom-muted mt-0.5 shrink-0 opacity-50" data-icon="lucide:x" data-width="16"></span>
<span className="text-sm text-phantom-muted">Early-stage startups still searching for product-market fit.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-phantom-muted mt-0.5 shrink-0 opacity-50" data-icon="lucide:x" data-width="16"></span>
<span className="text-sm text-phantom-muted">Organizations that prioritize speed over stability.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-phantom-muted mt-0.5 shrink-0 opacity-50" data-icon="lucide:x" data-width="16"></span>
<span className="text-sm text-phantom-muted">Those seeking a vendor to simply "do the tech."</span>
</li>
</ul>
</div>
</section>

<section className="grid md:grid-cols-12 gap-12 border-t border-phantom-border pt-20">
<div className="md:col-span-4">
<span className="text-xs font-mono text-phantom-muted uppercase tracking-wider">About</span>
</div>
<div className="md:col-span-8 space-y-6">
<p className="text-phantom-muted leading-relaxed">
                    Phantom exists to protect the founder's intent. In a world obsessed with doing more, we are obsessed with clarity.
                </p>
<p className="text-phantom-muted leading-relaxed">
                    We act not as an outsourced agency, but as a strategic thinking partner. We sit on your side of the table, helping you distinguish between the signal of high-leverage work and the noise of administrative drag.
                </p>
<p className="text-phantom-muted leading-relaxed">
                    We don't build systems for the sake of systems. We build them to buy you time.
                </p>
</div>
</section>

<footer className="pt-32 pb-12 border-t border-phantom-border mt-20">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div className="space-y-6">
<h2 className="text-2xl font-medium tracking-tight">Ready to clear the noise?</h2>
<p className="text-phantom-muted text-sm max-w-sm">
                        We accept a limited number of advisory engagements per year to ensure depth of focus.
                    </p>
<a className="inline-flex items-center gap-2 text-phantom-accent font-medium hover:text-phantom-text transition-colors border-b border-phantom-accent hover:border-phantom-text pb-0.5" href="mailto:connect@phantomadvisory.com">
                        Start a conversation
                    </a>
</div>
<div className="text-left md:text-right space-y-2">
<p className="text-xs text-phantom-muted">© 2024 Phantom Advisory.</p>
<p className="text-xs text-phantom-muted">All rights reserved.</p>
</div>
</div>
</footer>
</main>

    </>
  );
}
