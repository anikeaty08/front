import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="md:px-12 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] gap-4 text-base tracking-wide w-full pt-8 pr-6 pb-8 pl-6 items-start">

<div className="flex items-start justify-start">
<svg className="fill-current w-[40px] h-[40px] text-neutral-50" data-icon-replaced="true" strokeWidth="2" style={{width: '40px', height: '40px'}} viewbox="0 0 24 24">
<path className="" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5 7.51-3.22-7.52-3.22 3.22 3.22z"></path>
</svg>
</div>

<div className="hidden md:flex flex-row gap-20 lg:gap-32 font-normal text-gray-400 justify-center">
<div className="flex flex-col gap-1 hover:text-white transition-colors cursor-pointer">
<span className="">Season</span>
<span className="">Schedule</span>
</div>
<div className="flex flex-col gap-1 hover:text-white transition-colors cursor-pointer text-center gap-x-1 gap-y-1">
<span className="">Constructors</span>
<span className="">Engineering</span>
</div>
<div className="flex flex-col gap-1 hover:text-white transition-colors cursor-pointer text-right">
<span className="">Standings</span>
<span className="">Telemetry</span>
</div>
</div>

<div className="flex items-start justify-end">
<div className="relative group cursor-pointer border border-white/20 rounded p-1.5 hover:border-white transition-colors">
<i className="w-5 h-5 text-white" data-lucide="shopping-bag"></i>
<span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] text-black font-semibold">0</span>
</div>
</div>

<div className="md:hidden col-span-2 flex justify-center gap-8 text-sm text-gray-400 mt-4">
<a href="#">Season</a>
<a href="#">Constructors</a>
<a href="#">Standings</a>
</div>
</header>

<main className="flex-grow flex flex-col w-full pt-10 pr-4 pb-20 pl-4 items-center justify-center">

<div className="flex flex-col mb-6 items-center">
<h2 className="md:text-2xl flex items-start gap-1 text-xl font-normal text-white">
                Formula One<span className="text-xs font-medium align-top -mt-1 opacity-70">F1</span>
</h2>
</div>

<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-semibold text-white tracking-tighter text-center max-w-5xl mb-12">
            Advanced Aerodynamic Design
        </h1>

<div className="aspect-video flex w-full max-w-5xl mr-auto mb-2 ml-auto relative items-center justify-center">

<div className="blur-[90px] pointer-events-none bg-blue-600/20 opacity-40 rounded-full absolute top-0 right-0 bottom-0 left-0 scale-75"></div>
<video autoplay="" className="mix-blend-screen w-full h-full object-cover rounded-2xl relative shadow-2xl" loop="" muted="" playsinline="" poster="">
<source className="" src="https://d8j0ntlcm91z4.cloudfront.net/user_3AWq6bQApjMrjPHidrbQNUTc3QJ/hf_20260305_143618_8d5daafd-b5e9-4aa3-876a-82405016c615.mp4" type="video/mp4"/>
</video>
</div>

<div className="flex flex-col gap-5 items-center">
<button className="bg-white hover:bg-neutral-200 text-black text-lg md:text-xl font-medium py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                Start Your Engine
            </button>
<p className="text-gray-500 text-base md:text-lg font-normal tracking-wide">
                Live in 03-05 seconds
            </p>
</div>
</main>


    </>
  );
}
