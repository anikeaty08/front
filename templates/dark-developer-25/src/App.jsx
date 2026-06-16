import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple script to update time
        const timeElement = document.getElementById('time');
        const updateTime = () => {
            const now = new Date();
            timeElement.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Los_Angeles' });
        }
        setInterval(updateTime, 60000);
        updateTime();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grain"></div>

<nav className="fixed top-0 left-0 right-0 z-40 w-full px-6 py-6 mix-blend-difference text-white">
<div className="max-w-screen-2xl mx-auto flex justify-between items-center">
<a className="text-xl font-medium tracking-tighter uppercase z-50 relative flex items-center gap-2" href="#">
<span className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm font-bold text-sm">JD</span>
</a>
<div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-tight">
<a className="hover:text-neutral-400 transition-colors duration-300" href="#about">About</a>
<a className="hover:text-neutral-400 transition-colors duration-300" href="#skills">Skills</a>
<a className="hover:text-neutral-400 transition-colors duration-300" href="#projects">Work</a>
<a className="hover:text-neutral-400 transition-colors duration-300" href="#pricing">Services</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium uppercase tracking-widest border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all" href="#contact">
                Contact
            </a>
<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-12 overflow-hidden">

<div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neutral-800/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-screen-2xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
<div className="lg:col-span-8">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-400 mb-8 backdrop-blur-sm w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Available for new projects
                </div>
<h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] mb-8 text-white">
                    Visual Designer <br/>
<span className="text-neutral-600">&amp;</span> Full Stack Dev.
                </h1>
<p className="text-lg sm:text-xl text-neutral-400 max-w-xl leading-relaxed font-light mb-8">
                    Crafting immersive digital experiences where strict logic meets fluid creativity. Based in San Francisco.
                </p>
<div className="flex gap-4">
<a className="px-8 py-4 bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors" href="#contact">
                        Get in Touch
                    </a>
<a className="px-8 py-4 border border-neutral-800 text-white font-medium text-sm hover:bg-neutral-900 transition-colors" href="#projects">
                        View Work
                    </a>
</div>
</div>
<div className="lg:col-span-4 flex lg:justify-end items-end relative">

<div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700 ease-out">
<img alt="Portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white text-xs font-medium">Jonathan Doe</p>
<p className="text-[10px] text-neutral-400 uppercase tracking-widest">Product Enthusiast</p>
</div>
</div>
</div>
</div>
<div className="max-w-screen-2xl mx-auto w-full mt-12 flex gap-6 border-t border-neutral-900 pt-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:dribbble" data-width="20"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
</div>
</header>

<div className="py-8 border-y border-neutral-900 bg-neutral-950/50 backdrop-blur-sm">
<div className="marquee-container">
<div className="marquee-content flex gap-16 items-center opacity-60 text-2xl font-display font-medium text-neutral-600 uppercase tracking-tight">
<span>React</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>Next.js</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>TypeScript</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>Tailwind CSS</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>Node.js</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>Figma</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>PostgreSQL</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>WebGL</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>

<span>React</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>Next.js</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>TypeScript</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>Tailwind CSS</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>Node.js</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>Figma</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>PostgreSQL</span><span className="w-1 h-1 rounded-full bg-neutral-800"></span>
<span>WebGL</span>
</div>
</div>
</div>

<section className="py-32 px-6" id="about">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4">
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4 block">About Me</span>
<div className="w-full h-[1px] bg-neutral-900 mt-2 mb-8"></div>
<div className="space-y-8">
<div>
<h3 className="text-white text-sm font-medium mb-2 flex items-center gap-2">
<span className="iconify text-neutral-500" data-icon="lucide:graduation-cap" data-width="16"></span> Education
                            </h3>
<p className="text-xs text-neutral-500 leading-relaxed">BS in Computer Science<br/>University of Technology, 2019</p>
</div>
<div>
<h3 className="text-white text-sm font-medium mb-2 flex items-center gap-2">
<span className="iconify text-neutral-500" data-icon="lucide:target" data-width="16"></span> Current Focus
                            </h3>
<p className="text-xs text-neutral-500 leading-relaxed">Mastering WebGL and creating 3D interactive web experiences.</p>
</div>
</div>
</div>
<div className="lg:col-span-8">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-white mb-12">
                        I am a developer driven by curiosity and a designer at heart. I believe that good code is poetry and good design is invisible.
                    </h2>
<div className="grid sm:grid-cols-2 gap-12 pt-12 border-t border-neutral-900">
<div>
<h4 className="text-white mb-4 font-medium">Motivations</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-neutral-900 text-xs text-neutral-400">Problem Solving</span>
<span className="px-3 py-1 bg-neutral-900 text-xs text-neutral-400">Open Source</span>
<span className="px-3 py-1 bg-neutral-900 text-xs text-neutral-400">Minimalism</span>
</div>
</div>
<div>
<h4 className="text-white mb-4 font-medium">Interests</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:camera" data-width="14"></span> Analog Photography
                                </li>
