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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
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
      

<aside className="hidden md:flex w-[260px] flex-col border-r border-gray-200 bg-gray-50/50 h-full flex-shrink-0">

<div className="h-14 flex items-center px-4 border-b border-gray-100">
<button className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
<div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center text-white shadow-sm shadow-indigo-200">
<iconify-icon icon="lucide:sparkles" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight text-gray-900">Workspace</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-200 text-gray-600">PRO</span>
</button>
</div>

<div className="p-3">
<button className="w-full flex items-center gap-2.5 px-3 py-2 bg-white border border-gray-200/75 rounded-lg shadow-sm hover:border-indigo-300 hover:ring-1 hover:ring-indigo-100 transition-all duration-200 group">
<iconify-icon className="text-gray-400 group-hover:text-indigo-600 transition-colors" icon="lucide:plus" strokeWidth="2" width="16"></iconify-icon>
<span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">New Chat</span>
</button>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar px-3 space-y-6">

<div>
<div className="px-2 mb-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider">Recent</div>
<div className="space-y-0.5">
<button className="w-full text-left px-2 py-1.5 rounded-md bg-white border border-gray-200/50 shadow-sm text-gray-900 text-sm truncate flex items-center gap-2 group">
<span className="truncate font-medium">Streamlit Deployment</span>
</button>
<button className="w-full text-left px-2 py-1.5 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900 text-sm truncate transition-colors flex items-center gap-2 group">
<span className="truncate">Python Data Analysis</span>
</button>
<button className="w-full text-left px-2 py-1.5 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900 text-sm truncate transition-colors flex items-center gap-2 group">
<span className="truncate">React State Management</span>
</button>
</div>
</div>

<div>
<div className="px-2 mb-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider">Yesterday</div>
<div className="space-y-0.5">
<button className="w-full text-left px-2 py-1.5 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900 text-sm truncate transition-colors flex items-center gap-2 group">
<span className="truncate">Tailwind Config Help</span>
</button>
<button className="w-full text-left px-2 py-1.5 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900 text-sm truncate transition-colors flex items-center gap-2 group">
<span className="truncate">Docker Setup</span>
</button>
</div>
</div>
</div>

<div className="p-3 border-t border-gray-200 mt-auto">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-white hover:shadow-sm hover:border hover:border-gray-200/50 transition-all">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-white border border-gray-200 flex items-center justify-center text-indigo-600 text-xs font-semibold">
                    JD
                </div>
<div className="flex flex-col items-start min-w-0">
<span className="text-sm font-medium text-gray-900 truncate w-full text-left">John Doe</span>
<span className="text-xs text-gray-500 truncate">john@example.com</span>
</div>
<iconify-icon className="ml-auto text-gray-400" icon="lucide:settings-2" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full min-w-0 bg-white relative">

<header className="h-14 border-b border-gray-100 flex items-center justify-between px-4 sticky top-0 bg-white/80 backdrop-blur-md z-10">
<div className="flex items-center gap-2 md:hidden">
<button className="p-1.5 -ml-1.5 text-gray-500 hover:text-gray-900">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
<span className="font-semibold text-sm">Assistant</span>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-gray-50 text-sm font-medium text-gray-600 transition-colors">
<span>GPT-4</span>
<iconify-icon className="text-gray-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-gray-400 hover:text-gray-900 transition-colors hover:bg-gray-50 rounded-md">
<iconify-icon icon="lucide:share" width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-0">
<div className="max-w-3xl mx-auto flex flex-col gap-6 md:py-10 pb-32">



<div className="flex flex-row-reverse gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
<iconify-icon className="text-gray-500" icon="lucide:user" width="16"></iconify-icon>
</div>
<div className="flex flex-col items-end max-w-[85%] md:max-w-[80%]">
<div className="bg-indigo-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-sm text-[15px] leading-relaxed">
                            How do I deploy a Streamlit app without an API key?
                        </div>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-indigo-100 flex items-center justify-center shadow-sm shadow-indigo-100">
