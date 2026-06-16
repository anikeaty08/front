import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Custom Cursor Logic
        const cursor = document.getElementById('custom-cursor');
        const bodyElement = document.body;
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        function updateClickableListeners() {
            const clickables = document.querySelectorAll('a, button, input, textarea, .clickable-element');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', () => bodyElement.classList.add('hovering-clickable'));
                el.addEventListener('mouseleave', () => bodyElement.classList.remove('hovering-clickable'));
            });
        }
        updateClickableListeners();

        function toggleNav() {
            const nav = document.getElementById('nav-overlay');
            const body = document.getElementById('app-body');
            if (nav.classList.contains('-translate-x-full')) {
                nav.classList.remove('-translate-x-full');
                body.style.overflow = 'hidden';
            } else {
                nav.classList.add('-translate-x-full');
                body.style.overflow = '';
            }
        }

        function toggleTheme(mode) {
            const body = document.getElementById('app-body');
            const bgDark = document.getElementById('bg-dark');
            const bgLight = document.getElementById('bg-light');
            const btnDark = document.getElementById('btn-dark');
            const btnLight = document.getElementById('btn-light');
            const switcherContainer = document.getElementById('switcher-container');
            const gridLines = document.querySelectorAll('.border-white\\/5');
            
            if (mode === 'light') {
                body.classList.remove('bg-gray-950', 'text-white', 'selection:bg-white/20', 'selection:text-white');
                body.classList.add('bg-white', 'text-gray-900', 'selection:bg-black/10', 'selection:text-black', 'light-mode');
                
                bgDark.classList.remove('opacity-100');
                bgDark.classList.add('opacity-0');
                bgLight.classList.remove('opacity-0');
                bgLight.classList.add('opacity-100');

                switcherContainer.classList.remove('border-white/10');
                switcherContainer.classList.add('border-black/10');
                btnDark.className = "clickable-element relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 text-gray-400 hover:text-gray-900";
                btnLight.className = "clickable-element relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 bg-white text-gray-900 shadow-sm border border-black/5";

            } else {
                body.classList.add('bg-gray-950', 'text-white', 'selection:bg-white/20', 'selection:text-white');
                body.classList.remove('bg-white', 'text-gray-900', 'selection:bg-black/10', 'selection:text-black', 'light-mode');
                
                bgDark.classList.add('opacity-100');
                bgDark.classList.remove('opacity-0');
                bgLight.classList.add('opacity-0');
                bgLight.classList.remove('opacity-100');

                switcherContainer.classList.add('border-white/10');
                switcherContainer.classList.remove('border-black/10');
                btnDark.className = "clickable-element relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 bg-white/10 text-white shadow-sm";
                btnLight.className = "clickable-element relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 text-white/40 hover:text-white";
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="custom-cursor">
<div className="cursor-icon">
<iconify-icon height="24" icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>

<div className="fixed inset-0 z-0 bg-gray-950 transition-opacity duration-700 opacity-100 pointer-events-none" id="bg-dark"></div>
<div className="fixed inset-0 z-0 bg-white transition-opacity duration-700 opacity-0 pointer-events-none" id="bg-light"></div>

<div className="fixed inset-0 z-[1] w-full h-full pointer-events-none px-6 md:px-12 max-w-[1920px] mx-auto">
<div className="grid grid-cols-4 h-full w-full border-x border-white/5 light-mode:border-black/5 transition-colors duration-700">

<div className="border-r border-white/5 h-full relative light-mode:border-black/5 transition-colors duration-700">
<span className="absolute top-6 left-4 text-[10px] opacity-30 font-mono">01</span>
</div>

<div className="border-r border-white/5 h-full relative light-mode:border-black/5 transition-colors duration-700">
<span className="absolute top-6 left-4 text-[10px] opacity-30 font-mono">02</span>
</div>

<div className="border-r border-white/5 h-full relative light-mode:border-black/5 transition-colors duration-700">
<span className="absolute top-6 left-4 text-[10px] opacity-30 font-mono">03</span>
</div>

<div className="h-full relative">

</div>
</div>
</div>

<div className="fixed inset-0 z-[100] w-full h-full bg-gray-950 text-white transform -translate-x-full transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col overflow-hidden" id="nav-overlay">

<div className="absolute inset-0 w-full h-full pointer-events-none px-6 md:px-12 z-0">
<div className="grid grid-cols-4 h-full border-x border-white/5 w-full mx-auto max-w-[1920px]">
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full"></div>
</div>
</div>
<div className="relative z-10 flex flex-col h-full p-6 md:p-12 max-w-[1920px] mx-auto w-full">

<div className="flex justify-between items-start w-full">
<span className="text-xs font-bold tracking-widest uppercase">Orvia.</span>
<button className="group clickable-element flex items-center gap-3 text-xs tracking-widest hover:opacity-70 transition-opacity uppercase" onclick="toggleNav()">
                    [ Close ]
                    <iconify-icon className="group-hover:rotate-90 transition-transform duration-500" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-grow flex flex-col justify-center gap-2 md:gap-4 w-full pl-0 md:pl-[25%]">
<a className="clickable-element text-[10vw] md:text-[7vw] leading-[0.9] font-normal tracking-tighter hover:pl-12 hover:opacity-50 transition-all duration-500 ease-out select-none" href="index.html">
                    HOME
                </a>
<a className="clickable-element text-[10vw] md:text-[7vw] leading-[0.9] font-normal tracking-tighter hover:pl-12 hover:opacity-50 transition-all duration-500 ease-out select-none opacity-50 italic" href="#">
                    PROJECT
                </a>
<a className="clickable-element text-[10vw] md:text-[7vw] leading-[0.9] font-normal tracking-tighter hover:pl-12 hover:opacity-50 transition-all duration-500 ease-out select-none" href="#">
                    AGENCY
                </a>
<a className="clickable-element text-[10vw] md:text-[7vw] leading-[0.9] font-normal tracking-tighter hover:pl-12 hover:opacity-50 transition-all duration-500 ease-out select-none" href="#">
                    CONTACT
                </a>
</div>

<div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
<div className="flex flex-col gap-2">
<span className="text-[10px] uppercase tracking-widest opacity-40">Address</span>
<p className="text-sm font-light leading-relaxed">
                        Bahnhofstrasse 12<br/>
                        8001 Zürich<br/>
                        Switzerland
                    </p>
</div>
<div className="flex flex-col gap-2">
<span className="text-[10px] uppercase tracking-widest opacity-40">Contact</span>
<a className="text-sm font-light hover:underline" href="mailto:hello@orvia.com">hello@orvia.com</a>
<a className="text-sm font-light hover:underline" href="tel:+41001234567">+41 00 123 45 67</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-[10px] uppercase tracking-widest opacity-40">Socials</span>
<div className="flex gap-4 text-sm font-light">
<a className="hover:opacity-50" href="#">IG</a>
<a className="hover:opacity-50" href="#">LI</a>
<a className="hover:opacity-50" href="#">TW</a>
</div>
</div>
<div className="flex items-end justify-end">
<span className="text-[10px] opacity-30">© 2025</span>
</div>
</div>
</div>
</div>
<div className="relative z-20 w-full mx-auto max-w-[1920px]">

<div className="fixed top-0 left-0 w-full p-6 md:p-12 z-40 flex justify-between items-start pointer-events-none max-w-[1920px] left-1/2 -translate-x-1/2">

<div className="pointer-events-auto">
<div className="glass-panel p-1 rounded-full border border-white/10 flex items-center gap-1 transition-colors duration-500" id="switcher-container">
<button className="clickable-element relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 bg-white/10 text-white shadow-sm" id="btn-dark" onclick="toggleTheme('dark')">
<iconify-icon height="18" icon="solar:moon-linear" width="18"></iconify-icon>
</button>
<button className="clickable-element relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 text-white/40 hover:text-white" id="btn-light" onclick="toggleTheme('light')">
<iconify-icon height="18" icon="solar:sun-2-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="pointer-events-auto">
<button className="clickable-element group flex flex-col items-end gap-1.5 p-2 hover:opacity-70 transition-opacity" onclick="toggleNav()">
<span className="w-8 h-[1px] bg-current block group-hover:w-10 transition-all duration-300"></span>
<span className="block group-hover:w-8 transition-all duration-300 delay-75 bg-current w-5 h-[1px]"></span>
</button>
</div>
</div>

<main className="relative pt-32 md:pt-48 px-6 md:px-12 pb-24">

<div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 w-full mb-16 md:mb-24">

<div className="hidden md:block">

</div>

<div className="col-span-1 md:col-span-3 flex flex-col justify-start pl-0 md:pl-6">
<h1 className="text-5xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] font-normal uppercase transition-colors duration-700 break-words">
                        Residenz<br/>Küsnacht
                    </h1>
<span className="mt-6 text-xs tracking-widest uppercase opacity-60 font-medium ml-1">Residential &amp; Heritage</span>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 w-full items-end mb-12 border-t border-current/10 pt-8 transition-colors duration-700">

<div className="col-span-2 md:col-span-1 flex items-center">
<a className="clickable-element group flex items-center gap-3 text-xs font-medium tracking-widest uppercase hover:opacity-60 transition-opacity" href="index.html">
<div className="border border-current/30 p-1.5 rounded-sm group-hover:border-current transition-colors">
<iconify-icon height="16" icon="solar:arrow-left-linear" width="16"></iconify-icon>
</div>
                        Back to Home
                    </a>
</div>

<div className="col-span-2 md:col-span-2 md:pl-6">
<p className="text-sm md:text-lg font-light leading-relaxed uppercase opacity-80 max-w-xl">
                        ORVIA WAS INVITED BY THE KÜSNACHT ESTATE TO REIMAGINE THE 2024 RESIDENTIAL EXPERIENCE, CELEBRATING ICONIC SWISS CRAFTSMANSHIP.
                    </p>
</div>

<div className="hidden md:flex col-span-1 justify-end items-end pb-1 opacity-50">
<iconify-icon className="animate-bounce" height="32" icon="solar:arrow-down-linear" width="32"></iconify-icon>
</div>
</div>

<div className="w-full h-[50vh] md:h-[85vh] overflow-hidden relative mb-24 md:mb-32 group">
<img alt="Residenz Küsnacht Detail" className="object-cover w-full h-full animate-reveal origin-bottom scale-100 group-hover:scale-105 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mb-32">

<div className="hidden md:block"></div>

<div className="flex flex-col gap-8 pl-0 md:pl-6">
<div className="border-t border-current/10 pt-4">
<span className="text-[10px] uppercase tracking-widest opacity-50 block mb-2">Location</span>
<span className="text-xl font-light">Zürich, Switzerland</span>
</div>
<div className="border-t border-current/10 pt-4">
<span className="text-[10px] uppercase tracking-widest opacity-50 block mb-2">Year</span>
<span className="text-xl font-light">2023 - 2024</span>
</div>
<div className="border-t border-current/10 pt-4">
<span className="text-[10px] uppercase tracking-widest opacity-50 block mb-2">Services</span>
<ul className="text-xl font-light flex flex-col gap-1">
<li>Architecture</li>
<li>Interior Design</li>
<li>Landscape</li>
</ul>
</div>
</div>

<div className="col-span-1 md:col-span-2 h-[400px] md:h-auto overflow-hidden relative">
<img alt="Material Detail" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="border-t border-current/10 pt-24 pb-12 w-full flex flex-col items-center justify-center text-center">
<span className="text-xs tracking-widest uppercase opacity-50 mb-6">Next Project</span>
<a className="clickable-element text-4xl md:text-6xl font-normal tracking-tight hover:opacity-50 transition-opacity" href="#">
                    PENTHOUSE ZÜRICHBERG
                </a>
</div>

<div className="mt-24 pt-12 border-t border-current/10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-40">
<div className="hover:opacity-100 transition-opacity">
<iconify-icon height="32" icon="simple-icons:archdaily" width="96"></iconify-icon>
</div>
<div className="hover:opacity-100 transition-opacity">
<iconify-icon height="32" icon="simple-icons:dezeen" width="96"></iconify-icon>
</div>
<div className="hover:opacity-100 transition-opacity">
<iconify-icon height="32" icon="simple-icons:vogue" width="96"></iconify-icon>
</div>
<div className="hover:opacity-100 transition-opacity">
<iconify-icon height="32" icon="simple-icons:designboom" width="96"></iconify-icon>
</div>
</div>
</div>
</main>

<footer className="w-full py-8 px-6 md:px-12 border-t border-current/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-60 gap-4 bg-gray-950/50 backdrop-blur-sm z-30 relative light-mode:bg-white/50 transition-colors">
<span>© 2025 Orvia Heritage</span>
<div className="flex gap-6">
<a className="hover:opacity-100 transition-opacity" href="#">Instagram</a>
<a className="hover:opacity-100 transition-opacity" href="#">LinkedIn</a>
<a className="hover:opacity-100 transition-opacity" href="mailto:hello@orvia.com">Email</a>
</div>
</footer>
</div>


    </>
  );
}
