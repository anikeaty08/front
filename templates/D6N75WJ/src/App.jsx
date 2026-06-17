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
  


    const ctx = document.getElementById('satisfactionChart');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Excellent', 'Good', 'Average', 'Poor'],
        datasets: [{
          data: [72, 20, 6, 2],
          backgroundColor: ['#059669', '#10B981', '#6EE7B7', '#D1FAE5'],
          hoverOffset: 4
        }]
      },
      options: {
        plugins: { legend: { position: 'bottom', labels: { color: '#334155' } } }
      }
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
      

<header className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
<div className="text-2xl tracking-tight font-semibold text-slate-900">SF Chef</div>
<nav className="hidden md:flex gap-8 text-sm">
<a className="hover:text-emerald-600 transition" href="#menus">Menus</a>
<a className="hover:text-emerald-600 transition" href="#testimonials">Testimonials</a>
<a className="hover:text-emerald-600 transition" href="#about">About</a>
<a className="hover:text-emerald-600 transition" href="#contact">Contact</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 text-sm hover:bg-emerald-700 transition" href="#contact">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i> Book Consultation
    </a>
</header>

<section className="relative overflow-hidden">
<div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
<div className="flex-1 space-y-6">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Nourishing Ayurvedic Cuisine<br className="hidden md:block"/>for Mind-Body Wellness
        </h1>
<p className="text-lg text-slate-600">
          Personal chef crafting seasonally balanced meals for retreats, private events, and mindful gatherings across Northern California.
        </p>
<div className="flex gap-4">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-5 py-3 text-sm shadow-sm hover:bg-emerald-700 transition" href="#contact">
<i className="w-4 h-4" data-lucide="calendar-plus" strokeWidth="1.5"></i> Book Consultation
          </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 text-slate-700 px-5 py-3 text-sm hover:border-emerald-600 hover:text-emerald-600 transition" href="#menus">
<i className="w-4 h-4" data-lucide="book-open" strokeWidth="1.5"></i> View Sample Menus
          </a>
</div>
</div>
<div className="flex-1">
<img alt="Ayurvedic dishes" className="rounded-lg shadow-sm w-full object-cover" src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&amp;fit=crop&amp;w=900&amp;q=60"/>
</div>
</div>

<div className="absolute inset-0 -z-0 bg-gradient-to-br from-emerald-50 via-transparent to-transparent"></div>
</section>

<section className="max-w-5xl mx-auto px-6 py-20 space-y-12" id="menus">
<div className="text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Seasonal Sample Menus</h2>
<p className="text-slate-600 mt-3">Balanced according to dosha, locally sourced, always organic.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Spring Revitalize</h3>
<ul className="space-y-2 text-sm">
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="leaf" strokeWidth="1.5"></i> Asparagus &amp; Mint Kitchari</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="leaf" strokeWidth="1.5"></i> Citrusy Fennel Salad</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="leaf" strokeWidth="1.5"></i> Cardamom Rose Chia Pudding</li>
</ul>
</div>
<div className="border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Summer Cooling</h3>
<ul className="space-y-2 text-sm">
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="leaf" strokeWidth="1.5"></i> Coconut Lime Gazpacho</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="leaf" strokeWidth="1.5"></i> Watermelon Basil Salad</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="leaf" strokeWidth="1.5"></i> Saffron Mango Lassi</li>
</ul>
</div>
<div className="border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Autumn Grounding</h3>
<ul className="space-y-2 text-sm">
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="leaf" strokeWidth="1.5"></i> Roasted Squash Dal</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="leaf" strokeWidth="1.5"></i> Fig &amp; Arugula Quinoa</li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="leaf" strokeWidth="1.5"></i> Golden Turmeric Mylk</li>
</ul>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 pb-20">
<div className="border-t border-slate-100 pt-16 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-4">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Retreat Satisfaction</h2>
<p className="text-slate-600">Participants consistently rate meals as a highlight of their wellness experience.</p>
</div>
<div>
<div className="relative w-full">
<canvas id="satisfactionChart"></canvas>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20" id="testimonials">
<div className="max-w-5xl mx-auto px-6 space-y-12">
<div className="text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Kind Words</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
<p className="text-slate-600 italic">“Every dish felt like a warm embrace. Our guests left feeling lighter, brighter, and deeply nourished.”</p>
<div className="flex items-center gap-4 mt-6">
<img alt="Face" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&amp;fit=crop&amp;w=64&amp;q=60"/>
<div>
<p className="font-medium text-slate-900">Maya L.</p>
<p className="text-xs text-slate-500">Retreat Host</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
<p className="text-slate-600 italic">“The balance of flavors and dosha-specific meals elevated our wellness program to the next level.”</p>
<div className="flex items-center gap-4 mt-6">
<img alt="Face" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=crop&amp;w=64&amp;q=60"/>
<div>
<p className="font-medium text-slate-900">Jordan P.</p>
<p className="text-xs text-slate-500">Yoga Instructor</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
<p className="text-slate-600 italic">“Thoughtful, flavorful, and completely stress-free. We’ll be booking again for our next retreat.”</p>
<div className="flex items-center gap-4 mt-6">
<img alt="Face" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=64&amp;q=60"/>
<div>
<p className="font-medium text-slate-900">Samantha D.</p>
<p className="text-xs text-slate-500">Wellness Director</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center" id="about">
<div>
<img alt="Chef portrait" className="rounded-lg shadow-sm object-cover w-full" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&amp;fit=crop&amp;w=900&amp;q=60"/>
</div>
<div className="space-y-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Meet Chef Anjali</h2>
<p className="text-slate-600">Trained in both classical culinary arts and Ayurvedic nutrition, I bring fifteen years of experience to every table. My mission is simple: translate ancient wisdom into vibrant, modern dishes that delight the senses and restore balance.</p>
<p className="text-slate-600">From intimate gatherings to multi-day retreats, I handle menu design, sourcing, and on-site preparation so you can focus on your guests’ transformation.</p>
</div>
</section>

<section className="bg-emerald-600 text-white py-20" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to Nourish Your Next Retreat?</h2>
<p className="text-lg opacity-90">Share your dates, guest count, and dietary goals. We’ll craft a bespoke culinary plan together.</p>
<form className="grid md:grid-cols-3 gap-4 max-w-xl mx-auto">
<input className="col-span-3 md:col-span-1 px-4 py-3 rounded-md text-slate-800 placeholder-slate-500" placeholder="Full Name" type="text"/>
<input className="col-span-3 md:col-span-1 px-4 py-3 rounded-md text-slate-800 placeholder-slate-500" placeholder="Email" type="email"/>
<input className="col-span-3 md:col-span-1 px-4 py-3 rounded-md text-slate-800 placeholder-slate-500" placeholder="Phone" type="tel"/>
<textarea className="col-span-3 px-4 py-3 rounded-md text-slate-800 placeholder-slate-500" placeholder="Event details &amp; dates" rows="4"></textarea>
<button className="col-span-3 inline-flex justify-center items-center gap-2 bg-white text-emerald-600 font-semibold px-5 py-3 rounded-md hover:bg-slate-100 transition" type="submit">
<i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i> Submit Inquiry
        </button>
</form>
</div>
</section>

<footer className="text-sm text-slate-500 py-12 text-center">
    © 2023 SF Ayurvedic Chef — San Francisco, CA
  </footer>





    </>
  );
}
