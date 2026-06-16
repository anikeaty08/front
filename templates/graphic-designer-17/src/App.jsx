import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Header Blur on Scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-neutral-950/90', 'shadow-lg');
                header.classList.remove('bg-neutral-950/0');
            } else {
                header.classList.remove('bg-neutral-950/90', 'shadow-lg');
                header.classList.add('bg-neutral-950/0');
            }
        });

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const nav = document.getElementById('mobile-nav');
        const links = document.querySelectorAll('.mobile-link');
        let isOpen = false;

        function toggleMenu() {
            isOpen = !isOpen;
            if (isOpen) {
                nav.classList.remove('opacity-0', 'pointer-events-none');
                btn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="24" style="stroke-width: 1.5;"></iconify-icon>';
                document.body.style.overflow = 'hidden';
            } else {
                nav.classList.add('opacity-0', 'pointer-events-none');
                btn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" style="stroke-width: 1.5;"></iconify-icon>';
                document.body.style.overflow = '';
            }
        }

        btn.addEventListener('click', toggleMenu);
        links.forEach(link => link.addEventListener('click', () => {
            if (isOpen) toggleMenu();
        }));

        // Skill Bar Animation with Intersection Observer
        const skillBars = document.querySelectorAll('.skill-bar');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    bar.style.width = bar.getAttribute('data-width');
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));

        // Portfolio Filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        // Small timeout to allow display:block to apply before animating opacity
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300); // match transition duration if we had one
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#FFD700]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 transition-all duration-300" id="header">
<div className="flex max-w-6xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<a className="text-lg font-bold tracking-tighter uppercase text-white relative z-50" href="#home" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                FAHIM <span className="text-[#FFD700]">BIJAPURI</span>
</a>

<nav className="hidden md:flex gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="uppercase hover:text-white transition-colors text-xs font-medium text-neutral-400 tracking-widest" href="#portfolio">Portfolio</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>

<button aria-label="Toggle menu" className="md:hidden text-neutral-400 hover:text-white relative z-50" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>

<nav className="fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300 z-40" id="mobile-nav">
<a className="mobile-link text-xl font-medium tracking-widest text-white uppercase" href="#home">Home</a>
<a className="mobile-link text-xl font-medium tracking-widest text-white uppercase" href="#about">About</a>
<a className="mobile-link text-xl font-medium tracking-widest text-white uppercase" href="#services">Services</a>
<a className="mobile-link text-xl font-medium tracking-widest text-white uppercase" href="#portfolio">Portfolio</a>
<a className="mobile-link text-xl font-medium tracking-widest text-white uppercase" href="#contact">Contact</a>
</nav>
</header>

<section className="min-h-screen flex overflow-hidden font-geist pt-20 relative items-center justify-center" id="home">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white leading-tight mb-4" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
            FAHIM <span className="text-[#FFD700] block mt-2">BIJAPURI</span>
