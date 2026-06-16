import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons({strokeWidth:1.5});
    document.getElementById('year').textContent = new Date().getFullYear();

    /* Section switching */
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('[data-section]');
    function showSection(id){
      sections.forEach(s=>{
        if(s.id===id){
          s.classList.remove('hidden'); s.classList.add('fade-enter');
          requestAnimationFrame(()=>s.classList.add('fade-enter-active'));
          setTimeout(()=>s.classList.remove('fade-enter','fade-enter-active'),500);
          window.scrollTo({top:0,behavior:'smooth'});
        }else s.classList.add('hidden');
      });
    }
    navLinks.forEach(btn=>btn.addEventListener('click',e=>{
      e.preventDefault();
      showSection(btn.dataset.section);
    }));
    showSection('home');

    /* Dummy form handler */
    const form=document.getElementById('contactForm');
    if(form){
      form.addEventListener('submit',e=>{
        e.preventDefault();
        alert('Thank you for reaching out! We will contact you soon.');
        e.target.reset();
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-slate-100">
<nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
<a className="flex items-center space-x-2 font-semibold tracking-tight text-blue-600 text-lg" href="#">
<span>BL</span>
<span className="hidden sm:inline text-slate-900">Blocker Law</span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium">
<button className="nav-link hover:text-blue-600 transition" data-section="home">Home</button>
<button className="nav-link hover:text-blue-600 transition" data-section="attorney">Attorney Profile</button>
<button className="nav-link hover:text-blue-600 transition" data-section="practice">Practice Areas</button>
<button className="nav-link hover:text-blue-600 transition" data-section="contact">Contact Us</button>
<button className="nav-link hover:text-blue-600 transition" data-section="map">Map &amp; Directions</button>
</div>
<button className="md:hidden inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition" data-section="contact">
<i className="w-4 h-4" data-lucide="phone"></i>
</button>
</nav>
</header>

<main>

<section className="section py-24 overflow-hidden" id="home">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">Your Path to Peace of Mind Starts Here</h1>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-blue-600">Blocker Law Works Tirelessly for Your Success</h2>
<p className="text-lg text-slate-700">When you're facing a legal issue, having an experienced attorney in your corner can make all the difference. Serving Ohio clients since 2002, Blocker Law is committed to achieving the outcomes you're seeking. Whether it's divorce, custody, business disputes, or creditor rights, you can rely on our dedication and strategic advocacy to guide you toward a successful and lasting resolution.</p>
<div className="flex gap-4">
<a className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" href="tel:12163609961">
<i className="w-4 h-4 mr-2" data-lucide="phone"></i> 216-360-9961
            </a>
<a className="inline items-center px-6 py-3 rounded-md border border-slate-300 text-slate-800 font-medium hover:border-blue-600 hover:text-blue-600 transition" data-section="contact" href="#">
              Contact us online
              <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<img alt="Law office" className="rounded-lg shadow-lg w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</section>

<section className="section hidden py-24 bg-slate-50" id="attorney">
<div className="max-w-6xl mx-auto px-6 space-y-16">

<div className="text-center space-y-2">
<h2 className="text-4xl font-semibold tracking-tight text-blue-900">Attorney Profile</h2>
<h3 className="text-2xl font-medium tracking-tight text-blue-600">David S. Blocker</h3>
<p className="text-sm text-slate-600">Owner, Blocker Law LLC • Cleveland &amp; Pepper Pike, OH</p>
</div>

<div className="max-w-3xl mx-auto text-lg text-slate-700 leading-8">
<p>David Blocker is a seasoned litigation and family law attorney and founder of Blocker Law LLC...</p>
</div>

</div>
</section>

<section className="section hidden py-24" id="practice">
<div className="max-w-6xl mx-auto px-6 space-y-12">
<h2 className="text-4xl font-semibold tracking-tight text-blue-900">Practice Areas</h2>
        ……
      </div>
</section>

<section className="section hidden py-24 bg-slate-50" id="contact">
<div className="max-w-6xl mx-auto px-6 space-y-12">
<h2 className="text-4xl font-semibold tracking-tight text-blue-900">Contact Us</h2>
        ……
      </div>
</section>

<section className="section hidden py-24" id="map">
<div className="max-w-6xl mx-auto px-6 space-y-12">
<h2 className="text-4xl font-semibold tracking-tight text-blue-900">Map &amp; Directions</h2>
        ……
      </div>
</section>
</main>

<footer className="border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
<div className="flex items-center space-x-2 text-slate-600">
<span className="font-semibold tracking-tight text-blue-600">BL</span>
<span>© <span id="year"></span> Blocker Law LLC.</span>
</div>
<div className="flex items-center space-x-6 text-sm">
<button className="hover:text-blue-600 transition" data-section="contact">Contact Us</button>
<button className="hover:text-blue-600 transition" data-section="map">Map &amp; Directions</button>
<button className="hover:text-blue-600 transition" data-section="attorney">Attorney Profile</button>
</div>
</div>
</footer>




    </>
  );
}
