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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-black"></div>

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-3/4 h-[120%] bg-gradient-to-b from-red-600 via-orange-600 to-red-900 opacity-60 blur-[100px] sm:blur-[120px]"></div>

<div className="absolute top-[20%] left-[30%] w-1/2 h-1/2 bg-orange-500 rounded-full opacity-40 blur-[90px] mix-blend-screen"></div>
<div className="absolute bottom-[10%] right-[20%] w-1/3 h-2/3 bg-red-700 rounded-full opacity-50 blur-[100px] mix-blend-screen"></div>

<div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
</div>

<nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-10 lg:px-12 w-full">

<div className="flex items-center gap-3 group cursor-pointer">
<span className="text-xl font-medium tracking-tight text-white group-hover:text-gray-200 transition-colors">
          ARAM LABS
        </span>

<img alt="Aram Labs Symbol" className="w-8 h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity" src="aram-logo.png"/>
</div>

<div className="flex items-center gap-6 md:gap-10">

<button className="text-white hover:text-orange-500 transition-colors hidden sm:block">
<i className="w-6 h-6" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>

<button className="flex items-center gap-1 text-lg font-normal text-white hover:text-gray-300 transition-colors">
<span>EN</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>

<a className="bg-white text-black px-5 py-3 rounded text-sm font-medium hover:bg-gray-200 transition-all active:scale-95" href="#">
          Contact us
        </a>
</div>
</nav>

<main className="relative z-10 flex flex-col justify-center min-h-[85vh] px-6 md:px-10 lg:px-12">
<div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-16 md:gap-0">

<div className="w-full md:w-2/3 lg:w-3/4 pt-12 md:pt-0">
<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[0.95] text-white">
            A Trusted Partner that
            <br className="hidden md:block"/>
            keeps up with
            <br className="hidden md:block"/>
            your ambition.
          </h1>
</div>

<div className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-end pb-2 md:pb-4">
<p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
            AI-Powered Operations Partner based in Toronto. We design and build
            tools that supercharge your business growth.
          </p>
</div>
</div>
</main>


    </>
  );
}
