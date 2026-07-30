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
      
    lucide.createIcons();
    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
<nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
<a className="flex items-center space-x-2 font-semibold tracking-tight text-blue-600" href="#">
<span className="text-lg">BL</span>
<span className="hidden sm:inline text-slate-900">Blocker Law</span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium">
<a className="hover:text-blue-600 transition" href="#practice">Practice Areas</a>
<a className="hover:text-blue-600 transition" href="#about">Attorney</a>
<a className="hover:text-blue-600 transition" href="#contact">Contact</a>
<a className="hover:text-blue-600 transition" href="#map">Map</a>
</div>
<a className="md:hidden inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition" href="#contact">
<i data-lucide="phone"></i>
</a>
</nav>
</header>

<section className="relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 pt-24 pb-32 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">Trusted Legal Guidance for <span className="text-blue-600">Family, Finance, & Business</span></h1>
<p className="text-lg text-slate-700">Since 2002, Blocker Law has provided clear, strategic counsel to individuals and companies across Northeast Ohio.</p>
<div className="flex gap-4">
<a className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" href="#contact">
            Schedule a Consultation
            <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center px-6 py-3 rounded-md border border-slate-200 text-slate-800 font-medium hover:border-blue-600 hover:text-blue-600 transition" href="#practice">
            Explore Practice Areas
          </a>
</div>
</div>
<div className="relative">
<img alt="Courtroom" className="rounded-lg shadow-lg w-full" src="https://images.unsplash.com/photo-1508387029535-27ce76f43338?auto=format&fit=crop&w=900&q=60" />
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="practice">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-12">Practice Areas</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-lg border border-slate-100 p-8 shadow-sm hover:shadow-md transition">
<i className="w-8 h-8 text-blue-600 mb-4" data-lucide="users"></i>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Family Law</h3>
<p className="text-sm text-slate-700 mb-4">Compassionate guidance for divorce, dissolution, custody, and support—including collaborative and mediated solutions.</p>
<a className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline" href="#family">Learn more <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>

<div className="bg-white rounded-lg border border-slate-100 p-8 shadow-sm hover:shadow-md transition">
<i className="w-8 h-8 text-blue-600 mb-4" data-lucide="gavel"></i>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Litigation</h3>
<p className="text-sm text-slate-700 mb-4">Strategic representation in civil disputes—from pre-suit strategy to trial and appeal—in state and federal courts.</p>
<a className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline" href="#litigation">Learn more <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>

<div className="bg-white rounded-lg border border-slate-100 p-8 shadow-sm hover:shadow-md transition">
<i className="w-8 h-8 text-blue-600 mb-4" data-lucide="credit-card"></i>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Debtor-Creditor / Bankruptcy</h3>
<p className="text-sm text-slate-700 mb-4">Bankruptcy filings, creditor defense, and negotiation of practical debt-relief solutions for businesses and individuals.</p>
<a className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline" href="#debtor">Learn more <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div className="md:col-span-1">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Why Choose Blocker Law?</h2>
</div>
<div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
<div className="flex items-start space-x-4">
<i className="w-6 h-6 text-blue-600 mt-1" data-lucide="award"></i>
<div>
<h4 className="font-semibold text-slate-900">Depth of Experience</h4>
<p className="text-sm text-slate-700">Serving clients across Ohio since 2002 with proven results in complex matters.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<i className="w-6 h-6 text-blue-600 mt-1" data-lucide="target"></i>
<div>
<h4 className="font-semibold text-slate-900">Tailored Strategy</h4>
<p className="text-sm text-slate-700">Approaches designed around your goals—litigation, negotiation, or ADR.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<i className="w-6 h-6 text-blue-600 mt-1" data-lucide="check-circle"></i>
<div>
<h4 className="font-semibold text-slate-900">Commitment to Results</h4>
<p className="text-sm text-slate-700">Efficient, ethical, and relentless advocacy for every client.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<i className="w-6 h-6 text-blue-600 mt-1" data-lucide="handshake"></i>
<div>
<h4 className="font-semibold text-slate-900">Clear Communication</h4>
<p className="text-sm text-slate-700">Prompt updates and straightforward guidance—no jargon.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 space-y-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Attorney Profile</h2>
<h3 className="text-xl font-semibold text-slate-900">David S. Blocker</h3>
<p className="text-slate-700 text-sm">David Blocker is a seasoned litigation and family-law attorney, guiding clients through complex financial and personal matters since 2002. Known for practical, empathetic counsel, he serves individuals, families, and businesses throughout Ohio.</p>
<ul className="text-sm text-slate-700 space-y-2">
<li className="flex items-start"><i className="w-4 h-4 text-blue-600 mt-1 mr-2" data-lucide="briefcase"></i>Litigation, Bankruptcy & Debt, Family Law, Estate Planning</li>
<li className="flex items-start"><i className="w-4 h-4 text-blue-600 mt-1 mr-2" data-lucide="award"></i>Super Lawyers 2015–2021 • Rising Star 2007-2012</li>
<li className="flex items-start"><i className="w-4 h-4 text-blue-600 mt-1 mr-2" data-lucide="map-pin"></i>Admitted in Ohio & U.S. District Court (N.D. Ohio)</li>
</ul>
<a className="inline-flex items-center px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" href="#contact">
          Connect with David
          <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