<li className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:music" data-width="14"></span> Synthesizers
                                </li>
<li className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:coffee" data-width="14"></span> Specialty Coffee
                                </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#080808] relative" id="skills">
<div className="max-w-screen-2xl mx-auto">
<div className="mb-16">
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4 block">Expertise</span>
<h2 className="text-4xl font-medium text-white tracking-tight">Technical Proficiency</h2>
</div>
<div className="flex flex-col">

<div className="group border-t border-neutral-900 py-10 hover:bg-neutral-900/20 transition-colors duration-500">
<div className="flex flex-col sm:flex-row justify-between gap-4">
<div className="flex items-center gap-4">
<span className="iconify text-neutral-600 group-hover:text-white transition-colors" data-icon="lucide:layout" data-width="24"></span>
<h3 className="text-2xl font-medium tracking-tight text-neutral-400 group-hover:text-white transition-colors">Frontend Engineering</h3>
</div>
<div className="flex flex-wrap gap-4 sm:max-w-md justify-end">
<span className="text-neutral-600 text-sm group-hover:text-neutral-300">React / Next.js (95%)</span>
<span className="text-neutral-600 text-sm group-hover:text-neutral-300">Tailwind CSS (98%)</span>
<span className="text-neutral-600 text-sm group-hover:text-neutral-300">TypeScript (90%)</span>
</div>
</div>
</div>

<div className="group border-t border-neutral-900 py-10 hover:bg-neutral-900/20 transition-colors duration-500">
<div className="flex flex-col sm:flex-row justify-between gap-4">
<div className="flex items-center gap-4">
<span className="iconify text-neutral-600 group-hover:text-white transition-colors" data-icon="lucide:pen-tool" data-width="24"></span>
<h3 className="text-2xl font-medium tracking-tight text-neutral-400 group-hover:text-white transition-colors">UI/UX Design</h3>
</div>
<div className="flex flex-wrap gap-4 sm:max-w-md justify-end">
<span className="text-neutral-600 text-sm group-hover:text-neutral-300">Figma</span>
<span className="text-neutral-600 text-sm group-hover:text-neutral-300">Framer</span>
<span className="text-neutral-600 text-sm group-hover:text-neutral-300">Design Systems</span>
</div>
</div>
</div>

<div className="group border-t border-neutral-900 py-10 hover:bg-neutral-900/20 transition-colors duration-500">
<div className="flex flex-col sm:flex-row justify-between gap-4">
<div className="flex items-center gap-4">
<span className="iconify text-neutral-600 group-hover:text-white transition-colors" data-icon="lucide:terminal" data-width="24"></span>
<h3 className="text-2xl font-medium tracking-tight text-neutral-400 group-hover:text-white transition-colors">Workflow &amp; Tools</h3>
</div>
<div className="flex flex-wrap gap-4 sm:max-w-md justify-end">
<span className="text-neutral-600 text-sm group-hover:text-neutral-300">Git</span>
<span className="text-neutral-600 text-sm group-hover:text-neutral-300">Docker</span>
<span className="text-neutral-600 text-sm group-hover:text-neutral-300">VS Code</span>
<span className="text-neutral-600 text-sm group-hover:text-neutral-300">Vercel</span>
</div>
</div>
</div>
<div className="border-t border-neutral-900"></div>
</div>
</div>
</section>

<section className="py-24 px-6" id="projects">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-24">
<h2 className="text-6xl font-medium tracking-tighter text-white">Selected<br/><span className="text-neutral-600">Work</span></h2>
<a className="hidden md:flex items-center gap-2 text-sm text-white border-b border-transparent hover:border-white pb-1 transition-all" href="#">
                    View all projects 
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 mb-8 rounded-sm">
<img alt="Dashboard" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-neutral-800 pt-6">
<div className="space-y-2">
<h3 className="text-2xl font-medium text-white">Nova Banking</h3>
<p className="text-sm text-neutral-500">Fintech Dashboard • Next.js &amp; Supabase</p>
</div>
<span className="iconify text-neutral-600 group-hover:text-white transition-colors group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="24"></span>
</div>
</div>

<div className="group cursor-pointer md:mt-32">
<div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 mb-8 rounded-sm">
<img alt="App" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-neutral-800 pt-6">
<div className="space-y-2">
<h3 className="text-2xl font-medium text-white">Syntax AI Editor</h3>
<p className="text-sm text-neutral-500">AI Tool • OpenAI &amp; Node.js</p>
</div>
<span className="iconify text-neutral-600 group-hover:text-white transition-colors group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="24"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900 bg-neutral-950/30">
<div className="max-w-screen-2xl mx-auto">
<h2 className="text-2xl font-medium text-white mb-16 tracking-tight">Collaborators</h2>
<div className="grid md:grid-cols-2 gap-12">
<div className="border-l border-neutral-800 pl-8">
<span className="iconify text-neutral-700 mb-6" data-icon="lucide:quote" data-width="32"></span>
<p className="text-lg text-neutral-300 mb-8 font-light leading-relaxed">
                        "Jonathan has an incredible eye for detail. The design system he built for us didn't just look good, it completely streamlined our development workflow."
                    </p>
