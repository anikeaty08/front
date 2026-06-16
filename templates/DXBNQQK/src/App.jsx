import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();



    // Replace <i data-lucide> icons if any
    if (window.lucide) { lucide.createIcons(); }

    // Current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Basic mobile nav (toggle menu items on small screens)
    const navBtn = document.querySelector('header button');
    const links = document.querySelector('header ul');
    if (navBtn && links) {
      navBtn.addEventListener('click', () => {
        links.classList.toggle('hidden');
        links.classList.toggle('flex');
        links.classList.toggle('flex-col');
        links.classList.toggle('absolute');
        links.classList.toggle('top-16');
        links.classList.toggle('left-4');
        links.classList.toggle('right-4');
        links.classList.toggle('rounded-2xl');
        links.classList.toggle('bg-white/5');
        links.classList.toggle('border');
        links.classList.toggle('border-white/10');
        links.classList.toggle('p-3');
        links.classList.toggle('backdrop-blur-xl');
        links.classList.toggle('z-50');
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 pointer-events-none">
<div className="absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full bg-lime-400/20 blur-[120px]"></div>
<div className="absolute top-1/3 -right-24 h-[520px] w-[520px] rounded-full bg-purple-500/20 blur-[120px]"></div>
<div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-[120px]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04),_transparent_60%)]"></div>
</div>

<div className="max-w-[1800px] mx-auto px-6 md:px-10">

<header className="sticky top-4 z-50">
<nav className="flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-white/5 px-4 md:px-6 py-3 md:py-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-lime-400/80 to-orange-400/80 flex items-center justify-center ring-1 ring-white/20 shadow-[0_0_40px_rgba(132,204,22,0.35)]">
<span className="text-black font-semibold tracking-tight text-sm">OPM</span>
</div>
<span className="text-slate-100 font-semibold tracking-tight text-lg">OPM Gear</span>
</div>
<ul className="hidden lg:flex items-center gap-2">
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#" title="Link disabled in preview mode"><span className="group-hover:text-lime-300">Home</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#catalog" title="Link disabled in preview mode"><span className="group-hover:text-orange-300">Catalog</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#configure" title="Link disabled in preview mode"><span className="group-hover:text-lime-300">Configure</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#pricing" title="Link disabled in preview mode"><span className="group-hover:text-orange-300">Pricing</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#shipping" title="Link disabled in preview mode"><span className="group-hover:text-lime-300">Shipping</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#about" title="Link disabled in preview mode"><span className="group-hover:text-orange-300">About</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#mission" title="Link disabled in preview mode"><span className="group-hover:text-lime-300">Mission</span></a></li>
<li><a className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition group" href="#contact" title="Link disabled in preview mode"><span className="group-hover:text-orange-300">Contact</span></a></li>
</ul>
<div className="flex items-center gap-2">
<a className="hidden md:inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-lime-400 text-black font-medium shadow-[0_10px_40px_-10px_rgba(132,204,22,0.6)] hover:shadow-[0_12px_48px_-10px_rgba(132,204,22,0.8)] hover:-translate-y-0.5 transition will-change-transform" href="#configure" title="Link disabled in preview mode">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="tracking-tight">Start Customizing</span>
</a>
<button className="inline-flex lg:hidden items-center justify-center rounded-xl px-3 py-2 bg-white/5 border border-white/10 hover:border-lime-300/30 hover:text-lime-300 transition">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</nav>
</header>

<section className="relative pt-20 md:pt-28" id="home">
<div className="absolute -z-10 inset-0 pointer-events-none">
<div className="absolute top-16 right-10 h-24 w-24 rounded-full bg-lime-400/30 blur-2xl animate-[floatY_8s_ease-in-out_infinite]"></div>
<div className="absolute bottom-8 left-16 h-28 w-28 rounded-full bg-purple-500/30 blur-2xl animate-[floatY_10s_ease-in-out_infinite]"></div>
<div className="absolute top-1/3 left-1/3 h-16 w-16 rounded-full bg-orange-500/30 blur-2xl animate-[floatY_12s_ease-in-out_infinite]"></div>
</div>
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="reveal" style={{-Delay: '.05s'}}>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
            Empowering Identity, Fueling Communities
          </h1>
