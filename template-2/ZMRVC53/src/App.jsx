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
      
    // Mobile nav
    document.getElementById('hamburger').addEventListener('click', () => {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    });

    // Lucide icons
    lucide.createIcons();

    // Intersection animation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.2});

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    // Chart.js donut chart
    const ctx = document.getElementById('scoreChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['4-5 Stars', '1-3 Stars'],
          datasets: [{
            data: [98, 2],
            backgroundColor: ['#E63946', '#ECECEC'],
            hoverOffset: 4,
            borderWidth: 0
          }]
        },
        options: {
          cutout: '70%',
          plugins: {
            legend: {display: false},
            tooltip: {enabled: false},
          }
        }
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
      

<header className="bg-[#1D3557] text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
<div className="flex items-center space-x-2 tracking-tight text-lg font-semibold">
<span className="bg-white text-[#1D3557] rounded px-2 py-0.5">CP</span>
<span>CertaPet</span>
</div>
<nav className="hidden md:flex space-x-8 text-sm">
<a className="hover:text-[#F1FAFF]" href="#features">Features</a>
<a className="hover:text-[#F1FAFF]" href="#process">Process</a>
<a className="hover:text-[#F1FAFF]" href="#testimonials">Testimonials</a>
<a className="hover:text-[#F1FAFF]" href="#faq">FAQ</a>
</nav>
<a className="md:inline-flex hidden bg-[#E63946] rounded-md px-4 py-2 text-sm font-medium hover:brightness-110 transition" href="#cta">Get Started</a>
<button aria-label="Open Menu" className="md:hidden focus:outline-none" id="hamburger">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
<div className="md:hidden hidden px-4 pb-4 space-y-3 bg-[#1D3557]/90 backdrop-blur" id="mobileMenu">
<a className="block text-sm" href="#features">Features</a>
<a className="block text-sm" href="#process">Process</a>
<a className="block text-sm" href="#testimonials">Testimonials</a>
<a className="block text-sm" href="#faq">FAQ</a>
<a className="block text-sm bg-[#E63946] rounded px-3 py-2 mt-2 text-center" href="#cta">Get Started</a>
</div>
</header>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6 opacity-0 translate-y-4 transition duration-700" data-animate="">
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-[#1D3557]">
        Legit Emotional Support<br className="hidden sm:block" />Animal Letters—Fast.
      </h1>
<p className="text-lg">Take our <span className="font-medium text-[#1D3557]">free 3-minute screening</span>, consult with a licensed therapist, and get your ESA letter delivered within 24 hours.</p>
<div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
<a className="bg-[#E63946] text-white px-8 py-3 rounded-md text-base font-medium hover:brightness-110 transition transform hover:scale-[1.03]" href="#cta">Start Free Screening</a>
<a className="border border-[#1D3557] text-[#1D3557] px-8 py-3 rounded-md font-medium hover:bg-[#1D3557] hover:text-white transition" href="#faq">Learn More</a>
</div>
<div className="flex items-center space-x-3 pt-4">
<i className="w-5 h-5 stroke-[1.5] text-[#1D3557]" data-lucide="shield-check"></i>
<span className="text-sm">Money-back guarantee if you don’t qualify</span>
</div>
</div>
<div className="relative group opacity-0 translate-y-4 transition duration-700" data-animate="">
<img alt="Woman hugging her dog" className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80" />
<div className="absolute inset-0 rounded-lg ring-2 ring-[#1D3557]/10 group-hover:ring-[#E63946]/30 transition"></div>
</div>
</section>

<section className="bg-[#F1FAFF] py-20" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
<div className="text-center space-y-4">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#1D3557]">Why Choose CertaPet?</h2>
<p className="max-w-2xl mx-auto">We simplify the entire ESA letter process—backed by licensed mental health professionals and industry-leading guarantees.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 bg-white rounded-lg shadow-sm border border-[#ECECEC] text-center space-y-4 opacity-0 translate-y-4 transition duration-700" data-animate="">
<i className="w-8 h-8 mx-auto stroke-[1.5] text-[#E63946]" data-lucide="stethoscope"></i>
<h3 className="font-medium text-lg text-[#1D3557]">Licensed Professionals</h3>
<p className="text-sm">All letters are written and signed by state-licensed mental health providers.</p>
</div>
<div className="p-6 bg-white rounded-lg shadow-sm border border-[#ECECEC] text-center space-y-4 opacity-0 translate-y-4 transition duration-700" data-animate="">
<i className="w-8 h-8 mx-auto stroke-[1.5] text-[#E63946]" data-lucide="timer"></i>
<h3 className="font-medium text-lg text-[#1D3557]">24-Hour Turnaround</h3>
<p className="text-sm">Need it fast? Most clients receive their ESA letter within one business day.</p>
</div>
<div className="p-6 bg-white rounded-lg shadow-sm border border-[#ECECEC] text-center space-y-4 opacity-0 translate-y-4 transition duration-700" data-animate="">
<i className="w-8 h-8 mx-auto stroke-[1.5] text-[#E63946]" data-lucide="file-check-2"></i>
<h3 className="font-medium text-lg text-[#1D3557]">100% Compliant</h3>
<p className="text-sm">Our letters comply with the Fair Housing Act & DOT regulations for travel.</p>
</div>
<div className="p-6 bg-white rounded-lg shadow-sm border border-[#ECECEC] text-center space-y-4 opacity-0 translate-y-4 transition duration-700" data-animate="">
<i className="w-8 h-8 mx-auto stroke-[1.5] text-[#E63946]" data-lucide="shield"></i>
<h3 className="font-medium text-lg text-[#1D3557]">Money-back Promise</h3>
<p className="text-sm">If you don’t qualify or your letter is rejected, you get a full refund—no questions asked.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
<div className="text-center space-y-4">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#1D3557]">How It Works</h2>
<p className="max-w-2xl mx-auto">In just three simple steps, you can secure the documentation you need.</p>
</div>
<div className="relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full border-t border-dashed border-[#ECECEC]"></div>
</div>
<div className="relative z-10 grid md:grid-cols-3 gap-12">

<div className="text-center space-y-4 opacity-0 translate-y-4 transition duration-700" data-animate="">
<div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#FDECEA] border border-[#E63946]/30">
<span className="text-xl font-semibold text-[#E63946]">1</span>
</div>
<h3 className="font-medium text-lg text-[#1D3557]">Free Screening</h3>
<p className="text-sm">Answer a few questions online to see if you may qualify for an ESA.</p>
</div>

<div className="text-center space-y-4 opacity-0 translate-y-4 transition duration-700" data-animate="">
<div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#FDECEA] border border-[#E63946]/30">
<span className="text-xl font-semibold text-[#E63946]">2</span>
</div>
<h3 className="font-medium text-lg text-[#1D3557]">Consultation</h3>
<p className="text-sm">A licensed therapist reviews your responses and schedules a brief call if needed.</p>
</div>

<div className="text-center space-y-4 opacity-0 translate-y-4 transition duration-700" data-animate="">
<div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#FDECEA] border border-[#E63946]/30">
<span className="text-xl font-semibold text-[#E63946]">3</span>
</div>
<h3 className="font-medium text-lg text-[#1D3557]">Receive Letter</h3>
<p className="text-sm">Get a digital ESA letter in 24 hours, plus a hard copy mailed on request.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDECEA]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6 opacity-0 translate-y-4 transition duration-700" data-animate="">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#1D3557]">Our Clients Rate Us <em className="not-italic text-[#E63946]">Excellent</em></h2>
<p>We’re proud to maintain a 4.9/5 customer satisfaction score across thousands of ESA letters issued-and counting.</p>
<ul className="space-y-2">
<li className="flex items-start"><i className="w-5 h-5 stroke-[1.5] text-[#E63946] mt-0.5" data-lucide="check-circle"></i><span className="ml-2 text-sm">Over 50,000 ESA letters issued</span></li>
<li className="flex items-start"><i className="w-5 h-5 stroke-[1.5] text-[#E63946] mt-0.5" data-lucide="check-circle"></i><span className="ml-2 text-sm">99% acceptance by landlords & airlines</span></li>
<li className="flex items-start"><i className="w-5 h-5 stroke-[1.5] text-[#E63946] mt-0.5" data-lucide="check-circle"></i><span className="ml-2 text-sm">10,000+ five-star reviews online</span></li>
</ul>
</div>
<div className="p-6 bg-white rounded-lg shadow-sm border border-[#ECECEC] opacity-0 translate-y-4 transition duration-700" data-animate="">
<h3 className="font-medium text-lg text-[#1D3557] mb-4">Satisfaction Score</h3>
<div>
<div><canvas id="scoreChart"></canvas></div>
</div>
</div>
</div>
</section>

<section className="py-24" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
<div className="text-center space-y-4">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#1D3557]">Happy ESA Owners</h2>
<p className="max-w-2xl mx-auto">Real stories from customers who’ve unlocked stress-free housing & travel.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<figure className="p-6 bg-[#FDECEA] rounded-lg border border-[#E63946]/10 space-y-4 opacity-0 translate-y-4 transition duration-700" data-animate="">
<blockquote className="text-sm leading-relaxed">“CertaPet made the entire process incredibly simple. I received my letter in less than 24 hours and my landlord accepted it without hesitation.”</blockquote>
<div className="flex items-center space-x-3">
<img alt="Owner" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=60" />
<figcaption className="text-sm font-medium text-[#1D3557]">Jordan & Bella 🐶</figcaption>
</div>
</figure>
<figure className="p-6 bg-[#FDECEA] rounded-lg border border-[#E63946]/10 space-y-4 opacity-0 translate-y-4 transition duration-700" data-animate="">
<blockquote className="text-sm leading-relaxed">“I was skeptical at first, but the therapist was professional and caring. Now I can fly with my cat without paying extra fees.”</blockquote>
<div className="flex items-center space-x-3">
<img alt="Owner" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<figcaption className="text-sm font-medium text-[#1D3557]">Alexa & Mochi 🐱</figcaption>
</div>
</figure>
<figure className="p-6 bg-[#FDECEA] rounded-lg border border-[#E63946]/10 space-y-4 opacity-0 translate-y-4 transition duration-700" data-animate="">
<blockquote className="text-sm leading-relaxed">“The money-back guarantee gave me confidence. Luckily I qualified, and my ESA letter has been life-changing.”</blockquote>
<div className="flex items-center space-x-3">
<img alt="Owner" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=60" />
<figcaption className="text-sm font-medium text-[#1D3557]">Marcus & Luna 🐾</figcaption>
</div>
</figure>
</div>
</div>
</section>

<section className="bg-[#F1FAFF] py-24" id="faq">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
<div className="text-center space-y-4">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#1D3557]">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<details className="bg-white border border-[#ECECEC] rounded-lg p-4 group opacity-0 translate-y-4 transition duration-700" data-animate="">
<summary className="cursor-pointer list-none flex items-center justify-between">
<span className="font-medium text-[#1D3557]">Is CertaPet a legitimate service?</span>
<i className="w-4 h-4 stroke-[1.5] text-[#E63946] group-open:hidden" data-lucide="plus"></i>
<i className="w-4 h-4 stroke-[1.5] text-[#E63946] hidden group-open:block" data-lucide="minus"></i>
</summary>
<p className="mt-2 text-sm">Absolutely. We connect you with state-licensed mental health professionals who can legally issue ESA letters compliant with federal laws.</p>
</details>
<details className="bg-white border border-[#ECECEC] rounded-lg p-4 group opacity-0 translate-y-4 transition duration-700" data-animate="">
<summary className="cursor-pointer list-none flex items-center justify-between">
<span className="font-medium text-[#1D3557]">How long does the screening take?</span>
<i className="w-4 h-4 stroke-[1.5] text-[#E63946] group-open:hidden" data-lucide="plus"></i>
<i className="w-4 h-4 stroke-[1.5] text-[#E63946] hidden group-open:block" data-lucide="minus"></i>
</summary>
<p className="mt-2 text-sm">The online screening takes about 3-5 minutes. You’ll know instantly if you’re likely to qualify.</p>
</details>
<details className="bg-white border border-[#ECECEC] rounded-lg p-4 group opacity-0 translate-y-4 transition duration-700" data-animate="">
<summary className="cursor-pointer list-none flex items-center justify-between">
<span className="font-medium text-[#1D3557]">What if my landlord rejects the letter?</span>
<i className="w-4 h-4 stroke-[1.5] text-[#E63946] group-open:hidden" data-lucide="plus"></i>
<i className="w-4 h-4 stroke-[1.5] text-[#E63946] hidden group-open:block" data-lucide="minus"></i>
</summary>
<p className="mt-2 text-sm">We offer a 100% refund if your letter is not accepted, and our team can also help you communicate with your landlord.</p>
</details>
</div>
</div>
</section>

<section className="py-24" id="cta">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 opacity-0 translate-y-4 transition duration-700" data-animate="">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#1D3557]">Ready to Live & Travel with Your ESA?</h2>
<p className="max-w-2xl mx-auto">It all starts with a quick screening. No commitment required, and you’ll receive immediate feedback.</p>
<a className="inline-block bg-[#E63946] text-white px-12 py-4 rounded-md text-base font-medium hover:brightness-110 transition transform hover:scale-[1.03]" href="#">Begin Free Screening</a>
</div>
</section>

<footer className="bg-[#1D3557] text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
<div className="space-y-4">
<div className="flex items-center space-x-2 tracking-tight text-lg font-semibold">
<span className="bg-white text-[#1D3557] rounded px-2 py-0.5">CP</span>
<span>CertaPet</span>
</div>
<p className="text-sm">Fast, legitimate Emotional Support Animal letters from licensed professionals.</p>
</div>
<div className="space-y-2">
<h4 className="font-medium text-white">Company</h4>
<a className="block text-sm hover:underline" href="#features">Features</a>
<a className="block text-sm hover:underline" href="#testimonials">Testimonials</a>
<a className="block text-sm hover:underline" href="#faq">FAQ</a>
</div>
<div className="space-y-2">
<h4 className="font-medium text-white">Legal</h4>
<a className="block text-sm hover:underline" href="#">Privacy</a>
<a className="block text-sm hover:underline" href="#">Terms</a>
</div>
<div className="space-y-2">
<h4 className="font-medium text-white">Contact</h4>
<p className="text-sm">support@certapet.com</p>
<p className="text-sm">Mon-Fri 9am-5pm CT</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 border-t border-white/10 pt-6 text-xs text-center">
      © 2024 CertaPet. All rights reserved.
    </div>
</footer>



    </>
  );
}
