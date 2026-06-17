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



        // Flashlight Effect
        const cards = document.querySelectorAll(".flashlight-card");
        
        document.addEventListener("mousemove", (e) => {
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        });

        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, observerOptions);

        document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-stone-800 bg-zinc-900/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900">
<span className="font-syne text-lg font-bold tracking-tighter">SB</span>
</div>
<span className="font-syne text-sm font-semibold tracking-tight text-white">Second Brain</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#infrastructure">Infrastructure</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium hover:text-white transition-colors" href="#">Login</a>
<a className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#292524_1px,transparent_1px),linear-gradient(to_bottom,#292524_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
</div>
<div className="container mx-auto max-w-6xl px-6 relative z-10 text-center">
<div className="hero-clip inline-flex items-center gap-2 rounded-full border border-stone-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-400 mb-8 backdrop-blur-sm shadow-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
                v2.0 Now Available
            </div>
<h1 className="hero-clip font-syne text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Your Digital<br/>Second Brain
            </h1>
<p className="hero-clip mx-auto max-w-2xl text-lg md:text-2xl text-zinc-400 mb-10 leading-relaxed font-light">
                Capture, organize, and retrieve your ideas with a premium infrastructure-grade knowledge management system.
            </p>
<div className="hero-clip flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="group relative flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-zinc-900 hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Go to Dashboard
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="lucide:arrow-right" strokeWidth="2" width="18"></iconify-icon>
</button>
<button className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-stone-800 bg-zinc-900/50 px-8 text-base font-medium text-zinc-300 hover:bg-stone-800/50 hover:text-white transition-all backdrop-blur-sm">
                    Documentation
                    <iconify-icon height="18" icon="lucide:book" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="relative mx-auto max-w-4xl h-[300px] md:h-[400px] w-full rounded-2xl border border-stone-800 bg-zinc-900/30 backdrop-blur-sm shadow-2xl overflow-hidden flashlight-card hero-clip" id="hero-diagram">

<div className="absolute inset-0 flex items-center justify-center">

<div className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-stone-700 bg-zinc-800 shadow-xl">
<iconify-icon className="text-white" height="32" icon="lucide:brain-circuit" width="32"></iconify-icon>
</div>

<div className="absolute inset-0 z-0">
<svg className="h-full w-full noodle-svg" preserveaspectratio="xMidYMid meet" viewbox="0 0 800 400">

<path className="opacity-30" d="M 200 100 Q 300 100 400 200" fill="none" id="path1" stroke="#44403c" strokeWidth="1.5"></path>
<path className="opacity-30" d="M 200 300 Q 300 300 400 200" fill="none" id="path2" stroke="#44403c" strokeWidth="1.5"></path>
<path className="opacity-30" d="M 600 100 Q 500 100 400 200" fill="none" id="path3" stroke="#44403c" strokeWidth="1.5"></path>
<path className="opacity-30" d="M 600 300 Q 500 300 400 200" fill="none" id="path4" stroke="#44403c" strokeWidth="1.5"></path>

<circle className="beam-particle" fill="white" r="3">
<animatemotion calcmode="linear" dur="3s" keypoints="0;1" keytimes="0;1" repeatcount="indefinite">
<mpath href="#path1"></mpath>
</animatemotion>
</circle>
<circle className="beam-particle" fill="white" r="3" style={{animationDelay: '1.5s'}}>
<animatemotion calcmode="linear" dur="3.5s" keypoints="0;1" keytimes="0;1" repeatcount="indefinite">
<mpath href="#path2"></mpath>
</animatemotion>
</circle>
<circle className="beam-particle" fill="white" r="3" style={{animationDelay: '0.5s'}}>
<animatemotion calcmode="linear" dur="4s" keypoints="1;0" keytimes="0;1" repeatcount="indefinite">
<mpath href="#path3"></mpath>
</animatemotion>
</circle>
<circle className="beam-particle" fill="white" r="3" style={{animationDelay: '2s'}}>
<animatemotion calcmode="linear" dur="3.2s" keypoints="1;0" keytimes="0;1" repeatcount="indefinite">
<mpath href="#path4"></mpath>
</animatemotion>
</circle>
</svg>
</div>

<div className="absolute left-[15%] top-[20%] p-3 rounded-lg border border-stone-800 bg-zinc-900/80">
<iconify-icon className="text-zinc-400" icon="lucide:link" width="20"></iconify-icon>
</div>
<div className="absolute left-[15%] bottom-[20%] p-3 rounded-lg border border-stone-800 bg-zinc-900/80">
<iconify-icon className="text-zinc-400" icon="lucide:file-text" width="20"></iconify-icon>
</div>

<div className="absolute right-[15%] top-[20%] p-3 rounded-lg border border-stone-800 bg-zinc-900/80">
<iconify-icon className="text-zinc-400" icon="lucide:share-2" width="20"></iconify-icon>
</div>
<div className="absolute right-[15%] bottom-[20%] p-3 rounded-lg border border-stone-800 bg-zinc-900/80">
<iconify-icon className="text-zinc-400" icon="lucide:database" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="features">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 reveal">
<h2 className="font-syne text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Engineered for<br/>Knowledge</h2>
<p className="text-lg text-zinc-400 max-w-xl">A complete system designed to ingest, process, and serve your intellectual assets with zero friction.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group flashlight-card rounded-xl p-8 transition-all hover:-translate-y-1 reveal">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-stone-800 bg-zinc-800 text-white shadow-sm">
<iconify-icon height="24" icon="lucide:zap" width="24"></iconify-icon>
</div>
<div className="mb-3 inline-flex items-center rounded-full border border-stone-800 bg-zinc-900/50 px-2.5 py-0.5 text-xs font-medium text-white">
                        Smart Capture
                    </div>