<div className="order-1 md:order-2">
<img alt="David Blocker" className="rounded-lg shadow-lg w-full object-cover" src="https://images.unsplash.com/photo-1614287670740-c67ddb218342?auto=format&fit=crop&w=900&q=60" />
</div>
</div>
</section>

<section className="py-24" id="family">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Family Law</h2>
<p className="text-slate-700 mb-6">We understand family matters are emotional and complex. From divorce and dissolution to custody coordination and support, we provide compassionate advocacy and strategic guidance.</p>
<div className="grid sm:grid-cols-2 gap-6 mb-8">
<div className="flex items-start space-x-4">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="heart"></i>
<span className="text-sm text-slate-700">Divorce & Dissolution</span>
</div>
<div className="flex items-start space-x-4">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="users"></i>
<span className="text-sm text-slate-700">Collaborative Divorce</span>
</div>
<div className="flex items-start space-x-4">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="user-check"></i>
<span className="text-sm text-slate-700">Child Custody Coordination</span>
</div>
<div className="flex items-start space-x-4">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="dollar-sign"></i>
<span className="text-sm text-slate-700">Spousal & Child Support</span>
</div>
</div>
<a className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" href="#contact">
        Schedule a Family-Law Consultation
        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</section>
<section className="py-24 bg-slate-50" id="litigation">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Litigation</h2>
<p className="text-slate-700 mb-6">We represent businesses and individuals in contract, real-estate, trust & estate, and creditor/debtor disputes—guiding you from initial filing to resolution.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-start"><i className="w-5 h-5 text-blue-600 mt-1 mr-2" data-lucide="file-text"></i>Contract enforcement & breach of agreement claims</li>
<li className="flex items-start"><i className="w-5 h-5 text-blue-600 mt-1 mr-2" data-lucide="home"></i>Real estate boundary & lease disputes</li>
<li className="flex items-start"><i className="w-5 h-5 text-blue-600 mt-1 mr-2" data-lucide="layers"></i>Corporate & shareholder conflicts</li>
<li className="flex items-start"><i className="w-5 h-5 text-blue-600 mt-1 mr-2" data-lucide="shield"></i>Creditor enforcement & collection actions</li>
</ul>
<a className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" href="#contact">
        Discuss Your Dispute
        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</section>
<section className="py-24" id="debtor">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Debtor-Creditor / Bankruptcy</h2>
<p className="text-slate-700 mb-6">Experienced counsel for Chapters 7, 11, & 13, creditor defenses, and debt relief negotiations—protecting your rights and assets.</p>
<div className="grid sm:grid-cols-2 gap-6 mb-8">
<div className="flex items-start space-x-4">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="arrow-left-right"></i>
<span className="text-sm text-slate-700">Bankruptcy Representation</span>
</div>
<div className="flex items-start space-x-4">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="x-circle"></i>
<span className="text-sm text-slate-700">Defense Against Creditor Claims</span>
</div>
<div className="flex items-start space-x-4">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="shield-off"></i>
<span className="text-sm text-slate-700">Fraudulent Transfer Counseling</span>
</div>
<div className="flex items-start space-x-4">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="check-square"></i>
<span className="text-sm text-slate-700">Enforcement of Debtor Protections</span>
</div>
</div>
<a className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" href="#contact">
        Find Financial Relief
        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

