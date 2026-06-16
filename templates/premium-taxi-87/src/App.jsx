import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex flex-col lg:flex-row w-full min-h-screen">

<div className="w-full lg:w-1/2 flex flex-col justify-between px-6 py-8 lg:px-12 lg:py-10 relative z-10">

<nav className="flex flex-wrap items-center gap-x-8 gap-y-4 text-lg font-medium tracking-tight">
<a className="flex items-center gap-3 hover:opacity-60 transition-opacity" href="#">
<span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    Services
                </a>
<a className="flex items-center gap-3 hover:opacity-60 transition-opacity" href="#">
<span className="w-2 h-2 rounded-full bg-[#7A8A7D]"></span>
                    Flotte
                </a>
<a className="flex items-center gap-3 hover:opacity-60 transition-opacity" href="#">
<span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    Chauffeurs
                </a>
<a className="flex items-center gap-3 hover:opacity-60 transition-opacity" href="#">
<span className="w-2 h-2 rounded-full bg-blue-300"></span>
                    Réservation
                </a>
</nav>

<main className="flex flex-col items-center justify-center flex-grow py-12 lg:py-0">
<h1 className="font-hero text-[25vw] lg:text-[14vw] leading-[0.8] tracking-tighter uppercase text-stone-950 select-none">
                    TAXI
                </h1>
<div className="mt-8 lg:mt-12 max-w-2xl text-center">
<p className="text-lg lg:text-xl font-medium text-stone-700 leading-relaxed tracking-tight">
                        Nous sommes un service de transport privé à Paris alliant élégance et ponctualité. Pour vos trajets d'affaires ou personnels, nous mobilisons l'excellence et notre passion du détail qui fait la différence.
                    </p>
</div>
</main>

<footer className="w-full border-t border-stone-800 pt-5 mt-6">
<div className="flex flex-wrap justify-between items-center text-xs font-semibold tracking-widest uppercase text-stone-900">
<a className="hover:underline" href="#">Instagram</a>
<a className="hover:underline" href="#">LinkedIn</a>
<a className="hover:underline" href="#">Twitter</a>
<a className="hover:underline" href="#">Facebook</a>
</div>
</footer>
</div>

<div className="w-full lg:w-1/2 h-[50vh] lg:h-screen grid grid-cols-12 overflow-hidden">

<div className="col-span-7 bg-[#7A8A7D] flex flex-col relative h-full">

<div className="flex-grow bg-[#7A8A7D]"></div>

<div className="relative h-[40%] w-full overflow-hidden">
<img alt="White Car Interior" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex-grow bg-[#7A8A7D] flex flex-col justify-end p-4">
<span className="text-xs font-semibold tracking-widest opacity-60">01</span>
</div>
</div>

<div className="col-span-4 bg-[#E0966D] flex flex-col relative h-full border-l border-white/10">

<div className="h-[55%] bg-[#E0966D]"></div>

<div className="relative h-[25%] w-full overflow-hidden">
<img alt="Luxury Detail" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex-grow bg-[#E0966D] flex flex-col justify-end p-4">
<span className="text-xs font-semibold tracking-widest opacity-60">02</span>
</div>
</div>

<div className="col-span-1 bg-[#BCCAD6] flex flex-col relative h-full border-l border-white/10">

<div className="h-[70%] bg-[#BCCAD6]"></div>

<div className="relative h-[15%] w-full overflow-hidden grayscale">
<img alt="Abstract texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex-grow bg-[#BCCAD6] flex flex-col justify-end p-4">
<span className="text-xs font-semibold tracking-widest opacity-60 pl-1">03</span>
</div>
</div>
</div>

<button className="fixed bottom-8 right-8 bg-stone-900 text-white rounded-full p-4 shadow-xl hover:bg-stone-800 transition-colors lg:hidden z-50">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="car-taxi-front"></i>
</button>
</div>


    </>
  );
}
