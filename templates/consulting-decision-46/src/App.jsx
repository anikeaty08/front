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
},
colors: {
canada: {
red: '#FF0000',
}
},
animation: {
'fade-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeInUp: {
'from': { opacity: '0', transform: 'translateY(20px)' },
'to': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0px)' },
'50%': { transform: 'translateY(-10px)' },
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
      

<main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth">

<section className="h-screen w-full flex items-center justify-center snap-center p-4 bg-[#e4e4e7] relative">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/40 rounded-full blur-3xl mix-blend-overlay"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zinc-300/30 rounded-full blur-3xl"></div>
</div>

<div className="glass-panel relative w-full max-w-[420px] aspect-[3/4] rounded-[2rem] flex flex-col justify-between p-8 sm:p-10 overflow-hidden group hover:shadow-2xl transition-all duration-500 ease-out border border-white/60">

<div className="w-full flex justify-between items-center opacity-0 animate-fade-up" style={{animationDelay: '100ms'}}>
<div className="flex items-center gap-2">
<span className="iconify text-canada-red" data-icon="lucide:map-pin" data-width="16"></span>
<span className="text-[10px] uppercase font-semibold tracking-widest text-zinc-400">Toronto, CA</span>
</div>
<div className="h-2 w-2 rounded-full bg-canada-red animate-ping"></div>
</div>

<div className="flex-1 flex flex-col justify-center items-center text-center space-y-8 z-10">
<div className="animate-float">
<div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shadow-sm mb-4">
<span className="iconify text-zinc-800" data-icon="lucide:compass" data-width="32"></span>
</div>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tighter leading-[0.95] text-zinc-900 opacity-0 animate-fade-up" style={{animationDelay: '200ms'}}>
                        Life doesn’t<br/>get easier.
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 font-light">You get clearer.</span>
</h1>
<div className="w-12 h-[2px] bg-canada-red rounded-full opacity-0 animate-fade-up" style={{animationDelay: '300ms'}}></div>
<p className="text-sm text-zinc-500 font-normal leading-relaxed max-w-[280px] opacity-0 animate-fade-up" style={{animationDelay: '400ms'}}>
                        Strategic systems for sustainable growth and personal clarity.
                    </p>
</div>

<div className="w-full flex justify-between items-center border-t border-zinc-100 pt-6 opacity-0 animate-fade-up" style={{animationDelay: '500ms'}}>
<p className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Consulting Theme</p>
<span className="iconify text-zinc-300 group-hover:text-canada-red transition-colors duration-300" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
</div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 hidden lg:flex">
<div className="w-1.5 h-1.5 bg-canada-red rounded-full shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full hover:bg-zinc-400 transition-colors cursor-pointer"></div>
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full hover:bg-zinc-400 transition-colors cursor-pointer"></div>
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full hover:bg-zinc-400 transition-colors cursor-pointer"></div>
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full hover:bg-zinc-400 transition-colors cursor-pointer"></div>
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full hover:bg-zinc-400 transition-colors cursor-pointer"></div>
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full hover:bg-zinc-400 transition-colors cursor-pointer"></div>
<div className="w-1.5 h-1.5 bg-zinc-300 rounded-full hover:bg-zinc-400 transition-colors cursor-pointer"></div>
</div>
</section>

<section className="h-screen w-full flex items-center justify-center snap-center p-4 bg-[#e4e4e7]">
<div className="glass-panel relative w-full max-w-[420px] aspect-[3/4] rounded-[2rem] flex flex-col p-8 sm:p-10 shadow-xl border border-white/60">

<div className="flex justify-between items-start mb-10">
<span className="font-sans text-[10px] font-bold text-white bg-zinc-900 px-2.5 py-1 rounded-full shadow-lg">01</span>
<span className="iconify text-canada-red" data-icon="lucide:target" data-width="24"></span>
</div>

