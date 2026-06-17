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



          lucide.createIcons();
        


    lucide.createIcons();
    window.onload = function() {
      var ctx = document.getElementById('qbChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Efficiency', 'Accuracy', 'Insights', 'Security'],
          datasets: [{
            label: 'With QuickBooks',
            data: [95, 98, 92, 97],
            backgroundColor: '#6366f1',
            borderRadius: 8,
          }, {
            label: 'Without',
            data: [60, 65, 55, 70],
            backgroundColor: '#e5e7eb',
            borderRadius: 8,
          }]
        },
        options: {
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              grid: { color: '#e5e7eb' },
              ticks: { color: '#6b7280', font: { family: 'Inter', size: 12, weight: 500 } }
            },
            x: {
              grid: { display: false },
              ticks: { color: '#6b7280', font: { family: 'Inter', size: 13, weight: 600 } }
            }
          }
        }
      });
      // Animate fade-in
      document.querySelectorAll('.fade-in,.fade-in-blur').forEach((el, i) => {
        setTimeout(() => el.style.animationPlayState = 'running', 50 + i * 100);
      });
    };
  
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
      

<header className="w-full bg-white shadow-sm sticky top-0 z-30 fade-in">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<svg className="text-indigo-600" height="32" viewbox="0 0 24 24" width="32"><circle cx="12" cy="12" fill="#6366f1" r="10"></circle><path d="M8 12l2 2l4-4" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xl font-semibold tracking-tight text-gray-800">QuickBooks Experts</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-indigo-600 transition hover-outline py-1 px-2 rounded" href="#services">Services</a>
<a className="text-sm font-medium hover:text-indigo-600 transition hover-outline py-1 px-2 rounded" href="#benefits">Benefits</a>
<a className="text-sm font-medium hover:text-indigo-600 transition hover-outline py-1 px-2 rounded" href="#testimonials">Testimonials</a>
<a className="text-sm font-medium hover:text-indigo-600 transition hover-outline py-1 px-2 rounded" href="#contact">Contact</a>
</nav>
<a className="hidden md:inline-block px-5 py-2 font-semibold text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition hover-outline" href="#contact">Get Started</a>
<button aria-label="Open menu" className="md:hidden flex items-center justify-center p-2 rounded hover:bg-gray-100 hover-outline">
<svg className="text-gray-700" height="24" width="24"><use href="#menu"></use></svg>

</button>
</div>
<div style={{display: 'none'}}>
<svg><symbol id="menu" viewbox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path></symbol></svg>
</div>
</header>

<section className="max-w-7xl mx-auto w-full px-6 pt-12 pb-16 flex flex-col md:flex-row items-center gap-12 fade-in delay-1">
<div className="w-full md:w-1/2 flex flex-col gap-6">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 fade-in">QuickBooks Accounting <span className="text-indigo-600">Services</span> for Modern Businesses</h1>
<p className="text-lg text-gray-600 fade-in delay-1">Streamline your finances, boost productivity, and gain real-time insights with expert QuickBooks setup, bookkeeping, and ongoing support tailored for your business.</p>
<div className="flex gap-4 fade-in delay-2">
<a className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 shadow transition hover-outline" href="#contact">Request a Free Consultation</a>
<a className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md border border-indigo-100 hover:bg-indigo-50 transition hover-outline" href="#services">
<svg className="mr-2" height="20" width="20"><use href="#arrow-right"></use></svg>
<span>Our Services</span>
</a>
</div>
</div>
<div className="w-full md:w-1/2 flex justify-center fade-in-blur delay-1">
<img alt="Accounting dashboard" className="rounded-xl shadow-lg w-full max-w-md object-cover" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div style={{display: 'none'}}>
<svg><symbol id="arrow-right" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></symbol></svg>
</div>
</section>

<section className="max-w-7xl mx-auto w-full px-6 py-12" id="services">
<div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
<div className="flex-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 fade-in">What We Offer</h2>
<ul className="space-y-6 fade-in delay-1">
<li className="flex items-start gap-3 group">
<div className="flex-shrink-0 mt-1">
<svg className="text-indigo-600 group-hover:scale-110 transition" data-lucide="receipt-text" height="24" width="24"></svg>
</div>
<div>
<h3 className="font-semibold text-lg text-gray-900 mb-1">QuickBooks Setup &amp; Migration</h3>
<p className="text-gray-600 text-base">Seamless onboarding and migration of your existing financial data into QuickBooks with zero downtime.</p>
</div>
</li>
<li className="flex items-start gap-3 group">
<div className="flex-shrink-0 mt-1">
<svg className="text-indigo-600 group-hover:scale-110 transition" data-lucide="list-checks" height="24" width="24"></svg>
</div>
<div>
<h3 className="font-semibold text-lg text-gray-900 mb-1">Bookkeeping &amp; Reconciliations</h3>
<p className="text-gray-600 text-base">Accurate transaction recording, bank reconciliations, and monthly close for audit-ready books.</p>
</div>
</li>
<li className="flex items-start gap-3 group">
<div className="flex-shrink-0 mt-1">
<svg className="text-indigo-600 group-hover:scale-110 transition" data-lucide="bar-chart-3" height="24" width="24"></svg>
</div>
<div>
<h3 className="font-semibold text-lg text-gray-900 mb-1">Financial Reporting &amp; Insights</h3>
<p className="text-gray-600 text-base">Custom dashboards, P&amp;L, balance sheets, and actionable insights to drive better business decisions.</p>
</div>
</li>
<li className="flex items-start gap-3 group">
<div className="flex-shrink-0 mt-1">
<svg className="text-indigo-600 group-hover:scale-110 transition" data-lucide="life-buoy" height="24" width="24"></svg>
</div>
<div>
<h3 className="font-semibold text-lg text-gray-900 mb-1">Ongoing Support &amp; Training</h3>
<p className="text-gray-600 text-base">Expert support, troubleshooting, and staff training to maximize your QuickBooks investment.</p>
</div>
</li>
</ul>
</div>
<div className="flex-1 bg-white rounded-xl shadow-lg px-8 py-8 fade-in delay-2">
<h3 className="font-semibold text-base mb-2 text-gray-700">How QuickBooks Improves Your Business</h3>
<div className="w-full" style={{height: '280px'}}>
<canvas height="220" id="qbChart" width="400"></canvas>
</div>
</div>
</div>
<div className="border-t border-gray-200 mt-12"></div>
</section>