<h3 className="font-syne mb-3 text-xl font-semibold tracking-tight text-white">AI-Powered Knowledge Ingestion</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                        Stop manually tagging. Our vector database engine analyzes your links, videos, and articles to generate descriptions and categorize them automatically upon save.
                    </p>
</div>

<div className="group flashlight-card rounded-xl p-8 transition-all hover:-translate-y-1 reveal" style={{transitionDelay: '100ms'}}>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-stone-800 bg-zinc-800 text-white shadow-sm">
<iconify-icon height="24" icon="lucide:server" width="24"></iconify-icon>
</div>
<div className="mb-3 inline-flex items-center rounded-full border border-stone-800 bg-zinc-900/50 px-2.5 py-0.5 text-xs font-medium text-white">
                        True Transactional
                    </div>
<h3 className="font-syne mb-3 text-xl font-semibold tracking-tight text-white">Infrastructure-Grade Reliability</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                        Built on Supabase PostgreSQL with Prisma ORM connection pooling. Your data rests on industry-standard, scalable infrastructure designed for performance and security.
                    </p>
</div>

<div className="group flashlight-card rounded-xl p-8 transition-all hover:-translate-y-1 reveal" style={{transitionDelay: '200ms'}}>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-stone-800 bg-zinc-800 text-white shadow-sm">
<iconify-icon height="24" icon="lucide:globe" width="24"></iconify-icon>
</div>
<div className="mb-3 inline-flex items-center rounded-full border border-stone-800 bg-zinc-900/50 px-2.5 py-0.5 text-xs font-medium text-white">
                        Collaboration
                    </div>
<h3 className="font-syne mb-3 text-xl font-semibold tracking-tight text-white">Share Your Brain With The World</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                        Curate collections and generate unique, hashed public links. Share your structured knowledge base without exposing your private dashboard.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-stone-800 bg-zinc-900/30">
<div className="mx-auto max-w-4xl px-6 text-center reveal">
<div className="mb-8 flex justify-center">
<iconify-icon className="text-stone-700" icon="lucide:quote" width="32"></iconify-icon>
</div>
<h3 className="font-syne text-2xl md:text-4xl font-semibold leading-tight text-white mb-8">
                "Second Brain transformed how I handle information overload. It's not just a notes app; it's a resilient infrastructure for my entire intellectual output."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="h-10 w-10 rounded-full bg-zinc-700 overflow-hidden flex items-center justify-center text-xs font-bold text-white">
                    EL
                </div>
<div className="text-left">
<div className="text-sm font-semibold text-white">Elena R.</div>
<div className="text-xs text-zinc-500">Research Scientist</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-syne text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Simple, Transparent Pricing</h2>
<p className="text-zinc-400">Invest in your mind.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="flashlight-card rounded-2xl p-8 reveal">
<div className="mb-4 text-sm font-medium text-zinc-400">Hobby</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="font-syne text-4xl font-bold text-white">$0</span>
<span className="text-zinc-500">/month</span>
</div>
<p className="text-sm text-zinc-400 mb-8 h-10">Perfect for getting started with personal knowledge management.</p>
<ul className="space-y-4 mb-8 text-sm text-zinc-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> 100 captured items
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Basic AI categorization
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Mobile app access
                        </li>
</ul>
<button className="w-full rounded-lg border border-stone-700 bg-zinc-800 py-3 text-sm font-semibold text-white hover:bg-zinc-700 transition-colors">Start for Free</button>
</div>

<div className="flashlight-card rounded-2xl p-8 relative overflow-hidden reveal">
<div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
<div className="mb-4 text-sm font-medium text-white">Professional</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="font-syne text-4xl font-bold text-white">$12</span>
<span className="text-zinc-500">/month</span>
</div>
<p className="text-sm text-zinc-400 mb-8 h-10">For researchers, writers, and lifelong learners needing infinite scale.</p>
<ul className="space-y-4 mb-8 text-sm text-zinc-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Unlimited capture
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Advanced Vector Search
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Public Sharing &amp; API Access
                        </li>
</ul>
<button className="w-full rounded-lg bg-white py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors">Upgrade to Pro</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-stone-700 to-transparent opacity-50"></div>
<div className="mx-auto max-w-3xl px-6 text-center relative z-10 reveal">
<h2 className="font-syne text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to organize your<br/>digital life?</h2>
<div className="flex justify-center">
<button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-zinc-900 hover:bg-zinc-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                    Get Started for Free
                    <iconify-icon className="text-zinc-900" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="border-t border-stone-800 bg-zinc-950 py-12 text-sm">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-zinc-800 text-zinc-300">
<span className="font-syne text-xs font-bold">SB</span>
</div>
<span className="text-zinc-500">© 2023 Second Brain Inc.</span>
</div>
<div className="flex gap-8 text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</footer>


    </>
  );
}