<p className="mt-5 text-slate-300 text-base md:text-lg max-w-2xl">
            OPM Gear lets schools, teams, and creators design &amp; sell custom caps while fundraising. Built for quality, scale, and impact.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-2xl bg-lime-400 text-black font-medium px-6 py-3 shadow-[0_20px_60px_-15px_rgba(132,204,22,0.65)] hover:shadow-[0_24px_70px_-12px_rgba(132,204,22,0.85)] hover:-translate-y-0.5 transition" href="#configure" title="Link disabled in preview mode">
<svg className="lucide lucide-wand-2" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<span className="tracking-tight">Start Customizing</span>
</a>
<a className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-white/5 border border-white/10 text-white hover:border-orange-400/40 hover:text-orange-300 backdrop-blur-xl transition" href="#catalog" title="Link disabled in preview mode">
<svg className="lucide lucide-gallery-vertical-end" data-lucide="gallery-vertical-end" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10"></path><path d="M5 6h14"></path><rect height="12" rx="2" width="18" x="3" y="10"></rect></svg>
<span className="tracking-tight">View Catalog</span>
</a>
</div>
<div className="mt-10 grid grid-cols-3 max-w-md gap-4">
<div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-xl reveal" style={{-Delay: '.15s'}}>
<div className="text-2xl font-semibold text-white">250+</div>
<div className="text-xs text-slate-400">Programs Funded</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-xl reveal" style={{-Delay: '.25s'}}>
<div className="text-2xl font-semibold text-white">100k+</div>
<div className="text-xs text-slate-400">Caps Delivered</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-xl reveal" style={{-Delay: '.35s'}}>
<div className="text-2xl font-semibold text-white">$1.2M</div>
<div className="text-xs text-slate-400">Raised for Youth</div>
</div>
</div>
</div>

<div className="relative reveal-right" style={{-Delay: '.2s'}}>
<div className="relative rounded-3xl bg-white/5 border border-white/10 p-2 md:p-3 backdrop-blur-2xl overflow-hidden">
<div className="aspect-[5/4] rounded-2xl overflow-hidden bg-black/30 ring-1 ring-white/10 relative">
<img alt="Custom cap" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-lime-400/90 flex items-center justify-center ring-1 ring-black10">
<svg className="lucide lucide-badge-check text-black" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-white font-medium leading-tight">Premium Embroidery</div>
<div className="text-xs text-slate-300/80">3D puff, applique, metallic threads</div>
</div>
</div>
<div className="hidden md:flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-3 py-2 backdrop-blur-xl hover:border-lime-400/50 hover:text-lime-300 transition">
<svg className="lucide lucide-scan-line" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
<span className="text-sm">360° Preview</span>
</div>
</div>
</div>
</div>
<div className="absolute -right-3 -bottom-6 w-40 md:w-48 rounded-2xl bg-white/5 border border-white/10 p-3 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(124,58,237,0.5)] animate-[floatY_9s_ease-in-out_infinite]">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-purple-500/30 ring-1 ring-purple-400/40 flex items-center justify-center">
<svg className="lucide lucide-palette" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="text-sm font-medium">Fabrics &amp; Colors</div>
</div>
<div className="mt-2 text-xs text-slate-400">Wool blends, performance mesh, eco cotton.</div>
</div>
</div>
</div>
</section>

