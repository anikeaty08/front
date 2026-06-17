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



    // Icons
    lucide.createIcons();

    // ROI Chart
    const ctx = document.getElementById('roiChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Month 1', '3', '6', '9', '12'],
        datasets: [{
          label: 'Estimated ROI',
          data: [0, 1200, 4800, 8500, 14000],
          borderColor: '#A855F7',
          backgroundColor: 'rgba(168, 85, 247, 0.15)',
          tension: 0.4,
          fill: true,
          pointRadius: 3,
          borderWidth: 2
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#9CA3AF' }, grid: { display: false } },
          y: { ticks: { color: '#9CA3AF', callback: v => `$${v / 1000}k` }, grid: { color: 'rgba(255,255,255,0.05)' } }
        }
      }
    });

    // Entrance Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.addEventListener('DOMContentLoaded', () => {
      const animated = document.querySelectorAll('.fade-in, .slide-in-up');
      animated.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = el.classList.contains('slide-in-up') ? 'translateY(40px)' : 'translateY(20px)';
        el.style.transition = `opacity 0.8s ease ${i * 0.1}s, transform 0.8s ease ${i * 0.1}s`;
        observer.observe(el);
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
      
<div className="fixed -z-10 w-full h-screen">
<iframe frameborder="0" height="100%" src="https://my.spline.design/animatedbackgroundgradientforweb-jvJDeBWjMvShkjPKxPRUswLq/" width="100%"></iframe>
</div>

<nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 lg:px-24 py-4">
<span className="text-lg font-medium">Elena Studio</span>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm opacity-60 hover:opacity-100 transition" href="#">Work</a>
<a className="text-sm opacity-60 hover:opacity-100 transition" href="#">About</a>
<a className="text-sm opacity-100" href="#">Pricing</a>
</div>
</div>
</nav>
<main className="md:px-16 lg:px-24 pt-24 pr-6 pb-24 pl-6 space-y-28">

<section className="fade-in max-w-4xl text-center mr-auto ml-auto space-y-6" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.8s, transform 0.8s'}}>
<div className="flex flex-col items-center mb-2">
<button className="text-xs text-gray-800 bg-gray-200 rounded-lg mb-1 pt-1 pr-2 pb-1 pl-2" style={{backgroundColor: 'rgb(31 41 55)', color: 'rgb(255 255 255)', border: 'none'}}>New launch</button>
</div>
<h1 className="text-[40px] md:text-[64px] lg:text-[80px] leading-none font-medium tracking-tighter">
    Simple plans for ambitious teams
  </h1>
<p className="max-w-2xl mx-auto text-base md:text-lg opacity-80">
    Choose a plan that fits your vision and scale when you’re ready. No hidden fees, no catches.
  </p>
<div className="mt-6">
<button className="cursor-pointer text-[1.4rem] rounded-[16px] border-0 p-[2px] bg-[radial-gradient(circle_80px_at_80%_-10%,_#ffffff,_#181b1b)] relative">
<div className="absolute w-[70px] h-full rounded-[16px] bottom-0 left-0 bg-[radial-gradient(circle_60px_at_0%_100%,_#3fe9ff,_#0000ff80,_transparent)] shadow-[-10px_10px_30px_#0051ff2d]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_80px_at_80%_-50%,_#777777,_#0f1111)] text-[white] z-10 relative before:content-[''] before:absolute before:inset-0 before:rounded-[14px] before:bg-[radial-gradient(circle_60px_at_0%_100%,_#00e1ff1a,_#0000ff11,_transparent)] text-base font-medium rounded-[14px] pt-2 pr-4 pb-2 pl-4">Create free account</div>
</button>
</div>
</section>

<section className="space-y-12 max-w-6xl mx-auto">
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 slide-in-up" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.8s 0.1s, transform 0.8s 0.1s'}}>

<div className="relative group flex flex-col border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 transition transform hover:-translate-y-1">
<h2 className="text-2xl font-medium tracking-tight mb-4">Starter</h2>
<p className="text-sm opacity-80 mb-8">Perfect for solo creators just getting started.</p>
<div className="mb-10">
<span className="text-5xl font-semibold">$9</span>
<span className="text-sm opacity-60">/mo</span>
</div>
<ul className="space-y-3 text-sm flex-1">
<li className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="">Up to 3 projects</span>
</li>
<li className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>Email support</span>
</li>
<li className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="">Community access</span>
</li>
</ul>
<button className="mt-10 w-full py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition">Get Started</button>
</div>

