import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();
    document.getElementById('year').textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
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
<div className="max-w-6xl mx-auto px-6 pt-24 pb-32 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">Your Path to Peace of Mind Starts Here</h1>
<h2 className="text-2xl sm:text-3xl font-medium text-blue-600 tracking-tight">Blocker Law Works Tirelessly for Your Success</h2>
<p className="text-lg text-slate-700">When you're facing a legal issue, having an experienced attorney in your corner can make all the difference...</p>
<div className="flex gap-4">
<a className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" href="tel:12163609961">
<i className="w-4 h-4 mr-2" data-lucide="phone"></i> 216-360-9961
          </a>
<a className="inline-flex items-center px-6 py-3 rounded-md border border-slate-200 text-slate-800 font-medium hover:border-blue-600 hover:text-blue-600 transition" href="#contact">
            Contact Us Online
            <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<img alt="Courtroom" className="rounded-lg shadow-lg w-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</section>

<section className="py-24 bg-slate-50" id="practice">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-blue-600 mb-12">Practice Areas</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-lg border border-slate-100 p-8 shadow-sm hover:shadow-md transition">
<i className="w-8 h-8 text-blue-600 mb-4" data-lucide="users"></i>
<h3 className="text-xl font-semibold text-blue-600 mb-2">
<a className="hover:underline" href="#family-law">Family Law</a>
</h3>
<p className="text-sm text-slate-700">Compassionate guidance for divorce, dissolution, custody, and support—including collaborative and mediated solutions.</p>
</div>

<div className="bg-white rounded-lg border border-slate-100 p-8 shadow-sm hover:shadow-md transition">
<i className="w-8 h-8 text-blue-600 mb-4" data-lucide="gavel"></i>
<h3 className="text-xl font-semibold text-blue-600 mb-2">
<a className="hover:underline" href="#litigation">Litigation</a>
</h3>
<p className="text-sm text-slate-700">Strategic representation in civil disputes—from pre-suit strategy to trial and appeal—in state and federal courts.</p>
</div>

<div className="bg-white rounded-lg border border-slate-100 p-8 shadow-sm hover:shadow-md transition">
<i className="w-8 h-8 text-blue-600 mb-4" data-lucide="credit-card"></i>
<h3 className="text-xl font-semibold text-blue-600 mb-2">
<a className="hover:underline" href="#bankruptcy">Debtor-Creditor / Bankruptcy</a>
</h3>
<p className="text-sm text-slate-700">Bankruptcy filings, creditor defense, and negotiation of practical debt-relief solutions for businesses and individuals.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="family-law">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<img alt="Family Law" className="rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="space-y-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-blue-600">Family Law</h2>
<p className="text-slate-700">From amicable dissolutions to high-conflict custody battles, we guide families through every stage of domestic relations with respect and clarity.</p>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
<li>Divorce &amp; Dissolution</li>
<li>Child Custody &amp; Support</li>
<li>Prenuptial &amp; Postnuptial Agreements</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="litigation">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<img alt="Litigation" className="rounded-lg shadow-lg md:order-2" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="space-y-6 md:order-1">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-blue-600">Litigation</h2>
<p className="text-slate-700">We craft trial-ready strategies focused on early resolution when possible and aggressive courtroom advocacy when necessary.</p>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
<li>Business Disputes</li>
<li>Contract Enforcement</li>
<li>Appellate Practice</li>
</ul>
</div>
</div>
</section>

<section className="py-24" id="bankruptcy">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<img alt="Bankruptcy" className="rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="space-y-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-blue-600">Debtor-Creditor / Bankruptcy</h2>
<p className="text-slate-700">Whether filing or defending, our thorough knowledge of Chapter 7 and 13 procedure safeguards your financial future.</p>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
<li>Chapter 7 &amp; 13 Filings</li>
<li>Creditor Representation</li>
<li>Debt Negotiation</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 space-y-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-blue-600">Attorney Profile</h2>
<h3 className="text-xl font-semibold text-blue-600">David S. Blocker</h3>
<p className="text-slate-700 text-sm">David Blocker is a seasoned litigation and family-law attorney, guiding clients through complex financial and personal matters since 2002...</p>
<ul className="text-sm text-slate-700 space-y-2">
<li className="flex items-start"><i className="w-4 h-4 text-blue-600 mt-1 mr-2" data-lucide="briefcase"></i>Litigation, Bankruptcy &amp; Debt, Family Law, Estate Planning</li>
<li className="flex items-start"><i className="w-4 h-4 text-blue-600 mt-1 mr-2" data-lucide="award"></i>Super Lawyers 2015–2021 • Rising Star 2007-2012</li>
<li className="flex items-start"><i className="w-4 h-4 text-blue-600 mt-1 mr-2" data-lucide="map-pin"></i>Admitted in Ohio &amp; U.S. District Court (N.D. Ohio)</li>
</ul>
<a className="inline-flex items-center px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" href="#contact">
          Connect with David
          <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
<img alt="David Blocker" className="order-1 md:order-2 rounded-lg shadow-lg w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
<div className="space-y-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-blue-600">Contact Us</h2>
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
</div>
<form className="bg-white rounded-lg border border-slate-100 p-8 shadow-sm space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">City / State</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">How did you find us?</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Google, referral…" type="text"/>
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
<textarea className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" required="" rows="4"></textarea>
</div>
<div className="flex items-start space-x-2 text-sm">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-600" required="" type="checkbox"/>
<span>By submitting, you acknowledge our disclaimer. This site does not create a lawyer-client relationship.</span>
</div>
<button className="w-full inline-flex justify-center items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" type="submit">
          Send Message
          <i className="w-4 h-4 ml-2" data-lucide="send"></i>
</button>
</form>
</div>
</section>

<section className="py-24 bg-slate-50" id="map">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-blue-600 mb-6">Office Map &amp; Directions</h2>
<div className="rounded-lg overflow-hidden shadow-md">
<iframe allowfullscreen="" height="450" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.352534530621!2d-81.44706268460981!3d41.462671900682954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830f39b15a2eebb%3A0xb3b5556c7d23e94f!2s30195%20Chagrin%20Blvd%20%23300%2C%20Pepper%20Pike%2C%20OH%2044124!5e0!3m2!1sen!2sus!4v1681234567890" style={{border: '0'}} width="100%"></iframe>
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
