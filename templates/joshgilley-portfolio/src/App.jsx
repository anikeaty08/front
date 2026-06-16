import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
// Custom Palette: Deep Zinc & Indigo
zinc: {
850: '#202022',
900: '#18181b',
950: '#09090b',
},
indigo: {
400: '#818cf8',
500: '#6366f1',
}
}
}
}
}



        const spotlight = document.getElementById('spotlight');
        
        window.addEventListener('mousemove', e => {
            const x = e.clientX;
            const y = e.clientY;
            
            spotlight.style.setProperty('--x', `${x}px`);
            spotlight.style.setProperty('--y', `${y}px`);
        });

        // Intersection Observer for nav highlighting
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        // Reset styles
                        const indicator = link.querySelector('.nav-indicator');
                        const text = link.querySelector('.nav-text');
                        
                        indicator.classList.remove('text-indigo-400', 'translate-x-2');
                        indicator.classList.add('text-transparent');
                        
                        text.classList.remove('text-white');
                        text.classList.add('text-zinc-500');

                        if (link.getAttribute('href').substring(1) === entry.target.id) {
                            link.classList.add('active');
                            // Apply active styles
                            indicator.classList.remove('text-transparent');
                            indicator.classList.add('text-indigo-400', 'translate-x-2');
                            
                            text.classList.remove('text-zinc-500');
                            text.classList.add('text-white');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="spotlight" id="spotlight"></div>
<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
<div className="lg:flex lg:justify-between lg:gap-4">

<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
<div>
<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
<a href="/">Josh Gilley</a>
</h1>
<h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">
                        Software Engineer
                    </h2>
<p className="mt-4 max-w-xs leading-normal text-zinc-400">
                        I build scalable, user-focused applications in health tech and logistics environments. Passionate about creating software that makes a meaningful impact.
                    </p>
<div className="mt-6 flex flex-wrap gap-3 text-xs font-mono text-zinc-500">
<span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-zinc-300">React</span>
<span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-zinc-300">TypeScript</span>
<span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-zinc-300">Node.js</span>
<span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-zinc-300">Python</span>
</div>

<nav aria-label="In-page jump links" className="nav hidden lg:block">
<ul className="mt-16 w-max">
<li>
<a className="group flex items-center py-3 active" href="#about">
<span className="nav-indicator mr-2 flex items-center justify-center text-transparent transition-all group-hover:text-indigo-400 motion-reduce:transition-none">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</span>
<span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white group-focus-visible:text-white transition-colors">About</span>
</a>
</li>
<li>
<a className="group flex items-center py-3" href="#experience">
<span className="nav-indicator mr-2 flex items-center justify-center text-transparent transition-all group-hover:text-indigo-400 motion-reduce:transition-none">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</span>
<span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white group-focus-visible:text-white transition-colors">Experience</span>
</a>
</li>
<li>
<a className="group flex items-center py-3" href="#projects">
<span className="nav-indicator mr-2 flex items-center justify-center text-transparent transition-all group-hover:text-indigo-400 motion-reduce:transition-none">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</span>
<span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white group-focus-visible:text-white transition-colors">Projects</span>
</a>
</li>
<li>
<a className="group flex items-center py-3" href="#mosaic">
<span className="nav-indicator mr-2 flex items-center justify-center text-transparent transition-all group-hover:text-indigo-400 motion-reduce:transition-none">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</span>
<span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white group-focus-visible:text-white transition-colors">Mosaic</span>
</a>
</li>
</ul>
</nav>
</div>

<div>
<div className="mb-6 flex items-center gap-2 text-sm text-zinc-400">
<span className="iconify" data-icon="lucide:map-pin" data-width="16" strokeWidth="1.5"></span>
                        Mount Pleasant, SC
                    </div>
<ul aria-label="Social media" className="ml-1 flex items-center gap-5">
<li>
<a aria-label="GitHub" className="block text-zinc-400 hover:text-white transition-colors" href="https://github.com/joshgilley" rel="noreferrer" target="_blank">
<span className="iconify" data-height="24" data-icon="lucide:github" data-width="24" strokeWidth="1.5"></span>
</a>
</li>
<li>
<a aria-label="LinkedIn" className="block text-zinc-400 hover:text-white transition-colors" href="https://linkedin.com/in/joshgilley" rel="noreferrer" target="_blank">
<span className="iconify" data-height="24" data-icon="lucide:linkedin" data-width="24" strokeWidth="1.5"></span>
</a>
</li>
<li>
<a aria-label="Twitter" className="block text-zinc-400 hover:text-white transition-colors" href="https://twitter.com/joshuagilley" rel="noreferrer" target="_blank">
<span className="iconify" data-height="24" data-icon="lucide:twitter" data-width="24" strokeWidth="1.5"></span>
</a>
</li>
<li>
<a aria-label="Email" className="block text-zinc-400 hover:text-white transition-colors" href="mailto:joshdgilley@gmail.com">
<span className="iconify" data-height="24" data-icon="lucide:mail" data-width="24" strokeWidth="1.5"></span>
</a>
</li>
</ul>
</div>
</header>

<main className="pt-24 lg:w-1/2 lg:py-24" id="content">

<section aria-label="About me" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="about">
<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
<h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">About</h2>
</div>
<div className="text-base text-zinc-400 space-y-4">
<p>
                            I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
                        </p>
<p>
                            Currently, I’m building data-driven applications at <span className="font-medium text-white">Bear Cognition</span>. In the past, I've had the opportunity to develop software across a variety of settings — from large corporations like <span className="font-medium text-white">Charles River Labs</span> to dynamic logistics environments. Whether I'm optimizing database performance or architecting serverless React apps, I love solving hard problems with clean code.
                        </p>
<p>
                            When I'm not at the computer, I'm usually hanging out with my wife and son, trying to catch a wave at the beaches here in <span className="font-medium text-white">Charleston</span>, or playing guitar.
                        </p>
</div>

<div className="mt-12 grid grid-cols-3 gap-6 border-y border-zinc-800 py-8">
<div>
<div className="text-3xl font-bold tracking-tight text-white">5+</div>
<div className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">Years Exp.</div>
</div>
<div>
<div className="text-3xl font-bold tracking-tight text-white">20K+</div>
<div className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">Users Impacted</div>
</div>
<div>
<div className="text-3xl font-bold tracking-tight text-white">$200K+</div>
<div className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">Savings</div>
</div>
</div>
</section>

<section aria-label="Work experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="experience">
<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
<h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">Experience</h2>
</div>
<ol className="group/list">

<li className="mb-12">
<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-zinc-800 lg:group-hover:bg-zinc-900/30"></div>
<header aria-label="August 2024 to Present" className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">Aug 2024 — Present</header>
<div className="z-10 sm:col-span-6">
<h3 className="font-medium leading-snug text-zinc-200">
<div>
<a aria-label="Software Engineer at Bear Cognition" className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-indigo-400 focus-visible:text-indigo-400 group/link text-base" href="#" rel="noreferrer" target="_blank">
<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
<span>Software Engineer · <span className="inline-block">Bear Cognition <span className="iconify inline-block ml-1 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" data-icon="lucide:arrow-up-right" data-width="14" strokeWidth="1.5"></span></span></span>
</a>
</div>
</h3>
<p className="mt-2 text-sm leading-normal">
                                        Delivering data-driven applications with Python (FastAPI), Nuxt, and AWS. Building robust backend services and interactive frontends for complex data analytics platforms.
                                    </p>
<ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Python</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">FastAPI</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Nuxt</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">AWS</div></li>
</ul>
</div>
</div>
</li>

<li className="mb-12">
<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-zinc-800 lg:group-hover:bg-zinc-900/30"></div>
<header aria-label="April 2023 to March 2025" className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">Apr 2023 — Mar 2025</header>
<div className="z-10 sm:col-span-6">
<h3 className="font-medium leading-snug text-zinc-200">
<div>
<a aria-label="Senior Software Developer at Charles River Laboratories" className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-indigo-400 focus-visible:text-indigo-400 group/link text-base" href="#" rel="noreferrer" target="_blank">
<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
<span>Senior Software Developer · <span className="inline-block">Charles River Labs <span className="iconify inline-block ml-1 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" data-icon="lucide:arrow-up-right" data-width="14" strokeWidth="1.5"></span></span></span>
</a>
</div>
</h3>
<p className="mt-2 text-sm leading-normal">
                                        Led end-to-end development of the Data &amp; Findings RESTful API for Apollo, ensuring alignment with functional requirements and delivering real-time access to study data for over 20,000 study directors.
                                    </p>
<ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">RESTful API</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Observer Pattern</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Optimization</div></li>
</ul>
</div>
</div>
</li>

<li className="mb-12">
<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-zinc-800 lg:group-hover:bg-zinc-900/30"></div>
<header aria-label="March 2021 to April 2023" className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">Mar 2021 — Apr 2023</header>
<div className="z-10 sm:col-span-6">
<h3 className="font-medium leading-snug text-zinc-200">
<div>
<a aria-label="Software Developer at Southern Crown Partners" className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-indigo-400 focus-visible:text-indigo-400 group/link text-base" href="#" rel="noreferrer" target="_blank">
<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
<span>Software Developer · <span className="inline-block">Southern Crown Partners <span className="iconify inline-block ml-1 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" data-icon="lucide:arrow-up-right" data-width="14" strokeWidth="1.5"></span></span></span>
</a>
</div>
</h3>
<p className="mt-2 text-sm leading-normal">
                                        Developed a serverless React application to optimize inventory logistics, enabling real-time tracking and reducing annual out-of-code product loss by $200,000, by translating business needs into specific technical requirements.
                                    </p>
<ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">React</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Serverless</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">AWS Lambda</div></li>
</ul>
</div>
</div>
</li>

<li className="mb-12">
<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-zinc-800 lg:group-hover:bg-zinc-900/30"></div>
<header aria-label="September 2020 to January 2021" className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">Sep 2020 — Jan 2021</header>
<div className="z-10 sm:col-span-6">
<h3 className="font-medium leading-snug text-zinc-200">
<div>
<a aria-label="Programmer at ATI" className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-indigo-400 focus-visible:text-indigo-400 group/link text-base" href="#" rel="noreferrer" target="_blank">
<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
<span>Programmer · <span className="inline-block">ATI <span className="iconify inline-block ml-1 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" data-icon="lucide:arrow-up-right" data-width="14" strokeWidth="1.5"></span></span></span>
</a>
</div>
</h3>
<p className="mt-2 text-sm leading-normal">
                                        Optimized PostgreSQL database performance by implementing indexing, significantly improving retrieval speed for street camera metadata.
                                    </p>
<ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">PostgreSQL</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">JavaScript</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Optimization</div></li>
</ul>
</div>
</div>
</li>

<li className="mb-12">
<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-zinc-800 lg:group-hover:bg-zinc-900/30"></div>
<header aria-label="August 2018 to March 2021" className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">Aug 2018 — Mar 2021</header>
<div className="z-10 sm:col-span-6">
<h3 className="font-medium leading-snug text-zinc-200">
<div>
<a aria-label="R&amp;D Software Developer at College of Charleston" className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-indigo-400 focus-visible:text-indigo-400 group/link text-base" href="#" rel="noreferrer" target="_blank">
<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
<span>R&amp;D Software Developer · <span className="inline-block">College of Charleston <span className="iconify inline-block ml-1 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" data-icon="lucide:arrow-up-right" data-width="14" strokeWidth="1.5"></span></span></span>
</a>
</div>
</h3>
<p className="mt-2 text-sm leading-normal">
                                        Developed MARS Mapmaker, a React-based CSV mapping tool that automated the processing of thousands of geochronological data lines by enabling CSV imports, UI-based key-value modifications, and JavaScript file generation.
                                    </p>
<ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">React</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Data Processing</div></li>
</ul>
</div>
</div>
</li>
</ol>
<div className="mt-12">
<a aria-label="View Full Resume" className="inline-flex items-center font-medium leading-tight text-zinc-200 font-semibold group" href="#">
<span className="border-b border-transparent pb-px transition group-hover:border-indigo-400 motion-reduce:transition-none">View Full Résumé</span>
<span className="iconify ml-1 transition-transform group-hover:translate-x-2" data-icon="lucide:arrow-right" data-width="16" strokeWidth="1.5"></span>
</a>
</div>
</section>

<section aria-label="Selected projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="projects">
<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
<h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">Projects</h2>
</div>
<ul className="group/list">

<li className="mb-12">
<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-zinc-800 lg:group-hover:bg-zinc-900/30"></div>
<div className="z-10 sm:order-2 sm:col-span-6">
<h3>
<a aria-label="Apollo Data &amp; Findings API" className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-indigo-400 focus-visible:text-indigo-400 group/link text-base" href="#" rel="noreferrer" target="_blank">
<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
<span>Apollo Data &amp; Findings API <span className="iconify inline-block ml-1 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" data-icon="lucide:arrow-up-right" data-width="14" strokeWidth="1.5"></span></span>
</a>
</h3>
<p className="mt-2 text-sm leading-normal">
                                        Led end-to-end development of RESTful API serving 20,000+ study directors with real-time access to clinical study data.
                                    </p>
<ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">RESTful API</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Clinical Data</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Microservices</div></li>
</ul>
</div>
<div className="z-10 sm:order-1 sm:col-span-2">
<div className="aspect-video w-32 sm:w-full rounded border-2 border-zinc-800 bg-zinc-900 transition group-hover:border-zinc-700 sm:order-1 sm:col-span-2 sm:translate-y-1 flex items-center justify-center text-zinc-500 group-hover:text-indigo-400">
<span className="iconify" data-icon="lucide:database" data-width="24" strokeWidth="1.5"></span>
</div>
</div>
</div>
</li>

<li className="mb-12">
<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-zinc-800 lg:group-hover:bg-zinc-900/30"></div>
<div className="z-10 sm:order-2 sm:col-span-6">
<h3>
<a aria-label="Inventory Logistics App" className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-indigo-400 focus-visible:text-indigo-400 group/link text-base" href="#" rel="noreferrer" target="_blank">
<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
<span>Inventory Logistics App <span className="iconify inline-block ml-1 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" data-icon="lucide:arrow-up-right" data-width="14" strokeWidth="1.5"></span></span>
</a>
</h3>
<p className="mt-2 text-sm leading-normal">
                                        Serverless React application optimizing inventory logistics with real-time tracking capabilities. Reduced annual product loss by $200,000.
                                    </p>
<ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">React</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Serverless</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">AWS Lambda</div></li>
</ul>
</div>
<div className="z-10 sm:order-1 sm:col-span-2">
<div className="aspect-video w-32 sm:w-full rounded border-2 border-zinc-800 bg-zinc-900 transition group-hover:border-zinc-700 sm:order-1 sm:col-span-2 sm:translate-y-1 flex items-center justify-center text-zinc-500 group-hover:text-indigo-400">
<span className="iconify" data-icon="lucide:box" data-width="24" strokeWidth="1.5"></span>
</div>
</div>
</div>
</li>

<li className="mb-12">
<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-zinc-800 lg:group-hover:bg-zinc-900/30"></div>
<div className="z-10 sm:order-2 sm:col-span-6">
<h3>
<a aria-label="MARS Mapmaker" className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-indigo-400 focus-visible:text-indigo-400 group/link text-base" href="#" rel="noreferrer" target="_blank">
<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
<span>MARS Mapmaker <span className="iconify inline-block ml-1 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" data-icon="lucide:arrow-up-right" data-width="14" strokeWidth="1.5"></span></span>
</a>
</h3>
<p className="mt-2 text-sm leading-normal">
                                        React-based CSV mapping tool for geochronological data processing, automating thousands of data lines. Used by Columbia University researchers.
                                    </p>
<ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">React</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">CSV Processing</div></li>
</ul>
</div>
<div className="z-10 sm:order-1 sm:col-span-2">
<div className="aspect-video w-32 sm:w-full rounded border-2 border-zinc-800 bg-zinc-900 transition group-hover:border-zinc-700 sm:order-1 sm:col-span-2 sm:translate-y-1 flex items-center justify-center text-zinc-500 group-hover:text-indigo-400">
<span className="iconify" data-icon="lucide:map" data-width="24" strokeWidth="1.5"></span>
</div>
</div>
</div>
</li>

<li className="mb-12">
<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-zinc-800 lg:group-hover:bg-zinc-900/30"></div>
<div className="z-10 sm:order-2 sm:col-span-6">
<h3>
<a aria-label="Twilio SMS + Teams Integration" className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-indigo-400 focus-visible:text-indigo-400 group/link text-base" href="#" rel="noreferrer" target="_blank">
<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
<span>Twilio + Teams Integration <span className="iconify inline-block ml-1 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" data-icon="lucide:arrow-up-right" data-width="14" strokeWidth="1.5"></span></span>
</a>
</h3>
<p className="mt-2 text-sm leading-normal">
                                        Cloud application integrating Twilio SMS with Microsoft Teams for seamless communication across 500+ employees.
                                    </p>
<ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Twilio</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Microsoft Teams</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Cloud Integration</div></li>
</ul>
</div>
<div className="z-10 sm:order-1 sm:col-span-2">
<div className="aspect-video w-32 sm:w-full rounded border-2 border-zinc-800 bg-zinc-900 transition group-hover:border-zinc-700 sm:order-1 sm:col-span-2 sm:translate-y-1 flex items-center justify-center text-zinc-500 group-hover:text-indigo-400">
<span className="iconify" data-icon="lucide:message-square" data-width="24" strokeWidth="1.5"></span>
</div>
</div>
</div>
</li>
</ul>
<div className="mt-12">
<a aria-label="Load More Projects" className="inline-flex items-center font-medium leading-tight text-zinc-200 font-semibold group" href="#">
<span className="border-b border-transparent pb-px transition group-hover:border-indigo-400 motion-reduce:transition-none">Load More Projects</span>
<span className="iconify ml-1 transition-transform group-hover:translate-x-2" data-icon="lucide:arrow-right" data-width="16" strokeWidth="1.5"></span>
</a>
</div>
</section>

<section aria-label="Mosaic" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="mosaic">
<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
<h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">Mosaic</h2>
</div>
<ul className="group/list">
<li className="mb-12">
<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-zinc-800 lg:group-hover:bg-zinc-900/30"></div>
<div className="z-10 sm:order-2 sm:col-span-6">
<h3>
<a aria-label="Vektor" className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-indigo-400 focus-visible:text-indigo-400 group/link text-base" href="https://vektor.fly.dev/" rel="noreferrer" target="_blank">
<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
<span>Vektor <span className="inline-block text-zinc-500 font-normal ml-1 text-sm">(NumPy + Linear Algebra)</span> <span className="iconify inline-block ml-1 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" data-icon="lucide:arrow-up-right" data-width="14" strokeWidth="1.5"></span></span>
</a>
</h3>
<p className="mt-2 text-sm leading-normal">
                                        A math playground and sandbox for experimenting with NumPy and Linear Algebra concepts, featuring visualizations and interactive components.
                                    </p>
<ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Python</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">NumPy</div></li>
<li className="mr-1.5 mt-2"><div className="flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-400 group-hover:border-indigo-500/20 transition-colors">Linear Algebra</div></li>
</ul>
</div>
<div className="z-10 sm:order-1 sm:col-span-2">
<a aria-label="Vektor Project" className="block" href="https://vektor.fly.dev/" rel="noreferrer" target="_blank">
<img alt="NumPy and Linear Algebra graphic" className="rounded border-2 border-zinc-800 transition group-hover:border-zinc-700 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-white/5 grayscale group-hover:grayscale-0 object-contain p-2" decoding="async" height="48" loading="lazy" src="numpluslinear.png" width="200"/>
</a>
</div>
</div>
</li>
</ul>
</section>

<section className="mb-16 md:mb-24 lg:mb-36">
<h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200 mb-8">Certifications</h2>
<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-3 rounded-md bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm font-medium text-zinc-300 group hover:border-indigo-500/30 transition-colors">
<span className="iconify text-indigo-400" data-icon="lucide:award" data-width="20" strokeWidth="1.5"></span>
                            AWS Cloud Foundational
                        </div>
<div className="flex items-center gap-3 rounded-md bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm font-medium text-zinc-300 group hover:border-indigo-500/30 transition-colors">
<span className="iconify text-indigo-400" data-icon="lucide:award" data-width="20" strokeWidth="1.5"></span>
                            AWS Cloud Practitioner
                        </div>
<div className="flex items-center gap-3 rounded-md bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm font-medium text-zinc-300 group hover:border-indigo-500/30 transition-colors">
<span className="iconify text-indigo-400" data-icon="lucide:award" data-width="20" strokeWidth="1.5"></span>
                            AWS AI Practitioner
                        </div>
</div>
</section>

<section className="mb-16">
<h2 className="text-2xl font-bold tracking-tight text-white mb-4">Let's Work Together</h2>
<p className="text-zinc-400 mb-6">
                        I'm always open to new opportunities and interesting projects, especially in health tech and research environments.
                     </p>
<a className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-400" href="mailto:joshdgilley@gmail.com">
                        Get In Touch
                     </a>
</section>

<footer className="max-w-md pb-16 text-sm text-zinc-500 sm:pb-0">
<p>
                        © 2025 Josh Gilley. Built with Vue 3 + TypeScript + Tailwind CSS.
                    </p>
</footer>
</main>
</div>
</div>



    </>
  );
}
