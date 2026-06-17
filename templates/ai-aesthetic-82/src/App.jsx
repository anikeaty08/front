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



        // Initialize Icons
        lucide
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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#8A2BE2] opacity-10 blur-[120px] pointer-events-none z-0 rounded-full mix-blend-screen"></div>

<header className="fixed top-0 w-full z-50 border-b bg-[#05050A]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#05050A]/60 border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<img alt="GlowAudit" className="h-6 w-auto object-contain opacity-90" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="hidden flex items-center gap-2 font-medium tracking-tight text-lg font-quicksand text-white">
<div className="w-5 h-5 rounded bg-gradient-to-br from-[#8A2BE2] to-[#3A86FF] flex items-center justify-center text-[10px] font-bold font-quicksand text-white">G</div>
                    GlowAudit
                </div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-[#6B7280]">
<a className="transition-colors duration-200 font-quicksand hover:text-white" href="#features">Methodology</a>
<a className="transition-colors duration-200 font-quicksand hover:text-white" href="#process">Process</a>
<a className="transition-colors duration-200 font-quicksand hover:text-white" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-sm text-[#F2F2F5] hidden sm:block font-quicksand hover:text-white" href="#">Log in</a>
<a className="group relative inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-[#F2F2F5] transition-all duration-200 bg-white/5 hover:bg-white/10 border-white/10" href="#">
<span className="relative z-10 font-quicksand">Start Audit</span>
<i className="w-4 h-4 text-[#8A2BE2] group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</header>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3A86FF]/30 bg-[#3A86FF]/10 text-[#3A86FF] text-xs font-medium mb-8 animate-fade-in font-quicksand">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3A86FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#3A86FF]"></span>
</span>
                AI Diagnostic Engine v2.4 Online
            </div>
<h1 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b tracking-tight leading-[1.1] mb-6 font-quicksand font-medium from-white via-white to-white/60" style={{color: 'rgba(0, 0, 0, 0)', position: 'static', transition: 'outline 0.1s ease-in-out'}}>
                Quantify your <br/>
                aesthetic potential.
            </h1>
<p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-10 font-light font-quicksand">
                GlowAudit uses computer vision to map 120+ facial landmarks. 
                Get a blunt, data-driven report on your symmetry, skin health, and style—no sugarcoating.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#F2F2F5] text-[#05050A] hover:scale-[1.02] transition-all duration-200 font-medium text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] font-quicksand hover:bg-white">
<i className="w-4 h-4" data-lucide="scan-face"></i>
                    Upload Photo
                </button>
<button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#101018] border text-[#F2F2F5] hover:border-[#8A2BE2]/50 transition-all duration-200 font-medium text-sm flex items-center justify-center gap-2 font-quicksand border-white/10">
                    View Sample Report
                </button>
</div>
</section>

<section className="mt-24 max-w-5xl mx-auto px-6">
<div className="relative rounded-2xl border bg-[#101018]/50 backdrop-blur-sm overflow-hidden shadow-2xl border-white/10 shadow-black/50">

<div className="h-10 border-b bg-[#05050A]/80 flex items-center px-4 gap-2 border-white/10">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 text-xs text-[#6B7280] font-mono font-quicksand">audit_sequence_init.js</div>
</div>

<div className="p-1 grid grid-cols-1 md:grid-cols-3 gap-1 h-[400px] md:h-[500px]">

<div className="bg-[#05050A] border rounded-lg p-6 flex flex-col gap-6 border-white/5">
<div>
<div className="text-xs text-[#6B7280] uppercase tracking-wider mb-3 font-quicksand">Analysis Matrix</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center text-sm">
<span className="text-[#F2F2F5] font-quicksand">Symmetry</span>
<span className="text-[#00D37F] font-mono font-quicksand">94.2%</span>
</div>
<div className="w-full h-1 rounded-full overflow-hidden bg-white/5">
<div className="bg-[#00D37F] w-[94%] h-full rounded-full"></div>
</div>
</div>
<div className="flex flex-col gap-3 mt-4">
<div className="flex justify-between items-center text-sm">
<span className="text-[#F2F2F5] font-quicksand">Skin Texture</span>
<span className="text-[#3A86FF] font-mono font-quicksand">88.1%</span>
</div>
<div className="w-full h-1 rounded-full overflow-hidden bg-white/5">
<div className="bg-[#3A86FF] w-[88%] h-full rounded-full"></div>
</div>
</div>
<div className="flex flex-col gap-3 mt-4">
<div className="flex justify-between items-center text-sm">
<span className="text-[#F2F2F5] font-quicksand">Jaw Definition</span>
<span className="text-[#8A2BE2] font-mono font-quicksand">72.5%</span>
</div>
<div className="w-full h-1 rounded-full overflow-hidden bg-white/5">
<div className="bg-[#8A2BE2] w-[72%] h-full rounded-full"></div>
</div>
</div>
</div>
<div className="mt-auto p-4 rounded border bg-white/[0.02] border-white/5">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#3A86FF] shrink-0 mt-0.5" data-lucide="alert-circle"></i>
<div>
<div className="text-sm font-medium text-[#F2F2F5] mb-1 font-quicksand">Optimization Detected</div>
<p className="text-xs text-[#6B7280] leading-relaxed font-quicksand">
                                        Upper-third asymmetry detected. Recommendation: Change hair parting to left-bias to balance visual weight.
                                    </p>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-[#05050A] border rounded-lg relative overflow-hidden flex items-center justify-center group border-white/5">

<div className="scan-line"></div>

<svg className="w-64 h-auto opacity-40 stroke-[#F2F2F5] stroke-[0.5] fill-none" viewbox="0 0 200 250">
<path d="M100 20 C 60 20, 30 60, 30 100 C 30 160, 60 220, 100 230 C 140 220, 170 160, 170 100 C 170 60, 140 20, 100 20 Z"></path>
<path d="M60 90 Q 75 80, 90 90"></path>
<path d="M110 90 Q 125 80, 140 90"></path>
<path d="M95 130 L 100 140 L 105 130"></path>
<path d="M70 170 Q 100 190, 130 170"></path>

<circle className="fill-[#3A86FF] animate-pulse" cx="60" cy="90" r="2"></circle>
<circle className="fill-[#3A86FF] animate-pulse" cx="140" cy="90" r="2" style={{animationDelay: '0.1s'}}></circle>
<circle className="fill-[#8A2BE2] animate-pulse" cx="100" cy="140" r="2" style={{animationDelay: '0.2s'}}></circle>
<circle className="fill-[#00D37F] animate-pulse" cx="30" cy="100" r="2" style={{animationDelay: '0.3s'}}></circle>
<circle className="fill-[#00D37F] animate-pulse" cx="170" cy="100" r="2" style={{animationDelay: '0.4s'}}></circle>
</svg>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" style={{}}></div>

<div className="absolute top-8 right-8 px-2 py-1 rounded border border-[#3A86FF]/30 bg-[#3A86FF]/10 text-[10px] text-[#3A86FF] font-mono uppercase font-quicksand">
                            Target Acquired
                        </div>
<div className="absolute bottom-8 left-8 px-2 py-1 rounded border text-[10px] text-[#6B7280] font-mono uppercase font-quicksand border-white/10 bg-black/50">
                            XYZ: 44.2, 12.9, 88.1
                        </div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-[#8A2BE2] blur-[100px] opacity-20 -z-10"></div>
</section>

<section className="max-w-6xl mx-auto px-6 py-32" id="features">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-6 rounded-xl bg-[#101018] border transition-colors duration-300 relative overflow-hidden border-white/5 hover:border-white/10">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-[#8A2BE2]/10 flex items-center justify-center mb-6 text-[#8A2BE2]">
<i className="w-6 h-6" data-lucide="microscope"></i>
</div>
<h3 className="text-xl font-medium text-[#F2F2F5] mb-3 font-quicksand">Objective Analysis</h3>
<p className="text-sm text-[#6B7280] leading-relaxed font-quicksand">
                        Humans are biased. Our AI isn't. We compare your features against a database of 50 million aesthetic data points to find where you stand.
                    </p>
</div>

<div className="group p-6 rounded-xl bg-[#101018] border transition-colors duration-300 relative overflow-hidden border-white/5 hover:border-white/10">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3A86FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-[#3A86FF]/10 flex items-center justify-center mb-6 text-[#3A86FF]">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-[#F2F2F5] mb-3 font-quicksand">Actionable Glow-Ups</h3>
<p className="text-sm text-[#6B7280] leading-relaxed font-quicksand">
                        Don't just get rated. Get a roadmap. We provide specific product recommendations, styling tips, and haircut suggestions tailored to your geometry.
                    </p>
</div>

<div className="group p-6 rounded-xl bg-[#101018] border transition-colors duration-300 relative overflow-hidden border-white/5 hover:border-white/10">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D37F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-[#00D37F]/10 flex items-center justify-center mb-6 text-[#00D37F]">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-[#F2F2F5] mb-3 font-quicksand">Private by Design</h3>
<p className="text-sm text-[#6B7280] leading-relaxed font-quicksand">
                        Your face data is processed ephemerally. We don't store your photos or sell your biometric data. Analysis happens, then it vanishes.
                    </p>
</div>
</div>
</section>

<section className="border-y bg-[#08080D] border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6 py-24">
<div className="flex flex-col md:flex-row items-start justify-between gap-12">
<div className="md:w-1/3">
<h2 className="text-3xl tracking-tight text-[#F2F2F5] mb-4 font-quicksand font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>How the audit works</h2>
<p className="text-[#6B7280] text-sm leading-relaxed font-quicksand">
                            Three simple steps to unlock your aesthetic potential. No account required for initial scan.
                        </p>
</div>
<div className="md:w-2/3 grid grid-cols-1 gap-8">

<div className="flex gap-6">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#8A2BE2] text-[#8A2BE2] flex items-center justify-center font-mono text-sm font-bold mt-1 font-quicksand">01</div>
<div>
<h4 className="text-lg font-medium text-[#F2F2F5] mb-2 font-quicksand">Upload or Capture</h4>
<p className="text-sm text-[#6B7280] leading-relaxed font-quicksand">Take a selfie in natural lighting. Center your face. Remove glasses for better accuracy. Our system validates photo quality instantly.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex-shrink-0 w-8 h-8 rounded-full border text-[#6B7280] flex items-center justify-center font-mono text-sm font-bold mt-1 font-quicksand border-white/10">02</div>
<div className="">
<h4 className="text-lg font-medium text-[#F2F2F5] mb-2 font-quicksand">Processing Analysis</h4>
<p className="text-sm text-[#6B7280] leading-relaxed font-quicksand">The AI breaks down your face into 12 regions. It checks skin quality, canthal tilt, jawline projection, and hair density.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex-shrink-0 w-8 h-8 rounded-full border text-[#6B7280] flex items-center justify-center font-mono text-sm font-bold mt-1 font-quicksand border-white/10">03</div>
<div>
<h4 className="text-lg font-medium text-[#F2F2F5] mb-2 font-quicksand">Receive Report</h4>
<p className="text-sm text-[#6B7280] leading-relaxed font-quicksand">Get your comprehensive PDF report. Includes your ratings, percentile placement, and a checklist of improvements.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-[#3A86FF] opacity-10 blur-[100px] pointer-events-none rounded-full"></div>
<h2 className="text-4xl md:text-5xl tracking-tight text-[#F2F2F5] mb-6 relative z-10 font-quicksand font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                Ready for the truth?
            </h2>
<p className="text-[#6B7280] mb-10 max-w-lg mx-auto relative z-10 font-quicksand">
                Join 140,000+ users who have optimized their appearance with data.
            </p>
<div className="relative z-10">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[#05050A] bg-[#F2F2F5] rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(242,242,245,0.2)] font-quicksand hover:bg-white" href="#">
                    Start Free Audit
                </a>
<p className="mt-4 text-xs text-[#6B7280] font-quicksand">No credit card required · Results in 30 seconds</p>
</div>
</section>
</main>
<footer className="border-t bg-[#05050A] py-12 border-white/5">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<img alt="GlowAudit" className="h-5 w-auto" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<span className="hidden text-sm font-medium text-[#F2F2F5] font-quicksand">GlowAudit</span>
</div>
<div className="flex gap-8 text-xs text-[#6B7280]">
<a className="hover:text-[#F2F2F5] transition-colors font-quicksand" href="#">Privacy Policy</a>
<a className="hover:text-[#F2F2F5] transition-colors font-quicksand" href="#">Terms of Service</a>
<a className="hover:text-[#F2F2F5] transition-colors font-quicksand" href="#">Methodology</a>
</div>
<div className="text-xs text-[#6B7280] font-quicksand">
                © 2024 GlowAudit AI. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