<section className="mt-24" id="mission">
<div className="reveal" style={{-Delay: '.05s'}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Mission, Vision &amp; Impact</h2>
<p className="mt-2 text-slate-300 max-w-2xl">We craft custom headwear that amplifies identity and powers community causes.</p>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-4">

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal-left" style={{-Delay: '.05s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<svg className="lucide lucide-flag" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
</div>
<div className="font-medium text-white">Mission</div>
</div>
<p className="mt-3 text-slate-300 text-sm leading-relaxed">
            Empower teams, schools, and creators with premium headwear that funds their goals and unites their community.
          </p>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal" style={{-Delay: '.15s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-orange-400/30 ring-1 ring-orange-300/40 flex items-center justify-center">
<svg className="lucide lucide-radar" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
</div>
<div className="font-medium text-white">Vision</div>
</div>
<p className="mt-3 text-slate-300 text-sm leading-relaxed">
            A world where every cap tells a story—and every story funds opportunity for the next generation.
          </p>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal-right" style={{-Delay: '.25s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-purple-500/30 ring-1 ring-purple-400/40 flex items-center justify-center">
<svg className="lucide lucide-heart-handshake" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<div className="font-medium text-white">Impact</div>
</div>
<p className="mt-3 text-slate-300 text-sm leading-relaxed">
            Every order fuels youth programs—equipment, travel, scholarships—measured and reported transparently.
          </p>
</div>
</div>
</section>

<section className="mt-24" id="catalog">
<div className="reveal" style={{-Delay: '.05s'}}>
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Product Showcase</h2>
<p className="mt-2 text-slate-300">Explore premium silhouettes, fabrics, and finishes. Smooth auto-scroll, hover to pause.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm rounded-xl bg-white/5 border border-white/10 px-3 py-2 hover:border-lime-400/40 hover:text-lime-300 transition" href="#catalog" title="Link disabled in preview mode">
<svg className="lucide lucide-grid-2x2-check" data-lucide="grid-2x2-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"></path><path d="m16 19 2 2 4-4"></path></svg> Full Catalog
          </a>
</div>
</div>
<div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl relative">
<div className="carousel-track group">
<div className="flex gap-4 px-4 py-6">
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-lime-400/50 hover:shadow-[0_20px_60px_-20px_rgba(132,204,22,0.6)] transition will-change-transform group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 1" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-white font-medium">Classic Snapback</p>
<span className="text-xs text-lime-300">New</span>
</div>
<p className="text-xs text-slate-400 mt-1">Flat brim, 6-panel, puff embroidery.</p>
</div>
</div>
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-orange-400/50 hover:shadow-[0_20px_60px_-20px_rgba(251,146,60,0.6)] transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 2" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-white font-medium">Vintage Dad Hat</p>
<span className="text-xs text-orange-300">Hot</span>
</div>
<p className="text-xs text-slate-400 mt-1">Washed cotton, low profile.</p>
</div>
</div>
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-purple-400/50 hover:shadow-[0_20px_60px_-20px_rgba(168,85,247,0.6)] transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 3" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-white font-medium">Performance Trucker</p>
<span className="text-xs text-purple-300">Pro</span>
</div>
<p className="text-xs text-slate-400 mt-1">Moisture-wicking mesh, curved brim.</p>
</div>
</div>
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-lime-400/50 hover:shadow-[0_20px_60px_-20px_rgba(132,204,22,0.6)] transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 4" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-white font-medium">Wool Flat Cap</p>
<span className="text-xs text-lime-300">Eco</span>
</div>
<p className="text-xs text-slate-400 mt-1">Recycled blend options.</p>
</div>
</div>
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-orange-400/50 hover:shadow-[0_20px_60px_-20px_rgba(251,146,60,0.6)] transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 5" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-white font-medium">5-Panel Camper</p>
<span className="text-xs text-orange-300">Fresh</span>
</div>
<p className="text-xs text-slate-400 mt-1">Lightweight nylon, reflective label.</p>
</div>
</div>
</div>
<div className="flex gap-4 px-4 py-6">
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-lime-400/50 transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 1" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4"><p className="text-white font-medium">Classic Snapback</p><p className="text-xs text-slate-400 mt-1">Flat brim, 6-panel, puff embroidery.</p></div>
</div>
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-orange-400/50 transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 2" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-4"><p className="text-white font-medium">Vintage Dad Hat</p><p className="text-xs text-slate-400 mt-1">Washed cotton, low profile.</p></div>
</div>
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-purple-400/50 transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 3" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4"><p className="text-white font-medium">Performance Trucker</p><p className="text-xs text-slate-400 mt-1">Moisture-wicking mesh, curved brim.</p></div>
</div>
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-lime-400/50 transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 4" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4"><p className="text-white font-medium">Wool Flat Cap</p><p className="text-xs text-slate-400 mt-1">Recycled blend options.</p></div>
</div>
<div className="w-[260px] md:w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-orange-400/50 transition group/item">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Cap 5" className="h-full w-full object-cover group-hover/item:scale-[1.06] transition duration-500" src="https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4"><p className="text-white font-medium">5-Panel Camper</p><p className="text-xs text-slate-400 mt-1">Lightweight nylon, reflective label.</p></div>
</div>
</div>
</div>
<div className="absolute inset-0 group hover:[&amp;_.carousel-track]:!animation-play-state-paused"></div>
</div>
</section>

<section className="mt-24" id="configure">
<div className="reveal" style={{-Delay: '.05s'}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Customization Features</h2>
<p className="mt-2 text-slate-300 max-w-2xl">Choose embroidery styles, patches, fabrics, closures, and accessories to make it yours.</p>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-[0_20px_60px_-20px_rgba(132,204,22,0.6)] transition reveal" style={{-Delay: '.05s'}}>
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<i data-lucide="needle"></i>
</div>
<div className="mt-4 font-medium text-white">Embroidery</div>
<p className="text-sm text-slate-300 mt-1">Flat, 3D puff, metallic, applique.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_20px_60px_-20px_rgba(251,146,60,0.6)] transition reveal" style={{-Delay: '.1s'}}>
<div className="h-10 w-10 rounded-lg bg-orange-400/30 ring-1 ring-orange-300/40 flex items-center justify-center">
<svg className="lucide lucide-badge" data-lucide="badge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path></svg>
</div>
<div className="mt-4 font-medium text-white">Patches</div>
<p className="text-sm text-slate-300 mt-1">Woven, leather, PVC, chenille.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_20px_60px_-20px_rgba(168,85,247,0.6)] transition reveal" style={{-Delay: '.15s'}}>
<div className="h-10 w-10 rounded-lg bg-purple-500/30 ring-1 ring-purple-400/40 flex items-center justify-center">
<svg className="lucide lucide-layers" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div className="mt-4 font-medium text-white">Fabrics</div>
<p className="text-sm text-slate-300 mt-1">Twill, wool, nylon, eco cotton.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-[0_20px_60px_-20px_rgba(132,204,22,0.6)] transition reveal" style={{-Delay: '.2s'}}>
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<svg className="lucide lucide-link" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
<div className="mt-4 font-medium text-white">Closures</div>
<p className="text-sm text-slate-300 mt-1">Snapback, strapback, flex-fit.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_20px_60px_-20px_rgba(251,146,60,0.6)] transition reveal" style={{-Delay: '.25s'}}>
<div className="h-10 w-10 rounded-lg bg-orange-400/30 ring-1 ring-orange-300/40 flex items-center justify-center">
<svg className="lucide lucide-sparkle" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<div className="mt-4 font-medium text-white">Accessories</div>
<p className="text-sm text-slate-300 mt-1">Brim ropes, contrast stitching, labels.</p>
</div>
</div>
</section>