<section className="max-w-7xl mx-auto w-full px-6 py-12" id="benefits">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 fade-in">Why Choose Us?</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 fade-in delay-1">
<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 hover:shadow-lg transition hover-outline">
<div className="flex items-center gap-2">
<svg className="text-indigo-600" data-lucide="user-check" height="24" width="24"></svg>
<span className="font-semibold text-gray-900">Certified Experts</span>
</div>
<p className="text-gray-600 text-base">Our team is QuickBooks certified and highly experienced with SMBs and enterprises.</p>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 hover:shadow-lg transition hover-outline">
<div className="flex items-center gap-2">
<svg className="text-indigo-600" data-lucide="clock" height="24" width="24"></svg>
<span className="font-semibold text-gray-900">Time Saving Automation</span>
</div>
<p className="text-gray-600 text-base">Automate repetitive tasks and focus on growing your business, not manual entry.</p>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 hover:shadow-lg transition hover-outline">
<div className="flex items-center gap-2">
<svg className="text-indigo-600" data-lucide="shield-check" height="24" width="24"></svg>
<span className="font-semibold text-gray-900">Data Security</span>
</div>
<p className="text-gray-600 text-base">Bank-grade security, encrypted backups, and strict confidentiality for your peace of mind.</p>
</div>
</div>
<div className="border-t border-gray-200 mt-12"></div>
</section>

<section className="max-w-7xl mx-auto w-full px-6 py-12" id="testimonials">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 fade-in">What Our Clients Say</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in delay-1">
<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 hover:shadow-lg transition hover-outline">
<div className="flex items-center gap-3">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&amp;fit=facearea&amp;w=160&amp;h=160&amp;q=80"/>
<div>
<div className="font-semibold text-gray-900">Ava Chen</div>
<div className="text-gray-500 text-sm">Founder, PixelCraft</div>
</div>
</div>
<p className="text-gray-700 text-base">“Their QuickBooks experts transformed our messy books into clear dashboards. We now make decisions with confidence.”</p>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 hover:shadow-lg transition hover-outline">
<div className="flex items-center gap-3">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=facearea&amp;w=160&amp;h=160&amp;q=80"/>
<div>
<div className="font-semibold text-gray-900">Liam Patel</div>
<div className="text-gray-500 text-sm">COO, FinOptic</div>
</div>
</div>
<p className="text-gray-700 text-base">“Reliable, responsive, and proactive. Their team makes QuickBooks simple and stress-free for us.”</p>
</div>
</div>
<div className="border-t border-gray-200 mt-12"></div>
</section>

<section className="max-w-7xl mx-auto w-full px-6 py-12" id="contact">
<div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-10 fade-in delay-2">
<div className="md:w-1/2">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">Get Your Free Consultation</h2>
<p className="text-gray-600 mb-4">Let us know your needs and we’ll get back within 1 business day.</p>
<ul className="space-y-2 text-gray-600 text-base">
<li className="flex items-center gap-2">
<svg className="text-indigo-600" data-lucide="mail" height="20" width="20"></svg>
<span>support@quickbooksexperts.com</span>
</li>
<li className="flex items-center gap-2">
<svg className="text-indigo-600" data-lucide="phone" height="20" width="20"></svg>
<span>+1 (555) 123-4567</span>
</li>
</ul>
</div>
<form autocomplete="off" className="md:w-1/2 flex flex-col gap-4">
<div className="flex gap-4">
<div className="w-1/2">
<label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
<input className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition hover-outline" required="" type="text"/>
</div>
<div className="w-1/2">
<label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
<input className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition hover-outline" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
<textarea className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition hover-outline" required="" rows="4"></textarea>
</div>
<button className="mt-2 w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 shadow transition hover-outline" type="submit">Send Message</button>
</form>
</div>
</section>

<footer className="max-w-7xl mx-auto w-full px-6 py-8 mt-auto text-gray-500 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
<div>© 2024 QuickBooks Experts. All rights reserved.</div>
<div className="flex gap-4">
<a className="hover:text-indigo-600 transition hover-outline" href="#">Privacy Policy</a>
<a className="hover:text-indigo-600 transition hover-outline" href="#">Terms of Service</a>
</div>
</footer>


    </>
  );
}