</h1>
<p className="text-xs md:text-sm font-medium text-[#FFD700] tracking-widest uppercase mb-6">
            Graphic Designer <span className="mx-2 text-white/20">|</span> Print Specialist
            <span className="mx-2 text-white/20">|</span> Acrylic Works Expert
        </p>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            With 2.5 years of experience in graphic design, printing, and acrylic works, I specialize in creating
            impactful visual systems for modern brands.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3 bg-[#FFD700] text-black rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-white transition-colors duration-300 text-center" href="#portfolio">
                View My Work
            </a>
<a className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/10 text-white rounded-full text-xs font-medium uppercase tracking-widest hover:bg-white/5 transition-colors duration-300 text-center" href="#contact">
                Contact Me
            </a>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pb-24 relative" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative group aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5">
<img alt="Fahim Bijapuri" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-100 opacity-70 w-full h-full object-cover grayscale scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33b7db60-735e-422d-b434-3a6d82a59ae1_1600w.jpg"/>
<div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
</div>
<div className="">
<h2 className="text-sm font-medium text-[#FFD700] tracking-widest uppercase mb-4" style={{fontFamily: '\'Montserrat\', sans-serif'}}>About Me</h2>
<h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 leading-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                        Bridging Digital Design &amp; Physical Production.
                    </h3>
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-6">
                        I am a passionate Graphic Designer and Print Specialist with a keen eye for detail. My expertise lies in taking concepts from the digital canvas and bringing them into the physical world with precision.
                    </p>
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-8">
                        Whether it's crafting a brand identity from scratch or managing large-scale acrylic signage projects, I ensure every pixel and print meets the highest standards of quality and aesthetics.
                    </p>
<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/5 text-[#FFD700] text-xs font-medium tracking-wide">
<iconify-icon icon="solar:case-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        2.5 Years Professional Experience
                    </div>
</div>
</div>
</div>
</section>

<section className="border-y bg-neutral-900/50 border-white/5 pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-16 text-center" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Technical Expertise</h2>
<div className="space-y-8" id="skills-container">

<div className="">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-white tracking-wide">Adobe Photoshop</span>
<span className="text-xs font-light text-neutral-400">95%</span>
</div>
<div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-white rounded-full w-0 transition-all duration-1000 ease-out skill-bar" data-width="95%" style={{width: '95%'}}></div>
</div>
</div>

<div className="">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-white tracking-wide">Adobe Illustrator</span>
<span className="text-xs font-light text-neutral-400">90%</span>
</div>
<div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-white rounded-full w-0 transition-all duration-1000 ease-out delay-100 skill-bar" data-width="90%" style={{width: '90%'}}></div>
</div>
</div>

<div className="">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-white tracking-wide">CorelDRAW</span>
<span className="text-xs font-light text-neutral-400">90%</span>
</div>
<div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-[#FFD700] rounded-full w-0 transition-all duration-1000 ease-out delay-200 skill-bar" data-width="90%" style={{width: '90%'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Services</h2>
<p className="text-sm text-neutral-400 font-light max-w-xl mx-auto">Comprehensive design and production solutions tailored for your brand.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-[#FFD700]/30 hover:bg-neutral-900 transition-all duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-[#FFD700] transition-colors duration-300 mb-6" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-base font-bold text-white tracking-tight mb-3" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Logo &amp; Branding</h3>
<p className="text-xs text-neutral-400 font-light leading-relaxed">Unique logo designs and comprehensive brand identity guidelines.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-[#FFD700]/30 hover:bg-neutral-900 transition-all duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-[#FFD700] transition-colors duration-300 mb-6" icon="solar:printer-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-base font-bold text-white tracking-tight mb-3" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Print Design</h3>
<p className="text-xs text-neutral-400 font-light leading-relaxed">Banners, Posters, Hoardings, Visiting Cards, and Flex prints.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-[#FFD700]/30 hover:bg-neutral-900 transition-all duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-[#FFD700] transition-colors duration-300 mb-6" icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-base font-bold text-white tracking-tight mb-3" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Acrylic Works</h3>
<p className="text-xs text-neutral-400 font-light leading-relaxed">LED Sign Boards, Acrylic Letters, and 3D Shop Signage.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-[#FFD700]/30 hover:bg-neutral-900 transition-all duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-[#FFD700] transition-colors duration-300 mb-6" icon="solar:maximize-square-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-base font-bold text-white tracking-tight mb-3" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Large Format</h3>
<p className="text-xs text-neutral-400 font-light leading-relaxed">High-resolution large format printing for outdoor displays.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-neutral-900/30 border-white/5 border-t pt-24 pb-24" id="portfolio">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-10 text-center" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Selected Work</h2>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="filter-btn active px-5 py-2 rounded-full border border-white/10 text-xs font-medium uppercase tracking-wider text-neutral-400 hover:text-white hover:border-white/30 transition-all duration-300" data-filter="all">All</button>
<button className="filter-btn px-5 py-2 rounded-full border border-white/10 text-xs font-medium uppercase tracking-wider text-neutral-400 hover:text-white hover:border-white/30 transition-all duration-300" data-filter="logo">Logo</button>
<button className="filter-btn px-5 py-2 rounded-full border border-white/10 text-xs font-medium uppercase tracking-wider text-neutral-400 hover:text-white hover:border-white/30 transition-all duration-300" data-filter="print">Print</button>
<button className="filter-btn px-5 py-2 rounded-full border border-white/10 text-xs font-medium uppercase tracking-wider text-neutral-400 hover:text-white hover:border-white/30 transition-all duration-300" data-filter="acrylic">Acrylic</button>
</div>
<style>
                .filter-btn.active { background-color: #ffffff; color: #000000; border-color: #ffffff; }
            </style>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 block" data-category="logo">
<img alt="Logo Design" className="transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a174455-483c-4838-954c-52cf3f8aa143_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
<h4 className="text-white font-bold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Brand Identity</h4>
<p className="text-[#FFD700] text-xs font-medium uppercase tracking-widest mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Logo &amp; Guidelines</p>
</div>
</div>

<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 block" data-category="print">
<img alt="Print Design" className="transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fed7a771-b8be-4b78-9fa4-5c4ace1d7906_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
<h4 className="text-white font-bold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Event Poster</h4>
<p className="text-[#FFD700] text-xs font-medium uppercase tracking-widest mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Large Format Print</p>
</div>
</div>

<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 block" data-category="acrylic">
<img alt="Acrylic Sign" className="transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20945055-e03e-435c-8703-2c3af0f5d829_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
<h4 className="text-white font-bold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Shop Signage</h4>
<p className="text-[#FFD700] text-xs font-medium uppercase tracking-widest mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">3D Acrylic Letters</p>
</div>
</div>

<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 block" data-category="logo">
<img alt="Logo Mockup" className="transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d20c5f18-3e5b-4980-b45c-3b497e38dd20_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
<h4 className="text-white font-bold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Tech Logo</h4>
<p className="text-[#FFD700] text-xs font-medium uppercase tracking-widest mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Minimalist Design</p>
</div>
</div>

<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 block" data-category="acrylic">
<img alt="LED Board" className="transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dea1a11d-77a9-47c6-b0e6-d30fcac21cc5_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
<h4 className="text-white font-bold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{fontFamily: '\'Montserrat\', sans-serif'}}>LED Sign Board</h4>
<p className="text-[#FFD700] text-xs font-medium uppercase tracking-widest mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Night Visualization</p>
</div>
</div>

<div className="portfolio-item group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 block" data-category="print">
<img alt="Banner" className="transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1dec36d-a3e0-4e24-a1bb-7f9dfee95aae_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
<h4 className="text-white font-bold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Marketing Banner</h4>
<p className="text-[#FFD700] text-xs font-medium uppercase tracking-widest mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Flex Print</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="contact">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Let's Work Together</h2>
<p className="text-sm text-neutral-400 font-light mb-10 leading-relaxed max-w-md">
                        Ready to start your next project? Contact me for quotes on design, printing, or high-quality acrylic signage.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-neutral-300 group cursor-default">
<div className="w-10 h-10 rounded-full border border-white/5 bg-neutral-900/50 flex items-center justify-center text-neutral-500 group-hover:border-[#FFD700]/30 group-hover:text-[#FFD700] transition-colors">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide">+91 9284900770</span>
</div>
<div className="flex items-center gap-4 text-neutral-300 group cursor-default">
<div className="w-10 h-10 rounded-full border border-white/5 bg-neutral-900/50 flex items-center justify-center text-neutral-500 group-hover:border-[#FFD700]/30 group-hover:text-[#FFD700] transition-colors">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide">fahim.bijapuri@email.com</span>
</div>
<div className="flex items-center gap-4 text-neutral-300 group cursor-default">
<div className="w-10 h-10 rounded-full border border-white/5 bg-neutral-900/50 flex items-center justify-center text-neutral-500 group-hover:border-[#FFD700]/30 group-hover:text-[#FFD700] transition-colors">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide">India</span>
</div>
</div>
<div className="flex gap-3 mt-12">

<a aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/50 transition-colors" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
<a aria-label="Behance" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/50 transition-colors" href="#">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-down-up" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m3 16 4 4 4-4"></path><path d="M7 20V4"></path><path d="m21 8-4-4-4 4"></path><path d="M17 4v16"></path></svg>
</a>
</div>
</div>

<div className="p-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent">
<form className="bg-neutral-950 p-8 rounded-xl border border-white/5 flex flex-col gap-4 h-full">
<div className="">
<input className="w-full bg-neutral-900 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFD700]/50 focus:bg-neutral-800 transition-colors" placeholder="Your Name" required="" type="text"/>
</div>
<div className="">
<input className="w-full bg-neutral-900 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFD700]/50 focus:bg-neutral-800 transition-colors" placeholder="Your Email" required="" type="email"/>
</div>
<div className="flex-grow">
<textarea className="w-full h-full bg-neutral-900 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFD700]/50 focus:bg-neutral-800 transition-colors resize-none" placeholder="Your Message" required="" rows="4"></textarea>
</div>
<button className="w-full py-3 mt-2 bg-white text-black rounded-lg text-xs font-semibold uppercase tracking-widest hover:bg-[#FFD700] transition-colors duration-300" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/5 text-center">
<div className="max-w-6xl mx-auto px-6">
<p className="text-xs text-neutral-500 font-light tracking-wide uppercase">
                © 2023 <span className="font-medium text-white">Fahim Bijapuri</span>. All Rights Reserved.
            </p>
</div>
</footer>



    </>
  );
}
