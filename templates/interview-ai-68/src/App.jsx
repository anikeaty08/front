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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

<nav className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center text-black">
<iconify-icon className="text-lg" icon="solar:record-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-[0.2em] text-white uppercase">
            V o c a l
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm hover:text-white transition-colors hidden sm:block" href="#">
            Sign in
          </a>
<a className="text-xs bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors" href="#waitlist">
            Join Waitlist
          </a>
</div>
</div>
</nav>

<main className="flex-1 flex flex-col items-center justify-center pt-24 pb-20 px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Voice-to-voice engine v2.0 is live
      </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white max-w-4xl leading-tight mb-6">
        Master the interview.
        <br className="hidden md:block"/>
        Real-time. Real feedback.
      </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light mb-12">
        Upload your CV and the target Job Description. Our AI instantly acts as
        the hiring manager, conducting an adaptive, voice-led interview complete
        with a final scorecard.
      </p>

<div className="w-full max-w-3xl mx-auto p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
<div className="bg-black rounded-xl border border-white/10 p-2 md:p-8 relative overflow-hidden">
<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center relative z-10">

<div className="w-full flex-1 group cursor-pointer">
<div className="h-32 rounded-xl border border-dashed border-white/20 bg-white/5 group-hover:bg-white/10 group-hover:border-white/40 transition-all flex flex-col items-center justify-center gap-3">
<iconify-icon className="text-2xl text-neutral-500 group-hover:text-white transition-colors" icon="solar:document-add-linear"></iconify-icon>
<div className="text-center">
<p className="text-sm text-white font-medium">Upload CV</p>
<p className="text-xs text-neutral-500 mt-1">
                    PDF, DOCX (Max 5MB)
                  </p>
</div>
</div>
</div>
<div className="text-neutral-600 hidden md:block">
<iconify-icon className="text-2xl" icon="solar:add-circle-linear"></iconify-icon>
</div>

<div className="w-full flex-1 group cursor-pointer">
<div className="h-32 rounded-xl border border-dashed border-white/20 bg-white/5 group-hover:bg-white/10 group-hover:border-white/40 transition-all flex flex-col items-center justify-center gap-3">
<iconify-icon className="text-2xl text-neutral-500 group-hover:text-white transition-colors" icon="solar:clipboard-text-linear"></iconify-icon>
<div className="text-center">
<p className="text-sm text-white font-medium">
                    Paste Job Description
                  </p>
<p className="text-xs text-neutral-500 mt-1">Text or URL</p>
</div>
</div>
</div>
</div>

<button className="w-full mt-6 bg-white text-black py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors relative z-10 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
            Generate &amp; Start Interview
          </button>
</div>
</div>
</main>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950">
<div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 space-y-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-snug">
        Feels exactly like talking to a real recruiter.
      </h2>
<p className="text-base text-neutral-400 font-light leading-relaxed">
        Our ultra-low latency voice engine listens to your responses,
        analyzes the context based on your CV and the JD, and dynamically
        asks follow-up questions to dig deeper into your experience.
      </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-300">
                Under 500ms response latency.
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-300">
                Interruptible conversations.
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-neutral-300">
                Adjusts tone based on company culture.
              </span>
</li>
</ul>
</div>

<div className="flex-1 w-full max-w-md bg-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[400px]">

<div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-white/[0.02]">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="text-xs text-neutral-400 font-medium">
                Recording
              </span>
</div>
<span className="text-xs text-neutral-500 font-mono">14:02</span>
</div>

<div className="flex-1 p-6 flex flex-col items-center justify-center relative">

<div className="w-32 h-32 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8 relative">
<div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20"></div>
<div className="flex items-center gap-1 h-8">
<div className="w-1 bg-white rounded-full animate-wave"></div>
<div className="w-1 bg-white rounded-full animate-wave"></div>
<div className="w-1 bg-white rounded-full animate-wave"></div>
<div className="w-1 bg-white rounded-full animate-wave"></div>
<div className="w-1 bg-white rounded-full animate-wave"></div>
</div>
</div>
<p className="text-center text-sm text-white font-medium max-w-[280px]">
          "That's interesting. Can you tell me about a specific time when
          that microservices architecture failed under load, and how you
          recovered?"
        </p>
