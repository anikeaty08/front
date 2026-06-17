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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
}
}
}
},
plugins: [
function({ addUtilities }) {
const rotateValues = [0, 5, 10, 12, 15, 20, 30, 45, 75];
const utilities = {};
rotateValues.forEach((value) => {
utilities[`.rotate-x-${value}`] = { transform: `perspective(1000px) rotateX(${value}deg)` };
if (value !== 0) utilities[`.-rotate-x-${value}`] = { transform: `perspective(1000px) rotateX(-${value}deg)` };
});
addUtilities(utilities);
}
]
};



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
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-stone-100/50">
<div className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#718E79] rounded-lg flex items-center justify-center text-[#FDFCF8] shadow-sm">
<i className="w-5 h-5" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight text-stone-900">
            Pathstrong
          </span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#features">
              Features
            </a>
<a className="hover:text-stone-900 transition-colors" href="#methodology">
              Methodology
            </a>
<a className="hover:text-stone-900 transition-colors" href="#reviews">
              Reviews
            </a>
</div>
<a className="text-stone-900 bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors" href="#">
            Log in
          </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden mesh-gradient">
<div className="max-w-4xl mx-auto text-center z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-[#D48C70] animate-pulse"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Now in Private Beta
          </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-stone-900 serif-font tracking-tight mb-8 leading-[1]">
          Practice therapy,
          <br/>
<span className="italic text-stone-400">risk-free.</span>
</h1>
<p className="text-xl md:text-2xl text-stone-500 font-normal max-w-xl mx-auto mb-10 leading-relaxed">
          The AI-powered simulator for therapists. Master complex couples
          dynamics in a safe, responsive environment before stepping into the
          room.
        </p>

<form className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto w-full mb-12">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<input className="w-full pl-11 pr-4 py-3.5 bg-white border border-stone-200 rounded-xl text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#718E79]/20 focus:border-[#718E79] transition-all shadow-sm hover:border-stone-300" placeholder="colleague@practice.com" required="" type="email"/>
</div>
<button className="w-full sm:w-auto px-6 py-3.5 bg-[#718E79] hover:bg-[#5f7a66] text-white rounded-xl font-medium text-base transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap flex items-center justify-center gap-2 group" type="button">
            Join Waitlist
            <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
<div className="flex items-center justify-center gap-x-8 gap-y-4 flex-wrap text-stone-400 text-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#718E79]" data-lucide="check" strokeWidth="1.5"></i>
<span>HIPAA Compliant Design</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#718E79]" data-lucide="check" strokeWidth="1.5"></i>
<span>Real-time Supervision</span>
</div>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto relative">

<div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-transparent to-transparent z-20 h-full w-full pointer-events-none"></div>

<div className="glass-card rounded-xl overflow-hidden shadow-2xl rotate-x-12 transform perspective-1000 opacity-100 scale-95 md:scale-100 mx-auto border-0 bg-transparent ring-1 ring-stone-900/5">

<div className="bg-white flex flex-col h-full w-full aspect-[16/10] md:aspect-[16/9]">

<div className="h-10 bg-[#FAFAFA] border-b border-stone-200 flex items-center px-4 justify-between shrink-0">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 bg-white border border-stone-200 rounded text-[10px] text-stone-400 font-medium shadow-sm w-64 justify-center">
<i className="w-3 h-3 opacity-50" data-lucide="lock" strokeWidth="1.5"></i>
                app.pathstrong.ai/session/active
              </div>
<div className="w-12"></div>

</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-[60px] bg-stone-50 border-r border-stone-100 flex flex-col items-center py-4 gap-6 shrink-0 z-10">
<div className="w-8 h-8 bg-stone-900 text-white rounded-lg flex items-center justify-center mb-2">
<span className="font-semibold text-xs">P</span>
</div>
<div className="flex flex-col gap-4 w-full items-center">
<button className="w-8 h-8 flex items-center justify-center text-stone-900 bg-white shadow-sm border border-stone-200 rounded-lg">
<i className="w-4 h-4" data-lucide="message-square" strokeWidth="1.5"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-600 transition-colors">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-600 transition-colors">
<i className="w-4 h-4" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</button>
</div>
<div className="mt-auto">
<button className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-600">
<i className="w-4 h-4" data-lucide="settings" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex-1 flex flex-col bg-white relative">

<div className="h-14 border-b border-stone-100 flex items-center justify-between px-6 shrink-0 bg-white/80 backdrop-blur-sm z-10">
<div>
<h3 className="text-sm font-semibold text-stone-900">
                      Financial Conflict
                    </h3>
