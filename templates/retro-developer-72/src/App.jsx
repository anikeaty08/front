import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let isDarkMode = false;

        function toggleTheme() {
            isDarkMode = !isDarkMode;
            const body = document.getElementById('body');
            const header = document.getElementById('header');
            const footer = document.getElementById('footer');
            const slider = document.getElementById('toggleSlider');
            const scanlines = document.getElementById('scanlines');

            if (isDarkMode) {
                // Dark Mode
                body.style.backgroundColor = '#111111';
                body.style.color = '#ffffff';
                header.style.backgroundColor = '#111111';
                header.style.borderColor = '#03dffc';
                footer.style.backgroundColor = '#111111';
                footer.style.borderColor = '#03dffc';
                slider.style.transform = 'translateX(24px)';
                scanlines.style.background = 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(3,223,252,0.05) 2px, rgba(3,223,252,0.05) 4px)';
                
                // Update all cards and elements
                document.querySelectorAll('.bg-white').forEach(el => {
                    if (!el.classList.contains('border-4')) {
                        el.style.backgroundColor = '#1a1a1a';
                    }
                });
                
                // Update project cards
                document.querySelectorAll('[style*="box-shadow: 8px 8px 0 #000"]').forEach(el => {
                    el.style.backgroundColor = '#1a1a1a';
                });
                
            } else {
                // Light Mode
                body.style.backgroundColor = '#ffffff';
                body.style.color = '#000000';
                header.style.backgroundColor = '#ffffff';
                header.style.borderColor = '#000000';
                footer.style.backgroundColor = '#ffffff';
                footer.style.borderColor = '#000000';
                slider.style.transform = 'translateX(0)';
                scanlines.style.background = 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)';
                
                // Reset all cards
                document.querySelectorAll('[style*="background-color: rgb(26, 26, 26)"]').forEach(el => {
                    el.style.backgroundColor = '#ffffff';
                });
            }
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // Close mobile menu if open
                    document.getElementById('mobileMenu').classList.add('hidden');
                }
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slideUp');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > div').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-50 opacity-10" id="scanlines" style={{background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'}}></div>

<header className="fixed top-0 left-0 right-0 z-40 bg-white border-b-4 border-black transition-all duration-500" id="header">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 sm:h-20">

<a className="pixel-font text-sm sm:text-base tracking-tighter" href="#" style={{color: '#03dffc'}}>
                    PIXEL<span className="text-black dark-text">.DEV</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="font-semibold hover:text-[#03dffc] transition-colors border-b-4 border-transparent hover:border-[#03dffc]" href="#home">Home</a>
<a className="font-semibold hover:text-[#03dffc] transition-colors border-b-4 border-transparent hover:border-[#03dffc]" href="#projects">Projects</a>
<a className="font-semibold hover:text-[#03dffc] transition-colors border-b-4 border-transparent hover:border-[#03dffc]" href="#about">About</a>
<a className="font-semibold hover:text-[#03dffc] transition-colors border-b-4 border-transparent hover:border-[#03dffc]" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">

<button className="relative w-16 h-8 bg-black border-4 border-black rounded-none transition-all duration-300 overflow-hidden" id="themeToggle" onclick="toggleTheme()">
<div className="absolute top-0 left-0 w-6 h-6 bg-[#03dffc] transition-transform duration-300 flex items-center justify-center" id="toggleSlider">
<iconify-icon height="16" icon="solar:sun-linear" id="sunIcon" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<iconify-icon className="absolute right-1 top-1 text-white" height="16" icon="solar:moon-linear" id="moonIcon" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>

<button className="md:hidden p-2 border-4 border-black" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="hidden md:hidden bg-white border-t-4 border-black" id="mobileMenu">
<div className="px-4 py-4 space-y-4">
<a className="block font-semibold py-2 border-b-4 border-transparent hover:border-[#03dffc]" href="#home">Home</a>
<a className="block font-semibold py-2 border-b-4 border-transparent hover:border-[#03dffc]" href="#projects">Projects</a>
<a className="block font-semibold py-2 border-b-4 border-transparent hover:border-[#03dffc]" href="#about">About</a>
<a className="block font-semibold py-2 border-b-4 border-transparent hover:border-[#03dffc]" href="#contact">Contact</a>
</div>
</div>
</header>

