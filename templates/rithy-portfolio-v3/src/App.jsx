import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icon Init
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Mouse Follower / Spotlight Effect
        const spotlight = document.querySelector('.spotlight');
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            document.documentElement.style.setProperty('--mouse-x', x + 'px');
            document.documentElement.style.setProperty('--mouse-y', y + 'px');
        });

        // Modal Logic
        function openProject(title, imgSrc, techStack, description) {
            const modal = document.getElementById('project-modal');
            const mTitle = document.getElementById('modal-title');
            const mImg = document.getElementById('modal-img');
            const mDesc = document.getElementById('modal-desc');
            const mTags = document.getElementById('modal-tags');

            mTitle.innerText = title;
            mImg.src = imgSrc;
            mDesc.innerText = description;
            
            // Clear and add tags
            mTags.innerHTML = '';
            const techs = techStack.split(',');
            techs.forEach(tech => {
                const span = document.createElement('span');
                span.className = 'px-3 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700';
                span.innerText = tech.trim();
                mTags.appendChild(span);
            });

            // Show Modal
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }

        function closeProject() {
            const modal = document.getElementById('project-modal');
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scroll
        }

        // Close modal on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeProject();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="spotlight"></div>

<div className="fixed inset-0 z-[-1] bg-[#050505]">
<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 sm:px-6 lg:px-8">
<nav className="mx-auto max-w-7xl">
<div className="border-gradient bg-neutral-900/80 backdrop-blur-xl rounded-full px-5 h-14 flex items-center justify-between shadow-2xl shadow-black/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center ring-1 ring-white/10">
<span className="text-xs font-bold text-white tracking-tighter">RT</span>
</div>
<span className="text-xs sm:text-sm font-medium text-white tracking-tight uppercase">Rithy Tep</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#tutorials">Tutorials</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
</div>
<a className="group relative inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 focus:ring-offset-neutral-900" href="#contact">
<span>Contact</span>
</a>
</div>
</nav>
</header>
<main className="sm:px-6 lg:px-8 pt-32 pr-4 pb-16 pl-4 relative z-10">
<div className="max-w-7xl mr-auto ml-auto">

<section className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-20">
<div className="lg:col-span-5 relative h-[300px] lg:h-auto border-gradient rounded-[32px] overflow-hidden animate-enter" style={{animationDelay: '0.1s'}}>
<img alt="Workspace" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/profile.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<p className="text-xs font-medium text-emerald-400 tracking-wide uppercase">Available for work</p>
</div>
<h2 className="text-lg font-semibold text-white leading-tight">Building meaningful web applications.</h2>
</div>
</div>
<div className="lg:col-span-7 flex flex-col gap-4">
<div className="border-gradient bg-neutral-900/40 backdrop-blur-md rounded-[32px] p-8 sm:p-12 flex-1 flex flex-col justify-center items-start animate-enter" style={{animationDelay: '0.2s'}}>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tighter leading-[1.1] mb-6">
                            No Haram only <span className="text-neutral-400">improvement.</span>
</h1>
<p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-lg mb-8">
                            Passionate Full Stack Developer focused on creating efficient, scalable, and secure web applications. Continuously learning and evolving with Vue.js, Next.js, and .NET.
                        </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-neutral-900 bg-white rounded-full hover:bg-neutral-200 transition-colors group" href="#projects">
                                View Projects
                                <svg className="lucide lucide-arrow-up-right ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors" href="https://github.com/RithyTep" target="_blank">
<svg className="lucide lucide-github mr-2 w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                GitHub
                            </a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="border-gradient bg-neutral-900/40 backdrop-blur-sm rounded-[24px] p-5 flex flex-col justify-between h-32 animate-enter" style={{animationDelay: '0.3s'}}>
