import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide icons
      lucide.createIcons();

      // Set current year
      (function () {
        var el = document.getElementById('year');
        if (el) el.textContent = new Date().getFullYear();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-sm bg-neutral-900 text-white grid place-items-center tracking-tighter text-[11px] font-semibold select-none">LM</div>
<span className="text-sm text-neutral-600">LinkedIn Outreach Messenger</span>
</div>
<nav className="hidden sm:flex items-center gap-4">
<a className="text-sm text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4" href="#quickstart">Quick start</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4" href="#structure">Folder structure</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4" href="#notes">Notes</a>
</nav>
</div>
</header>

<main className="mx-auto max-w-5xl px-6">
<section className="min-h-[60vh] grid place-items-center">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 text-center">
          LinkedIn Outreach Messenger
        </h1>
</section>

<div className="border-t border-neutral-200/80"></div>

<section className="py-10 sm:py-12" id="quickstart">
<div className="max-w-3xl">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">Quick start</h2>
<p className="mt-2 text-sm text-neutral-600">
            Choose either option below to view the homepage locally.
          </p>
<div className="mt-6 grid gap-4 sm:grid-cols-2">

<div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-700" data-lucide="monitor" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-neutral-900">Option A — Open the file directly</h3>
</div>
<ol className="mt-3 space-y-2 text-sm text-neutral-700 list-decimal list-inside">
<li>Create the folder structure below (see “Folder structure”).</li>
<li>Place this file at <span className="px-1 py-0.5 rounded bg-neutral-100 text-neutral-800">public/index.html</span>.</li>
<li>Double-click <span className="px-1 py-0.5 rounded bg-neutral-100 text-neutral-800">index.html</span> to open it in your browser.</li>
</ol>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-700" data-lucide="terminal" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-neutral-900">Option B — Serve locally</h3>
</div>
<p className="mt-3 text-sm text-neutral-700">From the project root, run one of the commands below:</p>
<div className="mt-3 space-y-3">
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
<div className="flex items-center gap-2 text-xs text-neutral-600">
<i className="h-3.5 w-3.5" data-lucide="server" strokeWidth="1.5"></i>
                    Static server (Node)
                  </div>
<pre className="mt-2 overflow-x-auto text-[12px] leading-relaxed text-neutral-800"><code>$ npx serve public -p 5173</code></pre>
</div>
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
<div className="flex items-center gap-2 text-xs text-neutral-600">
<i className="h-3.5 w-3.5" data-lucide="python" strokeWidth="1.5"></i>
                    Simple HTTP (Python 3)
                  </div>
<pre className="mt-2 overflow-x-auto text-[12px] leading-relaxed text-neutral-800"><code>$ cd public
$ python3 -m http.server 5173</code></pre>
</div>
</div>
<p className="mt-3 text-xs text-neutral-600">Then visit <span className="px-1 py-0.5 rounded bg-neutral-100 text-neutral-800">http://localhost:5173</span>.</p>
</div>
</div>
</div>
</section>

<div className="border-t border-neutral-200/80"></div>

<section className="py-10 sm:py-12" id="structure">
<div className="max-w-3xl">
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-neutral-700" data-lucide="folder-tree" strokeWidth="1.5"></i>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">Folder structure</h2>
</div>
<div className="mt-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
<pre className="text-[12px] leading-6 text-neutral-800 overflow-x-auto"><code>linkedin-outreach-messenger/
├─ public/
│  └─ index.html        ← this file (homepage)
├─ assets/
│  ├─ css/              ← optional styles later
│  └─ js/               ← optional scripts later
└─ README.md            ← optional notes</code></pre>
</div>
<p className="mt-4 text-sm text-neutral-700">
            This is a minimal, static setup. You can expand it later with scripts, data, and components as the app grows.
          </p>
</div>
</section>

<section className="py-10 sm:py-12" id="notes">
<div className="max-w-3xl">
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-neutral-700" data-lucide="info" strokeWidth="1.5"></i>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">Notes</h2>
</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
              This is the baseline UI. The next step can add lead inputs, message generation, and persistence.
            </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
              Keep this page as the root and progressively enhance to avoid framework lock-in early on.
            </li>
</ul>
</div>
</section>
</main>
<footer className="border-t border-neutral-200/80 bg-white">
<div className="mx-auto max-w-5xl px-6 py-6 text-xs text-neutral-600 flex items-center justify-between">
<span>© <span id="year">2025</span> LM</span>
<span className="hidden sm:inline">Single-user prototype</span>
</div>
</footer>


    </>
  );
}