<section className="mt-24" id="pricing">
<div className="reveal" style={{-Delay: '.05s'}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Pricing &amp; Volume Discounts</h2>
<p className="mt-2 text-slate-300 max-w-2xl">Per-unit cost drops as you scale. Transparent, no surprises.</p>
</div>
<div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-[0_20px_60px_-20px_rgba(132,204,22,0.6)] transition reveal" style={{-Delay: '.05s'}}>
<div className="flex items-center justify-between">
<div className="font-medium text-white">48 Units</div>
<span className="text-xs px-2 py-1 rounded-lg bg-lime-400/20 text-lime-300 border border-lime-300/40">Save 10%</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-slate-400 line-through">$30</span>
<span className="text-3xl font-semibold text-white">$27</span>
<span className="text-slate-400 text-xs">per unit</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><svg className="lucide text-lime-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> 48 units</li>
<li className="flex items-center gap-2"><svg className="lucide text-lime-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> 1 logo position</li>
<li className="flex items-center gap-2"><svg className="lucide text-lime-300" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg> Standard shipping</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 rounded-xl bg-lime-400 text-black px-4 py-2 font-medium hover:-translate-y-0.5 transition" href="#configure" title="Link disabled in preview mode">
<svg className="lucide" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> Select
          </a>
</div>

<div className="hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_20px_60px_-20px_rgba(251,146,60,0.6)] transition reveal bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl" style={{-Delay: '.1s'}}>
<div className="flex items-center justify-between">
<div className="font-medium text-white">144 Units</div>
<span className="text-xs px-2 py-1 rounded-lg bg-orange-400/20 text-orange-300 border border-orange-300/40">Save 18%</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-slate-400 line-through">$26</span>
<span className="text-3xl font-semibold text-white">$22</span>
<span className="text-slate-400 text-xs">per unit</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><svg className="lucide text-orange-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> 144 units</li>
<li className="flex items-center gap-2"><svg className="lucide text-orange-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> 2 logo positions</li>
<li className="flex items-center gap-2"><svg className="lucide text-orange-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Priority production</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white px-4 py-2 font-medium hover:border-orange-400/40 hover:text-orange-300 transition" href="#configure" title="Link disabled in preview mode">
<svg className="lucide" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> Select
          </a>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_20px_60px_-20px_rgba(168,85,247,0.6)] transition reveal" style={{-Delay: '.15s'}}>
