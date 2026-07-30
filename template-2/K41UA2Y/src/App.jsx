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



    // Mobile menu toggle
    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    }

    // Simple staggered animation
    window.addEventListener('DOMContentLoaded', () => {
      const animated = document.querySelectorAll('.animate-in');
      animated.forEach((el, idx) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.style.transition = 'all 700ms cubic-bezier(.16,1,.3,1)';
        }, idx * 150 + 200);
      });

      // Render lucide icons
      lucide.createIcons();

      // Chart.js
      const ctx = document.getElementById('beerChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Golden Haze IPA', 'Midnight Stout', 'Summer Wheat'],
          datasets: [
            { label: 'ABV %', data: [6.5, 5.8, 4.7], backgroundColor: 'rgb(252 211 82)', borderRadius: 6 },
            { label: 'IBU', data: [60, 40, 20], backgroundColor: 'rgb(245 158 11)', borderRadius: 6 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true, ticks: { color: '#4b5563' }, grid: { color: '#e5e7eb' } },
            x: { ticks: { color: '#4b5563' }, grid: { display: false } }
          },
          plugins: {
            legend: { labels: { color: '#374151', usePointStyle: true } }
          }
        }
      });
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
      

<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-indigo-200">
<div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
<h1 className="text-2xl font-semibold tracking-tight text-blue-700">CraftBrew</h1>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-blue-700 transition" href="#beers">Beers</a>
<a className="hover:text-blue-700 transition" href="#story">Our Story</a>
<a className="hover:text-blue-700 transition" href="#stats">Stats</a>
<a className="hover:text-blue-700 transition" href="#contact">Contact</a>
</nav>
<button aria-label="Open Menu" className="md:hidden" onClick={(e) => { toggleMenu() }}>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<div className="hidden flex-col gap-6 px-6 pb-6 md:hidden" id="mobileMenu">
<a className="hover:text-blue-700 transition" href="#beers">Beers</a>
<a className="hover:text-blue-700 transition" href="#story">Our Story</a>
<a className="hover:text-blue-700 transition" href="#stats">Stats</a>
<a className="hover:text-blue-700 transition" href="#contact">Contact</a>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 space-y-6">
<h2 className="animate-in text-5xl font-semibold tracking-wide text-left bg-cyan-600 bg-[url(https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?w=1600&q=80)] bg-cover translate-x-6 translate-y-3 skew-x-10" style={{opacity: `1`, transform: `translateY(0px)`, transition: `700ms cubic-bezier(0.16, 1, 0.3, 1)`}}>Taste the Adventure in Every Sip</h2>
<p className="text-lg leading-relaxed text-indigo-600 animate-in" style={{opacity: `1`, transform: `translateY(0px)`, transition: `700ms cubic-bezier(0.16, 1, 0.3, 1)`}}>Small-batch, locally sourced ingredients brewed with passion and precision.</p>
<div className="flex flex-col sm:flex-row gap-4 animate-in" style={{opacity: `1`, transform: `translateY(0px)`, transition: `700ms cubic-bezier(0.16, 1, 0.3, 1)`}}>
<button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition outline-none">Explore Beers</button>
<button className="px-6 py-3 border border-indigo-300 rounded-lg hover:border-blue-700 hover:text-blue-700 transition">Our Story</button>
</div>
</div>
<div className="flex-1">
<img alt="Hero Beer" className="rounded-2xl shadow-lg w-full h-auto animate-in" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" style={{opacity: `1`, transform: `translateY(0px)`, transition: `700ms cubic-bezier(0.16, 1, 0.3, 1)`}} />
</div>
</section>

<section className="bg-indigo-50 py-20" id="beers">
<div className="max-w-7xl mx-auto px-6 space-y-16">
<div className="text-center space-y-4">
<h3 className="text-3xl font-semibold tracking-tight">Signature Brews</h3>
<p className="max-w-2xl text-indigo-600 mr-auto ml-auto">Hand-crafted recipes that push the boundaries of flavor while honoring tradition.</p>
</div>
<div className="grid md:grid-cols-3 gap-12">