<div className="flex-1 flex flex-col justify-center">
<h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tighter mb-8 leading-tight animate-fade-up">
                        Stop trying to<br/><span className="text-zinc-400 font-light">fix everything.</span>
</h2>
<div className="space-y-6 text-zinc-500 text-sm sm:text-base font-normal leading-relaxed animate-fade-up" style={{animationDelay: '100ms'}}>
<p>
                            Resource allocation is critical. Most inefficiencies stem from fighting multiple fronts simultaneously.
                        </p>
<div className="pl-4 border-l-2 border-canada-red/20">
<p className="text-zinc-800 font-medium">
                                Focus creates leverage.
                            </p>
</div>
<p>
                            Select one key performance indicator to improve. Defer the rest.
                        </p>
</div>
</div>

<div className="pt-8 border-t border-zinc-100 mt-auto flex items-center justify-between">
<p className="text-[10px] uppercase font-bold text-zinc-300 tracking-widest">Strategy</p>
<div className="h-1 w-12 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-1/6 bg-zinc-800"></div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full flex items-center justify-center snap-center p-4 bg-[#e4e4e7]">
<div className="glass-panel relative w-full max-w-[420px] aspect-[3/4] rounded-[2rem] flex flex-col p-8 sm:p-10 shadow-xl border border-white/60">
<div className="flex justify-between items-start mb-10">
<span className="font-sans text-[10px] font-bold text-zinc-400 border border-zinc-200 px-2.5 py-1 rounded-full">02</span>
<span className="iconify text-zinc-400 group-hover:text-canada-red" data-icon="lucide:minus-circle" data-width="24"></span>
</div>
<div className="flex-1 flex flex-col justify-center">
<h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tighter mb-8 leading-tight animate-fade-up">
                        Reduce decisions,<br/><span className="text-zinc-400 font-light">not effort.</span>
</h2>
<div className="space-y-6 text-zinc-500 text-sm sm:text-base font-normal leading-relaxed animate-fade-up" style={{animationDelay: '100ms'}}>
<p>
                            Decision fatigue degrades executive function. Streamline operational choices.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 bg-white/50 p-2 rounded-lg border border-zinc-100">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
<span className="text-xs font-medium text-zinc-700">Standardize basics</span>
</li>
<li className="flex items-center gap-3 bg-white/50 p-2 rounded-lg border border-zinc-100">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
<span className="text-xs font-medium text-zinc-700">Fix schedules</span>
</li>
<li className="flex items-center gap-3 bg-white/50 p-2 rounded-lg border border-zinc-100">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
<span className="text-xs font-medium text-zinc-700">Repeat processes</span>
</li>
</ul>
<p className="text-zinc-400 text-xs uppercase tracking-wider font-semibold pt-2">
                            Less choice = Higher Output
                        </p>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 mt-auto flex items-center justify-between">
<p className="text-[10px] uppercase font-bold text-zinc-300 tracking-widest">Operations</p>
<div className="h-1 w-12 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-2/6 bg-zinc-800"></div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full flex items-center justify-center snap-center p-4 bg-[#e4e4e7]">
<div className="glass-panel relative w-full max-w-[420px] aspect-[3/4] rounded-[2rem] flex flex-col p-8 sm:p-10 shadow-xl border border-white/60">
<div className="flex justify-between items-start mb-10">
<span className="font-sans text-[10px] font-bold text-zinc-400 border border-zinc-200 px-2.5 py-1 rounded-full">03</span>
<span className="iconify text-zinc-400" data-icon="lucide:settings-2" data-width="24"></span>
</div>
<div className="flex-1 flex flex-col justify-center">
<h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tighter mb-8 leading-tight animate-fade-up">
                        Build systems,<br/><span className="text-zinc-400 font-light">not discipline.</span>
</h2>
<div className="space-y-6 text-zinc-500 text-sm sm:text-base font-normal leading-relaxed animate-fade-up" style={{animationDelay: '100ms'}}>
<p>
                            Discipline is a finite resource. Systems are scalable assets.
                        </p>
<p>
                            If progress depends on morale, the project is at risk.
                        </p>
<div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100 shadow-sm">
<p className="text-zinc-800 text-sm font-medium">
                                Automate progress.<br/>
<span className="text-zinc-400 font-normal">Independent of energy levels.</span>
</p>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 mt-auto flex items-center justify-between">
<p className="text-[10px] uppercase font-bold text-zinc-300 tracking-widest">Architecture</p>
<div className="h-1 w-12 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-3/6 bg-zinc-800"></div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full flex items-center justify-center snap-center p-4 bg-[#e4e4e7]">
<div className="glass-panel relative w-full max-w-[420px] aspect-[3/4] rounded-[2rem] flex flex-col p-8 sm:p-10 shadow-xl border border-white/60">
<div className="flex justify-between items-start mb-10">
<span className="font-sans text-[10px] font-bold text-zinc-400 border border-zinc-200 px-2.5 py-1 rounded-full">04</span>
<span className="iconify text-zinc-400" data-icon="lucide:bar-chart-2" data-width="24"></span>
</div>
<div className="flex-1 flex flex-col justify-center">
<h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tighter mb-8 leading-tight animate-fade-up">
                        Track reality,<br/><span className="text-zinc-400 font-light">not dreams.</span>
</h2>
<div className="space-y-6 text-zinc-500 text-sm sm:text-base font-normal leading-relaxed animate-fade-up" style={{animationDelay: '100ms'}}>
<p>
                            Reporting "hard work" is insufficient. Measure tangible forward movement.
                        </p>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between bg-emerald-50/50 px-4 py-3 rounded-xl border border-emerald-100">
<span className="text-zinc-700 text-sm font-medium">Track Actions</span>
<span className="iconify text-emerald-500" data-icon="lucide:check-circle" data-width="18"></span>
</div>
<div className="flex items-center justify-between bg-zinc-50 px-4 py-3 rounded-xl border border-zinc-100 opacity-60">
<span className="text-zinc-400 text-sm font-medium line-through">Track Intentions</span>
<span className="iconify text-zinc-300" data-icon="lucide:x-circle" data-width="18"></span>
</div>
</div>
<p className="text-zinc-800 text-xs font-semibold tracking-wide uppercase pt-2">
                            Data removes anxiety.
                        </p>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 mt-auto flex items-center justify-between">
<p className="text-[10px] uppercase font-bold text-zinc-300 tracking-widest">Analytics</p>
<div className="h-1 w-12 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-4/6 bg-zinc-800"></div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full flex items-center justify-center snap-center p-4 bg-[#e4e4e7]">
<div className="glass-panel relative w-full max-w-[420px] aspect-[3/4] rounded-[2rem] flex flex-col p-8 sm:p-10 shadow-xl border border-white/60">
<div className="flex justify-between items-start mb-10">
<span className="font-sans text-[10px] font-bold text-zinc-400 border border-zinc-200 px-2.5 py-1 rounded-full">05</span>
<span className="iconify text-zinc-400 group-hover:text-emerald-500 transition-colors" data-icon="lucide:trending-up" data-width="24"></span>
</div>
<div className="flex-1 flex flex-col justify-center">
<h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tighter mb-8 leading-tight animate-fade-up">
                        Accept<br/><span className="text-zinc-400 font-light">steady growth.</span>
</h2>
<div className="space-y-6 text-zinc-500 text-sm sm:text-base font-normal leading-relaxed animate-fade-up" style={{animationDelay: '100ms'}}>
<p>
                            Rapid scaling often leads to structural failure.
                        </p>
<p>
                            Sustainable progress appears mundane externally but compounds significantly.
                        </p>
<div className="pt-4 border-t border-zinc-100">
<span className="block text-zinc-900 text-lg tracking-tight font-medium mb-1">Consistency &gt; Intensity</span>
<span className="text-xs text-zinc-400 uppercase tracking-widest">Without Exception</span>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 mt-auto flex items-center justify-between">
<p className="text-[10px] uppercase font-bold text-zinc-300 tracking-widest">Growth</p>
<div className="h-1 w-12 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-5/6 bg-zinc-800"></div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full flex items-center justify-center snap-center p-4 bg-[#e4e4e7]">
<div className="glass-panel relative w-full max-w-[420px] aspect-[3/4] rounded-[2rem] flex flex-col p-8 sm:p-10 shadow-xl border border-white/60">
<div className="flex justify-between items-start mb-10">
<span className="font-sans text-[10px] font-bold text-zinc-400 border border-zinc-200 px-2.5 py-1 rounded-full">06</span>
<span className="iconify text-zinc-400" data-icon="lucide:scissors" data-width="24"></span>
</div>
<div className="flex-1 flex flex-col justify-center">
<h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tighter mb-8 leading-tight animate-fade-up">
                        Cut what<br/><span className="text-zinc-400 font-light">drains capital.</span>
</h2>
<div className="space-y-6 text-zinc-500 text-sm sm:text-base font-normal leading-relaxed animate-fade-up" style={{animationDelay: '100ms'}}>
<p>Protect your energy like operating capital.</p>
<div className="grid grid-cols-1 gap-2">
<div className="flex items-center gap-3 border border-red-100 bg-red-50/50 px-4 py-2.5 rounded-lg text-sm text-zinc-600">
<span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span> Bad habits
                            </div>
<div className="flex items-center gap-3 border border-red-100 bg-red-50/50 px-4 py-2.5 rounded-lg text-sm text-zinc-600">
<span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span> Noise &amp; Distraction
                            </div>
<div className="flex items-center gap-3 border border-red-100 bg-red-50/50 px-4 py-2.5 rounded-lg text-sm text-zinc-600">
<span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span> Unclear communication
                            </div>
</div>
<p className="text-zinc-900 font-medium text-sm">
                            Optimize inputs to improve yield.
                        </p>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 mt-auto flex items-center justify-between">
<p className="text-[10px] uppercase font-bold text-zinc-300 tracking-widest">Audit</p>
<div className="h-1 w-12 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-full bg-zinc-800"></div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full flex items-center justify-center snap-center p-4 bg-[#e4e4e7]">
<div className="bg-zinc-900 relative w-full max-w-[420px] aspect-[3/4] rounded-[2rem] shadow-2xl flex flex-col p-8 sm:p-10 text-white border border-zinc-800">
<div className="w-full flex justify-center mb-auto pt-10 animate-float">
<div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center text-white shadow-inner border border-zinc-700/50">
<span className="iconify text-canada-red" data-icon="lucide:bookmark" data-width="28"></span>
</div>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter mb-6 leading-tight">
                        Optimize your<br/>decision making.
                    </h2>
<div className="space-y-2 text-zinc-400 text-sm font-normal">
<p>Save this framework.</p>
<p>Review during operational stress.</p>
<p>Build a sustainable workflow.</p>
</div>
<button className="mt-8 bg-white text-zinc-900 hover:bg-zinc-200 transition-all rounded-full px-8 py-3 text-sm font-semibold tracking-wide hover:shadow-lg hover:-translate-y-1 duration-300 flex items-center gap-2">
<span className="iconify" data-icon="lucide:download" data-width="16"></span>
                        Save Resource
                    </button>
</div>
<div className="pt-8 border-t border-zinc-800 mt-auto flex justify-between items-center w-full">
<p className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest font-bold">Consulting Theme</p>
<div className="flex gap-5 text-zinc-400">
<span className="iconify hover:text-white transition-colors cursor-pointer" data-icon="lucide:heart" data-width="20"></span>
<span className="iconify hover:text-white transition-colors cursor-pointer" data-icon="lucide:send" data-width="20"></span>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