<section className="min-h-screen pt-20 sm:pt-24 relative overflow-hidden" id="home">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-32 left-10 w-20 h-20 border-4 border-[#ff03fc] rotate-45 hidden sm:block"></div>
<div className="absolute bottom-20 right-10 w-32 h-32 bg-[#fcff03] opacity-50 hidden sm:block"></div>
<div className="absolute top-1/2 right-20 w-16 h-16 border-4 border-[#03dffc] hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="relative">
<div className="relative w-64 h-64 sm:w-80 sm:h-80 border-8 border-black crt-effect" style={{boxShadow: '12px 12px 0 #03dffc'}}>
<div className="w-full h-full bg-gradient-to-br from-[#03dffc] to-[#ff03fc] flex items-center justify-center">
<span className="pixel-font text-6xl sm:text-8xl text-white">JD</span>
</div>

<div className="absolute inset-0 overflow-hidden">
<div className="w-full h-2 bg-white opacity-10" style={{animation: 'scanline 3s linear infinite'}}></div>
</div>
</div>

<div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#ff03fc] -z-10"></div>
</div>

<div className="text-center lg:text-left">
<p className="pixel-font text-xs sm:text-sm mb-4" style={{color: '#03dffc'}}>HELLO, I'M</p>
<h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
                        JOHN<br/>
<span className="relative inline-block">
                            DOE
                            <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#fcff03]"></span>
</span>
</h1>
<p className="pixel-font text-base sm:text-lg mb-8" style={{color: '#ff03fc', textShadow: '2px 2px 0 #03dffc'}}>
                        CREATIVE DEVELOPER
                    </p>
<p className="inter-font text-base sm:text-lg max-w-md mb-8 mx-auto lg:mx-0">
                        Building digital experiences with bold aesthetics and cutting-edge technology.
                    </p>
<a className="inline-block px-8 py-4 bg-[#03dffc] text-black font-bold border-4 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1" href="#projects" style={{boxShadow: '6px 6px 0 #000'}}>
                        VIEW PROJECTS
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 relative" id="projects">
<div className="absolute inset-0 opacity-5" style={{background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 11px)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16">
<p className="pixel-font text-xs sm:text-sm mb-4" style={{color: '#ff03fc'}}>MY WORK</p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                    PROJECTS
                </h2>
<div className="w-32 h-2 bg-[#03dffc] mx-auto mt-4"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white border-4 border-black transition-all duration-300 hover:-translate-y-2" onmouseenter="this.style.boxShadow='12px 12px 0 #03dffc'" onmouseleave="this.style.boxShadow='8px 8px 0 #000'" style={{boxShadow: '8px 8px 0 #000'}}>
<div className="relative h-48 bg-gradient-to-br from-[#03dffc] to-[#ff03fc] overflow-hidden crt-effect">
<div className="absolute inset-0 flex items-center justify-center">
<span className="pixel-font text-2xl text-white">01</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-2 pb-2 border-b-4 border-[#03dffc]">NEON DASHBOARD</h3>
<p className="inter-font text-sm mb-4">A retro-futuristic analytics dashboard with real-time data visualization.</p>
<div className="flex flex-wrap gap-2">
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#03dffc]">REACT</span>
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#ff03fc]">D3.JS</span>
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#fcff03]">NODE</span>
</div>
</div>
</div>

<div className="group bg-white border-4 border-black transition-all duration-300 hover:-translate-y-2" onmouseenter="this.style.boxShadow='12px 12px 0 #ff03fc'" onmouseleave="this.style.boxShadow='8px 8px 0 #000'" style={{boxShadow: '8px 8px 0 #000'}}>
<div className="relative h-48 bg-gradient-to-br from-[#fcff03] to-[#ff03fc] overflow-hidden crt-effect">
<div className="absolute inset-0 flex items-center justify-center">
<span className="pixel-font text-2xl text-black">02</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-2 pb-2 border-b-4 border-[#ff03fc]">ARCADE STORE</h3>
<p className="inter-font text-sm mb-4">E-commerce platform with retro gaming aesthetics and smooth UX.</p>
<div className="flex flex-wrap gap-2">
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#03dffc]">NEXT.JS</span>
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#ff03fc]">STRIPE</span>
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#fcff03]">MONGO</span>
</div>
</div>
</div>

<div className="group bg-white border-4 border-black transition-all duration-300 hover:-translate-y-2" onmouseenter="this.style.boxShadow='12px 12px 0 #fcff03'" onmouseleave="this.style.boxShadow='8px 8px 0 #000'" style={{boxShadow: '8px 8px 0 #000'}}>
<div className="relative h-48 bg-gradient-to-br from-[#03dffc] to-[#fcff03] overflow-hidden crt-effect">
<div className="absolute inset-0 flex items-center justify-center">
<span className="pixel-font text-2xl text-black">03</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-2 pb-2 border-b-4 border-[#fcff03]">PIXEL CHAT</h3>
<p className="inter-font text-sm mb-4">Real-time messaging app with nostalgic 8-bit design elements.</p>
<div className="flex flex-wrap gap-2">
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#03dffc]">SOCKET</span>
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#ff03fc]">REDIS</span>
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#fcff03]">AWS</span>
</div>
</div>
</div>

<div className="group bg-white border-4 border-black transition-all duration-300 hover:-translate-y-2" onmouseenter="this.style.boxShadow='12px 12px 0 #03dffc'" onmouseleave="this.style.boxShadow='8px 8px 0 #000'" style={{boxShadow: '8px 8px 0 #000'}}>
<div className="relative h-48 bg-gradient-to-br from-[#ff03fc] to-[#03dffc] overflow-hidden crt-effect">
<div className="absolute inset-0 flex items-center justify-center">
<span className="pixel-font text-2xl text-white">04</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-2 pb-2 border-b-4 border-[#03dffc]">SYNTH PORTFOLIO</h3>
<p className="inter-font text-sm mb-4">Creative portfolio template with synthwave aesthetics.</p>
<div className="flex flex-wrap gap-2">
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#03dffc]">VUE</span>
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#ff03fc]">GSAP</span>
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#fcff03]">THREE</span>
</div>
</div>
</div>

<div className="group bg-white border-4 border-black transition-all duration-300 hover:-translate-y-2" onmouseenter="this.style.boxShadow='12px 12px 0 #ff03fc'" onmouseleave="this.style.boxShadow='8px 8px 0 #000'" style={{boxShadow: '8px 8px 0 #000'}}>
<div className="relative h-48 bg-gradient-to-br from-[#fcff03] to-[#03dffc] overflow-hidden crt-effect">
<div className="absolute inset-0 flex items-center justify-center">
<span className="pixel-font text-2xl text-black">05</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-2 pb-2 border-b-4 border-[#ff03fc]">RETRO CMS</h3>
<p className="inter-font text-sm mb-4">Content management system with vintage terminal interface.</p>
<div className="flex flex-wrap gap-2">
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#03dffc]">PYTHON</span>
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#ff03fc]">DJANGO</span>
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#fcff03]">PSQL</span>
</div>
</div>
</div>

<div className="group bg-white border-4 border-black transition-all duration-300 hover:-translate-y-2" onmouseenter="this.style.boxShadow='12px 12px 0 #fcff03'" onmouseleave="this.style.boxShadow='8px 8px 0 #000'" style={{boxShadow: '8px 8px 0 #000'}}>
<div className="relative h-48 bg-gradient-to-br from-[#03dffc] to-[#ff03fc] overflow-hidden crt-effect">
<div className="absolute inset-0 flex items-center justify-center">
<span className="pixel-font text-2xl text-white">06</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-2 pb-2 border-b-4 border-[#fcff03]">GAME HUB</h3>
<p className="inter-font text-sm mb-4">Gaming platform with leaderboards and social features.</p>
<div className="flex flex-wrap gap-2">
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#03dffc]">RUST</span>
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#ff03fc]">WASM</span>
<span className="pixel-font text-xs px-3 py-1 bg-black text-[#fcff03]">REACT</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 relative" id="about" style={{background: 'linear-gradient(135deg, #03dffc 0%, #ff03fc 100%)'}}>
<div className="absolute inset-0 bg-white opacity-95 dark-bg"></div>
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16">
<p className="pixel-font text-xs sm:text-sm mb-4" style={{color: '#03dffc'}}>WHO AM I</p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                    ABOUT ME
                </h2>
<div className="w-32 h-2 bg-[#ff03fc] mx-auto mt-4"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div>
<p className="inter-font text-lg mb-6">
                        I'm a creative developer passionate about blending retro aesthetics with modern technology. With over 5 years of experience, I specialize in building memorable digital experiences.
                    </p>
<p className="inter-font text-lg mb-8">
                        My work draws inspiration from 80s arcade games, synthwave culture, and brutalist design principles. I believe in bold choices and functional beauty.
                    </p>

<div className="space-y-6">
<div>
<div className="flex justify-between mb-2">
<span className="font-semibold">FRONTEND</span>
<span className="pixel-font text-xs" style={{color: '#03dffc'}}>95%</span>
</div>
<div className="h-6 bg-black border-4 border-black overflow-hidden">
<div className="h-full bg-[#03dffc]" style={{width: '95%', backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.2) 8px, rgba(0,0,0,0.2) 10px)'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-semibold">BACKEND</span>
<span className="pixel-font text-xs" style={{color: '#ff03fc'}}>85%</span>
</div>
<div className="h-6 bg-black border-4 border-black overflow-hidden">
<div className="h-full bg-[#ff03fc]" style={{width: '85%', backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.2) 8px, rgba(0,0,0,0.2) 10px)'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-semibold">UI/UX DESIGN</span>
<span className="pixel-font text-xs" style={{color: '#fcff03'}}>90%</span>
</div>
<div className="h-6 bg-black border-4 border-black overflow-hidden">
<div className="h-full bg-[#fcff03]" style={{width: '90%', backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.2) 8px, rgba(0,0,0,0.2) 10px)'}}></div>
</div>
</div>
</div>
</div>

<div className="relative flex justify-center">
<div className="relative w-72 h-72 sm:w-96 sm:h-96">

<div className="absolute inset-0 bg-[#03dffc] border-4 border-black" style={{boxShadow: '8px 8px 0 #000'}}></div>

<div className="absolute top-8 left-8 w-full h-full border-4 border-[#ff03fc]"></div>
<div className="absolute top-16 left-16 w-full h-full border-4 border-[#fcff03]"></div>

<div className="absolute inset-0 flex flex-wrap items-center justify-center gap-6 p-8">
<div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center" style={{boxShadow: '4px 4px 0 #000'}}>
<iconify-icon height="32" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center" style={{boxShadow: '4px 4px 0 #000'}}>
<iconify-icon height="32" icon="solar:palette-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center" style={{boxShadow: '4px 4px 0 #000'}}>
<iconify-icon height="32" icon="solar:server-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center" style={{boxShadow: '4px 4px 0 #000'}}>
<iconify-icon height="32" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 relative bg-black text-white" id="contact">
<div className="absolute inset-0 opacity-10" style={{background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #03dffc 2px, #03dffc 4px)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16">
<p className="pixel-font text-xs sm:text-sm mb-4" style={{color: '#03dffc'}}>GET IN TOUCH</p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                    CONTACT
                </h2>
<div className="w-32 h-2 bg-[#ff03fc] mx-auto mt-4"></div>
</div>
<div className="max-w-2xl mx-auto">

<div className="bg-black border-4 border-[#03dffc] p-6 sm:p-8" style={{boxShadow: '8px 8px 0 #03dffc'}}>

<div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-[#03dffc]">
<div className="w-3 h-3 rounded-full bg-[#ff03fc]"></div>
<div className="w-3 h-3 rounded-full bg-[#fcff03]"></div>
<div className="w-3 h-3 rounded-full bg-[#03dffc]"></div>
<span className="pixel-font text-xs ml-4 text-[#03dffc]">CONTACT.EXE</span>
</div>
<form className="space-y-6">
<div>
<label className="pixel-font text-xs text-[#03dffc] mb-2 block">NAME_</label>
<input className="w-full bg-transparent border-4 border-[#03dffc] px-4 py-3 text-white inter-font focus:outline-none focus:border-[#ff03fc] transition-colors" placeholder="Enter your name..." type="text"/>
</div>
<div>
<label className="pixel-font text-xs text-[#03dffc] mb-2 block">EMAIL_</label>
<input className="w-full bg-transparent border-4 border-[#03dffc] px-4 py-3 text-white inter-font focus:outline-none focus:border-[#ff03fc] transition-colors" placeholder="Enter your email..." type="email"/>
</div>
<div>
<label className="pixel-font text-xs text-[#03dffc] mb-2 block">MESSAGE_</label>
<textarea className="w-full bg-transparent border-4 border-[#03dffc] px-4 py-3 text-white inter-font focus:outline-none focus:border-[#ff03fc] transition-colors resize-none" placeholder="Type your message..." rows="5"></textarea>
</div>
<button className="w-full px-8 py-4 bg-[#03dffc] text-black font-bold border-4 border-[#03dffc] transition-all duration-200 hover:bg-[#ff03fc] hover:border-[#ff03fc] neon-glow" type="submit">
                            SEND MESSAGE
                        </button>
</form>

<div className="mt-6 pt-4 border-t-2 border-[#03dffc]">
<p className="pixel-font text-xs text-[#03dffc]">&gt; READY TO RECEIVE YOUR MESSAGE...</p>
<p className="pixel-font text-xs text-[#03dffc] mt-1">&gt;<span className="animate-pulse">_</span></p>
</div>
</div>

<div className="flex justify-center gap-6 mt-12">
<a className="w-14 h-14 bg-transparent border-4 border-white flex items-center justify-center transition-all duration-200 hover:bg-[#03dffc] hover:border-[#03dffc] hover:text-black" href="#" style={{boxShadow: '4px 4px 0 #fff'}}>
<iconify-icon height="24" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</a>
<a className="w-14 h-14 bg-transparent border-4 border-white flex items-center justify-center transition-all duration-200 hover:bg-[#ff03fc] hover:border-[#ff03fc] hover:text-black" href="#" style={{boxShadow: '4px 4px 0 #fff'}}>
<iconify-icon height="24" icon="solar:link-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</a>
<a className="w-14 h-14 bg-transparent border-4 border-white flex items-center justify-center transition-all duration-200 hover:bg-[#fcff03] hover:border-[#fcff03] hover:text-black" href="#" style={{boxShadow: '4px 4px 0 #fff'}}>
<iconify-icon height="24" icon="solar:share-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t-4 border-black py-8 relative transition-all duration-500" id="footer">
<div className="absolute inset-0 opacity-5" style={{background: 'repeating-linear-gradient(90deg, transparent, transparent 20px, #000 20px, #000 21px)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="pixel-font text-xs text-center sm:text-left">
                    © 2024 PIXEL.DEV // ALL RIGHTS RESERVED
                </p>

<a className="group flex items-center gap-2 px-4 py-2 bg-[#03dffc] border-4 border-black transition-all duration-200 hover:-translate-y-1" href="#home" style={{boxShadow: '4px 4px 0 #000'}}>
<iconify-icon className="group-hover:animate-bounce" height="20" icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="pixel-font text-xs">BACK TO TOP</span>
</a>
</div>
</div>
</footer>


    </>
  );
}