<div className="flex items-center justify-between">
<div className="font-medium text-white">576 Units</div>
<span className="text-xs px-2 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-300/40">Save 23%</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-slate-400 line-through">$24</span>
<span className="text-3xl font-semibold text-white">$18.50</span>
<span className="text-slate-400 text-xs">per unit</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><svg className="lucide text-purple-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> 576 units</li>
<li className="flex items-center gap-2"><svg className="lucide text-purple-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> 3 logo positions</li>
<li className="flex items-center gap-2"><svg className="lucide text-purple-300" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg> Rush options</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white px-4 py-2 font-medium hover:border-purple-400/40 hover:text-purple-300 transition" href="#configure" title="Link disabled in preview mode">
<svg className="lucide" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1....2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> Select
          </a>
</div>

<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:-translate-y-1 hover:border-cyan400/50 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.6)] transition reveal" style={{-Delay: '.2s'}}>
<div className="flex items-center justify-between">
<div className="font-medium text-white">1008 Units</div>
<span className="text-xs px-2 py-1 rounded-lg bg-cyan-400/20 text-cyan-300 border border-cyan-300/40">Save 28%</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-slate-400 line-through">$22</span>
<span className="text-3xl font-semibold text-white">$15.75</span>
<span className="text-slate-400 text-xs">per unit</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2">
<svg className="text-cyan-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              1008 units
            </li>
<li className="flex items-center gap-2">
<svg className="text-cyan-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              4 logo positions
            </li>
<li className="flex items-center gap-2">
<svg className="text-cyan-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v4H3z"></path><path d="M16 21H8a2 2 0 0 1-2-2V7h12v12a2 2 0 0 1-2 2Z"></path><path d="M10 11h4"></path><path d="M10 15h4"></path></svg>
              Branded retail tags
            </li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white px-4 py-2 font-medium hover:border-cyan-400/40 hover:text-cyan-300 transition" href="#configure" title="Link disabled in preview mode">
<svg className="lucide" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> Select
          </a>
</div>