<div className="flex items-center gap-2">
<span className="text-xs text-stone-500">
                        Couple: Alex &amp; Jordan
                      </span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="text-xs text-[#718E79] font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#718E79] animate-pulse"></span>
                        Video Active
                      </span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="text-xs font-mono text-stone-400 bg-stone-50 px-2 py-1 rounded">
                      14:23
                    </div>
<button className="bg-stone-900 hover:bg-stone-800 text-white text-xs px-3 py-1.5 rounded-md font-medium transition-colors shadow-sm">
                      End Session
                    </button>
</div>
</div>

<div className="flex-1 bg-[#1c1917] p-4 flex overflow-hidden relative gap-1">

<div className="flex-1 relative rounded-xl overflow-hidden bg-stone-800 group ring-1 ring-white/10">
<img alt="Alex" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity object-left" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center justify-between mb-2">
<span className="text-white font-medium text-sm">Alex</span>
<div className="bg-[#718E79] px-2 py-0.5 rounded-full flex items-center gap-1">
<div className="flex gap-0.5 items-end h-2.5">
<span className="w-0.5 h-full bg-white animate-[bounce_1s_infinite]"></span>
<span className="w-0.5 h-2/3 bg-white animate-[bounce_1.2s_infinite]"></span>
<span className="w-0.5 h-full bg-white animate-[bounce_0.8s_infinite]"></span>
</div>
</div>
</div>
<p className="text-white/90 text-sm leading-snug font-serif italic">
                        "I just feel like I'm the only one worrying about the
                        budget..."
                      </p>
</div>
</div>

<div className="flex-1 relative rounded-xl overflow-hidden bg-stone-800 group ring-1 ring-white/10">
<img alt="Jordan" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity object-right" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-white font-medium text-sm">Jordan</span>
</div>
<div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-full p-1.5">
<i className="w-3 h-3 text-white/70" data-lucide="mic-off"></i>
</div>
</div>
</div>

<div className="h-20 bg-white border-t border-stone-100 flex items-center justify-between px-8 z-20">
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center transition-colors">
<i className="w-5 h-5" data-lucide="video"></i>
</button>
<button className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center transition-colors">
<i className="w-5 h-5" data-lucide="volume-2"></i>
</button>
</div>
<div className="flex flex-col items-center -mt-6">
<button className="w-16 h-16 bg-[#D48C70] hover:bg-[#C27A5E] text-white rounded-2xl flex items-center justify-center shadow-xl shadow-[#D48C70]/30 transition-all hover:-translate-y-1 active:scale-95 group border-4 border-white">
<i className="w-7 h-7 group-hover:scale-110 transition-transform" data-lucide="mic"></i>
</button>
<span className="text-[10px] font-semibold text-stone-400 mt-2 uppercase tracking-widest">
                      Hold to Speak
                    </span>
</div>
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center transition-colors">
<i className="w-5 h-5" data-lucide="settings-2"></i>
</button>
<button className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition-colors">
<i className="w-5 h-5" data-lucide="phone-off"></i>
</button>
</div>
</div>
</div>

<div className="w-72 bg-stone-50 border-l border-stone-100 flex-col shrink-0 hidden lg:flex">
<div className="p-4 border-b border-stone-100">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">
                    Real-time Analysis
                  </h4>

<div className="mb-4">
<div className="flex justify-between items-end mb-1.5">
<span className="text-[10px] font-medium text-stone-500">
                        Emotional Safety
                      </span>
<span className="text-[10px] font-bold text-[#D48C70]">
                        Critical
                      </span>
</div>
<div className="h-2 bg-stone-200 rounded-full overflow-hidden">
<div className="h-full w-[25%] bg-[#D48C70] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-1.5">
<span className="text-[10px] font-medium text-stone-500">
                        Therapeutic Alliance
                      </span>
<span className="text-[10px] font-bold text-stone-700">
                        Stable
                      </span>
</div>
<div className="h-2 bg-stone-200 rounded-full overflow-hidden">
<div className="h-full w-[80%] bg-[#718E79] rounded-full"></div>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3">

<div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
<div className="flex items-center gap-2 mb-2 text-[#718E79]">
<i className="w-3 h-3" data-lucide="eye" strokeWidth="2"></i>
<span className="text-[10px] font-bold uppercase tracking-wider">
                        Observation
                      </span>
</div>
<p className="text-xs text-stone-600 leading-relaxed font-medium">
                      Jordan is exhibiting
                      <span className="text-stone-900 border-b border-stone-300 border-dotted">
                        defensive withdrawal
                      </span>
                      . Alex is interpreting this silence as indifference, which
                      fuels the escalation.
                    </p>
</div>