<svg className="lucide lucide-code-2 w-5 h-5 text-white/60" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<div>
<p className="text-lg font-semibold text-white">3+</p>
<p className="text-xs text-neutral-500">Years Exp</p>
</div>
</div>
<div className="border-gradient bg-neutral-900/40 backdrop-blur-sm rounded-[24px] p-5 flex flex-col justify-between h-32 animate-enter" style={{animationDelay: '0.4s'}}>
<svg className="lucide lucide-layers w-5 h-5 text-white/60" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<div className="">
<p className="text-lg font-semibold text-white">50+</p>
<p className="text-xs text-neutral-500">Projects</p>
</div>
</div>
<div className="col-span-2 border-gradient bg-neutral-900/40 backdrop-blur-sm rounded-[24px] p-5 flex flex-col justify-between h-32 animate-enter" style={{animationDelay: '0.5s'}}>
<div className="flex justify-between items-start">
<svg className="lucide lucide-cpu w-5 h-5 text-white/60" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<svg className="lucide lucide-arrow-right w-4 h-4 text-neutral-600" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<div className="">
<p className="text-sm font-semibold text-white">Full Stack</p>
<p className="text-xs text-neutral-500">Vue, Next.js, .NET, SQL</p>
</div>
</div>
</div>
</div>
</section>

<section className="mb-20 animate-enter" style={{animationDelay: '0.6s'}}>
<div className="border-gradient bg-neutral-900/30 rounded-[24px] py-8 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="flex w-full overflow-hidden group">
<div className="flex animate-scroll whitespace-nowrap group-hover:pause" style={{animation: 'marquee 20s linear infinite'}}>
<div className="flex gap-12 px-6 items-center text-neutral-400 text-sm font-medium uppercase tracking-wider">
<span className="flex items-center gap-2"><svg className="lucide lucide-triangle w-4 h-4" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Next.js</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-file-code w-4 h-4" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg> TypeScript</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-component w-4 h-4" data-lucide="component" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path></svg> Vue.js</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-server w-4 h-4" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg> .NET</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-database w-4 h-4" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> MSSQL</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-palette w-4 h-4" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> Tailwind</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-terminal w-4 h-4" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg> Node.js</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-cloud w-4 h-4" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg> Serverless</span>
</div>
<div className="flex gap-12 px-6 items-center text-neutral-400 text-sm font-medium uppercase tracking-wider">
<span className="flex items-center gap-2"><svg className="lucide lucide-triangle w-4 h-4" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Next.js</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-file-code w-4 h-4" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg> TypeScript</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-component w-4 h-4" data-lucide="component" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path></svg> Vue.js</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-server w-4 h-4" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg> .NET</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-database w-4 h-4" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> MSSQL</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-palette w-4 h-4" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> Tailwind</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-terminal w-4 h-4" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg> Node.js</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-cloud w-4 h-4" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg> Serverless</span>
</div>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="projects">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 px-2">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Featured Work</h2>
<p className="text-sm text-neutral-400">Selected projects showcasing web &amp; 3D capabilities.</p>
</div>
<a className="hidden sm:inline-flex items-center text-xs text-white hover:text-neutral-300 transition-colors" href="https://github.com/RithyTep" target="_blank">
                        View all repositories <svg className="lucide lucide-arrow-right ml-1 w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<button className="group border-gradient bg-neutral-900/30 rounded-[24px] overflow-hidden hover:bg-neutral-900/50 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-neutral-500" onclick="openProject('Kon Khmer AI', 'https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1756111312916.jpg', 'Next.js, Three.js', 'A cutting-edge platform for visualizing 3D AI models directly in the browser. Built with performance and interactivity in mind.')">
<div className="h-48 overflow-hidden relative">
<img alt="Kon Khmer AI" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1756111312916.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-lg font-medium text-white">Kon Khmer AI</h3>
<div className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition text-white">
<svg className="lucide lucide-external-link w-3.5 h-3.5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</div>
<p className="text-xs text-neutral-400 mb-4 line-clamp-2">Tech stack: NextJs + HYPER3D + shadcn. 3D Model visualization platform.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-neutral-300">Next.js</span>
<span className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-neutral-300">3D</span>
</div>
</div>
</button>