<div className="rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-6 backdrop-blur-xl hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_24px_80px_-20px_rgba(16,185,129,0.65)] transition reveal ring-1 ring-white/5" style={{-Delay: '.25s'}}>
<div className="flex items-center justify-between">
<div className="font-medium text-white">2016 Units</div>
<span className="text-xs px-2 py-1 rounded-lg bg-emerald-400/20 text-emerald-300 border border-emerald-300/40">Best value • 35% off</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-slate-400 line-through">$21</span>
<span className="text-3xl font-semibold text-white">$13.50</span>
<span className="text-slate-400 text-xs">per unit</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2">
<svg className="text-emerald-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              2016 units
            </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Up to 5 logo positions
            </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h6l2 3 2-6 2 3h6"></path></svg>
              Dedicated account manager
            </li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-400 text-black px-4 py-2 font-medium hover:-translate-y-0.5 transition shadow-[0_16px_60px_-20px_rgba(16,185,129,0.7)]" href="#configure" title="Link disabled in preview mode">
<svg className="lucide" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> Select
          </a>
</div>
</div>
<p="mt-4 text-slate-400"="" text-xs="">Note: Pricing shown for standard embroidery and common fabrics. Specialty materials and add-ons may adjust final cost. Request a quote for a precise estimate.
</p="mt-4></section>

<section className="mt-24" id="how">
<div className="reveal" style={{-Delay: '.05s'}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">How It Works</h2>
<p className="mt-2 text-slate-300 max-w-2xl">Fast, simple, fundraising-ready. Launch in days, not months.</p>
</div>
<div className="mt-6 grid md:grid-cols-4 sm:grid-cols-2 gap-4">
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal hover:-translate-y-1 hover:border-lime-400/50 transition" style={{-Delay: '.05s'}}>
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18"></path><path d="M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"></path><path d="m7 7 5-5 5 5"></path></svg>
</div>
<div className="mt-4 text-white font-medium">1) Upload or Design</div>
<p className="text-sm text-slate-300 mt-1">Share your logo or sketch in our configurator. We’ll proof it same day.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal hover:-translate-y-1 hover:border-orange-400/50 transition" style={{-Delay: '.1s'}}>
<div className="h-10 w-10 rounded-lg bg-orange-400/30 ring-1 ring-orange-300/40 flex items-center justify-center">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16"></path><path d="M10 6v14"></path><path d="M14 6v14"></path><path d="M2 20h20"></path></svg>
</div>
<div className="mt-4 text-white font-medium">2) Pick Materials</div>
<p className="text-sm text-slate-300 mt-1">Choose silhouettes, fabrics, and finishes. We guide best practices.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal hover:-translate-y-1 hover:border-purple-400/50 transition" style={{-Delay: '.15s'}}>
<div className="h-10 w-10 rounded-lg bg-purple-500/30 ring-1 ring-purple-400/40 flex items-center justify-center">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m3 7 9 6 9-6"></path><path d="M21 10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8"></path></svg>
</div>
<div className="mt-4 text-white font-medium">3) Approve &amp; Launch</div>
<p className="text-sm text-slate-300 mt-1">Approve your digital sample, open orders, and share your storefront link.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal hover:-translate-y-1 hover:border-lime-400/50 transition" style={{-Delay: '.2s'}}>
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m21 15-5-5L5 21"></path><path d="M5 11V5h6"></path></svg>
</div>
<div className="mt-4 text-white font-medium">4) Produce &amp; Deliver</div>
<p className="text-sm text-slate-300 mt-1">We produce, pack by order, and ship. Funds paid out automatically.</p>
</div>
</div>
</section>

<section className="mt-24" id="impact">
<div className="grid md:grid-cols-3 gap-4">
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal hover:border-lime-400/50 transition" style={{-Delay: '.05s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="text-white font-medium">Every Cap Sold</div>
</div>
<p className="mt-3 text-slate-300 text-sm">Returns $5–$8 back to your program. Track earnings in real time.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal hover:border-orange-400/50 transition" style={{-Delay: '.1s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-orange-400/30 ring-1 ring-orange-300/40 flex items-center justify-center">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v6H3z"></path><path d="M3 9v12h18V9"></path><path d="M3 13h18"></path></svg>
</div>
<div className="text-white font-medium">No Upfront Costs</div>
</div>
<p className="mt-3 text-slate-300 text-sm">We handle production, storefront, and fulfillment. You focus on sales.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal hover:border-purple-400/50 transition" style={{-Delay: '.15s'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-purple-500/30 ring-1 ring-purple-400/40 flex items-center justify-center">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4"></path><path d="M10 11H4"></path><path d="M20 15H4"></path><path d="M10 19H4"></path></svg>
</div>
<div className="text-white font-medium">Transparent Reports</div>
</div>
<p className="mt-3 text-slate-300 text-sm">Impact summaries show total raised, orders, and payouts by campaign.</p>
</div>
</div>
</section>

