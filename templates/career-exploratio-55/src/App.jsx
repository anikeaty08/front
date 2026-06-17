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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-100/40 blur-[100px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-50/60 blur-[100px]"></div>
</div>

<header className="bg-white/70 backdrop-blur-xl border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shrink-0">
<div className="flex items-center gap-4">

<div className="bg-indigo-600 text-white font-medium tracking-tighter w-8 h-8 flex items-center justify-center rounded text-sm select-none shadow-sm">
                CCES
            </div>
<div className="w-0.5 h-5 bg-gray-200"></div>
<h1 className="text-base font-medium tracking-tight text-gray-900">Conversational Career Exploration System</h1>
<span className="bg-gray-100 border border-gray-200 text-gray-500 px-2 py-0.5 rounded text-xs ml-2 hidden sm:inline-block">Research Prototype</span>
</div>
<div className="text-sm text-gray-500 flex items-center gap-2">
<span className="hidden sm:inline">Participant ID:</span>
<span className="font-medium text-gray-700">8472-A</span>
<iconify-icon className="ml-1 text-gray-400" icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
</header>

<main className="flex-1 max-w-[96rem] w-full mx-auto p-4 md:p-6 flex flex-col lg:flex-row gap-6 lg:h-[calc(100vh-73px)] h-auto">

<section className="w-full lg:w-[40%] flex flex-col bg-white/80 backdrop-blur-xl rounded-xl border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] overflow-hidden h-[500px] lg:h-full shrink-0">

<div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between bg-white/50 shrink-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 text-gray-600 flex items-center justify-center">
<iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon>
</div>
<div>
<h2 className="text-sm font-medium tracking-tight text-gray-900">Career Exploration Chat</h2>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
<span className="text-xs text-gray-500">System Active</span>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-6">
<div className="flex justify-center">
<span className="text-xs text-gray-400 bg-white shadow-sm px-3 py-1 rounded-full border border-gray-100">Session Started • 10:24 AM</span>
</div>

<div className="flex gap-3 max-w-[90%]">
<div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
<iconify-icon icon="solar:smart-speaker-minimalistic-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-gray-500 ml-1">System</span>
<div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-gray-800 leading-relaxed">
                            Welcome to the career exploration study. I will ask you a few questions about your career interests.
                        </div>
</div>
</div>

<div className="flex gap-3 max-w-[90%]">
<div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
<iconify-icon icon="solar:smart-speaker-minimalistic-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-gray-500 ml-1">System</span>
<div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-gray-800 leading-relaxed">
                            What kinds of work activities do you find most interesting?
                        </div>
</div>
</div>

<div className="flex gap-3 max-w-[90%] ml-auto justify-end">
<div className="flex flex-col gap-1 items-end">
<span className="text-xs font-medium text-gray-500 mr-1">You</span>
<div className="bg-indigo-600 px-4 py-3 rounded-2xl rounded-tr-sm text-sm text-white shadow-sm leading-relaxed">
                            I enjoy analyzing data to find patterns, but I also like explaining those insights to other people.
                        </div>
</div>
</div>

<div className="flex gap-3 max-w-[90%]">
<div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
<iconify-icon icon="solar:smart-speaker-minimalistic-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-gray-500 ml-1">System</span>
<div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-gray-800 leading-relaxed">
                            Thank you. I will use your responses to identify occupations that may match your interests.
                        </div>
</div>
</div>

<div className="flex gap-3 max-w-[90%]">
<div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
<iconify-icon icon="solar:smart-speaker-minimalistic-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-gray-500 ml-1">System</span>
<div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-gray-800 leading-relaxed">
                            Do you know what kinds of work your parents or other family members do? Are there parts of their work that you find interesting or appealing?
                        </div>
</div>
</div>

<div className="flex gap-3 max-w-[90%] ml-auto justify-end">
<div className="flex flex-col gap-1 items-end">
<span className="text-xs font-medium text-gray-500 mr-1">You</span>
<div className="bg-indigo-600 px-4 py-3 rounded-2xl rounded-tr-sm text-sm text-white shadow-sm leading-relaxed">
                            My mother is a nurse and I like that she helps people directly and works closely with patients.
                        </div>
</div>
</div>

<div className="flex gap-3 max-w-[90%]">
<div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
<iconify-icon icon="solar:smart-speaker-minimalistic-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-gray-500 ml-1">System</span>
<div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-gray-800 leading-relaxed">
                            Thank you. I am updating the recommended occupations based on your responses.
                        </div>
</div>
</div>
</div>

<div className="p-4 border-t border-gray-100 bg-white/50 shrink-0">
<form className="relative flex items-end gap-3">
<div className="relative flex-1 bg-white rounded-xl border border-gray-200 shadow-sm focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-50 transition-all">
<textarea className="w-full bg-transparent pl-4 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none resize-none" placeholder="Type your response to the system..." rows="1"></textarea>
</div>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white h-[52px] w-[52px] rounded-xl transition-colors flex items-center justify-center shrink-0 shadow-sm" type="button">
<iconify-icon className="ml-0.5" icon="solar:plain-2-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</section>

<section className="w-full lg:w-[30%] flex flex-col bg-white/80 backdrop-blur-xl rounded-xl border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] overflow-hidden h-auto lg:h-full shrink-0">

<div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between bg-white/50 shrink-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 text-gray-600 flex items-center justify-center">
<iconify-icon icon="solar:pie-chart-2-linear" width="16"></iconify-icon>
</div>
<div>
<h2 className="text-sm font-medium tracking-tight text-gray-900">Interest Analysis</h2>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-8">

<p className="text-sm text-gray-500 leading-relaxed">
                    This panel displays how the language model extracts themes and preferences from your conversational responses in real-time.
                </p>

<div>
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Interest Themes</h3>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-white text-gray-700 text-xs border border-gray-200 shadow-sm">
<iconify-icon className="mr-1.5 text-indigo-500" icon="solar:graph-up-linear" width="14"></iconify-icon>
                            Data analysis
                        </span>
<span className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-white text-gray-700 text-xs border border-gray-200 shadow-sm">
<iconify-icon className="mr-1.5 text-indigo-500" icon="solar:chat-square-call-linear" width="14"></iconify-icon>
                            Explaining info
                        </span>
<span className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-white text-gray-700 text-xs border border-gray-200 shadow-sm">
<iconify-icon className="mr-1.5 text-indigo-500" icon="solar:heart-pulse-linear" width="14"></iconify-icon>
                            Helping people
                        </span>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Work Preferences</h3>
<div className="flex flex-col gap-2.5">
<div className="flex items-center gap-2.5 text-sm text-gray-700">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-sm"></span>
                            Problem solving
                        </div>
<div className="flex items-center gap-2.5 text-sm text-gray-700">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-sm"></span>
                            Working with people
                        </div>
<div className="flex items-center gap-2.5 text-sm text-gray-700">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-sm"></span>
                            Communication
                        </div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Matched O*NET Activities</h3>
<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Analyze data
                        </div>
<div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Interpret information
                        </div>
<div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Assist and care for others
                        </div>
<div className="px-4 py-3 flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Communicate insights
                        </div>
</div>
</div>
</div>
</section>

<aside className="w-full lg:w-[30%] flex flex-col bg-white/80 backdrop-blur-xl rounded-xl border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] overflow-hidden h-[500px] lg:h-full shrink-0">

<div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between bg-white/50 shrink-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 text-gray-600 flex items-center justify-center">
<iconify-icon icon="solar:list-check-linear" width="16"></iconify-icon>
</div>
<div>
<h2 className="text-sm font-medium tracking-tight text-gray-900">Recommended Occupations</h2>
<p className="text-xs text-gray-500 mt-0.5">Based on O*NET database</p>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-3">

<button className="w-full bg-white text-left p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:ring-1 hover:ring-indigo-100 transition-all group focus:outline-none shadow-sm">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Data Analyst</h4>
<span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full shrink-0">Strong Match</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Analyzes data to identify trends and support decision making.
                    </p>
</button>

<button className="w-full bg-white text-left p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:ring-1 hover:ring-indigo-100 transition-all group focus:outline-none shadow-sm">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">UX Designer</h4>
<span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full shrink-0">Strong Match</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Designs user experiences through research and interface design.
                    </p>
</button>

<button className="w-full bg-white text-left p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:ring-1 hover:ring-indigo-100 transition-all group focus:outline-none shadow-sm">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Nurse</h4>
<span className="text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full shrink-0">Potential Match</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Provides healthcare and direct support to patients.
                    </p>
</button>

<button className="w-full bg-white text-left p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:ring-1 hover:ring-indigo-100 transition-all group focus:outline-none shadow-sm">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Health Educator</h4>
<span className="text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full shrink-0">Potential Match</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Helps individuals understand health information and make informed decisions.
                    </p>
</button>

<button className="w-full bg-white text-left p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:ring-1 hover:ring-indigo-100 transition-all group focus:outline-none shadow-sm">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Environmental Scientist</h4>
<span className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-0.5 rounded-full shrink-0">Exploring</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Studies environmental problems and develops solutions.
                    </p>
</button>
</div>

<div className="p-4 border-t border-gray-100 bg-white/50 shrink-0">
<p className="text-xs text-gray-500 text-center flex justify-center items-center gap-1.5">
<iconify-icon icon="solar:info-circle-linear" width="14"></iconify-icon>
                    Click any occupation card to view Key Tasks &amp; Work Context
                </p>
</div>
</aside>
</main>

    </>
  );
}