<div>
<p className="text-white text-sm font-medium">Alex Smith</p>
<p className="text-neutral-600 text-xs uppercase tracking-widest mt-1">CTO, TechFlow</p>
</div>
</div>
<div className="border-l border-neutral-800 pl-8">
<span className="iconify text-neutral-700 mb-6" data-icon="lucide:quote" data-width="32"></span>
<p className="text-lg text-neutral-300 mb-8 font-light leading-relaxed">
                        "Rarely do you find a developer who understands design this well. The implementation was pixel-perfect and the animations were buttery smooth."
                    </p>
<div>
<p className="text-white text-sm font-medium">Elena Miller</p>
<p className="text-neutral-600 text-xs uppercase tracking-widest mt-1">Product Manager, Base</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="pricing">
<div className="max-w-screen-2xl mx-auto">
<div className="mb-16 max-w-xl">
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4 block">Services</span>
<h2 className="text-4xl font-medium text-white tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-neutral-500">Flexible options tailored to your project needs.</p>
</div>
<div className="grid md:grid-cols-3 gap-0">

<div className="border border-neutral-800 p-8 md:p-12 hover:bg-neutral-900/20 transition-colors">
<h3 className="text-white font-medium text-lg mb-2">Hourly</h3>
<p className="text-4xl text-white font-medium mb-6 tracking-tighter">$80 <span className="text-sm text-neutral-500 font-normal">/ hr</span></p>
<p className="text-sm text-neutral-400 mb-12 h-12">Perfect for small tasks, bug fixes, or consultation calls.</p>
<a className="inline-block w-full py-3 border border-neutral-700 text-white text-xs uppercase tracking-widest text-center hover:bg-white hover:text-black transition-all" href="#">Start Project</a>
</div>

<div className="border border-neutral-800 p-8 md:p-12 bg-neutral-900/10 relative -ml-px -mt-px md:mt-0">
<div className="absolute top-0 right-0 p-3">
<span className="flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Project Base</h3>
<p className="text-4xl text-white font-medium mb-6 tracking-tighter">$3k <span className="text-sm text-neutral-500 font-normal">/ start</span></p>
<p className="text-sm text-neutral-400 mb-12 h-12">For complete website builds, landing pages, or MVPs.</p>
<a className="inline-block w-full py-3 bg-white text-black text-xs uppercase tracking-widest text-center hover:bg-neutral-200 transition-all" href="#">Get Started</a>
</div>

<div className="border border-neutral-800 p-8 md:p-12 hover:bg-neutral-900/20 transition-colors -ml-px -mt-px md:mt-0">
<h3 className="text-white font-medium text-lg mb-2">Retainer</h3>
<p className="text-4xl text-white font-medium mb-6 tracking-tighter">$5k <span className="text-sm text-neutral-500 font-normal">/ mo</span></p>
<p className="text-sm text-neutral-400 mb-12 h-12">Dedicated development and design support for your team.</p>
<a className="inline-block w-full py-3 border border-neutral-700 text-white text-xs uppercase tracking-widest text-center hover:bg-white hover:text-black transition-all" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 min-h-[60vh] flex flex-col justify-between border-t border-neutral-900 bg-[#080808]" id="contact">
<div className="max-w-screen-2xl mx-auto w-full">
<div className="mb-24">
<p className="text-neutral-500 mb-8 uppercase tracking-widest text-xs">Start a project</p>
<a className="block group w-fit" href="mailto:hello@jonathandoe.com">
<h2 className="text-6xl sm:text-8xl lg:text-9xl font-medium tracking-tighter text-white group-hover:text-neutral-400 transition-colors duration-300">
                        Let's build <br/>
<span className="flex items-center gap-4 text-neutral-600 group-hover:text-neutral-500 transition-colors duration-300">
                            something 
                            <span className="w-12 h-12 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-500">
<span className="iconify -rotate-45 group-hover:rotate-0 transition-transform duration-500" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="50%"></span>
</span>
</span>
                        iconic.
                    </h2>
</a>
</div>
</div>
<footer className="max-w-screen-2xl mx-auto w-full border-t border-neutral-900 pt-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-neutral-500">
<div className="col-span-1 md:col-span-2">
<a className="text-xl font-bold tracking-tighter text-white uppercase block mb-4" href="#">JD</a>
<p className="max-w-xs">© 2023 Jonathan Doe.<br/>All rights reserved.</p>
</div>
<div>
<h4 className="text-white mb-4">Socials</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Dribbble</a></li>
</ul>
</div>
<div>
<h4 className="text-white mb-4">Location</h4>
<p>San Francisco, CA</p>
<p>Local Time: <span id="time">10:42 AM</span></p>
</div>
</div>
</footer>
</section>


    </>
  );
}