<div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#718E79]"></div>
<div className="flex items-center gap-2 mb-2 text-stone-900">
<i className="w-3 h-3 text-[#718E79]" data-lucide="lightbulb" strokeWidth="2"></i>
<span className="text-[10px] font-bold uppercase tracking-wider">
                        Suggested Intervention
                      </span>
</div>
<p className="text-[10px] text-stone-400 mb-2">
                      Try validation to lower arousal:
                    </p>
<button className="w-full text-left p-2.5 bg-stone-50 hover:bg-[#F5F2EE] border border-stone-100 hover:border-[#D6D3D1] rounded-lg text-[11px] text-stone-700 transition-all duration-200 group">
                      "Jordan, I hear that when Alex gets intense about the
                      budget, you feel criticized and want to pull away to
                      protect yourself. Is that right?"
                      <span className="block mt-1 text-[9px] text-[#718E79] opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                        Tap to auto-speak
                      </span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-y border-stone-100 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-stone-400 mb-6">
          DESIGNED WITH CLINICIANS FROM
        </p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale mix-blend-multiply">

<span className="text-lg font-bold text-stone-400 tracking-tighter">
            Clinical
            <span className="font-light">Institute</span>
</span>
<span className="text-lg font-serif italic text-stone-400">
            TherapyLabs
          </span>
<span className="text-lg font-semibold text-stone-400 tracking-widest uppercase">
            MINDSET
          </span>
<span className="text-lg font-bold text-stone-400">
            Health
            <span className="text-[#718E79]">Flow</span>
</span>
<span className="text-xl font-medium text-stone-400 tracking-tight">
            OpenPsych
          </span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-4xl font-medium serif-font text-stone-900 mb-4 tracking-tight">
          Master the art of conversation.
        </h2>
