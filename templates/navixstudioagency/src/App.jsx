import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Icon Initialization
        lucide.createIcons();

        // Interaction Logic
        function handleLetsDoThis() {
            const landing = document.getElementById('landing-view');
            const contact = document.getElementById('contact-view');
            
            // Simple fade out/in effect simulation
            landing.style.opacity = '0';
            landing.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                landing.classList.add('hidden');
                contact.classList.remove('hidden');
                contact.classList.add('flex');
                
                // Entrance animation
                contact.style.opacity = '0';
                setTimeout(() => {
                    contact.style.transition = 'opacity 0.5s ease';
                    contact.style.opacity = '1';
                }, 50);
            }, 300);
            
            // Scroll to top
            window.scrollTo(0,0);
        }

        function closeContact() {
            const landing = document.getElementById('landing-view');
            const contact = document.getElementById('contact-view');

            contact.style.opacity = '0';
            setTimeout(() => {
                contact.classList.add('hidden');
                contact.classList.remove('flex');
                landing.classList.remove('hidden');
                setTimeout(() => {
                    landing.style.opacity = '1';
                }, 50);
            }, 300);
        }

        // Play Video Logic
        function playVideo(element, videoId) {
            // Remove the overlay content
            element.innerHTML = `
                <iframe 
                    class="w-full h-full rounded-2xl" 
                    src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=0&controls=0&loop=1&playlist=ScMzIvxBSi4" 
                    title="Video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            `;
            // Note: Using a generic open-source blender movie (Agent 327) or Nature video as placeholder
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<div className="relative" id="landing-view">

<nav className="fixed z-50 flex bg-black/50 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0 backdrop-blur-xl items-center justify-between">
<div className="flex group cursor-pointer items-center">NaviX</div>
<div className="hidden md:flex text-sm font-medium text-slate-400 gap-x-8 gap-y-8 items-center">
<a className="transition-colors hover:text-white" href="#">Home</a>
<a className="transition-colors hover:text-white" href="#">Services</a>
<a className="transition-colors hover:text-white" href="#">Work</a>
<a className="transition-colors hover:text-white" href="#">Contact</a>
</div>

<button className="md:hidden text-white" style={{}}>
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<header className="min-h-screen flex flex-col overflow-hidden text-center pt-20 pr-4 pl-4 relative items-center justify-center" style={{maskImage: 'linear-gradient(240deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(240deg, transparent, black 0%, black 100%, transparent)'}}>

<div className="absolute inset-0 hero-spotlight pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent to-transparent via-white/20"></div>
<div className="relative z-10 max-w-5xl mx-auto space-y-8">
<h1 className="leading-[1.1] md:text-7xl lg:text-6xl text-5xl font-bold text-white tracking-tight font-jakarta" style={{maskImage: 'linear-gradient(300deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(300deg, transparent, black 0%, black 100%, transparent)'}}>
                    Navigates Your Brand Story, <br className="hidden md:block"/>
                    Visualises Breakthrough Creative &amp; <span className="text-emerald-400 font-serif">Xelerates Your Growth.</span><br className="hidden md:block"/>
</h1>
<p className="leading-relaxed md:text-2xl text-lg font-medium text-slate-50 max-w-2xl mt-40 mr-auto ml-auto">
                    We’re not just another marketing agency.<br/>
                    We’re the bridge between vibes &amp; value.
                </p>
<div className="pt-8">
<button className="group overflow-hidden hover:shadow-[0_0_60px_-15px_rgba(250,204,21,0.7)] transition-all duration-300 text-lg font-semibold text-black tracking-wide rounded-full pt-4 pr-10 pb-4 pl-10 relative shadow-[0_0_40px_-10px_rgba(250,204,21,0.5)] bg-amber-400" onclick="handleLetsDoThis()">
<span className="relative z-10">LET’S DO THIS</span>

<div className="animate-beam transform origin-left bg-white/40 w-1/2 h-full absolute top-0 right-0 bottom-0 left-0 blur-md -skew-x-12"></div>
</button>
</div>
</div>
</header>

<section className="overflow-hidden pt-24 pb-24 relative">

<div className="absolute inset-0 glitch-bg"></div>
<div className="absolute inset-0 noise-overlay mix-blend-overlay"></div>

<div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-500/20 blur-[100px] rounded-full" style={{}}></div>
<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full" style={{}}></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold text-center mb-20 tracking-tight text-white" style={{}}>Our Recent Masterpieces</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="flex flex-col gap-8 space-y-12 md:translate-y-12">

<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] border shadow-2xl cursor-pointer bg-black/40 border-white/10" onclick="playVideo(this, 'video1')">
<img alt="Fashion Future" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border bg-white/20 border-white/30">
<svg className="lucide lucide-play w-6 h-6 ml-1 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t to-transparent from-black/90">
<h3 className="text-xl font-medium text-white" style={{}}>FUTURE</h3>
<p className="text-sm text-emerald-400" style={{}}>Recommendation for men's shirts</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] border shadow-2xl cursor-pointer bg-black/40 border-white/10" onclick="playVideo(this, 'video2')">
<img alt="Earth Mascot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="default"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border bg-white/20 border-white/30">
<svg className="lucide lucide-play w-6 h-6 ml-1 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center text-center gap-12">
<div className="relative py-12">
<h3 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight drop-shadow-2xl">
                                Forget The Formal
                                Let's Make Something
                                <span className="font-bold text-amber-400" style={{}}>Unignorable</span>
