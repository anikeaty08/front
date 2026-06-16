import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
        // Initialize ParticlesJS
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.progress-dot');
        const magneticElements = document.querySelectorAll('.magnetic');
        let currentIndex = 0;
        let isScrolling = false;
        let touchStartY = 0;
        
        // Initialize
        updateActiveDot(currentIndex);
        
        // Magnetic effect
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        });
        
        // Scroll event
        window.addEventListener('wheel', (e) => {
            if (isScrolling) return;
            
            isScrolling = true;
            if (e.deltaY > 0) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Touch events
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            isScrolling = true;
            if (diff > 50) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else if (diff < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                changeSection(currentIndex);
            });
        });
        
        function changeSection(index) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            sections[index].classList.add('active');
            updateActiveDot(index);
            
            const reveals = sections[index].querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 150);
            });
            
            sections.forEach((section, i) => {
                if (i !== index) {
                    const otherReveals = section.querySelectorAll('.reveal');
                    otherReveals.forEach(el => {
                        el.classList.remove('active');
                    });
                }
            });
        }
        
        function updateActiveDot(index) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
        }
    });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute inset-0 -z-10" id="particles-js">


<canvas className="particles-js-canvas-el" height="877" style={{width: '100%', height: '100%'}} width="1903"></canvas></div></div>
<div className="ambient-glow"></div>

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
<div className="flex h-16 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-white font-heading font-medium tracking-tight text-lg group flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    IY
                </span>
<span className="opacity-80 group-hover:opacity-100 transition-opacity text-sm">By I.Y</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white hover:bg-white hover:text-black hover:border-transparent transition-all duration-300" href="mailto:hello@by-iy.com">
<span className="">Start Project</span>
<iconify-icon className="" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</nav>
<main className="flex-grow sm:px-6 pt-32 pr-4 pb-20 pl-4">
<div className="max-w-[1200px] mx-auto space-y-4">

<section className="mb-16 fade-in-up">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-xs font-medium text-neutral-400 mb-6 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for freelance &amp; collaboration
          </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter-custom leading-[1.1]">
            Digital design for <br/>
<span className="text-neutral-500">visionary brands.</span>
</h1>
</div>
<div className="md:text-right max-w-xs">
<p className="leading-relaxed text-sm text-neutral-400">Specialising in minimal aesthetics, interaction design,
            and high-conversion web experiences.</p>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">

<div className="glass-card rounded-3xl p-6 md:col-span-3 lg:col-span-4 flex flex-col justify-between h-full min-h-[320px] fade-in-up delay-100 group relative overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="z-10 flex relative items-start justify-between">
<div className="overflow-hidden w-16 h-16 border-white/10 border rounded-2xl">
<img alt="Profile" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 opacity-80 max-w-sm object-cover absolute grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/653b29a9-14da-4072-a6ad-e51355547c3b_800w.webp" style={{}}/>
</div>
</div>
<div className="relative z-10 mt-auto">
<h2 className="text-xl text-white font-medium tracking-tight">Ibrahim Y.</h2>
<p className="text-sm text-neutral-500 mt-1">Website &amp; Brand Designer</p>
<div className="flex flex-wrap gap-2 mt-6 gap-x-2 gap-y-2">
<span className="text-[10px] uppercase text-neutral-400 tracking-wider bg-white/5 border-white/5 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">U.K based</span>
<span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] uppercase tracking-wider text-neutral-400">GMT+0</span>
</div>
</div>
</div>

<div className="glass-card md:col-span-3 lg:col-span-8 overflow-hidden group min-h-[320px] fade-in-up delay-200 rounded-3xl relative">
<div className="absolute top-6 left-6 z-20">
<span className="px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-xs text-white flex items-center gap-1.5">
<iconify-icon className="" icon="lucide:sparkles" width="12"></iconify-icon>
                            Latest Work
                        </span>
