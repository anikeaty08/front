import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      document.write(new Date().getFullYear())


    lucide.createIcons();

    // Mobile menu toggle
    document.getElementById('menuBtn').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.toggle('hidden');
    });

    // Intersection Observer for fade/slide in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.remove('opacity-0','translate-y-4');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed inset-x-0 top-0 bg-white/70 backdrop-blur-md shadow-sm ring-1 ring-gray-200 z-50">
<nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 md:py-5">
<a className="text-xl font-semibold tracking-tight font-geist" href="#">Geist Agency</a>
<ul className="hidden md:flex space-x-8 text-sm font-medium">
<li><a className="hover:text-gray-600 transition-colors" href="#work">Work</a></li>
<li><a className="hover:text-gray-600 transition-colors" href="#about">About</a></li>
<li><a className="hover:text-gray-600 transition-colors" href="#contact">Contact</a></li>
</ul>
<button aria-label="open menu" className="md:hidden" id="menuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>

<div className="md:hidden hidden px-6 pb-6" id="mobileMenu">
<a className="block py-2" href="#work">Work</a>
<a className="block py-2" href="#about">About</a>
<a className="block py-2" href="#contact">Contact</a>
</div>
</header>

<section className="md:pt-40 md:px-0 text-center pt-28 pr-6 pb-24 pl-6 space-y-8" style={{textAlign: 'center'}}>
<h1 className="md:text-6xl transition-all duration-700 text-4xl font-bold tracking-tight font-geist text-center pr-20 pl-20" data-animate="">DESIGNING+BUILDING HIGH-PERFORMING WEBSITES</h1>
<p className="max-w-xl transition-all duration-700 delay-100 text-gray-600 text-center mx-auto" data-animate="">Hello there, I'm Caleb – I craft websites that are user-friendly, beautiful &amp; convert your target audience.</p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-700 delay-150 mx-auto" data-animate="" href="#work">
      Explore my work <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a><img alt="Hero Image" className="max-w-full object-cover rounded-lg mr-auto ml-auto" src="https://images.unsplash.com/photo-1637249805971-59d7b9319df3?w=1080&amp;q=80" style={{height: '500px'}}/>
</section>

<section className="max-w-6xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 transition-all duration-700" data-animate="">Selected Projects</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group rounded-lg overflow-hidden ring-1 ring-gray-200 bg-white shadow-sm transition-all duration-700 delay-100" data-animate="">
<img alt="Project 1" className="aspect-video group-hover:scale-[1.03] transition-transform object-cover" src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=1080&amp;q=80"/>
<div className="p-5">
<h3 className="text-lg font-medium mb-1 group-hover:text-gray-700 transition-colors">Interface Revamp</h3>
<p className="text-sm text-gray-600">Enterprise dashboard redesign focusing on clarity and utility.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden ring-1 ring-gray-200 bg-white shadow-sm transition-all duration-700 delay-150" data-animate="">
<img alt="Project 2" className="aspect-video object-cover group-hover:scale-[1.03] transition-transform" src="https://source.unsplash.com/random/800x600?app"/>
<div className="p-5">
<h3 className="text-lg font-medium mb-1 group-hover:text-gray-700 transition-colors">Mobile Finance App</h3>
<p className="text-sm text-gray-600">Simplified money management with intuitive flows.</p>
</div>
</article>

<article className="group rounded-lg overflow-hidden ring-1 ring-gray-200 bg-white shadow-sm transition-all duration-700 delay-200" data-animate="">
<img alt="Project 3" className="aspect-video object-cover group-hover:scale-[1.03] transition-transform" src="https://source.unsplash.com/random/800x600?branding"/>
<div className="p-5">
<h3 className="text-lg font-medium mb-1 group-hover:text-gray-700 transition-colors">Brand Identity</h3>
<p className="text-sm text-gray-600">Visual language for a tech start-up seeking simplicity.</p>
</div>
</article>
</div>
</section>

<section className="bg-white/60 ring-1 ring-gray-100 py-20" id="about">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
<img alt="Jane Doe portrait" className="rounded-lg object-cover w-full h-80 md:h-[28rem] shadow-sm ring-1 ring-gray-200 opacity-0 translate-y-4 transition-all duration-700" data-animate="" src="https://source.unsplash.com/random/800x800?portrait"/>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 opacity-0 translate-y-4 transition-all duration-700 delay-100" data-animate="">About Me</h2>
<p className="prose prose-gray max-w-prose opacity-0 translate-y-4 transition-all duration-700 delay-150" data-animate="">
          With 7 years in digital design, I blend strategy and aesthetics to produce timeless work.
          My approach is grounded in research and stripped of excess, allowing users to focus
          on what matters. When not designing, you’ll find me exploring photography and modernist
          architecture.
        </p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-20 text-center" id="contact">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 opacity-0 translate-y-4 transition-all duration-700" data-animate="">Let’s collaborate</h2>
<p className="text-gray-600 mb-8 opacity-0 translate-y-4 transition-all duration-700 delay-100" data-animate="">
      Got an interesting project or idea? Reach out and let’s make something great.
    </p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors opacity-0 translate-y-4 duration-700 delay-150" data-animate="" href="mailto:hello@janedoe.com">
       hello@janedoe.com <svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<div className="mt-10 flex justify-center gap-6 opacity-0 translate-y-4 transition-all duration-700 delay-200" data-animate="">
<a aria-label="Twitter" className="text-gray-600 hover:text-gray-800 transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a aria-label="Dribbble" className="text-gray-600 hover:text-gray-800 transition-colors" href="#"><svg className="lucide lucide-dribbble w-5 h-5" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg></a>
<a aria-label="LinkedIn" className="text-gray-600 hover:text-gray-800 transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</section>

<footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-500">
    © 20252025202520252025202520252025202520252025202520252025 Jane Doe. All rights reserved.
  </footer>



    </>
  );
}
