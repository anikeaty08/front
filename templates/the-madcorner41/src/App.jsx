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
      

<header className="border-b border-zinc-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-zinc-900 text-white rounded flex items-center justify-center text-xs">
                    FX
                </div>
                FLEX
            </a>
<nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Products</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Solutions</a>
<a className="text-zinc-900 transition-colors" href="#">Blog</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors hidden sm:block">Log in</button>
<button className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors">Get Started</button>
</div>
</div>
</header>

<main className="max-w-3xl mx-auto px-6 py-16 md:py-24">

<header className="mb-14">
<div className="flex items-center gap-3 text-xs font-medium text-zinc-500 mb-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-600">
<iconify-icon className="text-base" icon="solar:document-text-linear"></iconify-icon>
                    Productivity
                </span>
<span>•</span>
<span>Published October 24</span>
<span>•</span>
<span>5 min read</span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.15] mb-8">
                The shift to the browser: Why online PDF editors are the new standard
            </h1>
<div className="flex items-center gap-4 pt-6 border-t border-zinc-200/60">
<img alt="Author Avatar" className="w-11 h-11 rounded-full bg-zinc-200 object-cover" src="https://i.pravatar.cc/150?img=68"/>
<div>
<div className="text-sm font-medium text-zinc-900">Marcus Wright</div>
<div className="text-xs text-zinc-500 mt-0.5">Head of Product at DocumentCloud</div>
</div>
</div>
</header>

<article className="text-base text-zinc-600 leading-relaxed space-y-8">
<p>
                For decades, the Portable Document Format (PDF) has been the undisputed king of digital paperwork. From legal contracts to design portfolios, it ensures that what you see on your screen is exactly what the recipient sees on theirs. However, the way we interact with these files has drastically changed.
            </p>
<p>
                Gone are the days when you needed a bulky, expensive desktop application just to merge two pages or add a signature. The modern internet browser has evolved into a powerful operating system in its own right, paving the way for intuitive, lightning-fast online PDF editors.
            </p>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mt-12 mb-4">
                Why abandon the desktop?
            </h2>
<p>
                The primary driver behind this shift is friction. Downloading software, managing licenses, and pushing updates across an organization creates an IT headache. Online editors eliminate this completely.
            </p>
<ul className="space-y-4 my-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<strong className="font-medium text-zinc-900 block">Universal Access</strong>
<span className="text-sm">Whether you are on a Mac, Windows PC, or a Chromebook, your tools are always accessible via a simple URL.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<strong className="font-medium text-zinc-900 block">Always Up-to-Date</strong>
<span className="text-sm">Cloud-based tools iterate rapidly. You never have to manually install an update to get the latest features.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<strong className="font-medium text-zinc-900 block">Zero Storage Bloat</strong>
<span className="text-sm">Modern editors process files in the cloud or securely in-browser, saving your local storage for what matters.</span>
</div>
</li>
</ul>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mt-12 mb-4">
                The ultimate solution for your documents
            </h2>
<p>
                Not all web-based editors are created equal. Many restrict file sizes, add aggressive watermarks, or force you into a premium tier just to export. When looking for a solution, you need a tool that respects your workflow and handles your data securely.
            </p>

<div className="my-10 bg-white border border-zinc-200 shadow-sm rounded-2xl p-8 overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white shadow-sm">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900">Experience seamless editing</h3>
</div>
<p className="text-sm text-zinc-600 mb-8 max-w-lg">
                        If you're looking for a robust, privacy-first platform that handles text editing, merging, conversions, and e-signatures without the clutter, we highly recommend trying out FlexFiles. It's built for the modern professional.
                    </p>
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-all shadow-sm hover:shadow active:scale-95 group" href="https://flexfiles.io/en/pdf-editor" rel="noopener noreferrer" target="_blank">
                        Open FlexFiles Editor
                        <iconify-icon className="text-base group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<p>
                As remote work and asynchronous communication continue to dominate, having a reliable online editor in your bookmark bar isn't just a convenience—it's a necessity. It ensures you can review, sign, and return critical documents in seconds, maintaining your momentum regardless of where you are working from.
            </p>
</article>

<div className="mt-16 pt-8 border-t border-zinc-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex gap-2">
<span className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-md">PDF</span>
<span className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-md">Cloud</span>
<span className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-md">Tools</span>
</div>
<div className="flex items-center gap-3 text-zinc-400">
<button aria-label="Share via Link" className="hover:text-zinc-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:link-linear"></iconify-icon>
</button>
<button aria-label="Share on Twitter" className="hover:text-zinc-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:letter-opened-linear"></iconify-icon>
</button>
</div>
</div>
</main>

<footer className="border-t border-zinc-200/60 bg-white py-12">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-lg font-medium tracking-tighter text-zinc-400">FLEX</div>
<p className="text-xs text-zinc-500 font-medium">
                © 2024 Flex Systems. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