<div className="relative group flex flex-col border border-purple-500/50 rounded-2xl p-8 bg-gradient-to-br from-purple-600/10 to-pink-500/10 hover:from-purple-600/20 hover:to-pink-500/20 transition transform hover:-translate-y-1">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-xs px-3 py-1 rounded-full">Most Popular</div>
<h2 className="text-2xl font-medium tracking-tight mb-4">Growth</h2>
<p className="text-sm opacity-80 mb-8">Designed for small teams that move fast.</p>
<div className="mb-10">
<span className="text-5xl font-semibold">$29</span>
<span className="text-sm opacity-60">/mo</span>
</div>
<ul className="space-y-3 text-sm flex-1">
<li className="flex space-x-2 items-center">
<svg className="lucide lucide-check w-4 h-4 text-purple-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>Unlimited projects</span>
</li>
<li className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-purple-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="">Priority support</span>
</li>
<li className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-purple-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="">Advanced analytics</span>
</li>
</ul>
<button className="mt-10 w-full py-3 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition">Choose Growth</button>
</div>

<div className="relative group flex flex-col hover:from-white/10 hover:to-white/20 transition transform hover:-translate-y-1 bg-gradient-to-br from-white/5 to-white/10 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<h2 className="text-2xl font-medium tracking-tight mb-4">Enterprise</h2>
<p className="text-sm opacity-80 mb-8">Custom solutions for large organizations.</p>
<div className="mb-10">
<span className="text-5xl font-semibold">Let’s Talk</span>
</div>
<ul className="space-y-3 text-sm flex-1">
<li className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="">Dedicated team</span>
</li>
<li className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="">24/7 support</span>
</li>
<li className="flex items-center space-x-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="">Security reviews</span>
</li>
</ul>
<button className="mt-10 w-full py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition">Contact Sales</button>
</div>
</div>

<div className="max-w-4xl slide-in-up mr-auto ml-auto space-y-6" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.8s 0.2s, transform 0.8s 0.2s'}}>
<h3 className="text-2xl font-medium tracking-tight text-center">Price Comparison</h3>
<p className="text-sm opacity-70 text-center max-w-xl mx-auto">
    Compare features and pricing across our plans.
  </p>
<div className="overflow-x-auto bg-white/5 border border-white/10 rounded-xl p-6">
<table className="w-full text-left border-collapse">
<thead className="">
<tr className="border-b border-white/20">
<th className="py-3 px-4 text-sm font-semibold tracking-tight"></th>
<th className="py-3 px-4 text-sm font-semibold tracking-tight text-center">Starter</th>
<th className="py-3 px-4 text-sm font-semibold tracking-tight text-center">Growth</th>
<th className="py-3 px-4 text-sm font-semibold tracking-tight text-center">Enterprise</th>
</tr>
</thead>
<tbody className="">
<tr className="border-b border-white/10 hover:bg-white/10 transition">
<td className="py-4 px-4 text-sm font-medium">Price</td>
<td className="py-4 px-4 text-sm text-center">$9/mo</td>
<td className="py-4 px-4 text-sm text-center">$29/mo</td>
<td className="py-4 px-4 text-sm text-center">Custom Pricing</td>
</tr>
<tr className="border-b border-white/10 hover:bg-white/10 transition">
<td className="py-4 px-4 text-sm font-medium">Projects</td>
<td className="py-4 px-4 text-sm text-center">Up to 3</td>
<td className="py-4 px-4 text-sm text-center">Unlimited</td>
<td className="py-4 px-4 text-sm text-center">Dedicated Team</td>
</tr>
<tr className="border-b border-white/10 hover:bg-white/10 transition">
<td className="py-4 px-4 text-sm font-medium">Support</td>
<td className="py-4 px-4 text-sm text-center">Email Support</td>
<td className="py-4 px-4 text-sm text-center">Priority Support</td>
<td className="py-4 px-4 text-sm text-center">24/7 Support</td>
</tr>
<tr className="border-b border-white/10 hover:bg-white/10 transition">
<td className="py-4 px-4 text-sm font-medium">Analytics</td>
<td className="py-4 px-4 text-sm text-center">Basic</td>
<td className="py-4 px-4 text-sm text-center">Advanced</td>
<td className="py-4 px-4 text-sm text-center">Custom Reports</td>
</tr>
<tr className="border-b border-white/10 hover:bg-white/10 transition">
<td className="py-4 px-4 text-sm font-medium">Community Access</td>
<td className="py-4 px-4 text-sm text-center">
<svg className="lucide lucide-check inline w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</td>
<td className="py-4 px-4 text-sm text-center">
<svg className="lucide lucide-check inline w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</td>
<td className="py-4 px-4 text-sm text-center"></td>
</tr>
<tr className="hover:bg-white/10 transition">
<td className="py-4 px-4 text-sm font-medium">Security Reviews</td>
<td className="py-4 px-4 text-sm text-center"></td>
<td className="py-4 px-4 text-sm text-center"></td>
<td className="py-4 px-4 text-sm text-center">
<svg className="lucide lucide-check inline w-5 h-5 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="space-y-12 max-w-6xl mx-auto">
<div className="text-center space-y-4 fade-in" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.8s 0.3s, transform 0.8s 0.3s'}}>
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight">Loved by growing teams</h2>
<p className="max-w-xl opacity-80 text-base mr-auto ml-auto">
          Hear what our customers have to say.
        </p>
