import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
lucide.createIcons();
document.getElementById('mobileMenuBtn')?.addEventListener('click',()=>document.getElementById('mobileMenu').classList.toggle('hidden'));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('themeToggle')?.addEventListener('change',e=>{
  e.target.checked?document.documentElement.classList.add('dark'):document.documentElement.classList.remove('dark');
});
const ctx=document.getElementById('pointsChart');
if(ctx){
  new Chart(ctx,{type:'doughnut',data:{labels:['Earned','Remaining'],datasets:[{data:[65,35],backgroundColor:['#d46a4c','#32251c'],borderWidth:0}]},options:{cutout:'70%',plugins:{legend:{display:false}}}});
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-30 backdrop-blur bg-[var(--night)]/70">
<div className="max-w-7xl flex mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center space-x-2" href="#">
<span className="text-2xl font-semibold tracking-tight" style={{fontFamily: 'Pacifico'}}>RedEye</span>
</a>
<nav className="hidden md:flex space-x-8 text-sm font-medium">
<a className="hover:text-[var(--terra)] transition" href="#menu">Menu</a>
<a className="hover:text-[var(--terra)] transition" href="#events">Events</a>
<a className="hover:text-[var(--terra)] transition" href="#loyalty">Subscribe</a>
<a className="hover:text-[var(--terra)] transition" href="#story">Our Story</a>
<a className="hover:text-[var(--terra)] transition" href="#contact">Contact</a>
</nav>
<button className="md:hidden text-[var(--desert-sand)]" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
<div className="md:hidden hidden flex-col space-y-6 px-6 pb-6" id="mobileMenu">
<a className="hover:text-[var(--terra)]" href="#menu">Menu</a>
<a className="hover:text-[var(--terra)]" href="#events">Events</a>
<a className="hover:text-[var(--terra)]" href="#loyalty">Subscribe</a>
<a className="hover:text-[var(--terra)]" href="#story">Our Story</a>
<a className="hover:text-[var(--terra)]" href="#contact">Contact</a>
</div>
</header>

<section className="relative h-[80vh] flex items-center">
<img alt="Cup of coffee" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[var(--night)]"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[var(--desert-sand)] fade-in" style={{fontFamily: 'Pacifico'}}>RedEye Coffee</h1>
<p className="mt-4 max-w-xl text-lg text-[var(--desert-sand)]/90 fade-in" style={{animationDelay: '.15s'}}>
      Modern-meets-desert-retro brews, crafted in the heart of Scottsdale.
    </p>
<div className="mt-8 flex space-x-4 fade-in" style={{animationDelay: '.3s'}}>
<a className="px-6 py-3 rounded-lg bg-[var(--terra)] text-[var(--desert-sand)] font-medium shadow hover:shadow-[0_0_0_2px_var(--terra)] transition" href="#menu">Explore Menu</a>
<a className="px-6 py-3 rounded-lg border border-[var(--terra)] text-[var(--terra)] font-medium hover:bg-[var(--terra)]/10 transition" href="#loyalty">Join Loyalty</a>
</div>
</div>
</section>

<section className="py-20" id="menu">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight slide-left">Brew &amp; Bites</h2>
<p className="mt-3 mb-10 text-[var(--desert-sand)]/80 slide-left" style={{animationDelay: '.1s'}}>
      Tap a tile to order or browse full flavors.
    </p>
<div className="grid md:grid-cols-3 gap-6">
<button className="group relative rounded-3xl overflow-hidden hover:shadow-lg transition slide-left" style={{animationDelay: '.15s'}}>
<img alt="Espresso" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-xl font-semibold tracking-tight">Espresso</h3>
<span className="text-sm text-[var(--desert-sand)]/80">Rich &amp; bold shots</span>
</div>
</button>
<button className="group relative rounded-3xl overflow-hidden hover:shadow-lg transition slide-left" style={{animationDelay: '.25s'}}>
<img alt="Cold Brew" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-xl font-semibold tracking-tight">Cold Brew</h3>
<span className="text-sm text-[var(--desert-sand)]/80">Brewed 18 hours</span>
</div>
</button>
<button className="group relative rounded-3xl overflow-hidden hover:shadow-lg transition slide-left" style={{animationDelay: '.35s'}}>
<img alt="Pastries" className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-xl font-semibold tracking-tight">Pastries</h3>
<span className="text-sm text-[var(--desert-sand)]/80">Baked in-house</span>
</div>
</button>
</div>
</div>
</section>

<section className="py-20 bg-[var(--shade)]" id="loyalty">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="fade-in">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Brew Crew Membership</h2>
<p className="mt-4 text-[var(--desert-sand)]/80">
        Earn points, unlock seasonal pours, and skip the line with a contactless QR menu.
      </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start space-x-3">
<svg className="lucide lucide-coffee w-5 h-5 text-[var(--terra)]" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
<span>Free birthday latte</span>
</li>
<li className="flex items-start space-x-3">
<svg className="lucide lucide-clock w-5 h-5 text-[var(--terra)]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Early access to new roasts</span>
</li>
<li className="flex items-start space-x-3">
<svg className="lucide lucide-gift w-5 h-5 text-[var(--terra)]" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
<span>Member-only merch drops</span>
</li>
</ul>
<button className="mt-8 px-6 py-3 rounded-lg bg-[var(--terra)] text-[var(--desert-sand)] font-medium shadow hover:shadow-[0_0_0_2px_var(--terra)] transition">
        Join the Crew
      </button>
</div>
<div className="w-full fade-in" style={{animationDelay: '.15s'}}>
<div className="relative bg-[var(--night)] rounded-2xl p-8 border border-[var(--shade)]">
<h3 className="text-xl font-semibold tracking-tight mb-6 flex items-center gap-2">Loyalty Points Progress</h3>
<div><div><canvas height="526" id="pointsChart" style={{display: 'block', boxSizing: 'border-box', height: '526px', width: '526px'}} width="526"></canvas></div></div>
</div>
</div>
</div>
</section>

<section className="py-20" id="events">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight slide-left">Events &amp; Community</h2>
<p className="mt-3 mb-10 text-[var(--desert-sand)]/80 slide-left" style={{animationDelay: '.1s'}}>
      From latte-art throwdowns to desert jazz evenings.
    </p>
<div className="grid md:grid-cols-3 gap-6">
<div className="border border-[var(--shade)] rounded-xl p-6 hover:border-[var(--terra)] transition fade-in" style={{animationDelay: '.15s'}}>
<h4 className="text-lg font-semibold tracking-tight mb-2">Art Night • May 28</h4>
<p className="text-sm text-[var(--desert-sand)]/80 mb-4">Local creatives live-paint while you sip.</p>
<button className="text-[var(--terra)] font-medium flex items-center gap-2 hover:underline">
          RSVP <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="border border-[var(--shade)] rounded-xl p-6 hover:border-[var(--terra)] transition fade-in" style={{animationDelay: '.25s'}}>
<h4 className="text-lg font-semibold tracking-tight mb-2">Cupping 101 • Jun 03</h4>
<p className="text-sm text-[var(--desert-sand)]/80 mb-4">Taste &amp; learn origin profiles with our roaster.</p>
<button className="text-[var(--terra)] font-medium flex items-center gap-2 hover:underline">
          RSVP <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="border border-[var(--shade)] rounded-xl p-6 hover:border-[var(--terra)] transition fade-in" style={{animationDelay: '.35s'}}>
<h4 className="text-lg font-semibold tracking-tight mb-2">Sunset Jazz • Jun 18</h4>
<p className="text-sm text-[var(--desert-sand)]/80 mb-4">Smooth sounds on the patio under string lights.</p>
<button className="text-[var(--terra)] font-medium flex items-center gap-2 hover:underline">
          RSVP <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--shade)]" id="story">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
