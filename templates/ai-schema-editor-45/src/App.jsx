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
mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
},
colors: {
gray: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
950: '#0a0a0a',
}
}
}
}
}



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
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex z-10">
<div className="h-14 flex items-center px-6 border-b border-gray-200">
<span className="font-semibold text-lg tracking-tighter text-gray-950">SCHEMAFLOW</span>
</div>
<div className="p-4 flex flex-col gap-1 flex-1">
<div className="text-xs font-medium text-gray-400 mb-2 px-2 tracking-wide uppercase">Project</div>
<button className="flex items-center justify-between w-full px-2 py-1.5 rounded-md hover:bg-gray-100 transition-colors text-left group">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white text-xs font-semibold">A</div>
<span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Acme Corp</span>
</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="mt-6 text-xs font-medium text-gray-400 mb-2 px-2 tracking-wide uppercase">Menu</div>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-gray-100 text-gray-900 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-linear"></iconify-icon>
                Static Pages
            </a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:database-linear"></iconify-icon>
                CMS Collections
            </a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
                AEO Insights
            </a>
<div className="mt-auto">
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
                    Settings
                </a>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-10 shrink-0">
<div className="flex items-center gap-2 text-sm">
<span className="text-gray-500">Acme Corp</span>
<span className="text-gray-300">/</span>
<span className="text-gray-500">Static Pages</span>
<span className="text-gray-300">/</span>
<span className="font-medium text-gray-900">Pricing</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    Webflow Connected
                </div>
<button className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&amp;backgroundColor=f5f5f5"/>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
<div className="max-w-5xl mx-auto space-y-6">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Pricing Page Schema</h1>
<p className="text-sm text-gray-500 mt-1">Manage structured data injected into the head of /pricing.</p>
</div>
<div className="flex items-center gap-2">

<label className="flex items-center cursor-pointer mr-2">
<div className="relative">
<input checked="" className="sr-only" type="checkbox"/>
<div className="block bg-gray-900 w-8 h-5 rounded-full"></div>
<div className="dot absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition transform translate-x-3"></div>
</div>
<span className="ml-2 text-sm text-gray-600 font-medium">Auto-Sync</span>
</label>
<button className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            Discard
                        </button>
<button className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-1.5 shadow-sm">
<iconify-icon icon="solar:cloud-upload-linear"></iconify-icon>
                            Push to Webflow
                        </button>
</div>
</div>

<div className="flex items-center gap-2 border-b border-gray-200 pb-px">
<button className="px-3 py-1.5 text-sm font-medium text-gray-900 border-b-2 border-gray-900">FAQ Page</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">BreadcrumbList</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">Product</button>
<button className="px-2 py-1.5 text-gray-400 hover:text-gray-600 transition-colors flex items-center">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

<div className="lg:col-span-3 flex flex-col gap-6">

<div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-5 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
<div className="flex gap-3">
<div className="bg-white/10 p-2 rounded-lg shrink-0 w-10 h-10 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-sm">Generate from Webflow Content</h3>
<p className="text-xs text-gray-300 mt-0.5 line-clamp-2">Our AI agent will read the live pricing page and automatically build valid FAQ structured data based on the content found.</p>
</div>
</div>
<button className="shrink-0 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors shadow-sm">
                                Run Gemini AI
                            </button>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col">
<div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
<h2 className="font-medium text-sm text-gray-900">FAQ Items</h2>
<button className="text-xs font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:add-square-linear"></iconify-icon> Add Question
                                </button>
</div>
<div className="p-5 space-y-6">

<div className="group relative pl-4 border-l-2 border-gray-200 focus-within:border-gray-900 transition-colors">
<button className="absolute -right-2 top-0 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
<div className="space-y-3">
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Question</label>
<input className="w-full bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900 block px-3 py-2 outline-none transition-all placeholder-gray-400" placeholder="Enter question..." type="text" value="Is there a free trial available?"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Answer</label>
<textarea className="w-full bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900 block px-3 py-2 outline-none transition-all placeholder-gray-400 resize-none" rows="2">Yes, we offer a 14-day free trial on all paid plans. No credit card required.</textarea>
</div>
</div>
</div>

