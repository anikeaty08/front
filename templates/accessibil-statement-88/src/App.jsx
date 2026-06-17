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
      
<main className="mx-auto max-w-3xl px-6 py-16 md:py-24">

<header className="mb-16">
<div className="mb-6 inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-500 shadow-sm">
<span className="iconify mr-2 text-stone-800" data-icon="lucide:accessibility" data-strokeWidth="1.5" data-width="14"></span>
                Inclusivity First
            </div>
<h1 className="mb-6 text-3xl font-medium leading-tight tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
                Accessibility Statement
            </h1>
<p className="leading-relaxed">
                We are committed to providing exceptional service to all customers, ensuring equal and convenient access to information and services on this website regardless of ability, making our content accessible and user-friendly for everyone.
            </p>
</header>

<section className="mb-16 space-y-6">
<h2 className="text-xl font-medium tracking-tight text-stone-900">Standards &amp; Compliance</h2>
<p className="leading-relaxed">
                To ensure web accessibility for all, we adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 AA. These guidelines, developed by the W3C Web Accessibility Initiative, set the benchmark for making web content accessible to people with disabilities.
            </p>
<p className="leading-relaxed">
                While our website largely meets these standards, we continuously strive to exceed industry expectations.
            </p>
</section>

<section className="mb-16">
<h2 className="mb-8 text-xl font-medium tracking-tight text-stone-900">Measures Implemented</h2>
<div className="grid gap-6 md:grid-cols-2">

<div className="group rounded-xl border border-stone-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
<div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-stone-50 text-stone-900">
<span className="iconify" data-icon="lucide:compass" data-strokeWidth="1.5" data-width="18"></span>
</div>
<h3 className="mb-2 text-sm font-medium text-stone-900">Navigation</h3>
<p className="text-sm leading-relaxed text-stone-500">Clear page structure and consistent navigation menus across the entire site.</p>
</div>

<div className="group rounded-xl border border-stone-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
<div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-stone-50 text-stone-900">
<span className="iconify" data-icon="lucide:keyboard" data-strokeWidth="1.5" data-width="18"></span>
</div>
<h3 className="mb-2 text-sm font-medium text-stone-900">Keyboard Operation</h3>
<p className="text-sm leading-relaxed text-stone-500">Ensuring all interactive functions can be fully operated via keyboard alone.</p>
</div>

<div className="group rounded-xl border border-stone-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
<div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-stone-50 text-stone-900">
<span className="iconify" data-icon="lucide:type" data-strokeWidth="1.5" data-width="18"></span>
</div>
<h3 className="mb-2 text-sm font-medium text-stone-900">Text &amp; Structure</h3>
<p className="text-sm leading-relaxed text-stone-500">Using semantic HTML headings, alt text for images, and ensuring sufficient contrast.</p>
</div>

<div className="group rounded-xl border border-stone-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
<div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-stone-50 text-stone-900">
<span className="iconify" data-icon="lucide:palette" data-strokeWidth="1.5" data-width="18"></span>
</div>
<h3 className="mb-2 text-sm font-medium text-stone-900">Color &amp; Contrast</h3>
<p className="text-sm leading-relaxed text-stone-500">Rigorously checking that text-to-background contrast ratios meet readability requirements.</p>
</div>

<div className="group rounded-xl border border-stone-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
<div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-stone-50 text-stone-900">
<span className="iconify" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="18"></span>
</div>
<h3 className="mb-2 text-sm font-medium text-stone-900">ARIA Implementation</h3>
<p className="text-sm leading-relaxed text-stone-500">Prudent use of ARIA roles and attributes to supplement semantics on complex controls.</p>
</div>

<div className="group rounded-xl border border-stone-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
<div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-stone-50 text-stone-900">
<span className="iconify" data-icon="lucide:ear" data-strokeWidth="1.5" data-width="18"></span>
</div>
<h3 className="mb-2 text-sm font-medium text-stone-900">Assistive Technology</h3>
<p className="text-sm leading-relaxed text-stone-500">Optimizing form labels to improve compatibility with screen readers and other assistive tech.</p>
</div>
</div>
</section>

<section className="mb-16 rounded-lg bg-stone-100 p-8">
<h3 className="mb-4 text-base font-medium text-stone-900">Browsing Tips</h3>
<p className="text-sm leading-relaxed text-stone-600">
                For a better experience, you can navigate using the <kbd className="rounded border border-stone-300 bg-white px-1.5 py-0.5 font-mono text-xs text-stone-800">Tab</kbd> and <kbd className="rounded border border-stone-300 bg-white px-1.5 py-0.5 font-mono text-xs text-stone-800">Arrow</kbd> keys. We also support system-native screen reading features as well as third-party screen reader software.
            </p>
</section>

<section className="border-t border-stone-200 pt-16">
<h2 className="mb-6 text-xl font-medium tracking-tight text-stone-900">Feedback &amp; Support</h2>
<p className="mb-8 leading-relaxed">
                We are dedicated to providing the best experience for all users. If you encounter any barriers while accessing this site, please contact our Accessibility Services Team at <a className="font-medium text-stone-900 underline decoration-stone-300 decoration-1 underline-offset-4 transition-colors hover:decoration-stone-600" href="mailto:accessibility@dji.com">accessibility@dji.com</a>.
            </p>
<div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
<p className="mb-6 text-sm font-medium text-stone-900">To help us resolve the issue efficiently, please include:</p>
<ul className="space-y-3 text-sm text-stone-600">
<li className="flex items-start gap-3">
<span className="iconify mt-0.5 shrink-0 text-stone-400" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="16"></span>
<span>A description of the problem</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify mt-0.5 shrink-0 text-stone-400" data-icon="lucide:mouse-pointer-click" data-strokeWidth="1.5" data-width="16"></span>
<span>The action you were trying to perform</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify mt-0.5 shrink-0 text-stone-400" data-icon="lucide:link" data-strokeWidth="1.5" data-width="16"></span>
<span>The URL of the page you were browsing</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify mt-0.5 shrink-0 text-stone-400" data-icon="lucide:monitor" data-strokeWidth="1.5" data-width="16"></span>
<span>Browser type/version and Operating System</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify mt-0.5 shrink-0 text-stone-400" data-icon="lucide:headphones" data-strokeWidth="1.5" data-width="16"></span>
<span>Assistive technology used (if any)</span>
</li>
</ul>
</div>
</section>
</main>

    </>
  );
}
