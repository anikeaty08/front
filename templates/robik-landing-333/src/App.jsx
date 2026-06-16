import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  function animateNumber(id, targetValue, duration) {
    const element = document.getElementById(id);
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Calculate current value and format with commas
      const currentValue = Math.floor(progress * targetValue);
      element.innerText = currentValue.toLocaleString();

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }

  // Start the animation: ID, Target Number, Duration in ms (2000 = 2 seconds)
  document.addEventListener('DOMContentLoaded', () => {
    animateNumber('count-up', 18600, 2500);
  });



        // Initialize Icons
        lucide.createIcons();

        // Intersection Observer for Fade-in animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing once visible to run animation only once
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 transition-all duration-300 md:px-12 md:pt-0 md:pb-0 w-full h-0 pt-0 pr-6 pb-0 pl-6">
<nav className="sticky z-50 transition-all duration-500 w-full top-0" id="navbar">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center group cursor-pointer">
<img alt="Brand Logo" className="transition-transform duration-300 group-hover:scale-105 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c027c960-ebe6-4ef7-97bd-1247499c2d50_800w.jpg"/>
</div>
<div className="hidden md:flex gap-12 text-lg font-medium text-gray-800/80 items-center" style={{display: 'flex'}}>
<a className="hover:text-gray-900 transition-colors" href="#">Cómo funciona</a>
<a className="hover:text-gray-900 transition-colors" href="#">Seguridad</a>
<a className="hover:text-gray-900 transition-colors" href="#">Visión</a>
</div>
<button className="hover:bg-gray-800 hover:scale-105 transition-all duration-300 active:scale-95 text-sm font-medium text-white bg-gray-900 rounded-full pt-3 pr-8 pb-3 pl-8 shadow-lg">Conoce más</button>
</div>
</nav>
</nav>

<header className="overflow-hidden bg-center -translate-x-2 md:pl-0 md:pr-0 md:pb-80 md:pt-80 h-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77f6ea12-a46c-43c8-a1fc-871074b4d483_3840w.png)] bg-cover mt-0 mb-0 pt-48 pr-6 pb-32 pl-6 relative translate-y-3">
<div className="z-0 max-w-7xl mr-0 mb-0 ml-0 pt-0 pr-10 pl-20 relative">

<div className="flex flex-col md:flex-row z-10 mt-0 relative translate-y-16 items-start justify-start">

<div className="md:w-1/3 fade-in-section is-visible mb-0 pt-0 pb-0 space-y-8 gap-x-y-6 gap-y-16" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}>
<h2 className="leading-tight md:text-3xl text-3xl font-thin text-gray-900 tracking-tighter font-montserrat text-left mt-200 mr-50 ml-5 pr-50 pl-50">Tu próximo empleado de IA en WhatsApp</h2>
<div className="space-y-3">
<button className="hover:bg-gray-800 transition-all hover:shadow-2xl hover:-translate-y-1 text-sm font-medium text-white bg-gray-900 rounded-full mr-10 ml-5 pt-3 pr-10 pb-3 pl-10 shadow-xl">Conoce más</button>
<p className="uppercase text-xs font-medium tracking-wide opacity-60 pr-10 pl-5">Inicio 2026</p>
</div>
</div>

</div>
<div className="-translate-x-1/2 pointer-events-none select-none z-0 text-center w-full absolute top-0 left-1/2">
</div>
</div>
</header>

<section className="md:pt--20 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-0 pt-0 pb-0 pl-20 gap-x-8 gap-y-8">

<div className="glass-panel flex flex-col fade-in-section hover:scale-[1.02] transition-transform duration-500 is-visible text-center rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 space-y-6 items-center">
<div className="flex bg-center w-20 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3892e23a-c434-4bb7-b1d9-4914a210593e_320w.png?w=800&amp;q=80)] bg-cover rounded-2xl mb-2 shadow-sm items-center justify-center">
</div>
<h3 className="text-2xl font-semibold tracking-tight">The
                Guardian<br/><span className="text-lg font-normal opacity-70">Clinical Diagnostics</span></h3>
<p className="text-lg leading-relaxed opacity-80">
                robi detects fever, assesses pain levels, and dispenses precise medication doses instantly.
            </p>
