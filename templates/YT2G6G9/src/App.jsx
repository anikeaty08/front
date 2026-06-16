import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();
    
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = menuBtn.querySelector('i');
      icon.setAttribute('data-lucide', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
      lucide.createIcons();
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in, .animate-fade-in-delay-1, .animate-fade-in-delay-2, .animate-fade-in-delay-3, .animate-fade-in-delay-4, .animate-fade-in-delay-5').forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10 hue-rotate-90"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/claritystream-a72K0KUwFoZV82QBzvu52Kai" width="100%"></iframe></div>

<header className="fixed top-0 left-0 w-full backdrop-blur-md z-40 border-b bg-black/80 border-gray-800/60" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
<a className="flex items-center gap-2 text-sm font-semibold transition-colors text-gray-100 hover:text-blue-400 font-sans" href="#" style={{}}>
        
        NeuroLitx
      </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="transition-colors hover:text-blue-400 font-sans" href="#" style={{}}>About</a>
<a className="relative transition-colors hover:text-blue-400 text-blue-400 font-sans" href="#" style={{}}>
          Services
          
        </a>
<a className="transition-colors hover:text-blue-400 font-sans" href="#" style={{}}>Research Labs</a>
<a className="transition-colors hover:text-blue-400 font-sans" href="#" style={{}}>Clinical Trials</a>
</nav>
<button className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-900" id="menuBtn" style={{}}>
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<a className="hidden md:inline-flex items-center gap-2 rounded-lg text-xs font-medium px-4 py-2.5 transition-colors shadow-sm bg-blue-400 text-black hover:bg-blue-300 font-sans" href="#" style={{}}>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
        Book Discovery Session
      </a>
</div>

<div className="md:hidden hidden border-t backdrop-blur-md border-gray-800 bg-black/95" id="mobileMenu" style={{}}>
<nav className="px-6 py-4 flex flex-col gap-4 text-sm font-medium">
<a className="transition-colors hover:text-blue-400 font-sans" href="#" style={{}}>About</a>
<a className="flex items-center gap-2 transition-colors hover:text-blue-400 text-blue-400 font-sans" href="#" style={{}}>
          Services <span className="text-[10px] px-1 rounded-full bg-rose-900 text-rose-400 font-sans" style={{}}>4</span>
</a>
<a className="transition-colors hover:text-blue-400 font-sans" href="#" style={{}}>Research Labs</a>
<a className="transition-colors hover:text-blue-400 font-sans" href="#" style={{}}>Clinical Trials</a>
<a className="inline-flex items-center gap-2 rounded-lg text-xs font-medium px-4 py-2.5 w-max transition-colors shadow-sm bg-blue-400 text-black hover:bg-blue-300 font-sans" href="#" style={{}}>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          Book Discovery Session
        </a>
</nav>
</div>
</header>

<main className="pt-28 pb-20">
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl p-8 sm:p-12 lg:p-20 overflow-hidden relative gradient-mesh bg-gray-100 text-black" style={{}}>

<div className="absolute inset-0 pointer-events-none opacity-30">
<div className="grid grid-cols-12 h-full">
<span className="col-span-1 border-r border-gray-300/40" style={{}}></span>
<span className="col-span-1 border-r border-gray-300/40" style={{}}></span>
<span className="col-span-1 border-r border-gray-300/40" style={{}}></span>
<span className="col-span-1 border-r border-gray-300/40" style={{}}></span>
<span className="col-span-1 border-r border-gray-300/40" style={{}}></span>
<span className="col-span-1 border-r border-gray-300/40" style={{}}></span>
<span className="col-span-1 border-r border-gray-300/40" style={{}}></span>
<span className="col-span-1 border-r border-gray-300/40" style={{}}></span>
<span className="col-span-1 border-r border-gray-300/40" style={{}}></span>
<span className="col-span-1 border-r border-gray-300/40" style={{}}></span>
<span className="col-span-1 border-r border-gray-300/40" style={{}}></span>
<span className="col-span-1"></span>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-10 relative">
<div className="lg:col-span-7 animate-fade-in" style={{animationPlayState: 'running'}}>
<div className="flex items-center gap-3 mb-6">
<span className="uppercase tracking-widest text-xs font-medium text-blue-700 font-sans" style={{}}>Our Services</span>
<div className="h-px flex-1 bg-gradient-to-r to-transparent from-blue-600/50" style={{}}></div>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-black font-manrope font-medium" style={{}}>
              Redefining Memory 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 font-manrope font-medium" style={{}}>Reconstruction</span>
</h1>
<p className="text-lg mt-6 leading-relaxed text-gray-700 font-sans" style={{}}>
              Advanced neurotechnology meets compassionate care
            </p>
</div>
<div className="lg:col-span-5 lg:pl-10 animate-fade-in-delay-1" style={{animationPlayState: 'running'}}>
<div className="backdrop-blur-sm rounded-2xl p-6 border mt-8 lg:mt-16 bg-black/5 border-black/10" style={{}}>
<p className="text-sm leading-relaxed text-gray-700 font-sans" style={{}}>
                We combine cutting-edge AI-assisted memory reconstruction with ethical protocols to help you safely navigate, reframe, and reintegrate traumatic memories in a controlled, therapeutic environment.
              </p>
<div className="flex items-center gap-4 mt-6 pt-6 border-t border-black/10">
<div className="text-center">
<div className="text-2xl text-black font-manrope font-medium" style={{}}>98%</div>
<div className="text-xs text-gray-600 font-sans" style={{}}>Success Rate</div>
</div>
<div className="text-center">
<div className="text-2xl text-black font-manrope font-medium" style={{}}>2.4k+</div>
<div className="text-xs text-gray-600 font-sans" style={{}}>Sessions</div>
</div>
<div className="text-center">
<div className="text-2xl text-black font-manrope font-medium" style={{}}>ISO</div>
<div className="text-xs text-gray-600 font-sans" style={{}}>Certified</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group relative rounded-2xl overflow-hidden bg-gradient-to-br p-6 flex flex-col justify-between min-h-[380px] hover:shadow-xl transition-all duration-300 animate-fade-in-delay-2 border from-purple-950 via-blue-950 to-purple-950 border-blue-900" style={{animationPlayState: 'running'}}>
<div className="">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors bg-blue-900" style={{}}>
<svg className="lucide lucide-brain w-6 h-6 text-blue-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<h3 className="font-semibold text-lg mb-2 text-gray-100 font-sans" style={{}}>Guided Memory Reconstruction</h3>
<p className="text-sm leading-relaxed mb-4 text-gray-400 font-sans" style={{}}>Navigate your inner landscape with AI-assisted simulations and neural pathway mapping.</p>
<ul className="text-xs text-gray-500 space-y-1" style={{}}>
<li className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-check w-3 h-3 text-purple-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Real-time neural feedback
                </li>
<li className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-check w-3 h-3 text-purple-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Personalized simulation environments
                </li>
<li className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-check w-3 h-3 text-purple-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Progress tracking &amp; analytics
                </li>
</ul>
</div>
<div className="flex items-center justify-between mt-6">
<span className="text-sm font-medium text-gray-600 font-sans" style={{}}>/01</span>
<span className="text-sm font-medium text-blue-400 font-sans" style={{}}>12 week program</span>
</div>
</article>

<article className="group relative rounded-2xl overflow-hidden min-h-[380px] hover:shadow-xl transition-all duration-300 animate-fade-in-delay-3" style={{animationPlayState: 'running'}}>
<img alt="Emotional Reintegration Therapy" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1669295384050-a1d4357bd1d7?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 via-gray-100/40 to-gray-100/20" style={{}}></div>
<div className="relative z-10 flex flex-col justify-between h-full p-6">
<div className="flex items-center justify-between">
<div className="w-10 h-10 backdrop-blur-sm rounded-lg flex items-center justify-center bg-black/20">
<svg className="lucide lucide-heart w-5 h-5 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<span className="text-sm font-medium text-black/60 font-sans">/02</span>
</div>
<div>
<h3 className="font-semibold text-lg mb-2 text-black font-sans" style={{}}>Emotional Reintegration Therapy</h3>
<p className="text-sm mb-4 text-black/80 font-sans">Comprehensive emotional processing with biometric monitoring and adaptive therapy protocols.</p>
<div className="flex items-center gap-2 text-xs text-black/60 font-sans">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  8-16 sessions
                </div>
</div>
</div>
</article>

<article className="group relative rounded-2xl overflow-hidden bg-gradient-to-br p-6 flex flex-col justify-between min-h-[380px] hover:shadow-xl transition-all duration-300 animate-fade-in-delay-4 border from-pink-950 via-teal-950 to-blue-950 border-pink-900" style={{animationPlayState: 'running'}}>
<div className="">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors bg-pink-900" style={{}}>
<svg className="lucide lucide-shield-check w-6 h-6 text-pink-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="font-semibold text-lg mb-2 text-gray-100 font-sans" style={{}}>Cognitive Integrity Protocols</h3>
<p className="text-sm leading-relaxed mb-4 text-gray-400 font-sans" style={{}}>Multi-layered safety frameworks with continuous monitoring and ethical oversight.</p>
<ul className="text-xs text-gray-500 space-y-1" style={{}}>
<li className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-check w-3 h-3 text-purple-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  24/7 neural monitoring
                </li>
<li className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-check w-3 h-3 text-purple-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Ethical AI safeguards
                </li>
<li className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-check w-3 h-3 text-purple-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Emergency protocols
                </li>
</ul>
</div>
<div className="flex items-center justify-between mt-6">
<span className="text-sm font-medium text-gray-600 font-sans" style={{}}>/03</span>
<span className="text-sm font-medium text-pink-400 font-sans" style={{}}>FDA approved</span>
</div>
</article>

<article className="group relative rounded-2xl overflow-hidden min-h-[380px] hover:shadow-xl transition-all duration-300 animate-fade-in-delay-5" style={{animationPlayState: 'running'}}>
<img alt="Personalized Journey Mapping" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1545431613-51ec097943c6?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 via-gray-100/40 to-gray-100/20" style={{}}></div>
<div className="relative z-10 flex flex-col justify-between h-full p-6">
<div className="flex items-center justify-between">
<div className="w-10 h-10 backdrop-blur-sm rounded-lg flex items-center justify-center bg-black/20">
<svg className="lucide lucide-map w-5 h-5 text-black" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<span className="text-sm font-medium text-black/60 font-sans">/04</span>
</div>
<div>
<h3 className="font-semibold text-lg mb-2 text-black font-sans" style={{}}>Personalized Journey Mapping</h3>
<p className="text-sm mb-4 text-black/80 font-sans">Custom treatment pathways based on your unique neural patterns and therapeutic goals.</p>
<div className="flex items-center gap-2 text-xs text-black/60 font-sans">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  1:1 specialist support
                </div>
</div>
</div>
</article>
</div>

<div className="mt-16 pt-16 border-t border-black/10">
<div className="text-center">
<h2 className="text-2xl mb-4 text-black font-manrope font-medium" style={{}}>Ready to Begin Your Journey?</h2>
<p className="text-sm mb-8 max-w-2xl mx-auto text-gray-700 font-sans" style={{}}>
              Schedule a confidential consultation with our specialists to explore how our services can help you reclaim your narrative.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 font-medium px-6 py-3 rounded-lg transition-colors bg-blue-400 hover:bg-blue-300 text-black font-sans" href="#" style={{}}>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Book Free Consultation
              </a>
<a className="inline-flex items-center gap-2 font-medium px-6 py-3 rounded-lg transition-colors border bg-black/10 hover:bg-black/20 text-black border-black/20 font-sans" href="#" style={{}}>
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                Download Brochure
              </a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t py-8 text-xs text-gray-500 border-gray-800" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-6">
<span className="font-medium font-sans">NEUROLITE SERVICES</span>
<span className="text-gray-700 font-sans" style={{}}>|</span>
<span className="font-sans">Advanced Memory Reconstruction</span>
</div>
<div className="flex items-center gap-6">
<span className="font-sans">DR. ELENA VASQUEZ, PhD</span>
<span className="text-gray-700 font-sans" style={{}}>|</span>
<a className="transition-colors hover:text-blue-400 font-sans" href="https://neurolite.com" style={{}} target="_blank">NEUROLITE.COM</a>
</div>
</div>
<div className="mt-6 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4 border-gray-800 text-gray-600" style={{}}>
<div className="flex items-center gap-4">
<span className="font-sans">© 2024 NeuroLitx Inc.</span>
<a className="transition-colors hover:text-blue-400 font-sans" href="#" style={{}}>Privacy Policy</a>
<a className="transition-colors hover:text-blue-400 font-sans" href="#" style={{}}>Terms of Service</a>
</div>
<div className="flex items-center gap-4">
<span className="font-sans">Licensed in CA, NY, TX</span>
<span className="text-gray-700 font-sans" style={{}}>|</span>
<span className="font-sans">FDA Breakthrough Device</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