<div className="relative fade-in">
<img alt="Roasting beans" className="rounded-3xl w-full object-cover h-[420px]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute -bottom-6 -right-6 bg-[var(--terra)] p-3 rounded-full shadow-xl">
<svg className="lucide lucide-bean w-6 h-6 text-[var(--desert-sand)] bean-spin" data-lucide="bean" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"></path><path d="M5.341 10.62a4 4 0 1 0 5.279-5.28"></path></svg>
</div>
</div>
<div className="fade-in" style={{animationDelay: '.15s'}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Arizona Roots. Global Beans.</h2>
<p className="text-[var(--desert-sand)]/80">
        Nestled near Old Town Scottsdale, RedEye began as a tiny cart brewing single-origin espresso under the desert sun. 
        Today our café blends rustic woods, biophilic design and tech-forward touches—yet we’re still fueled by community.
      </p>
<p className="mt-6 text-[var(--desert-sand)]/80">
        Every roast passes through our  stations, and each pour is an invitation to slow down, connect and taste the desert’s creative pulse.
      </p>
</div>
</div>
</section>

<section className="py-20" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">
<div className="fade-in">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Find Us</h2>
<p className="text-[var(--desert-sand)]/80 mb-6">7125 E Main St, Scottsdale, AZ 85251</p>
<div className="aspect-video rounded-2xl overflow-hidden border border-[var(--shade)]">
<iframe allowfullscreen="" className="w-full h-full" loading="lazy" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-dummy&amp;zoom=15&amp;q=Old+Town+Scottsdale"></iframe>
</div>
</div>
<div className="space-y-6 fade-in" style={{animationDelay: '.15s'}}>
<h3 className="text-xl font-semibold tracking-tight">Hours</h3>
<ul className="text-[var(--desert-sand)]/80">
<li>Mon–Fri: 6 am – 6 pm</li>
<li>Sat–Sun: 7 am – 7 pm</li>
</ul>
<h3 className="text-xl font-semibold tracking-tight">Connect</h3>
<div className="flex space-x-6">
<a className="hover:text-[var(--terra)] transition" href="#"><svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-[var(--terra)] transition" href="#"><svg className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="hover:text-[var(--terra)] transition" href="#"><svg className="lucide lucide-twitter w-6 h-6" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
<h3 className="text-xl font-semibold tracking-tight">Write Us</h3>
<p className="text-[var(--desert-sand)]/80">hello@redeyecoffee.az</p>
</div>
</div>
</section>

<footer className="border-t border-[var(--shade)] py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-[var(--desert-sand)]/60">© <span id="year">2025</span> RedEye Coffee. Brewed in Scottsdale.</p>
<div className="flex items-center gap-2">
<svg className="lucide lucide-sun w-5 h-5" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="themeToggle" type="checkbox"/>
<div className="w-10 h-5 bg-[var(--shade)] peer-focus:outline-none rounded-full peer peer-checked:bg-[var(--terra)] transition-all"></div>
<span className="sr-only">Toggle Theme</span>
</label>
<svg className="lucide lucide-moon w-5 h-5" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</div>
</div>
</footer>




    </>
  );
}
