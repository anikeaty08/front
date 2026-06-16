import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Parallax Logic
        const grapes = document.getElementById('floating-grapes');
        
        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth < 768) return; // Disable on mobile

            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Calculate distance from center (inverse movement for depth)
            const moveX = (centerX - clientX) * 0.03; 
            const moveY = (centerY - clientY) * 0.03;

            // Apply transform
            grapes.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.05}deg)`;
        });

        // Add subtle entry animation
        window.onload = () => {
            grapes.style.opacity = 0;
            grapes.style.transition = 'opacity 1.5s ease-out, transform 0.1s ease-out';
            setTimeout(() => {
                grapes.style.opacity = 1;
            }, 100);
        };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-multiply">

<div className="flex items-center gap-12">
<a className="text-lg font-medium tracking-tighter uppercase hover:opacity-60 transition-opacity" href="#">
                Hattat-Decker
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-base font-normal text-neutral-500 hover:text-black transition-colors" href="#">Cuvées</a>
<a className="text-base font-normal text-neutral-500 hover:text-black transition-colors" href="#">Vignoble</a>
<a className="text-base font-normal text-neutral-500 hover:text-black transition-colors" href="#">Histoire</a>
</div>
</div>

<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-2 text-base text-neutral-600">
<span className="cursor-pointer font-medium text-black">DE</span>
<span className="text-neutral-300">/</span>
<span className="cursor-pointer hover:text-black transition-colors">FR</span>
<span className="text-neutral-300">/</span>
<span className="cursor-pointer hover:text-black transition-colors">EN</span>
</div>
<a className="hidden md:flex items-center gap-2 text-base hover:text-neutral-500 transition-colors" href="tel:+33123456789">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="phone"></i>
<span>+33 3 26 12 34 56</span>
</a>
<button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</nav>

<main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">


<div className="absolute inset-0 z-0">
<img alt="Vineyard Background" className="w-full h-full object-cover opacity-30 grayscale-[20%]" src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF9] via-[#FDFBF9]/60 to-[#FDFBF9]"></div>
</div>

<div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center mt-12 md:mt-0">

<div className="mb-4 flex flex-col items-center gap-3 animate-fade-in-down">
<span className="uppercase tracking-[0.2em] text-xs font-medium text-neutral-400">Champagne</span>

<div className="w-8 h-10 border border-neutral-800 rounded-b-full rounded-t-sm flex items-center justify-center mb-4">
<span className="font-serif italic font-bold text-sm">HD</span>
</div>
</div>

<h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-neutral-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
<span className="font-medium block mb-2">Côteaux Sud d'Epernay</span>
<span className="font-serif italic font-normal text-neutral-600">Champagne, France</span>
</h1>


<div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center my-[-40px] md:my-[-60px] pointer-events-none select-none z-20">

<img alt="Champagne Grapes" className="parallax-element w-[280px] md:w-[400px] h-[350px] md:h-[500px] object-cover rounded-full shadow-2xl shadow-neutral-200/50 grayscale-[10%] brightness-105" id="floating-grapes" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84745b3d-4752-4778-b647-69d6dd60a4c5_800w.webp" style={{maskImage: 'radial-gradient(circle, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'}}/>
</div>

<div className="relative z-30 mt-8 space-y-6">
<p className="text-xl md:text-2xl font-light text-neutral-800 tracking-wide">
                    Erlesen, elegant, außergewöhnlich
                </p>
<div className="w-px h-12 bg-neutral-300 mx-auto"></div>
<p className="font-serif italic text-lg text-neutral-500">
                    Tradition seit 1961
                </p>
</div>

<div className="absolute bottom-[-15vh] md:bottom-[-20vh] animate-bounce text-neutral-400">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-down"></i>
</div>
</div>

<div className="absolute bottom-8 right-8 hidden md:block z-30">
<div className="bg-white/80 backdrop-blur-md border border-white/50 shadow-sm p-4 rounded-lg flex items-center gap-4 max-w-xs">
<div className="bg-neutral-100 p-2 rounded-md">
<i className="w-5 h-5 text-neutral-600 stroke-[1.5]" data-lucide="map-pin"></i>
</div>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-wider text-neutral-400">Terroir</span>
<span className="text-sm font-medium text-neutral-800">Vallée de la Marne</span>
</div>
</div>
</div>
</main>



    </>
  );
}
