import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<header className="flex justify-between items-center p-6 md:p-10 z-20 w-full max-w-[1800px] mx-auto">
<div className="border border-zinc-200 px-3 py-1 font-medium text-sm tracking-wide flex items-start uppercase">
            Adspace<sup className="text-xs ml-0.5 mt-0.5">®</sup>
</div>
<div className="text-zinc-500 text-sm uppercase tracking-widest font-medium">
            Afterglow Design Agency
        </div>
</header>

<main className="flex-grow flex flex-col z-10 px-6 md:px-10 max-w-[1800px] mx-auto w-full">

<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight uppercase text-zinc-100 mt-8 md:mt-16 leading-[1.05] max-w-6xl">
            Adspace is a full-service strategy, design and 
            <i className="inline text-[#8cd93a] w-8 h-8 md:w-14 md:h-14 stroke-[1.5] -mt-2 mx-1 md:mx-2" data-lucide="sparkle"></i> 
            digital marketing agency
        </h1>

<div className="relative w-full flex justify-center items-center mt-24 mb-24 md:mb-40 min-h-[40vh] md:min-h-[60vh]">

<div className="absolute w-[80%] md:w-[60%] aspect-square bg-[#3a7021]/30 blur-[100px] md:blur-[180px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>

<div className="relative z-10 w-full max-w-5xl aspect-[4/3] md:aspect-[16/10] bg-gradient-to-b from-zinc-900 to-black rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-[#8cd93a]/10"></div>
<span className="z-20 text-lg md:text-xl uppercase tracking-[0.2em] font-medium text-zinc-600 group-hover:text-[#8cd93a] transition-colors duration-500">Interactive 3D Render Placeholder</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 w-full pb-20">

<div className="flex flex-col space-y-6 w-full max-w-2xl">
<div className="flex justify-between items-end border-b border-zinc-800/80 pb-4">
<span className="text-zinc-500 text-base font-normal">Client</span>
<span className="text-zinc-300 text-base font-medium">Adspace agency</span>
</div>
<div className="flex justify-between items-end border-b border-zinc-800/80 pb-4">
<span className="text-zinc-500 text-base font-normal">Services</span>
<span className="text-zinc-300 text-base font-medium">Website design, Brand Identity</span>
</div>
<div className="flex justify-between items-end border-b border-zinc-800/80 pb-4">
<span className="text-zinc-500 text-base font-normal">Year</span>
<span className="text-zinc-300 text-base font-medium">2025</span>
</div>
</div>

<div className="flex flex-col w-full max-w-2xl">
<h3 className="text-zinc-500 uppercase text-base font-medium mb-6 tracking-wide">About the project</h3>
<p className="text-zinc-400 text-lg leading-relaxed font-normal">
                    Adspace® is a full-service web design and digital marketing agency that helps businesses strategize, advertise, optimize, convert, and grow. Our task was to create a website and identity that reflect this mission — combining professionalism with a bold, creative edge.
                </p>
</div>
</div>
</main>


    </>
  );
}