<div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition p-8 space-y-6">
<div className="bg-blue-100 text-blue-700 w-12 h-12 flex items-center justify-center rounded-lg">
<svg className="lucide lucide-beer w-6 h-6" data-lucide="beer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 11h1a3 3 0 0 1 0 6h-1"></path><path d="M9 12v6"></path><path d="M13 12v6"></path><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"></path><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path></svg>
</div>
<h4 className="text-xl font-medium tracking-tight">Golden Haze IPA</h4>
<p className="text-indigo-600 leading-relaxed">Bursting with citrus and tropical aromas, balanced bitterness, and a dry finish.</p>
<span className="absolute inset-0 rounded-xl ring-1 ring-indigo-200 pointer-events-none"></span>
</div>
<div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition p-8 space-y-6">
<div className="bg-blue-100 text-blue-700 w-12 h-12 flex items-center justify-center rounded-lg">
<svg className="lucide lucide-droplet w-6 h-6" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<h4 className="text-xl font-medium tracking-tight">Midnight Stout</h4>
<p className="leading-relaxed text-indigo-600">Rich chocolate notes, velvety mouthfeel, and a lingering roasted finish.</p>
<span className="absolute inset-0 rounded-xl ring-1 ring-indigo-200 pointer-events-none"></span>
</div>
<div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition p-8 space-y-6">
<div className="bg-blue-100 text-blue-700 w-12 h-12 flex items-center justify-center rounded-lg">
<svg className="lucide lucide-sun w-6 h-6" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<h4 className="text-xl font-medium tracking-tight">Summer Wheat</h4>
<p className="text-indigo-600 leading-relaxed">Light, crisp, and refreshing with notes of citrus zest and a hint of spice.</p>
<span className="absolute inset-0 rounded-xl ring-1 ring-indigo-200 pointer-events-none"></span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="grid md:grid-cols-3 gap-6">
<img alt="Brewery" className="rounded-xl shadow-md object-cover w-full h-64 hover:scale-105 transition" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<img alt="Beer Glasses" className="w-full h-64 hover:scale-105 transition object-cover rounded-xl shadow-md" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<img alt="Pouring Beer" className="rounded-xl shadow-md object-cover w-full h-64 hover:scale-105 transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</section>

<section className="bg-indigo-50 py-24" id="story">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<img alt="Founder" className="rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1518176258769-f227c798150e?auto=format&fit=crop&w=800&q=60" />
<div className="space-y-6">
<h3 className="text-3xl font-semibold tracking-tight">Brewed With Heart Since 2013</h3>
<p className="text-indigo-600 leading-relaxed">CraftBrew began in a reclaimed warehouse with a single mission: to create unforgettable beer experiences. Our team of passionate brewers combines artisanal techniques with innovative flavor exploration. From grain to glass, we’re committed to sustainability, community, and exceptional taste.</p>
<button className="mt-4 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition outline-none">Meet the Team</button>
</div>
</div>
</section>

<section className="py-24" id="stats">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h3 className="text-3xl font-semibold tracking-tight">Flavor Profile Comparison</h3>
<p className="text-indigo-600 max-w-xl mx-auto">A quick look at ABV and IBU of our core lineup.</p>
</div>
<div className="relative bg-white rounded-2xl p-8 shadow-sm ring-1 ring-indigo-200 w-full md:w-3/4 mx-auto">
<div className="">
<canvas className="" height="300" id="beerChart" style={{display: `block`, boxSizing: `border-box`, height: `150px`, width: `836px`}} width="1672"></canvas>
</div>
</div>
</div>
</section>

<section className="bg-indigo-50 py-20">
<div className="max-w-3xl mx-auto px-6 text-center space-y-8">
<h3 className="text-3xl font-semibold tracking-tight">Stay in the Loop</h3>
<p className="text-indigo-600">Get early access to limited releases, events and more.</p>
<form className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="flex-1 px-4 py-3 rounded-lg border border-indigo-300 focus:border-blue-700 focus:ring-blue-200 outline-none transition" placeholder="you@example.com" required type="email" />
<button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition outline-none" type="submit">Subscribe</button>
</form>
</div>
</section>

<footer className="bg-indigo-900 text-indigo-200 py-12" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
<div>
<h4 className="text-xl font-medium tracking-tight text-white mb-4">CraftBrew</h4>
<p className="text-indigo-400">123 Brew LanePortland, OR 97214(503) 555-0123</p>
</div>
<div>
<h5 className="text-sm font-medium text-white mb-2">Quick Links</h5>
<ul className="space-y-2 text-indigo-400">
<li><a className="hover:text-white transition" href="#beers">Beers</a></li>
<li><a className="hover:text-white transition" href="#story">Our Story</a></li>
<li><a className="hover:text-white transition" href="#stats">Stats</a></li>
<li><a className="hover:text-white transition" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium text-white mb-2">Follow Us</h5>
<div className="flex gap-4">
<a className="hover:text-white transition" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-white transition" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-white transition" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
</div>
<div className="mt-12 text-center text-indigo-500 text-xs">© 2024 CraftBrew Co. All rights reserved.</div>
</footer>


    </>
  );
}
