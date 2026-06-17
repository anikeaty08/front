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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit">
<div className="mx-auto px-2">
<div className="flex items-center justify-between bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-full px-5 py-2.5 gap-8 shadow-2xl shadow-black/50">
<a className="flex items-center gap-2" href="#">
<i className="w-5 h-5 text-violet-500" data-lucide="mic" strokeWidth="1.5"></i>
<span className="font-semibold text-lg tracking-tight text-white">SurveyMate</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-medium" href="#">About</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-medium" href="#">Features</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-medium" href="#">Pricing</a>
</div>
<a className="bg-violet-600 hover:bg-violet-500 text-white text-xs px-5 py-2.5 rounded-full font-semibold transition-colors duration-200 shadow-lg shadow-violet-500/20" href="#">
                    Start Free Trial
                </a>
</div>
</div>
</nav>

<main className="flex-grow pt-40 pb-20 md:pt-52 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-white mb-8">
                The truly <span className="font-display italic font-normal text-neutral-300">Voice-Powered</span><br/> survey revolution.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Say goodbye to high drop-off rates and typed forms. Collect richer, natural responses with AI voice conversations and analyze them instantly with our RAG chat.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-violet-600 hover:bg-violet-500 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all duration-200 shadow-xl shadow-violet-500/20" href="#">
                    Start Free Trial
                </a>
<a className="w-full sm:w-auto bg-transparent border border-neutral-800 hover:bg-neutral-900 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all duration-200" href="#">
                    See how it works
                </a>
</div>
</div>

<div className="mt-24 max-w-5xl mx-auto">
<p className="text-sm text-neutral-500 text-center mb-8 font-medium">Trusted by innovative research teams at</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="triangle" strokeWidth="1.5"></i><span className="text-xl font-semibold tracking-tight">AcmeCorp</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="hexagon" strokeWidth="1.5"></i><span className="text-xl font-semibold tracking-tight">Globex</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="circle" strokeWidth="1.5"></i><span className="text-xl font-semibold tracking-tight">Soylent</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="square" strokeWidth="1.5"></i><span className="text-xl font-semibold tracking-tight">Initech</span></div>
</div>
</div>
</main>

<section className="py-20 px-6">
<div className="max-w-5xl mx-auto">
<div className="bg-neutral-900/50 border border-neutral-800 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
<div className="p-10 md:p-14 md:w-1/2 flex flex-col justify-center">
<div className="flex gap-1 mb-6 text-white">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
                        "SurveyMate completely changed how we do user research and PMF validation. People actually talk to us now instead of abandoning rigid forms. The synthesis speed with the RAG chat saves us weeks of manual coding."
                    </p>
<div className="mt-8">
<p className="font-semibold text-white text-base">Elena Rodriguez</p>
<p className="text-sm text-neutral-500 mt-0.5">VP of Product, FinTech Innovators</p>
</div>
</div>
<div className="md:w-1/2 h-72 md:h-auto relative">
<img alt="Elena Rodriguez" className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;h=1000"/>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-6xl mx-auto text-center">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-300 mb-8">
                Features
            </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Reasons you will <span className="font-display italic font-normal text-neutral-400">love</span> natural research.
            </h2>
<p className="text-lg text-neutral-400 mb-20">Once you try voice-based synthesis, you'll never go back to static forms.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20 text-left">

<div className="flex flex-col items-center text-center md:items-start md:text-left">
<div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6 text-violet-400" data-lucide="mic" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Conversational Interface</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Powered by ElevenLabs, engage users in natural, spoken conversations that feel less like a test and more like an interview.</p>
</div>

<div className="flex flex-col items-center text-center md:items-start md:text-left">
<div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6 text-violet-400" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Plummeting Drop-offs</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Zero typing means drastically less friction. Watch completion rates soar as users simply speak their minds effortlessly.</p>
</div>

<div className="flex flex-col items-center text-center md:items-start md:text-left">
<div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6 text-violet-400" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Richer Deep Context</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Capture tone, hesitation, and intricate details that are impossible to convey in standard text boxes.</p>
</div>

<div className="flex flex-col items-center text-center md:items-start md:text-left">
<div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6 text-violet-400" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Dynamic Follow-ups</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Our AI acts as a trained researcher, dynamically asking relevant follow-up questions based on the user's initial spoken response.</p>
</div>

<div className="flex flex-col items-center text-center md:items-start md:text-left">
<div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6 text-violet-400" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">RAG Synthesis Chat</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Stop manually coding transcripts. Chat directly with your aggregate survey data to extract themes, quotes, and insights instantly.</p>
</div>

<div className="flex flex-col items-center text-center md:items-start md:text-left">
<div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6 text-violet-400" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Save Weeks of Work</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Turn what used to be a painful, multi-week analysis burden into a few minutes of conversation with your data.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-6xl mx-auto text-center">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-300 mb-8">
                Pricing
            </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Pricing that's so <span className="font-display italic font-normal text-neutral-400">simple</span>.
            </h2>
<p className="text-lg text-neutral-400 mb-16">Everything you need to run professional voice research.</p>
<div className="max-w-[400px] mx-auto relative group">

<div className="absolute -inset-1 bg-gradient-to-b from-violet-600/20 to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[2.5rem] p-8 md:p-10 text-left relative overflow-hidden shadow-2xl">

<div className="absolute -bottom-32 -right-32 w-80 h-80 bg-violet-600/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-950/80 border border-neutral-800 text-xs font-medium text-neutral-300 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Early Access
                    </div>
<div className="flex items-baseline mb-2">
<span className="text-5xl font-semibold tracking-tight text-white">$249</span>
<span className="text-lg text-neutral-400 ml-1">/month</span>
</div>
<p className="text-sm text-neutral-400 mb-8">Up to 5 active surveys. Cancel anytime.</p>
<div className="flex gap-3 w-full mb-8">
<button className="flex-1 bg-violet-600 hover:bg-violet-500 text-white py-3.5 rounded-full font-semibold text-sm transition-colors shadow-lg shadow-violet-500/20">
                            Start Trial
                        </button>
<button className="flex-1 bg-neutral-950 border border-neutral-800 hover:bg-neutral-800 text-white py-3.5 rounded-full font-semibold text-sm transition-colors">
                            Book demo
                        </button>
</div>

<div className="flex items-center justify-between bg-neutral-950/50 border border-neutral-800 rounded-full p-2 pl-4 mb-10">
<div className="flex items-center gap-3">

<div className="w-9 h-5 bg-violet-600 rounded-full relative flex items-center px-0.5 cursor-pointer shadow-inner">
<div className="w-4 h-4 bg-white rounded-full absolute right-0.5 shadow-sm"></div>
</div>
<span className="text-sm font-medium text-white flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-neutral-400" data-lucide="sparkles" strokeWidth="1.5"></i> RAG Analysis
                            </span>
</div>
<span className="text-xs font-semibold text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">Included</span>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 flex-shrink-0" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-300">Unlimited questions per survey</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 flex-shrink-0" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-300">1,000 voice responses per month</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 flex-shrink-0" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-300">ElevenLabs natural voice models</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 flex-shrink-0" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-300">Dynamic AI follow-up questions</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 flex-shrink-0" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-300">Full RAG chat synthesis workspace</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-white mt-0.5 flex-shrink-0" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-300">Export transcripts to CSV/PDF</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-900 mt-20">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between text-neutral-500 text-sm">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<i className="w-4 h-4" data-lucide="mic" strokeWidth="1.5"></i>
<span className="font-medium text-neutral-300">SurveyMate</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
