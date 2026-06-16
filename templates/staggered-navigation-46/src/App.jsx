import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const menuBtn = document.getElementById('menu-toggle');
        const overlay = document.getElementById('menu-overlay');
        const body = document.body;
        const line1 = document.querySelector('.menu-line-1');
        const line2 = document.querySelector('.menu-line-2');
        
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                // Open: Slide overlay in, then trigger staggers via class
                overlay.classList.remove('translate-x-full');
                overlay.classList.add('translate-x-0');
                
                // Add delay class slightly after slide starts to ensure smooth stagger entrance
                setTimeout(() => {
                    overlay.classList.add('menu-open');
                }, 50); // Small tick to allow display render
                
                body.style.overflow = 'hidden';
                
                // Hamburger Animation -> X
                line1.style.transform = 'translateY(3.5px) rotate(45deg)';
                line2.style.transform = 'translateY(-3.5px) rotate(-45deg)';
                
            } else {
                // Close: Remove stagger state immediately so they reset for next time
                overlay.classList.remove('menu-open');
                
                // Slide overlay out
                overlay.classList.remove('translate-x-0');
                overlay.classList.add('translate-x-full');
                
                body.style.overflow = '';
                
                // X Animation -> Hamburger
                line1.style.transform = 'translateY(0) rotate(0)';
                line2.style.transform = 'translateY(0) rotate(0)';
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                menuBtn.click();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-[60] mix-blend-difference pointer-events-none">
<div className="pointer-events-auto">
<a className="text-xl font-medium tracking-tighter text-white uppercase select-none flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-white"></span>
                Linear
            </a>
</div>

<div className="pointer-events-auto">
<button aria-label="Toggle Menu" className="group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 z-[70]" id="menu-toggle">
<div className="relative w-6 h-3.5 flex flex-col justify-between items-center overflow-visible">
<span className="w-full h-[1.5px] bg-white transition-all duration-300 origin-center menu-line-1"></span>
<span className="w-full h-[1.5px] bg-white transition-all duration-300 origin-center menu-line-2"></span>
</div>
</button>
</div>
</header>

<main className="flex flex-col items-center justify-center min-h-screen w-full px-6 relative z-10">
<div className="text-center space-y-8 max-w-2xl animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-white/70 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Updated v2.0
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                Staggered<br/><span className="text-white/40">Navigation</span>
</h1>
<p className="text-lg text-white/50 font-light max-w-lg mx-auto leading-relaxed tracking-wide">
                Experience smooth, sequenced animations. The menu items cascade in after the background transition completes.
            </p>
<div className="pt-8">
<button className="group relative px-6 py-3 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300 overflow-hidden" onclick="document.getElementById('menu-toggle').click()">
<span className="relative z-10">Explore Menu</span>
</button>
</div>
</div>
</main>


<div className="fixed inset-0 w-full h-full z-50 translate-x-full flex flex-col pointer-events-auto" id="menu-overlay" style={{background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)'}}>

<div className="absolute right-0 bottom-0 pointer-events-none opacity-10 translate-y-1/3 translate-x-1/4 select-none">
<span className="text-[40vh] font-bold tracking-tighter leading-none text-black mix-blend-overlay">MENU</span>
</div>
<div className="flex-1 flex flex-col justify-center px-8 md:px-24 max-w-7xl w-full mx-auto relative z-10">

<nav className="flex flex-col space-y-2 md:space-y-1">

<div className="stagger-item group block" style={{transitionDelay: '200ms'}}>
<a className="menu-link flex items-baseline gap-6 py-2" href="#">
<span className="text-xs font-mono text-white/50 group-hover:text-white transition-colors duration-300 mt-1">01</span>
<span className="text-6xl md:text-8xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">Home</span>
</a>
</div>

<div className="stagger-item group block" style={{transitionDelay: '250ms'}}>
<a className="menu-link flex items-baseline gap-6 py-2" href="#">
<span className="text-xs font-mono text-white/50 group-hover:text-white transition-colors duration-300 mt-1">02</span>
<span className="text-6xl md:text-8xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">Projects</span>
</a>
</div>

<div className="stagger-item group block" style={{transitionDelay: '300ms'}}>
<a className="menu-link flex items-baseline gap-6 py-2" href="#">
<span className="text-xs font-mono text-white/50 group-hover:text-white transition-colors duration-300 mt-1">03</span>
<span className="text-6xl md:text-8xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">Services</span>
</a>
</div>

<div className="stagger-item group block" style={{transitionDelay: '350ms'}}>
<a className="menu-link flex items-baseline gap-6 py-2" href="#">
<span className="text-xs font-mono text-white/50 group-hover:text-white transition-colors duration-300 mt-1">04</span>
<span className="text-6xl md:text-8xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">Contact</span>
</a>
</div>
</nav>
</div>

<div className="px-8 md:px-24 pb-12 w-full max-w-7xl mx-auto relative z-10">
<div className="stagger-item border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8" style={{transitionDelay: '450ms'}}>
<div className="flex gap-8">
<a className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group text-sm tracking-wide font-medium" href="#">
<span className="iconify w-4 h-4" data-icon="lucide:twitter" data-strokeWidth="1.5"></span>
                        Twitter
                    </a>
<a className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group text-sm tracking-wide font-medium" href="#">
<span className="iconify w-4 h-4" data-icon="lucide:instagram" data-strokeWidth="1.5"></span>
                        Instagram
                    </a>
<a className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group text-sm tracking-wide font-medium" href="#">
<span className="iconify w-4 h-4" data-icon="lucide:mail" data-strokeWidth="1.5"></span>
                        Get in touch
                    </a>
</div>
<div className="text-white/40 text-xs tracking-wider uppercase font-medium">
                    San Francisco, CA  •  EST 2024
                </div>
</div>
</div>
</div>


    </>
  );
}