<button className="group border-gradient bg-neutral-900/30 rounded-[24px] overflow-hidden hover:bg-neutral-900/50 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-neutral-500" onclick="openProject('Portfolio CMS', 'https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/123.png', 'Lucia Auth, NeonDB', 'A custom-built Content Management System for managing portfolio items and blog posts securely.')">
<div className="h-48 overflow-hidden relative">
<img alt="Portfolio CMS" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/123.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-lg font-medium text-white">Portfolio CMS</h3>
<div className="hover:bg-white/20 transition text-white bg-white/10 rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5">
<svg className="lucide lucide-external-link w-[14px] h-[14px]" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</div>
<p className="text-xs text-neutral-400 mb-4 line-clamp-2">A content management system featuring an intuitive form interface.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-neutral-300">Neon DB</span>
<span className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-neutral-300">Lucia Auth</span>
</div>
</div>
</button>

<button className="group border-gradient bg-neutral-900/30 rounded-[24px] overflow-hidden hover:bg-neutral-900/50 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-neutral-500" onclick="openProject('HMS System', 'https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1756113382312.jpg', 'React, Vite', 'Comprehensive Hospital Management System UI designed for efficiency and clarity in medical environments.')">
<div className="h-48 overflow-hidden relative">
<img alt="HMS System" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1756113382312.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-lg font-medium text-white">HMS System</h3>
<div className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition text-white">
<svg className="lucide lucide-external-link w-3.5 h-3.5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</div>
<p className="text-xs text-neutral-400 mb-4 line-clamp-2">Hospital Management System UI sample with Vite + React.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-neutral-300">React</span>
<span className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-neutral-300">Shadcn</span>
</div>
</div>
</button>

<button className="group border-gradient bg-neutral-900/30 rounded-[24px] overflow-hidden hover:bg-neutral-900/50 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-neutral-500" onclick="openProject('Twenty Two Alanka', 'https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/Snipaste_2025-11-18_22-10-34.png', 'Next.js, Firebase', 'High-performance e-commerce store for jewelry, featuring real-time inventory and secure checkout.')">
<div className="h-48 overflow-hidden relative">
<img alt="Twenty Two Alanka" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/Snipaste_2025-11-18_22-10-34.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-lg font-medium text-white">Twenty Two Alanka</h3>
<div className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition text-white">
<svg className="lucide lucide-external-link w-3.5 h-3.5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</div>
<p className="text-xs text-neutral-400 mb-4 line-clamp-2">The store for jewelry. Next.js + Firebase.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-neutral-300">Firebase</span>
<span className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-neutral-300">E-commerce</span>
</div>
</div>
</button>

<button className="group border-gradient bg-neutral-900/30 rounded-[24px] overflow-hidden hover:bg-neutral-900/50 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-neutral-500" onclick="openProject('NPM khmer-ip-gen', 'https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1757649710351.jpg', 'Node.js', 'Open source utility package for generating mock Khmer IP addresses for testing purposes.')">
<div className="h-48 overflow-hidden relative">
<img alt="NPM khmer-ip-generator" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1757649710351.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-lg font-medium text-white">NPM khmer-ip-gen</h3>
<div className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition text-white">
<svg className="lucide lucide-package w-3.5 h-3.5" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
</div>
<p className="text-xs text-neutral-400 mb-4 line-clamp-2">Generate random Cambodian (Khmer) IP addresses from known IP ranges.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-neutral-300">Node</span>
<span className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-neutral-300">Package</span>
</div>
</div>
</button>

