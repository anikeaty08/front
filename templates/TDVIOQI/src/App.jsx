import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    import { createIcons, icons } from "https://cdn.jsdelivr.net/npm/lucide@0.259.0/+esm";
    window.addEventListener("DOMContentLoaded", () => createIcons({ icons, nameAttr: "data-lucide" }));
  


    /* Mobile Drawer */
    const openBtn = document.getElementById('open-menu');
    const closeBtn = document.getElementById('close-menu');
    const drawer = document.getElementById('mobile-drawer');
    const toggleDrawer = (show) => drawer.style.transform = show ? 'translateX(0)' : 'translateX(100%)';
    openBtn.addEventListener('click', () => toggleDrawer(true));
    closeBtn.addEventListener('click', () => toggleDrawer(false));
    drawer.addEventListener('click', (e) => e.target === drawer && toggleDrawer(false));

    /* ParticlesJS */
    particlesJS('particles-js', {
      particles: {
        number: { value: 45, density: { enable: true, value_area: 800 } },
        color: { value: ['#2563eb','#3b82f6','#60a5fa'] },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 1.2, direction: 'none', out_mode: 'out' }
      },
      interactivity: { detect_on: 'canvas', events: { onhover: { enable: false } } },
      retina_detect: true
    });

    /* Staggered Animations on View */
    const animatedItems = document.querySelectorAll('.animated');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0','translate-y-6');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    animatedItems.forEach(el => io.observe(el));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 -z-10" id="particles-js"></div>

<header className="relative">

<nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-md grid place-items-center text-white shadow-md mb-0.5">
<i className="w-4 h-4" data-lucide="code"></i>
</div>
<span className="text-lg font-semibold tracking-tight group-hover:text-blue-600 transition-colors">
          Contoso Cloud
        </span>
</a>

<ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
<li><a className="hover:text-blue-600 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Solutions</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Blog</a></li>
</ul>

<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-blue-600/80 px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-white hover:text-blue-700 hover:shadow-[inset_0_0_0_2px] hover:shadow-blue-700 transition-all" href="#contact">
<i className="w-4 h-4" data-lucide="send"></i>
        Get in touch
      </a>

<button className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-300/70 hover:border-slate-500/70" id="open-menu">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</nav>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 pt-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-center order-2 lg:order-1">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 opacity-0 translate-y-6 transition-all duration-700 delay-75 animated">
            Building Scalable <span className="text-blue-600">.NET</span> Solutions on <span className="text-blue-600">Microsoft Azure</span>
</h1>
<p className="mt-6 text-slate-600 leading-relaxed max-w-xl opacity-0 translate-y-6 transition-all duration-700 delay-150 animated">
            We architect, develop and manage enterprise-grade cloud applications leveraging the latest Microsoft technologies. From migration to DevOps automation — your roadmap to the cloud starts here.
          </p>
<div className="mt-8 flex flex-wrap gap-4 opacity-0 translate-y-6 transition-all duration-700 delay-200 animated">
<a className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-700 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="rocket"></i> Start a Project
            </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300/80 px-5 py-3 text-sm font-medium text-slate-700 hover:text-blue-700 hover:border-blue-700 transition-colors" href="#about">
<i className="w-4 h-4" data-lucide="info"></i> Learn more
            </a>
</div>
</div>

<div className="relative order-1 lg:order-2">
<img alt="Azure Cloud" className="rounded-lg shadow-lg ring-1 ring-slate-900/5 object-cover h-80 sm:h-96 md:h-[30rem] w-full opacity-0 translate-y-6 transition-all duration-700 delay-[275ms] animated" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600/10 to-blue-300/5 pointer-events-none"></div>
</div>
</div>
</section>
</header>

<div className="fixed inset-y-0 right-0 w-72 max-w-[80%] bg-white shadow-2xl translate-x-full transition-transform duration-300" id="mobile-drawer">
<div className="px-6 py-6 flex items-center justify-between border-b border-slate-200">
<span className="font-semibold tracking-tight">Menu</span>
<button className="w-8 h-8 grid place-items-center rounded-md border border-slate-300/70 hover:border-slate-500/70" id="close-menu">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<ul className="px-6 py-8 flex flex-col gap-6 text-sm font-medium">
<li><a className="hover:text-blue-600" href="#">Services</a></li>
<li><a className="hover:text-blue-600" href="#">Solutions</a></li>
<li><a className="hover:text-blue-600" href="#">Case Studies</a></li>
<li><a className="hover:text-blue-600" href="#">Blog</a></li>
<li><a className="inline-flex items-center gap-2 mt-4 rounded-md border border-blue-600/80 px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-white hover:text-blue-700 hover:shadow-[inset_0_0_0_2px] hover:shadow-blue-700 transition-all" href="#contact">
<i className="w-4 h-4" data-lucide="send"></i> Get in touch
      </a></li>
</ul>
</div>

<hr className="border-slate-200"/>



    </>
  );
}