</h3>
</div>

<div className="group relative w-full rounded-2xl overflow-hidden aspect-square border shadow-2xl cursor-pointer bg-black/40 border-white/10" onclick="playVideo(this, 'video3')">
<img alt="Fashion Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border bg-white/20 border-white/30">
<svg className="lucide lucide-play w-6 h-6 ml-1 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t to-transparent from-black/90">
<h3 className="text-xl font-medium text-white" style={{}}>KEAR</h3>
<p className="text-sm text-emerald-400" style={{}}>Brand identity reveal</p>
</div>
</div>
</div>

<div className="flex flex-col gap-8 space-y-12 md:-translate-y-12">

<div className="group relative rounded-2xl overflow-hidden aspect-square border shadow-2xl cursor-pointer bg-black/40 border-white/10" onclick="playVideo(this, 'video4')">
<img alt="Mascot Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-16 h-16 rounded-full backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border bg-white/20 border-white/30">
<svg className="lucide lucide-play w-6 h-6 ml-1 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] border shadow-2xl cursor-pointer bg-black/40 border-white/10" onclick="playVideo(this, 'video5')">
<img alt="Editorial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border bg-white/20 border-white/30">
<svg className="lucide lucide-play w-6 h-6 ml-1 text-white fill-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute top-0 inset-x-0 p-6 text-center">
<h3 className="text-3xl font-serif mix-blend-difference text-sky-800" style={{}}>FUTURE</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-black">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-4xl font-semibold mb-16 tracking-tight text-white" style={{}}>Our Services</h2>
<div className="space-y-4">

<div className="border-white/10 border-t pt-8 pb-12">
<div className="flex cursor-pointer group items-start justify-between">
<h3 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight text-amber-400" style={{}}>UX/UI Design</h3>
<svg className="lucide lucide-arrow-right w-8 h-8 transform rotate-45 group-hover:rotate-0 transition-transform duration-300 text-yellow-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-lg pl-4 border-l text-emerald-300 border-amber-400/30" style={{}}>
<li className="">1. User Experience (UX)</li>
<li className="">2. UX Research</li>
<li className="">3. Wire Framing (Low &amp; High Fidelity)</li>
<li className="">4. Usability Testing</li>
<li className="">5. Prototype Workflow Mapping</li>
<li className="">6. Website UI Design</li>
<li className="">7. Mobile App UI Design</li>
<li className="">8. Dashboard / SaaS UI</li>
<li className="">9. Landing Page Design</li>
</ul>
</div>