<div className="space-y-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Contact Us</h2>
<p className="text-slate-700">Whether you have a pressing legal challenge or want to explore your options, we’d love to hear from you.</p>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="map-pin"></i>
<span className="text-sm text-slate-700">Blocker Law Firm, 30195 Chagrin Blvd, Suite 300, Pepper Pike, OH 44124</span>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="phone"></i>
<span className="text-sm text-slate-700">(216) 360-9961 – Mon-Fri during business hours</span>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="mail"></i>
<span className="text-sm text-slate-700">info@blockerlawfirm.com</span>
</div>
</div>
<div className="space-y-4 pt-4">
<h4 className="font-semibold text-slate-900">Why Contact Us?</h4>
<div className="flex items-start space-x-3">
<i className="w-4 h-4 text-blue-600 mt-1" data-lucide="zap"></i>
<span className="text-sm text-slate-700">Responsive & Confidential</span>
</div>
<div className="flex items-start space-x-3">
<i className="w-4 h-4 text-blue-600 mt-1" data-lucide="smile"></i>
<span className="text-sm text-slate-700">Clear & Compassionate Guidance</span>
</div>
<div className="flex items-start space-x-3">
<i className="w-4 h-4 text-blue-600 mt-1" data-lucide="globe"></i>
<span className="text-sm text-slate-700">Local, Trusted Expertise</span>
</div>
</div>
</div>

<div>
<form className="bg-white rounded-lg border border-slate-100 p-8 shadow-sm space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" required type="text" />
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" type="text" />
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" required type="email" />
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" required type="tel" />
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">City / State</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" type="text" />
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">How did you find us?</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Google, referral…" type="text" />
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Preferred method of contact</label>
<select className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600">
<option>Phone</option>
<option>Email</option>
<option>Text</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Brief message *</label>
<textarea className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" required rows="4"></textarea>
</div>
<div className="flex items-start space-x-2 text-sm">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-600" required type="checkbox" />
<span>By submitting, you acknowledge our disclaimer. This site does not create a lawyer-client relationship.</span>
</div>
<button className="w-full inline-flex justify-center items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" type="submit">
            Send Message
            <i className="w-4 h-4 ml-2" data-lucide="send"></i>
</button>
</form>
</div>
</div>
</section>

<section className="py-24" id="map">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Office Map & Directions</h2>
<div className="rounded-lg overflow-hidden shadow-md">
<iframe allowfullscreen="" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.352534530621!2d-81.44706268460981!3d41.462671900682954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830f39b15a2eebb%3A0xb3b5556c7d23e94f!2s30195%20Chagrin%20Blvd%20%23300%2C%20Pepper%20Pike%2C%20OH%2044124!5e0!3m2!1sen!2sus!4v1681234567890" style={{border: `0`}} width="100%"></iframe>
</div>
<p className="text-xs text-slate-500 mt-4">The content on this site is for informational purposes only and does not constitute legal advice.</p>
</div>
</section>

<footer className="border-t border-slate-100 py-12 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
<div className="flex items-center space-x-2 text-slate-600">
<span className="font-semibold tracking-tight text-blue-600">BL</span>
<span>© <span id="year"></span> Blocker Law LLC. All rights reserved.</span>
</div>
<div className="flex items-center space-x-6 text-sm">
<a className="hover:text-blue-600 transition" href="#contact">Contact</a>
<a className="hover:text-blue-600 transition" href="#map">Directions</a>
<a className="hover:text-blue-600 transition" href="#about">Attorney</a>
</div>
</div>
</footer>




    </>
  );
}