</div>
<div className="absolute inset-0 bg-neutral-900">
<img alt="Abstract Design" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad10ff79-42f1-4b89-95a8-9fd58386be65_1600w.png" style={{}}/>
</div>
<div className="bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="flex w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-end justify-between">
<div className="">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Hikaya Nights</h3>
<p className="text-sm text-neutral-400 max-w-md">A thoughtful UI kit designed to make bedtime stories magical,
              calm, and effortless for kids and parents alike.</p>
</div>
<div className="hidden sm:flex w-12 h-12 rounded-full bg-white text-black items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon className="" icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 md:col-span-6 lg:col-span-6 flex flex-col justify-center fade-in-up delay-300">
<iconify-icon className="text-neutral-600 mb-6" icon="lucide:quote" strokeWidth="1.5" width="32"></iconify-icon>
<p className="md:text-xl leading-relaxed text-lg text-neutral-200 font-heading">"We design websites that work before
          they impress.
          Every element earns its place."</p>
<div className="mt-8 flex items-center gap-2 text-xs font-medium text-neutral-500 uppercase tracking-widest">
<span className="w-8 h-[1px] bg-neutral-700"></span>
          Design Philosophy
        </div>
</div>

<div className="glass-card md:col-span-3 lg:col-span-3 flex flex-col fade-in-up delay-400 rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="mb-auto">
<h3 className="text-white font-medium tracking-tight mb-1">Toolkit</h3>
<p className="text-xs text-neutral-500">The systems I build with</p>
</div>
<div className="mt-6 space-y-5">
<div className="flex group/item cursor-default items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400 group-hover/item:text-white transition-colors" icon="lucide:figma" width="18"></iconify-icon>
<span className="text-sm text-neutral-400 group-hover/item:text-white transition-colors">Figma</span>
</div>
</div>
<div className="flex group/item cursor-default items-center justify-between">
<div className="flex gap-x-3 gap-y-3 items-center">
<svg className="group-hover/item:text-white transition-colors w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="code-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m18 16 4-4-4-4"></path>
<path d="m6 8-4 4 4 4"></path>
<path d="m14.5 4-5 16"></path>
</svg>
<span className="group-hover/item:text-white transition-colors text-sm text-neutral-400">Tailwind</span>
</div>
</div>
<div className="flex group/item cursor-default space-y-5 items-center justify-between">
<div className="flex gap-x-3 gap-y-3 items-center">
<svg className="group-hover/item:text-white transition-colors w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="html5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zm7.031 9.75l-.232-2.718l10.059.003l.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426l-2.91.804l-2.955-.81l-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443l.744-8.157z" fill="#ffffff">
</path>
</svg>
<span className="group-hover/item:text-white transition-colors text-sm text-neutral-400">HTML</span>
</div>
</div>
<div className="flex group/item cursor-default items-center justify-between">
<div className="flex gap-x-3 gap-y-3 items-center">
<svg className="group-hover/item:text-white transition-colors w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="javascript" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M0 0h24v24H0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873c-.736-.345-1.554-.585-1.797-1.14c-.091-.33-.105-.51-.046-.705c.15-.646.915-.84 1.515-.66c.39.12.75.42.976.9c1.034-.676 1.034-.676 1.755-1.125c-.27-.42-.404-.601-.586-.78c-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005c-1.14 1.291-.811 3.541.569 4.471c1.365 1.02 3.361 1.244 3.616 2.205c.24 1.17-.87 1.545-1.966 1.41c-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109c1.74 1.756 6.09 1.666 6.871-1.004c.029-.09.24-.705.074-1.65zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805c0 1.232.063 2.363-.138 2.711c-.33.689-1.18.601-1.566.48c-.396-.196-.597-.466-.83-.855c-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517c.855.51 2.004.675 3.207.405c.783-.226 1.458-.691 1.811-1.411c.51-.93.402-2.07.397-3.346c.012-2.054 0-4.109 0-6.179z" fill="#ffffff"></path>
</svg>
<span className="group-hover/item:text-white transition-colors text-sm text-neutral-400">JavaScript </span>
</div>
</div>
<div className="w-full h-[1px] bg-white/5"></div>
<div className="w-full h-[1px] bg-white/5"></div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 md:col-span-3 lg:col-span-3 flex flex-col justify-between bg-white/[0.03] fade-in-up delay-400">
<div className="">
<h3 className="text-4xl font-medium text-white tracking-tighter-custom">1+</h3>
<p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Years Exp.</p>
</div>
<div className="mt-8">
<h3 className="text-4xl font-medium text-white tracking-tighter-custom">6</h3>
<p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Projects</p>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="flex text-[8px] text-white bg-neutral-800 w-6 h-6 border-black border rounded-full items-center justify-center">
                L</div>
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-black flex items-center justify-center text-[8px] text-white">
                S</div>
