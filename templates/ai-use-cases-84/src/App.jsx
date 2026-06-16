import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
925: '#101010',
950: '#0a0a0a',
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-xl font-medium tracking-tight text-white group-hover:opacity-80 transition-opacity">Farness<span className="text-neutral-500 align-top text-xs ml-0.5">®</span></span>
</a>

<nav className="hidden md:flex items-center gap-1 bg-neutral-900/80 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
<a className="px-4 py-1.5 text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Home</a>
<a className="px-4 py-1.5 text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Technologies</a>
<a className="px-4 py-1.5 text-sm font-medium text-white bg-neutral-800 rounded-full shadow-inner border border-white/5" href="#">Use cases</a>
</nav>
<a className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors" href="#">
                Contact
            </a>
</div>
</header>
<main className="relative pt-32 pb-20 px-6 flex-grow">

<div className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none -z-10">
<div className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[30vw] h-[30vw] bg-indigo-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
</div>

<div className="max-w-7xl mx-auto mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-xs font-medium text-neutral-400">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                Selection Gateway
            </div>
</div>

<section className="max-w-7xl mx-auto mb-16">
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white gradient-text">
                Use Cases
            </h1>
</section>

<section className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<a className="group relative block h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 isolate" href="/use-cases/drone">

<div className="absolute inset-0 z-0">
<img alt="Industrial Drone" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[20%]" src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&amp;w=2067&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
</div>

<div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-10">
<div className="mb-auto">
<div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white/20 transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="plane"></i>
</div>
</div>
<h4 className="text-3xl font-medium text-white mb-4 tracking-tight">Autonomous Drones</h4>
<div className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                            Explore More 
                            <i className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>

<div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
</a>

<a className="group relative block h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 isolate" href="/use-cases/lidar">

<div className="absolute inset-0 z-0">
<img alt="LiDAR Point Cloud" className="w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-screen" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>

<div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-10">
<div className="mb-auto">
<div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white/20 transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="scan"></i>
</div>
</div>
<h4 className="text-3xl font-medium text-white mb-4 tracking-tight">LiDAR</h4>
<div className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                            Explore More 
                            <i className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>

<div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
</a>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black pt-20 pb-10 px-6 overflow-hidden mt-auto">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
<div>
<h3 className="text-2xl font-medium text-white mb-6">Ready to Deploy<br/>Autonomous Intelligence?</h3>
<a className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors" href="#">
                        Request a Demo
                    </a>
</div>
<div className="flex flex-col md:items-end justify-between">
<div className="flex gap-6 mb-8 md:mb-0">

<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>

<div className="relative border-t border-white/5 pt-10">
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 mb-12 gap-4">
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
</div>
<div>
                        © 2024 Farness . All rights reserved.
                    </div>
</div>
<div className="w-full text-center md:text-left select-none pointer-events-none">
<span className="block text-[15vw] leading-none tracking-tighter font-semibold text-white/90">
                        Farness<span className="text-2xl align-top ml-2 relative top-8 md:top-16">©</span>
</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
