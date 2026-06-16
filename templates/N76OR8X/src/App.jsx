import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Directional Flare Interactivity
    const flare = document.querySelector('.directional-flare');
    document.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const maxTilt = 10;
      const dx = (e.clientX - centerX) / centerX;
      const dy = (e.clientY - centerY) / centerY;
      const rotateX = dy * maxTilt;
      const rotateY = -dx * maxTilt;
      const scale = 1 + Math.sqrt(dx * dx + dy * dy) * 0.1;
      flare.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const posX = 50 + dx * 50;
      const posY = 50 + dy * 50;
      flare.style.setProperty("--shine-x", `${posX}%`);
      flare.style.setProperty("--shine-y", `${posY}%`);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center border-b border-white/5 backdrop-blur-md shadow-[0_0_10px_rgba(67,199,255,0.09)]">
<div className="font-extrabold text-xl tracking-wider flex items-center gap-2" style={{color: '#f6f7fb'}}>
<span>TrackAI</span>
</div>
<nav className="flex gap-8 items-center mr-20 font-inter">
<a className="relative uppercase font-medium text-xs tracking-wide text-white/80 transition hover:text-cyan-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-green-400 after:opacity-0 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:opacity-100 hover:after:scale-x-100" href="#">Dashboard</a>
<a className="relative uppercase font-medium text-xs tracking-wide text-white/80 transition hover:text-cyan-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-green-400 after:opacity-0 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:opacity-100 hover:after:scale-x-100" href="#">Subscriptions</a>
<a className="relative uppercase font-medium text-xs tracking-wide text-white/80 transition hover:text-cyan-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-green-400 after:opacity-0 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:opacity-100 hover:after:scale-x-100" href="#">Bills</a>
<a className="relative uppercase font-medium text-xs tracking-wide text-white/80 transition hover:text-cyan-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-green-400 after:opacity-0 after:scale-x-0 after:origin-left after:transition-all after:duration-300 hover:after:opacity-100 hover:after:scale-x-100" href="#">Alerts</a>
<a className="ml-4 px-6 py-2 rounded-full border-2 border-white/25 bg-gradient-to-r from-transparent via-cyan-400 to-transparent bg-[length:200%_100%] bg-[position:-200%_0] shadow-lg text-xs font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-[position:100%_0]" href="#">Sign In</a>
</nav>
</header>

<section className="relative flex items-center justify-center min-h-screen w-screen text-center overflow-hidden">

<div className="hero-gradient-bg hero-bg-animate"></div>
<div className="noise"></div>
<div className="directional-flare"></div>
<div className="flare blue"></div>
<div className="flare green"></div>
<div className="flare white"></div>
<div className="relative z-10 w-full flex flex-col-reverse sm:flex-row items-center justify-center gap-12 max-w-6xl hero-content mx-auto px-8 sm:px-16 lg:px-24 py-16">

<div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start sm:text-left text-center">
<h1 className="sm:text-6xl text-3xl font-extrabold mb-4 leading-tight drop-shadow-[0_2px_18px_rgba(67,199,255,0.17)]" style={{fontFamily: '\'Sora\',sans-serif', color: '#fff'}}>
<span className="headline-mask">
<span className="hero-headline-part headline-delay-1" style={{display: 'inline-block'}}>Smarter </span>
</span>
<span className="headline-mask">
<span className="hero-headline-part headline-delay-2" style={{display: 'inline-block'}}>Control </span>
</span>
<span className="headline-mask">
<span className="hero-headline-part headline-delay-3" style={{display: 'inline-block'}}>Over Your Spending</span>
</span>
</h1>
<p className="text-lg font-medium text-white/70 font-inter mb-8 hero-subheadline">
          Manage every subscription and bill with real-time alerts, smart tracking, and easy cancellations.
        </p>
<a className="inline-block mt-4 relative px-8 py-3 rounded-full uppercase font-semibold tracking-wide text-white text-base shadow-lg border border-white/30 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent hover:from-transparent hover:to-green-300/90 hover:via-cyan-300/80 transition-all duration-300 overflow-hidden font-inter hero-cta" href="#">
<span className="relative z-10">Start for free</span>
<span className="absolute inset-0 rounded-full pointer-events-none border-2 border-white/20 animate-pulse opacity-30"></span>
</a>
</div>

