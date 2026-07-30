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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    // Lucide icons
    lucide.createIcons();

    // Fade in on scroll
    function fadeInOnScroll() {
      document.querySelectorAll('.animate-fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 60){
          el.class}})}
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
      
<section className="w-full px-4 sm:px-8 py-16 lg:py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative">
<div className="absolute -top-28 left-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center mb-14">
<span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-800/70 border border-gray-700/60 text-indigo-300 rounded-full text-sm font-medium mb-5 shadow-sm">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
          New in v3.2
        </span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight font-inter text-white mb-4">
          Platform Features Built for Next-Level Productivity
        </h2>
<p className="max-w-2xl mx-auto text-gray-400 text-lg font-normal">
          Discover how FlowSync connects your favorite tools, automates workflows, and gives you actionable insights—all in one unified workspace.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

<div className="animate-fade-in bg-gray-900/60 border border-gray-800 rounded-2xl p-7 shadow-sm backdrop-blur-xl transition relative in-view">
<div className="flex items-center gap-3 mb-3">
<div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-wand-2 w-5 h-5 text-white" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<span className="text-indigo-300 text-xs font-medium bg-indigo-800/30 px-2 py-0.5 rounded">AI-Powered</span>
</div>
<h3 className="font-semibold text-lg text-white mb-2">Smart Automations</h3>
<p className="text-gray-400 mb-6 text-sm">
            Let FlowSync handle the busywork. Trigger actions across Slack, Notion, GitHub, and more with a single rule—no code needed.
          </p>
<ul className="text-gray-400 text-xs mb-6 space-y-2">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
              Drag-and-drop workflow builder
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
              300+ app integrations
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 text-blue-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Real-time triggers
            </li>
</ul>
<a className="inline-flex items-center gap-2 text-indigo-300 font-medium text-sm hover:underline transition" href="#">
            See automation templates
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>

<div className="animate-fade-in bg-gray-900/60 border border-gray-800 rounded-2xl p-7 shadow-sm backdrop-blur-xl transition relative in-view">
<div className="flex items-center gap-3 mb-3">
<div className="w-11 h-11 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-inbox w-5 h-5 text-white" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path></path></svg>
</div>
<span className="text-green-200 text-xs font-medium bg-green-900/30 px-2 py-0.5 rounded">Beta</span>
</div>
<h3 className="font-semibold text-lg text-white mb-2">Unified Inbox</h3>
<p className="text-gray-400 mb-6 text-sm">
            View and respond to messages, code reviews, and updates from all your tools in one focused feed—never miss an important notification again.
          </p>
<div className="flex items-center mt-4 mb-6 gap-5">
<div className="flex items-center gap-1">
<svg className="lucide lucide-slack w-5 h-5 text-indigo-400" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3"></rect><path></path><rect height="8" rx="1.5" width="3"></rect><path></path><rect height="3" rx="1.5" width="8"></rect><path></path><rect height="3" rx="1.5" width="8"></rect><path></path></svg>
<span className="text-xs text-gray-400">Slack</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-github w-5 h-5 text-gray-300" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-xs text-gray-400">GitHub</span>
</div>
<div className="flex items-center gap-1">
<span className="text-xs text-gray-400">Notion</span>
</div>
</div>
<button className="w-full py-2.5 bg-green-700/20 text-green-300 font-medium rounded-lg transition-all flex items-center justify-center gap-2">
<svg className="lucide lucide-mail-open w-4 h-4" data-lucide="mail-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
            Try Unified Inbox
          </button>
</div>

<div className="animate-fade-in bg-gray-900/60 border border-gray-800 rounded-2xl p-7 shadow-sm backdrop-blur-xl transition relative flex flex-col in-view">
<div className="flex items-center gap-3 mb-3">
<div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-bar-chart-4 w-5 h-5 text-white" data-lucide="bar-chart-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</div>
<span className="text-purple-200 text-xs font-medium bg-purple-900/30 px-2 py-0.5 rounded">Insights</span>
</div>
<h3 className="font-semibold text-lg text-white mb-2">Analytics Dashboard</h3>
<p className="text-gray-400 mb-5 text-sm">
            Track productivity, workflow efficiency, and team engagement with real-time dashboards and actionable metrics.
          </p>
