import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Staggered reveal
    document.addEventListener('DOMContentLoaded', () => {
      const elements = document.querySelectorAll('[data-animate]');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      elements.forEach(el => observer.observe(el));

      // Init icons
      if (window.lucide) lucide.createIcons({ strokeWidth: 1.5 });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 opacity-5 mix-blend-overlay" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1508085563142-1c1c7b936c47?auto=format&amp', backgroundSize: 'cover'}}></div>

<header className="absolute inset-x-0 top-0 z-20">
<nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<span className="text-2xl tracking-tight text-white" style={{fontFamily: '\'Permanent Marker\',cursive'}}>CC</span>
<ul className="hidden md:flex space-x-8 text-sm font-medium">
<li><a className="hover:text-white transition" href="#shows">Shows</a></li>
<li><a className="hover:text-white transition" href="#about">About</a></li>
<li><a className="hover:text-white transition" href="#join">Join</a></li>
</ul>
<button className="md:hidden flex items-center text-gray-300 hover:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>
</header>

<section className="relative h-screen flex items-center justify-center">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="" src="https://cdn.coverr.co/videos/coverr-lights-turn-on-1440p.mp4"></video>
<div className="absolute inset-0 bg-black/50 backdrop-brightness-50"></div>
<div className="relative z-10 text-center space-y-6 px-6">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white opacity-0 translate-y-8 transition duration-700 ease-out" data-animate="" style={{fontFamily: '\'Permanent Marker\',cursive'}}>
        Abandoned Realms<br/>Immersive Circus
      </h1>
<p className="max-w-xl mx-auto text-gray-300 opacity-0 translate-y-8 transition duration-700 ease-out delay-150" data-animate="">
        A clandestine troupe breathing acrobatics, fire, and illusion into forgotten spaces.
      </p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-red-600/80 hover:bg-red-600 text-white font-medium transition opacity-0 translate-y-8 duration-700 ease-out delay-300" data-animate="" href="#shows">
        Explore Shows
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="relative py-24" id="shows">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 opacity-0 translate-y-8 transition duration-700 ease-out" data-animate="" style={{fontFamily: '\'Permanent Marker\',cursive'}}>
        Upcoming Spectacles
      </h2>
<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

<article className="group opacity-0 translate-y-8 transition duration-700 ease-out delay-100 bg-gray-800/60 rounded-lg overflow-hidden backdrop-blur-sm ring-1 ring-white/5 hover:ring-red-500/40" data-animate="">
<img alt="" className="h-48 w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-6 space-y-2">
<h3 className="text-xl font-semibold tracking-tight" style={{fontFamily: '\'Permanent Marker\',cursive'}}>The Lantern Factory</h3>
<p className="text-sm text-gray-400">July 28 · Detroit</p>
<p className="text-sm leading-relaxed">An electric fusion of shadow play and high-wire duets beneath rusted steel beams.</p>
</div>
</article>

<article className="group opacity-0 translate-y-8 transition duration-700 ease-out delay-200 bg-gray-800/60 rounded-lg overflow-hidden backdrop-blur-sm ring-1 ring-white/5 hover:ring-red-500/40" data-animate="">
<img alt="" className="h-48 w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>
<div className="p-6 space-y-2">
<h3 className="text-xl font-semibold tracking-tight" style={{fontFamily: '\'Permanent Marker\',cursive'}}>Cathedral of Rust</h3>
<p className="text-sm text-gray-400">Aug 19 · Prague</p>
<p className="text-sm leading-relaxed">A vertical labyrinth where silks meet stone, echoing with ethereal choral loops.</p>
</div>
</article>

<article className="group opacity-0 translate-y-8 transition duration-700 ease-out delay-300 bg-gray-800/60 rounded-lg overflow-hidden backdrop-blur-sm ring-1 ring-white/5 hover:ring-red-500/40" data-animate="">
<img alt="" className="h-48 w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>
<div className="p-6 space-y-2">
<h3 className="text-xl font-semibold tracking-tight" style={{fontFamily: '\'Permanent Marker\',cursive'}}>Echo Vault</h3>
<p className="text-sm text-gray-400">Sep 09 · Lisbon</p>
<p className="text-sm leading-relaxed">Site-specific aerial choreography spirals through dust-laden air in perfect silence.</p>
</div>
</article>
</div>
</div>
</section>

<div className="max-w-6xl mx-auto px-6">
<hr className="border-gray-700"/>
</div>

<section className="relative py-24" id="about">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6 opacity-0 translate-y-8 transition duration-700 ease-out" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{fontFamily: '\'Permanent Marker\',cursive'}}>
          Who We Are
        </h2>
<p className="text-gray-300 leading-relaxed">
          We are vagabonds, engineers of wonder, wielders of flame and tension. Our caravan roams from city to city, reviving forsaken structures through spectacle. Each venue becomes a living canvas—a symphony of rigging, projection, and raw human strength.
        </p>
<p className="text-gray-400 leading-relaxed">
          No velvet seats. No fourth wall. You wander with the story, eyes adjusting to new darkness, heartbeat syncing with the drum. It ends when the space itself exhales.
        </p>
</div>
<div className="relative h-80 md:h-full opacity-0 translate-y-8 transition duration-700 ease-out delay-150" data-animate="">
<img alt="" className="w-full h-full object-cover rounded-lg shadow-lg ring-1 ring-white/5" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=900&amp;q=60"/>
<div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-lg pointer-events-none"></div>
</div>
</div>
</section>

<section className="relative py-32" id="join">
<div className="max-w-4xl mx-auto px-6 text-center space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight opacity-0 translate-y-8 transition duration-700 ease-out" data-animate="" style={{fontFamily: '\'Permanent Marker\',cursive'}}>
        Join the Spectacle
      </h2>
<p className="max-w-2xl mx-auto text-gray-300 opacity-0 translate-y-8 transition duration-700 ease-out delay-150" data-animate="">
        We recruit drifters, dreamers and daredevils. Sign up to receive secret coordinates, rehearsals, and casting calls.
      </p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 translate-y-8 transition duration-700 ease-out delay-300" data-animate="">
<input className="px-5 py-3 w-full sm:w-auto bg-gray-800/60 backdrop-blur placeholder-gray-500 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="you@dusty-theatre.net" required="" type="email"/>
<button className="px-6 py-3 bg-red-600/80 hover:bg-red-600 rounded-md text-white font-medium transition" type="submit">
          Count Me In
        </button>
</form>
</div>
</section>

<footer className="border-t border-gray-800 py-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
<span>© <span id="year"></span> Circus Collective. All rights reserved.</span>
<div className="flex gap-4">
<a className="hover:text-gray-300 transition" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-gray-300 transition" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
<a className="hover:text-gray-300 transition" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
</footer>



    </>
  );
}
