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
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
500: '#14b8a6',
900: '#134e4a',
950: '#042f2e',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-900/10 rounded-full blur-[128px]"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
<span className="iconify" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-white font-semibold tracking-tight text-lg">
            JARVIS
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#features">
            Capabilities
          </a>
<a className="hover:text-white transition-colors duration-200" href="#tech">
            Aura Build
          </a>
<a className="hover:text-white transition-colors duration-200" href="#developer">
            Developer
          </a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">
            v2.0
          </a>
<button className="bg-white text-neutral-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">
            Get Access
          </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-brand-100 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
          Rebuilt with Aura Build Platform
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 pb-2">
          The intelligent assistant
          <br/>
          for your daily workflow.
        </h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Jarvis executes commands, answers queries, and automates tasks with
          unparalleled speed. Powered by advanced NLP and Voice Recognition.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition-all flex items-center gap-2 group">
            Start Assistant
            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</button>
<button className="h-12 px-8 rounded-full border border-neutral-700 text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-strokeWidth="1.5"></span>
            Watch Demo
          </button>
</div>
</div>

<div className="max-w-4xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-blue-600 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-1000"></div>
<div className="relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="h-12 border-b border-white/5 bg-neutral-900 flex items-center justify-between px-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-medium text-neutral-500">
              Jarvis v2.0 • Active
            </div>
<div className="w-16"></div>

</div>

<div className="h-80 p-6 flex flex-col justify-end space-y-6 bg-neutral-950/50">

<div className="flex items-end justify-end gap-3">
<div className="bg-neutral-800 text-neutral-200 px-4 py-2 rounded-2xl rounded-tr-sm text-sm border border-white/5">
                Jarvis, summarize my schedule for today.
              </div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
<span className="iconify text-neutral-400" data-icon="lucide:user" data-width="14"></span>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
<span className="iconify text-brand-400" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<div className="flex flex-col gap-2 max-w-[80%]">
<div className="bg-neutral-900 text-neutral-300 px-4 py-3 rounded-2xl rounded-tl-sm text-sm border border-white/10 shadow-sm">
<p className="mb-2">
                    Here is your schedule for
                    <span className="text-white font-medium">October 24th</span>
                    :
                  </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-neutral-400 text-xs">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      10:00 AM - Team Sync
                    </li>
<li className="flex items-center gap-2 text-neutral-400 text-xs">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      02:30 PM - Project Review
                    </li>
</ul>
</div>

<div className="flex items-center gap-1 h-4">
<div className="w-1 bg-brand-500/50 h-2 rounded-full animate-pulse"></div>
<div className="w-1 bg-brand-500/50 h-4 rounded-full animate-pulse delay-75"></div>
<div className="w-1 bg-brand-500/50 h-3 rounded-full animate-pulse delay-150"></div>
<div className="w-1 bg-brand-500/50 h-2 rounded-full animate-pulse delay-100"></div>
<span className="text-[10px] text-neutral-600 ml-2">
                    Voice playing...
                  </span>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-neutral-900 flex items-center gap-4">
<button className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 transition-colors">
<span className="iconify" data-icon="lucide:mic" data-strokeWidth="1.5" data-width="20"></span>
</button>
<div className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg h-10 flex items-center px-4">
<span className="text-neutral-600 text-sm">
                Type a command or ask a question...
              </span>
</div>

<label className="flex items-center cursor-pointer gap-2 group">
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-600 peer-checked:after:bg-white"></div>
</div>
<span className="text-[10px] font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors uppercase tracking-wider">
                Auto-Read
              </span>
</label>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
            Core Capabilities
          </h2>
<p className="text-neutral-400 max-w-xl">
            Designed to handle complex workflows with simple interactions.
            Scalable, secure, and always ready.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:bg-neutral-900/80">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-brand-500/10 group-hover:text-brand-400 transition-colors text-white">
<span className="iconify" data-icon="lucide:mic-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Voice Command Support
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Advanced speech recognition allows for hands-free operation. Speak
              naturally to execute complex tasks.
            </p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:bg-neutral-900/80">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors text-white">
<span className="iconify" data-icon="lucide:bot-message-square" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Text-based AI Chat
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Engage in context-aware conversations. Perfect for drafting
              emails, coding assistance, or casual queries.
            </p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:bg-neutral-900/80">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-colors text-white">