<section className="mt-24" id="shipping">
<div className="reveal" style={{-Delay: '.05s'}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Shipping &amp; Timelines</h2>
<p className="mt-2 text-slate-300 max-w-2xl">Reliable production windows with options for rush and split shipments.</p>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-4">
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal hover:border-lime-400/50 transition" style={{-Delay: '.05s'}}>
<div className="text-white font-medium">Standard Production</div>
<p className="text-sm text-slate-300 mt-2">3–4 weeks from approval. Ground shipping included in pricing tiers.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal hover:border-orange-400/50 transition" style={{-Delay: '.1s'}}>
<div className="text-white font-medium">Rush Options</div>
<p className="text-sm text-slate-300 mt-2">As fast as 10–14 days. Subject to material availability and queue.</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl reveal hover:border-purple-400/50 transition" style={{-Delay: '.15s'}}>
<div className="text-white font-medium">Split Deliveries</div>
<p className="text-sm text-slate-300 mt-2">Ship to multiple locations by roster. Individual bagging and labeling available.</p>
</div>
</div>
<div className="mt-4 text-xs text-slate-400">International shipping available. Duties/taxes billed separately where applicable.</div>
</section>

<section className="mt-24" id="about">
<div className="reveal" style={{-Delay: '.05s'}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">About OPM Gear</h2>
<p className="mt-2 text-slate-300 max-w-3xl">We’re a team of makers and former coaches who believe merchandise can both represent identity and fund opportunity. From design to doorstep, we obsess over details so your community wears the story proudly.</p>
</div>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl">
<div className="text-2xl font-semibold text-white">10+ yrs</div>
<div className="text-xs text-slate-400">Headwear expertise</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl">
<div className="text-2xl font-semibold text-white">95%</div>
<div className="text-xs text-slate-400">On-time delivery</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl">
<div className="text-2xl font-semibold text-white">4.9/5</div>
<div className="text-xs text-slate-400">Average rating</div>
</div>
</div>
</section>

<section className="mt-24" id="voices">
<div className="reveal" style={{-Delay: '.05s'}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Community Voices</h2>
<p className="mt-2 text-slate-300 max-w-2xl">Real stories from programs raising funds and pride with OPM Gear.</p>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-4">
<figure className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
<blockquote className="text-slate-200">Our team trip was fully funded in three weeks. Parents still ask when the next drop is.</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Coach Maria" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-sm text-white font-medium">Coach Maria</div>
<div className="text-xs text-slate-400">Roosevelt Softball</div>
</div>
</figcaption>
</figure>
<figure className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
<blockquote className="text-slate-200">Quality is top tier. The 3D puff is insane and the fit rivals any retail brand we own.</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Jamal R." className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-medium">Jamal R.</div>
<div className="text text-slate-400">Parent &amp; Booster Lead</div>
</div>
</figcaption>
</figure>
<figure className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
<blockquote className="text-slate-200">OPM handled the entire storefront and shipping. We just shared the link and watched support pour in.</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Principal Chen" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-medium">Principal Chen</div>
<div className="text-xs text-slate-400">Eastview High</div>
</div>
</figcaption>
</figure>
</div>
</section>

<section className="mt-24 mb-16" id="contact">
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div className="reveal" style={{-Delay: '.05s'}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Let’s build your cap</h2>
<p className="mt-2 text-slate-300">Tell us about your program and timeline—we’ll reply within one business day.</p>
<form className="mt-6 space-y-4 rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
<div className="grid sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-xs text-slate-400">Name</span>
<input className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lime-400/40" placeholder="Your name" type="text"/>
</label>
<label className="block">
<span className="text-xs text-slate-400">Email</span>
<input className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lime-400/40" placeholder="you@example.com" type="email"/>
</label>
</div>
<label className="block">
<span className="text-xs text-slate-400">Organization</span>
<input className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lime-400/40" placeholder="Team, school, or group" type="text"/>
</label>
<div className="grid sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-xs text-slate-400">Estimated Quantity</span>
<input className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lime-400/40" placeholder="e.g. 144" type="number"/>
</label>
<label className="block">
<span className="text-xs text-slate-400">Timeline</span>
<select className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-lime-400/40">
<option className="bg-[#0a1029]">Flexible (4–6 weeks)</option>
<option className="bg-[#0a1029]">Standard (3–4 weeks)</option>
<option className="bg-[#0a1029]">Rush (10–14 days)</option>
</select>
</label>
</div>
<label className="block">
<span className="text-xs text-slate-400">Message</span>
<textarea className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lime-400/40" placeholder="Share goals, budget, or links to your logo." rows="4"></textarea>
</label>
<button className="inline-flex items-center gap-2 rounded-xl bg-lime-400 text-black px-4 py-2 font-medium hover:-translate-y-0.5 transition shadow-[0_16px_60px_-20px_rgba(132,204,22,0.7)]" type="submit">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 18 9-18 9V3z"></path><path d="M6 15l8-3-8-3"></path></svg>
              Send inquiry
            </button>
</form>
</div>
<aside className="reveal" style={{-Delay: '.15s'}}>
<div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
<div className="text-white font-medium">Contact</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 12 19a19.8 19.8 0 0 1-7.82 2.95A2 2 0 0 1 2 19.92v-3"></path><path d="M7 9a5 5 0 0 1 10 0v7H7z"></path></svg>
                support@opmgear.com
              </li>
<li className="flex items-center gap-2">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4"></path><path d="M2 12h4"></path><path d="M12 2v4"></path><path d="M12 18v4"></path><circle cx="12" cy="12" r="7"></circle></svg>
                Mon–Fri, 9am–5pm PT
              </li>
</ul>
<div className="mt-6 grid grid-cols-2 gap-3">
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<div className="text-xs text-slate-400">Location</div>
<div className="text-sm text-white mt-1">Seattle, WA</div>
</div>
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<div className="text-xs text-slate-400">Turnaround</div>
<div className="text-sm text-white mt-1">3–4 weeks avg.</div>
</div>
</div>
<div className="mt-6 rounded-xl bg-gradient-to-r from-lime-400/20 to-orange-400/20 border border-white/10 p-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-lime-400/30 ring-1 ring-lime-300/40 flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m17 7-5-5-5 5"></path></svg>
</div>
<div>
<div className="text-sm text-white font-medium">Need a rush?</div>
<p className="text-xs text-slate-300">Ask about 10–14 day programs and available fabrics.</p>
</div>
</div>
</div>
</div>
</aside>
</div>
</section>

<footer className="border-t border-white/10 py-10">
<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-lime-400/80 to-orange-400/80 flex items-center justify-center ring-1 ring-white/20">
<span className="text-black font-semibold tracking-tight text-sm">OPM</span>
</div>
<div>
<div className="text-white font-semibold">OPM Gear</div>
<div className="text-xs text-slate-400">Custom caps for community impact</div>
</div>
</div>
<ul className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
<li><a className="hover:text-white" href="#catalog">Catalog</a></li>
<li><a className="hover:text-white" href="#configure">Configure</a></li>
<li><a className="hover:text-white" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white" href="#shipping">Shipping</a></li>
<li><a className="hover:text-white" href="#about">About</a></li>
<li><a className="hover:text-white" href="#contact">Contact</a></li>
</ul>
</div>
<div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<p>© <span id="year"></span> OPM Gear. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="hover:text-white" href="#">Privacy</a>
<span aria-hidden="true">•</span>
<a className="hover:text-white" href="#">Terms</a>
<span aria-hidden="true">•</span>
<a className="hover:text-white" href="#">Accessibility</a>
</div>
</div>
</footer>
</div>




    </>
  );
}
