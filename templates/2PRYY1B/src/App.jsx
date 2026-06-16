import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Simple parallax scroll
    document.addEventListener('scroll', () => {
      constrolled = window.pageYOffset;
      document.querySelectorAll('[data-parallax]').forEach(el => {
        el.style.transform = `translateY(${rolled * 0.3}px)`;
      });
    });

    // Icons
    lucide.createIcons();

    // Staggered animation on load
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.fade-up').forEach((el, i) => {
 el.style.animationDelay = `${i * 0.05}s`;
        el.classList.remove('opacity-0');
      });
    });
  </script</body>
</html>
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative h-[92vh] flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 -z-20" data-parallax="" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1514190051471-5fcec2bf3433?auto=format&amp'}}>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff784c88] to-[#fafafa] dark:to-[#0f1116] -z-10"></div>

<nav className="absolute top-0 inset-x-0 flex items-center justify-between px-6 py-4">
<a className="text-lg font-semibold tracking-tight text-white drop-shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white" href="#">LongIsland.live</a>
<button aria-label="Log in" className="px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
        Log in
      </button>
</nav>

<div className="text-center px-6 md:px-12 fade-up">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-lg mb-4">
        Find Your Beat on Long Island
      </h1>
<p className="max-w-md mx-auto text-white/90 md:text-lg mb-8">
        Concerts, dinner shows, hidden gems &amp; more—every night of the week.
      </p>

<form aria-label="Search events" className="flex items-center bg-white/80 backdrop-blur rounded-full overflow-hidden shadow-lg max-w-sm mx-auto focus-within:ring-2 ring-offset-2 ring-orange-500 transition">
<label className="sr-only" htmlFor="search">Search</label>
<input className="flex-1 px-4 py-3 bg-transparent placeholder-slate-500 focus:outline-none" id="search" placeholder="Search artist, venue, or region" type="search"/>
<button aria-label="Search" className="px-4 py-3 bg-orange-500 text-white hover:bg-orange-600 transition flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500" type="submit">
<i className="w-4 h-4" data-lucide="search"></i>
<span className="hidden sm:inline">Search</span>
</button>
</form>
</div>
</header>

<div aria-hidden="true" className="sr-only" id="search"></div>

<section className="py-14 px-6 md:px-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 fade-up">Discover by Vibe</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">

<article className="group relative rounded-xl overflow-hidden fade-up" style={{animationDelay: '.05s'}}>
<img alt="Dinner &amp; Music" className="w-full h-40 object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1549921296-3cce7c7b92d5?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#ff784c] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition"></div>
<h3 className="absolute bottom-3 left-3 text-white font-medium">Dinner &amp; Music</h3>
</article>

<article className="group relative rounded-xl overflow-hidden fade-up" style={{animationDelay: '.1s'}}>
<img alt="Party Spots" className="w-full h-40 object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-teal-500 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition"></div>
<h3 className="absolute bottom-3 left-3 text-white font-medium">Party Spots</h3>
</article>

<article className="group relative rounded-xl overflow-hidden fade-up" style={{animationDelay: '.15s'}}>
<img alt="Acoustic Corners" className="w-full h-40 object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1531256379411-5a810fda9664?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-rose-500 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition"></div>
<h3 className="absolute bottom-3 left-3 text-white font-medium">Acoustic Corners</h3>
</article>

<article className="group relative rounded-xl overflow-hidden fade-up" style={{animationDelay: '.2s'}}>
<img alt="Outdoor Jams" className="w-full h-40 object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1533119408464-52b2c36d6b62?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-500 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition"></div>
<h3 className="absolute bottom-3 left-3 text-white font-medium">Outdoor Jams</h3>
</article>
</div>
</section>

<section className="py-14 px-6 md:px-12 bg-slate-50 dark:bg-slate-900">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 fade-up">Tribute Spotlight</h2>
<div className="relative rounded-xl overflow-hidden group fade-up">
<img alt="Billy Joel Tribute" className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#ff784c] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition"></div>
<div className="absolute bottom-6 left-6">
<p className="text-sm text-white/80 mb-1">This Saturday, 8 PM · The Paramount</p>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Billy Joel Night</h3>
<button aria-label="Get tickets for Billy Joel Night" className="px-6 py-3 rounded-full bg-white/90 text-slate-900 font-medium hover:bg-white transition flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
<i className="w-5 h-5" data-lucide="ticket"></i> Get Tickets
        </button>
</div>
</div>
</section>

<section className="py-14 px-6 md:px-12 relative">
<div className="max-w-2xl mx-auto text-center fade-up">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Never Miss a Show</h2>
<p className="text-slate-600 dark:text-slate-400 mb-8">
        Tap “I’m Interested” on any event and we’ll remind you when tickets drop, doors open, or friends join.
      </p>
<button aria-label="Activate I'm Interested tracker" className="px-8 py-4 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-lg flex items-center gap-2 justify-center mx-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300">
<i className="w-5 h-5" data-lucide="star"></i> Activate Tracker
      </button>
</div>

<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent dark:via-slate-600/60">
</div></section>

<footer className="py-10 px-6 md:px-12 text-center text-sm textlate-500 fade-up">
    © 2023 LongIsland.live  · 
    <a className="hover:text-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" href="#">Privacy</a>
     · 
    &lt; href="#" className="hover:text-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"&gt;Terms

</footer>
    </>
  );
}
