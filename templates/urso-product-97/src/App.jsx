import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar Logic
        const navbar = document.getElementById('navbar');
        let lastScrollTop = 0;
        const delta = 50;

        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;

            // Blur effect intensity based on scroll
            if(currentScroll > 10) {
                navbar.classList.add('border-zinc-200');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('border-zinc-200');
                navbar.classList.add('border-transparent');
            }

            // Hide/Show logic
            if (Math.abs(lastScrollTop - currentScroll) <= delta) return;

            if (currentScroll > lastScrollTop && currentScroll > 100) {
                navbar.classList.add('-translate-y-full');
            } else {
                navbar.classList.remove('-translate-y-full');
            }
            lastScrollTop = currentScroll;
        });

        // Hero Text Parallax
        const heroText = document.getElementById('hero-text');
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Text moves slower than scroll for depth
            const translateY = scrollPosition * 0.35;
            // Fade out
            const opacity = Math.max(0, 1 - (scrollPosition / (windowHeight * 0.6)));

            heroText.style.opacity = opacity;
            heroText.style.transform = `translateY(${translateY}px)`;
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed flex transition-all duration-500 ease-in-out bg-[#FAFAFA]/80 z-50 border-b pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0 backdrop-blur-md items-center justify-between" id="navbar">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="h-8 w-8 bg-zinc-900 rounded-full flex items-center justify-center text-white font-medium text-xs group-hover:scale-90 transition-transform duration-300">U</div>
<span className="text-lg font-semibold tracking-tight">URSO</span>
</div>
<nav className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#work">Work</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#resume">Resume</a>
</nav>
<button className="md:hidden text-zinc-900">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</header>

<main className="overflow-hidden bg-[#FAFAFA] w-full relative">

<section className="h-[100dvh] flex flex-col overflow-hidden relative items-center justify-end"><img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18fc7626-f53f-4827-ad6f-85b3f5343cef_1600w.png"/>


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center pointer-events-none select-none">
<h1 className="text-[22vw] leading-[0.8] font-semibold tracking-[-0.04em] text-zinc-900/90 whitespace-nowrap" id="hero-text" style={{opacity: '1', transform: 'translateY(0px)'}}>
                    URSO
                </h1>
</div>


<div className="relative z-10 w-full max-w-2xl h-[90vh] flex items-end justify-center pointer-events-none">

<img alt="Designer Portrait" className="h-full w-full object-cover object-top mask-image-gradient filter grayscale contrast-125 mix-blend-multiply opacity-90" src="MainSideBW2xNOBG.png" style={{WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'}}/>
</div>

<div className="absolute bottom-12 left-6 md:left-12 z-20 max-w-xs md:max-w-sm">
<p className="text-sm md:text-base font-medium text-zinc-600 leading-relaxed">
                    Digital Product Designer crafting intuitive systems and interfaces for the next generation of software.
                </p>
</div>

<div className="absolute bottom-12 right-6 md:right-12 z-20 flex flex-col items-center gap-3 animate-pulse">
<svg className="lucide lucide-arrow-down w-5 h-5 text-zinc-900 stroke-[1.5]" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</section>

<section className="relative z-20 bg-white pt-32 pb-32 px-6 md:px-12 border-t border-zinc-200" id="work">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-zinc-100 pb-8">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900">Selected Work</h2>
<span className="text-sm font-medium text-zinc-400 mt-4 md:mt-0 uppercase tracking-widest">(2023 — 2024)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-zinc-100 rounded-sm aspect-[4/3] mb-8 shadow-sm">
<div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out p-12">

<div className="w-full h-full bg-white shadow-2xl rounded-lg border border-zinc-100 flex flex-col overflow-hidden">
<div className="h-12 border-b border-zinc-50 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-100"></div>
<div className="w-3 h-3 rounded-full bg-zinc-100"></div>
</div>
<div className="flex-1 bg-zinc-50/50 p-6 flex gap-4">
<div className="w-1/4 h-full bg-white rounded shadow-sm border border-zinc-100"></div>
<div className="flex-1 flex flex-col gap-3">
<div className="w-full h-24 bg-white rounded shadow-sm border border-zinc-100"></div>
<div className="w-full h-24 bg-white rounded shadow-sm border border-zinc-100"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-end border-b border-zinc-100 pb-4 group-hover:border-zinc-300 transition-colors">
<div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-1">Fintech Dashboard</h3>
<p className="text-base text-zinc-500">Product Design, UX Research</p>
</div>
<div className="h-8 w-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="relative overflow-hidden bg-[#0A0A0A] rounded-sm aspect-[4/3] mb-8 shadow-sm">

<div className="absolute inset-0 opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
<div className="relative w-48 h-48 rounded-full border border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="w-32 h-32 rounded-full border border-white/40"></div>
<div className="absolute w-full h-px bg-white/10 top-1/2 left-0"></div>
<div className="absolute h-full w-px bg-white/10 left-1/2 top-0"></div>
</div>
<div className="absolute text-white font-medium tracking-tight text-xl">SYSTEM</div>
</div>
</div>
<div className="flex justify-between items-end border-b border-zinc-100 pb-4 group-hover:border-zinc-300 transition-colors">
<div className="">
<h3 className="text-2xl font-semibold text-zinc-900 mb-1">Design Architecture</h3>
<p className="text-base text-zinc-500">Design Systems, IOS 18</p>
</div>
<div className="h-8 w-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAFA] py-32 px-6 md:px-12 border-t border-zinc-200" id="about">
<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-16">
<div className="md:w-1/2">
<h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8">Statement</h4>
<p className="text-2xl md:text-4xl leading-snug text-zinc-900 font-medium tracking-tight">
                        I craft digital experiences that blend aesthetic precision with human-centric functionality. Designing the future of interface.
                    </p>
</div>
<div className="md:w-1/3 flex flex-col gap-10">
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-6">Connect</h4>
<div className="flex flex-col gap-4">
<a className="flex items-center gap-4 text-xl font-medium text-zinc-500 hover:text-zinc-900 transition-colors group" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<span>Twitter</span>
</a>
<a className="flex items-center gap-4 text-xl font-medium text-zinc-500 hover:text-zinc-900 transition-colors group" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span>LinkedIn</span>
</a>
<a className="flex items-center gap-4 text-xl font-medium text-zinc-500 hover:text-zinc-900 transition-colors group" href="#">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>Email</span>
</a>
</div>
</div>
</div>
</div>
<div className="max-w-screen-xl mx-auto mt-32 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-xs font-medium uppercase tracking-wider">
<span>© 2024 Urso Design.</span>
<span className="mt-2 md:mt-0">San Francisco, CA</span>
</div>
</section>
</main>


    </>
  );
}
