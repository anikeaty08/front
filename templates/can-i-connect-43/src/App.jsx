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
      

<header className="border-b border-zinc-200 bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-10">
<div className="flex items-center gap-3">
<div className="bg-zinc-900 text-white rounded-md w-8 h-8 flex items-center justify-center font-medium tracking-tighter text-sm">
                AI
            </div>
<span className="text-sm font-medium text-zinc-600">Workspace Settings</span>
</div>
<nav className="hidden sm:flex gap-6">
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Documentation</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Integrations</a>
</nav>
</header>

<main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12 flex flex-col gap-8">
<div className="flex flex-col gap-2">
<h1 className="text-3xl font-medium tracking-tight text-zinc-900">Repository Connection</h1>
<p className="text-base text-zinc-500 max-w-2xl leading-relaxed">
                Understanding how we can collaborate on your codebase and the limitations regarding direct external access.
            </p>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col gap-8">

<div className="flex items-start gap-4">
<div className="bg-zinc-100 text-zinc-600 p-2.5 rounded-xl flex-shrink-0 mt-0.5">
<iconify-icon height="24" icon="solar:shield-cross-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Direct Access Unavailable</h2>
<p className="text-sm text-zinc-500 leading-relaxed max-w-3xl">
                        I cannot connect to, authenticate with, or push changes directly to your repository. I operate in a secure, isolated environment without the ability to link to your account via OAuth or external credentials.
                    </p>
</div>
</div>
<div className="h-px w-full bg-zinc-100"></div>

<div className="flex flex-col gap-5">
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-zinc-900">Recommended Workflow</h3>
<p className="text-sm text-zinc-500">
                        To work together, we will use a manual exchange process. Here is how you can update your site with my help:
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">

<div className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-4 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<div className="bg-white border border-zinc-200 w-10 h-10 rounded-lg flex items-center justify-center shadow-sm">
<iconify-icon className="text-zinc-600" height="20" icon="solar:document-add-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-sm font-medium text-zinc-900">1. Share Code</span>
<span className="text-xs text-zinc-500 leading-relaxed">Copy the specific files or snippets from your local environment and share them with me here.</span>
</div>
</div>

<div className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-4 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<div className="bg-white border border-zinc-200 w-10 h-10 rounded-lg flex items-center justify-center shadow-sm">
<iconify-icon className="text-zinc-600" height="20" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-sm font-medium text-zinc-900">2. Request Edits</span>
<span className="text-xs text-zinc-500 leading-relaxed">Explain what needs to be built or changed. I will generate and provide the updated, optimized code.</span>
</div>
</div>

<div className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-4 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<div className="bg-white border border-zinc-200 w-10 h-10 rounded-lg flex items-center justify-center shadow-sm">
<iconify-icon className="text-zinc-600" height="20" icon="solar:git-commit-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-sm font-medium text-zinc-900">3. Apply &amp; Push</span>
<span className="text-xs text-zinc-500 leading-relaxed">Copy my output, paste it back into your project files, and push the changes to your remote repository.</span>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
