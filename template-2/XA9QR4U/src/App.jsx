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
      
<div className="mx-auto max-w-6xl px-6 py-10">

<header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 shadow-sm ring-1 ring-black/5">
<svg aria-hidden="true" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-3 8-10V6l-8-4-8 4v6c0 7 8 10 8 10z"></path>
<path d="M9 12l2 2 4-4"></path>
</svg>
</div>
<div>
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Guardian Browse</h1>
<p className="text-base text-gray-600">Blocks ads and cookie popups. Warns about breaches and malware. Built for simplicity.</p>
</div>
</div>
<div className="flex items-center gap-3">
<button aria-label="How to install" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-lg font-medium text-gray-900 shadow-sm hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400" id="howToBtn">
<i className="h-6 w-6" data-lucide="help-circle"></i>
            Help
          </button>
<button aria-label="Download extension as ZIP" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-lg font-medium text-white shadow-sm ring-1 ring-black/5 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400" id="buildZip">
<i className="h-6 w-6" data-lucide="download"></i>
            Download ZIP
          </button>
</div>
</header>

<main className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">

<section className="col-span-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
<h2 className="mb-4 text-2xl font-semibold tracking-tight">Quick setup</h2>
<p className="mb-6 text-lg text-gray-700">Clear, large controls. Keep the switches on for the safest experience.</p>
<div className="divide-y divide-gray-200">

<div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg bg-sky-50 p-2 ring-1 ring-sky-100">
<i className="h-6 w-6 text-sky-700" data-lucide="ban"></i>
</div>
<div>
<div className="text-xl font-medium text-gray-900">Ad Blocker</div>
<p className="text-lg text-gray-600">Removes distracting ads and trackers for calmer reading.</p>
</div>
</div>
<label className="relative inline-flex cursor-pointer select-none items-center">
<input checked className="peer sr-only" id="adblockToggle" type="checkbox" />
<div className="h-10 w-18 rounded-full bg-gray-200 peer-checked:bg-sky-600" style={{width: `58px`}}></div>
<div className="absolute left-1 top-1 h-8 w-8 rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 peer-checked:translate-x-[28px]"></div>
<span className="ml-3 text-lg font-medium text-gray-900">On</span>
</label>
</div>

<div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg bg-emerald-50 p-2 ring-1 ring-emerald-100">
<i className="h-6 w-6 text-emerald-700" data-lucide="cookie"></i>
</div>
<div>
<div className="text-xl font-medium text-gray-900">Cookie Popup Blocker</div>
<p className="text-lg text-gray-600">Hides cookie banners and chooses the strict option where possible.</p>
</div>
</div>
<label className="relative inline-flex cursor-pointer select-none items-center">
<input checked className="peer sr-only" id="cookieToggle" type="checkbox" />
<div className="h-10 w-18 rounded-full bg-gray-200 peer-checked:bg-emerald-600" style={{width: `58px`}}></div>
<div className="absolute left-1 top-1 h-8 w-8 rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 peer-checked:translate-x-[28px]"></div>
<span className="ml-3 text-lg font-medium text-gray-900">On</span>
</label>
</div>

<div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg bg-amber-50 p-2 ring-1 ring-amber-100">
<i className="h-6 w-6 text-amber-700" data-lucide="bell-ring"></i>
</div>
<div>
<div className="text-xl font-medium text-gray-900">Data Breach Alerts</div>
<p className="text-lg text-gray-600">Warns when a site you visit is on common breach lists.</p>
</div>
</div>
<label className="relative inline-flex cursor-pointer select-none items-center">
<input checked className="peer sr-only" id="breachToggle" type="checkbox" />
<div className="h-10 w-18 rounded-full bg-gray-200 peer-checked:bg-amber-600" style={{width: `58px`}}></div>
<div className="absolute left-1 top-1 h-8 w-8 rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 peer-checked:translate-x-[28px]"></div>
<span className="ml-3 text-lg font-medium text-gray-900">On</span>
</label>
</div>

