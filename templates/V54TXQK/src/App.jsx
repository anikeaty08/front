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



    // Replace icons
    lucide.createIcons({strokeWidth:1.5});

    // Fade/slide in on load
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[data-delay]').forEach(el=>{
        setTimeout(()=>{
          el.classList.remove('opacity-0','translate-y-6');
        }, Number(el.dataset.delay));
      });
      document.getElementById('year').textContent = new Date().getFullYear();

      // Capacity Chart
      const ctx = document.getElementById('capacityChart').getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Available', 'Booked'],
          datasets: [{
            data: [40, 60], // Example
            backgroundColor: ['#eaf8f2', '#ff8da1'],
            borderWidth: 0
          }]
        },
        options: {
          cutout: '70%',
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
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
      

<header className="fixed top-0 inset-x-0 z-20 backdrop-blur-md backdrop-saturate-150 bg-white/70 border-b border-black/5">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
<span className="text-2xl font-semibold tracking-tight text-[#ff8da1]">P&amp;P</span>
<nav className="hidden md:flex space-x-8 text-sm font-medium">
<a className="hover:text-[#ff8da1] transition-colors" href="#about">About</a>
<a className="hover:text-[#ff8da1] transition-colors" href="#services">Services</a>
<a className="hover:text-[#ff8da1] transition-colors" href="#booking">Book</a>
<a className="hover:text-[#ff8da1] transition-colors" href="#contact">Contact</a>
</nav>
<button className="md:hidden flex items-center justify-center w-9 h-9 rounded-md border border-black/10 hover:border-[#ff8da1] transition-colors" onclick="document.querySelector('#booking').scrollIntoView({behavior:'smooth'})">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="calendar"></i>
</button>
</div>
</header>

<section className="relative pt-28 md:pt-40">
<img alt="Happy dog" className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-70" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="relative max-w-7xl mx-auto px-6">
<div className="max-w-xl md:max-w-2xl text-center mx-auto">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#333] leading-tight opacity-0 translate-y-6 transition-all duration-700" data-delay="0">Where Brooklyn Pups <br className="hidden md:block"/> Come to Play &amp; Shine</h1>
<p className="mt-6 text-lg md:text-xl opacity-0 translate-y-6 transition-all duration-700" data-delay="100">Daycare, grooming, and endless tail wags—all under one pastel-perfect roof.</p>
<button className="mt-10 px-8 py-3 rounded-lg bg-[#ff8da1] text-white font-semibold shadow-md hover:shadow-lg hover:bg-[#ffa9b8] transition-all opacity-0 translate-y-6" data-delay="200" onclick="document.querySelector('#booking').scrollIntoView({behavior:'smooth'})" style={{transitionDuration: '700ms'}}>Book Now</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="about">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A Second Home for Your Best Friend</h2>
<p className="text-gray-600">Founded in the heart of Brooklyn, Paws &amp; Play blends top-tier care with a whole lot of love. Our certified team is here to keep your pup happy, healthy, and stylish—whether it’s a romp in our sun-lit playrooms or a fresh cut in the spa.</p>
<ul className="space-y-3">
<li className="flex items-start"><i className="w-5 h-5 stroke-[1.5] text-[#ff8da1] mt-1 mr-3" data-lucide="paw-print"></i><span>Spacious indoor &amp; outdoor play zones</span></li>
<li className="flex items-start"><i className="w-5 h-5 stroke-[1.5] text-[#ff8da1] mt-1 mr-3" data-lucide="scissors"></i><span>Full-service grooming salon</span></li>
<li className="flex items-start"><i className="w-5 h-5 stroke-[1.5] text-[#ff8da1] mt-1 mr-3" data-lucide="smile"></i><span>Positive-reinforcement certified staff</span></li>
</ul>
</div>
<div className="relative">
<img alt="Dog getting groomed" className="rounded-2xl shadow-lg w-full h-72 md:h-96 object-cover object-center" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#eaf8f2] rounded-2xl -z-10"></div>
</div>
</div>
</section>

<section className="bg-[#fef6f8] py-24 border-y border-black/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight mb-16">Tail-Wagging Services</h2>
<div className="grid md:grid-cols-3 gap-10">
<div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
<i className="w-8 h-8 stroke-[1.5] text-[#ff8da1]" data-lucide="party-popper"></i>
<h3 className="mt-6 text-xl font-semibold tracking-tight">Daycare</h3>
<p className="mt-4 text-gray-600">Supervised play, socialization, and nap-time corners in a safe, temperature-controlled space.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
<i className="w-8 h-8 stroke-[1.5] text-[#ff8da1]" data-lucide="scissors"></i>
<h3 className="mt-6 text-xl font-semibold tracking-tight">Grooming</h3>
<p className="mt-4 text-gray-600">Baths, haircuts, nail trims, and a blowout that’ll have your pup strutting down Bedford.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
<i className="w-8 h-8 stroke-[1.5] text-[#ff8da1]" data-lucide="medal"></i>
<h3 className="mt-6 text-xl font-semibold tracking-tight">Training</h3>
<p className="mt-4 text-gray-600">Positive-reinforcement classes from puppy basics to advanced manners.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Today’s Playroom Capacity</h2>
<p className="text-gray-600 mb-4">We cap attendance to keep every pup safe and happy. Check our live occupancy before you book.</p>
<div className="bg-white p-6 rounded-2xl shadow-md">
<div className="relative" style={{height: '260px'}}>
<canvas id="capacityChart"></canvas>
</div>
</div>
</div>
<div className="relative">
<img alt="Dogs playing" className="rounded-2xl shadow-lg w-full h-72 md:h-96 object-cover object-center" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute -top-6 -left-6 w-40 h-40 bg-[#d8eefe] rounded-2xl -z-10"></div>
</div>
</div>
</section>

<section className="bg-[#eaf8f2] py-24 border-t border-black/5" id="booking">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight mb-12">Book a Spot</h2>
<form className="bg-white rounded-2xl shadow-lg p-10 space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block mb-2 font-medium">Dog’s Name</label>
<input className="w-full border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8da1]" placeholder="Buddy" required="" type="text"/>
</div>
<div>
<label className="block mb-2 font-medium">Breed</label>
<input className="w-full border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8da1]" placeholder="Labrador" type="text"/>
</div>
<div>
<label className="block mb-2 font-medium">Service</label>
<select className="w-full border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8da1]">
<option>Daycare</option>
<option>Grooming</option>
<option>Training</option>
</select>
</div>
<div>
<label className="block mb-2 font-medium"></label>
<input className="w-full border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8da1]" required="" type="date"/>
</div>
</div>
<div>
<label className="block mb-2 font-medium">Notes</label>
<textarea className="w-full border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff8da1]" placeholder="Anything we should know?" rows="4"></textarea>
</div>
<button className="w-full py-3 bg-[#ff8da1] text-white font-semibold rounded-lg shadow-md hover:bg-[#ffa9b8] transition-colors flex items-center justify-center" type="submit">
<i className="w-5 h-5 stroke-[1.5] mr-2" data-lucide="calendar-check-2"></i>
          Confirm Booking
        </button>
</form>
</div>
</section>

<footer className="py-20 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
<div>
<h3 className="font-semibold tracking-tight text-lg mb-4">Paws &amp; Play</h3>
<p className="text-gray-600">123 Woof Ave<br/>Brooklyn, NY 11211<br/>(718) 555-PAWS</p>
</div>
<div>
<h3 className="font-semibold tracking-tight text-lg mb-4">Hours</h3>
<p className="text-gray-600">Mon–Fri: 7 am–8 pm<br/>Sat–Sun: 9 am–6 pm</p>
</div>
<div>
<h3 className="font-semibold tracking-tight text-lg mb-4">Stay in Touch</h3>
<form className="flex">
<input className="flex-1 border border-black/10 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff8da1]" placeholder="Email address" type="email"/>
<button className="px-4 py-2 bg-[#ff8da1] text-white font-semibold rounded-r-lg hover:bg-[#ffa9b8] transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="text-center text-xs text-gray-500 mt-12">© <span id="year"></span> Paws &amp; Play. All rights reserved.</div>
</footer>



    </>
  );
}