<button className="group border-gradient bg-neutral-900/30 rounded-[24px] overflow-hidden hover:bg-neutral-900/50 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-neutral-500" onclick="openProject('Alanka store', 'https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1762330596824.jpg', 'Three.js, WebGI', 'Immersive 3D shopping experience allowing users to inspect products from every angle.')">
<div className="h-48 overflow-hidden relative">
<img alt="Alanka store" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1762330596824.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-lg font-medium text-white">Alanka store</h3>
<div className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition text-white">
<svg className="lucide lucide-external-link w-3.5 h-3.5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</div>
<p className="text-xs text-neutral-400 mb-4 line-clamp-2">3D scroll effect. Three.js + WebGI.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-neutral-300">Three.js</span>
<span className="px-2 py-1 text-[10px] bg-white/5 border border-white/5 rounded text-neutral-300">JQuery</span>
</div>
</div>
</button>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="tutorials">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 px-2">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
<h2 className="text-2xl font-medium text-white tracking-tight">New Tutorials</h2>
</div>
<p className="text-sm text-neutral-400">Deep dives into database optimization and frontend patterns.</p>
</div>
<a className="hidden sm:inline-flex items-center text-xs text-neutral-400 hover:text-white transition-colors mt-4 sm:mt-0" href="#">
                        Read all articles <svg className="lucide lucide-arrow-right ml-1 w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="group relative border-gradient bg-neutral-900/20 rounded-[24px] p-8 hover:bg-neutral-900/40 transition-all duration-300">
<div className="absolute top-8 right-8 p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
<svg className="lucide lucide-database w-6 h-6 text-blue-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="flex gap-2 mb-4">
<span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">MSSQL</span>
<span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">Performance</span>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-400 transition-colors">Advanced Query Optimization</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            Learn how to analyze execution plans, implement proper indexing strategies, and avoid common pitfalls like parameter sniffing to speed up your queries by 100x.
                        </p>
<div className="flex items-center gap-3 text-xs text-neutral-500">
<span>10 min read</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span>Feb 24, 2025</span>
</div>
</article>

<article className="group relative border-gradient bg-neutral-900/20 rounded-[24px] p-8 hover:bg-neutral-900/40 transition-all duration-300">
<div className="absolute top-8 right-8 p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
<svg className="lucide lucide-layout-template w-6 h-6 text-emerald-400" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<div className="flex gap-2 mb-4">
<span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Vue.js</span>
<span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">Architecture</span>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-emerald-400 transition-colors">Scalable Composable Patterns</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            Stop writing spaghetti code in setup(). Discover how to structure your composables for maximum reusability and type safety in large-scale Vue 3 applications.
                        </p>
<div className="flex items-center gap-3 text-xs text-neutral-500">
<span>8 min read</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span>Feb 20, 2025</span>
</div>
</article>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 scroll-mt-24" id="experience">

<div className="">
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">Professional Journey</h2>
<div className="space-y-4">

<div className="border-gradient bg-neutral-900/30 rounded-[24px] p-6 flex items-start gap-4 transition-all hover:bg-neutral-900/40">
<img alt="Techbodia" className="w-10 h-10 rounded-xl object-cover ring-1 ring-white/10" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/images.jpg"/>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<h3 className="text-sm font-semibold text-white">Full Stack Developer</h3>
<span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">Present</span>
</div>
<p className="text-xs text-neutral-400 mb-2">Techbodia • April 2024 - Present</p>
<p className="text-xs text-neutral-500 leading-relaxed">
                                    Full stack develop - VUE - Nuxt - C# - SQL - Dotnet - Elastic - Gitlab.
                                </p>
</div>
</div>

<div className="border-gradient bg-neutral-900/30 rounded-[24px] p-6 flex items-start gap-4 transition-all hover:bg-neutral-900/40">
<img alt="Private" className="w-10 h-10 rounded-xl object-cover ring-1 ring-white/10" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/original-718d6ae11dbe4437a38bb77104327f3a.webp"/>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<h3 className="text-sm font-semibold text-white">Full Stack Developer</h3>
<span className="text-[10px] text-neutral-600">2023 - 2024</span>
</div>
<p className="text-xs text-neutral-400 mb-2">Private company</p>
<p className="text-xs text-neutral-500 leading-relaxed">
                                    Full stack Firebase + Angular development.
                                </p>
</div>
</div>

