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
      
    lucide.createIcons({strokeWidth:1.5});
    document.getElementById('year').textContent = new Date().getFullYear();

    /* Section switching */
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('[data-section]');
    function showSection(id){
      sections.forEach(s=>{
        if(s.id===id){
          s.classList.remove('hidden'); s.classList.add('fade-enter');
          requestAnimationFrame(()=>s.classList.add('fade-enter-active'));
          setTimeout(()=>s.classList.remove('fade-enter','fade-enter-active'),500);
          window.scrollTo({top:0,behavior:'smooth'});
        }else s.classList.add('hidden');
      });
    }
    navLinks.forEach(btn=>btn.addEventListener('click',e=>{
      e.preventDefault();
      showSection(btn.dataset.section);
    }));
    showSection('home');

    /* Form handler */
    const form=document.getElementById('contactForm');
    if(form){
      form.addEventListener('submit',e=>{
        e.preventDefault();
        alert('Thank you for reaching out! We will contact you soon.');
        e.target.reset();
      });
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
<button className="nav-link hover:text-blue-600 transition" data-section="map">Map &amp; Directions</button>
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
<img alt="Law office" className="rounded-lg shadow-lg w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</section>

<section className="section hidden py-24 bg-slate-50" id="attorney">
<div className="max-w-6xl mx-auto px-6 space-y-16">

<div className="text-center space-y-2">
<h2 className="text-4xl font-semibold tracking-tight text-blue-900">Attorney Profile</h2>
<p className="text-sm text-slate-600">Combination of existing webpage content, LinkedIn profile &amp; Avvo information</p>
</div>

<div className="max-w-3xl mx-auto space-y-6">
<h3 className="text-2xl font-medium tracking-tight text-blue-600 text-center">David S. Blocker</h3>
<p className="text-center text-sm text-slate-600">Owner, Blocker Law LLC (Cleveland &amp; Pepper Pike, OH)</p>
<p className="text-lg text-slate-700 leading-8">David Blocker is a seasoned litigation and family law attorney and founder of Blocker Law LLC, offering decades of experience guiding clients through complex financial and personal legal matters. Known for his practical, empathetic counsel, David helps individuals, families, and businesses navigate bankruptcy, debt, divorce, custody, estate planning, and commercial disputes.</p>
</div>

<div className="space-y-4">
<h4 className="text-xl font-semibold tracking-tight text-blue-600">Core Expertise</h4>
<ul className="list-disc list-inside space-y-1 text-slate-700">
<li><strong>Litigation</strong> (bench trials, jury trials, depositions, written discovery, settlement conferences)</li>
<li><strong>Bankruptcy &amp; Debt</strong>: restructuring, receiverships, trusteeships, representation of secured / unsecured creditors, debtors, trustees, receivers</li>
<li><strong>Debt &amp; Lending Agreements</strong>: fraudulent transfer, successor liability, equitable subordination claims</li>
<li><strong>Family Law</strong>: divorce, dissolution, custody, support, prenuptial / domestic partnership agreements</li>
<li><strong>Estate Planning &amp; Probate</strong></li>
</ul>
</div>

<div className="space-y-4">
<h4 className="text-xl font-semibold tracking-tight text-blue-600">Representative Engagements</h4>
<ul className="list-disc list-inside space-y-1 text-slate-700">
<li>Led litigation across all phases—including trials, discovery, and settlements</li>
<li>Represented a bankruptcy trustee in unwinding a $20 million Ponzi scheme, managing over 100 adversary proceedings</li>
<li>Assisted a parts supplier to Ford, a real estate development firm, and a national insulation manufacturer through bankruptcy</li>
<li>Collected millions in commercial debts for various industry clients</li>
<li>Represented banks in commercial property foreclosures with receivers appointed</li>
<li>Negotiated resolutions with state &amp; federal agencies on sales practices</li>
<li>Secured sole custody and support settlements for clients, including international relocation support</li>
</ul>
</div>

<div className="space-y-4">
<h4 className="text-xl font-semibold tracking-tight text-blue-600">Honors &amp; Recognition</h4>
<ul className="list-disc list-inside space-y-1 text-slate-700">
<li>Super Lawyers selection: 2015–2021</li>
<li>Rising Star: 2007–2012</li>
<li>Avvo Rating: 8.7 (“Excellent”) based on peer endorsements, client feedback, and community involvement</li>
</ul>
</div>

<div className="space-y-4">
<h4 className="text-xl font-semibold tracking-tight text-blue-600">Bar Admissions</h4>
<ul className="list-disc list-inside space-y-1 text-slate-700">
<li>Ohio, 2002</li>
<li>U.S. District Court, Northern District of Ohio, 2003</li>
</ul>
</div>

<div className="space-y-4">
<h4 className="text-xl font-semibold tracking-tight text-blue-600">Education</h4>
<ul className="list-disc list-inside space-y-1 text-slate-700">
<li>Case Western Reserve University School of Law, J.D. (2002)</li>
<li>Miami University, B.A. (1998)</li>
</ul>
</div>

<div className="space-y-4">
<h4 className="text-xl font-semibold tracking-tight text-blue-600">Professional Experience</h4>
<ul className="list-disc list-inside space-y-1 text-slate-700">
<li>Attorney, Sokin &amp; Koberna, LPA (2012–2017)</li>
<li>Attorney, Kohrman Jackson &amp; Krantz, P.L.L. (2005–2012)</li>
<li>Associate, McCarthy, Lebit, Crystal &amp; Liffman, LPA (2002–2005)</li>
</ul>
</div>

<div className="space-y-4">
<h4 className="text-xl font-semibold tracking-tight text-blue-600">Associations</h4>
<ul className="list-disc list-inside space-y-1 text-slate-700">
<li>American Bar Association</li>
<li>Ohio State Bar Association</li>
<li>Cleveland Metropolitan Bar Association</li>
</ul>
</div>

<div className="space-y-4">
<h4 className="text-xl font-semibold tracking-tight text-blue-600">Community &amp; Approach</h4>
<p className="text-slate-700">David is deeply rooted and highly engaged in the Cleveland and Northeast Ohio legal communities. He delivers transparent, personalized strategies tailored to clients’ objectives, business realities, and long-term well-being.</p>
</div>

<div className="border-t border-slate-100 pt-10 space-y-4">
<h4 className="text-xl font-semibold tracking-tight text-blue-600">Contact David</h4>
<p className="text-slate-700"><span className="font-medium">📞 Phone:</span> (216) 360-9961</p>
<p className="text-slate-700"><span className="font-medium">📧 Email/Inquiries:</span> Via the <button className="underline text-blue-600 hover:text-blue-700" data-section="contact">Contact Us</button> page</p>
<p className="text-slate-700"><span className="font-medium">📍 Office:</span> Blocker Law LLC — 30195 Chagrin Blvd., Suite 300, Pepper Pike, OH 44124</p>
</div>
</div>
</section>

<section className="section hidden py-24" id="practice">
<div className="max-w-6xl mx-auto px-6 space-y-16">

<div className="text-center space-y-4">
<h2 className="text-4xl font-semibold tracking-tight text-blue-600">Practice Areas</h2>
<p className="text-lg text-slate-700">At Blocker Law, we’ve been representing individuals and businesses across Ohio since 2002. Our practice focuses on these core areas:</p>
</div>

<div className="grid md:grid-cols-3 gap-10">

<div className="border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
<h3 className="text-2xl font-semibold tracking-tight text-blue-600 mb-3">Family Law</h3>
<p className="text-sm text-slate-700 mb-4">Comprehensive guidance through life-changing situations with compassion and strategic advocacy—litigation, mediation, or ADR.</p>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1 mb-4">
<li>Divorce &amp; Dissolution</li>
<li>Collaborative Divorce</li>
<li>Custody &amp; Parenting Plans</li>
<li>Spousal &amp; Child Support</li>
<li>Same-Sex Marriage Issues</li>
<li>Mediation &amp; ADR</li>
</ul>
<a className="inline-flex items-center text-blue-600 text-sm font-medium hover:underline" href="#">
              View full Family Law services
              <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
<h3 className="text-2xl font-semibold tracking-tight text-blue-600 mb-3">Litigation</h3>
<p className="text-sm text-slate-700 mb-4">Dedicated representation in state and federal courts—business conflicts, contract claims, creditor/debtor issues, and real estate matters.</p>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1 mb-4">
<li>Pre-suit Strategy &amp; Negotiations</li>
<li>Depositions &amp; Discovery</li>
<li>Trials &amp; Appeals</li>
<li>Contract &amp; Property Disputes</li>
<li>Creditor/Debtor Conflicts</li>
<li>Probate &amp; Guardianship Matters</li>
</ul>
</div>

<div className="border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
<h3 className="text-2xl font-semibold tracking-tight text-blue-600 mb-3">Debtor-Creditor &amp; Bankruptcy</h3>
<p className="text-sm text-slate-700 mb-4">Deep experience navigating both consumer and commercial insolvency, foreclosures, and complex bankruptcy disputes.</p>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1 mb-4">
<li>Chapter 7, 11, 13 Guidance</li>
<li>Fraudulent Transfer / Preference Defense</li>
<li>Automatic Stay Enforcement</li>
<li>Creditor Claim Defense</li>
<li>Debt Relief &amp; Negotiations</li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-3 gap-10">
<div className="space-y-2">
<h4 className="text-lg font-semibold tracking-tight text-blue-600">Depth of Experience</h4>
<p className="text-sm text-slate-700">Serving clients across Ohio since 2002, we have the insight to handle even the most complex legal challenges.</p>
</div>
<div className="space-y-2">
<h4 className="text-lg font-semibold tracking-tight text-blue-600">Tailored Representation</h4>
<p className="text-sm text-slate-700">We focus on your unique needs and goals, offering strategic guidance through litigation, negotiation, or ADR.</p>
</div>
<div className="space-y-2">
<h4 className="text-lg font-semibold tracking-tight text-blue-600">Unwavering Commitment</h4>
<p className="text-sm text-slate-700">We work efficiently, ethically, and relentlessly to achieve successful outcomes for the people and organizations we serve.</p>
</div>
</div>

<div className="border-t border-slate-100 pt-10 text-center space-y-4">
<h3 className="text-2xl font-semibold tracking-tight text-blue-600">Ready to Get Started?</h3>
<p className="text-sm text-slate-700">Connect with our Pepper Pike office to schedule a consultation.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" href="tel:12163609961">
<i className="w-4 h-4 mr-2" data-lucide="phone"></i> 216-360-9961
            </a>
<a className="inline-flex items-center px-6 py-3 rounded-md border border-slate-300 text-slate-800 font-medium hover:border-blue-600 hover:text-blue-600 transition" data-section="contact" href="#">
              Contact us online
              <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="section hidden py-24 bg-slate-50" id="contact">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

<div className="space-y-6">
<h2 className="text-4xl font-semibold tracking-tight text-blue-600">Contact Us</h2>
<p className="text-lg"><span className="text-2xl">📞</span> <span className="font-medium">Let's Connect — We’re Here to Help!</span></p>
<div className="space-y-4 text-sm text-slate-700">
<div>
<h4 className="font-semibold text-blue-600">Visit Us</h4>
<p>Blocker Law Firm<br/>30195 Chagrin Blvd, Suite 300<br/>Pepper Pike, Ohio 44124</p>
</div>
<div>
<h4 className="font-semibold text-blue-600">Call Us</h4>
<p>(216) 360-9961<br/><span className="text-xs">Monday–Friday • Regular business hours</span></p>
</div>
<div>
<h4 className="font-semibold text-blue-600">Why Contact Us?</h4>
<ul className="list-disc list-inside space-y-1">
<li>Responsive &amp; Respectful</li>
<li>Clear &amp; Compassionate Guidance</li>
<li>Local, Trusted Expertise</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-blue-600">Prefer a Conversation?</h4>
<p>Call us at (216) 360-9961, email <a className="text-blue-600 hover:underline" href="mailto:info@blockerlawfirm.com">info@blockerlawfirm.com</a>, or drop in during business hours.</p>
</div>
</div>
</div>

<form className="space-y-6" id="contactForm">
<h3 className="text-2xl font-semibold tracking-tight text-blue-600">Contact Form</h3>
<div className="grid sm:grid-cols-2 gap-6">
<div className="space-y-2 sm:col-span-2">
<label className="text-sm font-medium" htmlFor="name">Name *</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" id="name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium" htmlFor="company">Company (if applicable)</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" id="company" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium" htmlFor="email">Email *</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" id="email" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium" htmlFor="phone">Phone *</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" id="phone" required="" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium" htmlFor="city">City / State</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" id="city" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium" htmlFor="ref">How did you find us?</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" id="ref" placeholder="Google, referral, etc." type="text"/>
</div>
<div className="space-y-2 sm:col-span-2">
<label className="text-sm font-medium block">Preferred method of contact</label>
<div className="flex items-center gap-6">
<label className="flex items-center gap-2 text-sm">
<input checked="" className="h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-200" name="contactMethod" type="radio"/>
                  Phone
                </label>
<label className="flex items-center gap-2 text-sm">
<input className="h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-200" name="contactMethod" type="radio"/>
                  Email
                </label>
<label className="flex items-center gap-2 text-sm">
<input className="h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-200" name="contactMethod" type="radio"/>
                  Text
                </label>
</div>
</div>
<div className="space-y-2 sm:col-span-2">
<label className="text-sm font-medium" htmlFor="message">Brief message or reason for reaching out *</label>
<textarea className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" id="message" required="" rows="4"></textarea>
</div>
</div>
<div className="space-y-4">
<button className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" type="submit">
              Submit
              <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</button>
<p className="text-xs text-slate-500">✅ By submitting, you acknowledge the terms in our disclaimer. This site is designed for general information—not formal legal advice—and does not create a lawyer-client relationship.</p>
</div>
</form>
</div>
</section>

<section className="section hidden py-24" id="map">
<div className="max-w-6xl mx-auto px-6 space-y-12">
<div className="text-center space-y-4">
<h2 className="text-4xl font-semibold tracking-tight text-blue-600">Map &amp; Directions</h2>
<p className="text-lg text-slate-700">🚗 Office Location &amp; Directions</p>
</div>

<div className="rounded-lg overflow-hidden shadow-lg">
<iframe allowfullscreen="" className="w-full h-96" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.325714763764!2d-81.46631698456334!3d41.46582067925609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830fa01b9c5dc97%3A0x20123f611b795882!2s30195%20Chagrin%20Blvd%20%23300%2C%20Pepper%20Pike%2C%20OH%2044124!5e0!3m2!1sen!2sus!4v1680123456789"></iframe>
</div>

<div className="text-center space-y-2 text-sm">
<p><strong>Blocker Law – Pepper Pike Office</strong></p>
<p>📍 30195 Chagrin Blvd, Suite 300, Pepper Pike, OH 44124</p>
<p>📞 (216) 360-9961</p>
<p className="text-xs text-slate-500">Need directions? Click “Directions” or “View larger map” on the map.</p>
</div>

<div className="space-y-4">
<h3 className="text-xl font-semibold tracking-tight text-blue-600 text-center">Serving Northeast Ohio</h3>
<div className="grid sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-slate-700">
<span>Beachwood</span><span>Chagrin Falls</span><span>Maple Heights</span><span>Gates Mills</span>
<span>Cleveland</span><span>Bedford</span><span>Euclid</span><span>Solon</span>
<span>Lakewood</span><span>Independence</span><span>Wickliffe</span><span>Novelty</span>
</div>
</div>

<div className="border-t border-slate-100 pt-10 space-y-4 text-center">
<p className="text-xs text-slate-500">ℹ️ The content on this website is for informational purposes only and does not constitute legal advice. Visiting this site or viewing directions does not establish an attorney-client relationship.</p>
<p className="text-sm">✉️ Planning a visit or have questions? Call us at <a className="text-blue-600 hover:underline" href="tel:12163609961">(216) 360-9961</a> to schedule your consultation.</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
<div className="flex items-center space-x-2 text-slate-600">
<span className="font-semibold tracking-tight text-blue-600">BL</span>
<span>© <span id="year"></span> Blocker Law LLC.</span>
</div>
<div className="flex items-center space-x-6 text-sm">
<button className="hover:text-blue-600 transition" data-section="contact">Contact Us</button>
<button className="hover:text-blue-600 transition" data-section="map">Map &amp; Directions</button>
<button className="hover:text-blue-600 transition" data-section="attorney">Attorney Profile</button>
</div>
</div>
</footer>




    </>
  );
}