<iconify-icon className="text-indigo-600" icon="lucide:sparkles" width="16"></iconify-icon>
</div>
<div className="flex flex-col items-start max-w-[90%] md:max-w-[85%] min-w-0">
<div className="flex items-center gap-2 mb-1.5 px-1">
<span className="text-sm font-semibold text-gray-900">Assistant</span>
<span className="text-xs text-gray-400">Just now</span>
</div>
<div className="text-gray-700 text-[15px] leading-7 space-y-4">
<p>To deploy a Streamlit app that functions without external API keys (like OpenAI), you need to rely on <span className="font-medium text-gray-900">local logic</span> or rule-based responses. Here is a simple approach using pure Python:</p>

<div className="rounded-lg border border-gray-200 bg-gray-50 overflow-hidden my-2">
<div className="flex items-center justify-between px-3 py-2 bg-gray-100/50 border-b border-gray-200/50">
<span className="text-xs font-medium text-gray-500 font-mono">app.py</span>
<button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon icon="lucide:copy" width="12"></iconify-icon>
                                        Copy
                                    </button>
</div>
<div className="p-4 overflow-x-auto custom-scrollbar">
<pre className="font-mono text-sm leading-6"><code className="language-python"><span className="text-purple-600">import</span> streamlit <span className="text-purple-600">as</span> st

<span className="text-gray-500"># 1. Define local response logic</span>
<span className="text-blue-600">def</span> <span className="text-yellow-600">get_response</span>(prompt):
    <span className="text-purple-600">if</span> <span className="text-green-600">"hello"</span> <span className="text-purple-600">in</span> prompt.lower():
        <span className="text-purple-600">return</span> <span className="text-green-600">"Hi there! I am your local bot."</span>
    <span className="text-purple-600">return</span> <span className="text-green-600">"I can help with Python and CSS."</span>

<span className="text-gray-500"># 2. Setup UI</span>
st.title(<span className="text-green-600">"Local Chatbot"</span>)
prompt = st.chat_input(<span className="text-green-600">"Say something"</span>)

<span className="text-purple-600">if</span> prompt:
    st.write(f<span className="text-green-600">"User: {prompt}"</span>)
    st.write(f<span className="text-green-600">"Bot: {get_response(prompt)}"</span>)</code></pre>
</div>
</div>
<p>You can deploy this directly to Streamlit Cloud by connecting your GitHub repository. Since it uses no secrets, no configuration is needed.</p>
</div>

<div className="flex items-center gap-2 mt-4">
<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors">
<iconify-icon icon="lucide:thumbs-up" width="14"></iconify-icon>
                                Helpful
                            </button>
<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors">
<iconify-icon icon="lucide:refresh-cw" width="14"></iconify-icon>
                                Regenerate
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-200/60 p-4 z-20">
<div className="max-w-3xl mx-auto space-y-3">

<div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
<button className="flex-shrink-0 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-indigo-300 hover:text-indigo-700 transition-colors">
                        Add a requirements.txt
                    </button>
<button className="flex-shrink-0 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-indigo-300 hover:text-indigo-700 transition-colors">
                        Make it look like ChatGPT
                    </button>
<button className="flex-shrink-0 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-indigo-300 hover:text-indigo-700 transition-colors">
                        Explain the code
                    </button>
</div>

<div className="relative group bg-white border border-gray-200 rounded-xl shadow-sm hover:border-gray-300 focus-within:ring-2 focus-within:ring-indigo-500/10 focus-within:border-indigo-400 transition-all">
<textarea className="w-full bg-transparent text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none py-3.5 pl-4 pr-12 resize-none rounded-xl" placeholder="Send a message to Python-v1..." rows="1"></textarea>
<div className="absolute bottom-2 right-2 flex items-center gap-1">
<button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors" title="Attach">
<iconify-icon icon="lucide:paperclip" strokeWidth="2" width="18"></iconify-icon>
</button>
<button className="p-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-colors disabled:opacity-50">
<iconify-icon icon="lucide:arrow-up" strokeWidth="2.5" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="text-center">
<p className="text-[10px] text-gray-400">AI can make mistakes. Please verify important information.</p>
</div>
</div>
</div>
</main>

    </>
  );
}
