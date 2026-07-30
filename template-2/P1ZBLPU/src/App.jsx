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



    window.addEventListener('DOMContentLoaded',()=>{
      lucide.createIcons();
      const io=new IntersectionObserver((e)=>e.forEach(i=>{if(i.isIntersecting)i.target.classList.add('is-visible')}),{threshold:.12});
      document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));
    });
  
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
      

<header className="fixed inset-x-0 top-0 z-50 bg-[var(--bg-page)]/80 backdrop-blur border-b border-[var(--card-border)]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
<a className="flex items-center gap-2" href="/">

<img alt="Haven" className="h-10 w-auto" src="https://neompzltxilcimodyvpd.supabase.co/storage/v1/object/public/flou//logohaven.png" />
</a>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="text-[var(--link)] hover:text-[var(--text-main)] transition" href="/integrations">Integrations</a>
<a className="text-[var(--link)] hover:text-[var(--text-main)] transition" href="/pricing">Pricing</a>
<a className="text-[var(--link)] hover:text-[var(--text-main)] transition" href="/blog">Blog</a>
</nav>
<a className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-[var(--link)] hover:text-[var(--text-main)] transition" href="/login">
<i className="w-4 h-4" data-lucide="log-in"></i> Sign in
      </a>
</div>
</header>

<main className="pt-24 pb-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_260px] gap-10">

<section>
<h1 className="text-[48px] font-semibold tracking-tight mb-2 leading-tight" data-reveal="">
          Connecting Haven & Justo
        </h1>

<img alt="Gusto logo" className="h-12 sm:h-14 mb-6" data-reveal="" src="https://neompzltxilcimodyvpd.supabase.co/storage/v1/object/public/flou//gusto-logo.svg" />

<section className="mb-12 space-y-4" data-reveal="" id="overview">
<h2 className="text-[32px] font-semibold tracking-tight">Overview</h2>
<p className="text-base leading-relaxed">
            The Haven & Justo integration streamlines your restaurant’s back-office operations by automatically syncing sales,
            menu items, and inventory in real-time. This eliminates manual data entry and ensures your reports are always accurate.
          </p>
</section>

<div className="space-y-6" data-reveal="">
<h2 className="text-[32px] font-semibold tracking-tight">Setup steps</h2>
<ol className="list-decimal pl-6 space-y-4 text-base leading-relaxed">
<li>Log in to your Haven dashboard and open <span className="font-medium">Settings → Integrations</span>.</li>
<li>Select <span className="font-medium">Justo</span> from the available integrations list.</li>
<li>Click <span className="font-medium">Generate API Key</span> and copy it to your clipboard.</li>
<li>Inside your Justo account, navigate to <span className="font-medium">Apps & Plugins → Custom</span>.</li>
<li>Paste the Haven API key and confirm by pressing <span className="font-medium">Save</span>.</li>
<li>Return to Haven and click <span className="font-medium">Verify Connection</span>. Your data sync will start automatically.</li>
</ol>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex justify-center items-center gap-2 rounded-lg bg-[var(--text-main)] text-white text-sm font-medium px-5 py-3 shadow-sm hover:bg-neutral-700 transition" href="#">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="plug"></i> Connect now
            </a>
<a className="inline-flex justify-center items-center gap-2 rounded-lg border border-[var(--card-border)] text-[var(--text-main)] text-sm font-medium px-5 py-3 hover:bg-neutral-100 transition" href="#">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="video"></i> View tutorial
            </a>
</div>
</div>

<section className="my-12 space-y-4" data-reveal="" id="benefits">
<h2 className="text-[32px] font-semibold tracking-tight">Benefits</h2>
<ul className="list-disc pl-6 space-y-3 text-base leading-relaxed">
<li><span className="font-medium">Real-time insights:</span> Track sales, labor costs, and inventory levels without leaving Haven.</li>
<li><span className="font-medium">Automated reconciliation:</span> Match orders and payments automatically—no spreadsheets needed.</li>
<li><span className="font-medium">Reduced errors:</span> Eliminate manual data transfers and lower the risk of discrepancies.</li>
</ul>
</section>

<section className="my-12 space-y-4" data-reveal="" id="requirements">
<h2 className="text-[32px] font-semibold tracking-tight">Requirements</h2>
<p className="text-base leading-relaxed">
            Make sure you have admin access in both Haven and Justo, and that your Justo plan includes API access. Contact support
            if you’re unsure about your eligibility.
          </p>