<div className="mt-auto pt-6 text-sm font-medium opacity-60 uppercase tracking-wider border-t border-gray-900/10 w-full">
                Vitals Monitoring: 24/7
            </div>
</div>

<div className="glass-panel flex flex-col fade-in-section hover:scale-[1.02] transition-transform duration-500 is-visible text-center rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 space-y-6 items-center" style={{transitionDelay: '100ms'}}>
<div className="flex bg-center w-20 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cf90f9d-ad99-4d22-9d68-277089397c2f_320w.png?w=800&amp;q=80)] bg-cover rounded-2xl mb-2 shadow-sm items-center justify-center">
</div>
<h3 className="text-2xl font-semibold tracking-tight">The
                Steward<br/><span className="text-lg font-normal opacity-70">Household Autonomy</span></h3>
<p className="text-lg leading-relaxed opacity-80">
                From folding laundry to organizing playrooms. robi manages the home so you don't have to.
            </p>
<div className="mt-auto pt-6 text-sm font-medium opacity-60 uppercase tracking-wider border-t border-gray-900/10 w-full">
                Articulated Precision: 99.9%
            </div>
</div>

<div className="glass-panel flex flex-col fade-in-section hover:scale-[1.02] transition-transform duration-500 is-visible text-center rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 space-y-6 items-center" style={{transitionDelay: '200ms'}}>
<div className="flex bg-center w-20 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce1daa6a-0269-464a-851b-3789fdf298b6_320w.png)] bg-cover rounded-2xl mb-2 shadow-sm items-center justify-center">
</div>
<h3 className="text-2xl font-semibold tracking-tight">The
                Companion<br/><span className="text-lg font-normal opacity-70">Adaptive EQ</span></h3>
<p className="leading-relaxed text-lg opacity-80">
                Learns your family's humor, teaches lessons, and provides emotional support.
            </p>
<div className="mt-auto pt-6 text-sm font-medium opacity-60 uppercase tracking-wider border-t border-gray-900/10 w-full">
                Language Modules: 50+
            </div>
</div>
</div>
<div className="fade-in-section text-center pt-24 pb-24">
<p className="md:text-4xl text-2xl font-medium text-gray-900 tracking-tight opacity-90 leading-tight mx-auto max-w-3xl">
    It's more than a machine, this yellow package is only for 
  </p>
<h1 className="mt-8 md:text-8xl text-6xl font-black text-gray-900 animate-float drop-shadow-[0_10px_10px_rgba(234,179,8,0.3)]">
    $<span id="count-up">0</span>
</h1>
</div>
<style className="">
  /* Floating animation */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    display: inline-block;
    animation: float 4s ease-in-out infinite;
  }
</style>

</section>

<section className="w-full max-w-7xl mx-auto mb-32 px-6 relative">
<div className="relative rounded-[3rem] overflow-hidden w-full shadow-2xl" style={{aspectRatio: '1950 / 1251'}}>
<img alt="Robot Interior" className="bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f4d48fd-4b64-4978-bbd5-8e354cb8adf4_1600w.png"/>
<div className="absolute top-1/4 left-12 md:left-20 animate-float-slow">
</div>
<div className="absolute bottom-1/4 right-12 md:right-20 animate-float-delayed text-right">
</div>
</div>
</section>
<style className="">
  /* Slow vertical float for "Soft Touch" */
  @keyframes float-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  /* Different timing for "Hard Science" so they don't move in perfect sync */
  @keyframes float-delayed {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(15px); }
  }

  .animate-float-slow {
    animation: float-slow 6s ease-in-out infinite;
  }

  .animate-float-delayed {
    animation: float-delayed 7s ease-in-out infinite;
  }
</style>

<section className="px-6 py-12 max-w-7xl mx-auto mb-32">
<div className="glass-panel p-8 md:p-12 rounded-[3rem] flex flex-col lg:flex-row gap-12 fade-in-section">