<div className="w-full sm:w-1/2 flex justify-center items-center hero-img relative hero-phone-animate">
<div className="relative w-[350px] h-[720px] bg-[#23243a] rounded-[2.5rem] shadow-2xl border-8 border-[#181926] flex flex-col items-center overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#181926] rounded-b-3xl z-30"></div>
<div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-40">
<span className="block w-14 h-1 bg-gray-700 rounded-full"></span>
<span className="block w-2 h-2 bg-gray-600 rounded-full"></span>
</div>
<div className="flex-1 w-full overflow-y-auto pt-12 pb-8 px-4 bg-[#181926]">
<section className="flex flex-col items-center w-full">
<div className="mb-8 text-center w-full">
<h2 className="text-2xl font-extrabold text-[#e6e7ee] mb-2">Our Features</h2>
<p className="text-base text-gray-400">Discover how our platform makes file uploads seamless, reliable, and user-friendly. Explore our key features designed to enhance your workflow.</p>
</div>
<div className="flex flex-col space-y-8 w-full">

<div className="relative w-full min-h-[16rem] rounded-xl shadow-xl bg-gradient-to-br from-[#00458fcc] via-[#23243a] to-[#181926] opacity-95 hover:opacity-100 transition-opacity duration-200 flex flex-col">
<div className="absolute top-0 right-0 p-3">
<svg className="w-5 h-5 text-[#36384c]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="flex-1 pt-6 pb-3 px-6 flex flex-col items-center text-center">
<svg className="w-12 h-12 text-[#6ea8ff] mb-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" fill-rule="evenodd"></path>
</svg>
<h3 className="text-white font-semibold text-lg mb-1">Fast Uploads</h3>
<p className="text-gray-300 text-sm mb-3">Upload your files in seconds. Our optimized servers ensure your upload completes quickly and efficiently.</p>
<div className="w-full mt-auto">
<span className="text-gray-400 font-semibold text-xs block mb-1">68% Complete</span>
<div className="relative w-full h-1 bg-[#36384c] rounded-full overflow-hidden mb-1">
<div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#2957b9] via-[#4967d9] to-[#6ea8ff]" style={{width: '68%'}}></div>
</div>
</div>
</div>
</div>

<div className="relative w-full min-h-[16rem] rounded-xl shadow-xl bg-gradient-to-br from-[#107667ed] via-[#23243a] to-[#181926] opacity-95 hover:opacity-100 transition-opacity duration-200 flex flex-col">
<div className="absolute top-0 right-0 p-3">
<svg className="w-5 h-5 text-[#36384c]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="flex-1 pt-6 pb-3 px-6 flex flex-col items-center text-center">
<svg className="w-12 h-12 text-[#3eeab2] mb-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" fill-rule="evenodd"></path>
</svg>
<h3 className="text-white font-semibold text-lg mb-1">Easy Sharing</h3>
<p className="text-gray-300 text-sm mb-3">Once your file is uploaded, share it instantly with a secure link. No hassle, just copy and go!</p>
<div className="w-full flex flex-col items-center gap-2 mt-auto">
<a className="hover:bg-[#3eeab2] hover:text-[#181926] transition-colors text-xs text-white bg-[#23243a] rounded px-5 py-1.5" href="#">Copy Link</a>
<a className="bg-[#23243a] text-white rounded px-5 py-1.5 text-xs hover:bg-[#a3ffcb] hover:text-[#181926] transition-colors" href="#">Done</a>
</div>
</div>
</div>

<div className="relative w-full min-h-[16rem] rounded-xl shadow-xl bg-gradient-to-br from-[#a63d2acc] via-[#23243a] to-[#181926] opacity-95 hover:opacity-100 transition-opacity duration-200 flex flex-col">
<div className="absolute top-0 right-0 p-3">
<svg className="w-5 h-5 text-[#36384c]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="flex-1 pt-6 pb-3 px-6 flex flex-col items-center text-center">
<svg className="w-12 h-12 text-[#fe8cb8] mb-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" fill-rule="evenodd"></path>
</svg>
<h3 className="text-white font-semibold text-lg mb-1">Reliable &amp; Safe</h3>
<p className="text-gray-300 text-sm mb-3">Encountered an issue? Our system ensures your files are safe and you can easily retry the upload.</p>
<div className="w-full flex flex-col items-center gap-2 mt-auto">
<a className="bg-[#23243a] text-white rounded px-5 py-1.5 text-xs hover:bg-[#fe8cb8] hover:text-[#181926] transition-colors" href="#">Retry</a>
<a className="bg-[#23243a] text-white rounded px-5 py-1.5 text-xs hover:bg-[#ff6d57] hover:text-[#181926] transition-colors" href="#">Cancel</a>
</div>
</div>
</div>
</div>
</section>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-600 rounded-full"></div>
</div>
</div>
</div>
</section>


    </>
  );
}
