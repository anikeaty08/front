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

    /* Simple section switching */
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

    /* Default visible */
    showSection('home');
  
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
<div className="max-w-4xl mx-auto px-6 space-y-10">
<h2 className="text-4xl font-semibold tracking-tight text-blue-600">David S. Blocker</h2>
<p className="text-slate-700 text-lg">Owner, Blocker Law LLC (Cleveland & Pepper Pike, OH)</p>
<p className="text-slate-700 text-sm">David Blocker is a seasoned litigation and family law attorney and founder of Blocker Law LLC, offering decades of experience guiding clients through complex financial and personal legal matters. Known for his practical, empathetic counsel, David helps individuals, families, and businesses navigate bankruptcy, debt, divorce, custody, estate planning, and commercial disputes.</p>

<div>
<h3 className="text-xl font-semibold text-blue-600 mb-2">Core Expertise</h3>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
<li>Litigation (bench trials, jury trials, depositions, written discovery, settlement conferences)</li>
<li>Bankruptcy & Debt: restructuring, receiverships, trusteeships, representation of secured/unsecured creditors, debtors, trustees, receivers</li>
<li>Debt & Lending Agreements: fraudulent transfer, successor liability, equitable subordination claims</li>
<li>Family Law: divorce, dissolution, custody, support, prenuptial/domestic partnership agreements</li>
<li>Estate Planning & Probate</li>
</ul>
</div>

<div>
<h3 className="text-xl font-semibold text-blue-600 mb-2">Representative Engagements</h3>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
<li>Led litigation across all phases—including trials, discovery, and settlements</li>
<li>Represented a bankruptcy trustee in unwinding a $20 million Ponzi scheme, managing over 100 adversary proceedings</li>
<li>Assisted a parts supplier to Ford, a real estate development firm, and a national insulation manufacturer through bankruptcy</li>
<li>Collected millions in commercial debts for various industry clients</li>
<li>Represented banks in commercial property foreclosures with receivers appointed</li>
<li>Negotiated resolutions with state/federal agencies on sales practices</li>
<li>Secured sole custody and support settlements for clients, including international relocation support</li>
</ul>
</div>

<div>
<h3 className="text-xl font-semibold text-blue-600 mb-2">Honors & Recognition</h3>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
<li>Super Lawyers selection: 2015–2021</li>
<li>Rising Star: 2007–2012</li>
<li>Avvo Rating: 8.7 (“Excellent”) based on peer endorsements, client feedback, and community involvement Avvo</li>
</ul>
</div>

<div>
<h3 className="text-xl font-semibold text-blue-600 mb-2">Bar Admissions</h3>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
<li>Ohio, 2002</li>
<li>U.S. District Court, Northern District of Ohio, 2003</li>
</ul>
</div>

<div>
<h3 className="text-xl font-semibold text-blue-600 mb-2">Education</h3>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
<li>Case Western Reserve University School of Law, J.D. (2002)</li>
<li>Miami University, B.A. (1998)</li>
</ul>
</div>

<div>
<h3 className="text-xl font-semibold text-blue-600 mb-2">Professional Experience</h3>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
<li>Attorney, Sokin & Koberna, LPA (2012–2017)</li>
<li>Attorney, Kohrman Jackson & Krantz, P.L.L. (2005–2012)</li>
<li>Associate, McCarthy, Lebit, Crystal & Liffman, LPA (2002–2005) Avvo</li>
</ul>
</div>

<div>
<h3 className="text-xl font-semibold text-blue-600 mb-2">Associations</h3>
<ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
<li>American Bar Association</li>
<li>Ohio State Bar Association</li>
<li>Cleveland Metropolitan Bar Association Avvo</li>
</ul>
</div>

<div>
<h3 className="text-xl font-semibold text-blue-600 mb-2">Community & Approach</h3>
<p className="text-sm text-slate-700">David is deeply rooted and highly engaged in the Cleveland and Northeast Ohio legal communities. He delivers transparent, personalized strategies tailored to clients’ objectives, business realities, and long-term well-being.</p>
</div>

<div className="space-y-1">
<h3 className="text-xl font-semibold text-blue-600">Contact David</h3>
<p className="text-sm text-slate-700"><strong>📞 Phone:</strong> (216) 360-9961</p>
<p className="text-sm text-slate-700"><strong>📧 Email/Inquiries:</strong> Via the Contact Us page on our website</p>
<p className="text-sm text-slate-700"><strong>📍 Office:</strong> Blocker Law LLC — 30195 Chagrin Blvd., Suite 300, Pepper Pike, OH 44124</p>
</div>
</div>
</section>

<section className="section hidden py-24" id="practice">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-blue-600 mb-6">Practice Areas</h2>
<p className="text-slate-700 text-lg">Section coming soon.</p>
</div>
</section>

<section className="section hidden py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-blue-600 mb-6">Contact Us</h2>
<p className="text-slate-700 text-lg">Section coming soon.</p>
</div>
</section>

<section className="section hidden py-24" id="map">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-blue-600 mb-6">Map & Directions</h2>
<p className="text-slate-700 text-lg">Section coming soon.</p>
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
<button className="hover:text-blue-600 transition" data-section="map">Map & Directions</button>
<button className="hover:text-blue-600 transition" data-section="attorney">Attorney Profile</button>
</div>
</div>
</footer>




    </>
  );
}
