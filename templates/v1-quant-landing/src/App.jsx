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
neutral: {
850: '#1f1f1f',
900: '#171717',
925: '#121212',
950: '#0a0a0a',
}
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        function handleRequest(e) {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            const form = document.getElementById('access-form');
            const successView = document.getElementById('success-view');

            // Loading state
            btn.innerHTML = '<iconify-icon icon="lucide:loader-2" width="16" class="animate-spin"></iconify-icon>';
            btn.classList.add('opacity-80', 'cursor-not-allowed');
            
            // Simulate network request
            setTimeout(() => {
                form.style.opacity = '0';
                form.style.pointerEvents = 'none';
                successView.classList.remove('hidden');
            }, 1000);
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
      

<div className="fixed inset-0 z-0 bg-grid opacity-[0.07] pointer-events-none"></div>

<div className="fixed top-[-20%] left-[20%] w-[600px] h-[600px] bg-white opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-sm font-semibold tracking-tight text-white font-geist">Quant</span>
</div>
<div className="flex items-center gap-4">
<span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                    Private Beta
                </span>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6 max-w-3xl mx-auto">
<div className="flex flex-col items-start gap-8">

<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900/50 border border-white/10 rounded-full animate-slide-up">
<span className="text-[10px] font-medium text-neutral-400 uppercase tracking-wide font-geist">Private beta · Limited access</span>
</div>

<h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter text-white leading-[1.1] animate-slide-up delay-100 font-geist font-semibold">
                Onchain Finance,<br/>
<span className="text-neutral-500 font-geist font-semibold">the way it should be.</span>
</h1>
<p className="md:text-base leading-relaxed animate-slide-up delay-200 text-sm font-light text-neutral-400 font-geist max-w-md">
                We handle complexity. You get results. Built for those who are tired of broken UX.
            </p>

<div className="animate-slide-up delay-300">
<a className="group inline-flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-neutral-200 hover:w-[170px] font-medium text-neutral-950 bg-white w-[165px] h-10 rounded-md pr-6 pl-6 relative" href="/#request-access">
<span className="text-xs font-semibold tracking-wide font-geist mr-2">Request access</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</main>

<section className="bg-neutral-950/30 border-white/5 border-t pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4 font-geist">The Friction</h2>
<h3 className="text-xl sm:text-2xl text-white tracking-tight font-geist font-semibold">DeFi asks too much from us.</h3>
<p className="mt-4 text-sm text-neutral-400 font-light max-w-lg font-geist">
                    Every action comes with a pile of decisions. Most products make you figure this out. Quant doesn’t.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800 rounded-lg overflow-hidden">
<div className="bg-[#080808] p-6 group hover:bg-[#0a0a0a] transition-colors">
<iconify-icon className="text-neutral-600 mb-3" icon="lucide:git-fork" width="20"></iconify-icon>
<div className="text-sm font-medium text-neutral-200 font-geist">Which route?</div>
</div>
<div className="bg-[#080808] p-6 group hover:bg-[#0a0a0a] transition-colors">
<iconify-icon className="text-neutral-600 mb-3" icon="lucide:droplets" width="20"></iconify-icon>
<div className="text-sm font-medium text-neutral-200 font-geist">Which pool?</div>
</div>
<div className="bg-[#080808] p-6 group hover:bg-[#0a0a0a] transition-colors">
<iconify-icon className="text-neutral-600 mb-3" icon="lucide:link" width="20"></iconify-icon>
<div className="text-sm font-medium text-neutral-200 font-geist">Which chain?</div>
</div>
<div className="bg-[#080808] p-6 group hover:bg-[#0a0a0a] transition-colors">
<iconify-icon className="text-neutral-600 mb-3" icon="lucide:shield-alert" width="20"></iconify-icon>
<div className="text-sm font-medium text-neutral-200 font-geist">Risk trade-off?</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-3xl mx-auto px-6">
<div className="border-l border-neutral-800 pl-8 py-2">
<h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-6 font-geist">Opinionated by Design</h2>
<div className="space-y-6">
<p className="text-lg text-white font-medium tracking-tight leading-relaxed font-geist">
                        We take on the complexity — routing, execution logic, and trade-offs — so you don’t have to do any manual work.
                    </p>
<p className="text-sm text-neutral-400 font-light leading-relaxed font-geist">
                        You decide <span className="text-white font-geist">what</span> you want to do.
                        Quant decides <span className="text-white font-geist">how</span> to do it well.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/10 border-y border-white/5">
<div className="max-w-3xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2 font-geist">Quant doesn’t feel like DeFi.</h3>
<p className="text-sm text-neutral-500 font-geist">Like the system understands what you want — and just executes.</p>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 text-sm text-neutral-300">
<iconify-icon className="text-neutral-700" icon="lucide:circle" width="8"></iconify-icon>
<span className="tracking-wide font-geist">Smooth</span>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-300">
<iconify-icon className="text-neutral-700" icon="lucide:circle" width="8"></iconify-icon>
<span className="tracking-wide font-geist">Predictable</span>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-300">
<iconify-icon className="text-neutral-700" icon="lucide:circle" width="8"></iconify-icon>
<span className="tracking-wide font-geist">Calm</span>
</div>
<div className="flex items-center gap-4 text-sm text-white font-medium">
<iconify-icon className="text-white" icon="lucide:check-circle-2" width="14"></iconify-icon>
<span className="tracking-wide font-geist">Intentional</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6">
<div className="glass-panel p-8 rounded-xl">
<div className="flex flex-col sm:flex-row gap-8 justify-between items-start">
<div className="max-w-sm">
<h3 className="text-base font-medium text-white mb-2 font-geist">Powered by Intents</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-4 font-geist">
                            Most DeFi apps make you decide how to do things. Quant lets you decide what you want to achieve.
                        </p>
<p className="text-xs text-neutral-400 leading-relaxed font-geist">
                            Under the hood, execution is powered by intents, so you stop worrying about routes, slippage, or mechanics. On the surface, everything just works.
                        </p>
</div>
<div className="flex flex-col gap-3 w-full sm:w-auto min-w-[200px]">
<div className="flex items-center justify-between text-[10px] text-neutral-500 uppercase tracking-widest border-b border-white/5 pb-2">
<span className="font-geist">Benchmarks</span>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400 font-geist">
<iconify-icon className="text-neutral-600" icon="lucide:x" width="12"></iconify-icon>
                            Fragile cross-chain
                        </div>
<div className="flex items-center gap-2 text-xs text-neutral-400 font-geist">
<iconify-icon className="text-neutral-600" icon="lucide:x" width="12"></iconify-icon>
                            Slippage UX failure
                        </div>
<div className="flex items-center gap-2 text-xs text-white mt-2 font-geist">
<iconify-icon icon="lucide:arrow-up" width="12"></iconify-icon>
                            Quant raises the bar
                        </div>
</div>
</div>
</div>

<div className="mt-8 text-center sm:text-left">
<p className="text-[11px] text-neutral-600 font-mono font-geist">
                    Built by a team with deep knowledge in cross-chain execution. This isn't an experiment.
                </p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#080808]" id="request-access">
<div className="max-w-xl mx-auto px-6">

<div className="text-center mb-10">
<div className="inline-block mb-4">
<div className="w-1 h-1 bg-white rounded-full mx-auto mb-2"></div>
</div>
<h2 className="text-2xl text-white tracking-tight mb-3 font-geist font-semibold">Private beta access</h2>
<p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm mx-auto font-geist">
                    We’re onboarding a small group of crypto-native users who are frustrated with the current experience and want to shape what comes next.
                </p>
</div>

<div className="relative">

<div className="hidden absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#080808] animate-fade-in text-center" id="success-view">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white border border-white/10">
<iconify-icon icon="lucide:check" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-geist">You're in review.</h3>
<p className="text-sm text-neutral-400 mb-8 max-w-xs font-geist">
                        If selected, we’ll reach out directly. In the meantime, help set a higher bar for DeFi UX.
                    </p>
<a className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DA1F2]/10 text-[#1DA1F2] border border-[#1DA1F2]/20 rounded-md text-xs font-medium hover:bg-[#1DA1F2]/20 transition-colors font-geist" href="#">
<iconify-icon icon="lucide:twitter" width="14"></iconify-icon>
                        Share on X
                    </a>
<p className="mt-6 text-[10px] text-neutral-600 font-geist">"Good products spread by word of mouth."</p>
</div>

<form className="space-y-8 relative z-10" id="access-form" onsubmit="handleRequest(event)">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="group">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2 font-geist">Telegram</label>
<input className="w-full input-base input-quant text-sm py-2 text-white placeholder-neutral-700" placeholder="@yourhandle" required="" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2 font-geist">X (Twitter)</label>
<input className="w-full input-base input-quant text-sm py-2 text-white placeholder-neutral-700" placeholder="@yourhandle" required="" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2 font-geist">Open Question</label>
<input className="w-full input-base input-quant text-sm py-2 text-white placeholder-neutral-700" placeholder="What’s the most frustrating thing about DeFi?" required="" type="text"/>
</div>
<div className="pt-2">
<button className="w-full h-11 bg-white text-black text-xs font-semibold tracking-wide rounded-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 font-geist" id="submit-btn" type="submit">
                            REQUEST ACCESS
                        </button>
<p className="text-[10px] text-neutral-600 text-center mt-3 font-geist">We manually accept every submission.</p>
</div>
</form>
</div>
</div>
</section>

<footer className="py-12 bg-neutral-950 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="text-[11px] text-neutral-500 font-medium font-geist">
                Quant
            </div>
<div className="flex items-center gap-6">
<span className="text-[10px] text-neutral-600 font-mono font-geist">BUILT BY TNT LABS</span>
<div className="w-1 h-1 bg-neutral-800 rounded-full"></div>
<span className="text-[10px] text-neutral-600 font-mono uppercase font-geist">Private Beta</span>
</div>
</div>
</footer>

<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
