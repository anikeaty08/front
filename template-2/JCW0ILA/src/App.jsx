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



    // lucide icons
    lucide.createIcons({ attrs: { strokeWidth: 1.5 } });

    // Element reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.remove('opacity-0', 'translate-y-4', 'blur-sm');
          el.style.transitionDelay = el.getAttribute('style')?.match(/--delay:(\d+)ms/)?.[1] + 'ms' || '0ms';
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));

    // Chart.js dataset
    const ctx = document.getElementById('capturedChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2021', '2022', '2023', '2024'],
        datasets: [{
          label: 'CO₂ Captured (t)',
          data: [3000, 7000, 12000, 20000],
          borderColor: '#34d399',
          backgroundColor: 'rgba(52, 211, 153, .1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { grid: { color: 'rgba(255,255,255,.05)' }, ticks: { color: '#9ca3af' } },
          y: { grid: { color: 'rgba(255,255,255,.05)' }, ticks: { color: '#9ca3af' } }
        }
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
      

<header className="px-6 md:px-10 lg:px-16 py-6 flex items-center justify-between backdrop-blur-md bg-gray-950/70 border-b border-white/5 sticky top-0 z-50">
<h1 className="text-2xl tracking-tight font-semibold text-white">Sage<span className="text-emerald-400">Carbon</span></h1>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-emerald-400 transition" href="#science">Science</a>
<a className="hover:text-emerald-400 transition" href="#partners">Partners</a>
<a className="hover:text-emerald-400 transition" href="#impact">Impact</a>
<a className="hover:text-emerald-400 transition" href="#footer">About</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition border border-emerald-500/20" href="#buy">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
<span>Buy Carbon Credits</span>
</a>
</header>

<section className="px-6 md:px-10 lg:px-16 pt-24 pb-32 grid lg:grid-cols-2 gap-16">
<div className="flex flex-col justify-center gap-8">
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold leading-tight opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `100ms`}}>Capture Carbon.<br />Restore Balance.</h2>
<p className="text-lg md:text-xl text-gray-300 max-w-xl opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `200ms`}}>
        Sage Carbon delivers high-integrity direct air capture (DAC) credits—permanent, measurable, and verifiable. Partner with us to hit net-zero faster.
      </p>
<div className="flex flex-wrap gap-4 opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `300ms`}}>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-500 text-gray-950 font-medium hover:bg-emerald-400 transition" href="#buy">
<i className="w-5 h-5" data-lucide="credit-card"></i>
          Buy Carbon Credits
        </a>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition" href="#science">
<i className="w-5 h-5" data-lucide="flask-conical"></i>
          Learn the Science
        </a>
</div>
</div>
<div className="relative">
<img alt="Direct Air Capture Facility" className="w-full h-[28rem] md:h-[32rem] object-cover rounded-lg shadow-xl ring-1 ring-white/10 opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" style={{'--delay': `400ms`}} />
<div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-md px-4 py-3 rounded-lg flex items-center gap-3 text-sm border border-white/10">
<i className="w-4 h-4 text-emerald-400" data-lucide="leaf"></i>
<span>Powered by renewable energy</span>
</div>
</div>
</section>

<section className="px-6 md:px-10 lg:px-16 py-20 border-t border-white/5" id="partners">
<h3 className="text-center text-gray-400 text-sm uppercase tracking-wide mb-10">Trusted by forward-thinking companies</h3>
<div className="flex flex-wrap justify-center gap-12 opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `100ms`}}>
<span className="text-3xl font-semibold tracking-tight text-white/80">Nexa</span>
<span className="text-3xl font-semibold tracking-tight text-white/80">Grove</span>
<span className="text-3xl font-semibold tracking-tight text-white/80">Opti</span>
<span className="text-3xl font-semibold tracking-tight text-white/80">Vita</span>
<span className="text-3xl font-semibold tracking-tight text-white/80">Hexa</span>
</div>
</section>

<section className="px-6 md:px-10 lg:px-16 py-24 grid lg:grid-cols-2 gap-16 border-t border-white/5" id="impact">
<div>
<h3 className="text-3xl md:text-4xl tracking-tight font-semibold mb-6 opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `100ms`}}>
        Quantifiable climate impact
      </h3>
