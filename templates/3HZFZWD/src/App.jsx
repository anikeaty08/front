import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons({strokeWidth: 1.5, color: "#22d3ee"});
    // Fade-in staggered animation on load
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.fade-in').forEach(el => el.style.opacity = '0');
      setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => el.style.opacity = '');
      }, 200);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative overflow-hidden flex items-center min-h-[540px] bg-gradient-to-b from-[#1e293b] to-[#101927] pb-8">

<svg className="waves" fill="none" viewbox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
<path d="M0,96 C340,140 1100,0 1440,96 L1440,120 L0,120 Z" fill="#22d3ee" fillOpacity="0.08"></path>
<path d="M0,120 C400,60 1050,160 1440,40 L1440,120 L0,120 Z" fill="#0ea5e9" fillOpacity="0.10"></path>
</svg>

<div className="bubble bubble-1"></div>
<div className="bubble bubble-2"></div>
<div className="bubble bubble-3"></div>

<div className="relative z-10 flex flex-col md:flex-row md:items-center w-full max-w-6xl mx-auto px-6 pt-10 md:pt-0">

<div className="w-full md:w-1/2 flex flex-col gap-6 fade-in fade-in-1">
<h1 className="font-semibold text-[2.5rem] md:text-[3.25rem] text-[#f1f9fa] leading-tight tracking-tight rounded-lg">
          Keep Your Pool Crystal Clear — <span className="text-[#22d3ee]">Year Round</span>
</h1>
<p className="text-lg md:text-xl text-[#aee9fa] font-medium">
          Residential &amp; Commercial Pool Cleaning by Aqua Experts
        </p>
<div className="flex flex-wrap gap-4 items-center mt-2">
<a className="rounded-full text-[#101927] bg-[#22d3ee] hover:bg-[#38bdf8] px-7 py-3 font-semibold text-base shadow-lg transition-all outline-none focus:ring-2 focus:ring-[#22d3ee]/80 focus:ring-offset-2 fade-in fade-in-2" href="#contact" style={{boxShadow: '0 8px 24px 0 rgba(34,211,238,0.21)'}}>Book a Free Estimate</a>
<a className="flex items-center gap-2 text-[#22d3ee] hover:bg-[#18304a] rounded-full px-6 py-3 font-medium border border-[#233045] transition-all fade-in fade-in-3" href="tel:555-123-4567" style={{boxShadow: '0 2px 8px 0 rgba(34,211,238,0.07)'}}>
<i className="w-5 h-5" data-lucide="phone"></i>
            Call Now
          </a>
</div>
<div className="flex gap-3 mt-6 fade-in fade-in-4">
<span className="text-sm bg-[#18304a] font-medium text-[#aee9fa] px-4 py-1.5 rounded-full border border-[#233045]">Licensed</span>
<span className="text-sm bg-[#18304a] font-medium text-[#aee9fa] px-4 py-1.5 rounded-full border border-[#233045]">Insured</span>
<span className="text-sm bg-[#18304a] font-medium text-[#aee9fa] px-4 py-1.5 rounded-full border border-[#233045]">5-Star Rated</span>
</div>
</div>

<div className="w-full md:w-1/2 flex items-end justify-center mt-10 md:mt-0 fade-in fade-in-2">
<div className="relative">
<img alt="Sparkling Pool with Technician" className="rounded-2xl shadow-xl border-4 border-[#233045] object-cover w-full max-w-md h-[340px] md:h-[410px] bg-[#19243a]" loading="lazy" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=700&amp;q=80" style={{objectPosition: 'center 50%'}}/>

<div className="absolute inset-0 rounded-2xl" style={{background: 'linear-gradient(120deg,rgba(34,211,238,0.16),rgba(14,165,233,0.06) 80%)'}}></div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-14 flex flex-col gap-12 fade-in fade-in-3">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#aee9fa] mb-4">Our Services</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

<div className="bg-[#141e2d] rounded-xl shadow-md border border-[#233045] p-6 flex flex-col items-center gap-4 hover:shadow-xl hover:border-[#22d3ee] transition-all ripple-hover fade-in fade-in-4">
<div className="bg-[#1e293b] rounded-full p-3 mb-2">
<i className="w-7 h-7 text-[#22d3ee]" data-lucide="waves"></i>
</div>
<h3 className="font-medium text-lg text-[#f1f9fa]">Skimming &amp; Vacuuming</h3>
<p className="text-sm text-[#aee9fa] text-center">Remove debris and leave your pool surface spotless.</p>
</div>

<div className="bg-[#141e2d] rounded-xl shadow-md border border-[#233045] p-6 flex flex-col items-center gap-4 hover:shadow-xl hover:border-[#22d3ee] transition-all ripple-hover fade-in fade-in-5">
<div className="bg-[#1e293b] rounded-full p-3 mb-2">
<i className="w-7 h-7 text-[#38bdf8]" data-lucide="flask-conical"></i>
</div>
<h3 className="font-medium text-lg text-[#f1f9fa]">Chemical Balancing</h3>
<p className="text-sm text-[#aee9fa] text-center">Precise water chemistry for safety and comfort.</p>
</div>

<div className="bg-[#141e2d] rounded-xl shadow-md border border-[#233045] p-6 flex flex-col items-center gap-4 hover:shadow-xl hover:border-[#22d3ee] transition-all ripple-hover fade-in fade-in-6">
<div className="bg-[#1e293b] rounded-full p-3 mb-2">
<i className="w-7 h-7 text-[#22d3ee]" data-lucide="droplets"></i>
</div>
<h3 className="font-medium text-lg text-[#f1f9fa]">Algae Removal</h3>
<p className="text-sm text-[#aee9fa] text-center">Eradicate and prevent green, yellow, and black algae.</p>
</div>

<div className="bg-[#141e2d] rounded-xl shadow-md border border-[#233045] p-6 flex flex-col items-center gap-4 hover:shadow-xl hover:border-[#22d3ee] transition-all ripple-hover fade-in fade-in-7 relative">
<div className="bg-[#1e293b] rounded-full p-3 mb-2">
<i className="w-7 h-7 text-[#38bdf8]" data-lucide="clipboard-check"></i>
</div>
<h3 className="font-medium text-lg text-[#f1f9fa]">Equipment Inspection</h3>
<p className="text-sm text-[#aee9fa] text-center">Full checkup on pumps, filters, and pool systems.</p>
<span className="absolute top-3 right-3 text-xs bg-[#222e43] text-[#facc15] px-2 py-0.5 rounded-full border border-[#3b4252] font-medium">Weekly Plans Available</span>
</div>
</div>
</section>

<section className="relative py-16">
<div className="absolute inset-0 z-0">
<img alt="" className="w-full h-full object-cover object-center opacity-10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#101927] via-transparent to-[#141e2d]"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-in fade-in-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#22d3ee] mb-4">Trusted by Homeowners Across <span className="text-[#38bdf8]">Austin</span></h2>
<ul className="flex flex-col sm:flex-row justify-center items-center gap-4 text-lg font-medium text-[#aee9fa] mb-6 mt-6">
<li className="flex items-center gap-2"><i className="w-5 h-5 text-[#22d3ee]" data-lucide="clock"></i>24-hour response time</li>
<li className="flex items-center gap-2"><i className="w-5 h-5 text-[#38bdf8]" data-lucide="slash"></i>No contracts, cancel anytime</li>
<li className="flex items-center gap-2"><i className="w-5 h-5 text-[#22d3ee]" data-lucide="users"></i>Friendly, uniformed technicians</li>
<li className="flex items-center gap-2"><i className="w-5 h-5 text-[#38bdf8]" data-lucide="leaf"></i>Eco-safe chemicals</li>
</ul>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#22d3ee] mb-8 text-center fade-in fade-in-1">What Our Customers Say</h2>
<div className="carousel flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth items-stretch">

<div className="min-w-[320px] md:min-w-[360px] bg-[#141e2d] rounded-2xl border border-[#233045] shadow-md flex flex-col gap-4 p-7 mx-auto ripple-hover fade-in fade-in-2 snap-center transition-shadow transition-border hover:scale-105" style={{transition: 'box-shadow 0.25s', cursor: 'grab'}}>
<div className="flex items-center gap-3">
<img alt="Customer" className="w-12 h-12 rounded-full border-2 border-[#22d3ee] object-cover" src="https://randomuser.me/api/portraits/men/31.jpg"/>
<div>
<p className="font-semibold text-[#f1f9fa]">Michael L.</p>
<div className="flex text-[#fde047] gap-0.5">
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
</div>
</div>
</div>
<blockquote className="text-[#aee9fa] text-base mt-2">“Best pool service I’ve ever used. Fast, reliable, and my pool has never looked better!”</blockquote>
</div>

<div className="min-w-[320px] md:min-w-[360px] bg-[#141e2d] rounded-2xl border border-[#233045] shadow-md flex flex-col gap-4 p-7 mx-auto ripple-hover fade-in fade-in-3 snap-center transition-shadow hover:scale-105">
<div className="flex items-center gap-3">
<img alt="Customer" className="w-12 h-12 rounded-full border-2 border-[#22d3ee] object-cover" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div>
<p className="font-semibold text-[#f1f9fa]">Jessica R.</p>
<div className="flex text-[#fde047] gap-0.5">
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
</div>
</div>
</div>
<blockquote className="text-[#aee9fa] text-base mt-2">“The team is so friendly and professional. Highly recommend for anyone who wants peace of mind!”</blockquote>
</div>

<div className="min-w-[320px] md:min-w-[360px] bg-[#141e2d] rounded-2xl border border-[#233045] shadow-md flex flex-col gap-4 p-7 mx-auto ripple-hover fade-in fade-in-4 snap-center transition-shadow hover:scale-105">
<div className="flex items-center gap-3">
<img alt="Customer" className="w-12 h-12 rounded-full border-2 border-[#22d3ee] object-cover" src="https://randomuser.me/api/portraits/men/45.jpg"/>
<div>
<p className="font-semibold text-[#f1f9fa]">Carlos D.</p>
<div className="flex text-[#fde047] gap-0.5">
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#fde047]" data-lucide="star"></i>
</div>
</div>
</div>
<blockquote className="text-[#aee9fa] text-base mt-2">“Prompt, thorough, and the water always feels amazing! 10/10!”</blockquote>
</div>
</div>
</section>

<section className="mx-auto max-w-4xl px-6 py-8 my-8 rounded-2xl relative bg-[#141e2d] overflow-hidden shadow-sm fade-in fade-in-1">
<div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
<div className="bubble bubble-1" style={{left: '8vw', bottom: '10%', background: '#22d3ee', width: '32px', height: '32px'}}></div>
<div className="bubble bubble-2" style={{left: '60vw', bottom: '15%', background: '#0ea5e9', width: '18px', height: '18px'}}></div>
</div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#22d3ee]">Need Fast, Affordable Pool Care?</h3>
<div className="text-[#aee9fa] mt-1 text-base">We’re here for you. <span className="font-medium">Mon–Sat: 8am–7pm</span></div>
<div className="flex items-center gap-2 mt-2 text-[#22d3ee] text-lg font-medium">
<i className="w-5 h-5" data-lucide="phone"></i>
          (555) 123-4567
        </div>
</div>
<a className="rounded-full text-[#101927] bg-[#22d3ee] hover:bg-[#38bdf8] px-7 py-3 font-semibold text-base shadow-lg mt-2 md:mt-0 transition-all outline-none focus:ring-2 focus:ring-[#22d3ee]/80 focus:ring-offset-2" href="#contact">Request Service Today</a>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-14 fade-in fade-in-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#22d3ee] mb-6">Service Area</h2>
<div className="flex flex-col md:flex-row gap-8 items-center">

<div className="w-full md:w-2/3 rounded-xl border border-[#233045] shadow-sm bg-[#141e2d] flex items-center justify-center p-2 relative">
<div className="absolute top-2 left-2 bg-[#1e293b] rounded-full px-3 py-1 flex items-center gap-2 text-xs text-[#aee9fa] font-semibold border border-[#233045]">
<i className="w-4 h-4 text-[#22d3ee]" data-lucide="radar"></i>
          Service Radius
        </div>
<img alt="Service Area Map" className="object-cover rounded-lg w-full h-[260px] md:h-[300px] border border-[#233045]" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>

<div className="w-full md:w-1/3 mt-6 md:mt-0">
<h3 className="text-lg font-medium text-[#22d3ee] mb-2">Serving:</h3>
<ul className="text-[#aee9fa] text-base flex flex-wrap gap-2">
<li className="bg-[#1e293b] rounded-full px-3 py-1 font-medium border border-[#233045]">Austin</li>
<li className="bg-[#1e293b] rounded-full px-3 py-1 font-medium border border-[#233045]">Round Rock</li>
<li className="bg-[#1e293b] rounded-full px-3 py-1 font-medium border border-[#233045]">Cedar Park</li>
<li className="bg-[#1e293b] rounded-full px-3 py-1 font-medium border border-[#233045]">Pflugerville</li>
<li className="bg-[#1e293b] rounded-full px-3 py-1 font-medium border border-[#233045]">Leander</li>
</ul>
<div className="mt-2 text-xs text-[#aee9fa]">Other nearby areas by request!</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-14 fade-in fade-in-3" id="contact">
<div className="bg-[#141e2d] rounded-2xl shadow-lg border border-[#233045] p-8 flex flex-col gap-6">
<h2 className="text-2xl font-semibold tracking-tight text-[#22d3ee] mb-2">Get In Touch</h2>
<form autocomplete="off" className="flex flex-col gap-5">
<div className="flex flex-col md:flex-row gap-4">
<input className="input-outline border border-[#233045] rounded-lg px-4 py-3 text-[#f1f9fa] bg-[#19243a] focus:bg-[#101927] transition-all font-medium text-base" placeholder="Your Name" required="" type="text"/>
<input className="input-outline border border-[#233045] rounded-lg px-4 py-3 text-[#f1f9fa] bg-[#19243a] focus:bg-[#101927] transition-all font-medium text-base" placeholder="Email Address" required="" type="email"/>
</div>
<div className="flex flex-col md:flex-row gap-4">
<input className="input-outline border border-[#233045] rounded-lg px-4 py-3 text-[#f1f9fa] bg-[#19243a] focus:bg-[#101927] transition-all font-medium text-base" placeholder="Phone Number" type="tel"/>
<select className="input-outline border border-[#233045] rounded-lg px-4 py-3 text-[#f1f9fa] bg-[#19243a] focus:bg-[#101927] transition-all font-medium text-base">
<option>Pool Type</option>
<option>Residential</option>
<option>Commercial</option>
</select>
</div>
<textarea className="input-outline border border-[#233045] rounded-lg px-4 py-3 text-[#f1f9fa] bg-[#19243a] focus:bg-[#101927] transition-all font-medium text-base" placeholder="Your Message" rows="3"></textarea>
<div>
<label className="block text-sm text-[#aee9fa] font-medium mb-1" htmlFor="pool-photo">Send us a pool photo (optional)</label>
<input accept="image/*" className="block w-full border border-[#233045] rounded-lg bg-[#19243a] px-3 py-2 text-[#f1f9fa] file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#233045] file:text-[#22d3ee]" id="pool-photo" type="file"/>
</div>
<button className="rounded-full text-[#101927] bg-[#22d3ee] hover:bg-[#38bdf8] px-8 py-3 font-semibold text-base shadow-lg transition-all outline-none focus:ring-2 focus:ring-[#22d3ee]/80 focus:ring-offset-2 self-start" type="submit">Send Message</button>
</form>
</div>
</section>

<footer className="relative bg-[#141e2d] mt-10 pt-10 pb-6 border-t border-[#233045]">

<svg className="wave-footer" fill="none" viewbox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
<path d="M0,30 C420,80 1100,0 1440,40 L1440,0 L0,0 Z" fill="#141e2d"></path>
<path d="M0,50 C280,30 1200,70 1440,10 L1440,0 L0,0 Z" fill="#22d3ee" fillOpacity="0.09"></path>
</svg>
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 md:gap-16">

<div className="flex-1 flex flex-col gap-3">
<div className="flex items-center gap-3 mb-3">
<span className="text-2xl font-semibold tracking-tight text-[#22d3ee]">AQUA</span>
<span className="text-lg font-medium text-[#f1f9fa]">Pool Cleaning</span>
</div>
<div className="text-[#aee9fa] text-sm">Mon–Sat: 8am–7pm</div>
<div className="flex gap-1 items-center text-[#22d3ee] text-sm"><i className="w-4 h-4" data-lucide="phone"></i>(555) 123-4567</div>
<div className="flex gap-1 items-center text-[#aee9fa] text-sm"><i className="w-4 h-4" data-lucide="mail"></i>hello@aqua.com</div>
<div className="flex gap-4 mt-3">
<a className="hover:bg-[#19243a] rounded-full p-2 transition" href="#"><i className="w-5 h-5 text-[#22d3ee]" data-lucide="facebook"></i></a>
<a className="hover:bg-[#19243a] rounded-full p-2 transition" href="#"><i className="w-5 h-5 text-[#22d3ee]" data-lucide="instagram"></i></a>
<a className="hover:bg-[#19243a] rounded-full p-2 transition" href="#"><i className="w-5 h-5 text-[#22d3ee]" data-lucide="star"></i></a>
</div>
</div>

<div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-[#aee9fa] text-sm">
<div>
<div className="font-semibold mb-2">About</div>
<ul className="flex flex-col gap-1">
<li><a className="hover:underline" href="#">Company</a></li>
<li><a className="hover:underline" href="#">Our Team</a></li>
<li><a className="hover:underline" href="#">Careers</a></li>
</ul>
</div>
<div>
<div className="font-semibold mb-2">Services</div>
<ul className="flex flex-col gap-1">
<li><a className="hover:underline" href="#">Residential</a></li>
<li><a className="hover:underline" href="#">Commercial</a></li>
<li><a className="hover:underline" href="#">Weekly Plans</a></li>
</ul>
</div>
<div>
<div className="font-semibold mb-2">Contact</div>
<ul className="flex flex-col gap-1">
<li><a className="hover:underline" href="#">Get in Touch</a></li>
<li><a className="hover:underline" href="#">Book Estimate</a></li>
<li><a className="hover:underline" href="#">Support</a></li>
</ul>
</div>
<div>
<div className="font-semibold mb-2">FAQ</div>
<ul className="flex flex-col gap-1">
<li><a className="hover:underline" href="#">Questions</a></li>
<li><a className="hover:underline" href="#">Pricing</a></li>
<li><a className="hover:underline" href="#">Service Area</a></li>
</ul>
</div>
</div>
</div>
<div className="divider"></div>
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#aee9fa] mt-3 gap-2">
<div>
        © 2024 Aqua Pool Cleaning. All rights reserved.
      </div>
<div className="flex gap-3">
<a className="hover:underline" href="#">Terms</a>
<a className="hover:underline" href="#">Privacy</a>
</div>
</div>
</footer>


    </>
  );
}
