import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
}



if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
document.getElementById('theme-color-meta')?.setAttribute('content', '#111918');
} else {
document.documentElement.classList.remove('dark');
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Dark Mode System ---
        const themeToggleBtn = document.getElementById('themeToggle');
        
        function updateTheme() {
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('color-theme', 'dark');
                document.getElementById('theme-color-meta')?.setAttribute('content', '#111918');
            } else {
                localStorage.setItem('color-theme', 'light');
                document.getElementById('theme-color-meta')?.setAttribute('content', '#EFECE9');
            }
        }

        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            updateTheme();
        });

        // --- Custom Cursor ---
        const cursor = document.getElementById('cursor');
        
        function bindCursorEvents() {
            if(window.innerWidth <= 1024) return;
            const interactives = document.querySelectorAll('.interactive, a, button, input, textarea');
            interactives.forEach(el => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
                el.addEventListener('mouseenter', addHover);
                el.addEventListener('mouseleave', removeHover);
            });
        }

        function addHover() { cursor.classList.add('hovered'); }
        function removeHover() { cursor.classList.remove('hovered'); }

        document.addEventListener('mousemove', (e) => {
            if(window.innerWidth > 1024) {
                // Use requestAnimationFrame for smoother performance
                requestAnimationFrame(() => {
                    cursor.style.left = `${e.clientX}px`;
                    cursor.style.top = `${e.clientY}px`;
                });
            }
        });

        // --- Sticky Nav Effect ---
        const navbar = document.querySelector('#navbar nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('py-2', 'px-5');
                navbar.classList.remove('py-3', 'px-6');
            } else {
                navbar.classList.add('py-3', 'px-6');
                navbar.classList.remove('py-2', 'px-5');
            }
        }, { passive: true });

        // --- Mobile Menu ---
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if(isMenuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
            });
        });

        // --- Video Upload Logic ---
        const toggleUploadBtn = document.getElementById('toggleUploadBtn');
        const closeUploadBtn = document.getElementById('closeUploadBtn');
        const videoUploadForm = document.getElementById('videoUploadForm');
        const videoFile = document.getElementById('videoFile');
        const fileNameDisplay = document.getElementById('fileNameDisplay');
        const submitVideoBtn = document.getElementById('submitVideoBtn');
        const videoGallery = document.getElementById('videoGallery');
        const videoTitle = document.getElementById('videoTitle');
        const videoDesc = document.getElementById('videoDesc');

        function toggleForm() {
            videoUploadForm.classList.toggle('hidden');
        }
        toggleUploadBtn.addEventListener('click', toggleForm);
        closeUploadBtn.addEventListener('click', toggleForm);

        let selectedFile = null;

        videoFile.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                selectedFile = e.target.files[0];
                let name = selectedFile.name;
                if(name.length > 20) name = name.substring(0, 17) + '...';
                fileNameDisplay.textContent = name;
                fileNameDisplay.classList.add('opacity-100');
            }
        });

        submitVideoBtn.addEventListener('click', () => {
            if (!selectedFile || !videoTitle.value.trim()) {
                alert('Please select a video and enter a title.');
                return;
            }

            const videoUrl = URL.createObjectURL(selectedFile);
            const card = document.createElement('div');
            card.className = "group relative aspect-video rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-black cursor-pointer reveal active interactive shadow-sm hover:shadow-2xl transition-all duration-500";
            card.onclick = () => openModal('video', videoTitle.value, videoUrl);
            
            card.innerHTML = `
                <video class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" preload="metadata" muted loop onmouseover="this.play()" onmouseout="this.pause()">
                    <source src="${videoUrl}" type="${selectedFile.type || 'video/mp4'}">
                </video>
                <div class="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 class="text-white font-medium text-sm tracking-tight">${videoTitle.value}</h4>
                    <p class="text-white/70 text-[10px] mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">${videoDesc.value || 'Local uploaded project.'}</p>
                </div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <iconify-icon icon="solar:play-linear" class="text-xl ml-0.5"></iconify-icon>
                    </div>
                </div>
            `;

            videoGallery.prepend(card);
            bindCursorEvents();

            // Reset
            videoTitle.value = ''; videoDesc.value = ''; videoFile.value = ''; selectedFile = null;
            fileNameDisplay.textContent = 'Local memory only'; fileNameDisplay.classList.remove('opacity-100');
            toggleForm();
        });

        // --- Modern Modal Lightbox ---
        const modal = document.getElementById('modal');
        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalContainer = document.getElementById('modalContainer');
        const modalContent = document.getElementById('modalContent');
        const modalCaption = document.getElementById('modalCaption');

        function openModal(type, title, src) {
            modal.classList.remove('hidden');
            document.body.classList.add('modal-open');
            modalCaption.innerText = title;

            if (type === 'graphic') {
                modalContent.innerHTML = `<img src="${src}" class="max-h-[85vh] w-auto object-contain rounded-2xl">`;
            } else if (type === 'video') {
                modalContent.innerHTML = `
                    <div class="aspect-video w-full bg-black flex items-center justify-center rounded-2xl overflow-hidden">
                        <video class="w-full h-full object-contain" autoplay controls playsinline>
                            <source src="${src}" type="video/mp4">
                        </video>
                    </div>
                `;
            }

            // Animate In
            requestAnimationFrame(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalContainer.classList.remove('scale-95', 'opacity-0');
            });
        }

        function closeModal() {
            // Animate Out
            modalBackdrop.classList.add('opacity-0');
            modalContainer.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.classList.remove('modal-open');
                modalContent.innerHTML = '';
            }, 300); // Wait for transition
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
        });

        // --- Scroll Reveal Animations ---
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Reveal once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        
        // Initial setup
        window.addEventListener('DOMContentLoaded', () => {
            bindCursorEvents();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="custom-cursor hidden lg:block" id="cursor"></div>

<header className="fixed w-full z-50 top-4 transition-all duration-500 px-4" id="navbar">
<nav className="max-w-[900px] mx-auto bg-white/70 dark:bg-[#15201F]/70 backdrop-blur-xl border border-[#D0D5CE]/50 dark:border-white/10 rounded-full shadow-lg dark:shadow-black/50 transition-all duration-300 flex items-center justify-between px-6 py-3">
<a className="text-lg font-medium tracking-tight hover:text-[#3C5759] dark:hover:text-[#D1EBDB] transition-colors interactive" href="#">
                E.J.R.B
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal opacity-80 hover:opacity-100 hover:text-[#3C5759] dark:hover:text-[#D1EBDB] transition-colors interactive" href="#about">About</a>
<a className="text-sm font-normal opacity-80 hover:opacity-100 hover:text-[#3C5759] dark:hover:text-[#D1EBDB] transition-colors interactive" href="#services">Services</a>
<a className="text-sm font-normal opacity-80 hover:opacity-100 hover:text-[#3C5759] dark:hover:text-[#D1EBDB] transition-colors interactive" href="#portfolio">Portfolio</a>
<a className="px-5 py-2 bg-[#192524] dark:bg-[#D1EBDB] text-[#EFECE9] dark:text-[#192524] text-xs font-medium rounded-full hover:scale-105 active:scale-95 transition-transform interactive" href="#contact">
                    Let's Talk
                </a>
</div>
<div className="flex items-center gap-4">
<button className="opacity-80 hover:opacity-100 interactive text-xl flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors" id="themeToggle">
<iconify-icon className="hidden dark:block" icon="solar:moon-linear" id="themeIconDark"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:sun-linear" id="themeIconLight"></iconify-icon>
</button>
<button className="md:hidden opacity-80 hover:opacity-100 interactive text-2xl flex items-center" id="menuBtn">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<div className="absolute top-full mt-2 left-4 right-4 bg-white/95 dark:bg-[#15201F]/95 backdrop-blur-xl border border-[#D0D5CE]/50 dark:border-white/10 rounded-2xl p-6 flex flex-col gap-4 transform opacity-0 pointer-events-none scale-95 transition-all duration-300 shadow-2xl origin-top md:hidden" id="mobileMenu">
<a className="text-base font-normal py-2 border-b border-black/5 dark:border-white/5 mobile-link" href="#about">About</a>
<a className="text-base font-normal py-2 border-b border-black/5 dark:border-white/5 mobile-link" href="#services">Services</a>
<a className="text-base font-normal py-2 border-b border-black/5 dark:border-white/5 mobile-link" href="#portfolio">Portfolio</a>
<a className="text-base font-medium text-[#3C5759] dark:text-[#D1EBDB] py-2 mobile-link" href="#contact">Contact Me</a>
</div>
</header>
<main>

<section className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden">

<div className="absolute top-1/4 -right-32 w-[30rem] h-[30rem] bg-[#D1EBDB]/30 dark:bg-[#3C5759]/20 rounded-full blur-[100px] -z-10 ambient-glow"></div>
<div className="absolute bottom-1/4 -left-32 w-[25rem] h-[25rem] bg-[#959D90]/20 dark:bg-[#959D90]/10 rounded-full blur-[80px] -z-10 ambient-glow" style={{animationDelay: '-5s'}}></div>
<div className="max-w-[1200px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
<div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-8 text-xs font-medium tracking-wide">
<span className="w-2 h-2 rounded-full bg-[#3C5759] dark:bg-[#D1EBDB] animate-pulse"></span>
                        Available for Work
                    </div>
<h1 className="text-5xl lg:text-7xl leading-[1.1] font-medium tracking-tight mb-6">
                        Your Virtual <br className="hidden lg:block"/>Assistant Partner
                    </h1>
<p className="opacity-70 text-base lg:text-lg leading-relaxed max-w-lg mb-10 font-light">
                        Looking for a dedicated Virtual Assistant? I provide reliable, detail-oriented support focused on delivering impactful results that elevate your business.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="interactive px-8 py-3.5 bg-[#192524] dark:bg-[#EFECE9] text-[#EFECE9] dark:text-[#192524] rounded-full font-medium hover:scale-105 active:scale-95 transition-all text-sm text-center w-full sm:w-auto shadow-xl dark:shadow-white/10" href="#contact">
                            Contact me
                        </a>
<a className="interactive px-8 py-3.5 bg-transparent border border-[#192524]/20 dark:border-[#EFECE9]/20 hover:border-[#192524] dark:hover:border-[#EFECE9] rounded-full font-medium transition-all text-sm text-center w-full sm:w-auto" href="#portfolio">
                            Sample Works
                        </a>
<a className="interactive px-8 py-3.5 bg-[#D1EBDB] dark:bg-[#3C5759]/30 dark:hover:bg-[#3C5759]/50 text-[#192524] dark:text-[#EFECE9] rounded-full font-medium hover:bg-[#192524] hover:text-[#D1EBDB] transition-all text-sm text-center w-full sm:w-auto flex items-center justify-center gap-2" href="#cv">
                            View CV <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 dark:via-white/[0.02] to-transparent -z-10"></div>
<div className="max-w-[1000px] mx-auto px-6 text-center reveal">
<span className="text-[#3C5759] dark:text-[#D1EBDB] text-xs font-medium tracking-widest uppercase mb-4 block">Introduction</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-10">Elaine Joy R. Binauhan</h2>
<div className="space-y-6 opacity-80 leading-relaxed text-base lg:text-lg font-light max-w-3xl mx-auto">
<p>Hi! I’m Elaine Joy, a Virtual Assistant specializing in graphic design, photo and video editing, and data entry.</p>
<p>I use Adobe Photoshop, CapCut, and Canva for visuals, alongside MS Word and MS Excel for structured data management. I am constantly exploring new opportunities to grow and assist.</p>
<p>I’m passionate about leveraging my creative and administrative skills to streamline your processes, enhance your digital presence, and help your business scale efficiently.</p>
</div>
</div>
</section>

<section className="py-24 relative" id="about">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">Why Work With Me?</h2>
<div className="w-12 h-0.5 bg-black/10 dark:bg-white/10 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/50 dark:bg-[#15201F]/50 backdrop-blur-md p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-[#3C5759]/30 dark:hover:border-[#D1EBDB]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 group reveal h-full flex flex-col interactive relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D1EBDB]/40 dark:from-[#3C5759]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
<div className="w-12 h-12 bg-[#D1EBDB]/50 dark:bg-[#3C5759]/30 rounded-2xl flex items-center justify-center text-[#192524] dark:text-[#EFECE9] mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:star-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Skilled &amp; Reliable</h3>
<p className="opacity-70 leading-relaxed text-sm font-light">Backed by hands-on experience and continuous learning, I provide dependable support in digital marketing, social media, and creative design.</p>
</div>

<div className="bg-white/50 dark:bg-[#15201F]/50 backdrop-blur-md p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-[#3C5759]/30 dark:hover:border-[#D1EBDB]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 group reveal delay-100 h-full flex flex-col interactive relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D1EBDB]/40 dark:from-[#3C5759]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
<div className="w-12 h-12 bg-[#D1EBDB]/50 dark:bg-[#3C5759]/30 rounded-2xl flex items-center justify-center text-[#192524] dark:text-[#EFECE9] mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Partnership Focus</h3>
<p className="opacity-70 leading-relaxed text-sm font-light">I prioritize genuine connections. By aligning with your goals, I ensure every step reflects your brand’s unique personality and purpose.</p>
</div>

<div className="bg-white/50 dark:bg-[#15201F]/50 backdrop-blur-md p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-[#3C5759]/30 dark:hover:border-[#D1EBDB]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 group reveal delay-200 h-full flex flex-col interactive relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D1EBDB]/40 dark:from-[#3C5759]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
<div className="w-12 h-12 bg-[#D1EBDB]/50 dark:bg-[#3C5759]/30 rounded-2xl flex items-center justify-center text-[#192524] dark:text-[#EFECE9] mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Impact-Driven</h3>
<p className="opacity-70 leading-relaxed text-sm font-light">Simplifying workflows and enhancing your online presence to drive real improvements that support growth and give you peace of mind.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1200px] mx-auto px-4 sm:px-6" id="services">
<div className="bg-[#192524] dark:bg-[#15201F] text-[#EFECE9] rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden border border-white/5">
<div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -z-10"></div>
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-3">My Services</h2>
<p className="opacity-60 text-base font-light">Comprehensive digital solutions.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all duration-300 group interactive reveal">
<iconify-icon className="text-3xl mb-6 text-[#D1EBDB] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" icon="solar:smartphone-update-linear"></iconify-icon>
<h3 className="text-lg font-medium mb-2 tracking-tight">Social Media Management</h3>
<p className="text-xs opacity-60 leading-relaxed font-light">Strategy, content creation, and community engagement.</p>
</div>
<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all duration-300 group interactive reveal delay-100">
<iconify-icon className="text-3xl mb-6 text-[#D1EBDB] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" icon="solar:palette-linear"></iconify-icon>
<h3 className="text-lg font-medium mb-2 tracking-tight">Graphic Design</h3>
<p className="text-xs opacity-60 leading-relaxed font-light">Visual identity, marketing materials, and digital assets.</p>
</div>
<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all duration-300 group interactive reveal delay-200">
<iconify-icon className="text-3xl mb-6 text-[#D1EBDB] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" icon="solar:videocamera-linear"></iconify-icon>
<h3 className="text-lg font-medium mb-2 tracking-tight">Video Editing</h3>
<p className="text-xs opacity-60 leading-relaxed font-light">Reels, TikToks, YouTube cuts, and promotional videos.</p>
</div>
<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all duration-300 group interactive reveal">
<iconify-icon className="text-3xl mb-6 text-[#D1EBDB] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" icon="solar:printer-linear"></iconify-icon>
<h3 className="text-lg font-medium mb-2 tracking-tight">Print Design</h3>
<p className="text-xs opacity-60 leading-relaxed font-light">Business cards, flyers, brochures, and posters.</p>
</div>
<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all duration-300 group interactive reveal delay-100">
<iconify-icon className="text-3xl mb-6 text-[#D1EBDB] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" icon="solar:keyboard-linear"></iconify-icon>
<h3 className="text-lg font-medium mb-2 tracking-tight">Data Entry</h3>
<p className="text-xs opacity-60 leading-relaxed font-light">Accurate data management, organization, and reporting.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="portfolio">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">Sample Works</h2>
<div className="w-12 h-0.5 bg-black/10 dark:bg-white/10 mx-auto rounded-full"></div>
</div>

<div className="mb-24">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 reveal">
<h3 className="flex items-center gap-3 text-xl font-medium tracking-tight">
<iconify-icon className="text-2xl opacity-70" icon="solar:videocamera-linear"></iconify-icon> Video Projects
                        </h3>
<button className="px-5 py-2.5 bg-white dark:bg-[#15201F] border border-black/10 dark:border-white/10 text-xs font-medium rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors interactive" id="toggleUploadBtn">
                            + Add Project
                        </button>
</div>

<div className="hidden bg-white/50 dark:bg-[#15201F]/50 backdrop-blur-xl p-6 rounded-[2rem] border border-black/5 dark:border-white/10 shadow-lg mb-8 transition-all duration-300 origin-top" id="videoUploadForm">
<div className="flex justify-between items-center mb-6">
<h4 className="text-sm font-medium tracking-tight">Upload New Video</h4>
<button className="opacity-50 hover:opacity-100 interactive transition-opacity p-2" id="closeUploadBtn">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-4">
<div className="space-y-1.5">
<label className="text-[10px] font-medium uppercase tracking-widest opacity-60 ml-1">Project Title</label>
<input className="w-full bg-white/80 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl p-3 focus:outline-none focus:border-[#3C5759] dark:focus:border-[#D1EBDB] transition-all text-xs" id="videoTitle" placeholder="Enter title..." type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium uppercase tracking-widest opacity-60 ml-1">Description</label>
<textarea className="w-full bg-white/80 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl p-3 focus:outline-none focus:border-[#3C5759] dark:focus:border-[#D1EBDB] transition-all text-xs resize-none" id="videoDesc" placeholder="Brief description..." rows="3"></textarea>
</div>
</div>
<div className="flex flex-col gap-4">
<label className="flex-1 flex flex-col items-center justify-center border border-dashed border-black/20 dark:border-white/20 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer interactive group p-6 text-center" htmlFor="videoFile">
<iconify-icon className="text-3xl opacity-50 group-hover:opacity-100 mb-2 transition-opacity" icon="solar:upload-linear"></iconify-icon>
<span className="text-xs font-medium mb-1">Select MP4 File</span>
<span className="text-[10px] opacity-50" id="fileNameDisplay">Local memory only</span>
<input accept="video/mp4,video/webm" className="hidden" id="videoFile" type="file"/>
</label>
<button className="w-full py-3 bg-[#192524] dark:bg-[#EFECE9] text-[#EFECE9] dark:text-[#192524] text-xs font-medium rounded-2xl hover:scale-[1.02] active:scale-95 transition-transform interactive" id="submitVideoBtn">
                                    Publish to Gallery
                                </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="videoGallery">
<div className="group relative aspect-video rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-black cursor-pointer reveal interactive shadow-sm hover:shadow-2xl transition-all duration-500" onclick="openModal('video', 'Creative Editing Reel', 'https://assets.mixkit.co/videos/preview/mixkit-working-on-a-computer-at-home-43610-large.mp4')">
<video className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loop="" muted="" onmouseout="this.pause()" onmouseover="this.play()" preload="metadata">
<source src="https://assets.mixkit.co/videos/preview/mixkit-working-on-a-computer-at-home-43610-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="text-white font-medium text-sm tracking-tight">Creative Editing Reel</h4>
<p className="text-white/70 text-[10px] mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Sample promotional and short-form video edit demonstrating cuts, transitions, and pacing.</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
<iconify-icon className="text-xl ml-0.5" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div>
<h3 className="flex items-center gap-3 reveal text-xl font-medium tracking-tight mb-8">
<iconify-icon className="text-2xl opacity-70" icon="solar:gallery-linear"></iconify-icon> Graphic Design
                    </h3>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="group relative aspect-square rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 cursor-pointer reveal interactive" onclick="openModal('graphic', 'Design Concept', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe96f0c6-db56-4552-a51a-cfce8273f322_800w.png')">
<img className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe96f0c6-db56-4552-a51a-cfce8273f322_800w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium text-xs tracking-widest px-4 py-2 border border-white/30 rounded-full scale-90 group-hover:scale-100 transition-transform duration-300">VIEW</span>
</div>
</div>
<div className="group relative aspect-square rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 cursor-pointer reveal interactive delay-100" onclick="openModal('graphic', 'Marketing Material', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27e733a5-a756-429f-b9bc-cebb65c54aad_800w.png')">
<img className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27e733a5-a756-429f-b9bc-cebb65c54aad_800w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium text-xs tracking-widest px-4 py-2 border border-white/30 rounded-full scale-90 group-hover:scale-100 transition-transform duration-300">VIEW</span>
</div>
</div>
<div className="group relative aspect-square rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 cursor-pointer reveal interactive delay-200" onclick="openModal('graphic', 'Social Media Post', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48641f02-83e5-4b68-a7be-cd218d37da68_800w.png')">
<img className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48641f02-83e5-4b68-a7be-cd218d37da68_800w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium text-xs tracking-widest px-4 py-2 border border-white/30 rounded-full scale-90 group-hover:scale-100 transition-transform duration-300">VIEW</span>
</div>
</div>
<div className="group relative aspect-square rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 cursor-pointer reveal interactive delay-300" onclick="openModal('graphic', 'Campaign Asset', 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/133cb759-48af-4483-bdf7-f8eb5952439b_800w.png')">
<img className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/133cb759-48af-4483-bdf7-f8eb5952439b_800w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium text-xs tracking-widest px-4 py-2 border border-white/30 rounded-full scale-90 group-hover:scale-100 transition-transform duration-300">VIEW</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-black/5 dark:border-white/5 bg-white/30 dark:bg-black/10 overflow-hidden relative flex">

<div className="max-w-[1200px] mx-auto px-6 w-full">
<div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
<div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-3xl" icon="logos:adobe-photoshop"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Photoshop</span>
</div>
<div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-3xl" icon="logos:canva"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Canva</span>
</div>
<div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-3xl text-black dark:text-white" icon="simple-icons:capcut"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">CapCut</span>
</div>
<div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-3xl" icon="logos:microsoft-word"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Word</span>
</div>
<div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon className="text-3xl" icon="logos:microsoft-excel"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Excel</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1000px] mx-auto px-6" id="cv">
<div className="bg-white/50 dark:bg-[#15201F]/50 backdrop-blur-md rounded-[2.5rem] shadow-xl border border-black/5 dark:border-white/5 overflow-hidden flex flex-col md:flex-row reveal">
<div className="p-10 md:p-12 md:w-2/5 bg-[#192524] dark:bg-black/20 text-[#EFECE9] flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
<div className="relative z-10">
<h2 className="text-2xl font-medium tracking-tight mb-2">Elaine Joy R. Binauhan</h2>
<p className="opacity-60 mb-10 text-xs tracking-wide">Virtual Assistant &amp; Creative</p>
<div className="space-y-4 text-sm font-light opacity-90">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg opacity-60" icon="solar:phone-linear"></iconify-icon>
<span>+63 952 449 2672</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-lg opacity-60" icon="solar:letter-linear"></iconify-icon>
<span>elainejoybinauhan1@gmail.com</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-lg opacity-60" icon="solar:link-linear"></iconify-icon>
<a className="hover:text-[#D1EBDB] transition-colors underline underline-offset-4 decoration-white/20" href="https://elainejoybinauhan1.my.canva.site/" target="_blank">Portfolio Site</a>
</div>
</div>
</div>
<div className="mt-12 flex flex-col gap-3 relative z-10">
<a className="w-full py-3 bg-[#D1EBDB] dark:bg-[#EFECE9] text-[#192524] rounded-full text-center text-xs font-medium hover:scale-[1.02] active:scale-95 transition-all interactive" href="https://elainejoybinauhan1.my.canva.site/" target="_blank">View CV Online</a>
<button className="w-full py-3 border border-white/20 text-[#EFECE9] rounded-full text-center text-xs font-medium hover:bg-white/5 active:scale-95 transition-all interactive flex items-center justify-center gap-2">
                            Download CV <iconify-icon className="text-sm" icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>
<div className="p-10 md:p-12 md:w-3/5">
<h3 className="text-lg font-medium mb-6 flex items-center gap-2 tracking-tight">
<iconify-icon className="text-xl text-[#3C5759] dark:text-[#D1EBDB]" icon="solar:user-linear"></iconify-icon> Profile Overview
                    </h3>
<div className="grid sm:grid-cols-2 gap-8">
<div>
<h4 className="font-medium opacity-60 mb-3 text-[10px] uppercase tracking-widest">Skills</h4>
<ul className="space-y-2 text-sm font-light opacity-80">
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#3C5759] dark:bg-[#D1EBDB]"></div> Social Media Management</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#3C5759] dark:bg-[#D1EBDB]"></div> Graphic Design</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#3C5759] dark:bg-[#D1EBDB]"></div> Video Editing</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#3C5759] dark:bg-[#D1EBDB]"></div> Data Entry</li>
</ul>
</div>
<div>
<h4 className="font-medium opacity-60 mb-3 text-[10px] uppercase tracking-widest">Education</h4>
<div className="space-y-3 text-sm font-light opacity-80">
<p>Relevant Certifications in Virtual Assistance</p>
<p>Continuous Learning in Digital Marketing</p>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5">
<h4 className="font-medium opacity-60 mb-2 text-[10px] uppercase tracking-widest">Availability</h4>
<p className="text-sm font-light opacity-80">Open for full-time, part-time, or project-based collaborations. Flexible with time zones.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[#3C5759] dark:bg-black/40 -z-20"></div>

<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent -z-10"></div>
<div className="max-w-[700px] mx-auto px-6 relative z-10 text-[#EFECE9]">
<div className="text-center mb-12 reveal">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">Ready to Elevate Your Business?</h2>
<p className="text-sm font-light opacity-70 max-w-lg mx-auto">Focus on your expertise while I handle the creative and administrative tasks seamlessly.</p>
</div>
<form className="space-y-4 reveal delay-100 bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl" onsubmit="event.preventDefault(); alert('Message sent successfully!');">
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[10px] font-medium uppercase tracking-widest opacity-60 ml-2">Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-2xl p-3.5 text-[#EFECE9] placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-black/40 transition-all text-sm" placeholder="Your Name" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium uppercase tracking-widest opacity-60 ml-2">Email</label>
<input className="w-full bg-black/20 border border-white/10 rounded-2xl p-3.5 text-[#EFECE9] placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-black/40 transition-all text-sm" placeholder="your@email.com" required="" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium uppercase tracking-widest opacity-60 ml-2">Message</label>
<textarea className="w-full bg-black/20 border border-white/10 rounded-2xl p-3.5 text-[#EFECE9] placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-black/40 transition-all text-sm resize-none" placeholder="How can I help you?" required="" rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full py-3.5 bg-[#D1EBDB] text-[#192524] text-sm font-medium rounded-2xl hover:bg-white active:scale-[0.98] transition-all flex items-center justify-center gap-2 interactive" type="submit">
                            Send Message <iconify-icon className="text-base" icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</section>
</main>

<footer className="py-8 text-center text-xs font-medium opacity-40 border-t border-black/5 dark:border-white/5 relative z-10">
<p>© 2023 Elaine Joy R. Binauhan. All rights reserved.</p>
</footer>

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center" id="modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-300 opacity-0" id="modalBackdrop" onclick="closeModal()"></div>

<button className="absolute top-6 right-6 z-50 text-white/50 hover:text-white transition-colors interactive p-2 rounded-full hover:bg-white/10" onclick="closeModal()">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear"></iconify-icon>
</button>

<div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center transform scale-95 opacity-0 transition-all duration-300" id="modalContainer">
<div className="w-full flex items-center justify-center mb-4 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50" id="modalContent">

</div>
<div className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-white font-medium text-xs tracking-wide border border-white/10">
<span id="modalCaption">Project Title</span>
</div>
</div>
</div>



    </>
  );
}