</section>

<div className="my-12 border-t border-[var(--card-border)]" data-reveal=""></div>

<section data-reveal="" id="trust">
<h2 className="text-[32px] font-semibold tracking-tight mb-3">Why trust Haven?</h2>
<p className="text-base leading-relaxed">
            Haven’s infrastructure is built with end-to-end encryption, SOC-2 compliant practices, and experience drawn from powering
            thousands of high-growth companies. From automated backups to granular role-based access, your data is protected by default
            —so you can focus on scaling, not security.
          </p>
</section>

<section className="mt-16 space-y-4" data-reveal="">
<p className="text-lg font-medium">Still have questions? Talk to our team or explore the Help Center.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[var(--link)] hover:text-[var(--text-main)] transition" href="/contact">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="mail"></i> Get in touch
          </a>
</section>
</section>

<aside className="space-y-6 lg:sticky lg:top-24" data-reveal="">
<div className="border border-[var(--card-border)] rounded-lg p-5 space-y-4 bg-[var(--card-bg)]">
<h3 className="text-sm font-medium uppercase tracking-wide text-[var(--link)]">Quick links</h3>
<nav className="flex flex-col gap-3 text-sm">
<a className="text-[var(--link)] hover:underline" href="#overview">Overview</a>
<a className="text-[var(--link)] hover:underline" href="#benefits">Benefits</a>
<a className="text-[var(--link)] hover:underline" href="#requirements">Requirements</a>
<a className="text-[var(--link)] hover:underline" href="#trust">Security & trust</a>
</nav>
</div>
<div className="border border-[var(--card-border)] rounded-lg p-5 space-y-3 bg-[var(--card-bg)]">
<h4 className="text-sm font-semibold" id="partner">Justo</h4>
<p className="text-xs text-[var(--link)]">Restaurant POS & online ordering platform</p>
<hr className="border-[var(--card-border)]" />
<h4 className="text-sm font-semibold" id="type">System type</h4>
<p className="text-xs text-[var(--link)]">Point-of-Sale</p>
<hr className="border-[var(--card-border)]" />
<h4 className="text-sm font-semibold" id="status">Status</h4>
<p className="inline-flex items-center gap-1 text-xs font-medium text-green-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
            Live
          </p>
</div>
</aside>
</div>

<section className="mt-24" data-reveal="">
<div className="bg-[var(--text-main)] text-white rounded-xl px-8 py-12 mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h2 className="text-[32px] font-semibold tracking-tight mb-2">Ready to power up your workflows?</h2>
<p className="text-base opacity-90">Unlock deeper insights and automation with our premium integrations bundle.</p>
</div>
<a className="inline-flex items-center gap-2 bg-white text-[var(--text-main)] font-medium text-sm px-6 py-3 rounded-lg hover:bg-neutral-100 transition" href="#">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="zap"></i> Upgrade now
        </a>
</div>
</section>
</main>

<footer className="mt-24 border-t border-[var(--card-border)]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
<div className="space-y-3">
<p className="font-semibold">Haven</p>
<p className="text-[var(--link)]">© 2024 Haven Inc. All rights reserved.</p>
</div>
<div className="space-y-2">
<p className="font-semibold mb-1">Product</p>
<a className="block text-[var(--link)] hover:text-[var(--text-main)]" href="/pricing">Pricing</a>
<a className="block text-[var(--link)] hover:text-[var(--text-main)]" href="/integrations">Integrations</a>
</div>
<div className="space-y-2">
<p className="font-semibold mb-1">Company</p>
<a className="block text-[var(--link)] hover:text-[var(--text-main)]" href="/about">About</a>
<a className="block text-[var(--link)] hover:text-[var(--text-main)]" href="/blog">Blog</a>
<a className="block text-[var(--link)] hover:text-[var(--text-main)]" href="/careers">Careers</a>
</div>
<div className="space-y-2">
<p className="font-semibold mb-1">Support</p>
<a className="block text-[var(--link)] hover:text-[var(--text-main)]" href="/help">Help Center</a>
<a className="block text-[var(--link)] hover:text-[var(--text-main)]" href="/contact">Contact Us</a>
</div>
</div>
</footer>



    </>
  );
}