</div>
<div className="grid grid-cols-3 grid-rows-2 gap-8 slide-in-up" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.8s 0.4s, transform 0.8s 0.4s'}}>

<div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 space-y-6 row-span-1 col-span-1">
<p className="text-base leading-relaxed opacity-90">
            “Switching to Growth unlocked a new level of velocity for our product team.”
          </p>
<div className="flex items-center space-x-3">
<img alt="Avatar" className="w-9 h-9 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div>
<div className="text-sm font-medium">Mia Thompson</div>
<div className="text-xs opacity-60">Head of Product, Loop</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 space-y-6 row-span-1 col-span-1">
<p className="leading-relaxed opacity-90 text-base">
            “The support experience feels like we have an extension of our own team.”
          </p>
<div className="flex items-center space-x-3">
<img alt="Avatar" className="w-9 h-9 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="">
<div className="text-sm font-medium">Oliver Chen</div>
<div className="opacity-60 text-xs">CTO, NovaCorp</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 space-y-6 row-span-1 col-span-1">
<p className="leading-relaxed opacity-90 text-base">
            “We consolidated three tools into one and cut costs by 40%.”
          </p>
<div className="flex items-center space-x-3">
<img alt="Avatar" className="w-9 h-9 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/17.jpg"/>
<div className="">
<div className="text-sm font-medium">Liam Patel</div>
<div className="opacity-60 text-xs">Operations Lead, Vertex</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 space-y-6 row-span-1 col-span-2">
<p className="leading-relaxed opacity-90 text-base">
            “Enterprise support helped us navigate our compliance audit with confidence.”
          </p>
<div className="flex items-center space-x-3">
<img alt="Avatar" className="w-9 h-9 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/65.jpg"/>
<div>
<div className="text-sm font-medium">Sophia Garcia</div>
<div className="text-xs opacity-60">Security Manager, Atlas</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 space-y-6 row-span-1 col-span-1">
<p className="leading-relaxed opacity-90 text-base">
            “Switching to Growth helped our team double their productivity in just 6 months.”
          </p>
<div className="flex items-center space-x-3">
<img alt="Avatar" className="w-9 h-9 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/55.jpg"/>
<div>
<div className="text-sm font-medium">Emma Johnson</div>
<div className="text-xs opacity-60">Product Manager, Spark</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 py-10 px-6 md:px-16 lg:px-24">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
<span className="text-sm opacity-60">© 2024 Elena Studio. All rights reserved.</span>
<div className="flex items-center space-x-6">
<svg className="lucide lucide-instagram opacity-60 hover:opacity-100 transition" data-lucide="instagram" fill="none" height="24" href="#" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-twitter opacity-60 hover:opacity-100 transition" data-lucide="twitter" fill="none" height="24" href="#" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-linkedin opacity-60 hover:opacity-100 transition" data-lucide="linkedin" fill="none" height="24" href="#" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</footer>


    </>
  );
}
