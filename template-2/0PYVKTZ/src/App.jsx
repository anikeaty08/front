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
      
    lucide.createIcons();
    document.getElementById('mobileBtn').addEventListener('click',()=>{document.getElementById('mobileMenu').classList.toggle('hidden');});
    new Chart(document.getElementById('growthChart').getContext('2d'),{
      type:'line',
      data:{
        labels:['2021','2022','2023','2024'],
        datasets:[{
          label:'Members',
          data:[50,480,1700,3000],
          borderColor:'#ccff00',
          borderWidth:3,
          tension:.45,
          fill:false,
          pointRadius:5,
          pointBackgroundColor:'#ccff00'
        }]
      },
      options:{
        responsive:true,
        plugins:{legend:{display:false}},
        scales:{
          x:{ticks:{color:'#b2b2b2'},grid:{display:false}},
          y:{ticks:{color:'#b2b2b2'},grid:{color:'rgba(204,255,0,0.06)'}}
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/worldplanet-inmHh7fVCul1jUFrNRYlotVU" width="100%"></iframe></div>

<div className="fixed inset-0 -z-20 pointer-events-none">

<div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(204,255,0,0.04)_0_2px,transparent_2px_40px)]" style={{}}></div>

<div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#ccff00] opacity-10 blur-[100px]" style={{}}></div>
<div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-full bg-[#ccff00] opacity-10 blur-[120px]" style={{}}></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" style={{}}></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-[#ccff00] shadow-xl backdrop-blur-sm bg-black/90" style={{}}>
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 highlight glow-green fade-up text-2xl font-semibold tracking-tight" href="#" style={{}}><svg className="lucide lucide-globe w-7 h-7 highlight" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `28px`, height: `28px`, color: `rgb(204, 255, 0)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>The Collective Solution</a>
<nav className="hidden md:flex gap-8 text-base font-medium">
<a className="hover:text-[#ccff00] transition focus:outline-none focus:ring-2 focus:ring-[#ccff00]" href="#about" style={{}}>About</a>
<a className="hover:text-[#ccff00] transition focus:outline-none focus:ring-2 focus:ring-[#ccff00]" href="#community" style={{}}>Community</a>
<a className="hover:text-[#ccff00] transition focus:outline-none focus:ring-2 focus:ring-[#ccff00]" href="#events" style={{}}>Events</a>
<a className="hover:text-[#ccff00] transition focus:outline-none focus:ring-2 focus:ring-[#ccff00]" href="#contact" style={{}}>Contact</a>
</nav>
<button className="md:hidden hover:text-[#ccff00] transition text-gray-100" id="mobileBtn" style={{}}>
<svg className="lucide lucide-menu w-7 h-7" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
<div className="md:hidden hidden border-t border-[#ccff00]/30 bg-black" id="mobileMenu">
<nav className="px-6 py-4 flex flex-col gap-4 text-lg font-medium">
<a className="hover:text-[#ccff00] transition" href="#about" style={{}}>About</a>
<a className="hover:text-[#ccff00] transition" href="#community" style={{}}>Community</a>
<a className="hover:text-[#ccff00] transition" href="#directory" style={{}}>Directory</a>
<a className="hover:text-[#ccff00] transition" href="#events" style={{}}>Events</a>
<a className="hover:text-[#ccff00] transition" href="#contact" style={{}}>Contact</a>
</nav>
</div>
</header>

<section className="pt-32 md:pt-40 relative min-h-[70vh] flex items-center justify-center isolate">
<div className="absolute inset-0 -z-10" style={{}}></div>
<div className="max-w-4xl text-center mr-auto ml-auto pr-6 pl-6 space-y-8">
<h1 className="md:text-7xl fade-up glow-green text-4xl font-semibold tracking-tighter" style={{letterSpacing: `-0.02em`}}>A Tribe with Creative Solutions <span className="highlight">to</span><br /><span className="highlight">Modern Issues</span></h1>
<p className="max-w-2xl md:text-xl fade-up fade-delay-1 text-lg text-slate-50 mr-auto ml-auto" style={{}}>The Collective Solution unites a global online network and a physical home for creators, founders, and explorers—powered by community, innovation, and the vibrant pulse of Bali.</p><div className="flex flex-col sm:flex-row gap-4 fade-up fade-delay-2 justify-center">
<a className="inline-flex items-center gap-2 hover:bg-[#ccff00] hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-[#ccff00] hover:text-black font-medium text-[#ccff00] border-[#ccff00] border rounded-full pt-3 pr-7 pb-3 pl-7" href="#directory" onClick={(e) => { event.preventDefault(); document.querySelector('#directory').scrollIntoView({ behavior: 'smooth' }); }} style={{}}>
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
          Directory
        </a><a className="inline-flex items-center gap-2 highlight-bg hover:scale-105 hover:glow-green-outline transition focus:outline-none focus:ring-2 focus:ring-[#ccff00] font-semibold text-black rounded-full pt-3 pr-7 pb-3 pl-7 shadow-xl" href="#join" style={{}}>
<svg className="lucide lucide-sparkle w-5 h-5" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>
          Join the Community
        </a>
</div>
</div>
</section>

<section className="max-w-6xl relative mr-auto ml-auto pt-16 pr-6 pb-16 pl-6" id="directory">
<h2 className="md:text-4xl highlight fade-up text-3xl font-semibold tracking-tight text-center mb-10">Explore The Rabbit Hole</h2>
<div className="grid gap-7 md:grid-cols-4 sm:grid-cols-2 fade-up fade-delay-1">
<a className="relative group flex flex-col items-center hover:-translate-y-1 hover:border-[#ccff00] transition outline-none focus:ring-2 focus:ring-[#ccff00] bg-black/70 border-[#ccff00]/40 border rounded-2xl pt-7 pr-7 pb-7 pl-7 shadow-xl" href="/members.html" style={{}}>
<svg className="lucide lucide-user-check w-8 h-8 highlight mb-4 glow-green" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-xl font-medium mb-2 group-hover:text-[#ccff00] transition">Members</h3>
<p className="text-sm text-gray-400 text-center" style={{}}>Connect with 3,000+ vetted members worldwide & in Bali.</p>
</a>
<a className="relative group flex flex-col items-center hover:-translate-y-1 hover:border-[#ccff00] transition outline-none focus:ring-2 focus:ring-[#ccff00] fade-delay-2 bg-black/70 border-[#ccff00]/40 border rounded-2xl pt-7 pr-7 pb-7 pl-7 shadow-xl" href="/locations.html" style={{}}>
<svg className="lucide lucide-map-pin w-8 h-8 highlight mb-4 glow-green" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<h3 className="text-xl font-medium mb-2 group-hover:text-[#ccff00] transition">Locations</h3>
<p className="text-sm text-center text-gray-400" style={{}}>Coworking hubs, villas, and partner cafes across Bali.</p>
</a>
<a className="relative group border border-[#ccff00]/40 rounded-2xl p-7 flex flex-col items-center shadow-xl hover:-translate-y-1 hover:border-[#ccff00] transition outline-none focus:ring-2 focus:ring-[#ccff00] fade-delay-3 bg-black/70" href="#" style={{}}>
<svg className="lucide lucide-calendar w-8 h-8 highlight mb-4 glow-green" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<h3 className="text-xl font-medium mb-2 group-hover:text-[#ccff00] transition">Events</h3>
<p className="text-sm text-gray-400 text-center" style={{}}>Workshops, events, and retreats.</p>
</a>
<a className="relative group border border-[#ccff00]/40 rounded-2xl p-7 flex flex-col items-center shadow-xl hover:-translate-y-1 hover:border-[#ccff00] transition outline-none focus:ring-2 focus:ring-[#ccff00] fade-delay-4 bg-black/70" href="#" style={{}}>
<svg className="lucide lucide-book-open w-8 h-8 highlight mb-4 glow-green" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<h3 className="text-xl font-medium mb-2 group-hover:text-[#ccff00] transition">Resources</h3>
<p className="text-sm text-center text-gray-400" style={{}}>Playbooks for remote work, visas, and island living.</p>
</a>
</div>
<hr className="mt-14 border-[#ccff00]/10" />
</section>

<section className="max-w-6xl flex flex-col-reverse md:flex-row gap-16 bg-gradient-to-b from-[#000000] to-[#0f0f0f] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 items-center" id="community">
<div className="md:w-1/2 space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight highlight fade-up">Hybrid: Global & Local</h2>
<p className="fade-up fade-delay-1 text-gray-300" style={{}}>
        Whether you’re collaborating in our online spaces or meeting at our Canggu clubhouse, Bali Nexus is built for connection and real-world transformation.
      </p>
<ul className="space-y-3 fade-up fade-delay-2">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-5 h-5 highlight" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Online mastermind groups & forums
        </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-5 h-5 highlight" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> IRL events, wellness, and coworking
        </li>
<li className="flex gap-2 items-center">
<svg className="lucide lucide-check-circle w-5 h-5 highlight" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Mentorship & opportunity exchange
        </li>
</ul>
</div>
<div className="md:w-1/2 relative isolate fade-up fade-delay-3">
<img alt="Bali Community" className="rounded-3xl shadow-xl w-full aspect-[5/3] object-cover border-4 border-[#ccff00]/10 outline-none focus:ring-2 focus:ring-[#ccff00]" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" style={{}} />
<div className="absolute -inset-4 rounded-3xl pointer-events-none border-2 border-[#ccff00]/20 blur-sm"></div>
</div>
</section>

<section className="bg-gradient-to-b from-[#000000] to-[#33566b]/40 pt-24 pb-24" id="events" style={{}}>
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="md:text-4xl highlight fade-up text-3xl font-semibold tracking-tight">Upcoming Events</h2>
<p className="fade-up fade-delay-1 text-gray-400" style={{}}>On the calendar—mixing tech, nature, and culture.</p>
</div>
<div className="grid md:grid-cols-2 gap-10">
<div className="group relative border border-[#ccff00]/30 rounded-2xl overflow-hidden shadow-lg hover:border-[#ccff00] transition fade-up fade-delay-2 bg-black/80" style={{}}>
<img alt="Retreat" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" />
<div className="p-6">
<h3 className="text-2xl font-medium highlight mb-1 group-hover:text-black group-hover:bg-[#ccff00] px-2 rounded transition">
              Jungle Retreat & Hackathon
            </h3>
<p className="text-sm mb-2 text-gray-200" style={{}}>May 28–30 · Ubud</p>
<p className="text-sm text-gray-400" style={{}}>A 3-day immersive retreat for builders, dreamers, and creators. Includes yoga, workshops, and live music.</p>
</div>
</div>
<div className="group relative border border-[#ccff00]/30 rounded-2xl overflow-hidden shadow-lg hover:border-[#ccff00] transition fade-up fade-delay-3 bg-black/80" style={{}}>
<img alt="Surf Meetup" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" />
<div className="p-6">
<h3 className="text-2xl font-medium highlight mb-1 group-hover:text-black group-hover:bg-[#ccff00] px-2 rounded transition">
              Sunrise Surf & Strategy
            </h3>
<p className="text-sm mb-2 text-gray-200" style={{}}>June 7 · Batu Bolong</p>
<p className="text-sm text-gray-400" style={{}}>Morning surf followed by a mastermind brunch at a partner beach club. All levels welcome.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="flex flex-col md:flex-row gap-14 items-center">
<div className="md:w-1/2 space-y-6">
<h2 className="md:text-4xl highlight fade-up text-3xl font-semibold tracking-tight">Growing, Every Day</h2>
<p className="fade-up fade-delay-1 text-gray-300" style={{}}>
          From 50 to 3,000+ members in just 3 years—our hybrid model is working. Here’s our growth at a glance.
        </p>
</div>
<div className="md:w-1/2 border border-[#ccff00]/20 rounded-2xl p-7 shadow-xl fade-up fade-delay-2 bg-black/70" style={{}}>
<div className="">
<canvas aria-label="Community Growth" className="" height="418" id="growthChart" role="img" style={{display: `block`, boxSizing: `border-box`, height: `209px`, width: `418px`}} width="836"></canvas>
</div>
</div>
</div>
</section>

<section className="py-28 text-center relative" id="join">
<div className="absolute inset-0 bg-gradient-to-b pointer-events-none -z-10 from-black/80 via-black/50 to-black" style={{}}></div>
<div className="relative max-w-2xl mx-auto px-6 space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight highlight fade-up">Ready to Connect?</h2>
<p className="fade-up fade-delay-1 text-gray-300" style={{}}>Apply to join, and step into a world of high-signal connection, adventure, and impact.</p>
<a className="inline-flex items-center gap-2 highlight-bg hover:scale-105 hover:glow-green-outline transition focus:outline-none focus:ring-2 focus:ring-[#ccff00] fade-up fade-delay-2 font-semibold text-black rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl" href="#" style={{}}><svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>Join our online community now!</a>
</div>
</section>

<section className="max-w-2xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="contact">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight highlight text-center fade-up">Contact Us</h2>
<p className="max-w-xl fade-up fade-delay-1 font-extrabold text-neutral-50 text-center mr-auto ml-auto" style={{}}>
      Reach out for partnerships, membership, or media—our team will get back to you within 24 hours.
    </p>
<form className="mt-8 grid gap-6 fade-up fade-delay-2">
<input aria-label="Name" className="w-full border border-[#ccff00]/30 rounded-lg px-5 py-3 focus:outline-none focus:border-[#ccff00] focus:ring-2 focus:ring-[#ccff00] placeholder-gray-500 bg-black/70 text-gray-100" placeholder="Name" style={{}} type="text" />
<input aria-label="Email" className="w-full border border-[#ccff00]/30 rounded-lg px-5 py-3 focus:outline-none focus:border-[#ccff00] focus:ring-2 focus:ring-[#ccff00] placeholder-gray-500 bg-black/70 text-gray-100" placeholder="Email" style={{}} type="email" />
<textarea aria-label="Message" className="w-full border border-[#ccff00]/30 rounded-lg px-5 py-3 focus:outline-none focus:border-[#ccff00] focus:ring-2 focus:ring-[#ccff00] placeholder-gray-500 bg-black/70 text-gray-100" placeholder="Message" rows="4" style={{}}></textarea>
<button className="w-full px-6 py-3 rounded-full highlight-bg font-semibold hover:scale-105 hover:glow-green-outline transition focus:outline-none focus:ring-2 focus:ring-[#ccff00] text-black" style={{}} type="submit">Send Message</button>
</form>
</section>

<footer className="border-t border-[#ccff00]/20 bg-black/80" style={{}}>
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-gray-500 text-sm" style={{}}>© 2024 Bali Nexus. All rights reserved.</p>
<nav className="flex gap-4">
<a aria-label="Instagram" className="hover:text-[#ccff00] transition" href="#" style={{}}><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a aria-label="Twitter" className="hover:text-[#ccff00] transition" href="#" style={{}}><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a aria-label="Facebook" className="hover:text-[#ccff00] transition" href="#" style={{}}><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</nav>
</div>
</footer>


    </>
  );
}
