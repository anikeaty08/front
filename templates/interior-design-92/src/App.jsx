import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#F5F5F7]/80', 'backdrop-blur-md', 'border-stone-200/50', 'py-4');
                navbar.classList.remove('py-8', 'border-transparent');
            } else {
                navbar.classList.remove('bg-[#F5F5F7]/80', 'backdrop-blur-md', 'border-stone-200/50', 'py-4');
                navbar.classList.add('py-8', 'border-transparent');
            }
        });

        // Reveal on Scroll Logic
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-item').forEach((element) => {
            observer.observe(element);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out py-8 px-8 lg:px-16 flex justify-between items-center border-b border-transparent" id="navbar">
<div className="font-['Playfair_Display'] tracking-tighter text-2xl font-medium text-stone-900 cursor-pointer">
            LNEA.
        </div>
<nav className="hidden md:flex gap-10 text-xs font-medium uppercase tracking-widest text-stone-500">
<a className="hover:text-stone-900 transition-colors duration-300" href="#">Projects</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#">Studio</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#">Journal</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#">Contact</a>
</nav>
<button className="md:hidden text-stone-900 flex items-center justify-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<section className="flex flex-col md:flex-row min-h-screen relative overflow-hidden">

<div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-24 pt-40 pb-20 md:py-0 relative z-10 bg-[#F5F5F7]">
<span className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-6 block">Architecture &amp; Interiors</span>
<h1 className="font-['Playfair_Display'] tracking-tight text-5xl lg:text-7xl font-medium leading-[1.05] text-stone-900">
                Shaping<br/>
<span className="italic font-normal text-stone-600">tranquil</span><br/>
                spaces.
            </h1>
<p className="mt-10 text-sm lg:text-base text-stone-500 font-light max-w-sm leading-relaxed">
                We blend organic textures with minimalist principles to craft enduring environments that breathe life into your daily rituals.
            </p>
<div className="mt-16 flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-stone-900 group cursor-pointer w-max">
<span className="group-hover:-translate-y-0.5 transition-transform duration-300 border-b border-stone-900 pb-1">View Collection</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>

<div className="w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden rounded-bl-[3rem] md:rounded-bl-[5rem] relative z-0">
<img alt="Minimalist interior design living room" className="w-full h-full object-cover origin-center" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2874&amp;auto=format&amp;fit=crop" style={{animation: 'kenburns 25s alternate infinite ease-in-out'}}/>
<div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
</div>
</section>

<section className="py-32 px-8 lg:px-16 max-w-[100rem] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<h2 className="font-['Playfair_Display'] tracking-tight text-3xl lg:text-5xl font-medium text-stone-900 max-w-lg leading-tight">
                Curated environments for modern living.
            </h2>
<p className="text-sm font-light text-stone-500 max-w-xs leading-relaxed">
                A selection of our most recent architectural and interior design projects globally.
            </p>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-10 space-y-6 lg:space-y-10">

<div className="break-inside-avoid relative group overflow-hidden rounded-[2rem] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal-item" style={{opacity: '0', transform: 'translateY(3rem)', transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<img alt="Project 1" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#F5F5F7]/10 backdrop-blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="font-['Montserrat'] text-stone-900 bg-[#F5F5F7]/95 px-8 py-4 rounded-full text-xs font-medium uppercase tracking-widest shadow-[0_4px_20px_rgb(0,0,0,0.06)] flex items-center gap-3">
                        View Project
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden rounded-[2rem] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal-item" style={{opacity: '0', transform: 'translateY(3rem)', transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'}}>
<img alt="Project 2" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=2158&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#F5F5F7]/10 backdrop-blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="font-['Montserrat'] text-stone-900 bg-[#F5F5F7]/95 px-8 py-4 rounded-full text-xs font-medium uppercase tracking-widest shadow-[0_4px_20px_rgb(0,0,0,0.06)] flex items-center gap-3">
                        View Project
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden rounded-[2rem] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal-item" style={{opacity: '0', transform: 'translateY(3rem)', transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'}}>
<img alt="Project 3" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#F5F5F7]/10 backdrop-blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="font-['Montserrat'] text-stone-900 bg-[#F5F5F7]/95 px-8 py-4 rounded-full text-xs font-medium uppercase tracking-widest shadow-[0_4px_20px_rgb(0,0,0,0.06)] flex items-center gap-3">
                        View Project
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden rounded-[2rem] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal-item" style={{opacity: '0', transform: 'translateY(3rem)', transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'}}>
<img alt="Project 4" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#F5F5F7]/10 backdrop-blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="font-['Montserrat'] text-stone-900 bg-[#F5F5F7]/95 px-8 py-4 rounded-full text-xs font-medium uppercase tracking-widest shadow-[0_4px_20px_rgb(0,0,0,0.06)] flex items-center gap-3">
                        View Project
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden rounded-[2rem] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal-item" style={{opacity: '0', transform: 'translateY(3rem)', transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'}}>
<img alt="Project 5" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#F5F5F7]/10 backdrop-blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="font-['Montserrat'] text-stone-900 bg-[#F5F5F7]/95 px-8 py-4 rounded-full text-xs font-medium uppercase tracking-widest shadow-[0_4px_20px_rgb(0,0,0,0.06)] flex items-center gap-3">
                        View Project
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>

<div className="break-inside-avoid relative group overflow-hidden rounded-[2rem] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal-item" style={{opacity: '0', transform: 'translateY(3rem)', transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'}}>
<img alt="Project 6" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#F5F5F7]/10 backdrop-blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="font-['Montserrat'] text-stone-900 bg-[#F5F5F7]/95 px-8 py-4 rounded-full text-xs font-medium uppercase tracking-widest shadow-[0_4px_20px_rgb(0,0,0,0.06)] flex items-center gap-3">
                        View Project
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>
</div>
</section>

<footer className="py-16 px-8 lg:px-16 border-t border-stone-200/60 mt-20 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="font-['Playfair_Display'] tracking-tighter text-xl font-medium text-stone-900">
            LNEA.
        </div>
<div className="text-xs font-light text-stone-500">
            © 2024 Lnea Design Studio. All rights reserved.
        </div>
</footer>


    </>
  );
}
