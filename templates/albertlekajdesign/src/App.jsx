import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function() {
            const navContainer = document.getElementById('nav-container');
            const mainNav = document.getElementById('main-nav');
            if (!navContainer || !mainNav) return;
            
            function handleScroll() {
                const scrollY = window.scrollY;
                
                if (scrollY > 50) {
                    mainNav.classList.remove('bg-[#fff]/80', 'backdrop-blur-sm');
                    navContainer.classList.remove('border-b', 'border-zinc-200/60', 'max-w-full', 'md:px-14', 'lg:px-14');
                    navContainer.classList.add('border', 'border-zinc-200/80', 'rounded-full', 'max-w-5xl', 'mt-4', 'bg-[#fff]/80', 'backdrop-blur-sm', 'shadow-sm', 'px-8');
                } else {
                    mainNav.classList.add('bg-[#fff]/80', 'backdrop-blur-sm');
                    navContainer.classList.add('border-b', 'border-zinc-200/60', 'max-w-full', 'md:px-14', 'lg:px-14');
                    navContainer.classList.remove('border', 'border-zinc-200/80', 'rounded-full', 'max-w-5xl', 'mt-4', 'bg-[#fff]/80', 'backdrop-blur-sm', 'shadow-sm', 'px-8');
                }
            }
            
            window.addEventListener('scroll', handleScroll);
            handleScroll(); 
        })();
    


        document.addEventListener('DOMContentLoaded', () => {
            const skillsSection = document.getElementById('skills');
            const skillTags = document.querySelectorAll('.skill-tag');
            
            if (skillsSection && skillTags.length > 0) {
                // Scroll Parallax Effect
                let ticking = false;

                function updateParallax() {
                    const rect = skillsSection.getBoundingClientRect();
                    const centerOffset = (rect.top + rect.height / 2) - (window.innerHeight / 2);
                    
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        skillTags.forEach((tag, i) => {
                            const dirY = i % 2 === 0 ? -1 : 1;
                            const speedY = 0.03 + (i % 5) * 0.02; 
                            const y = centerOffset * speedY * dirY;
                            tag.style.transform = `translate3d(0, ${y}px, 0)`;
                        });
                    }
                    ticking = false;
                }

                window.addEventListener('scroll', () => {
                    if (!ticking) {
                        window.requestAnimationFrame(updateParallax);
                        ticking = true;
                    }
                });
                updateParallax(); 

                // Continuous Highlight Loop
                let currentHighlight = 0;
                
                setInterval(() => {
                    // Reset previous tag
                    const prevIndex = currentHighlight === 0 ? skillTags.length - 1 : currentHighlight - 1;
                    const prevTag = skillTags[prevIndex];
                    
                    prevTag.classList.remove('bg-zinc-900', 'text-white', 'border-transparent', 'scale-110', 'shadow-xl', 'z-20');
                    prevTag.classList.add('bg-white', 'text-zinc-600', 'border-zinc-200/60', 'shadow-sm', 'z-0');
                    
                    // Highlight new tag
                    const currentTag = skillTags[currentHighlight];
                    currentTag.classList.remove('bg-white', 'text-zinc-600', 'border-zinc-200/60', 'shadow-sm', 'z-0');
                    currentTag.classList.add('bg-zinc-900', 'text-white', 'border-transparent', 'scale-110', 'shadow-xl', 'z-20');
                    
                    currentHighlight = (currentHighlight + 1) % skillTags.length;
                }, 2000); 
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 transition-colors duration-300 top-0 right-0 left-0" id="main-nav">
<div className="flex transition-all duration-500 ease-in-out transform w-full h-16 mr-auto ml-auto pr-8 pl-8 items-center justify-between" id="nav-container">
<a className="text-xl font-normal tracking-tight" href="#">Albert.</a>
<div className="hidden md:flex gap-8 text-base font-normal text-zinc-500 items-center">
<a className="hover:text-zinc-900 transition-colors" href="#work">Work</a>
<a className="hover:text-zinc-900 transition-colors" href="#skills">Skills</a>
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
<button className="md:hidden text-zinc-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="md:px-14 lg:px-14 mx-auto pr-8 pl-8">

<section className="min-h-screen flex flex-col items-center justify-center">
<p className="uppercase text-sm font-light text-neutral-500 tracking-widest">Available for Work</p>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-balance text-5xl font-normal tracking-tight text-center max-w-6xl mt-6 mb-12">
<span className="text-zinc-950">I'm Albert — Product Designer turning ideas into intuitive, scalable products</span><br className=""/>
</h1>
<div className="flex gap-x-3 gap-y-3 items-center">
<a className="group inline-flex items-center gap-3 hover:bg-zinc-800 transition-colors text-base font-normal text-white bg-zinc-900 rounded-full py-3.5 px-6" href="#work">
                    View Work
                    <svg aria-hidden="true" className="group-hover:translate-y-1 transition duration-250 w-[13px] h-[13px]" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</a>
<a className="transition-colors hover:bg-zinc-300 text-base font-normal text-zinc-900 text-center bg-zinc-200 rounded-full pt-3.5 pr-6 pb-3.5 pl-6" href="mailto:hello@example.com">
    Get in touch
</a>
</div>
</section>

<div className="-mx-8 md:-mx-14 lg:-mx-14 border-y border-zinc-800 overflow-hidden py-3.5 bg-black text-white">
<div className="flex whitespace-nowrap marquee-track w-max">
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">Product Design<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">UX Research<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">Interaction Design<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">Design Systems<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">Prototyping<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">Visual Design<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">User Testing<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">Strategy<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">Product Design<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">UX Research<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">Interaction Design<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">Design Systems<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">Prototyping<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">Visual Design<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">User Testing<span className="opacity-30 mx-3">/</span></span>
<span className="text-sm font-light tracking-widest uppercase shrink-0 text-white mx-0">Strategy<span className="opacity-30 mx-3">/</span></span>
</div>
</div>

<section className="border-zinc-200/60 border-t pt-32 pb-32 gap-x-2.5 gap-y-2.5" id="work">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-zinc-950 mb-4">Selected Projects</h2>
<p className="text-xl text-zinc-500 font-normal max-w-xl">
                    A curated selection of recent work showcasing creative problem-solving and attention to detail.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-24">

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-200 mb-6 relative">
<img alt="Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-2xl font-normal tracking-tight mb-2 text-zinc-900 group-hover:text-zinc-600 transition-colors">Fintech Application</h3>
<p className="text-zinc-500 text-base">Product Design, Design Systems</p>
</div>
<div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-zinc-900">
<iconify-icon className="" height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</a>

<a className="group block md:mt-24" href="#">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-200 mb-6 relative">
<img alt="Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-2xl font-normal tracking-tight mb-2 text-zinc-900 group-hover:text-zinc-600 transition-colors">E-commerce Platform</h3>
<p className="text-zinc-500 text-base">UX/UI, Web Development</p>
</div>
<div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-zinc-900">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</a>

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-200 mb-6 relative">
<img alt="Project 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&amp;w=2794&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-2xl font-normal tracking-tight mb-2 text-zinc-900 group-hover:text-zinc-600 transition-colors">Brand Identity</h3>
<p className="text-zinc-500 text-base">Branding, Art Direction</p>
</div>
<div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-zinc-900">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</a>

<a className="group block md:mt-24" href="#">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-200 mb-6 relative">
<img alt="Project 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-2xl font-normal tracking-tight mb-2 text-zinc-900 group-hover:text-zinc-600 transition-colors">Creative Agency</h3>
<p className="text-zinc-500 text-base">Web Design, Framer</p>
</div>
<div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-zinc-900">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</a>
</div>
</section>
</main>

<section className="relative w-full min-h-[90vh] py-32 overflow-hidden bg-zinc-50/30 border-t border-zinc-200/60 flex items-center justify-center" id="skills">

<div className="absolute inset-0 pointer-events-none" id="skills-container">
<div className="skill-tag absolute top-[12%] left-[5%] md:left-[8%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            Design Systems</div>
<div className="skill-tag absolute top-[28%] left-[10%] md:left-[22%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            Product Design</div>
<div className="skill-tag absolute top-[15%] right-[10%] md:right-[25%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            Contentful</div>
<div className="skill-tag absolute top-[10%] right-[2%] md:right-[8%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            Adobe AEM</div>
<div className="skill-tag absolute top-[45%] left-[2%] md:left-[6%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            Tailwind</div>
<div className="skill-tag absolute top-[50%] right-[5%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            SASS &amp; CSS</div>
<div className="skill-tag absolute top-[68%] left-[8%] md:left-[12%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            JS</div>
<div className="skill-tag absolute top-[85%] left-[15%] md:left-[25%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            HTML</div>
<div className="skill-tag absolute top-[65%] right-[10%] md:right-[18%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            Mobile UI</div>
<div className="skill-tag absolute top-[82%] right-[5%] md:right-[12%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            Web Design</div>
<div className="skill-tag absolute top-[8%] left-[30%] md:left-[45%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            Wireframing</div>
<div className="skill-tag absolute top-[88%] left-[35%] md:left-[48%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            Figma</div>
<div className="skill-tag absolute top-[55%] left-[20%] md:left-[28%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            AI Design</div>
<div className="skill-tag absolute top-[35%] right-[8%] md:right-[12%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            UI Design</div>
<div className="skill-tag absolute top-[85%] right-[25%] md:right-[40%] bg-white shadow-sm border border-zinc-200/60 rounded-2xl px-5 py-2.5 text-base font-normal text-zinc-600 transition-all duration-500 ease-out z-0">
            UX Design</div>
</div>

<div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
<h2 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-normal text-zinc-950 tracking-tight mb-8">
            Skills — Design &amp; Development
        </h2>
<a className="transition-colors hover:bg-zinc-300 text-base font-normal text-zinc-900 text-center bg-zinc-200 rounded-full pt-3.5 pr-6 pb-3.5 pl-6" href="#">
            View detailed resume
        </a>
</div>
</section>

<footer className="text-white bg-zinc-950 pt-24 pb-24">
<div className="mx-auto px-8 md:px-14 lg:px-14">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-zinc-800 pb-20">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-6xl font-normal tracking-tight mb-8 text-balance">Have an idea?<br/>Let's build it together.</h2>
<a className="text-2xl text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-3 group" href="mailto:hello@albert.com">
                        hello@albert.com
                        <span className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-zinc-400 transition-colors">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</span>
</a>
</div>
<div className="flex flex-col gap-4 text-zinc-400 font-normal">
<p className="text-sm text-zinc-600 uppercase tracking-widest mb-2">Socials</p>
<a className="hover:text-white transition-colors flex items-center justify-between w-32 text-base" href="#">Twitter
                        <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
<a className="hover:text-white transition-colors flex items-center justify-between w-32 text-base" href="#">LinkedIn
                        <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
<a className="hover:text-white transition-colors flex items-center justify-between w-32 text-base" href="#">Dribbble
                        <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-zinc-500 font-normal">
<p>© 2026 Albert Lekaj.</p>
<p>Designed in California</p>
</div>
</div>
</footer>



    </>
  );
}
