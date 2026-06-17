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
      

<div className="hidden">
        Weekly summary from the community lead - Highlights and updates.
    </div>

<div className="mx-auto w-full max-w-[600px] bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">

<div className="bg-white px-8 pt-8 pb-6 border-b border-zinc-100 flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>

<span className="text-zinc-900 font-semibold tracking-tighter text-lg">
                    Claude Code
                </span>
</div>
<div className="text-xs text-zinc-400 font-medium bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">
                {{WEEK_DATE}}
            </div>
</div>

<div className="grid grid-cols-3 divide-x divide-zinc-100 border-b border-zinc-100 bg-zinc-50/50">

<div className="p-5 flex flex-col items-center justify-center group hover:bg-white transition-colors">
<div className="flex items-center gap-1.5 text-zinc-400 mb-2 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
</div>
<div className="text-xl font-semibold text-zinc-900 tracking-tight leading-none mb-1">
                    12,450
                </div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Members
                </div>
</div>

<div className="p-5 flex flex-col items-center justify-center group hover:bg-white transition-colors">
<div className="flex items-center gap-1.5 text-zinc-400 mb-2 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:chat-line-linear" width="16"></iconify-icon>
</div>
<div className="text-xl font-semibold text-zinc-900 tracking-tight leading-none mb-1">
                    84.2k
                </div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Messages
                </div>
</div>

<div className="p-5 flex flex-col items-center justify-center group hover:bg-white transition-colors">
<div className="flex items-center gap-1.5 text-zinc-400 mb-2 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
<div className="text-xl font-semibold text-zinc-900 tracking-tight leading-none mb-1">
                    14
                </div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Events
                </div>
</div>
</div>

<div className="px-8 py-10">
<h1 className="text-2xl text-zinc-900 font-semibold tracking-tight leading-tight mb-6">
                Building momentum together
            </h1>
<div className="text-sm text-zinc-600 leading-relaxed space-y-4 mb-8">
<p>
                    It's been an incredible week for the Claude Code community. We saw record engagement in the #optimization channels, and the collaborative spirit on the new SDK release was truly inspiring. The quality of questions regarding structured outputs has pushed our internal team to rethink how we document edge cases.
                </p>
<p>
                    The team has been heads-down working on the feedback regarding context windows, and I'm excited to share that we have some significant improvements coming to the beta branch next Tuesday. Thank you to everyone who submitted pull requests this week.
                </p>
</div>

<div className="flex items-center gap-3 pt-2">
<div className="w-10 h-10 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-700">
<span className="font-semibold text-xs tracking-tight">DM</span>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">David Miller</div>
<div className="text-xs text-zinc-500">Community Lead</div>
</div>
</div>
</div>

<div className="h-px bg-zinc-100 mx-8"></div>

<div className="px-8 py-10 bg-white">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-orange-500" icon="solar:chat-round-line-linear" width="18"></iconify-icon>
<h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">Trending Discussions</h2>
</div>
<div className="space-y-4">

<a className="block group" href="#">
<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-200">
<div className="mt-1 text-zinc-400 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:hashtag-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1 group-hover:text-orange-600 transition-colors">Optimizing context windows for large codebases</h3>
<p className="text-xs text-zinc-500">24 replies • Started by @dev_sarah</p>
</div>
</div>
</a>

<a className="block group" href="#">
<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-200">
<div className="mt-1 text-zinc-400 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:hashtag-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1 group-hover:text-orange-600 transition-colors">Best practices for structured JSON outputs</h3>
<p className="text-xs text-zinc-500">18 replies • Started by @alex_code</p>
</div>
</div>
</a>

<a className="block group" href="#">
<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-200">
<div className="mt-1 text-zinc-400 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:hashtag-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1 group-hover:text-orange-600 transition-colors">New API rate limits explained</h3>
<p className="text-xs text-zinc-500">42 replies • Started by @system_mod</p>
</div>
</div>
</a>
</div>
<div className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon>
<span>{{COMMUNITY_STATS}} active developers this week</span>
</div>
</div>

<div className="px-8 py-10 bg-zinc-50 border-t border-b border-zinc-100">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-orange-500" icon="solar:box-minimalistic-linear" width="18"></iconify-icon>
<h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">Community Tools</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<a className="block bg-white p-5 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow" href="#">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-600">
<iconify-icon icon="solar:terminal-linear" width="18"></iconify-icon>
</div>
<iconify-icon className="text-zinc-300" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-zinc-900 tracking-tight mb-1">PromptLayer SDK</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Middleware for prompt engineering and tracking.</p>
</a>

<a className="block bg-white p-5 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow" href="#">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-600">
<iconify-icon icon="solar:layers-linear" width="18"></iconify-icon>
</div>
<iconify-icon className="text-zinc-300" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-zinc-900 tracking-tight mb-1">Context Clipper</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Browser extension to format docs for LLMs.</p>
</a>
</div>
</div>

<div className="px-8 py-10">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-orange-500" icon="solar:lightning-linear" width="18"></iconify-icon>
<h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">Quick Hits</h2>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<div className="mt-1 text-green-500 shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span>Python SDK v2.4.1 is now available with improved streaming support.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<div className="mt-1 text-green-500 shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span>New "System Prompt" library added to the developer docs.</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<div className="mt-1 text-green-500 shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span>Webinar: Building Agents with Claude - Thursday 2PM PST.</span>
</li>
</ul>
</div>

<div className="bg-zinc-50 border-t border-zinc-100 px-8 py-8 text-center">
<div className="flex justify-center gap-6 mb-6">
<a className="text-zinc-400 hover:text-orange-500 transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-orange-500 transition-colors" href="#">
<iconify-icon icon="brandico:github" width="16"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-orange-500 transition-colors" href="#">
<iconify-icon icon="solar:globe-linear" width="16"></iconify-icon>
</a>
</div>
<p className="text-xs text-zinc-400 mb-2">
                © {{YEAR}} Claude Code. All rights reserved.
            </p>
<p className="text-xs text-zinc-400">
                123 Innovation Drive, Tech City, TC 94000
            </p>
<div className="mt-4 flex justify-center gap-4 text-xs">
<a className="text-zinc-500 hover:text-zinc-800 underline decoration-zinc-300 underline-offset-2" href="#">Preferences</a>
<span className="text-zinc-300">|</span>
<a className="text-zinc-500 hover:text-zinc-800 underline decoration-zinc-300 underline-offset-2" href="#">Unsubscribe</a>
</div>
</div>
</div>

    </>
  );
}