</div>

<div className="h-20 border-t border-white/10 flex items-center justify-center gap-6 bg-white/[0.02]">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white cursor-pointer">
<iconify-icon className="text-lg" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition cursor-pointer">
<iconify-icon className="text-xl" icon="solar:end-call-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white cursor-pointer">
<iconify-icon className="text-lg" icon="solar:volume-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>


<section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-medium text-blue-400 mb-8 uppercase tracking-widest">
      Developers Only
    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
      Built exclusively for software engineers.
    </h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
      We don't do marketing, sales, or finance. Our AI is fine-tuned
      exclusively for software development roles. It evaluates your system
      design, technical depth, and architectural decision-making exactly
      like a real engineering manager would.
    </p>
</div>
</section>
<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">
            Everything you need to prep.
          </h2>
<p className="text-sm text-neutral-400">
            A complete toolchain designed to simulate high-pressure
            environments.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white mb-6 bg-white/5">
<iconify-icon className="text-xl" icon="solar:branching-paths-up-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">
              Adaptive Questioning
            </h3>
<p className="text-xs text-neutral-400 leading-relaxed">
              Questions aren't pre-scripted. The AI reads your resume and the
              job requirements to formulate unique, targeted questions based on
              your previous answers.
            </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white mb-6 bg-white/5">
<iconify-icon className="text-xl" icon="solar:microphone-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Voice Turns</h3>
<p className="text-xs text-neutral-400 leading-relaxed">
              Practice speaking out loud. Natural conversational turns force you
              to structure your thoughts in real-time, just like a face-to-face
              interview.
            </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white mb-6 bg-white/5">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">
              End-of-Session Scorecards
            </h3>
<p className="text-xs text-neutral-400 leading-relaxed">
              Get quantitative and qualitative feedback immediately after
              hanging up. See exactly where you excelled and where your answers
              lacked depth.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950 overflow-hidden relative">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

<div className="flex-1 w-full relative">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="bg-black border border-white/10 rounded-xl p-6 shadow-2xl relative z-10 max-w-sm mx-auto">
<div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
<div>
<p className="text-sm font-medium text-white">Interview Results</p>
<p className="text-xs text-neutral-500">Senior Frontend Engineer</p>
</div>
<div className="w-12 h-12 rounded-full border-2 border-emerald-500/30 flex items-center justify-center">
<span className="text-lg font-medium text-emerald-400">84</span>
</div>
</div>
<div className="space-y-5">

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-300">Technical Depth</span>
<span className="text-white">90/100</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '90%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-300">Communication</span>
<span className="text-white">75/100</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
<p className="text-[10px] text-neutral-500 mt-2 leading-tight">
                  Feedback: Tended to ramble on the microservices question. Try
                  using the STAR method more strictly.
                </p>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-300">Culture Fit</span>
<span className="text-white">88/100</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex-1 space-y-6">
<h2 className="text-3xl font-medium tracking-tight text-white leading-snug">
            Know exactly where you stand before the real thing.
          </h2>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
            Stop guessing how you did. Our AI breaks down your performance
            across technical accuracy, communication clarity, and role
            alignment. Review transcripts and listen to playbacks to perfect
            your delivery.
          </p>
<a className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-neutral-300 transition-colors group" href="#">
            View a sample scorecard
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>


<section className="py-24 px-6 border-t border-white/5 bg-black relative overflow-hidden" id="waitlist">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[250px] bg-white/[0.02] blur-[80px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Private Beta
        </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Ready to ace your next interview?
        </h2>
<p className="text-base text-neutral-400 font-light mb-10 max-w-xl mx-auto">
          We're currently in private beta. Join the waitlist to get early access
          to Vocal's real-time AI interview engine.
        </p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
<input className="w-full flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" placeholder="name@email.com" required="" type="email"/>
<button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2" type="submit">
            Join Waitlist
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</section>
<footer className="border-t border-white/5 py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white flex items-center justify-center text-black">
<iconify-icon className="text-sm" icon="solar:record-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
            V o c a l
          </span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
