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
      {

    lucide.createIcons({strokeWidth:1.5});
    document.getElementById('year').textContent = new Date().getFullYear();

    // Intersection Observer for simple fade/slide-in
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.remove('opacity-0','translate-y-6','translate-x-6');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:0.2});
    document.querySelectorAll('[data-animate]').forEach(el=>observer.observe(el));

    // Chart.js delivery performance
    const ctx = document.getElementById('deliveryChart');
    if(ctx){
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2019','2020','2021','2022','2023'],
          datasets: [{
            label: 'On-Time Delivery %',
            data: [93, 95, 96, 97, 98],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37,99,235,0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins:{
            legend:{display:false}
          },
          scales:{
            y:{beginAtZero:true, grid:{color:'rgba(148,163,184,0.2)'}},
            x:{grid:{display:false}}
          }
        }
      });
    }
  
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
      

<header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<a className="text-2xl font-semibold tracking-tight" href="#">Constructio</a>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-blue-600 transition-colors" href="#about">About</a>
<a className="hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="hover:text-blue-600 transition-colors" href="#why">Why Us</a>
<a className="hover:text-blue-600 transition-colors" href="#testimonials">Testimonials</a>
<a className="hover:text-blue-600 transition-colors" href="#contact">Contact</a>
</nav>
<a className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition" href="#contact">
<i className="w-5 h-5 stroke-1.5" data-lucide="mail"></i>
</a>
<a className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors" href="#contact">Request Quote</a>
</div>
</header>

<section className="pt-28 md:pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950" id="hero">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
<div className="opacity-0 translate-y-6 transition-all duration-700 delay-100" data-animate="">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">Building Your Future—<span className="text-blue-600">Fast</span></h1>
<p className="text-lg md:text-xl mb-8">From residential complexes to commercial landmarks, Constructio delivers end-to-end construction solutions at record speed without compromising on quality.</p>
<div className="flex gap-4">
<a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors" href="#contact">Get a Free Quote</a>
<a className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition" href="#services">
<i className="w-5 h-5 stroke-1.5" data-lucide="info"></i>
<span>Our Services</span>
</a>
</div>
</div>
<div className="opacity-0 translate-y-6 transition-all duration-700 delay-[250ms] relative" data-animate="">
<img alt="Construction site" className="rounded-xl shadow-xl w-full h-80 object-cover" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
</div>
</div>
</section>

