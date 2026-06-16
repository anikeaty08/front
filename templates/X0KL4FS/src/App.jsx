import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile nav
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('scale-y-0');
    });

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-6', 'scale-95');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    reveals.forEach(el => io.observe(el));

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Lucide icons
    lucide.createIcons();

    // Chart.js for skills
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['React', 'Vue', 'Three.js', 'Motion', 'Design', 'Node'],
        datasets: [{
          label: 'Proficiency',
          data: [90, 75, 65, 95, 80, 70],
          backgroundColor: 'rgba(99,102,241,0.2)',
          borderColor: 'rgb(99,102,241)',
          borderWidth: 2,
          pointBackgroundColor: 'rgb(99,102,241)'
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            angleLines: { color: '#303030' },
            grid: { color: '#303030' },
            pointLabels: { color: '#e5e5e5', font: { size: 12 } },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: { display: false }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight hover:text-indigo-400 transition-colors" href="#">LOOK AT ME</a>
<nav className="hidden md:flex gap-8 text-sm">
<a className="hover:text-indigo-400 transition-colors" href="#projects">Projects</a>
<a className="hover:text-indigo-400 transition-colors" href="#about">About</a>
<a className="hover:text-indigo-400 transition-colors" href="#skills">Skills</a>
<a className="hover:text-indigo-400 transition-colors" href="#contact">Contact</a>
</nav>
<button aria-label="toggle navigation" className="md:hidden" id="nav-toggle">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden origin-top scale-y-0 overflow-hidden transition-transform" id="mobile-menu">
<div className="px-6 pb-6 pt-2 flex flex-col gap-4 text-sm">
<a className="hover:text-indigo-400" href="#projects">Projects</a>
<a className="hover:text-indigo-400" href="#about">About</a>
<a className="hover:text-indigo-400" href="#skills">Skills</a>
<a className="hover:text-indigo-400" href="#contact">Contact</a>
</div>
</div>
<div className="border-t border-neutral-800/60"></div>
</header>

<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
<h1 className="text-[9vw] md:text-8xl xl:text-9xl font-semibold tracking-tight leading-[0.9] pointer-events-none select-none opacity-5 absolute">
      LOOK AT ME
    </h1>
<div className="relative z-10 max-w-2xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 opacity-0 translate-y-6 transition duration-1000 [transition-delay:200ms] reveal">
        I craft delightful experiences for the web.
      </h2>
<p className="text-neutral-400 mb-8 opacity-0 translate-y-6 transition duration-1000 [transition-delay:400ms] reveal">
        Front-end engineer &amp; interaction designer living at the intersection of creativity and code.
      </p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-indigo-600/90 hover:bg-indigo-500 transition-colors text-sm font-medium opacity-0 translate-y-6 duration-1000 [transition-delay:600ms] reveal" href="#projects">
<span>See my work</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="projects">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">Selected Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<a className="group border border-neutral-800/60 rounded-xl overflow-hidden flex flex-col hover:border-indigo-600/60 transition-colors opacity-0 translate-y-6 duration-700 reveal" href="#">
<div className="relative">
<img alt="" className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/30 to-transparent"></div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold mb-2">Motion Design System</h3>
<p className="text-neutral-400 text-sm flex-1">Reusable animation primitives powering a news platform with 2M+ daily users.</p>
<span className="mt-4 text-indigo-400 text-xs flex items-center gap-1">View Project <i className="w-3 h-3" data-lucide="arrow-up-right"></i></span>
</div>
</a>
<a className="group border border-neutral-800/60 rounded-xl overflow-hidden flex flex-col hover:border-indigo-600/60 transition-colors opacity-0 translate-y-6 duration-700 [transition-delay:100ms] reveal" href="#">
<div className="relative">
<img alt="" className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/30 to-transparent"></div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold mb-2">E-commerce SaaS Dashboard</h3>
<p className="text-neutral-400 text-sm flex-1">Rich data-visualisation &amp; real-time collaboration for indie sellers.</p>
<span className="mt-4 text-indigo-400 text-xs flex items-center gap-1">View Project <i className="w-3 h-3" data-lucide="arrow-up-right"></i></span>
</div>
</a>
<a className="group border border-neutral-800/60 rounded-xl overflow-hidden flex flex-col hover:border-indigo-600/60 transition-colors opacity-0 translate-y-6 duration-700 [transition-delay:200ms] reveal" href="#">
<div className="relative">
<img alt="" className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/30 to-transparent"></div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold mb-2">AR Furniture Preview</h3>
<p className="text-neutral-400 text-sm flex-1">Placing products into living rooms worldwide with WebXR &amp; three.js.</p>
<span className="mt-4 text-indigo-400 text-xs flex items-center gap-1">View Project <i className="w-3 h-3" data-lucide="arrow-up-right"></i></span>
</div>
</a>
<a className="group border border-neutral-800/60 rounded-xl overflow-hidden flex flex-col hover:border-indigo-600/60 transition-colors opacity-0 translate-y-6 duration-700 [transition-delay:300ms] reveal" href="#">
<div className="relative">
<img alt="" className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/30 to-transparent"></div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold mb-2">Generative Art Tool</h3>
<p className="text-neutral-400 text-sm flex-1">CLI &amp; GUI for artists to create infinite, algorithmically-generated pieces.</p>
<span className="mt-4 text-indigo-400 text-xs flex items-center gap-1">View Project <i className="w-3 h-3" data-lucide="arrow-up-right"></i></span>
</div>
</a>
</div>
</section>

<section className="bg-neutral-900/40 border-y border-neutral-800/60" id="about">
<div className="max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
<img alt="Headshot" className="w-48 h-48 rounded-full object-cover shadow-lg opacity-0 scale-95 reveal duration-700" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Nice to meet you</h2>
<p className="text-neutral-400 max-w-2xl leading-loose">
          I’m Alex, a developer and designer blending motion, code and storytelling. Over the past 6 years
          I’ve helped early-stage startups and global brands ship products that feel alive. When I’m not
          coding, you’ll find me exploring generative art or cycling up steep hills.
        </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="skills">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">Skill Snapshot</h2>
<div className="max-w-xl">
<div>
<canvas className="w-full h-auto" id="skillsChart"></canvas>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="contact">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Let’s Work Together</h2>
<p className="text-neutral-400 mb-8 max-w-2xl">
      Got an idea or an exciting opportunity? My inbox is always open. Drop a message and let’s make something incredible.
    </p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-neutral-800/60 hover:border-indigo-600/60 transition-colors text-sm font-medium" href="mailto:hello@example.com">
<i className="w-4 h-4" data-lucide="mail"></i>
<span>hello@example.com</span>
</a>
<div className="mt-12 flex gap-6 text-neutral-400">
<a className="hover:text-indigo-400" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="hover:text-indigo-400" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="hover:text-indigo-400" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</section>

<footer className="border-t border-neutral-800/60 py-12 text-center text-sm text-neutral-500">
    © <span id="year"></span> Alex — Crafted with meticulous care.
  </footer>


    </>
  );
}