<div className="group relative pl-4 border-l-2 border-gray-200 focus-within:border-gray-900 transition-colors">
<button className="absolute -right-2 top-0 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
<div className="space-y-3">
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Question</label>
<input className="w-full bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900 block px-3 py-2 outline-none transition-all placeholder-gray-400" placeholder="Enter question..." type="text" value="Can I cancel my subscription at any time?"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Answer</label>
<textarea className="w-full bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900 block px-3 py-2 outline-none transition-all placeholder-gray-400 resize-none" rows="2">Absolutely. You can manage your subscription from your account settings and cancel whenever you want.</textarea>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 flex flex-col gap-6">

<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<div>
<h3 className="font-medium text-sm text-gray-900">Schema is Valid</h3>
<p className="text-xs text-gray-500">Passes Schema.org guidelines</p>
</div>
</div>
<button className="text-xs font-medium text-gray-500 hover:text-gray-900 border border-gray-200 rounded px-2 py-1 transition-colors">
                                Test with Google
                            </button>
</div>

<div className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden flex flex-col flex-1 shadow-lg max-h-[500px]">
<div className="px-4 py-2 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:code-square-linear"></iconify-icon>
<span className="text-xs font-medium text-gray-300">application/ld+json</span>
</div>
<button className="text-gray-500 hover:text-gray-300 transition-colors">
<iconify-icon className="text-sm" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
<div className="p-4 overflow-auto flex-1 text-xs font-mono leading-relaxed">
<pre className="m-0"><span className="text-gray-500">&lt;script type="application/ld+json"&gt;</span>
<span className="text-gray-300">{</span>
  <span className="text-blue-300">"@context"</span><span className="text-gray-300">:</span> <span className="text-green-300">"https://schema.org"</span><span className="text-gray-300">,</span>
  <span className="text-blue-300">"@type"</span><span className="text-gray-300">:</span> <span className="text-green-300">"FAQPage"</span><span className="text-gray-300">,</span>
  <span className="text-blue-300">"mainEntity"</span><span className="text-gray-300">: [</span>
    <span className="text-gray-300">{</span>
      <span className="text-blue-300">"@type"</span><span className="text-gray-300">:</span> <span className="text-green-300">"Question"</span><span className="text-gray-300">,</span>
      <span className="text-blue-300">"name"</span><span className="text-gray-300">:</span> <span className="text-green-300">"Is there a free trial available?"</span><span className="text-gray-300">,</span>
      <span className="text-blue-300">"acceptedAnswer"</span><span className="text-gray-300">: {</span>
        <span className="text-blue-300">"@type"</span><span className="text-gray-300">:</span> <span className="text-green-300">"Answer"</span><span className="text-gray-300">,</span>
        <span className="text-blue-300">"text"</span><span className="text-gray-300">:</span> <span className="text-green-300">"Yes, we offer a 14-day free trial on all paid plans. No credit card required."</span>
      <span className="text-gray-300">}</span>
    <span className="text-gray-300">},</span>
    <span className="text-gray-300">{</span>
      <span className="text-blue-300">"@type"</span><span className="text-gray-300">:</span> <span className="text-green-300">"Question"</span><span className="text-gray-300">,</span>
      <span className="text-blue-300">"name"</span><span className="text-gray-300">:</span> <span className="text-green-300">"Can I cancel my subscription at any time?"</span><span className="text-gray-300">,</span>
      <span className="text-blue-300">"acceptedAnswer"</span><span className="text-gray-300">: {</span>
        <span className="text-blue-300">"@type"</span><span className="text-gray-300">:</span> <span className="text-green-300">"Answer"</span><span className="text-gray-300">,</span>
        <span className="text-blue-300">"text"</span><span className="text-gray-300">:</span> <span className="text-green-300">"Absolutely. You can manage your subscription from your account settings and cancel whenever you want."</span>
      <span className="text-gray-300">}</span>
    <span className="text-gray-300">}</span>
  <span className="text-gray-300">]</span>
<span className="text-gray-300">}</span>
<span className="text-gray-500">&lt;/script&gt;</span></pre>
</div>
<div className="bg-gray-900/80 border-t border-gray-800 p-3 flex justify-between items-center">
<div className="flex items-center gap-1.5 text-xs text-gray-400">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                                    Updates live upon push
                                </div>
<span className="text-xs font-mono text-gray-500">642 bytes</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