<div className="flex text-[8px] text-white bg-neutral-600 w-6 h-6 border-black border rounded-full items-center justify-center">
                V</div>
</div>
<span className="text-[10px] text-neutral-500">Trusted by brands</span>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 md:col-span-6 lg:col-span-4 fade-in-up delay-400">
<div className="flex items-center justify-between mb-8">
<h3 className="text-white font-medium tracking-tight">Services</h3>
<iconify-icon className="text-neutral-500" icon="lucide:layers" width="18"></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors"></div>
<div className="">
<h4 className="text-sm text-neutral-200 font-medium group-hover:text-white transition-colors">Website Design
              </h4>
<p className="text-xs text-neutral-500 mt-0.5">Modern, mobile-friendly sites that look great and convert.</p>
</div>
</li>
<li className="flex items-start gap-3 group">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors"></div>
<div className="">
<h4 className="group-hover:text-white transition-colors text-sm font-medium text-neutral-200">Brand Identity
              </h4>
<p className="text-xs text-neutral-500 mt-0.5">Logo, colours, fonts and business cards &amp; flyers to match.
              </p>
</div>
</li>
</ul>
</div>

<div className="glass-card rounded-3xl md:col-span-3 lg:col-span-4 overflow-hidden group relative min-h-[240px] fade-in-up delay-400">
<img alt="Project 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1413cda8-589b-4d17-949f-357bebce29fe_800w.png" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 z-10">
<h3 className="text-lg font-medium text-white tracking-tight">Website Redesign</h3>
</div>
</div>

<div className="glass-card rounded-3xl md:col-span-3 lg:col-span-4 overflow-hidden group relative min-h-[240px] fade-in-up delay-400">
<img alt="Project 3" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cff0d999-3042-46ae-a413-4c66c4324d95_800w.webp" style={{}}/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-6 left-6 z-10">
<h3 className="text-lg font-medium text-white tracking-tight">Brand Identity</h3>
</div>
</div>

<div className="glass-card md:col-span-6 lg:col-span-12 flex flex-col md:flex-row fade-in-up delay-400 overflow-hidden rounded-3xl pt-10 pr-10 pb-10 pl-10 relative gap-x-8 gap-y-8 items-center justify-between">
<div className="absolute right-0 top-0 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none">
</div>
<div className="text-center md:text-left z-10">
<h2 className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-2">Have an idea?</h2>
<p className="text-sm text-neutral-400 max-w-lg">Let's build something exceptional together. </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 z-10 w-full md:w-auto">
<a className="px-6 py-3 rounded-xl bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" href="mailto:hello@by-iy.com">
<span className="">Email Me</span>
<iconify-icon className="" icon="lucide:mail" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="#">
<span className="">Copy Email</span>
<iconify-icon icon="lucide:copy" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<footer className="flex flex-col md:flex-row gap-6 text-xs text-neutral-500 border-white/5 border-t mt-20 pt-10 pb-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-neutral-800"></span>
<p>© 2024 By I.Y. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">X</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
</div>
</footer>
</div>
</main>

    </>
  );
}
