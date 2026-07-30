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
      

<header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-slate-100">
<nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
<a className="flex items-center space-x-2 font-semibold tracking-tight text-blue-600 text-lg" href="#">
<span>BL</span>
<span className="hidden sm:inline text-slate-900">Blocker Law</span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium">
<button className="nav-link hover:text-blue-600 transition" data-section="home">Home</button>
<button className="nav-link hover:text-blue-600 transition" data-section="attorney">Attorney Profile</button>
<button className="nav-link hover:text-blue-600 transition" data-section="practice">Practice Areas</button>
<button className="nav-link hover:text-blue-600 transition" data-section="contact">Contact Us</button>
<button className="nav-link hover:text-blue-600 transition" data-section="map">Map & Directions</button>
</div>
<button className="md:hidden inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition" data-section="contact">
<i className="w-4 h-4" data-lucide="phone"></i>
</button>
</nav>
</header>

<main>

<section className="section py-24 overflow-hidden" id="home">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">Your Path to Peace of Mind Starts Here</h1>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-600">Blocker Law Works Tirelessly for Your Success</h2>
<p className="text-lg text-slate-700">When you're facing a legal issue, having an experienced attorney in your corner can make all the difference. Serving Ohio clients since 2002, Blocker Law is committed to achieving the outcomes you're seeking. Whether it's divorce, custody, business disputes, or creditor rights, you can rely on our dedication and strategic advocacy to guide you toward a successful and lasting resolution.</p>
<div className="flex gap-4">
<a className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" href="tel:12163609961">
<i className="w-4 h-4 mr-2" data-lucide="phone"></i> 216-360-9961
            </a>
<a className="inline-flex items-center px-6 py-3 rounded-md border border-slate-300 text-slate-800 font-medium hover:border-blue-600 hover:text-blue-600 transition" data-section="contact" href="#">
              Contact us online
              <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<img alt="Law office" className="rounded-lg shadow-lg w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</section>

<section className="section hidden py-24 bg-slate-50" id="attorney">
<div className="max-w-6xl mx-auto px-6 space-y-16">

<div className="text-center space-y-2">
<h2 className="text-4xl font-semibold tracking-tight text-blue-900">Attorney Profile</h2>
<p className="text-sm text-slate-600">Combination of existing webpage content, LinkedIn profile & Avvo information</p>
</div>

<div className="max-w-3xl mx-auto space-y-6">
<h3 className="text-2xl font-medium tracking-tight text-blue-600 text-center">David S. Blocker</h3>
<p className="text-center text-sm text-slate-600">Owner, Blocker Law LLC (Cleveland & Pepper Pike, OH)</p>
<p className="text-lg text-slate-700 leading-8">David Blocker is a seasoned litigation and family law attorney and founder of Blocker Law LLC, offering decades of experience guiding clients through complex financial and personal legal matters. Known for his practical, empathetic counsel, David helps individuals, families, and businesses navigate bankruptcy, debt, divorce, custody, estate planning, and commercial disputes.</p>
</div>

<div className="space-y-4">
<h4 className="text-xl font-semibold tracking-tight text-blue-600">Core Expertise</h4>
<ul className="list-disc list-inside space-y-1 text-slate-700">
<li><strong>Litigation</strong> (bench trials, jury trials, depositions, written discovery, settlement conferences)</li>
<li><strong>Bankruptcy & Debt</strong>: restructuring, receiverships, trusteeships, representation of secured / unsecured creditors, debtors, trustees, receivers</li>
<li><strong>Debt & Lending Agreements</strong>: fraudulent transfer, successor liability, equitable subordination claims</li>
<li><strong>Family Law</strong>: divorce, dissolution, custody, support</li></ul></div></div></section></main>
    </>
  );
}