<div className="flex-1 flex flex-col">
<div className="bg-gray-800/70 border border-gray-700 rounded-lg p-3 mb-5 flex items-center justify-between">
<div>
<div className="text-2xl font-bold text-purple-300 mb-1">+27%</div>
<div className="text-xs text-gray-400">More tasks automated</div>
</div>
<div>
<canvas height="100" id="featureChart" style={{display: `block`, boxSizing: `border-box`, height: `50px`, width: `90px`}} width="180"></canvas>
</div>
</div>
<div className="flex gap-2 text-xs text-gray-400 justify-between">
<span className="flex items-center gap-1">
<svg className="lucide lucide-clock w-4 h-4 text-indigo-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Last 7 days
              </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-activity w-4 h-4 text-green-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> 99.9% uptime
              </span>
</div>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-purple-200 font-medium text-sm hover:underline transition" href="#">
            Explore analytics
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>

<div className="animate-fade-in bg-gray-900/60 border border-gray-800 rounded-2xl p-7 shadow-sm backdrop-blur-xl transition relative in-view">
<div className="flex items-center gap-3 mb-3">
<div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-shield-check w-5 h-5 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<span className="text-blue-200 text-xs font-medium bg-blue-900/30 px-2 py-0.5 rounded">Secure</span>
</div>
<h3 className="font-semibold text-lg text-white mb-2">Secure Collaboration</h3>
<p className="text-gray-400 mb-6 text-sm">
            Work confidently across teams with enterprise-grade permission controls, granular sharing, and full audit logs.
          </p>
<ul className="text-gray-400 text-xs mb-6 space-y-2">
<li className="flex items-center gap-2">
<svg className="lucide lucide-lock w-4 h-4 text-blue-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18"></rect><path></path></svg>
              SSO & 2FA support
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4 text-cyan-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
              Team & role management
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-file-text w-4 h-4 text-gray-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
              Compliance reports
            </li>
</ul>
<a className="inline-flex items-center gap-2 text-blue-200 font-medium text-sm hover:underline transition" href="#">
            Learn about security
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>

<div className="animate-fade-in bg-gray-900/60 border border-gray-800 rounded-2xl p-7 shadow-sm backdrop-blur-xl transition relative in-view">
<div className="flex items-center gap-3 mb-3">
<div className="w-11 h-11 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-code w-5 h-5 text-white" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<span className="text-pink-200 text-xs font-medium bg-pink-900/30 px-2 py-0.5 rounded">Developer</span>
</div>
<h3 className="font-semibold text-lg text-white mb-2">Custom Integrations</h3>
<p className="text-gray-400 mb-6 text-sm">
            Build your own integrations with our open API, webhooks, and event subscriptions. Extend FlowSync to match any workflow.
          </p>
<ul className="text-gray-400 text-xs mb-6 space-y-2">
<li className="flex items-center gap-2">
              
              REST & GraphQL APIs
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-webhook w-4 h-4 text-rose-400" data-lucide="webhook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
              Real-time webhooks
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-book-open w-4 h-4 text-gray-400" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
              Complete documentation
            </li>
</ul>
<a className="inline-flex items-center gap-2 text-pink-200 font-medium text-sm hover:underline transition" href="#">
            View API docs
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>

<div className="animate-fade-in bg-gray-900/60 border border-gray-800 rounded-2xl p-7 shadow-sm backdrop-blur-xl transition relative in-view">
<div className="flex items-center gap-3 mb-3">
<div className="w-11 h-11 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-search w-5 h-5 text-white" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="11" cy="11"></circle></svg>
</div>
<span className="text-yellow-200 text-xs font-medium bg-yellow-900/30 px-2 py-0.5 rounded">New</span>
</div>
<h3 className="font-semibold text-lg text-white mb-2">Advanced Search</h3>
<p className="text-gray-400 mb-6 text-sm">
            Instantly find anything—tasks, messages, files, or integrations—with blazing fast, natural language search and smart filters.
          </p>
<ul className="text-gray-400 text-xs mb-6 space-y-2">
<li className="flex items-center gap-2">
<svg className="lucide lucide-zap w-4 h-4 text-yellow-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
              Natural language queries
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-filter w-4 h-4 text-orange-400" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
              Deep filtering options
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-list w-4 h-4 text-gray-400" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path></svg>
              Saved searches
            </li>
</ul>
<a className="inline-flex items-center gap-2 text-yellow-200 font-medium text-sm hover:underline transition" href="#">
            Try advanced search
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
</div>
</div>
</section>

    </>
  );
}