<div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg bg-rose-50 p-2 ring-1 ring-rose-100">
<i className="h-6 w-6 text-rose-700" data-lucide="shield-alert"></i>
</div>
<div>
<div className="text-xl font-medium text-gray-900">Malware Alerts</div>
<p className="text-lg text-gray-600">Flags suspicious or known-dangerous sites.</p>
</div>
</div>
<label className="relative inline-flex cursor-pointer select-none items-center">
<input checked className="peer sr-only" id="malwareToggle" type="checkbox" />
<div className="h-10 w-18 rounded-full bg-gray-200 peer-checked:bg-rose-600" style={{width: `58px`}}></div>
<div className="absolute left-1 top-1 h-8 w-8 rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 peer-checked:translate-x-[28px]"></div>
<span className="ml-3 text-lg font-medium text-gray-900">On</span>
</label>
</div>

<div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg bg-violet-50 p-2 ring-1 ring-violet-100">
<i className="h-6 w-6 text-violet-700" data-lucide="type"></i>
</div>
<div>
<div className="text-xl font-medium text-gray-900">Text Size</div>
<p className="text-lg text-gray-600">Bigger text improves readability.</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="sizeBtn rounded-xl border border-gray-200 bg-white px-4 py-2 text-lg font-medium text-gray-900 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-sky-400" data-size="normal">Normal</button>
<button className="sizeBtn rounded-xl border border-gray-200 bg-white px-4 py-2 text-lg font-medium text-gray-900 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-sky-400" data-size="large">Large</button>
<button className="sizeBtn rounded-xl border border-gray-200 bg-white px-4 py-2 text-lg font-medium text-gray-900 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-sky-400" data-size="xlarge">Extra Large</button>
</div>
</div>
</div>
<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-lg font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-sky-400" id="testAlerts">
<i className="h-6 w-6" data-lucide="bell"></i>
              Test alert
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-lg font-medium text-white shadow-sm ring-1 ring-black/5 hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-sky-400" id="previewPopup">
<i className="h-6 w-6" data-lucide="app-window"></i>
              Preview popup
            </button>
</div>
</section>

<aside className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
<h3 className="mb-3 text-2xl font-semibold tracking-tight">How to install</h3>
<ol className="space-y-3 text-lg text-gray-700">
<li className="flex items-start gap-3">
<span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-base font-medium text-white">1</span>
              Click “Download ZIP”.
            </li>
<li className="flex items-start gap-3">
<span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-base font-medium text-white">2</span>
              Unzip it to a folder you can find.
            </li>
<li className="flex items-start gap-3">
<span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-base font-medium text-white">3</span>
              Open your browser’s Extensions, turn on “Developer mode”, then click “Load unpacked”.
            </li>
<li className="flex items-start gap-3">
<span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-base font-medium text-white">4</span>
              Select the folder you unzipped.
            </li>
</ol>
<div className="mt-6 rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
<div className="mb-2 flex items-center gap-2">
<i className="h-6 w-6 text-gray-700" data-lucide="smile-plus"></i>
<p className="text-lg font-medium text-gray-900">Tips for comfort</p>
</div>
<ul className="list-disc space-y-2 pl-5 text-lg text-gray-700">
<li>Use “Extra Large” text if things feel small.</li>
<li>Switches on = safer browsing.</li>
<li>Popups can be quiet; watch for a small badge on the toolbar.</li>
</ul>
</div>
<div className="mt-6 rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
<div className="mb-2 flex items-center gap-2">
<i className="h-6 w-6 text-gray-700" data-lucide="shield-check"></i>
<p className="text-lg font-medium text-gray-900">What’s inside</p>
</div>
<ul className="list-disc space-y-2 pl-5 text-lg text-gray-700">
<li>Ad blocking with safe default rules.</li>
<li>Cookie popups hidden and “Reject” chosen when available.</li>
<li>Alerts for common breach lists.</li>
<li>Malware and suspicious link warnings.</li>
</ul>
</div>
</aside>
</main>

<footer className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:flex-row">
<div className="text-lg text-gray-600">Safe. Simple. Focused on reading.</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-lg font-medium text-gray-900 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-sky-400" id="copyManifest">
<i className="h-6 w-6" data-lucide="clipboard"></i>
            Copy manifest
          </button>
<button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-lg font-medium text-gray-900 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-sky-400" id="resetDefaults">
<i className="h-6 w-6" data-lucide="rotate-ccw"></i>
            Reset
          </button>
</div>
</footer>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center bg-black/40 p-4" id="modal">
<div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-200">
<div className="mb-4 flex items-center justify-between">
<div className="flex items-center gap-3">
</div></div></div></div>
    </>
  );
}