<section className="py-24" id="about">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Who We Are</h2>
<div className="grid md:grid-cols-2 gap-12">
<div className="opacity-0 translate-x-6 transition-all duration-700 delay-100" data-animate="">
<p className="mb-6">Founded in 2008, Constructio started as a small family-run contractor in Kraków. Our mission has remained crystal-clear: deliver top-tier builds—fast. Over the years we’ve grown into a nationwide operation, partnering with architects, engineers, and suppliers to tackle projects of every scale.</p>
<p className="mb-6">Today, our 120-strong team leverages cutting-edge project management tools, lean construction methodologies, and an extensive subcontractor network to shave weeks off traditional timelines—without ever cutting corners.</p>
<p className="mb-4">In 16 years of service, we’ve completed 220+ projects, earned ISO 9001 certification, and picked up multiple “Builder of the Year” awards along the way.</p>
</div>
<div className="opacity-0 translate-x-6 transition-all duration-700 delay-[200ms]" data-animate="">
<div className="space-y-6">
<div className="flex items-start gap-4">
<i className="w-8 h-8 stroke-1.5 text-blue-600" data-lucide="users"></i>
<div>
<h3 className="font-medium">Leadership Team</h3>
<p>Anna Kowalska (CEO), Piotr Nowak (COO), and Marek Lewandowski (Head of Engineering) steer our rapid-build strategy.</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-8 h-8 stroke-1.5 text-blue-600" data-lucide="calendar"></i>
<div>
<h3 className="font-medium">16 Years in Business</h3>
<p>Experience that translates into smoother workflows and fewer surprises on site.</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-8 h-8 stroke-1.5 text-blue-600" data-lucide="award"></i>
<div>
<h3 className="font-medium">Key Achievements</h3>
<p>3× National Fast-Build Awards, ISO 9001 & 14001 certified, 98% client satisfaction score.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 dark:bg-slate-900" id="services">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Our Services</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="opacity-0 translate-y-6 transition-all duration-700 delay-100 bg-white dark:bg-slate-800 p-8 rounded-lg shadow group hover:shadow-lg border border-slate-100 dark:border-slate-700" data-animate="">
<i className="w-10 h-10 stroke-1.5 text-blue-600 mb-6" data-lucide="home"></i>
<h3 className="text-xl font-medium mb-4">Residential Construction</h3>
<p className="text-sm leading-relaxed">Design-build packages for single-family homes, apartments, and luxury villas—delivered up to 30% faster than industry averages.</p>
</div>
<div className="opacity-0 translate-y-6 transition-all duration-700 delay-[200ms] bg-white dark:bg-slate-800 p-8 rounded-lg shadow group hover:shadow-lg border border-slate-100 dark:border-slate-700" data-animate="">
<i className="w-10 h-10 stroke-1.5 text-blue-600 mb-6" data-lucide="building-2"></i>
<h3 className="text-xl font-medium mb-4">Commercial Projects</h3>
<p className="text-sm leading-relaxed">Retail parks, offices, hotels, and industrial facilities—scalable teams ensure your build stays on schedule & on budget.</p>
</div>
<div className="opacity-0 translate-y-6 transition-all duration-700 delay-[300ms] bg-white dark:bg-slate-800 p-8 rounded-lg shadow group hover:shadow-lg border border-slate-100 dark:border-slate-700" data-animate="">
<i className="w-10 h-10 stroke-1.5 text-blue-600 mb-6" data-lucide="settings"></i>
<h3 className="text-xl font-medium mb-4">Renovation & Fit-Out</h3>
<p className="text-sm leading-relaxed">High-velocity interior fit-outs and structural renovations that minimize downtime for your business or tenants.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="why">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Why Build with Constructio?</h2>
<div className="grid md:grid-cols-2 gap-12">
<div className="opacity-0 translate-x-6 transition-all duration-700 delay-100 space-y-8" data-animate="">
<div className="flex items-start gap-4">
<i className="w-8 h-8 stroke-1.5 text-blue-600" data-lucide="zap"></i>
<div>
<h3 className="font-medium">Speed-First Methodology</h3>
<p className="text-sm">Lean planning, off-site fabrication, and 24/7 site reporting shave weeks off delivery schedules.</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-8 h-8 stroke-1.5 text-blue-600" data-lucide="shield-check"></i>
<div>
<h3 className="font-medium">Zero-Compromise Quality</h3>
<p className="text-sm">ISO-certified processes and independent QA audits ensure every milestone meets or exceeds standards.</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-8 h-8 stroke-1.5 text-blue-600" data-lucide="handshake"></i>
<div>
<h3 className="font-medium">Transparent Collaboration</h3>
<p className="text-sm">Real-time dashboards keep you in the loop—financials, progress photos, and change orders all in one place.</p>
</div>
</div>
</div>
<div className="opacity-0 translate-x-6 transition-all duration-700 delay-[200ms]" data-animate="">
<h3 className="font-medium mb-4">On-Time Delivery Rate (2019-2023)</h3>
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow border border-slate-100 dark:border-slate-700">
<div>
<canvas height="250" id="deliveryChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 dark:bg-slate-900" id="testimonials">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Client Stories</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="opacity-0 translate-y-6 transition-all duration-700 delay-100 bg-white dark:bg-slate-800 p-8 rounded-lg shadow border border-slate-100 dark:border-slate-700" data-animate="">
<p className="italic mb-6">“Constructio finished our 12-unit apartment block three weeks ahead of schedule—renters moved in earlier and revenue started flowing faster.”</p>
<div className="flex items-center gap-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80" />
<div>
<p className="font-medium">Katarzyna Z.</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Property Developer</p>
</div>
</div>
</div>
<div className="opacity-0 translate-y-6 transition-all duration-700 delay-[200ms] bg-white dark:bg-slate-800 p-8 rounded-lg shadow border border-slate-100 dark:border-slate-700" data-animate="">
<p className="italic mb-6">“They handled our office fit-out over a single long weekend. Monday morning? Desks installed, cables routed, zero disruption.”</p>
<div className="flex items-center gap-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=80&q=80" />
<div>
<p className="font-medium">Łukasz M.</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Tech Startup CTO</p>
</div>
</div>
</div>
<div className="opacity-0 translate-y-6 transition-all duration-700 delay-[300ms] bg-white dark:bg-slate-800 p-8 rounded-lg shadow border border-slate-100 dark:border-slate-700" data-animate="">
<p className="italic mb-6">“The team’s transparency and daily video updates kept us confident—even while we were abroad.”</p>
<div className="flex items-center gap-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=80&q=80" />
<div>
<p className="font-medium">Marta W.</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Private Homeowner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
<div className="opacity-0 translate-x-6 transition-all duration-700 delay-100" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Let’s Talk About Your Project</h2>
<p className="mb-8">Have drawings ready or just a back-of-napkin idea? Either way, we’ll turn it into a fast-tracked construction plan.</p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<i className="w-6 h-6 stroke-1.5 text-blue-600" data-lucide="phone"></i>
<a className="hover:text-blue-600 transition-colors" href="tel:+48123123123">+48 123 123 123</a>
</div>
<div className="flex items-center gap-4">
<i className="w-6 h-6 stroke-1.5 text-blue-600" data-lucide="mail"></i>
<a className="hover:text-blue-600 transition-colors" href="mailto:constructio@gmail.com">constructio@gmail.com</a>
</div>
<div className="flex items-center gap-4">
<i className="w-6 h-6 stroke-1.5 text-blue-600" data-lucide="map-pin"></i>
<span>Kraków, Poland</span>
</div>
</div>
</div>
<div className="opacity-0 translate-x-6 transition-all duration-700 delay-[200ms]" data-animate="">
<form action="mailto:constructio@gmail.com" className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow border border-slate-100 dark:border-slate-700 space-y-6" enctype="text/plain" method="post">
<div>
<label className="block text-sm mb-2 font-medium" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:border-blue-600 focus:ring-blue-600 outline-none" id="name" name="Name" placeholder="John Doe" required type="text" />
</div>
<div>
<label className="block text-sm mb-2 font-medium" htmlFor="email">Email</label>
<input className="w-full px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:border-blue-600 focus:ring-blue-600 outline-none" id="email" name="Email" placeholder="you@example.com" required type="email" />
</div>
<div>
<label className="block text-sm mb-2 font-medium" htmlFor="phone">Phone</label>
<input className="w-full px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:border-blue-600 focus:ring-blue-600 outline-none" id="phone" name="Phone" placeholder="+48 ..." type="tel" />
</div>
<div>
<label className="block text-sm mb-2 font-medium" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:border-blue-600 focus:ring-blue-600 outline-none" id="message" name="Message" placeholder="Tell us about your timeline, budget, and vision…" rows="4"></textarea>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors" type="submit">Send Request</button>
</form>
</div>
</div>
<div className="mt-16 max-w-6xl mx-auto px-6">
<iframe className="w-full h-72 rounded-lg border-0" loading="lazy" src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Krak%C3%B3w+Poland"></iframe>
</div>
</section>

<footer className="pt-16 pb-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm">
<div>
<span className="text-xl font-semibold tracking-tight block mb-4">Constructio</span>
<p className="text-slate-600 dark:text-slate-400">Fast-track construction solutions across Poland.</p>
</div>
<div>
<h4 className="font-medium mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="hover:text-blue-600 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#why">Why Us</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Support</h4>
<ul className="space-y-2">
<li><a className="hover:text-blue-600 transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="mailto:constructio@gmail.com">Email Support</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Follow</h4>
<div className="flex gap-4">
<a className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors" href="#">
<i className="w-5 h-5 stroke-1.5" data-lucide="linkedin"></i>
</a>
<a className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors" href="#">
<i className="w-5 h-5 stroke-1.5" data-lucide="facebook"></i>
</a>
<a className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors" href="#">
<i className="w-5 h-5 stroke-1.5" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
<div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400">© <span id="year"></span> Constructio. All rights reserved.</div>
</footer>



    </>
  );
}