<div className="lg:w-1/2 flex flex-col justify-center">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-10 text-gray-900">Product Specifications</h3>
<div className="space-y-6 text-lg">
<div className="flex justify-between items-baseline border-b border-gray-900/10 pb-4">
<span className="font-semibold w-1/3">Exterior</span>
<span className="font-normal opacity-80 w-2/3 text-right">Hypoallergenic "Warm-Touch" Silicone</span>
</div>
<div className="flex justify-between items-baseline border-b border-gray-900/10 pb-4">
<span className="font-semibold w-1/3">Skeleton</span>
<span className="font-normal opacity-80 w-2/3 text-right">Aerospace-Grade Titanium Alloy</span>
</div>
<div className="flex justify-between items-baseline border-b border-gray-900/10 pb-4">
<span className="font-semibold w-1/3">Processing</span>
<span className="font-normal opacity-80 w-2/3 text-right">Neural Engine V4 (Local Processing)</span>
</div>
<div className="flex justify-between items-baseline border-b border-gray-900/10 pb-4">
<span className="font-semibold w-1/3">Battery</span>
<span className="font-normal opacity-80 w-2/3 text-right">48 Hours (Active) / 7 Days (Standby)</span>
</div>
<div className="flex justify-between items-baseline border-b border-gray-900/10 pb-4">
<span className="font-semibold w-1/3">Safety</span>
<span className="font-normal opacity-80 w-2/3 text-right">ISO 13485 Medical Device Certified</span>
</div>
<div className="flex justify-between items-baseline pb-2">
<span className="font-semibold w-1/3">Privacy</span>
<span className="font-normal opacity-80 w-2/3 text-right">Military-Grade Local Encryption</span>
</div>
</div>
</div>

<div className="lg:w-1/2 grid grid-cols-2 gap-6">

<div className="bg-gray-50 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center aspect-square shadow-inner">
<span className="text-5xl font-medium tracking-tight text-gray-900 mb-2">0.02s</span>
<span className="text-lg font-medium text-gray-500">Reaction Time</span>
</div>

<div className="bg-gray-50 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center aspect-square shadow-inner">
<span className="text-5xl font-medium tracking-tight text-gray-900 mb-2">360°</span>
<span className="text-lg font-medium text-gray-500">Active Shield</span>
</div>

<div className="bg-gray-50 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center aspect-square shadow-inner">
<span className="text-5xl font-medium tracking-tight text-gray-900 mb-2">100%</span>
<span className="text-lg font-medium text-gray-500">Data Privacy</span>
</div>

<div className="bg-gray-900 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center aspect-square text-white shadow-xl">
<span className="text-5xl font-medium tracking-tight mb-2">24/7</span>
<span className="text-lg font-medium text-gray-400">Autonomous Power</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col bg-center text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf57e8da-2b0f-4362-a531-8c64b2d6715d_3840w.png)] max-w-7xl bg-cover mr-auto ml-auto pr-6 pb-20 pl-6 relative items-center">

<div className="fade-in-section w-64 h-64 mb-12 relative">

</div>
<div className="fade-in-section max-w-4xl mx-auto">
<p className="md:text-2xl text-xl font-medium text-gray-900 opacity-80 mb-10">
                Limited first-run production. Secure your allocation.
            </p>
<form className="flex flex-col md:flex-row gap-4 w-full max-w-xl mr-auto mb-20 ml-auto items-center justify-center">
<input className="w-full md:w-auto flex-grow px-6 py-4 rounded-full bg-transparent border-2 border-gray-900 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/50 focus:bg-white/10 transition-all text-lg font-medium" placeholder="Enter your email address" type="email"/>
<button className="w-full md:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-xl" type="submit">
                    Join the waitlist
                </button>
</form>
</div>

<footer className="flex flex-col md:flex-row fade-in-section w-full border-gray-900/10 border-t pt-12 items-center justify-between">
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full bg-gray-900/10 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-gray-900/10 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-gray-900/10 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-gray-900/10 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
<div className="flex items-center gap-3">
</div>
<div className="flex gap-10 text-sm font-normal text-gray-800/60">
<a className="hover:text-gray-900" href="#">Privacy Policy</a>
<span>|</span>
<a className="hover:text-gray-900" href="#">Terms of Service</a>
</div>
<div className="md:text-left md:w-auto md:mt-0 text-center w-full mt-4">
<span className="text-[10px] uppercase tracking-widest opacity-60">© 2025 Helios Robotics. All Rights Reserved.</span>
<p className="text-xs text-gray-600">Designed by Allen Dela Cruz</p>
</div>
</footer>
</section>



    </>
  );
}