<p className="text-gray-300 mb-8 max-w-lg opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `200ms`}}>
        Every metric ton of CO₂ captured by Sage Carbon is tracked on-chain and third-party verified, ensuring transparency and permanence. Our facilities are engineered for 100+ year durability.
      </p>
<ul className="space-y-4">
<li className="flex items-start gap-4 opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `300ms`}}>
<i className="w-5 h-5 text-emerald-400 mt-1" data-lucide="check-circle"></i>
<span>ISO-14064 compliant measurement & reporting</span>
</li>
<li className="flex items-start gap-4 opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `400ms`}}>
<i className="w-5 h-5 text-emerald-400 mt-1" data-lucide="check-circle"></i>
<span>Permanence insured and guaranteed</span>
</li>
<li className="flex items-start gap-4 opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `500ms`}}>
<i className="w-5 h-5 text-emerald-400 mt-1" data-lucide="check-circle"></i>
<span>Lifecycle analysis certified by independent labs</span>
</li>
</ul>
</div>
<div className="space-y-8">
<div className="bg-gray-900 rounded-lg p-6 ring-1 ring-white/10 shadow-lg opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `100ms`}}>
<h4 className="text-lg font-medium mb-2">Captured CO₂ to-date (t)</h4>
<div>
<canvas id="capturedChart"></canvas>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="bg-gray-900 rounded-lg p-4 text-center ring-1 ring-white/10 shadow-lg flex flex-col justify-center items-center opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `200ms`}}>
<span className="text-4xl font-semibold tracking-tight text-emerald-400">15</span>
<span className="text-sm text-gray-400 mt-1">kT per year capacity</span>
</div>
<div className="bg-gray-900 rounded-lg p-4 text-center ring-1 ring-white/10 shadow-lg flex flex-col justify-center items-center opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `300ms`}}>
<span className="text-4xl font-semibold tracking-tight text-emerald-400">100+</span>
<span className="text-sm text-gray-400 mt-1">Enterprise buyers</span>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-10 lg:px-16 py-24 bg-gradient-to-br from-emerald-600/5 via-gray-900/20 to-gray-900 border-t border-white/5" id="buy">
<div className="max-w-3xl mx-auto text-center space-y-8">
<h3 className="text-3xl md:text-4xl tracking-tight font-semibold opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `100ms`}}>
        Ready to neutralize your footprint?
      </h3>
<p className="text-gray-300 opacity-0 translate-y-4 blur-sm transition-all duration-700" data-reveal="" style={{'--delay': `200ms`}}>
        Purchase high-quality DAC credits today and join the companies leading climate action.
      </p>
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-emerald-500 text-gray-950 font-medium hover:bg-emerald-400 transition opacity-0 translate-y-4 blur-sm" data-reveal="" href="#" style={{'--delay': `300ms`}}>
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
        Buy Carbon Credits
      </a>
</div>
</section>

<footer className="px-6 md:px-10 lg:px-16 py-16 border-t border-white/5" id="footer">
<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12">
<div className="space-y-4">
<h4 className="text-xl font-semibold tracking-tight">Sage<span className="text-emerald-400">Carbon</span></h4>
<p className="text-gray-400 max-w-xs">Building scalable direct air capture solutions for a net-zero future.</p>
</div>
<div className="flex gap-12">
<div>
<h5 className="text-sm text-gray-300 mb-3">Company</h5>
<ul className="space-y-2 text-gray-400 text-sm">
<li><a className="hover:text-emerald-400 transition" href="#">About</a></li>
<li><a className="hover:text-emerald-400 transition" href="#">Careers</a></li>
<li><a className="hover:text-emerald-400 transition" href="#">Blog</a></li>
</ul>
</div>
<div>
<h5 className="text-sm text-gray-300 mb-3">Resources</h5>
<ul className="space-y-2 text-gray-400 text-sm">
<li><a className="hover:text-emerald-400 transition" href="#">Documentation</a></li>
<li><a className="hover:text-emerald-400 transition" href="#">Methodology</a></li>
<li><a className="hover:text-emerald-400 transition" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 border-t border-white/5 pt-6 flex flex-col md:flex-row md:justify-between text-xs text-gray-500">
<span>© 2024 Sage Carbon, Inc.</span>
<div className="mt-2 md:mt-0 space-x-4">
<a className="hover:text-gray-300 transition" href="#">Privacy</a>
<a className="hover:text-gray-300 transition" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