<div className="border-gradient bg-neutral-900/30 rounded-[24px] p-6 flex items-start gap-4 transition-all hover:bg-neutral-900/40">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10">
<svg className="lucide lucide-graduation-cap w-5 h-5 text-white/70" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<h3 className="text-sm font-semibold text-white">Bachelor of Computer Science</h3>
<span className="text-[10px] text-neutral-600">2021 - 2024</span>
</div>
<p className="text-xs text-neutral-400 mb-2">Information Technology Engineering</p>
</div>
</div>
</div>
</div>

<div className="scroll-mt-24" id="gallery">
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">Gallery</h2>
<div className="grid grid-cols-2 gap-4 h-[420px]">
<div className="border-gradient rounded-[24px] overflow-hidden relative group">
<img className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110 opacity-80 hover:opacity-100" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/1.jpg"/>
</div>
<div className="grid grid-rows-2 gap-4">
<div className="border-gradient rounded-[24px] overflow-hidden relative group">
<img className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110 opacity-80 hover:opacity-100" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/profile.jpg"/>
</div>
<div className="border-gradient rounded-[24px] overflow-hidden relative group">
<img className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110 opacity-80 hover:opacity-100" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/Untitled%20design.png"/>
</div>
</div>
</div>
</div>
</section>

<section className="mb-24">
<div className="border-gradient overflow-hidden sm:p-12 text-center rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50">
</div>
<svg className="lucide lucide-quote w-8 h-8 text-orange-500/50 mx-auto mb-6" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<blockquote className="sm:text-xl lg:text-2xl leading-relaxed text-lg font-light italic text-neutral-200 tracking-tight max-w-3xl mr-auto ml-auto">
        "He is a fast learner with a strong passion for coding and security. He has successfully implemented large,
        complex features that require deep knowledge and expertise."
    </blockquote>
<div className="mt-8 flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" src="https://irzjjxlkm7f191oh.public.blob.vercel-storage.com/926465.png"/>
</div>
<div className="text-left">
<p className="text-sm font-semibold text-white">Team Lead</p>
<p className="text-xs text-neutral-500">Product Developer</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-16 pb-8" id="contact">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Rithy Tep</h2>
<p className="text-sm text-neutral-500">Full Stack Developer based in Cambodia.</p>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black transition-all duration-300" href="https://github.com/RithyTep" target="_blank">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300" href="https://www.linkedin.com/in/tep-rithy-7529b7226" target="_blank">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-[#FF0000] hover:text-white transition-all duration-300" href="https://www.youtube.com/@Rithy500" target="_blank">
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2025 Rithy Tep. All rights reserved.</p>
<p className="font-mono">Built with Next.js &amp; Tailwind</p>
</div>
</footer>
</div>
</main>

<div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 hidden" id="project-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeProject()"></div>
<div className="relative w-full max-w-3xl bg-[#0A0A0A] border border-neutral-800 rounded-[24px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]" id="project-modal-content">

<div className="h-48 sm:h-64 relative shrink-0">
<img alt="Project Cover" className="w-full h-full object-cover" id="modal-img" src=""/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all" onclick="closeProject()">
<svg className="lucide lucide-x w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="p-6 sm:p-8 overflow-y-auto">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight" id="modal-title">Project Title</h2>
<div className="flex gap-3">
<a className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-neutral-200 transition-colors flex items-center" href="#">
                            Live Demo <svg className="ml-2" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
</a>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-6" id="modal-tags">

</div>
<div className="prose prose-invert prose-sm max-w-none text-neutral-400">
<p className="text-base leading-relaxed mb-6" id="modal-desc">
                        Project description goes here.
                    </p>
<h4 className="text-white font-medium text-sm mb-2 uppercase tracking-wider">Key Features (Simulated)</h4>
<ul className="list-disc pl-4 space-y-1 mb-6 marker:text-neutral-600">
<li>Real-time data synchronization using WebSockets.</li>
<li>Optimized 3D rendering pipeline for mobile devices.</li>
<li>Secure authentication flow with role-based access control.</li>
<li>Automated CI/CD deployment via GitHub Actions.</li>
</ul>
<div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
<h4 className="text-white font-medium text-sm mb-1">Project Status</h4>
<p className="text-xs">Completed • Maintenance Mode</p>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