<div className="border-t py-8 group transition-colors duration-300 -mx-6 px-6 border-white/10 hover:bg-white/5">
<div className="flex items-center justify-between cursor-pointer">
<h3 className="text-3xl md:text-4xl font-medium group-hover:text-emerald-200 tracking-tight text-white" style={{}}>Branding</h3>
<svg className="lucide lucide-arrow-right w-8 h-8 text-zinc-500 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group transition-colors duration-300 -mx-6 hover:bg-white/5 border-white/10 border-t border-b pt-8 pr-6 pb-8 pl-6">
<div className="flex items-center justify-between cursor-pointer">
<h3 className="text-3xl md:text-4xl font-medium group-hover:text-emerald-200 tracking-tight text-white" style={{}}>Marketing</h3>
<svg className="lucide lucide-arrow-right w-8 h-8 text-zinc-500 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black border-white/5 border-t pt-20 pb-10 relative">
<div className="max-w-6xl mx-auto px-6 text-center mb-24">
<button className="group overflow-hidden hover:shadow-[0_0_80px_-10px_rgba(250,204,21,0.6)] transition-all duration-300 transform hover:scale-105 text-xl font-bold text-black tracking-wide rounded-full pt-5 pr-16 pb-5 pl-16 relative shadow-[0_0_40px_-10px_rgba(250,204,21,0.5)] bg-amber-400" onclick="handleLetsDoThis()">
<span className="relative z-10">LET’S DO THIS</span>
<div className="absolute inset-0 w-1/3 h-full -skew-x-12 blur-md animate-beam transform origin-left bg-white/40"></div>
</button>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t pt-10 border-white/10">
<div className="flex items-center gap-1 mb-6 md:mb-0">
<span className="text-3xl font-bold tracking-tight text-white" style={{}}>Navi</span>
<span className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r to-indigo-500 from-sky-400" style={{}}>X</span>
</div>
<div className="flex gap-10 text-sm text-emerald-500 font-medium" style={{}}>
<a className="transition-colors hover:text-white" href="#">Home</a>
<a className="transition-colors hover:text-white" href="#">About</a>
<a className="transition-colors hover:text-white" href="#">Services</a>
</div>
</div>
</footer>
</div>

<div className="hidden fixed inset-0 z-[100] flex-col items-center justify-center text-center p-6 animate-fade-in bg-emerald-950" id="contact-view" style={{}}>
<button className="absolute top-8 right-8 text-emerald-500 transition-colors hover:text-white" onclick="closeContact()" style={{}}>
<svg className="lucide lucide-x w-8 h-8" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="space-y-4 mb-12">
<div className="inline-block p-4 rounded-full mb-4 bg-amber-400/10" style={{}}>
<svg className="lucide lucide-phone w-12 h-12 text-yellow-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<h2 className="text-sm uppercase tracking-widest text-emerald-500 font-semibold" style={{}}>Call Us Now</h2>
<a className="block text-4xl md:text-6xl font-semibold transition-colors tracking-tight text-white hover:text-amber-400" href="tel:+15550192834" style={{}}>
                +1 (555) 019-2834
            </a>
</div>
<div className="w-24 h-px mx-auto mb-12 bg-white/10"></div>
<div className="space-y-4">
<div className="inline-block p-4 rounded-full bg-sky-500/10 mb-4" style={{}}>
<svg className="lucide lucide-mail w-12 h-12 text-blue-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<h2 className="text-sm uppercase tracking-widest text-emerald-500 font-semibold" style={{}}>Drop an Email</h2>
<a className="block text-3xl md:text-5xl font-semibold transition-colors tracking-tight text-white hover:text-sky-400" href="mailto:hello@navix.agency" style={{}}>
                hello@navix.agency
            </a>
</div>
</div>


    </>
  );
}
