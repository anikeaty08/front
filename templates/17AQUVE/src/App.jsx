import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();

    // Mobile nav
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    menuBtn.addEventListener('click', () => {
      mobileNav.style.maxHeight = mobileNav.style.maxHeight ? null : mobileNav.scrollHeight + 'px';
    });

    // Set year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Fade-in on load
    window.addEventListener('load', () => {
      document.querySelectorAll('#hero h1, #hero p, #hero div').forEach(el => {
        el.classList.remove('opacity-0', 'translate-y-6');
      });
    });

    /* Interactive hero background using particles.js */
    particlesJS('heroCanvas', {
      particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: ['#A3C9FF','#C8F7C5','#FFF4C2','#E4D0FF','#FFC9C9'] },
        opacity: { value: 0.5, random: true },
        size: { value: 6, random: true },
        line_linked: { enable: false },
        move: { speed: 2, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' }
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full backdrop-blur bg-white/80 sticky top-0 z-30">
<div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
<a className="flex items-center gap-2" href="#">
<span className="inline-block w-3 h-3 rounded-full bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300"></span>
<span className="text-lg tracking-tight font-semibold text-slate-800">E-bureauet</span>
</a>
<nav className="hidden md:flex gap-8 text-sm">
<a className="hover:text-blue-500 transition-colors" href="#services">Services</a>
<a className="hover:text-blue-500 transition-colors" href="#cases">Cases</a>
<a className="hover:text-blue-500 transition-colors" href="#kontakt">Kontakt</a>
</nav>
<button aria-label="Open menu" className="md:hidden p-2 rounded-md hover:bg-slate-100" id="menuBtn">
<i className="w-6 h-6 text-slate-700" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden max-h-0 overflow-hidden transition-all duration-500 bg-white/90 backdrop-blur" id="mobileNav">
<div className="flex flex-col px-6 pb-4 gap-4 text-sm">
<a className="hover:text-blue-500" href="#services">Services</a>
<a className="hover:text-blue-500" href="#cases">Cases</a>
<a className="hover:text-blue-500" href="#kontakt">Kontakt</a>
</div>
</div>
</header>

<section className="relative isolate overflow-hidden" id="hero">

<div className="absolute inset-0 -z-10" id="heroCanvas"></div>
<div className="max-w-7xl mx-auto pt-28 pb-32 px-6 lg:px-8 text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-800 mb-6 opacity-0 translate-y-6 transition-all duration-700 delay-150">
        Digital vækst med <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Nordisk</span> finesse
      </h1>
<p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 mb-8 opacity-0 translate-y-6 transition-all duration-700 delay-300">
        Vi kombinerer strategi, design og teknologi for at skabe løsninger, der føles ligeså naturlige som skandinavisk minimalisme.
      </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 translate-y-6 transition-all duration-700 delay-500">
<a className="px-6 py-3 rounded-full bg-blue-400/90 text-white hover:bg-blue-500/90 transition-colors shadow-sm ring-1 ring-blue-300/50" href="#kontakt">
          Book et møde
        </a>
<a className="px-6 py-3 rounded-full bg-white text-blue-500 hover:text-blue-600 ring-1 ring-blue-300/40 transition-colors" href="#cases">
          Se vores cases
        </a>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800 mb-4">Vores Services</h2>
<p className="max-w-2xl text-slate-600 mb-12">Et samspil mellem design, udvikling og marketing – skræddersyet til din vækst.</p>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="relative overflow-hidden rounded-xl ring-1 ring-slate-200/70 bg-white p-6 hover:shadow-lg transition-shadow group">
<i className="w-8 h-8 text-blue-400 mb-4" data-lucide="monitor-play"></i>
<h3 className="font-semibold text-lg mb-2">Webdesign &amp; UX</h3>
<p className="text-sm text-slate-600 mb-4">Vi skaber oplevelser, brugerne elsker – og konverterer.</p>
<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></span>
</div>
<div className="relative overflow-hidden rounded-xl ring-1 ring-slate-200/70 bg-white p-6 hover:shadow-lg transition-shadow group">
<i className="w-8 h-8 text-green-400 mb-4" data-lucide="code-2"></i>
<h3 className="font-semibold text-lg mb-2">Webudvikling</h3>
<p className="text-sm text-slate-600 mb-4">Moderne stacks, ydeevne i top og skræddersyede integrationer.</p>
<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-300 to-blue-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></span>
</div>
<div className="relative overflow-hidden rounded-xl ring-1 ring-slate-200/70 bg-white p-6 hover:shadow-lg transition-shadow group">
<i className="w-8 h-8 text-yellow-400 mb-4" data-lucide="bar-chart-3"></i>
<h3 className="font-semibold text-lg mb-2">Performance Marketing</h3>
<p className="text-sm text-slate-600 mb-4">Data-drevne kampagner, der driver ROI og målbare resultater.</p>
<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-300 to-red-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="cases">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800 mb-4">Udvalgte Cases</h2>
<p className="max-w-2xl text-slate-600 mb-12">Se hvordan vi har hjulpet nordiske brands med at løfte deres digitale tilstedeværelse.</p>
<div className="grid gap-10 md:grid-cols-2">

<article className="group">
<div className="overflow-hidden rounded-xl ring-1 ring-slate-200/70">
<img alt="" className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>
</div>
<h3 className="font-semibold text-lg mt-4 mb-1">Skandinavisk E-commerce</h3>
<p className="text-sm text-slate-600">+38% konverteringsrate med nyt designsystem.</p>
</article>
<article className="group">
<div className="overflow-hidden rounded-xl ring-1 ring-slate-200/70">
<img alt="" className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>
</div>
<h3 className="font-semibold text-lg mt-4 mb-1">FinTech Platform</h3>
<p className="text-sm text-slate-600">Fra idé til MVP på 12 uger.</p>
</article>
</div>
</div>
</section>

<section className="py-24" id="kontakt">
<div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800 mb-4">Lad os tage en snak</h2>
<p className="text-slate-600 mb-10">Fortæl os om dine ambitioner, så viser vi vejen.</p>
<form className="grid gap-6 sm:grid-cols-2">
<input className="col-span-2 sm:col-span-1 px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:ring-blue-400 focus:outline-none transition" placeholder="Navn" type="text"/>
<input className="col-span-2 sm:col-span-1 px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:ring-blue-400 focus:outline-none transition" placeholder="Email" type="email"/>
<textarea className="col-span-2 px-4 py-3 rounded-lg ring-1 ring-slate-200 focus:ring-blue-400 focus:outline-none transition" placeholder="Projektbeskrivelse" rows="4"></textarea>
<button className="col-span-2 w-full py-3 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-medium hover:brightness-110 transition" type="submit">Send forespørgsel</button>
</form>
</div>
</section>

<footer className="pt-16 pb-8 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-8 text-sm">
<div>
<p className="font-semibold text-slate-800 mb-1">E-bureauet</p>
<p className="text-slate-600">© <span id="year"></span> Alle rettigheder forbeholdes.</p>
</div>
<div className="flex gap-6">
<a aria-label="LinkedIn" className="hover:text-blue-600 transition" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a aria-label="Instagram" className="hover:text-pink-500 transition" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a aria-label="Mail" className="hover:text-green-600 transition" href="#">
<i className="w-5 h-5" data-lucide="mail"></i>
</a>
</div>
</div>
</footer>



    </>
  );
}