<span className="iconify" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Task Automation</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Automate repetitive daily tasks. From calendar management to
              system controls, Jarvis handles it.
            </p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:bg-neutral-900/80">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:text-amber-400 transition-colors text-white">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Fast Performance
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Lightweight architecture ensures minimal system resource usage
              while delivering instant responses.
            </p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:bg-neutral-900/80">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors text-white">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Secure &amp; Reliable
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Built with privacy-first principles. Your data is processed
              securely and the system is uptime-optimized.
            </p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:bg-neutral-900/80">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-rose-500/10 group-hover:text-rose-400 transition-colors text-white">
<span className="iconify" data-icon="lucide:brain-circuit" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Q&amp;A</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Leverages vast knowledge bases to provide accurate answers to
              factual, technical, and general questions.
            </p>
</div>
<div className="group p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:bg-neutral-900/80">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-colors text-white">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Universal Language Support
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Capable of understanding and processing natural language commands
              in any language instantly.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/30" id="tech">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center justify-between gap-16">
<div className="lg:w-1/2">
<span className="text-brand-400 font-medium text-sm tracking-wider uppercase mb-2 block">
              Architecture
            </span>
<h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">
              Powered by Aura Build Platform.
            </h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
              This upgrade represents a complete overhaul of the original Jarvis
              project. By migrating to the Aura Build Platform, we've achieved
              modular scalability and enhanced AI inference speeds.
            </p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="h-px flex-1 bg-neutral-800"></div>
<span className="text-xs text-neutral-500 uppercase tracking-widest">
                  Tech Stack
                </span>
<div className="h-px flex-1 bg-neutral-800"></div>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 rounded-md bg-neutral-800 border border-white/5 text-xs text-neutral-300 flex items-center gap-2">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span>
                  Artificial Intelligence
                </span>
<span className="px-3 py-1 rounded-md bg-neutral-800 border border-white/5 text-xs text-neutral-300 flex items-center gap-2">
<span className="iconify" data-icon="lucide:mic" data-width="14"></span>
                  Voice Recognition
                </span>
<span className="px-3 py-1 rounded-md bg-neutral-800 border border-white/5 text-xs text-neutral-300 flex items-center gap-2">
<span className="iconify" data-icon="lucide:languages" data-width="14"></span>
                  NLP
                </span>
<span className="px-3 py-1 rounded-md bg-neutral-800 border border-white/5 text-xs text-neutral-300 flex items-center gap-2">
<span className="iconify" data-icon="lucide:layers" data-width="14"></span>
                  Aura Build
                </span>
<span className="px-3 py-1 rounded-md bg-neutral-800 border border-white/5 text-xs text-neutral-300 flex items-center gap-2">
<span className="iconify" data-icon="lucide:globe" data-width="14"></span>
                  Multi-language
                </span>
</div>
</div>
</div>
<div className="lg:w-1/2 relative">

<div className="aspect-square w-full max-w-sm mx-auto relative">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
<div className="relative z-10 w-full h-full border border-white/10 rounded-2xl bg-neutral-950/80 backdrop-blur-sm p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-4xl font-semibold text-white">2.0</span>
<span className="px-2 py-1 bg-brand-500/10 text-brand-400 text-[10px] font-mono rounded">
                    STABLE
                  </span>
</div>
<div className="space-y-4">

<div>
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>NLP Accuracy</span>
<span>98%</span>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-white h-full w-[98%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>Latency</span>
<span className="text-brand-400">12ms</span>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-brand-500 h-full w-[92%]"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<p className="text-xs text-neutral-500 font-mono">
                    &gt; System_Check: OK
                    <br/>
                    &gt; Core_Modules: Loaded
                    <br/>
                    &gt; Ready_For_Interaction
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black text-center" id="developer">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-start">
<div className="flex items-center gap-2 mb-2">
<span className="iconify text-brand-500" data-icon="lucide:code-2" data-width="18"></span>
<span className="text-white font-medium text-sm">Krushna Rakhonde</span>
</div>
<p className="text-neutral-500 text-xs text-left">
            Category: AI Assistant • Version 2.0
          </p>
</div>
<div className="flex items-center gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 mb-12">
<div className="p-5 rounded-xl bg-neutral-900/40 border border-white/5 text-center backdrop-blur-sm">
<p className="text-neutral-500 text-xs leading-relaxed">
<span className="text-brand-400 font-semibold tracking-wide uppercase mr-1">
              Note:
            </span>
            This is a frontend demonstration build. AI responses and voice
            features are simulated and will be implemented in future versions.
            This project demonstrates the UI and workflow of an AI assistant.
            Functional AI and automation will be added in the next development
            phase.
          </p>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-[10px] text-neutral-700 uppercase tracking-widest">
          Designed with Aura Build Principles
        </p>
</div>
</footer>

    </>
  );
}