<p className="text-lg text-stone-500">
          Pathstrong provides a safe sandbox to practice difficult modalities
          and high-conflict scenarios without real-world consequences.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:border-[#718E79]/30 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl border border-stone-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-[#718E79]" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3">
            Dynamic Couples
          </h3>
<p className="text-stone-500 leading-relaxed">
            Simulate sessions with AI couples exhibiting realistic attachment
            styles, triggers, and communication patterns.
          </p>
</div>

<div className="group bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:border-[#718E79]/30 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl border border-stone-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-[#D48C70]" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3">
            Live Supervision
          </h3>
<p className="text-stone-500 leading-relaxed">
            Receive real-time feedback on your interventions. The AI detects
            empathy misses and suggests alternative phrasings.
          </p>
</div>

<div className="group bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:border-[#718E79]/30 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl border border-stone-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-stone-600" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3">
            Modality Training
          </h3>
<p className="text-stone-500 leading-relaxed">
            Switch the evaluation framework instantly. Practice EFT, Gottman, or
            RLT specific interventions.
          </p>
</div>
</div>

<div className="mt-6 bg-[#F5F2EE] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center border border-[#E7E5E4]">
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 mb-2">
<i className="w-3 h-3 text-[#D48C70]" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Post-Session Analytics
            </span>
</div>
<h3 className="text-3xl md:text-4xl serif-font font-medium text-stone-900 tracking-tight">
            Deep clinical insight,
            <br/>
            instantly delivered.
          </h3>
<p className="text-stone-500 text-lg leading-relaxed">
            Review your session with a granular breakdown of clinical
            competencies. Identify your blind spots in alliance building,
            emotional regulation, and directive interventions.
          </p>
<div className="pt-4 flex gap-4 text-sm font-medium">
<div className="px-4 py-2 bg-white rounded-lg border border-stone-200 shadow-sm">
              Emotional Safety Score
            </div>
<div className="px-4 py-2 bg-white rounded-lg border border-stone-200 shadow-sm">
              Alliance Index
            </div>
</div>
</div>
<div className="flex-1 w-full relative">

<div className="bg-white rounded-xl border border-stone-200 shadow-lg p-6 w-full">
<div className="flex justify-between items-center mb-6">
<span className="font-medium text-stone-900">Competency Map</span>
<i className="text-stone-400 w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</div>

<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-stone-500">Empathic Reflection</span>
<span className="text-stone-900 font-medium">92%</span>
</div>
<div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-[#718E79] w-[92%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-stone-500">Cycle De-escalation</span>
<span className="text-stone-900 font-medium">78%</span>
</div>
<div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-[#718E79] w-[78%] rounded-full opacity-80"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-stone-500">Directive Leadership</span>
<span className="text-stone-900 font-medium">64%</span>
</div>
<div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-[#D48C70] w-[64%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-[#FDFCF8]" id="methodology">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl serif-font font-medium mb-6 tracking-tight">
            The "Flight Simulator" for modern therapy.
          </h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-px bg-stone-700 h-full relative">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#718E79]"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-medium mb-2 text-stone-200">
                  Theory isn't enough
                </h4>
<p className="text-stone-400 leading-relaxed">
                  Reading about the cycle is different from interrupting it in a
                  heated room. We bridge the gap between textbook and practice.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-px bg-stone-700 h-full relative">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#718E79]"></div>
</div>
<div>
<h4 className="text-lg font-medium mb-2 text-stone-200">
                  Safe failure
                </h4>
<p className="text-stone-400 leading-relaxed">
                  Mess up an intervention? Pause. Rewind. Try again. Pathstrong
                  gives you the permission to fail so you can succeed with real
                  clients.
                </p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl border border-stone-700/50 p-8 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<div className="relative z-10 text-center space-y-4">
<div className="w-20 h-20 bg-[#718E79]/20 rounded-full flex items-center justify-center mx-auto text-[#718E79]">
<i className="w-10 h-10" data-lucide="brain-circuit" strokeWidth="1.5"></i>
</div>
<p className="font-serif italic text-2xl text-stone-300">
                "Practice makes
                <br/>
                competence."
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="reviews">
<h2 className="text-3xl serif-font text-center mb-16 text-stone-900">
        Clinicians love the sandbox
      </h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="p-8 bg-white border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-4 text-[#D48C70]">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-stone-600 mb-6 leading-relaxed">
            "I was terrified of working with couples until I used Pathstrong.
            The AI is shockingly realistic—it pushes your buttons exactly like a
            real couple would."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
<div>
<div className="font-medium text-stone-900">Sarah Jenkins</div>
<div className="text-xs text-stone-400 uppercase tracking-wide">
                LMFT Associate
              </div>
</div>
</div>
</div>
<div className="p-8 bg-white border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-4 text-[#D48C70]">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-stone-600 mb-6 leading-relaxed">
            "The supervision mode is a game changer. Getting instant feedback on
            my EFT reframing has accelerated my certification process by
            months."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"/>
</div>
<div>
<div className="font-medium text-stone-900">Dr. Marcus Chen</div>
<div className="text-xs text-stone-400 uppercase tracking-wide">
                Clinical Psychologist
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto bg-[#718E79] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D48C70] opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl serif-font mb-6 tracking-tight">
            Ready to sharpen your skills?
          </h2>
<p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Join the waitlist today and get early access to the simulator and 5
            free scenarios.
          </p>
<form className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto w-full">
<input className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-lg text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 focus:border-white transition-all backdrop-blur-sm" placeholder="Enter your email" required="" type="email"/>
<button className="w-full sm:w-auto px-8 py-4 bg-white text-[#718E79] rounded-xl font-medium text-lg transition-all shadow-lg hover:bg-stone-50 active:scale-95 whitespace-nowrap" type="button">
              Get Access
            </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-stone-100 py-16 px-6 bg-white">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-[#718E79] rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-stone-900">Pathstrong</span>
</div>
<p className="text-stone-400 text-sm mb-6 max-w-xs">
            Empowering therapists with AI-driven tools to create stronger
            relationships.
          </p>
<p className="text-stone-300 text-xs">© 2024 Pathstrong Inc.</p>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-stone-900 text-sm">Product</h4>
<a className="text-stone-500 hover:text-[#718E79] text-sm transition-colors" href="#">
            Simulator
          </a>
<a className="text-stone-500 hover:text-[#718E79] text-sm transition-colors" href="#">
            Assessment
          </a>
<a className="text-stone-500 hover:text-[#718E79] text-sm transition-colors" href="#">
            Pricing
          </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-stone-900 text-sm">Resources</h4>
<a className="text-stone-500 hover:text-[#718E79] text-sm transition-colors" href="#">
            Blog
          </a>
<a className="text-stone-500 hover:text-[#718E79] text-sm transition-colors" href="#">
            Research
          </a>
<a className="text-stone-500 hover:text-[#718E79] text-sm transition-colors" href="#">
            Community
          </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-stone-900 text-sm">Company</h4>
<a className="text-stone-500 hover:text-[#718E79] text-sm transition-colors" href="#">
            About
          </a>
<a className="text-stone-500 hover:text-[#718E79] text-sm transition-colors" href="#">
            Careers
          </a>
<a className="text-stone-500 hover:text-[#718E79] text-sm transition-colors" href="#">
            Contact
          </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-stone-900 text-sm">Legal</h4>
<a className="text-stone-500 hover:text-[#718E79] text-sm transition-colors" href="#">
            Privacy
          </a>
<a className="text-stone-500 hover:text-[#718E79] text-sm transition-colors" href="#">
            Terms
          </a>
</div>
</div>
</footer>

<style>
      /* Fade in animations for chat bubbles */
      @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
      }
      @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
      }
    </style>

    </>
  );
}
